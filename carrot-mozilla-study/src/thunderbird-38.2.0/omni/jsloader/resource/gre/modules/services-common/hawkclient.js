ç¿s¹                     ¹   !   §                          "       0     resource://services-common/hawkclient.js     /                            Af    0    Q;   5      Q5      QQ;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q=      Q=      Q;   ¸   
A=      : Q;   ¸   
A=      : QA   0   QA5   Y      ]      ]      a      ]      ]   @]      	]      
]    0   Q.2Ì'Þ(Õ1Õ1Õ7Õ5Õ0Õ,Õ3Õ1.Ë2Ë4ÛGKÛQ^ÌdfËqÊ  Ê  ¬Ê  ³Ê  ÈÊ 3Ê JÐ O !   EXPORTED_SYMBOLS   Ci   Cu   Components   interfaces   utils   importG   resource://services-common/utils.jsG   resource://services-crypto/utils.jsS   resource://services-common/hawkrequest.jsO   resource://services-common/observers.jsE   resource://gre/modules/Promise.jsm=   resource://gre/modules/Log.jsmK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   PREF_LOG_LEVELM   services.common.hawk.log.appender.dump5   PREF_LOG_SENSITIVE_DETAILSE   services.common.hawk.log.sensitive   XPCOMUtils!   defineLazyGetter   log   logPII   HawkClient   prototype   _constructError%   _updateClockOffset'   localtimeOffsetMsec   now   request   observerPrefix'   _maybeNotifyBackoff?   newHAWKAuthenticatedRESTRequest                     HawkClient                  ÿÿÿÿ                    *      ¹      ?                        $             log   appender	  O  4             ;    5   ¸   
=   :    QV   ;    5   5   0   Q;    5   R    QV   ¸   
V  : QV  ;    5   5   	0   Q  Q;   
5   ¸   
;   : ;   5   5   E   Q;   
5   ¸   
;   :   QV  ;    5   V  7D   Q;    5   5   	0   QÈ   +  Qv  QV   ¸   
V  : QÈ    V   ÖÈ9ÙËÈÓÙ  ÖÙÖ	ÈôÌÚF    Log   repository   getLogger	   Hawk   level   Level   Debug   DumpAppender   addAppender   Error   Services   prefs   getPrefType   PREF_LOG_LEVEL   Ci   nsIPrefBranch   PREF_STRING   getCharPref   error    ÿÿÿÿ         level        ÿÿÿÿ         e         w          x      ÿÿÿÿ   ÿ      ÿÿÿÿ   ÿÿÿÿ                      8       ¹                                            K             ;    5   ¸   
;   :       Qv   QBÈÈ    ÖÉÌË    Services   prefs   getBoolPref5   PREF_LOG_SENSITIVE_DETAILS    ÿÿÿÿ          _                   !      ÿÿÿÿÿÿÿÿ/             ÿÿÿÿ      this.HawkClientÁ                        ¹                                           	   host   Î  ^             AT  0    QA>0   QÊcÈ 	   host)   _localtimeOffsetMsec   ÿÿÿÿ   S   this.HawkClient.prototype._constructErrorÁ               å       ¹      D                                      restResponse   error   errorObj   retryAfter  í  Ð  q             Y   T ]    T ¸   
:  ]   T  5   ]   T  5   ]   T  5   ]       ]      QT  5   E   QT  5   5   	  QV     ;   
â   
V  :    	V  W  QV     >V   V  0   QA5      %;   ¸   
A5   =   V  : QV   ÈxÊÈÍÍÍÏàÓÑÎà    error   toString   errorString   statusText   message   status	   code   errno   headers   retry-after   parseInt   retryAfter   observerPrefix   Observers   notify#   :backoff:interval   ÿÿÿÿ      toString                          ¹                                           î  *  |             A5    =   A5   Ô' 	   code   :    message   ÿÿÿÿ   Y   this.HawkClient.prototype._updateClockOffsetÁ                       ¹                                          dateString ¤  ä                  Q;    ¸   
T  :    QAV   A¸   
:  0   Q;   ¸   
=   A5   =   A5   : QÈ   1   Qv   Q;   ¸   	
=   
T  : QÈ    _
ÏÈÍ-ÊïÌà 	   Date   parse)   _localtimeOffsetMsec   now   log   debug!   Clock offset vs 	   host   : 	   warnI   Bad date header in server response:     ÿÿÿÿ          serverDateMsec        ÿÿÿÿ          err            c          ]   ÿÿÿÿ   e   %   ÿÿÿÿ   ÿÿÿÿ   [   this.HawkClient.prototype.localtimeOffsetMsecÁ                          ¹                                           2  `  ¬             A5    ! )   _localtimeOffsetMsec   ÿÿÿÿ   ;   this.HawkClient.prototype.nowÁ                          ¹      	                                     ¦  Å  ³             ;    ¸   
:  Ì 	   Date   now   ÿÿÿÿ   C   this.HawkClient.prototype.requestÁ                  ¹      u                        #      D   	   path   method   credentials   payloadObj   retryOK   _onComplete   onComplete   deferred   uri	   self   extra   requestu  P+  È                H   @   Q   H   Y      Q   H   C   Q       Q   W   Q   ¸    
:     Q;   ¸   
:     QA5        QA   	QY   A¸   
:  ]   A5   ]     QA¸   
V     V  :   Q   =   D   "Q   =   D   Q   =   	   #V     Á
   V   : Q   V     Á
V   : Q   E  Qv  Q;   
¸   
=   V  : Q   ¸   
V  : QÈ       5   Ó×Ì  ÏË Ê  ÈÌ	ÉÌÉÑ 
 ÈÈÐÕ
ÈeíÞÙÌÙÛË    toLowerCase   Promise   defer	   host   now'   localtimeOffsetMsec?   newHAWKAuthenticatedRESTRequest	   post   put   patch   log   error7   Failed to make hawk request   reject   promise   ÿÿÿÿ      _onComplete              ¥      ¹      ¢                        C            error   restResponse   status   jsonResponse   okResponse K  ß'  Ï             T     ;    ¸   
=   T  : QA5      QV   5     Q;    ¸   
=      =   V  =   V   5   	: Q;   
   $;    ¸   
=   V   5   : Q   	   	¸   
V   =   : Q   	   	¸   
V   =   : QT     5      ¸   
   	   	¸   
V   T  : :    	   	¸   
V   5   5   : QV  XHE   !Q   E   Q=   V   5   q    d;    ¸   
=      =   : Q      ¸   
   	   	¸   
            B: : Y     Q;   ¸   
V   5   : W  Q     Qv  QÈ    X ÈV  E   QV  X,  QV   D   QV  5      ^V  5            ¸   
V  :       ¸   
   	   	¸   
V   =   : :       ¸   
A5   : QØ
Ë
ÎâÐ  Ùß  áÞÞéÿÿÿðãÙ'ÐáÑæ  ð  û
ÊÕÍÓ
Û
ÔÉ
ÕëÿÿÿðÛ     log	   warn%   hawk request error   response   status   debug   (Response)    : code: !    - Status text:    statusText   logPII   Response text: 	   body'   _maybeNotifyBackoff   x-weave-backoff   x-backoff   reject   _constructError%   _updateClockOffset   headers	   date   retry-after#   Received 401 for    : retrying   resolve   request	   JSON   parse   error   Request failed    ÿÿÿÿ         notJSON         Ç  "       ê     ÿÿÿÿ   ÿÿÿÿ      onComplete                p       ¹      #                                    error ù'  Q)        	         ¸    
AT  l Q   Z   Qv   Q;   ¸   
=   ;   ¸   
V   : : Q      ¸   
V   : QÈ    ÙÌÑÐ à 	   call   log   errorQ   Unhandled exception processing response:   CommonUtils   exceptionStr   reject    ÿÿÿÿ          ex                      N   ÿÿÿÿ    ÿÿÿÿ         ex         ×   i      A  9   ÿÿÿÿ   ÿÿÿÿ   [   this.HawkClient.prototype._maybeNotifyBackoffÁ              º       ¹   
   A                                    response   headerName   headerVal   backoffInterval  ×,  ä.  6      	      A5     D   QT  5       T  5   T 7   QV         Q;   â   V   ×
: W  Q   @  Qv  Q;   ¸   
=   T =   V   : QÈÈ    ;   ¸   
A5    =   	V  : QÍÉÑÐÍÌÑÏ BËàM    observerPrefix   headers   parseInt   log   errore   hawkclient response had invalid backoff value in '   ' header:    Observers   notify#   :backoff:interval    ÿÿÿÿ         ex         A          _   4   ÿÿÿÿÿÿÿÿ             ÿÿÿÿ   s   this.HawkClient.prototype.newHAWKAuthenticatedRESTRequestÁ                        ¹      	                                       uri   credentials   extra   4/  /  J            ;    T  T T R Ï: 9   HAWKAuthenticatedRESTRequest