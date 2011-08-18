
function classFormTest () {
	
	var args = {
		view: null,
		valid : false,
		validate : function (){},
		collapseXul : [],
		readonlyXul : [],
	};

	var propertyArray = [  ];

	function init(){
		if ( window.arguments ) {
			args = window.arguments[0]; //	
			
			var testTree = document.getElementById("testTree");
			testTree.view = args.view;
			
			//testTree.database.AddDataSource( args.ds.getRawDataSource() );
			//testTree.builder.rebuild();
			
		} else {
			alert("missing arguments");
			throw 'missing arguments';
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
		
}

var windowEvents = new classFormTest();

