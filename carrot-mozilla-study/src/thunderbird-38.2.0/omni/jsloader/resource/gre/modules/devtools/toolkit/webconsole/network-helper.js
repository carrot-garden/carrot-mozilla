çżsš               [     š   s   ä                              0     resource://gre/modules/devtools/toolkit/webconsole/network-helper.js     ça                                ;   â   =   : 5        Q5      Q5      Q5      QQ;   ¸   
A=   =   	: Q;   ¸   
A=   
=   : Qn   Y       ]      ]      ]      ]      ]      ]      ]      ]      ]      	]      
]      ]   Y   =   ]   =   ]   =   ]   =   ]   =   ]    =   !]   "=   ]   #=   ]   $=   ]   %=   ]   &=   ']   (=   ]   )=   ]   *=   ]   +=   ]   ,=   ']   -=   ]   .=   /]   0=   ]   1=   ]   2=   ]   3=   ]   4=   ]   5=   ]   6=   ]   7=   ]   8=   ]   9=   ]   :=   ]   ;=   ']   <=   ']   ==   ]   >=   ]   ?=   ']   @=   ]   A=   /]   B=   ]   C=   ]   D=   ]   E=   F]   G=   H]   I=   J]   K=   J]   L=   J]   M=   J]   N=   J]   O=   P]   Q=   P]   R=   S]   T=   S]   U=   S]   V=   S]   W=   S]   X=   S]   Y=   S]   Z=   S]   [=   S]   \=   S]   ]=   S]   ^=   S]   _=   S]   `=   S]   a=   /]   b=   /]   c=   /]   d=   /]   e=   /]   f]   g   ]   h   ]   i   ]   j   ]   k   ]   l1   Q;   m¸   n
;   : - Á
:     Q   &m5   oW   Q;   pV   ;   V   79QăQ¸   q
:  5   r˙˙˙ËČ 9C79ĎôŰKŰ`CĘNĘcĘyĘ   Ę  °Ę  ÇĘ  ÚĘ  ęĘ  űĘ Ę ?Ę YĘ ĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĘĎ ŇĘ Ę Ę ˇĘ ÔĐC ńŃŇ8:ŃŐ ńË˙˙˙ďŇ&    components   Cc   Ci   Cu   require   chrome   loader   lazyImporter   NetUtilE   resource://gre/modules/NetUtil.jsm   DevToolsUtilsc   resource://gre/modules/devtools/DevToolsUtils.jsm   NetworkHelper!   convertToUnicode1   readAndConvertFromStream/   readPostTextFromRequest)   readPostTextFromPage;   readPostTextFromPageViaWebNav%   getAppIdForRequest+   getTopFrameForRequest'   getWindowForRequest+   getRequestLoadContext   loadFromCache#   parseCookieHeader)   parseSetCookieHeader   txt   text/plain	   html   text/html   xml   text/xml   text/xsl   text/xul   css   text/css   text/sgml   text/rtf   text/x-setext   text/richtext   js   text/javascript   text/jscript3   text/tab-separated-values   text/rdf   text/xif   text/ecmascript   text/vnd.curl	   json   text/x-json   text/x-js   text/js   text/vbscript   view-source   view-fragment   application/xml+   application/xhtml+xml)   application/atom+xml'   application/rss+xmlE   application/vnd.mozilla.maybe.feed?   application/vnd.mozilla.xul+xml-   application/javascript1   application/x-javascript/   application/x-httpd-php'   application/rdf+xml-   application/ecmascript;   application/http-index-format!   application/json!   application/x-js   multipart/mixed3   multipart/x-mixed-replace   svg   image/svg+xml   bin1   application/octet-stream   image   image/jpeg   image/jpg   image/gif   image/png   image/bmp   flash;   application/x-shockwave-flash   video/x-flv   media   audio/mpeg3   audio/x-mpeg-3   video/mpeg   video/x-mpeg   audio/ogg   application/ogg#   application/x-ogg%   application/x-midi   audio/midi   audio/x-mid   audio/x-midi   music/crescendo   audio/wav   audio/x-wav   text/json%   application/x-json)   application/json-rpcG   application/x-web-app-manifest+json3   application/manifest+json   mimeCategoryMap   isTextMimeType#   parseSecurityInfo)   parseCertificateInfo-   formatSecurityProtocol+   getReasonsForWeakness   Object'   getOwnPropertyNames   value   exports	   next	   done   ˙˙˙˙   '   NH_convertToUnicode              m       š      &                                    aText   aCharset	   conv  g    N             ;    5   ¸   
;   5   :    QV   T D   Q=   0   QV   ¸   
T  :      Qv  QT  ČČ    ŃĘPČR+ŘÎÉVĚÍ    CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   charset   UTF-8!   ConvertToUnicode    ˙˙˙˙         ex         $   /       T      ˙˙˙˙˙˙˙˙d             ˙˙˙˙   7   NH_readAndConvertFromStream              ^       š      %                                    aStream   aCharset	   text  Ů  Ă  c       
      @   Q;    ¸   
T  T  ¸   
:  : W   QA¸   
V   T :      Qv  QV   ČČ    8Ů0˙˙˙×ČĎÉjĚÎ    NetUtil/   readInputStreamToString   available!   convertToUnicode    ˙˙˙˙         err            <       D      ˙˙˙˙˙˙˙˙U             ˙˙˙˙   5   NH_readPostTextFromRequest                ď       š      F                                     aRequest   aCharset  Y  ś  y       
      T  ;    5   r   Ţ  Q  Q  Q   QT  5      QB  QV   ;    5   r   CW  Q  QV     7V   ¸   
:  W  QV   ¸   
;    5   5   >: QA¸   
V   T :   QV  E   QV  >   $V   ¸   
;    5   5   >: QV  ČČ@ÎÝ
Í~
Ď
ËČß
ĎČ  ĐßČ    Ci!   nsIUploadChannel   uploadStream#   nsISeekableStream	   tell	   seek   NS_SEEK_SET1   readAndConvertFromStream    ˙˙˙˙          iStream    !   isSeekableStream       prevOffset    	   text           Ő   ˙˙˙˙˙˙˙˙ę             ˙˙˙˙   /   NH_readPostTextFromPage               0       š                                             aDocShell   aCharset   webNav  ˙                  T  ¸    
;   5   :    QA¸   
V   T : Ô	ČĎ5    QueryInterface   Ci!   nsIWebNavigation;   readPostTextFromPageViaWebNav   ˙˙˙˙   A   NH_readPostTextFromPageViaWebNav                       š   	   "                                     aWebNav   aCharset  #  ´  ą             T  ;    5   r   {   QT  5      QV   ;    5   rE   $QV   5   E   QV   ;    5   r   /V   ¸   
;   >: QA¸   
V   T : ČČ@ÎË
ÍäĎŐĎ    Ci)   nsIWebPageDescriptor#   currentDescriptor   nsISHEntry   postData#   nsISeekableStream	   seek   NS_SEEK_SET1   readAndConvertFromStream    ˙˙˙˙          descriptor           u   ˙˙˙˙˙˙˙˙             ˙˙˙˙   +   NH_getAppIdForRequest                0       š                                          aRequest ą  f  Ç             A¸    
T  : 5         Qv   QČ    @ËÎÓ +   getRequestLoadContext   appId    ˙˙˙˙          ex                         ˙˙˙˙   ˙˙˙˙   1   NH_getTopFrameForRequest                0       š                                          aRequest ŕ    Ú             A¸    
T  : 5         Qv   QČ    @ËÎÓ +   getRequestLoadContext   topFrameElement    ˙˙˙˙          ex                         ˙˙˙˙   ˙˙˙˙   -   NH_getWindowForRequest                0       š                                          aRequest m  h  ę             A¸    
T  : 5         Qv   QČ    @ËÎÓ +   getRequestLoadContext!   associatedWindow    ˙˙˙˙          ex                         ˙˙˙˙   ˙˙˙˙   1   NH_getRequestLoadContext                t       š      !                                    aRequest >  E   ű             T  5    ¸   
;   5   :       Qv   QČ    T  5   5    ¸   
;   5   :       Qv   QČ    @ŮÉÓ#ŢÉÓ +   notificationCallbacks   getInterface   Ci   nsILoadContext   loadGroup    ˙˙˙˙          ex        ˙˙˙˙          ex         7   '           "       $      ˙˙˙˙   _      ˙˙˙˙   ˙˙˙˙   !   NH_loadFromCache               Ą       š      ;                                D   	   aUrl   aCharset   aCallback   channel C"  Š'              ;    ¸   
T  @@@;   5   ¸   
:  @;   5   5   ;   5   5   	:    QV   ;   5   5   ;   5   5   ;   5   5   0   
Q;    ¸   
V   A    : QĎŃ&ĎĎ Č  ÓĐÖĚĘ $ 3	    NetUtil   newChannel2   Services+   scriptSecurityManager%   getSystemPrincipal   Ci   nsILoadInfo   SEC_NORMAL!   nsIContentPolicy   TYPE_OTHER   loadFlags   nsIRequest   LOAD_FROM_CACHE#   nsICachingChannel)   LOAD_ONLY_FROM_CACHE?   LOAD_BYPASS_LOCAL_CACHE_IF_BUSY   asyncFetch2   ˙˙˙˙   %   NH_loadFromCache/<Ĺ               w       š      .                                       aInputStream   aStatusCode   aRequest   aChannel   contentCharset   m%  Ł'  %      	      ;    ¸   
T :        @: QT ¸   
;   5   :    QV   5   D   Q     Q   A¸   
T  V  : : QĎ
Ë
 .ÔČŮŐ
˙˙˙öG    components   isSuccessCode   QueryInterface   Ci   nsIChannel   contentCharset1   readAndConvertFromStream   ˙˙˙˙   )   NH_parseCookieHeader               <       š                                            aHeader   cookies   result ë(  `*  ?            T  ¸    
=   :    QZ      QV   ¸   
    : Q   Ď
