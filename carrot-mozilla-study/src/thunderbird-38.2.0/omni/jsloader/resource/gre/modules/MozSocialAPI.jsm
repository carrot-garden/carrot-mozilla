ç¿s¹                /  (   ¹             	                               resource://gre/modules/MozSocialAPI.jsm     /                                         ;   5       Q5      Q5      QQ;   ¸   
=   : Q;   ¸   
=   	: Q;   
¸   
A=   =   : Q;   
¸   
A=   =   : Q;   
¸   
A=   =   : Q;   
¸   
A=   =   : QAf    6   QAY   B]   B]      b   6   QA   6   QA   6   QÊ.	Z	  ô	 		ê7Õ1Õ3
ÛeÛTÛPÛsÌÐ*.WZ  ò  #Ë <Ì    Cc   Ci   Cu   Components   classes   interfaces   utils   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   SocialServiceQ   resource://gre/modules/SocialService.jsm   Social=   resource:///modules/Social.jsm	   Chat9   resource:///modules/Chat.jsm)   PrivateBrowsingUtils_   resource://gre/modules/PrivateBrowsingUtils.jsm!   EXPORTED_SYMBOLS   MozSocialAPI   _enabled   _everEnabled   enabled   openChatWindow'   closeAllChatWindows                     MozSocialAPI      openChatWindow   1   findChromeWindowForChats   '   closeAllChatWindows   9   hookWindowCloseForPanelClose                  ÿÿÿÿ   3   this.MozSocialAPI.enabledÁ               ®       ¹      1                                        val   enable Ù  ½               T       QV   A5       AV   6    QV      c;   5   ¸   
;   =   B: QA5       2AC6   Q;   5   ¸   
=   	: ¸   

C: Q   $;   5   ¸   
;   =   : Q	ÊËË^à!
Èê&ßK    _enabled   Services   obs   addObserver!   injectController3   document-element-inserted   _everEnabled   telemetry!   getHistogramById3   SOCIAL_ENABLED_ON_SESSION   add   removeObserver   ÿÿÿÿ   !   injectController                ¼      ¹      l                        *             doc   topic	   data   [  o  .             Æ      Q  Q  Q   QT  5       Q    D   Q;   ¸   
   :    
ÈÇT  5   5   =      
ÈÇ   ¸   
;   5   : ¸   	
;   5   
: ¸   
;   5   : 5     QB  QV  5      E   Q;   5   ¸   
=   : W  Q     Qv  QÈ    V  ¸   
=   :   QV   E   QV      
ÈÇ;   â      : Q;   ¸   
T  5   5      : QÈÇ   A   Qv   Q;   ¸   
=   T  5   =   V   : QÈ     zßÎÝ5Ó9ÖÊÊ9Ê;Ê9Í?4ÕÖÍÓEÐ	ÈËMÓOéTÌð    defaultView)   PrivateBrowsingUtils-   isContentWindowPrivate#   documentURIObject   scheme   about   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell%   chromeEventHandler   contentWindow   Services   prefs   getBoolPref7   social.debug.injectIntoTabs   getAttribute   origin9   hookWindowCloseForPanelClose   SocialService   getProvider   nodePrincipal   Cu   reportErrory   MozSocialAPI injectController: unable to attachToWindow for    location   :     ÿÿÿÿ          window   #   containingBrowser       allowTabs       origin                     e              %   injectController/<Á                 -       ¹      
                                        provider |  ê  O             T  E   QT  5       ;   â   T     : QÑÖ!    enabled   attachToWindow    ÿÿÿÿ          e            ~       Æ   8       
   o  ÿÿÿÿÿÿÿÿU          ÿÿÿÿr             ÿ          ÿÿÿÿA              5   ÿÿÿÿ   ÿÿÿÿ      attachToWindow              p      ¹   %   ë                         (      @      provider   targetWindow   targetDocURI	   port   mozSocialObj   contentObjØ  É"  Z                5    5      Q   ¸   
V   :     T  Q=      5   =   V   5   =     Q;   5   	¸   

V  : QÈÈ   5         ¸   
   :    @   QY   Y   C]   C]   C]      ]   ]   Y   C]   C]   C]      ]   ]   Y   C]   C]   C]      ]   ]   Y   C]   C]   C]      ]   ]   Y   C]   C]   C]      ]   ]   Y   C]   C]   C]      ]   ]   Y   C]   C]   C]      ]   ]   Y   C]   C]      ]   ]     Q;   ¸   
   :    Q;   ¸   
   V  : Q;   ¸   
   : Q   5   5    ¸   !
