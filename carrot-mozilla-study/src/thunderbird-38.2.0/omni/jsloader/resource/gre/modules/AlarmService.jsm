çżsš                ř     š   ,   ú                                 0     resource://gre/modules/AlarmService.jsm     RG                                    B    Q;   5      Q5      Q5      Q5   	   QQ;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : QAf   0   Q;   ¸   
A=      : Q;   ¸   
A=   =   =   : Q;   ¸   
A=      : Q;   ¸   
A=      : QAY      ]   @]      a      b      ]      	]      
]      ]      ]       ]   !   ]   "   ]   #   ]   $   ]   %   ]   &   ]   '   ]   (   ]   )   ]   *   ]   +0   Q;   ¸   
:  QĘ
	
öDŐ3Ő1Ő0Ě)ŰŇ@Ű"$Ű'4ĘVĘZĘgĘ  ˘Ę  ĂĘ  ÚĘ  äĘ  đĘ  úĘ Ę Ę CĘ YĘĘ Ę ÄĘ ńĘ Đ +Đ    DEBUG   Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmE   resource://gre/modules/AlarmDB.jsm!   EXPORTED_SYMBOLS   XPCOMUtils!   defineLazyGetter   appsService/   defineLazyServiceGetter	   ppmmU   @mozilla.org/parentprocessmessagemanager;13   nsIMessageListenerManager   messenger'   powerManagerService   AlarmService	   init   _alarm   _currentAlarm   receiveMessage#   _sendAsyncMessage%   _removeAlarmFromDb   _publicAlarm%   _fireSystemMessage)   _notifyAlarmObserver   _onAlarmFired%   _onTimezoneChanged)   _restoreAlarmsFromDb   _getAlarmTime-   _sortAlarmByTimeStamps%   _debugCurrentAlarm   add   remove   observe   uninit   ˙˙˙˙      debug                 (       š      	                                    	   aStr   Y  
             ;       ";   â   =   T  =   : QÝ%    DEBUG	   dump   AlarmService:    
                     AlarmService                  ˙˙˙˙                               š      	                                     ¤  ó               ;    5   ¸   
;   5   : Ű?    Cc5   @mozilla.org/AppsService;1   getService   Ci   nsIAppsService   ˙˙˙˙                               š                                           ň  d               ;    5   ¸   
;   5   : ŃĘ 	5    CcM   @mozilla.org/system-message-internal;1   getService   Ci3   nsISystemMessagesInternal   ˙˙˙˙                               š                                           Š    $             ;    5   ¸   
;   5   : ŃĘ%	2    CcQ   @mozilla.org/power/powermanagerservice;1   getService   Ci-   nsIPowerManagerService   ˙˙˙˙   	   init                 4      š      a                          *             alarmHalServiceë  Ţ
  5             ;    â    =   : Q;   5   ¸   
A=   B: Q;   5   ¸   
A=   B: QA;   R  ¸   	
:  0   QA;   5   ¸   
;   5   : 0   
   QV   ¸   
A5   ¸   
A: : QV   ¸   
A5   ¸   
A: : QAf    0   QA5   ¸   
   ¸   
A: : QA;   R  0   QA5   ¸   
:  QAZ   0   QA¸   
:  QÓ8ÜÜ;Ó=ŰÍ@Ů ˙˙˙ŕŮ%˙˙˙ŰDĚGŮIG$˙˙˙ŕLÉŃPËRĚ    debug   init()   Services   obs   addObserver/   profile-change-teardown%   webapps-clear-data-   _currentTimezoneOffset	   Date#   getTimezoneOffset!   _alarmHalService   Cc=   @mozilla.org/alarmHalService;1   getService   Ci%   nsIAlarmHalService   setAlarmFiredCb   _onAlarmFired	   bind)   setTimezoneChangedCb%   _onTimezoneChanged   _messages   forEach   _db   AlarmDB	   init   _alarmQueue)   _restoreAlarmsFromDb                  )   AlarmsManager:GetAll   #   AlarmsManager:Add   )   AlarmsManager:Remove                  ˙˙˙˙      addMessage                        š                                             msgName Ç	  
  G             ;    ¸   
