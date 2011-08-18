HKL_ENGLISH = 67699721
HKL_RUSSIAN = 68748313
KLF_SETFORPROCESS = 256

set wshShell = WScript.CreateObject("WScript.Shell")
set wrapper = WScript.CreateObject("DynamicWrapper")


rv = wrapper.Register("USER32.DLL", "ActivateKeyboardLayout", "i=ll", "f=s", "r=l")
rv = wrapper.Register("USER32.DLL", "GetKeyboardLayout", "i=l", "f=s", "r=l")

handle = wrapper.GetKeyboardLayout(0) 
rv = wshShell.Popup( handle )

handle = wrapper.ActivateKeyboardLayout( HKL_RUSSIAN, 256 )

handle = wrapper.GetKeyboardLayout(0) 
rv = wshShell.Popup( handle )

