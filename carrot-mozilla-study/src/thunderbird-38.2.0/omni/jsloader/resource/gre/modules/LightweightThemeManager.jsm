çżsš                Á  Ş   š   R   Ç      /                   &       0     resource://gre/modules/LightweightThemeManager.jsm     `                                                                   ,   -      !   "   #   $   %   &   '   (   J   K   *   +   ,   -   .Af    0    Q;   5      Q;   5      Q;   5   ¸   
=   : Q;   5   ¸   
=   	: Q;   5   ¸   
=   
: Q=      Q=      Q=      Q=      Q=      Q=      Q=      Q×   Q×   Qf      Qf      QC   QB   QY   =    ]   !=   "]   #   Q;   $¸   %
A=   &=   ': QA¸   (
=   )   : QA¸   (
=   *   : QA¸   +
=   *   : Qn   ,@1   ,Qn   -@1   -QAY      a   /   a   0   a   1   	a   2   
b   1   ]   3   ]   4   ]   5   ]   6   ]   7   ]   8   ]   9   ]   :   ]   ;   ]   <   ]   =   ]   >   ]   ?0   .Q;   @Y      a   B   a   C   a   D   a   E   a   F   ]   G   a   H    a   I0   AQ;   JQn   KY      )]   L1   KQ;   M¸   N
;   .Z  ;   M5   O=   ;   ;   ;   P5   QXR `   : Q	#EĘ 	 3	 <	 m	 				 ş	 żĘ É	 Ř	 í	 ó	 	Ě4	ĐĐÚAÚCÚ?Ë	ËËËË
ËËČČË	Ë#ĘĐ%*Ň*F-Ö02Ö;=Ö@EĚĚHĘKĘTĘ]ĘmĘqĘuĘ~Ę  Ę  ŁĘ  ŤĘ  łĘ  ăĘ  ţĘ Ę Ę gĘ Đ    ĘĘ 	ĘĘĘĘ Ę Ę $Đ 3 : k I+ ¸ĘĐ Ŕ É Ö ë 	 ŐŐÍ !   !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   utils   importK   resource://gre/modules/XPCOMUtils.jsmO   resource://gre/modules/AddonManager.jsmG   resource://gre/modules/Services.jsm   ID_SUFFIX+   @personas.mozilla.org-   PREF_LWTHEME_TO_SELECT5   extensions.lwThemeToSelect?   PREF_GENERAL_SKINS_SELECTEDSKIN5   general.skins.selectedSkin'   PREF_EM_DSS_ENABLED-   extensions.dss.enabled   ADDON_TYPE   theme+   URI_EXTENSION_STRINGSq   chrome://mozapps/locale/extensions/extensions.properties!   STRING_TYPE_NAME   type.%ID%.name;   DEFAULT_MAX_USED_THEMES_COUNT'   MAX_PREVIEW_SECONDS   MANDATORY   OPTIONAL   PERSIST_ENABLED)   PERSIST_BYPASS_CACHE   PERSIST_FILES/   lightweighttheme-header   headerURL/   lightweighttheme-footer   footerURL   XPCOMUtils-   defineLazyModuleGetter=   LightweightThemeImageOptimizer   resource://gre/modules/addons/LightweightThemeImageOptimizer.jsm!   __defineGetter__   _prefs   _maxUsedThemes!   __defineSetter__)   _themeIDBeingEnabled+   _themeIDBeingDisabled/   LightweightThemeManager	   name   usedThemes   currentTheme-   currentThemeForDisplay   setLocalTheme   getUsedTheme   forgetUsedTheme   previewTheme   resetPreview   parseTheme%   updateCurrentTheme   themeChanged   startup   shutdown   addonChanged   getAddonByID!   getAddonsByTypes   AddonWrapper   prototype   appDisabled   isCompatible)   isPlatformCompatible   scope   foreignInstall!   isCompatibleWith/   providesUpdatesSecurely   blocklistState   _previewTimer+   _previewTimerCallback   notify'   AddonManagerPrivate!   registerProvider   AddonType   AddonManager   VIEW_TYPE_LIST                  /   LightweightThemeManager                                    id   	   name      headerURL                     
      
         footerURL      textcolor      accentcolor      iconURL      previewURL      author      description      homepageURL      updateURL      version                  ˙˙˙˙      prefsGetter                   (       š                                           o  Ň  -             A.    QA;   5   ¸   
=   : 0    ×É/    _prefs   Services   prefs   getBranch%   lightweightThemes.   ˙˙˙˙   '   maxUsedThemesGetter                  O       š                                          ń  2             A.    QA;   ¸   
=   : 0    Q   $   Qv   QA;   0    QČ    A5    ŇÎ7ĚÓ:    _maxUsedThemes   _prefs   getIntPref   maxUsedThemes;   DEFAULT_MAX_USED_THEMES_COUNT    ˙˙˙˙          e                    )      ˙˙˙˙   ˙˙˙˙   '   maxUsedThemesSetter                        š      
                                     	   aVal 9    =             A.    QAT  0    Ę"    _maxUsedThemes   ˙˙˙˙   C   this.LightweightThemeManager.nameá                          š                                            ´	  Đ	  I             =     /   LightweightThemeManager   ˙˙˙˙   O   this.LightweightThemeManager.usedThemesÁ                  T       š                              	          ä	  ¨
  K       
      ;    ¸   
;   ¸   
=   ;   5   : 5   :       Qv   QZ   ČČ    4ÝĘMČ˙˙˙őÉOĚÎ 	   JSON   parse   _prefs   getComplexValue   usedThemes   Ci#   nsISupportsString	   data    ˙˙˙˙          e            8       :      ˙˙˙˙˙˙˙˙K             ˙˙˙˙   S   this.LightweightThemeManager.currentThemeÁ                L       š                                        	   dataž
  U  T             ;    ¸   
=   :    A5   >7W   Q     Qv  QČ    V   D   Q@'Ń
ŇÓZĚ    _prefs   getBoolPref   isThemeSelected   usedThemes    ˙˙˙˙         e            +       -      ˙˙˙˙   ˙˙˙˙   g   this.LightweightThemeManager.currentThemeForDisplayÁ                Ţ       š      -                                  	   datau  ő  ]             A5    W   QV   E   Q;      ž;   K  Q   mW  V   V  7E   Q;   ¸   
=   V  :    SV   V  ;   â   ;   V  7: 5   =   V   5   	=   
;   â   V   : 9Q     Qv  QČ    ăQLM˙˙˙bQNČV   Ë`ĎÎ0  ŁĘ|ĺÜČä0Ëŕj    currentTheme   PERSIST_ENABLED   PERSIST_FILES   _prefs   getBoolPref   persisted.#   _getLocalImageURI	   spec   ?   id   ;   _version    ˙˙˙˙         key                     e       2   ¤       8          (   °   ˙˙˙˙   š             ˙˙˙˙   S   this.LightweightThemeManager.currentThemeÁ                        š      	                                       aData   C  m             ;    â    T  B: Î !   _setCurrentTheme   ˙˙˙˙   K   LightweightThemeManager_setLocalTheme                        š                                             aData   ľ  q             ;    â    T  C: QŇ !   _setCurrentTheme   ˙˙˙˙   I   LightweightThemeManager_getUsedTheme              k       š      "                                    aId   usedThemes ő    u             A5    W   QV   - Á
:    Q   -m5   W  QV  5   T     V  Č ăQ¸   
:  5   ˙˙˙ÄČ @ËÓ8AŃÍĘwË˙˙˙ęŇ{    usedThemes   value   id	   next	   done    ˙˙˙˙         usedTheme       #   A          L   ˙˙˙˙˙˙˙˙G             ˙˙˙˙   O   LightweightThemeManager_forgetUsedTheme             Î       š      >                                       aId   currentTheme   theme   wrapper ä  đ  ~             A¸    
T  :   QV      ;   V  R   Q;   ¸   
=   V  B: QA5   W   QV   E   QV   5   T     )A¸   
@: Q;   ¸   
@;   	B: Q;   
â   
;   â   T  : : Q;   ¸   
=   V  : QËČĘ
ČÚË×Í××˙˙˙îŮA    getUsedTheme   AddonWrapper'   AddonManagerPrivate%   callAddonListeners   onUninstalling   currentTheme   id   themeChanged%   notifyAddonChanged   ADDON_TYPE#   _updateUsedThemes'   _usedThemesExceptId   onUninstalled   ˙˙˙˙   I   LightweightThemeManager_previewTheme               đ       š      J                           !            aData   cancel 0  Á         
      ;    5   ¸   