=   "   	: Q         ¸   #
=   $   
: Q]ÔÐËÐÛÙeÊÖÏgjÏ  ÏÏ  Ï  ¥Ï  ±Ï  ÊÏÔ  ÝÑÉÙÕä  êÚ  ð    document#   documentURIObject   isSameOrigin]   MozSocialAPI: not attaching mozSocial API for    origin	    to 	   spec-    since origins differ.   Services   console!   logStringMessage   workerURL   getWorkerPort   enumerable   configurable   writable   value   getWorker   hasBeenIdleFor   openChatWindow   openPanel   closePanel   share   getAttention   get   isVisible   Cu   createObjectIn   Object!   defineProperties+   makeObjectPropsNormal   navigator   wrappedJSObject!   __defineGetter__   mozSocial!   addEventListener   unload    ÿÿÿÿ         msg       ÿÿÿÿ   W   attachToWindow/mozSocialObj.getWorker.valueÁ                 ¨      ¹      `                           5              workerAPI+   abstractPortPrototype	   desc   #  n             ;    ¸   
Y   Y         5   ¸   
      : ]         5   ¸   
      : ]         5   ¸   
      : ]   ]      Y   C]   :    Q;   ¸   	
;   ¸   	
      : :   Q;   ¸   

      5   5   =   :   QV  ;    ¸   
V  5   ¸   
      :    : 6   QV  ;    ¸   
V  5   ¸   
      :    : 6   Q;   ¸   
V   5   5   =   V  : QV   tÑ
àÈàÈà
ÍzÊtÈ}â.ÿÿÿêÈåÈêÈÿÿÿîÉêÈÿÿÿîÉç    Cu   cloneInto   postMessage	   bind   close   toString	   port   cloneFunctions   Object   getPrototypeOf1   getOwnPropertyDescriptor   __proto__   onmessage   get   exportFunction   set   defineProperty   wrappedJSObject   ÿÿÿÿ   a   attachToWindow/mozSocialObj.hasBeenIdleFor.valueÁ                          ¹                                                À               B    ÿÿÿÿ   a   attachToWindow/mozSocialObj.openChatWindow.valueÁ               A       ¹                                 	             toURL   callback   url  ;  ß                  5    5   ¸   
T  :    Q;   â         V   T : QÙÈß6    document#   documentURIObject   resolve   openChatWindow   ÿÿÿÿ   W   attachToWindow/mozSocialObj.openPanel.valueÁ                      ¹      '                                        toURL   offset   callback   chromeWindow   url   U  °               ;    â       :    QV   5          5   5   ¸   
T  :   Q   ¸   
V  :     V   5   ¸   
V  T T : QÏÈÊ
ÙÈÐ
Þ6    getChromeWindow   SocialFlyout   document#   documentURIObject   resolve   isSameOrigin	   open   ÿÿÿÿ   Y   attachToWindow/mozSocialObj.closePanel.valueÁ               W       ¹                                 
             toURL   offset   callback   chromeWindow   '    ©             ;    â       :    QV   5    D   QV   5   5       V   5   5   ¸   
:  QÏÈÐÏ
Ù,    getChromeWindow   SocialFlyout   panel   hidePopup   ÿÿÿÿ   O   attachToWindow/mozSocialObj.share.valueÁ              <      ¹      a                                   	   data   chromeWindow   dwu   dataOut Ñ    µ       
      ;    â       :    QV   5    D   QV   5   5   5      ;   =   R pV   ¸   
