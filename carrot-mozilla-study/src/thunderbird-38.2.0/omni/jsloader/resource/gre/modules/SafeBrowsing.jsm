çżsš                  7   š   (   ç       	                               resource://gre/modules/SafeBrowsing.jsm     ý                                
                  Af    6    Q;   5      Q;   5      Q;   5      Q;   ¸   
=   	: Q;   â   =   :    
Q;   â   =   :    Q;   â   =   :    Q;   â   =   :    Q;   â   =   :    Qn   Bo   QAY      ]   B]   B]   B]   @]   @]   @]   @]   @]   @]    @]   !@]   "   ]   #   ]   $   ]   %   ]   &   ]   '6   QĘ	!Ę	Ě)ĐĐĐŐ1ĎÉ˙˙˙ýĎÉ˙˙˙ýĎÉ˙˙˙ýĎÉ˙˙˙ýĎÉ˙˙˙ý!Ě*,.ĘUY\dĘiĘ{Ę  Ę  ÇĐ  ë !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cu   utils   importG   resource://gre/modules/Services.jsm   phishingLists   getLists1   urlclassifier.phishTable   malwareLists5   urlclassifier.malwareTable%   downloadBlockListsA   urlclassifier.downloadBlockTable%   downloadAllowListsA   urlclassifier.downloadAllowTable/   trackingProtectionLists7   urlclassifier.trackingTable   debug   SafeBrowsing	   init   initialized   phishingEnabled   malwareEnabled   updateURL   gethashURL   reportURL!   reportGenericURL   reportErrorURL   reportPhishURL!   reportMalwareURL+   reportMalwareErrorURL   getReportURL   readPrefs%   updateProviderURLs+   controlUpdateChecking   addMozEntries                     SafeBrowsing                  ˙˙˙˙      getLists               ^       š      (                          
             prefName	   pref ü  >               ;    5   ¸   
T  :    QV       
Z   V   ¸   
=   : ¸   
    : ¸   
   : ÔČĐĘ	Ę	3    Services   prefs   getCharPref   split   ,   filter   map   ˙˙˙˙      getLists/<Á                        š                                              value ×                 T  ¸    
=   : ×˙Ď    indexOf   test-   ˙˙˙˙      getLists/<Á                        š                                              value   :               T  ¸    
:  Ę 	   trim   ˙˙˙˙      log                  š      #                                         stuff   d   msg ç  Ž  "             ŕU  Q;        ;   R  W   Q=   V   ¸   
:  =   T  ¸   
=   :   Q;   5   ¸   	
V  : Q;   
â   
V  =   : Q&ČĐŮÉŮŘ    debug	   Date   SafeBrowsing:    toTimeString   : 	   join       Services   console!   logStringMessage	   dump   
   ˙˙˙˙   -   this.SafeBrowsing.initÁ                      š      Ý                        G              listManager×    .       
      A5       ;   â   =   : Q;   5   ¸   