T  A: QÔ' 	   ppmm%   addMessageListener   ˙˙˙˙   ?   this.AlarmService._currentAlarmÁ                          š                                           B  b  W             A5        _alarm   ˙˙˙˙   ?   this.AlarmService._currentAlarmÁ               m       š      %                                       aAlarm   alarmTimeInMs   ns w  Ś  Z             AT  0    QT      A¸   
T  :    QV   XčźB@  QA5   ¸   
V   XčV  :     ;   5   5   pĘ`ËČŇŮĐ*    _alarm   _getAlarmTime!   _alarmHalService   setAlarm   Components   results!   NS_ERROR_FAILURE   ˙˙˙˙      receiveMessage               :      š   #   Á                         D            aMessage	   json   mm Ň  !  g             ;    â    =   T  5   : QT  5      QA5   ¸   
T  5   : ×˙   nT  5   ¸   
=   :     ;    â    =   	: Q@T  5   ¸   

   5   :     ;    â    =   : Q@T  5   ¸   
;   5   :    QT  5      Qx=   y   =   y   T=   y  z  !A5   ¸   
   5      ¸   
A:    ¸   
A: : Q   öY      5   ]      5   ]      5   ]      5   ]      5   ]      QA¸   
V   @A5   ¸   
A   =   C   5   : A5   ¸   
A   =   B   5   : : Q   ?A¸   
   5      5   : Q   ;    5   !5   "p   ČÜÎmŐ
ÔÓs
ŮÓyŮÉ{Îh Uu
  u
  uĘ|×Ě  ~  Ě  }  XĎĎĎĎÔÍă
ă
    XŕXĐX    debug%   receiveMessage(): 	   name	   json   _messages   indexOf   target!   assertPermission   alarms{   Got message from a child process with no 'alarms' permission.!   assertContainApp   manifestURL   Got message from a child process containing illegal manifest URL.   QueryInterface   Ci!   nsIMessageSender)   AlarmsManager:GetAll#   AlarmsManager:Add)   AlarmsManager:Remove   _db   getAll	   bind	   date   ignoreTimezone	   data   pageURL   add#   _sendAsyncMessage   Add   requestId   remove   id   Components   results1   NS_ERROR_NOT_IMPLEMENTED    ˙˙˙˙          newAlarm                 getAllSuccessCb                 K       š                                 
            aAlarms -    ~       	      ;    â    =   ;   ¸   
T  : : QA¸   
   =   C   5   T  : QĎĎäD    debug[   Callback after getting alarms from database: 	   JSON   stringify#   _sendAsyncMessage   GetAll   requestId             getAllErrorCb                 %       š                                             aErrorMsg 3            	      A¸    
   =   B   5   T  : QäG #   _sendAsyncMessage   GetAll   requestId    Ţ   [  ˙˙˙˙   ˙˙˙˙   #   _sendAsyncMessage               3      š      z                                       aMessageManager   aMessageName   aSuccess   aRequestId   aData	   json     S  	  ˘             ;    â    =   : QT      (;    â    =   : Q;   5   5   p@   QT x=   y   =   y   Kz   T    Y   T ]   T ]   	   Y   T ]   T ]   
W   Q   [T    Y   T ]   T ]      Y   T ]   T ]   
W   Q   ;   5   5   p   T  ¸   
=   T =   T    =      
=   V   : QÓÓĐk  ąu
  łuĘ  ­ČÍČÍXČÍČÍXĐXÓÉ
Ő  ž+    debug'   _sendAsyncMessage();   Invalid message manager: null   Components   results!   NS_ERROR_FAILURE   Add   GetAll   requestId   id   errorMsg   alarms1   NS_ERROR_NOT_IMPLEMENTED!   sendAsyncMessage   AlarmsManager:   :Return:   OK   KO   ˙˙˙˙   %   _removeAlarmFromDb                 E       š      &                                      aId   aManifestURL!   aRemoveSuccessCb   =  ˘  Ă             ;    â    =   : QT         U QA5   ¸   
T  T T    : QÓÉ  ĎÖ  Ď    debug)   _removeAlarmFromDb()   _db   remove   ˙˙˙˙      removeSuccessCb                          š                                             Ä  Ę             ;    â    =   : QÓ,    debugE   Remove alarm from DB successfully.   ˙˙˙˙      removeErrorCb                        š                                             aErrorMsg 0    Đ             ;    5   5   pĐ2    Components   results1   NS_ERROR_NOT_IMPLEMENTED   ˙˙˙˙      _publicAlarm               X       š                                             aAlarm   alarm   ­  Ú             Y   T  5    ]    T  5   ]   T  5      =      
=   ]   T  5   ]      QV   
ÍÍČ
ÔŇ    id	   date   ignoreTimezone   honorTimezone   respectTimezone	   data   ˙˙˙˙   %   _fireSystemMessage                      š      2                                       aAlarm   manifestURI   pageURI á  ]  ä       
      ;    â    =   ;   ¸   
T  : : Q;   5   ¸   
T  5   @@:    Q;   5   ¸   
T  5   @@:   Q;   	¸   

=   A¸   
T  : V  V   : QŢ ˙˙˙ŕŰČŰ
ČŃË  ę'    debug+   Fire system message: 	   JSON   stringify   Services   io   newURI   manifestURL   pageURL   messenger   sendMessage   alarm   _publicAlarm   ˙˙˙˙   )   _notifyAlarmObserver                 e       š                                  
            aAlarm      đ             ;    â    =   : QT  5      A¸   
T  : Q   5T  5   Ĺ=   H   !T  ¸   
A¸   
T  : : QÓČÔĎŐ˙˙˙ě/    debug-   _notifyAlarmObserver()   manifestURL%   _fireSystemMessage   alarmFiredCb   function   _publicAlarm   ˙˙˙˙      _onAlarmFired                	      š      \                                     alarmQueue°   ×#  ú       	      ;    â    =   : QA5      7A¸   
A5   5   @: QA¸   
A5   : QA@0   QA5      Q   m  Q  QV   ¸   
:    QA¸   
V  :   QV  ;   	¸   

:     0A¸   
V  5   @: QA¸   
V  : Q   AV  0   QČ   ČăV   Ů   >˙˙˙iA¸   
:  QÓŘŇČË(  "Í
ËČ
ĚČĐ+ÖŐËI Ň Ě    debug   _onAlarmFired()   _currentAlarm%   _removeAlarmFromDb   id)   _notifyAlarmObserver   _alarmQueue   shift   _getAlarmTime	   Date   now   length%   _debugCurrentAlarm    ˙˙˙˙         nextAlarm       nextAlarmTime        `          c      ˙˙˙˙˙˙˙˙ä             ˙˙˙˙   %   _onTimezoneChanged                 *       š                                             aTimezoneOffset $  $              ;    â    =   : QAT  0   QA¸   
:  QÓĘĚ    debug)   _onTimezoneChanged()-   _currentTimezoneOffset)   _restoreAlarmsFromDb   ˙˙˙˙   )   _restoreAlarmsFromDb                   ;       š      +                                    Ň$  |)              ;    â    =   : QA5   ¸   
@    ¸   
A:    : QÓÎĚ = " > ! @	    debug-   _restoreAlarmsFromDb()   _db   getAll	   bind   ˙˙˙˙      getAllSuccessCb                ˇ       š      X                                      aAlarms   alarmQueue 5%  ý(  "            ;    â    =   ;   ¸   
T  : : QA5      Q   >0   QA@0   QT  ¸   
    ¸   
