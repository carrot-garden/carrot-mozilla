ç¿s¹               !  n   ¹   o   ¬      )                 :       0     resource://gre/modules/SettingsRequestManager.jsm     3¯                                                            "   $   &   '   )   *   9      B;   5       Q;   5      Q;   5      QAf    0   Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
=   : Qn   B1   Qn   B1   Qn   B1   Qn   ;   5   ¸   
=   : 1   Qn   ;   5   ¸   
=   : 1   Qn   ;   5   ¸   
=   : 1   Q      Qv   QÈ    n   B1   Qn   ;   5   ¸   
=   : 1   Q      Qv   QÈ    =      Q=      Q=      Q=      Q=   !    Q=   #   "Q=   %;      $Q=   %;       &Q=   (;      'Q=   (;       )Q×   *Q;   +¸   ,
A=   -=   .=   /: Q;   +¸   ,
A=   0=   1=   2: Q;   +¸   ,
A=   3=   4=   5: Q;   +¸   ,
A=   6=   7=   8: Qn   9Y      ]   :   ]   ;   ]   <   ]   =   ]   >   	]   ?   
]   @   ]   A1   9Qn   BY   ;   CR  ]   Df   ]   EY   ]   FY   @]   G@]   H]   IZ   ]   JZ   ]   K;   LR  ]   M>]   NY   ]   O>]   PY   ]   Q>]   RY   ]   S   ]   T   ]   U   ]   V   ]   W   ]   X   ]   Y   ]   Z   ]   [   ]   \   ]   ]   ]   ^   ]   _   ]   `   ]   a   ]   b   ]   c   ]   d   ]   e    ]   f   !]   g   "]   h   #]   i   $]   j   %]   k   &]   l   ']   m   (]   n1   BQA;   B0   BQ;   B¸   T
:  QÊ$	(58GÊk	  ÉÐÐÐÌ3Õ3Õ3Õ1Õ9ÌÌÌmÖÉÖÉÖÎÓÌ%ÛÎÓ$&(ËËË ËËËÑÑ5ÑÑ8È:Ò:<?Ò=?<Ò@B7ÒCE9GÊÊSÊVÊYÊ\Ê_ÊbÊeÐGk  ÇÊÈÊÊË  ÚÉÉ  àÈÊÊÊÊ  óÊ Ê :Ê ZÊ ¨Ê ÓÊ éÊ ïÊ ZÊ Ê Ê ÙÊ ûÊ Ê bÊ nÊ Ê Ê Ê µÊ ÀÊ ÑÊ ÜÊ çÊ ðÊ Ð  É ·Ì5Ð    Cc   Components   classes   Ci   interfaces   Cu   utils!   EXPORTED_SYMBOLS   importK   resource://gre/modules/SettingsDB.jsmK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmW   resource://gre/modules/PermissionsTable.jsm   DEBUG   VERBOSE   TRACK   Services   prefs   getBoolPrefi   dom.mozSettings.SettingsRequestManager.debug.enabledm   dom.mozSettings.SettingsRequestManager.verbose.enabled?   dom.mozSettings.trackTasksUsage%   allowForceReadOnlyE   dom.mozSettings.allowForceReadOnly7   kXpcomShutdownObserverTopic   xpcom-shutdown+   kInnerWindowDestroyed-   inner-window-destroyedA   kMozSettingsChangedObserverTopic'   mozsettings-changed'   kSettingsReadSuffix   -read)   kSettingsWriteSuffix   -write1   kSettingsClearPermission   settings-clear5   kAllSettingsReadPermission   settings7   kAllSettingsWritePermission7   kSomeSettingsReadPermission   settings-api9   kSomeSettingsWritePermission!   kSoftLockupDelta   XPCOMUtils/   defineLazyServiceGetter   mrmM   @mozilla.org/memory-reporter-manager;11   nsIMemoryReporterManager	   ppmmU   @mozilla.org/parentprocessmessagemanager;1+   nsIMessageBroadcaster   uuidgen;   @mozilla.org/uuid-generator;1!   nsIUUIDGenerator!   gSettingsService=   @mozilla.org/settingsService;1%   nsISettingsService'   SettingsPermissions   checkPermission)   hasAllReadPermission+   hasAllWritePermission+   hasSomeReadPermission-   hasSomeWritePermission%   hasClearPermission#   hasReadPermission%   hasWritePermission-   SettingsRequestManager   SettingsDB   settingsDB   messages   lockInfo   lockId   lockTs   softLockup#   settingsLockQueue   children   Map-   observerPrincipalCache   totalProcessed   tasksConsumed#   totalSetProcessed!   tasksSetConsumed#   totalGetProcessed!   tasksGetConsumed	   init9   _serializePreservingBinaries   queueTask   queueTaskReturn   taskGet   taskSet   startRunning   queueConsume   finalizeSets   taskClear!   ensureConnection   runTasks   consumeTasks   observe   collectReports%   sendSettingsChange!   broadcastMessage   addObserver   removeObserver   removeLock'   hasLockFinalizeTask)   enqueueForceFinalize;   forceFinalizeChildLocksNonOOP5   forceFinalizeChildLocksOOP!   updateSoftLockup   checkSoftLockup   receiveMessage                  -   SettingsRequestManager                   ÿÿÿÿ          ex        ÿÿÿÿ          ex       ÿÿÿÿ      debug                        ¹                                             s P    $             ;    â    =   T  =   : QÝ0 	   dump9   -*- SettingsRequestManager:    
   ÿÿÿÿ   G   SettingsPermissions.checkPermissionÁ                 h       ¹                                             aPrincipal   aPerm  þ    H             T      ;    ¸   
=   : QBT  5   =   D   0Q;   5   ¸   
T  T : ;   5   	5   
   CBÕMÔ×ÓQ    Cu   reportError³   SettingsPermissions.checkPermission was passed a null principal. Denying all permissions.   origin%   [System Principal]   Services   permsA   testExactPermissionFromPrincipal   Ci)   nsIPermissionManager   ALLOW_ACTION   ÿÿÿÿ   Q   SettingsPermissions.hasAllReadPermissionÁ                        ¹      	                                       aPrincipal ³    S             A¸    
T  ;   : Ð=    checkPermission5   kAllSettingsReadPermission   ÿÿÿÿ   S   SettingsPermissions.hasAllWritePermissionÁ                        ¹      	                                       aPrincipal 1    V             A¸    
T  ;   : Ð>    checkPermission7   kAllSettingsWritePermission   ÿÿÿÿ   S   SettingsPermissions.hasSomeReadPermissionÁ                        ¹      	                                       aPrincipal °    Y             A¸    
T  ;   : Ð>    checkPermission7   kSomeSettingsReadPermission   ÿÿÿÿ   U   SettingsPermissions.hasSomeWritePermissionÁ                        ¹      	                                       aPrincipal 0    \             A¸    
T  ;   : Ð?    checkPermission9   kSomeSettingsWritePermission   ÿÿÿÿ   M   SettingsPermissions.hasClearPermissionÁ                        ¹      	                                       aPrincipal ­    _             A¸    
T  ;   : Ð;    checkPermission1   kSettingsClearPermission   ÿÿÿÿ   K   SettingsPermissions.hasReadPermissionÁ                 3       ¹                                             aPrincipal   aSettingsName  %  Ï  b             A¸    
T  : D   #QA¸   
T  =   T ;   : Ëã)T )   hasAllReadPermission   checkPermission   settings:'   kSettingsReadSuffix   ÿÿÿÿ   M   SettingsPermissions.hasWritePermissionÁ                 3       ¹                                             aPrincipal   aSettingsName  ï    e             A¸    
T  : D   #QA¸   
T  =   T ;   : Ëã*U +   hasAllWritePermission   checkPermission   settings:)   kSettingsWriteSuffix   ÿÿÿÿ   !   SettingsLockInfo                        ¹      Z                                D      aDB   aMsgMgr   aPrincipal   aLockID   aIsServiceLock   aWindowID   aLockStack      º  !  k             Y   T ]    T ]   T ]   T ]   Z   ]   B]   Y   ]   ;   ]   T ]   	B]   
B]   C]   B]   C]   T ]       ]   nÈpÈrÈtÈvÉy|Ê~ÊÈ  ÈË  Æ    lockID   isServiceLock   windowID   lockStack   tasks   consumable   queuedSets   undefined   _transaction   _mm   _failed   finalizing   canClear   hasCleared   forceReadOnly   principal   getObjectStore   ÿÿÿÿ   C   SettingsLockInfo/<.getObjectStoreÁ                }      ¹      ¤                        ;             store   canReadOnly  !         
      ;       ;   â   =   A5   : Q   QA5      ¢A5   ¸   
;   : W   Q     Qv  QV  5   =      4;       %;   â   =   	A5   =   
: Q   ,;      ;   â   =   V  : QV  pÈ    ;   E   QA5     QV  D   Q;   ¸   
A5   :     S;       ;   â   =   A5   : QA   5   ¸   
;   =   : 0   Q   N;       ;   â   =   A5   : QA   5   ¸   
;   =   : 0   QA5      ¸   
A: 0   QA5      ¸   
A: 0   QA5   ¸   
;   : W   Q     Qv  QV  5   =      2;      ;   â   =   A5   : Q@È   ,;      ;   â   =   V  : QV  pÈ    V   Ú

ÒÍÌÏ/åØÌ  ª
ÖÊÒNÚÜÎÚÜÉÒ  ²%ÉÒ  µ"ÉÒÍÌÏ-ÚÉØÌ    VERBOSE   debug1   Getting transaction for    lockID   _transaction   objectStore%   SETTINGSSTORE_NAME	   name#   InvalidStateError1   Current transaction for E    closed, trying to create new one.   DEBUGA   Unexpected exception, throwing: %   allowForceReadOnly   forceReadOnly'   SettingsPermissions-   hasSomeWritePermission   principalA   Making READONLY transaction for    _db   transaction   readonlyC   Making READWRITE transaction for    readwrite   oncomplete	   bind   onabort[   Cannot create objectstore on transaction for     ÿÿÿÿ         e       ÿÿÿÿ      SettingsLockInfo/<.getObjectStore/this._transaction.oncomplete<Á                   +       ¹                                           Ò  -  ²             ;       %;   â   =   A5   =   : Qà9    VERBOSE   debug+   Transaction for lock    lockID    closed   ÿÿÿÿ   y   SettingsLockInfo/<.getObjectStore/this._transaction.onabort<Á                   3       ¹                                           e  Ü  µ             ;       %;   â   =   A5   =   : QAC0   QàÈ    DEBUG   debug+   Transaction for lock    lockID    aborted   _failed    ÿÿÿÿ         e         Ý          6          V   v   ÿÿÿÿ   ý  t   ÿÿÿÿÿÿÿÿC                 
         -   child-process-shutdown      Settings:Get      Settings:Set      Settings:Clear      Settings:Run   #   Settings:Finalize   '   Settings:CreateLock   9   Settings:RegisterForMessages                  ÿÿÿÿ   7   SettingsRequestManager.initÁ                          ¹      ,                                    v&  Û'  è             ;       ;   â   =   : QA5   ¸   
:  QA5   ¸   
    ¸   
A: : Q;   5   ¸   	
A;   
B: Q;   5   ¸   	
A;   B: Q;   ¸   
A: QÓÑÙ  ëÿÿÿéÜÜÑ!    VERBOSE   debug	   init   settingsDB   messages   forEach	   bind   Services   obs   addObserver7   kXpcomShutdownObserverTopic+   kInnerWindowDestroyed   mrm-   registerStrongReporter   ÿÿÿÿ   ;   SettingsRequestManager.init/<Á                        ¹                                             msgName Ú&  '  ë             ;    ¸   
T  A: QÔ' 	   ppmm%   addMessageListener   ÿÿÿÿ   9   _serializePreservingBinaries              b       ¹      ;                                      aObject   needsUUID   binaries   stringified #(  x,  ó       	             Q;    ¸   
@:    Q;   ¸   
T     ¸   
A: :    Q;   ¸   
V      : Ë  ó  ÍÉÛ 	 .ÿÿÿèÈ 
Õ     Object   create	   JSON   stringify	   bind   parse   ÿÿÿÿ      needsUUID                 W       ¹                                             aValue E(  ()  ô             T   D   QT  5        BT  5    5   =   D   (QT  ;   5   rD   QT  ;   5   r
ÊÉíÏ/    constructor	   name	   Date   Ci   nsIDOMFile   nsIDOMBlob   ÿÿÿÿ   S   _serializePreservingBinaries/stringified<Á                l       ¹      "                                     key   value  Þ*  Ê+              A5    ¸   
T : U Q   T :    D   Q;   ¸   
:  ¸   
:     Q      V   T 9QV   ÈÈT ÐÉ
ËÌÒÓÈ    settingsDB   prepareValue   uuidgen   generateUUID   toString    ÿÿÿÿ       	   uuid        )   >   ÿÿÿÿÿÿÿÿe             ÿÿÿÿ   =   _serializePreservingBinaries/<Á                 '       ¹                                              key   value  ,  r,  
            T       q         T 7T ÎÏ    ÿÿÿÿ   A   SettingsRequestManager.queueTaskÁ                     ¹      c                                      aOperation   aData   defer	   lock   promise  ,  R/        	      ;       ;   â   =   T  : QY      QA5   T 5   7   QV       $;   ¸   
Y   =   ]   : T  =   	   !T A¸   
T 5   
: 0   
QT  =   	HD   QT  =   H   V   B0   QV   5   ¸   
Y   T  ]   T ]      ]   : Q;       R   QV  ×ËÔÑÊÿÿÿðÉÓÉØËÕÈÈÊ % +Ë
È 0    VERBOSE   debug   Queueing task:    lockInfo   lockID   Promise   rejectI   Lock already dead, cannot queue task   error   set   settings9   _serializePreservingBinaries   clear   forceReadOnly   tasks	   push   operation	   data   defer   ÿÿÿÿ   S   SettingsRequestManager.queueTask/promise<Á                 '       ¹                                             resolve   reject  â.  7/  +                  T  0    Q      T 0   QÓÓ    resolve   reject   ÿÿÿÿ   M   SettingsRequestManager.queueTaskReturnÁ                     ¹      Y                                D      aTask   aReturnValue	   data	   lock   store   getReq   defer   promiseWrapper1  ²5  :            ;       ;   â   =   : Q   5      QA5   V   5   7  QV  ¸   
V  5   :   QV      [;      (;   â   =   	   5   5   : Q;   
¸   
Y      ]   =   ]   : V  ¸   
>:    QY      Q;   
    R   Q      0   Q      0   QV  ÓÏÕÔÈãÑÊÊÿÿÿã IÌ	ÉËËÈ QÐÐ    VERBOSE   debugQ   Making task queuing transaction request.	   data   lockInfo   lockID   getObjectStore   principal   DEBUG;   Rejecting task queue on lock    Promise   reject	   task/   Cannot get object store   error   get   onsuccess   onerror   ÿÿÿÿ   m   SettingsRequestManager.queueTaskReturn/promiseWrapper<Á                 '       ¹                                             resolve   reject  t4  É4  L                  T  0    Q      T 0   QÓÓ    resolve   reject   ÿÿÿÿ   o   SettingsRequestManager.queueTaskReturn/getReq.onsuccessÁ                        ¹      	                                       event ì4  %5  Q                  ¸    
   : Ö    resolve   ÿÿÿÿ   k   SettingsRequestManager.queueTaskReturn/getReq.onerrorÁ                   >       ¹                                           D5  5  T                  ¸    
Y      ]         5   5   ]   : ÖÊÙÿÿÿå6    reject	   task   error	   name   ÿÿÿÿ   =   SettingsRequestManager.taskGetÁ              Ú      ¹   &   ü                         j      D      aTask	   data	   lock   store   getReq   defer   promiseWrapperÊ5  ¡A  Z            ;       (;   â   =      5   5   : Q   5      QA5      5   7   QV       .;   ¸   
Y      ]   =   	]   
: V   5      K;      ;   â   =   : Q;   ¸   
Y      ]   =   ]   
: V   5      K;      ;   â   =   : Q;   ¸   
Y      ]   =   ]   
: V   B0   Q;   ¸   
V   5      5   :     l;      #;   â   =      5   : QV   C0   Q;   ¸   
Y      ]   =      5   ]   
:    5   V   5   q   ¨  Q;       >;   â   =   V   5      5   7=      5   : QY     QV     5   V   5      5   79QA¸   
   Y      ]   V  ]   : ÈÈ;       #;   â   =      5   : QV   ¸   
V   5   :   QV      [;      (;   â   =      5   5   : Q;   ¸   
Y      ]   =    ]   
: ;       #;   â   =   !   5   : Q   5   =   "H   V  ¸   #
:     V  ¸   #
   5   :    QY      Q;      R   Q      0   $Q      0   %QV  ãÐÖÑÊÊÿÿÿãÉÓÑÊÊÿÿÿãÉÓÑÊÊÿÿÿãËßÞËÑÊÕÿÿÿãÔËù
ÊäÒ$ÊÉÿÿÿÖÞÔÈãÑÊÊÿÿÿãÞÐÐÝÉËËÈ Ð ¢Ð    VERBOSE   debug3   Running Get task on lock 	   data   lockID   lockInfo   Promise   reject	   task3   Lock died, can't finalize   error   _failed   DEBUG_   Lock failed. All subsequent requests will fail.M   Lock failed, all requests now failing.   hasCleared   Lock was used for a clear command. All subsequent requests will fail.   canClear'   SettingsPermissions#   hasReadPermission   principal	   name)   get not allowed for +   No permission to get    queuedSets7   Returning cached set value     for    queueTaskReturn   resultsG   Making get transaction request for    getObjectStore7   Rejecting Get task on lock /   Cannot get object store/   Making get request for    *   mozGetAll   onsuccess   onerror    ÿÿÿÿ         local_results       ÿÿÿÿ   ]   SettingsRequestManager.taskGet/promiseWrapper<Á                 '       ¹                                             resolve   reject  »=  >                    T  0    Q      T 0   QÓÓ    resolve   reject   ÿÿÿÿ   _   SettingsRequestManager.taskGet/getReq.onsuccessÁ              ©      ¹      R                        #            event   results 3>  A              ;       A;   â   =         5   =   T  5   5   Ù   : QT  5   5   Ù   >   8;       .;   â   =         5   =   	: QY      QT  5   5   K  Q   ¼mW    Q  Q  QT  5   5   V  7  QV  5   
  Q;       7;   â   V  =   V  5   =   V  5   : QV  5   ;   I   V  5      V  5     QV   V  V  9QÈãQLMÿÿÿDQNÈ      ¸   
Y      ]   V   ]   : åÓ Ôé
ÊÖ0  ÁÜ×ÎòÏáÜÖÊÉÿÿÿä/    VERBOSE   debug   Request for '	   name9   ' successful. Record count:    target   result   length3   MOZSETTINGS-GET-WARNING: 3    is not in the database.
   settingName   :    userValue   ,    defaultValue   undefined   resolve	   task   results    ÿÿÿÿ         i                     result    	   name       value       ·   Â       ­   Î   ÿÿÿÿ   ¿   ¯          ÿÿÿÿ   [   SettingsRequestManager.taskGet/getReq.onerrorÁ                   >       ¹                                           3A  A  ¢                  ¸    
Y      ]         5   5   ]   : ÖÊÙÿÿÿå6    reject	   task   error	   name    â  ¢   ÿÿÿÿÿÿÿÿ            ÿÿÿÿ   =   SettingsRequestManager.taskSetÁ                    ¹   $                          ?            aTask	   data	   lock	   keys ·A  ¸G  ¨            T  5       QA5   V   5   7  Q;   ¸   
V   5   :   QV      ,;   ¸   
Y   T  ]   =   	]   
: V  5      I;      ;   â   =   : Q;   ¸   
Y   T  ]   =   ]   
: V  5      I;      ;   â   =   : Q;   ¸   
Y   T  ]   =   ]   
: V  B0   QV  Ù   >H   ?;      ;   â   =   : Q;   ¸   
Y   T  ]   : >  Q     m;   ¸   
V  5   V  V  7:     j;      ";   â   =   V  V  7: QV  C0   Q;   ¸   
Y   T  ]   =   V  V  7]   
: ÈV  #?W  QQãV  V  Ù   ÿÿÿUÈ>  Q    ¢m  QV  V  7  Q;      W;   â   =   V  =   ;   ¸    
V   5   V  7: =   !V   5   V  7Å: QV  5   "V  V   5   V  79QÈV  #?W  QQãV  V  Ù   ÿÿÿSÈA¸   #
T  Y   T  ]   : ÍÕÕÈÑÈÊÿÿÿãÉÓÑÈÊÿÿÿãÉÓÑÈÊÿÿÿãËËÓÑÈÿÿÿï&       ° Â
ÞÝËÑÈÔÿÿÿã Â%Î Æ ÂÖ Ê&  ¢    ²
Îô"Ê2Ðÿÿÿ¬Þ Ê%ÎÿÿÿïÖ ÐÐ$Èÿÿÿã+ 	   data   lockInfo   lockID   Object'   getOwnPropertyNames   settings   Promise   reject	   task3   Lock died, can't finalize   error   _failed   DEBUG   debug_   Lock failed. All subsequent requests will fail.u   Lock failed a permissions check, all requests now failing.   hasCleared   Lock was used for a clear command. All subsequent requests will fail.   Lock was used for a clear command. All other requests will fail.   canClear   length5   No keys to change entered!   resolve'   SettingsPermissions%   hasWritePermission   principal'   set not allowed on +   No permission to set    VERBOSE   key:    , val: 	   JSON   stringify   , type:    queuedSets   queueTaskReturn    ÿÿÿÿ         i        ÿÿÿÿ         i                    key        2  ²       u  °       j  ¼   ÿÿÿÿÿÿÿÿ            '  ¾   ÿÿÿÿ   4           ÿÿÿÿ   G   SettingsRequestManager.startRunningÁ               Ê       ¹      2                                       aLockID	   lock ÓG  æJ  Ó            A5    T  7   QV       $;      ;   â   =   : QV   C0   QT  A5   >7D   QA5   Ù   >   7;      ;   â   =   T  : QA¸   	
:  Q   5;      +;   â   =   
T  =   A5   >7: QÏÓËß2×ÑæZ    lockInfo   DEBUG   debugU   Lock no longer alive, cannot start running   consumable#   settingsLockQueue   length   VERBOSE1   Start running tasks for    queueConsume%   Queuing tasks for '    while waiting for    ÿÿÿÿ   G   SettingsRequestManager.queueConsumeÁ                   k       ¹                                           K  ëK  é            A5    Ù   >E   QA5   A5    >775      C;   5   5   ¸   
;   5   	¸   

A: ;   5   5   : Qçè#ÒÿÿÿÝq #   settingsLockQueue   length   lockInfo   consumable   Services   tm   currentThread   dispatch-   SettingsRequestManager   consumeTasks	   bind   Ci   nsIThread   DISPATCH_NORMAL   ÿÿÿÿ   G   SettingsRequestManager.finalizeSetsÁ              ø      ¹   &   S                       u      D      aTask	   data	   lock	   keys   store   checkPromises   finalValues   defer   promiseWrapperL  S\  ï               5       Q;      #;   â   =      5   : QA5      5   7   Q       .;   ¸   
Y      ]   =   	]   
:    C0   Q   5      DA¸   
   5   : Q;   ¸   
Y      ]   =   ]   
:    5      W;      ;   â   =   : QA¸   
   5   : Q;   ¸   
Y      ]   : ;   ¸   
   5   :    Q   Ù   >H   W;      ;   â   =   : QA¸   
   5   : Q;   ¸   
Y      ]   :    ¸   
   5   :    Q       q;      (;   â   =      5    5   : QA¸   
   5   : Q;   ¸   
Y      ]   =   ]   
: Z      QY      Q>  Q   mÆ      Q  Q   Q   Q  V  7   Q;      M;   â   =      =     5      7=     5      7Å: QY      Q;      R   Q  ¸   
   :    Q      ¸   !
A: 0    Q      0   "QV   ¸   #
V  : QÈÇV  #?W  QQãV     Ù   ÿÿþæÈY      Q;      R   Q;   ¸   $
V   : ¸   %
   ¸   !
A:    ¸   !
A: : QV  ÐÞ×ÑÊÊÿÿÿãÌÊÖÑÊÊÿÿÿãÊÓÖÑÊÿÿÿïÖÉÌÓÖÑÊÿÿÿïÖÉãÖÑÊÊÿÿÿã ÉË&    á
ÐòFÒÿÿÿº
Ë
ËÈ "
ÑÉÑ 7 #"É 8ÐÕ %Îÿÿÿï× >ËËÈ Fæ M F$ MÌ M F Q 	   data   VERBOSE   debug5   Finalizing tasks for lock    lockID   lockInfo   Promise   reject	   task3   Lock died, can't finalize   error   finalizing   _failed   removeLocku   Lock failed a permissions check, all requests now failing.   hasClearedW   Clear was called on lock, skipping finalize   resolve   Object'   getOwnPropertyNames   queuedSets   length;   Nothing to finalize. Exiting.   getObjectStore   principal   DEBUG7   Rejecting Set task on lock /   Cannot get object store   key:    , val:    , type:    get   onsuccess	   bind   onerror	   push   all	   then    ÿÿÿÿ         i                     key      checkDefer      checkPromise       checkKeyRequest            c   SettingsRequestManager.finalizeSets/checkPromise<Á                        ¹                                             resolve   reject  S  mS                 T  0    Q   T 0   QÎÎ    resolve   reject         }   SettingsRequestManager.finalizeSets/checkKeyRequest.onsuccess<Á               ü       ¹      I                                      event   userValue   defaultValue   obj   setReq ±T  YX  #              5      7   Q  QT  5   5       9@W  Q;      $;   â   =     =   : Q   T  5   5   5   W  QY     ]   V  ]   V   ]   	  Q    Y   V  ]   V   ]   	9Q  ¸   

V  :    Q       0   Q      0   QÕÎ4
ä
×ÊÉÎÏÉËÐ	ÉÐ 4Ð
    queuedSets   target   result   VERBOSE   debug3   MOZSETTINGS-GET-WARNING: 3    is not in the database.
   defaultValue   settingName   userValue   put   onsuccess   onerror   ÿÿÿÿ      SettingsRequestManager.finalizeSets/checkKeyRequest.onsuccess</setReq.onsuccessÁ                          ¹      !                                     ëV  ÒW  /            ;       ;   â   =   : Q;       C;   â   =     =       7=       7Å: Q  ¸   
Y     ]   : ÓíBÍÿÿÿ¾
ÑÊÿÿÿì"    VERBOSE   debug   Set successful!   key:    , val:    , type:    resolve	   task   ÿÿÿÿ      SettingsRequestManager.finalizeSets/checkKeyRequest.onsuccess</setReq.onerrorÁ                   9       ¹                                           õW  PX  4              ¸    
Y     ]         5   5   ]   : 
ÑÊÙÿÿÿà;    reject	   task   error	   name         w   SettingsRequestManager.finalizeSets/checkKeyRequest.onerrorÁ                 4       ¹                                             event X  óX  8               ¸    
Y     ]      5   5   ]   : ÑÊÔÿÿÿàD    reject	   task   error	   name   ÿÿÿÿ   g   SettingsRequestManager.finalizeSets/promiseWrapper<Á                 '       ¹                                             resolve   reject  eY  ºY  ?                  T  0    Q      T 0   QÓÓ    resolve   reject   ÿÿÿÿ   K   SettingsRequestManager.finalizeSets/<Á                  À       ¹      ?                                  |Z  [  F      	      >   Q    ]mA¸    
      V   7            V   775         5   : QV   #?W   QQãV         Ù   ÿÿÿÈA¸   
      5   : Q      ¸   
Y      ]   : Q&]Os HÿÊ H'Î I HÜÛÖÊÿÿÿñ %   sendSettingsChange   userValue   isServiceLock   length   removeLock   lockID   resolve	   task    ÿÿÿÿ          i           s             ÿÿÿÿ   ÿÿÿÿ   K   SettingsRequestManager.finalizeSets/<Á                 J       ¹                                             ret ±[  '\  M            A¸    
      5   : Q      ¸   
Y      ]   =   ]   : QÛÖÊÊÿÿÿå>    removeLock   lockID   reject	   task/   Set transaction failure   error    v        k  +  ÿÿÿÿ     ð          ÿÿÿÿ   A   SettingsRequestManager.taskClearÁ               @      ¹      ´                          4      D      aTask	   data	   lock   store   defer   promiseWrapper   clearReqÎ]  {c  Z            ;       ;   â   =   : Q   5      QA5   V   5   7  QV  5      K;      ;   â   =   : Q;   	¸   

Y      ]   =   ]   : V  5       V;      ;   â   =   : QV  C0   Q;   	¸   

Y      ]   =   ]   : ;   ¸   
V  5   :     V;      ;   â   =   : QV  C0   Q;   	¸   

Y      ]   =   ]   : V  C0   QV  ¸   
V  5   :   QV      [;      (;   â   =      5   5   : Q;   	¸   

Y      ]   =   ]   : Y      Q;   	    R   QV  ¸   
:    QV     0   QV     0   QV  ÓÏÕÉÓÑÊÊÿÿÿãÊÓËÑÊÊÿÿÿãÕÓËÑÊÊÿÿÿãËÔÈãÑÊÊÿÿÿãËËÈ }ËÈÏÏ    VERBOSE   debug   Clearing	   data   lockInfo   lockID   _failed   DEBUGM   Lock failed, all requests now failing.   Promise   reject	   task   error   canClearo   Lock tried to clear after queuing other tasks. Failing.   Cannot call clear after queuing other tasks, all requests now failing.'   SettingsPermissions%   hasClearPermission   principal#   clear not allowed3   No permission to clear DB   hasCleared   getObjectStore;   Rejecting Clear task on lock /   Cannot get object store   clear   onsuccess   onerror   ÿÿÿÿ   a   SettingsRequestManager.taskClear/promiseWrapper<Á                 '       ¹                                             resolve   reject  5b  b  x                  T  0    Q      T 0   QÓÓ    resolve   reject   ÿÿÿÿ   g   SettingsRequestManager.taskClear/clearReq.onsuccessÁ                   %       ¹                                           Ñb  c  ~                  ¸    
Y      ]   : ÖÊÿÿÿñ    resolve	   task   ÿÿÿÿ   c   SettingsRequestManager.taskClear/clearReq.onerrorÁ                   %       ¹                                           'c  [c                    ¸    
Y      ]   : ÖÊÿÿÿò    reject	   task   ÿÿÿÿ   O   SettingsRequestManager.ensureConnectionÁ                 \       ¹      *                                       defer   promiseWrapperc  fe              ;       ;   â   =   : QY      Q;       R    QA5   ¸   
      : QV   ÓËËÈÍ      VERBOSE   debug'   Ensuring Connection   Promise   settingsDB   ensureDB   ÿÿÿÿ   o   SettingsRequestManager.ensureConnection/promiseWrapper<Á                 '       ¹                                             resolve   reject  d  ed                    T  0    Q      T 0   QÓÓ    resolve   reject   ÿÿÿÿ   S   SettingsRequestManager.ensureConnection/<Á                          ¹                                           d  «d                    ¸    
:  QÕ    resolve   ÿÿÿÿ   S   SettingsRequestManager.ensureConnection/<Á                 6       ¹                                             error »d  @e              ;       ;   â   =   : Q      ¸   
T  : QÓØ    DEBUG   debugq   Cannot open Settings DB. Trying to open an old version?
   reject   ÿÿÿÿ   ?   SettingsRequestManager.runTasksÁ              "      ¹   %                          B            aLockID	   lock   currentTask   promises }e  °m              ;       ;   â   =   T  : QA5   T  7   QV       $;      ;   â   =   : QV   5   ¸   
:    QZ     Q;      >A5   	T  7;   
H   )A5   	T  >9QA5   T  >9QA5   T  >9Q  Ym;       ";   â   =   V  5   : QV   5      <;   ¸   
=   T  : QV  5   ¸   
=   : Q  Ô  Q  QA5   #?
0   QQ;      A5   	T  á7#?9QQV  5   x=   y   (=   y   o=   y   ¶=   y   Åz   ÙA5   #?
0   QQ;      A5   T  á7#?9QQA¸   
V  : W  Q   ÍA5   #?
0   QQ;      A5   T  á7#?9QQA¸   
V  : W  Q   |A¸   
V  : W  Q   cA¸    
V  : W  Q   J;      ";   â   =   !V  5   : QV  ¸   
=   !V  5   : QV  ¸   "
   ¸   #
V  :    : QV  ¸   $
V  : QÈV   5   ¸   
:  W  QãV  ÿÿý¦×ÏÓÐÈÉÐÌÌÌ( _ ¨ÝÉ7ÙÞ
ÕÙÉh Gu
 ½u
 Äu
uÊ ¶
ÕÙ
ÌÈX
ÕÙ
ÌÈX
ÌÈX
ÌÈXÝ
Þ× Î Î ÓÔÐÈ ¨Ë Õ'    VERBOSE   debug%   Running tasks for    lockInfo   DEBUGM   Lock no longer alive, cannot run tasks   tasks   shift   TRACK   tasksConsumed   undefined!   tasksGetConsumed!   tasksSetConsumed%   Running Operation    operation   finalizing   Cu   reportErrorÁ   Settings lock trying to run more tasks after finalizing. Ignoring tasks, but this is bad. Lock:    defer   rejectK   Cannot call new task after finalizing   totalProcessed   get   set   clear   finalize#   totalGetProcessed   taskGet#   totalSetProcessed   taskSet   taskClear   finalizeSets'   Invalid operation: 	   then	   bind	   push    ÿÿÿÿ         p              C   SettingsRequestManager.runTasks/<Á                 5       ¹      
                                       ret ±l  m  Î            T  5    5   ¸   
=   T  q   T  5      @: QÝ×> 	   task   defer   resolve   results          C   SettingsRequestManager.runTasks/<Á                 !       ¹                                             ret #m  \m  Ð            T  5    5   ¸   
T  5   : Qà! 	   task   defer   reject   error    Â   _      0  Î  ÿÿÿÿ   ÿÿÿÿ   G   SettingsRequestManager.consumeTasksÁ                 #      ¹      e                                       lockID	   lockËm  Íq  Ù            A5    Ù   >   $;      ;   â   =   : QA5    >7   Q;      ;   â   =      : QA5      7   QV       0;      ;   â   =   : QA¸   	
:  QV   5   
 D   QV   5   Ù   >H   $;      ;   â   =   : QV   B0   
QA¸   
:  ¸   
    ¸   
A:    : QÍÓÎÙÑ æÓÌàÓËÒÌ ó ò ø #   settingsLockQueue   length   VERBOSE   debug   Nothing to run!)   Consuming tasks for    lockInfo   DEBUGU   Lock no longer alive, cannot consume tasks   queueConsume   consumable   tasksW   No more tasks to run or not yet consuamble.!   ensureConnection	   then	   bind   ÿÿÿÿ   K   SettingsRequestManager.consumeTasks/<Á                 -       ¹                                          	   task ìp  Bq  ó            A¸    
      : QA¸   
      : QÖÖ    runTasks!   updateSoftLockup   ÿÿÿÿ   K   SettingsRequestManager.consumeTasks/<Á                        ¹                                             ret Wq  Çq  ö            ;    â    =   : QÓZ 	   dump¡   -*- SettingsRequestManager: SETTINGS DATABASE ERROR: Cannot make DB connection!
   ÿÿÿÿ   =   SettingsRequestManager.observeÁ                       ¹      [                                     aSubject   aTopic   aData   ãq  t  û            ;       ;   â   =   T : QT    Qx;   y   ;   y   hz   A5   ¸   
   ¸   
A: : Q;   5   	¸   

A;   : Qn   @1   Q;   ¸   
A: Q   aT  ¸   
;   5   : 5      QA¸   
V   : Q   +;      ;   â   =   T : Q   È×Éh  Ôu
 uÊ þÙ ÿÿÿÿéÛÌÑXÔÍÐX×X    VERBOSE   debug   observe: 7   kXpcomShutdownObserverTopic+   kInnerWindowDestroyed   messages   forEach	   bind   Services   obs   removeObserver	   ppmm   mrm1   unregisterStrongReporter   QueryInterface   Ci'   nsISupportsPRUint64	   data;   forceFinalizeChildLocksNonOOP   DEBUG-   Wrong observer topic:     ÿÿÿÿ          wId              A   SettingsRequestManager.observe/<Á                        ¹                                             msgName r  Ür  ÿ            ;    ¸   
T  A: Q
Ô* 	   ppmm+   removeMessageListener    %   Ú   ÿÿÿÿ   ÿÿÿÿ   K   SettingsRequestManager.collectReportsÁ                e      ¹   %                          ^            aCallback   aData   aAnonymize   °t                ;    ¸   
A5   : - Á
:     Q   ´m5   W   Q  Q  Q  QA5   V   7  QV  5   Ù     QV  >H   È   b=   V   =     QT  ¸   
=   	V  =   
;   5   5   ;   5   5   V  =   T : QÈãQ¸   
:  5   ÿÿÿ=È T  ¸   
=   	=   ;   5   5   ;   5   5   A5   =   T : QT  ¸   
=   	=   ;   5   5   ;   5   5   A5   =   T : QT  ¸   
=   	=   ;   5   5   ;   5   5   A5   =   T : Q;       ;    ¸   
A5   : - Á
:     Q  Um5   W   Q  Q  Q  QA5   V   7  Q>  QV     V  5   Ù   W  Q=   V   =     QT  ¸   
=   	V  =   ;   5   5   ;   5   5   A5   V   7=   T : QT  ¸   
=   	V  =    ;   5   5   ;   5   5   A5   !V   7=   "T : QT  ¸   
=   	V  =   #;   5   5   ;   5   5   A5   V   7=   $T : QÈãQ¸   
:  5   ÿÿþÈ ÒÒ8  Èã
Ð
ÓA
ÕÙÏÏ  ËÿÿÿíÒ %ÏÏÏ % -ÏÏÏ - 5ÏÏÏ 5 >ÒÒ8 iã
Ð
Ó
ÕÙÏÏË K RÙÏÏË R YÙÏÏË Y BËÿÿÿíÒ5    Object	   keys   lockInfo   value   tasks   length;   settings-locks/tasks/lock(id=   )/   callback      alive   Ci#   nsIMemoryReporter   KIND_OTHER   UNITS_COUNT3   Alive tasks for this lock	   next	   doneI   settings-locks/tasks-total/processed   totalProcessed[   The total number of tasks that were executed.=   settings-locks/tasks-total/set#   totalSetProcessedc   The total number of set tasks that were executed.=   settings-locks/tasks-total/get#   totalGetProcessedc   The total number of get tasks that were executed.   TRACK   tasksConsumed   set!   tasksSetConsumed1   Set tasks for this lock.   get!   tasksGetConsumed1   Get tasks for this lock.   processedG   Number of tasks that were executed.    ÿÿÿÿ          lockId                  	   lock       length    	   path        ÿÿÿÿ          lockId                 	   lock       length    	   path       ÷  i     )   È          Ó   ÿÿÿÿ   8               v            í  t  ÿÿÿÿ     A        ÿÿÿÿ   S   SettingsRequestManager.sendSettingsChangeÁ               z       ¹      .                                    	   aKey   aValue   aIsServiceLock   setting   1    b            A¸    
=   Y   T  ]   T ]   : QY   T  ]   T ]   T ]   W   QV   V   0   Q;   5   ¸   
V   ;   	=   
: QÍÈÈ cÈÈÍÎãL !   broadcastMessage3   Settings:Change:Return:OK   key   value!   isInternalChange   wrappedJSObject   Services   obs   notifyObserversA   kMozSettingsChangedObserverTopic      ÿÿÿÿ   !   broadcastMessage                 \       ¹      &                                D      aMsgName   aContentÁ  -  n            ;       ;   â   =   : QA5   ¸   
    ¸   
A: : Q;       ;   â   =   : QÓÙ | pÿÿÿê }Ó    VERBOSE   debug   Broadcast   children   forEach	   bind+   Finished Broadcasting   ÿÿÿÿ   %   broadcastMessage/<Á              »       ¹   
   )                                    msgMgr   principal   ë  p      	      A5    ¸   
T  :    QV       ';      ;   â   =   : Q   {;   ¸   
V      5   :    YT  ¸   
      : Q   ;  Qv  Q;      ;   â   =   	   : QÈ    
ÐÈ
"ØÚ
ÝÌà	 -   observerPrincipalCache   get   DEBUG   debug}   Cannot find principal for message manager to check permissions'   SettingsPermissions#   hasReadPermission   key!   sendAsyncMessage1   Failed sending message:     ÿÿÿÿ         e         g             /   ÿÿÿÿ   ÿÿÿÿ   E   SettingsRequestManager.addObserverÁ                 m       ¹   	                                          aMsgMgr   aPrincipal  G  8              ;       !;   â   =   T 5   : QA5   ¸   
T  : ×ÿ   0A5   ¸   
T  : QA5   ¸   
T  T : QÜÐÔ×5    VERBOSE   debug#   Add observer for    origin   children   indexOf	   push-   observerPrincipalCache   set   ÿÿÿÿ   K   SettingsRequestManager.removeObserverÁ              Ç       ¹      ,                                     aMsgMgr   index U  2        	      ;       J  QA5   ¸   
T  :   QV     ";   â   =   V  5   : QÈA5   ¸   
T  :    QV   ×ÿ   /A5   ¸   
V   ?: QA5   ¸   	
T  : Q;       $;   â   =   
A5   5   : QË
ÐÈÞÐÈÖÔßd    VERBOSE-   observerPrincipalCache   get   debug)   Remove observer for    origin   children   indexOf   splice   deleteo   Principal/MessageManager pairs left in observer cache: 	   size    ÿÿÿÿ         principal           D   ÿÿÿÿ   ÿÿÿÿ   C   SettingsRequestManager.removeLockÁ              @      ¹      M                                    aLockID   index K  Ë              ;       ;   â   =   T  : QA5   T  7   Ã  QA5   T  75     QV     V  ¸   
:  Q     Qv  QV  5   =      1;       ";   â   =   T  =   	: Q   ,;   
   ;   â   =   V  : QV  pÈ    A5   T  /QÈA5   ¸   
T  :    QV   ×ÿ   A5   ¸   
V   ?: QV   >   A¸   
:  Q×ÊË
Ô
ÔÌÏ,âØÌÌÐÈÖ °Ì    VERBOSE   debug   Removing lock    lockInfo   _transaction   abort	   name#   InvalidStateError!   Transaction for     closed already   DEBUGA   Unexpected exception, throwing: #   settingsLockQueue   indexOf   splice   queueConsume    ÿÿÿÿ         transaction                     e         T          1   ½   ÿÿÿÿ   i   s          ÿÿÿÿ   U   SettingsRequestManager.hasLockFinalizeTaskÁ                l       ¹      8                                 	   lock í     µ            T  5    Ù      Q    HmT  5    V   7E   QT  5    V   75   =   H   	CÈV   #?W   QQãV   >ÿÿÿµÈBÒ H:P ·ÓØ ·>Î º ·-Î ½    tasks   length   operation   finalize    ÿÿÿÿ          task_index           P          \   ÿÿÿÿÿÿÿÿL             ÿÿÿÿ   W   SettingsRequestManager.enqueueForceFinalizeÁ                        ¹   	   /                                D   	   lockC  «  À            A¸    
   :     |;      #;   â   =      5   : QA¸   
=   Y      5   ]   : ¸   
       : QA¸   
   5   : QÍÞÒÏÿÿÿäÊ Ã ÍÖ '   hasLockFinalizeTask   VERBOSE   debug=   Alive lock has pending tasks:    lockID   queueTask   finalize	   then   startRunning   ÿÿÿÿ   [   SettingsRequestManager.enqueueForceFinalize/<Á                   /       ¹                                             y  Ä            ;       );   â   =      5   =   : QäD    VERBOSE   debug   Alive lock    lockID9    succeeded to force-finalize   ÿÿÿÿ   [   SettingsRequestManager.enqueueForceFinalize/<Á                 3       ¹                                             error     Ç            ;       -;   â   =      5   =   T  : QèX    DEBUG   debug   Alive lock    lockIDQ    failed to force-finalize due to error:    ÿÿÿÿ   i   SettingsRequestManager.forceFinalizeChildLocksNonOOPÁ                ©       ¹      *                                    windowId ×  è  Ñ      	      ;       ;   â   =   : Q;   ¸   
A5   : - Á
:     Q   Jm5   W   Q  QA5   V   7  QV  5   T  H   A¸   
V  : QÈãQ¸   	
:  5   
ÿÿÿ§È ÓÒÒ8^×
ÐÍÑ ÔËÿÿÿíÒ0    VERBOSE   debugQ   Forcing finalize on child locks, non OOP   Object	   keys   lockInfo   value   windowID)   enqueueForceFinalize	   next	   done    ÿÿÿÿ          lockId                  	   lock       F   ^       <   i   ÿÿÿÿ   S   8          ÿÿÿÿ   c   SettingsRequestManager.forceFinalizeChildLocksOOPÁ                ©       ¹      *                                    aMsgMgr     Ü      	      ;       ;   â   =   : Q;   ¸   
A5   : - Á
:     Q   Jm5   W   Q  QA5   V   7  QV  5   T  H   A¸   
V  : QÈãQ¸   	
:  5   
ÿÿÿ§È ÓÒÒ8^×
ÐÍÑ ßËÿÿÿíÒ0    VERBOSE   debugI   Forcing finalize on child locks, OOP   Object	   keys   lockInfo   value   _mm)   enqueueForceFinalize	   next	   done    ÿÿÿÿ          lockId                  	   lock       F   ^       <   i   ÿÿÿÿ   S   8          ÿÿÿÿ   O   SettingsRequestManager.updateSoftLockupÁ                 J       ¹                                             aLockId 6  ñ  ç            ;       ";   â   =   T  =   : QAY   T  ]   ;   R  ]   0   QÝÈÎ    VERBOSE   debug   Treating lock G   , so updating soft lockup infos ...   softLockup   lockId	   Date   lockTs   ÿÿÿÿ   M   SettingsRequestManager.checkSoftLockupÁ                 H      ¹      K                                      	   head   delta   msgBlocked  ª  ð            ;       ;   â   =   : QA5   Ù   >H   $;       ;   â   =   : QA5   >7   QV   A5   5   I   $;       ;   â   =   : Q;   	R  A5   5   
Xè  QV  ;      /;       #;   â   =   V  =   : Q=   V   =   V  =   A5   V   75     Q;   ¸   
V  : Q;      ;   â   V  : QÓÍÓÍÐÓ	ØÊÞÊÑÖÔÒ    VERBOSE   debug9   Checking for soft lockup ...#   settingsLockQueue   length[   Empty settings lock queue, no soft lockup ...   softLockup   lockIdy   Non matching head of settings lock queue, no soft lockup ...	   Date   lockTs!   kSoftLockupDeltac   Matching head of settings lock queue, but delta (?   ) < 30 secs, no soft lockup ...?   Settings queue head blocked at     for g    secs, Settings API may be soft lockup. Lock from:    lockInfo   lockStack   Cu   reportError   DEBUG   ÿÿÿÿ   K   SettingsRequestManager.receiveMessageÁ              ¼      ¹   E   Ð      
                  ¡            aMessage   returnMessage   msg   mm Ç  Ù®                     Q;       ?;   â   =   T  5   =   ;   ¸   
T  5   : : QT  5      QT  5      QT  5      Qx=   	y   2=   
y   (=   y   =   y   =   y   
z   ðA¸   
:  QB   Q   5       %;   ¸   
=   : QCW   Q   A5      5   7    6;      #;   â   =      5   : QÈ   A   A5      5   75       ;   ¸   
=   : QCW   QV      !T  5   ¸   
=   : QÈ   ÈT  5   x=   y   Z=   y   =   y  =   y  =   	y  9=   
y  =   y  Ó=   y   =   y  ]z  ;       ;   â   =   : QA¸   
   : QA¸    
   : Q  r;   !¸   "
T  5   #:     C;   ¸   
=   $T  5   =   %: QT  5   ¸   
=   &: QA¸   '
   T  5   #: Q  ùA¸    
   : Q  ã;       H;   â   =   (   5   =   )T  5   #5   *=   +   5   ,: Q   5   A5   -q   4;   ¸   
=   .: QT  5   ¸   
=   /: QA5   05   1@H   A¸   2
   5   : QA5   -¸   3
   5   : QA5      5   ;   4â   4A5   5   T  5   #   5      5   6   5   ,   5   7: 9Q  ¯;       #;   â   =   8   5   : QA¸   9
=   :   : ¸   ;
      : Q  X;       #;   â   =   <   5   : QA¸   9
=   =   : ¸   ;
      : Q  ;       #;   â   =   >   5   : QA¸   9
=   ?   : ¸   ;
      : Q   ª;       ;   â   =   @: QA¸   9
=   A   : ¸   ;
      	: Q;       ;   â   =   B: QA¸   C
   5   : Q   +;      !;   â   =   DT  5   : Q Ë ò1ÿÿÿÏÎÎ &Îh (u
u
u
u
uÊ 'ÌË 
Õ
ËÒ1Þ
ÉÜ
Õ

Ø
XÈh u
 Lu
 Uu
u
 pu
 u
 u
 u
 ­uÊ GÓÑÑXÔ
Ú N

Ø
ÙXÑXÿÑ
Õ
Ø
Í
ÖÛàÈÊÊÊÊ h$ oXÞá x r XÞá   XÞá   XÓá ¡ ­ÓÖXÜ    VERBOSE   debug   receiveMessage 	   name   : 	   JSON   stringify	   data   target   Settings:Get   Settings:Set   Settings:Clear   Settings:Run#   Settings:Finalize   checkSoftLockup   lockID   Cu   reportError}   Process sending request for lock that does not exist. Killing.   lockInfo   DEBUG)   Cannot find lock ID    _mm   Process trying to access settings lock from another process. Killing.!   assertPermission;   message-manager-mismatch-kill-   child-process-shutdown9   Settings:RegisterForMessages=   Settings:UnregisterForMessages'   Settings:CreateLockA   Child process shutdown received.5   forceFinalizeChildLocksOOP   removeObserver'   SettingsPermissions+   hasSomeReadPermission   principal#   Settings message     from a content process with no 'settings-api-read' privileges.9   message-manager-no-read-kill   addObserver1   Received CreateLock for     from    origin    window:    windowID#   settingsLockQueue   Trying to queue a lock with the same ID as an already queued lock. Killing app.-   lock-id-duplicate-kill   softLockup   lockId!   updateSoftLockup	   push!   SettingsLockInfo   settingsDB   isServiceLock   lockStack3   Received getRequest from    queueTask   get	   then5   Received Set Request from    set9   Received Clear Request from    clear#   Received Finalize   finalize   Received Run   startRunning   Wrong message:    ÿÿÿÿ      returnMessage                ß       ¹   
   2                                 	   name	   data    !                       j      ¸    
T  T : Q   D   Qv   Q;      ';   â   =   T  =   V   : QÈ       o;   ¸   
Y   T  ]   T ]   : Q   D   Qv   Q;      ';   â   =   	T  =   V   : QÈ    Êe
àÌî&
Ñ"ÈÈÿÿÿÒÉÌé !   sendAsyncMessage   DEBUG   debug/   Return message failed,    : !   gSettingsService   receiveMessage	   name	   data=   Direct return message failed,     ÿÿÿÿ          e        ÿÿÿÿ          e         u   *                   1   8   ÿÿÿÿ       8   ÿÿÿÿ    ÿÿÿÿ          kill_process       ÿÿÿÿ   O   SettingsRequestManager.receiveMessage/<Á                 ;       ¹                                             settings +¦  í¦  r               =    Y      5   ]      5   ]   T  ]   : QÐÏÏÈ s    Settings:Get:OK   lockID   requestID   settings   ÿÿÿÿ   O   SettingsRequestManager.receiveMessage/<Á                 c       ¹      #                                       error ÷¦  ð§  x            ;       #;   â   =      5   : Q   =   Y      5   ]      5   ]   T  ]   : QÞÐÏÏÈ z    DEBUG   debug%   getRequest FAILED 	   name   Settings:Get:KO   lockID   requestID   errorMsg   ÿÿÿÿ   O   SettingsRequestManager.receiveMessage/<Á                 3       ¹                                             settings ¨  *©                 =    Y      5   ]      5   ]   : Q
ÐÏÏ 
    Settings:Set:OK   lockID   requestID   ÿÿÿÿ   O   SettingsRequestManager.receiveMessage/<Á                 ;       ¹                                             error 4©  ä©                 =    Y      5   ]      5   ]   T  ]   : Q
ÐÏÏÈ 
    Settings:Set:KO   lockID   requestID   errorMsg   ÿÿÿÿ   O   SettingsRequestManager.receiveMessage/<Á                   3       ¹                                           ª  «                 =    Y      5   ]      5   ]   : Q
ÐÏÏ 
 #   Settings:Clear:OK   lockID   requestID   ÿÿÿÿ   O   SettingsRequestManager.receiveMessage/<Á                 ;       ¹                                             error («  Ú«                 =    Y      5   ]      5   ]   T  ]   : Q
ÐÏÏÈ 
 #   Settings:Clear:KO   lockID   requestID   errorMsg   ÿÿÿÿ   O   SettingsRequestManager.receiveMessage/<Á                   $       ¹                                           r¬  ß¬  ¡               =    Y      5   ]   : Q
ÐÏ ¢
 )   Settings:Finalize:OK   lockID   ÿÿÿÿ   O   SettingsRequestManager.receiveMessage/<Á                 ,       ¹                                             error é¬  x­  ¥               =    Y      5   ]   T  ]   : Q
ÐÏÈ ¦
 )   Settings:Finalize:KO   lockID   errorMsg   t   .  ÿÿÿÿÿÿÿÿ5         ÿÿÿÿ              F  )        µ   q      '     ÿÿÿÿ   p     ÿÿÿÿ