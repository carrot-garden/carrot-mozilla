ç¿s¹                  (   ¹   $   ¯                          $       0     resource://gre/components/PermissionSettings.js     þ                                          ;   5       Q;   5      Q;   5      Q;   ¸   
=   : Q;   ¸   
=   	: Q;   ¸   
=   
: Qn   ;    5   ¸   
;   5   : 1   Q=      Q;   ¸   
=   :    Q;   ¸   
A=   =   =   : Q;   Y      ]      ]      ]      ]   ;   ]   ;   ¸    
Z   : ]   !0   QA;   ¸   #
Z  ;   `   : 0   "Q	Ê		ÐÐÐÕ3Õ1Õ9àÉÿÿÿýËÑ ÉÿÿÿöÍ"5$ÊÊ<ÊIÊeÊ|ÊÐÎÑ5ÉÿÿÿßÉ    Cc   Components   classes   Ci   interfaces   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmW   resource://gre/modules/PermissionsTable.jsm   cpmS   @mozilla.org/childprocessmessagemanager;1   getService)   nsISyncMessageSender;   PERMISSIONSETTINGS_CONTRACTIDC   @mozilla.org/permissionSettings;1-   PERMISSIONSETTINGS_CID   IDM   {cd2cf7a1-f4c1-487b-8c1b-1a71c7097431}   XPCOMUtils/   defineLazyServiceGetter   appsService5   @mozilla.org/AppsService;1   nsIAppsService%   PermissionSettings   prototype   get   isExplicit   set   remove   classID   generateQI   QueryInterface   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ      debug                        ¹                                            	   aMsg ë   ,                    ÿÿÿÿ   %   PermissionSettings                          ¹                                           k                 ;    â    =   : QÓ    debug   Constructor   ÿÿÿÿ      get               :      ¹      Z                                       aPermName   aManifestURL   aOrigin   aBrowserFlag   uri   appID   principal   result        %       	      ;    â    =   T  =   T =   T =   T : Q;   5   ¸   
T @@:    Q;   ¸   
T :   Q;   5   ¸   	
V   V  T :   Q;   5   
¸   
V  T  :   QV  x;   5   5   y   F;   5   5   y   8;   5   5   y   *;   5   5   y   z   =   =   =   =   ;   â   =   : Q=   õÖÈÏÈÜÈØ	È,l  .Ïp0Ïp2Ïp4ÏpÊ.Ó    debug#   Get called with:    ,    Services   io   newURI   appsService5   getAppLocalIdByManifestURL+   scriptSecurityManager/   getAppCodebasePrincipal   perms9   testExactPermanentPermission   Ci)   nsIPermissionManager   UNKNOWN_ACTION   ALLOW_ACTION   DENY_ACTION   PROMPT_ACTION   unknown   allow	   deny   prompt	   dumpO   Unsupported PermissionSettings Action!
   ÿÿÿÿ      isExplicit               ­       ¹      0                                       aPermName   aManifestURL   aOrigin   aBrowserFlag   uri   app   principal    8  i
  <             ;    â    =   T  =   T =   T : Q;   5   ¸   
T @@:    Q;   ¸   
T :   Q;   5   ¸   	
V   V  5   
T :   Q;   â   T  V  5   V  5   : ëÖÈÏÈÑÐAÈDÍÉÉDF2    debug   isExplicit:    ,    Services   io   newURI   appsService'   getAppByManifestURL+   scriptSecurityManager/   getAppCodebasePrincipal   localId9   isExplicitInPermissionsTable   appStatus	   kind   ÿÿÿÿ      set              ,      ¹      Z                                     aPermName   aPermValue   aManifestURL   aOrigin   aBrowserFlag!   currentPermValue   action     
  Õ  I       	      ;    â    =   T  =   T =   T =   T =   T : QA¸   
T  T T T :    Q  QV   =   HD   -QT =   HD   QA¸   
T  T T T :     Q  Q=   T  =   T =   	  Q;   
¸   
V  : Q;   5   V  R pÈ;   ¸   
=   Y   T  ]   T ]   T ]   T ]   T ]   : QãØKMÑMÈORÐÏÔË
ÏËÔÏ\ÖÈÈÈÈÈ\b    debug#   Set called with:    ,    ,     get   unknown   isExplicit1   PermissionSettings.js: 'C   ' is an implicit permission for ';   ' or the permission isn't set   Cu   reportError   Components   Exception   cpm   sendSyncMessageA   PermissionSettings:AddPermission	   type   origin   manifestURL   value   browserFlag    ÿÿÿÿ         errorMsg           K   ÿÿÿÿ   ÿÿÿÿ      remove                    ¹      L                                     aPermName   aManifestURL   aOrigin   uri   appID   principal   ñ  ]  e       	      ;    5   ¸   
T @@:    Q;   ¸   
T :   Q;    5   ¸   
V   V  C:   QV  5   ;   5   	5   
I   Q  Q=   T =   T  =     Q;   ¸   
V  : Q;   5   V  R pÈ;   ¸   
=   Y   T  ]   T ]   T ]   =   ]   C]   : QÖÈÏÈÚÈjÙË
ÏmÏÔÏsÖÈÈÈÊsy    Services   io   newURI   appsService5   getAppLocalIdByManifestURL+   scriptSecurityManager/   getAppCodebasePrincipal   appStatus   Ci   nsIPrincipal1   APP_STATUS_NOT_INSTALLED1   PermissionSettings.js: 's   ' is installed or permission is implicit, cannot remove '   '.   Cu   reportError   Components   Exception   cpm   sendSyncMessageA   PermissionSettings:AddPermission	   type   origin   manifestURL   unknown   value   browserFlag    ÿÿÿÿ         errorMsg        v   K   ÿÿÿÿ