çżsš                     š                                            resource://gre/components/contentAreaDropListener.js     ž         	                    ;    5   ¸   
=   : Q;    5      Q;    5      Q;   Y   ;    ¸   

=   : ]   ;   ¸   
Z  ;   5   `   ;   5   `  : ]      ]      ]      ]      ]      ]   6   	Qn   Z  ;   `   o   QA;   ¸   
;   : 6   QĘ	  ŞÚAĐĐ&ŃČĐ)ÎÎ˙˙˙ĎČĘ9Ę`Ę  Ę  Đ  ¨ÉĎ˙˙˙üŇÉ,    Components   utils   importK   resource://gre/modules/XPCOMUtils.jsm   Cc   classes   Ci   interfaces/   ContentAreaDropListener   prototype   IDM   {1f34bc80-1bc7-11d6-a384-d705dd0746fc}   classID   XPCOMUtils   generateQI+   nsIDroppedLinkHandler   nsISupports   QueryInterface   _getDropURL   _validateURI   canDropLink   dropLink-   _eventTargetIsDisabled   components   NSGetFactory)   generateNSGetFactory   ˙˙˙˙   /   ContentAreaDropListener                          š                                              Ë  Ń                $    ˙˙˙˙   [   ContentAreaDropListener.prototype._getDropURLÁ            ć      š                      
       "             dt   url   types	   file ¸  8               T  5      Q>  Q   m  QV  V  7  QV  x=   y   (=   y   a=   y   W=   y   z   ŽT  ¸   
=   : ¸   
     =   : W   QZ  V   `   V   `  ČČT  ¸   
V  : ¸   
    =   : W   QZ  V   `   V   `  ČČT  ¸   
V  : ¸   	
=   
: ČČČV  #?W  QQăV  V  Ů   ˙˙ţńČT  ¸   
=   >:   QV  ;   5   r     Q  Q;   5   ¸   
;   5   :   QV  ¸   
=   : ¸   
;   5   :   QZ  V  ¸   
V  : `   V  5   `  ČČZ   Í&   ö 
Îl  ×u
!u
u
%uĘĎÜ
ČĚÎÜ
ČĚ
Î×&Î˙˙˙îÖ-ĐČĎŃ
ŃĘ/Č1
ĐĘĘ1Č3Ö&Ń6    types   text/uri-list   text/plain1   text/x-moz-text-internal   text/x-moz-url   getData   URL   replace      split   
   length   mozGetDataAt-   application/x-moz-file   Ci   nsIFile   CcC   @mozilla.org/network/io-service;1   getService   nsIIOService%   getProtocolHandler	   file   QueryInterface-   nsIFileProtocolHandler%   getURLSpecFromFile   leafName    ˙˙˙˙         t                  	   type        ˙˙˙˙         ioService       fileHandler       ^\s+|\s+$      ^\s+|\s+$                      ˙˙˙˙      ď           Ą         ˙˙˙˙˘             ă         ˙˙˙˙ä                     ˙˙˙˙           \     ˙˙˙˙˙˙˙˙Ţ           ˙˙˙˙   ]   ContentAreaDropListener.prototype._validateURIÁ              N      š      l                                    dataTransfer   uriString   disallowInherit   uri   ioService   secMan   sourceNode   flags   principal   S    9             T     =    T ¸   
     =    : U Q   Q;   5   ¸   
;   5   5   :   QV  ¸   
T @@: W   Q     Qv  QČ    V       	T ;   5   	¸   
;   
5   :   QT  5     QV  5     QT    V  V  5   W  QV     V  5      (V  ¸   
V  ¸   
=   @@: :   QV  ¸   
V  T V  : QT BÔDŃĎEČGJĐÍÓPŃĘPČRÍÎÍxXÓÝC˙˙˙ŢČ[Ú]       replace   CcC   @mozilla.org/network/io-service;1   getService   Components   interfaces   nsIIOService   newURII   @mozilla.org/scriptsecuritymanager;1   Ci1   nsIScriptSecurityManager   mozSourceNode   STANDARD5   DISALLOW_INHERIT_PRINCIPAL   nodePrincipal5   getSimpleCodebasePrincipal   file:///9   checkLoadURIStrWithPrincipal    ˙˙˙˙         ex       ^\s*|\s*$        Y          w      ˙˙˙˙   ˙˙˙˙   [   ContentAreaDropListener.prototype.canDropLinkÁ              ]      š      p                                      aEvent%   aAllowSameDocument   dataTransfer   types   sourceNode   sourceDocument   eventDocument  9  ¸  `             A¸    
T  :    BT  5      QV   5     QV  ¸   
=   :  E   hQV  ¸   
=   :  E   NQV  ¸   
=   :  E   4QV  ¸   
=   :  E   QV  ¸   
=   :     BT    CV   5   	  QV      CV  5   
  QT  5   5   
  QV  V     BV  E   
QV     E  QV  5   5     QV  E   QV  V  5   5      	BČČCËeÍÎĐĘĐĘĐĘĐĘĐnqÎvÎŇÉ}ÎË
ÓÝ -   _eventTargetIsDisabled   dataTransfer   types   contains-   application/x-moz-file   text/x-moz-url   text/uri-list1   text/x-moz-text-internal   text/plain   mozSourceNode   ownerDocument   originalTarget   defaultView   top    ˙˙˙˙         sourceRoot          ?   ˙˙˙˙˙˙˙˙X            ˙˙˙˙   U   ContentAreaDropListener.prototype.dropLinkÁ                    š   
   M                                     aEvent   aName!   aDisallowInherit   dataTransfer   url	   name   Ď                  T =   6    QA¸   
T  :    =   T  5      QA¸   
V   : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5      QQQA¸   
V   V  T : W  Q   9  Qv  QT  ¸   
:  QT  ¸   	
:  QV  pČ    V     T V  6    QV  ÎËÍĚÔ˙˙˙ňÉçŘÓÍĚÎÎĚÍ    value   -   _eventTargetIsDisabled   dataTransfer   _getDropURL	   next	   done   _validateURI   stopPropagation   preventDefault    ˙˙˙˙         ex                    ž   -   ˙˙˙˙   ˙˙˙˙   q   ContentAreaDropListener.prototype._eventTargetIsDisabledÁ               }       š   
   ;                                        aEvent   ownerDoc Ĺ  L               T  5    5      QV    D   QV   5       BV   5   ¸   
;   5   5   : ¸   
;   5   5   : ¸   	
T  5    : ŇËĘĐĎ  ŁĘĎ  ŁĘČ  ŁC    originalTarget   ownerDocument   defaultView   QueryInterface   Components   interfaces+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils/   isNodeDisabledForEvents