=   A5   ¸   
A: B: Q;   5   ¸   
=   	A5   ¸   
A: B: QA¸   
:  Q;   
5   ¸   
;   5   :    Q>  Q    7mV   ¸   
;   V  7A5   A5   : QV  #?W  QăV  ;   Ů   ˙˙˙˝Č>  Q    7mV   ¸   
;   V  7A5   A5   : QV  #?W  QăV  ;   Ů   ˙˙˙˝Č>  Q    7mV   ¸   
;   V  7A5   A5   : QV  #?W  QăV  ;   Ů   ˙˙˙˝Č>  Q    7mV   ¸   
;   V  7A5   A5   : QV  #?W  QăV  ;   Ů   ˙˙˙˝Č>  Q    7mV   ¸   
;   V  7A5   A5   : QV  #?W  QăV  ;   Ů   ˙˙˙˝ČA¸   
:  QA¸   
:  QAC6    Q;   â   =   : QÓ4ä3˙˙˙Íä9˙˙˙ÇĚ9ŃĘ9Č;&7+H;ĺ;.Ě<;×>&7+H>ĺ>-Ě?>×A&7+HAĺA3ĚBA×D&7+HDĺD3ĚED×G&7+HGŐHG8ĚJG×LĚNĚČQÓ    initialized   log'   Already initialized   Services   prefs   addObserver)   browser.safebrowsing   readPrefs	   bind5   privacy.trackingprotection   CcS   @mozilla.org/url-classifier/listmanager;1   getService   Ci#   nsIUrlListManager   registerTable   phishingLists   updateURL   gethashURL   length   malwareLists%   downloadBlockLists%   downloadAllowLists/   trackingProtectionLists#   trackingUpdateURL%   trackingGethashURL   addMozEntries+   controlUpdateChecking   init() finished    ˙˙˙˙         i        ˙˙˙˙         i        ˙˙˙˙         i        ˙˙˙˙         i        ˙˙˙˙         i          H       ˛  H       ]  H         H       ł   H       ¨   T   ˙˙˙˙   ý   T   ˙˙˙˙   R  T   ˙˙˙˙   §  T   ˙˙˙˙   ü  T   ˙˙˙˙   ˙˙˙˙   =   this.SafeBrowsing.getReportURLÁ                        š                                           	   kind č    d             A=    T  =   7Ň&    report   URL   ˙˙˙˙   7   this.SafeBrowsing.readPrefsÁ                   ť       š      /                                      8    i             ;    â    =   : Qn   ;   5   ¸   
=   : o   QA;   5   ¸   
=   : 6   QA;   5   ¸   
=   
: 6   	QA;   5   ¸   
=   : 6   QA¸   
:  QA5      A¸   
:  QÓlŰÉ×É×É×ÉĚuĚ    log   reading prefs   debug   Services   prefs   getBoolPref5   browser.safebrowsing.debug   phishingEnabled9   browser.safebrowsing.enabled   malwareEnabledI   browser.safebrowsing.malware.enabled   trackingEnabledE   privacy.trackingprotection.enabled%   updateProviderURLs   initialized+   controlUpdateChecking   ˙˙˙˙   I   this.SafeBrowsing.updateProviderURLsÁ                    š                              7              clientID   basePref/  ű  {       	      ;    5   ¸   
=   : W   Q   ,  Qv  Q;    5   5   W   QČ    ;   â   =   V   : Q=     QA;    5   
¸   
V  =   	: 6   	QA;    5   
¸   
V  =   : 6   QA;    5   
¸   
V  =   : 6   QA;    5   
¸   
V  =   : 6   QA;    5   
¸   
V  =   : 6   QA;    5   
¸   
V  =   : 6   QA;    5   
¸   
V  =   : 6   QA;    5   
¸   
V  =   : 6   QAA5   ¸   
=   V   : 6   QAA5   ¸   
=   V   : 6   QA;    5   
¸   
=   : 6   QA;    5   
¸   
=   : 6   Q
ÖÍĚ
Ű×ĘÜÉÜÉÜÉÜÉÜÉÜÉÜÉÜÉ×É×ÉŇ  ÉŇ  É/    Services   prefs   getCharPref/   browser.safebrowsing.id   appinfo	   name   logW   initializing safe browsing URLs, client id +   browser.safebrowsing.   reportURL   urlFormatter   formatURLPref!   reportGenericURL   reportErrorURL   reportPhishURL!   reportMalwareURL+   reportMalwareErrorURL   updateURL   gethashURL   replace   SAFEBROWSING_ID#   trackingUpdateURLI   browser.trackingprotection.updateURL%   trackingGethashURLK   browser.trackingprotection.gethashURL    ˙˙˙˙         e            #       %       ˙˙˙˙   ˙˙˙˙   O   this.SafeBrowsing.controlUpdateCheckingÁ                      š      *                       D              listManager  é               ;    â    =   A5   =   A5   =   A5   : Q;   5   ¸   	
;   
5   :    Q>  Q    TmA5      #V   ¸   
;   V  7: Q   V   ¸   
;   V  7: QV  #?W  QăV  ;   Ů   ˙˙˙ Č>  Q    TmA5      #V   ¸   
;   V  7: Q   V   ¸   
;   V  7: QV  #?W  QăV  ;   Ů   ˙˙˙ Č>  Q    TmA5      #V   ¸   
;   V  7: Q   V   ¸   
;   V  7: QV  #?W  QăV  ;   Ů   ˙˙˙ Č>  Q    TmA5      #V   ¸   
;   V  7: Q   V   ¸   
;   V  7: QV  #?W  QăV  ;   Ů   ˙˙˙ Č>  Q    TmA5      #V   ¸   
;   V  7: Q   V   ¸   
;   V  7: QV  #?W  QăV  ;   Ů   ˙˙˙ ČV   ¸   
:  QÚŃ  ŃĘ  Č&THe   ŢŮ   .Ě  ¤   ×  §&THe  §ŢŮ  §-Ě  Ť  §×  Ž&THe  ŽŢŮ  Ž3Ě  ˛  Ž×  ľ&THe  ľŢŮ  ľ3Ě  š  ľ×  ź&THe  źŢŮ  ź8Ě  Ŕ  ź×  ĂĎ(    log!   phishingEnabled:   phishingEnabled   malwareEnabled:   malwareEnabled!   trackingEnabled:   trackingEnabled   CcS   @mozilla.org/url-classifier/listmanager;1   getService   Ci#   nsIUrlListManager   enableUpdate   phishingLists   disableUpdate   length   malwareLists%   downloadBlockLists%   downloadAllowLists/   trackingProtectionLists3   maybeToggleUpdateChecking    ˙˙˙˙         i        ˙˙˙˙         i        ˙˙˙˙         i        ˙˙˙˙         i        ˙˙˙˙         i        &  e       ´  e       B  e       Đ   e       ^   e       S   q   ˙˙˙˙   Ĺ   q   ˙˙˙˙   7  q   ˙˙˙˙   Š  q   ˙˙˙˙     q   ˙˙˙˙   ˙˙˙˙   ?   this.SafeBrowsing.addMozEntriesÁ                [      š      g                                      phishURL   malwareURL   update   db   dummyListener  ř   Ç             =       Q=     Q=   V  Ů   =   V    QV  =   V   Ů   =   V   W  Q;   â   =   V  : Q;   5   	¸   

;   5   :   QY       ]      ]      ]      ]     QV  ¸   
V  =   =   : QV  ¸   
=   =   : QV  ¸   
V  : QV  ¸   
:  QV  ¸   
:  Q   /  Qv  Q;   â   =   V  : QČ    
Ę
ĘĐĘÉĐ}×ŃĘ  ŐČĘĘĘĎhÝŮÓĎÔĚŢ K   itisatrap.org/firefox/its-a-trap.htmlQ   itisatrap.org/firefox/its-an-attack.htmlS   n:1000
i:test-malware-simple
ad:1
a:1:32:   length   
O   n:1000
i:test-phish-simple
ad:1
a:1:32:   log   addMozEntries:   CcO   @mozilla.org/url-classifier/dbservice;1   getService   Ci3   nsIUrlClassifierDBService%   updateUrlRequested   streamFinished   updateError   updateSuccess   beginUpdateK   test-malware-simple,test-phish-simple      beginStream   updateStream   finishStream   finishUpdate+   addMozEntries failed!   ˙˙˙˙      this.SafeBrowsing.addMozEntries/dummyListener.updateUrlRequestedÁ                          š                                              ö  ü  Ú              &    ˙˙˙˙   y   this.SafeBrowsing.addMozEntries/dummyListener.streamFinishedÁ                          š                                                 &  Ű              &    ˙˙˙˙   s   this.SafeBrowsing.addMozEntries/dummyListener.updateErrorÁ                          š                                              J  P  Ü              &    ˙˙˙˙   w   this.SafeBrowsing.addMozEntries/dummyListener.updateSuccessÁ                          š                                              t  z  Ý              &     ˙˙˙˙         ex         Ä   l      1  #   ˙˙˙˙