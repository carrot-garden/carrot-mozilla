çżsš                Ĺ  (   š   #   Ë                          #            resource://gre/modules/DownloadLastDir.jsm     ű                                         =       Q;    =      Q;   5   5      QAf    6   Q;   5   ¸   	
=   
: Q;   5   ¸   	
=   : Q;   5   ¸   	
=   : Qn   Y      ]      ]   o   Qn   ;   5   5   ¸   
;   5   5   : o   Q;   ¸   
;   =   C: Q;   ¸   
;   =   C: Qn   ;   â   :  o   QA   6   Q;   Y      ]      a      b      	]      
]      ]       ]   !   ]   "6   Q%BĘG	P	YËŃŐĚ.!ÚAÚ?ÚK%ĘĘ-Đ%BŰĎB	É˙˙˙ýDŰ9Ű@GNPWYĎÉ˙˙˙ý[ĚfhĘĘmĘĘĘtĘ  Ę  Ę  ­Đ  Ă    LAST_DIR_PREF1   browser.download.lastDir%   SAVE_PER_SITE_PREF   .savePerSite   nsIFile   Components   interfaces!   EXPORTED_SYMBOLS   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm_   resource://gre/modules/PrivateBrowsingUtils.jsm   observer   QueryInterface   observe   os   classes?   @mozilla.org/observer-service;1   getService%   nsIObserverService   addObserver-   last-pb-context-exited;   browser:purge-session-history)   gDownloadLastDirFile   readLastDirPref   DownloadLastDir   prototype   isPrivate	   file%   cleanupPrivateFile   getFile   _getLastFile   getFileAsync   setFile                     DownloadLastDir                  ˙˙˙˙   /   observer.QueryInterfaceÁ                 x       š                                           	   aIID 	    &             T  ¸    
;   5   5   : D   DQT  ¸    
;   5   5   : D   "QT  ¸    
;   5   5   :    A;   5   5   pŮÉŮÉŮĐ(    equals   Components   interfaces   nsIObserver   nsISupports1   nsISupportsWeakReference   results   NS_NOINTERFACE   ˙˙˙˙   !   observer.observeÁ                ę       š      O                                      aSubject   aTopic   aData   $  :  -             T    Qx=    y   =   y   z   Ęn   @o   Q   šn   @o   Q;   5   ¸   
;   :    ;   5   ¸   
;   : Q;   5   	5   
¸   
;   5   5   :    QV   ¸   
;   Y   B]   : QV   ¸   
;   Y   C]   : Q   ČÉh  ßu
2uĘ/ĚXĚÖ
Ú8ÖĎ8Č;Ő"˙˙˙ŢŐ"˙˙˙ŢX -   last-pb-context-exited;   browser:purge-session-history)   gDownloadLastDirFile   Services   prefs!   prefHasUserValue   LAST_DIR_PREF   clearUserPref   Components   classesG   @mozilla.org/content-pref/service;1   getService   interfaces-   nsIContentPrefService2   removeByName%   usePrivateBrowsing    ˙˙˙˙       	   cps2           ĺ   ˙˙˙˙   ˙˙˙˙      readLastDirPref                  =       š                                         \  Ô  G             ;    5   ¸   
;   ;   :       Qv   Q@ČČ     ŰÉKĚË    Services   prefs   getComplexValue   LAST_DIR_PREF   nsIFile    ˙˙˙˙          e            $       &      ˙˙˙˙˙˙˙˙4             ˙˙˙˙   )   isContentPrefEnabled                  8       š                                         ó  c  P             ;    5   ¸   
;   :       Qv   QCČČ    ÖÉTĚË    Services   prefs   getBoolPref%   SAVE_PER_SITE_PREF    ˙˙˙˙          e                   !      ˙˙˙˙˙˙˙˙/             ˙˙˙˙      DownloadLastDir                      š      /                                        aWindow   loadContext Ă  F  [       
      T  ¸    
;   5   5   : ¸   
;   5   5   : ¸    
;   5   5   :    QAY   ;   ¸   	
Z  ;   5   5   `   : ]    V   5   
]   
6   QŮĘĎ\Ę^Ď\ČbĐ'Ó˙˙˙éČÔ    QueryInterface   Components   interfaces+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsILoadContext   fakeContext   XPCOMUtils   generateQI%   usePrivateBrowsing   ˙˙˙˙   3   DownloadLastDir_isPrivate                          š                                              Í  i             A5    5   Ě+    fakeContext%   usePrivateBrowsing   ˙˙˙˙   =   DownloadLastDir.prototype.fileá                          š                                            ë    m             A¸    
:  Ě    _getLastFile   ˙˙˙˙   =   DownloadLastDir.prototype.fileÁ                        š                                              val   /  n             A¸    
@T  : QĐ    setFile   ˙˙˙˙   Y   DownloadLastDir.prototype.cleanupPrivateFileÁ                          š                                             P  y  o             n    @o    QĚ )   gDownloadLastDirFile   ˙˙˙˙   C   DownloadLastDir.prototype.getFileÁ            ö       š      A                                   	   aURI   lastDirFile   Deprecated "  K  t             ;    5   ¸   
=   Y   : 5     QV  ¸   
=   =   ;    5   5   	: QT  E   Q;   
â   
:       Q;   5   ¸   
T  ;   A5   :   QV     L;    5   5   ¸   
;    5   5   : W   QV   ¸   
V  : QV   ČČA¸   
:  ŰÍĐĎvzÓË
ß
ČÖĎ}ČÓČČ    Components   utils   importK   resource://gre/modules/Deprecated.jsm   Deprecated   warning   DownloadLastDir.getFile is deprecated. Please use getFileAsync instead.š   https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/DownloadLastDir.jsm   stack   caller)   isContentPrefEnabled   Services   contentPrefs   getPref   LAST_DIR_PREF   fakeContext   classes3   @mozilla.org/file/local;1   createInstance   interfaces   nsIFile   initWithPath   _getLastFile    ˙˙˙˙         lastDir        l   }   ˙˙˙˙˙˙˙˙ç             ˙˙˙˙   M   DownloadLastDir.prototype._getLastFileÁ                   t       š      *                                      g                 ;    E   Q;    ¸   
:      n    @o    QA¸   
:     .;        n    ;   â   :  o    Q;    ;   â   :  Ë ĚĚČ
ĎÉĘ )   gDownloadLastDirFile   exists   isPrivate   readLastDirPref   ˙˙˙˙   M   DownloadLastDir.prototype.getFileAsyncÁ               ü       š      X                                @   	   aURI   aCallback   plainPrefFile   uri	   cps2   result ¤           
      A¸    
:     QT   D   Q;   â   :      :;   5   5   ¸   
    ;   5   5   5   	: QT  ;   5   5   
r   T  5      T     Q;   5   5   ¸   
;   5   5   :   Q@   QV  ¸   
V   ;   A5   Y      ]      ]   : QČÉĘ	ĘŰÔ  ÓÚÖĎ  ČßĘĘ    Ş    _getLastFile)   isContentPrefEnabled   Services   tm   mainThread   dispatch   Components   interfaces   nsIThread   DISPATCH_NORMAL   nsIURI	   spec   classesG   @mozilla.org/content-pref/service;1   getService-   nsIContentPrefService2%   getByDomainAndName   LAST_DIR_PREF   fakeContext   handleResult!   handleCompletion   ˙˙˙˙   Q   DownloadLastDir.prototype.getFileAsync/<á                          š                                             ?  Z                     : 1Ď    ˙˙˙˙   k   DownloadLastDir.prototype.getFileAsync/<.handleResultá                        š                                                aResult ,  F               T        &Î    ˙˙˙˙   s   DownloadLastDir.prototype.getFileAsync/<.handleCompletionÁ               Ś       š      $                                        aReason	   file h                           QT  ;    5   5   5   E    Q      ;    5   5   r   P;    5   5   ¸   
;    5   5   : W   QV   ¸   	
      5   
: Q   V   : QĎŢÚ
ÖĎ  ¤Č
ŢÎ    Components   interfaces/   nsIContentPrefCallback2   COMPLETE_OK   nsIContentPref   classes3   @mozilla.org/file/local;1   createInstance   nsIFile   initWithPath   value   ˙˙˙˙   C   DownloadLastDir.prototype.setFileÁ                ą      š      U                         4          	   aURI   aFile  3  ÷  ­             T  E   Q;    â    :     Í  Q   QT  ;   5   5   r   T  5      T     Q;   5   5   ¸   
;   5   5   :   QT ;   5   5   	r   0V  ¸   

V   ;   T 5   A5   : Q   #V  ¸   
V   ;   A5   : QČA¸   
:     KT ;   5   5   	r   "n   T ¸   
:  o   Q   n   @o   Q   |T ;   5   5   	r   ,;   5   ¸   
;   ;   	T : Q   =;   5   ¸   
;   :    ;   5   ¸   
;   : QÓŃ
ÓÚ
ÖĎ  °ČÓ+ëßČFÓĎÎŃÓ'çÖÚ, )   isContentPrefEnabled   Components   interfaces   nsIURI	   spec   classesG   @mozilla.org/content-pref/service;1   getService-   nsIContentPrefService2   nsIFile   set   LAST_DIR_PREF	   path   fakeContext+   removeByDomainAndName   isPrivate)   gDownloadLastDirFile   clone   Services   prefs   setComplexValue!   prefHasUserValue   clearUserPref    ˙˙˙˙          uri    	   cps2           Ć   ˙˙˙˙