ç¿s¹                  #   ¹   3                                   0     resource://gre/modules/InterAppCommService.jsm     ú                                      ;   5       Q5      Q5      Q5      QQAf    0   	Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : QB   Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =   : Qf      QAY      ]      ]       ]   !   ]   "   ]   #   ]   $   	]   %   
]   &   ]   '   ]   (   ]   )   ]   *   ]   +   ]   ,   ]   -   ]   .   ]   /   ]   0   ]   1   ]   20   Q;   ¸   
:  QÊ	$öD	Ì0Õ1Õ3Õ2Ò5Ò<Ò7 Ò "@$Ë	4Ê  éÊ Ê *Ê ?Ê TÊ Ê ÝÊ öÊ Ê |Ê Ê ÅÊ àÊ Ê Ê 5Ê UÊ Ê «Ð ûÐ    Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results!   EXPORTED_SYMBOLS   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsmI   resource://gre/modules/AppsUtils.jsm   DEBUG   XPCOMUtils/   defineLazyServiceGetter   appsService5   @mozilla.org/AppsService;1   nsIAppsService	   ppmmU   @mozilla.org/parentprocessmessagemanager;1+   nsIMessageBroadcaster   UUIDGenerator;   @mozilla.org/uuid-generator;1!   nsIUUIDGenerator   messengerM   @mozilla.org/system-message-internal;13   nsISystemMessagesInternal   kMessages'   InterAppCommService	   init%   registerConnection1   _matchMinimumAccessLevel%   _matchManifestURLs)   _matchInstallOrigins   _matchRules+   _dispatchMessagePorts;   _getAllowedSubAppManifestURLs!   _addSelectedApps   _connect   _getConnections#   _cancelConnection)   _identifyMessagePort)   _registerMessagePort-   _unregisterMessagePort   _removeTarget   _postMessage'   _handleSelectedApps   receiveMessage   observe                  '   InterAppCommService                  ÿÿÿÿ      debug                 4       ¹                                          	   aMsg   i               ;    â    =   ;   ¸   
:  =   T  =   : QÛ"ÔÿÿÿÞC 	   dump1   -- InterAppCommService: 	   Date   now   :    
         
            Webapps:Connect   -   Webapps:GetConnections   3   InterAppConnection:Cancel   ?   InterAppMessagePort:PostMessage   9   InterAppMessagePort:Register   =   InterAppMessagePort:Unregister   -   child-process-shutdown                  ÿÿÿÿ   ;   this.InterAppCommService.initÁ                          ¹      3                                    ñ  ¶  5             ;    5   ¸   
A=   B: Q;    5   ¸   
A=   B: Q;   ¸   
    A: QAY   0   QAY   0   QAY   0   	QAY   0   
QÜÜ9Ñ;9lÌ  Ì  ¶Ì  ÜÌ    Services   obs   addObserver   xpcom-shutdown%   webapps-clear-data   kMessages   forEach-   _registeredConnections'   _allowedConnections!   _promptUICallers#   _messagePortPairs   ÿÿÿÿ   ?   this.InterAppCommService.init/<Á                        ¹                                          	   aMsg   Ì  9             ;    ¸   
T  A: QÔ$ 	   ppmm%   addMessageListener   ÿÿÿÿ   W   this.InterAppCommService.registerConnectionÁ               ç       ¹      K                                       aKeyword   aHandlerPageURI   aManifestURI   aDescription   aRules   manifestURL   pageURL%   subAppManifestURLs     q  "  é       
      T 5       QT 5      Q;      i;   â   =   T  =   V   =   V  =   T =   T 5   =   	T 5   
