çżsš                Ž     š   %                                        resource://gre/modules/devtools/LayoutHelpers.jsm     ŕH                                ";   5       Q;   5      Q;   5      Q;    ¸   
=   : Q;   	¸   

A=   =   : QAf    6   Qn      o   QA;   6   Q;   Y      ]      ]      ]      ]      ]      ]      ]      	]      
]      ]      ]      ]   6   Q;      6   Q;      6   Q;      6   Q;      6   Q;      6    Q;      6   !Qn   ";   #R  o   "Q;      6   $Q bĐĐĐŐ3Ň)Ě*ĐĚ#Ę&ĘlĘ  ˘Ę  žĘ  äĘ 1Ę CĘ QĘ dĘ }Ę Ę ťĐ ë řĐ Đ  Đ (Đ . 9Đ F OĐ X bËÉ˙˙˙ýĐ n    Cu   Components   utils   Ci   interfaces   Cr   results   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   ServicesG   resource://gre/modules/Services.jsm!   EXPORTED_SYMBOLS   LayoutHelpers   prototype!   getAdjustedQuads   getRect-   getIframeContentOffset'   getElementFromPoint-   scrollIntoViewIfNeeded   isNodeConnected!   isTopLevelWindow5   isIncludedInTopLevelWindow   getParentWindow   getFrameElement   getFrameOffsets   getNodeBounds)   getRootBindingParent!   getBindingParent   isAnonymous#   isNativeAnonymous   isXBLAnonymous#   isShadowAnonymous   windowUtils   WeakMap   getCurrentZoom                     LayoutHelpers                  ˙˙˙˙      LayoutHelpersÁ                 G       š                                              aTopLevelWindow r  d               AT  ¸   
;   5   : ¸   
;   5   : ¸   
;   5   : 6    QŐĘĘĘĘÉE    _topDocShell   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell   ˙˙˙˙   Q   LayoutHelpers.prototype.getAdjustedQuadsÁ              ę      š      ×                        K          	   node   region   quads   xOffset   yOffset   scale   adjustedQuads  |    &             T   D   QT  5        
Z   T  ¸    
Y   T ]   :    QV   Ů       
Z   A¸   
T  : - Á
:  ¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQ;   ¸   
T  :   QZ     QV   - Á
:    Q  Ým5   W  QV  ¸   	
Y   Y   V  5   
5   V  ]   V  5   
5   V  V  ]   V  5   
5   V  V  ]   V  5   
5   V  ]   ]   
Y   V  5   5   V  ]   V  5   5   V  V  ]   V  5   5   V  V  ]   V  5   5   V  ]   ]   Y   V  5   5   V  ]   V  5   5   V  V  ]   V  5   5   V  V  ]   V  5   5   V  ]   ]   Y   V  5   5   V  ]   V  5   5   V  V  ]   V  5   5   V  V  ]   V  5   5   V  ]   ]   Y   V  5   5   V  V  ]   V  5   5   V  ]   V  5   5   V  V  ]   V  5   5   V  V  ]   V  5   5   V  V  ]   V  5   5   V  ]   V  5   5   V  V  ]   V  5   5   V  V  ]   ]   : QăQ¸   
:  5   ˙˙ýČ V  Ę	É+ĎČ+Č/Ę3ËÔ˙˙˙ëÉçŘĎČ6ÉÓ8 ńŃĐ
Ř
Ý
Ý
Ý?
Ř
Ý
Ý
ÝE
Ř
Ý
Ý
ÝK
Ř
Ý
Ý
ÝQ
Ý
Ř
Ý
Ý
Ý
Ř
Ý
â87Ë˙˙˙ďŇ^    getBoxQuads   box   length   getFrameOffsets	   next	   done   value   LayoutHelpers   getCurrentZoom	   push   p1   w   x   y   z   p2   p3   p4   bounds   bottom   height	   left   right   top   width    ˙˙˙˙      	   quad       ď   ń      ĺ   ü  ˙˙˙˙   ˙˙˙˙   ?   LayoutHelpers.prototype.getRectÁ              °      š                              "             aNode   aContentWindow   frameWin   clientRect	   rect    Ř  l             T  5    5      QT  ¸   
:    QY   V  5   T 5   ]   V  5   T 5   ]   V  5   ]   V  5   ]     Q  *m  Q  Q  Q  QA¸   	
V   :    Č   ˙A¸   

