çżsš                c  -   š   ^   ˘      :                   <            resource://gre/modules/FxAccounts.jsm     °                                        1   4Af    6    Q;   5      Q5      Q5      QQ;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Qn   f   o   Qn      o   Q;   Y   @]   @]   @]    @]   !@]   "   a   #   ]   $   ]   %   ]   &   ]   '   ]   (   	]   )   
]   *6   QA   6   +Q;   ,Y   ;   -]   .X]   /X:]   0@]   1   a   2   ]   3   ]   4   a   5   ]   6   ]   7   ]   8   ]   9   ]   :   ]   ;   ]   <   ]   =   ]   >   ]   ?   ]   @   ]   A   ]   B   ]   C    ]   D   !]   %   "]   E   #]   F   $]   G   %]   H   &]   I   ']   J   (]   K   )]   L   *]   M   +]   N   ,]   O   -]   P   .]   Q   /]   R   0]   S6   Q;   TY      2]   U   3]   V6   Q;   WY      5a   X;   Y¸   Z
   6: ]   [;   Y¸   Z
   7: ]   U;   Y¸   Z
   8: ]   V6   Q;   ¸   \
A=   ]   9: QDĘ  ú	 -	 	 	Ě5ę5	Ő,Ő0Ő/Ő1Ő1Ő1Ő3Ő.Ő-Ő8Ň1Ň2Ň;ĐDĐHĘOĘQĘcĘ  Ę  Ę  ­Ę  ĎĘ  ŮĐ  ç  ú  Ě ( - I NĘ SĘČČĘ gĘĘ wĘ ~Ę Ę ŞĘ ĎĘ ćĘ  Ę Ę Ę $Ę CĘ IĘ `Ę Ę ´Ę ĎĘ ŰĘĘ ćĘ ńĘ Ę Ę Ę TĘ jĘ uĘ ~Ę Ę ŤĘ ÇĘ ßĘ ěĐ ô ĘĘ Đ Ę (Ę /ŃČ @ŃČ ŃÎ ËŰ Ö !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Components   classes   interfaces   utils   import=   resource://gre/modules/Log.jsmE   resource://gre/modules/Promise.jsmC   resource://gre/modules/osfile.jsmG   resource://services-common/utils.jsG   resource://services-crypto/utils.jsG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsmA   resource://gre/modules/Timer.jsm?   resource://gre/modules/Task.jsmU   resource://gre/modules/FxAccountsCommon.js   XPCOMUtils-   defineLazyModuleGetter!   FxAccountsClientW   resource://gre/modules/FxAccountsClient.jsm   jwcryptoY   resource://gre/modules/identity/jwcrypto.jsm5   FxAccountsOAuthGrantClientk   resource://gre/modules/FxAccountsOAuthGrantClient.jsm!   publicProperties   AccountState   prototype	   cert   keyPair   signedInUser)   whenVerifiedDeferred+   whenKeysReadyDeferred   isCurrent   abort%   getUserAccountData%   setUserAccountData   getCertificate   getKeyPair   resolve   reject   FxAccounts%   FxAccountsInternal'   DATA_FORMAT_VERSION   versionC   VERIFICATION_POLL_TIMEOUT_INITIALI   VERIFICATION_POLL_TIMEOUT_SUBSEQUENT#   _fxAccountsClient!   fxAccountsClient   now#   getAccountsClient'   localtimeOffsetMsec!   checkEmailStatus   fetchKeys   getSignedInUser   setSignedInUser   getAssertion/   resendVerificationEmail#   abortExistingFlow   accountStatus   signOut   _signOutLocal   _signOutServer   getKeys%   fetchAndUnwrapKeys)   getAssertionFromCert)   getCertificateSigned'   isUserEmailVerified   loadAndPoll%   startVerifiedCheck   whenVerified   notifyObservers   pollEmailStatus)   pollEmailStatusAgain   _requireHttps)   getAccountsSignUpURI)   getAccountsSignInURI;   promiseAccountsForceSigninURI   getOAuthToken7   _getVerifiedAccountOrReject%   _errorToErrorClass   _error   JSONStorage   set   get'   LoginManagerStorage   _isLoggedIn	   Task   async%   _clearLoginMgrData!   defineLazyGetter   fxAccounts                     fxAccounts      FxAccounts                                    accountStatus   #   getAccountsClient   )   getAccountsSignInURI   )   getAccountsSignUpURI      getAssertion      getKeys      getSignedInUser      getOAuthToken      loadAndPoll   '   localtimeOffsetMsec      now   ;   promiseAccountsForceSigninURI   /   resendVerificationEmail      setSignedInUser      signOut      version      whenVerified                  ˙˙˙˙      AccountStateÁ                        š                                               fxaInternal 

  =
  D             AT  6    QĘ    fxaInternal   ˙˙˙˙   A   AccountState.prototype.isCurrentá                          š                                            Ý
  !  O             A5    E   QA5    5   AHÚA    fxaInternal'   currentAccountState   ˙˙˙˙   9   AccountState.prototype.abortÁ                          š   	   ;                                      5  +  Q             A5       ,A5    ¸   
;   =   R : QA@6    QA5      ,A5   ¸   
;   =   R : QA@6   QA@6   QA@6   QA@6   QA@6   QÍËSUČXÍËY[Č]ČČČČ )   whenVerifiedDeferred   reject   Error[   Verification aborted; Another user signing in+   whenKeysReadyDeferred	   cert   keyPair   signedInUser   fxaInternal   ˙˙˙˙   S   AccountState.prototype.getUserAccountDataÁ                   O       š                                           L    c             A5       A¸   
A5    5   : A5   5   ¸   
:  ¸   
A    A   : eÓiŇĐui~    signedInUser   resolve   accountData   fxaInternal'   signedInUserStorage   get	   then   ˙˙˙˙   W   AccountState.prototype.getUserAccountData/<Ĺ                        š      (                                     	   user   é  i             ;       -;   ¸   
=   ;   ¸   
T  : : QT  E   QT  5   A5      $;   ¸   
=   : QAT  6   QA¸   	
T     T  5   
   @: n
ŕ%˙˙˙ŰpŘ
Ő
ĘtËÓ-    logPII   log   debug-   getUserAccountData -> 	   JSON   stringify   version-   setting signed in user   signedInUser   resolve   accountData   ˙˙˙˙   W   AccountState.prototype.getUserAccountData/<Ĺ                 C       š                                              err ń    u             T  ;    5   5   rE   QT  5      A¸   
@: A¸   
T  : áz
É|Ë    OS	   File   Error#   becauseNoSuchFile   resolve   reject   ˙˙˙˙   S   AccountState.prototype.setUserAccountDataÁ                 '       š                                      @      accountData2  ś               A5    5   ¸   
:  ¸   
A    : ŇÔ      fxaInternal'   signedInUserStorage   get	   then   ˙˙˙˙   W   AccountState.prototype.setUserAccountData/<Ĺ                 h       š   
   +                                       record }  °               A5        A¸   
;   =   R : T     6   QAT  6   QA5   5   ¸   
T  : ¸   	
A    : 
Ó˙˙˙ôÎĘŐĘ  /    isCurrent   reject   Error5   Another user has signed in   accountData   signedInUser   fxaInternal'   signedInUserStorage   set	   then   ˙˙˙˙   [   AccountState.prototype.setUserAccountData/</<ĺ                          š                                              ¨               A¸    
   : Ń    resolve   ˙˙˙˙   K   AccountState.prototype.getCertificateÁ                      š      d                          (          	   data   keyPair!   mustBeValidUntil!   willBeValidUntil   Ô  *         	      ;       0;   ¸   
=   ;   ¸   
A5   : : QA5   E   QA5   5   T    1;   ¸   
=   	: QA¸   

A5   5   : ;   5   5      A¸   
;   ;   R : A5   ¸   
:  ;      QA5   ¸   
T  5   T 5   ;   : ¸   
A    : ¸   
A   : ă˙˙˙ăŰŐÓĎÓ˙˙˙ôÍĎŐČ  Ę  Ę  Ş    Ş+    logPII   log   debug   getCertificate	   JSON   stringify   signedInUser	   cert   validUntil?    getCertificate already had one   resolve   Services   io   offline   reject   Error   ERROR_OFFLINE   fxaInternal   now   CERT_LIFETIME)   getCertificateSigned   sessionToken'   serializedPublicKey	   then   ˙˙˙˙   O   AccountState.prototype.getCertificate/<Ĺ                 C       š                                            	   cert 8  ú  Ą             ;    ¸   
=   T    : QAY   T  ]         ]   6   QT  Ń-˙˙˙Ň
Č
Ő    log   debug=   getCertificate got a new one: 	   cert   validUntil   ˙˙˙˙   O   AccountState.prototype.getCertificate/<ĺ                        š                                              result   $  Ş             A¸    
T  : Ď    resolve   ˙˙˙˙   C   AccountState.prototype.getKeyPairÁ              ü       š      E                                  !   mustBeValidUntil7   ignoreCachedAuthCredentials!   willBeValidUntil   d C  |  ­             B   Q;    5   ¸   
=   : W   Q     Qv  QČ    V    E   !QA5   E   QA5   5   T     1;   ¸   
=   : QA¸   	
A5   5   : A5   
¸   
:  ;      Q;   ¸   
:     Q;   ¸   
=   A   : Q   5   ¸   
A   :   łÖÍÓćŐÓÍĎĚÉŰ  Ě×/    Services   prefs   getBoolPref_   services.sync.debug.ignoreCachedAuthCredentials   keyPair   validUntil   log   debugE   getKeyPair: already have a keyPair   resolve   fxaInternal   now   KEY_LIFETIME   Promise   defer   jwcrypto   generateKeyPair   DS160   promise	   then    ˙˙˙˙         e       ˙˙˙˙   G   AccountState.prototype.getKeyPair/<Ĺ                 w       š      #                                        err   kp  4  ;  Ŕ             T     A¸    
T  : AY   T ]         ]   6   Q;   ¸   
=   : QA%   Q      ¸   
A5   5   : QËČŐŐŕ     reject   keyPair   validUntil   log   debug   got keyPair	   cert   resolve   ˙˙˙˙   G   AccountState.prototype.getKeyPair/<ĺ                        š                                              result X  v  Ě             A¸    
T  : $Ď    resolve        #       +      ˙˙˙˙   ˙˙˙˙   =   AccountState.prototype.resolveÁ                 W       š   	   (                                        result   ó  Ď             A5        <;   ¸   
=   T  : Q;   ¸   
;   =   R : ;   ¸   
T  : Ń  Ń×˙˙˙ńĎ    isCurrent   log	   info  An accountState promise was resolved, but was actually rejected due to a different user being signed in. Originally resolved with:    Promise   reject   Error5   A different user signed in   resolve   ˙˙˙˙   ;   AccountState.prototype.rejectÁ                 W       š      ,                                        error   p   Ů             A5        <;   ¸   
=   T  : Q;   ¸   
;   =   R : ;   ¸   
T  :   ŢŃ  ß×˙˙˙ńĎ    isCurrent   log	   info1  An accountState promise was rejected, but we are ignoring thatreason and rejecting it due to a different user being signed in.Originally rejected with:    Promise   reject   Error5   A different user signed in   ˙˙˙˙   )   copyObjectProperties              s      š      Y                                  	   from   to	   opts	   keys   thisArg   7#  "%  ú             T H   Y   U QT E   QT 5    D   Q;   ¸    
T  :    QT E   QT 5   D   	QT   QV   - Á
:    Q   âm5   W  Q  Q;   ¸   
T  V  :   QV  5   Ĺ=      &V  V  5   ¸   
V  : 6   QV  5      &V  V  5   ¸   
V  : 6   QV  5      &V  V  5   ¸   
V  : 6   Q;   ¸   
T V  V  : QČăQ¸   	
:  5   
˙˙˙Č ÎćČßÓ8  ö×ÓČĐŘÉÉŘÉÉŘÉÜ  ţË˙˙˙ďŇ 	   keys   Object	   bind   value1   getOwnPropertyDescriptor   function   get   set   defineProperty	   next	   done    ˙˙˙˙      	   prop                  	   desc       x   ö       n     ˙˙˙˙      Đ          ˙˙˙˙      this.FxAccountsÁ               ľ       š   
   =                                        mockInternal   internal   external   prototype   options h%  ×'        	      ;    R     QY     Q;    5     QY   ;   ]   V   ]     Q;   â   V  V  V  : QT  E   QT  5       ;   â   T  V   : QT     V  V   6   Q;   ¸   	
V  : ČĘĎĘÎÚÉÉŐÎĐ %   FxAccountsInternal   prototype!   publicProperties	   keys	   bind)   copyObjectProperties   onlySetInternal   internal   Object   freeze   ˙˙˙˙   %   FxAccountsInternal                   j       š      9                                      (  .  -            A;   6    QA;   6   QA@6   QA;   AR 6   QA;   Y   ;   ]   	;   
5   5   5   ]   R 6   QĚĚ =ČČÉ DĚĘŮ DÉ    version'   DATA_FORMAT_VERSION   POLL_SESSION   currentTimer'   currentAccountState   AccountState'   signedInUserStorage'   LoginManagerStorage1   DEFAULT_STORAGE_FILENAME   filename   OS   Constants	   Path   profileDir   baseDir   ˙˙˙˙   [   FxAccountsInternal.prototype.fxAccountsClientÁ                   $       š                                            ă/  n0  \            A5        A;   R  6    QA5    É #   _fxAccountsClient!   FxAccountsClient   ˙˙˙˙   A   FxAccountsInternal.prototype.nowÁ                          š      	                                      1  F1  g            A5    ¸   
:  Í !   fxAccountsClient   now   ˙˙˙˙   ]   FxAccountsInternal.prototype.getAccountsClientÁ                          š                                            f1  1  k            A5     !   fxAccountsClient   ˙˙˙˙   a   FxAccountsInternal.prototype.localtimeOffsetMsecÁ                          š                                            $3  b3  w            A5    5   Ě1 !   fxAccountsClient'   localtimeOffsetMsec   ˙˙˙˙   !   checkEmailStatus                        š      	                                        sessionToken Ý3  54  ~            A5    ¸   
T  : Đ8 !   fxAccountsClient'   recoveryEmailStatus   ˙˙˙˙      fetchKeys                 S       š                                 
             keyFetchToken Ł4  {5              ;    ¸   
=   T    : Q;      ;    ¸   
=   T  : QA5   ¸   
T  : Ń˙˙˙ĺŮĐ1    log   debug   fetchKeys:    logPII3   fetchKeys - the token is !   fxAccountsClient   accountKeys   ˙˙˙˙      getSignedInUser                  =       š                                              currentStateů:  =  Ş            A5       Q   ¸   
:  ¸   
A    : ¸   
A   : ĚĚÚ ˇ Ź ˇ4 '   currentAccountState%   getUserAccountData	   then   ˙˙˙˙   #   getSignedInUser/<Ĺ                 3       š                                           	   data a;  Ú<  Ź            T      @A¸    
T  :     A¸   
T  : QT  

ËĎ '   isUserEmailVerified%   startVerifiedCheck   ˙˙˙˙   #   getSignedInUser/<ĺ                        š                                              result á<  =  ˇ                  ¸    
T  : Ř    resolve   ˙˙˙˙      setSignedInUser               Ż       š      A                                @      credentials   record   currentStateŁ@  C  Ď      	      ;    ¸   
=   : QA¸   
:  QY   A5   ]      ]      QA5      Q   ;   ¸   	
;   ¸   

V   : : 6   QA5   ¸   
V   : ¸   
A    : ¸   
A   : ŐĚ
ËĎĚá'˙˙˙őÉŃÚ ß Ú ß4    log   debug[   setSignedInUser - aborting any existing flows#   abortExistingFlow   version   accountData'   currentAccountState   signedInUser	   JSON   parse   stringify'   signedInUserStorage   set	   then   ˙˙˙˙   #   setSignedInUser/<Ĺ                   9       š                                 	           ŹB  UC  Ú            A¸    
;   : QA¸   
   :     A¸   
   : QŃ
ÍŃ%    notifyObservers)   ONLOGIN_NOTIFICATION'   isUserEmailVerified%   startVerifiedCheck   ˙˙˙˙   #   setSignedInUser/<ĺ                        š                                              result \C  C  ß                  ¸    
T  : Ř    resolve   ˙˙˙˙      getAssertion                i       š      *                                @      audience   currentState!   mustBeValidUntil1D  $G  ć            ;    ¸   
=   : QA5      QA¸   
:  ;      Q   ¸   
:  ¸   
A    : ¸   
A   : ŐĚČĎĚÚ ů ę ů4    log   debug)   enter getAssertion()'   currentAccountState   now)   ASSERTION_USE_PERIOD%   getUserAccountData	   then   ˙˙˙˙      getAssertion/<Ĺ                 U       š      $                          
      @   	   dataE  ńF  ę                   @A¸    
   :     @    ¸   
    : ¸   
A    : 

ÍŰÔ ř	 '   isUserEmailVerified   getKeyPair	   then   ˙˙˙˙   !   getAssertion/</<Ĺ                 :       š                                      @      keyPairF  éF  ó                ¸    
         : ¸   
A    : ĺĘ ô    getCertificate	   then   ˙˙˙˙   %   getAssertion/</</<Ĺ                        š      	                                     	   cert }F  ßF  ő            A¸    
     T    : Ú9 )   getAssertionFromCert   ˙˙˙˙      getAssertion/<ĺ                        š                                              result řF  G  ů                  ¸    
T  : Ř    resolve   ˙˙˙˙   /   resendVerificationEmail                  )       š                                              currentState¸G  ŘI               A5       QA¸   
:  ¸   
A    : ĚČÔ  '   currentAccountState   getSignedInUser	   then   ˙˙˙˙   3   resendVerificationEmail/<Ĺ                 T       š                                 
          	   data H  ŇI              T     AA¸    
      T  5   =   : QA5   ¸   
T  5   : ;   =   R păŐËA    pollEmailStatus   sessionToken   start!   fxAccountsClient/   resendVerificationEmail   Errorg   Cannot resend verification email; no signed-in user   ˙˙˙˙   #   abortExistingFlow                   _       š                                            OJ  XK              A5       6;   ¸   
=   : Q;   â   A5    : QA>6    QA5   ¸   
:  QA;   AR 6   QŐÔČŃČÉ    currentTimer   log   debugQ   Polling aborted; Another user signing in   clearTimeout'   currentAccountState   abort   AccountState   ˙˙˙˙      accountStatus                   "       š                                           K  GL              A5    ¸   
:  ¸   
A    : ÍÔ ! '   currentAccountState%   getUserAccountData	   then   ˙˙˙˙      accountStatus/<Ĺ                 %       š                                           	   data ĹK  AL              T      BA5    ¸   
T  5   : 
Ő. !   fxAccountsClient   accountStatus   uid   ˙˙˙˙      signOut               R       š      .                          	      @      localOnly   currentState   sessionTokeneL  ˘P  $            A5       Q   QV   ¸   
:  ¸   
A    : ¸   
A   : ¸   
A   : ËËÚ 'Ę : ' < '   currentAccountState%   getUserAccountData	   then   ˙˙˙˙      signOut/<Ĺ                 )       š                                           	   data ěL  M  '            T  E   QT  5          QA¸   
:  ÜČ    sessionToken   _signOutLocal   ˙˙˙˙      signOut/<Ĺ                   =       š                                            M  UP  +                   6;    ¸   
:  ¸   
A    : ¸   
@A   : Q
ć 6 1 8    Promise   resolve	   then   ˙˙˙˙      signOut/</<Ĺ                          š                                            ŔN  ŐO  1            A¸    
      : 
Ň"    _signOutServer   ˙˙˙˙      signOut/</<Ĺ                        š                                              err âO  EP  6            ;    ¸   
=   T  : Q
ŮF    log   errore   Error during remote sign out of Firefox Accounts:    ˙˙˙˙      signOut/<Ĺ                          š                                            \P  P  :            A¸    
;   : QŃ,    notifyObservers+   ONLOGOUT_NOTIFICATION   ˙˙˙˙      signOutLocal                   ,       š                                            @Q  ŕQ  C            A¸    
:  QA5   @6   QA5   ¸   
@: ĚÍÎ# #   abortExistingFlow'   currentAccountState   signedInUser'   signedInUserStorage   set   ˙˙˙˙      signOutServer                        š      	                                        sessionToken R  WR  I            A5    ¸   
T  : Đ, !   fxAccountsClient   signOut   ˙˙˙˙   I   FxAccountsInternal.prototype.getKeysÁ                  =       š                                              currentStateMU  óY  `            A5       Q   ¸   
:  ¸   
A    : ¸   
A   : ĚĚÚ  b 4 '   currentAccountState%   getUserAccountData	   then   ˙˙˙˙   M   FxAccountsInternal.prototype.getKeys/<Ĺ                 Ü       š      E                                       userData ľU  żY  b            T      ;    =   R pT  5   E   QT  5      	T        5             ;   ¸   
:  6   QT  5      4A¸   
T  5   : ¸   	
A    A   : Q   $      5   ¸   

=   : Q      5   5   
ËÖ
ĐÖ%ÉČ/
ŕ u l
É z
ßŐ2    ErrorK   Can't get keys; User is not signed in   kA   kB+   whenKeysReadyDeferred   Promise   defer   keyFetchToken%   fetchAndUnwrapKeys	   then   reject!   No keyFetchToken   promise   ˙˙˙˙   Q   FxAccountsInternal.prototype.getKeys/</<Ĺ                 e       š      %                                        dataWithKeys PW  ŁX  l            T  5     D   QT  5       /      5   ¸   
;   =   R : Q      5   ¸   
T  : QĎÉÖË oÝ9    kA   kB+   whenKeysReadyDeferred   reject   Error5   user data missing kA or kB   resolve   ˙˙˙˙   Q   FxAccountsInternal.prototype.getKeys/</<Ĺ                        š                                              err ąX  Y  u                  5    ¸   
T  : QÝ/ +   whenKeysReadyDeferred   reject   ˙˙˙˙   M   FxAccountsInternal.prototype.getKeys/<ĺ                        š                                              result ĆY  ěY                    ¸    
T  : Ř    resolve   ˙˙˙˙   _   FxAccountsInternal.prototype.fetchAndUnwrapKeysÁ                b       š   	   5                                @      keyFetchToken   currentStateZ  ó`              ;        ;   ¸   
=      : QA5      Q;   ¸   
    ¸   
A: : ¸   
A   : ŰĚŘ ą  ˙˙˙ëĘ ą  ą?    logPII   log   debug7   fetchAndUnwrapKeys: token: '   currentAccountState	   Task   spawn	   bind	   then   ˙˙˙˙   	   task                       š                                K             .generator   .genrval   kA   wrapKB	   data   kB_hexÓZ  ľ`              É   Ę   ĐQ      X;    ¸   
=   : QY   A¸   
:  ]   B]      Ë  ĐQY   @]   C]      ĚY   A¸   
  : ]   B]      Ë  Đ5      Q5      QQY       ¸   	
