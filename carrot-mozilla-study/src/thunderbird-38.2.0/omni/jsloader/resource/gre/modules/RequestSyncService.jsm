ç¿s¹                ¦  <   ¹   ]         )                   %       0     resource://gre/modules/RequestSyncService.jsm     "i                                    	   
               ;   5       Q5      Q5      Q5      QQ?   	Q=      
Q×d   Q¼ÔÀ   Q=      Q=      Q=      Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
f   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=   =   =    : Q;   ¸   
A=   !=   "=   #: Q;   ¸   
A=   $=   %=   &: Q;   ¸   
A=   '=   (=   ): QAY   ;   +5   ,ÂZ   ]   -f   ]   .B]   /Z   ]   0Y   ]   1B]   2@]   3Z   ]   4Y   ]   5Y   ]   6   ]   7   ]   8   ]   9   ]   :   ]   ;   ]   <   	]   =   
]   >   ]   ?   ]   @   ]   A   ]   B   ]   C   ]   D   ]   E   ]   F   ]   G   ]   H   ]   I   ]   J   ]   K   ]   L   ]   M   ]   N   ]   O   ]   P   ]   Q   ]   R   ]   S    ]   T   !]   U   "]   V   #]   W   $]   X   %]   Y   &]   Z   ']   [0   *Q;   *¸   7
:  QAf   (0   \QÊ		öB	ËÈÊËËËÕ8Õ3Õ1Õ)Ò5!Ò!#;%Ò%'<)Ò)+@-Ò-/?1Ë4É6Ê>ÉAÊCEÉHÊÊLÊpÊ  Ê  Ê  ËÊ  ÑÊ  ØÊ  çÊ  øÊ Ê Ê YÊ rÊ ªÊ ÉÊ ÛÊ ìÊ ûÊ ,Ê UÊ _Ê qÊ Ê ÞÊ þÊ Ê Ê 'Ê ,Ê 9Ê LÊ [Ê zÊ ÊÊ Ê Ð ¥ÐÌ    Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   RSYNCDB_VERSION   RSYNCDB_NAME   requestSync%   RSYNC_MIN_INTERVAL/   RSYNC_OPERATION_TIMEOUT'   RSYNC_STATE_ENABLED   enabled)   RSYNC_STATE_DISABLED   disabled)   RSYNC_STATE_WIFIONLY   wifiOnly   importU   resource://gre/modules/IndexedDBHelper.jsmK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm-   importGlobalProperties   XPCOMUtils/   defineLazyServiceGetter   appsService5   @mozilla.org/AppsService;1   nsIAppsService	   cpmmS   @mozilla.org/childprocessmessagemanager;1)   nsISyncMessageSender	   ppmmU   @mozilla.org/parentprocessmessagemanager;1+   nsIMessageBroadcaster   systemMessengerM   @mozilla.org/system-message-internal;13   nsISystemMessagesInternal   secManI   @mozilla.org/scriptsecuritymanager;11   nsIScriptSecurityManager%   RequestSyncService   IndexedDBHelper   prototype   children   _messages#   _pendingOperation!   _pendingMessages   _registrations   _wifi   _activeTask   _queuedTasks   _timers!   _pendingRequests	   init   shutdown   observe   clearData   upgradeSchema   principalToKey   addRegistration%   removeRegistration5   removeRegistrationInternal'   removeTaskFromQueue   receiveMessage5   validateRegistrationParams   register   unregister   registrations   registration)   managerRegistrations!   managerSetPolicy   managerRunTask/   createPartialTaskObject)   createFullTaskObject   scheduleTimer   timeout%   operationCompleted   processNextTask%   hasPendingMessages!   updateObjectInDB/   pendingOperationStarted)   pendingOperationDone   dbTxn'   forEachRegistration!   wifiStateChanged   createTimer   hasTimer   removeTimer'   storePendingRequest)   stealPendingRequests!   EXPORTED_SYMBOLS   ÿÿÿÿ      debug                        ¹                                               s 5  o  	                                    indexedDB                        
         )   RequestSync:Register   -   RequestSync:Unregister   3   RequestSync:Registrations   1   RequestSync:Registration   A   RequestSyncManager:Registrations   9   RequestSyncManager:SetPolicy   5   RequestSyncManager:RunTask                  ÿÿÿÿ   9   this.RequestSyncService.initÁ                  Ó       ¹      C                                    	   self	    L             ;    â    =   : QA5   ¸   
    ¸   
