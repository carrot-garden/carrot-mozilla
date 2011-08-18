var HKL_ENGLISH = 67699721;
var HKL_RUSSIAN = 68748313;
var KLF_SETFORPROCESS = 256;
var KLF_ACTIVATE = 1

var wshShell = WScript.CreateObject("WScript.Shell")
var wrapper = WScript.CreateObject("DynamicWrapper");

//wrapper.Register("USER32.DLL", "LoadKeyboardLayout", "i=sl", "f=s", "r=l");
//var rus = wrapper.LoadKeyboardLayout("00000419", 0);
//var eng = wrapper.LoadKeyboardLayout("00000409", 0);

//wrapper.Register ("USER32.DLL", "LoadKeyboardLayoutA", "I=sl", "f=s", "r=l");
//rus = wrapper.LoadKeyboardLayoutA ("00000419",0)
//eng = wrapper.LoadKeyboardLayoutA ("00000409",0)

wrapper.Register("USER32.DLL", "ActivateKeyboardLayout", "i=hh", "f=s", "r=h");
wrapper.Register("USER32.DLL", "GetKeyboardLayout", "i=l", "f=s", "r=h");
wrapper.Register("USER32.DLL", "GetForegroundWindow", "i=l", "f=s", "r=h");
wrapper.Register("USER32.DLL", "SetFocus", "i=h", "f=s", "r=h");
wrapper.Register("USER32.DLL", "IsWindowEnabled", "i=h", "f=s", "r=l");
wrapper.Register("USER32.DLL", "GetKeyboardLayoutList", "i=up", "f=s", "r=u");

var handle = wrapper.GetForegroundWindow(0); 
wshShell.Popup( 'GetForegroundWindow: ' + handle );

var handle = wrapper.SetFocus( handle ); 
wshShell.Popup( 'SetFocus: ' + handle );

//var handle = wrapper.GetActiveWindow(0); 
//wshShell.Popup( 'GetActiveWindow: ' + handle );

var handle = wrapper.GetKeyboardLayout(0); 
wshShell.Popup( 'GetKeyboardLayout: ' + handle );

//wrapper.ActivateKeyboardLayout( 1, 0 );
var handle = wrapper.ActivateKeyboardLayout( HKL_RUSSIAN, KLF_SETFORPROCESS );
//wshShell.Popup( 'ActivateKeyboardLayout: ' + handle );

var handle = wrapper.GetKeyboardLayout(0); 
wshShell.Popup( 'GetKeyboardLayout: ' + handle );


// Call MessageBoxA()
//wrapper.Register( "USER32.DLL", "MessageBoxA", "I=HsSu", "f=s", "R=l" );
//wrapper.MessageBoxA( null, "MessageBox (ANSI)", "From DynaWrap Object", 3)

