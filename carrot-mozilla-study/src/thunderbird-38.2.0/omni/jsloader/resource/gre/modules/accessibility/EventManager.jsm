ç¿s¹                ¾     ¹   <   t                         -       0     resource://gre/modules/accessibility/EventManager.jsm     [         	                    3;   5       Q;   5      Q×   Q;   ¸   
=   : Q;   ¸   	
A=   
=   : Q;   ¸   	
A=   =   : Q;   ¸   	
A=   =   : Q;   ¸   	
A=   =   : Q;   ¸   	
A=   =   : Q;   ¸   	
A=   =   : Q;   ¸   	
A=   =   : Q;   ¸   	
A=   =   : QAf    0   QA   0   QA5   Y   Y   B]   ]      ]      ]      ]      ]      ]       ]   !   ]   "   	]   #   
]   $   ]   %   ]   &   ]   '   ]   (   ]   )   ]   *   ]   +   ]   ,;   ¸   -
Z  ;    5   .`   ;    5   /`  ;    5   0`  ;    5   1`  : ]   20   QY   ;   4R  ]   5>]   6B]   7   ]      ]      ]   8   ]   9   ]   :   ]   ;   3Q
 2ÐÐ
È	Õ3Ò)Ò4Ò4Ò;Ò=Ò8Ò8Ò8Ì) Ì,.ËË1ÊKÊ^Ê  Ê -Ê ]Ê lÊ Ê ±Ê æÊ õÊ ÊÊ !ÊÊ (ÊÊÐ'Î)Î)Î)Î ,Î 7È < A FÊ QÊ cÊ vÊ Ê Ð 2     Ci   Components   interfaces   Cu   utils   TEXT_NODE   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   ServicesG   resource://gre/modules/Services.jsm   Utils]   resource://gre/modules/accessibility/Utils.jsm   Logger   Presentationk   resource://gre/modules/accessibility/Presentation.jsm   TraversalRuleso   resource://gre/modules/accessibility/TraversalRules.jsm   Rolese   resource://gre/modules/accessibility/Constants.jsm   Events   States!   EXPORTED_SYMBOLS   EventManager   prototype   editing   editState   start	   stop   handleEvent   handleAccEvent   _setEditingMode   _handleShow   _handleHide   _handleText#   _handleLiveRegion#   _dequeueLiveEvent   _queueLiveEvent   present   onStateChange!   onProgressChange!   onLocationChange   onStatusChange!   onSecurityChange   generateQI-   nsIWebProgressListener1   nsISupportsWeakReference   nsISupports   nsIObserver   QueryInterface5   AccessibilityEventObserver   WeakMap   eventManagers   listenerCount   started   addListener   removeListener   getListener   observe                     EventManager                  ÿÿÿÿ      EventManager                 µ       ¹      A                                       aContentScope   aContentControl                    AT  0    QAT 0   QAA5    5   ¸   
A5    : 0   QAA5    5   ¸   
A5    : 0   QAA5    5   ¸   
A5    : 0   QAA5    5   ¸   	
;   
5   : ¸   
;   
5   : 0   QÊÊÓ#É%Ó%É'Ó'É)ÓÊ)Ê+Ê)É+$    contentScope   contentControl!   addEventListener	   bind'   removeEventListener   sendMsgFunc!   sendAsyncMessage   webProgress   docShell   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface   nsIWebProgress   ÿÿÿÿ      start                        ¹      P                                   w  +
  1       	      A5        ­;   ¸   
=   : QAC0    Q;   ¸   
A: QA5   ¸   
A;   5   	5   
;   5   	5   : QA¸   
=   AC: QA¸   
=   AC: QA¸   
=   AC: QA;   R  0   QA¸   
;   ¸   
@=   : : Q   1   Qv   Q;   ¸   
V   =   : QÈ      Ö
Õ6È8Ñ:ÎÏÐ:=ÓÓÓÉBÚÿÿÿóÉDÌà    _started   Logger   debug%   EventManager.start5   AccessibilityEventObserver   addListener   webProgress'   addProgressListener   Ci   nsIWebProgress!   NOTIFY_STATE_ALL   NOTIFY_LOCATION!   addEventListener   wheel   scroll   resize%   _preDialogPosition   WeakMap   present   Presentation   tabStateChanged   newtab   logException9   Failed to start EventManager    ÿÿÿÿ          x            Ú       Ü   %   ÿÿÿÿ   ÿÿÿÿ   	   stop                  À       ¹      4                                  Ø
  Õ  K             A5        ;   ¸   
=   : Q;   ¸   
A: QA5   ¸   
:  QA5   ¸   	
A: QA¸   

=   AC: QA¸   

=   AC: QA¸   

=   AC: Qt   !   '   Qv   QÈt   
   AB0    Qu OÕÑbÑÒÓÓÝ×YÊ    _started   Logger   debug#   EventManager.stop5   AccessibilityEventObserver   removeListener%   _preDialogPosition   clear   webProgress-   removeProgressListener'   removeEventListener   wheel   scroll   resize    ÿÿÿÿ          x        5   }        5   f             ÿÿÿÿ   ÿÿÿÿ      handleEvent                ¿      ¹      {                        )      D      aEventû  '  ^       
      ;    ¸   
A    : Q   5   x=   y   =   y   =   y   z  M  Q   Q>   Q   5   D   Q   5     QA5   ¸   	
@Y   V  >   =   
   
=   ]   C]   C]   Xô]   : QÈ   ÌÈ   Q@   Q   5   ;   5   r      5   W   Q   k   5   ;   5   r      5   5   W   Q   8   5   ;   5   r      5   5   5   W   QA¸   
;   ¸   
V   : : QÈ   È   1   Qv   Q;    ¸   
V   =   : QÈ    Öc wÊh lu
ou
uÊeÌßÍ
ÙÈimYosÕ
ÔÕ
ÙÕ
ÙØÿÿÿóYË~Ìà    Logger   debug	   type   wheel   scroll   resize   deltaX   deltaY   contentControl   autoMove   moveNext   movePrevious   moveMethod   onScreenOnly   noOpIfOnScreen   delay   target   Ci   nsIDOMWindow   nsIDOMDocument   defaultView   nsIDOMElement   ownerDocument   present   Presentation   viewportChanged   logException1   Error handling DOM event   ÿÿÿÿ      handleEvent/<Å                          ¹                                             L  _             Z  =    `      5   `  ÉÏ    DOMEvent	   type    ÿÿÿÿ          attempts       delta        ÿÿÿÿ          window        ÿÿÿÿ          x            {     G      ÿÿÿÿÿÿÿÿÁ             È   Å   ÿÿÿÿÿÿÿÿ             %   ÿÿÿÿ   ÿÿÿÿ      handleAccEvent                «      ¹   b   ¢                             D      aEventS  G(               ;    ¸   
A    : Q;   5   =   E   ZQ   5   ;   5   E   ?Q   5   5   	5   
E   %Q   5   5   	5   
5   =   H      5   x;   5   y   ¾;   5   y  ;   5   y   ;   5   y  F;   5   y  W;   5   y  N;   5   y   ;   5   y  ;   5   y  3;   5   y  $;   5   y  ;   5   y  2;   5   y  Þz  U  Q  Q  Q  Q   Q   5   ¸   
;   5   : 5      QV   5     QV  E   QV  5   ;    5   !   È  Ø   ¸   
;   5   ":   QV  5   #  QV  5   $  QA5   %5   &E   .Q;   ¸   '
V  : ¸   (
;   )5   *:        5   ¸   +
:  QA¸   ,
;   -¸   .
V  V  V  V   5   /V   5   0   5   1: : QÈ  È  Q   Q   ¸   
;   5   2:    Q;   ¸   '
V   :   QV  ¸   (
;   )5   3:    LA¸   ,
;   -¸   4
   5   V   5   5   =   6   
=   7: : Q   dV  ¸   (
;   )5   8:    GA¸   ,
;   -¸   4
   5   V   5   5   =   9   
=   :: : QÈ  öÈ   Q   5      QV   A5   ;5   <5   H   $A¸   ,
;   -¸   =
V   : : QÈ  ¡ÈA5   ;¸   >
   5   : Q    Q  Q   Q   5   ¸   
;   5   ?:    Q   ¸   
;   5   @: 5   A  Q;   ¸   '
V   :   QV  ¸   (
;   )5   *:    wA¸   B
   V  : QV  ¸   (
;   )5   C:    EA¸   ,
;   -¸   D
V   ¸   E
>×ÿ: V  V  >>   5   1: : QÈ  {È  Q   Q   ¸   
;   5   F:    QV   5   G¸   H
:  =   II   È  ,;   ¸   J
   5   :   QAV     =   K   
=   LÁ
V   : QA5   M   $A¸   N
=   OY   V  ]   P: QÈ  ºÈA¸   L
   : Q  £   Q   ¸   
;   5   Q:    QA¸   K
V   : QÈ  iÈ  Q   QA¸   R
   f   : 5   S   Q5   T  QQ   5   1D   
QV      A¸   U
   V   V  : QÈ  øÈ  Q   Q   5      Q   5     QA¸   B
   : QZ  ;    5   V`   ;    5   W`  ;    5   X`  ¸   Y
V   5   : >   A5   ;¸   >
V   : QA5   M   A¸   N
=   Z: QÈ  =È   QA5   ;5   <5      Q   5      5   HD   -QV   E   #Q;   ¸   [
V      5   :    È   ÔA5   \¸   ]
   5   5   ^V   : QA5   ;¸   >
   5   Y   Xô]   _: QÈ   È  Q   QA5   ;5   <5      Q   5     QV   V  HD   Q;   ¸   `
V   : V  H   $A¸   ,
;   -¸   a
V  : : QÈÖ  ÖÛÚßÊh Êp  ¬Êp  ½Êp  ÅÊp  ÊÊp  ÝÊp  ìÊp  ñÊp  ÷ÊpÊp Êp Êp !ÊpÊ  ÞÑÊ  ÍÎÞYÌÊ  ÈÎÎÑÐØ
ÕÈØÒÊ  ¦
  ¥  ªYÌÖÈÐÈÕG
ÈÌÊÉ
Ô  ²  ±
ÉÕ
ÈÌÊÉ
Ô  ·  ¶
  »YÏÕ
ØÿÿÿóYÛXÒÛÈÌÊ  ÍÍ  ÓÐÈÕ
ÕÕâ/Ô  ×ÿÿÿóYÌÌÊ  ßÈÐÉYÖ	È
Þ
Ò*ÉÿÿÿÖYÑXÖÈÐYÌÍ  ú%ÚÔ
ÙYÌÏÏÑÎÎÞ 	

ÕÑYÕÛäYäÜ2ÈÿÿÿÎYÌÕÏÏÐÈ
Øÿÿÿó    Logger   debug   Utils   MozBuildApp   browser   eventType   Events+   VIRTUALCURSOR_CHANGED%   accessibleDocument   DOMDocument   doctype	   name   window   STATE_CHANGE   NAME_CHANGE   SCROLLING_START!   TEXT_CARET_MOVED1   OBJECT_ATTRIBUTE_CHANGED	   SHOW	   HIDE   TEXT_INSERTED   TEXT_REMOVED   FOCUS-   DOCUMENT_LOAD_COMPLETE   VALUE_CHANGE   accessible   QueryInterface   Ci+   nsIAccessibleDocument   virtualCursor   position	   role   Roles   INTERNAL_FRAMEK   nsIAccessibleVirtualCursorChangeEvent   reason   oldAccessible   editState   editing   getState   contains   States   FOCUSED   takeFocus   present   Presentation   pivotChanged   startOffset   endOffset   isFromUserInput;   nsIAccessibleStateChangeEvent   CHECKED   actionInvoked   isEnabled   check   uncheck   SELECTED   select   unselect   contentControl   vc   nameChanged   autoMove#   nsIAccessibleText7   nsIAccessibleCaretMoveEvent   caretOffset   _setEditingMode   EDITABLE)   textSelectionChanged   getTextQ   nsIAccessibleObjectAttributeChangedEvent!   changedAttribute   toString   aria-hidden   isHidden   _handleHide   _handleShow   inTest   sendMsgFunc'   AccessFu:AriaHidden   hidden-   nsIAccessibleHideEvent#   _handleLiveRegion   liveRegion   isPolite   _handleText   CHROME_WINDOW   DOCUMENT   APPLICATION   indexOf!   AccessFu:Focused   isInSubtree%   _preDialogPosition   set   DOMNode   delay%   getEmbeddedControl   valueChanged   ÿÿÿÿ   !   handleAccEvent/<Å                   D       ¹                                 	          o  ò               Z  =    `   ;   ¸   
   : `  ;   ¸   
   5   : `  ÉØÞ.    A11yEvent   Logger   eventToString%   accessibleToString   accessible    ÿÿÿÿ          pivot       position       event       reason       oldAccessible        ÿÿÿÿ          event       state        ÿÿÿÿ          acc        ÿÿÿÿ          acc       caretOffset       state        ÿÿÿÿ          evt       hidden        ÿÿÿÿ          evt        ÿÿÿÿ          liveRegion       isPolite                      	   text      all                   ÿÿÿÿ          acc       doc        ÿÿÿÿ          position        ÿÿÿÿ          position       target       _  O  ÿÿÿÿÿÿÿÿÒ         ÿÿÿÿ¨            °  
  ÿÿÿÿÿÿÿÿ´           »  T   ÿÿÿÿÿÿÿÿ	           2    ÿÿÿÿÿÿÿÿ/           7  ¿   ÿÿÿÿÿÿÿÿ~     	   ÿÿÿÿð     	        :   ÿÿÿÿÿÿÿÿA           I  o   ÿÿÿÿÿÿÿÿ²        	   º  ¹   ÿÿÿÿÿÿÿÿm        
   t  º   ÿÿÿÿÿÿÿÿÖ        ÿÿÿÿ(           0  z   ÿÿÿÿ   ÿÿÿÿ      _setEditingMode                    ¹                              2            aEvent   aCaretOffset   acc   accText   characterCount   caretOffset   state   editState  u(  Å-  -            T  5       Q  Q  QT   QV   ¸   
;   5   : W  Q     Qv  QÈ    V     0V  5   W  QV  ;   H   V  5   W  Q;   ¸   
V   :   QY   V  ¸   	
;   
5   : E   QV  ¸   	
;   
5   : ]   V  ¸   	
;   
5   : ]   V  >H]   V  V  H]     QV  5    E   QV  5   A5   5   H   V  5   A5   5   I   )A¸   
;   ¸   
V  5   : : QV  5   A5   5   ID   QQV  5   A5   5   ID   6QV  5   A5   5   ID   QV  5   A5   5   I   A¸   
=   V  : QAV  0   QÍ	ÈÕ
ÍÓÎÊÎ @ÐÈÕ	ÉÕÈÕÈËÓåÕÝÿÿÿóÛÛÛÕÕË    accessible   QueryInterface   Ci#   nsIAccessibleText   characterCount   undefined   caretOffset   Utils   getState   contains   States   EDITABLE   FOCUSED   editing   MULTI_LINE   multiline   atStart   atEnd   editState   present   Presentation%   editingModeChanged   sendMsgFunc   AccessFu:Input    ÿÿÿÿ         e         "   "       E      ÿÿÿÿ   ÿÿÿÿ      _handleShow                      ¹      1                                      aEvent   liveRegion   isPolite ë-  Å/  ]      	      A¸    
T  f    : 5      Q5     QQV       T  5   5   ;   5   H   A¸   
;   5   	V   : QA¸   

