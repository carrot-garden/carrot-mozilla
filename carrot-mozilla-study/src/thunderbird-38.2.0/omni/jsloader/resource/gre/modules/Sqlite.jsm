ç¿s¹                á  K   ¹   Q   g      %                   =       0     resource://gre/modules/Sqlite.jsm     9·                               $   &   (   )                     Af    0    Q;   5      Q5      Q5      QQ¼ÔÀ   Q;   ¸   	
=   
: Q;   ¸   	
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=    =   !: Q;   ¸   
A=   "=   #: Qn   $;   %R  1   $Qn   &;   'R  1   &Qn   (B1   (Qn   )Y   C]   *1   )Q;   ¸   +
A=   ,A   : Q;   -;   %R  0   .Q;   -;   0¸   1
Y      ]   2   ]   3   ]   4   ]   5   	]   6   
a   7   ]   8   ]   9   ]   :   ]   ;   ]   <   ]   =   ]   >   ]   ?: 0   /Q;   @;   0¸   1
Y   =   A]   B=   C]   D=   E]   Ff   ]   G   ]   H   ]   I   ]   2   ]   3   ]   5   ]   6   a   7   ]   8    ]   J   !]   K   "]   9   #]   :: 0   /QAY   ;   M]   M;   N]   N;   O]   O   $a   P0   LQ+168Ê@	W	  Æ	 ù	 R	 	 â	Ì	ê5ÊÕ3Õ.ÒNÒIÒGÒDÒIÒJÒEÒ!#DÒ$MÒ&Q+ËÉÿÿÿý1ËÉÿÿÿý6Ì8Ê<Ì8@NW\bÜ  ²  Æ  ü ËÉ
ÖÊ %Ê 4Ê bÊ Ê ªÊÊ Ê Ê ,Ê TÊ ¾Ê ÄÊ ÌÊ 
É Õ ù 3 R   ² â öÖÊÊÊÊ Ê Ê -Ê FÊ Ê Ê Ê ÈÊ ØÊ ìÊ ýÊ Ê øÉ ÊÊÊ Ð !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Components   classes   interfaces   utils;   TRANSACTIONS_QUEUE_TIMEOUT_MS   importK   resource://gre/modules/XPCOMUtils.jsmA   resource://gre/modules/Timer.jsm   XPCOMUtils-   defineLazyModuleGetter   AsyncShutdownQ   resource://gre/modules/AsyncShutdown.jsm   ServicesG   resource://gre/modules/Services.jsm   OSC   resource://gre/modules/osfile.jsm   Log=   resource://gre/modules/Log.jsm   CommonUtilsG   resource://services-common/utils.js   FileUtilsI   resource://gre/modules/FileUtils.jsm	   Task?   resource://gre/modules/Task.jsm/   defineLazyServiceGetter5   FinalizationWitnessServiceU   @mozilla.org/toolkit/finalizationwitness;1;   nsIFinalizationWitnessService   PromiseUtilsO   resource://gre/modules/PromiseUtils.jsm   consoleW   resource://gre/modules/devtools/Console.jsm%   connectionCounters   Map%   wrappedConnections   Set   isClosed   Debugging)   failTestsOnAutoClose!   defineLazyGetter   Barriers   ConnectionData	   byId   prototype   Object   freeze   close   clone   _finalize   executeCached   execute+   transactionInProgress%   executeTransaction   shrinkMemory/   discardCachedStatements   _bindParameters#   _executeStatement   ensureOpen+   _clearIdleShrinkTimer+   _startIdleShrinkTimer!   OpenedConnection   DEFERRED)   TRANSACTION_DEFERRED   IMMEDIATE+   TRANSACTION_IMMEDIATE   EXCLUSIVE+   TRANSACTION_EXCLUSIVE#   TRANSACTION_TYPES!   getSchemaVersion!   setSchemaVersion   tableExists   indexExists   Sqlite   openConnection-   cloneStorageConnection+   wrapStorageConnection   shutdown                     Sqlite                  ÿÿÿÿ      logScriptError               °       ¹      3                                       message   consoleMessage   stack Ð
  !  @             ;    5   ¸   
;   5   :    Q;   R    QV   ¸   
T  V  5   @V  5   >;   5   5   	=   
: Q;   5   ¸   
V   : Q;   5      !;   ¸   
;   T  R : QÑÊAÈCÈâÔDFÙKÊÕÿÿÿñ#    Cc5   @mozilla.org/scripterror;1   createInstance   Ci   nsIScriptError   Error	   init   fileName   lineNumber   errorFlag)   component javascript   Services   console   logMessage   Debugging)   failTestsOnAutoClose   Promise   reject   ÿÿÿÿ   '   getIdentifierByPath               f       ¹                                 
         	   path   basename   number ô  ¯  W             ;    5   ¸   
