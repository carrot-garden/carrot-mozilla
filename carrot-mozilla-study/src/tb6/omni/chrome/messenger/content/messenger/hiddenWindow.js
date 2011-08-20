//@line 38 "/buildbot/linux_build_release/build/mail/base/content/hiddenWindow.js"

// XXX This is needed by mailCommands.js for the new message command, ideally
// this shouldn't be a global.
var msgComposeService = Components.classes["@mozilla.org/messengercompose;1"]
                                  .getService(Components.interfaces.nsIMsgComposeService);

function hiddenWindowStartup()
{
  // Disable menus which are not appropriate
  var disabledItems = ['menu_newFolder', 'newMailAccountMenuItem',
             'newAccountMenuItem', 'menu_close', 'menu_saveAs',
             'menu_saveAsFile', 'menu_newVirtualFolder', 'menu_find', 'menu_findCmd', 'menu_findAgainCmd',
             'menu_sendunsentmsgs', 'menu_subscribe', 'menu_deleteFolder',
             'menu_renameFolder', 'menu_select',
             'menu_selectAll', 'menu_selectThread',
             'menu_favoriteFolder', 'menu_properties',
             'menu_Toolbars', 'menu_MessagePaneLayout', 'menu_showMessage', 'menu_FolderViews',
             'viewSortMenu', 'groupBySort', 'viewMessageViewMenu', 'mailviewCharsetMenu',
             'viewMessagesMenu', 'menu_expandAllThreads', 'collapseAllThreads',
             'viewheadersmenu', 'viewBodyMenu', 'viewAttachmentsInlineMenuitem',
             'viewFullZoomMenu',
             'goNextMenu', 'menu_nextMsg', 'menu_nextUnreadMsg', 'menu_nextUnreadThread',
             'goPreviousMenu', 'menu_prevMsg', 'menu_prevUnreadMsg', 'menu_goForward', 'menu_goBack',
             'goStartPage', 'newMsgCmd', 'replyMainMenu', 'replySenderMainMenu', 'replyNewsgroupMainMenu',
             'menu_replyToAll', 'menu_replyToList', 'menu_forwardMsg', 'forwardAsMenu', 'menu_editMsgAsNew',
             'openMessageWindowMenuitem', 'openConversationMenuitem',
             'moveMenu', 'copyMenu', 'moveToFolderAgain', 'tagMenu', 'markMenu',
             'markReadMenuItem', 'menu_markThreadAsRead', 'menu_markReadByDate', 'menu_markAllRead',
             'markFlaggedMenuItem', 'menu_markAsJunk', 'menu_markAsNotJunk', 'createFilter',
             'killThread', 'killSubthread', 'watchThread', 'applyFilters', 'runJunkControls', 'deleteJunk', 'menu_import',
             'searchMailCmd', 'searchAddressesCmd', 'filtersCmd',
             'cmd_close', 'minimizeWindow', 'zoomWindow'];
  var id;
  var element;
  for (id in disabledItems)
  {
    element = document.getElementById(disabledItems[id]);
    if (element)
      element.setAttribute("disabled", "true");
  }

  // also hide the window-list separator
  document.getElementById("sep-window-list").setAttribute("hidden", "true");
}
