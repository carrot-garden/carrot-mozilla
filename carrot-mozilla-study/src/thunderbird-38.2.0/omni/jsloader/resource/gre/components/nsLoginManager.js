çżsš                ű  #   š   B                            6            resource://gre/components/nsLoginManager.js     šF         
                              ;   5       Q;   5      Q;   5      Q;   ¸   
=   : Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : QŘ&\    Qn   Bo   Q;   Y   ;   ¸   
=   : ]   ;   ¸   
Z  ;   5   `   ;   5   `  ;   5   `  : ]       ]   !@]   "   a   #@]   $@]   %C]   &   ]   '   ]   (Y   @]   );   ¸   
Z  ;   5   *`   ;   5   `  : ]       ]   +]   ,   ]   -@]   .   ]   /   	]   0   
]   1   ]   2   ]   3   ]   4   ]   5   ]   6   ]   7   a   8   a   9   ]   :   ]   ;   ]   <   ]   =   ]   >   ]   ?6   QA;   ¸   A
Z  ;   `   : 6   @QĘ	8	ĐĐĐ
Ő3Ő1Ő.Ő=Ő<ŇHŇEŇMË
Ě68:<Ę>Ń	ČĐ(Î*Î*Î?ČBĘTĘ^lĘ  Ę  ŠĐ(Î,Î  ŹČĎ  âĘ # +Ę VĘ aĘ pĘ {Ę Ę Ę ŚĘ łĘ žĘ ĆĘ ĐĘ ŢĘ ńĘ Ę 8Ę HĐ PŃ5É˙˙˙ßÉ0    Cc   Components   classes   Ci   interfaces   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmA   resource://gre/modules/Timer.jsm_   resource://gre/modules/PrivateBrowsingUtils.jsm]   resource://gre/modules/LoginManagerContent.jsm   XPCOMUtils-   defineLazyModuleGetter   PromiseE   resource://gre/modules/Promise.jsm	   Task?   resource://gre/modules/Task.jsm   BrowserUtilsO   resource://gre/modules/BrowserUtils.jsm   MS_PER_DAY   debug   LoginManager   prototype   IDM   {cb9e0de8-3598-4ed7-857b-827f011ad5d8}   classID   generateQI   nsILoginManager1   nsISupportsWeakReference+   nsIInterfaceRequestor   QueryInterface   getInterface#   __formFillService!   _formFillService   _storage   _prefBranch   _remember	   init   _initStorage   _pwmgr   nsIObserver   observe   _observer!   _gatherTelemetry+   initializationPromise   addLogin   removeLogin   modifyLogin   getAllLogins   removeAllLogins'   getAllDisabledHosts   findLogins   searchLogins   countLogins   uiBusy   isLoggedIn+   getLoginSavingEnabled+   setLoginSavingEnabled/   autoCompleteSearchAsync%   _getPasswordOrigin!   _getActionOrigin   fillForm   NSGetFactory)   generateNSGetFactory   ˙˙˙˙      log            ^      š                                 	              pieces%   generateLogMessage   message    Ť               ŕU  Q    W   Q;        V   T  :   Q;   â   V  =   : Q;   5   ¸   
V  : QĘ03Č
ČŘŮ+    debug	   dump   
   Services   console!   logStringMessage   ˙˙˙˙   %   generateLogMessage                4       š                                          	   args   strings +                 f       QT  ¸    
   : Q   ¸   
=   : ËÓ-Ń    forEach	   join                         Login Manager:                  ˙˙˙˙   1   log/generateLogMessage/<Á                á       š      5                                     arg t  ÷               T  '=    H   "      ¸   
T  : Q   šT  '=   H   $      ¸   
=   : Q   T  @H   $      ¸   
=   : Q   b      ¸   
;   ¸   
T  @×: : Q   2   Qv   Q      ¸   
=   : QČ    
ĘÝĘßß+
ă˙˙˙óÉĚ
á	    string	   push   undefined	   null	   JSON   stringify   <<something>>    ˙˙˙˙          err            /       ´   &   ˙˙˙˙   ˙˙˙˙      LoginManager                          š                                            Â  ×  8             A¸    
:  QĚ 	   init   ˙˙˙˙   G   LoginManager.prototype.getInterfaceÁ                       š   
   &                                   	   aIID   	  B             T  ¸    
;   5   : E   QA5      ?   QA5   ¸   
;   5   :    QV   ¸   
T  : ČČT  ¸    
;   5   :    A;   5   	pÔĎË
×ČÎHÔJMË    equals   Ci+   mozIStorageConnection   _storage   QueryInterface+   nsIInterfaceRequestor   getInterface   nsIVariant   Cr+   NS_ERROR_NO_INTERFACE    ˙˙˙˙          ir        )   9   ˙˙˙˙˙˙˙˙`             ˙˙˙˙   O   LoginManager.prototype._formFillServiceÁ                   9       š                                            !
    U             A5        *A;   5   ¸   
;   5   : 6    QA5    ŃĘXÉZ #   __formFillService   CcW   @mozilla.org/satchel/form-fill-controller;1   getService   Ci+   nsIFormFillController   ˙˙˙˙   7   LoginManager.prototype.initÁ                         š      H                           &           ˛    l             A5    A6   QA;   5   ¸   
=   : 6   QA5   ¸   
=   A5    B: Qn   	A5   ¸   

=   	: o   	QAA5   ¸   

=   : 6   Q;   5   ¸   
A5    =   B: Q;   5   5   ;   5   5   H   2;   5   ¸   
A5    =   B: QA¸   
:  Q;   5   ¸   
A5    =   B: QoÍr×ÉÝv×ÉxÓÉ{áĎĐÜ  ĚáD    _observer   _pwmgr   _prefBranch   Services   prefs   getBranch   signon.   addObserver      debug   getBoolPref   _remember   rememberSignons   obs   xpcom-shutdown   appinfo   processType)   PROCESS_TYPE_DEFAULT7   passwordmgr-storage-replace   _initStorage!   gather-telemetry   ˙˙˙˙   G   LoginManager.prototype._initStorageÁ                Ę       š      K                                      contractID   catMan*  ´         
      =    W   Q;   5   ¸   
;   5   : W  QV  ¸   
=   =   : W   Q;   	â   	=   
V   : Q   +  Qv  Q;   	â   	=   : QČ    A;   V   7¸   
;   5   : 6   QAA5   ¸   
:  6   QĘX
ŃĘ  ČĐ  ČÜĚÚŇĘ  ÉÎÉ S   @mozilla.org/login-manager/storage/json;1   Cc=   @mozilla.org/categorymanager;1   getService   Ci%   nsICategoryManager!   getCategoryEntry+   login-manager-storage-   nsILoginManagerStorage   logq   Found alternate nsILoginManagerStorage with contract ID:]   No alternate nsILoginManagerStorage registered   _storage   createInstance+   initializationPromise   initialize    ˙˙˙˙         e            \       h      ˙˙˙˙   ˙˙˙˙   Q   LoginManager.prototype._observer.observeÁ                     š                                              subject   topic	   data   prefName   s     °             T =       ´T W   Q;   â   =   V   =   : QV   =      /n   A5   5   ¸   
=   : o   Q   RV   =      0A5   A5   5   ¸   
=   : 6   	Q   ;   â   =   
: Q   áT =      6A5   %   QA5   %   QA5   %   QA@6   Q   ˘T =      *;   ¸   
    ¸   
A: : Q   oT =      KA5   ¸   
T    ;   â   T :    ;   R  ¸   
:  : Q   ;   â   =   T : QÉ  ŻČÜĘ*
ÜÎĘ+
×Î
ŘÉ1ĚĚĚÍÉ%Ř  Ę  Ä˙˙˙őÉ  ËÉFĐŇ$Č,Í  ÎÉÖ-    nsPref:changed   log   got change to   preference   debug   _pwmgr   _prefBranch   getBoolPref   rememberSignons   _rememberO   Oops! Pref not handled, change ignored.   xpcom-shutdown#   __formFillService   _storage7   passwordmgr-storage-replace	   Task   spawn	   bind!   gather-telemetry!   _gatherTelemetry   parseInt	   Date   getTime=   Oops! Unexpected notification:   ˙˙˙˙   U   LoginManager.prototype._observer.observe/<Á                  x       š   	   *                                       .generatorx    Ä             É   Ę   ĐQA5    5   ¸   
:     Ë  ĐQA5    ¸   
:  QA5    5      Ë  ĐQ;   5   ¸   
@=   @: Q   Ě  É  ÄĚ
ŇÎ
Ń
Ö
Ň  Č
E    _pwmgr   _storage   terminate   _initStorage+   initializationPromise   Services   obs   notifyObserversI   passwordmgr-storage-replace-complete
   *   Q      ˙˙˙˙   O   LoginManager.prototype._gatherTelemetryÁ            O      š      Ő                        :             referenceTimeMs)   clearAndGetHistogram   logins1   usernamePresentHistogram5   loginLastUsedDaysHistogram   hostnameCount/   passwordsCountHistogram   %  â                 W   QV   =    : ¸   
A¸   
Y   : Ů   : QV   =   : ¸   
A¸   
=   =   =   : : QV   =   : ¸   
A5   : QA5   	    A¸   

Y   :   QV   =   :   QV   =   :   Q;   R    QV  - Á
:    Q   Ňm5   W  Q  Q  QV  ¸   
V  5     : QV  5     QV  ¸   
V  V  ¸   
V  : D   Q>?: QV  ¸   
;   5   : QT  V  5     QV  >   -V  ¸   
;   ¸   
V  ;   : : QČăQ¸   
:  5   ˙˙˙Č V   =   :   QV  ¸   
:  - Á
:    Q   $m5   W  QV  ¸   
V  : QăQ¸   
:  5   ˙˙˙ÍČ Ę  â  éÔÍČ  éÔ×  ě  ňŢÍ	ČĘČĘČČÓ8  ćÝËË˙˙˙â
ÎŢĚ˙˙˙ăŮ
ŇËÖ
   ˙Ë˙˙˙îŇ ĘČËŇ88ŃÓ Ë˙˙˙îŇ) 3   PWMGR_BLOCKLIST_NUM_SITES   add'   getAllDisabledHosts   length3   PWMGR_NUM_SAVED_PASSWORDS   countLogins   )   PWMGR_SAVING_ENABLED   _remember   isLoggedIn   getAllLogins-   PWMGR_USERNAME_PRESENT5   PWMGR_LOGIN_LAST_USED_DAYS   Map   value   username   hostname   set   get   QueryInterface   Ci!   nsILoginMetaInfo   timeLastUsed	   Math   floor   MS_PER_DAY	   next	   doneA   PWMGR_NUM_PASSWORDS_PER_HOSTNAME   values   ˙˙˙˙   )   clearAndGetHistogram               1       š                                              histogramId   histogram ś  D  ă             ;    5   ¸   
T  :    QV   ¸   
:  QV   
ÔČĎ    Services   telemetry!   getHistogramById   clear    ˙˙˙˙         login                    hostname    #   timeLastUsedAgeMs        ˙˙˙˙         count         8      ô   ć      ę   ń   ˙˙˙˙     ż            C   ˙˙˙˙   ˙˙˙˙   ?   LoginManager.prototype.addLoginÁ               `      š      ^                          &      @      login   loginsy&  Ż+  +      
         5    @D   Q   5    Ů   >   =   p   5   @   =   p   5   @D   Q   5   Ů   >   =   p   5   D   Q   5   =      !   5   	@   =   
p   6   5   	   !   5   @   =   
p   =   pA¸   
Y      5       5      5   	: W   QV   ¸   
    :    =   p;   â   =   : QA5   ¸   
   : ăĚăŕĚËĘĚË FáĘ FČĐÓŇ    hostname   lengtha   Can't add a login with a null or empty hostname.   usernameO   Can't add a login with a null username.   passworda   Can't add a login with a null or empty password.   formSubmitURL      httpRealmu   Can't add a login with both a httpRealm and formSubmitURL.o   Can't add a login without a httpRealm or formSubmitURL.   findLogins	   some5   This login already exists.   log   Adding login   _storage   addLogin   ˙˙˙˙   C   LoginManager.prototype.addLogin/<á                        š                                              l !+  ;+  I               ¸    
T  C:  Ô    matches   ˙˙˙˙   E   LoginManager.prototype.removeLoginÁ                 (       š                                              login %,  z,  V            ;    â    =   : QA5   ¸   
T  : ÓĐ!    log   Removing login   _storage   removeLogin   ˙˙˙˙   E   LoginManager.prototype.modifyLoginÁ                 +       š                                              oldLogin   newLogin  đ,  `-  a            ;    â    =   : QA5   ¸   
T  T : ÓÓ.    log   Modifying login   _storage   modifyLogin   ˙˙˙˙   G   LoginManager.prototype.getAllLoginsÁ                 (       š                                              count b.  Ć.  p            ;    â    =   : QA5   ¸   
T  : ÓĐ"    log9   Getting a list of all logins   _storage   getAllLogins   ˙˙˙˙   M   LoginManager.prototype.removeAllLoginsÁ                   %       š                                            +/  x/  {            ;    â    =   : QA5   ¸   
:  QÓŃ     log'   Removing all logins   _storage   removeAllLogins   ˙˙˙˙   U   LoginManager.prototype.getAllDisabledHostsÁ                 (       š                                              count 0  	1              ;    â    =   : QA5   ¸   
T  : ÓĐ)    logI   Getting a list of all disabled hosts   _storage'   getAllDisabledHosts   ˙˙˙˙   C   LoginManager.prototype.findLoginsÁ                 D       š                                              count   hostname   formSubmitURL   httpRealm    1  ľ2              ;    â    =   T =   T =   T : QA5   ¸   
T  T T T : ŇĐ Ö /    logG   Searching for logins matching host:   formSubmitURL:   httpRealm:   _storage   findLogins   ˙˙˙˙   G   LoginManager.prototype.searchLoginsÁ                 +       š                                              count   matchData  Ś3  4  Ś            ;    â    =   : QA5   ¸   
T  T : ÓÓ-    log)   Searching for logins   _storage   searchLogins   ˙˙˙˙   E   LoginManager.prototype.countLoginsÁ                 A       š                                              hostname   formSubmitURL   httpRealm   Á4  ­5  ł            ;    â    =   T  =   T =   T : QA5   ¸   
T  T T : ŇĐ ´Ö>    log=   Counting logins matching host:   formSubmitURL:   httpRealm:   _storage   countLogins   ˙˙˙˙   ;   LoginManager.prototype.uiBusyÁ                          š                                            Ô5  ý5  ž            A5    5   Ě    _storage   uiBusy   ˙˙˙˙   C   LoginManager.prototype.isLoggedInÁ                          š                                            ,6  Y6  Ć            A5    5   Ě     _storage   isLoggedIn   ˙˙˙˙   Y   LoginManager.prototype.getLoginSavingEnabledÁ                 >       š                                           	   host î6  7  Đ            ;    â    =   T  =   : QA5       BA5   ¸   
T  : ŰĐ*    log+   Checking if logins to   can be saved.   _remember   _storage+   getLoginSavingEnabled   ˙˙˙˙   Y   LoginManager.prototype.setLoginSavingEnabledÁ                 V       š                                              hostname   enabled  '8  D9  Ţ            T  ¸    
=   : ×˙   =   p;   â   =   T  =   T : QA5   ¸   
T  T : ĎŢÓ7    indexOf    !   Invalid hostname   log!   Login saving for   now enabled?   _storage+   setLoginSavingEnabled   ˙˙˙˙   ]   LoginManager.prototype.autoCompleteSearchAsyncÁ             ×       š      j                                @      aSearchString   aPreviousResult   aElement   aCallback   previousResult	   rect  ˝:  n?  ń      	      A5        ;   â       >: Q;   â   =      : QV   QT    3Y   T 5   ]   T 5   5   ]   W   Q   @W   Q;   ¸   
T :   Q;   	¸   

   V   T V  : ¸   
   : ¸   
@;   5   : QĎ ÷Ř.ÍÜĎČŐ Ę Ę Ë  3    _remember   setTimeout   logM   AutoCompleteSearch invoked. Search is:   searchString   wrappedJSObject   logins   BrowserUtils9   getElementBoundingScreenRect'   LoginManagerContent1   _autoCompleteSearchAsync	   then   Cu   reportError   ˙˙˙˙   a   LoginManager.prototype.autoCompleteSearchAsync/<Á                   #       š                                            Ž;  <  ÷               ¸    
;      Z   R : QŰ˙˙˙ăL %   onSearchCompletion-   UserAutoCompleteResult   ˙˙˙˙   a   LoginManager.prototype.autoCompleteSearchAsync/<Á               +       š                                              logins   results [>  5?  
            ;       T  R    Q   ¸   
V   : QÎČÔ& -   UserAutoCompleteResult%   onSearchCompletion   ˙˙˙˙   S   LoginManager.prototype._getPasswordOriginÁ                    š      L                                     uriString   allowJS   realm   uri	   port   handler  D@  C              =    W   Q;   5   ¸   
T  @@: W  QT E   QV  5   =      =   V  5   =   V  5   W   QV  5   	W  QV  ×˙   N;   5   ¸   

V  5   : W  QV  V  5      V   =   V  W   Q   4  Qv  Q;   â   =   T  : Q@W   QČ    V   Ę  Ă
ÖČŘŢ
ÎÚ
ČÎ
ÎxËĚÖÍ       Services   io   newURI   scheme   javascript   javascript:   ://	   host	   port%   getProtocolHandler   defaultPort   :   log3   Couldn't parse origin for    ˙˙˙˙         e            Ç       Ó   (   ˙˙˙˙   ˙˙˙˙   O   LoginManager.prototype._getActionOriginÁ               ;       š                                           	   form   uriString §C  D  8            T  5    W   QV   =      T  5   W   QA¸   
V   C: ÍĘÍÍ)    action      baseURI%   _getPasswordOrigin   ˙˙˙˙   ?   LoginManager.prototype.fillFormÁ                 N       š                                          	   form E  GF  H            ;    â    =   T  5   =   : Q;   ¸   
T  Y   C]   : ¸   
    : ŕÔ4˙˙˙ÓĘ J    log;   fillForm processing form[ id:   id   ]'   LoginManagerContent!   _asyncFindLogins%   showMasterPassword	   then   ˙˙˙˙   C   LoginManager.prototype.fillForm/<Á               8       š                                              	   form   loginsFound ĚE  AF  K      	      T  5    W   Q5   W  QQ;   ¸   
V   CBBV  : >7D˙˙˙éÚ×H 	   form   loginsFound'   LoginManagerContent   _fillForm