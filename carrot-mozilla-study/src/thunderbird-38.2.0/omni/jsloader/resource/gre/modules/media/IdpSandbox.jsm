çżsš                Ő  (   š   %   ő                                 0     resource://gre/modules/media/IdpSandbox.jsm              	                              	   
;   5       Q5      Q5      Q5      QQ;   ¸   	
=   
: Q;   ¸   	
=   : Q;   Y      ]      ]   ;   ¸   
Z  ;   5   `   : ]   0   Q;      0   Q;   Y      ]      ]      ]      ]   ;   ¸   
Z  ;   5   `   : ]   0   Q;      0   Q;      0   Q;      0   Q;   Y      ]      ]      ]       ]   !   ]   "   ]   #0   QAf   0   $QA;   0   Q	Ę	%	Z	s	öŐ1Ő3ĘĘĘ Đ'Î˙˙˙éÎ%),Đ8:ĘĘBĘDĘQĘTĐ'Î˙˙˙éÎZjswyĐ~  Đ    Đ  ŞĘĘĘ  źĘ  ÂĘ  âĘ  ęĐĚ'Ě    Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm#   RedirectHttpsOnly   prototype-   asyncOnChannelRedirect   getInterface   XPCOMUtils   generateQI'   nsIChannelEventSink   QueryInterface   ResourceLoader	   load   onDataAvailable   onStartRequest   onStopRequest#   nsIStreamListener   IdpSandbox   checkDomain   checkProtocol   createIdpUri   isSame   start!   _populateSandbox   _createSandbox	   stop   toString!   EXPORTED_SYMBOLS   ˙˙˙˙   #   RedirectHttpsOnly                          š                                             ˙                      ˙˙˙˙   e   RedirectHttpsOnly.prototype.asyncOnChannelRedirectÁ                 N       š                                 
            oldChannel   newChannel   flags   callback    H  &               T 5    5   =   I   "T ¸   
;   5   : Q   T ¸   
;   5   : QÓÝŘ,    URI   scheme   https1   onRedirectVerifyCallback   Cr   NS_ERROR_ABORT   NS_OK   ˙˙˙˙   Q   RedirectHttpsOnly.prototype.getInterfaceÁ                        š      	                                       iid A  q               A¸    
T  : Ë    QueryInterface   ˙˙˙˙      ResourceLoader                 !       š                                              res   rej  6    %             AT  0    QAT 0   QA=   0   QĘĘĚ    resolve   reject	   data      ˙˙˙˙   '   ResourceLoader.loadÁ                        š                                      D      uriĚ    ,             ;    A    R Ě7    Promise   ˙˙˙˙   +   ResourceLoader.load/<Ĺ                      š      4                                       resolve   reject   listener   ioService   systemPrincipal   ioChannel  é    -             ;    T  T R    Q;   5   ¸   
;   5   :   Q;   5   ¸   
:    QV  ¸   	
   @V  V  >×:   QV  ;   R  0   
QV  ¸   
V   @: QĚČŃĘ/Č1ŃČ3Ő3Č5Ę"ÉÔ$    ResourceLoader   CcC   @mozilla.org/network/io-service;1   getService   Ci   nsIIOService   Services+   scriptSecurityManager%   getSystemPrincipal%   newChannelFromURI2+   notificationCallbacks#   RedirectHttpsOnly   asyncOpen   ˙˙˙˙   Q   ResourceLoader.prototype.onDataAvailableÁ               U       š                                             request   context   input   offset   count   stream     W  2  ;             ;    5   ¸   
;   5   :    QV   ¸   
T : QA5   V   ¸   
T : 0   QŃĘ<Č>ŇŐ{    CcI   @mozilla.org/scriptableinputstream;1   createInstance   Ci1   nsIScriptableInputStream	   init	   data	   read   ˙˙˙˙   O   ResourceLoader.prototype.onStartRequestÁ                        š                                               request   context  P  e  B              /    ˙˙˙˙   M   ResourceLoader.prototype.onStopRequestÁ               ą       š      >                                       request   context   status   statusCode     ,
  D             ;    ¸   
T :    T  ¸   
;   5   : 5   W   QV   X ČH   .A¸   
Y   T  ]   A5   ]   : Q   $A¸   	
;   
=   V   R : Q   #A¸   	
;   
=   T R : QĎ{
ÔÍČ)ÍČË˙˙˙ßÉŘ˙˙˙ôÉL×˙˙˙ô1    Components   isSuccessCode   QueryInterface   Ci   nsIHttpChannel   responseStatus   resolve   request	   data   reject   Error=   Non-200 response from server:    Load failed:    ˙˙˙˙   K   ResourceLoader.prototype.getInterfaceÁ                        š      	                                       iid G
  w
  Q             A¸    
T  : Ë    QueryInterface   ˙˙˙˙   +   createLocationFromURI                 %      š      =                               D      uri  Ű  Z             Y      5    ]      5   =   ]      5      5   >   =      5      
=   ]      5   ]      5   ]      5   	¸   

     =   : ]      5   	¸   

    =   : ¸   

    =   : ]      5      =      5      