=   T 5   : QA5   T  7  QV      A5   T  Y   9W  QV  V   Y   V  ]   T ]   T ]   V   ]   9QÍÍÓÖÊÏÏÏ  ï  ÷ÏÔÍÉÈÈË 	   spec   DEBUG   debug=   registerConnection: aKeyword:     manifestURL:     pageURL:     aDescription: 9    aRules.minimumAccessLevel: %   minimumAccessLevel-    aRules.manifestURLs:    manifestURLs1    aRules.installOrigins:    installOrigins-   _registeredConnections   pageURL   description   rules   manifestURL   ÿÿÿÿ   c   this.InterAppCommService._matchMinimumAccessLevelÁ               C      ¹      t                                       aRules   aAppStatus   minAccessLevel  )"  s&              T   D   QT  5        $;      ;   â   =   : QCT  5       QV   x=   y   =   y   e=   y   z   ­T ;   5   5   	D   2QT ;   5   5   
D   QT ;   5   5      C   \T ;   5   5   
D   QT ;   5   5      C   $T ;   5   5      C   ;      ';   â   =   V   =   T : QBÊÉÓÍl  Ìu
 u
 uÊ ÙÙÓ
XÙÓ
XÓ
XÏÊ # %   minimumAccessLevel   DEBUG   debugy   rules.minimumAccessLevel is not available. No need to match.   web   privileged   certified   Ci   nsIPrincipal)   APP_STATUS_INSTALLED+   APP_STATUS_PRIVILEGED)   APP_STATUS_CERTIFIEDs   rules.minimumAccessLevel is not matched! minAccessLevel:     aAppStatus :    ÿÿÿÿ   W   this.InterAppCommService._matchManifestURLsÁ                      ¹   	   =                                       aRules   aManifestURL   manifestURLs  &  (  *            T   D   Q;    ¸   
T  5   :     $;      ;   â   =   : QCT  5      QV   ¸   
T : ×ÿ   C;      ';   â   =   V   =   T : QBÊÔÓÍÎÏÊ 8    Array   isArray   manifestURLs   DEBUG   debugm   rules.manifestURLs is not available. No need to match.   indexOfc   rules.manifestURLs is not matched! manifestURLs: !    aManifestURL :    ÿÿÿÿ   [   this.InterAppCommService._matchInstallOriginsÁ                      ¹   	   =                                       aRules   aInstallOrigin   installOrigins  À(  à*  ?            T   D   Q;    ¸   
T  5   :     $;      ;   â   =   : QCT  5      QV   ¸   
T : ×ÿ   C;      ';   â   =   V   =   T : QBÊÔÓÍÎÏÊ M    Array   isArray   installOrigins   DEBUG   debugq   rules.installOrigins is not available. No need to match.   indexOfk   rules.installOrigins is not matched! installOrigins: #    installOrigin :    ÿÿÿÿ   I   this.InterAppCommService._matchRulesÁ               ±      ¹                                 '         %   aPubAppManifestURL   aPubRules%   aSubAppManifestURL   aSubRules   pubApp   subApp#   isPubAppCertified#   isSubAppCertified    ú*  O2  T            ;    ¸   
T  :    Q;    ¸   
T :   QV   5   ;   5   5     QV  5   ;   5   5     QV   D   QV      $;      ;   â   =   : QBT  E   
QT     $;      ;   â   =   	: QCA¸   

T V  5   :  D   QA¸   

T V   5   :     BA¸   
T T :  D   QA¸   
T T  :     BV   E   QA¸   
T V  5   :  D   )QV   E   QA¸   
T V   5   :     B;      ;   â   =   : QCÏ	ÈÏ	ÈÞÞ cËÓÊÓÔÊÔÎÊÎ 	Ë	ÔÊ	Ë	ÔÓ    appsService'   getAppByManifestURL   appStatus   Ci   nsIPrincipal)   APP_STATUS_CERTIFIED   DEBUG   debuge   Only certified apps are allowed to do connections.q   No rules for publisher and subscriber. No need to match.1   _matchMinimumAccessLevel%   _matchManifestURLs)   _matchInstallOrigins   installOrigin-   All rules are matched.   ÿÿÿÿ   ]   this.InterAppCommService._dispatchMessagePortsÁ                É      ¹      º                          %      D      aKeyword%   aPubAppManifestURL5   aAllowedSubAppManifestURLs   aTarget   aOuterWindowID   aRequestID%   subAppManifestURLs   messagePortIDs    s2  9>              ;       4;   â   =      =      =   T : QT Ù   >   L;       ;   â   =   : QT ¸   
=   Y   T ]   	T ]   
: QA5      7   Q       L;       ;   â   =   : QT ¸   
=   Y   T ]   	T ]   
: QZ      QT ¸   
    A: Q   Ù   >   L;       ;   â   =   : QT ¸   
