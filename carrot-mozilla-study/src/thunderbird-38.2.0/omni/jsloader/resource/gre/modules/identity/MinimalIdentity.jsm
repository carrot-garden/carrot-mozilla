ç¿s¹                ±  #   ¹   &   á                          !       0     resource://gre/modules/identity/MinimalIdentity.jsm     è         	                            Af    0    Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   Y   ;   ¸   
Z  ;   5   `   ;   5   `  : ]      ]      ]      ]      ]      ]      	]      
]      ]       ]   !   ]   "   ]   #   ]   $0   QA;   R  0   %QÊ#	&	*	Ì,ÐÐÐÐÕ3Õ1Õ:ÒW Ò W#%(*57ÊÐ'ÎÎÿÿÿÙÈ:ÊBÊIÊgÊvÊ  Ê  ¨Ê  ³Ê  ÂÊ  ÌÊ  ÝÊ  çÐ  ðÉ !   EXPORTED_SYMBOLS   Cu   Components   utils   Ci   interfaces   Cc   classes   Cr   results   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmY   resource://gre/modules/identity/LogUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   objectCopyc   resource://gre/modules/identity/IdentityUtils.jsm#   makeMessageObject   IDService   prototype   generateQI   nsISupports   nsIObserver   QueryInterface   observe   shutdown   parseEmail   watch   unwatch   request   logout)   childProcessShutdown   doLogin   doLogout   doReady   doCancel   IdentityService                     IdentityService                  ÿÿÿÿ      log                2      ¹                                             aMessageArgs ñ  I  #             àU  Q;    5   ¸   
;    f    ¸   
T  : O Qåÿÿÿç@    Logger   log   apply   concat                     minimal core                  ÿÿÿÿ      reportError                2      ¹                                             aMessageArgs ^  ¶  &             àU  Q;    5   ¸   
;    f    ¸   
T  : O Qå!ÿÿÿß@    Logger   reportError   apply   concat                  	   core                  ÿÿÿÿ      IDService                   Q       ¹   	                                        Ê  º  *             ;    5   ¸   
A=   B: QAA0   QAA0   QAY   0   QAY   0   QAY   0   QÜ.ÈÈ2ÌÌÌ    Services   obs   addObserver1   quit-application-granted   RP   IDP   _rpFlows   _authFlows   _provFlows   ÿÿÿÿ      observe                 %       ¹                                             aSubject   aTopic   aData   ;  Å  :             T x=    y   
z   A¸   
:  Q   k!uÊÌX 1   quit-application-granted   shutdown   ÿÿÿÿ   9   IDService.prototype.shutdownÁ                          ¹                                           Ü  '  B             ;    5   ¸   
A=   : QÛ>    Services   obs   removeObserver1   quit-application-granted   ÿÿÿÿ      parseEmail               @       ¹                                            email   match ¥  b	  I             T  ¸    
     : W   QV      "Y   V   ?7]   V   ×7]   @ÏÈËÍQ    match   username   domain5   ^([^@]+)@([^@^/]+.[a-z]+)$       ÿÿÿÿ      watch                       ¹      -                                       aRpCaller   options ô  t  g       
      A5    T  5   T  9Q;   â   =   ;   ¸   
A5    : ¸   
=   : : Q;   â   T  :    Q;   â   =   	V   : Q;   
5   ¸   
Y   V   ]   =   @: QiÓkáÒÿÿÿòmÍ
È×ÖÏÿÿÿâ[    _rpFlows   id   log   flows:   Object	   keys	   join   , #   makeMessageObjectE   sending identity-controller-watch:   Services   obs   notifyObservers   wrappedJSObject3   identity-controller-watch   ÿÿÿÿ      unwatch               ª       ¹      >                                       aRpId   aTargetMM   rp   options  "  ý  v       
      A5    T  7   QV       ;   â   Y   T  ]   V   5   ]   T ]   :   Q;   â   =   V  5   V  5   : Q;   5   ¸   	
Y   V  ]   
=   @: QA5    T  /QÏ|ÏÈÎÈ|È  åÖÏÿÿÿâË    _rpFlows#   makeMessageObject   id   origin   messageManager   logU   sending identity-controller-unwatch for id   Services   obs   notifyObservers   wrappedJSObject7   identity-controller-unwatch   ÿÿÿÿ      request                      ¹   
   -                                       aRPId   aOptions   rp   options  E  ö               A5    T  7   QV       ;   â   =   : Q;   â   V   :   Q;   â   T V  : Q;   5   ¸   
Y   V  ]   =   	@: QÏÓ  Î
ÈÕÖÏÿÿÿâ^    _rpFlows   reportError?   request() called before watch()#   makeMessageObject   objectCopy   Services   obs   notifyObservers   wrappedJSObject7   identity-controller-request   ÿÿÿÿ      logout               n       ¹   	   '                           
            aRpCallerId   rp   options ü    ¨             A5    T  7   QV       ;   â   =   : Q;   â   V   :   Q;   5   ¸   
Y   V  ]   =   @: QÏÓÎ
ÈÖÏÿÿÿâ]    _rpFlows   reportError=   logout() called before watch()#   makeMessageObject   Services   obs   notifyObservers   wrappedJSObject5   identity-controller-logout   ÿÿÿÿ   )   childProcessShutdown                 '       ¹                                      D      messageManagerT  W  ³             ;    ¸   
A5   : ¸   
    A: Qá  ¹  ´  ¹    Object	   keys   _rpFlows   forEach   ÿÿÿÿ   -   childProcessShutdown/<Á                 A       ¹                                             key   K  ´             A5    T  75      H   +;   â   =   T  =   : QA5    T  /QÕÛË    _rpFlows   _mm   log;   child process shutdown for rp   - deleting flow   ÿÿÿÿ      doLogin               H       ¹                                             aRpCallerId   aAssertion   aInternalParams   rp   7  /  Â             A5    T  7   QV       ;   â   =   T  : QV   ¸   
T T : QÏ×Õ(    _rpFlows   logc   WARNING: doLogin found no rp to go with callerId    doLogin   ÿÿÿÿ      doLogout               r       ¹      3                                      aRpCallerId   rp   origin O  û  Ì             A5    T  7   QV       ;   â   =   T  : QV   5      Q;   ¸   
A5    : ¸   
    ¸   
A: : QÏ×Ïè  Ú  Õ'ÿÿÿÝ  Ú    _rpFlows   loge   WARNING: doLogout found no rp to go with callerId    origin   Object	   keys   forEach	   bind   ÿÿÿÿ      doLogout/<Á               8       ¹                                             key   rp y  ê  Õ             A5    T  7   QV   5         H   V   ¸   
:  Q
ÏÔÏ    _rpFlows   origin   doLogout   ÿÿÿÿ      doReady               B       ¹                                             aRpCallerId   rp   Ù  Ý             A5    T  7   QV       ;   â   =   T  : QV   ¸   
:  QÏ×Ï    _rpFlows   logc   WARNING: doReady found no rp to go with callerId    doReady   ÿÿÿÿ      doCancel               B       ¹                                             aRpCallerId   rp ù  »  ç             A5    T  7   QV       ;   â   =   T  : QV   ¸   
:  QÏ×Ï    _rpFlows   loge   WARNING: doCancel found no rp to go with callerId    doCancel