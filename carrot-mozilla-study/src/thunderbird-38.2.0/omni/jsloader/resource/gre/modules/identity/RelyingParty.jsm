çżsš                Ú  #   š   *   ú                          $       0     resource://gre/modules/identity/RelyingParty.jsm     O/         	                             ;   5       Q;   5      Q;   5      Q;   5      Q;    ¸   	
=   
: Q;    ¸   	
=   : Q;    ¸   	
=   : Q;    ¸   	
=   : QAf    0   Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   Y   ;   ¸   
Z  ;   5   `   ;   5   `  : ]      ]      ]      ]      ]      ]      	]       
]   !   ]   "   ]   #   ]   $   ]   %   ]   &   ]   '   ]   (0   QA;   R  0   )Q	Ę		#		ĐĐĐĐŐ3Ő1Ő:Ő?Ě)ŇWÍR!#*,ĘĐ'ÎÎ˙˙˙ŮČ/Ę9Ę?ĘWĘ  Ę  ŤĘ  ĂĘ  ÖĘ  ňĘ  Ę 
Ę 'Ę OĘ iĐ rÉ    Cu   Components   utils   Ci   interfaces   Cc   classes   Cr   results   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmY   resource://gre/modules/identity/LogUtils.jsmc   resource://gre/modules/identity/IdentityStore.jsm!   EXPORTED_SYMBOLS   XPCOMUtils-   defineLazyModuleGetter   objectCopyc   resource://gre/modules/identity/IdentityUtils.jsm   jwcryptoY   resource://gre/modules/identity/jwcrypto.jsm)   IdentityRelyingParty   prototype   generateQI   nsISupports   nsIObserver   QueryInterface   observe   reset   shutdown   watch   _doLogin   _doLogout1   _notifyLoginStateChanged   request   logout1   getDefaultEmailForOrigin)   getIdentitiesForSite   _getAssertion%   _generateAssertion+   _cleanUpProvisionFlow   RelyingParty                     RelyingParty                  ˙˙˙˙      log                2      š                                             aMessageArgs   d               ŕU  Q;    5   ¸   
;    f    ¸   
T  : O Qĺ˙˙˙ç6    Logger   log   apply   concat                     RP                  ˙˙˙˙      reportError                2      š                                             aMessageArgs y  Ď               ŕU  Q;    5   ¸   
;    f    ¸   
T  : O Qĺ!˙˙˙ß>    Logger   reportError   apply   concat                     RP                  ˙˙˙˙   )   IdentityRelyingParty                          š                                           î  Ő  #             A;   0    QA¸   
:  Q'Ě)Ě    _store   IdentityStore   reset   ˙˙˙˙      observe                 @       š                                             aSubject   aTopic   aData   a  3  /             T x=    y   
z   1;   5   ¸   
A=    : QA¸   
:  Q   k<uĘŰĚX6 1   quit-application-granted   Services   obs   removeObserver   shutdown   ˙˙˙˙      RP_reset                          š                                            P  Đ  9             AY   0    Q<Ě    _rpFlows   ˙˙˙˙      RP_shutdown                   (       š                                           ó  P  ?             A¸    
:  Q;   5   ¸   
A=   : QĚŰ>    reset   Services   obs   removeObserver1   quit-application-granted   ˙˙˙˙      watch              Ň      š                               "            aRpCaller   origin   state â
  l  W             A5    T  5   T  9QT  5      QA5   ¸   
V   : D   QY   B]   @]     Q;   â   =   T  5   =   	V   =   
T  5   =   V  5   =   V  5   : 
QV  5      îV  5   E   QT  5   V  5   H   5A¸   
T  5   V  5   : QT  ¸   
:     T  5   @H   G  QY   V  5   ]   V   ]     QA¸   
T  V  : ČČ   B  QY   V  5   ]   V   ]     QA¸   
T  V  : ČČ   BT  5      'A¸   
T  Y   V   ]   :    T  ¸   
:  ÓÍŃÎ'Ë\×ÉÍÎÎ\hÉ  éá0ÝĘÉmĘBËoÎÎĎĚrvÎÎĎĚČ"Đ"É˙˙˙ĺÉĘ    _rpFlows   id   origin   _store   getLoginState   isLoggedIn   email   log   watch: rpId:   origin:   loggedInUser:   loggedInUser   loggedIn:   email:1   _notifyLoginStateChanged   doReady   _doLogin   _doLogout    ˙˙˙˙         options        ˙˙˙˙         options          <   ˙˙˙˙˙˙˙˙K            S  <   ˙˙˙˙˙˙˙˙           ˙˙˙˙      _doLogin                ~       š      ?                                D      aRpCaller   aOptions   aAssertion%   loginWithAssertion   .         	      ;    â    =      5   =      5   : Q    ¸   
A:    QT       T : Q   &A¸   
      ¸   
A: : QěĚ    &É  ŇŮ  Ł  ,˙˙˙Ú  Ł    log   _doLogin: rpId:   id   origin:   origin	   bind   _getAssertion   ˙˙˙˙   %   loginWithAssertion                 j       š                                             assertion ą                 A5    ¸   
   5   C   5   : QA¸   
   5      5   : Q   ¸   
T  : Q   ¸   
:  QćŕÓĐ    _store   setLoginState   origin   loggedInUser1   _notifyLoginStateChanged   id   doLogin   doReady   ˙˙˙˙      gotAssertion                 G       š                                             err   assertion  +                 T     6;    â    =   =   T  : QA¸   
   : Q      T : Q1
