var wshShell = WScript.CreateObject("WScript.Shell");

var stdIn  = WScript.StdIn;
var stdOut = WScript.StdOut;
var stdErr = WScript.StdErr;

var input = stdIn.ReadAll();

//	http://www.winguides.com/scripting/reference.php?id=149
wshShell.SendKeys ( input );