=   ]      5   ]       ]   ĎŐÖŕĎĎŰ
ČŰÜĘäĎËi 	   spec	   href   scheme   :   protocol	   host	   port      hostname	   path   replace   pathname   search   hasRef   #   ref	   hash   prePath   origin   toString   ˙˙˙˙   A   createLocationFromURI/<.toStringÁ                          š                                           ł  Ô  f                5    Ë 	   spec   [#\?].*       ^[^\?]*       #.*       ˙˙˙˙      IdpSandbox                 8       š                                             domain   protocol  Ó  ^  s             A;   ¸   
T  T D   Q=   : 0    QA@0   QA@0   QŢÉČČ    source   IdpSandbox   createIdpUri   default   active   sandbox   ˙˙˙˙   -   IdpSandbox.checkDomainÁ                 )       š                                             domain   8  y             T   D   QT  '=    I   ;   =   R pĘĘË8    string   Error   Invalid domain for identity provider: must be a non-zero length string   ˙˙˙˙   1   IdpSandbox.checkProtocolÁ               p       š      "                                      protocol   message M                 =       QT   D   QT  '=   I   ;   V   =   R p;   â   T  : ¸   
     :    ;   V   =   R pĘĘĘĐÍŇĐ4 Q   Invalid protocol for identity provider:    string   ErrorA   must be a non-zero length string%   decodeURIComponent   match7   must not include '/' or '\'   [\/\\]       ˙˙˙˙   /   IdpSandbox.createIdpUriÁ              d      š      \                                    domain   protocol   message  O           
      ;    ¸   
T  : Q;    ¸   
T : Q=      Q  Q  Q  Q=   T  =   T   Q;   5   5   ¸   	
;   
5   :   QV  ¸   
V  @@:   QV  5   T  I   ;   V   =   R pV  5   ¸   
=   : >I   ;   V   =   R pV  ČČ   f  Qv  QV  5   Ĺ=   IE   QV  5   ;   5   H   Č    Q;   V   =   R pČ   vp ÓÓĘ  ÍÓŘÖĘ  ČŃČÍĐŐĐÍÍÖáĐÍ    IdpSandbox   checkDomain   checkProtocol1   Invalid IdP parameters:    https:///   /.well-known/idp-proxy/   Components   classesC   @mozilla.org/network/io-service;1   getService   Ci   nsIIOService   newURI   hostPort   Error#   domain is invalid	   path   indexOfU   must produce a /.well-known/idp-proxy/ URI   result   undefined   Cr-   NS_ERROR_MALFORMED_URI1   must produce a valid URI    ˙˙˙˙         wkIdp       ioService       uri        ˙˙˙˙         e         1   Ń       4   É   ˙˙˙˙˙˙˙˙ű               X   ˙˙˙˙˙˙˙˙@           ˙˙˙˙   7   IdpSandbox.prototype.isSameÁ                 (       š      
                                       domain   protocol  ż  '  ­             A5    5   ;   ¸   
T  T : 5   HÝĘ/    source	   spec   IdpSandbox   createIdpUri   ˙˙˙˙   5   IdpSandbox.prototype.startÁ                   @       š                                          ;  ä  ą             A5        1A;   ¸   
A5   : ¸   
A    : 0    QA5    ÓĘ  łÉ    active   ResourceLoader	   load   source	   then   ˙˙˙˙   O   IdpSandbox.prototype.start/this.active<ĺ                        š                                             result   Ŕ  ´             A¸    
T  : Ď    _createSandbox   ˙˙˙˙   K   IdpSandbox.prototype._populateSandboxÁ                 =       š                                             uri Î    ź             A5    ;   ¸   
;   â   T  : A5    Y   C]   : 0   Qß%+  ˝ÉC    sandbox   location   Cu   cloneInto+   createLocationFromURI   cloneFunctions   ˙˙˙˙   G   IdpSandbox.prototype._createSandboxÁ                     š      i                                       result   principal   registrar ś     Â             ;    5   ¸   
T  5   :    QA;   ¸   
V   Y   =   A5   5   	]   
B]   B]   f    ]   : 0   QA5   5     Q;   ¸   
V  :     ;   =   R pA¸   
T  5   5   : Q;   ¸   
T  5   A5   =   T  5   5   5   ?: QV  5       ;   =   R pV  ŃČ  ĂČÖÖĘ  ĆÉ  ĐĐĐË  ×ŮÚŘ  ŮĘË    Services+   scriptSecurityManager3   getChannelResultPrincipal   request   sandbox   Cu   Sandbox	   IdP-   source	   host   sandboxName   wantComponents#   wantExportHelpers)   wantGlobalProperties'   rtcIdentityProvider   isXrayWrapper   Error!   IdP setup failed!   _populateSandbox   URI   evalInSandbox	   data   1.8	   spec   idpc   IdP failed to call rtcIdentityProvider.register()                     indexedDB      XMLHttpRequest      TextEncoder      TextDecoder      URL      URLSearchParams   	   atob   	   btoa   	   Blob      crypto   '   rtcIdentityProvider                  ˙˙˙˙   3   IdpSandbox.prototype.stopÁ                   2       š                                               â             A5       ;   ¸   
A5    : QA@0    QA@0   QÖČČ    sandbox   Cu   nukeSandbox   active   ˙˙˙˙   ;   IdpSandbox.prototype.toStringÁ                          š                                           Ľ  Ę  ę             A5    5   Ě    source	   spec                     IdpSandbox               