ČĘÔ L    split   ;   forEach   ˙˙˙˙   -   NH_parseCookieHeader/<Á               Ą       š      ;                                       aCookie   equal	   name   value Q)  F*  D            T  ¸    
=   :    QT  ¸   
>V   :   QT  ¸   
V   ?:   Q      ¸   
Y   ;   â   V  ¸   
:  : ]   ;   â   V  ¸   
:  : ]   : Q
ĎČ
ĎČ
ĐČÖŐ˙˙˙÷ČŐ˙˙˙÷Č H3    indexOf   =   substr	   push   unescape	   trim	   name   value   ˙˙˙˙   /   NH_parseSetCookieHeader               <       š                                           aHeader   rawCookies   cookies ,  ­0  Y            T  ¸    
     :    QZ      QV   ¸   
    : Q   ĎČĘÔ     split   forEach   ˙˙˙˙   3   NH_parseSetCookieHeader/<Á               â       š      B                                      aCookie   equal	   name   parts   value   cookie ,  0  ^            T  ¸    
=   :    Q;   â   T  ¸   
>V   : ¸   
:  :   QT  ¸   
V   ?: ¸   
=   :   Q;   â   V  ¸   
:  ¸   
:  :   QY   V  ]   V  ]   	   QV  ¸   

    : Q    ¸   
   : Q