T  :    Q;   ¸   
V   : D   Q>  Q;   ¸   
V   V  ?: QV   =   V  ÔÈÐ	ÏÚÐ    OS	   Path   basename%   connectionCounters   get   set   #   ÿÿÿÿ                              ¹      B                                       Barriers)   finalizationObserver8  H  b             Y   ;    5   =   R ]   ;    5   =   R ]      Q       Q;   5   ¸   
   =   	B: Q;    5   
¸   
=   ;   ¸   
   :    : Q   jÐ
ÈqÐÎ{Ë  à  ÖÑ  ¢    ±    AsyncShutdown   Barriery   Sqlite.jsm: wait until all clients have completed their task   shutdownc   Sqlite.jsm: wait until all connections are closed   connections   Services   obs   addObserver7   sqlite-finalization-witness'   profileBeforeChange   addBlocker7   Sqlite.jsm shutdown blocker	   Task   async   ÿÿÿÿ   )   finalizationObserverÁ                      ¹      3                                       subject   topic   identifier   connectionData       {             ;    5   ¸   
T :    QV   ;   H   $;   â   =   T =   : Q;    5   ¸   
T : Q;   â   =   T =   	: QV   ¸   

:  QÔÈ~ÊÏÊØÓ  Ï    ConnectionData	   byId   get   undefined   logScriptErrorm   Error: Attempt to finalize unknown Sqlite connection:    
   delete9   Warning: Sqlite connection '   ' was not properly closed. Auto-close triggered by garbage collection.
   close   ÿÿÿÿ                     ½       ¹   
   ,                                      .generator   .genrval¡  Ü               É   Ê   ÐQY       5    ¸   
:  ]   B]      Ë  ÐQn   C1   QY       5   ¸   
:  ]   B]      Ë  ÐQ;   5   ¸   
    =   	: QY   ]   C]      Ì    ÌÛÙ  ÌÛÙäQ    shutdown	   wait   value	   done   isClosed   connections   Services   obs   removeObserver7   sqlite-finalization-witness
   >   ~      ÿÿÿÿ      status                   ]       ¹                                           ó  0  ¢             ;       .Y   =   ]         5   5   ]   Y   =   ]         5   5   ]   	ÊÚ  ­	ÊÚ!    isClosedA   Waiting for connections to close   description   connections   stateI   Waiting for the barrier to be lifted   shutdown   ÿÿÿÿ      ConnectionData                 a      ¹   '                             #            connection   identifier   options   c  C&  Æ             T H   Y   U QA;   5   ¸   
=   T =   : 0    QA5    ¸   
=   : QAT  0   QAT 0   	QAC0   
QA;   R  0   QA;   R  0   QA>0   QA;   R  0   QA>0   QAB0   QA;   ¸   
:  0   QAT 5   0   QA5      *A;   5   ¸   
;   5   : 0   QA;   ¸   
:  0   QAB0    Q;   !5   "5   #¸   $
A5   	=   %A5   5   &A    : QÎ×É  ÇÉÖÊÊÈÉÉÈÉÈÈÍÉÏÒÊ  åÉ  íÍÉÈÖÌÑ  ð  û 	   _log   Log   repository5   getLoggerWithMessagePrefix#   Sqlite.Connection   : 	   info   Opened   _dbConn   _identifier   _open#   _cachedStatements   Map)   _anonymousStatements#   _anonymousCounter%   _pendingStatements#   _statementCounter3   _hasInProgressTransaction#   _transactionQueue   Promise   resolve   _idleShrinkMS=   shrinkMemoryOnConnectionIdleMS!   _idleShrinkTimer   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer   _deferredClose   PromiseUtils   defer   _closeRequested   Barriers   connections   client   addBlocker-   : waiting for shutdown   promise   ÿÿÿÿ   !   ConnectionData/<å                   P       ¹      #                                     %  <&  ò             Y   A5    ]   A5   ]   A5     ]   A5   ]   A5   5   	]   
A5   ]   ËËÍËÐÌ    _identifier   identifier   _closeRequested!   isCloseRequested   _dbConn   hasDbConn3   _hasInProgressTransaction1   hasInProgressTransaction%   _pendingStatements	   size#   pendingStatements#   _statementCounter!   statementCounter   ÿÿÿÿ   ?   ConnectionData.prototype<.closeÁ                          ¹      7                                    Ý'  +              AC0    QA5       A5   5   A5   ¸   
=   : QA¸   
:  QA5       A¸   	
:  A5   ¸   

