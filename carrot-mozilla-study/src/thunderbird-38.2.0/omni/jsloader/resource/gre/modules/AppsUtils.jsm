çżsš                o     š   S   ,      9                          0     resource://gre/modules/AppsUtils.jsm     fr                                   ;   5       Q;   5      Q;   5      Q;   5      Q;    ¸   	
=   
: Q;    ¸   	
=   : Q;    ¸   	
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   =   : QAf    0   QA   0   QA   0   Q;   Y      ]      ]      ]   0   QAY      ]   !   	]   "   
]   #   ]   $   ]   %   ]   &   ]   '   ]   (   ]   )   ]   *   ]   +   ]   ,   ]   -   ]   .   ]   /   ]   0B]   1   ]   2   ]   3   ]   4   ]   5   ]   6   ]   7   ]   8   ]   9    ]   :   !]   ;0    QA   "0   <Q;   <Y      #]   =   $a   >   %a   ?   &a   @   'a   A   (a   B   )a   C   *a   D   +a   E   ,a   F   -a   G   .a   H   /a   I   0a   J   1a   K   2]   L   3]   M   4]   N   5]   O   6]   P   7a   Q   8a   R0   QĘ#	M	ĐĐĐĐŐ1Ő3Ő0Ň*Ň.Ň(Ň5 ËF#%'Ě,.Ě02ĘĘAĘEĐKMrtvĘ}Ę  Ę  ĘĘ  ŮĘ  ŢĘ  éĘ  ôĘ  Ę Ę 'Ę 3Ę <Ę ]Ę Ę ÔĘ â ěĘ Ę #Ę 5Ę HĘ bĘ Ę ÔĘ ěĘĐ ř ýĚ ĘĘ %ĘĘĘĘĘĘ ?ĘĘĘĘĘĘĘ ^Ę qĘ Ę Ę Ę ˘Ę §ĘĐ    Cu   Components   utils   Cc   classes   Ci   interfaces   Cr   results   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsmE   resource://gre/modules/Promise.jsm   XPCOMUtils-   defineLazyModuleGetter   FileUtilsI   resource://gre/modules/FileUtils.jsm   WebappOSUtilsQ   resource://gre/modules/WebappOSUtils.jsm   NetUtilE   resource://gre/modules/NetUtil.jsm/   defineLazyServiceGetter   appsService5   @mozilla.org/AppsService;1   nsIAppsService!   EXPORTED_SYMBOLS   isAbsoluteURI   mozIApplication   prototype   hasPermission   hasWidgetPage   QueryInterface   AppsUtils   cloneAppObject#   createLoadContext   getFile'   getAppByManifestURL   getManifestFor5   getAppLocalIdByManifestURL-   getAppLocalIdByStoreId/   getManifestCSPByLocalId-   getDefaultCSPByLocalId   getAppByLocalId/   getManifestURLByLocalId'   getCoreAppsBasePath   getAppInfo!   sanitizeManifest   checkManifest1   checkManifestContentType'   allowUnsignedAddons   checkAppRole#   ensureSameAppName'   checkInstallAllowed)   getAppManifestStatus   isFirstRun!   compareManifests   loadJSONAsync   computeHash#   computeObjectHash7   getAppManifestURLFromWindow   ManifestHelper   _localeProp	   name   description	   type   version   launch_path   developer   icons   appcache_path   orientation   package_path   widgetPages	   size   permissions   biggestIconURL   iconURLForSize   fullLaunchPath   resolveURL!   fullAppcachePath   fullPackagePath	   role   csp                     AppsUtils      ManifestHelper      isAbsoluteURI      mozIApplication                  ˙˙˙˙      debug                        š                                               s   Ď  #                  ˙˙˙˙   %   this.isAbsoluteURIÁ                      š                                          	   aURI   foo   bar î  ř  '             ;    5   ¸   
=   @@:    Q;    5   ¸   
=   @@:   Q;    5   ¸   
T  @V   : 5   V   5   D   1Q;    5   ¸   
T  @V  : 5   V  5   ŘČŘČŮŘŮ	Ó;    Services   io   newURI   http://foo   http://bar   prePath   ˙˙˙˙   )   this.mozIApplicationÁ                        š                                          	   aApp   D  .             ;    â    AT  : QŇ #   _setAppProperties   ˙˙˙˙   O   mozIApplication.prototype.hasPermissionÁ                      š      0                                       aPermission   uri   secMan   principal	   perm }  ]	  3             ;    5   ¸   
A5   @@:    Q;   5   ¸   
;   5   :   QV  ¸   	
V   A5   
B:   Q;    5   ¸   
V  T  :   QV  ;   5   5   HŮČŃĘ5Č:Ő:Č<Ő<Č>Ő7    Services   io   newURI   origin   CcI   @mozilla.org/scriptsecuritymanager;1   getService   Ci1   nsIScriptSecurityManager/   getAppCodebasePrincipal   localId   permsA   testExactPermissionFromPrincipal)   nsIPermissionManager   ALLOW_ACTION   ˙˙˙˙   O   mozIApplication.prototype.hasWidgetPageÁ                        š      	                                       aPageURL y	  ž	  A             A5    ¸   
T  : ×˙Đ)    widgetPages   indexOf   ˙˙˙˙   Q   mozIApplication.prototype.QueryInterfaceÁ                 G       š                                 
         	   aIID Ű	  n
  E             T  ¸    
