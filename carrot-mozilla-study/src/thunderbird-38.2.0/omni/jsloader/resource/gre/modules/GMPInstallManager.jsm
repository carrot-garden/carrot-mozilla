ç¿s¹                £  P   ¹   I         $                   >       0     resource://gre/modules/GMPInstallManager.jsm     q         	                                     !                  #AZ   0    Q;   5      Q5      Q5   	   Q5   
   Q5      QQ¼à   Q>   Q¼Q   Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : QAf    0    Qn   @1   Q;   ¸   
A=      : Q;   ¸   
A=   =    : QXN    !Q;   ¸   
A=   "   : Q;   ¸   
A=   #   : Q;   $Y      ]   &   ]   '   ]   (   	]   )   
a   *   ]   +   ]   ,   ]   -;   .¸   /
   : ]   0   ]   1B]   2   ]   3   ]   4   ]   5   ]   60   %Q;   7   0   8Q;   7Y      ]   9   a   :   a   ;   a   <0   %Q;   =Y      ]   >   ]   ?0   %Q;   @   0   AQ;   @Y      ]   B    ]   C   !]   D   "]   E;   ¸   F
Z  ;   5   G`   : ]   H0   %Q	 4Ê6	j	 ò	 =	 	 C	Ë	ÿÊÊÕ3Õ1Õ2Õ0Õ4Õ,Õ/Õ-Õ/Õ1Ì% Ì#Û')Ò)N4É!6:?ÛV[ÛejoÊsÊ  Ê  ÔÊ  ÜÊ  èÊÊÊÊ ÑÈ YÊ j pÊ Ê ¦Ê ¹Ð é ò ý Ð ÊÊ ,ÊÊÐ =Ê JÊ YÐ   £Ð ½Ê ÃÊ ÞÊÊ Ê =Ð'ÎÿÿÿéÎ C L !   EXPORTED_SYMBOLS   Cc   Ci   Cr   Cu   Cm   Components   classes   interfaces   results   utils   manager3   DOWNLOAD_CHUNK_BYTES_SIZE#   DOWNLOAD_INTERVAL=   DEFAULT_SECONDS_BETWEEN_CHECKS   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmI   resource://gre/modules/FileUtils.jsmE   resource://gre/modules/Promise.jsmM   resource://gre/modules/Preferences.jsm=   resource://gre/modules/Log.jsmC   resource://gre/modules/osfile.jsm?   resource://gre/modules/Task.jsmC   resource://gre/modules/ctypes.jsmG   resource://gre/modules/GMPUtils.jsm   gLocale   XPCOMUtils!   defineLazyGetter   gCertUtils-   defineLazyModuleGetter   UpdateChannelQ   resource://gre/modules/UpdateChannel.jsmC   CHECK_FOR_ADDONS_TIMEOUT_DELAY_MS   gOSVersion	   gABI#   GMPInstallManager   prototype   _getURL   checkForAddons   installAddon-   _getTimeSinceLastCheck   _isEMEEnabled+   _isAddonUpdateEnabled!   _updateLastCheck-   _versionchangeOccurred	   Task   async+   simpleCheckAndInstall   uninit5   overrideLeaveDownloadedZip   onLoadXML#   _getChannelStatus   onFailXML!   parseResponseXML   GMPAddon%   parseGMPAddonsNode   toString   isValid   isInstalled   isEME   GMPExtractor   _getZipEntries   install   GMPDownloader   computeHash   start   onStartRequest   onStopRequest   _verifyDownload   generateQI%   nsIRequestObserver   QueryInterface                  #   GMPInstallManager      GMPExtractor      GMPDownloader      GMPAddon                  ÿÿÿÿ                     )       ¹                                           	   temp  t  #             Y      Q;    ¸   
=   V   : QV   ÊÙ    Cu   importI   resource://gre/modules/CertUtils.jsm   ÿÿÿÿ      getScopedLogger                 $       ¹      
                                       prefix   R  6             ;    5   ¸   
=   T  =   : 9ßG    Log   repository5   getLoggerWithMessagePrefix   Toolkit.GMP       ÿÿÿÿ      aus_gOSVersion                î       ¹      E                                     osVersion   sysInfo9	    ?       
         Q;    5   ¸   
;   5   :   QV  ¸   
=   : =   V  ¸   
=   : W   Q   +  Qv  Q;   	â   	=   
: QÈ    V      ]V   =   V  ¸   
=   : =   W   Q     Qv  QÈ    ;   â   V   : W   QV   ÑÊAÈC3ÐÙ$ÎFÌÚJM*ÙÊxËPÓSÎÈU    Cc5   @mozilla.org/system-info;1   getService   Ci   nsIPropertyBag2   getProperty	   name       version   LOGu   gOSVersion - OS Version unknown: updates are not possible.    (!   secondaryLibrary   )%   encodeURIComponent    ÿÿÿÿ         e        ÿÿÿÿ         e            .        *   7       b      ÿÿÿÿ   À      ÿÿÿÿ   ÿÿÿÿ      aus_gABI                L       ¹                                           abiå  ý  [             @   Q;    5   5   W   Q   +  Qv  Q;   â   =   : QÈ    V   Ù`ÌÚd    Services   appinfo   XPCOMABI   LOGg   gABI - XPCOM ABI unknown: updates are not possible.    ÿÿÿÿ         e                   !      ÿÿÿÿ   ÿÿÿÿ   #   GMPInstallManager                          ¹                                             e  k  j                  ÿÿÿÿ   G   GMPInstallManager.prototype._getURLÁ                 1      ¹      ¼                          H             log   url  B  s             ;    â    =   :    Q;   ¸   
;   5   :   QV     #V   ¸   
=   V  : Q   <;   ¸   
;   5   : W  QV   ¸   
=   V  : QV  ¸   	
     ;   
