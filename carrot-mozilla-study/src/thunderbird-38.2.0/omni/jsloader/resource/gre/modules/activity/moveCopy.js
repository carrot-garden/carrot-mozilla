ç¿s¹                  -   ¹   *   î                          %            resource:///modules/activity/moveCopy.js     À+                                            f        Q;   5      Q;   5      Q;   5      Q;   ¸   	
=   
=   =   :    Q;   ¸   	
=   =   =   :    Q;   ¸   	
=   =   =   :    Q;   5      Q;   5   ¸   
=   : Q;   5   ¸   
=   : Q;   5   ¸   
=   : Q;   5   ¸   
=   : Q;   5   ¸   
=   : Qn   Y   Y   ]   Y   ]      a      a      a       ]   !   ]   "   ]   #   ]   $   ]   %   	]   &   
]   '   ]   (   ]   )   ]   o   QËÐÐÐÑÊÉÿÿÿýÑÊÉÿÿÿýÑÊÉÿÿÿýÐÚ?Ú?ÚAÚAÚ@ÊÊ!Ê&Ê,Ê2Ê;Ê>ÊoÊ  ¸ÊÊ  âÊ Ê -ÊÐ !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cr   results   nsActProcess   Constructor?   @mozilla.org/activity-process;1%   nsIActivityProcess	   init   nsActEvent;   @mozilla.org/activity-event;1!   nsIActivityEvent   nsActWarning?   @mozilla.org/activity-warning;1%   nsIActivityWarning!   nsMsgFolderFlags   utils   importG   resource://gre/modules/Services.jsmG   resource:///modules/mailServices.jsK   resource://gre/modules/XPCOMUtils.jsmK   resource://gre/modules/PluralForm.jsmI   resource:///modules/gloda/log4moz.js   moveCopyModule   lastMessage   lastFolder   log   activityMgr   bundle   getString   msgAdded   msgsDeleted+   msgsMoveCopyCompleted   folderAdded   folderDeleted/   folderMoveCopyCompleted   folderRenamed   itemEvent                     moveCopyModule                  ÿÿÿÿ   %   moveCopyModule.logÁ                   #       ¹                                              è  !             A%    QA;   ¸   
=   : 6    ÒÉ.    log   Log4Moz'   getConfiguredLogger   moveCopyModule   ÿÿÿÿ   5   moveCopyModule.activityMgrÁ                   -       ¹                                            ü  ©  &             A%    QA;   5   ¸   
;   5   : 6    ÒÊ(ÉC    activityMgr   Cc?   @mozilla.org/activity-manager;1   getService   Ci%   nsIActivityManager   ÿÿÿÿ   +   moveCopyModule.bundleÁ                   (       ¹                                            ¸  H  ,             A%    QA;   5   ¸   
=   : 6    Ò.ÉE    bundle   Services   strings   createBundle[   chrome://messenger/locale/activity.properties   ÿÿÿÿ   1   moveCopyModule.getStringÁ                M       ¹                                           stringName `  '  2             A5    ¸   
T  :    7   Qv   QA5   ¸   
=   T  : QV   pÈ    ÐÉÌÚÌ    bundle#   GetStringFromName   log   errorK   error trying to get a string called:     ÿÿÿÿ          e                      +   ÿÿÿÿ   ÿÿÿÿ   /   moveCopyModule.msgAddedÁ                        ¹                                             	   aMsg ?  K  ;                  ÿÿÿÿ   5   moveCopyModule.msgsDeletedÁ              ª      ¹   "   ¬                        D             aMsgList   count   displayCount   folder   activities   displayText   statusText   event f  Ø  >             A5    ¸   
=   : QT  Ù      QV   >   V     QT  ¸   
>;   5   5   : 5     QA5   	¸   

Y   :   QV  Ù   >E   YQV  V  Ù   ?75   A5   5   E   2QA5   5   =   E   QA5   5   V  5      6V  A5   5   W  QA5   	¸   
A5   5   : QAY   6   Q;   ¸   
V  A¸   
=   : :   QV  ¸   
=   V  : W  QA5   V  6   QV  ¸   
=   V  5   : W  QA5   V  5   6   QV  5   5     Q;   V  V  V  ;   ¸   
:  ;   ¸   
:  R   QV  =   6   QA5   V  5   6   Q>  Q    Xm  QT  ¸   
V  ;   5   5   :   QV  ¸   
V  5    : QÈV  #?W  QQãV  V   ÿÿÿ¢ÈA5   A5   	¸   !
V  : 6   QÖAÍEÉGÚ	ÍIÒÈÑç×ÕÏxÜSÌÝ+ÿÿÿãÈÔÈÐÙÈÕZÓ]ÊÌÌ]ÈcÏÕf&XJc
Ý	ÈÙfÎgfÑl×É$    log	   info   in msgsDeleted   length   queryElementAt   Components   interfaces   nsIMsgDBHdr   folder   activityMgr   getActivities   id   lastMessage	   type   deleteMail   prettiestName   count   removeActivity   PluralForm   get   getString!   deletedMessages2   replace   #1   #2   server   prettyName   nsActEvent	   Date   now   iconClass   addSubject   messageId   addActivity    ÿÿÿÿ         i                     msgHdr        %  c         o   ÿÿÿÿ   '  C          ÿÿÿÿ   I   moveCopyModule.msgsMoveCopyCompletedÁ   	             T      ¹   ,   $                       c             aMove   aSrcMsgList   aDestFolder   ý  o  o               Q  Q  Q  Q  Q  Q   QA5    ¸   
=   : QT Ù      QV   >   	ÈT ¸   
>;   5   5   : 5     QA5    ¸   
=   	: QV     QA5   
¸   
Y   :   QV  Ù   >E   QV  V  Ù   ?75   A5   5   E   ^QA5   5   T     =      
=   E   5QA5   5   V  5   E   QA5   5   T 5      6V  A5   5   W  QA5   
¸   
A5   5   : Q=     QV  5   T 5      jA¸   
=   : W  QV  ¸   
=   V  5   5   : W  QV  ¸   
=   T 5   5   : W  Q   V  5   5   W  QAY   6   Q  QT     2;   ¸   
V  A¸   
=    : : W  Q   -;   ¸   
V  A¸   
=   !: : W  QV  ¸   
=   V  : W  QA5   V  6   QV  ¸   
=   V  5   : W  QA5   V  5   6   QV  ¸   
=   "T 5   : W  QA5   T 5   6   Q;   #V  V  V  ;   $¸   %
:  ;   $¸   %
:  R   QV  T     =      
=   6   &QA5   V  5   &6   Q>  Q    Xm  QT ¸   
V  ;   5   5   :   QV  ¸   '
V  5   (: QÈV  #?W  QQãV  V   ÿÿÿ¢ÈA5   A5   
¸   )
V  : 6   QÈ   3   Qv   QA5    ¸   *
=   +V   : QÈ      ëÖs
Íx
Ú	ÍÖ{
É}
ÒÈÑçÎ
ÛÛÔÏxÜ
ÊÒeÍÈÞÈÝÍÓÌ
-ÐÍ%  ÍÐÍ%  ÈÔÈÐÙÈÕØÈÔ
ÊÌ!Ì!  ¥È  ª
ÚÕ&XJcÝ	ÈÙ  ­!Î  ®  ­Ñ  ²×ÏÌâ    log	   info1   in msgsMoveCopyCompleted   length   queryElementAt   Components   interfaces   nsIMsgDBHdr   folder   got folder   activityMgr   getActivities   id   lastMessage	   type   moveMail   copyMail   sourceFolder   prettiestName   destFolder   count   removeActivity      server   getString%   fromServerToServer   replace   #1   prettyName   #2   PluralForm   get   movedMessages   copiedMessages   #3   nsActEvent	   Date   now   iconClass   addSubject   messageId   addActivity   error   Exception:     ÿÿÿÿ          count       folder       displayCount       activities       statusText       displayText       event                     i                    msgHdr        ÿÿÿÿ          e            $        c            ÿÿÿÿÿÿÿÿ\               o            C         &  '   ÿÿÿÿ   ÿÿÿÿ   5   moveCopyModule.folderAddedÁ                        ¹                                                aFolder     ¸              "    ÿÿÿÿ   9   moveCopyModule.folderDeletedÁ              q      ¹      q                        $             aFolder   server   displayText   statusText   event µ  I  »                QT  5    W   Q;   5   ¸   
V   5   V   5   V   5   : Q     Qv  QÈÈ      QV   5     QT  ¸   
;   	5   
B:    A¸   
=   : W  Q   1A¸   
=   : ¸   
=   T  5   : W  Q;   V  V   V  ;   ¸   
:  ;   ¸   
:  R   QV  ¸   
T  : QV  =   6   QAY   6   QA5   T  5   6   QA5   A5   ¸   
V  : 6   Q>ÍõÌËÎÕÍÍÍßÊÌÌ  ÒÈ  ØÒÏÌÔ×É$    server   MailServices   accounts   FindServer   username   hostName	   type   prettyName   isSpecialFolder!   nsMsgFolderFlags   Trash   getString   emptiedTrash   deletedFolder   replace   #1   prettiestName   nsActEvent	   Date   now   addSubject   iconClass   deleteMail   lastFolder   URI   event   activityMgr   addActivity    ÿÿÿÿ         ex            B       J      ÿÿÿÿÿÿÿÿX             ÿÿÿÿ   M   moveCopyModule.folderMoveCopyCompletedÁ               Ä      ¹                                 +             aMove   aSrcFolder   aDestFolder   displayText   statusText   event   o  7$  â             A5    ¸   
=   T  : Q   QT     A¸   
=   : W   Q   A¸   
=   : W   QV   ¸   
=   T 5   : W   QV   ¸   
=   	T 5   : W   Q=   
  QT 5   T 5      iA¸   
=   : W  QV  ¸   
=   T 5   5   : W  QV  ¸   
=   	T 5   5   : W  Q   T 5   5   W  Q;   V   T 5   V  ;   ¸   
:  ;   ¸   
:  R   QV  ¸   
T : QV  ¸   
T : QV  T     =      
=   6   QA5   ¸   
V  : QÚÍÍÍÈØÈØÈÊÑdÍÈÝÈÝÍÒÊÈÌÌ  úÈ  ÒÒ
ÚÕ$    log	   infoI   in folderMoveCopyCompleted, aMove =    getString   movedFolder   copiedFolder   replace   #1   prettiestName   #2      server%   fromServerToServer   prettyName   nsActEvent	   Date   now   addSubject   iconClass   moveMail   copyMail   activityMgr   addActivity   ÿÿÿÿ   9   moveCopyModule.folderRenamedÁ                     ¹      }                           0             aOrigFolder   aNewFolder   displayText   statusText   event  S$  ½)              A5    ¸   
=   T  5   =   T 5   : Q   QT 5   5     QT ¸   
;   5   	C:    ?A¸   

=   : W   QV   ¸   
=   T  5   : W   Q   ZA¸   

=   : W   QV   ¸   
=   T  5   : W   QV   ¸   
=   T 5   : W   QA5   5   T  5      !A5   ¸   
A5   5   : Q;   V   T  5   V  ;   ¸   
:  ;   ¸   
:  R   QV  ¸   
T  : QV  ¸   
T : QA5   ¸   
V  : QáÉ ÒÕ:ÍÈØÍÍÈØÈØÈÔÜÊÈÌÌ !È 'ÒÒÕ$    log	   infoA   in folderRenamed, aOrigFolder =    prettiestName   , aNewFolder =    server   prettyName   isSpecialFolder!   nsMsgFolderFlags   Trash   getString%   movedFolderToTrash   replace   #1   renamedFolder   #2   lastFolder   URI   activityMgr   removeActivity   event   nsActEvent	   Date   now   addSubject   addActivity   ÿÿÿÿ   1   moveCopyModule.itemEventÁ                        ¹                                                aItem   aEvent   aData   Õ)  ñ)  -             -    ÿÿÿÿ   '   moveCopyModule.initÁ                   f       ¹                                            *  ½+  0            ;    5   ¸   
A;    5   5   ;    5   5   ;    5   5   ;    5   5   ;    5   5   : QÒÏÐÐÐÐ 2 7A    MailServices   mfn   addListener   msgsDeleted+   msgsMoveCopyCompleted   folderDeleted/   folderMoveCopyCompleted   folderRenamed