;   ¸   
V   V  B: : QË ^!ÚØÚÝÿÿÿóC #   _handleLiveRegion   liveRegion   isPolite   accessible	   role   Roles   TEXT_LEAF#   _dequeueLiveEvent   Events	   HIDE   present   Presentation                     additions      all                  ÿÿÿÿ      _handleHide              ¸      ¹       m                        +            aEvent   liveRegion   isPolite   acc ë/  4  l            A¸    
T  f    : 5      Q5     QQT  5     QV      CV  5   ;   5   H   A¸   
;   5   	V   V  : Q  >  Q;   
¸   
A5   5   5   :   QV  5   E   TQ;   
¸   
V  5   : ¸   
;   5   : D   "Q;   
¸   
V  5   V  :    ±  QA5   ¸   
T  5   5   : D   QT  5   D   QT  5     QV      :V  5   W  Q   &  Qv  QV  5   W  QÈ    A5   ¸   
V  Y   C]   Xô]   : QÈÈÈÈ m!ÚÍ>Ôã
ÜÈÏÕ	ÝÙ
ËÚÉÛÓÌÕÑÈ  v #   _handleLiveRegion   liveRegion   isPolite   accessible	   role   Roles   TEXT_LEAF   _queueLiveEvent   Events	   HIDE   Utils!   getVirtualCursor   contentScope   content   document   position   getState   contains   States   DEFUNCT   isInSubtree%   _preDialogPosition   get   DOMNode#   targetPrevSibling   targetParent   previousSibling   parent   contentControl   autoMove   moveToFocused   delay                     removals      all                   ÿÿÿÿ         vc                    position                    x         Y           8  ÿÿÿÿ     «          m           ÿÿÿÿ      _handleText              »      ¹                             .            aEvent   aLiveRegion   aIsPolite   event   isInserted   txtIface	   text   modifiedText   >4  9              T  ¸    
;   5   :    QV   5     QT  5   ¸    
;   5   :   Q=     QV  ¸   
>;   5   5   : W  Q   +  Qv  QV  5   	   
V  pÈ    V   5   
¸   
     =   :   QV  V   5   
