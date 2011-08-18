
var carrotPrefs = Components
	.classes["@mozilla.org/preferences-service;1"]
	.getService(Components.interfaces.nsIPrefBranch);

function carrotLoadOptions() {
	// load
	
	var accountsFolderURI = carrotPrefs.getCharPref("carrot_garden.accountsFolderURI");

	document.getElementById("runFiltersFolder").setAttribute("ref", getLocalFolders().URI);
	document.getElementById("runFiltersFolder").setAttribute("uri", accountsFolderURI);

	SetFolderPicker(accountsFolderURI, "runFiltersFolder");

	
}

function carrotSaveOptions() {
	// save 
	carrotPrefs.setCharPref("carrot_garden.accountsFolderURI", 
		document.getElementById("runFiltersFolder").getAttribute("uri"));
}
