çżsš                7     š                                       0     resource://gre/components/ColorAnalyzer.js     ý         	                    	       ;   5       Q;   5      Q;   5      Q;   ¸   
=   : Q=   
   	Q;   ¸   
X ×:    Q;   Y      ]      ]      ]      ]      ]      ]   ;   ¸   
=   : ]   ;   ¸   
Z  ;    5   `   : ]   0   QA;   ¸   
Z  ;   `   : 0   QĘ	ĐĐĐŐ3ËŃÉ˙˙˙ýĘĘ+Ę;ĘAĘFĘOĘVŃ	ČĐ'Î˙˙˙éÎZŃ5É˙˙˙ßÉ1    Ci   Components   interfaces   Cc   classes   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsm   XHTML_NS9   http://www.w3.org/1999/xhtml   MAXIMUM_PIXELS	   Math   pow   ColorAnalyzer   prototype/   findRepresentativeColor   onImageLoad   onImageError   startJob   onWorkerMessage   onWorkerError   IDM   {d056186c-28a0-494e-aacc-9e433772b143}   classID   XPCOMUtils   generateQI#   mozIColorAnalyzer   QueryInterface   NSGetFactory)   generateNSGetFactory   ˙˙˙˙      ColorAnalyzer                          š      *                                     â  ť               AZ   0    QA;   5   ¸   
;   5   : 5   5   0   QA;   
=   R 0   	QA5   	A5   ¸   
A: 0   QA5   	A5   ¸   
A: 0   QËŇĘÓĚÉÔÉÔÉ    callbacks   hiddenWindowDoc   CcO   @mozilla.org/appshell/appShellService;1   getService   Ci%   nsIAppShellService   hiddenDOMWindow   document   worker   ChromeWorker]   resource://gre/modules/ColorAnalyzer_worker.js   onmessage   onWorkerMessage	   bind   onerror   onWorkerError   ˙˙˙˙   #   ColorAnalyzer_frc              ¸       š      *                                      imageURI   callback   cleanup   image   loadListener   errorListener    !                   W   QA5    ¸   
;   =   :    QA5   ¸   
A   T V   :    QA5   ¸   
A   T V   :    Q   ¸   
=      : Q   ¸   
=   	   : Q   T  5   0   
QĘ#×ÉÚÉÚÉÚÚÓ    hiddenWindowDoc   createElementNS   XHTML_NS   img   onImageLoad	   bind   onImageError!   addEventListener	   load   error   src	   spec   ˙˙˙˙      cleanup                   I       š                                           9  ł                     ¸    
=         : Q      ¸    
=         : Qää2 '   removeEventListener	   load   error   ˙˙˙˙   3   ColorAnalyzer_onImageLoad                ć       š      8                                     image   callback   cleanup   U    +             T  5    T  5   ;      T ¸   
B: Q   ˛  Q   QA5   ¸   
;   =   :    QV   T  5    0   QV   T  5   0   	QV   ¸   

=   :   QV  ¸   
T  >>: QA¸   
V  ¸   
>>V   5   V   5   	: T : QČT :  Q×.ÔĚ
×	ČŇŇ
ĐČÔç58Č
    naturalWidth   naturalHeight   MAXIMUM_PIXELS   onComplete   hiddenWindowDoc   createElementNS   XHTML_NS   canvas   width   height   getContext   2d   drawImage   startJob   getImageData    ˙˙˙˙          canvas       ctx        2   Ť   ˙˙˙˙   ˙˙˙˙   5   ColorAnalyzer_onImageError                 <       š                                             image   callback   cleanup   Ä  `	  ;             ;    ¸   
=   T  5   =   : QT ¸   
B: QT :  QäĎČ
    Cu   reportError1   ColorAnalyzer: image at    src    didn't load   onComplete   ˙˙˙˙   -   ColorAnalyzer_startJob                 9       š                                             imageData   callback  	  
  A             A5    ¸   
T : QA5   ¸   
Y   T  ]   ?]   : QÔŇČ˙˙˙Đ@    callbacks	   push   worker   postMessage   imageData   maxColors   ˙˙˙˙   ;   ColorAnalyzer_onWorkerMessage                 f       š                                             event M
  0  F             T  5    5   Ů   ?   &A5   ¸   
:  ¸   
B: Q   0A5   ¸   
:  ¸   
CT  5    5   >7: QHÔ!áë> 	   data   colors   length   callbacks   shift   onComplete   ˙˙˙˙   7   ColorAnalyzer_onWorkerError                 I       š                                             error h  ,  O             T  ¸    
:  Q;   ¸   
=   T  5   : QA5   ¸   
:  ¸   
B: QQÎŢÜ)    preventDefault   Cu   reportError-   ColorAnalyzer worker:    message   callbacks   shift   onComplete