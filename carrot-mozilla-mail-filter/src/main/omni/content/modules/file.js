"use strict";

Components.utils.import("resource://${package}/modules/log.js");
const
logger = log.makeLogger("file.js", "Debug");
logger.debug("init");

//

/**
 * https://developer.mozilla.org/en/Code_snippets/File_I%2F%2FO
 */

// Components.utils.import("resource://${package}/modules/util.js");
Components.utils.import("resource://gre/modules/NetUtil.jsm");
Components.utils.import("resource://gre/modules/FileUtils.jsm");

const EXPORTED_SYMBOLS = [ "file" ];
const file = this;

function textLoad(file) {

	var input = Components.classes["@mozilla.org/network/file-input-stream;1"]
	        .createInstance(Components.interfaces.nsIFileInputStream);

	var convert = Components.classes["@mozilla.org/intl/converter-input-stream;1"]
	        .createInstance(Components.interfaces.nsIconverterInputStream);

	input.init(file, -1, 0, 0);

	convert.init(input, "UTF-8", 0, 0);

	var text = "";
	var count = 0;
	var buffer = {};

	do {
		count = convert.readString(64 * 1024, buffer);
		text += buffer.value;
	} while (count != 0);

	convert.close();

	return data;

}

function textSave(file, text) {

	var output = Components.classes["@mozilla.org/network/file-output-stream;1"]
	        .createInstance(Components.interfaces.nsIFileOutputStream);

	output.init(file, -1, -1, 0);

	var convert = Components.classes["@mozilla.org/intl/converter-output-stream;1"]
	        .createInstance(Components.interfaces.nsIConverterOutputStream);

	convert.init(output, "UTF-8", 0, 0);

	convert.writeString(text);

	convert.close();

}

function textSaveThis(path, text) {

	var file = FileUtils.getFile("ProfD", [ "ZZZ", "data.txt" ]);

	var text = "hello";

	textSave(file, text);

}