:  ]   B]      Ë  Đ   Q   5   
  I   ;   =   R p;   ¸   
;   ¸   
   5   :    :    Q;       ;    ¸   
=      : Q   ;   ¸   
   : 6   Q   ;   ¸   
   : 6   Q   %   
Q   %   Q;    ¸   
=      5     =      5     : Q;      6;    ¸   
=      5   =      5   : QY       ¸   
   : ]   B]      Ë  ĐQA¸   
;   : QY      ]   C]      ĚY   ]   C]      Ě ° Ě
ŐÍŮŘ
Ňń
ÖŢĐË 
â ÉŰÖ
ÉÖ
ÉËËŃ!ÓÍ˙˙˙ČńŰŮŃÜ    log	   warnc   improper fetchAndUnwrapKeys() call: token missing   signOut   value	   done   fetchKeys   kA   wrapKB%   getUserAccountData   keyFetchToken   ErrorW   Signed in user changed while fetching keys!   CryptoUtils   xor   CommonUtils   hexToBytes   unwrapBKey   logPII   debug   kB_hex:    bytesAsHex   kB%   Keys Obtained: kA=   , kB=%   setUserAccountData   notifyObservers/   ONVERIFIED_NOTIFICATION
   P      Ú   S     ˙˙˙˙   c   FxAccountsInternal.prototype.fetchAndUnwrapKeys/<ĺ                        š                                              result Ç`  í`  ą                  ¸    