;   5   :    QV   B0   Q;   5   ¸   
V   =   	;   
¸   
T  : : QV   5      ;      ;   ¸   
:  Q   .n   ;    5   ¸   
;   5   : 1   Q;   ¸   
;   ;   Xč;   5   : Q;   â   T  : QŰ	ČËÚĎ!  ÉŐŕÉŃÉĘ  Ń    Cc=   @mozilla.org/supports-PRBool;1   createInstance   Ci#   nsISupportsPRBool	   data   Services   obs   notifyObserversG   lightweight-theme-preview-requested	   JSON   stringify   _previewTimer   cancel)   @mozilla.org/timer;1   nsITimer!   initWithCallback+   _previewTimerCallback'   MAX_PREVIEW_SECONDS   TYPE_ONE_SHOT   _notifyWindows   ˙˙˙˙   I   LightweightThemeManager_resetPreview                   ;       š                                               Ł             ;       5;    ¸   
:  Qn    @1    Q;   â   A5   : QĐĚÔ,    _previewTimer   cancel   _notifyWindows-   currentThemeForDisplay   ˙˙˙˙   E   LightweightThemeManager_parseTheme                B       š                                          aString   aBaseURI  Ń  b  Ť             ;    â    ;   ¸   
T  : T B:       Qv   Q@ČČ    %Ů˙˙˙ńÉĚË    _sanitizeTheme	   JSON   parse    ˙˙˙˙          e            )       +      ˙˙˙˙˙˙˙˙9             ˙˙˙˙   U   LightweightThemeManager_updateCurrentTheme                 H      š      l                        (             theme   req	   selfŽ  F  ł             ;    ¸   
=   :           Qv   QČČ    A5      Q    D   Q   5       ;   5   ¸   
;   5   	:    Q   C0   
Q   ¸   
=   : Q   ¸   
=      5   C: Q   5   5   ;   5   5   0   Q   5   5   ;   5   5   0   QA   Q   ¸   
=      B: Q   ¸   
@: Q
ŃĚËĚĚ
ËŃĘ  żÉĚŐŕßxßxÖ  Ř  Ë  ÚŃ    _prefs   getBoolPref   update.enabled   currentTheme   updateURL   CcO   @mozilla.org/xmlextras/xmlhttprequest;1   createInstance   Ci#   nsIXMLHttpRequest)   mozBackgroundRequest!   overrideMimeType   text/plain	   open   GET   channel   loadFlags   nsIRequest#   LOAD_BYPASS_CACHE   INHIBIT_CACHING!   addEventListener	   load	   send    ˙˙˙˙          e       ˙˙˙˙   #   loadEventListener               Ď       š      .                                        currentTheme   newDataĄ  $  Ë       	         5    X Č      ¸   
   5      5   :   QV   D   DQV  5      5   D   *Q;   â   V  : ;   â      :       5   W   QV   E   QV   5      5         V  0   QÎ
ŕ
Č
ËÚÎ
Ň
ĎŢĎ    status   parseTheme   responseText   updateURL   id   _version   currentTheme        !       #      ˙˙˙˙˙˙˙˙1             ˙˙˙˙   I   LightweightThemeManager_themeChanged                ö       š      I                                     aData     ă       	      ;       !;    ¸   
:  Qn    @1    QT        Q;   â   T  5   :    QV   ¸   
T  : Q;   â   V   : Q;      6;   ¸   
:  Q;   	â   	T     ¸   

A: : QČ;   ¸   
=   T  @: Q;   â   T  : Q;   5   ¸   
@=   @: QĐĚË
ŇČŇŇĐŮ  ď'˙˙˙á  őÚŃÜF    _previewTimer   cancel'   _usedThemesExceptId   id   unshift#   _updateUsedThemes   PERSIST_ENABLED=   LightweightThemeImageOptimizer   purge   _persistImages	   bind   _prefs   setBoolPref   isThemeSelected   _notifyWindows   Services   obs   notifyObservers3   lightweight-theme-changed    ˙˙˙˙          usedThemes              5   themeChanged_persistImages                          š                                             Č  ď             ;    â    A5   : Q
Ô,    _notifyWindows-   currentThemeForDisplay    /      ˙˙˙˙   ˙˙˙˙   ?   LightweightThemeManager_startup                  Ż       š      .                                   #    ţ             ;    5   ¸   
;   :    z   Q;    5   ¸   
;   :    QV      %A¸   
A¸   
V   : : Q   A¸   
@: Q;    5   ¸   
;   : QČ;   ¸   	
=   
;   B: QÖË
ÖČ Ô˙˙˙îÉÍŰŰ-    Services   prefs!   prefHasUserValue-   PREF_LWTHEME_TO_SELECT   getCharPref   themeChanged   getUsedTheme   clearUserPref   _prefs   addObserver      _prefObserver    ˙˙˙˙          id           t   ˙˙˙˙   ˙˙˙˙   A   LightweightThemeManager_shutdown                          š                                           ô  *               ;    ¸   
=   ;   : QÚ)    _prefs   removeObserver      _prefObserver   ˙˙˙˙   I   LightweightThemeManager_addonChanged              ě      š      Ů                        G            aId   aType   aPendingRestart   id   current   č!  ŕ)              T ;       ;   â   T  :    QA5     Q  Q;   5   ¸   
;   :   QV   V  E   	QT    	Č;   5   ¸   
;   : QV     7;   ¸   	
=   
;   A¸   
V  : R : Q   >V   V  5      +;   ¸   	
=   
;   V  R : QČČ     Qv  QČ    V     Ű  QV  5   V      	Čn   V  5   1   Q;   V  R   QT    C;   5   ¸   
;   =   : Q;   ¸   	
=   V  C: Q   E;   ¸   	
=   V  B: QA¸   
@: Q;   ¸   	
=   V  : Qn   @1   QČV      ń  Q  QA¸   
V   :   Qn   V   1   Q;   V  R   QT    X;   ¸   	
=   V  C: Q;   5   ¸   
;   V   : Q;   5   ¸   
@: Q   H;   ¸   	
=   V  B: QA¸   
V  : Q;   ¸   	
=   V  : Qn   @1   QČÉÍČË  Ď
ÖČŇÚ2ŃŇ@˙˙˙ď ,ÉÎ
ŃĘ1 1