E   QV  ¸   
:      T    T  5   ;   5   H   *A¸   
;   5   T T V  : Q   DA¸   
;   5   T : QA¸   
;   ¸   
T T BV  : : Q   FA¸   
;   ¸   
T  5   V  V   5   V   Ù   V  V  : : QÔÈÎÙÈÊ$ÛÍÌÉÌ ÚÈÔ.Ë  Ó%Ø ¤ÉÙÛ ¨ÿÿÿóÉàÚ ¬ÿÿÿó8    QueryInterface   Ci9   nsIAccessibleTextChangeEvent   isInserted   accessible#   nsIAccessibleText      getText/   TEXT_OFFSET_END_OF_TEXT   characterCount   modifiedText   replace	   trim   eventType   Events   TEXT_REMOVED   _queueLiveEvent#   _dequeueLiveEvent   present   Presentation   liveRegion   textChanged   start   length    ÿÿÿÿ         x       \uFFFC        V   (             ÿÿÿÿ   ÿÿÿÿ   #   _handleLiveRegion               Ù       ¹      I                                      aEvent   aRelevant   parseLiveAttrs#   getLiveAttributes	   live   relevant	   busy   atomic   memberOf   isRelevant  Ñ9  !@  ±            T  5       Y          Q      QV   T  : 5     Q5     Q5     Q5     Q5     QQV   D   QV  =   H   Y   ;   ¸   
V  T :   QV      Y   Y   T  5   	]   
V  =   H]   ÈË ÄÊ ÓÈ+ûÕ ÜÓÈÍÐ    isFromUserInput	   live   relevant	   busy   atomic   memberOf   off   Utils'   matchAttributeValue   accessible   liveRegion   polite   isPolite   ÿÿÿÿ      parseLiveAttrs                      ¹      )                           	            aAccessible   attrs P:  à;  µ            ;    ¸   
T  :    QV   5      \Y   V   5   ]   V   5   D   Q=   ]   V   5   ]   V   5   	]   
V   5   ]   @
ÏÈÉ
Î
Ù
Î
Î
Ï    Utils   getAttributes   container-live	   live%   container-relevant   additions text   relevant   container-busy	   busy!   container-atomic   atomic   member-of   memberOf   ÿÿÿÿ   #   getLiveAttributes                      ¹      ?                                      aEvent   liveAttrs   parent <  ó=  Ä                  T  5    :    QV      
V   T  5     Q   9m      V  : W   QV      
V   V  5   W  QãV  ÿÿÿÆY   
ÓÈ
Í(? ÊÏÈ
Î ÊË Ñ
    accessible   targetParent   parent    ;   ?      ÿÿÿÿ   #   _dequeueLiveEvent              È       ¹      /                                     aEventType   aLiveRegion   domNode  S@  B  æ      	      T 5       QA5   E   QA5   ¸   
V   :      Q  QA5   ¸   
V   :   QV  >7  QV  5   T  H   W;   5   ¸   
V  5   : QV  ¸   	
:  QV  Ù   
>H   A5   ¸   
V   : QÈÍÝ Ñ
ÑÈ
ËÍÞÏË
Ö èD    DOMNode   _liveEventQueue   has   get   eventType   Utils   win   clearTimeout   timeoutID   shift   length   delete    ÿÿÿÿ         queue       nextEvent        4      ÿÿÿÿ   ÿÿÿÿ      _queueLiveEvent               ã       ¹      G                                       aEventType   aLiveRegion   aIsPolite   aModifiedText   eventHandler   domNode    FB  ÅD  õ            A5        A;   R  0    QY   T  ]   ;   5   ¸   
A5   ¸   
A: ×;   ¸   	
T T CT : : ]   
   QT 5     QA5    ¸   
