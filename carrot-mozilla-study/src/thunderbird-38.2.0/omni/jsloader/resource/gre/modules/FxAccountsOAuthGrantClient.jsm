çżsš                K     š             	                               resource://gre/modules/FxAccountsOAuthGrantClient.jsm                                    Af    6    Q;   5      Q5      Q5      Q5   	   QQ;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   
f   : Q=      QA   6   QA5   Y      ]      ]   ;   ]      ]   6   QA   6   Q;   5      6   Q;   5      6   QĚZöBŐ0Ő,Ő8Ő0Ő#Ë%Ě13Ë=ĘUĘdĘrĐ  Ź  źĚ  Ä  ĚŐ  Ô  ŰŐ !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importE   resource://gre/modules/Promise.jsm=   resource://gre/modules/Log.jsmU   resource://gre/modules/FxAccountsCommon.jsE   resource://services-common/rest.js-   importGlobalProperties   AUTH_ENDPOINT   /authorization5   FxAccountsOAuthGrantClient   prototype+   getTokenFromAssertion!   _validateOptions   RESTRequest   _Request   _createRequest?   FxAccountsOAuthGrantClientError   _toStringFields   toString                  5   FxAccountsOAuthGrantClient   ?   FxAccountsOAuthGrantClientError                                    URL                  ˙˙˙˙   ?   this.FxAccountsOAuthGrantClientÁ                r       š   	   %                                     options '  .  %             A¸    
T  : QAT  6   QA;   A5   5   R 6   Q   '   Qv   Q;   =   R pČ    ;   ¸   
=   : Q'ĎĘ*ŇÎĚËË0Ő4 !   _validateOptions   parameters   serverURL   URL   Error'   Invalid 'serverURL'   log   debugM   FxAccountsOAuthGrantClient Initialized    ˙˙˙˙          e                    ;      ˙˙˙˙   ˙˙˙˙      this.FxAccountsOAuthGrantClient.prototype.getTokenFromAssertionÁ                      š      3                           	             assertion   scope   params    
	  =             T      ;    =   R pT     ;    =   R pY   T ]   A5   5   ]   T  ]   =   ]      QA¸   	
;   
=   V   : ËAËDČĐČĎKÖ3    Error;   Missing 'assertion' parameter3   Missing 'scope' parameter   scope   parameters   client_id   assertion   token   response_type   _createRequest   AUTH_ENDPOINT	   POST   ˙˙˙˙   u   this.FxAccountsOAuthGrantClient.prototype._validateOptionsÁ                 1       š                                      @      options¸	  ş
  U                    ;    =   R pf    ¸   
A   : QËZÖ^    Error;   Missing configuration options   forEach                     serverURL      client_id                  ˙˙˙˙   y   this.FxAccountsOAuthGrantClient.prototype._validateOptions/<Ĺ                 )       š                                              option >
  ´
  Z                T  7    ;    =   T  =   R p
ĘŐ0    Error   Missing '   ' parameter   ˙˙˙˙   q   this.FxAccountsOAuthGrantClient.prototype._createRequestÁ                 (       š                                      @   	   path   method   paramsŁ  Ş  r                H   =       Q;   A    R ĐĚ  Š 	   POST   Promise   ˙˙˙˙   u   this.FxAccountsOAuthGrantClient.prototype._createRequest/<Ĺ               é       š      V                                @      resolve   reject   profileDataUrl   requestÜ  ¤  s             A5         QA5   V   R    Q  ¸   
:    Q   ¸   
=   =   : Q   ¸   
=   =   : Q       6   Q  =   H      ¸   	
  : Q   E   ;   
Y   ;   ]   ;   ]   ;   ]   ;   ]   R : 
Ń
Ë
ÉĚ	ÉxÚÚ{Đ  ËÚŃ
Ę
Ę
Ę
Ę  ˘˙˙˙ů  §    serverURL   _Request   toUpperCase   setHeader   Accept!   application/json   Content-Type   onComplete	   POST	   post?   FxAccountsOAuthGrantClientError   ERROR_NETWORK   error   ERRNO_NETWORK   errno;   ERROR_CODE_METHOD_NOT_ALLOWED	   code9   ERROR_MSG_METHOD_NOT_ALLOWED   message   ˙˙˙˙      this.FxAccountsOAuthGrantClient.prototype._createRequest/</request.onCompleteÁ              y      š                              (             error	   body   ?  {             T     C   ;    Y   ;   ]   ;   ]   T  ¸   
:  ]   R : @   Q;   ¸   
      5   	5   
: W   Q   x  Qv  Q   ;    Y   ;   ]   ;   ]         5   	5   ]         5   	5   
]   R : ČČ          5   	5         V   : V   5   Ĺ=   H    V   5   ;   6   Q   "V   5      V   ;   6   Q   ;    V   R : 
ŃĘĘĘ	Č}˙˙˙ů  )
ŕÍĚ
ŃĘĘŮŮ  ˙˙˙ůÍ  Ô
ĘĐ
ĎxĚÉ
ĎĐ˙˙˙ů2 ?   FxAccountsOAuthGrantClientError   ERROR_NETWORK   error   ERRNO_NETWORK   errno   toString   message	   JSON   parse   response	   body   ERROR_PARSE   ERRNO_PARSE   status	   code   success   number3   OAUTH_SERVER_ERRNO_OFFSET'   ERRNO_UNKNOWN_ERROR    ˙˙˙˙         e         M   -       {   l   ˙˙˙˙˙˙˙˙ĺ             ˙˙˙˙   I   this.FxAccountsOAuthGrantClientErrorÁ                        š                                              details Z  f  ź             T  D   QY   U  QA=   6    QAT  5   D   Q@6   QAT  5   D   Q;   6   QAT  5   D   Q;   6   QAT  5   D   Q@6   QŇĚÖÚÚÖ' 	   name?   FxAccountsOAuthGrantClientError	   code   errno'   ERRNO_UNKNOWN_ERROR   error   ERROR_UNKNOWN   message   ˙˙˙˙   s   FxAccountsOAuthGrantClientError.prototype._toStringFieldsÁ                   >       š                                            (  ą  Ě             Y   A5    ]    A5   ]   A5   ]   A5   ]   A5   ]   ËËËËĚ 	   name	   code   errno   error   message   ˙˙˙˙   e   FxAccountsOAuthGrantClientError.prototype.toStringÁ                   /       š                                            H    Ű             A5    =   ;   ¸   
A¸   
:  : =   ŕ(˙˙˙ńË- 	   name   (	   JSON   stringify   _toStringFields   )