ĘÓËÎÔ
Ę
Č>ßßÚÍŮÍŃ
ĚČĎ
Ę
ČSÚŢŰÚĐŮÍ K    ADDON_TYPE   _getInternalID   currentTheme   Services   prefs   getCharPref-   PREF_LWTHEME_TO_SELECT   clearUserPref'   AddonManagerPrivate%   callAddonListeners)   onOperationCancelled   AddonWrapper   getUsedTheme   id+   _themeIDBeingDisabled   setCharPref      onDisabling   themeChanged   onDisabled)   _themeIDBeingEnabled   onEnabling   savePrefFile   onEnabled    ˙˙˙˙      	   next        ˙˙˙˙         e        ˙˙˙˙         wrapper        ˙˙˙˙         theme       wrapper         1   Ó       2   Í   ˙˙˙˙˙˙˙˙o          ˙˙˙˙ý                  ˙˙˙˙   !  Ő   ˙˙˙˙˙˙˙˙<             ę   ˙˙˙˙   ˙˙˙˙   I   LightweightThemeManager_getAddonByID               i       š      6                           	            aId   aCallback   id   theme  ć*  ç+  g            ;    â    T  :    QV       T @: QA¸   
V   :   QV      T @: QT ;   V  R : QÍČÉĚČÉÎ
˙˙˙ö#    _getInternalID   getUsedTheme   AddonWrapper   ˙˙˙˙   Q   LightweightThemeManager_getAddonsByTypes                       š      &                                    aTypes   aCallback  -  ×-        	      T  E   QT  ¸    
;   : ×˙   T Z   : QT Y      Q   QA5   K    mW   ;      V   R ,  ÎăQLM˙˙˙ŕQNČ: QŘĚĎ)Ď0%Ř˙˙˙âŐ˙˙˙őA    indexOf   ADDON_TYPE   usedThemes   AddonWrapper    ˙˙˙˙          a       T   &       ;   A   ˙˙˙˙   ˙˙˙˙      AddonWrapper                 o      š      §                                D      aThemek.  K>              A¸    
=       : QA¸    
=      : QA¸    
=      : QA¸    
=      : QA¸    
=      : Qf   ¸   
   A: Qf   ¸   
   A: QA¸    