5   5   : ¸   	
    ;   
5   5   : ¸   	
    ;   
5   5   : ¸   	
    ;   
5   5   =   ;   : ¸   	
    ;   : W  Q    ¸   
V  :    "V  ¸   	
    =   : W  QV  ¸   	
    ;   ¸   
:  : ¸   	
    ;   
5   5   : ¸   	
    	;   ¸   
;   5   : : ¸   	
    
;   ¸   
;   5   : : ¸   	
    =   : W  QV   ¸   
=   V  : QV  ÏÈwÖÈÞÖÈÙßÊÔ  ÊÔ  Êà  ÊÊ  È  ÐÕÈÜ ÿÿÿæÊÔ  ÊÖ  ÊÖ  Ê  Ê  È  Ù    getScopedLogger3   GMPInstallManager._getURL   GMPPrefs   get!   KEY_URL_OVERRIDE	   info)   Using override url:    KEY_URL   Using url:    replace   Services   appinfo	   name   version   appBuildID   OS   _	   gABI   gOSVersion	   test   en-US   UpdateChannel   platformVersion)   KEY_APP_DISTRIBUTION9   KEY_APP_DISTRIBUTION_VERSION   %2B=   Using url (with replacement):    %PRODUCT%      %VERSION%      %BUILD_ID%      %BUILD_TARGET%      %OS_VERSION%      %LOCALE%       %LOCALE%      %CHANNEL%   %   %PLATFORM_VERSION%      %DISTRIBUTION%   -   %DISTRIBUTION_VERSION%      \+      ÿÿÿÿ   U   GMPInstallManager.prototype.checkForAddonsÁ                 w      ¹   .                             N             log   url   allowNonBuiltInÝ  Ë         
      ;    â    =   :    QA5      8V   ¸   
=   : Q;   ¸   
Y   =   ]   : A;   ¸   	
:  0   QA¸   

:    QA;   5   ¸   
;   5   : 0   QA5   5      AA5   5   0   QA5   ¸   
=   V  C: Q;   ¸   
;   5   C:    QA5   5   ;   5   V  R 0   QA5   5   5   ;   5   5   0   QA5   5   5   ;   5   5   0   QA5   ¸   
=    : QA5   ¸   !
=   "=   #: QA5   ¸   !
=   $=   #: QA5   ;   &0   %QA5   ¸   '
=   A    B: QA5   ¸   '
=   (A   B: QA5   ¸   '
=   %A   B: QA5   ¸   '
=   )A   B: QV   ¸   *
=   +V  : QA5   ¸   ,
@: QA5   5   -ÏÈÔÑÊÿÿÿðÍÉÈÈÒÊ  ¦ÉËÒÛ×ÉËÏÉàxàxÖÛÛÑÝÝÝÝÙÒÌ    getScopedLoggerA   GMPInstallManager.checkForAddons   _deferred   error;   checkForAddons already called   Promise   reject   alreadycalled	   type   defer   _getURL   _request   CcO   @mozilla.org/xmlextras/xmlhttprequest;1   createInstance   Ci   nsISupports   wrappedJSObject	   open   GET   GMPPrefs   get'   KEY_CERT_CHECKATTRS   channel+   notificationCallbacks   gCertUtils   BadCertHandler   loadFlags   nsIRequest#   LOAD_BYPASS_CACHE   INHIBIT_CACHING!   overrideMimeType   text/xml!   setRequestHeader   Cache-Control   no-cache   Pragma   timeoutC   CHECK_FOR_ADDONS_TIMEOUT_DELAY_MS!   addEventListener   abort	   load	   info)   sending request to: 	   send   promise   ÿÿÿÿ   Y   GMPInstallManager.prototype.checkForAddons/<å                        ¹                                             event   4  ¿             A¸    
=   T  : 5Ô#    onFailXML   onErrorXML   ÿÿÿÿ   Y   GMPInstallManager.prototype.checkForAddons/<å                        ¹                                             event j    À             A¸    
=   T  : 5Ô#    onFailXML   onAbortXML   ÿÿÿÿ   Y   GMPInstallManager.prototype.checkForAddons/<å                        ¹                                             event Î  ü  Á             A¸    
=   T  : 7Ô%    onFailXML   onTimeoutXML   ÿÿÿÿ   Y   GMPInstallManager.prototype.checkForAddons/<å                        ¹                                             event 1  O  Â             A¸    
T  : 4Ï    onLoadXML   ÿÿÿÿ   Q   GMPInstallManager.prototype.installAddonÁ                 d       ¹      #                                       gmpAddon    !  Ô             A5       9;   ¸   
=   : Q;   ¸   
Y   =   ]   : A;   	T  R 0   QA5   ¸   