V  :    -A5    ¸   
V  : ¸   
V   : Q   &A5    ¸   
V  Z  V   `   : QÉÈß Ö ûÍ  ÍÑ(èÕ#ÈÿÿÿÝ2    _liveEventQueue   WeakMap   eventType   Utils   win   setTimeout   present	   bind   Presentation   liveRegion   timeoutID   DOMNode   has   get	   push   set   ÿÿÿÿ      present                        ¹                                          #   aPresentationData ãD  9E              A¸    
=   T  : QÔ8    sendMsgFunc!   AccessFu:Present   ÿÿÿÿ      onStateChange              ø       ¹      D                                     aWebProgress   aRequest   aStateFlags   aStatus   tabstate   loadingState   loadedState    cE  4H              =       Q;   5   5   ;   5   5     Q;   5   5   ;   5   5     QT V  V     =   W   Q   0T V  V  E   QT  5       =   	W   QV      U  Q;   
5   ¸   
T  5   5   :   QA¸   
;   ¸   
V  V   : : QÈÊÏÕÏÕÍÏÓÉÊË
Þ	ÈÜÿÿÿó        Ci-   nsIWebProgressListener%   STATE_TRANSFERRING#   STATE_IS_DOCUMENT   STATE_STOP!   STATE_IS_NETWORK   loading#   isLoadingDocument   loaded   Utils   AccRetrieval!   getAccessibleFor   DOMWindow   document   present   Presentation   tabStateChanged    ÿÿÿÿ         docAcc        ¨   O   ÿÿÿÿ   ÿÿÿÿ   !   onProgressChange                          ¹                                             dH  iH  !             1    ÿÿÿÿ   !   onLocationChange               K       ¹   	                                          aWebProgress   aRequest   aLocation   aFlags   docAcc    H  cI  #            ;    5   ¸   
T  5   5   :    QA¸   
;   ¸   
V   =   : : QÞ	ÈÝÿÿÿó=    Utils   AccRetrieval!   getAccessibleFor   DOMWindow   document   present   Presentation   tabStateChanged   newdoc   ÿÿÿÿ      onStatusChange                          ¹                                             I  I  (             -    ÿÿÿÿ   !   onSecurityChange                          ¹                                             ÄI  ÉI  *             1    ÿÿÿÿ      start                   @       ¹                                           SL  ûL  F            A5    D   QA5   >H   ;   5   ¸   
A=   B: QAC0    QÔÜÈ    started   listenerCount   Services   obs   addObserver!   accessible-event   ÿÿÿÿ   	   stop                   K       ¹                                           HM  =N  Q            A5        ;   5   ¸   
A=   : QA5   ¸   
:  QA>0   QAB0    QÛÑÈÈ    started   Services   obs   removeObserver!   accessible-event   eventManagers   clear   listenerCount   ÿÿÿÿ      addListener                      ¹   
   )                                       aEventManager   content DO  ÉP  c            T  5    5      QA5   ¸   
V   :     A5   #?
0   QQA5   ¸   
V   T  : Q;   ¸   
=   A5   : QA¸   	
:  QÒÑÕØÑ jÌ    contentScope   content   eventManagers   has   listenerCount   set   Logger   debug]   AccessibilityEventObserver.addListener. Total:   start   ÿÿÿÿ      removeListener               x       ¹   	   ,                                       aEventManager   content ãQ  ¦S  v            T  5    5      QA5   ¸   
V   :     A5   #?
0   QQ;   ¸   
=   A5   : QA5   >H   A¸   
:  QÒÑÕÑ |ÈÌ    contentScope   content   eventManagers   delete   listenerCount   Logger   debugc   AccessibilityEventObserver.removeListener. Total:	   stop   ÿÿÿÿ      getListener               S       ¹      "                                       content   eventManager   parent ÃT  V              A5    ¸   
T  :    QV      
V   T  5     QV  T  H   @A¸   
V  : ÐÈÍÈÌ    eventManagers   get   parent   getListener   ÿÿÿÿ      observe              ¬      ¹                              +            aSubject   aTopic   aData   event   content   eventManager   XV  ÿZ              T =    I   T  ¸   
;   5   :    QV   5       L;   ¸   
=   ;   ¸   
V   : =   	;   ¸   

V   5   : : QV   5   5     QA¸   
V  :   QV   D   QV  5       ;   5   =   HE   QV  ;   5   r    g;   ¸   
=   ;   ¸   
V   : =   	;   ¸   

V   5   : =   ;   ¸   

V   5   : : QV  ¸   
V   : Qt   :   >  Qv  Q;   ¸   
V  =   : QÈt   
    u ÉÔÈÊÌÐÈÕ ¡ÓÌÈËÊÖ
ÐÌÐ
ÈÕ
ÈÕ
 ­ ³ÝÌäÈ !   accessible-event   QueryInterface   Ci%   nsIAccessibleEvent%   accessibleDocument   Logger   warningw   AccessibilityEventObserver.observe: no accessible document:   eventToString   accessible:%   accessibleToString   accessible   window   getListener   _started   Utils   MozBuildApp   browser%   nsIDOMChromeWindowe   AccessibilityEventObserver.observe: ignored event:   document:   handleAccEvent   logException=   Error handing accessible event    ÿÿÿÿ         x        S  M        S         q  %   ÿÿÿÿ