=   : QA5   ¸   
A    : ÈÌÖÌ È  ÖÓ4    _closeRequested   _dbConn   _deferredClose   promise	   _log   debug9   Request to close connection.+   _clearIdleShrinkTimer3   _hasInProgressTransaction   _finalize	   warno   Transaction in progress at time of close. Rolling back.#   _transactionQueue	   then   ÿÿÿÿ   C   ConnectionData.prototype<.close/<å                          ¹                                           ú*  +  "            A¸    
:  -Ì    _finalize   ÿÿÿÿ   ?   ConnectionData.prototype<.cloneÁ               |       ¹   
   (                           
             readOnly   options ++  p,  %            T  H   
BU  QA¸    
:  QA5   ¸   
=   : QY   A5   ]   T  ]      QA5      V   A5   0   Q;   	â   	V   : ÊÌÖËÍÐÎ     ensureOpen	   _log   debug9   Request to clone connection.   _dbConn   connection   readOnly   _idleShrinkMS=   shrinkMemoryOnConnectionIdleMS-   cloneStorageConnection   ÿÿÿÿ   G   ConnectionData.prototype<._finalizeÁ                Þ      ¹      º                        V             markAsClosed,  M2  4            A5    ¸   
=   : QA5   - Á
:    Q  Q   tm5   - Á
:  ¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQQV  ¸   
:  QãQ¸   
:  5   ÿÿÿ}È A5   ¸   
:  QA>0   	QA5   
- Á
:    Q  Q   tm5   - Á
:  ¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQQV  ¸   
:  QãQ¸   
:  5   ÿÿÿ}È A5   
¸   
:  QA5   - Á
:    Q  Q   tm5   - Á
:  ¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQQV  ¸   
:  QãQ¸   
:  5   ÿÿÿ}È A5   ¸   
:  QAB0   QA      Q;   ¸   
A5   :    );   ¸   
A5   : QV   :  Q   0A5    ¸   
=   : QA5   ¸   
V   : QA5   5   ÖÛ8  ÝÉçØÏ 7ËÿÿÿåÒÑÈÛ8  ÝÉçØÏ @ËÿÿÿåÒÑÛ8  ÝÉçØÏ EËÿÿÿåÒÑÈË XÒ$ÖÎÖÕÌ# 	   _log   debug-   Finalizing connection.%   _pendingStatements   value	   next	   done   cancel   clear#   _statementCounter)   _anonymousStatements   finalize#   _cachedStatements   _open%   wrappedConnections   has   _identifier   delete+   Calling asyncClose().   _dbConn   asyncClose   _deferredClose   promise    ÿÿÿÿ         k       statement        ÿÿÿÿ         k       statement        ÿÿÿÿ         k       statement       ÿÿÿÿ   a   ConnectionData.prototype<._finalize/markAsClosedÅ                   U       ¹                                           0  41  P            A5    ¸   
=   : QA@0   Q;   5   5   ¸   
A5   5   	: QA5   ¸   

:  QÖÈåÑ 	   _log	   info   Closed   _dbConn   Barriers   connections   client   removeBlocker   _deferredClose   promise   resolve   ¸        û         6          '      ÿÿÿÿ   ì      ÿÿÿÿ   ©     ÿÿÿÿ   ÿÿÿÿ   O   ConnectionData.prototype<.executeCachedÁ                Å       ¹   
   @                                D      sql   params   onRow   statementj2  5  b               H   @   Q   H   @   QA¸    
:  Q       ;   =   R pA5   ¸   
   :    Q       ;A5   ¸   
   :    QA5   ¸   
      : QA¸   
:  Q;   	A    R ÓÌÌËÒÉÒÉÛÌÌ     ensureOpen   Error-   sql argument is empty.#   _cachedStatements   get   _dbConn)   createAsyncStatement   set+   _clearIdleShrinkTimer   Promise   ÿÿÿÿ   S   ConnectionData.prototype<.executeCached/<Å                f       ¹      %                        
      D      resolve   rejectã3  5  q            A¸    
          : ¸   
A    A   : Q   )   Qv   QA¸   
:  QV   pÈ    <ñ sÉ }ÌÌÌ #   _executeStatement	   then+   _startIdleShrinkTimer   ÿÿÿÿ   W   ConnectionData.prototype<.executeCached/</<Å                        ¹                                             result T4  ²4  s            A¸    
:  Q   T  : QÌÍ +   _startIdleShrinkTimer   ÿÿÿÿ   W   ConnectionData.prototype<.executeCached/</<Å                        ¹                                             error ¾4  5  w            A¸    
:  Q   T  : QÌÍ +   _startIdleShrinkTimer    ÿÿÿÿ          ex            @      B      ÿÿÿÿ   ÿÿÿÿ   C   ConnectionData.prototype<.executeÁ                Ñ       ¹      A                                D      sql   params   onRow   statement   index   onFinished5   9                 H   @   Q   H   @   Q   '=       ;   =      R pA¸   
:  QA5   ¸   
   :    QA5   #?
0   Q   QA5   ¸   
      : QA¸   	
:  QA       Q;   
A   R ÓÌÌÑÌÒÉÚÛÌÌ Ì §    string   ErrorQ   Must define SQL to execute as a string:    ensureOpen   _dbConn)   createAsyncStatement#   _anonymousCounter)   _anonymousStatements   set+   _clearIdleShrinkTimer   Promise   ÿÿÿÿ   Y   ConnectionData.prototype<.execute/onFinishedÅ                   =       ¹                                 	          7  7              A5    ¸   
      : Q      ¸   
