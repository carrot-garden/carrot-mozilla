
function classFormCopySent () {
	
	var args = {
		ds: null,
		valid : false,
		validate : function (){},
		collapseXul : [],
		readonlyXul : [],
	};

	var propertyArray = [  ];

	function init(){
		if ( window.arguments ) {
			args = window.arguments[0]; //	
			
			var accountsTree = document.getElementById("accountsTree");
			accountsTree.database.AddDataSource( args.ds.getRawDataSource() );
			accountsTree.builder.rebuild();
			
		} else {
			alert("missing arguments");
			throw 'missing arguments';
			return;
		}
	}
	function copyArgsToXul( property ){
		document.getElementById( property ).value = args[ property ];
	}
	function copyXulToArgs( property ){
		args[ property ] = document.getElementById( property ).value;
	}
	function collapseXulById( elementId ){
		var element = document.getElementById( elementId );
		element.setAttribute( 'collapsed', 'true' );
	}
	function readonlyXulById( elementId ){
		var element = document.getElementById( elementId );
		element.setAttribute( 'readonly', 'true' );
	}
	this.loadForm = function loadForm() 	{		
		init();
		args.collapseXul.forEach( collapseXulById );
		args.readonlyXul.forEach( readonlyXulById );
		propertyArray.forEach( copyArgsToXul );
		args.valid = false;
		this.updateForm();
	}
	this.updateForm = function updateForm () {	
		propertyArray.forEach( copyXulToArgs );
		args.validate( args );
		propertyArray.forEach( copyArgsToXul );
		args.valid = false;
	}
	this.makeWork = function makeWork()	{
		args.valid = true;
		window.close();
	}
	this.skipForm = function skipForm () {
		args.valid = false;
		window.close();
	}
	
	var viewMemory = null; 
	var viewBasic = 'viewbasic';
	var viewAdvanced = 'viewadvanced';
	
	function toggle( viewType ) {
		var list = document.getElementsByTagName( "treecol" );
		for( var k = 0; k < list.length; k++ ){
			var element = list[k];
			element.setAttribute( 'hidden', 'true' );
		}
		var list = document.getElementsByAttribute( viewType, "true" );
		for( var k = 0; k < list.length; k++ ){
			var element = list[k];
			element.setAttribute( 'hidden', 'false' );
		}
	}
	this.toggleView = function toggleView(){
		if( viewMemory == null ){
			viewMemory = viewBasic;
			toggle( viewBasic );
			return;
		}
		if( viewMemory == viewAdvanced ){
			viewMemory = viewBasic;
			toggle( viewBasic );
		} else {
			viewMemory = viewAdvanced;
			toggle( viewAdvanced );
		}
	}

	//	fires when selection is changed	
	this.onTreeSelect = function onTreeSelect( event, tree ){
		carrotLog.report( event.type );
	}
	//	fires when any key is pressed
	this.onTreeKeyPress = function onTreeKeyPress( event, tree ){
		carrotLog.report( event.type );
	}
	//	fires when Double Click is detected
	this.onTreeDoubleClick = function onTreeDoubleClick( event, tree ){
		carrotLog.report( event.type );
	}
	//	fires when any click ( Single or Double) is detected
	this.dispatchTreeEvent = function dispatchTreeEvent( event, tree ) {

		carrotLog.report( event.type );
	
		if ( ! tree ) { throw( "Could not find a tree" );	}
		
		var box  = tree.boxObject;
		
		if ( ! box ) { throw( "Unable to get boxObject" ); }
		
		//	http://www.xulplanet.com/tutorials/xultu/treeboxobject.html
		box = box.QueryInterface(Components.interfaces.nsITreeBoxObject);
		//	http://www.xulplanet.com/references/objref/TreeBoxObject.html#method_getCellAt
		//	void getCellAt ( PRInt32 x , PRInt32 y , out PRInt32 row , out TreeColumn col , out ACString childElt )
		//	childElt is the pseudoelement hit: this can have values of "cell", "twisty", "image", and "text".
		var row = {}, column = {}, part = {};	//	'out' parameters must be objects
		//	http://developer.mozilla.org/en/docs/DOM:event.clientX
		box.getCellAt( event.clientX, event.clientY, row, column, part );
		carrotLog.report( part.value );
		
		var treecol;  //	trace from cell col to tree col header
		treecol =  document.getElementById( column.value.id );
		
		//	specific event handler for this column
		//	comes from something like this:
		//	oncellclick="windowEvents.cellClick( cell, 'fccEnabled' );"
		//	oncellclick="windowEvents.cellClick( cell, 'fccCurrentEnabled' );"
		var eventHandler = treecol.getAttribute( "oncell" + event.type );	
		
		if ( ! eventHandler ) return false;	//	noop when no handler is defined
		
		var cell = {	//	this object is available for 'eval ( eventHandler )' execution context 
			tree: tree,
			row: row.value, 
			column: column.value,
			part: part.value 
		};
		
		eval ( eventHandler );	//	calls something like: windowEvents.cellClick( cell, 'fccEnabled' );
	
	}	

//		var view = cell.tree.contentView;
//		var item = view.getItemAtIndex( cell.row ); 
//		alert( 'coor: ' +  cell.row + ' : ' + cell.column )
//		alert( 'item: ' +  item )
//		alert( 'res: ' +  resource.Value )
//		alert( 'target value: ' +  target.getValue() )
	 
	//	this is not called directly; only via dispatchTreeEvent()
	//	 
	this.cellClick = function cellClick( cell, property  ){
		var view = cell.tree.builderView;
		view.selection.select( cell.row );
		var resource = view.getResourceAtIndex( cell.row );	//	from underlying datasource 
		var urn = resource.Value;	//	urn of this data row in the datasource
		var NS = args.ds.getNS();	//	my extenstion's namespace
		var node = args.ds.getNode( urn );
		var target = node.getTarget( NS[ property ] );
	
		if( target != null ) {	//	update underlying rdf datasource
			var value = target.getValue();
			node.removeTarget( NS[ property ], target );
			node.addTarget( NS[ property ], ( value == "true" ? "false" : "true" ) );
		}
		
	}

	this.cellDoubleClick = function cellDoubleClick( cell, property  ){
		carrotLog.report( property );
		
		//	http://developer.mozilla.org/en/docs/XUL_Tutorial:Tree_Box_Objects
		
		var x = {}, y = {}, width = {}, height = {};
		
		var tree = cell.tree;
		var row = cell.row;
		var part = cell.part;
		var column = cell.column;
		
		var box  = tree.boxObject;
		box = box.QueryInterface(Components.interfaces.nsITreeBoxObject);
		
		box.getCoordsForCellItem( row, column, part, x, y, width, height );
		
		var extra_x = 0;
		var extra_y = 10;
		var pos_x = extra_x + box.screenX + x.value;
		var pos_y = extra_y + box.screenY + y.value;
		
		carrotLog.report( 'x:' + x.value + ' y:' + y.value + ' width:' + width.value + ' height:' + height.value );
		
		var editPopup = document.getElementById( "editPopup" );
		var labelText = document.getElementById( "labelText" );
		var popupBox = editPopup.popupBoxObject;
		//var popupBox = editPopup.boxObject;
		//popupBox = popupBox.QueryInterface(Components.interfaces.nsIPopupBoxObject);
		//var editText = document.getElementById( "editText" );
		//	http://www.xulplanet.com/references/elemref/ref_menupopup.html#prop_showPopup
		popupBox.showPopup( /* srcContent */ tree, /* popupContent */ editPopup,
			//100, 100,  
			//	x.value, y.value,
				pos_x, pos_y, 
			/* popupType */ "popup", /*anchor*/ "", /*align*/ "" );
		
	}
	
}

var windowEvents = new classFormCopySent();

var carrotGui = {};
var carrotLog = {};

try {

	var carrot_garden = Components.classes["@mozilla.org/carrot_garden/service;1"]
				.getService(Components.interfaces.cgICarrotGarden).wrappedJSObject;
	
	carrotGui = carrot_garden.gui;
	carrotLog = carrot_garden.log;
	carrotLog.info( 'formCopySent.js loaded' );
	
		
} catch( ex ) {
	
	Components.utils.reportError( 'carrot_garden: can not initialize' );
	
}