=   Y   T ]   	T ]   
: Q;       ;   â   =      : QT ¸   
=   Y      ]      ]   T ]   	T ]   
: QÕÌÊ  ÊÓÏ!ÈÈ ÒÓÏ!ÈÈ ÊÏ Ä £ ÆÌÓÏ!ÈÈ ÈÙÏÊÊÈÈ ÏM    DEBUG   debugC   _dispatchMessagePorts: aKeyword: +    aPubAppManifestURL: ;    aAllowedSubAppManifestURLs:    lengthU   No apps are allowed to connect. Returning.!   sendAsyncMessage3   Webapps:Connect:Return:KO   oid   requestID-   _registeredConnections[   No apps are subscribed to connect. Returning.   forEach!   messagePortIDs: 3   Webapps:Connect:Return:OK   keyword   messagePortIDs   ÿÿÿÿ   a   this.InterAppCommService._dispatchMessagePorts/<Á               $      ¹      g                                    3   aAllowedSubAppManifestURL   subscribedInfo   messagePortID ¦6  ;  £                  T  7   QV       (;       ;   â   =   T  : Q;   ¸   
:  ¸   
:    QA5   V  Y      ]   Y      ]   ]   	Y   T  ]   ]   
9Q;   ¸   
=   Y      ]   V  ]   ;   5   ¸   
V   5   @@: ;   5   ¸   
V   5   @@: : Q      ¸   
V  : Q
Ó

Ï §
 ±
ÌÒÏÊ
Ï
Ï ½Ñ
Ê
ÉÜÜ ½ ÃÙ#    DEBUG   debuga   The sunscribed info is not available. Skipping:    UUIDGenerator   generateUUID   toString#   _messagePortPairs   keyword   manifestURL   publisher   subscriber   messenger   sendMessage   connection   messagePortID   Services   io   newURI   pageURL	   push   ÿÿÿÿ   m   this.InterAppCommService._getAllowedSubAppManifestURLsÁ               @       ¹      !                                       aKeyword%   aPubAppManifestURL3   allowedPubAppManifestURLs3   allowedSubAppManifestURLs  y?  à@  Ý            A5    T  7   QV       
Z   V   T 7  QV      
Z   V  ÏÍ! '   _allowedConnections   ÿÿÿÿ   S   this.InterAppCommService._addSelectedAppsÁ               r       ¹      1                                      aKeyword%   aPubAppManifestURL   aSelectedApps3   allowedPubAppManifestURLs3   allowedSubAppManifestURLs   B  BF  ö            A5    T  7   QV       A5    T  Y   9W   QV   T 7   Q       V   T Z   9   QT ¸   
    : Q   ÏÔÎÒÓ ! '   _allowedConnections   forEach   ÿÿÿÿ   W   this.InterAppCommService._addSelectedApps/<Á               G       ¹                                             aSelectedApp1   allowedSubAppManifestURL 'E  F              T  5       Q      ¸   
V   : ×ÿ         ¸   
V   : Q
ÍÕ
Ù9    manifestURL   indexOf	   push   ÿÿÿÿ   C   this.InterAppCommService._connectÁ    
          J      ¹   $   C                       K            aMessage   aTarget   keyword   pubRules#   pubAppManifestURL   outerWindowID   requestID%   subAppManifestURLs3   allowedSubAppManifestURLs   appsToSelect   callerID	   glue  YF  8U              T  5       QT  5      QT  5      QT  5     QT  5     QA5      7  QV      I;      ;   â   =   : QA¸   	
      Z   T V  V  : QA¸   

      :   QZ     QV  K  Q   ùmW    
Q  	Q  QV  ¸   
V  : ×ÿ   -;      ;   â   =   V  : QÈ    V  V  7  QV  5     	QA¸   
   V   V  V  	:   
QV  
    -;      ;   â   =   V  : QÈ   1V  ¸   