=      	: QA¸    
=      
: QA¸    
=   	   : QA¸    
=   
   : QA¸    
=      : QA¸    
=      : QA¸    
=      : QA¸   
=      : QA   0   QA   0   QA   0   QÖÖÖ ÖÖŃ  ˘Ń ˘ ¨ÖÖ ąÍ ą šÍ š ĘÖ ĐÖ ŮÖ éÖ őĚĚĚ !   __defineGetter__   id	   type   isActive	   name   version   forEach   creator   screenshots#   pendingOperations5   operationsRequiringRestart	   size   permissions   userDisabled!   __defineSetter__   uninstall   cancelUninstall   findUpdates   ˙˙˙˙   +   AddonWrapper_idGetterĄ                          š                                           ˛.  Ę.                 5    ;   ?Ń    id   ID_SUFFIX   ˙˙˙˙   /   AddonWrapper_typeGetterĄ                          š                                           /  /              ;    C
    ADDON_TYPE   ˙˙˙˙   7   AddonWrapper_isActiveGetter                 0       š                                              currente/  î/              ;    5      QV         5   V   5   BĎŐ /   LightweightThemeManager   currentTheme   id   ˙˙˙˙   /   AddonWrapper_nameGetterĄ                          š                                           20  @0                 5    CË 	   name   ˙˙˙˙   5   AddonWrapper_versionGetter                   &       š      
                                     0  Ç0              =       q      5       