;   5   : D   QT  ¸    
;   5   :    A;   5   pÔÉÔË    equals   Ci   mozIApplication   nsISupports   Cr+   NS_ERROR_NO_INTERFACE   ˙˙˙˙   #   _setAppProperties                 ő      š   ,   ˘                           /         	   aObj	   aApp  
  ˘  M       	      T  T 5    0    QT  T 5   0   QT  T 5   0   QT  T 5   0   QT  T 5      0;   ¸   
;   ¸   
T 5   : :    @0   QT  T 5   0   QT  T 5   	0   	QT  T 5   
0   
QT  T 5   0   QT  T 5   0   QT  T 5   0   QT  T 5   0   QT  T 5   D   Q>0   QT  T 5   D   Q=   0   QT  T 5   0   QT  T 5   0   QT  T 5   0   QT  T 5   D   Q>0   QT  T 5   0   QT  T 5   0   QT  T 5   0   QT  T 5   0   QT  T 5   0   QT  T 5   0   QT  T 5   0   QT  T 5   D   Q;   5   5    0   QT  T 5   !  0   !QT  T 5   "D   Q=   #0   "QT  T 5   $D   Q>0   $QT  T 5   %D   Q=   #0   %QT  T 5   &0   &QT  T 5   'D   
QZ   0   'QT  T 5   (0   (QT  T 5   );   *I   T 5   )   C0   )QT  T 5   +0   +QŃŃŃŃSË+ĺ+˙˙˙őĎŃŃŃŃŃŃŃŘÜŃŃŃŘŃŃŃŃŃŃŃćĐÜŘÜŃŰŃŃŮŃ" 	   name   csp   installOrigin   origin   receipts	   JSON   parse   stringify   installTime   manifestURL   appStatus   removable   id   localId   basePath   progress   installState   installed#   downloadAvailable   downloading)   readyToApplyDownload   downloadSize   lastUpdateCheck   updateTime	   etag   packageEtag   manifestHash   packageHash   staged   installerAppId   Ci1   nsIScriptSecurityManager   NO_APP_ID%   installerIsBrowser   storeId      storeVersion	   role   redirects   widgetPages	   kind   enabled   undefined   sideloaded   ˙˙˙˙   ;   this.AppsUtils.cloneAppObjectÁ               %       š                                          	   aApp   obj ú  J  v             Y      Q;    â    V   T  : QV   ĘŐ #   _setAppProperties   ˙˙˙˙   #   createLoadContext                        š      D                          	            aAppId   aIsBrowser  Č  j  }             Y   @]    @]   T  ]   T ]   B]   B]       ]   ;   ¸   
Z  ;   	5   
`   ;   	5   `  ;   	5   `  : ]      ]   ČČĘĐ'Î.Î.Î  ČË   !   associatedWindow   topWindow   appId%   isInBrowserElement%   usePrivateBrowsing   isContent   isAppOfType   XPCOMUtils   generateQI   Ci   nsILoadContext+   nsIInterfaceRequestor   nsISupports   QueryInterface   getInterface   ˙˙˙˙   ?   createLoadContext/<.isAppOfTypeÁ                        š                                             appType š  ů               ;    5   p	Ë"    Cr1   NS_ERROR_NOT_IMPLEMENTED   ˙˙˙˙   A   createLoadContext/<.getInterfaceÁ                 *       š                                             iid â  _               T  ¸    
;   5   :    A;   5   pÔ	Ë    equals   Ci   nsILoadContext   Cr+   NS_ERROR_NO_INTERFACE   ˙˙˙˙   -   this.AppsUtils.getFileÁ               N      š                                *      D      aRequestChannel   aId   aFileName   deferred	   file   outputStream)   bufferedOutputStream   listener  ŕ  @         	      ;    ¸   
:     Q;   ¸   
=   Z  =   `   T `  T `  C:    Q;   5   ¸   
;   	5   
:    Q   ¸   
   ××× ;   â   =   ×: >: Q;   5   ¸   
;   	5   :    Q   ¸   
   X : Q;   5   ¸   
;   	5   :    QV   ¸   
   Y       ]      ]   : Q   ¸   
