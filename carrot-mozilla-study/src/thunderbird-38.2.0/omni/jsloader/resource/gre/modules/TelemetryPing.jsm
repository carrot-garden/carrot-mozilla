ç¿s¹                å  i   ¹   R   ì                         =       0     resource://gre/modules/TelemetryPing.jsm     ?8         	                                               !   #   %   &   5   6          C;   5       Q;   5      Q;   5      Q;   5      Q;   ¸   	
=   
: Q;   ¸   	
=   A: Q;   ¸   	
=   A: Q;   ¸   	
=   A: Q;   ¸   	
=   A: Q;   ¸   	
=   A: Q;   ¸   	
=   : Q=      Q=      Q=      Q;   =      Q;   =      Q;   =      Q;   =      Q;   =       Q;   =   "   !Q=   $   #QXê`   %Q×d   &Q;   '¸   (
A=   )=   *=   +: Q;   '¸   ,
A=   -=   .: Q;   '¸   ,
A=   /=   0: Q;   '¸   ,
A=   1=   2: Q;   '¸   ,
A=   3=   4: Qn   5@1   5Qn   6@1   6QAf   0   7QA;   9¸   :
Y   ;   9¸   :
Y   ;   ]   ;   ]   ;   ]   ;   ]   : ]   ;   ]   <   ]   =   ]   >   ]   ?   ]   @   ]   A   	a   B: 0   8Qn   CY   B]   D@]   EY   ]   F;   G]   H@]   I   
]   J   ]   @   ]   A   ]   K   ]   L   ]   M   ]   N   ]   O   ]   P   ]   Q   ]   ?   a   B1   CQ"$6Ê	S	  ÐÐÐÐÕ,Ö3Ö7Ö9Ö6Ö;Õ4ËËËÑÑÑÑÑÑË"É$È&Ò&(3Ò)NÒ+NÒ-MÒ/V6ÌÌQSWYÌ*[ÒÑÊÊÊÊ\ÈeÊkÊrÊyÊ  Ê  Ê  Ê[É  ÊÊÊÊ  °Ê  ·Ê  ½Ê  ÄÊ  ÒÊ  àÊ Ê #Ê @Ê Ê Ð      Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   import=   resource://gre/modules/Log.jsm?   resource://gre/modules/debug.jsG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsmE   resource://gre/modules/Promise.jsmO   resource://gre/modules/DeferredTask.jsmM   resource://gre/modules/Preferences.jsm   LOGGER_NAME#   Toolkit.Telemetry   LOGGER_PREFIX   TelemetryPing::   PREF_BRANCH%   toolkit.telemetry.   PREF_BRANCH_LOG	   log.   PREF_SERVER   server   PREF_ENABLED   enabled   PREF_LOG_LEVEL   level   PREF_LOG_DUMP	   dump)   PREF_CACHED_CLIENTID   cachedClientID/   PREF_FHR_UPLOAD_ENABLEDQ   datareporting.healthreport.uploadEnabled   TELEMETRY_DELAY)   TELEMETRY_TEST_DELAY   XPCOMUtils/   defineLazyServiceGetter   Telemetry;   @mozilla.org/base/telemetry;1   nsITelemetry-   defineLazyModuleGetter   AsyncShutdownQ   resource://gre/modules/AsyncShutdown.jsm   TelemetryFileQ   resource://gre/modules/TelemetryFile.jsm   TelemetryLogO   resource://gre/modules/TelemetryLog.jsm+   ThirdPartyCookieProbea   resource://gre/modules/ThirdPartyCookieProbe.jsm   gLogger!   gLogAppenderDump!   EXPORTED_SYMBOLS   TelemetryPing   Object   freeze   Constants   initLogging   reset   setup   observe   setServer	   send   clientID	   Impl   _initialized	   _log   _prevValues   undefined!   _previousBuildID   _clientID   popPayloads+   sendPingsFromIterator#   finishPingRequest   submissionPath   doPing%   gzipCompressString1   enableTelemetryRecording   setupTelemetry   ÿÿÿÿ   !   configureLogging                K      ¹      X                         /             logDumping>	    8       	      ;          Qn    ;   5   ¸   
;   : 1    Q;   5   ;   5   R  R   Q;    ¸   
V  : Q;   ¸   	
;   
;   : QÈ;    ;   5   ;   ¸   
;   =   : 70   Q;   ¸   
;   B:    QV   ;        pV      Fn   ;   5   ;   5   R  R 1   Q;    ¸   
;   : Q   &;    ¸   
;   : Qn   @1   QËÛ
É=Ö*ÿÿÿèÈÔ@ÛDåÊGÒÈÈAÛ(ÿÿÿëÉÚÕÌ    gLogger   Log   repository   getLogger   LOGGER_NAME   ConsoleAppender   BasicFormatter   addAppender   Preferences   observe   PREF_BRANCH_LOG!   configureLogging   level   Level   get   PREF_LOG_LEVEL	   Warn   PREF_LOG_DUMP!   gLogAppenderDump   DumpAppender   removeAppender    ÿÿÿÿ         consoleAppender           y   ÿÿÿÿ   ÿÿÿÿ      generateUUID                 S       ¹   	                                           str¯  Y  S             ;    5   ¸   
;   5   : ¸   
:  ¸   
:     QV   ¸   
?V   Ù   ?: ÛÜV×!    Cc;   @mozilla.org/uuid-generator;1   getService   Ci!   nsIUUIDGenerator   generateUUID   toString   substring   length                     TelemetryPing                  ÿÿÿÿ   ?   this.TelemetryPing<.initLoggingÁ                          ¹                                             »  e             ;    â    :  QÎ !   configureLogging   ÿÿÿÿ   3   this.TelemetryPing<.resetÁ                          ¹                                           ÿ  ;  k             ;    @0   QA¸   
:  ÌÈ 	   Impl   _clientID   setup   ÿÿÿÿ   3   this.TelemetryPing<.setupÁ                          ¹      	                                       ­  r             ;    ¸   
C: Í 	   Impl   setupTelemetry   ÿÿÿÿ   7   this.TelemetryPing<.observeÁ                        ¹      	                                       aSubject   aTopic   aData   ê  ;  y             ;    ¸   
T  T T : Õ& 	   Impl   observe   ÿÿÿÿ   ;   this.TelemetryPing<.setServerÁ                        ¹      	                                       aServer   ·               ;    ¸   
T  : Ï 	   Impl   setServer   ÿÿÿÿ   1   this.TelemetryPing<.sendÁ                        ¹      	                                       aReason   aPingPayload  ø  B               ;    ¸   
T  T : Ò! 	   Impl	   send   ÿÿÿÿ   9   this.TelemetryPing<.clientIDÁ                          ¹                                           Å  è               ;    5   Ë 	   Impl   clientID   ÿÿÿÿ      popPayloads             .       ¹                                      D      reason   externalPayload   payloadIter'   payloadIterWithThis#  ª                   W   QV   ¸    
A:   QY   V  ]   Ê    ©ÌÈ	Ê$ 	   bind   __iterator__   ÿÿÿÿ      payloadIter                 ´       ¹      5                                   .generator   iteratorW  =               É   Ê   ÐQ  E   Q  =            Ë  ÐQ;   ¸   
  :    Q   - Á
:  Æ       Q   "m5      Q     Ë  ÐQãQ¸   
:  5   ÿÿÿÏÈÇ    Ì  ¦  ÌÖÐ
ÑÉÚ86ÒÐ  ¤ËÿÿÿïÓ    overdue-flush   TelemetryFile   popPendingPings   value	   next	   done    ÿÿÿÿ       	   data      p   6       e   B   ÿÿÿÿ
   5         ÿÿÿÿ      Impl.setServerÁ                        ¹                                              aServer è    °             AT  0    QÊ    _server   ÿÿÿÿ   	   send                 [       ¹                                             reason   aPayload  |  r  ·             A5    ¸   
=   T  =   A5   : QA¸   
A5   T  ;   â   A¸   
T  T : : : çÑØ/ÿÿÿ÷  ¹T 	   _log   trace   send - Reason    , Server    _server+   sendPingsFromIterator   Iterator   popPayloads   ÿÿÿÿ   +   sendPingsFromIterator              e       ¹                                    D      server   reason   i   p  ¬  i  ½             Y     Q  QT K   mW    V  ,  ÎãQLMÿÿÿéQNÈ¸    
A   :    Q;   ¸   
V   : ËÌ0ñÿÿÿõÈÐ    map   Promise   all    ÿÿÿÿ      	   data       ÿÿÿÿ   1   sendPingsFromIterator/p<å                 (       ¹                                      D   	   dataé  G  ¾             A¸    
     : ¸   
@A    : çN    doPing	   then   ÿÿÿÿ   5   sendPingsFromIterator/p</<å                          ¹                                             F  ¿             ;    ¸   
   C: 1Ö"    TelemetryFile   savePing                5   ÿÿÿÿ   ÿÿÿÿ   #   finishPingRequest                      ¹   
   3                                       success   startTime	   ping   hping   hsuccess     ù  Ä             ;    ¸   
=   :    Q;    ¸   
=   :   QV  ¸   
T  : QV   ¸   
;   R  T : QT     ;   ¸   
T :    ;   ¸   	
:  ÑÈÑÈÒÑ
ÿÿÿöÏÉÌ    Telemetry!   getHistogramById   TELEMETRY_PING#   TELEMETRY_SUCCESS   add	   Date   TelemetryFile   cleanupPingFile   Promise   resolve   ÿÿÿÿ      submissionPath              ¸       ¹      8                                  	   ping	   slug %  £  Ò                QT      A5    W   Q     Q  QT  5   5     QZ  T  5   `   V  5   `  V  5   `  V  5   `  V  5   `  V  5   `    QV  ¸   	
=   
: W   QÈ=   V   ÐÌ
Ò
ÌÍÍÍÍÒÐÉË#    _uuid   payload	   info	   slug   reason   appName   appVersion!   appUpdateChannel   appBuildID	   join   /%   /submit/telemetry/    ÿÿÿÿ      	   info       pathComponents        !      ÿÿÿÿ   ÿÿÿÿ      doPing                   ¹   )   ­                          >      D      server	   ping   handler   deferred   url   request   startTime   converter   utf8Payload   payloadStream ¿  Ó   à                 W   QA5    ¸   
=   T  : Q;   ¸   
:     QT  A¸   
   :   Q;   5   ¸   
;   	5   
:   QV  C0   QV  ¸   
=   V  C: QV  ¸   
=   : QV  ¸   
=   =   : Q;   R     QV  ¸   
=   V   B: ¸   
A: B: QV  ¸   
=   V   C: ¸   
A: B: QV  ¸   
=   =   : Q;   5   ¸   
;   	5   :   QV  =   0   QV  ¸   
;   ¸    
   5   !: :   QV  V  ¸   "
:  W  Q;   5   #¸   
;   	5   $:   QV  A¸   &
V  : 0   %QV  ¸   '
V  : Q   5   (  íÊ  àÚÌÉÐÉÑÊ  äÈËÙÔÙÉ  øÖ"ÏÿÿÿÞÖ!ÏÿÿÿßÙÑÊ  üÈÏá+ÿÿÿãÈÏ{ÑÊ ÈÐÉÓË 	   _log   trace!   doPing - Server    Promise   defer   submissionPath   CcO   @mozilla.org/xmlextras/xmlhttprequest;1   createInstance   Ci#   nsIXMLHttpRequest)   mozBackgroundRequest	   open	   POST!   overrideMimeType   text/plain!   setRequestHeader   Content-Type?   application/json; charset=UTF-8	   Date!   addEventListener   error	   bind	   load!   Content-Encoding	   gzipY   @mozilla.org/intl/scriptableunicodeconverter;   nsIScriptableUnicodeConverter   charset   UTF-8%   ConvertFromUnicode	   JSON   stringify   payload   FinishK   @mozilla.org/io/string-input-stream;1)   nsIStringInputStream	   data%   gzipCompressString	   send   promise   ÿÿÿÿ      handler                        ¹                                        D      successÒ  Ù  í                   ö    ÿÿÿÿ   !   doPing/handler/<Á                 1       ¹                                      D      eventó  Ò  î             A¸    
        : ¸   
A    : Qð  õ #   finishPingRequest	   then   ÿÿÿÿ   %   doPing/handler/</<Å                   ?       ¹                                           ;  È  ï                      ¸    
:  Q       ¸   
   : QÚÚ    resolve   reject   ÿÿÿÿ   %   gzipCompressString                     ¹      e                                      string   observer   scs   listener   converter   stringStream !  µ$              Y   =    ]       ]      Q;   5   ¸   
;   5   :   Q;   5   ¸   	
;   5   
:   QV  ¸   
V   : QV  ¸   
=   =   V  @:   Q;   5   ¸   	
;   5   :   QV  T  0   QV  ¸   
@@: QV  ¸   
@@V  >T  Ù   : QV  ¸   
@@@: QV   5   ÊÏ ÑÊ ÈÑÊ ÈÓÕ ÈÑÊ ÈÍÑÞÒÊ       buffer!   onStreamComplete   Cc?   @mozilla.org/streamConverters;1   getService   Ci3   nsIStreamConverterServiceI   @mozilla.org/network/stream-loader;1   createInstance   nsIStreamLoader	   init!   asyncConvertData   uncompressed	   gzipK   @mozilla.org/io/string-input-stream;1)   nsIStringInputStream	   data   onStartRequest   onDataAvailable   length   onStopRequest   ÿÿÿÿ   Y   gzipCompressString/observer.onStreamCompleteÁ                         ¹      
                                       loader   context   status   length   result     Y!  Ë!              A;   5   ¸   
AT O 0    QÖÉ(    buffer   String   fromCharCode   apply   ÿÿÿÿ   1   enableTelemetryRecording               ©       ¹      A                                       testing   enabled M%  )  #            ;    5    E   
QT      );    B0   QA5   ¸   
=   : QB;   ¸   
;   B:    QA;   ¸   
;   
;   : 0   	QV       );    B0   QA5   ¸   
=   : QBCÑÌÖÒ
È×ÉÌÖ    Telemetry   canSend   canRecord	   _log   config   enableTelemetryRecording - Can't send data, disabling Telemetry recording.   Preferences   get   PREF_ENABLED   _server   PREF_SERVER   undefined¥   enableTelemetryRecording - Telemetry is disabled, turning off Telemetry recording.   ÿÿÿÿ      setupTelemetry               ,      ¹      u                          (            testing   deferred   delayedTask -*  3  @            T  E   QA5        *A;   5   ¸   
;   ;   : 0    QA5    ¸   
=   : QA;   	R  0   QA5   ¸   

