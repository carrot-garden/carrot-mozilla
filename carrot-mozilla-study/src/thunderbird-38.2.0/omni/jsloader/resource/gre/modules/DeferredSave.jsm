ç¿s¹                ,  7   ¹   +                            0       0     resource://gre/modules/DeferredSave.jsm     ¶%                             
                     !;   5       Q;   5      Q;   5      Q;    ¸   
=   : Q;    ¸   
=   	: Qn   
A    1   
QAf   0   Q×2   Q;    ¸   
=   : Q=      Qn   ;   5   ¸   
;   : 1   Q;   ;   5   5   0   Qn   ;   5   R  1   Q;   ¸   
;   5   ;   R : Q;   ¸   
;   5   ;   R : Q;    ¸   
=   : Q=      Q=       Qn   !Y      ]   "   ]   #1   !Q;   !¸   "
:  QA   0   QA5   Y      a   %   a   &   ]   '   ]   (   	]   )   
]   *0   $Q-5ÐÐÐÕ/Õ0Ñ	Ì)ÈÕ,ËÛÉÿÿÿýÚ$ÐÉÿÿÿýÜÿÿÿç="Üÿÿÿç:+Õ1-ËË!5ÊÊ<Ð5RÐjÌ  ËÊÊ  ¦Ê  ·Ê  ÆÊ Ð     Cu   Components   utils   Cc   classes   Ci   interfaces   importC   resource://gre/modules/osfile.jsmE   resource://gre/modules/Promise.jsm   MakeTimer!   EXPORTED_SYMBOLS+   DEFAULT_SAVE_DELAY_MS=   resource://gre/modules/Log.jsm;   DEFERREDSAVE_PARENT_LOGGER_ID   DeferredSave   parentLogger   Log   repository   getLogger   level   Level	   Warn   formatter   BasicFormatter   addAppender   ConsoleAppender   DumpAppenderG   resource://gre/modules/Services.jsm)   PREF_LOGGING_ENABLED5   extensions.logging.enabledC   NS_PREFBRANCH_PREFCHANGE_TOPIC_ID   nsPref:changed   PrefObserver	   init   observe   prototype   dirty   lastError   _startTimer   saveChanges   _deferredSave   flush   ÿÿÿÿ      MakeTimerå                           ¹                                           á                 ;    5   ¸   
;   5   : ß6    Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer                     DeferredSave                  ÿÿÿÿ   #   PrefObserver_init                   P       ¹                                           [  0	  6             ;    5   ¸   
;   AB: Q;    5   ¸   
A=   B: QA¸   
@;   ;   : QÜÜ×L    Services   prefs   addObserver)   PREF_LOGGING_ENABLED   obs   xpcom-shutdown   observeC   NS_PREFBRANCH_PREFCHANGE_TOPIC_ID   ÿÿÿÿ   )   PrefObserver_observe                Þ       ¹      4                                    aSubject   aTopic   aData   Z	    <             T =       @;   5   ¸   
;   A: Q;   5   ¸   
A=    : Q   T ;         QB   Q;   5   ¸   
;   : W   Q     Qv  QÈ    V      $;   ;   
5   5   0   	Q   ;   ;   
5   5   0   	QÈÉ;ÛàAÉË	ÖÍFÓHßKÛA:    xpcom-shutdown   Services   prefs   removeObserver)   PREF_LOGGING_ENABLED   obsC   NS_PREFBRANCH_PREFCHANGE_TOPIC_ID   getBoolPref   parentLogger   level   Log   Level   Debug	   Warn    ÿÿÿÿ          debugLogEnabled                     e         d   #       X      ÿÿÿÿ                ÿÿÿÿ   #   this.DeferredSaveÁ               Ú       ¹      \                                       aPath   aDataProvider   aDelay   leafName   logger_id   É    j             ;    5   ¸   
T  :    Q;   =   V     QA;   5   ¸   
V  : 0   QA@0   	QA;   ¸   
>: 0   
QAB0   QAT  0   QAT 0   QA@0   QA>0   QA>0   QA@0   QT E   QT >   AT 0   Q   A;   0   QmÔÈÕÖÉuÈ  ÎÉÈÊÊÈÈÈÈÎÏÌ$    OS	   Path   basename;   DEFERREDSAVE_PARENT_LOGGER_ID   .   logger   Log   repository   getLogger   _pending   _writing   Promise   resolve   writeInProgress   _path   _dataProvider   _timer   totalSaves   overlappedSaves   _lastError   _delay+   DEFAULT_SAVE_DELAY_MS   ÿÿÿÿ   C   this.DeferredSave.prototype.dirtyÁ                          ¹                                           9  s               A5    D   QA5   Ó-    _pending   writeInProgress   ÿÿÿÿ   K   this.DeferredSave.prototype.lastErrorÁ                          ¹                                             ©  ¡             A5        _lastError   ÿÿÿÿ   O   this.DeferredSave.prototype._startTimerÁ                   q       ¹      )                                    ñ    ¦             A5        A5   ¸   
=   : QA5       A;   â   :  0   QA5   ¸   
A    A5   ;   5   	5   
: QÖËÉÓÕ  ®I    _pending   logger   debug   Starting timer   _timer   MakeTimer!   initWithCallback   _delay   Ci   nsITimer   TYPE_ONE_SHOT   ÿÿÿÿ   S   this.DeferredSave.prototype._startTimer/<å                          ¹                                           ¨  Â  ®             A¸    
:  'Ì    _deferredSave   ÿÿÿÿ   O   this.DeferredSave.prototype.saveChangesÁ                          ¹      (                                        ·             A5    ¸   
=   : QA5       nA5      0A5    ¸   
=   : QA5   #?
0   QQA;   ¸   
:  0   QA5   	¸   

