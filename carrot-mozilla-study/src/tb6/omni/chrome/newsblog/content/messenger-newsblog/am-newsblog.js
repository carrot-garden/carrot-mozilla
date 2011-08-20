//@line 36 "/buildbot/linux_build_release/build/mailnews/extensions/newsblog/content/am-newsblog.js"

var gIncomingServer;

function onInit(aPageId, aServerId)
{
  var accountName = document.getElementById("server.prettyName");
  var title = document.getElementById("am-newsblog-title");
  var defaultTitle = title.getAttribute("defaultTitle");

  var titleValue;
  if (accountName.value)
    titleValue = defaultTitle + " - <" + accountName.value + ">";
  else
    titleValue = defaultTitle;

  title.setAttribute("title", titleValue);
  document.title = titleValue;
}

function onPreInit(account, accountValues)
{
  gIncomingServer = account.incomingServer;
}
