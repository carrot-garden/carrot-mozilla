ç¿s¹                {  -   ¹   '   °                                      resource://gre/components/SiteSpecificUserAgent.js              	                    	   
             ;   5       Q;   5      Q;   5      Q;    ¸   
=   : QX ú   	Q=      
Q=      Q=      Q;   5   ¸   
;   5   :    Q;   ¸   
A=   =   =   : Q;   Y      ]      ]      ]      ]   ;   ¸   
=    : ]   !;   ¸   "
Z  ;   5   #`   : ]   $6   QA;   ¸   &
Z  ;   `   : 6   %QÊ	ÐÐÐ	Õ3ÉËËËÑÊÉÿÿÿýÒ#%ÊÊ<Ê@ÊIÊTÑ	ÈÐ'ÎÿÿÿéÎXÑ5ÉÿÿÿßÉ9    Cu   Components   utils   Cc   classes   Ci   interfaces   importK   resource://gre/modules/XPCOMUtils.jsm   MAX_CACHE_SIZE   PREF_UPDATE5   general.useragent.updates.   PREF_OVERRIDE7   general.useragent.override.   XPCOM_SHUTDOWN   xpcom-shutdown%   HTTP_PROTO_HANDLERS   @mozilla.org/network/protocol;1?name=http   getService-   nsIHttpProtocolHandler   XPCOMUtils/   defineLazyServiceGetter	   cpmmS   @mozilla.org/childprocessmessagemanager;1)   nsISyncMessageSender+   SiteSpecificUserAgent   prototype7   getUserAgentForURIAndWindow   invalidateCache   clean   observe   IDM   {506c680f-3d1c-4954-b351-2c80afbc37d3}   classID   generateQI1   nsISiteSpecificUserAgent   QueryInterface   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ   +   SiteSpecificUserAgent                   Ù       ¹      +                           "           Q  T               A;   5   ¸   
;   5   : 5   ;   5   5   6    QA5       ;   ¸   	
=   
: Q   ~;   ¸   	
=   : Q;   5   ¸   
;   AB: Q;   5   ¸   
;   AB: Q;   5   ¸   
A;   B: QA;   R  6   QÜÈÖÚÕÜÜÜÉ    inParent   Cc7   @mozilla.org/xre/app-info;1   getService   Ci   nsIXULRuntime   processType)   PROCESS_TYPE_DEFAULT   Cu   import[   resource://gre/modules/UserAgentOverrides.jsmG   resource://gre/modules/Services.jsm   Services   prefs   addObserver   PREF_OVERRIDE   PREF_UPDATE   obs   XPCOM_SHUTDOWN   userAgentCache   Map   ÿÿÿÿ   A   ssua_getUserAgentForURIAndWindow               é       ¹      ;                                     	   aURI   aWindow	   host   cachedResult	   data   result  Â    &       	      A5       (;   ¸   
T  : D   Q;   5   T  5      QA5   ¸   
V   :   QV     
V  Y   T  ]     Q;   	¸   

=   V  : >7D   Q;   5     QA5   5   ;      A5   ¸   
:  QA5   ¸   
V   V  : QV  ÏÔ+ÍÑÈ1	ÍÕ	Ú4ÑÑ8Ù    inParent%   UserAgentOverrides#   getOverrideForURI%   HTTP_PROTO_HANDLER   userAgent   asciiHost   userAgentCache   get   uri	   cpmm   sendRpcMessage+   Useragent:GetOverride	   size   MAX_CACHE_SIZE   clear   set   ÿÿÿÿ   _   SiteSpecificUserAgent.prototype.invalidateCacheÁ                          ¹                                            "  K  <             A5    ¸   
:  QÑ    userAgentCache   clear   ÿÿÿÿ   K   SiteSpecificUserAgent.prototype.cleanÁ                   o       ¹   
                                         _  S	  @             A5    ¸   
:  QA5       V;   5   ¸   
A;   : Q;   5   ¸   
;   A: Q;   5   ¸   
;   	A: QÑÛÛÛ1    userAgentCache   clear   inParent   Services   obs   removeObserver   XPCOM_SHUTDOWN   prefs   PREF_OVERRIDE   PREF_UPDATE   ÿÿÿÿ   O   SiteSpecificUserAgent.prototype.observeÁ                 @       ¹                                              subject   topic	   data   i	  ,
  I             T x=    y   ;   y   z   'A¸   
:  Q   A¸   
:  Q   k<u
NuÊKÌXÌX    nsPref:changed   XPCOM_SHUTDOWN   invalidateCache   clean