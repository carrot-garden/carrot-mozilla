çżsš                y     š   &   Ş                                      resource://gre/components/imCommands.js     5!         	                          $;   5       Q5      Q5      Q5      QQ;   ¸   	
=   
: Q;   ¸   	
=   : Q;   ¸   
A=       : Q;   Y      ]      ]      ]      ]      ]      ]      ]      	]      
]   ;   ¸   
Z  ;   5   `   : ]   =   ]   ;   ¸   
=    : ]   !=   "]   #6   Q;   ¸   %
Z  ;   `   :    $QĘ	 öBŐ0Ő2
ŰĘĘxĘ|Ę  Ę  Ę  Ę  ŹĘ  ąĘ  ăĘ  űĐ'Î˙˙˙éČĘŃ	ČĐĐ0É˙˙˙ßÉ˙˙˙ý    Cc   Ci   Cr   Cu   Components   classes   interfaces   results   utils   importE   resource:///modules/imServices.jsmI   resource:///modules/imXPCOMUtils.jsm   XPCOMUtils!   defineLazyGetter   _   CommandsService   prototype   initCommands   unInitCommands   registerCommand#   unregisterCommand7   listCommandsForConversation/   listCommandsForProtocol'   _usageContextFilter   _findCommands   executeCommand   generateQI%   imICommandsService   QueryInterface   Commands!   classDescription   IDM   {7cb20c68-ccc8-4a79-b6f1-0b4771ed6c23}   classIDI   @mozilla.org/chat/commands-service;1   contractID   NSGetFactory)   generateNSGetFactory   ˙˙˙˙    Ą                          š                                            ­  č  
             ;    â    =   : Ó6    l10nHelperQ   chrome://chat/locale/commands.properties   ˙˙˙˙      CommandsService                          š                                                                    ˙˙˙˙   M   CommandsService.prototype.initCommandsÁ                ü      š      §       
                 $              statusB  Ý               AY   6    QA¸   
Y   =   ]       a   ;   5   5   ]   ;   5   5   	]   
   ]   : QA¸   
Y   =   ]      a   ;   5   5   ]   ;   5   5   ]   
   ]   : QA¸   
Y   A]   =   ]      a   ;   5   5   ]   ;   5   5   ]   
   ]   : QY   =   ]   =   ]   =   ]   =   ]   =   ]      QV   K  Q   mW  Ć      Q;   5   =   V   V  77   QA¸   
Y   V  ]      a   ;   5   5   ]   ;   5   5   	]   
   	]   : QČÇăQLM˙˙˙rQNČĚÍĘ
ĘÔÔĘÍĘ
ĘÔÔĘ-Í02Ę
ĘÔÔĘ-cĘĘĘĘĎjÍ0  Ö
ŕÍÉĘÔÔĘlÓj    _commands   registerCommand   say	   name   helpString   Ci   imICommand   CMD_CONTEXT_ALL   usageContext#   CMD_PRIORITY_HIGH   priority   run   raw)   CMD_PRIORITY_DEFAULT   cmdSrv	   help   AVAILABLE	   back	   AWAY	   away   UNAVAILABLE	   busy   dnd   OFFLINE   offline   imIStatusInfo   STATUS_   ˙˙˙˙   g   CommandsService.prototype.initCommands/<.helpStringá                          š                                            Y  n               ;    â    =   : Ó    _   sayHelpString   ˙˙˙˙   Y   CommandsService.prototype.initCommands/<.runÁ                        š                                           	   aMsg   aConv  ç  )               ;    5   pË"    Cr1   NS_ERROR_NOT_IMPLEMENTED   ˙˙˙˙   g   CommandsService.prototype.initCommands/<.helpStringá                          š                                            u    !             ;    â    =   : Ó    _   rawHelpString   ˙˙˙˙   Y   CommandsService.prototype.initCommands/<.runÁ               =       š                                           	   aMsg   aConv	   conv    ˝  $             ;    5   ¸   
T :    QV       BV   ¸   
T  : QCÔČ
Ň    Services   conversations#   getUIConversation   sendMsg   ˙˙˙˙   g   CommandsService.prototype.initCommands/<.helpStringá                          š                                                3             ;    â    =   : Ó    _   helpHelpString   ˙˙˙˙   Y   CommandsService.prototype.initCommands/<.runÁ                    š      x                         !          	   aMsg   aConv	   conv   cmdArray   cmd	   text    O  6             ;    5   ¸   
T :    QV       BT      Ť  Q  Q  QA5   ¸   
T Y   :   QV  Ů       	BČV  ¸   
   : ¸   
