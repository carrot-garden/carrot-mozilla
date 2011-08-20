//@line 38 "/buildbot/linux_build_release/build/mail/components/preferences/junkLog.js"

var gLogView;
var gLogFile; 

function onLoad()
{
  gLogView = document.getElementById("logView");
  gLogView.docShell.allowJavascript = false; // for security, disable JS
  
  var directoryService =  Components.classes["@mozilla.org/file/directory_service;1"]
                            .getService(Components.interfaces.nsIProperties);
  gLogFile = directoryService.get("ProfD", Components.interfaces.nsIFile);
  gLogFile.append("junklog.html");
    
  if (gLogFile.exists())
  {
    // convert the file to a URL so we can load it.
    ioService = Components.classes["@mozilla.org/network/io-service;1"]
                  .getService(Components.interfaces.nsIIOService);
    gLogView.setAttribute("src", ioService.newFileURI(gLogFile).spec);
  }
}

function clearLog()
{
  if (gLogFile.exists())
  {
    gLogFile.remove(false);  
    gLogView.setAttribute("src", "about:blank"); // we don't have a log file to show
  }
}
