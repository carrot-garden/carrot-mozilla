function classCarrotFilterActionList () {

	var filterActionList = document.getElementById("filterActionList");
	
	var nodeList = filterActionList.childNodes.item(0).childNodes; 
		
	var listCol0 = nodeList.item(0)
	var listCol1 = nodeList.item(1)
	var listCol2 = nodeList.item(2)
	
		
	this.resize = function resize (){
		
		var listItems = filterActionList.getElementsByTagName( 'listitem' )

		for( k = 0; k < listItems.length; k++ ){
//			alert( listItems[k].tagName )
			var listItem = listItems[k]
			var col1 = document.getAnonymousElementByAttribute( listItem, 'class', 'ruleactiontarget') 

			listCol1.width = 600
			col1.width = 600

//			alert( col1.attributes.item(6).name )

			alert( col1.getAttribute( 'width' ) )

		}

		//listItems.forEach( aaa ) 
		
		//alert( listItems.length )
	}
	
}

var carrotFilterActionList = new classCarrotFilterActionList ();