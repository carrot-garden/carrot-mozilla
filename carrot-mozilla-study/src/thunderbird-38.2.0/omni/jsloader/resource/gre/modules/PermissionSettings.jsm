ç¿s¹                <     ¹             
                          0     resource://gre/modules/PermissionSettings.jsm     ¹                              ;   5       Q;   5      Q;   5      QAf   0   Q;    ¸   
=   	: Q;    ¸   
=   
: Q;    ¸   
=   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =   : QAY      ]      ]      ]      ]      ]      ]      ]      	]   0   Q;   ¸   
:  Q		ÐÐÐÌ5Õ3Õ1Õ9Ò@Í5Ê&Ê>ÊEÊiÊ  Ê  Ê  Ð  ¬Ð     Cu   Components   utils   Cc   classes   Ci   interfaces!   EXPORTED_SYMBOLS   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmW   resource://gre/modules/PermissionsTable.jsm   XPCOMUtils/   defineLazyServiceGetter	   ppmmU   @mozilla.org/parentprocessmessagemanager;13   nsIMessageListenerManager   appsService5   @mozilla.org/AppsService;1   nsIAppsService1   PermissionSettingsModule	   init!   _isChangeAllowed   addPermission-   _internalAddPermission   getPermission!   removePermission   observe   receiveMessage   ÿÿÿÿ      debug                        ¹                                               s ë   *                                   1   PermissionSettingsModule                  ÿÿÿÿ   	   init                   F       ¹   	                              	          1  ×               ;    â    =   : Q;   ¸   
=   A: Q;   5   ¸   
A=   B: QÓÖÜ?    debug	   Init	   ppmm%   addMessageListenerA   PermissionSettings:AddPermission   Services   obs   addObserver+   profile-before-change   ÿÿÿÿ   ]   this.PermissionSettingsModule._isChangeAllowedÁ                      ¹                                             aPrincipal   aPermName   aAction   aAppKind	   perm   isExplicit    ÷  	  &       	      ;    5   ¸   
T  T :    Q;   â   T T  5   T :   QT =   HE   QT  5   ;   5   5   HD   3QT =   IE   $QV   ;   5   	5   
IE   
QV  3×ÈØÈ7ÏÞÏÚ    Services   permsA   testExactPermissionFromPrincipal9   isExplicitInPermissionsTable   appStatus   unknown   Ci   nsIPrincipal1   APP_STATUS_NOT_INSTALLED)   nsIPermissionManager   UNKNOWN_ACTION   ÿÿÿÿ      addPermission                        ¹                                             aData   aCallbacks  ¾	  
  >             A¸    
T  CT : Q@Ó5 -   _internalAddPermission   ÿÿÿÿ   -   _internalAddPermission                     ¹   "   w                           4            aData!   aAllowAllChanges   aCallbacks   uri   app   principal   action   P
  _  E             ;    5   ¸   
T  5   @@:    Q;   ¸   
T  5   :   Q;    5   ¸   
V   V  5   	T  5   
:   Q  QT  5   x=   y   (=   y   7=   y   F=   y   Uz   i;   5   5   W  Q   ;   5   5   W  Q   m;   5   5   W  Q   T;   5   5   W  Q   ;;   â   =   T  5   =   : Q;   5   5   W  QT D   .QA¸   
V  T  5   T  5   V  5   :    h;   â   =   T  5   =   V  5   	=   V  : Q;    5   ¸    
V  T  5   V  : QC   >;   â   =   !T  5   =   V  5   	=   V  : QBÛÈÔÈæÈJÈh  ÈMu
Pu
Su
VuÊMÔXÔXÔXÔXâÔ^Éåc÷å÷    Services   io   newURI   origin   appsService'   getAppByManifestURL   manifestURL+   scriptSecurityManager/   getAppCodebasePrincipal   localId   browserFlag   value   unknown   allow	   deny   prompt   Ci)   nsIPermissionManager   UNKNOWN_ACTION   ALLOW_ACTION   DENY_ACTION   PROMPT_ACTION	   dumpM   Unsupported PermisionSettings Action:    
!   _isChangeAllowed	   type	   kind   debug   add:        perms!   addFromPrincipal   add Failure:    ÿÿÿÿ      getPermission               0      ¹      Z                                       aPermName   aManifestURL   aOrigin   aBrowserFlag   uri   appID   principal   result      ÷  i       	      ;    â    =   T  =   T =   T : Q;   5   ¸   
T @@:    Q;   ¸   
T :   Q;   5   ¸   	
V   V  T :   Q;   5   
¸   
V  T  :   QV  x;   5   5   y   F;   5   5   y   8;   5   5   y   *;   5   5   y   z   =   =   =   =   ;   â   =   : Q=   ëÖÈÏÈÜÈØ	Èpl  rÏptÏpvÏpxÏpÊrÓ    debug   getPermission:    ,    Services   io   newURI   appsService5   getAppLocalIdByManifestURL+   scriptSecurityManager/   getAppCodebasePrincipal   permsA   testExactPermissionFromPrincipal   Ci)   nsIPermissionManager   UNKNOWN_ACTION   ALLOW_ACTION   DENY_ACTION   PROMPT_ACTION   unknown   allow	   deny   prompt	   dumpO   Unsupported PermissionSettings Action!
   ÿÿÿÿ   !   removePermission               F       ¹                                             aPermName   aManifestURL   aOrigin   aBrowserFlag	   data    '  )               Y   T  ]    T ]   T ]   =   ]   T ]      QA¸   
V   C: QÈÈÈÊÍÑ( 	   type   origin   manifestURL   unknown   value   browserFlag-   _internalAddPermission   ÿÿÿÿ      observe                 >       ¹                                             aSubject   aTopic   aData   G                 ;    ¸   
=   A: Q;   5   ¸   
A=   : Qn    @1    QÖÛÌ 	   ppmm+   removeMessageListenerA   PermissionSettings:AddPermission   Services   obs   removeObserver+   profile-before-change   ÿÿÿÿ      receiveMessage              þ       ¹      R                                     aMessage   mm   msg   result -                 ;    â    =   T  5   : QT  5      QT  5     Q  QT  5     Q  Qx=   y   
z   ¡B  Q=     QV   ¸   
=   :    BA¸   	
V  B: W  QV      #V   ¸   
=   
: Q=   W  QV      -;   ¸   
=   V  5   V  : Q@È   ÈÜÍÍÔh  ¬uÊÊÐ
Í
ÈÔÊ
ä
X    debugG   PermissionSettings::receiveMessage 	   name   target	   dataA   PermissionSettings:AddPermissions    from a content process with no 'permissions' privileges.!   assertPermission   permissions-   _internalAddPermission7   permissions-modify-implicits    had an implicit permission change. Child process killed.   Cu   reportError7   PermissionSettings message 	   type    ÿÿÿÿ         success       errorMsg        F   ·   ÿÿÿÿÿÿÿÿö          