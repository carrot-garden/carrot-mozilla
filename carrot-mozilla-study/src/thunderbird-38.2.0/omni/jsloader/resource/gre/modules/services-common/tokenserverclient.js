çżsš                     š   !   Ô                          /       0     resource://gre/modules/services-common/tokenserverclient.js     @                               Af    0    Q;   5      Q5      Q5      Q5   	   QQ;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q=      QA   0   Q;   ;   R  0   Q;   5   ;   0   Q;   5      0   Q;   5      0   QA   0   Q;   ;   R  0   Q;   5   ;   0   Q;   5      0   QA   0   Q;   ;   R  0   Q;   5   ;   0   Q;   5      0   QA   0   Q;   Y   @]      	]      
]   @]      ]      ]    0   QĚöBŐ1Ő,Ő0Ő1Ő5Ë Ě#Ë#ÉŐFŐ(Ő+3Ë7Ë*ÉĘË Ő=]ËcË)ÉĘËhŐt  Ě  Ę  íĘ 2Ę ŹĘ ĂĐ !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importG   resource://gre/modules/Services.jsm=   resource://gre/modules/Log.jsmE   resource://services-common/rest.jsG   resource://services-common/utils.jsO   resource://services-common/observers.js   PREF_LOG_LEVELY   services.common.log.logger.tokenserverclient-   TokenServerClientError   prototype   Error   constructor   _toStringFields   toString;   TokenServerClientNetworkError9   TokenServerClientServerError#   TokenServerClient	   _log=   getTokenFromBrowserIDAssertion+   _processTokenResponse   observerPrefix'   _maybeNotifyBackoff   newRESTRequest                  #   TokenServerClient   -   TokenServerClientError   ;   TokenServerClientNetworkError   9   TokenServerClientServerError                  ˙˙˙˙   -   TokenServerClientError                 "       š                                              message   j                A=   0    QAT  D   Q=   0   QĚŐ* 	   name-   TokenServerClientError   message   Client error.   ˙˙˙˙   a   TokenServerClientError.prototype._toStringFieldsÁ                          š      	                                       E  &             Y   A5    ]    Ě    message   ˙˙˙˙   S   TokenServerClientError.prototype.toStringÁ                   /       š                                           z  É  )             A5    =   ;   ¸   
A¸   
:  : =   ŕ(˙˙˙ńË- 	   name   (	   JSON   stringify   _toStringFields   )   ˙˙˙˙   ;   TokenServerClientNetworkError                        š                                              error ş  
  4             A=   0    QAT  0   QĚĘ 	   name;   TokenServerClientNetworkError   error   ˙˙˙˙   o   TokenServerClientNetworkError.prototype._toStringFieldsÁ                          š      	                                     ě    ;             Y   A5    ]    Ě    error   ˙˙˙˙   9   TokenServerClientServerError                 Y       š   	                                          message   cause  '    ^             T H   =    U QA;   R  ¸   
:  0   QA=   0   QAT  D   Q=   0   QAT 0   QÎÓĚŐĘ    general   now	   Date   toISOString	   name9   TokenServerClientServerError   message   Server error.   cause   ˙˙˙˙   m   TokenServerClientServerError.prototype._toStringFieldsÁ                 {       š   
   %                           
             fieldsë    h             Y   A5    ]    A5   ]   A5   ]      QA5      DV   A5   5   0   QV   A5   5   0   QV   A5   5   	0   QV   ËËĐnŐŐŐs    now   message   cause   response   response_body	   body!   response_headers   headers   response_status   status   ˙˙˙˙   #   TokenServerClient                }       š                                           levelD                 A;   5   ¸   
=   : 0    Q=      Q;   5   ¸   
;   	: W   Q     Qv  QČ    A5    ;   5   V   70   
Q×ÉĘÖÍÓŰ# 	   _log   Log   repository   getLogger1   Common.TokenServerClient   Debug   Services   prefs   getCharPref   PREF_LOG_LEVEL   level   Level    ˙˙˙˙         ex         +   #       O      ˙˙˙˙   ˙˙˙˙   =   getTokenFromBrowserIDAssertion                    š      U                              D      url   assertion   cb   addHeaders   req   client   ď#  ,*  î       	      T H   Y   U QT      ;    =   R pT     ;    =   R p       ;    =   R pA5   ¸   
=   T  : QA¸   
T  :    QV   ¸   
=   	=   
: QV   ¸   
=   =   T : QT K  Q   %mW  V   ¸   
V  T V  7: QăQLM˙˙˙ŰQNČA   QV   ¸   
   : QÎËËËÚËČŮÝĚ0*ĘčÔ ' -   TokenServerClientError5   url argument is not valid.A   assertion argument is not valid.3   cb argument is not valid.	   _log   debugE   Beginning BID assertion exchange:    newRESTRequest   setHeader   Accept!   application/json   Authorization   BrowserID    get    ˙˙˙˙         header       ˙˙˙˙      onResponse             Ë       š   	   R                                    error   callCallback	   self Ł&  &*                  W   QT       ;    T  R @: QA   Q    ¸   
A5   V   : Q   x  Q  Qv  QA5   ¸   
=   ;   ¸   
V  : : Q;   V  R   QV  A5   0   QV   V  @: QČ     Ę Ď˙˙˙ý
  äŇŇĐ  ĘČĐŐ ;   TokenServerClientNetworkError+   _processTokenResponse   response	   _log	   warnQ   Error processing token server response:    CommonUtils   exceptionStr-   TokenServerClientError   ˙˙˙˙      callCallback                       š      /                                    error   result  G'  š(        	            &      5    ¸   