:  QA¸   
T  :     +A5    ¸   
=   : Q;   ¸   
:  A;   ¸   
;   @: 0   Q;   ¸   
:     Q;       ¸   
A: T     ;      
;   R    QV   ¸   
:  Q   5   ÉÜÉÖÉÑËÖÌ TÓÉ YÌÉÒ x Z/ x
Ô ZÈ zÏË 	   _log   Log   repository5   getLoggerWithMessagePrefix   LOGGER_NAME   LOGGER_PREFIX   trace   setupTelemetry%   _thirdPartyCookies+   ThirdPartyCookieProbe	   init1   enableTelemetryRecording   config   setupTelemetry - Telemetry recording is disabled, skipping Telemetry setup.   Promise   resolve   _clientID   Preferences   get)   PREF_CACHED_CLIENTID   defer   DeferredTask	   bind)   TELEMETRY_TEST_DELAY   TELEMETRY_DELAY   arm   promise   ÿÿÿÿ   7   setupTelemetry/delayedTask<Á                        ¹      l                        *            .generator   .genrvalk.  $3  Z            É   Ê   ÐQAC0    QY   ;   ¸   
:  ]   B]      Ë  ÐQ;   5   >   WA5   ¸   
=   ;   5   =   	: QY   A¸   

=   : ]   B]      Ë  ÐQ=   ;   q   Æ       Q;   5   ¸   
;   5   : 5      QAY      ¸   
:  ]   B]     Ë  Ð0   Q;   ¸   
;   A5   : QÈÇ   ;   ¸   
;   : Q;   ¸   
   : Q    ¸   
