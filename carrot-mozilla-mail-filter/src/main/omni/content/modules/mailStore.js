"use strict";

Components.utils.import("resource://${package}/modules/log.js");
const
logger = log.makeLogger("mailStore.js", "Debug");
logger.debug("init");

//

const
EXPORTED_SYMBOLS = [ "mailStore" ];
const
mailStore = this;

function existsParentFolderChildName(parentFolder, folderName) {
	return parentFolder.containsChildNamed(folderName);
}

function existsParentFolderUriChildName(parentUri, folderName) {
	var parentFolder = getFolderFromUri(parentUri)
	return parentFolder.containsChildNamed(folderName);
}

function getFolderFromUri(uri) {
	var resource = getResourceFromUri(uri);
	return resource.QueryInterface(Components.interfaces.nsIMsgFolder);
}

function getResourceFromUri(uri) {
	var rdf = Components.classes['@mozilla.org/rdf/rdf-service;1'].getService()
			.QueryInterface(Components.interfaces.nsIRDFService);
	var resource = rdf.GetResource(uri);
	return resource;
}

function getParentFolderFromUri(uri) {
	var uriArray = uri.split('/');
	uriArray.pop();
	var newUri = uriArray.join('/');
	return getFolderFromUri(newUri);
}

function getLocalFoldersServer() {
	var service = Components.classes["@mozilla.org/messenger/account-manager;1"]
			.getService(Components.interfaces.nsIMsgAccountManager);
	var server = service.localFoldersServer;
	return server;
}

function getLocalRootFolder() {
	var server = getLocalFoldersServer();
	var folder = server.rootFolder;
	return folder;
}

function ensureLocalFolderPath(folderPath) {
	return ensureFolderPath(getLocalRootFolder(), folderPath);
}

/**
 * path == "Inbox/Employer Folder/IBM Inc.
 */
function ensureFolderPath(rootFolder, folderPath) {
	if (folderPath.indexOf("/") != -1) {
		var array = folderPath.split("/");
		var folderName = array.shift();
		ensureFolder(rootFolder, folderName);
		return ensureFolderPath(rootFolder.getChildNamed(folderName), array.join("/"));
	} else {
		return ensureFolder(rootFolder, folderPath);
	}
}

/**
 * name = "IBM Inc.
 */
function ensureFolder(rootFolder, folderName) {
	if (!rootFolder.containsChildNamed(folderName)) {
		rootFolder.createSubfolder(folderName, null);
		rootFolder.NotifyItemAdded(rootFolder.getChildNamed(folderName));
	}
	return rootFolder.getChildNamed(folderName);
}