V   :   QV      Č   ŰV  ¸   
:    QA¸   
V  : - Á
:  ¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQV  5   V  5   V  6   QV  5   V  5   V  6   QA¸   
V   : W   QČăC˙˙ţŘV  ŇĘČr××ÎÓx( -ŮzĚ
I~
ĚČ
I  
ËČ
ĚÔ  
ÉçŘŘxŘxĚÉxČ      ownerDocument   defaultView+   getBoundingClientRect   top   pageYOffset	   left   pageXOffset   width   height!   isTopLevelWindow   getFrameElement-   getIframeContentOffset	   next	   done   value   getParentWindow    ˙˙˙˙         frameElement       frameRect       offsetTop       offsetLeft        }   -            ˙˙˙˙˙˙˙˙Ť          ˙˙˙˙Ď             ˙˙˙˙   ]   LayoutHelpers.prototype.getIframeContentOffsetÁ               ß       š      P                                       aIframe   style   paddingTop   paddingLeft   borderTop   borderLeft     ˘             T  5    ¸   
T  @:    QV       f    ;   â   V   ¸   
=   : :   Q;   â   V   ¸   
=   : :   Q;   â   V   ¸   
=   : :   Q;   â   V   ¸   
=   : :   QZ  V  V  `   V  V  `  ÓČÚ˙˙˙÷ČÚ˙˙˙÷ČÚ˙˙˙÷ČÚ˙˙˙÷ČÍÎ    contentWindow!   getComputedStyle   parseInt!   getPropertyValue   padding-top   padding-left!   border-top-width#   border-left-width                                                 ˙˙˙˙   W   LayoutHelpers.prototype.getElementFromPointÁ                    š      \                                      aDocument   aX   aY	   node   N  ˘  ž             T  ¸    
T T :    QV   E   QV   5     PV   ;   5   r   Ű  Q  Q  QV   ¸   
:    QA¸   
V   : - Á
:  ¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQT V  5   	V  U QT V  5   
V  U QT >D   QT >   V   ČČV   ;   5   rD   QV   ;   5   r   =  QA¸   
V   5   T T :   QV     V  W   QČV   ĐČÓĎ×ËČĚÔ˙˙˙ćÉçŘŃxŃxĐ
ČŐĎË×
Č
Ę !   elementFromPoint   contentDocument   Ci/   nsIDOMHTMLIFrameElement+   getBoundingClientRect-   getIframeContentOffset	   next	   done   value	   left   top-   nsIDOMHTMLFrameElement'   getElementFromPoint    ˙˙˙˙      	   rect       offsetTop       offsetLeft        ˙˙˙˙         subnode        G   Ó   ˙˙˙˙˙˙˙˙            D  7   ˙˙˙˙   ˙˙˙˙   ]   LayoutHelpers.prototype.scrollIntoViewIfNeededÁ              ó      š      Î                         /          	   elem   centered   win   clientRect   topToBottom   bottomToTop   leftToRight   rightToLeft   xAllowed   yAllowed  T  Ă&  ä             T ;    H   C   
T   U QT  5   5      QT  ¸   
:    QV  5     QV  5   V   5     QV  5     QV  5   V   5   	  QC  QC  QV  >D   
QT  E   QV  T  5   
   -V   ¸   