ĎČ
ŮÍ˙˙˙÷Č
Đ×
ŐÍ˙˙˙÷Č

ÉĎÔ ~Ú    indexOf   =   unescape   substr	   trim   split   ;   shift	   name   value   forEach	   push   ˙˙˙˙   7   NH_parseSetCookieHeader/</<Á              v      š      Y                                   aPart	   part Š-  m0  f      
      T  ¸    
:     QV   ¸   
:  =            C0   Q  9V   ¸   
:  =            C0   Q  
V   ¸   
=   : ×˙   ď  QV   ¸   
=   :   QV  >V  >7¸   
:  9QV  >7=   D   QV  >7=   	   "      V  >7V  ?79Q   yV  >7=   
   hV  ?V  ?7¸   
     =   : 9Q      ;   V  ?7R ¸   
:  0   
Q     Qv  QČ    ČĘČËÉ
ÖËÉ
ÖĐËĐČ
Ň
ŢÝĚKÜ
ÖŘÔ n* 	   trim   toLowerCase   secure   httponly   httpOnly   indexOf   =   split	   path   domain   expires   replace    	   Date   toISOString    ˙˙˙˙      	   pair                     ex       -          O          é   ˙˙˙˙   b            \r\n|\n|\r       ˙˙˙˙   #   NH_isTextMimeType                      š      L                                      aMimeType   category ĺ9  ž<  Ň            T  ¸    
=   : >   C     ¸   
T  :    CA5   T  7D   Q@   QV   x=   y   F=   y   <=   y   2=   y   (=   y   =   	y   =   
y   
z   CBĎ ÜĎÖlPu
u
u
u
u
u
uĘ â    indexOf   text/	   test   mimeCategoryMap   txt   js	   json   css	   html   svg   xmlc   ^application\/\w+(?:[\.-]\w+)*(?:\+xml|[-+]json)$       ˙˙˙˙   )   NH_parseSecurityInfo              ě      š   0   ÷                         :            securityInfo   httpActivity	   info   wpl!   NSSErrorsService   SSLStatus  ăC  ŚS              Y   =    ]      QT      
V   T  ¸   
;   5   : QT  ¸   
;   5   : Q;   5     Q;   5   ¸   	
;   5   
:   QT  5     QV  ¸   
T  5   :      QT  5     QV  V  5      V   =   0   Q   V  V  5      2V   =   0   QV   A¸   
V  : 0   Q   PV  V  5      V   Č   1;   ¸   
=   =   V  =   : QV   ČV   V  5   0   QV   A¸   
V  5   : 0   QV   A¸    
V  5   !: 0   QT 5   "   Ć  Q  Q  Q;   5   #¸   	
;   5   $:   QT 5   %   ;   5   &5   '   >  QT 5   "  QV   V  ¸   )
V  5   *V  V  : 0   (QV   V  ¸   )
V  5   ,V  V  : 0   +QČ   5;   ¸   
=   =   -: QV   B0   (QV   B0   +QČ   &V   =   .0   QV   T  5   /0   /QV   
Ď :ŘŘ
Ď
ŃĘ >Č
ÍÓ ËÍÎÔÎ-ĎĐÎÎĚŃĐ QÓŐÉŐÉČ  Á×ŃĘ aČ hČÚÍŕÉŕĎŃ pËŃĎŇ    insecure   state   QueryInterface   Ci1   nsITransportSecurityInfo)   nsISSLStatusProvider-   nsIWebProgressListener   CcC   @mozilla.org/nss_errors_service;1   getService'   nsINSSErrorsService   SSLStatus   isNSSErrorCode   errorCode   securityState   STATE_IS_SECURE   secure   STATE_IS_BROKEN	   weak   weaknessReasons+   getReasonsForWeakness#   STATE_IS_INSECURE   DevToolsUtils   reportException?   NetworkHelper.parseSecurityInfo   Security state ?    has no known STATE_IS_* flags.   cipherSuite   cipherName   protocolVersion-   formatSecurityProtocol	   cert)   parseCertificateInfo   serverCert   hostname1   @mozilla.org/ssservice;1-   nsISiteSecurityService   private#   nsISocketProvider)   NO_PERMANENT_STORAGE	   hsts   isSecureHost   HEADER_HSTS	   hpkp   HEADER_HPKPy   Could not get HSTS/HPKP status as hostname is not available.   broken   errorMessage    ˙˙˙˙         state                    sss      flags    	   host        Ž     ˙˙˙˙˙˙˙˙@         ˙˙˙˙q            Ń  š          ˙˙˙˙   3   NH_parseCertifificateInfo               ˙       š      _                                    	   cert	   info ďU  Y              Y      QT     ŇV   Y   T  5   ]   T  5   ]   T  5   ]   0    QV   Y   T  5   ]   T  5   ]   T  5   ]   0   QV   Y   T  5   	5   
]   T  5   	5   ]   0   	QV   Y   T  5   ]   T  5   ]   0   Q   ;   ¸   
=   =   : QV   Ę  ÍÉÍÍÓÉÍÍÓÉŇŘÉÍŘŃ Ś    subject   commonName   organization%   organizationalUnit   issuer!   issuerCommonName%   issuerOrganization-   issuerOrganizationUnit!   organizationUnit   validity#   notBeforeLocalDay   start!   notAfterLocalDay   end   fingerprint   sha1Fingerprint	   sha1#   sha256Fingerprint   sha256   DevToolsUtils   reportExceptionE   NetworkHelper.parseCertificateInfoe   Secure connection established without certificate.   ˙˙˙˙   3   NH_formatSecurityProtocol                        š      E                                       version Z  z\  ˇ            T  x;    5   5   y   F;    5   5   y   8;    5   5   y   *;    5   5   y   z   =   =   =   =   	;   
¸   
=   =   T  =   : Q=   k  ĎpĎpĎpĎpĘ šŃĎ Â    Ci   nsISSLStatus   SSL_VERSION_3   TLS_VERSION_1   TLS_VERSION_1_1   TLS_VERSION_1_2   SSLv3   TLSv1   TLSv1.1   TLSv1.2   DevToolsUtils   reportExceptionI   NetworkHelper.formatSecurityProtocol!   protocolVersion     is unknown.   Unknown   ˙˙˙˙   1   NH_getReasonsForWeakness              Î       š      G                                     state   wpl   reasons g^  za  Ô      	      ;    5      QZ     QT  V   5      Ł  Q  QT  V   5     QT  V   5     QV     V  ¸   
=   : QV     V  ¸   
=   : QV   E   QV      #;   ¸   	
=   
=   T  : QČV  
Ď ÚÉÍŃ
Ň
ŇÔÔ
ËŃÉ č í    Ci-   nsIWebProgressListener   STATE_IS_BROKEN!   STATE_USES_SSL_3-   STATE_USES_WEAK_CRYPTO	   push   sslv3   cipher   DevToolsUtils   reportExceptionG   NetworkHelper.getReasonsForWeaknessq   STATE_IS_BROKEN without a known reason. Full state was:     ˙˙˙˙         isSSLV3       isCipher        ,      ˙˙˙˙    ˙˙˙˙       	   prop         :      ů  E   ˙˙˙˙