;   5   : ¸   	
;   5   
:   QV  5       ;   =   R pY     Qf    - Á
:    Q   #m5   W  QV  V  T  V  78QãQ¸   
:  5   ÿÿÿÎÈ T  5      V  Z  T  5   `   6   QV   5   ¸   
@V  : QÏÈã
ËÕÊÊ  ºÈÊ
ËÊÔ87Ñ
Ò  ÁËÿÿÿðÒÈ
ÈÒÙ2    getChromeWindow   SocialShare   shareButton   hidden   Error)   Share is unavailable   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils'   isHandlingUserInputG   Attempt to share without user input   value	   next	   done   image   previews   sharePage                     url      title      description      source                   ÿÿÿÿ         sub       À   7      ¶   B   ÿÿÿÿ   ÿÿÿÿ   ]   attachToWindow/mozSocialObj.getAttention.valueÁ                          ¹                                              Ì  Î             ;    â       : ¸   
:  QÝ-    getChromeWindow   getAttention   ÿÿÿÿ   S   attachToWindow/mozSocialObj.isVisible.getÁ                   H       ¹      !                                      *  þ  Õ                ¸    
;   5   : ¸   
;   5   : ¸    
;   5   : 5   ÖÊÊ  ÖÊÊ  ÖÉD    QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell   isActive   ÿÿÿÿ   !   attachToWindow/<Á                   5       ¹                                            ì  b!  á                5    5   %   Q   5    5         6     æÕßE    navigator   wrappedJSObject   mozSocial   ÿÿÿÿ   !   attachToWindow/<Á                          ¹      
                                     ©!  Á"  ë             ;    â        : QÓ(    schedule   ÿÿÿÿ   %   attachToWindow/</<Á                          ¹                                            ¥"  ¹"  ï                ¸    
:  QÐ    close    .   N   ÿÿÿÿÿÿÿÿz             ÿÿÿÿ   9   hookWindowCloseForPanelClose               ]       ¹      3                                @      targetWindow   dwuð"  ð(  ô                ¸    
;   5   : ¸   
;   5   :    QV   ¸   
:  Q   ¸   
=       C: Q  úÖÊÊ  úÈÏÖ   þ     QueryInterface   Ci+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils'   allowScriptsToClose!   addEventListener   DOMWindowClose   ÿÿÿÿ   1   _mozSocialDOMWindowClose               Î       ¹      V                                       evt   elt E%  æ(  þ                ¸    
;   5   : ¸   
;   5   : ¸    
;   5   : 5      Q   imV   5   =      V   ¸   	
:  Q   K   -V   5   =   
   V   ¸   
:  Q   V   5   W   QãV   ÿÿÿT  ¸   
:  QÖÊÊ  ÿÊÊ  ÿÍ(o ÏÏHÊÏÏHÎ Ë Î    QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell%   chromeEventHandler   localName   panel   hidePopup   chatbox   close   parentNode   preventDefault    P   o      ÿÿÿÿ      schedule                 -       ¹                                              callback )  \)              ;    5   5   ¸   
T  ;   5   5   : QìH    Services   tm   mainThread   dispatch   Ci   nsIThread   DISPATCH_NORMAL   ÿÿÿÿ      getChromeWindow                 n       ¹      >                                        contentWin v)  Å*              T  ¸    
;   5   : ¸   
;   5   : ¸    
;   5   : 5   ¸    
;   5   : ¸   
;   5   : ÔÊÊ 	ÊÊ 	ÏÊ 	Ê "Ê 	 "2    QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation'   nsIDocShellTreeItem   rootTreeItem   nsIDOMWindow   ÿÿÿÿ      openChatWindow               °       ¹      9                                @      contentWindow   provider   url   callback	   mode   fullURI   thisCallback   chatbox    õ*  .  &            T ¸    
T :    QT ¸   
V   :     ;   ¸   
=   : Q      Q;   ¸   
T  T 5   T 5   V   5   	T ;   
V  :    Q          5   ¸   
A   : QÍ
ÈÎÕÊ 5ßÕ 5ÉÛ    resolveUri   isSameOrigin   Cu   reportError¿   Failed to open a social chat window - the requested URL is not the same origin as the provider.	   Chat	   open   origin	   name	   spec   undefined#   promiseChatLoaded	   then   ÿÿÿÿ   7   openChatWindow/thisCallbackÁ                        ¹                                             chatbox ,  -  -            ;    ¸   
T  5       : QÝ    Social!   setErrorListener   content   ÿÿÿÿ   ;   openChatWindow/thisCallback/<Á                 =       ¹                                              aBrowser ,  -  /      
      T  5    ¸   
=   ;   â   T  ¸   
=   : : @@@@: QÔÙ0ÿÿÿí 05    webNavigation   loadURIU   about:socialerror?mode=compactInfo&origin=%   encodeURIComponent   getAttribute   origin   ÿÿÿÿ   !   openChatWindow/<Å                          ¹                                            W.  .  8                  5    : QÔ     contentWindow   ÿÿÿÿ   '   closeAllChatWindows                        ¹      	                                        provider Ì.  /  >            ;    ¸   
T  5   : Ô 	   Chat   closeAll   origin