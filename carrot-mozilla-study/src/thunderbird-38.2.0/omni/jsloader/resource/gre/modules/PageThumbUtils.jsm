çżsš                Ď      š      K                                      resource://gre/modules/PageThumbUtils.jsm                               Af    6    Q;   5      Q5      Q5      QQ;   ¸   
=   	A: Q;   ¸   
=   
: Q;   ¸   
=   A: QAY   =   ]   =   ]      ]      ]      ]      ]   6   Q
Ě+ę7Ö9Ő1Ö6ĘĘ Ę2ĘFĘjĐ  § !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Components   classes   interfaces   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmE   resource://gre/modules/Promise.jsm   PageThumbUtils	   #fff%   THUMBNAIL_BG_COLOR9   http://www.w3.org/1999/xhtml   HTML_NAMESPACE   createCanvas!   getThumbnailSize#   determineCropSize7   shouldStoreContentThumbnail                     PageThumbUtils                  ˙˙˙˙   A   this.PageThumbUtils.createCanvasÁ               Ü       š      4                                        aWindow   doc   canvas   thumbnailWidth   thumbnailHeight                   T  D   Q;    5   5   5      QV   ¸   
A5   =   :   QV  C6   QV  C6   QA¸   	
:  - Á
:  ¸   

:  5      Q   
5     Q¸   

:  5      Q   
5     QQQV  V  6   QV  V  6   QV  âÖ	ČËËČ$Ô˙˙˙ÜÉçŘÎÎ    Services   appShell   hiddenDOMWindow   document   createElementNS   HTML_NAMESPACE   canvas   mozOpaque1   mozImageSmoothingEnabled!   getThumbnailSize	   next	   done   value   width   height   ˙˙˙˙   I   this.PageThumbUtils.getThumbnailSizeÁ                        š      @                                    O  N	  2             A5     D   QA5       ×  Q  Q  Q  Q   Q;   5   ¸   
;   5   :    QY     QY     QY     QY     QV   5   ¸   
V  V  V  V  : QA;   	¸   

V  5   ×: 6    QA;   	¸   

V  5   ×: 6   QČZ  A5    `   A5   `  Íă
ŃĘ4Č6
ĘĘ
ĘĘäŮÉŮĘ;ĘË    _thumbnailWidth!   _thumbnailHeight   CcA   @mozilla.org/gfx/screenmanager;1   getService   Ci!   nsIScreenManager   primaryScreen#   GetRectDisplayPix	   Math   round   value    ˙˙˙˙          screenManager    	   left       top       width       height           Í   ˙˙˙˙   ˙˙˙˙   K   this.PageThumbUtils.determineCropSizeÁ    
         
       š                              *             aWindow   aCanvas   utils   sbWidth   sbHeight   width   height   thumbnailWidth   thumbnailHeight   scale   scaledWidth   scaledHeight  ^
  §  F             ;    ¸   
T  :    ;   =   R pT  ¸   
;   5   : ¸   
;   5   :    QY     QY     QV   ¸   	
BV  V  : Q   A  
Qv  
Q;    ¸   

=   : QV  V  >6   6   QČ    T  5   V  5     QT  5   V  5     QT 5     Q5     QQ;   ¸   
;   ¸   
V  V  V  V  : ?:   QV  V    QV  V    	QV  	V     ;V  ;   ¸   
;   ¸   
V  	V  : V  : W  QV  V     ;V  ;   ¸   
;   ¸   
V  V  : V  : W  QZ  V  `   V  `  V  `  ĎËJÔĘĘJČMĘĘOÝĚSŐŰY××\Úę˙˙˙÷ČÎÎaÉĺČ˙˙˙ő{dÉĺČ˙˙˙ő{gČČÉ    Cu+   isCrossProcessWrapper   Error/   Do not pass cpows here.   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils!   getScrollbarSize   reportErrore   Unable to get scrollbar size in determineCropSize.   value   innerWidth   innerHeight   width   height	   Math   min   max   floor   abs    ˙˙˙˙   
      e         k             5   ˙˙˙˙   ˙˙˙˙   _   this.PageThumbUtils.shouldStoreContentThumbnailÁ              l      š                                           aDocument   aDocShell   channel   uri   httpChannel  Ň    j       
      T  ;    5   r   BT 5   ¸   
=   :    BT 5   ;    5   5      BT 5      QV       BV   5   	  QV  ¸   
=   :    B  QV   ¸   

;    5   : W  Q     Qv  QČ    V     ;   ¸   
V  5   ×d: ×   B     Qv  QBČČ    V  ¸   
:     BV  ¸   
=   : E    Q;   5   ¸   
=   :     BCmÎrÔwŘ{Í~  ÎĐŐÍÓ&ŘĚËË
Đ
É
Ö    Ci#   nsIDOMXMLDocument   currentURI   schemeIs   about   busyFlags   nsIDocShell   BUSY_FLAGS_NONE-   currentDocumentChannel   originalURI   QueryInterface   nsIHttpChannel	   Math   floor   responseStatus#   isNoStoreResponse   https   Services   prefs   getBoolPref9   browser.cache.disk_cache_ssl    ˙˙˙˙         e        ˙˙˙˙         e         Ů   *           "       ˝      ˙˙˙˙        ˙˙˙˙˙˙˙˙        