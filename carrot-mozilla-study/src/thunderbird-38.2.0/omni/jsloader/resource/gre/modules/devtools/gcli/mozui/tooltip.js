ç¿s¹                Ý     ¹      ÿ                          '       0     resource://gre/modules/devtools/gcli/mozui/tooltip.js     î$                                	    n    ;   â   =   : 1    Qn   ;   â   =   : 1   Qn   ;   â   =   : 1   Qn   ;   â   =   : 5   1   Qn   	=   
1   	Q;   5      0   Q;   ¸   
;   5   =   Y      ]   C]   : Q;   5      0   Q;   5      0   Q;   5      0   Q;   5      0   Q;   5      0   Q;   5      0   Q;   5      	0   Q;   ¸   
;   5   =   Y      
]   C]   : Q;   5      0   Q;   ;   0   QÊ.	ÔÉÿÿÿýÔÉÿÿÿýÔÉÿÿÿýÔÎÿÿÿýË.MRÕnsàÊyszÕ  §  ¬Õ  µ  ¼Õ  Á  ÆÕ  Ó  ØÕ  å  êÕ  ó  úÕ 
 àÊ     Õ +Ð 	   util   require   ../util/util	   host   ../util/host   domtemplate'   ../util/domtemplate#   CommandAssignment   ../cli   tooltipHtmlS  <div class="gcli-tt" aria-live="polite">
  <div class="gcli-tt-description" save="${descriptionEle}">${description}</div>
  ${field.element}
  <div class="gcli-tt-error" save="${errorEle}">${assignment.conversion.message}</div>
  <div class="gcli-tt-highlight" save="${highlightEle}"></div>
</div>   Tooltip   prototype   destroy   Object   defineProperty   isMenuShowing   get   enumerable#   assignmentChanged   choiceChanged   selectChoice   fieldChanged   textChanged   _updatePosition3   getDimensionsOfAssignment   description#   visibilityChanged   exports   ÿÿÿÿ      Tooltip                 ¡      ¹       d                           /            options   components  V    .             AT 5    0    QAT 5   0   QAT 5   0   QAT 5   0   QA5   5   ¸   
T  5   D   Q=   : QAA5   5   	0   QAT 5   
0   
QA5   
   =A5   
5   ¸   
=   : QA5   5   ¸   
A5   A: QA5   ¸   
A5   =   : QAZ   0   QA;   ¸   
A5   ;   : 0   QAY   C]   =   ]   0   QA5    5   ¸   
A5   A: QA5    5   ¸   
A5   A: QA;   0   QA¸   
Y   A5    5   ]   : QA;   0   QÏÏÏ3ÏéÒ7ÏÛÝ<Ü?ËAØÉÐDÝÝHÌÍÐÿÿÿçLÌ    inputter   requisition   focusManager   element   classList   add   tooltipClass   gcli-tooltip   document   ownerDocument   panelElement   gcli-panel-hide%   onVisibilityChange#   visibilityChanged'   addMonitoredElement   tooltip   fields   template	   host   toDom   tooltipHtml   templateOptions%   blankNullUndefined   tooltip.html   stack   onChoiceChange   choiceChanged%   onAssignmentChange#   assignmentChanged   assignment   undefined   lastText   ÿÿÿÿ   3   Tooltip.prototype.destroyÁ                   L      ¹      R                           ,          R  j  R             A5    5   ¸   
A5   A: QA5    5   ¸   
A5   A: QA5      "A5   5   ¸   
A5   	A: QA5   ¸   

