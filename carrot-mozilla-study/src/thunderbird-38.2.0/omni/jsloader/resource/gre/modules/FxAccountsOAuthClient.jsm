çżsš                T     š   "                                         resource://gre/modules/FxAccountsOAuthClient.jsm     ~                            Af    6    Q;   5      Q5      Q5      Q5   	   QQ;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   
A=   =   : Q;   ¸   
f   : QA   6   QA5   Y   @]   @]   @]   B]   @]   @]   @]      ]      ]      ]      ]       ]   !6   Q
Ě2öBŐ3Ő,Ő1Ő8ŇKŐ#,Ě@BËHLPTX\`eĘuĘ  Ę  Ę  ŰĐ  ć !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importK   resource://gre/modules/XPCOMUtils.jsm=   resource://gre/modules/Log.jsmG   resource://gre/modules/Services.jsmU   resource://gre/modules/FxAccountsCommon.js   XPCOMUtils-   defineLazyModuleGetter   WebChannelK   resource://gre/modules/WebChannel.jsm-   importGlobalProperties+   FxAccountsOAuthClient   prototype   onComplete   parameters   _channel   _complete#   _fxaOAuthStartUrl   _webChannelId#   _webChannelOrigin   launchWebFlow   tearDown#   _configureChannel!   _registerChannel!   _validateOptions                  +   FxAccountsOAuthClient                                    URL                  ˙˙˙˙   5   this.FxAccountsOAuthClientÁ              M      š      A                        !             options+   authorizationEndpoint   params E  ű	  ,       
      A¸    
T  : QAT  5   6   QA¸   
:  QT  5   D   Q=      QA;   A5   5   V   =   R 6   Q   '  Qv  Q;   	=   
R pČ    A5   5     QV  ¸   
=   A5   5   : QV  ¸   
=   A5   5   : QV  ¸   
=   A5   5   D   Q=   : QV  ¸   
=   A5   5   D   Q=   : QV  ¸   
=   A5   : QĎĎĚ1Ř3'ÝÎĚËË9ĐßßęęÚ2 !   _validateOptions   parameters#   _configureChannel+   authorizationEndpoint   /authorization#   _fxaOAuthStartUrl   URL   oauth_uri   ?   Error#   Invalid OAuth Url   searchParams   append   client_id   state   scope      action   signin   webChannelId   _webChannelId    ˙˙˙˙         e         C   +       o      ˙˙˙˙   ˙˙˙˙   e   this.FxAccountsOAuthClient.prototype.launchWebFlowÁ                         š      '                                    É  &  e             A5        A¸   
:  QA5      ;   =   R p   R   Q;   5   ¸   
=   : 5   	   QV   V   ¸   
A5   5   : 6   
QČĚjËÉ
Ö	ÍÚĘl !   _channelCallback!   _registerChannel   _complete   ErrorY   This client already completed the OAuth flow   Services   wm'   getMostRecentWindow#   navigator:browser   gBrowser   selectedTab   addTab#   _fxaOAuthStartUrl	   href    ˙˙˙˙          opener        8   L   ˙˙˙˙   ˙˙˙˙   [   this.FxAccountsOAuthClient.prototype.tearDownÁ                   *       š                                            u  ń  u             A@6    QAC6   QA5   ¸   
:  QA@6   QČČŃČ    onComplete   _complete   _channel   stopListening   ˙˙˙˙   m   this.FxAccountsOAuthClient.prototype._configureChannelÁ                  _       š   	                                      Y                 A=   A5   5   6    QA;   5   ¸   
A5   5   @@: 6   Q      Qv   QV   pČ    Ř)ßÎĚĚ    _webChannelId   oauth_   parameters   client_id#   _webChannelOrigin   Services   io   newURI   content_uri    ˙˙˙˙          e            -       G      ˙˙˙˙   ˙˙˙˙   k   this.FxAccountsOAuthClient.prototype._registerChannelÁ                        š      %                                        listener  x         	             QAV   ¸   
A: 6    QA;   A5   A5   R 6   QA5   ¸   
A5    : Q;   ¸   
=   	A5   =   
A5   5   : Q  Ę  ÎÍÉÓÉ×îj !   _channelCallback	   bind   _channel   WebChannel   _webChannelId#   _webChannelOrigin   listen   log   debug)   Channel registered:     with origin    prePath   ˙˙˙˙   }   this.FxAccountsOAuthClient.prototype._registerChannel/listenerÁ                Ć      š                               #             webChannelId   message   sendingContext     Q               T   Â  Q  Q   QT 5       QT 5     QT E   QT 5     QV     Qx=   y   
z  d@  QA5   5   V  5   H   EY   V  5   ]   V  5   ]   W  Q;   ¸   
=   	: Q   ;   ¸   
=   
: QA5      A¸   
V  : QA¸   
:  QV  5   E   
QV     Ť  QV  ¸   
:    QV     s  QV  ¸   
V  :   QV     2V  ¸   
V  : Q;   ¸   
=   : Q   ;   ¸   
=   : QČ   ;   ¸   
=   : QČ   ČČ×ÍÍÖĘh ouĘŐ@ÎÓÚŐĐĚÓËËČnËĎČ-ÓÚŰÖX      command	   data   browser   oauth_complete   parameters   state	   code   log   debug+   OAuth flow completed.M   OAuth flow failed. State doesn't match   onComplete   tearDown   closeWindow   getTabBrowser!   getTabForBrowser   removeTab5   OAuth flow closed the tab.   OAuth flow failed to close the tab. Tab not found in TabBrowser.s   OAuth flow failed to close the tab. TabBrowser not found.    ˙˙˙˙          command    	   data       target                     result                    tabbrowser                    tab           ş  ˙˙˙˙   O   u           Ľ         ;  h         ˙˙˙˙   k   this.FxAccountsOAuthClient.prototype._validateOptionsÁ                 B       š                                      @      options&  y  Ű                 D   Q   5        ;   =   R pf    ¸   
A   : QĚËËÖ    parameters   ErrorS   Missing 'parameters' configuration option   forEach                     oauth_uri      client_id      content_uri      state                  ˙˙˙˙   o   this.FxAccountsOAuthClient.prototype._validateOptions/<Ĺ                 .       š                                              option ç  s  ŕ                5    T  7    ;   =   T  =   R p
ĎŐ;    parameters   Error)   Missing 'parameters.   ' parameter