A: : Q;   5   ¸   
A=   B: Q;   5   ¸   
A=   	B: Q;   5   ¸   
A=   
B: QA¸   
=   ;   Z  ;   `   : QA   QA¸   
=            : QÓOÙQOÿÿÿèSÜÜÜWÖ3ÉÿÿÿÍ]Ògj^l    debug	   init   _messages   forEach	   bind   Services   obs   addObserver   xpcom-shutdown%   webapps-clear-data%   wifi-state-changed   initDBHelper   requestSync   RSYNCDB_VERSION   RSYNCDB_NAME   dbTxn   readonly   ÿÿÿÿ   =   this.RequestSyncService.init/<Á                        ¹                                             msgName ½	  ü	  O             ;    ¸   
T  A: QÔ' 	   ppmm%   addMessageListener   ÿÿÿÿ   =   this.RequestSyncService.init/<Á                        ¹      	                                      aStore ÿ  ä  ^             T  ¸    
:      0   QØe    openCursor   onsuccess   ÿÿÿÿ                   I       ¹                                             event   cursor 8  Þ  _             T  5    5      QV      2      ¸   
V   5   : QV   ¸   
:  QÒ
Þ
Ï    target   result   addRegistration   value   continue   ÿÿÿÿ   =   this.RequestSyncService.init/<Á                          ¹                                           ò     g             ;    â    =   : QÓ    debug'   initialization done   ÿÿÿÿ   =   this.RequestSyncService.init/<Á                          ¹                                           .    j             ;    â    =   : QÓR 	   dump   ERROR!! RequestSyncService - Failed to retrieve data from the database.
   ÿÿÿÿ   A   this.RequestSyncService.shutdownÁ                  ª       ¹      4                                    	   selfÔ  3  p             ;    â    =   : QA5   ¸   
    ¸   
A: : Q;   5   ¸   
A=   : Q;   5   ¸   
A=   	: Q;   5   ¸   
A=   
: QA¸   
:  QA   QA¸   
   : QÓsÙusÿÿÿèwÛÛÛ{Ì~Ñ    debug   shutdown   _messages   forEach	   bind   Services   obs   removeObserver   xpcom-shutdown%   webapps-clear-data%   wifi-state-changed   close'   forEachRegistration   ÿÿÿÿ   E   this.RequestSyncService.shutdown/<Á                        ¹                                             msgName   W  s             ;    ¸   
T  A: QÔ* 	   ppmm+   removeMessageListener   ÿÿÿÿ   E   this.RequestSyncService.shutdown/<Á               H       ¹                                 	         	   aObj   key ®  -                     ¸    
T  5   :    Q      ¸   
T  5   5   V   : Q
ÙÈæ5    principalToKey   principal5   removeRegistrationInternal	   data	   task   ÿÿÿÿ   ?   this.RequestSyncService.observeÁ                        ¹   
   @                           
            aSubject   aTopic   aData   I  ë               ;    â    =   : QT x=   y   =   y   %=   y   /z   DA¸   
:  Q   OA¸   
T  : Q   ;A¸   
T  =   : Q   !;    â    =   	T : Q   Óku
u
uÊ  ÌXÏXÕX×X    debug   observe   xpcom-shutdown%   webapps-clear-data%   wifi-state-changed   shutdown   clearData!   wifiStateChanged   enabled-   Wrong observer topic:    ÿÿÿÿ   C   this.RequestSyncService.clearDataÁ              F      ¹      n                                    aData   params   partialKey   dbKeys D                 ;    â    =   : QT      T  ¸   
;   5   :    QV       V   5   =   V   5   =     QZ      QA5   K  Q   mW  V  ¸   	
V  : >   
   _A5   V  7K  Q   9mW  A5   V  7V  75   
   QA¸   
V  V  : QãQLMÿÿÿÇQNÈãQLMÿÿÿ~QNÈ   Ù   >   A¸   
=            : QÓÔÈ  «äÊÏ0  ÊÏ
@Ô0>ÊÛîÌÒ  Ã  ¾  Ç    debug   clearData   QueryInterface   CiK   mozIApplicationClearPrivateDataParams   appId   |   browserOnly   _registrations   indexOf   dbKey5   removeRegistrationInternal   length   dbTxn   readwrite    ÿÿÿÿ         key                  	   task       ÿÿÿÿ   G   this.RequestSyncService.clearData/<Á                S       ¹      ,                                    aStore     ¾             >   Q    /mT  ¸    
      V   7: QV   #?W   QãV         Ù   ÿÿÿÀÈ&/#E  ¿Ý  ¿)Ì  À  ¿Ü!    delete   length    ÿÿÿÿ          i           E          Q   ÿÿÿÿ   ÿÿÿÿ   G   this.RequestSyncService.clearData/<Á                          ¹                                             D  Ã             ;    â    =   : QÓ    debug'   ClearData completed   ÿÿÿÿ   G   this.RequestSyncService.clearData/<Á                          ¹                                           N  y  Å             ;    â    =   : QÓ    debug!   ClearData failed            Ä   ?       ~      ÿÿÿÿ   º   K          ÿÿÿÿ   K   this.RequestSyncService.upgradeSchemaÁ                 2       ¹                                             aTransaction   aDb   aOldVersion   aNewVersion    É  Y  Ë             ;    â    =   : QT ¸   
;   Y   C]   : QÓÔ&ÿÿÿÚ=    debug   updateSchema#   createObjectStore   RSYNCDB_NAME   autoIncrement   ÿÿÿÿ   M   this.RequestSyncService.principalToKeyÁ                 (       ¹                                             aPrincipal »  @  Ñ             T  5    =   T  5   =   T  5   ÎÏÊ    appId   |%   isInBrowserElement   origin   ÿÿÿÿ   O   this.RequestSyncService.addRegistrationÁ               z       ¹      "                                    	   aObj   key ­  ³  Ø             ;    â    =   : QA¸   
T  5   :    QV   A5   q    A5   V   Y   9QA¸   
T  : QA5   V   7T  5   5   T  9QÓÐÈÌÑÏÝ0    debug   addRegistration   principalToKey   principal   _registrations   scheduleTimer	   data	   task   ÿÿÿÿ   U   this.RequestSyncService.removeRegistrationÁ                 w       ¹      *                                       aTaskName	   aKey   aPrincipal   ~    ç             ;    â    =   : QT A5   q D   QT  A5   T 7q    BT ¸   
A5   T 7T  75   :     BA¸   
T  T : QCÓÑÏÝÒ    debug%   removeRegistration   _registrations   equals   principal5   removeRegistrationInternal   ÿÿÿÿ   e   this.RequestSyncService.removeRegistrationInternalÁ              °       ¹      6                                    aTaskName	   aKey   obj  8  Þ  ø             ;    â    =   : QA5   T 7T  7   QV   5      V   5   ¸   
:  QA¸   
V   : QV   B0   QA5   T 7T  /QA5   T 7K  Q   mW   NÈãQLMÿÿÿîQNÈA5   T /QÓÓÉÔÐËÏÓ0ÊÕË!    debug5   removeRegistrationInternal   _registrations   timer   cancel'   removeTaskFromQueue   active    ÿÿÿÿ         key                    $   ÿÿÿÿÿÿÿÿ             ÿÿÿÿ   W   this.RequestSyncService.removeTaskFromQueueÁ               ;       ¹                                          	   aObj   pos    ~              A5    ¸   
T  :    QV   ×ÿ   A5    ¸   
V   ?: QÐÈÖ!    _queuedTasks   indexOf   splice   ÿÿÿÿ   M   this.RequestSyncService.receiveMessageÁ              F      ¹       Á                        4            aMessage   uri   principal #   q&              ;    â    =   : QA5      A5   ¸   
T  : QT  5       ;   5   ¸   
T  5   5   	@@:    Q  Q;   
¸   
V   T  5   5   T  5   5   : W  Q     Qv  QÈÈ    V      T  5   x=   y   F=   y   a=   y   |=   y   =   y   ²=   y   Í=   y   èz  A¸   
T  5   T  5   V  : Q  A¸   
T  5   T  5   V  : Q   ßA¸   
T  5   T  5   V  : Q   ºA¸   
T  5   T  5   V  : Q   A¸   
T  5   T  5   V  : Q   pA¸   
T  5   T  5   V  : Q   KA¸   
T  5   T  5   V  : Q   &;    â    =   T  5   : Q   ÓÔÉàÈ3ÐÚ +ÍÌËÈh pu
u
u
u
u
u
uÊ 6àXàXàXàXàXàXàXÜX    debug   receiveMessage#   _pendingOperation!   _pendingMessages	   push   principal   Services   io   newURI   origin   secMan/   getAppCodebasePrincipal   appId%   isInBrowserElement	   name)   RequestSync:Register-   RequestSync:Unregister3   RequestSync:Registrations1   RequestSync:RegistrationA   RequestSyncManager:Registrations9   RequestSyncManager:SetPolicy5   RequestSyncManager:RunTask   register   target	   data   unregister   registrations   registration)   managerRegistrations!   managerSetPolicy   managerRunTask   Wrong message:     ÿÿÿÿ         e         s   7       «      ÿÿÿÿÿÿÿÿ¹             ÿÿÿÿ   e   this.RequestSyncService.validateRegistrationParamsÁ                     ¹      7                                    aParams   minInterval ±&  (  Y            T  @H   B=    T  q D   QT  5    Ù   >   B;      Q;   5   ¸   
=   : W   Q     Qv  QÈ    =   T  q D   QT  5   V      BCÐÏÊÖÍÓÐÍ    wakeUpPage   length%   RSYNC_MIN_INTERVAL   Services   prefs   getIntPref7   dom.requestSync.minInterval   minInterval    ÿÿÿÿ         e         =   #       a      ÿÿÿÿ   ÿÿÿÿ   A   this.RequestSyncService.registerÁ               Þ      ¹                                2      D      aTarget   aData   aPrincipal   key   dbKey	   data	   self Ë(  /  r      
      ;    â    =   : QA¸   
   5   :     :   ¸   
=   Y      5   ]   =   ]   : QA¸   	
T :    QV   A5   
qE   Q   5   A5   
V   7q   A¸   
   5   V   : Q   5      5   0   Q   5   >0   Q   5   T 0   Q   5   ;   0   Q   5   5         5   ;   0   Q   5   >0   Q   5   =   T 5   =   T 5   =   T 5     QY   T ]   V  ]      5   ]   C]      QA   QA¸   
=             : QÓÒÑ!Ï!Ê vËÈÑÖÚÚÑÓÕÏÕÑÐÏÏÎ	ÈÉÏÌÒ ¢  ¦    debug   register5   validateRegistrationParams   params!   sendAsyncMessage7   RequestSync:Register:Return   requestID   ParamsError   error   principalToKey   _registrations	   task5   removeRegistrationInternal   lastSync   principal   state'   RSYNC_STATE_ENABLED   wifiOnly)   RSYNC_STATE_WIFIONLY-   overwrittenMinInterval   |   appId%   isInBrowserElement   origin   dbKey	   data   active   dbTxn   readwrite   ÿÿÿÿ   E   this.RequestSyncService.register/<Á                 (       ¹                                             aStore À-  ô-              T  ¸    
            5   : Qç    put   dbKey   ÿÿÿÿ   E   this.RequestSyncService.register/<Á                   I       ¹                                 	          .  ¬.                    ¸    
      : Q   ¸   
=   Y      5   ]   : QßÑ!Ï ?    addRegistration!   sendAsyncMessage7   RequestSync:Register:Return   requestID   ÿÿÿÿ   E   this.RequestSyncService.register/<Á                   4       ¹                                           º.  {/  ¢               ¸    
=   Y      5   ]   =   ]   : QÑ!Ï!Ê £; !   sendAsyncMessage7   RequestSync:Register:Return   requestID   IndexDBError   error   ÿÿÿÿ   E   this.RequestSyncService.unregisterÁ               î       ¹      U                                D      aTarget   aData   aPrincipal   key   dbKey	   self ²/  3  ª      
      ;    â    =   : QA¸   
T :    QV   A5   q D   Q   5   A5   V   7q    :   ¸   
=   Y      5   ]   =   ]   	: QA5   V   7   5   75   
   QA¸   
   5   V   T : QA  QA¸   
=             : QÓËÈÒ×Ñ!Ï!Ê °áÝÒ º Å    debug   unregister   principalToKey   _registrations	   task!   sendAsyncMessage;   RequestSync:Unregister:Return   requestID!   UnknownTaskError   error   dbKey%   removeRegistration   dbTxn   readwrite   ÿÿÿÿ   I   this.RequestSyncService.unregister/<Á                        ¹                                             aStore ù1  %2  º            T  ¸    
      : QØ    delete   ÿÿÿÿ   I   this.RequestSyncService.unregister/<Á                   *       ¹                                           32  ½2  ½               ¸    
=   Y      5   ]   : QÑ!Ï ¾? !   sendAsyncMessage;   RequestSync:Unregister:Return   requestID   ÿÿÿÿ   I   this.RequestSyncService.unregister/<Á                   4       ¹                                           Ë2  3  Á               ¸    
=   Y      5   ]   =   ]   : QÑ!Ï!Ê Â; !   sendAsyncMessage;   RequestSync:Unregister:Return   requestID   IndexDBError   error   ÿÿÿÿ   K   this.RequestSyncService.registrationsÁ              È       ¹      G                                    aTarget   aData   aPrincipal   results   key   ê3  ä5  É            ;    â    =   : QZ      QA¸   
T :   QV  A5   q   _A5   V  7K  Q   9mW  V   ¸   
A¸   
A5   V  7V  75   : : QãQLMÿÿÿÇQNÈT  ¸   
=   Y   T 5   	]   	V   ]   
: QÓÉËÈËÔ0>ÊÓÕ ÐÿÿÿóÑ ÕÏÍÉ Õ3    debug   registrations   principalToKey   _registrations	   push/   createPartialTaskObject	   data!   sendAsyncMessageA   RequestSync:Registrations:Return   requestID   results    ÿÿÿÿ         i       X   ?       N   K   ÿÿÿÿ   ÿÿÿÿ   I   this.RequestSyncService.registrationÁ               ®       ¹      =                                       aTarget   aData   aPrincipal   results   key   96  .8  Û      
      ;    â    =   : Q@   QA¸   
T :   QV  A5   qE   QT 5   A5   V  7q   .A¸   
A5   V  7T 5   75   : W   QT  ¸   
=   Y   T 5   	]   	V   ]   
: QÓËÈÑÔÈÙ âÈÏÍÉ æ3    debug   registration   principalToKey   _registrations	   task/   createPartialTaskObject	   data!   sendAsyncMessage?   RequestSync:Registration:Return   requestID   results   ÿÿÿÿ   Y   this.RequestSyncService.managerRegistrationsÁ                e       ¹      +                                      aTarget   aData   aPrincipal   results	   self   |8  :  ì            ;    â    =   : QZ      QA   QA¸   
    : QT  ¸   
=   Y   T 5   ]      ]   : QÓÊÑÏÍÊ õ3    debug)   managerRegistrations'   forEachRegistration!   sendAsyncMessageO   RequestSyncManager:Registrations:Return   requestID   results   ÿÿÿÿ   ]   this.RequestSyncService.managerRegistrations/<Á                 2       ¹                                          	   aObj 9  W9  ñ                  ¸    
      ¸   
T  5   : : Qêÿÿÿó3 	   push)   createFullTaskObject	   data   ÿÿÿÿ   Q   this.RequestSyncService.managerSetPolicyÁ                       ¹   	   :                                D      aTarget   aData   aPrincipal   toSave	   self Q:  y?  û            ;    â    =   : Q@   QA   QA¸   
    : Q       :   ¸   
=   Y      5   ]   =   ]   : QA¸   
      : QÓÑ Ñ!ÏÊ Ö    debug!   managerSetPolicy'   forEachRegistration!   sendAsyncMessageG   RequestSyncManager:SetPolicy:Return   requestID!   UnknownTaskError   error!   updateObjectInDB   ÿÿÿÿ   U   this.RequestSyncService.managerSetPolicy/<Á               6      ¹      F                                     	   aObj   app á:  Ê=               T  5    5      5      T  5   5      5   D   QT  5   5      5      ;   ¸   
T  5   5   :    QV   E   QV   5      5   D   !QV    E   Q   5   =   	   =   
   q   T  5       5   
0   
QT  5       5   0   Q         ;   â   =   : QT        QØÞØ
ÙÈäÛËØØÊÓÎ 	   data	   task   principal%   isInBrowserElement   origin   appsService   getAppByLocalId   appId   manifestURL   -   overwrittenMinInterval   state	   dump   ERROR!! RequestSyncService - SetPolicy matches more than 1 task.
   ÿÿÿÿ   U   this.RequestSyncService.managerSetPolicy/<Á                   I       ¹                                 	          Á>  s?  $                  ¸    
      : Q   ¸   
=   Y      5   ]   : QßÑ!Ï &?    scheduleTimer!   sendAsyncMessageG   RequestSyncManager:SetPolicy:Return   requestID   ÿÿÿÿ   M   this.RequestSyncService.managerRunTaskÁ                       ¹   
   8                                D      aTarget   aData   aPrincipal	   task  «?  ¶C  ,            ;    â    =   : Q@   QA¸   
    : Q       8T  ¸   
=   Y      5   ]   =   ]   : QA¸   
   T     5   : QA¸   	
   : QÓÑ HÏ!ÏÊ IÞÑ    debug   runTask'   forEachRegistration!   sendAsyncMessageC   RequestSyncManager:RunTask:Return   requestID!   UnknownTaskError   error'   storePendingRequest   timeout   ÿÿÿÿ   Q   this.RequestSyncService.managerRunTask/<Á               ö       ¹      8                                    	   aObj   app @  WB  0            T  5    5      5      T  5   5      5   D   QT  5   5      5      ;   ¸   
T  5   5   :    QV   E   QV   5      5   D   !QV    E   Q   5   =   	            ;   
â   
=   : QT        QØÞØ
ÙÈäÛÊÓÎ 	   data	   task   principal%   isInBrowserElement   origin   appsService   getAppByLocalId   appId   manifestURL   	   dump   ERROR!! RequestSyncService - RunTask matches more than 1 task.
   ÿÿÿÿ   _   this.RequestSyncService.createPartialTaskObjectÁ                 b       ¹      !                                    	   aObj OD  _E  U            Y   T  5    ]    T  5   ]   T  5   ]   T  5   ]   T  5   ]   T  5   ]   T  5   ]   	ÍÍÍÍÍÍÎ 	   task   lastSync   oneShot   minInterval   wakeUpPage   wifiOnly	   data   ÿÿÿÿ   Y   this.RequestSyncService.createFullTaskObjectÁ               ¼       ¹      5                                    	   aObj   obj   app E  IG  _            A¸    
T  :    QV   Y   =   ]   T  5   5   ]   T  5   5   ]   0   Q;   ¸   
T  5   5   	:   QV     V   5   V  5   0   QV   T  5   
0   
QV   T  5   0   QV   ËÈÉÊÒØÙÈØÒÒ /   createPartialTaskObject   app      manifestURL   principal   origin%   isInBrowserElement   appsService   getAppByLocalId   appId   state-   overwrittenMinInterval   ÿÿÿÿ   K   this.RequestSyncService.scheduleTimerÁ                        ¹   
   /                                    	   aObj G  $I  q            ;    â    =   : QA¸   
T  : QT  5       T  5   5   ;      T  5   5   ;   E   QA5       A¸   	
T  : QÓÏÉÓÙ3Ï    debug   scheduleTimer   removeTimer   active	   data   state)   RSYNC_STATE_DISABLED)   RSYNC_STATE_WIFIONLY   _wifi   createTimer   ÿÿÿÿ   ?   this.RequestSyncService.timeoutÁ             ´      ¹   +   î                        F         	   aObj   taskCompleted   app   manifestURL   pageURL   timer	   done	   self   timeout   promise :I  S                     Q;    â    =   : QA5      I;    â    =   : QA5   ¸   
T  : ×ÿ   A5   ¸   
T  : Q;   ¸   
T  5   	5   
:    QV       3;   â   =   : QT  B0   QA¸   
T  : Q;   5   ¸   
V   5   @@:   Q;   5   ¸   
T  5   5   @T  5   	5   :   QA¸   
=   V  V  :    A¸   
T  : QA¸   
T  : QAT  0   QV   D   QV      3;   â   =   : QT  B0   QA¸   
T  : Q;   5   ¸   
;   5   :    QB   QA   Q;      Q  Q;   5   !¸   "
=   #:   QV  W  QÈ     Qv  QÈ       ¸   $
   V  ;   5   5   %: Q;    â    =   &: Q;   '¸   (
=   A¸   )
T  5   : V  V  :   QV  ¸   *
      : Q ·Ë ÓÓÐ
ÔÙÈÓÊÏÜÈì
ÈÕÏÏÊËÓÊÏ ³ÛÉ ÃÊ/
ÖÈÏÓÑÓ É ÏÓÑÐ"È ÑÈÐ Õ Û    debug   timeout   _activeTask   queueing tasks   _queuedTasks   indexOf	   push   appsService   getAppByLocalId   principal   appId	   dump   ERROR!! RequestSyncService - Failed to retrieve app data from a principal.
   active!   updateObjectInDB   Services   io   newURI   manifestURL	   data   wakeUpPage   URI%   hasPendingMessages   request-sync   scheduleTimer   removeTimer   ERROR!! RequestSyncService - Failed to create URI for the page or the manifest
   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer/   RSYNC_OPERATION_TIMEOUT   prefs   getIntPref=   dom.requestSync.maxTaskTimeout!   initWithCallback   TYPE_ONE_SHOT!   Sending message.   systemMessenger   sendMessage/   createPartialTaskObject	   then   ÿÿÿÿ      taskCompleted                   f       ¹                                 	          =O  P  ·            ;    â    =   : Q          &C      Q      ¸   
:  Q      ¸   
:  Q@      QÓ
ËÌÕÕÌ    debug_   promise or timeout for task calls taskCompleted%   operationCompleted   cancel    ÿÿÿÿ         tmp        ÿÿÿÿ         e       ÿÿÿÿ   C   this.RequestSyncService.timeout/<Á                          ¹                                           ÕP  9Q  É            ;    â    =   : Q   :  QÓÊ    debuge   Task is taking too much, let's ignore the promise.   ÿÿÿÿ   C   this.RequestSyncService.timeout/<Á                          ¹                                           ~R  ÀR  Õ            ;    â    =   : Q   :  QÓÊ    debug!   promise resolved   ÿÿÿÿ   C   this.RequestSyncService.timeout/<Á                          ¹                                           ÊR  S  Ø            ;    â    =   : Q   :  QÓÊ    debug!   promise rejected     å  3      æ  -   ÿÿÿÿ        ÿÿÿÿ   ÿÿÿÿ   U   this.RequestSyncService.operationCompletedÁ                      ¹      o                                     pendingRequests	   self3S  GW  Þ      
      ;    â    =   : QA5       ;   â   =   : QA5   A5   5   5    0   QA5   5   ;   	R  0   QA¸   

A5   :    Q>  Q    HmV   V  75   ¸   
=   Y   V   V  75   ]   : QV  #?W  QãV  V   Ù   ÿÿÿ­ÈA   QA¸   
A5      : QÓÓ×Ñ!ÉÎÈ&H<X ëÕ%Ó ì ë0Ì î ëÖ ñ× û    debug%   operationCompleted   _activeTask	   dump   ERROR!! RequestSyncService - OperationCompleted called without an active task
   active	   data   oneShot   lastSync	   Date)   stealPendingRequests   target!   sendAsyncMessageC   RequestSyncManager:RunTask:Return   requestID   length!   updateObjectInDB    ÿÿÿÿ         i       ÿÿÿÿ   Y   this.RequestSyncService.operationCompleted/<Á                   Y       ¹                                           V  AW  ò                  5    5   5       )      ¸   
      5    : Q      ¸   
:  Q
ÚäÕ    _activeTask	   data   oneShot   scheduleTimer   processNextTask       X          d   ÿÿÿÿ   ÿÿÿÿ   O   this.RequestSyncService.processNextTaskÁ                 U       ¹                                  	          	   taskeW  *X  þ            ;    â    =   : QA@0   QA5   Ù   >   A5   ¸   
:     QA¸   
V   : QÓÈÍÍÈÐ    debug   processNextTask   _activeTask   _queuedTasks   length   shift   timeout   ÿÿÿÿ   U   this.RequestSyncService.hasPendingMessagesÁ               `       ¹   	   &                                       aMessageName   aManifestURL   aPageURL%   hasPendingMessages   KX  ÙY        	      ;    ¸   
=   Y   T  ]   T 5   ]   T 5   ]   : >7   Q;   â   =   V   : QV   ÑÈÍÍ Ø 	   cpmm   sendSyncMessageO   SystemMessageManager:HasPendingMessages	   type	   spec   pageURL   manifestURL   debug%   Pending messages:    ÿÿÿÿ   Q   this.RequestSyncService.updateObjectInDBÁ                 4       ¹                                       D   	   aObj   aCb"Z  U[              ;    â    =   : QA¸   
=             : QÓÒ "  $    debug!   updateObjectInDB   dbTxn   readwrite   ÿÿÿÿ   U   this.RequestSyncService.updateObjectInDB/<Á                        ¹                                             aStore tZ  ¨Z              T  ¸    
      5   : QÝ    put   dbKey   ÿÿÿÿ   U   this.RequestSyncService.updateObjectInDB/<Á                   (       ¹                                           ¶Z  [                       :  Q;    â    =   : QÊÓ$    debug5   UpdateObjectInDB completed   ÿÿÿÿ   U   this.RequestSyncService.updateObjectInDB/<Á                          ¹                                           [  O[  "            ;    â    =   : QÓ!    debug/   UpdateObjectInDB failed   ÿÿÿÿ   _   this.RequestSyncService.pendingOperationStartedÁ                          ¹                                           {[  Ì[  '            ;    â    =   : QAC0   QÓÈ    debug/   pendingOperationStarted#   _pendingOperation   ÿÿÿÿ   Y   this.RequestSyncService.pendingOperationDoneÁ                   P       ¹      -                          	          ï[  ú\  ,            ;    â    =   : QAB0   Q   "mA¸   
A5   ¸   
:  : QãA5   Ù   ÿÿÿÖÓÈ(/ 2Õÿÿÿì 2Ò9    debug)   pendingOperationDone#   _pendingOperation   receiveMessage!   _pendingMessages   shift   length        /      ÿÿÿÿ   ;   this.RequestSyncService.dbTxnÁ                J       ¹      '                                D      aType   aCb   aSuccessCb   aErrorCb	   self }]  é^  9            ;    â    =   : QA¸   
:  QA   QA¸   
T  ;             : QÓÌÕ ? I    debug   dbTxn/   pendingOperationStarted   newTxn   RSYNCDB_NAME   ÿÿÿÿ   ?   this.RequestSyncService.dbTxn/<Á                        ¹                                           	   aTxn   aStore  ^  G^  ?               T : QÍ    ÿÿÿÿ   ?   this.RequestSyncService.dbTxn/<Á                           ¹                                           U^  ^  B                  ¸    
:  Q   :  QÕÊ )   pendingOperationDone   ÿÿÿÿ   ?   this.RequestSyncService.dbTxn/<Á                           ¹                                           ¤^  ã^  F                  ¸    
:  Q   :  QÕÊ )   pendingOperationDone   ÿÿÿÿ   W   this.RequestSyncService.forEachRegistrationÁ              º       ¹      C                                    aCb	   list _   `  L            Z      QA5    K  Q   TmW  A5    V  7K  Q   )mW  V   ¸   
A5    V  7V  7: QãQLMÿÿÿ×QNÈãQLMÿÿÿ¬QNÈ>  Q    #mT  V   V  7: QV  #?W  QãV  V   Ù   ÿÿÿÒÈÉÏ0YÊÔ0.Êù&#3 VÑ V%Ì W VÖ    _registrations	   push   length    ÿÿÿÿ         key                  	   task        ÿÿÿÿ         i           3         Z      ;   /          f   ÿÿÿÿ   1   ;          z   ?   ÿÿÿÿ   ÿÿÿÿ   Q   this.RequestSyncService.wifiStateChangedÁ               m       ¹      /                                     aEnabled	   self ¿`  Óc  [            ;    â    =   : QAT  0   QA5       0Æ       QA   QA¸   
   : QÈÇÈÇA   QA¸   
   : QÓÊÑ
Ñ jÑ w    debug%   onWifiStateChanged   _wifi'   forEachRegistration    ÿÿÿÿ       	   self             U   this.RequestSyncService.wifiStateChanged/<Á                 W       ¹                                          	   aObj a  b  b            T  5    5   ;   E   Q   ¸   
T  :    +   ¸   
T  : Q   ¸   
T  : Qè7
Ó
Ó 	   data   state)   RSYNC_STATE_WIFIONLY   hasTimer   removeTimer'   removeTaskFromQueue   ÿÿÿÿ   U   this.RequestSyncService.wifiStateChanged/<Á                 j       ¹                                          	   aObj ïb  Íc  o            T  5    E   Q      ¸   
T  :     CT  5   5       ;   â   =   : Q      ¸   
T  : QÎÔÎ
ÓØ    active   hasTimer	   data   wifiOnly	   dumpg   ERROR - Found a disabled task that is not wifiOnly.   scheduleTimer    /   $   ÿÿÿÿÿÿÿÿP             ÿÿÿÿ   G   this.RequestSyncService.createTimerÁ               ®       ¹      +                                D   	   aObj   interval	   selfíc  Õe  z      	      A5       5   ;   5   ¸   
;   5   : 9Q   5   5      Q   5   5   	>      5   5   	W   QA   QA5       5   7¸   

    V   Xè;   5   5   : QëÔÑÔÝÈÏ I    _timers   dbKey   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer	   data   minInterval-   overwrittenMinInterval!   initWithCallback   TYPE_ONE_SHOT   ÿÿÿÿ   K   this.RequestSyncService.createTimer/<Á                          ¹                                           -e  Ge                    ¸    
   : Q;Ú    timeout   ÿÿÿÿ   A   this.RequestSyncService.hasTimerÁ                        ¹                                          	   aObj ìe  !f              T  5    A5   qÐ$    dbKey   _timers   ÿÿÿÿ   G   this.RequestSyncService.removeTimerÁ                 ?       ¹                                 	         	   aObj ;f  Ãf              T  5    A5   q   /A5   T  5    7¸   
:  QA5   T  5    /QÏÚÐ     dbKey   _timers   cancel   ÿÿÿÿ   W   this.RequestSyncService.storePendingRequestÁ                 Y       ¹      !                           	         	   aObj   aTarget   aRequestID   åf  òg              T  5    A5   q    A5   T  5    Z   9QA5   T  5    7¸   
Y   T ]   T ]   : QÐÔÛ)È-È F    dbKey!   _pendingRequests	   push   target   requestID   ÿÿÿÿ   Y   this.RequestSyncService.stealPendingRequestsÁ               D       ¹                                          	   aObj   requests h  äh              T  5    A5   q    
Z   A5   T  5    7   QA5   T  5    /QV   ÐÔÐ    dbKey!   _pendingRequests                                    