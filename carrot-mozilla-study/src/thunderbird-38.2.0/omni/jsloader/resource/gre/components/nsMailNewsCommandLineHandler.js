ç¿s¹                  7   ¹   -   ø                          0            resource://gre/components/nsMailNewsCommandLineHandler.js     Ç         
                                      *   +;   5       Q;   5      Q;   5      Q;   5   ¸   
=   	: Q;   5   ¸   
=   
: Q=      Q=      Q;   ¸   
=   :    Q=      Qn   Y       a      ]   =   ]   ;   ¸   
Y   ;   ]   ;   ]   Z  ;   5   `   ]   ;   5   5   ]    : ]   !   ]   ";   ¸   #
Z  ;   5   `   ;   5   $`  : ]   %o   Q;   &Y   ;   ]   ;   ¸   #
Z  ;   5   5   (`   : ]   %;   ]   )6   'Qn   *Z  ;   &`   o   *Q;   ¸   ,
;   *:    +QÊ  	  ÐÐÐ	Ú?ÚAËËÑÉÿÿÿýËÊ"ÊsÊvÑ"Ê$Ê$Ó$ÔvÈ|Ê  Ð'Î)Î  Î   .ÊÐ'ÓÿÿÿéÈÐÉÏÿÿÿüÑÉÿÿÿý    Cc   Components   classes   Ci   interfaces   Cr   results   utils   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm!   MAPI_STARTUP_ARG   MapiStartup!   MESSAGE_ID_PARAM   ?messageid=%   CMDLINEHANDLER_CID   IDM   {2f86d554-f9d9-4e76-8eb7-243f047333ee}3   CMDLINEHANDLER_CONTRACTIDw   @mozilla.org/commandlinehandler/general-startup;1?type=mail9   nsMailNewsCommandLineHandler   _messenger   handleÛ     -mail              Open the mail folder view.
  -mail <URL>        Open the message specified by this URL.
   helpInfo   XPCOMUtils   generateCI   classID   contractID+   nsICommandLineHandler   nsIClassInfo   SINGLETON   flags   classInfo   createInstance   generateQI   nsIFactory   QueryInterfaceA   mailNewsCommandLineHandlerModule   prototype   nsIModule   _xpcom_factory   components   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ   O   nsMailNewsCommandLineHandler._messengerÁ                   -       ¹                                            î                 A%    QA;   5   ¸   
;   5   : 6    ÒÊÉ@    _messenger   Cc1   @mozilla.org/messenger;1   createInstance   Ci   nsIMessenger   ÿÿÿÿ   G   nsMailNewsCommandLineHandler_handle                    ¹   ,   Ð                       >             aCommandLine   mailURL   mailFlag ²  ^  "             ;    5   ¸   
=   : Q@   QT  ¸   
=   B: W   Q     Qv  QÈ    V   E   QV   Ù   >  ó  Q@  Q     ¸   
V   :     QV   ¸   
:  ¸   	
;   
:   QV  ×ÿ   Ê  Q  Q  QV   ¸   
>V  : ¸   
=   =   :   QV   ¸   
V  ;   
Ù   :   Q;   ¸   
:  Q;   ¸   
V  C:   QV  E   QV  Ù   >   !V  5   ¸   
V  : W  QÈ   A5   ¸   
V   : W  QÈ   l  Q@  Q;   5   ¸   
V   @@: W  Q     Qv  QÈ    V  ;   5   r   V  5   W  QÈV     (T  C6   Q;   ¸   
V  : Q   #;   â   =   V   =    : QÈT  ¸   !
=   B:   QV     w  Q;   5   "¸   #
=   $:   QV     V  ¸   %
:  Q   +;   5   &¸   '
@=   (=   )=   *@: QT  C6   QÈT  ¸   !
;   +B: Q$Ú&Ð
Í*Ó.ÕË
Ð
 Ë3Ë×  Å×7ÐÊÊ7È:ÚÈ<
Ð>Ñ	È@ÕÔ	ÎCE
Ñ	ÎHJ 
×ÍNÓRÏ
ÏV#ÊÙZß`ÐÈËc
ÖÈÔgÜhlËpÔ1    Components   utils   importA   resource:///modules/MailUtils.js'   handleFlagWithParam	   mail   length	   test   toLowerCase   indexOf!   MESSAGE_ID_PARAM   slice   replace   -message      MailUtils   discoverFolders   getFolderForURI   msgDatabase+   getMsgHdrForMessageID   _messenger   msgHdrFromURI   Services   io   newURI   Ci!   nsIMsgMessageUrl   messageHeader   preventDefault   displayMessage	   dump%   Unrecognized URL:    
   handleFlag   wm'   getMostRecentWindow   mail:3pane   focus   ww   openWindow7   chrome://messenger/content/   _blank   chrome,extrachrome,menubar,resizable,scrollbars,status,toolbar,dialog=no!   MAPI_STARTUP_ARG    ÿÿÿÿ         e        ÿÿÿÿ         msgHdr                    messageIDIndex                    folderURI       messageID       folder                    neckoURL                    e        ÿÿÿÿ         mail3PaneWindow    C   ^(mailbox|imap|news)-message:\/\/         ´  $        !          ?      ÿÿÿÿ   l   í  ÿÿÿÿ              Æ   ½         ¨  f         Ù           {  q   ÿÿÿÿ   ÿÿÿÿ   W   nsMailNewsCommandLineHandler.createInstanceÁ                 %       ¹                                              outer   iid  @  ·  |             T  @   ;    5   pA¸   
T : ËË    Cr/   NS_ERROR_NO_AGGREGATION   QueryInterface   ÿÿÿÿ   A   mailNewsCommandLineHandlerModule                          ¹                                              c  h                - 