V   @: Q   5   ĚÉŐ"ÉČ˙˙˙ŐÉŃĘ  Éę,˙˙˙ÔŃĘ  ŁÉŘŃĘ  ¨ČŐĘĘ  Ť  ĹŐË    Promise   defer   FileUtils   getFile	   TmpD   webapps   CcS   @mozilla.org/network/file-output-stream;1   createInstance   Ci'   nsIFileOutputStream	   init   parseInt	   0664[   @mozilla.org/network/buffered-output-stream;1/   nsIBufferedOutputStream[   @mozilla.org/network/simple-stream-listener;1/   nsISimpleStreamListener   onStartRequest   onStopRequest   asyncOpen   promise   ˙˙˙˙   O   this.AppsUtils.getFile/<.onStartRequestÁ                        š                                               aRequest   aContext  Ń    Ź              4    ˙˙˙˙   M   this.AppsUtils.getFile/<.onStopRequestÁ               ä       š   	   G                                       aRequest   aContext   aStatusCode   responseStatus   7  ç  °                   ¸    
:  Q      ¸    
:  Q;   ¸   
T :     1      ¸   
Y   =   ]   C]   : Q   5      QV   XE   QV   XW   1      ¸   
Y   =   ]   B]   : Q      ¸   
      : QŐŐĎ
ÖĘ˙˙˙Ř
  ťĎÖ
ÖĘ˙˙˙Ř
ß    close   Components   isSuccessCode   reject   NETWORK_ERROR   msg#   downloadAvailable   responseStatus   resolve   ˙˙˙˙   '   getAppByManifestURL                x       š      #                                    aApps   aManifestURL  v    Ę             ;    â    =   T : QT  K   Q   EmW     QT  V   7  QV  5   T    ;   V  R Č NČČăQLM˙˙˙ťQNČ@×Ě0JĐ
ÍÍĘŮ    debug)   getAppByManifestURL    manifestURL   mozIApplication    ˙˙˙˙          id                     app       (   K          W   ˙˙˙˙   .   :           a         ˙˙˙˙f            ˙˙˙˙      getManifestFor                 1       š                                             aManifestURL 9  Ŕ  Ů             ;    â    =   T  =   : Q;   ¸   
T  : ÝĎ4    debug   getManifestFor(   )-   DOMApplicationRegistry   getManifestFor   ˙˙˙˙   5   getAppLocalIdByManifestURL                u       š                              	            aApps   aManifestURL    
   Ţ             ;    â    =   T : QT  K   Q   4mW   T  V   75   T    T  V   75    NČăQLM˙˙˙ĚQNČ;   5   5   ×Ě09ĘŃáĐ-    debug7   getAppLocalIdByManifestURL    manifestURL   localId   Ci1   nsIScriptSecurityManager   NO_APP_ID    ˙˙˙˙          id       (   :          F   ˙˙˙˙˙˙˙˙V             ˙˙˙˙   K   this.AppsUtils.getAppLocalIdByStoreIdÁ                u       š                              	            aApps   aStoreId  /   !!  é             ;    â    =   T : QT  K   Q   4mW   T  V   75   T    T  V   75    NČăQLM˙˙˙ĚQNČ;   5   5   ×Ě09ĘŃáĐ-    debug/   getAppLocalIdByStoreId:   storeId   localId   Ci1   nsIScriptSecurityManager   NO_APP_ID    ˙˙˙˙          id       (   :          F   ˙˙˙˙˙˙˙˙V             ˙˙˙˙   /   getManifestCSPByLocalId                       š                                          aApps   aLocalId  _!  D"  ô             ;    â    =   T : QT  K   Q   LmW     QT  V   7  QV  5   T    !V  5   D   Q=   Č NČČăQLM˙˙˙´QNČ=   ×Ě0QĐ
ÍÍę
    debug1   getManifestCSPByLocalId    localId   csp       ˙˙˙˙          id                     app       (   R          ^   ˙˙˙˙   .   A           h         ˙˙˙˙m            ˙˙˙˙   K   this.AppsUtils.getDefaultCSPByLocalIdÁ                [      š      h                 	                   aApps   aLocalId  i"  #&         
      ;    â    =   T : QT  K   Q  $mW     QT  V   7  QV  5   T    ůV  5   x;   5   5   y   2;   5   5   y   D;   5   5   y   Vz   ;   	5   
¸   
=   : Č NČ   o;   	5   
¸   
=   : Č NČ   IV  5   =      #;   	5   
¸   
=   :    
=   Č NČ        Qv  QČ    ČăQLM˙˙ţÜQNČ=   ×Ě0 )Đ
ÍÍ  ÜÉh  ŇĎpĎpĎpĘ ÖËXÖËXĎÖČÍXĘá/    debug/   getDefaultCSPByLocalId    localId   appStatus   Ci   nsIPrincipal)   APP_STATUS_CERTIFIED+   APP_STATUS_PRIVILEGED)   APP_STATUS_INSTALLED   Services   prefs   getCharPrefG   security.apps.certified.CSP.defaultI   security.apps.privileged.CSP.default	   kind   hosted-trustedC   security.apps.trusted.CSP.default   K   default-src 'self'; object-src 'none'    ˙˙˙˙          id                     app                    e       (   *      S   ŕ          6  ˙˙˙˙   .             š         ˙˙˙˙ž             ß         ˙˙˙˙ä             #        ˙˙˙˙(           4           ˙˙˙˙      getAppByLocalId                x       š                                           aApps   aLocalId  Q&  7'              ;    â    =   T : QT  K   Q   EmW     QT  V   7  QV  5   T    ;   V  R Č NČČăQLM˙˙˙ťQNČ@×Ě0JĐ
ÍÍĘŮ    debug!   getAppByLocalId    localId   mozIApplication    ˙˙˙˙          id                     app       (   K          W   ˙˙˙˙   .   :           a         ˙˙˙˙f            ˙˙˙˙   /   getManifestURLByLocalId                x       š                                          aApps   aLocalId  u'  X(  '            ;    â    =   T : QT  K   Q   AmW     QT  V   7  QV  5   T    V  5   Č NČČăQLM˙˙˙żQNČ=   ×Ě0FĐ
ÍÍß
    debug1   getManifestURLByLocalId    localId   manifestURL       ˙˙˙˙          id                     app       (   G          S   ˙˙˙˙   .   6           ]         ˙˙˙˙b            ˙˙˙˙   '   getCoreAppsBasePath                  Q       š                                        (  5)  3            ;    â    =   : Q;   ¸   
=   f    B: 5         Qv   Q@ČČ    Ó!×ÎĚË    debug+   getCoreAppsBasePath()   FileUtils   getDir   coreAppsDir	   path                     webapps                   ˙˙˙˙          e            %      :      ˙˙˙˙˙˙˙˙H             ˙˙˙˙      getAppInfo               ń       š      J                                       aApps   aAppId   app   isCoreApp   prefName  Y)   -  <      	      T  T 7   QV       ;    â    =   T : Q@B  Q;    â    V   5   =   V  : Q=     Q;   5   ¸   
V  : E   Q;   5   ¸   
V  :    2Y   V   5   =   	V   5   
]   V  ]   Y   ;   ¸   
V   : ]   V  ]   Ě× GâĘŐÉŐ	ŢĘ	ĐČĘ    debug   No webapp for    basePath    isCoreApp: A   dom.mozApps.auto_confirm_install   Services   prefs!   prefHasUserValue   getBoolPref   /   id	   path   isCoreApp   WebappOSUtils   getPackagePath   ˙˙˙˙   ?   this.AppsUtils.sanitizeManifestÁ                    š      G                                    aManifest   sanitize%   sanitizeEntryPoint   sanitizer ă-  p2  ]      
             Q   W   Q;    5   ¸   