>V  T  5   
: QBW  Q   QV  >D   
QT  E   QV  T  5   
"   (V   ¸   
>V  T  5   
: QBW  QV  >D   
QT  E   QV  T  5      6V     (V   ¸   
V  T  5   >: QBW  Q   ZV  >D   
QT  E   QV  T  5   "   1V     (V   ¸   
V  T  5   >: QBW  QT    ÉV  E   QV  >D   QV  >   FV   ¸   
V   5   V   5   V  5   V   5   T  5   
×: QV  E   QV  >D   QV  >   FV   ¸   
V   5   V  5   V   5   	T  5   ×V   5   : QA¸   
V   :     3  QA¸   
V   :   QA¸   
V  T : QČÉË)ÉŇĘČ  ńÎŘÎŘ  űĚ×(ÝËĚÎĘÝĚ×1ÝËĚÎĘÝ ÜÔÓÖ  ÜŢÖÉ  #ĚË
ĚČÔ #&    undefined   ownerDocument   defaultView+   getBoundingClientRect   bottom   top   innerHeight   right	   left   innerWidth   offsetHeight   scrollBy   offsetWidth   scroll   scrollX   scrollY!   isTopLevelWindow   getFrameElement-   scrollIntoViewIfNeeded    ˙˙˙˙         frameElement        Ĺ  -   ˙˙˙˙   ˙˙˙˙   O   LayoutHelpers.prototype.isNodeConnectedÁ                v       š                                           aNode |'  í(  1               QT  5    E   =QT  5    5   E   *QT  ¸   
T  5    5   : T  5       QV   ČČ      Qv   QBČČ    Y
á×ĎÍĚË    ownerDocument   defaultView/   compareDocumentPosition   documentElement=   DOCUMENT_POSITION_DISCONNECTED    ˙˙˙˙          connected        ˙˙˙˙          e            ]          W   ˙˙˙˙˙˙˙˙W             _      ˙˙˙˙˙˙˙˙m            ˙˙˙˙   Q   LayoutHelpers.prototype.isTopLevelWindowÁ               Q       š      &                                        win   docShell  )  *  C            T  ¸    
;   5   : ¸   
;   5   : ¸    
;   5   :    QV   A5   HÔĘĘ DĘĘ DČĚ&    QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell   _topDocShell   ˙˙˙˙   ;   LH_isIncludedInTopLevelWindow               S       š      $                                        win   parent A+  ,,  Q            A¸    
T  :    CA¸   
T  :    QV    D   QV   T  H   BA¸   
V   : ËË	ČÓĚ( !   isTopLevelWindow   getParentWindow5   isIncludedInTopLevelWindow   ˙˙˙˙   O   LayoutHelpers.prototype.getParentWindowÁ              ľ       š      C                                      win   docShell Ř,  Î.  d            A¸    
T  :    @T  ¸   
;   5   : ¸   
;   5   : ¸   
;   5   :    QV   5      I  QV   ¸   
:    QV     V  5   	5   
5      @ČČ   T  5   ËÔĘĘ iĘĘ iČÉDË
ËČçÉ !   isTopLevelWindow   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsIDocShell   isBrowserOrApp]   getSameTypeParentIgnoreBrowserAndAppBoundaries   contentViewer   DOMDocument   defaultView   parent    ˙˙˙˙         parentDocShell        h   >   ˙˙˙˙˙˙˙˙¤             ˙˙˙˙   O   LayoutHelpers.prototype.getFrameElementÁ               Z       š      -                                        win   winUtils ä/  î0  }            A¸    
T  :    @T  ¸   
;   5   5   : ¸   
;   5   5   :    QV   5   ËĘĎ ĘĎ ČĘ! !   isTopLevelWindow   QueryInterface   Components   interfaces+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils!   containerElement   ˙˙˙˙   O   LayoutHelpers.prototype.getFrameOffsetsÁ              y      š                                        	   node   xOffset   yOffset   frameWin   scale đ1  X5              >   Q>  QT  5    5     Q;   ¸   
T  :   Q  m  Q  Q  Q  QA¸   
V  :    Č   ńA¸   
V  :   QV      Č   ÍV  ¸   
:    QA¸   
V  : - Á
:  ¸   
:  5   	   Q   
5   
  Q¸   
:  5   	   Q   
5   
  QQQV   V  5   V  W   QV  V  5   V  W  QA¸   
