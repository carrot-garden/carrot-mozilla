ç¿s¹                Î  _   ¹   8   ®                         0       0     resource://gre/components/NetworkGeolocationProvider.js     @         	                	   
                                              ;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5      Q;    5      Q;    5      	Q;   5   5   
   
Q=      Q=      Q=      Qn   B1   Qn   X1   Qn   C1   Qn   B1   Qn   @1   Qn   =   1   Q;   Y   ;   ¸   
Z  ;   5   `   : ]   0   Q;   Y   ;   ¸   
Z  ;   5    `   : ]   0   Q;   !Y   ;    ¸   "
=   #: ]   $;   ¸   
Z  ;   5   %`   ;   5   &`  ;   5   '`  ;   5   (`  : ]   @]   )   ]   *   ]   +   ]   ,   	]   -   
]   .   ]   /   ]   0   ]   1   ]   2   ]   3   ]   4   ]   50   QA;   ¸   7
Z  ;   !`   : 0   6Q
 "Ê%	-	  Ê  	  Ó	  ß	  é	ÚAÚ?
ÐÐÐÕËËËÌ Î"ÌÌ%+-  ÌÐ    Ñ  ÙÊÐ(ÎÿÿÿéÎÊÐ)ÎÿÿÿéÎ  ýÊÑÈÐ)Î+Î+Î+Î ÈÊ Ê %Ê WÊÊ uÊÊ Ê Ê ÌÊÊ Ð Ñ5ÉÿÿÿßÉ;    Components   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   Ci   interfaces   Cc   classes   Cu)   POSITION_UNAVAILABLE-   nsIDOMGeoPositionError-   SETTINGS_DEBUG_ENABLED;   geolocation.debugging.enabled-   SETTINGS_CHANGED_TOPIC'   mozsettings-changed+   SETTINGS_WIFI_ENABLED   wifi.enabled   gLoggingEnabled/   gLocationRequestTimeout)   gWifiScanningEnabled)   gCellScanningEnabled   gCachedRequest)   gDebugCacheReasoning   '   WifiGeoCoordsObject   prototype   XPCOMUtils   generateQI/   nsIDOMGeoPositionCoords   QueryInterface+   WifiGeoPositionObject#   nsIDOMGeoPosition/   WifiGeoPositionProvider   IDM   {77DA64D3-7458-4920-9491-86CC9914F904}   classID-   nsIGeolocationProvider   nsIWifiListener!   nsITimerCallback   nsIObserver   listener   observe   resetTimer   startup   watch   shutdown   setHighAccuracy   onChange   onError   getMobileInfo   notify'   sendLocationRequest   notifyListener   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ      LOG                 [       ¹   
                                       	   aMsg <  ÿ  %             ;       U=   T  =   U  Q;   5   ¸   
;   5   : ¸   
T  : Q;   	â   	T  : QÓìÑ    gLoggingEnabled   *** WIFI GEO:    
   Cc;   @mozilla.org/consoleservice;1   getService   Ci#   nsIConsoleService!   logStringMessage	   dump   ÿÿÿÿ      CachedRequest              D      ¹                                          loc   cellInfo   wifiList   makeCellKey   wifis   cells       -                    QAT  0    Q;   R     QT    R>   Q    1m   ¸   
T V   75   : QV   #?W   QQãV   T Ù   ÿÿÿÅÈ;   R     QT    V>   Q    5m   ¸   
   T V   7: : QV   #?W   QQãV   T Ù   ÿÿÿÁÈAA   0   QAA   0   QA   0   QA   0   QA   0   	QA   0   
QA   	0   QA   
0   Q9Ë-Ê0É&1#@2Ý2)Î32Õ9?É&5'DAÚ
ÿÿÿöA)ÎBAÕFÍHÍKÌaÌqÌuÌyÌ}Ì    location   Set   add   macAddress   length   hasCells   hasWifis   isCellEqual#   isWifiApproxEqual   isGeoip   isCellAndWifi   isCellOnly   isWifiOnly   ÿÿÿÿ      makeCellKey                 L       ¹                                          	   cell Q  ñ  9             =    T  5   =   T  5   =   T  5   =   T  5   =   T  5   ãÞÊ       radio   :#   mobileCountryCode#   mobileNetworkCode!   locationAreaCode   cellId    ÿÿÿÿ          i        ÿÿÿÿ          i       ÿÿÿÿ   7   CachedRequest/this.hasCellså                          ¹                                             ª  F                   5    >Ò 	   size   ÿÿÿÿ   7   CachedRequest/this.hasWifiså                          ¹                                           ¿  Ó  H                   5    >Ò 	   size   ÿÿÿÿ   =   CachedRequest/this.isCellEqualÁ              µ       ¹      M                                    cellInfo	   len1	   len2 	  l
  K       	      A¸    
:      B      5      QT  Ù     QV   V     ;   â   =   : QB>  Q    Cm      ¸   
   T  V  7: :     	BÈV  #?W  QQãV  V  ÿÿÿ·ÈCÈPÔÍSÉÓX&C5NX
ßÿÿÿöXÎZXÑ]    hasCells	   size   length   LOG'   cells not equal len   has    ÿÿÿÿ         i        c   N       X   Z   ÿÿÿÿÿÿÿÿ             ÿÿÿÿ   I   CachedRequest/this.isWifiApproxEqualÁ              ¹       ¹      >                                   wifiList   common   kPercentMatch ±
  9  a             A¸    
:      B>   Q>  Q    Hm      ¸   
T  V  75   :    V   #?W   QQV  #?W  QQãV  T  Ù   ÿÿÿ®È<      QV   ;   ¸   
      5   T  Ù   : V  Èg&H:WhÞ
Îh)ÎjhÕmÊçÊ7    hasWifis   has   macAddress   length	   Math   max	   size         à?    ÿÿÿÿ         i        %   W          c   ÿÿÿÿ   ÿÿÿÿ   5   CachedRequest/this.isGeoipÁ                           ¹                                           U    q             A¸    
:   E   QA¸   
:   ÈÊÈ    hasCells   hasWifis   ÿÿÿÿ   A   CachedRequest/this.isCellAndWifiÁ                          ¹                                           °  ç  u             A¸    
:  E   QA¸   
:  ÈÑ    hasCells   hasWifis   ÿÿÿÿ   ;   CachedRequest/this.isCellOnlyÁ                          ¹                                             >  y             A¸    
:  E   QA¸   
:   ÈÉÈ    hasCells   hasWifis   ÿÿÿÿ   ;   CachedRequest/this.isWifiOnlyÁ                          ¹                                           ]    }             A¸    
:  E   QA¸   
:   ÈÉÈ    hasWifis   hasCells       D       8   @      -   L   ÿÿÿÿ      P   ÿÿÿÿ   ÿÿÿÿ   Y   isCachedRequestMoreAccurateThanServerRequest                  ¹      È                        $            newCell   newWifiList%   isHighAccuracyWifi9   isNetworkRequestCacheEnabled   hasEqualCells   hasEqualWifis    >         
      n    =   1    QC  Q;   5   ¸   
=   : W  QV      n   @1   Q     Qv  QÈ    ;    D   QV      n    =   1    QBT   E   
QT     n    =   1    QCT  E   3QT E   *Q;   ¸   	
:  D   Q;   ¸   

:     n    =   1    QBT  E   Q;   ¸   

:     <;   5   5   5   XW   Qn    =   V   1    QV   B  QT     ;   ¸   
T  : W  QB  QT    ;   ¸   
T : W  Qn    =   V  =   V  1    Q;   ¸   	
:     ,n    Ã    =   1    QV     C   ©;   ¸   

:  E   
QV     #n    Ã    =   1    QC   m;   ¸   
:     Yn    Ã    =   1    QV  E   
QV  D   (QT  E   
QV  D   QT   E   
QV     CBÐ5ÖÈÑÓÌÐÊÐÞ!ÕÐÕÝÕÏÈÏÈàÌ'ÐxÌÍÐxÌÐxÔ	Ô	Î )   gDebugCacheReasoning      Services   prefs   getBoolPrefG   geo.wifi.debug.requestCache.enabled   gCachedRequest   No cached data%   New req. is GeoIP.   isCellOnly   isWifiOnly_   New req. is cell+wifi, cache only cell or wifi.   location   coords   accuracyI   Req. is cell, cache is wifi, isHigh:   isCellEqual#   isWifiApproxEqual   EqualCells:    EqualWifis:   , Cell only.   , Wifi only.   isCellAndWifi-   , Cache has Cell+Wifi.    ÿÿÿÿ         e            9       Q      ÿÿÿÿ   ÿÿÿÿ   '   WifiGeoCoordsObject                 3       ¹                                              lat   lon   acc   alt   altacc     \  û  Ó             AT  0    QAT 0   QAT 0   QAT 0   QAT 0   QÊÊÊÊÊ    latitude   longitude   accuracy   altitude!   altitudeAccuracy   ÿÿÿÿ   +   WifiGeoPositionObject                 :       ¹                                             lat   lng   acc       ß             A;   T  T T >>R 0    QA@0   QA;   ¸   
:  0   QÒÉÈÍÉ    coords'   WifiGeoCoordsObject   address   timestamp	   Date   now   ÿÿÿÿ   /   WifiGeoPositionProvider                        ¹      C                                      é             n    ;   5   ¸   
=   : 1    Q      Qv   QÈ    n   ;   5   ¸   
=   : 1   Q      Qv   QÈ    n   ;   5   ¸   
=   	: 1   Q      Qv   QÈ    n   
;   5   ¸   
=   : 1   
Q      Qv   QÈ    A@0   QA@0   QAB0   Q%ÛÎÓ%ÛÎÓ%ÛÎÓ%ÛÎÓÈÈÈ    gLoggingEnabled   Services   prefs   getBoolPref1   geo.wifi.logging.enabled/   gLocationRequestTimeout   getIntPrefA   geo.wifi.timeToWaitBeforeSending)   gWifiScanningEnabled   geo.wifi.scan)   gCellScanningEnabled   geo.cell.scan   wifiService   timer   started    ÿÿÿÿ          e        ÿÿÿÿ          e        ÿÿÿÿ          e        ÿÿÿÿ          e         ¸   )        {   )        >   )           )       +      ÿÿÿÿ   h      ÿÿÿÿ   ¥      ÿÿÿÿ   â      ÿÿÿÿ   ÿÿÿÿ   S   WifiGeoPositionProvider.prototype.observeÁ                       ¹      )                                    aSubject   aTopic   aData   )  Ú              T ;       =   T  q   T  5   U  QT  5   ;      n   T  5   1   Q   +T  5   ;      n   T  5   1   Q      Qv   QÈ    ÉlÉÌÎØÎØÓ -   SETTINGS_CHANGED_TOPIC   wrappedJSObject   key-   SETTINGS_DEBUG_ENABLED   gLoggingEnabled   value+   SETTINGS_WIFI_ENABLED)   gWifiScanningEnabled    ÿÿÿÿ          e            p             ÿÿÿÿ   ÿÿÿÿ   Y   WifiGeoPositionProvider.prototype.resetTimerÁ                   l       ¹   
   &                                     ó  !              A5       A5    ¸   
:  QA@0    QA;   5   ¸   
;   5   : 0    QA5    ¸   
A;   A5    5   	: QÑÈÜÉÎË  A    timer   cancel   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer!   initWithCallback/   gLocationRequestTimeout)   TYPE_REPEATING_SLACK   ÿÿÿÿ   S   WifiGeoPositionProvider.prototype.startupÁ                d      ¹      ^                         *          	   self!   settingsCallback   settingsService¬!  v(  %      
      A5       AC0    QA   QY       ]      ]      Q;   5   ¸   
A;   B: Q;   5     QV     m  QV  ¸   	
;   
5   :   QV  ¸   
:  ¸   
;   V   : QV  ¸   
:  ¸   
;   V   : QÈ;   E   Q;   5      YA5      A5   ¸   
A: QA;   5   ¸   	
;   
5   : 0   QA5   ¸   
A: QA¸   
:  Q;   â   =   : QÈÊ =Ï CÜÏË
ÕÈâãÕÒÜÉÒÌÓ    started   handle   handleError   Services   obs   addObserver-   SETTINGS_CHANGED_TOPIC   Cc=   @mozilla.org/settingsService;1   getService   Ci%   nsISettingsService   createLock   get+   SETTINGS_WIFI_ENABLED-   SETTINGS_DEBUG_ENABLED)   gWifiScanningEnabled7   @mozilla.org/wifi/monitor;1   wifiService   stopWatching   nsIWifiMonitor   startWatching   resetTimer   LOG   startup called.   ÿÿÿÿ      WifiGeoPositionProvider.prototype.startup/settingsCallback.handleÁ                 Þ       ¹      +                                    	   name   result  7"  ÿ$  ,            T  ;    E   Q;       n   T 1   Q   µT  ;      §n   T 1   Q      5      )      5   ¸   
      : Q;      W      ;   5   ¸   
;   	5   
: 0   Q      5   ¸   
      : QÏ.
ÓÉ
ÎÏäåÉä% -   SETTINGS_DEBUG_ENABLED   gLoggingEnabled+   SETTINGS_WIFI_ENABLED)   gWifiScanningEnabled   wifiService   stopWatching   Cc7   @mozilla.org/wifi/monitor;1   getService   Ci   nsIWifiMonitor   startWatching   ÿÿÿÿ      WifiGeoPositionProvider.prototype.startup/settingsCallback.handleErrorÁ                         ¹                                             message %  %  =            n    B1    Q;   â   =   : QÌÓ6    gLoggingEnabled   LOG]   settings callback threw an exception, dropping    ÿÿÿÿ         settings       o   g   ÿÿÿÿ   ÿÿÿÿ   O   WifiGeoPositionProvider.prototype.watchÁ                        ¹                                              c (  ª(  W            AT  0    QÊ    listener   ÿÿÿÿ   U   WifiGeoPositionProvider.prototype.shutdownÁ                   £       ¹      ;                                     Á(  +  [            ;    â    =   : QA5   B   n   @1   QA5      A5   ¸   
:  QA@0   QA5      A5   ¸   
A: QA@0   Q;   5   	¸   

A;   : QA@0   QAB0   QÓÈ cÌÑÈÒÈÛÈÈ    LOG   shutdown called   started   gCachedRequest   timer   cancel   wifiService   stopWatching   Services   obs   removeObserver-   SETTINGS_CHANGED_TOPIC   listener   ÿÿÿÿ   c   WifiGeoPositionProvider.prototype.setHighAccuracyÁ                        ¹                                               enable %+  3+  u             %    ÿÿÿÿ   U   WifiGeoPositionProvider.prototype.onChangeÁ             {       ¹      @                          
            accessPoints   isPublic	   sort   encode   wifiData J+  ë-  x      	          W   Q   W  Q   W  QA¸    
:  Q@  QT     7T  ¸   
V   : ¸   
V  : ¸   
V  : W  QA¸   
V  : Q }Ê ÊÊ xÌ ÎäÐ#    resetTimer   filter	   sort   map'   sendLocationRequest   ÿÿÿÿ      isPublic               u       ¹                                 	            ap	   mask   result ¸+  ,  }      
      =       QT  5   ¸   
V   T  5   Ù   V   Ù   :   QV  ×ÿ   ,;   â   =   T  5   =   V  : QV  
Ê
ê	Èç    _nomap	   ssid   indexOf   length   LOG   Filtering out        ÿÿÿÿ   	   sort                        ¹                                             a   b  ©,  Ù,              T 5    T  5    Ò    signal   ÿÿÿÿ      encode                 !       ¹                                             ap ï,  ?-              Y   T  5    ]   T  5   ]   	ÍÎ    mac   macAddress   signal   signalStrength   ÿÿÿÿ   S   WifiGeoPositionProvider.prototype.onErrorÁ                 %       ¹                                          	   code .  R.              ;    â    =   T  : QA¸   
@: Q×Í    LOG   wifi error: '   sendLocationRequest   ÿÿÿÿ   _   WifiGeoPositionProvider.prototype.getMobileInfoÁ     
             £      ¹   %   ñ                                   n.  É4              ;    â    =   : Q  Q  Q   Q;   5   ¸   
;   5   :    Q;   5   ¸   
;   5   :   QZ     Q>  Q   ìm  Q  Q  Q  Q  Q;    â    =   	V  =   
V  5   : QV  ¸   
V  :   QV  E   QV  5     QV  E   QV  5     QV  E   QV  5     QV  E   QV  5     QV  E   QV  E   
QV      	Q  	QV  x=   y   Z=   y   P=   y   F=   y   K=   y   A=   y   7=   y   -=   y   #=   y   (z   2=   W  	Q   #=   W  	Q   =   W  	Q   V  ¸   
Y   V  	]   V  5   5   ]   V  5   5   ]    V  5   !]   "V  5   #]   $: QÈÈV  #?W  QQãV  V  5   ÿÿþ	ÈV  ÈÈ      Qv   Q@ÈÈ    Ó sÓ
ÑÊ È
ÑÊ È
É& ì Þ ü"ßèÏÈØØØØØËl  u
u
u
u
u
u
u
u
uÊ ®ÊXÊXÊX
ÐÉÓÓÎÎ ¿
 £,Î ¤ £Ö ÆÍÌË    LOG)   getMobileInfo called   Cc%   @mozilla.org/ril;1   getService   Ci-   nsIRadioInterfaceLayero   @mozilla.org/mobileconnection/mobileconnectionservice;15   nsIMobileConnectionService1   Looking for SIM in slot:	    of    numItems%   getItemByServiceId   voice	   cell	   type   network   gsm	   gprs	   edge	   umts   hsdpa   hsupa	   hspa   hspa+   lte   wcdma	   push   radio   mcc#   mobileCountryCode   mnc#   mobileNetworkCode'   gsmLocationAreaCode!   locationAreaCode   gsmCellId   cellId    ÿÿÿÿ          radioService       service       result                     i                    connection       voice    	   cell    	   type       network              	      radioTechFamily        ÿÿÿÿ          e            w         ü         o  ÿÿÿÿ   v               Ó        ]  ü      ÿÿÿÿ                 ÿÿÿÿÿÿÿÿ           ÿÿÿÿ   Q   WifiGeoPositionProvider.prototype.notifyÁ                        ¹                                             timer ß4  5  Ì            A¸    
@: QÍ '   sendLocationRequest   ÿÿÿÿ   k   WifiGeoPositionProvider.prototype.sendLocationRequestÁ            ¸      ¹   3   Þ                        I            wifiData   requestData	   data   useCached   url   xhr 35  û>  Ð            Y   ;    ]   ;    ]      QT  E   QT  Ù   ×      T  0   Q;      E  QA¸   
:    QV  E   QV  Ù   >      V  0   QÈ;   â      5      5   :   Q;   â   =   V  =   	;   
: QV     I;   5   ;   ¸   
:  0   QA¸   
=   Z  ;   5   `   : Q;   5   ¸   
=   :   Q;   â   =   : Q;   5   5   ¸   
;   5   :    QA¸   
=   : Q   ¸   
=   V  C: Q   :  Qv  QA¸   
=    Z  ;   !`   : QÈÈ       ¸   "
=   #=   $: Q   =   &0   %Q   C0   'Q   5   (;   5   *5   +0   )Q      ¸   -
A: 0   ,Q      ¸   -
A: 0   .Q;   /¸   0
   : W   Q;   â   =   1V   : Q   ¸   2
V   : Q	ÊÐÔÎË
ÈÈÕÐÔÊ ÝÈäÖ$ÉÑÎÿÿÿáÖÈÓÖÊ ìÉÑßÌÍÉ ôËÚÐÌßÑ üÉÑ   É ÑÈØÔ    undefined   cellTowers!   wifiAccessPoints   length)   gCellScanningEnabled   getMobileInfoY   isCachedRequestMoreAccurateThanServerRequest   LOG%   Use request cache:    reason:)   gDebugCacheReasoning   gCachedRequest   location   timestamp	   Date   now   notifyListener   update   Services   urlFormatter   formatURLPref   geo.wifi.uri   Sending request   Components   classesO   @mozilla.org/xmlextras/xmlhttprequest;1   createInstance   Ci#   nsIXMLHttpRequest+   locationUpdatePending	   open	   POST   notifyError)   POSITION_UNAVAILABLE!   setRequestHeader   Content-Type?   application/json; charset=UTF-8   responseType	   json)   mozBackgroundRequest   channel   loadFlags   nsIChannel   LOAD_ANONYMOUS   onerror	   bind   onload	   JSON   stringify   sending 	   send    ÿÿÿÿ         cellData        ÿÿÿÿ         e       ÿÿÿÿ      WifiGeoPositionProvider.prototype.sendLocationRequest/xhr.onerror<Á                          ¹                                           ;  |;  ü            A¸    
=   Z  ;   `   : QÍÉ ý2    notifyListener   notifyError)   POSITION_UNAVAILABLE   ÿÿÿÿ      WifiGeoPositionProvider.prototype.sendLocationRequest/xhr.onload<Á                 y      ¹      S                           ,             newLocation¤;  >         
      ;    â    =         5   =   ;   ¸   
      5   : : Q      5   ;   5   	rE   Q      5   X ÈD   1Q      5    D   Q      5   5   
    %A¸   
=   Z  ;   `   : Q;         5   5   
5         5   5   
5         5   5   R    QA¸   
=   Z  V   `   : Qn   ;   V         5         5   R 1   Qÿ9ÿÿÿÇù
ÖÕÍÉ 
ßÙÔ 	ÈÑÈÿÿÿáíÉG    LOG1   server returned status:    status    --> 	   JSON   stringify   response   channel   Ci   nsIHttpChannel   location   notifyListener   notifyError)   POSITION_UNAVAILABLE+   WifiGeoPositionObject   lat   lng   accuracy   update   gCachedRequest   CachedRequest   cellTowers!   wifiAccessPoints              Q   ?   ÿÿÿÿ   ³  .   ÿÿÿÿÿÿÿÿß           ÿÿÿÿ   a   WifiGeoPositionProvider.prototype.notifyListenerÁ                ]       ¹                                          listenerFunc	   args  ?  Á?              T D   
QZ   U QA5    T  7¸   
A5    T O Q   ,   Qv   Q;   ¸   
V   : QÈ    ÑãÌÛ    listener   apply   Cu   reportError    ÿÿÿÿ          e            #       6       ÿÿÿÿ