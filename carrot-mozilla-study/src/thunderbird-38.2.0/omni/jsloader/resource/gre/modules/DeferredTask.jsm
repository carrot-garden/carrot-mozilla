ç¿s¹                R     ¹   &   µ       	                          0     resource://gre/modules/DeferredTask.jsm     N-                               Af    0    Q;   5      Q5      Q5      Q5   	   QQ;   ¸   

=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
=   =   =   :    QA   0   QA5   Y   @]   @]      a   B]      a   @]   @]      ]       ]   !   ]   "   ]   #B]   $   ]   %0   QXa	ÌXöDZÕ3\Ò\HÒ^EaÖaÉÿÿÿýuÌxzË~    Ê  Ê      ¢Ê  ºÊ  ÑÊ  ïÊ  Ð + !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   PromiseE   resource://gre/modules/Promise.jsm	   Task?   resource://gre/modules/Task.jsm   Timer   Constructor)   @mozilla.org/timer;1   nsITimer!   initWithCallback   DeferredTask   prototype   _taskFn   _delayMs   isArmed   _armed   isRunning   _runningPromise   _timer   _startTimer   arm   disarm   finalize   _finalized   _timerCallback                     DeferredTask                  ÿÿÿÿ   #   this.DeferredTaskÁ                        ¹                                              aTaskFn   aDelayMs  b  ¯  u             AT  0    QAT 0   QÊÊ    _taskFn   _delayMs   ÿÿÿÿ   G   this.DeferredTask.prototype.isArmedá                          ¹                                                            A5        _armed   ÿÿÿÿ   K   this.DeferredTask.prototype.isRunningá                   
       ¹                                           2  K               A5      É    _runningPromise   ÿÿÿÿ   O   this.DeferredTask.prototype._startTimerÁ                   7       ¹                                 	          
    ¢       	      A;   A5   ¸   
A: A5   ;   5   5   R 0    QÕÉÏ  ¤É7    _timer   Timer   _timerCallback	   bind   _delayMs   Ci   nsITimer   TYPE_ONE_SHOT   ÿÿÿÿ   ?   this.DeferredTask.prototype.armÁ                   H       ¹      !                                     Ñ    º             A5       ;   =   R pAC0   QA5    E   QA5       A¸   
:  QËÈ  ÅÍÌ    _finalized   Errorg   Unable to arm timer, the object has been finalized.   _armed   _runningPromise   _timer   _startTimer   ÿÿÿÿ   E   this.DeferredTask.prototype.disarmÁ                   -       ¹                                           Ø  3!  Ñ             AB0    QA5      A5   ¸   
:  QA@0   QÈÑÈ    _armed   _timer   cancel   ÿÿÿÿ   I   this.DeferredTask.prototype.finalizeÁ                   h       ¹   	   ,                                     Þ$  '  ï             A5       ;   =   R pAC0    QA5      A¸   
:  QA¸   
:  QA5      A5   ;   ¸   
:  ËÈÌÌÌ    _finalized   ErrorM   The object has been already finalized.   _timer   disarm   _timerCallback   _runningPromise   Promise   resolve   ÿÿÿÿ   U   this.DeferredTask.prototype._timerCallbackÁ                 x       ¹      I                                       runningDeferredr'  I-        
      ;    ¸   
:     QA@0   QAB0   QAV   5   0   QV   ¸   
;   ¸   
    ¸   	
A: : ¸   

@;   5   : : QÌÈ ÈÈÐã ) 'ÿÿÿõÊ )Ë ÿÿÿè ).    Promise   defer   _timer   _armed   _runningPromise   promise   resolve	   Task   spawn	   bind	   then   Cu   reportError   ÿÿÿÿ   Y   this.DeferredTask.prototype._timerCallback/<Á                  ·       ¹   
   ;                                      .generator)  -              É   Ê   ÐQ;    ¸   
A5   : ¸   
@;   5   :    Ë  ÐQA5      _A5       A¸   
:  Q   BAB0   Q;    ¸   
A5   : ¸   
@;   5   :    Ë  ÐQA@0   	Q   Ì ( ÌÒã
Ñ
È
Òã (È 	   Task   spawn   _taskFn	   then   Cu   reportError   _armed   _finalized   _startTimer   _runningPromise
   ?   ¤   