A: : Q   Ů      <   ¸   	
A5   
¸   
A: : QA   ¸   
:  0   QA¸   
:  QĎĎ #ĚĚČÖ 4 -!˙˙˙ç 7Ę
Ú˙˙˙đ
ÍÉĚ    debug[   Callback after getting alarms from database: 	   JSON   stringify   _alarmQueue   length   _currentAlarm   forEach	   bind	   sort-   _sortAlarmByTimeStamps   shift%   _debugCurrentAlarm   ˙˙˙˙      addAlarm                 e       š                                             aAlarm ţ&  ô'  -            A¸    
T  : ;   ¸   
:     "      ¸   
T  : Q   )A¸   
T  5   @: QA¸   
T  : QËĎÝŐĎ"    _getAlarmTime	   Date   now	   push%   _removeAlarmFromDb   id)   _notifyAlarmObserver   ˙˙˙˙      getAllErrorCb                        š                                             aErrorMsg &)  v)  >            ;    5   5   pĐ2    Components   results1   NS_ERROR_NOT_IMPLEMENTED   ˙˙˙˙      _getAlarmTime                      š      ,                                       aAlarm   alarmTime Ś)  Ý,  C               QT  5    ;   r   !T  5    ¸   
:  W   Q   %;   T  5    R ¸   
:  W   QT  5      "V   A5   T  5   Xę`W   QV   ÎĎÍÎŇ RČÓx 	   date	   Date   getTime   ignoreTimezone-   _currentTimezoneOffset   timezoneOffset   ˙˙˙˙   -   _sortAlarmByTimeStamps                        š                                             aAlarm1   aAlarm2  -  w-  Y            A¸    
T  : A¸    
T : ËÎ    _getAlarmTime   ˙˙˙˙   %   _debugCurrentAlarm                   S       š                                           Ť-  5.  ]      	      ;    â    =   ;   ¸   
A5   : : Q;    â    =   ;   ¸   
A5   : : Qá˙˙˙ćá˙˙˙č:    debug   Current alarm: 	   JSON   stringify   _currentAlarm   Alarm queue:    _alarmQueue   ˙˙˙˙   +   this.AlarmService.addÁ                 Ő       š      ^                                D      aNewAlarm   aAlarmFiredCb   aSuccessCb   aErrorCb=3  :        	      ;    â    =      5   =   : Q   D   Q       Q   D   Q      Q          =   : Q   5          =   : Q   A5   0   QA5   ¸   	
      ¸   

A:    ¸   

