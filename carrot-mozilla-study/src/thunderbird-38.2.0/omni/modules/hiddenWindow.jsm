/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const EXPORTED_SYMBOLS = ["getHiddenHTMLWindow"];

Components.utils.import("resource://gre/modules/Services.jsm");
Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

XPCOMUtils.defineLazyGetter(this, "hiddenWindow", function()
  Services.appShell.hiddenDOMWindow
);
//@line 14 "/builds/slave/tb-rel-c-esr38-lx_bld-00000000/build/chat/modules/hiddenWindow.jsm"
function getHiddenHTMLWindow() hiddenWindow
