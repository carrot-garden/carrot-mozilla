çżsš                  (   š   0                            !       0     resource://gre/modules/identity/IdentityProvider.jsm     çA         	                                ;   5       Q;   5      Q;   5      Q;   5      Q;    ¸   	
=   
: Q;    ¸   	
=   : Q;    ¸   	
=   : Q;    ¸   	
=   : QAf    0   Q=      Q;   ¸   
A=   =   : Q;   Y   ;   ¸   
Z  ;   5   `   ;   5   `  : ]   B]      ]      ]      ]      ]      a       	a   !   
]   "   ]   #   ]   $   ]   %   ]   &   ]   '   ]   (   ]   )   ]   *   ]   +   ]   ,   ]   -   ]   .0   QA;   R  0   /Q	Ę		"		ĐĐĐĐŐ3Ő1Ő:Ő9Ě-ËÍR")+ĘĐ'ÎÎ˙˙˙ŮČ/Ę8ĘHĘUĘbĘfĘzĘ  ŠĘ  ÉĘ  ĺĘ Ę 6Ę WĘ rĘ Ę ­Ę şĘ ĘĘ ŐĐ ěÉ    Cu   Components   utils   Ci   interfaces   Cc   classes   Cr   results   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmY   resource://gre/modules/identity/LogUtils.jsmW   resource://gre/modules/identity/Sandbox.jsm!   EXPORTED_SYMBOLS#   FALLBACK_PROVIDER   browserid.org   XPCOMUtils-   defineLazyModuleGetter   jwcryptoY   resource://gre/modules/identity/jwcrypto.jsm/   IdentityProviderService   prototype   generateQI   nsISupports   nsIObserver   QueryInterface%   _sandboxConfigured   observe   reset!   getProvisionFlow   shutdown   securityLevel   certDuration%   _provisionIdentity#   beginProvisioning1   raiseProvisioningFailure   genKeyPair'   registerCertificate#   _doAuthentication'   beginAuthentication-   completeAuthentication)   cancelAuthentication+   setAuthenticationFlow5   _createProvisioningSandbox1   _beginAuthenticationFlow+   _cleanUpProvisionFlow!   IdentityProvider                  !   IdentityProvider                  ˙˙˙˙      log                2      š                                             aMessageArgs °  ˙               ŕU  Q;    5   ¸   
;    f    ¸   
T  : O Qĺ˙˙˙ç7    Logger   log   apply   concat                     IDP                  ˙˙˙˙      reportError                2      š                                             aMessageArgs   k               ŕU  Q;    5   ¸   
;    f    ¸   
T  : O Qĺ!˙˙˙ß?    Logger   reportError   apply   concat                     IDP                  ˙˙˙˙   /   IdentityProviderService                   -       š                                               "             ;    ¸   
A=   =   =   : QA¸   
:  QÍ#(Ě    XPCOMUtils-   defineLazyModuleGetter   _storec   resource://gre/modules/identity/IdentityStore.jsm   IdentityStore   reset   ˙˙˙˙      observe                 @       š                                             aSubject   aTopic   aData   8  	  /             T x=    y   
z   1;   5   ¸   
A=    : QA¸   
:  Q   k<uĘŰĚX 1   quit-application-granted   Services   obs   removeObserver   shutdown   ˙˙˙˙      IDP_reset                          š                                            '  
  8             AY   0    QAY   0   Q?ĚEĚ    _provisionFlows)   _authenticationFlows   ˙˙˙˙   !   getProvisionFlow               ^       š                                             aProvId   aErrBack   provFlow   err  >
  W  H             A5    T  7   QV      
V   =   T    Q;   â   =   V  : QT '=   H   T V  : QĎNÎ×ĘĚ    _provisionFlowsG   No provisioning flow found with id    log   ERROR:   function   ˙˙˙˙      RP_shutdown                   p       š                                           z  ö  U             A¸    
:  QA5      B;   ¸   
=   : Q;   ¸   
;   5   5   	B: QAB0   Q;   5   
¸   
A=   : QĚXZŐŕČ_Ű>    reset%   _sandboxConfigured   Cu   importM   resource://gre/modules/DOMIdentity.jsm   DOMIdentity%   _configureMessages   Services   appShell   hiddenDOMWindow   obs   removeObserver1   quit-application-granted   ˙˙˙˙   _   IdentityProviderService.prototype.securityLevelÁ                          š                                               "  b             ?	    ˙˙˙˙   ]   IdentityProviderService.prototype.certDurationÁ                          š                                           7    f             A5    F       ˙˙˙˙XfÍ    securityLevel   ˙˙˙˙   %   _provisionIdentity               Ě       š      >                                D      aIdentity   aIDPParams   aProvId   aCallback   provPath   url   {  z       
         5    5      Q;   5   ¸   