V  : W  QČăC˙˙ţćZ  V   V  `   V  V  `  ŇĎČ( ŮĚ
I
ĚČ
I Ľ
ËČ
ĚÔ §
ÉçŘŇxŇxĚÉ Č °ÍÎ    ownerDocument   defaultView   LayoutHelpers   getCurrentZoom!   isTopLevelWindow   getFrameElement+   getBoundingClientRect-   getIframeContentOffset	   next	   done   value	   left   top   getParentWindow    ˙˙˙˙         frameElement       frameRect       offsetTop       offsetLeft        :         ?     ˙˙˙˙˙˙˙˙h          ˙˙˙˙             ˙˙˙˙   K   LayoutHelpers.prototype.getNodeBoundsÁ               P      š      Đ                                    	   node   scale   offsetLeft   offsetTop   el   xOffset   yOffset   width   height 6  +;  ť            T      ;    ¸   
T  :    Q>  Q>  QT    Q   :mV  V  5   W  QV  V  5   W  QV  5   W  QăV  E   QV  5   ˙˙˙śT  W  Q   VmV  5      V  V  5   W  QV  5      V  V  5   W  QV  5   W  QăV  E   QV  5   ˙˙˙A¸   
T  : - Á
:  ¸   	
:  5   
   Q   
5     Q¸   	
:  5   
   Q   
5     QQQV  V  W  QV  V  W  QV  V   W  QV  V   W  QT  5   V     QT  5   V     QY   Y   V  ]   V  ]   ]   Y   V  V  ]   V  ]   ]   Y   V  V  ]   V  V  ]   ]   Y   V  ]   V  V  ]   ]   ĎČČ(O ĆÍxÍxÎ ĆÚ ÍČ(k ÎÉÍxÉÍxÎ ÎÚ ŮËÔ˙˙˙ëÉçŘČxČxČxČxŇŇÉÎÎÎÎÓÉÔ    LayoutHelpers   getCurrentZoom   offsetLeft   offsetTop   offsetParent   parentNode   scrollTop   scrollLeft   getFrameOffsets	   next	   done   value   offsetWidth   offsetHeight   x   y   p1   p2   p3   p4       k       ;   O      ˙˙˙˙   E   LayoutHelpers.getRootBindingParentÁ               P       š      1                                    	   node   parent   doc ď<  ˘=  ř               QT  5      QV      	T     mV   U  QăV  ¸   
T  : W   ˙˙˙ŕT  Í(% ţČ ţ
Đ	Ě    ownerDocument!   getBindingParent    &   %      ˙˙˙˙   =   LayoutHelpers.getBindingParentÁ               A       š      $                                     	   node   doc   parent Î=  ž>              T  5       QV       BV   ¸   
T  :   QV      BV  ÍÎ	Č    ownerDocument!   getBindingParent   ˙˙˙˙   3   LayoutHelpers.isAnonymousÁ                        š      
                                     	   node w?  ˝?              ;    ¸   
T  : T  IĎČ2    LayoutHelpers)   getRootBindingParent   ˙˙˙˙   ?   LayoutHelpers.isNativeAnonymousÁ                 H       š                                 	          	   node ő@  ĽA  (            ;    ¸   
T  :     B;    ¸   
T  :  E   Q;    ¸   
T  :  ĎĎĘ	Ď&    LayoutHelpers!   getBindingParent   isXBLAnonymous#   isShadowAnonymous   ˙˙˙˙   9   LayoutHelpers.isXBLAnonymousÁ               Č       š   
   0                                    	   node   parent   anonNodes ĚB  AD  9      
      ;    ¸   
T  :    QV       BV   5   E   QV   5   ¸   
T  :    BZ   >T  5   ¸   
V   : D   
QZ   - Á
:     m5   _ă,  ¸   
:  5   ˙˙˙ă Q  QV  ¸   	
T  : ×˙Ď	ČâÓŮ8"ňÎ    LayoutHelpers!   getBindingParent   shadowRoot   contains   ownerDocument#   getAnonymousNodes   value	   next	   done   indexOf      "      ˙˙˙˙   ?   LayoutHelpers.isShadowAnonymousÁ               J       š                                           	   node   parent E  F  O            ;    ¸   
T  :    QV       BV   5   E   QV   5   ¸   
T  : Ď	Č Wâ!    LayoutHelpers!   getBindingParent   shadowRoot   contains   ˙˙˙˙   9   LayoutHelpers.getCurrentZoomÁ               Ľ       š      2                                    	   node   map   win   utils  ¨G  ŢH  c            T H   A    U QT  5    5      Q;   ¸   
V   :   QV     V  5   V   ¸   
;   5   : ¸   
;   5   	: W  Q;   ¸   

V   V  : QV  5   ĎŇĐČĘŐĘĘ j
ČŘĘ    ownerDocument   defaultView   windowUtils   get   fullZoom   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils   set   ˙˙˙˙   A   LayoutHelpers.getCurrentZoom/mapĺ                        š                                                z ľG  šG  c            T  7 