T  : !Ř    resolve   ˙˙˙˙   c   FxAccountsInternal.prototype.getAssertionFromCertÁ               Ž       š      9                                    	   data   keyPair	   cert   audience   payload   d   options   currentState    a  ˘d  ´      	      ;    ¸   
=   : QY      Q;   ¸   
:     QY   ;   ]   A5   ]   A¸   
:  ]     QA5   	   Q;   
¸   
T T T V  A    : Q   5   ¸   
A   : ŐĘĚÉĘËČÍĚă Ě×7    log   debug)   getAssertionFromCert   Promise   defer%   ASSERTION_LIFETIME   duration'   localtimeOffsetMsec   now'   currentAccountState   jwcrypto#   generateAssertion   promise	   then   ˙˙˙˙   g   FxAccountsInternal.prototype.getAssertionFromCert/<Ĺ                        š      '                                        err   signed  c  Yd  Ŕ            T     ;;    ¸   
=   T  : Q      ¸   
T  : Q   [;    ¸   
=   T   : Q;      ;    ¸   
=   T : Q      ¸   
T : Q6ŮÝŃ6˙˙˙É
ŮŘ    log   error-   getAssertionFromCert:    reject   debugO   getAssertionFromCert returning signed:    logPII   resolve   ˙˙˙˙   g   FxAccountsInternal.prototype.getAssertionFromCert/<ĺ                        š                                              result vd  d  Ě                  ¸    
T  : $Ř    resolve   ˙˙˙˙   c   FxAccountsInternal.prototype.getCertificateSignedÁ                 ~       š   	   1                                        sessionToken'   serializedPublicKey   lifetime   Ĺd  Af  Ď            ;    ¸   
=   T    =   T   : Q;      (;    ¸   
=   T  =   T : QA5   ¸   
T  ;   ¸   
T : T : Ń%Ě˙˙˙ĂăÍĎ Ô    log   debug-   getCertificateSigned:        logPII!   fxAccountsClient   signCertificate	   JSON   parse   ˙˙˙˙   _   FxAccountsInternal.prototype.getUserAccountDataÁ                          š      	                                      bf  ¤f  Ű            A5    ¸   
:  Í. '   currentAccountState%   getUserAccountData   ˙˙˙˙   '   isUserEmailVerified                        š                                           	   data Úf  g  ß            T  E   QT  5      Ô    verified   ˙˙˙˙   Q   FxAccountsInternal.prototype.loadAndPollÁ                  -       š                                              currentStateqg  h  ć            A5       Q   ¸   
:  ¸   
A    : ĚĚĘ č î	 '   currentAccountState%   getUserAccountData	   then   ˙˙˙˙   U   FxAccountsInternal.prototype.loadAndPoll/<Ĺ                 E       š                                           	   data ŕg  h  é            T  E   QA¸    
T  :     (A¸   
      T  5   =   : QT  ÉË
ă '   isUserEmailVerified   pollEmailStatus   sessionToken   start   ˙˙˙˙   _   FxAccountsInternal.prototype.startVerifiedCheckÁ                 n       š                                           	   data ¸h  l  ń            ;    ¸   
=   T  E   QT  5   : Q;      ;    ¸   
=   T  : QA¸   
T  : ¸   
A    A   : QćŘ Ű     log   debug%   startVerifiedCheck   verified   logPIIC   startVerifiedCheck with user data   whenVerified	   then   ˙˙˙˙   c   FxAccountsInternal.prototype.startVerifiedCheck/<ĺ                          š                                            ˘k  śk              A¸    
:  Ě    getKeys   ˙˙˙˙   c   FxAccountsInternal.prototype.startVerifiedCheck/<ĺ                        š                                              err žk   l              ;    ¸   
=   T  : Ů;    log	   infoS   startVerifiedCheck promise was rejected:    ˙˙˙˙   S   FxAccountsInternal.prototype.whenVerifiedÁ                Ľ       š      +                                    	   data   currentState &l  n              A5       QT  5      -;   ¸   
=   : Q   ¸   
T  :    5       8;   ¸   
=   : QA¸   
   T  5   	=   
: Q   5   5   ¸   
A    : ĚČŐĎËŐŢÜ '   currentAccountState   verified   log   debug!   already verified   resolve)   whenVerifiedDeferredm   whenVerified promise starts polling for verified email   pollEmailStatus   sessionToken   start   promise	   then   ˙˙˙˙   W   FxAccountsInternal.prototype.whenVerified/<ĺ                        š                                              result Óm  ům                    ¸    
T  : Ř    resolve   ˙˙˙˙   Y   FxAccountsInternal.prototype.notifyObserversÁ                 6       š                                              topic	   data  "n  n              ;    ¸   
=   T  : Q;   5   ¸   
@T  T : QŮÜ0    log   debug/   Notifying observers of    Services   obs   notifyObservers   ˙˙˙˙      pollEmailStatus                 °       š      B                                @      currentState   sessionToken   why o   x              ;    ¸   
=   T : QT =      fA;   ¸   
:  6   Q   5       @   ;   ¸   	
:  6   Q   5   5   
¸   
@A    : QA¸   
   : ¸   
A   A   : QŮÉÍÉ
ËŃ$É )á /× E / P	    log   debug5   entering pollEmailStatus:    start   pollStartDate	   Date   now)   whenVerifiedDeferred   Promise   defer   promise	   then!   checkEmailStatus   ˙˙˙˙   #   pollEmailStatus/<Ĺ                        š                                              err 8r  r  )            ;    ¸   
=   T  : Q
Ů?    log	   infoY   the wait for user verification was stopped:    ˙˙˙˙   #   pollEmailStatus/<Ĺ                        š   	   6                                       response Úr  v  0            ;    ¸   
=   ;   ¸   
T  : : QT  E   QT  5      :   ¸   
:  ¸   
A    : ¸   
A   : Q   A¸   
      : Qŕ#˙˙˙ÝŃ5
Ö 3
Ę 8 3
É A
Ö6    log   debug)   checkEmailStatus -> 	   JSON   stringify   verified%   getUserAccountData	   then)   pollEmailStatusAgain   ˙˙˙˙   '   pollEmailStatus/</<Ĺ                        š                                           	   data s  t  4            T  C6    Q   ¸   
T  : ĘĎ&    verified%   setUserAccountData   ˙˙˙˙   '   pollEmailStatus/</<Ĺ                 I       š                                           	   data (t  äu  8               5       (   5    ¸   
T  : Q   %    QA¸   
;   ;   : QĘŘËÖJ )   whenVerifiedDeferred   resolve   notifyObservers5   ON_FXA_UPDATE_NOTIFICATION/   ONVERIFIED_NOTIFICATION   ˙˙˙˙   #   pollEmailStatus/<Ĺ               y       š                                 	             error   timeoutMs v  x  E            ;       QT  E   QT  5      T  5   ×XčW   QT   D   !QT  5    D   QT  5   X   A¸   
      V   : QĘŃ