:  QA¸   
:  QÛÕÌ )   _anonymousStatements   delete   finalize+   _startIdleShrinkTimer   ÿÿÿÿ   G   ConnectionData.prototype<.execute/<Å                i       ¹      %                        
      D      resolve   reject²7  9              A¸    
          : ¸   
A    A   : Q   ,   Qv   Q    :  QV   pÈ    <ñ É £ÌÏÌ #   _executeStatement	   then   ÿÿÿÿ   K   ConnectionData.prototype<.execute/</<Å                        ¹                                           	   rows #8  m8                  :  Q   T  : QÏÍ    ÿÿÿÿ   K   ConnectionData.prototype<.execute/</<Å                        ¹                                              error y8  Ä8                  :  Q   T  : QÏÍ     ÿÿÿÿ          ex            @      B       ÿÿÿÿ   ÿÿÿÿ   _   ConnectionData.prototype<.transactionInProgressÁ                          ¹                                           >9  9  ª            A5    E   QA5   Ó4    _open3   _hasInProgressTransaction   ÿÿÿÿ   Y   ConnectionData.prototype<.executeTransactionÁ               ^       ¹      "                          
      D   	   func	   type   promise¡9  WK  ®            A¸    
:  QA5   ¸   
=   : QA5   ¸   
A    :    QAV   ¸   
A   : 0   QV   ÌÖÓ
È ÒÉ    ensureOpen	   _log   debug+   Beginning transaction#   _transactionQueue	   then   catch   ÿÿÿÿ   k   ConnectionData.prototype<.executeTransaction/promise<Å                 w       ¹      @                                    %   transactionPromise   timeoutPromise%:  J  ³      	      A5       ;   =   R p;   ¸   
    ¸   
A: :    Q;   A   R   Q;   ¸   
Z  V   `   V  `  : Ë
Ø  ¸2ÿÿÿíÈ 
ÌÈÐÈÈÿÿÿÞ3    _closeRequested   Errora   Transaction canceled due to a closed connection.	   Task   spawn	   bind   Promise	   race   ÿÿÿÿ      ConnectionData.prototype<.executeTransaction/promise</transactionPromise<Á                  |      ¹                            Q            .generator   .genrvalÙ:  1H  ¸            É   Ê   ÐQA5       ;   ¸   
=   : QAC0    QÆ       QY   A¸   
=     =   : ]   B]     Ë  ÐQ   £Æ      Qv   Q;   	¸   

A5   :    =A5   ¸   
=   ;   ¸   
   : : QAB0    Q   6A5   ¸   
=   ;   ¸   
   : : Q   pÈÇ       QY   ;   ¸   
  : ]   B]     Ë  Ð   Q  Æ      Qv   QA5      5A5   ¸   
=   ;   ¸   
   : : Q   ²A5   ¸   
=   ;   ¸   
   : : QA5       |Y   A¸   
=   : ]   B]     Ë  ÐQ   KÆ      Qv   QA5   ¸   
=   ;   ¸   
   : : QÈÇ       pÈÇ    A5      *A5   ¸   
=   : Q;   =   R pA5       Y   A¸   
=   : ]   B]     Ë  ÐQ   QÆ      Qv   QA5   ¸   
=   ;   ¸   
   : : Q   pÈÇ    Y      ]   C]     QÈÇt         ÌÈÇt   
   AB0    Qu Y   ]   C]      Ì  ¸Ì
ÕÈ Í8ÞÞÓ ÉÒ8ÒÑ ÊÍÒÑ ÐÎ5ÖãÓ0ÒÑ ÝÉÒÑ à,ÒÞÓÒÑ! çÌ íÎÖË,ÒÞÓÒÑ ûÎ
ú
Ê' 3   _hasInProgressTransaction   console   error   Unexpected transaction in progress when trying to start a new one.   execute   BEGIN     TRANSACTION   value	   done%   wrappedConnections   has   _identifier	   _log	   warn³   A new transaction could not be started cause the wrapped connection had one in progress:    CommonUtils   exceptionStr   A transaction was already in progress, likely a nested transaction: 	   Task   spawn   _closeRequestede   Connection closed while performing a transaction: Q   Error during transaction. Rolling back: )   ROLLBACK TRANSACTIONC   Could not roll back transaction: i   Connection closed before committing the transaction.   Error%   COMMIT TRANSACTION=   Error committing transaction:     ÿÿÿÿ          result                    ex                    ex                   inner                    ex       5   #       ¢  0        $  9        â  0        B   <       ;     ÿÿÿÿ                c  ü            9         Ø  ?       ÿÿÿÿ:         
   w   Q    Ë     ÿÿÿÿ      ConnectionData.prototype<.executeTransaction/promise</timeoutPromise<Å                        ¹                                      D      resolve   reject |I  @J              ;    â    A    ;   : QÐ 2    setTimeout;   TRANSACTIONS_QUEUE_TIMEOUT_MS   ÿÿÿÿ      ConnectionData.prototype<.executeTransaction/promise</timeoutPromise</<å                          ¹                                           ¦I  J                 ;    =   R : ÑÿÿÿùX    Error   Transaction timeout, most likely caused by unresolved pending work.   ÿÿÿÿ      ConnectionData.prototype<.executeTransaction/this._transactionQueue<Å                        ¹                                             ex "K  =K              ;    ¸   
