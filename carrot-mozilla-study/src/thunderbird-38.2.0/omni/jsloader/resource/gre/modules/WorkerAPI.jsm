ç¿s¹                0     ¹      o                                 0     resource://gre/modules/WorkerAPI.jsm     J                          ;   5       Q5      Q5      QQ;   ¸   
=   : Q;   ¸   
=   	: Q;   
¸   
A=   =   : Q;   
¸   
A=   =   : QAf    0   QA   0   Q;   Y      ]      ]   Y      ]      ]      ]      ]      ]      	]      
]      ]   ]   0   Q		ê5Õ1Õ3ÛjÛeÌ&Ì ÊÊ%Ê3Ê8Ê>ÊAÊDÊGÊbÊeÕ      Cc   Ci   Cu   Components   classes   interfaces   utils   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter)   getFrameWorkerHandleM   resource://gre/modules/FrameWorker.jsm   openChatWindowO   resource://gre/modules/MozSocialAPI.jsm!   EXPORTED_SYMBOLS   WorkerAPI   prototype   terminate   _handleMessage'   social.manifest-get'   social.manifest-set)   social.reload-worker'   social.user-profile7   social.ambient-notification%   social.cookies-get'   social.request-chat5   social.notification-create   handlers                     WorkerAPI                  ÿÿÿÿ      WorkerAPI                 j       ¹   
   *                           	            provider	   port  ù  ¡               T     ;    =   R pAT  0   QAT 0   QA5   A5   ¸   
A: 0   QA5   ¸   
Y   =   ]   	: QËÊÊÔÉÒÊÿÿÿè5    ErrorW   Can't initialize WorkerAPI with a null port   _provider   _port   onmessage   _handleMessage	   bind   postMessage#   social.initialize   topic   ÿÿÿÿ      terminate                          ¹                                           Ú  ú  !             A5    ¸   
:  QÑ    _port   close   ÿÿÿÿ      _handleMessage              ¾       ¹      %                                    event   topic	   data   handler &  ¢  %             T  5    5      Q5      QQA5   V   7  QV      ';   ¸   
=   V   =   : QV  ¸   
AV  l Q   M  Qv  Q;   ¸   
=   V   =   	V  =   
V  5   : QÈ    ßÐà,ÙÌü 	   data   topic   handlers   Cu   reportErrorU   WorkerAPI: topic doesn't have a handler: '   '	   callK   WorkerAPI: failed to handle message '   ':    
   stack    ÿÿÿÿ         ex         \          v   A   ÿÿÿÿ   ÿÿÿÿ   g   WorkerAPI.prototype.handlers["social.manifest-get"]Á                 1       ¹                                          	   data Ö  }  4             A5    ¸   