:  ÕÑÊÿÿÿðÊÉÍ    _deferred   log   error5   previous error encountered   Promise   reject1   previouserrorencountered	   type   gmpDownloader   GMPDownloader   start   ÿÿÿÿ   e   GMPInstallManager.prototype._getTimeSinceLastCheckÁ                 d       ¹      %                                        now   lastCheck1!  ÿ"  Ü       	      ;    ¸   
;   ¸   
:  Xè:    Q;   ¸   
;   5   >:   QV   V     
V   V   V  ØÿÿÿõÈ×ÈÉÊ 	   Math   round	   Date   now   GMPPrefs   get+   KEY_UPDATE_LAST_CHECK   ÿÿÿÿ   S   GMPInstallManager.prototype._isEMEEnabledÁ                          ¹      	                                     #  U#  è             ;    ¸   
;    5   C: ×-    GMPPrefs   get   KEY_EME_ENABLED   ÿÿÿÿ   c   GMPInstallManager.prototype._isAddonUpdateEnabledÁ                 B       ¹                                 
            aAddon x#  $  ë             ;    ¸   
;    5   CT  : E   #Q;    ¸   
;    5   CT  : ÚÉÚ;    GMPPrefs   get%   KEY_PLUGIN_ENABLED+   KEY_PLUGIN_AUTOUPDATE   ÿÿÿÿ   Y   GMPInstallManager.prototype._updateLastCheckÁ                 F       ¹                                              now1$  $  ï             ;    ¸   
;   ¸   
:  Xè:    Q;   ¸   
;   5   V   : QØÿÿÿõÈÞ2 	   Math   round	   Date   now   GMPPrefs   set+   KEY_UPDATE_LAST_CHECK   ÿÿÿÿ   e   GMPInstallManager.prototype._versionchangeOccurredÁ                 d       ¹                                              savedBuildID   buildIDÁ$  ½%  ó             ;    ¸   
;    5   @:    Q;   5   5     QV   V     B;    ¸   
;    5   V  : QC×ÈÔÉÞ    GMPPrefs   get   KEY_BUILDID   Services   appinfo   platformBuildID   set   ÿÿÿÿ   e   GMPInstallManager.prototype.simpleCheckAndInstall<Á                 ®      ¹   #                         L            .generator   .genrval   log2'  2        	      É   Ê   ÐQ;    â    =   :    QA¸   
:        ¸   
=   : Q   ÃÆ       Q   Q;   ¸   
;   5   ;   :    QA¸   	
:     Q  ¸   
=   
   =      : Q         B  ¸   
=   : QY   Y   =   ]   ]   C]   ÈÇ   ÌÈÇÆ      Q   Q   Q   QY   A¸   
:  ]   B]     Ë  Ð   QA¸   
:  Q  ¸   
=      Ù   =   : Q   ¸   
   A:    Q   Ù       B  ¸   
=   : QY   Y   =   ]   ]   C]   ÈÇ   ÌZ      QB   Q   - Á
:  Æ      Q   Ám5      QY   A¸   
   : ]   B]     Ë  ÐQ  ¸   
