çżsš                }  7   š   :                            0       0     resource://gre/components/amInstallTrigger.js     ć         	                                          ;   5       Q5      Q5      QQ;   ¸   
=   : Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q=      Q=      Q=      Q=      Qn   ;   5   ¸   
=   : 1   Q;   ;   5   ;   ¸   
=   B:    =      
=   70   Q;    Y      ]   "   ]   #   ]   $   ]   %;   &¸   '
Z  ;   5   (`   : ]   )0   !Q;   *Y      ]   +   ]   #   	]   ,   
]   $   ]   -   ]   .   ]   /   ]   0;   ¸   1
=   2: ]   3=   4]   5;   &¸   '
Z  ;   5   6`   ;   5   7`  : ]   )0   !QA;   &¸   9
Z  ;   *`   : 0   8QĘ	*	d	ę5	Ő3Ő1Ő4Ő,ËËËËŰÉ˙˙˙ýá
ŰI(*13ĘĘ>ĘFĘVĘ`Đ'Î˙˙˙éÎdgĘrĘ~ĘĘĘ  ­Ę  śĘĘĘ  ËŃ	ČĘĐ'ÎÎ˙˙˙ŮÎŃ5É˙˙˙ßÉ2    Cc   Ci   Cu   Components   classes   interfaces   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmM   resource://gre/modules/Preferences.jsm=   resource://gre/modules/Log.jsm%   XPINSTALL_MIMETYPE/   application/x-xpinstall'   MSG_INSTALL_ENABLED9   WebInstallerIsInstallEnabled%   MSG_INSTALL_ADDONSI   WebInstallerInstallAddonsFromWebpage)   MSG_INSTALL_CALLBACK7   WebInstallerInstallCallback   log   Log   repository   getLogger7   AddonManager.InstallTrigger   level   Level   Preferences   get5   extensions.logging.enabled	   Warn   Trace   RemoteMediator   prototype   receiveMessage   enabled   install   _addCallback   XPCOMUtils   generateQI1   nsISupportsWeakReference   QueryInterface   InstallTrigger	   init   updateEnabled'   startSoftwareUpdate   installChrome   _resolveURL/   _checkLoadURIFromScript   IDM   {9df8ef2b-94da-45c9-ab9f-132eb55fddf1}   classIDI   @mozilla.org/addons/installtrigger;1   contractID   nsISupports?   nsIDOMGlobalPropertyInitializer   NSGetFactory)   generateNSGetFactory   ˙˙˙˙      CallbackObject                 6       š                                      D      id   callback	   urls   mediator    !               A   0    QAT 0   QA;   T R 0   QA    0   QĚĘĘÉĚ'    id   callback	   urls   Set   callCallback   ˙˙˙˙   A   CallbackObject/this.callCallbackÁ                       š                                          url   status                    A¸    
T  T : Q   2   Qv   Q;   ¸   
=   V   : QČ    A5   ¸   
T  : QA5   5   >      5   ¸   
   : Q× Ěá$ÔÍÚ    callback   log	   warnY   InstallTrigger callback threw an exception: 	   urls   delete	   size   _callbacks    ˙˙˙˙          e                      &   ˙˙˙˙   ˙˙˙˙      RemoteMediator                 _       š      !                                       windowID :  L  *             AT  0    QA>0   QA;   R  0   QA;   5   ¸   
;   5   	: 0   QA5   ¸   

;   A: QĘČÉŇĘ.É0×;    _windowID   _lastCallbackID   _callbacks   Map   mm   CcS   @mozilla.org/childprocessmessagemanager;1   getService   Ci)   nsISyncMessageSender-   addWeakMessageListener)   MSG_INSTALL_CALLBACK   ˙˙˙˙   O   RemoteMediator.prototype.receiveMessageÁ                v       š   	                                        message     4       	      T  5    ;      g  Q   QT  5      QA5   ¸   
V   5   :   QV     &V  ¸   
V   5   V   5   : QČÎŃ
Í
ÖČâ5/ 	   name)   MSG_INSTALL_CALLBACK	   data   _callbacks   get   callbackID   callCallback   url   status    ˙˙˙˙          payload       callbackHandler           `   ˙˙˙˙   ˙˙˙˙   A   RemoteMediator.prototype.enabledÁ               9       š                                             url   params Ż  O  >             Y   T  ]    ;   ]      QA5   ¸   
;   V   : >7ČĎCÖ8    referer%   XPINSTALL_MIMETYPE   mimetype   mm   sendSyncMessage'   MSG_INSTALL_ENABLED   ˙˙˙˙   A   RemoteMediator.prototype.installÁ               Č       š      E                                       installs   referer   callback   window   messageManager   callbackID    e  Ý
  F       	      T ¸    
