çżsš                K     š   4   )                         !            resource://gre/modules/accessibility/ContentControl.jsm     -B         	                       n    ;   5   o    Qn   ;   5   o   Q;   ¸   
=   : Q;   ¸   
A=   	=   
: Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : QAf    6   Q?   Q×   Q×   QA   6   QA5   Y   f   ]      ]      ]      a      a      a      ]       	]   !   
]   "   ]   #   ]   $   ]   %   ]   &   ]   '   ]   (   ]   )   ]   *   ]   +   ]   ,   ]   -   ]   .   ]   /;   ¸   0
Z  ;    5   1`   ;    5   2`  : ]   36   QŐŐŐ3Ň	)Ň4Ň4Ň8Ň=Ň;Ě+ČČĚ "ËĘ+Ę3Ę;Ę?ĘCĘGĘ^Ę  Ę  Ę  ĄĘ  ŞĘĘ Ę +Ę BĘ KĘ wĘ Ę Ę ˛Ę ńĘ öĐ'ÎÎ öÎ    Ci   Components   interfaces   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   ServicesG   resource://gre/modules/Services.jsm   Utils]   resource://gre/modules/accessibility/Utils.jsm   Logger   Rolese   resource://gre/modules/accessibility/Constants.jsm   TraversalRuleso   resource://gre/modules/accessibility/TraversalRules.jsm   Presentationk   resource://gre/modules/accessibility/Presentation.jsm!   EXPORTED_SYMBOLS=   MOVEMENT_GRANULARITY_CHARACTER3   MOVEMENT_GRANULARITY_WORD=   MOVEMENT_GRANULARITY_PARAGRAPH   ContentControl   prototype%   messagesOfInterest   start	   stop   document   window   vc   receiveMessage!   handleMoveCursor   handleEvent#   handleMoveToPoint#   handleClearCursor   handleAutoMove   handleActivate   adjustRange/   handleMoveByGranularity%   presentCaretChange   handleMoveCaret   getChildCursor   sendToChild   sendToParent   autoMove   cancelAutoMove   generateQI1   nsISupportsWeakReference%   nsIMessageListener   QueryInterface                     ContentControl                  ˙˙˙˙      ContentControl                 :       š                                              aContentScope   0               A;   ¸   
T  : 6    QA;   R  6   QA;   R  6   QĐÉÉÉ    _contentScope   Cu!   getWeakReference   _vcCache   WeakMap)   _childMessageSenders         
         '   AccessFu:MoveCursor   )   AccessFu:ClearCursor   )   AccessFu:MoveToPoint   #   AccessFu:AutoMove   #   AccessFu:Activate   %   AccessFu:MoveCaret   5   AccessFu:MoveByGranularity                  ˙˙˙˙      cc_start                       š   	   #                                      csˇ  w  +       	      A5    ¸   
:     QA5   - Á
:    Q   %m5   W  QV   ¸   
V  A: QăQ¸   
:  5   ˙˙˙ĚČ V   ¸   
=   A: QÍČŐ89ŃÔ-Ë˙˙˙ěŇ0Ő'    _contentScope   get%   messagesOfInterest   value%   addMessageListener	   next	   done!   addEventListener   mousemove    ˙˙˙˙         message       /   9       %   D   ˙˙˙˙   ˙˙˙˙      cc_stop                       š   	   #                                      cs  X  3       	      A5    ¸   
:     QA5   - Á
:    Q   %m5   W  QV   ¸   
V  A: QăQ¸   
:  5   ˙˙˙ĚČ V   ¸   
=   A: QÍČŐ89ŃÔ5Ë˙˙˙ěŇ8Ő*    _contentScope   get%   messagesOfInterest   value+   removeMessageListener	   next	   done'   removeEventListener   mousemove    ˙˙˙˙         message       /   9       %   D   ˙˙˙˙   ˙˙˙˙   M   this.ContentControl.prototype.documentÁ                          š      
                                      i  §  ;             A5    ¸   
:  5   5   ÍÎ*    _contentScope   get   content   document   ˙˙˙˙   I   this.ContentControl.prototype.windowÁ                          š      
                                      ś  ë  ?             A5    ¸   