=   : Q  T  T : Q   K   Qv   Q      5    ¸   
=   ;   ¸   
V   : : QČ    @  Q
ß

ŐĚ
ŰĐ 
Ë
 	   _log	   warnM   Callback already called! Did it throw?_   Exception when calling user-supplied callback:    CommonUtils   exceptionStr    ˙˙˙˙          ex         -          C   ?   ˙˙˙˙    ˙˙˙˙         ex       error         3   $      Y   k   ˙˙˙˙   Ń   +       Ç   7   ˙˙˙˙   ˙˙˙˙   )   processTokenResponse                    š   9                          W            response   cb   ct   result  9+  <  2            A5    ¸   
=   T  5   : QT  5   5   D   Q=      QV   =   E   QV   ¸   
=   	:       QA5    ¸   

=   : QA5    ¸   
=   V   : QA5    ¸   
=   T  5   : Q;   =   =   R   QV  T  0   QT V  @: QČČ  Q;   ¸   
T  5   : W  Q   s  Q  Qv  QA5    ¸   

=   T  5   : Q;   =   =   R   QV  T  0   QT V  @: QČČ    A¸   
T  =   : QA¸   
T  =   : QT  5   X Č  M  Q=   V  q   uV  5   - Á
:    Q   ;m5   W  QA5    ¸   
=   ;   ¸   
V  : : QăQ¸   
:  5    ˙˙˙śČ ;   R    QV  T  0   QT  5   X   (V  =   "0   !QV  =   $0   #Q  ST  5   X   ,V  =   %0   !QV  V  5   0   #Q  T  5   X   Ű=   &V  q    ]A5    ¸   

=   ': QA5    ¸   

=   (T  5   : QV  =   )0   !QV  =   0   #Q   nV  5   &Ĺ=   *   (V  =   +0   !QV  =   0   #Q   6V  =   ,0   !QV  =   -0   #QV  V  5   &0   &Q   4T  5   X   #V  =   .0   !QV  =   /0   #QA¸   
T  =   0: QT V  @: QČČf   - Á
:    Q   pm5   W  QV  V  q    U  Q;   =   1V  R   QV  =   0   #QV  T  0   QT V  @: QČČ ČăQ¸   
:  5    ˙˙˙Č A5    ¸   
=   2: QT @Y   V  5   3]   3V  5   4]   4V  5   5]   6V  5   7]   7V  5   8]   8: QßÝĐ$ĐËÖŰß
Ë =ČÍÍÔ	ÍŇß
Ë IČÍÍËÔÔĚËĘŘ8OŃ
â+˙˙˙Ő \Ë˙˙˙îŇ a
ČÍĚ#ĎÔĚ'ĎŘ sĚ  ÖËX
Ö
ß
Ď
ÔĐ#
Ď
Ô
Ď
Ď
ŘĚĎĎ ÔÍÔ8  Ń
ĘËË ČĎÍÍÉ Ë˙˙˙ňŇ ÖĘÎÎÎÎÎ  ˘ 	   _log   debug)   Got token response:    status   headers   content-type   !   application/json   startsWith#   application/json;	   warni   Did not receive JSON response. Misconfigured server?   Content-Type:    Body: 	   body9   TokenServerClientServerError%   Non-JSON response.%   malformed-response   response	   JSON   parseC   Invalid JSON returned by server:    Malformed JSON.'   _maybeNotifyBackoff   x-weave-backoff   x-backoff   errors   value	   info/   Server-reported error:    stringify	   next	   done   message%   Malformed request.   cause#   malformed-request-   Authentication failed.	   urlsG   403 response without proper fields!   Response body: )   Missing JSON fields.   object1   urls field is not a map.9   Conditions must be accepted.'   conditions-required!   Unknown service.   unknown-service   retry-afterK   Expected key not  present in result: 3   Successful token response   id   key   api_endpoint   endpoint   uid   duration    ˙˙˙˙         error        ˙˙˙˙         ex       error        ˙˙˙˙         error                    error                         id      key      api_endpoint      uid      duration                   ˙˙˙˙         k                    error       "        ó  O        ů   !       f      ˙˙˙˙˙˙˙˙đ               f   ˙˙˙˙˙˙˙˙           Â  G  ˙˙˙˙   é  Z      ˙˙˙˙                ˙˙˙˙   >  O                 ˙˙˙˙     	      ˙˙˙˙   _   TokenServerClient.prototype._maybeNotifyBackoffÁ              Ź       š   
   =                                    response   headerName   headerVal   backoffInterval  =  Ł?  Ż      	      A5        T  5   T 7   QV         Q;   â   V   ×
: W  Q   A  Qv  QA5   ¸   
=   T =   V   : QČČ    ;   ¸   
A5    =   	V  : QŃĐÍĚŇĎ ťËŕM    observerPrefix   headers   parseInt	   _log   errorg   TokenServer response had invalid backoff value in '   ' header:    Observers   notify#   :backoff:interval    ˙˙˙˙         ex         2          P   5   ˙˙˙˙˙˙˙˙             ˙˙˙˙   U   TokenServerClient.prototype.newRESTRequestÁ                        š      	                                       url â?  @  Ă            ;    T  R É    RESTRequest