ÔĘ
Ű
ÚA    undefined   retryAfter	   code)   pollEmailStatusAgain   ˙˙˙˙   c   FxAccountsInternal.prototype.pollEmailStatusAgainÁ                    š      Q                               @      currentState   sessionToken   timeoutMs   ageMs y  i|  T            ;    ¸   
:  A5      QV   A5      i   5      C  Q;   =   R   Q   5   ¸   
V  : Q   %   QČ;   ¸   	
=   
: QT ;   H   I  Q;   ¸   
V   Xę`:   QV  ×   A5      A5   U QČ;   ¸   	
=   T : QA;   â   A   T : 6   QĚĎËĘËËČŮĚŐÉË
ÔČĐËŮŃ eÉ 	   Date   now   pollStartDate   POLL_SESSION)   whenVerifiedDeferred   ErrorE   User email verification timed out.   reject   log   debugG   polling session exceeded, giving up   undefined	   Math	   ceilC   VERIFICATION_POLL_TIMEOUT_INITIALI   VERIFICATION_POLL_TIMEOUT_SUBSEQUENT/   polling with timeout =    currentTimer   setTimeout    ˙˙˙˙         error        ˙˙˙˙         currentMinute       ˙˙˙˙      FxAccountsInternal.prototype.pollEmailStatusAgain/this.currentTimer<Ĺ                          š                                            
|  X|  e            A¸    
      =   : QŰ:    pollEmailStatus   timer    ;   =   ˙˙˙˙      C   ˙˙˙˙   ˙˙˙˙   U   FxAccountsInternal.prototype._requireHttpsÁ                E       š                                            allowHttp|  S}  j            B   Q;    5   ¸   
=   : W   Q     Qv  QČ    V   CIÖÍÓ    Services   prefs   getBoolPref;   identity.fxaccounts.allowHttp    ˙˙˙˙         e            #       +      ˙˙˙˙   ˙˙˙˙   c   FxAccountsInternal.prototype.getAccountsSignUpURIÁ                 ]       š                                
              url˘}  Ç~  u            ;    5   ¸   
=   :    QA¸   
:  E   Q     ¸   
V   :     ;   =   R pV   ÖČČÉĐË    Services   urlFormatter   formatURLPrefK   identity.fxaccounts.remote.signup.uri   _requireHttps	   test   ErrorM   Firefox Accounts server must use HTTPS   ^https:       ˙˙˙˙   c   FxAccountsInternal.prototype.getAccountsSignInURIÁ                 ]       š                                
              url  ;  ~            ;    5   ¸   
=   :    QA¸   
:  E   Q     ¸   
V   :     ;   =   R pV   ÖČČÉĐË    Services   urlFormatter   formatURLPrefK   identity.fxaccounts.remote.signin.uri   _requireHttps	   test   ErrorM   Firefox Accounts server must use HTTPS   ^https:       ˙˙˙˙   u   FxAccountsInternal.prototype.promiseAccountsForceSigninURIÁ                         š      9                                       url   currentStateŇ  ł              ;    5   ¸   
=   :    QA¸   
:  E   Q     ¸   
   :     ;   =   R pA5      QA¸   	
:  ¸   

A    : ¸   

A   : ÖÉČÉŃËĚČÚ   4    Services   urlFormatter   formatURLPrefS   identity.fxaccounts.remote.force_auth.uri   _requireHttps	   test   ErrorM   Firefox Accounts server must use HTTPS'   currentAccountState   getSignedInUser	   then   ˙˙˙˙   y   FxAccountsInternal.prototype.promiseAccountsForceSigninURI/<Ĺ               v       š                                              accountData   newQueryPortion           	      T      @      ¸    
=   : ×˙   =      
=      QV   =   ;   â   T  5   : W   Q      V   

Ö
ŮŰ|Đ    indexOf   ?   &   email=%   encodeURIComponent   email   ˙˙˙˙   y   FxAccountsInternal.prototype.promiseAccountsForceSigninURI/<ĺ                        š                                              result   ­                    ¸    
T  : Ř    resolve   ^https:       ˙˙˙˙   U   FxAccountsInternal.prototype.getOAuthTokenÁ               2      š                              !       @      options   oAuthURL   clientă    Ť               H   Y      Q;    ¸   
=   : Q   5       A¸   
;   =   : ;   5   ¸   	
=   
:    Q   5      Q       ];   Y      ]   ;   ]   R    Q   /   Qv   QA¸   
;   V   : ČČ    A¸   
:  ¸   
A   : ¸   
A   : ¸   
A   : ¸   
@A   : ĐŐËŇÖÉĐ)Ë
Ę
Ę ˇÎĚŃÍČĘ ŔĘ ŔĘ ŔĘ Ŕ7    log   debug'   getOAuthToken enter   scope   _error/   ERROR_INVALID_PARAMETER-   Missing 'scope' option   Services   urlFormatter   formatURLPrefI   identity.fxaccounts.remote.oauth.uri   client5   FxAccountsOAuthGrantClient   serverURL%   FX_OAUTH_CLIENT_ID   client_id7   _getVerifiedAccountOrReject	   then    ˙˙˙˙          e       ˙˙˙˙   Y   FxAccountsInternal.prototype.getOAuthToken/<ĺ                          š                                            D  e  Á            A¸    
      : Ö    getAssertion   ˙˙˙˙   Y   FxAccountsInternal.prototype.getOAuthToken/<ĺ                 #       š                                              assertion s  ś  Â                  ¸    
T     5   : â6 +   getTokenFromAssertion   scope   ˙˙˙˙   Y   FxAccountsInternal.prototype.getOAuthToken/<ĺ                 
       š                                              result Ä  á  Ă            T  5    É    access_token   ˙˙˙˙   Y   FxAccountsInternal.prototype.getOAuthToken/<ĺ                        š                                              err ő    Ä            A¸    
T  : Ď %   _errorToErrorClass        -       ť   #   ˙˙˙˙˙˙˙˙Ü             ˙˙˙˙   q   FxAccountsInternal.prototype._getVerifiedAccountOrRejectÁ                   "       š                                           I  Ł  Ç            A5    ¸   
:  ¸   
A    : ÍÔ Ń '   currentAccountState%   getUserAccountData	   then   ˙˙˙˙   u   FxAccountsInternal.prototype._getVerifiedAccountOrReject/<Ĺ                 @       š                                           	   data     Č            T      A¸    
;   : A¸   
T  :     A¸    
;   : 
Í
ËÍ&    _error!   ERROR_NO_ACCOUNT'   isUserEmailVerified1   ERROR_UNVERIFIED_ACCOUNT   ˙˙˙˙   _   FxAccountsInternal.prototype._errorToErrorClassÁ                Ă       š      )                                      aError ß    ß            T  5       J   Q;   T  5    7   QA¸   
;   V   7D   Q;   T  : ČČ   aT  5   E   QT  5   =   HD   (QT  5   =   HD   QT  5   =   H   ;   	¸   

T  : A¸   
;   T  : ČEË
ÓŕĚÎÔÔÎĎĐ#    errno+   SERVER_ERRNO_TO_ERROR   _error9   ERROR_TO_GENERAL_ERROR_CLASS   ERROR_UNKNOWN   message#   INVALID_PARAMETER   NO_ACCOUNT%   UNVERIFIED_ACCOUNT   Promise   reject    ˙˙˙˙          error           ?   ˙˙˙˙˙˙˙˙K             ˙˙˙˙   G   FxAccountsInternal.prototype._errorÁ               e       š   	   &                                        aError   aDetails   reason  ´  ­  ě            ;    ¸   
=   Y   T  ]   T ]   : Q;   T  R    QT    V   T 6   Q;   ¸   
V   : ÖGČČ˙˙˙ąÉ	ČÍĐ    log   errorq   FxA rejecting with error ${aError}, details: ${aDetails}   aError   aDetails   Error   details   Promise   reject   ˙˙˙˙      JSONStorage                 ;       š                                              options                 AT  5    6    QA;   5   ¸   
T  5    T  5   : 6   QĎâÉ0    baseDir	   path   OS	   Path	   join   filename   ˙˙˙˙   3   JSONStorage.prototype.setÁ                 O       š   
                                           contents ˛  G        
      ;    5   ¸   
A5   Y   C]   : ¸   
;   5   ¸   
@T  A5   	: : Ü&˙˙˙áĘŰ C    OS	   File   makeDir   baseDir   ignoreExisting	   then   CommonUtils   writeJSON	   bind	   path   ˙˙˙˙   3   JSONStorage.prototype.getÁ                          š      	                                      Y                ;    ¸   
A5   : Ň     CommonUtils   readJSON	   path   ˙˙˙˙   '   LoginManagerStorage                        š                                              options                 A;   T  R 6    QĘÉ    jsonStorage   JSONStorage   ˙˙˙˙   S   LoginManagerStorage.prototype._isLoggedInÁ                          š                                            Ö    (            ;    5   5   Đ"    Services   logins   isLoggedIn   ˙˙˙˙   c   LoginManagerStorage.prototype._clearLoginMgrData<Á                        š      Q                                    .generator   .genrval  í  /            É   Ę   ĐQĆ       QY   ;    5   5   ]   B]     Ë  ĐQA5       Y   B]   C]   ČÇ   Ě;    5   ¸   
Y   ;   @;   :    Q   - Á
:  Ć      Q   ,m5      Q;    5   ¸   	
   : QăQ¸   

:  5   ˙˙˙ĹČÇ Y   C]   C]   ČÇ   ĚČÇ   TĆ      Qv   Q;   ¸   
=      : QY   B]   C]   ČÇ   ĚČÇ    Y   ]   C]      Ě = /Ě Íę
Ú
á	ÉÚ8@ŇÚ 6Ë˙˙˙îÓáÓÚâ    Services   logins+   initializationPromise   value	   done   _isLoggedIn   findLogins   FXA_PWDMGR_HOST!   FXA_PWDMGR_REALM   removeLogin	   next   log   error?   Failed to clear login data: ${}    ˙˙˙˙          logins                    login       ˙˙˙˙          ex                ˛   @          ˙   ˙˙˙˙˙˙˙˙b             §   L       ˙˙˙˙
              B   ˙˙˙˙˙˙˙˙X        
   A      ˙˙˙˙   E   LoginManagerStorage.prototype.set<Á               ˙      š   %   ó                       i      @     contents   .generator   .genrval   toWriteJSON   accountDataJSON   toWriteLoginMgr'   accountDataLoginMgr  6˘  @            É   Ę   ĐQ       ¨Ć       QY   A5    ¸   
  : ]   B]     Ë  ĐQY   A¸   
:  ]   B]     Ë  Đ   Q       ;   ¸   
=   : QY   ]   C]   ČÇ   ĚČÇY      5   ]      Q   Y   6   	   QY      5   ]      Q   Y   6   	   Q;   
â   
   5   	: - Á
:  Ć      Q   Q   Šm5   - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5      QQQ;   ¸   
   : >           8Q           8QăQ¸   
:  5   ˙˙˙HČÇ Y   A5    ¸   
   : ]   B]      Ë  ĐQĆ      Q   Q   QY   ;   5   5   ]   B]     Ë  ĐQA5       4;   ¸   
=   : QY   ]   C]   ČÇ   Ě;   5   =   ;   5   =   R    Q   ;   @;     5   	5   ;   ¸   
  : =   =   R    Q;   5   ¸   
Y   ;   @;   :    Q   Ů       +;   5   ¸   !
   >7   : Q   ;   5   ¸   "
   : QČÇ   :Ć      Qv   Q;   ¸   #
=   $   : QČÇ    Y   ]   C]      Ě | @ĚŃ×Ů
ÍŢ
ŐÜ RŐŐŐŐÔß8  ˝Ý˙˙˙ďÉčŮŃ
ÖŃ VË˙˙˙ćÓ ]×Ů jŰę
ŐÚ
ËÔ iÉ
ËĎŃ  kÉ s
Ü sÉĘ&ćáÓâ    jsonStorage   set   value	   done%   _clearLoginMgrData   log	   infow   not removing credentials from login manager - not logged in   version   accountData   Iterator	   next7   FXA_PWDMGR_PLAINTEXT_FIELDS   indexOf   Services   logins+   initializationPromise   _isLoggedIno   not saving credentials to login manager - not logged in   Components   ConstructorM   @mozilla.org/login-manager/loginInfo;1   Ci   nsILoginInfo	   init   FXA_PWDMGR_HOST!   FXA_PWDMGR_REALM   email	   JSON   stringify      findLogins   length   modifyLogin   addLogin   error[   Failed to save data to the login manager: ${}    ˙˙˙˙          cleared       ˙˙˙˙       	   name      value       ˙˙˙˙          loginInfo      login      existingLogins       ˙˙˙˙          ex        C  n     P  ˝             ˙˙˙˙˙˙˙˙ą             ?  Ď   ˙˙˙˙   K  `  ˙˙˙˙˙˙˙˙ť           ˇ  (   ˙˙˙˙
   Q   w   @       ˙˙˙˙   E   LoginManagerStorage.prototype.get<Á                 K      š   %   ĺ                       n             .generator   .genrval	   dataV˘  Ż              É   Ę   ĐQY   A5    ¸   
:  ]   B]      Ë  Đ   Q       CY   A¸   
:  ]   B]      Ë  ĐQY   @]   C]      Ě   5   5   D   %Q   5   5   D   Q   5     !A5   	    ŐĆ       Q;   
¸   
=   : QY     5   ]   Y   ]      Q;   - Á
:  Ć      Q   3m5      Q  5        5      78QăQ¸   
:  5   ˙˙˙žČÇ Y      ]   C]   ČÇ   ĚČÇ;   
¸   
=   : QY   A¸   
   : ]   B]      Ë  ĐQĆ      Q   QY   ;   5   5   ]   B]     Ë  ĐQA5   	    8;   