:  ¸   
=   	:   Q;   
â   
=   V  :   QV   ¸   
V  : QCČČA5   ¸   
T T  :   QV  Ů       =  Q;   
â   
=   T  :   QV   ¸   
V  : QCČČV  >7  QV  5     QV      %;   
â   
=   V  5   : W  QV   ¸   
V  : QCÔČ
=×ŐČĘCĐáÓ
ČG
Ó
LÓČNĘËPŇ
Č
Ó
VËXÎ
ŘČ]Ó    Services   conversations#   getUIConversation   cmdSrv7   listCommandsForConversation   length   map	   sort	   join   ,    _   commands   systemMessage   _findCommands   noCommand   helpString   noHelp	   name    ˙˙˙˙         commands    	   cmds       message              e   CommandsService.prototype.initCommands/<.run/cmds<á                 
       š                                           	   aCmd 2	  B	  C             T  5    1É	 	   name    ˙˙˙˙         message        4   Ł   ˙˙˙˙˙˙˙˙r          ˙˙˙˙Ő               7   ˙˙˙˙˙˙˙˙7            ˙˙˙˙         cmd                    statusValue            g   CommandsService.prototype.initCommands/<.helpStringá                   -       š                                            Ź  Ú  n       
      ;    â    =   A5   ;    â    A5   : : ĺ˙˙˙â+    _   statusCommand	   name         Y   CommandsService.prototype.initCommands/<.runÁ                 %       š      
                                     	   aMsg Y  É  q             ;    5   5   ¸   
   T  : QC
â
    Services	   core!   globalUserStatus   setStatus   e        [      ˙˙˙˙   p  }          ˙˙˙˙   Q   CommandsService.prototype.unInitCommandsÁ                          š                                             ů    x             A%    Q    _commands   ˙˙˙˙   S   CommandsService.prototype.registerCommandÁ               l       š                                 	             aCommand   aPrplId	   name  :  +  |             T  5       QV       ;   5   pA5   ¸   
V   :     A5   V   Y   8QA5   V   7T D   Q=   T  8QÍËŃŃŢ/ 	   name   Cr)   NS_ERROR_INVALID_ARG   _commands   hasOwnProperty      ˙˙˙˙   W   CommandsService.prototype.unregisterCommandÁ                       š      +                                      aCommandName   aPrplId  J                 A5    ¸   
T  :    ~  Q   QT D   Q=      QA5    T  7  QV  ¸   
V   :    V  V   &Q;   ¸   
V  : Ů       A5    T  &QČĐŃ
Ó
ĎĎ
Ę
ĐÉĚ  6    _commands   hasOwnProperty      Object	   keys   length    ˙˙˙˙          prplId       commands           w   ˙˙˙˙   ˙˙˙˙   k   CommandsService.prototype.listCommandsForConversationÁ                    š      ?                                     aConversation   commandCount   result   prplId  Ä  Ř               Z      QT  E   QT  5    5   5     QA5   K  Q   mW    QA5   V  7  QV  ¸   
=   :    V   ¸   
V  5   : QV  E   QV  ¸   
V  :    V   ¸   
V  V  7: QČăQLM˙˙˙vQNČT     &V   ¸   
A¸   
T  : : W   QT V   Ů   
6   	QV   ÉŕĎ0  Đ
ĐĐ
ŘŮćÖ˙˙˙ňČŇ    account   protocol   id   _commands   hasOwnProperty   	   push   filter'   _usageContextFilter   value   length    ˙˙˙˙      	   name                     commands       =          3      ˙˙˙˙   C             ˙˙˙˙   c   CommandsService.prototype.listCommandsForProtocolÁ                     š      )                        	             aPrplId   commandCount   result  I            
      T      =    pZ      QA5   K  Q   NmW    QA5   V  7  QV  ¸   
