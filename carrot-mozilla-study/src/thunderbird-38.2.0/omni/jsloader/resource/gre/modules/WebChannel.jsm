çżsš                x     š   '   É       
                               resource://gre/modules/WebChannel.jsm     c*         
                         Af    6    QXç   Q=      Q;   5      Q5   	   Q5   
   QQ;   ¸   
=   : Q;   ¸   
=   : Qn   ;   ¸   
Y      ]      ]      ]   ;   5   ¸   
;   5   : ]   B]   ;   R  ]      ]   : o   QA   6   QA5   Y   @]   @]   @]    ;   ]   !@]   "   ]   #   ]   $   ]   %   	]   &6   Q
Ě;ÉËę5Ő3Ő1Ö"Ę8ĘCĘfŰ
ČjnČyĘÉ˙˙˙ý  Ě  ľË  ź  Â  Č  ÍĘ  Ň  ęĘ  ůĘ Ę /Đ > !   EXPORTED_SYMBOLS'   ERRNO_UNKNOWN_ERROR   ERROR_UNKNOWN   UNKNOWN_ERROR   Cc   Ci   Cu   Components   classes   interfaces   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm!   WebChannelBroker   Object   create   registerChannel#   unregisterChannel   _listenerG   @mozilla.org/globalmessagemanager;1   getService3   nsIMessageListenerManager   _manager1   _messageListenerAttached   Map   _channelMap1   _sendErrorEventToContent   WebChannel   prototype   id'   _originOrPermission)   _originCheckCallback   _broker!   _deliverCallback   listen   stopListening	   send   deliver                     WebChannel   !   WebChannelBroker                  ˙˙˙˙   C   WebChannelBroker<.registerChannelÁ                        š      (                                        channel G  ú  "             A5    ¸   
T  :     A5    ¸   
T  : Q   ;   ¸   
=   : QA5       4AC6   QA5   ¸   
=   	A5   
¸   
A: : QĐŮŐ*Čŕ>˙˙˙ÂY    _channelMap   has   set   Cu   reportErroro   Failed to register the channel. Channel already exists.1   _messageListenerAttached   _manager%   addMessageListener3   WebChannelMessageToChrome   _listener	   bind   ˙˙˙˙   G   WebChannelBroker<.unregisterChannelÁ                 /       š                                              channelToRemove â    8             A5    ¸   
T  :     ;   ¸   
=   : QĐŐG    _channelMap   delete   Cu   reportErrori   Failed to unregister the channel. Channel not found.   ˙˙˙˙   7   WebChannelBroker<._listenerÁ                  š      c                        !             event   channel	   data   sendingContext ń  Ń  C             T  5      QY   T  5   ]   T  5   5   ]   T  5   ]     QV  E   QV  5     %T  5       (A¸   
V  5   V  =   : Q   ď  QB  QV  V  5   	D   QY   6   	QA5   
¸   
:  - Á
:     bm5   W   QV   5   V  5   HE   QV   ¸   
T  5   :    "CW  QV   ¸   
V  V  : QăQ¸   
:  5   ˙˙˙ V      #A¸   
V  5   V  =   : QČ   ;   ¸   
=   : QÍÍŇŇKÓ  
É#ăŢRÍĚ8vŃŮÓ×RË˙˙˙ěŃ[
ä_Ő0 	   data   target   browser   objects   eventTarget   principal   id1   _sendErrorEventToContent3   Message principal missing   message   _channelMap	   keys   value)   _originCheckCallback   deliver	   next	   done   No Such Channel   Cu   reportError;   WebChannel channel id missing    ˙˙˙˙      #   validChannelFound       Ô   v          é   ˙˙˙˙   ˙˙˙˙   U   WebChannelBroker<._sendErrorEventToContentÁ               Ń       š      ;                                        id   sendingContext   errorMsg   targetBrowser   eventTarget   targetPrincipal     Ë  y       
      T 5       Q5     Q5     QQT D   Q=   U QV   E   QV   5      JV   5   ¸   
=   Y   T  ]   T ]   Y   V  ]   V  : Q   ;   	¸   

=   : Q;   	¸   

T  ¸   
:  =   T : Qĺ|Ň~ÓEÚČČÍÉŐÖÍ˙˙˙ń>    browser   eventTarget   principal1   Web Channel Broker error   messageManager!   sendAsyncMessage5   WebChannelMessageToContent   id   error   Cu   reportErrore   Failed to send a WebChannel error. Target invalid.   toString!    error message.    ˙˙˙˙      this.WebChannelÁ                 k       š      3                                @      id%   originOrPermission   Ď               T   D   Q       ;    =   R pAT  6   Q   '=      AA    6   Q   AA   6   QA   6   QĘËĘĚŇ  ŽÍĚ.    Errore   WebChannel id and originOrPermission are required.   id   string)   _originCheckCallback'   _originOrPermission   ˙˙˙˙   S   this.WebChannel/this._originCheckCallbackĹ               p       š      '                                     !   requestPrincipal   uri	   perm V  Ő  Ą             ;    5   ¸   
T  5   @@:    QV   5   =      B;    5   ¸   
T     :   QV  ;   5   	5   

ŰČĎ
Ô  ŞČŐ4    Services   io   newURI   origin   scheme   https   permsA   testExactPermissionFromPrincipal   Ci)   nsIPermissionManager   ALLOW_ACTION   ˙˙˙˙   S   this.WebChannel/this._originCheckCallbackĹ                        š                                           !   requestPrincipal 8    °                5    T  5   HÔ>    prePath   origin   ˙˙˙˙   A   this.WebChannel.prototype.listenÁ                 Y       š      "                                        callback \    ę             A5       ;   =   R p   >T      ;   =   R p   !AT  6    QA5   ¸   
A: QËÉËÉĘŇ# !   _deliverCallback   ErrorY   Failed to listen. Listener already attached.Y   Failed to listen. Callback argument missing.   _broker   registerChannel   ˙˙˙˙   O   this.WebChannel.prototype.stopListeningÁ                          š                                            .      ů             A5    ¸   
A: QA@6   QŇČ    _broker#   unregisterChannel!   _deliverCallback   ˙˙˙˙   =   this.WebChannel.prototype.sendÁ               Ń       š      5                                        message   target   browser   principal   eventTarget  $  &              T 5       Q5     Q5     QQT  E   #QV   E   QV   5   E   
QV     MV   5   ¸   
=   Y   A5   ]   T  ]   Y   V  ]   V  : Q   =T      ;   ¸   	
=   
: Q   ;   ¸   	
=   : QĺćHÚËČÍ ÉÚŐG    browser   principal   eventTarget   messageManager!   sendAsyncMessage5   WebChannelMessageToContent   id   message   Cu   reportErrork   Failed to send a WebChannel message. Message not set.i   Failed to send a WebChannel message. Target invalid.   ˙˙˙˙   C   this.WebChannel.prototype.deliverÁ                ź       š      6                                  	   data   sendingContext  (  _*  /            A5        A¸    
T  5   T  5   T : Q   v   Qv   QA¸   
Y   ;   ]   V   5      V   5      
;   ]   T : Q;   ¸   	
=   
V   : QČ       ;   ¸   	
=   : Q   äĚÍ
Ę
ÉÝ 4ćŐ4 !   _deliverCallback   id   message	   send'   ERRNO_UNKNOWN_ERROR   errno   ERROR_UNKNOWN   error   Cu   reportError7   Failed to execute callback:C   No callback set for this channel.    ˙˙˙˙          ex            $       1   j   ˙˙˙˙