ç¿s¹                g     ¹   !          	                          0     resource://gre/modules/TrustedHostedAppsUtils.jsm     l(                                	   ;   5       Q;   5      Q;   5      Q;   5      Q=   
   	QAf    0   Q;    ¸   
=   : Q;    ¸   
=   : Q;    ¸   
=   : Q;    ¸   
=   : Q;   ¸   
A=   =   : Qn   ;   5   ¸   
=   :    A      A   1   QAY      ]      ]      ]      ]      ]      ]    0   Q		ÐÐÐÐËÌ3Õ2Õ0Õ1Õ3Ò(ÛÐÌ	$)ÊUÊ  Ê  Ê  ¶Ê 
Ð     Cu   Components   utils   Cc   classes   Ci   interfaces   Cr   results-   signatureFileExtension	   .sig!   EXPORTED_SYMBOLS   importI   resource://gre/modules/AppsUtils.jsmE   resource://gre/modules/Promise.jsmG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   NetUtilE   resource://gre/modules/NetUtil.jsm   debug   Services   prefs   getBoolPref#   dom.mozApps.debug-   TrustedHostedAppsUtils   isHostPinned   getCSPWhiteList%   verifyCSPWhiteList#   _verifySignedFile)   verifySignedManifest   verifyManifest                  -   TrustedHostedAppsUtils                  ÿÿÿÿ      debug<å                        ¹                                          	   aMsg n  ­               ;    â    =   T  =   : 
Ý7 	   dumpC   -*- TrustedHostedAppsUtils.jsm :    
   ÿÿÿÿ      debug<Å                          ¹                                             ²  º                	    ÿÿÿÿ   Q   this.TrustedHostedAppsUtils.isHostPinnedÁ              V      ¹      [                                 	   aUrl   uri'   siteSecurityService í  	  )       
         Q;    5   ¸   
T  @@: W   Q   4  Qv  Q;   â   =   V  : QBÈÈ    V   5    D   Q=   V   5      B  Q;   5   	¸   

;   5   : W  Q   6  Qv  Q;   â   =   V  : Q=   pÈ    V  ¸   
;   5   5   V   5   >:    *;   â   =   V   5   =   : QC;   â   =   V   5   =   : QBÖÍÌØË3ß8$ÑÊ:Í<ÌØ?ÍBÚÊBãHã    Services   io   newURI   debug+   Host parsing failed: 	   host   https   scheme   Cc1   @mozilla.org/ssservice;1   getService   Ci-   nsISiteSecurityService=   nsISiteSecurityService error:    CERTDB_ERROR   isSecureHost   HEADER_HPKPK   	valid certificate pinning for host:    
%   	Host NOT pinned:     ÿÿÿÿ         e        ÿÿÿÿ         e            (           #       +   (   ÿÿÿÿÿÿÿÿQ             ¯   *   ÿÿÿÿ   ÿÿÿÿ   W   this.TrustedHostedAppsUtils.getCSPWhiteListÁ                    ¹      \                                  	   aCsp   isValid   whiteList%   requiredDirectives l  è  U       
      B   QZ      Qf       QT     ÀÆ     Q   QZ      QT  ¸    
=   :   QV  ¸   
A   : ¸   
A   : ¸   
A   : ¸   
A   : Q  Ù      Ù   HW   QV       ";   â   =   : QZ     QÈÇ;   â   =      Ù   =   	: QY      ]   
V   ]   ÊËZ×
Ê
ÏÈ^Ë^Ê`^Êb^Êc^sÚu
ÓÌ{ä	ÊÊ    split   ;   map   filter   forEach   length   debugg   White list doesn't contain all required directives!)   White list contains     hosts	   list   valid                     script-src      style-src                   ÿÿÿÿ         validDirectives      directives             [   this.TrustedHostedAppsUtils.getCSPWhiteList/<å                        ¹                                             aDirective   ¯  _             T  ¸    
:  ¸   
=   : Ý 	   trim   split             [   this.TrustedHostedAppsUtils.getCSPWhiteList/<å                        ¹                                             aList Á  Ú  `             T  Ù    ?Ë    length         [   this.TrustedHostedAppsUtils.getCSPWhiteList/<å                        ¹                                             aList   S  b               ¸    
T  >7: ×ÿØ*    indexOf         [   this.TrustedHostedAppsUtils.getCSPWhiteList/<Å               ª       ¹      )                                     aList   directiveName   sources f  o  c             T  ¸    
:     QT    Q×ÿ   ¸   
V   :       ¸   
V   : Q  ¸   
Z   >V  ¸   
A    : - Á
:     m5   _ã,  ¸   
:  5   ÿÿÿã Q)QfÊÈÈiÒÔl
ÑÑÏ8"ïo    shift   indexOf	   push   filter   value	   next	   done   ÿÿÿÿ   _   this.TrustedHostedAppsUtils.getCSPWhiteList/</<å                 &       ¹      
                                       aSource   W  l             T  =    E   Q  ¸   
T  : ×ÿnÞ     'self'   indexOf      "      *   ³   ÿÿÿÿ   ÿÿÿÿ   ]   this.TrustedHostedAppsUtils.verifyCSPWhiteListÁ               n       ¹      +                          
         	   aCsp   domainWhitelist   t               A¸    
T  :    QV   5       ;   â   =   : QBV   5   ¸   
A    :     ;   â   =   : QBCËÈÊÓÖÓ    getCSPWhiteList   valid   debugY   TRUSTED_APPLICATION_WHITELIST_PARSING_FAILED	   list   every_   TRUSTED_APPLICATION_WHITELIST_VALIDATION_FAILED   ÿÿÿÿ   a   this.TrustedHostedAppsUtils.verifyCSPWhiteList/<å                        ¹                                          	   aUrl á                  A¸    
T  : ,Ï    isHostPinned   ÿÿÿÿ   [   this.TrustedHostedAppsUtils._verifySignedFileÁ               °       ¹      D                                    aManifestStream!   aSignatureStream   aCertDb   deferred	   root                    ;    ¸   
:     Q;   5   5      Q   Q;   5   ¸   
=   :    QV      ;   5   5   	   QÈ      Qv   QÈ    T ¸   

   T  T    : Q   5   ÌÉÕD  
Ñ  #ÈÛÓÊË  ¤  ³Ë    Promise   defer   Ci   nsIX509CertDB5   TrustedHostedAppPublicRoot   Services   prefs   getBoolPrefK   dom.mozApps.use_trustedapp_test_certs1   TrustedHostedAppTestRoot3   verifySignedManifestAsync   promise    ÿÿÿÿ       -   useTrustedAppTestCerts        ÿÿÿÿ          ex       ÿÿÿÿ   _   this.TrustedHostedAppsUtils._verifySignedFile/<Á                 Ç       ¹                                              aRv   aCert  p  X  ¦             ;    â    =   T  =   T =         : Q;   ¸   
T  :    "      ¸   
T : Q   eT  ;   5   D   QT  ;   5      $      ¸   	
=   
: Q         ¸   	
=   : QòÏ
ÝÔÎ
ß
Ú9    debugg   Signature verification returned code, cert & root:        Components   isSuccessCode   resolve   Cr/   NS_ERROR_FILE_CORRUPTEDK   NS_ERROR_SIGNED_MANIFEST_FILE_INVALID   reject?   MANIFEST_SIGNATURE_FILE_INVALIDK   MANIFEST_SIGNATURE_VERIFICATION_ERROR     +   H       ,   B   ÿÿÿÿ   t      ÿÿÿÿ   ÿÿÿÿ   a   this.TrustedHostedAppsUtils.verifySignedManifestÁ              ç      ¹   +                           _         	   aApp   aAppId   deferred   certDb   principal   mRequestChannel   signatureURL   sRequestChannel+   getAsyncFetchCallback  ¤   &  ¶             ;    ¸   
:     Q   Q;   5   ¸   
;   5   :    Q   6  Qv  Q;   â   =   V  : Q=   	pÈ    ;   
5   ¸   
T  5   T  5   B:    Q;   ¸   
T  5   @@@V   @;   5   5   ;   5   5   : ¸   
;   5   :    Q   5   ;   5   5   0   Q   ;   ¸   
T B: 0   Q  Q  Q;   5   ¸   
;   5   : ¸    
T  5   @@: ¸   
;   5   !:   QV  5   "V  5   #V  5   $;   %W  QÈ   1  Qv  Q   ¸   &
=   ': QÈÈ    ;   ¸   
V  @@@V   @;   5   5   ;   5   5   : ¸   
;   5   :    Q   5   ;   5   5   0   Q   ;   ¸   
T B: 0   QA      Q;    ¸   (
Z  ;    A   R `   ;    A   R `  : ¸   )
A      5   &: Q   5   *ÌÉ%ÑÊ  »ÎÌØÍÑÑ  ÃÈÔÏÏ  ÆÊ  ÎÊ  ÆÉ  ÏÚxÐÉ  Ö{
ÑÊ  ØÊÊ  ØÊÊ  ØÈÉåÌÕËÐÏÏ  ãÊ  ëÊ  ãÉ  ìÚxÐÉÌ  ùÐÓÓ  ùÊ Ê  ù Ë    Promise   defer   CcE   @mozilla.org/security/x509certdb;1   getService   Ci   nsIX509CertDB   debug+   nsIX509CertDB error:    CERTDB_ERROR   Services+   scriptSecurityManager/   getAppCodebasePrincipal   origin   localId   NetUtil   newChannel2   manifestURL   nsILoadInfo   SEC_NORMAL!   nsIContentPolicy   TYPE_OTHER   QueryInterface   nsIHttpChannel   loadFlags   nsIRequest   INHIBIT_CACHING+   notificationCallbacks   AppsUtils#   createLoadContextC   @mozilla.org/network/io-service;1   nsIIOService   newURI   nsIURL   prePath   directory   fileBaseName-   signatureFileExtension   reject-   SIGNATURE_PATH_INVALID   all	   then   promise    ÿÿÿÿ         e        ÿÿÿÿ      	   mURL        ÿÿÿÿ         e       ÿÿÿÿ      this.TrustedHostedAppsUtils.verifySignedManifest/getAsyncFetchCallbackå                        ¹       
                                 D      resolve   rejectÀ"  ×#  ï             A    2  ÷	    ÿÿÿÿ      this.TrustedHostedAppsUtils.verifySignedManifest/getAsyncFetchCallback/<Å                 J       ¹                                 	            aInputStream   aResult  Ý"  ×#  ï             ;    ¸   
T :     );   â   =   : Q   =   : Q   T  : QÏÓÏ
Í    Components   isSuccessCode   debug/   Failed to download file3   MANIFEST_FILE_UNAVAILABLE   ÿÿÿÿ   e   this.TrustedHostedAppsUtils.verifySignedManifest/<Å                 /       ¹                                             resolve   reject  þ#  $  ú             ;    ¸   
            T  T : : QÖÑ  ûD    NetUtil   asyncFetch2   ÿÿÿÿ   e   this.TrustedHostedAppsUtils.verifySignedManifest/<Å                 /       ¹                                             resolve   reject  £$  3%  þ             ;    ¸   
            T  T : : QÖÑ  ÿD    NetUtil   asyncFetch2   ÿÿÿÿ   e   this.TrustedHostedAppsUtils.verifySignedManifest/<Å               £       ¹                                                aManifestStream!   aSignatureStream A%  ë%        	      T  - Á
:  ¸    
:  5      Q   
5   W   Q¸    
:  5      Q   
5   W  QQQA¸   
V   V        : ¸   
      5         5   : Q5ÿÿÿØÝçØäÞ 1 	   next	   done   value#   _verifySignedFile	   then   resolve   reject     >             )       G   *   ÿÿÿÿ   ?  y   ÿÿÿÿ   ¾  %   ÿÿÿÿÿÿÿÿá           ÿÿÿÿ   U   this.TrustedHostedAppsUtils.verifyManifestÁ                        ¹                                      D   	   aApp   aAppId   aManifest=&  h(  
            ;    A    R Ì     Promise   ÿÿÿÿ   Y   this.TrustedHostedAppsUtils.verifyManifest/<Å                 {       ¹      '                                       resolve   reject  p&  b(              A¸    
   5   :     T =   : QA¸   
   5   :     T =   : QA¸   
      : ¸   
T  T : Q
ÒÍ
ÒÍæ>    isHostPinned   manifestURLY   TRUSTED_APPLICATION_HOST_CERTIFICATE_INVALID%   verifyCSPWhiteList   csp_   TRUSTED_APPLICATION_WHITELIST_VALIDATION_FAILED)   verifySignedManifest	   then