T  :    V   ¸   
V  T  7: QČăQLM˙˙˙˛QNČT V   Ů   6   QV   ÉĎ0SĐ
ĐÎ
ĺŇ 7   You must provide a prpl ID.   _commands   hasOwnProperty	   push   value   length    ˙˙˙˙      	   name                     commands       ,   T       "   `   ˙˙˙˙   2   C          ˙˙˙˙   [   CommandsService.prototype._usageContextFilterÁ                :       š                                             aConversation   usageContext Á  q  Ź             ;    5   =   T  5      =      
=   7   Q    ×
Ü1    Ci   imICommand   CMD_CONTEXT_   isChat	   CHAT   IM   ˙˙˙˙   _   CommandsService.prototype._usageContextFilter/<á                        š                                              c K  l  Ż             T  5          Ô    usageContext   ˙˙˙˙   O   CommandsService.prototype._findCommandsÁ              ň      š      Ł                        )      @      aConversation   aName   prplId   commandNames   cmdArray   #  ą             @   QT     :  QT  5      QV  5      V  5   5   W   QČ  QA5   ¸   
   :    Z     `   W  Q   /;   ¸   
A5   : ¸   
A   : W  QZ     QV  - Á
:    Q   m5   	W  Q  Q  QZ     QA5   V  7  QV  ¸   
=   
:    V  ¸   
V  5   
: QV   E   QV  ¸   
V   :    V  ¸   
V  V   7: QT     &V  ¸   
A¸   
T  : : W  QV  Ů       Č   (V  Ů      Z   ČČ V  W  QČăQ¸   
:  5   ˙˙ţńČ V  ¸   
   : Ë
ÍÉÔŇÓŇĘ  ŔČ  ÇÉÓ8 Ý
É
ĐĐ
ŘŮŘÖ˙˙˙ńČ
ĘAÉËĘ  ČË˙˙˙čŇ  áĐ6    account   connected   protocol   id   _commands   hasOwnProperty   Object	   keys   filter   value   	   push'   _usageContextFilter   length	   next	   done	   sort    ˙˙˙˙         account       ˙˙˙˙   k   CommandsService.prototype._findCommands/commandNames<ĺ                        š                                              command §  Ë  Á             T  ¸    
   : .Ó    startsWith    ˙˙˙˙         commandName                    matches       commands       ˙˙˙˙   S   CommandsService.prototype._findCommands/<á                        š                                              a   b  ˙    á             T 5    T  5    (Ň    priority   Ĺ            4   ˙˙˙˙   ť     ˙˙˙˙   Ó   í                    ą        ˙˙˙˙˛           ˙˙˙˙   Q   CommandsService.prototype.executeCommandÁ               ,      š      M                               @      aMessage   aConversation   aReturnedConv   matchResult	   name	   args   cmdArray ?  
   ă       
      T      ;    5   p   QT  >7=   D   Q     ¸   
T  : W       BV   - Á
:  ¸   
:  5      Q   
5   Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5      QQQA¸   
   V  :   QV  Ů       BV  ¸   	
A    :      A¸   

=   V     : QCËŃĎČŢăçŮŃČĘŃŰ    Cr)   NS_ERROR_INVALID_ARG   /	   exec	   next	   done   value   _findCommands   length	   some   executeCommand   /help    ˙˙˙˙   U   CommandsService.prototype.executeCommand/<ĺ                 #       š                                           	   aCmd K    ô             T  ¸    
            : â,    run7   ^\/([a-z]+)(?: |$)([\s\S]*)    