:  QY   ]   C]      Ì v ZÌÈÑÙÌÝ a fÒÙË  ÑÑÊ jÎÒÞâÕÕÕ    _initialized   TelemetryFile   loadSavedPings   value	   done   pingsOverdue	   _log   trace;   setupChromeProcess - Sending '    overdue pings now.	   send   overdue-flushI   @mozilla.org/datareporting/service;1   Cc   getService   Ci   nsISupports   wrappedJSObject   _clientID   getClientID   Preferences   set)   PREF_CACHED_CLIENTID   reset   Telemetry/   asyncFetchTelemetryData   resolve    ÿÿÿÿ          drs      ÿÿÿÿ   ;   setupTelemetry/delayedTask</<Á                          ¹                                             ü2  3  u             5     ·   {   ÿÿÿÿ
   <           ÿÿÿÿ      Impl.observeÁ                 î       ¹      S                                       aSubject   aTopic   aData   ä3  8              A5        8;   â   :  QA;   5   ¸   
;   ;   : 0    QA5    ¸   
=   T =   	: QT x=   
y   =   y    =   y   7z   lA¸   
:  ;   5   ¸   
A=   B: Q   ?;   5   ¸   
A=   : Q;   ¸   
;   ;   : Q   ÎÜÉàk  u
u
uÊ ÈÜXÛÚX 	   _log!   configureLogging   Log   repository5   getLoggerWithMessagePrefix   LOGGER_NAME   LOGGER_PREFIX   trace   observe -     notified.)   profile-after-change   app-startup-   content-child-shutdown   setupTelemetry   Services   obs   addObserver   removeObserver   Preferences   ignore   PREF_BRANCH_LOG   ÿÿÿÿ      Impl.clientIDÁ                          ¹                                           8  :8              A5        _clientID