:  5   ÍÉ!    _contentScope   get   content   ˙˙˙˙   A   this.ContentControl.prototype.vcÁ                          š      	                                      ö  0	  C             ;    ¸   
A5   : Ň&    Utils!   getVirtualCursor   document   ˙˙˙˙   #   cc_receiveMessage                ß       š      5                              @      aMessage_	  Ů  G             ;    ¸   
A    : QA¸   
:  Q   QA=      5   ¸   
×	: 7   QV      #V   ¸   
A:    : Q   $;    ¸   
=      5   : QČ   K   Qv   Q;    ¸   	
V   =   
;   ¸   
   5   : : QČ    ÖOĚQq
ŮĘŢĺXĚĚß(YË[    Logger   debug   cancelAutoMove   handle	   name   slice	   bind   warningE   ContentControl: Unhandled message:   logException1   Error handling message: 	   JSON   stringify	   json   ˙˙˙˙   '   cc_receiveMessage/<Ĺ                   :       š                                            }	  ř	  H             Z  =    `      5   `  ;   ¸   
   5   : `  ÉÎŢ ;   ContentControl.receiveMessage	   name	   JSON   stringify	   json    ˙˙˙˙       	   func        ˙˙˙˙          x         #   u      $   o   ˙˙˙˙      ?   ˙˙˙˙   ˙˙˙˙   '   cc_handleMoveCursor              ě      š                               (             aMessage   origin   action   adjustRange   vc   moved   *  ^             T  5    5      QT  5    5     QT  5    5     QA5     QV   =   E   QA¸   
V  T  :    V  E   $QA¸   
V  5   V  =   H:    V  V  Á
;   	T  5    5   
7:   QV     łV   =   H   6;   ¸   
T  5   : ¸   
=   Y   : Q   n  QV    QV  =   H   =   W  Q   V  =   H   =   W  QA¸   
V  T  Y   V  ]   C: QČ   zA5   ¸   
T  5   :  E   QV   =   I   A¸   
T  : Q   8A5   ¸   
:  ¸   
=   ;   ¸   
V  : : QŇŇŇËdßfiĺmŢČo  ŽĘ1rŢĘrÉtwÉĘ
ĎĘ
Ę  Ô!Ę˙˙˙ßĘŐĘĘÔÜĐ  % 	   json   origin   action   adjustRange   vc   child   sendToChild   position   moveNext   TraversalRules	   rule   Utils#   getMessageManager   target!   sendAsyncMessage)   AccessFu:ClearCursor   moveFirst   movePrevious   moveLast)   _childMessageSenders   has   top   sendToParent   _contentScope   get!   AccessFu:Present   Presentation   noMove    ˙˙˙˙         childAction        	  h   ˙˙˙˙   ˙˙˙˙      cc_handleEvent                        š      0                                        aEvent S  {               T  5    =   H   DA¸   
Y   Y   T  5   ]   T  5   ]   =   ]   ]   	: Q;   
¸   
T  5   :     T  ¸   
:  Q   T  5   ¸   
:  QÎČ
ÍÍĎ  ÔÓÓ 	   type   mousemove#   handleMoveToPoint   screenX   x   screenY   y   Simple	   rule	   json   Utils#   getMessageManager   target   preventDefault   focus   ˙˙˙˙   )   cc_handleMoveToPoint               Đ       š      %                                        aMessage   x   y	   rule   dpr °                 Z  T  5    5   `   T  5    5   `  - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     QQQ;   T  5    5   7  QA5   5   	  QA5   
¸   
V  V   V  V  V  C: Q
Ńâ˙˙˙ĺÉçŘŘĐč2 	   json   x   y	   next	   done   value   TraversalRules	   rule   window!   devicePixelRatio   vc   moveToPoint   ˙˙˙˙   )   cc_handleClearCursor               g       š   
                                           aMessage   forwarded Á  ś  Ą             A¸    
A5   T  :    QA5   @6   QV       %A5   ¸   
:  ¸   
=   : QA5   5   ¸   	
:  QŃČÍŕÖ#    sendToChild   vc   position   _contentScope   get!   sendAsyncMessage-   AccessFu:CursorCleared   document   activeElement	   blur   ˙˙˙˙   #   cc_handleAutoMove                        š                                              aMessage ĺ    Ş             A¸    
@T  5   : QŐ#    autoMove	   json   ˙˙˙˙   #   cc_handleActivate                    š      s                         "      @      aMessage%   activateAccessible   focusedAcc1   getActivatableDescendant   vcL  6#  Ž             A       Q;    5   ¸   
A5   5   :   QV  E   0QA5   5   V  HE   QV  5   ;   5   	H   Č  Q  Q  Q  QV  ¸   

;   5   :   QV  5     Q   5   5     QV  ¸   
>V  5   :   QV  >E   QV  V  5      V  V  6   QA¸   
V  V  V  5   : QČČA      QA5     QA¸   
V     @C:     :  QV  5     QV      V  : D   
QV  : QČË  ĺŃË  ĺČŕÔÝ
Ő
Č
Î
Ô
ŐČÚÎÝĚ ËÓË
ÎĎÍ˙˙˙í 6    Utils   AccRetrieval!   getAccessibleFor   document   activeElement   vc   position	   role   Roles   ENTRY   QueryInterface   Ci#   nsIAccessibleText   caretOffset	   json   offset   getText   characterCount%   presentCaretChange   sendToChild   ˙˙˙˙   I   cc_handleActivate/activateAccessibleĹ                M      š       Ę                        L      @      aAccessiblev  ]  Ż       "      ;    ¸   
A    : Q  5   5   E   Q;   ¸   
   :           Qv   QČČ       5   >      ¸   
>: Q  s  Q  Q  
Q  	Q  Q  Q  Q  Q  Q  Q  Q  Q   Q;   ¸   
   :    QV   E   QV   5   >   V   ¸   
>: Q;   5   	¸   

A5   :   QY     QY     QY     QY     QV  ¸   
V  V  V  V  : QY     QY     QY     QY     	Q   ¸   
V  V  V  V  	: Q;   ¸   
V  5   V  5   V  5   ×:   
Q;   ¸   
V  5   V  5   V  	5   ×:   Q   5   D   Q   5   5     Qf   - Á
:    Q   qm5   W  Q  QA5   ¸   
=   :   QV  ¸   
V  CCA5   V  
V  >>>BBBB>@: QV  ¸   
V  : QČăQ¸   
:  5   ˙˙˙Č Č;   ¸   
   :     >A5   ¸   
:  ¸   
=   ;   ¸   
   =   : : QÖ2Ő
Ń
ĚËĚÖ˙ĎŃ
ČŐ
Đ  Ę×	ČĘĘĘĘßĘĘĘĘŕěČěČäÔ8  ×ŇČ
×Ń  Ř

Ô  ÖË˙˙˙ęÓ  Ţ
ŃÜÖ
  ŕ<    Logger   debug	   json   activateIfKey   Utils/   isActivatableOnFingerUp   actionCount   doAction%   getEmbeddedControl   AccRetrieval!   getAccessibleFor   document   getBounds	   Math   round   value   DOMNode   parent   createEvent   MouseEvents   initMouseEvent   window   dispatchEvent	   next	   done   _contentScope   get!   sendAsyncMessage!   AccessFu:Present   Presentation   actionInvoked   click   ˙˙˙˙   M   cc_handleActivate/activateAccessible/<Ĺ                   '       š                                              ú  °             Z  =    `   ;   ¸   
   : `  ÉŮ( %   activateAccessible   Logger%   accessibleToString    ˙˙˙˙          e        ˙˙˙˙          control       docAcc    	   docX    	   docY    	   docW    	   docH    	   objX    	   objY    	   objW    	   objH       x       y    	   node                         mousedown      mouseup                               eventType                    evt       o             6      N      ˙˙˙˙˙˙˙˙\                a  ˙˙˙˙   e           |  _          ˙˙˙˙         accText       oldOffset       newOffset    	   text       ˙˙˙˙   U   cc_handleActivate/getActivatableDescendantĹ                s       š      7                                     aAccessible (!  q"  ÷             T  5    >   	T  T  5      Q    Cm  Q      V   :   QV     V  ČČČV   5   W   QăV   ˙˙˙źČ@ĘÍ C5I:ĎČ
É  ü2Î˙˙˙űĚ     actionCount   firstChild   nextSibling    ˙˙˙˙          acc                     activatable        &   I          U   ˙˙˙˙   (   .           S         ˙˙˙˙T             ˙˙˙˙         position       l   ż   ˙˙˙˙˙˙˙˙)            _  4   ˙˙˙˙   ˙˙˙˙      cc_adjustRange                    š      h                                     aAccessible   aStepUp   acc	   elem  _#  ´&              ;    ¸   
T  : D   	QT     QV   ¸   
;   5   : Q     Qv  QBČČ    V   5     QV      BV  5   =   HE   QV  5   =   	H   v  QV  T    =   
   
=   Á
:  QA5   ¸   
=   :   QV  ¸   
=   CC: QV  ¸   
V  : QČ     Q  QA5   ¸   
=   :   QT    V  5      V  5     QV  ¸   
=   BC@BBBBV  >: 
QV  ¸   
V  : QČCĎŃŢĚËÎäqËČ
Ú
ŇČÖŮĚ
ŇČ
áËŃ #Ô    Utils%   getEmbeddedControl   QueryInterface   Ci%   nsIAccessibleValue   DOMNode   tagName   INPUT	   type   range   stepDown   stepUp   document   createEvent   UIEvent   initEvent   change   dispatchEvent   KeyboardEvent   DOM_VK_DOWN   DOM_VK_UP   initKeyEvent   keypress    ˙˙˙˙         x        ˙˙˙˙         evt        ˙˙˙˙         evt       keycode         !          @      ˙˙˙˙˙˙˙˙N                k   ˙˙˙˙     |   ˙˙˙˙   ˙˙˙˙   5   cc_handleMoveByGranularity               Á       š      A                                        aMessage   direction   granularity ő&  w)  +            T  5    5      Q  QT  5    5   x;   y   ;   y   #z   7;   5   5   W  Q    ;   5   5   W  Q   V   =   	H   A5   
¸   
V  : Q   )V   =   H   A5   
¸   
V  : QŇÍhNu
uĘ 1ÔXÔXĘÚĘŐ$ 	   json   direction   granularity=   MOVEMENT_GRANULARITY_CHARACTER3   MOVEMENT_GRANULARITY_WORD   Ci%   nsIAccessiblePivot   CHAR_BOUNDARY   WORD_BOUNDARY   Previous   vc%   movePreviousByText	   Next   moveNextByText   ˙˙˙˙   +   cc_presentCaretChange                \       š                                            aText   aOldOffset   aNewOffset   Ž)  Ĺ*  B      	      T T I   T   Q;    ¸   
T  T T T T C:    QA5   ¸   
:  ¸   
=   V   : QČË
Ő EČĺ D$    Presentation)   textSelectionChanged   _contentScope   get!   sendAsyncMessage!   AccessFu:Present    ˙˙˙˙          msg           N   ˙˙˙˙   ˙˙˙˙   %   cc_handleMoveCaret              ł      š      Đ                         4             aMessage   direction   granularity   accessible   accText   oldOffset	   text   start   end ö*  1  K            T  5    5      QT  5    5     QA5   5     QV  ¸   
;   5   :   QV  5     QV  ¸   	
>V  5   
:   QY     QY     QV   =   HE   QT  5    5      V    Qx;   y   ;   y   1;   y   z   ×V  5   #?
6   QQ   şV  ¸   
V  5   ;   5   5   V  V  : QV  V  5   V  5   H   V  5      V  5   6   Q   MV  ¸   
=   V  5   ?:   QV  V  ×˙I   V     >6   Q   Č   áV   =   HE   QT  5    5       žV  x;   y   ;   y   1;   y   nz   V  5   #?
6   QQ   yV  ¸   
V  5   ;   5   5   V  V  : QV  V  5   6   Q   2V  V  ¸   
=   V  5   ?: 6   Q   A¸   
V  V  V  5   : QŇŇĐŐ
ČÎŐČĘĘĐ$Î Ęh  öu
u
 _uĘ V
ŘX
Ô× Z

×ÝXŰČ
Ë	ŐXËĐ'Îl  ľu
u
 nuĘ f
ŘX
Ô× j

ÓX
ßÉXÝ> 	   json   direction   granularity   vc   position   QueryInterface   Ci#   nsIAccessibleText   caretOffset   getText   characterCount   Previous   atStart=   MOVEMENT_GRANULARITY_CHARACTER3   MOVEMENT_GRANULARITY_WORD=   MOVEMENT_GRANULARITY_PARAGRAPH'   getTextBeforeOffset'   BOUNDARY_WORD_START   value   lastIndexOf   
	   Next   atEnd   getTextAtOffset#   BOUNDARY_WORD_END   indexOf%   presentCaretChange    ˙˙˙˙      !   startOfParagraph        ¸   ü   ˙˙˙˙   ˙˙˙˙   #   cc_getChildCursor              Ú       š      7                                      aAccessible   acc Ě1  3  w            T  D   QA5    5      Q;   ¸   
V   : E   QV   5   ;   5   H     Q  QV   5     QA5   ¸   	
V  @:   QV      K;   ¸   

V  : W  QV  ¸   
=   A: QA5   ¸   
V  V  : QV  ČČ@ŮĐÝŃ
Î
ŇČ
ĐČŐŮČ    vc   position   Utils#   isAliveAndVisible	   role   Roles   INTERNAL_FRAME   DOMNode)   _childMessageSenders   get#   getMessageManager-   addWeakMessageListener'   AccessFu:MoveCursor   set    ˙˙˙˙         domNode       mm        M      ˙˙˙˙˙˙˙˙Ő             ˙˙˙˙      cc_sendToChild              Ń       š      C                                     aVirtualCursor   aMessage   aReplacer   aFocus   position   mm   newJSON    Č3  ű5              T  5       QA¸   
V   :   QV      BT    V   ¸   
:  Q;   ¸   
;   ¸   
T 5   : :   QV  =   6   QT K  Q   mW  V  V  T V  78QăQLM˙˙˙äQNČV  ¸   	
T 5   
V  : QCÍĚČĎŕ˙˙˙őČĎĚ0!ĘßŰ    position   getChildCursor   takeFocus	   JSON   parse   stringify	   json   origin   parent!   sendAsyncMessage	   name    ˙˙˙˙      	   attr          "          .   ˙˙˙˙   ˙˙˙˙      cc_sendToParent               Z       š   	                                           aMessage   newJSON &6  7        	      ;    ¸   
;    ¸   
T  5   : :    QV   =   6   QT  5   ¸   
T  5   V   : Qŕ˙˙˙őČĎß9 	   JSON   parse   stringify	   json   origin   child   target!   sendAsyncMessage	   name   ˙˙˙˙      cc_autoMove               q       š      "                                @      aAnchor   aOptions   moveFunc9  EA  ˛      	         H   Y      QA¸    
:  QA       Q   5      /AA5   ¸   
V      5   : 6   Q   V   :  QĐĚË ęĘ*ÜÎÉ    cancelAutoMove   delay   _autoMove   window   setTimeout   ˙˙˙˙   )   cc_autoMove/moveFuncĹ                 ß      š      Ľ                          (              vc   acc	   rule!   forcePresentFunc   moved   moveMethod   moveFirstOrLast   sentToChildŢ9  ˇ@  ľ            A5       Q     Q  5      ;   5      ;   5     QA      Q  5   E    Q;   ¸   
   5   C:    V  :  Q  5   	   3;   5   
¸   
A5   5   : D   
QV   W   QB  Q  5   D   Q=     QV  f   q  QV   D   
QV      6   V     =      	V  Á
V  V   CB: W  QV  E   QV         V  Á
V  B: W  QA¸   
   Y   =   ]   Y     5   ]     5   	]   	C]   C]   ]   @C:   QV   E   QV      V  :  Q
Ě
Ę
ĘŢ
Ë ĂĐ×ÉĘŃË ĘÉÉ

Ú
Ď
ĎĘ
Ţ ÓČĘŃČ
ŇĘ
Ď
Ď

Ë ŰČ ĺ
Ë
É    vc   onScreenOnly   TraversalRules   SimpleOnScreen   Simple   noOpIfOnScreen   Utils#   isAliveAndVisible   position   moveToFocused   AccRetrieval!   getAccessibleFor   document   activeElement   moveMethod   moveNext   sendToChild#   AccessFu:AutoMove	   name   forcePresent	   json   ˙˙˙˙   K   cc_autoMove/moveFunc/forcePresentFuncĹ                   }       š      !                                      :  Ă;  ş              5       rA5   ¸   
:  ¸   
=   ;   ¸   
      5   @;   5   	5   
      5         5   B: : QĘ
×Ńßß ˝  ź
4    forcePresent   _contentScope   get!   sendAsyncMessage!   AccessFu:Present   Presentation   pivotChanged   position   Ci%   nsIAccessiblePivot   REASON_NONE   startOffset   endOffset                     moveFirst      moveLast                  ˙˙˙˙   #   cc_cancelAutoMove                           š                                            tA  ÂA  ń            A5    ¸   
A5   : QA>6   Q×Č    window   clearTimeout   _autoMove