Y   V  ]   V  5   ]   : QÈãQLMÿÿÿQNÈV  Ù   >   I;      ;   â   =   : QA¸   	
      V  T V  V  : Q;   ¸   
:  ¸   
:     QA5      Y   V  ]   V  ]   T ]   9Q;   5   ¸   
;   5   :   QV     VV  ¸   
         V  : ¸   
   ¸   
A:    ¸   
A: : Q   Z;      ;   â   =    : QA¸   !
Y      ]   "   ]       ]   Z   ]   #: QÎÍÎÍÍÑÓÖË  &ÒÈÉÍ0  þÜÏ

ØA
Î
Î
ÑÈ 8È

ØAÐÉÎ AÒ GËÓÒË M UÌÓÐÉÉÊÑÊ \ÈQèÌ `Ì m c _É oÓÍÊ!Ê!Ê!É u5    keyword   rules   manifestURL   outerWindowID   requestID-   _registeredConnections   DEBUG   debugm   No apps are subscribed for this connection. Returning.+   _dispatchMessagePorts;   _getAllowedSubAppManifestURLs   indexOfM   Don't need to select again. Skipping:    _matchRulesC   Rules are not matched. Skipping: 	   push   description   lengthë   No additional apps need to be selected for this connection. Just dispatch message ports for the existing connections.   UUIDGenerator   generateUUID   toString!   _promptUICallers   target   Cc]   @mozilla.org/dom/apps/inter-app-comm-ui-glue;1   createInstance   Ci+   nsIInterAppCommUIGlue   selectApps	   then	   binda   Error! The UI glue component is not implemented.'   _handleSelectedApps   callerID   selectedApps    ÿÿÿÿ      #   subAppManifestURL                     subscribedInfo       subRules       matched       ÿÿÿÿ   G   this.InterAppCommService._connect/<Á                        ¹                                             aData Q  ÂQ  `            A¸    
T  : Q
Ï  '   _handleSelectedApps   ÿÿÿÿ   G   this.InterAppCommService._connect/<Á                 Z       ¹      )                                       aError ßQ  S  c            ;       ;   â   =   T  : QA¸   
Y      ]      ]      ]   Z   ]   : Q×
ÍÊ%Ê%Ê%É i
9    DEBUG   debugS   Error occurred in the UI glue component. '   _handleSelectedApps   callerID   keyword   manifestURL   selectedApps   ×   ÿ       Í     ÿÿÿÿ   ß   ì           +                       ÿÿÿÿ   Q   this.InterAppCommService._getConnectionsÁ              õ       ¹      C                                    aMessage   aTarget   outerWindowID   requestID   connections  VU  Y  |            T  5       QT  5     QZ      QA5   KÆ       Q   ym     QA5      7  QV  KÆ      Q   5m     QV     7  QV  ¸   
   : QÈãQLMÿÿÿËQNÈÇÈãQLMÿÿÿQNÈÇT ¸   
=   Y      ]   V   ]   V  ]   : QÍÍÊÕ0~Ñ
ÑÓ0:ÑÏò ÏÊÉÉ K    outerWindowID   requestID'   _allowedConnections   forEach!   sendAsyncMessageA   Webapps:GetConnections:Return:OK   connections   oid    ÿÿÿÿ         keyword                 3   allowedPubAppManifestURLs                 1   allowedPubAppManifestURL                3   allowedSubAppManifestURLs             U   this.InterAppCommService._getConnections/<Á                 2       ¹                                          1   allowedSubAppManifestURL =W  )X                ¸    
Y     ]      ]   T  ]   : Q
ÑÊÊÈ 
L 	   push   keyword#   pubAppManifestURL#   subAppManifestURL   >         s   ;       3      ÿÿÿÿ   E   m          h   H         z   )         ÿÿÿÿ   U   this.InterAppCommService._cancelConnectionÁ              /      ¹                              +            aMessage   keyword#   pubAppManifestURL#   subAppManifestURL3   allowedPubAppManifestURLs3   allowedSubAppManifestURLs   index   messagePortIDs $Y  Ì_              T  5       QT  5     QT  5     QA5   V   7  QV      );      ;   â   =   V   : QV  V  7  QV      );      ;   â   =   V  : QV  ¸   
V  :   QV  ×ÿ   );      ;   â   =   	V  : Q;      ;   â   =   
: QV  ¸   
V  ?: QV  Ù   >   :V  V  /Q;   ¸   
V  : Ù   >   A5   V   /Q;      ;   â   =   : QZ     QA5   K  Q   ymW    QA5   V  7  QV  5    V   E   2QV  5   5   V  E   QV  5   5   V     V  ¸   
V  : QÈãQLMÿÿÿQNÈV  ¸   
   A: QÍÍÍÐØÎØÏÈØÓÔËÊÐ
