
var wshShell = WScript.CreateObject("WScript.Shell");

//wshShell.SendKeys ( '^+' );

var Application =  WScript.Application;
var rv = Application.CurrentInputLanguage.Culture.EnglishName;

wshShell.Popup( 'EnglishName: ' + rv );

