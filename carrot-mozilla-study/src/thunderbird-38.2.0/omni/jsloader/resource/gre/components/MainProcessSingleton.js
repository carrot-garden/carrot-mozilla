ç¿s¹                s     ¹   %                             #       0     resource://gre/components/MainProcessSingleton.js     ¢         	                        ;   5       Q5      Q5      Q5      QQ;    ¸   	
=   
: Q;    ¸   	
=   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   : Q;   Y   ;   ¸   
=   : ]   ;   ¸   
Z  ;   5   `   ;   5   `  : ]      ]       ]   !   ]   "0   QA;   ¸   $
Z  ;   `   : 0   #QÊ	öD	Õ1Õ3Ò@Ò<ÒH"ÊÑ	ÈÐ'Î)ÎÈÊ%ÊQÐdfÑ5ÉÿÿÿßÉ8    Cu   Ci   Cc   Cr   Components   utils   interfaces   classes   results   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils/   defineLazyServiceGetter	   ppmmU   @mozilla.org/parentprocessmessagemanager;13   nsIMessageListenerManager   globalmmG   @mozilla.org/globalmessagemanager;1+   nsIMessageBroadcaster-   defineLazyModuleGetter   NetUtilE   resource://gre/modules/NetUtil.jsm)   MainProcessSingleton   prototype   IDM   {0636a680-45cb-11e4-916c-0800200c9a66}   classID   generateQI   nsIObserver1   nsISupportsWeakReference   QueryInterface#   logConsoleMessage   addSearchEngine   observe   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ   )   MainProcessSingleton                          ¹                                             ¬  ±                !    ÿÿÿÿ   a   MainProcessSingleton.prototype.logConsoleMessageÁ               ;       ¹                                             message   logMsg ¸  T               T  5       QV   V   0   Q;   5   ¸   
V   =   @: QÍÎßD 	   data   wrappedJSObject   Services   obs   notifyObservers+   console-api-log-event   ÿÿÿÿ   ]   MainProcessSingleton.prototype.addSearchEngineÁ      
              ¹   #                           C               browser   pageURL   engineURL   iconURL	   type   searchBundle   brandBundle   brandName   title   msg ã    %             T  5    W   Q5   5   W  Q5      Q5      Q5      QQQ;   ¸   
V  : W  Q;   ¸   
   @V  :    Q      );   ¸   
   @V  :    Q   n  QV   ¸   
:    QV   5   	E   #QV   D   QV  ¸   

V  :    #;   ¸   
V   5   	:    QÈ  Qf     QV  ¸   
   5   : >   =      p   E    QV  ¸   
   5   : >   =      pÈ   ü  Qv  Q;   ¸   
=   V  : Q;   5   ¸   
=   : W  Q;   5   ¸   
=   : W  QV  ¸   
=   : W  QV  ¸   
=   : W  QV  ¸   
=   Z  V  `   ?: W  Q;   5   ¸   
V   5   5   : ¸    
V  V  : QÈÈ    ;   5   !¸   "
   : Q^ÿÿÿ¾ÿÐ
ÈÖÉ)$Ö
Î,
ËÈÏÚÕ
Ê2s4
Ê6Õ
Ì9àÒ<ÌÚ?
ÖÈ
ÖÈ
ÐÈ
ÐÈ
Ð3ÉCÈEõËIÚN    target	   data   pageURL   engineURL   iconURL	   type   NetUtil   newURI   getTabBrowser   mIconURL#   shouldLoadFavIcon   indexOf   scheme?   Unsupported search engine URL: ;   Unsupported search icon URL:    Cu   reportErrorw   Invalid argument passed to window.sidebar.addSearchEngine:    Services   strings   createBundle_   chrome://global/locale/search/search.propertiesS   chrome://branding/locale/brand.properties#   GetStringFromName   brandShortName5   error_invalid_engine_title)   formatStringFromName1   error_invalid_engine_msg   ww   getNewPrompter   ownerDocument   defaultView   alert   search	   init    ÿÿÿÿ         tabbrowser        ÿÿÿÿ         isWeb                         https   	   http      ftp                   ÿÿÿÿ         ex       ÿÿÿÿ   a   MainProcessSingleton.prototype.addSearchEngine/<Á                 U       ¹                                             status æ    I             T  ;    5      ;   5   ¸   
   5               5      @C: QÎMåÚU    Cr   NS_OK   Services   search   addEngine	   spec       w       «   h   ÿÿÿÿ     q   ÿÿÿÿ     ð   ÿÿÿÿÿÿÿÿz           ÿÿÿÿ   M   MainProcessSingleton.prototype.observeÁ                 Æ       ¹      4                                       subject   topic	   data     O  Q             T x=    y   =   y   wz   ­;   5   ¸   
A=   B: Q;   ¸   
=   C: Q;   ¸   	
=   
A5   : Q;   ¸   	
=   A5   : Q   @;   ¸   
=   
A5   : Q;   ¸   
=   A5   : Q   k  Âu
^uÊSÜXÖÛÛX^ÛÛX    app-startup   xpcom-shutdown   Services   obs   addObserver   globalmm   loadFrameScriptU   chrome://global/content/browser-content.js	   ppmm%   addMessageListener   Console:Log#   logConsoleMessage!   Search:AddEngine   addSearchEngine+   removeMessageListener