T  : Q3Ó    console   error   ÿÿÿÿ   M   ConnectionData.prototype<.shrinkMemoryÁ                 P       ¹                                 
             onShrunksK  .L              A5    ¸   
=   : QA5   ¸   
A:    QA¸   
=   : ¸   
V   V   : ÖÎÈÍÖ> 	   _log	   info/   Shrinking memory usage.+   _clearIdleShrinkTimer	   bind   execute)   PRAGMA shrink_memory	   then   ÿÿÿÿ   c   ConnectionData.prototype<.discardCachedStatementsÁ                ö       ¹   
   ;                                     countUL  SM              >   QA5    - Á
:    Q  Q   m5   - Á
:  ¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQQV   #?W   QV  ¸   
:  QãQ¸   
:  5   ÿÿÿqÈ A5    ¸   
:  QA5   ¸   
=   V   =   	: QV   Û8  ÝÉçØÌÏ ËÿÿÿåÒÑá #   _cachedStatements   value	   next	   done   finalize   clear	   _log   debug   Discarded '    cached statements.    ÿÿÿÿ         k       statement       &             ¤   ÿÿÿÿ   ÿÿÿÿ   S   ConnectionData.prototype<._bindParametersÁ                S      ¹      Ì                        0            statement   params  ÎM  ÔQ  ,            T     ;    ¸   
T :   ËT Ù   E   QT >7Å=     `   QT  ¸   
:     QT - Á
:    Q   ým5   W  Q  QV   ¸   
:    Q;   â   V  : - Á
:    Q  Q   |m5   - Á
:  ¸   
:  5   	   Q   
5   W  Q¸   
:  5   	   Q   
5   W  QQQV  ¸   

V  V  : QãQ¸   
:  5   	ÿÿÿuÈ V   ¸   
V  : QÈãQ¸   
:  5   	ÿÿþôÈ T  ¸   
V   : QÈÈ>   Q    .mT  ¸   
V   T V   7: QV   #?W   QQãV   T Ù   ÿÿÿÈÈT E   QT '=      DT K   Q   $mW   T  ¸   

V   T V   7: QãQLMÿÿÿÜQNÈ;   =   T R pÏÎÌËÊÈÒ8 ×ËÈÎ#Ø8  ÝÿÿÿðÉçØ× 7#ËÿÿÿçÒ
Ô 5ËÿÿÿòÒ =Ò&. = BÚ B)Î C BÕÉÊÌ0)ÊçË P
.    Array   isArray   length   object+   newBindingParamsArray   value!   newBindingParams   Iterator	   next	   done   bindByName   addParams   bindParameters   bindByIndex   Error   Invalid type for bound parameters. Expected Array or object. Got:     ÿÿÿÿ          paramsArray                     p                    bindings                    key       value        ÿÿÿÿ          i        ÿÿÿÿ          k         *       ¨  =      p        À          B   Z  ÿÿÿÿ   f            }   ë         ±          ÿÿÿÿ              I   ÿÿÿÿ     6   ÿÿÿÿ   ÿÿÿÿ   W   ConnectionData.prototype<._executeStatementÁ               Ä      ¹                               (      D      sql   statement   params   onRow   index   deferred   userCancelled   errors	   rows   handledRow	   self   pending   õQ  _  T            T 5    T 5      ;   =   R p   E   Q   '=      ;   =      R pA¸   
T T : QA5   #?
0   Q   Q;   ¸   	
:     QB   QZ      QZ      QB   QA5   
5   ;   5   5      j   Q=      =   T     QT    'V   =   ;   ¸   
T : W   QA5   
¸   
V   : QÈ   'A5   
¸   
=      =   : QA   	QT ¸   
Y      ]      ]      ]   :    
QA5   ¸   
      
: Q   5   ÑËËÌÑÒÚÌÉÊÊÛeË
ÚØ|ÛâÏÊ Ê Ê uÉ ºÛË    state7   MOZ_STORAGE_STATEMENT_READY   ErrorK   Statement is not ready for execution.   function?   onRow must be a function. Got:    _bindParameters#   _statementCounter   PromiseUtils   defer	   _log   level   Log   Level   Trace   Stmt #        - 	   JSON   stringify   trace   debug    starting   executeAsync   handleResult   handleError!   handleCompletion%   _pendingStatements   set   promise    ÿÿÿÿ          msg       ÿÿÿÿ      ConnectionData.prototype<._executeStatement/pending<.handleResultÁ                )      ¹   	   x                                    resultSet ÉU  X  v      
      T  ¸    
:     Q    øm       #      ¸   
V   : Q   ¼C      Q   V   : Q     Qv  QV  ;   r   È   3QC      Q   
   
¸   
:  QÈ   È   K  Qv  Q   	   	5   ¸   
=   ;   ¸   
V  : : QÈ    T  ¸    
:  W   QãV   E   Q       ÿÿþöÈÊÈ   ø  æ 
 yÙ@
ÌÓäÌÕIËÌÛÐ Ë yFÊÈ  y/ÌÑ     getNextRow	   push   StopIteration   cancel	   _log	   warnO   Exception when calling onRow callback:    CommonUtils   exceptionStr    ÿÿÿÿ          row                     e                     ex                  O               ÿÿÿÿ   c   K                        ¨            ´   ?          ÿÿÿÿ      ConnectionData.prototype<._executeStatement/pending<.handleErrorÁ                 P       ¹                                 	            error ¤X  EY                 	   	5    ¸   
=   T  5   =   T  5   : Q      ¸   
T  : QÛØ Ø 	   _log	   info5   Error when executing SQL (   result   ):    message	   push   ÿÿÿÿ      ConnectionData.prototype<._executeStatement/pending<.handleCompletionÁ                V      ¹                               :            reason iY  Ã^                 	   	5    ¸   
=         =   : Q   	   	5   ¸   
      : QT    Q   Qx;   5   5   y   2;   5   5   	y   d;   5   5   
y   Ôz                          Q      ¸   
V   : Q  n         R  Q                       Q      ¸   
V  : QÈ   (      ¸   
;   =   R : Q   ê;   =   Y     Q  Q      - Á
:     #m5   W  Q  V  5   ,  ÎãQ¸   
:  5   ÿÿÿÎ È¸   
=   : R   QV        0   Q      ¸   
V  : Q   1      ¸   
;   =   T  R : Q   ÈðäÏh ñÏp  Ïp ¬ÏpÊ ãÙXÊMËãßÜÿÿÿðXÖ\Ù87ã	Ëÿÿÿ÷ÞÿÿÿìÿÿÿÀÈÔÙXÜ ³ÿÿÿðX	 	   _log   debug   Stmt #    finished.%   _pendingStatements   delete   Ci9   mozIStorageStatementCallback   REASON_FINISHED   REASON_CANCELED   REASON_ERROR   resolve   reject   Error1   Statement was cancelled.c   Error(s) encountered during statement execution:    value   message	   next	   done	   join   ,    errorsA   Unknown completion reason code:     ÿÿÿÿ          result       error                     result                     error       £  7       Y   ü  ÿÿÿÿ   û   G            ^           Ú   _   ÿÿÿÿ   ÿÿÿÿ   I   ConnectionData.prototype<.ensureOpenÁ                          ¹                                           9_  _  ¾            A5        ;   =   R pË%    _open   Error/   Connection is not open.   ÿÿÿÿ   _   ConnectionData.prototype<._clearIdleShrinkTimerÁ                           ¹                                           µ_  `  Ä            A5        A5    ¸   
:  QÑ !   _idleShrinkTimer   cancel   ÿÿÿÿ   _   ConnectionData.prototype<._startIdleShrinkTimerÁ                   B       ¹                                 
          =`  Ua  Ì            A5        A5    ¸   
A5   ¸   
A: A5   A5    5   : QÛ'Ë ÑP !   _idleShrinkTimer!   initWithCallback   shrinkMemory	   bind   _idleShrinkMS   TYPE_ONE_SHOT   ÿÿÿÿ      openConnection                     ¹      y                          )            options   log	   path#   sharedMemoryCache   openedOptions	   file   identifier ¬f  vn  ù            ;    5   ¸   
=   :    QT  5       ;   =   R p;      ;   =   T  5   R p;   	5   
¸   
;   	5   5   
5   T  5   :    Q=   T  q   T  5      C   QY      Q=   T  q   M;   ¸   
T  5   :     ;   =   T  5   R p   T  5   0   Q;   ¸   
V   :    Q;   â   V   :    Q   ¸   
=   V   =      =   : Q;   A    R ÖÉÉËÔíÈÉÔËÉÔËÉ ÎÐÉÎÉìÌ 2    Log   repository   getLogger/   Sqlite.ConnectionOpener	   path   ErrorS   path not specified in connection options.   isCloseds   Sqlite.jsm has been shutdown. Cannot open connection to:    OS	   Path	   join   Constants   profileDir#   sharedMemoryCache=   shrinkMemoryOnConnectionIdleMS   Number   isIntegerq   shrinkMemoryOnConnectionIdleMS must be an integer. Got:    FileUtils	   File'   getIdentifierByPath	   info%   Opening database:     (   )   Promise   ÿÿÿÿ   !   openConnection/<Å               x       ¹   
   (                                D      resolve   reject   dbOptions"k  rn              @   Q        =;    5   ¸   
;   5   : W   QV   ¸   
=   B: Q;   5   ¸   	
    V   A    : QËÑÊ ÈÕé 1    CcA   @mozilla.org/hash-property-bag;1   createInstance   Ci-   nsIWritablePropertyBag   setProperty   shared   Services   storage#   openAsyncDatabase   ÿÿÿÿ   %   openConnection/</<Å                ó       ¹      M                                    status   connection  Jl  ln  "            T     A    ¸    
=   T  : Q   ;   =   T  R : Q    ¸   
=   : Q   ;   T ¸   
;   5   :         R : Q   T   Qv   Q    ¸    
=   	;   
¸   
V   : : Q   V   : QÈ    
ÞÕÿÿÿùÚ?ÚÔ +
 *ÉÌæ'ÿÿÿÙÕ 	   warn7   Could not open connection:    Error	   info#   Connection opened!   OpenedConnection   QueryInterface   Ci5   mozIStorageAsyncConnection3   Could not open database:    CommonUtils   exceptionStr    ÿÿÿÿ          ex         `   C       ¤   H   ÿÿÿÿ   ÿÿÿÿ   -   cloneStorageConnection               s      ¹      r                          -      D      options   log   source   openedOptions	   path   identifiert  z  R            ;    5   ¸   
