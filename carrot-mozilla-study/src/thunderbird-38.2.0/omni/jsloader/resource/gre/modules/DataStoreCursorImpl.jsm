ç¿s¹                R  U   ¹   ?   E                                0     resource://gre/modules/DataStoreCursorImpl.jsm     ­5         	                         
                                 Af    0    Q;   5      Q5      Q5      Q5   	   QQ>   
Q?   Q×   Q×   Q×   Q×   Q=      Q=      Q=      Q=      Q=      Q;   ¸   
=   : Q;   ¸   
=   : QA   0   QA5   Y   =   ]    ;   ¸   !
=   ": ]   #=   $]   %;   &¸   '
Z  ;   5   5   (`   : ]   )B]   *@]   +@]   ,@]   -@]   .@]   />]   0;   
]   1   ]   2   ]   3   ]   4   ]   5   ]   6   	]   7   
]   8   ]   9   ]   :   a   ;   ]   <   ]   =   ]   >0   Q	ÊK		Ì,öB
ÈÈÈÈ
ËËËËËÕ1Õ3KMPÌSUËÊÑ	ÈÊÐ'ÓÿÿÿéÈ[]dÊfÊtÊ~Ê  ¡Ê  ´Ê  ÍÊ 3Ê OÊ Ê ÊÊ ®ÊÐ !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   STATE_INIT'   STATE_REVISION_INIT)   STATE_REVISION_CHECK   STATE_SEND_ALL'   STATE_REVISION_SEND   STATE_DONE   REVISION_ADDED   added!   REVISION_UPDATED   updated!   REVISION_REMOVED   removed   REVISION_VOID	   void   REVISION_SKIP	   skip   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   DataStoreCursor   prototype?   DataStoreCursor XPCOM Component!   classDescription   IDM   {b6d14349-1eab-46b8-8513-584a7328a26b}   classIDQ   @mozilla.org/dom/datastore-cursor-impl;1   contractID   XPCOMUtils   generateQI   nsISupports   QueryInterface   _shuttingdown   _window   _dataStore   _revisionId   _revision   _revisionsList   _objectId   _state	   init   observe   stateMachine!   stateMachineInit1   stateMachineRevisionInit3   stateMachineRevisionCheck'   stateMachineSendAll1   stateMachineRevisionSend!   stateMachineDone   store	   next   close   createTask                     DataStoreCursor                  ÿÿÿÿ      debug                        ¹                                               s   ¸                    ÿÿÿÿ      createDOMError                         ¹      	                                       aWindow   aEvent  	  ä	  K             T  5    T 5   5   5   R Û/    DOMError   target   error	   name   ÿÿÿÿ   )   this.DataStoreCursorÁ                 )       ¹                                             aWindow   aDataStore   aRevisionId   "
  
  P             ;    â    =   : QA¸   
T  T T : QÓÕ,    debug/   DataStoreCursor created	   init   ÿÿÿÿ   G   this.DataStoreCursor.prototype.initÁ                      ¹      -                                       aWindow   aDataStore   aRevisionId	   util   z    f             ;    â    =   : QAT  0   QAT 0   QAT 0   Q;   5   ¸   
A=   B: QT  ¸   	
;   
5   : ¸   
;   
5   :    QAV   5   0   QÓiÊÊÊmÜoÔÊÊoÈqÐ0    debug)   DataStoreCursor init   _window   _dataStore   _revisionId   Services   obs   addObserver-   inner-window-destroyed   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils   _innerWindowID)   currentInnerWindowID   ÿÿÿÿ   M   this.DataStoreCursor.prototype.observeÁ               U       ¹   
                              
            aSubject   aTopic   aData   wId   5  (  t             T  ¸    
;   5   : 5      QV   A5      (;   5   ¸   
A=   : QAC0   	QÔÍËÛÈ    QueryInterface   Ci'   nsISupportsPRUint64	   data   _innerWindowID   Services   obs   removeObserver-   inner-window-destroyed   _shuttingdown   ÿÿÿÿ   W   this.DataStoreCursor.prototype.stateMachineÁ                       ¹      m                                       aStore   aRevisionStore   aResolve   aReject    É  ¨  ~             ;    â    =   A5   : QA5      A5   x;   y   <;   y   O;   y   b;   y   u;   y   ;   	y   z   ³A¸   

T  T T T : Q   A¸   
T  T T T : Q   yA¸   
T  T T T : Q   \A¸   
T  T T T : Q   ?A¸   
T  T T T : Q   "A¸   
T  T T T : Q   Ún  ðu
u
u
u
u
uÊ  ØXØXØXØXØXØX    debug   StateMachine:    _state   _shuttingdown   STATE_INIT'   STATE_REVISION_INIT)   STATE_REVISION_CHECK   STATE_SEND_ALL'   STATE_REVISION_SEND   STATE_DONE!   stateMachineInit1   stateMachineRevisionInit3   stateMachineRevisionCheck'   stateMachineSendAll1   stateMachineRevisionSend!   stateMachineDone   ÿÿÿÿ   _   this.DataStoreCursor.prototype.stateMachineInitÁ               u       ¹   	   *                          	      D      aStore   aRevisionStore   aResolve   aReject	   self   request   Ç  â  ¡             ;    â    =   : QA5      -A;   0   QA¸   
T  T    T : QA   QT ¸   
@=   :    QV       0   QÓÌÚÐ
ÈÏ  ±    debug!   StateMachineInit   _revisionId   _state'   STATE_REVISION_INIT   stateMachine   openCursor	   prev   onsuccess   ÿÿÿÿ      this.DataStoreCursor.prototype.stateMachineInit/request.onsuccessÁ                 s       ¹   
                                          aEvent #  Þ  ¬                   T  5   5   5   0    Q      >0   Q      ;   0   Q         ¸   
=   @=   	@: : QâÑÕã	ÿÿÿ÷3    _revision   target   result   value   _objectId   _state   STATE_SEND_ALL   createTask   clear      ÿÿÿÿ   o   this.DataStoreCursor.prototype.stateMachineRevisionInitÁ               I       ¹                                	      D      aStore   aRevisionStore   aResolve   aReject	   self   request	  *  ´             ;    â    =   : QA   QA5   5   ¸   
   5          :    QÓÒÊ  ¸Èÿÿÿý    debug1   StateMachineRevisionInit   _dataStore   _db+   getInternalRevisionId   _revisionId   ÿÿÿÿ      this.DataStoreCursor.prototype.stateMachineRevisionInit/request<Á                 à       ¹   
   /                                    '   aInternalRevisionId í    »             T  ;       g      @0   Q      >0   Q      ;   0   Q      ¸   
            : Q      Y         5   ]   T  ]   0   Q      ;   	0   Q      ¸   
            : QÉ
Ñ
Ñ
Õ
é
ÏÔÎÕé=    undefined   _revisionId   _objectId   _state   STATE_INIT   stateMachine   _revision   revisionId%   internalRevisionId)   STATE_REVISION_CHECK   ÿÿÿÿ   q   this.DataStoreCursor.prototype.stateMachineRevisionCheckÁ                      ¹      6                                D      aStore   aRevisionStore   aResolve   aReject   changes	   self   requestR  %  Í       	      ;    â    =   : QY   Y   ]   Y   ]   Y   ]      QA   Q   ¸   
   5   5   ¸   
A5   	5   
C: :    QV       0   QÓÊÊÐÌâ  ×ÈÏ 0    debug3   StateMachineRevisionCheck   addedIds   updatedIds   removedIds   mozGetAll   _window   IDBKeyRange   lowerBound   _revision%   internalRevisionId   onsuccess   ÿÿÿÿ      this.DataStoreCursor.prototype.stateMachineRevisionCheck/request.onsuccessÁ            á      ¹      (                       [            aEvent   addRevisions   revisions	   list º  %  Ù                 W   Q>  Q   %m  QT  5    5   V  7  QV  5     Qx;   y   (;   y   F;   y   £;   y  +z  ¼    5   V  5   V  5   	9Q  V  5       5   q E    QV  5       5   
q    (    5   
V  5   V  5   	9Q  -V  5     QV      5   q       5   V  /Q   #    5   V  V  5   	9QV      5   
q       5   
V  /Q   V  >   *;   â   =   ;   =   : QÈÈÈ    @0   Q    >0   Q    ;   0   Q    ¸   
        : QÈÈÈÈÈV  #?W  QãV  T  5    5   Ù   ÿÿýÇÈY      QV       5   : QV       5   
: QV       5   : QZ     Q>  Q    gm  QT  5    5   V  7  QV  5   	   q    V  ;   0   QV  ¸   
V  : QÈV  #?W  QãV  T  5    5   Ù   ÿÿÿÈV  Ù   >   E    ;   0   Q    ¸   
        : Q    V  0   Q    ;   0   Q    ¸   
        : Q Ê  Ù& %  >-×Ïh åu
u
  îu
  þuÊ  àãXàÚãXÎÔÚÞÔÕXßÑÑÕéÈ  Ü7Ìÿÿÿßß 
Ë ØØØ
É&g[  -×Ð
ÏÔ 7Ìÿÿÿßß &ËÕéÔÕé=    target   result   operation   REVISION_ADDED!   REVISION_UPDATED!   REVISION_REMOVED   REVISION_VOID   addedIds   objectId%   internalRevisionId   updatedIds   removedIds	   dump5   Internal error: Revision "3   " should not be found!!!
   _revisionId   _objectId   _state   STATE_INIT   stateMachine   length   REVISION_SKIP	   push   STATE_DONE   _revisionsList'   STATE_REVISION_SEND   ÿÿÿÿ      addRevisions                9       ¹                                           obj !  ó!              T  K   Q   mW         T  V   7C9QãQLMÿÿÿáQNÈÌ0$Ê
â     ÿÿÿÿ          key          %          1   ÿÿÿÿ    ÿÿÿÿ         i                 	   data                    id        ÿÿÿÿ         i                 	   data        ½            >        J  ÿÿÿÿ               >   ë        ¿           À        ÿÿÿÿÁ           %           &        ÿÿÿÿ'           ²     ÿÿÿÿ   ¿  T   	      ÿÿÿÿ   e   this.DataStoreCursor.prototype.stateMachineSendAllÁ               D       ¹                                      D      aStore   aRevisionStore   aResolve   aReject	   self   request¿%  i)  3            ;    â    =   : QA   Q   ¸   
@=   :    QV       0   QÓÒ
ÈÏ L    debug'   StateMachineSendAll   openCursor	   prev   onsuccess   ÿÿÿÿ      this.DataStoreCursor.prototype.stateMachineSendAll/request.onsuccessÁ               â       ¹      3                                      aEvent   request &  d)  8      	            5    5   T  5   5   5   5      d      T  5   5   5   0    Q      >0   Q         ¸   
=   @=   @: : Q   ¸   	
      5   
5   ¸   
      5   C: :    QV       0   QìâÑã	ÿÿÿ÷
÷ÿÿÿîÈÏ K    _revision   revisionId   target   result   value   _objectId   createTask   clear      openCursor   _window   IDBKeyRange   lowerBound   onsuccess   ÿÿÿÿ   ­   this.DataStoreCursor.prototype.stateMachineSendAll/request.onsuccess/request.onsuccessÁ               ¶       ¹      '                                       aEvent   cursor (  ])  A            T  5    5      QV       E      ;   0   Q      ¸   
            : Q      V   5   0   Q         ¸   
=         5   =   	V   5   
: : QÒ
Õ
é
Ùù	ÿÿÿ÷C    target   result   _state)   STATE_REVISION_CHECK   stateMachine   _objectId   key   createTask   add      value   ÿÿÿÿ   o   this.DataStoreCursor.prototype.stateMachineRevisionSendÁ                Æ      ¹                               .      D      aStore   aRevisionStore   aResolve   aReject)  \1  O            ;    â    =   : QA5   Ù       3A;   0   QA¸   
            : QAA5   ¸   
:  0   QA5   5   	x;   
y   2;   y   X;   y   ;   y   ä;   y   þz     A¸   
=   A5   5   =   @: : Q   îÆ       Q   Q  ¸   
A5   5   :    QA   QV      0   QÈÇ    ÈÇÆ      Q   Q  ¸   
A5   5   :    QA   QV      0   QÈÇ   PÈÇ;   â   =   ;   =   : Q   *A¸   
            : Q   ÓÌÌàÎÉËh Qu
u
 nu
 u
 uÊ [ä	ÿÿÿ÷XÒ×
ÈÏ kZÒ×
ÈÏ ZßXàX    debug1   StateMachineRevisionSend   _revisionsList   length   _state)   STATE_REVISION_CHECK   stateMachine   _revision   shift   operation!   REVISION_REMOVED   REVISION_ADDED!   REVISION_UPDATED   REVISION_VOID   REVISION_SKIP   createTask   remove   objectId      get   onsuccess	   dump5   Internal error: Revision "3   " should not be found!!!
    ÿÿÿÿ          request    	   self                this.DataStoreCursor.prototype.stateMachineRevisionSend/request.onsuccessÁ                 ~       ¹   	   "                                       aEvent ý+  1-  b            T  5    5   ;      +   ¸   
        : Q     ¸   
=      5   5   =   T  5    5   : : QÓä
ëÍ hÿÿÿ÷:    target   result   undefined   stateMachine   createTask   add   _revision   objectId       ÿÿÿÿ          request    	   self               this.DataStoreCursor.prototype.stateMachineRevisionSend/request.onsuccessÁ                 Ë       ¹      .                           !            aEvent á-  Ù/  q            T  5    5   ;      +   ¸   
        : QT  5    5   5      5   5      +   ¸   
        : Q     ¸   
=      5   5   	=   
T  5    5   : : QÓäâä
ëÍ |ÿÿÿ÷:    target   result   undefined   stateMachine   revisionId   _revision%   internalRevisionId   createTask   update   objectId       ã   H   ÿÿÿÿÿÿÿÿ$            3  H   ÿÿÿÿÿÿÿÿt           ÿÿÿÿ   _   this.DataStoreCursor.prototype.stateMachineDoneÁ                 2       ¹                                             aStore   aRevisionStore   aResolve   aReject    {1  2        
      A¸    
:  QT A¸   
=   @A5   5   @: : QÌÞ	ÿÿÿ÷I    close   createTask	   done   _revision   revisionId   ÿÿÿÿ   I   this.DataStoreCursor.prototype.storeÁ                          ¹                                           12  c2              A5    5   Ì%    _dataStore   exposedObject   ÿÿÿÿ   G   this.DataStoreCursor.prototype.nextÁ                  F       ¹                                          	   selfv2  4              ;    â    =   : QA5      ;   5   pA   QA5   5       R ÓËÑ «    debug	   Next   _shuttingdown   Cr!   NS_ERROR_FAILURE   _window   Promise   ÿÿÿÿ   K   this.DataStoreCursor.prototype.next/<Á                 *       ¹                                      D      aResolve   aRejectc3  4  ¢                5    5   ¸   
       : QÛ £ ª    _dataStore   _db   cursorTxn   ÿÿÿÿ   O   this.DataStoreCursor.prototype.next/</<Á                 &       ¹                                          	   aTxn   aStore   aRevisionStore   ®3   4  ¤                ¸    
T T       : Q
å=    stateMachine   ÿÿÿÿ   O   this.DataStoreCursor.prototype.next/</<Á                 *       ¹                                             aEvent 24  4  §               ;    â        5   T  : : Q
âÿÿÿø.    createDOMError   _window   ÿÿÿÿ   I   this.DataStoreCursor.prototype.closeÁ                          ¹                                           ¨4  Ú4  ®            A5    ¸   
A: QÒ%    _dataStore   syncTerminated   ÿÿÿÿ   S   this.DataStoreCursor.prototype.createTaskÁ                 <       ¹                                             aOperation   aId   aRevisionId   aData    ó4  ©5  ²            ;    ¸   
Y   T  ]   T ]   T ]   T ]   A5   : ÑÈÈÈÎ ³P    Cu   cloneInto   operation   id   revisionId	   data   _window