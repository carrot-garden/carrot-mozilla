çżsš                     š      z                                 0     resource://gre/components/TCPSocketParentIntermediary.js              	                     ;   5       Q;   5      Q;   5      Q;   ¸   
=   : Q;   	Y      ]      ]      ]      ]      ]      ]   ;   ¸   
=   : ]   ;   ¸   
Z  ;   5   `   : ]   0   
QA;   ¸   
Z  ;   	`   : 0   QĘ	ĐĐĐŐ3ĘĘ#Ę'Ę;ĘdĘiĘoŃ	ČĐÎpÎsuŃ5É˙˙˙ßÉ?    Cc   Components   classes   Ci   interfaces   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsm7   TCPSocketParentIntermediary   prototype   _setCallbacks=   _onUpdateBufferedAmountHandler	   open   listen!   onRecvSendString+   onRecvSendArrayBuffer   IDM   {afa42841-a6cb-4a91-912f-93099f6a3d18}   classID   XPCOMUtils   generateQI1   nsITCPSocketIntermediary   QueryInterface   NSGetFactory)   generateNSGetFactory   ˙˙˙˙   7   TCPSocketParentIntermediary                          š                                                               (    ˙˙˙˙   g   TCPSocketParentIntermediary.prototype._setCallbacksÁ                 3       š                                      D      aParentSide   socketŕ                    ¸    
A: QA   0   Qf    ¸   
   : QŃĚĚ     initJS   _socket   forEach                  	   open   	   data      error      close                  ˙˙˙˙   k   TCPSocketParentIntermediary.prototype._setCallbacks/<Á                        š      	                                D      pT                   =           9Q×
    on   ˙˙˙˙                     2       š                                 	         	   data }           	        ¸    
   T  5     5     5   : Q
ăĘ
7    sendEvent	   data   readyState   bufferedAmount   ˙˙˙˙      TCPSocketParentIntermediary.prototype._onUpdateBufferedAmountHandlerÁ                        š                                             aParentSide   aBufferedAmount   aTrackingNumber   I  Ę  #             T  ¸    
T T : QÔG 1   sendUpdateBufferedAmount   ˙˙˙˙   U   TCPSocketParentIntermediary.prototype.openÁ               Ú       š      G                                       aParentSide   aHost   aPort   aUseSSL   aBinaryType   aAppId   aInBrowser   baseSocket   socket   socketInternal       Ý  ˙  '       
      ;    5   ¸   
;   5   :    QV   ¸   
T T Y   T ]   T ]   :   QV      @V  ¸   
;   5   	:   QV  ¸   

T : QV  ¸   
T : QV  ¸   
A5   ¸   
AT  : : QA¸   
T  V  : QV  ŰČÖ(ČČ˙˙˙ÄČ.ŐČŇŇ3ËŃ37Ó    Cc3   @mozilla.org/tcp-socket;1   createInstance   Ci   nsIDOMTCPSocket	   open%   useSecureTransport   binaryType   QueryInterface)   nsITCPSocketInternal   setAppId   setInBrowserA   setOnUpdateBufferedAmountHandler=   _onUpdateBufferedAmountHandler	   bind   _setCallbacks   ˙˙˙˙   Y   TCPSocketParentIntermediary.prototype.listenÁ                      š   
   2                          	      D   -   aTCPServerSocketParent   aLocalPort   aBacklog   aBinaryType   aAppId   aInBrowser   baseSocket   serverSocket   localPort     5  ;       	      ;    5   ¸   
;   5   :    QV   ¸   
T Y   T ]   T :   QV      @V  5     QV      0   QV     0   	QV  ŰČÓ/Ë˙˙˙ŕČBÎDĎZĎa    Cc3   @mozilla.org/tcp-socket;1   createInstance   Ci   nsIDOMTCPSocket   listen   binaryType   localPort   onconnect   onerror   ˙˙˙˙      TCPSocketParentIntermediary.prototype.listen/serverSocket.onconnectÁ             ŕ       š      ?                                       socket   socketParent   intermediary   socketInternal Ż	    D       
      ;    5   ¸   
;   5   : W   Q;   R  W  QT  ¸   
;   5   :   QV  ¸   
   : QV  ¸   	
   : QV  ¸   

V  5   ¸   
V  V   : : QV  ¸   
V   T  : QV   ¸   
T  V  : Q   ¸   
V   : Q
ŃĘEČG
ČI
ÔČÔÔËŘLRÖVÖÔ8    CcA   @mozilla.org/tcp-socket-parent;1   createInstance   Ci%   nsITCPSocketParent7   TCPSocketParentIntermediary   QueryInterface)   nsITCPSocketInternal   setAppId   setInBrowserA   setOnUpdateBufferedAmountHandler=   _onUpdateBufferedAmountHandler	   bind   _setCallbacks1   setSocketAndIntermediary%   sendCallbackAccept   ˙˙˙˙      TCPSocketParentIntermediary.prototype.listen/serverSocket.onerrorÁ               B       š                                          	   data   error @    Z       
      T  5    W   Q   ¸   
V   5   V   5   V   5   V   5   : QÍ]ŢŇ]W 	   data#   sendCallbackError   message   filename   lineNumber   columnNumber   ˙˙˙˙   m   TCPSocketParentIntermediary.prototype.onRecvSendStringÁ               7       š                                             aData   aTrackingNumber   socketInternal  T    d             A5    ¸   
;   5   :    QV   ¸   
T  >>T : ×ČÓA    _socket   QueryInterface   Ci)   nsITCPSocketInternal'   onRecvSendFromChild   ˙˙˙˙   w   TCPSocketParentIntermediary.prototype.onRecvSendArrayBufferÁ               >       š                                             aData   aTrackingNumber   socketInternal  2  )  i       	      A5    ¸   
;   5   :    QV   ¸   
T  >T  5   T : ×Č×k?    _socket   QueryInterface   Ci)   nsITCPSocketInternal'   onRecvSendFromChild   byteLength