;   5   :    Q       V   T  : QT  5      CT  5   K  Q    mW  V   T  5   V  7: QăQLM˙˙˙ŕQNČ dË iĘ ]ŃĘ ^É i ĚČŃ0%Ęă2    Cc5   @mozilla.org/parserutils;1   getService   Ci   nsIParserUtils   entry_points   ˙˙˙˙      sanitize                 )       š                                          	   aStr .  /  d                  ¸    
T  ;   5   5   >: ÔĐ e3 %   convertToPlainText   Ci%   nsIDocumentEncoder   OutputRaw   ˙˙˙˙   %   sanitizeEntryPoint                       š      7                                    aRoot //  l1  i      
      T     T  5    : 0    QT  5      T     T  5   : 0   QT  5   E   QT  5   5       )T  5      T  5   5    : 0    QT  5      rT  5   K   Q   OmW   T  5   V   75      3T  5   V   7   T  5   V   75   : 0   QăQLM˙˙˙ąQNČŃÉČŃÉŰŰÉČŃ0TĘŇÍŘÖ4 	   name   description   developer   permissions    ˙˙˙˙          permission       ¨   U          a   ˙˙˙˙    ˙˙˙˙         entry       u   &      k   2   ˙˙˙˙   ˙˙˙˙   9   this.AppsUtils.checkManifestÁ            Ą      š      É                        5            aManifest   app1   checkAbsoluteEntryPoints   messages  3  Ĺ:                  W   QT  5    ;      BA¸   