=      5   @@: ¸   
V   :   Q;   â   =   	   =   
V  : QT    :;   â   =   T : QA5   T 75   ¸   
:  Q   %A¸   
V      ¸   
A: : QÔăÖá  5ÖßŘ    4˙˙˙Ň      idpParams   provisioning   Services   io   newURI   https://   domain   resolve   log;   _provisionIdentity: identity:	   url:   _provisionIdentity: re-using sandbox in provisioning flow with id:   _provisionFlows'   provisioningSandbox   reload5   _createProvisioningSandbox	   bind   ˙˙˙˙      createdSandbox                j       š   	   *                          	            aSandbox   provId Đ  d               T  5       QA5      Y     ]     ]   A5   ]   T  ]       ]   9Q;   â   =      : QÎĐ
Ę
Ę
Ë
Č
Ě  ŘR    id   _provisionFlows   identity   idpParams   securityLevel'   provisioningSandbox   callback   log   _provisionIdentity: Created sandbox and provisioning flow with id:   ˙˙˙˙      doCallback                        š                                           	   aErr m  Ś                 T        : Q×    ˙˙˙˙   #   beginProvisioning                      š      5                                       aCaller   provFlow   identity   frame   duration -    Š             ;    â    =   T  5   : QA¸   
T  5   T  5   :    QV   T  0   QV   5     QV   5     QA5     QV   C0   	QT  ¸   

V  V  : ŰŘČÍÎÎËËŇ8    log%   beginProvisioning:   id!   getProvisionFlow   doError   caller   identity#   provisioningFrame   certDuration)   didBeginProvisioning7   doBeginProvisioningCallback   ˙˙˙˙   1   raiseProvisioningFailure               <       š                                             aProvId   aReason   provFlow  ?  É  É             ;    â    =   T : QA¸   
T  :    QV   ¸   
T : QÖËČ  ŘŇ    reportError)   Provisioning failure!   getProvisionFlow   callback   ˙˙˙˙      genKeyPair                      š   
   >                               D      aProvId   provFlowk  Đ!  ĺ       	      A¸    
   :    Q   5       @   Q=      Q;   â   V   : Q   ¸   
V   : QČČ;   ¸   
;   5   5      ¸   	
A: : QÍÉËË
ĘŇÔç  ˙  ńA˙˙˙Ă  ˙ !   getProvisionFlow)   didBeginProvisioningc   ERROR: genKeyPair called before beginProvisioning   log   callback   jwcrypto   generateKeyPair   ALGORITHMS   DS160	   bind    ˙˙˙˙          errStr       ˙˙˙˙      gkpCb                 Ľ       š   	   %                                       err   kp  
   ż!  ń             ;    â    =   : QT     5;    â    =   T  : Q      ¸   
T  : Q      T 0   Q;    â    =      : Q      5   ¸   
      5   5   : QÓÖŘÓŘîF    log   in gkp callback%   ERROR: genKeyPair:   callback   kpy   genKeyPair: generated keypair for provisioning flow with id:   caller)   doGenKeyPairCallback'   serializedPublicKey    '   :   ˙˙˙˙˙˙˙˙_             ˙˙˙˙   '   registerCertificate              é       š      F                                     aProvId   aCert   provFlow  '$  '        	      ;    â    =   T  T : QA¸   
T  :    QV   5       ;   â   =   =   : QV   5       D  Q=     Q;   â   =   V  : QV   ¸   	
V  : QČČA5   
¸   
V   5   V   5   T : QV   ¸   	
@: QA¸   
T  : QŮËČĘŘĘË
Ę×ÓćĐĎ$    log)   registerCertificate:!   getProvisionFlow   caller   reportError'   registerCertificate7   No provision flow or caller   kp_   Cannot register a certificate without a keypair   callback   _store   addIdentity   identity+   _cleanUpProvisionFlow    ˙˙˙˙         errStr        e   >   ˙˙˙˙˙˙˙˙Ą             ˙˙˙˙   #   _doAuthentication               {       š                                             aProvId   aIDPParams   authPath   authURI  s(  8,  6      	      ;    â    =   T  =   T : QT 5   5      Q;   5   ¸   
=   T 5   	@@: ¸   

