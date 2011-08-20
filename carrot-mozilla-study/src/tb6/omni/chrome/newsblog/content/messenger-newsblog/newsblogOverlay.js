//@line 39 "/buildbot/linux_build_release/build/mailnews/extensions/newsblog/content/newsblogOverlay.js"

function openSubscriptionsDialog(aFolder, aServer)
{
  if (!aServer)
    aServer = aFolder.server;
  //check for an existing subscriptions window and focus it.
  const kWindowMediatorContractID = "@mozilla.org/appshell/window-mediator;1";
  const kWindowMediatorIID = Components.interfaces.nsIWindowMediator;
  const kWindowMediator = Components.classes[kWindowMediatorContractID]
                                    .getService(kWindowMediatorIID);
  var lastSubscriptionWindow =
    kWindowMediator.getMostRecentWindow("Mail:News-BlogSubscriptions");
  
  if (lastSubscriptionWindow)
  {
    if (aFolder)
      lastSubscriptionWindow.gFeedSubscriptionsWindow.selectFolder(aFolder);
    lastSubscriptionWindow.focus();
  }
  else
  {
    window.openDialog("chrome://messenger-newsblog/content/feed-subscriptions.xul", "",
                      "centerscreen,chrome,dialog=no,resizable",
                      { server: aServer, folder: aFolder});
  }
}

// Special case attempts to reply/forward/edit as new RSS arrticles
// Send the feed article URL instead of trying to load the feed inside of
// an iframe. Bug #258278.
function openComposeWindowForRSSArticle(msgHdr, type)
{
  var params = Components.classes["@mozilla.org/messengercompose/composeparams;1"]
                         .createInstance(Components.interfaces.nsIMsgComposeParams);
  if (!params)
    return;

  params.composeFields = Components.classes["@mozilla.org/messengercompose/composefields;1"]
                                   .createInstance(Components.interfaces.nsIMsgCompFields);
  if (params.composeFields)
  {
    // convert our messageId into a url..
    var contentBase = msgHdr.messageId.replace("@localhost.localdomain", "");
    params.composeFields.body = contentBase;
    var subject = msgHdr.mime2DecodedSubject;
    var msgComposeType = Components.interfaces.nsIMsgCompType;
    if (type == msgComposeType.Reply ||
        type == msgComposeType.ReplyAll ||
        type == msgComposeType.ReplyToSender ||
        type == msgComposeType.ReplyToGroup ||
        type == msgComposeType.ReplyToSenderAndGroup)
    {
      subject = "Re: " + subject;
    }
    else if (type == msgComposeType.ForwardInline ||
              type == msgComposeType.ForwardAsAttachment)
    {
      var perf = Components.classes["@mozilla.org/preferences-service;1"]
                            .getService(Components.interfaces.nsIPrefBranch);
      var fwdPrefix = pref.getCharPref("mail.forward_subject_prefix");
      subject = fwdPrefix + ": " + subject;
    }
    params.composeFields.subject = subject;
    params.composeFields.characterSet = msgHdr.Charset;
    params.bodyIsLink = true;

    if (msgComposeService)
    {
      try
      {
        params.identity = msgComposeService.defaultIdentity;
      }
      catch (ex)
      {
        params.identity = null;
      }
      msgComposeService.OpenComposeWindowWithParams(null, params);
    }
  }
}