T  : QT  5   E   Q;   â   T  5   :    BV   T  5   :    BT  5   K  Q   1mW  V   T  5   V  75   :    B NČăQLM˙˙˙ĎQNČT  5      yT  5   K  Q   VmW    QT  5   V  7  QV  5   E   Q;   â   V  5   :    BČ NČČăQLM˙˙˙ŞQNČT  5   	  QV     Ń;   
¸   
V  :     BT  5   	- Á
:    Q   }m5   W  QV  '=      a  Q;   ¸   
V  :   QV  Ů   ?   BČČ ;   â   V  V  >77:    BČČ ČăQ¸   
:  5   ˙˙˙tČ T  5      QT  ;   â   T  5   : 0   Q;   ¸   
T  5   : D   QT  5   >   BT  5   E   QT  5   Ĺ=   I   BC Ę ÎĎŕ! ÍŃ06Ę×
ŐČŃ0[ĐŇâ
× łÍ
Đ×8  ŃËËĐČËČŐÉ ¸Ë˙˙˙ďŇ ĆČŐÉÔ
Ó ÎÎĎ 	   name   undefined!   sanitizeManifest   launch_path   isAbsoluteURI   entry_points   locales   activities	   href   messages   Array   isArray   value   object   Object	   keys   length	   next	   done	   size   parseInt   Number   isNaN	   role   string   ˙˙˙˙   1   checkAbsoluteEntryPoints                `       š                                          entryPoints ^4  35        	      T  K   Q   DmW   T  V   75    E    Q;   â   T  V   75    :    C NČăQLM˙˙˙źQNČBĚ0IĘę-
Ő    launch_path   isAbsoluteURI    ˙˙˙˙       	   name          J          V   ˙˙˙˙˙˙˙˙O              ˙˙˙˙         localeName        ˙˙˙˙         activityName                    activity        ˙˙˙˙      	   item                 	   keys               á   \         7      {   C   ˙˙˙˙˙˙˙˙°             ×   h   ˙˙˙˙   ç   K         +        ˙˙˙˙0                ˙˙˙˙   Š  [         Ů        ˙˙˙˙Ú           ţ        ˙˙˙˙˙     
      ˙˙˙˙   1   checkManifestContentType                      š      )                                       aInstallOrigin   aWebappOrigin   aContentType   hadCharset   charset   netutil   contentType   
;  á<  Ő      
      Y      QY     Q;    5   ¸   
;   5   :   QV  ¸   
T V  V   :   QT  T E   !QV  =   D   QV  =       BCĘĘŰ
ČÖČÍĐË    Cc7   @mozilla.org/network/util;1   getService   Ci   nsINetUtil!   parseContentTypeG   application/x-web-app-manifest+json3   application/manifest+json   ˙˙˙˙   7   this.AppsUtils.checkAppRoleÁ                í       š      4                                    aRole   aStatus  V>  ¸@  ě            T  =    E   QT ;   5   5   I   BT  =   E   QT ;   5   5   I   P   QB   Q;   5   ¸   
=   	: W   Q     Qv  QČ    V   ČČA5   
 E   AQT  =   E   2QT ;   5   5   IE   QT ;   5   5   I   BCââË
ÖÍÓČÍĎŮÓ    theme   Ci   nsIPrincipal)   APP_STATUS_CERTIFIED   langpack+   APP_STATUS_PRIVILEGED   Services   prefs   getBoolPrefC   dom.apps.allow_unsigned_langpacks'   allowUnsignedAddons   addon    ˙˙˙˙          allow                     e         ]   #       Q   J   ˙˙˙˙             ˙˙˙˙             ˙˙˙˙   #   ensureSameAppName                      š      C                                    aOldManifest   aNewManifest	   aApp   wA  ˘D              T T 5    0    Q=   T q   ć   Q;   T  T 5   T 5   R 5       QT 5   K  Q   mW    Q  QT 5   V  7  QV  5        Č   ^V     QT  E   "Q=   T  qE   QV  T  5   q   T  5   V  75    W  QV  V  0    QČăQLM˙˙˙jQNČČŃÉË
ŮÍŃ0  ÖŇĘAÉŘÍ
×Ý 	$ 	   name   locales   ManifestHelper   origin   manifestURL    ˙˙˙˙          defaultName                     locale                    entry       localizedName       a              ŕ   ˙˙˙˙   W   ¨          h                        ˙˙˙˙   '   checkInstallAllowed               2       š      "                                D      aManifest   aInstallOrigin)   cbCheckAllowedOrigin E   F  #                W   QT  5        CT  5    ¸   
V   :  (Ę #ÉÓ; +   installs_allowed_from	   some   ˙˙˙˙   )   cbCheckAllowedOrigin                        š                                             aOrigin 	F  TF  (            T  =    D   QT     Ů3    *   ˙˙˙˙   )   getAppManifestStatus                      š      7                                       aManifest	   type {G  I  5            T  5    D   Q=      QV   x=   y   (=   y   =   y   $=   y   *z   5;   5   5   ;   5   5   ;   5   5   	;   
=   R pŘlmu
u
u
uĘ 9ĐĐĐË 	   type   web   trusted   privileged   certified   Ci   nsIPrincipal)   APP_STATUS_INSTALLED+   APP_STATUS_PRIVILEGED)   APP_STATUS_CERTIFIED   ErrorW   Webapps.jsm: Undetermined app manifest type   ˙˙˙˙      isFirstRun              Ü       š      :                                    aPrefBranch   savedmstone   mstone   savedBuildID   buildID uI  K  H      
      @   QT  ¸    
=   : W   Q     Qv  QČ    ;   5   5     Q@  QT  ¸    
=   : W  Q     Qv  QČ    ;   5   5     QT  ¸   
=   V  : QT  ¸   
=   V  : QV  V   D   QV  V  ĎÍÓÔĎÍÓÔ××Ů>    getCharPref   gecko.mstone   Services   appinfo   platformVersion   gecko.buildID   platformBuildID   setCharPref    ˙˙˙˙         e        ˙˙˙˙         e         Q                     $      ˙˙˙˙   n      ˙˙˙˙   ˙˙˙˙   !   compareManifests              U      š      k                                    aManifest1   aManifest2   locales1   locales2   checkNameAndDev  |L  ĺQ  b            Z      QZ     QT  5       @T  5    K  Q   mW  V   ¸   
V  : QăQLM˙˙˙ăQNČT 5       @T 5    K  Q   mW  V  ¸   
V  : QăQLM˙˙˙ăQNČV   ¸   
:  ¸   
:  V  ¸   
:  ¸   
:  I   B     QV  T  T :     BT  5    K  Q   :mW  V  T  5    V  7T 5    V  7:     B NČăQLM˙˙˙ĆQNČCÉÉČŃ0"ĘŕČŃ0"ĘŕËŘÎ vĘ ËŃ0?Ę
ŇÍ Ő     locales	   push	   sort	   join    ˙˙˙˙         locale        ˙˙˙˙         locale       ˙˙˙˙   A   compareManifests/checkNameAndDevÁ               ł       š      3                                       aRoot1   aRoot2   name1   name2	   dev1	   dev2  ŐN  ^P  v      	      T  5       QT 5      QV   V  I   BT  5     QT 5     QV  E   QV   D   QV  E   QV      BV   E   QV   D   2QV  5    V  5    HE   QV  5   V  5   H
Í
ÍÉ
Í
ÍĘŐË	Ëí@ 	   name   developer   url    ˙˙˙˙         locale         @      }   #      5   #       +   /   ˙˙˙˙   s   /   ˙˙˙˙     L   ˙˙˙˙˙˙˙˙D           ˙˙˙˙   9   this.AppsUtils.loadJSONAsyncÁ               ;      š      a                        &      D      aPath   deferredmR  [              ;    ¸   
:     Q  Q   Q;   5   ¸   
;   5   :    QV   ¸   
   : Q;   ¸   	
V   @@@;   
5   ¸   
:  @;   5   5   ;   5   5   :   QV  =   0   Q;   ¸   
V     : QČ   _   Qv   Q;   ¸   
=      =   V   =   V   5   : Q   ¸   
@: QČ       5   ĚÉ  ťÍ
ŰČÔ
ĐŃ(ĎĎ  Č ¨Ďß ĘĚŃá ËŘË    Promise   defer   Cc3   @mozilla.org/file/local;1   createInstance   Ci   nsIFile   initWithPath   NetUtil   newChannel2   Services+   scriptSecurityManager%   getSystemPrincipal   nsILoadInfo   SEC_NORMAL!   nsIContentPolicy   TYPE_OTHER   contentType!   application/json   asyncFetch2   Cu   reportError?   AppsUtils: Could not read from     :    
   stack   resolve   promise    ˙˙˙˙       	   file       channel              =   this.AppsUtils.loadJSONAsync/<Á                i      š      |                        )            aStream   aResult  qU  EZ  Ş            ;    ¸   
T :     H   ¸   
@: QT ;   5      ;   ¸   
=      : Q  Q   Q;   5   	¸   

;   5   :    QV   =   0   Q;   ¸   
V   ¸   
;   ¸   
T  T  ¸   
:  : D   Q=   : :   QT  ¸   
:  Q   ¸   
V  : QČ   _   Qv   Q;   ¸   
=      =   V   =   V   5   : Q   ¸   
@: QČ    Ď
ŃÎ
Ű
  ŽÍŃĘ şČ
ĎćĘ< ż;É ż ˙˙˙őČ
Î
ÚĚ
Ńá Ĺ

Ř	    Components   isSuccessCode   resolve   Cr/   NS_ERROR_FILE_NOT_FOUND   Cu   reportErrorS   AppsUtils: Could not read from json file    CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   charset   UTF-8	   JSON   parse!   ConvertToUnicode   NetUtil/   readInputStreamToString   available      closeC   AppsUtils: Could not parse JSON:        
   stack    ˙˙˙˙          converter    	   data        ˙˙˙˙          ex         \   ˛       ^   Ť   ˙˙˙˙     S   ˙˙˙˙    ˙˙˙˙          ex            ż          ¸   ˙˙˙˙   Ö   S   ˙˙˙˙   ˙˙˙˙   5   this.AppsUtils.computeHashÁ            .      š      m                                    aString   toHexString   converter   result	   data   hasher	   hash V[  ^  Ô                W   Q;    5   ¸   
;   5   :   QV  =   0   QY     QV  ¸   
T  V  :   Q;    5   ¸   
;   5   	:   QV  ¸   

V  5   : QV  ¸   
V  V  Ů   : QV  ¸   
B:   QY     Q  QV  K   -mW  V   V  ¸   
  V  : : ,  ÎăQLM˙˙˙ÓQNČ¸   
=   :  ăĘ ÔŃĘ ŐČĎĘŇČŃĘ ÜČŘÜĚČ čË-Í02â˙˙˙ç˙˙˙ôá˙˙˙˙;    CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   charset   UTF-8%   convertToByteArray9   @mozilla.org/security/hash;1   nsICryptoHash	   init   MD5   update   length   finish   charCodeAt	   join      ˙˙˙˙      toHexString                 #       š                                             charCode ś]  ţ]  ă            =    T  ¸   
×: ¸   
×ţ: ŃÍ˙˙˙ú'    0   toString   slice    ˙˙˙˙         i       č   3      Ń   L   ˙˙˙˙   ˙˙˙˙   A   this.AppsUtils.computeObjectHashÁ                        š                                             aObject Ć^  _  ě            A¸    
;   ¸   
T  : : ×˙˙˙ď*    computeHash	   JSON   stringify   ˙˙˙˙   U   this.AppsUtils.getAppManifestURLFromWindowÁ               G       š                                 	            aWindow   appId 5_  `  đ            T  5    5   5      QV   ;   5   5   H   @;   ¸   
V   : ×ÔĐ+    document   nodePrincipal   appId   Ci1   nsIScriptSecurityManager   NO_APP_ID   appsService/   getManifestURLByLocalId   ˙˙˙˙   '   this.ManifestHelperÁ              ¤      š                               .            aManifest   aOrigin   aManifestURL   chrome   locale   u`  Oe  ý            T  D   
QT     ;    â    =   : pA;   5   ¸   
T ¸   
=   :    T    T @@: 0   QA;   5   ¸   
T @@: 0   QAT  0   	Q;   
5   ¸   
;   5   : ¸   
;   5   :    QV   ¸   
=   : ¸   
:    QAA5   	0   QA5   	5   E   QA5   	5   V  7   !AA5   	5   V  70   Q   qA5   	5      a  QV  ¸   
=   : >7  QV  V  E   QA5   	5   V  7   AA5   	5   V  70   QČĘĎŇĎŇ É 
×ÉĘŃĘ ĘĘ ČĐ	ŇÍáÜËËĐĘßŘ $    Errora   ManifestHelper needs both origin and manifestURL   _baseURI   Services   io   newURI   startsWith   app://   _manifestURL   _manifest   CcK   @mozilla.org/chrome/chrome-registry;1   getService   Ci)   nsIXULChromeRegistry   QueryInterface1   nsIToolkitChromeRegistry#   getSelectedLocale   global   toLowerCase   _localeRoot   locales   split   -    ˙˙˙˙      	   lang        H  [   ˙˙˙˙   ˙˙˙˙   I   ManifestHelper.prototype._localePropÁ                 ,       š                                             aProp e  	f              A5    T  7;      A5    T  7A5   T  7ĐËË    _localeRoot   undefined   _manifest   ˙˙˙˙   ;   ManifestHelper.prototype.nameÁ                          š      	                                     f  Cf  %            A¸    
=   : Í    _localeProp	   name   ˙˙˙˙   I   ManifestHelper.prototype.descriptionÁ                          š      	                                     Wf  f  )            A¸    
=   : Í     _localeProp   description   ˙˙˙˙   ;   ManifestHelper.prototype.typeÁ                          š      	                                     f  Ĺf  -            A¸    
=   : Í    _localeProp	   type   ˙˙˙˙   A   ManifestHelper.prototype.versionÁ                          š      	                                     Őf  g  1            A¸    
=   : Í    _localeProp   version   ˙˙˙˙   I   ManifestHelper.prototype.launch_pathÁ                          š      	                                     g  Mg  5            A¸    
=   : Í     _localeProp   launch_path   ˙˙˙˙   E   ManifestHelper.prototype.developerÁ                          š                                           _g  ˙g  9            A¸    
=   : D   QY   ÍĎ$    _localeProp   developer   ˙˙˙˙   =   ManifestHelper.prototype.iconsÁ                          š      	                                     h  ;h  ?            A¸    
=   : Í    _localeProp   icons   ˙˙˙˙   M   ManifestHelper.prototype.appcache_pathÁ                          š      	                                     Qh  h  C            A¸    
=   : Í"    _localeProp   appcache_path   ˙˙˙˙   I   ManifestHelper.prototype.orientationÁ                          š      	                                     h  Ďh  G            A¸    
=   : Í     _localeProp   orientation   ˙˙˙˙   K   ManifestHelper.prototype.package_pathÁ                          š      	                                     äh  i  K            A¸    
=   : Í!    _localeProp   package_path   ˙˙˙˙   I   ManifestHelper.prototype.widgetPagesÁ                          š      	                                     -i  ai  O            A¸    
=   : Í     _localeProp   widgetPages   ˙˙˙˙   ;   ManifestHelper.prototype.sizeÁ                          š                                           ni  i  S            A5    5   D   Q>Ó#    _manifest	   size   ˙˙˙˙   I   ManifestHelper.prototype.permissionsÁ                   #       š                                           ˛i  j  W            A5    5      A5    5   Y   ËĚ
    _manifest   permissions   ˙˙˙˙   O   ManifestHelper.prototype.biggestIconURLÁ                         š   	   <                                       icons   iconSizes   biggestIconSize   biggestIcon   biggestIconURL5j  Îk  ^      
      A¸    
