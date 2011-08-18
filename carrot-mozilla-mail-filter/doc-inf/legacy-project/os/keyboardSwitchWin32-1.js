var wshShell = WScript.CreateObject("WScript.Shell");
var wrapper = WScript.CreateObject("DynamicWrapper");

wrapper.Register("USER32.DLL", "ActivateKeyboardLayout", "i=hh", "f=s", "r=h");
wrapper.Register("USER32.DLL", "GetKeyboardLayout", "i=l", "f=s", "r=h");


var currentLayout = wrapper.GetKeyboardLayout( 0 );

//wshShell.Popup( 'size : ' + size );
//wshShell.SendKeys ( '^+' );


