ç¿s¹                     ¹       ¢                         +       0     resource://gre/modules/services-common/bagheeraclient.js     D!         	                   Af    0    Q;   5      Q5      Q5      QQ;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : QA   0   Q;   ¸   
;   5   : Q;   ;   ¸   
Y   ;   5   Â: 0   QA   0   Q;   ;   ¸   
Y   ;   5   5   ;   5   5   ;   5   5   ]   ¼à]        ]      ]      ]      ]      ]   : 0   QÊ/	Ìê5Õ0Õ1Õ,Õ0Õ1#Ì')Ú5/46ÖË6É8CÌPRÖ[ÏÐÕ_ÉaÊ  Ê  ÛÊ  íÊ  úÊRÉ  !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Components   classes   interfaces   utils   importE   resource://gre/modules/Promise.jsmG   resource://gre/modules/Services.jsm=   resource://gre/modules/Log.jsmE   resource://services-common/rest.jsG   resource://services-common/utils.js7   BagheeraClientRequestResult   Object   freeze   prototype   BagheeraRequest   RESTRequest   BagheeraClient   nsIRequest#   LOAD_BYPASS_CACHE   INHIBIT_CACHING   LOAD_ANONYMOUS   _loadFlags)   DEFAULT_TIMEOUT_MSEC%   _RE_URI_IDENTIFIER   uploadJSON   deleteDocument   _submitURI   _onComplete                     BagheeraClient   7   BagheeraClientRequestResult                  ÿÿÿÿ   7   BagheeraClientRequestResult                          ¹                                            k  Ç  #             AB0    QAB0   QA@0   QÈÈÈ !   transportSuccess   serverSuccess   request   ÿÿÿÿ      BagheeraRequest                 P       ¹   
                                          uri T  å  /             ;    ¸   
AT  l QA;   5   ¸   
=   : 0   QA5   ;   5   5   	0   QÔ2×ÉÛ"    RESTRequest	   call	   _log   Log   repository   getLogger/   Services.BagheeraClient   level   Level   Debug   ÿÿÿÿ      BagheeraClient                        ¹      +                                       baseURI <  [  C             T      ;    =   R pA;   5   ¸   
=   : 0   QA5   ;   5   5   	0   QAT  0   
QT  ¸   
=   :     A5   
=   0   
QËH×ÉÛKÊMÏÌx    ErrorC   baseURI argument must be defined.	   _log   Log   repository   getLogger/   Services.BagheeraClient   level   Level   Debug   baseURI   endsWith   /   ÿÿÿÿ      uploadJSON                    ¹   9   #                       M            namespace   id   payload   options   uri	   data   request   deleteIDs   deferred   result    Ë                 T H   Y   U QT      ;    =   R pT     ;    =   R pT     ;    =   R pT E   QT '=      ;    =   T 'R pA¸   
T  T :    QT   QT '=      ;   ¸   
T : W  QV  '=   	   ;    =   
V  'R pA5   ¸   
=   V   : Q;   V   R   QV  A5   0   QV  A5   0   Q=   T q   ;    =   R p  QT 5   E   QT 5   Ù   >   cT 5   W  QA5   ¸   
=   V  ¸   
=   : : QV  ¸   
=   V  ¸   
=   : : Q;   ¸   
:    Q;    ¸   !
V  : W  Q;    ¸   "
V  =   #=   $: W  QT 5   %     Q;   &5   '¸   (
T 5   %:   QV  ¸   )
V  Ù   : QÈ   B  Qv  QA5   ¸   *
=   +;    ¸   ,
V  : : QÈ    V  ¸   
=   -=   .: QA5   ¸   
=   /V  Ù   : Q;   0R    QV  T  0   1QV  T 0   2QV  V     V  ¸   3
>:    @0   QV  A5   5¸   6
AV  V  V  : 0   4QV  ¸   7
V  : QV  5   8ÎËËËÉÊË   ÎÈÈÊÏÈËË/ÿÿÿ×ÛÊ
ÈÐÐÉËÝÍâ!ÿÿÿßà)ÿÿÿ×ÌÈ  µÐÈÚÈÈAÙÈÞÌÒÐ  ¼Ë  ÂÙà	ÈÍÍÈÑÏÞÉÓÊ    ErrorG   namespace argument must be defined.9   id argument must be defined.C   payload argument must be defined.   objecty   Unexpected type for options argument. Expected object. Got:    _submitURI	   JSON   stringify   string5   Unknown type for payload: 	   _log	   info%   Uploading data to    BagheeraRequest   loadFlags   _loadFlags   timeout)   DEFAULT_TIMEOUT_MSEC   deleteID]   API has changed, use (array) deleteIDs instead   deleteIDs   length   debug   Will delete 	   join   ,    setHeader'   X-Obsolete-Document   ,   Promise   defer   CommonUtils   encodeUTF8   convertString   uncompressed   deflate'   telemetryCompressed   Services   telemetry!   getHistogramById   add	   warnq   Unable to record telemetry for compressed payload size:    exceptionStr   Content-TypeI   application/json+zlib; charset=utf-8+   Request body length: 7   BagheeraClientRequestResult   namespace   id   slice   onComplete   _onComplete	   bind	   post   promise    ÿÿÿÿ         h        ÿÿÿÿ         ex         <  E       =  ?   ÿÿÿÿ     6   ÿÿÿÿ   ÿÿÿÿ      deleteDocument               Å       ¹      A                                       namespace   id   uri   request   result   deferred  Ç  ¦  Û             A¸    
T  T :    Q;   V   R   QV  A5   0   QV  A5   0   Q;   R    QV  T  0   QV  T 0   Q;   	¸   

:    QV  A5   ¸   
AV  V  V  : 0   QV  ¸   
:  QV  5   ÎÈÊ
ÈÐÐ	ÈÍÍÌÈÞÉÏÊ    _submitURI   BagheeraRequest   loadFlags   _loadFlags   timeout)   DEFAULT_TIMEOUT_MSEC7   BagheeraClientRequestResult   namespace   id   Promise   defer   onComplete   _onComplete	   bind   delete   promise   ÿÿÿÿ      _submitURI                 t       ¹      ,                                       namespace   id  Ê  O  í             A5    ¸   
T  :     ;   =   T  R pA5    ¸   
T :     ;   =   T R pA5   =   T  =   T ÐË  ïÐÏÛ; %   _RE_URI_IDENTIFIER	   test   Errork   Illegal namespace name. Must be alphanumeric + [_-]: _   Illegal id value. Must be alphanumeric + [_-]:    baseURI   1.0/submit/   /   ÿÿÿÿ      _onComplete               ú       ¹      S                                       request   deferred   result   error   response    u  =!  ú       	      T T  0    QT    KA5   ¸   
=   ;   ¸   
T : : QT B0   QT ¸   
T : QT C0   QT  5      QV   5   	F   $   È   É      T C0   
Q   OT B0   
QA5   ¸   
=   V   5   	: QA5   ¸   
=   V   5   : QT ¸   
T : QÌÒÏ  þÊÑÊÍÉ`nÕÊXÊààÑ    request	   _log	   info=   Transport failure on request:    CommonUtils   exceptionStr!   transportSuccess   resolve   response   status   serverSuccessC   Received unexpected status code:    debug   Response body: 	   body!   ^[a-zA-Z0-9_-]+$    