ÊÌÓÉÏ0~Ð
ÐÔÙÓáÐ À    keyword#   pubAppManifestURL#   subAppManifestURL'   _allowedConnections   DEBUG   debug-   keyword is not found: 1   publisher is not found:    indexOf3   subscriber is not found: 5   Cancelling the connection.   splice   length   Object	   keysk   Unregistering message ports based on this connection.#   _messagePortPairs   publisher   manifestURL   subscriber	   push   forEach    ÿÿÿÿ         messagePortID                  	   pair       ÿÿÿÿ   Y   this.InterAppCommService._cancelConnection/<Á                        ¹                                             aMessagePortID s_  À_  À            A5    T  /QË. #   _messagePortPairs                 ÿÿÿÿ     n          ÿÿÿÿ   [   this.InterAppCommService._identifyMessagePortÁ               Ä       ¹      O                                       aMessagePortID   aManifestURL	   pair  ï_  ùb  Å            A5    T  7   QV       .;      ";   â   =   T  =   : Q@V   5   5   T    Y   V   ]   C]   V   5   	5   T    Y   V   ]   B]   ;      ";   â   =   
T =   : Q@ÏÓ ÉÒ	ÉÒ	ÉÓ Ú #   _messagePortPairs   DEBUG   debugO   Error! The message port ID is invalid: [   , which should have been generated by parent.   publisher   manifestURL	   pair   isPublisher   subscriberI   Error! The manifest URL is invalid: =   , which might be a hacked app.   ÿÿÿÿ   [   this.InterAppCommService._registerMessagePortÁ              ü      ¹                              %            aMessage   aTarget   messagePortID   manifestURL   pageURL   identity	   pair   isPublisher   sender   receiver  c  áh  à            T  5       QT  5     QT  5     QA¸   
V   V  :   QV      $;      ;   â   =   : Q;      ;   â   =   V  : QV  5     QV  5   	  QV     V  5   
   V  5     QV  T 0   QV  V  0   QV  Z   0   Q;      ;   â   =   : QV     V  5      V  5   
  QV  5      ¼   ¢m  QV  5   ¸   
:    Q;      ,;   â   =   ;   ¸   
V  : : QV  5   ¸   
=   Y   V  ]   V  5   ]   V  5   ]   V   ]    : QÈãV  5   Ù   ÿÿÿSÍÍÍÐÈÓØÎÎáÍÎÎÓáÉ(  ²+Ð
ÈßÿÿÿáÕ)É)Î)Î)É ÿ üÕ    messagePortID   manifestURL   pageURL)   _identifyMessagePort   DEBUG   debugk   Cannot identify the message port. Failed to register.;   Registering message port for 	   pair   isPublisher   publisher   subscriber   target   messageQueuey   Checking if the other port used to send messages but queued.   shift)   Delivering message: 	   JSON   stringify!   sendAsyncMessage;   InterAppMessagePort:OnMessage   message   length    ÿÿÿÿ         message        I  ²       K     ÿÿÿÿ   ÿÿÿÿ   _   this.InterAppCommService._unregisterMessagePortÁ                      ¹      .                                       aMessage   messagePortID   manifestURL   identity i  Ój              T  5       QT  5     QA¸   
V   V  :   QV      $;      ;   â   =   : Q;      ;   â   =   V  : QA5   V   /QÍÍÐÈÓØÌ-    messagePortID   manifestURL)   _identifyMessagePort   DEBUG   debugo   Cannot identify the message port. Failed to unregister.?   Unregistering message port for #   _messagePortPairs   ÿÿÿÿ   M   this.InterAppCommService._removeTargetÁ              `      ¹      e                                    aTarget   messagePortIDs ïj  o              T      $;       ;   â   =   : Q;       ;   â   =   : QZ      QA5   K  Q   àmW    QA5   V  7  QV  5   5   T  HD   QV  5   5   T  H     QV   ¸   
V  : QV  5   5   T  H   V  5      V  5     QV  5   ¸   	
=   
Y   V  5   ]   V  5   ]   V  ]   : QÈÈãQLMÿÿÿ QNÈV   ¸   
   A: QÓÓÉÏ0  åÐ