A5   =   : QA5      -A5   5   ¸   
A5   : QA;   0   QA5   5   ¸   
A5   A: QA5   ¸   
:  QA;   0   QA;   0   QA;   0   QA;   0   QA;   0   QA;   0   QA;   0   QA;   0   QA;   0   QÝÝVÝYÜ[ÜÌ`ÝÑcÌÌfÌÌÌjÌÌÌÌ    inputter%   onAssignmentChange   remove#   assignmentChanged   onChoiceChange   choiceChanged   panelElement   focusManager%   onVisibilityChange#   visibilityChanged-   removeMonitoredElement   element   tooltip   style   parentNode   removeChild   undefined   field   onFieldChange   fieldChanged   destroy   lastText   assignment   errorEle   descriptionEle   highlightEle   document   template   ÿÿÿÿ   	   .getÁ                   .       ¹                                           û  y  t             A5    5   E   !QA5   @E   QA5   5   @ÑÎÎ#    focusManager!   isTooltipVisible   field	   menu   ÿÿÿÿ   G   Tooltip.prototype.assignmentChangedÁ               Ð      ¹   '   x                           A            ev   contents   Ö         
      A5    T  5    H   AT  5    0    QAA5    5   5   0   QA5      3A5   5   ¸   
A5   A: QA5   ¸   
:  QAA5   	5   
5   ¸   
A5    5   5   Y   A5   ]   A5   	]   	: 0   QA5   ¸   
A5   5   : QA5   5   ¸   
A5   A: QA5   ¸   
A5    5   : QA;   0   QA;   0   QA;   0   QA5   ¸   
C: W   Q;   ¸   
V   AA5   : Q;   ¸   
A5    : QA5    ¸   !
V   : QA5    5   "=   $0   #QA5   ¸   %
A5   : QA¸   &
:  QÏÏ×ÝÑíËË  É  ÜÝÜÌÌÌÎÈÛÖÕÖ×Ì    assignment   lastText   arg	   text   field   onFieldChange   remove   fieldChanged   destroy   requisition   system   fields   get   param	   type   document   focusManager+   setImportantFieldFlag   isImportant   add   setConversion   conversion   errorEle   undefined   descriptionEle   highlightEle   template   cloneNode   domtemplate   templateOptions	   util   clearElement   element   appendChild   style   display   block#   setMessageElement   _updatePosition   ÿÿÿÿ   ?   Tooltip.prototype.choiceChangedÁ                      ¹      0                                      ev   conversion   context 5  ¥  ¬       	      A5    E   QA5    5      oA5   5   W   QA5   5   W  QV   ¸   
V  T  5   : ¸   
    ¸   	
A: : ¸   
@;   
5   : Q×ÐÐí  °AÿÿÿÃÊË  °0    field	   menu   assignment   conversion   requisition!   executionContext1   constrainPredictionIndex   choice	   then	   bind	   util   errorHandler   ÿÿÿÿ   C   Tooltip.prototype.choiceChanged/<Á                 +       ¹                                             choice   t  °             A5    5   T  0   QA5    5   ¸   
:  QÔÖ#    field	   menu   _choice!   _updateHighlight   ÿÿÿÿ   =   Tooltip.prototype.selectChoiceÁ                 0       ¹                                             ev   ø  ¼             A5    E   QA5    5      A5    ¸   
:  B×Í    field   selectChoice   ÿÿÿÿ   =   Tooltip.prototype.fieldChangedÁ                      ¹      7                                      ev   isError f    Æ             A5    ¸   
A5   T  5   5   Y   C]   : QT  5   5   @E   QT  5   5   =   IW   QA5   ¸   	
V   : QA5   
5   ¸   
    ¸   
A: ×
: Qà#  ÇíÕ  ÐÞ  Ð'  Ð    requisition   setAssignment   assignment   conversion   arg   matchPadding   message      focusManager   setError   document   defaultView   setTimeout	   bind   ÿÿÿÿ   A   Tooltip.prototype.fieldChanged/<Á                          ¹                                           X  {  Ð             A5    ¸   
:  QÑ    inputter   focus   ÿÿÿÿ   ;   Tooltip.prototype.textChangedÁ                   z       ¹                                           ñ  y  Ø             A5    5   5   A5   H   AA5    5   5   0   QA5   ¸   
A5    5   : Q;   ¸   
A5   	A5   
: QA¸   
:  Q××ÜÜÌ    assignment   arg	   text   lastText   field   setConversion   conversion	   util   setTextContent   descriptionEle   description   _updatePosition   ÿÿÿÿ   C   Tooltip.prototype._updatePositionÁ                 T       ¹                                 	             dimensionsñ  ç  ê             A¸    
:  W   QA5      (A5   5   V   5   ×
=   0   QA5   ¸   
V   : QÈÈãÕ- 3   getDimensionsOfAssignment   panelElement   style	   left   start   px   focusManager   updatePosition   ÿÿÿÿ   W   Tooltip.prototype.getDimensionsOfAssignmentÁ                 ï       ¹      b                                       before   assignments   i   startChar   endCharö  ¦!  ú             =    W   QA5   ¸   
C: W  Q>W  Q   KmV  V  7A5   H   
   EV   V  V  7¸   
:  W   QV  #?W  QQãV  V  Ù   ÿÿÿªV   A5   5   5   W   QV   Ù   W  QV   A5   5   5   W   QV   Ù   W  QY   V  ]   	V  ]   
ÊÎÈ%K=[  ýÐHÔ
{  ý*Î   ýÕ ÔxÎÔxÎ	ÉÊ       requisition   getAssignments   assignment   toString   length   arg   prefix	   text   start   end    +   [      ÿÿÿÿ   	   .getÁ                   R       ¹                                 
          ´"  #              A5    ;   rE   QA5    5   @   =   A5    5   5   D   QA5    5   5   ÒÍçI    assignment#   CommandAssignment   value      param   manual   description   ÿÿÿÿ   G   Tooltip.prototype.visibilityChangedÁ                 W       ¹                                 
            ev ü#  Ð$               A5        T  5      %A5    5   ¸   
=   : Q    A5    5   ¸   
=   : QÈ àÛ3    panelElement   tooltipVisible   classList   remove   gcli-panel-hide   add