Y      5   ]   =   ]   : Q   UÆ      Qv   QC  Q  ¸   
Y     5   ]   =   ]   : QÈÇ    ãQ¸   
:  5   ÿÿÿ0ÈÇ       Y   =   ]      ]    pY   Y   =   ]      ]    ]   C]   ÈÇ   ÌÈÇ   @Æ      Qv   Q  ¸   !
=   "   : Q   pÈÇ    Y   ]   C]      Ì S ÌÏÉÈÚÓ
Ö É
ÈÉ×Ì ËÕÊà Iâ
ÍÞÌæ
Ñ 2 É 4
ËÕÊÞ
Ê
Ú8  ÕÒZ
ÒÙ
ÑÏÊ >
ÉÓ

ÑÏÊ D
Ì ;ËÿÿÿîÓ JÊËÊÊåÓÚÎ    getScopedLoggerO   GMPInstallManager.simpleCheckAndInstall-   _versionchangeOccurred	   infoÛ   A version change occurred. Ignoring media.gmp-manager.lastCheck to check immediately for new or updated GMPs.   GMPPrefs   get5   KEY_SECONDS_BETWEEN_CHECKS=   DEFAULT_SECONDS_BETWEEN_CHECKS-   _getTimeSinceLastCheck!   Last check was: ?    seconds ago, minimum seconds: 7   Will not check for updates.+   too-frequent-no-check   status   value	   done   checkForAddons!   _updateLastCheck   Found    length'    addons advertised.   filterG   No new addons to install, returning-   nothing-new-to-install   installAddon	   push   id   succeeded   result   failed	   next   results   error5   Could not check for addons    ÿÿÿÿ       )   secondsBetweenChecks   !   secondsSinceLast       ÿÿÿÿ          gmpAddons      addonsToInstall      installResults   %   failureEncountered               GMPInstallManager.prototype.simpleCheckAndInstall</addonsToInstall<Á                     ¹      Y                                       gmpAddon%   addonUpdateEnabled ++  .        	        ¸    
=   T  ¸   
:  : QT  5    D   &Q;   ¸   
T  : D   QT  5        ¸    
=   : QBB   Q;   ¸   	
T  5   
: >   PA¸   
T  5   
: W   QV       )  ¸    
=   T  5   
=   : Q   )  ¸    
=   T  5   
=   : QV   ÛÿÿÿåÞÉÈ
Õ
ÔK
ÐÈÚ (É
Ú -
 	   info   Found addon:    toString   isValid   GMPUtils   isPluginHidden   isInstalledW   Addon invalid, hidden or already installed.   GMP_PLUGIN_IDS   indexOf   id+   _isAddonUpdateEnabled/   Auto-update is off for #   , skipping check.O   Auto-update is off for unknown plugin '%   ', skipping check.                addon                   e       ÿÿÿÿ          e          M     #  Õ       1  ^       U   ¶   ÿÿÿÿÿÿÿÿ              >  ÿÿÿÿÿÿÿÿì             á           C      ÿÿÿÿL           `  .   ÿÿÿÿ
   R  Z     ÿÿÿÿ   E   GMPInstallManager.prototype.uninitÁ                        ¹      ,                                        loge2  ¦3  Y            ;    â    =   :    QA5      *V   ¸   
=   : QA5   ¸   
:  QA5      9V   ¸   
=   : QA5   ¸   
Y   =   	]   
: QV   ¸   
=   : QÏÈÔÑÔÒÊÿÿÿéÔ    getScopedLogger1   GMPInstallManager.uninit   _request	   info!   Aborting request   abort   _deferred%   Rejecting deferred   reject   uninitialized	   type   Done cleanup   ÿÿÿÿ   K   GMPInstallManager.prototype.onLoadXMLÁ                    ¹      t                        +            event   log Ó4  i8  p            ;    â    =   :    Q  Q  QV   ¸   
=   : Q@  Q;   5   ¸   
;   5   :  E    Q;   ¸   	
;   5   
C:    #;   ¸   
;   5   : W  Q;   ¸   	
;   5   C:    QV   ¸   
=   V  : Q;   ¸   
A5   5   V  V  : QA¸   
:  QÈ     Qv  QV   ¸   
=   V  : QA5   ¸   
Y   T  5   ]   A¸   
T  5   : ]   =   V  ]   : QA.   QÈ    ÏÈ  òÍÔ