=   :    QV       @;   ¸   
V   :   QV  Ů   >   @V  ¸   
A    : QV  ¸   
:    QV   V  7  QA5   ¸   
V  :   QV  ÍČĐČËŐËČÎŃČ    _localeProp   icons   Object	   keys   length	   sort   pop   _baseURI   resolve   ˙˙˙˙   S   ManifestHelper.prototype.biggestIconURL/<ĺ                 	       š                                               a   b  k  k  i            T  T Č    ˙˙˙˙   O   ManifestHelper.prototype.iconURLForSizeÁ              Ň       š      @                                    aSize   icons	   dist	   icon ëk  Xm  q            A¸    
=   :    QV       @ź   Q@  QV   K  Q   mW    Q;   â   V  :   Q;   ¸   
V  T  : V     ?A5   ¸   
V   V  7: W  Q;   ¸   
V  T  : W  QČăQLM˙˙˙~QNČV  ÍČÉÍ0  Đ
ÎČÔ
ČÖČÔÖ    _localeProp   icons   parseInt	   Math   abs   _baseURI   resolve    ˙˙˙˙      	   size                     iSize       B          8      ˙˙˙˙   H   w          ˙˙˙˙   O   ManifestHelper.prototype.fullLaunchPathÁ                      š      5                                       aStartPoint   entryPoints um  o              T  D   Q=    =    H   1A5   ¸   
A¸   
=   : D   Q=   : A¸   
=   :    QV       @V   T  7   .A5   ¸   
V   T  75   D   Q=   : @ÔÚÎ˙˙˙ęÍČČĺ       _baseURI   resolve   _localeProp   launch_path   /   entry_points   ˙˙˙˙   G   ManifestHelper.prototype.resolveURLÁ                 9       š                                          	   aURI ˇo  ¤p              ;    â    T  :    ;   =   R pA5   ¸   
T  : ÍËĐ    isAbsoluteURI   Error_   Webapps.jsm: non-relative URI passed to resolve   _baseURI   resolve   ˙˙˙˙   S   ManifestHelper.prototype.fullAppcachePathÁ                 >       š                                              appcachePathĂp  Jq              A¸    
=   :    QA5   ¸   
V      V      
=   : ÍČŃ	Ó9    _localeProp   appcache_path   _baseURI   resolve   /   ˙˙˙˙   Q   ManifestHelper.prototype.fullPackagePathÁ                 >       š                                              packagePathhq  ďq  ˘            A¸    
=   :    QA5   ¸   
V      V      
=   : ÍČŃ	Ó;    _localeProp   package_path   _manifestURL   resolve   /   ˙˙˙˙   ;   ManifestHelper.prototype.roleÁ                          š                                           üq  *r  §            A5    5   D   Q=   ×!    _manifest	   role      ˙˙˙˙   9   ManifestHelper.prototype.cspÁ                          š                                           6r  cr  Ť            A5    5   D   Q=   ×     _manifest   csp   