=   :    Q   E   Q   5      Q       ;   =   R p    ;   5   r   ;   =   	R p;   
   $;   =      5   5   R pY      Q=      q   S;   ¸   
   5   :     ;   =      5   R p      5   0   Q   5   5      Q;   â   V   :    Q   ¸   
=   V   =      =   : Q;   A    R ÖÉÛËÑËÛËËÖËË eÐÔÎÉìÌ     Log   repository   getLogger/   Sqlite.ConnectionCloner   connection   TypeErrorU   connection not specified in clone options.   Ci5   mozIStorageAsyncConnection]   Connection must be a valid Storage connection.   isClosed   Erroru   Sqlite.jsm has been shutdown. Cannot clone connection to:    database	   path=   shrinkMemoryOnConnectionIdleMS   Number   isIntegerq   shrinkMemoryOnConnectionIdleMS must be an integer. Got:    databaseFile'   getIdentifierByPath	   info%   Cloning database:     (   )   Promise   ÿÿÿÿ   1   cloneStorageConnection/<Å                 (       ¹                                      D      resolve   reject?x  z  q                ¸    
  5     A    : QÑÒÿÿÿí     asyncClone   readOnly   ÿÿÿÿ   5   cloneStorageConnection/</<Å                      ¹      C                                    status   connection  x  z  r      	      T     ?    ¸    