Y   =   ]   A5   5   ]   : Q6ÒÊÐÿÿÿÎR    _port   postMessage   social.manifest   topic   _provider   manifest	   data   ÿÿÿÿ   g   WorkerAPI.prototype.handlers["social.manifest-set"]Á               J       ¹                                          	   data   SocialService   origin ¢  °  8             ;    ¸   
=   Y   : 5      QA5   5     QV   ¸   
V  T  : Q:
ÖÍ
ÐÖ+    Cu   importQ   resource://gre/modules/SocialService.jsm   SocialService   _provider   origin   updateProvider   ÿÿÿÿ   i   WorkerAPI.prototype.handlers["social.reload-worker"]Á                        ¹                                          	   data Ö  	  >             A5    ¸   
:  QÑ    _provider   reload   ÿÿÿÿ   g   WorkerAPI.prototype.handlers["social.user-profile"]Á                        ¹                                          	   data )	  e	  A             A5    ¸   
T  : QÔ'    _provider#   updateUserProfile   ÿÿÿÿ   w   WorkerAPI.prototype.handlers["social.ambient-notification"]Á                        ¹                                          	   data 	  Ô	  D             A5    ¸   
T  : QÔ,    _provider-   setAmbientNotification   ÿÿÿÿ   e   WorkerAPI.prototype.handlers["social.cookies-get"]Á               ^       ¹   	                                      	   data	   port   whandle ø	  ì  G             A5       Q;   â   A5   5   @:    QV   5   ¸   
:  QV   5   5   ¸   
A    : QL
Ì
Ö
ÈÔß`	    _port)   getFrameWorkerHandle   _provider   workerURL	   port   close   _worker   browserPromise	   then   ÿÿÿÿ   i   WorkerAPI.prototype.handlers["social.cookies-get"]/<Å                >       ¹                                            browser   mm Í  ä  O             T  5       Q   ¸   
=       : Q   ¸   
=   : QÎÚ_Õ.    messageManager%   addMessageListener?   frameworker:cookie-get-response!   sendAsyncMessage-   frameworker:cookie-get   ÿÿÿÿ   #   _onCookieResponse                      ¹      '                                      msg   cookies   results ^  £  Q                 ¸    
=   ;   : QT  5   ¸   
=   :    QZ      QV   ¸   
    : Q    ¸   
Y   =   ]   	   ]   
: Q
ßÔ
ÈÊ
Ô\
ÖÊÊ\
, +   removeMessageListener?   frameworker:cookie-get-response#   _onCookieResponse	   json   split   ;   forEach   postMessage7   social.cookies-get-response   topic	   data   ÿÿÿÿ      WorkerAPI.prototype.handlers["social.cookies-get"]/</_onCookieResponse/<Á               ì       ¹   
   ;                                       aCookie	   name   value +  (  U             T  ¸    
=   : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     QQQV   D   
QV     r      ¸   
Y   ;   â   V   ¸   
:  : ]   V     %;   â   V  ¸   
:  :    
=   	]   : QÏÔÿÿÿðÉçØÎÖÕÿÿÿ÷È Úÿÿÿ÷ÒXI    split   =	   next	   done   value	   push   unescape	   trim	   name      ÿÿÿÿ   g   WorkerAPI.prototype.handlers["social.request-chat"]Á                        ¹                                          	   data   Q  b             ;    â    @A5   T  : QØ+    openChatWindow   _provider   ÿÿÿÿ   u   WorkerAPI.prototype.handlers["social.notification-create"]Á     	        â       ¹      M                                   	   data   listener	   port   provider   id	   type	   icon	   body   action   actionArgs   alertsService }  B  e                 W   Q;    5   ¸   
=   :     A5      QA5      QT  5      Q5     Q5     Q5   	  Q5   
   Q5      QQ;   5   ¸   
;   5   :   QV  ¸   
V  A5   5   V       @V   V  : QnÊe
Öi
Ì
Ì
ÿÊ
ÑÊlÈn  ÏË*    0    Services   prefs   getBoolPrefE   social.toast-notifications.enabled   _port   _provider   id	   type	   icon	   body   action   actionArgs   Cc;   @mozilla.org/alerts-service;1   getService   Ci!   nsIAlertsService+   showAlertNotification	   name   ÿÿÿÿ      listener                »      ¹      p                         &            subject   topic	   data   ø  f  n       
      T =    H  ±      ¸   
Y   =   ]   Y         ]         ]         ]   ]   : Q      x=   y   
z  7      5   	    Q   Q      ¸   

      5   	:    Q;   5   ¸   
      5   @@:   QV   5   V  5      V   V  5   0   Q      ¸   
V   :    L  Q;   5   ¸   
=   :   QV  ¸   
V   5   =   : QÈ   0;   ¸   
=         5   	=   : QÈ   
   Éq
ÖÊÏ#Ï#Ôq
uÊh GuÊxÏÑàÈ|âÈÓÓÕGËÖÈãá  XX %   alertclickcallback   postMessage5   social.notification-action   topic   id   action   actionArgs	   data	   link   toURL   resolveUri   Services   io   newURI   origin   scheme   isSameOrigin   wm'   getMostRecentWindow#   navigator:browser   openUILinkIn	   spec   tab   Cu   reportError=   Not opening notification link 5    as not in provider origin    ÿÿÿÿ          uriToOpen    	   pUri                     xulWindow             ÿÿÿÿ   >  A       