ÐØÒËÓÒÓÎÕÎÎÉ *Ó 0Ð 0    DEBUG   debugg   Error! aTarget cannot be null/undefined in any way.c   Unregistering message ports based on this target.#   _messagePortPairs   publisher   target   subscriber	   push!   sendAsyncMessage9   InterAppMessagePort:Shutdown   manifestURL   pageURL   messagePortID   forEach    ÿÿÿÿ         messagePortID                  	   pair                    actor       ÿÿÿÿ   Q   this.InterAppCommService._removeTarget/<Á                        ¹                                             aMessagePortID ªn  ÷n  0            A5    T  /QË. #   _messagePortPairs   b   æ       X   ò   ÿÿÿÿ   h   Õ          ­            ÿÿÿÿ   K   this.InterAppCommService._postMessageÁ                    ¹      {                                      aMessage   messagePortID   manifestURL   message   identity	   pair   isPublisher   receiver o   s  5            T  5       QT  5     QT  5     QA¸   
V   V  :   QV      $;      ;   â   =   : QV  5     QV  5     QV     V  5   	   V  5   
  QV  5       j  Q;      ;   â   =   : QV     V  5   
   V  5   	  QV  5   ¸   
V  : QÈÈ;      ,;   â   =   ;   ¸   
V  : : QV  5   ¸   
=   Y   V  5   ]   V  5   ]   V   ]    V  ]   : QÍÍÍÐÈÓÎÎáÊËÓ
áØßÿÿÿáÕ'Î'Î'É'É N;    messagePortID   manifestURL   message)   _identifyMessagePort   DEBUG   debugc   Cannot identify the message port. Failed to post.	   pair   isPublisher   subscriber   publisher   targety   The receiver's target is not ready yet. Queuing the message.   messageQueue	   push)   Delivering message: 	   JSON   stringify!   sendAsyncMessage;   InterAppMessagePort:OnMessage   pageURL    ÿÿÿÿ         sender        ¹   d   ÿÿÿÿÿÿÿÿ            ÿÿÿÿ   Y   this.InterAppCommService._handleSelectedAppsÁ     	         	 Q      ¹      t                                       aData   callerID   caller   outerWindowID   requestID   target#   pubAppManifestURL   keyword   selectedApps3   allowedSubAppManifestURLs Âs  y  U            T  5       QA5   V   7  QV      $;      ;   â   =   : QA5   V   /QV  5     QV  5     QV  5     QT  5     QT  5   	  QT  5   
  Q  QV  Ù   >   ?;      ;   â   =   : QA¸   
V  V  : W  Q   >;      ;   â   =   : QA¸   
V  V  V  : W  QA¸   
V  V  V  V  V  V  : QÍÐÓÌÎÎÎÍÍÍË:ÓÐÍÓÔÈ zÐÌ zA    callerID!   _promptUICallers   DEBUG   debug=   Error! Cannot find the caller.   outerWindowID   requestID   target   manifestURL   keyword   selectedApps   lengthI   No new apps are selected to connect.;   _getAllowedSubAppManifestURLsM   Some new apps are selected to connect.!   _addSelectedApps+   _dispatchMessagePorts   ÿÿÿÿ   O   this.InterAppCommService.receiveMessageÁ               ·      ¹                                 !            aMessage   message   target ¤y  U        	      ;       !;   â   =   T  5   : QT  5      QT  5     QT  5   =   IE   4QT  5   =   IE    Q;   ¸   	
T  5   : ×ÿ   AV  ¸   