=   T  : Q   ;   =   T  R : Q    ¸   
=   : Q   QT ¸   
;   5   :    Q   ;   V           R : QÈ   T   Qv   Q    ¸    
=   	;   
¸   
V   : : Q   V   : QÈ    
ÞÕÿÿÿùÚOÔÈäÿÿÿøÊÌæ(ÿÿÿØÕ 	   warn9   Could not clone connection:    Error	   info#   Connection cloned   QueryInterface   Ci5   mozIStorageAsyncConnection!   OpenedConnection5   Could not clone database:    CommonUtils   exceptionStr    ÿÿÿÿ       	   conn        ÿÿÿÿ          ex         ^   S       _   M   ÿÿÿÿ   ²   H   ÿÿÿÿ   ÿÿÿÿ   +   wrapStorageConnection               ø       ¹      D                                      options   log   connection	   path   identifier 9}  V              ;    5   ¸   
=   :    QT  E   QT  5      Q    D   Q   ;   5   r    ;   =   R p;   	   $;   
=      5   5   R p   5   5      Q;   â   V   :    Q   ¸   
=   V   =      =   : Q;   A    R ÖÉ×ÌÑËÛÔÎÉìÌ ±    Log   repository   getLogger1   Sqlite.ConnectionWrapper   connection   Ci5   mozIStorageAsyncConnection   TypeErrorI   connection not specified or invalid.   isClosed   Errors   Sqlite.jsm has been shutdown. Cannot wrap connection to:    database	   path   databaseFile'   getIdentifierByPath	   info'   Wrapping database:     (   )   Promise   ÿÿÿÿ   /   wrapStorageConnection/<Å                ¿       ¹   
   1                                    resolve   R  ¥      
        Q   Q      ¸    
;   5   :    Q;   V         R   Q;   ¸   
      : QT  V  : QÈ   K   Qv   Q      ¸   
=   ;   ¸   	
V   : : QV   pÈ    sÍ
ÛÈ
Ô
ÈÚÒÌæ'ÿÿÿÙÌ    QueryInterface   Ci5   mozIStorageAsyncConnection!   OpenedConnection%   wrappedConnections   add	   warn3   Could not wrap database:    CommonUtils   exceptionStr    ÿÿÿÿ       	   conn       wrapper        ÿÿÿÿ          ex            w          p   ÿÿÿÿ   y   ?   ÿÿÿÿ   ÿÿÿÿ   !   OpenedConnection                 y       ¹   	   4                                       connection   identifier   options   ½     â            T H   Y   U QA;   T  T T R 0    Q;   5   ¸   
A5    5   A5    : QA;   ¸   
=   A5    5   : 0   QÎ èÐÉÜ ì óÍË óÉ&    _connectionData   ConnectionData	   byId   set   _identifier   _witness5   FinalizationWitnessService	   make7   sqlite-finalization-witness                     DEFERRED      IMMEDIATE      EXCLUSIVE                  ÿÿÿÿ   Y   OpenedConnection.prototype<.getSchemaVersionÁ                 '       ¹                                          	   self.  $              A   QA¸    
=   : ¸   
    : ÍÊ      execute'   PRAGMA user_version	   then   ÿÿÿÿ      onSuccess                 -       ¹                                             result     	            T  @   >;    ¸   
T  >7¸   
>: : 
Ùÿÿÿñ& 	   JSON   stringify   getInt32   ÿÿÿÿ   Y   OpenedConnection.prototype<.setSchemaVersionÁ                 R       ¹                                 
            value C  T              ;    ¸   
T  :     ;   =   T  R pA5   ¸   
:  QA¸   
=   T  : ÏÏÑÑ/    Number   isInteger   TypeErrorO   Schema version must be an integer. Got    _connectionData   ensureOpen   execute-   PRAGMA user_version =    ÿÿÿÿ   C   OpenedConnection.prototype<.closeÁ                   g       ¹   	                                        Ú  a  -            ;    5   ¸   
A5   5   :    6;    5   ¸   
A5   5   : QA5   ¸   
:  QA5   ¸   
:  ÜàÑÍ    ConnectionData	   byId   has   _connectionData   _identifier   delete   _witness   forget   close   ÿÿÿÿ   C   OpenedConnection.prototype<.cloneÁ                 $       ¹                                              readOnly ¢  é  F            T  H   
BU  QA5    ¸   
T  : ÊÐ%    _connectionData   clone   ÿÿÿÿ   S   OpenedConnection.prototype<.executeCachedÁ                 9       ¹                                             sql   params   onRow   Q£  ¸£              T H   
@U QT H   
@U QA5    ¸   
T  T T : ÏÊÖ7    _connectionData   executeCached   ÿÿÿÿ   G   OpenedConnection.prototype<.executeÁ                 9       ¹                                             sql   params   onRow   ç¥  H¦              T H   
@U QT H   
@U QA5    ¸   
T  T T : ÏÊÖ1    _connectionData   execute   ÿÿÿÿ   c   OpenedConnection.prototype<.transactionInProgressÁ                          ¹                                           §¦  æ¦              A5    5   Ì2    _connectionData+   transactionInProgress   ÿÿÿÿ   ]   OpenedConnection.prototype<.executeTransactionÁ                 ]       ¹                                	      D   	   func	   type Ï­  À®  È            T H   A5    U QA5   ¸   
T : ×ÿ   ;   =   T R pA5   ¸   
A    T : ÏÐÏÖ@ )   TRANSACTION_DEFERRED#   TRANSACTION_TYPES   indexOf   Error5   Unknown transaction type:    _connectionData%   executeTransaction   ÿÿÿÿ   a   OpenedConnection.prototype<.executeTransaction/<å                          ¹                                            ¤®  ´®  Í               A: 9Ë
    ÿÿÿÿ   O   OpenedConnection.prototype<.tableExistsÁ                 ,       ¹      &                                   	   name ¯  Ý°  Ø            A¸    