ÛÊ×
ÖÈ
Ö zÉÙãÒÌÙÒÍÐÈÏ  Î    getScopedLogger7   GMPInstallManager.onLoadXML	   infoM   request completed downloading document   Services   prefs!   prefHasUserValue   GMPPrefs!   KEY_URL_OVERRIDE   get'   KEY_CERT_CHECKATTRS   gCertUtils   readCertPrefs!   KEY_CERTS_BRANCH/   KEY_CERT_REQUIREBUILTIN#   allowNonBuiltIn:    checkCert   _request   channel!   parseResponseXML   error)   could not load xml:    _deferred   reject   target#   _getChannelStatus   status      message    ÿÿÿÿ         certs       allowNonBuiltIn        ÿÿÿÿ         ex            ö          ï   ÿÿÿÿ     v   ÿÿÿÿ   ÿÿÿÿ   [   GMPInstallManager.prototype._getChannelStatusÁ                     ¹   	   *                                    request   log   status É8  +:        
      ;    â    =   :    Q@  QT  5   W  QV   ¸   
=   T  5   : Q     Qv  QÈ    V  @   +T  5   ¸   
;   5   : 5   W  QV  ÏÈ+ÍâÓÙ	Í    getScopedLoggerG   GMPInstallManager._getChannelStatus   status	   info'   request.status is:    channel   QueryInterface   Ci   nsIRequest    ÿÿÿÿ         e            /       N      ÿÿÿÿ   ÿÿÿÿ   K   GMPInstallManager.prototype.onFailXMLÁ               ¬       ¹      ;                                       failure   event   log   request   status   message  7;  Ì<  ¦      	      ;    â    =   T  :    QT 5     QA¸   
V  :   Q=   V  =   T 5   =     QV   ¸   
V  : QA5   	¸   

