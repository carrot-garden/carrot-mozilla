var carrotFolderPicker = "runFiltersFolder";

function getArg ( valueName ) {
	return window.arguments[0][valueName];
}
function setArg ( valueName, value ) {
	window.arguments[0][valueName] = value;
}


function loadForm()
{
//	document.getElementById(carrotFolderPicker).setAttribute("ref", getLocalFolders().URI);

	var parentURI = getArg ( "parentURI" );

	dump2 ('loadForm: ' + parentURI );

	document.getElementById ( carrotFolderPicker ).setAttribute("ref", parentURI);

	SetFolderPicker( parentURI, "runFiltersFolder" );

	document.getElementById ( "person" ).value = getArg ( "displayName" );
	setArg ( "statusValid", false);

	updateForm();
}

function saveForm()
{
	setArg( "parentURI", document.getElementById( carrotFolderPicker ).getAttribute("uri") );
	setArg( "displayName", document.getElementById("targetPerson").value );

	var parentURI = document.getElementById( carrotFolderPicker ).getAttribute("uri")
	dump2 ('saveForm: ' + parentURI );

	setArg( "statusValid", true );
	window.close();
}

function skipForm ()
{
	setArg ( "statusValid", false);
	window.close();
}

function updateForm ()
{
	var person = document.getElementById("person").value;

	document.getElementById("targetPerson").value = personFolderTemplate( person );

	setArg ( "statusValid", false);
}