=   Z  T  `   : ¸   
    : È ÙÊ Þ Ù á    executeó   SELECT name FROM (SELECT * FROM sqlite_master UNION ALL SELECT * FROM sqlite_temp_master) WHERE type = 'table' AND name=?	   then   ÿÿÿÿ      onResult                        ¹      	                                    	   rows °  Ò°  Þ            ;    ¸   
T  Ù   >: Ö!    Promise   resolve   length   ÿÿÿÿ   O   OpenedConnection.prototype<.indexExistsÁ                 ,       ¹      &                                   	   name ¬±  ð²  ì            A¸    
=   Z  T  `   : ¸   
    : È íÊ ò í õ    executeó   SELECT name FROM (SELECT * FROM sqlite_master UNION ALL SELECT * FROM sqlite_temp_master) WHERE type = 'index' AND name=?	   then   ÿÿÿÿ      onResult                        ¹      	                                    	   rows ¤²  å²  ò            ;    ¸   
T  Ù   >: Ö!    Promise   resolve   length   ÿÿÿÿ   Q   OpenedConnection.prototype<.shrinkMemoryÁ                          ¹      	                                     ³  ½³  ý            A5    ¸   
:  Í$    _connectionData   shrinkMemory   ÿÿÿÿ   g   OpenedConnection.prototype<.discardCachedStatementsÁ                          ¹      	                                     Fµ  µ              A5    ¸   
:  Í/    _connectionData/   discardCachedStatements   ÿÿÿÿ   )   this.Sqlite.shutdownÁ                          ¹                                           ·  5·              ;    5   5   Ð     Barriers   shutdown   client