Y   V  ]   V  ]   V  ]   : QA.   	QÓÈÍÌ	ÈäÓÒÉÉÉ ¬ ±    getScopedLogger9   GMPInstallManager.onFailXML    target#   _getChannelStatus!   request.status:     (	   type   )	   warn   _deferred   reject   status   message   ÿÿÿÿ   Y   GMPInstallManager.prototype.parseResponseXMLÁ                  G      ¹      Î                        '          Ì=  cC  ¹              Q  Q  Q   Q;    â    =   :    QA5   5   5     QV      _  Q=     QV   ¸   
V  : QA5   ¸   
Y   A5   ]   	V  ]   
: QA.   QÈÈÈV  5   =      o  Q=   V  5   =     QV   ¸   
V  : QA5   ¸   
Y   A5   ]   	V  ]   
: QA.   QÈÈÈ;   5   5     QZ     Q>  Q    zm  QV  5   ¸   
V  :   QV  5   V     È   2V  5   =      ;   ¸   
V  : W  QÈV  #?W  QãV  V  5   Ù   ÿÿÿvÈA5   ¸   
V  : QA.   QÈ   I   Qv   QA5   ¸   
Y   A5   ]   	V   ]   
: QA.   QÈ     ýÙ
ÏÈ
Õ
ËÊÓÒ
Ë
É ÀÏËÏËÓÒ
Ë
É ÌÔ
É&zn  2ÔÈÎAÏ
ÐÉ Ö<ÌÿÿÿÚÛ ßÕÍÌÒËÉ âÎ    getScopedLoggerE   GMPInstallManager.parseResponseXML   _request   responseXML   documentElement-   empty updates document	   warn   _deferred   reject   target   message   nodeName   updates   got node name: '   , expected: updates   Ci   nsIDOMNode   ELEMENT_NODE   childNodes	   item   nodeType   localName   addons   GMPAddon%   parseGMPAddonsNode   length   resolve    ÿÿÿÿ          log       updatesElement       ELEMENT_NODE      gmpResults                     message                     message                     i                 '   updatesChildElement        ÿÿÿÿ          e                  P            ø  ÿÿÿÿ   P   Y           ¦         ÿÿÿÿ§            ¾   i           $        ÿÿÿÿ%           E            R  g                      =   ÿÿÿÿ   ÿÿÿÿ      GMPAddon                      ¹      0                                D      gmpAddon   logD  F  ò      	      ;    â    =   :    Q   ¸   
;   5   : Qf    ¸   
A   : QA;   â   A5   : D   Q;   0   QV   ¸   	
=   
A¸   
:  : QÏÈÚÌ õ ûÑÔØ"ÿÿÿÞ3    getScopedLogger)   GMPAddon.constructor   QueryInterface   Ci   nsIDOMElement   forEach	   size   Number   undefined	   info'   Created new addon:    toString                     id      URL      hashFunction      hashValue      version   	   size                  ÿÿÿÿ      GMPAddon/<Å                 0       ¹                                          	   name ;E  ¥E  ö               ¸    
T  :    AT     ¸   
T  : 9QÏÓ    hasAttribute   getAttribute   ÿÿÿÿ   7   GMPAddon.parseGMPAddonsNodeÁ              9      ¹      n                                    addonsElement   log   gmpResults   addonCount çF  pI              ;    â    =   :    QZ     QT  5   =   I   T  ¸   
;   5   : QT  5   Ù     Q>  Q    ¼m  QT  5   ¸   	
V  :   QV  5   =   
I   È   tV  ¸   
;   5   : QV  ¸   
;   V  R : Q   8  Qv  QV   ¸   
=   V  : QÈÈ   È    ÈV  #?W  QãV  V  ÿÿÿ>ÈV  ÏÈÉÎØÒ&  ¼  °  ÇÓÈÏAÙÕÿÿÿðÉÌÙBÍ "ÌÿÿÿðÑ     getScopedLogger7   GMPAddon.parseGMPAddonsNode   localName   addons   QueryInterface   Ci   nsIDOMElement   childNodes   length	   item   addon	   push   GMPAddon	   warn   invalid addon:     ÿÿÿÿ         i                     addonElement                    e        k   Ç        Á   !       `   Ó   ÿÿÿÿ   m   ©           ¢            ã   ,                     	           ÿÿÿÿ   7   GMPAddon.prototype.toStringÁ                   j       ¹                                           ÛI  K              A5    =   A5   =   A5   =   A5   =   A5   A5   	;   
I   =   A5   	   
=   =   ÌÍÍÍÌÜ    id    (isValid:    isValid   , isInstalled:    isInstalled!   , hashFunction:    hashFunction   , hashValue:    hashValue	   size   undefined   , size:       )   ÿÿÿÿ   5   GMPAddon.prototype.isValidÁ                   :       ¹                                           ¦K  L  ,            A5    E   2QA5   E   &QA5   E   QA5   E   QA5     äÌÉ    id   URL   version   hashFunction   hashValue   ÿÿÿÿ   =   GMPAddon.prototype.isInstalledÁ                   9       ¹                                            L  L  0            A5    E   1Q;   ¸   
;   5   =   A5   : A5    HÌáËH    version   GMPPrefs   get%   KEY_PLUGIN_VERSION      id   ÿÿÿÿ   1   GMPAddon.prototype.isEMEÁ                          ¹      	                                     L  ÔL  4            A5    ¸   
=   : >Ò!    id   indexOf   gmp-eme-   ÿÿÿÿ      GMPExtractor                        ¹                                              zipPath!   installToDirPath  ÁM  *N  =            AT  0    QAT 0   QÊÊ)    zipPath!   installToDirPath   ÿÿÿÿ   K   GMPExtractor.prototype._getZipEntriesÁ               ^       ¹      1                                      zipReader   entries   enumerator O  BP  J      	      Z      QT  ¸    
=   :   Q   #mV   ¸   
V  ¸   
:  : QãV  ¸   
:  ÿÿÿÒV   ÉÏÈ(3 MÖÿÿÿó MÕ    findEntries   *.*	   push   getNext   hasMore    %   3      ÿÿÿÿ   =   GMPExtractor.prototype.installÁ                 æ      ¹                               8             zipReader_Q  X  Y            Æ       Q  Q  Q   Q;    â    =   :    QA;   ¸   
:  0   Q   ¸   
=   A5   =   : Q;   	5   
¸   
;   5   :   QV  ¸   
A5   : Q;   	5   ¸   
;   5   :   Q  ¸   
V  : QA¸   
  :   QZ      QV  ¸   
A   : Q  ¸   
:  Q;   5       V  ¸   
B: Q   ¸   
A5   =   : QA5   ¸   
   : QÈÇ   a   Qv   Q         ¸   
:  QA5   ¸   
Y   A]   V   ]   =   ]   : QÈ    A5   5    xà
ÏÉÍÉâ
ÑÊ _ÈÕ
ÑÊ dÉÔ
Í
È
ÊÕ ~Ð
ËÐÜÝÌÐÒÉÊ Ë Ì    getScopedLogger)   GMPExtractor.install   _deferred   Promise   defer	   info   Installing    zipPath   ...   Cc3   @mozilla.org/file/local;1   createInstance   Ci   nsIFile   initWithPathA   @mozilla.org/libjar/zip-reader;1   nsIZipReader	   open   _getZipEntries   forEach   close#   GMPInstallManager5   overrideLeaveDownloadedZip   remove7    was installed successfully   resolve   reject   target   status   exception	   type   promise    ÿÿÿÿ          log      zipFile       entries       extractedPaths             A   GMPExtractor.prototype.install/<Å                     ¹      O                           #            entry   outFile T  ÈV  k            T  ¸    
=   :    ;   5   ¸   
;   5   :    QV   ¸   
A5   : QV   ¸   	
T  : QV   5   
¸   
:      <V   5   
¸   
;   5   5   ;   â   =   ×: : Q  ¸   
T  V   : Q   ¸   
V   5   : Q   ¸   
T  =   V   5   : QÏ
ÑÊ pÈÕÒÐ
ð1ÿÿÿÏ×ÙÕÊ {    contains   __MACOSX   Cc3   @mozilla.org/file/local;1   createInstance   Ci   nsILocalFile   initWithPath!   installToDirPath%   appendRelativePath   parent   exists   create   nsIFile   DIRECTORY_TYPE   parseInt	   0755   extract	   push	   path	   infoA    was successfully extracted to:     ÿÿÿÿ          e            |      
   m  ÿÿÿÿ   ~  U   ÿÿÿÿ   ÿÿÿÿ      GMPDownloader                        ¹                                              gmpAddon IY  tY              AT  0    QÊ    _gmpAddon   ÿÿÿÿ   3   GMPDownloader.computeHashÁ                    ¹                              -         !   hashFunctionName   fileToHash   log   digest   fileStream  Z  ^  £            ;    â    =   :    Q  Q;   5   ¸   
;   5   :   QV  ¸   
T ;   5   	;   5   
>: Q  Q  Q;   5   ¸   
;   5   :   Q;   5   T  ¸   
:  7  QV      +V   ¸   
=   : Q;   ¸   
:  ÈV  ¸   
V  : QV  ¸   
V  ×ÿ: Q;   â   V  ¸   
B: : W  QÈ   ;  Qv  QV   ¸   
=   V  : Q=   W  QÈ    V  ¸   
:  Q;   ¸   
V  : ÏÈÑÊ ¦ÈØË ¨  ÇÍÑÊ «ÈÔÉÔÌÓÕÖÿÿÿôÎÌÙÑÏÐ    getScopedLogger3   GMPDownloader.computeHash   CcQ   @mozilla.org/network/file-input-stream;1   createInstance   Ci%   nsIFileInputStream	   init   FileUtils   MODE_RDONLY   PERMS_FILE9   @mozilla.org/security/hash;1   nsICryptoHash   toUpperCase   error7   could not get hash function   Promise   reject!   updateFromStream   binaryToHex   finish	   warn1   failed to compute hash:       close   resolve    ÿÿÿÿ      	   hash       hashFunction        ÿÿÿÿ         e         h   Ë       j   Ä   ÿÿÿÿÿÿÿÿã             4  /   ÿÿÿÿ   ÿÿÿÿ   ;   GMPDownloader.prototype.startÁ                       ¹   (   {                           0             log   uri   gmpFileõ^  }b  Ã            ;    â    =   :    QA;   ¸   
:  0   QA5   5       HV   ¸   
=   : Q;   ¸   	
Y   A]   
;   ]   =   ]   : ;   5   ¸   
A5   5   @@:   QA;   5   ¸   
;   5   : 0   Q;   ¸   
=   Z  A5   5   =   `   :   QV  ¸   
:     V  ¸   
B: QV   ¸   
=   V  5    =   !V  5   ": QA5   ¸   #
V  V  ;   $;   %: QA5   ¸   &
A@: QA5   5   'ÏÈÍÉÌÔÑÊÊ È ÏÞÈÒÊ ÐÉÕ%ÕÿÿÿåÈËÐîÚ ØÓÌ    getScopedLogger'   GMPDownloader.start   _deferred   Promise   defer   _gmpAddon   isValid	   infoQ   gmpAddon is not valid, will not continue   reject   target   status   downloaderr	   type   Services   io   newURI   URL   _request   CcW   @mozilla.org/network/incremental-download;1   createInstance   Ci-   nsIIncrementalDownload   FileUtils   getFile	   TmpD   id	   .zip   exists   remove#   downloading from 	   spec	    to 	   path	   init3   DOWNLOAD_CHUNK_BYTES_SIZE#   DOWNLOAD_INTERVAL   start   promise   ÿÿÿÿ   M   GMPDownloader.prototype.onStartRequestÁ                        ¹                                               request   context  µb  Íb  Þ             .    ÿÿÿÿ   K   GMPDownloader.prototype.onStopRequestÁ               º       ¹      T                                      request   context   status   log   promise   :c  sj  â            ;    â    =   :    Q   ¸   
=   : Q;   ¸   
T :     N   ¸   
=   T : QA5   ¸   
Y   A]   	T ]   
=   ]   : QA¸   
:     QV   ¸   
A    A   : QÏÉÕÏÙÒÈÊ ç ìÈ
ÈÑ  ð     getScopedLogger7   GMPDownloader.onStopRequest	   info)   onStopRequest called   Components   isSuccessCode   status failed:    _deferred   reject   target   status   downloaderr	   type   _verifyDownload	   then   ÿÿÿÿ   O   GMPDownloader.prototype.onStopRequest/<Å                 )      ¹      `                          &             destination   zipPath   gmpAddon!   installToDirPath	   path   gmpInstaller   installPromiseÖd  Ái  ð                ¸    
=   : QA5   5      QV   5     QA5      Q;   5   ¸   
;   	5   
:   Q;   5   ¸   
;   5   5   5      5      5   :   QV  ¸   
V  : Q    ¸    
=   V  5   : Q;   V  V  5   R   QV  ¸   
:    QV  ¸   
A    A   : QÚ
Ð
Î
Ì
ÑÊ öÈ
åÊÊ øÈÓä
ÓÈ
ËÈÑ  ÿ 
	 	   info5   GMP file is ready to unzip   _request   destination	   path   _gmpAddon   Cc3   @mozilla.org/file/local;1   createInstance   Ci   nsIFile   OS	   Path	   join   Constants   profileDir   id   version   initWithPath7   install to directory path:    GMPExtractor   install	   then   ÿÿÿÿ   S   GMPDownloader.prototype.onStopRequest/</<Å               ¡       ¹      (                                       extractedPaths   now ¡g  i  ÿ      	      ;    ¸   
;   ¸   
:  Xè:    Q;   ¸   
;   5   V         5   : Q;   ¸   
;   5         5   	      5   : QA5   
¸   
T  : QØÿÿÿõÈíåÏ Ô' 	   Math   round	   Date   now   GMPPrefs   set-   KEY_PLUGIN_LAST_UPDATE   id%   KEY_PLUGIN_VERSION   version   _deferred   resolve   ÿÿÿÿ   S   GMPDownloader.prototype.onStopRequest/</<Å                        ¹                                             err i  ¹i              A5    ¸   
T  : QÔ    _deferred   reject   ÿÿÿÿ   O   GMPDownloader.prototype.onStopRequest/<Å                 I       ¹      !                                       err Ãi  mj                    ¸    
=   : QA5   ¸   
Y   A]   X È]   =   ]   : QÚÒÈÊ 	 	   warn7   verifyDownload check failed   _deferred   reject   target   status   verifyerr	   type   ÿÿÿÿ   O   GMPDownloader.prototype._verifyDownloadÁ                 O      ¹      h                          *          -   verifyDownloadDeferred   log   destination   promise(k  2p        	      ;    ¸   
:     Q;   â   =   :    Q   ¸   
=   : QA5       ;    ¸   
:  A5   5      Q   ¸   
=   	V   5   
: QA5   5   ;   IE   QV   5   A5   5      L   ¸   
=   V   5   =   A5   5   =   : Q;    ¸   
:  ;   ¸   
A5   5   V   :   QV  ¸   
A    A   : Q   5   ÌÉÏÉÕÌÐß×ÕÑÐÒ &ÌÛ
ÈÑ 8 - ;Ë&    Promise   defer   getScopedLogger;   GMPDownloader._verifyDownload	   info-   _verifyDownload called   _request   reject   destination   for path: 	   path   _gmpAddon	   size   undefined   fileSize	   warnW   Downloader:_verifyDownload downloaded size %    != expected size    .   GMPDownloader   computeHash   hashFunction	   then   promise   ÿÿÿÿ   S   GMPDownloader.prototype._verifyDownload/<Å                      ¹      ,                                       digest   expectedDigest Bn  Èo  -            A5    5   ¸   
:     QT  V   I   G      ¸   
=   T  =   V   =   : QA5   ¸   
:  Q      ¸   	
=   
: Q      ¸   
:  QÒÈÈ
ÖÕ 0

Ñ
ÚÕ!    _gmpAddon   hashValue   toLowerCase	   warn7   hashes do not match! Got: `   `, expected: `   `   _deferred   reject	   info   hashes match!   resolve   ÿÿÿÿ   S   GMPDownloader.prototype._verifyDownload/<Å                        ¹                                             err Êo  p  8                  ¸    
:  QÕ     reject   ÿÿÿÿ      binaryToHex                     ¹      8                                    input   result Êp  q  C            =       Q>  Q    hm  QT  ¸   
V  : ¸   
×:   QV  Ù   ?   =   V  W  QV   V  W   QÈV  #?W  QãV  T  Ù   ÿÿÿÈV   Ê&h\wÎÔËÏÈx E$ÌÿÿÿîÕ K       charCodeAt   toString   length   0    ÿÿÿÿ         i                     hex           w             ÿÿÿÿ      U       