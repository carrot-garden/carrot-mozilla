function classXmlVars(){

//	microsoft version

	var xmlDoc = new ActiveXObject("MSXML2.DOMDocument.4.0");
	
	var rootNode = xmlDoc.appendChild( xmlDoc.createElement( 'root' ) );
	
	this.addTag = function addTag( tagName, tagList ) {
		var element =  xmlDoc.createElement( tagName );
		for ( item in tagList ){
			element.setAttribute( tagList[item][0], tagList[item][1] );
		}
		rootNode.appendChild( element );
	}
	this.getDoc = function getDoc( ) {
		return xmlDoc;
	}
	this.getDocText = function getDocText( ) {
		return xmlDoc.xml;
	}
}


var stdIn  = WScript.StdIn;
var stdOut = WScript.StdOut;
var stdErr = WScript.StdErr;

var input = stdIn.ReadAll();

var xmlDoc = new ActiveXObject("MSXML2.DOMDocument.4.0");
xmlDoc.async = false;
xmlDoc.loadXML( input );

var tags = xmlDoc.getElementsByTagName('company');

var id0 = tags[0].getAttribute('id');
var id1 = tags[1].getAttribute('id');

stdOut.WriteLine( "parsed the input:[" + id0 + "]" );
stdOut.WriteLine( "parsed the input:[" + id1 + "]" );
stdOut.WriteLine( input );

var xmlVars = new classXmlVars();

xmlVars.addTag( 'company', [['id','1'],['name','Apple Corp'],['comment','aaa bbb ccc']]);
xmlVars.addTag( 'company', [['id','2'],['name','Microsoft Corp']]);

//var objSO = WScript.CreateObject("SuperOffice.Application")

stdOut.WriteLine( xmlVars.getDocText() );

