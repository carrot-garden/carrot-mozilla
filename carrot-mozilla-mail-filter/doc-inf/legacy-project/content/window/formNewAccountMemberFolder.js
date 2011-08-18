
function loadForm()
{
	
	document.getElementById("person").value = window.opener.gNewFolderInfo.person;
	window.opener.gNewFolderInfo.valid = false;

	updateForm();
}

function makeWork()
{
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
	var person = document.getElementById("person").value;

	document.getElementById("targetAccount").value = window.opener.gNewFolderInfo.folderName;
	document.getElementById("targetPerson").value = personFolderTemplate( person );

	window.opener.gNewFolderInfo.valid = false;
}
