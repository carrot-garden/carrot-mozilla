ç¿s¹                4     ¹      |                                 0     resource://gre/modules/devtools/security/prompt.js     ¡                                ;   â   =   : 5    n    
1    QQn   ;   â   =   : 1   Qn   ;   â   =   : 1   Q;   ¸   
A=   =   	C: Q;   ¸   
A=   
=   C: Q;   ¸   
A=   A    : Qn   ;   Y   0   1   Qn   ;   Y   0   1   Q;   A   0   Q;   A   0   Q;   A   0   Q		Ï	ÖÔÉÿÿÿýÔÉÿÿÿýÒ,Ò*ÜÚÚ1ÑeÑ    ¬Ñ  »    Ci   require   chrome   Services   DevToolsUtils=   devtools/toolkit/DevToolsUtils   loader#   lazyRequireGetter   DebuggerSocketA   devtools/toolkit/security/socket)   AuthenticationResult=   devtools/toolkit/security/auth!   defineLazyGetter   bundle   Client   exports   Server   defaultSendOOB-   defaultAllowConnection#   defaultReceiveOOB   ÿÿÿÿ                     $       ¹                                              DBG_STRINGS_URI·  J               =       Q;   5   ¸   
V   : ÊÕ/ g   chrome://global/locale/devtools/debugger.properties   Services   strings   createBundle   ÿÿÿÿ   +   Client.defaultSendOOBÅ     
        Ç      ¹                                '               authResult   oob   title   header   hashMsg   token   tokenMsg   msg   prompt   flags   promptWindow   windowListener ¡  $  1             T  5    W   Q5   W  QQV   ;   5      ;   =   V   R p;   ¸   
=   :    Q;   ¸   
=   	:   Q;   ¸   

=   Z  V  5   `   ?:   QV  5   ¸   
     =   : ¸   
:  V  5     Q;   ¸   

=   Z  V  `   ?:   Q=   V  ä=   V  ä=   V  ä=      Q;   5      Q   5      5      Q   QY       ]      ]      ]      Q;   5   ¸   
   : Q;   ¸   
A   : QY      ]   1ÿÿÿèÚ3ÏÐ6ÑÉÑ	ÈÑ-Î8È:ÚÜÑ.É;È=ÌÌÒÐÛBÊQÊÐTÚWÖ\Ëd    authResult   oob)   AuthenticationResult   PENDING   Error;   Expected PENDING result, got    bundle#   GetStringFromName%   clientSendOOBTitle'   clientSendOOBHeader)   formatStringFromName#   clientSendOOBHash   sha256   replace      toLowerCase   k%   clientSendOOBToken   

   
   Services   prompt   BUTTON_POS_0'   BUTTON_TITLE_CANCEL   onOpenWindow   onCloseWindow'   onWindowTitleChange   wm   addListener   DevToolsUtils   executeSoon   close   ÿÿÿÿ      onOpenWindow                M       ¹                                            xulWindow   win 8  $  D             T  ¸    
;   5   : ¸   
;   5   :    Q   ¸   
=       B: Q
ÔÊÊEÉGÖOGO    QueryInterface   Ci+   nsIInterfaceRequestor   getInterface   nsIDOMWindow!   addEventListener	   load   ÿÿÿÿ      listener                          ¹   
                                        ö    G                   ¸    
=   B: Q      5   5   ¸   
=   : =                Q;   5   ¸   	
    : QÜàÉ
MÕß+ '   removeEventListener	   load   document   documentElement   getAttribute   id   commonDialog   Services   wm   removeListener   ÿÿÿÿ      onCloseWindow                          ¹                                             7  <  Q                  ÿÿÿÿ   '   onWindowTitleChange                          ¹                                             U  Z  R                  ÿÿÿÿ   /   Client.defaultSendOOB/<Å                   D       ¹                                           ø  q  W                   ¸    
@                  @@@@Y   B]   : 	QôX'    confirmEx   value   ÿÿÿÿ      close                   >       ¹                                               ]                             5    5   ¸   
:  Q@      Q
ËaßÌ    document   documentElement   acceptDialog   :      ÿÿÿÿ   ;   Server.defaultAllowConnectionÅ                    ¹                                  )               client   server   title   header   clientEndpoint   clientMsg   serverEndpoint   serverMsg   footer   msg   disableButton   prompt   flags   result   Ú               T  5    W   Q5   W  QQ;   ¸   
=   :   Q;   ¸   
=   :   Q=   V   5   ä=   V   5   	ä=     Q;   ¸   

=   Z  V  `   ?:   Q=   V  5   ä=   V  5   	ä=     Q;   ¸   

=   Z  V  `   ?:   Q;   ¸   
=   :   Q=   V  ä=   V  ä=   V  ä=   V  ä=     	Q;   ¸   
=   :   
Q;   5     QV  5   V  5   V  5   V  5   V  5   V  5   V  5     QV  ¸   
@V  V  	V  @@V  
@Y   B]   : 	  QV  >H   ;   5   V  ×H   ;   5   ;   5   8ÿÿÿéÚÑÈÑ	ÈÑÖÑ!É  ÈÑÖÑ!É  ÈÑ	ÈÌÌÌÑÑÈÏÓÔÔÏÚÊ7  ÈËËË!    client   server   bundle#   GetStringFromName3   remoteIncomingPromptTitle5   remoteIncomingPromptHeader   	   host   :	   port)   formatStringFromNameE   remoteIncomingPromptClientEndpointE   remoteIncomingPromptServerEndpoint5   remoteIncomingPromptFooter   

   
7   remoteIncomingPromptDisable   Services   prompt   BUTTON_POS_0   BUTTON_TITLE_OK   BUTTON_POS_1'   BUTTON_TITLE_CANCEL   BUTTON_POS_2-   BUTTON_TITLE_IS_STRING)   BUTTON_POS_1_DEFAULT   confirmEx   value)   AuthenticationResult   ALLOW   DISABLE_ALL	   DENY   ÿÿÿÿ   1   Server.defaultReceiveOOBÅ                       ¹      U                                       title   msg   input   prompt   result   sha256   kv    ¬             ;    ¸   
=   :    Q;    ¸   
=   :   QY   @]     Q;   5     QV  ¸   
@V   V  V  @Y   B]   :   QV      @V  5   ¸   
:  W  QV  ¸   
>×@:   QV  ¸   	
     =   
: ¸   
>×ÿ: ¸   
:  W  QV  ¸   
×@:   QY   V  ]   V  ]   ÑÈÑÈ
ËÏÞ8ÿÿÿÑÈÐÈÎ	ÈÕ	ßÍÈ	ÉÊ    bundle#   GetStringFromName+   serverReceiveOOBTitle)   serverReceiveOOBBody   value   Services   prompt	   trim   substring   replace   $&:   slice   toUpperCase   sha256   k   \w{2}   