çżsš                Ś     š   K         	                          0     resource://gre/modules/SystemMessagePermissionsChecker.jsm     ;,                          ;   5       Q;   5      Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
A=   =   =   : QAf    0   QAY   Y   ]   Y   Z   ]   ]   Y   Z   ]   ]   Y   Z   ]   ]   Y   Z   ]   ]   Y   Z   ]   ]   Y   Z   ]   ]   Y   Z   ]   ]   Y   Z   ]   ]   Y   Z   ]   ]   Y   Z   ]    ]   !Y   ]   "Y   Z   ]   #]   $Y   ]   %Y   ]   &Y   f   ]   ']   (Y   ]   )Y   Z   ]   *]   +Y   Z   ]   ,]   -Y   Z   ]   .]   .Y   Z   ]   .]   /Y   ]   0Y   Z   ]   1]   2Y   Z   ]   1]   3Y   Z   ]   1]   4Y   Z   ]   1]   5Y   Z   ]   ]   6Y   Z   ]   ]   7Y   Z   ]   8]   9Y   Z   ]   :]   ;Y   Z   ]   8]   <Y   Z   ]   =]   >Y   Z   ]   ?]   @Y   Z   ]   ?]   AY   Z   ]   ?]   BY   ]   CY   f   ]   ']   D0   QAY      ]   F   ]   G   ]   H   ]   I   ]   J0   EQĘ	ĐĐ
Ő3Ő1Ő2Ő=Ő9Ő;Ň:Ě:!ĘÎ&Î)Î,Î/Î2Î5Î8Î;Î>ÎAĘÎEĘĘĎJĘÎNÎQÎTÎWĘÎ[Î^ÎaÎdÎgÎjÎmÎpÎsÎvÎyÎ|ÎĘŐ  Ę  śĘ  ˝Ę  ŮĘ 7Đ \    Ci   Components   interfaces   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmI   resource://gre/modules/AppsUtils.jsm_   resource://gre/modules/PermissionsInstaller.jsmW   resource://gre/modules/PermissionsTable.jsm[   resource://gre/modules/PermissionSettings.jsm   XPCOMUtils/   defineLazyServiceGetter!   dataStoreServiceA   @mozilla.org/datastore-service;1'   nsIDataStoreService!   EXPORTED_SYMBOLS;   SystemMessagePermissionsTable   activity   alarms   alarm   telephony1   bluetooth-dialer-command   bluetooth!   bluetooth-cancel9   bluetooth-hid-status-changed3   bluetooth-pairing-request?   bluetooth-opp-transfer-complete;   bluetooth-opp-update-progressS   bluetooth-opp-receiving-file-confirmation9   bluetooth-opp-transfer-start   cellbroadcast-   cellbroadcast-received   connection   wifi-manage   captive-portal)   dummy-system-message   headset-button   settings   icc-stkcommand   media-button'   networkstats-manage%   networkstats-alarm)   desktop-notification   notification	   push   push-register   request-sync   sms)   sms-delivery-success!   sms-read-success   sms-received   sms-sent%   telephony-new-call)   telephony-call-ended!   mobileconnection   ussd-received   wappush!   wappush-received-   cdma-info-rec-received   nfc-hci-events3   nfc-hci-event-transaction   nfc-manager7   nfc-manager-tech-discovered+   nfc-manager-tech-lost+   nfc-manager-send-file/   wifip2p-pairing-request%   first-run-with-sim?   SystemMessagePermissionsChecker7   getSystemMessagePermissions1   isDataStoreSystemMessageA   canDeliverDataStoreSystemMessageE   isSystemMessagePermittedToRegister=   isSystemMessagePermittedToSend                  ?   SystemMessagePermissionsChecker   ;   SystemMessagePermissionsTable                  ˙˙˙˙      debug                        š                                            	   aStr ą  ý                                   	   read      write                                 	   read      write                  ˙˙˙˙   7   getSystemMessagePermissions              L      š      W                                    aSysMsgName   permNames   object 
  e               ;    â    =   T  : Q;   T  7   QV   ;   H   $;    â    =   T  =   : Q@Y     QV   K  Q   ĎmW    Q;   V  7;   H   6;    â    =   V  =   T  =   : Q@Č NČV   V  7  QV   D   Q;   	¸   

V  :     ,;    â    =   V  =   : Q@Č NČV  V  ;   â   V  V  : 9QČăQLM˙˙˙1QNČV  ×ÎĘÝĘÍ0  ÔĐĐčÉ
Î
ËĐŢÉÚÓ    debugY   getSystemMessagePermissions(): aSysMsgName: ;   SystemMessagePermissionsTable   undefined   'Ç   ' is not associated with permissions. Please add them to the SystemMessage[Prefix]PermissionsTable.!   PermissionsTable   ' for '   ' is invalid. Please correct it in the SystemMessage[Prefix]PermissionsTable.   Array   isArrayÍ   ' is not associated with access array. Please correct it in the SystemMessage[Prefix]PermissionsTable.-   appendAccessToPermName    ˙˙˙˙         permName                     access       o   Ő       e   á   ˙˙˙˙   u   Ä           ş         ˙˙˙˙ż                     ˙˙˙˙           ˙˙˙˙   {   this.SystemMessagePermissionsChecker.isDataStoreSystemMessageÁ                        š      	                                       aSysMsgName   c  ś             T  ¸    
=   : >HĎ/    indexOf#   datastore-update-   ˙˙˙˙      this.SystemMessagePermissionsChecker.canDeliverDataStoreSystemMessageÁ              ¤       š      ;                                    aSysMsgName   aManifestURL   store   manifestURLs   enumerate  é  đ  ˝       
      T  ¸    
=   Ů   :    Q;   ¸   
V   :   QV  ¸   
:    Q   Em  QV  ¸   
:  ¸   
;   5   	:   QV  T    	CČČăV  ¸   

:  ˙˙˙°BÔČĐČËČ(U(
ËÜČ  ĂŐ  Ę    substr#   datastore-update-   length!   dataStoreService=   getAppManifestURLsForDataStore   enumerate   getNext   QueryInterface   Ci#   nsISupportsString   hasMoreElements    ˙˙˙˙         manifestURL        L   U       N   >   ˙˙˙˙˙˙˙˙             ˙˙˙˙   E   isSystemMessagePermittedToRegister              =      š   %                          8            aSysMsgName   aManifestURL   aManifest   permNames   appStatus   newManifest   é  %  Ú             ;    â    =   T  =   T =   ;   ¸   
T : : QA¸   
T  : E   QA¸   
T  T :    CA¸   
T  :    QV   @H   B  Q;   	¸   

T : x;   5   5   y   2;   5   5   y   -;   5   5   y   (z   O=   W  Q   T=   W  Q   E=   W  QT 5   =      =   W  Q   ;   =   R p   ;   T T T R   QV   K  Q  ËmW    Q  Q  QV  5    D   QV  5   V  7    @;    â    =   T  =   V  =   T =   : QBČ NČ;   V  7V  7  QV  ;   5   5   E   QV  ;   5   5       @;    â    =   T  =   V  =   T =   : QBČ NČ;   !â   !V  V  5   V  75   ":   QV   V  7  QV  K  Q   |mW    QV  ¸   #
V  V  7:   QV  ×˙   H;    â    =   T  =   V  =   ;   $=   : QBČ NČČ NČČăQLM˙˙˙QNČČăQLM˙˙ţ5QNČCĎĘĘĎ  Ý  âËÉÎËČĎk   ĎpĎpĎpĘ  ďĘXĘXĘÎĘXËX ĎČÍ0 ĐÜ
ĐĎäĘ É
ÔÚÔäĘ É 
ÎÓ Č
ÎÍ0  ĐÔČ
äĚ  

ë (    debugg   isSystemMessagePermittedToRegister(): aSysMsgName: !   , aManifestURL:    , aManifest: 	   JSON   stringify1   isDataStoreSystemMessageA   canDeliverDataStoreSystemMessage7   getSystemMessagePermissions   AppsUtils)   getAppManifestStatus   Ci   nsIPrincipal)   APP_STATUS_CERTIFIED+   APP_STATUS_PRIVILEGED)   APP_STATUS_INSTALLED   certified   privileged   app	   type   trusted   ErrorŻ   SystemMessagePermissionsChecker.jsm: Cannot decide the app's status. Install cancelled.   ManifestHelper   permissions   '-   ' isn't permitted by 'O   '. Please add the permission for app: '   '.!   PermissionsTable)   nsIPermissionManager   PROMPT_ACTION   ALLOW_ACTION#   expandPermissions   access   indexOf   aOrigin    ˙˙˙˙         permName                     permValue    #   expandedPermNames    '   permNamesWithAccess                    idx                    index       g  Ń     ¨         ]  Ý  ˙˙˙˙   o  ž          ×        ˙˙˙˙Ü            Y        ˙˙˙˙^                      Ž  q                                     	   ˙˙˙˙     
      ˙˙˙˙   =   isSystemMessagePermittedToSend              k      š      {                                    aSysMsgName   aPageURL   aManifestURL   permNames   pageURI   ě&  7,  8            ;    â    =   T  =   T =   T : QA¸   
T  : E   QA¸   
T  T :    CA¸   
T  :    QV   @H   B;   5   ¸   	
T @@:   QV   K  Q   šmW    QV   V  7  QV  K  Q   mW  ;   
¸   
V  V  7T V  5   B: =      K;    â    =   T  =   V  =   V  5   =   : QB NČČ NČăQLM˙˙˙QNČČăQLM˙˙˙GQNČCĎĘĘ 9 >ËÉÎËČÖ
ČÍ0  žĐ
ÎÍ0  ĘŐÉ N
äĐ R

é Z    debug_   isSystemMessagePermittedToSend(): aSysMsgName:    , aPageURL: !   , aManifestURL: 1   isDataStoreSystemMessageA   canDeliverDataStoreSystemMessage7   getSystemMessagePermissions   Services   io   newURI1   PermissionSettingsModule   getPermission   prePath   allow   '-   ' isn't permitted by 'O   '. Please add the permission for app: '   '.    ˙˙˙˙         permName                  '   permNamesWithAccess                    idx       §   ż      Ň             Ë   ˙˙˙˙   ­   Ž          Č            F            G        ˙˙˙˙L        