V   5   :     $;       ;   â   =   : Q@T  5   x=   y   F=   y   U=   y   d=   y   o=   y   z=   y   =   y   z   ¤A¸   
V   V  : Q   A¸   
V   V  : Q   rA¸   
V   : Q   ]A¸   
V   : Q   HA¸   
V   V  : Q   /A¸   
V   : Q   A¸   
V  : Q   ÜÍÍÔÔÔ
Ô
ÓÈh  ëu
u
u
u
u
u
uÊ ÔXÔXÐXÐXÔXÐXÐX    DEBUG   debug-   receiveMessage: name: 	   name	   json   target-   child-process-shutdown=   InterAppMessagePort:Unregister   kMessages   indexOf!   assertContainApp   manifestURLs   Got message from a process carrying illegal manifest URL.   Webapps:Connect-   Webapps:GetConnections3   InterAppConnection:Cancel?   InterAppMessagePort:PostMessage9   InterAppMessagePort:Register   _connect   _getConnections#   _cancelConnection   _postMessage)   _registerMessagePort-   _unregisterMessagePort   _removeTarget   ÿÿÿÿ   A   this.InterAppCommService.observeÁ                      ¹            	                 5            aSubject   aTopic   aData   k  Ù  «            T   Q   Qx=    y   =   y   gz  ø;   5   ¸   
A=    : Q;   5   ¸   
A=   : Q;   ¸   
   A: Qn   @1   Q  T  ¸   
;   	5   
:    QV       &;      ;   â   =   : QÈV   5      &;      ;   â   =   : QÈ;   ¸   
V   5   :   QV      &;      ;   â   =   : QÈA5   K  Q   amW    QA5   V  7  QV  V  7   7V  V  /Q;      #;   â   =   V  =   : QÈãQLMÿÿÿQNÈA5   K  Q  'mW    QA5   V  7  QV  V  7   7V  V  /Q;      #;   â   =   V  =   : QV  K  Q   ¬mW    QV  V  7  QV  Ù   ?  Q    nmV  V  7V  H   LV  ¸   
V  ?: Q;      .;   â   =   V  =   V  =   : QV  #?W  QQãV  >ÿÿÿÈÈãQLMÿÿÿTQNÈÈãQLMÿÿþÙQNÈ;   â   =   : Q   ÈÏh u
 µuÊ ­ÛÛÑ °ÌXÔ
ÈÓ
ÉÓ
ÕÈÓ
Ï0fÐÐÉÊì ÞÏ0 ,ÐÐÉÊÞ èÍ0  ±ÐÎÐ n`v êÎÔÚË î ê@Î ð ê8ê öÓX    xpcom-shutdown%   webapps-clear-data   Services   obs   removeObserver   kMessages   forEach	   ppmm   QueryInterface   CiK   mozIApplicationClearPrivateDataParams   DEBUG   debug   Error updating registered/allowed connections for an uninstalled app.   browserOnlyi   Only update registered/allowed connections for apps.   appsService/   getManifestURLByLocalId   appId-   _registeredConnections   Remove o    from registered connections due to app uninstallation.'   _allowedConnections    (as a pub app) from allowed connections due to app uninstallation.   length   splice-    (as a sub app to pub k   ) from allowed connections due to app uninstallation.   Finish updating registered/allowed connections for an uninstalled app.    ÿÿÿÿ          params       manifestURL              E   this.InterAppCommService.observe/<Á                        ¹                                          	   aMsg Z    °            ;    ¸   
T  A: Q
Ô' 	   ppmm+   removeMessageListener                 keyword                 %   subAppManifestURLs                     keyword                 3   allowedPubAppManifestURLs                 #   pubAppManifestURL                 %   subAppManifestURLs                    i       Õ  -     B  ²      q  v      X  g            ÿÿÿÿÿÿÿÿÌ          ÿÿÿÿû          ÿÿÿÿC            N  s          ^  V         Ë  9         Û          8  ¾         H  ¡         f     	   