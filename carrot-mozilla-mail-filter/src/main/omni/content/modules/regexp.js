"use strict";

var EXPORTED_SYMBOLS = [ "regexp" ];
var regexp = this;

//

var baseAddress = '([\\w\\.\\-\\_]+\\@[\\w\.\\-\\_]+)';

var baseTerm = //
'(' + baseAddress + ')|' + //
'([^<>",@\\s]*\\s*<' + baseAddress + '>)|' + //
'("[^<>"\\\\]*"\\s*<' + baseAddress + '>)';

var emailAddress = new RegExp(baseAddress, "g");

var emailTerm = new RegExp(baseTerm, "g");

var parenthesisText = new RegExp("", "g");

var addressBrackets = new RegExp("[\\[\\]\\{\\}\\'\\<\\>" + '\\"' + "]", "g");

var quotePrintable = new RegExp("\\=\\?.*\\?\\=", "g");

var swapCommaSep = new RegExp("([\\w\\-\\_\\s]*\\,)([\\w\\-\\_\\s]*)", "g");

var charBlank = new RegExp("\\s", "g");

var charComma = new RegExp("\\,", "g");

var charSingleQuote = new RegExp("\\'", "g");

var charDoubleQuote = new RegExp('\\"', "g");

var multiBlanks = new RegExp("(\\s{2,})", "g");

var multiDashes = new RegExp("(\\-{2,})", "g");

var multiScores = new RegExp("(\\_{2,})", "g");

var nonCompanyChars = new RegExp("[^\\w\\_\\-\\s]", "g");

var nonDomainChars = new RegExp("[^\\w\\_\\-\\.]", "g");

var nonPersonChars = new RegExp("[^\\w\\_\\-\\s]", "g");

var nonFileNameChars = new RegExp("([^\\w]|[_])+", "g");

//

function isEmail(text) {
	return (text || "").match(emailAddress) != null;
}