A: : QäÖÖĎËĎŃŇĚ ľ  śĚ ś  ¸    debug	   add(	   date   )   alarm is null%   alarm.date is null   timezoneOffset-   _currentTimezoneOffset   _db   add	   bind   ˙˙˙˙   C   this.AlarmService.add/aSuccessCb<Á                          š                                             Â3  Ç3               +    ˙˙˙˙   ?   this.AlarmService.add/aErrorCb<Á                          š                                             ě3  ń3               '    ˙˙˙˙      addSuccessCb               3      š      m                           &            aNewId   alarmQueue   aNewAlarmTime!   currentAlarmTime 5  ):        
      ;    â    =   : Q   T  0   Q      0   QA5   @   ,A   0   QA¸   
:  Q   T  : QA5      QA¸   
   :   QA¸   
A5   :   QV  V     AV   ¸   
A5   : QA   0   QA¸   
:  Q   T  : QV   ¸   	
   : QV   ¸   

A5   ¸   
A: : QA¸   
:  Q   T  : QÓÎĐČ
Ě
Ě
Í
 ĽËÍČÎČÉ
Ő
Ě
Ě
Í
ÔŮ˙˙˙đĚÍ    debugQ   Callback after adding alarm in database.   id   alarmFiredCb   _currentAlarm%   _debugCurrentAlarm   _alarmQueue   _getAlarmTime   unshift	   push	   sort-   _sortAlarmByTimeStamps	   bind   ˙˙˙˙      addErrorCb                        š                                              aErrorMsg O:  :  ś               T  : QÍ    ˙˙˙˙   1   this.AlarmService.removeÁ                 R       š      &                          
      D      aAlarmId   aManifestURL­;  A  Ä      	      ;    â    =      =      =   : QA¸   
          ¸   
A: : QëŇĚ î Č Ç î    debug   remove(   ,    )%   _removeAlarmFromDb	   bind   ˙˙˙˙      removeSuccessCb                =      š      }                                     alarmQueueX<  
A  Č            ;    â    =   : QA5       ;    â    =   : QA5      QA5   5      D   QA5   5         >  Q    `mV   V  75      E   QV   V  75         V   ¸   
V  ?: Q   (V  #?W  QQăV  V   Ů   ˙˙˙ČA¸   	
:  QV   Ů      (AV   ¸   

:  0   QA¸   	
:  QA@0   QA¸   	
:  QÓ
Ó
 ÓË×Ń&`Rp ×ÚÔÔH ×1Î Ü ×Ö ß
Ě
 ĺÉ
ĚÉ
Ě
ČĚ    debugY   Callback after removing alarm from database.   _currentAlarm   No alarms set.   _alarmQueue   id   manifestURL   splice   length%   _debugCurrentAlarm   shift    ˙˙˙˙         i        x   p       m   |   ˙˙˙˙   ˙˙˙˙   3   this.AlarmService.observeÁ                      š      }                                     aSubject   aTopic   aData   1A  E  ń      
      ;    â    =   T : QT Ć       Q   Qx=   y   =   y   z   ŘA¸   
:  Q   ÇT  ¸   
;   5   :    QV       ;    â    =   : QČÇV   5   	   
ČÇ;   
¸   
V   5   :    Q       ;    â    =   : QČÇA5   ¸   
      ¸   
A:    : Q   ČÇ×Őh  íu
uĘ őĚXÔ
Č
Ó
É
ŐÉ
Ó
ŇĚ    X    debug   observe(): /   profile-change-teardown%   webapps-clear-data   uninit   QueryInterface   CiK   mozIApplicationClearPrivateDataParamsi   Error! Fail to remove alarms for an uninstalled app.   browserOnly   appsService/   getManifestURLByLocalId   appId   _db   getAll	   bind    ˙˙˙˙          params       manifestURL                getAllSuccessCb                        š                                            aAlarms QD  ěD              T  ¸    
    A: QĎ     forEach   ˙˙˙˙      removeAlarm                        š                                             aAlarm D  ŘD              A¸    
T  5      : QŮ$    remove   id             getAllErrorCb                        š                                             aErrorMsg E  qE              ;    5   5   pĐ2    Components   results1   NS_ERROR_NOT_IMPLEMENTED    !   ů   ˙˙˙˙˙˙˙˙          ˙˙˙˙Ś          ˙˙˙˙ç             ˙˙˙˙      uninit                   Ł       š      :                                    ¨E  9G              ;    â    =   : Q;   5   ¸   
A=   : Q;   5   ¸   
A=   : QA5   ¸   
    ¸   	
A: : Qn   
@1   
QA5      A5   ¸   
:  QA@0   QA@0   QÓŰŰŮ ˙˙˙éĚŃČČ    debug   uninit()   Services   obs   removeObserver/   profile-change-teardown%   webapps-clear-data   _messages   forEach	   bind	   ppmm   _db   close!   _alarmHalService   ˙˙˙˙      uninit/<Á                        š                                             aMsgName hF  ŹF              ;    ¸   
T  A: QÔ+ 	   ppmm+   removeMessageListener