;   5   : ¸   
;   5   : ¸    
;   5   : ¸    
;   5   : ¸   
;   5   :    QA¸   
T T  5   :   QT  ;   
0   	QT  T 0   QT  V  0   QV   ¸   
;   T  : >7ÔĘĘGĘIĘGĘJĘGĘKĘGČMÓČOÎĚÍSÓ@    QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell;   nsIContentFrameMessageManager   _addCallback	   uris   mimetype%   XPINSTALL_MIMETYPE   referer   callbackID   sendSyncMessage%   MSG_INSTALL_ADDONS   ˙˙˙˙   K   RemoteMediator.prototype._addCallbackÁ               u       š      !                                       callback	   urls   callbackID   callbackObject  ř
  3  V             T   D   QT  '=       ×˙A5   =   A5   #?0      Q;   V   T  T AR   QA5   ¸   
V   V  : QV   ĘĘZáŃČŮ    function   _windowID   -   _lastCallbackID   CallbackObject   _callbacks   set   ˙˙˙˙      InstallTrigger                          š                                                 d                  ˙˙˙˙   ;   InstallTrigger.prototype.initÁ               Ą       š      )                                       window   utils ť  e  r             AT  0    QAT  5   5   0   QAT  5   5   0   QT  ¸   
;   5   5   	: QT  ¸   

;   5   5   :    QA;   V   5   R 0   QT  5   ¸   
T  A: ĘÔÔwÝŮČĐÉ{Ó0    _window   _principal   document   nodePrincipal	   _url#   documentURIObject   QueryInterface   Components   interfaces+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils   _mediator   RemoteMediator)   currentInnerWindowID%   InstallTriggerImpl   _create   ˙˙˙˙   A   InstallTrigger.prototype.enabledÁ                          š      	                                     {  ś  ~             A5    ¸   
A5   5   : Ř'    _mediator   enabled	   _url	   spec   ˙˙˙˙   M   InstallTrigger.prototype.updateEnabledÁ                          š      	                                     Ň  ő               A¸    
:  Č    enabled   ˙˙˙˙   A   InstallTrigger.prototype.installÁ              =      š                              2            installs   callback   installData                   Y   Z   ]    Z   ]   Z   ]   Z   ]      Q;   ¸   
T  : - Á
:    Q  §m5   W  Q  Q  Q  QT  V  7  QV  '=   H   Y   V  ]   W  QV  5       *A5   	5   
=   =   V  =   R pA¸   
V  5   :   QA¸   
V  :     )A5   	5   
=   =   V  5   R p@  QV  5      9A¸   
V  5   : W  QA¸   
V  :     @W  QV   5    ¸   
V  5   : QV   5   ¸   
V  5   D   Q@: QV   5   ¸   
V  : QV   5   ¸   
V     V  5      @: QČăQ¸   
:  5   ˙˙ţJČ A5   ¸   
V   A5   5   T A5   	: ÉÉÉÎĎŇ8 ťă
Í
Ë	Î
Ęá
ŃČ
Ěŕ
ÉŃ
ČĚ
ÝäŘÔŮ  Ë˙˙˙ďŇ  ŞĺL 	   uris   hashes   names   icons   Object	   keys   value   string   URL   _window   DOMError   Error5   Missing URL property for '   '   _resolveURL/   _checkLoadURIFromScript   SecurityErrorK   Insufficient permissions to install: 	   spec   IconURL	   push	   Hash	   next	   done   _mediator   install	   _url    ˙˙˙˙      	   name                  	   item       url       iconUrl       T   ť      J   Ć  ˙˙˙˙   c            ˙˙˙˙   Y   InstallTrigger.prototype.startSoftwareUpdateÁ               i       š   	   '                                       url   flags   filename	   args  §  Š  ­             ;    5   ¸   
T  @@: ¸   
;   5   : 5      QY     QV  V   Y   T  ]   9QA¸   
V  : ÖĘĘ  ŽÍĘÍĘĚ    Services   io   newURI   QueryInterface   Ci   nsIURL   filename   URL   install   ˙˙˙˙   M   InstallTrigger.prototype.installChromeÁ                        š      	                                    	   type   url	   skin   Ĺ    ś             A¸    
T : Ë '   startSoftwareUpdate   ˙˙˙˙   I   InstallTrigger.prototype._resolveURLÁ                         š      	                                       url !  a  ş             ;    5   ¸   
T  @A5   : Ű)    Services   io   newURI	   _url   ˙˙˙˙   a   InstallTrigger.prototype._checkLoadURIFromScriptÁ              P       š      %                                    uri   secman   ž  ž       
      ;    5      QV   ¸   
A5   T  V   5   : QC     Qv  QBČČ    Ď$ŃÉ  ÁĚË    Services+   scriptSecurityManager3   checkLoadURIWithPrincipal   _principal5   DISALLOW_INHERIT_PRINCIPAL    ˙˙˙˙         e            (       9      ˙˙˙˙˙˙˙˙G          