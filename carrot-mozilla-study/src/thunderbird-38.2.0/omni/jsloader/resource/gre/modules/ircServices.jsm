ç¿s¹                =     ¹                                            resource://gre/modules/ircServices.jsm     ­!                                f        Q;   5      Q;   ¸   
=   : Q;   ¸   
=   : Q;   ¸   
=   : Qn   Y   =   	]   
;   5   ]      ]      ]   Y      ]      ]      ]   X¥   ^]   o   Qn   Y   =   	]   
;   5   ]      ]   Y      	]      
]      ]   ]   o   QÊ 	3yËÐÕ2Õ1Õ. 13ÊÊÏÊÊ?BÊQÊ_ÊgÔ3yÊÊÏÊ~Ê  Ê  ±Õy !   EXPORTED_SYMBOLS   Cu   Components   utils   importI   resource:///modules/imXPCOMUtils.jsmG   resource:///modules/ircHandlers.jsmA   resource:///modules/ircUtils.jsm   ircServices   IRC Services	   name   ircHandlers   HIGH_PRIORITY   priority   isEnabled   sendIdentify   NOTICE	   NICK   001   commands   servicesBase!   DEFAULT_PRIORITY   ChanServ   InfoServ   NickServ                     ircServices      servicesBase                  ÿÿÿÿ      ServiceMessage               p       ¹   
   (                                        aAccount   aMessage+   nicknameToServiceName   nickname  ¯  =                Y   =    ]   =   ]   =   ]      QT  ¸   
T 5   :   QV   ¸   
V  :    T V   V  76   	QT &ÊÊÏ,ÒÈÏÒ0    ChanServ   chanserv   InfoServ   infoserv   NickServ   nickserv   normalize   origin   hasOwnProperty   serviceName   ÿÿÿÿ   +   ircServices.isEnabledá                          ¹                                              §  ®  6             C    ÿÿÿÿ   1   ircServices.sendIdentifyÁ                 U       ¹                                              aAccount È  Ë  7             T  5    5   E   QT  5   E   QT  5       *T  ¸   
=   T  5    5   =   : QáÉÜ:=    imAccount   password%   shouldAuthenticate   isAuthenticated   sendMessage   IDENTIFY=   IDENTIFY <password not logged>   ÿÿÿÿ   7   ircServices.commands.NOTICEÁ               Y       ¹      %                           	             aMessage   message X	    B             ;    5       B;   â   AT  :    QV   ¸   
=   :     B;    ¸   
AV   : 
ËF
Î
ÈI
ÐNÑ1    ircHandlers'   hasServicesHandlers   ServiceMessage   hasOwnProperty   serviceName+   handleServicesMessage   ÿÿÿÿ   3   ircServices.commands.NICKÁ               W       ¹                                               aMessage   newNick ,  í  Q             T  5    >7   QA¸   
V   : A¸   
A5   :    BA5       ;   ¸   
A: QB
ÏTÌ
ÑX
Ñ\    params   normalize!   _accountNickname   isAuthenticated   ircServices   sendIdentify   ÿÿÿÿ   7   ircServices.commands["001"]Á                        ¹                                              aMessage   æ  _             ;    ¸   
A: QBaÑd    ircServices   sendIdentify   ÿÿÿÿ   3   ircServices.commands[421]Á                        ¹      -                                        aMessage ü  D  g             T  5    ?7=   E   *QA5   5   E   QA5   E   QA5       9A¸   
=   Z  =   `   A5   5   `  =   : QCT  5    ?7=      A¸   	
=   
: QCBjçÌ%ÑÉÏlnpÐÑt    params   IDENTIFY   imAccount   password%   shouldAuthenticate   isAuthenticated   sendMessage   NICKSERVO   NICKSERV IDENTIFY <password not logged>	   WARNA   NICKSERV command does not exist.   ÿÿÿÿ   -   servicesBase.isEnabledá                          ¹                                              ¹  À  |             C    ÿÿÿÿ   =   servicesBase.commands.ChanServÁ               %      ¹      Y                                        aMessage   channel   params   message é  G         	      T  5    ?7¸   
=   ?: >7   QV    D   0QV   >7=   D   QV   ¸   
×ÿ: >7=      BV   ¸   
?×ÿ: W   QA¸   
V   :  D   QA5   ¸   
V   :     BY   C]   	  QT  5   
=      V  C6   QT  5    ?7¸   
V   Ù   ×:   QA¸   
V   : ¸   
T  5   V  V  : QC
×
Ê
ê!ËÎ
È
ÌÊÑ

ËÎË
Ý
ÈÖÐ      params   split       [   slice   ]   isMUCName   conversations   has   incoming   command   NOTICE   notification   length   getConversation   writeMessage   origin   ÿÿÿÿ   =   servicesBase.commands.InfoServÁ               ö       ¹      R                                        aMessage	   text b           	      T  5    ?7   QV   =      AZ  V   `   6   QC   ÀV   =      A5   E   QA5      gA5   ¸   
V   : QA¸   
T  5   : ¸   
T  5   A5   ¸   	
=   
: Y   C]   : QA%   QC   1A¸   
=   :    A5   ¸   
V   : QCB
ÏÊÎÊ  Ò
Õ
ÚÚ-  ¢

ÍÕ    params?   *** Message(s) of the Day ***   _infoServMotdM   *** End of Message(s) of the Day ***   _showServerTab	   push   getConversation   origin   writeMessage	   join   
   incoming   hasOwnProperty   ÿÿÿÿ   =   servicesBase.commands.NickServÁ               j      ¹                                             aMessage	   text ¦  ¥!  ±       	      T  5    ?7   QA5      BA5      V   =   D   QV   ¸   
>×: =      EA¸   
=   : QAC6   Q;   	â   	A5   
: QA%   
QA%   Q   A5   ¸   
T  : QCV   =   D    QV   =   D   QV   =      QA¸   
=   : QAZ  T  `   6   QA;   â       ¸   
A: X': 6   
QCA5    E   -QV   =   D   QV   ¸   
>×: =      AC6   QCB
Ï  ·ÐÎÉ@
Ñ
È
Ô

Ì
ÔÐÐÊÑÍ×  Ý  ×.  Ý  ×#É  Þ
ÍÐÎÉÈ    params1   isHandlingQueuedMessages)   nickservMessageQueueW   Password accepted - you are now recognized.   slice9   You are now identified for    LOGS   Successfully authenticated with NickServ.   isAuthenticated   clearTimeout'   nickservAuthTimeout	   pushw   This nick is owned by someone else.  Please choose another.s   This nickname is registered and protected.  If it is yourë   This nickname is registered. Please choose a different nickname, or identify via /msg NickServ identify <password>.K   Authentication requested by NickServ.   setTimeout	   bind7   You are already identified.=   You are already logged in as    ÿÿÿÿ   q   servicesBase.commands.NickServ/this.nickservAuthTimeout<Á                   .       ¹                                           ý     ×             AC6    QA5   ¸   
    A: QA%    QA%   Q
È
Ò  Ù


! 1   isHandlingQueuedMessages)   nickservMessageQueue   every   ÿÿÿÿ   u   servicesBase.commands.NickServ/this.nickservAuthTimeout</<á                        ¹                                              aMessage d  ¤  Ù             ;    ¸   
AT  : Ô)    ircHandlers   handleMessage