V   :   QA¸   
T  V  : QŢ <Ňá
Ö CÓ0    log5   _doAuthentication: provId:   idpParams:   idpParams   authentication   Services   io   newURI   https://   domain   resolve1   _beginAuthenticationFlow   ˙˙˙˙   '   beginAuthentication               ¸       š      0                                       aCaller   authFlow   identity .  1  W      	      ;    â    =   T  5   : QA5   T  5   7   QV        T  ¸   
=   T  5   : V   T  0   QA5   V   5   75   	  Q;    â    =   
T  5   =   V  : QV   5   ¸   
V  : Ű ]Ô×ÍÚäÔ8    log?   beginAuthentication: caller id:   id)   _authenticationFlows   doErrorU   beginAuthentication: no flow for caller id   caller   _provisionFlows   provId   identity=   beginAuthentication: authFlow:   identity:;   doBeginAuthenticationCallback   ˙˙˙˙   -   completeAuthentication               á       š      K                                       aAuthId   authFlow   provId   provFlow   subject 2  Ů4  r      	      ;    â    =   T  : QA5   T  7   QV       ";   â   =   =   T  : QV   5     QV   =   /QA5   T  /QA¸   
V  :   QV  C0   	QY   V  5   
]   
V  5   ]     Q;   5   ¸   
Y   V  ]   =   T  : QÖĎŰÎËËĚČËÎÓÖŃ˙˙˙á^    log/   completeAuthentication:)   _authenticationFlows   reportError-   completeAuthentication)   No auth flow with id   provId   caller!   getProvisionFlow#   didAuthentication	   rpId   identity   Services   obs   notifyObservers   wrappedJSObject-   identity-auth-complete   ˙˙˙˙   )   cancelAuthentication               â       š      E                                       aAuthId   authFlow   provId   provFlow   errStr ť5  ­8        	      ;    â    =   T  : QA5   T  7   QV       ";   â   =   =   T  : QV   5     QV   =   /QA5   T  /QA¸   
V  :   QV  C0   	Q;   
5   ¸   
@=   T  : Q=     Q;    â    =   V  : QV  ¸   
V  : QÖĎŰÎËËĚČËŢĘ×Ó    log+   cancelAuthentication:)   _authenticationFlows   reportError)   cancelAuthentication+   No auth flow with id:   provId   caller!   getProvisionFlow#   didAuthentication   Services   obs   notifyObservers-   identity-auth-complete=   Authentication canceled by IDP9   ERROR: cancelAuthentication:   callback   ˙˙˙˙   o   IdentityProviderService.prototype.setAuthenticationFlowÁ                 J       š                                             aAuthId   aProvId  =9  ˇ:  ­            ;    â    =   T  =   T : QA5   T  Y   T ]   9QA5   T 7T  0   QŢÎ'ĘÓ/    log=   setAuthenticationFlow: authId:   provId:)   _authenticationFlows   provId   _provisionFlows   authId   ˙˙˙˙   5   _createProvisioningSandbox                 p       š                                          	   aURL   aCallback  `;  ĺ<  ş            ;    â    =   T  : QA5       B;   ¸   
=   : Q;   ¸   
;   5   	5   
C: QAC0   Q;   T  T R QÖŐŕČĐ    log7   _createProvisioningSandbox:%   _sandboxConfigured   Cu   importM   resource://gre/modules/DOMIdentity.jsm   DOMIdentity%   _configureMessages   Services   appShell   hiddenDOMWindow   Sandbox   ˙˙˙˙   1   _beginAuthenticationFlow               W       š                                             aProvId	   aURL   propBag  v=  :>  Ę            ;    â    =   T  T : QY   T  ]      Q;   5   ¸   
Y   V   ]   =   T : QŮÍÖŃ˙˙˙âO    log3   _beginAuthenticationFlow:   provId   Services   obs   notifyObservers   wrappedJSObject   identity-auth   ˙˙˙˙   +   _cleanUpProvisionFlow              Á       š      6                                     aProvId	   prov č>  ŞA  Ő            ;    â    =   T  : QA5   T  7   QV   5      a  QA5   T  75     QV  5      ';    â    =   : QV  ¸   
:  QA5   T  7=   /QČA5   V   5   7   A5   V   5   /QA5   T  /QÖĎÉË
ÔÉÓĎŇĐŃË%    log-   _cleanUpProvisionFlow:   _provisionFlows'   provisioningSandbox	   freeM   _cleanUpProvisionFlow: freeing sandbox)   _authenticationFlows   authId    ˙˙˙˙         sandbox        4   [   ˙˙˙˙