A    A   : QA5   5   Ö
ÖÕÍÉÝÌ    logger   debug   Save changes   _pending   writeInProgressI   Data changed while write in progress   overlappedSaves   Promise   defer   _writing	   then   promise   ÿÿÿÿ   S   this.DeferredSave.prototype.saveChanges/<å                        ¹                                             count ¬  Ç  Á             A¸    
:  "Ì    _startTimer   ÿÿÿÿ   S   this.DeferredSave.prototype.saveChanges/<å                        ¹                                             error É  ä  Á             A¸    
:  ?Ì    _startTimer   ÿÿÿÿ   S   this.DeferredSave.prototype._deferredSaveÁ                Ö       ¹      P                                     pending   writing   toSave.  !  Æ             A5       QA@0    QA5      QA   5   0   Q@   QA¸   
:     Q   fÆ       Qv   QA5   ¸   
=      : QV   ¸   
@A   : ¸   
A   : QÈÇÈÇ    V   ¸   
@A   : ¸   
A   : QÌÈËÑÈ	ÎÓÛÜ  ÔÍÜ  Û  ï    _pending   _writing   promise   _dataProvider   logger   errorC   Deferred save dataProvider failed	   then    ÿÿÿÿ         e             W   this.DeferredSave.prototype._deferredSave/<Å                        ¹                                               error     Ô              #           W   this.DeferredSave.prototype._deferredSave/<Å                        ¹                                             count .  _  Õ               ¸    
   : Q
Õ    reject   ÿÿÿÿ   W   this.DeferredSave.prototype._deferredSave/<Å                        ¹                                               error   ¢  Û             >!	    ÿÿÿÿ   W   this.DeferredSave.prototype._deferredSave/<Å                        ¹      /                                      count ®  !  Ü       	      A5    ¸   
=   : QA5   #?
0   QQAC0   Q;   5   ¸   
A5         Y   A5   =   	]   
: ¸   
A    A   : QÖÕÈæ)Ñÿÿÿ×Ê  è  á  î    logger   debug   Starting write   totalSaves   writeInProgress   OS	   File   writeAtomic   _path	   .tmp   tmpPath	   then   ÿÿÿÿ   [   this.DeferredSave.prototype._deferredSave/</<Å                 ?       ¹                                             result   <   â             A@0    QAB0   QA5   ¸   
=   : Q      ¸   
T  : Q
È
ÈÖ
Ø    _lastError   writeInProgress   logger   debug   Write succeeded   resolve   ÿÿÿÿ   [   this.DeferredSave.prototype._deferredSave/</<Å                 D       ¹                                             error F   ý   è             AT  0    QAB0   QA5   ¸   
=   T  : Q      ¸   
T  : Q
Ê
ÈÙ
Ø    _lastError   writeInProgress   logger	   warn   Write failed   reject     8          T   T   ÿÿÿÿÿÿÿÿ¥             ÿÿÿÿ   C   this.DeferredSave.prototype.flushÁ                   Y       ¹                                            ö#  ²%              A5       KA5   ¸   
=   : QA5      A5   ¸   
:  QA@0   QA¸   
:  QA5   ÖÑÈÌ    _pending   logger   debugA   Flush called while data is dirty   _timer   cancel   _deferredSave   _writing