=   ËÚ1    version                        description      homepageURL      iconURL                  ˙˙˙˙      AddonWrapper/<Á                        š      	                                D   	   prop1  1              A¸    
       : QÖ !   __defineGetter__   ˙˙˙˙   ?   AddonWrapper_optionalPropGetter                   #       š       
                                     X1  1                   q        7   @Ë×,                      installDate      updateDate                  ˙˙˙˙      AddonWrapper/<Á                        š      	                                D   	   propŐ1  o2  ˘            A¸    
       : QÖ !   __defineGetter__   ˙˙˙˙   7   AddonWrapper_datePropGetter                   ,       š                                           "2  i2  Ł                 q   ;         7R    @ËÖĘ 	   Date   ˙˙˙˙   5   AddonWrapper_creatorGetter                          š      	                                     ż2  3  ¨            ;    5      5   R Ő3 '   AddonManagerPrivate   AddonAuthor   author   ˙˙˙˙   =   AddonWrapper_screenshotsGetter                 +       š                                              urlX3  ź3  Ź               5       QZ  ;   5   V   R `   Ď×.    previewURL'   AddonManagerPrivate   AddonScreenshot   ˙˙˙˙   I   AddonWrapper_pendingOperationsGetter                 U       š                                 	             pending14  5  ˛            ;    5      QA5   A5      3V   A5      ;    5      ;    5   W   QV   ĎÍĘŢx    AddonManager   PENDING_NONE   isActive   userDisabled   PENDING_DISABLE   PENDING_ENABLE   ˙˙˙˙   [   AddonWrapper_operationsRequiringRestartGetter                  w       š   	   $                                  5  v7  ş            ;    5   ¸   
;   :    R;    5   ¸   
;   :    ;   5         Qv   QČ    ;   5   ;   5   Ö*Ö
ĐÓËË*    Services   prefs!   prefHasUserValue?   PREF_GENERAL_SKINS_SELECTEDSKIN   getBoolPref'   PREF_EM_DSS_ENABLED   AddonManager+   OP_NEEDS_RESTART_NONE/   OP_NEEDS_RESTART_ENABLE    ˙˙˙˙          e            .       N      ˙˙˙˙   ˙˙˙˙   /   AddonWrapper_sizeGetter                          š                                             ş7  H8  Ę            @    ˙˙˙˙   =   AddonWrapper_permissionsGetter                 M       š                                              permissions8  |9  Đ            ;    5      QA5      V   ;    5   W   Q   V   ;    5   W   QV   ĎÎxËÎx    AddonManager%   PERM_CAN_UNINSTALL   userDisabled   PERM_CAN_ENABLE!   PERM_CAN_DISABLE   ˙˙˙˙   ?   AddonWrapper_userDisabledGetter                  ś       š   	   ,                                  Đ9  V;  Ů            ;       5      B;      5      C   Q;   5   ¸   
;   :    Q   5   V   ČČ   O  Q   Qv   Q;   5     QV   D   QV  5      5   ČČ    ĐĐ8
ÖČŘŇ
Ďé )   _themeIDBeingEnabled   id+   _themeIDBeingDisabled   Services   prefs   getCharPref-   PREF_LWTHEME_TO_SELECT/   LightweightThemeManager   currentTheme    ˙˙˙˙          toSelect        ˙˙˙˙          e       current         /   <       0   6   ˙˙˙˙˙˙˙˙d             m   B   ˙˙˙˙˙˙˙˙­            ˙˙˙˙   ?   AddonWrapper_userDisabledSetter                 A       š                                             val Ş;  y<  é            T  A5       	T  T     ;   @0   Q   ;      0   QT  ĘŃĐ    userDisabled/   LightweightThemeManager   currentTheme   ˙˙˙˙   -   AddonWrapper_uninstall                          š                                           Ż<  ď<  ő            ;    ¸   
   5   : QÚ3 /   LightweightThemeManager   forgetUsedTheme   id   ˙˙˙˙   9   AddonWrapper_cancelUninstall                          š      	                                     0=  v=  ů            ;    =   R pË3    ErrorK   Theme is not marked to be uninstalled   ˙˙˙˙   1   AddonWrapper_findUpdates                        š                                             listener   reason   appVersion   platformVersion    Ż=  H>  ý            ;    ¸   
