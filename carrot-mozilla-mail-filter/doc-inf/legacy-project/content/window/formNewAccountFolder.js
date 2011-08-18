
function loadForm()
{
//	document.getElementById("runFiltersFolder").setAttribute("ref", getLocalFolders().URI);

	var folderURI = window.opener.gNewFolderInfo.parentURI;

	document.getElementById("runFiltersFolder").setAttribute("ref", getLocalFolders().URI);

	SetFolderPicker( folderURI, "runFiltersFolder" );

	document.getElementById("company").value = window.opener.gNewFolderInfo.company;
	document.getElementById("domain").value = window.opener.gNewFolderInfo.domain;
	document.getElementById("person").value = window.opener.gNewFolderInfo.person;
	window.opener.gNewFolderInfo.valid = false;

	updateForm();
}

function makeWork()
{
	window.opener.gNewFolderInfo.parentURI  = document.getElementById("runFiltersFolder").getAttribute("uri");
	window.opener.gNewFolderInfo.company  = document.getElementById("company").value;
	window.opener.gNewFolderInfo.domain   = document.getElementById("domain").value;
	window.opener.gNewFolderInfo.person   = document.getElementById("targetPerson").value;

	window.opener.gNewFolderInfo.valid = true;
	window.close();
}

function skipForm ()
{
	window.opener.gNewFolderInfo.valid = false;
	window.close();
}

function updateForm ()
{
	var company = document.getElementById("company").value;
	var domain = document.getElementById("domain").value;
	var person = document.getElementById("person").value;

	document.getElementById("targetAccount").value = accountFolderTemplate( company, domain );
	document.getElementById("targetPerson").value = personFolderTemplate( person );

	window.opener.gNewFolderInfo.valid = false;
}
