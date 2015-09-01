function xpunge_GetMsgFolderFromUri(uri, checkFolderAttributes) {
	if (typeof GetMsgFolderFromUri !== "function") {
		Components.utils.import("resource:///modules/MailUtils.js");
		return MailUtils.getFolderForURI(uri, checkFolderAttributes);
	} else {
		return GetMsgFolderFromUri(uri, checkFolderAttributes);
	}
}
