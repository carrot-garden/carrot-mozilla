çżsš                Ź  #   š   '   ľ       	                   %       0     resource://gre/components/PresentationDeviceInfoManager.js              	                              ;   5       Q5      Q5      QQ;   ¸   
=   : Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   :    Q=      Q;   ¸   
A=   =   =   : Q;   Y   ;   5   Â;   ]   ;   ]   ;   ¸   
Z  ;   5   `   ;   5   `  ;   5   `  : ]      ]      ]       ]   !   a   "   b   "   ]   #   ]   $0   QA;   ¸   &
Z  ;   `   : 0   %QĘ	Ę	ę5	Ő3Ő1Ő9Ń$É˙˙˙ýË(Ň7+ĘËĘĘĐ'Î)Î)ÎČ#ĘNĘWĘ`ĘdĘhĘsĐvxŃ5É˙˙˙ßÉA    Cc   Ci   Cu   Components   classes   interfaces   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmW   resource://gre/modules/DOMRequestHelper.jsmC   PRESENTATIONDEVICEINFOMANAGER_CID   IDM   {1bd66bef-f643-4be3-b690-0c656353eafd}Q   PRESENTATIONDEVICEINFOMANAGER_CONTRACTID[   @mozilla.org/presentation-device/deviceInfo;1   XPCOMUtils/   defineLazyServiceGetter	   cpmmS   @mozilla.org/childprocessmessagemanager;1!   nsIMessageSender;   PresentationDeviceInfoManager   prototype'   DOMRequestIpcHelper   classID   contractID   generateQI1   nsISupportsWeakReference   nsIObserver?   nsIDOMGlobalPropertyInitializer   QueryInterface   receiveMessage	   init   uninit   ondevicechange   getAll   forceDiscovery   NSGetFactory)   generateNSGetFactory   ˙˙˙˙      log                        š                                            	   aMsg Ć                      ˙˙˙˙   ;   PresentationDeviceInfoManager                          š                                             ť  Ŕ                *    ˙˙˙˙   m   PresentationDeviceInfoManager.prototype.receiveMessageÁ              §      š                               "         	   aMsg	   data j  	  #             T   D   QT  5        T  5       Q;   â   =   T  5   : QT  5   x=   y   =   y   =   y   őz  <  Q  QY   Y   V   5   ]   V   5   ]   ]   	  QA5   
5   =   ;   ¸   
V  A5   
: R   QA5   ¸   
V  : QČ   łČ  QA¸   
V   5   :   QV      	ČV  ¸   
;   ¸   
V   5   A5   
: : QČ   RČ  QA¸   
V   5   :   QV      	ČV  ¸   
V   5   : QČ   ČĘ	É(Í*ÜČh [u
7u
AuĘ,Ě
ÎŘ3ç5˙˙˙ÓČŐY7ŃČ:
>ć˙˙˙ďYAŃČD
HŘYK 	   data   log   receive aMsg: 	   nameY   PresentationDeviceInfoManager:OnDeviceChange]   PresentationDeviceInfoManager:GetAll:Result:Okc   PresentationDeviceInfoManager:GetAll:Result:Error	   type   deviceInfo   detail   _window   CustomEvent   devicechange   Cu   cloneInto   __DOM_IMPL__   dispatchEvent'   takePromiseResolver   requestId   resolve   devices   reject   error    ˙˙˙˙         detail       event        ˙˙˙˙         resolver        ˙˙˙˙         resolver        q      ˙˙˙˙˙˙˙˙ó             ú   `   ˙˙˙˙˙˙˙˙%        ˙˙˙˙T           [  K   ˙˙˙˙˙˙˙˙        ˙˙˙˙            ˙˙˙˙   Y   PresentationDeviceInfoManager.prototype.initÁ                 r       š      ,                                    	   aWin 	  Ń
  N             ;    â    =   : QA¸   
T  Z  Y   =   ]   C]   `   Y   =   ]   C]   `  Y   =   ]   C]   `  : QÓĎĘ6ĘĘ8ĘĘ;ĘPT    log	   init)   initDOMRequestHelperY   PresentationDeviceInfoManager:OnDeviceChange	   name   weakRef]   PresentationDeviceInfoManager:GetAll:Result:Okc   PresentationDeviceInfoManager:GetAll:Result:Error   ˙˙˙˙   ]   PresentationDeviceInfoManager.prototype.uninitÁ                  ,       š                                          	   selfć
  Ź  W             ;    â    =   : QA   QA¸   
    : QÓ[Ń]    log   uninit-   forEachPromiseResolver   ˙˙˙˙   a   PresentationDeviceInfoManager.prototype.uninit/<Á                 (       š                                          	   aKey <  Ś  [                   ¸    
T  : ¸   
=   : QçU '   takePromiseResolver   rejectW   PresentationDeviceInfoManager got destroyed   ˙˙˙˙   m   PresentationDeviceInfoManager.prototype.ondevicechangeÁ                          š      	                                     Ă    `             A5    ¸   
=   : Ň4    __DOM_IMPL__   getEventHandler   ondevicechange   ˙˙˙˙   m   PresentationDeviceInfoManager.prototype.ondevicechangeÁ                        š                                             aHandler "  u  d             A5    ¸   
=   T  : QŮ>    __DOM_IMPL__   setEventHandler   ondevicechange   ˙˙˙˙   ]   PresentationDeviceInfoManager.prototype.getAllÁ                  ,       š                                          	   self  Ç  h             ;    â    =   : QA   QA¸   
    : ÓÍp    log   getAll   createPromise   ˙˙˙˙   a   PresentationDeviceInfoManager.prototype.getAll/<Á               R       š      !                                       aResolve   aReject   resolverId  Ý  Á  k                   ¸    
Y   T  ]   T ]   :    Q;   ¸   
=   Y   V   ]   : Q
Ö)ČČ˙˙˙ŃČÖÉmo	 )   getPromiseResolverId   resolve   reject	   cpmm!   sendAsyncMessageI   PresentationDeviceInfoManager:GetAll   requestId   ˙˙˙˙   m   PresentationDeviceInfoManager.prototype.forceDiscoveryÁ                          š                                           ä  7  s             ;    ¸   
=   : QŐF 	   cpmm!   sendAsyncMessageY   PresentationDeviceInfoManager:ForceDiscovery