¸   
=   : QY     ]   C]   ČÇ   Ě;   5   ¸   
Y   ;   @;   :    Q   Ů   >   8;   
¸   
=   : QY     ]   C]   ČÇ   Ě   >7   Q   5     5   5      łĆ      Q;   ¸   
  5   :    Q   5     5      ,;    â       5     5   : Q   @;   
¸   
=   !: QY   A¸   
:  ]   B]     Ë  ĐQČÇ   @;   
¸   
=   ": QY   A¸   
:  ]   B]     Ë  ĐQČÇ   :Ć      Qv   Q;   
¸   #
=   $   : QČÇ    Y      ]   C]      ĚY   ]   C]      Ě Č ĚŇŢÍŮŘ ô 
ŃŐ
Ď
ĐÚ8GŇ
á Ë˙˙˙ęÓŕŐŇŮ Ôę
ŐŢ
á	ÉĚŐŢ
ÍÚ  ŽŃÖ	ÉŐ'
ç
Ő
ÍŕŐÍŕÓâÜ    jsonStorage   get   value	   done%   _clearLoginMgrData   accountData   kA   kB   keyFetchToken   _isLoggedIn   log	   info   account data needs migration to the login manager but the MP is locked.   version7   FXA_PWDMGR_PLAINTEXT_FIELDS	   nexti   account data is being migrated to the login manager.   set   Services   logins+   initializationPromise}   returning partial account data as the login manager is locked.   findLogins   FXA_PWDMGR_HOST!   FXA_PWDMGR_REALM   lengthw   Can't find the rest of the credentials in the login manager   username   email	   JSON   parse   password)   copyObjectProperties}   version field in the login manager doesn't match - ignoring its   username in the login manager doesn't match - ignoring it   error]   Failed to get data from the login manager: ${}    ˙˙˙˙          result                    fieldName       ˙˙˙˙          logins      login                   lmData       ˙˙˙˙          ex        Ű       .  G       Đ   É   ˙˙˙˙   #  S       ˙˙˙˙            â  ů  ˙˙˙˙˙˙˙˙P        ˙˙˙˙ž           ÷  ˘         ç  (   ˙˙˙˙
   5   k   Ř      Ř     ˙˙˙˙                     #       š                                               auŻ  °  Î            ;    R     QV   ¸   
:  QV   ČĎ	    FxAccounts   loadAndPoll