AT  T T T : QÝ_ '   AddonManagerPrivate+   callNoUpdateListeners   ˙˙˙˙   E   AddonWrapper.prototype.appDisabledÁ                          š                                             ˇ>  Ń>              B    ˙˙˙˙   G   AddonWrapper.prototype.isCompatibleÁ                          š                                             ?  -?  	            C    ˙˙˙˙   W   AddonWrapper.prototype.isPlatformCompatibleÁ                          š                                             J?  c?              C    ˙˙˙˙   9   AddonWrapper.prototype.scopeÁ                          š                                           q?   ?              ;    5   Ë"    AddonManager   SCOPE_PROFILE   ˙˙˙˙   K   AddonWrapper.prototype.foreignInstallÁ                          š                                             ˇ?  Ń?              B    ˙˙˙˙   ;   AddonWrapper_isCompatibleWith                        š                                               appVersion   platformVersion  <@  p@              C    ˙˙˙˙   ]   AddonWrapper.prototype.providesUpdatesSecurelyÁ                          š                                             Ä@  Ý@              C    ˙˙˙˙   K   AddonWrapper.prototype.blocklistStateÁ                          š                                           "A  _A  $            ;    5   5   Đ0    Ci'   nsIBlocklistService#   STATE_NOT_BLOCKED   ˙˙˙˙      _getInternalID               a       š                                             id   len uB  $C  3            T      @T  Ů    ;   Ů       QV   >E   QT  ¸   
V   : ;      T  ¸   
>V   : @ŘÚÉĎ    length   ID_SUFFIX   substring   ˙˙˙˙   !   _setCurrentTheme            Ë      š   (   ˝                         C            aData   aLocal   oldWrapper   wrapper   needsRestart   cancel  ?C  J  <            ;    â    T  @T : U  Q;   =   E   Q;   5   ¸   
;   :   Q;   5   ¸   	
;   
5   :   QV  B0   Q;   5   ¸   
V  =   ;   ¸   
T  : : QT    Ň  Q  Q  Q  Q;   ¸   
T  5   :   QV   D   QV  5   T  5     QV     ÉT  ;   ¸   
:  0   QV  E   Q=   V  q   T  V  5   0   Q   T  T  5   0   QV     ;   V  R    @W   Q;   T  R W  Q;   ¸   
=   @V  V   B: Q;   ¸   
=   V  B: Q;   5      Q;   !â   !T  5   :   QV  E   QV  5   T  5      V  ¸   "
?>T  : Q   V  ¸   #
T  : Q;   $â   $V  : QV     ;   ¸   
=   %V  : QČV  5      @;   ¸   &
T     T  5   ;   '   @;   V  : Q;   5    ŃŃÖČŰ	ČËÚĎ DÝÔČâĎÉÔ×Ń
ĎÎ
É
ČŇÉ SÚĎŇČÜŮŇŇÚÉĎŮÉ gË,    _sanitizeTheme   ADDON_TYPE   theme   Services   prefs!   prefHasUserValue?   PREF_GENERAL_SKINS_SELECTEDSKIN   Cc=   @mozilla.org/supports-PRBool;1   createInstance   Ci#   nsISupportsPRBool	   data   obs   notifyObserversE   lightweight-theme-change-requested	   JSON   stringify/   LightweightThemeManager   getUsedTheme   id   version   updateDate	   Date   now   installDate   AddonWrapper'   AddonManagerPrivate)   callInstallListeners#   onExternalInstall%   callAddonListeners   onInstalling   currentTheme'   _usedThemesExceptId   splice   unshift#   _updateUsedThemes   onInstalled%   notifyAddonChanged   ID_SUFFIX    ˙˙˙˙         theme       isInstall       current       usedThemes        ą   É  ˙˙˙˙   ˙˙˙˙      _sanitizeTheme                  š                                    D      aData   aBaseURI   aLocal#   resourceProtocols'   resourceProtocolExp!   sanitizeProperty   result J  ŔN  m                W  Q    D   Q   '=       @f   W   QT    V   ¸   
=   : Q;   =   V   ¸   
=   : =   R    QY     Q;   - Á
:    Q   Qm5   	W  Q  QV  V  :   QV      ;   
5   5   pV  V  V  9QČăQ¸   
:  5   ˙˙˙ Č ;   - Á
:    Q   Gm5   	W  Q  QV  V  :   QV      Č   V  V  V  9QČăQ¸   
:  5   ˙˙˙ŞČ V   vĘ mĚ
ĚĘÔŰ(Ę˙˙˙îÉ ĘÔ8e×ÉČĐĎ  Ë˙˙˙âŇ Ô8[×ÉČAĎ Ë˙˙˙ăŇ     object	   push	   file   RegExp   ^(	   join   |   ):   MANDATORY   value   Components   results)   NS_ERROR_INVALID_ARG	   next	   done   OPTIONAL   ˙˙˙˙   !   sanitizeProperty              ű       š      V                                	   prop   val NK  (M  v            T     q    @   T  7Ĺ=       @   T  7¸   
:     QV       @     ¸   
T  :     
V   ;   â   V         ;   â      :    @: 5   W   QT  =             
   ¸   
V   :    
V   @     Qv  Q@ČČ    ĘĐĐČĎuÓÔÉ˙˙˙çÍÉ
ßĚË    string	   trim	   test   _makeURI	   spec   updateURL    ˙˙˙˙         e    	   URL$       ^https:         j   y       ä      ˙˙˙˙˙˙˙˙ň                            	   http      https      resource                   ˙˙˙˙      #   mandatoryProperty                    val        ˙˙˙˙      !   optionalProperty                    val       "  [          e         p   ˙˙˙˙   ­   ?            f   ˙˙˙˙   /  5         P           ˙˙˙˙   '   _usedThemesExceptId!                        š                                      D      aIdŢN  YO              ;    5   ¸   
    : Ń  H /   LightweightThemeManager   usedThemes   filter   ˙˙˙˙   7   usedThemesExceptId_filterIDĄ                        š                                             t <O  XO  Ą            =    T  qE   QT  5       /Ţ    id   ˙˙˙˙      _version!                        š                                             aThemeData mO  O  Ł            T  5    D   Q=   Ô    version      ˙˙˙˙      _makeURI!                        š                                          	   aURL   aBaseURI  ¨O  ăO  Ś            ;    5   ¸   
T  @T : Ü(    Services   io   newURI   ˙˙˙˙   #   _updateUsedThemes              ţ       š      G                                     aList   str  P  {R  Š      	         jm  Q;    T  T  Ů   ?7R   Q;   ¸   
=   V  B: QT  ¸   
:  Q;   ¸   
=   V  : QČăT  Ů   ;   ˙˙˙;   5   	¸   

;   5   : W   QV   ;   ¸   
T  : 0   Q;   ¸   
=   ;   5   V   : Q;   5   ¸   
@=   @: Q(z(Ô
ČÚÎÚ Ť	Ő ˛ŃĘ ˛ČÓÉăÜK    AddonWrapper   length'   AddonManagerPrivate%   callAddonListeners   onUninstalling   pop   onUninstalled   _maxUsedThemes   Cc=   @mozilla.org/supports-string;1   createInstance   Ci#   nsISupportsString	   data	   JSON   stringify   _prefs   setComplexValue   usedThemes   Services   obs   notifyObservers=   lightweight-theme-list-changed    ˙˙˙˙         wrapper           z          c   ˙˙˙˙   ˙˙˙˙      _notifyWindows                 .       š                                             aThemeData R  )S  ş      	      ;    5   ¸   
@=   ;   ¸   
T  : : Q×Ď ť;    Services   obs   notifyObserversA   lightweight-theme-styling-update	   JSON   stringify   ˙˙˙˙   9   _previewTimerCallback_notify                          š                                           S  żS  Á            ;    ¸   
:  QĐ' /   LightweightThemeManager   resetPreview   ˙˙˙˙      _prefObserver                w       š      %                                    aSubject   aTopic   aData   'T  ¤U  É            T x=    y   
z   hn   ;   ¸   
T : 1   Q   (   Qv   Qn   ;   1   QČ    ;   â   ;   5   : Q   ksuĘÔÎĚ×ŘX    maxUsedThemes   _maxUsedThemes   _prefs   getIntPref;   DEFAULT_MAX_USED_THEMES_COUNT#   _updateUsedThemes/   LightweightThemeManager   usedThemes    ˙˙˙˙          e            "       7      ˙˙˙˙   ˙˙˙˙      _persistImages                    š      .                              D      aData   aCallback   onSuccess#   numFilesToPersist˝U  ÝW  Ř                W   Q>   Q;    K  Q   rmW  ;   ¸   
=   V  B: Q   V  7   C   #?   QQ;   â      V  7;    V  7V   V  : : QăQLM˙˙˙QNČĘ Ř ăÎ0wĘŰĘĐç.˙˙˙ŇŃ>    PERSIST_FILES   _prefs   setBoolPref   persisted.   _persistImage   ˙˙˙˙      onSuccess!                        š       
                                 D      keyćU  ćV  Ů                 á    ˙˙˙˙   5   _persistImages/onSuccess/<Á                        š                                              currentőU  ćV  Ů            ;    5      QV   E   QV   5     5      !;   ¸   
=      C: Q    #?    >E   Q       :  QĎŢÜäĘ /   LightweightThemeManager   currentTheme   id   _prefs   setBoolPref   persisted.    ˙˙˙˙         key       $   x            ˙˙˙˙   ˙˙˙˙   #   _getLocalImageURI               T       š   	                                          localFileName   localFile ůW  X  í            ;    5   ¸   
=   ;   5   : W   QV   ¸   
T  : Q;    5   ¸   
V   : ŕČŇŐ"    Services   dirsvc   get   ProfD   Ci   nsIFile   append   io   newFileURI   ˙˙˙˙      _persistImage               ˙       š      R                                       sourceURL   localFileName   successCallback   targetURI   sourceURI   persist   ŻX  '\  ó                 ¸    
T  :    ;   â   T : W   Q;   â   T  : W  Q;   5   ¸   
;   5   : W  QV  ;   5   5   	;   5   5   
;      ;   5   5      ;   5   5   0   QV  ;   T R 0   QV  ¸   
V  @@;   5   5   @@V   @: QĎÍČÍČŃĘ úČĎĐÔÖÍÉĐĐ / 	   test#   _getLocalImageURI   _makeURI   Cci   @mozilla.org/embedding/browser/nsWebBrowserPersist;1   createInstance   Ci)   nsIWebBrowserPersist   persistFlagsI   PERSIST_FLAGS_REPLACE_EXISTING_FILESS   PERSIST_FLAGS_AUTODETECT_APPLY_CONVERSION)   PERSIST_BYPASS_CACHE5   PERSIST_FLAGS_BYPASS_CACHE1   PERSIST_FLAGS_FROM_CACHE!   progressListener1   _persistProgressListener   saveURI   nsIHttpChannelU   REFERRER_POLICY_NO_REFERRER_WHEN_DOWNGRADE#   ^(file|resource):       ˙˙˙˙   1   _persistProgressListener                 =       š                                       D      successCallbackJ\  _              A    0    QA   0   QA   0   QA   0   QA   0   QĚĚĚĚĚ  !   onLocationChange!   onProgressChange   onStatusChange!   onSecurityChange   onStateChange   ˙˙˙˙   Q   persistProgressListener_onLocationChange                          š                                             Š\  Ž\               O    ˙˙˙˙   Q   persistProgressListener_onProgressChange                          š                                             ű\   ]               O    ˙˙˙˙   M   persistProgressListener_onStatusChange                          š                                             K]  P]               M    ˙˙˙˙   Q   persistProgressListener_onSecurityChange                          š                                             ]  ˘]               O    ˙˙˙˙   K   persistProgressListener_onStateChange                       š                                          aWebProgress   aRequest   aStateFlags   aStatus    ě]  _              T E   2QT ;    5   5   E   QT ;    5   5      KT ¸   
;    5   : 5         :  Q      Qv   QČ    ÉŮÓ.ÔČ
Ę
Ó    Ci-   nsIWebProgressListener!   STATE_IS_NETWORK   STATE_STOP   QueryInterface   nsIHttpChannel!   requestSucceeded    ˙˙˙˙          e         ;   2       n      ˙˙˙˙