Ű
Ö
Í    reportError   _doLogin:S   Failed to get assertion on login attempt:   _doLogout   ˙˙˙˙      _doLogout                      š      !                                       aRpCaller   aOptions   state  §  Ö  Ť       
      ;    â    =   T  5   =   T 5   : QA5   ¸   
T 5   : D   QY      QV   B0   QA¸   
T  5   @: QT  ¸   	
:  QT  ¸   

:  QčŐÓËŐÎÎ    log!   _doLogout: rpId:   id   origin:   origin   _store   getLoginState   isLoggedIn1   _notifyLoginStateChanged   doLogout   doReady   ˙˙˙˙   1   _notifyLoginStateChanged               \       š   	                                           aRpCallerId   aIdentity   options    Ň  Ă             ;    â    =   T  =   T : QY   T  ]      Q;   5   ¸   
Y   V   ]   =   T : QŢÍÖÉ  Ç,    log?   _notifyLoginStateChanged: rpId:   identity:	   rpId   Services   obs   notifyObservers   wrappedJSObject9   identity-login-state-changed   ˙˙˙˙      request                    š      P                                    aRPId   aOptions   rp   options   baseURI    ­  Ö             ;    â    =   T  : QA5   T  7   QY   T  ]   V   5   ]     Q;   â   T V  : Q;   5   ¸   
V   5   @@:   Qf    - Á
:    Q   >m5   	W  QT V  7   %V  V  V  ¸   

T V  7: 9QăQ¸   
:  5   ˙˙˙łČ ;   5   ¸   
Y   V  ]   =   @: QÖĎČÓŐÜ
ČÔ8RŃČŰ  áË˙˙˙éŇ  çÖĎ˙˙˙âS    log   request: rpId:   _rpFlows	   rpId   origin   objectCopy   Services   io   newURI   value   resolve	   next	   done   obs   notifyObservers   wrappedJSObject!   identity-request                     privacyPolicy      termsOfService                   ˙˙˙˙         optionName          R         ]   ˙˙˙˙   ˙˙˙˙      logout              Ł       š      *                                     aRpCallerId   rp ł  X   ň             ;    â    =   T  : QA5   T  7   QV   E   QV   5      T  QV   5     Q;    â    =   V  : QA¸   
V   Y   V  ]   : QČ   ;    â    =   T  : QÖĎÓOË
Î×ŃÉ˙˙˙ěĘÖ1    log+   logout: RP caller id:   _rpFlows   origin   logout: origin:   _doLogout9   logout: no RP found with id:    ˙˙˙˙         origin        >   I   ˙˙˙˙   ˙˙˙˙   1   getDefaultEmailForOrigin               M       š                                             aOrigin   identities   result    ^!               A¸    
T  :    QV   5   D   Q@  Q;   â   =   T  =   V  : QV  ËČŐß )   getIdentitiesForSite   lastUsed   log3   getDefaultEmailForOrigin:   ->   ˙˙˙˙   )   getIdentitiesForSite              ¤       š      '                                    aOrigin   rv   loginState ń!  #  
      
      Y   Z   ]       QA5   ¸   
:  K  Q   "mW  V   5    ¸   
V  : QăQLM˙˙˙ŢQNČA5   ¸   
T  :   QV  E   QV  5      V   V  5   0   QV   ÎÍĚ0'ĘĺĐČÓÓ
    result   _store   getIdentities	   push   getLoginState   email   lastUsed    ˙˙˙˙         id       1   (       '   4   ˙˙˙˙   ˙˙˙˙      _getAssertion               Ń       š      ;                                D      aOptions   aCallback   audience   email	   cert &  ;)  '      	      T  5       QT  5   D   QA¸   
V   :   Q;   â   =   V   =   V  : QV       =   pA5   ¸   
V  :     A5   ¸   	
V  @@: QA5   ¸   
V  : 5   
  QV     A¸   
V   V      : QÍÚ!ČŕŃ×ŃÍŮ <	    origin   loggedInUser1   getDefaultEmailForOrigin   log1   _getAssertion: audience:   email:G   audience required for _getAssertion   _store   fetchIdentity   addIdentity	   cert%   _generateAssertion   ˙˙˙˙   %   generatedAssertion                 E       š                                             err   assertion  b(  /)  6            T     ;    â    =   T  : Q;    â    =   T : Q   T  T : 
ÖÖĚ    log+   ERROR: _getAssertion:G   _getAssertion: generated assertion:   ˙˙˙˙   %   _generateAssertion              ű       š      E                                     aAudience   aIdentity   aCallback   id   kp   E+  Â-  O      	      ;    â    =   T  =   T : QA5   ¸   
T :    QV   E   QV   5       =  Q=     Q;    â    =   V  : QT V  : QČČV   5     QV      =  Q=   	  Q;    â    =   V  : QT V  : QČČ;   
¸   
V   5   V  T  T : QŢĐČÔË
Ę×ĚÎË
Ę×Ěă>    log;   _generateAssertion: audience:   identity:   _store   fetchIdentity	   certe   Cannot generate an assertion without a certificate5   ERROR: _generateAssertion:   keyPair]   Cannot generate an assertion without a keypair   jwcrypto#   generateAssertion    ˙˙˙˙         errStr        ˙˙˙˙         errStr        P   7   ˙˙˙˙˙˙˙˙                 7   ˙˙˙˙˙˙˙˙Ő            ˙˙˙˙   /   RP_cleanUpProvisionFlow               G       š                                             aRPId   aProvId   rp  R.  /  i            A5    T  7   QV      V   =   /Q   #;   â   =   T =   T  : QĎĐŢJ    _rpFlows   provId   logM   Error: Couldn't delete provision flow     for RP 