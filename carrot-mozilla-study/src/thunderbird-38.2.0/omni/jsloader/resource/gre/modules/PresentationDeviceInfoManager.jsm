çżsš                8     š      y                                 0     resource://gre/modules/PresentationDeviceInfoManager.jsm     4         	                    ;   5       Q5      Q5      QQAf    0   Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =   : QAY   ;   ¸   
Z  ;   5   `   ;   5   `  : ]      ]      ]      ]      ]      ]   0   QA5   ¸   
:  Q	Ę		ę5Ě:Ő3Ő1ŇCŇ<Đ'Î)ÎČ Ę'Ę<ĘAĘPĐfhŃ*    Cc   Ci   Cu   Components   classes   interfaces   utils!   EXPORTED_SYMBOLS   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils/   defineLazyServiceGetter3   presentationDeviceManagerU   @mozilla.org/presentation-device/manager;19   nsIPresentationDeviceManager	   ppmmU   @mozilla.org/parentprocessmessagemanager;1+   nsIMessageBroadcaster;   PresentationDeviceInfoService   generateQI%   nsIMessageListener   nsIObserver   QueryInterface	   init   getAll   forceDiscovery   observe   receiveMessage                  ;   PresentationDeviceInfoService                  ˙˙˙˙      log                        š                                            	   aMsg Ţ  '                    ˙˙˙˙   O   this.PresentationDeviceInfoService.initÁ                   \       š   
                                        ß  ß                ;    â    =   : Q;   ¸   
=   A: Q;   ¸   
=   A: Q;   5   ¸   
A=   	B: QÓÖÖÜD    log	   init	   ppmm%   addMessageListenerI   PresentationDeviceInfoManager:GetAllY   PresentationDeviceInfoManager:ForceDiscovery   Services   obs   addObserver5   presentation-device-change   ˙˙˙˙   S   this.PresentationDeviceInfoService.getAllÁ              *      š      Y                                    aData   aMm   deviceArray  ô    '       
      ;    â    =   : Q;   ¸   
:  ¸   
;   5   :    QV       +T  =   0   QT ¸   	
=   
T  : QT  Z   0   Q>  Q    ~m  QV   ¸   
V  ;   5   :   QT  5   ¸   
Y   V  5   ]   V  5   ]   V  5   ]   : QČV  #?W  QQăV  V   Ů   ˙˙˙wČT ¸   	
=   T  : QÓĚÜÎÖ0Í&~p  $
Ů	ČÔÎÎÎ31,Î˙˙˙čÖ9ÖN    log   getAll3   presentationDeviceManager'   getAvailableDevices   QueryInterface   Ci   nsIArray   error   DataError!   sendAsyncMessagec   PresentationDeviceInfoManager:GetAll:Result:Error   devices   queryElementAt+   nsIPresentationDevice	   push   id	   name	   type   length]   PresentationDeviceInfoManager:GetAll:Result:Ok    ˙˙˙˙         i                     device                  y      ˙˙˙˙      i          ˙˙˙˙   c   this.PresentationDeviceInfoService.forceDiscoveryÁ                   $       š                                           Ą  ô  <             ;    â    =   : Q;   ¸   
:  QÓĐ+    log   forceDiscovery3   presentationDeviceManager   ˙˙˙˙   U   this.PresentationDeviceInfoService.observeÁ                      š      *                                       aSubject   aTopic   aData   device	   data   
	  x
  A             ;    â    =   T : QT  ¸   
;   5   :    QY   T ]   Y   V   5   ]   V   5   ]   V   5   ]   ]     Q;   	¸   

=   V  : Q×DÔ	ČČÎÎŘMŮQ    log   observe:    QueryInterface   Ci+   nsIPresentationDevice	   type   id	   name   deviceInfo	   ppmm+   broadcastAsyncMessageY   PresentationDeviceInfoManager:OnDeviceChange   ˙˙˙˙   c   this.PresentationDeviceInfoService.receiveMessageÁ               Ď       š      D                                       aMessage   msg   mm 
    P       	      T  5    ¸   
=   :     );   â   =   T  5   =   : Q@T  5   D   QY      QT  5      Q;   â   =   	T  5   : QT  5   x=   
y   =   y   #z   /A¸   
V   V  : Q   A¸   
:  Q   ÔŘRTWŘÍZÜČhDu
`uĘ\ÔX`ĚXd    target!   assertPermission5   presentation-device-manage   debug!   receive message 	   name    from a content process with no 'presentation-device-manage' privileges.	   data   log!   receiveMessage: I   PresentationDeviceInfoManager:GetAllY   PresentationDeviceInfoManager:ForceDiscovery   getAll   forceDiscovery