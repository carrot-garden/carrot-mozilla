çżsš                i  -   š   :   D                         ,            resource://gre/components/newMailNotificationService.js     9         	                                    8;   5       Q;   5      Q;   5      Q;   ¸   
=   : Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
=   : Q;   5      Q=      Q=      Q;   Y   =   ]   ;   ¸   
=   : ]   =   ]   ;   ¸   
Z  ;   5   `   ;   5   `  ;   5   `  : ]    ;   ¸   !
;   : ]   ">]   #>]   $@]   %@]   &   a   '   ]   (   ]   )   ]   *   ]   +   ]   ,   ]   -   	]   .   
]   /   ]   0   ]   1   ]   2   a   3   ]   4   ]   5   ]   6   ]   76   Q;   ¸   9
Z  ;   `   :    8QĘ"	-	 yĐĐĐŐ2Ő3Ő1Ő1Ő3ĐËË")-:<ĘĘŃČĘĐ-ÎÎÎ˙˙˙ĂČŃČCHĘLĘmĘ  Ę  Ę  ÄĘ  ×Ę Ę Ę &Ę .Ę =Ę FĘ LĘ YĘ dĘ pĐ wĐ0É˙˙˙ßÉ˙˙˙ý    Cc   Components   classes   Ci   interfaces   Cu   utils   importI   resource:///modules/gloda/log4moz.jsK   resource:///modules/iteratorUtils.jsmG   resource:///modules/mailServices.jsG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm	   NMNS=   mozINewMailNotificationService!   countInboxesPrefE   mail.notification.count.inbox_only)   countNewMessagesPrefG   mail.biff.use_new_count_in_mac_dock5   NewMailNotificationService   prototypeU   Maintain counts of new and unread messages!   classDescription   IDM   {740880E6-E299-4165-B82F-DF1DCAB3AE22}   classIDS   @mozilla.org/newMailNotificationService;1   contractID   XPCOMUtils   generateQI   nsIObserver#   nsIFolderListener   QueryInterface1   generateSingletonFactory   _xpcom_factory   _mUnreadCount   _mNewCount   _listeners	   _log   countNew   observe!   _initUnreadCount   _countUnread%   confirmShouldCount1   OnItemIntPropertyChanged#   _biffStateChanged!   _newMailReceived%   _updateUnreadCount   OnItemAdded3   OnItemPropertyFlagChanged   OnItemRemoved   messageCount   addListener   removeListener#   _listenersForFlag!   _notifyListeners   NSGetFactory)   generateNSGetFactory   ˙˙˙˙      getBoolPref                8       š                                        	   pref   defaultValue      "             ;    5   ¸   
T  :       Qv   QT ČČ    ÔÉ&ĚÍ    Services   prefs   getBoolPref    ˙˙˙˙          e                         ˙˙˙˙˙˙˙˙/             ˙˙˙˙   5   NewMailNotificationService                          š      (                                      ´  ¸  -       
      A>6    QA>6   QAZ   6   QAA6   QA;   ¸   
=   ;   5   5   	;   5   5   	;   5   5   	: 6   Q;   
5   ¸   
A=   B: QČČËČ3ŇĎĎĎ3É9Ü;    _mUnreadCount   _mNewCount   _listeners   wrappedJSObject	   _log   Log4Moz'   getConfiguredLogger#   mail.notification   Level	   Warn   Services   obs   addObserver#   mail-startup-done   ˙˙˙˙   [   NewMailNotificationService.prototype.countNewÁ                          š      	                                      á
    H             ;    â    ;   B: Đ)    getBoolPref)   countNewMessagesPref   ˙˙˙˙      NMNS_Observe                Ą      š      Z                        .             aSubject   aTopic   aData   A  \  L       
      A5    ¸   
=   T : QT =      Ö;   5   ¸   
A=   : Q   3   Qv   QA5    ¸   
=   V   : QČ    ;   5   ¸   	
A=   
B: Q;   5   ¸   
A;   5   5   ;   5   5   ;   5   5   ;   5   5   : QA¸   
:  Q   xT =   
   j;   5   ¸   
A: Q;   5   ¸   
A=   
: Q   3   Qv   QA5    ¸   
=   V   : QČ       3   Qv   QA5    ¸   
=   V   : QČ    NÚP SÉ  Ń
ŕUĚ
âXÜáĐĐĐY]Ń_É2
Ö
ŕdĚ
çhĚâ 	   _log	   info   NMNS_Observe: #   mail-startup-done   Services   obs   removeObserver   error   NMNS_Observe: unable to deregister mail-startup-done listener:    addObserver+   profile-before-change   MailServices   mailSession#   AddFolderListener   Ci#   nsIFolderListener%   intPropertyChanged   added   removed'   propertyFlagChanged!   _initUnreadCount)   RemoveFolderListeneru   NMNS_Observe: unable to deregister listeners at shutdown: +   NMNS_Observe failed:     ˙˙˙˙          e        ˙˙˙˙          e        ˙˙˙˙          error            W       	  6        *           K   '   ˙˙˙˙   @  '   ˙˙˙˙   s  '   ˙˙˙˙   ˙˙˙˙   )   NMNS_initUnreadCount                j      š      \                                      total   allServers  Ô  m             >   Q;    5   5     Q>  Q    Űm  Q  Q  QV  ¸   
V  ;   5   :   QA5   ¸   
=   V  5   	=   
V  5   : QV  5     QV  =   D   QV  =      Č   6V  5     QV     V   A¸   
V  : W   QČV  #?W  QQăV  V  Ů   ˙˙˙ČAV   6   QA5       EA5   ¸   
=   V   =   : QA¸   
;   5   =   V   : QÔ&  Ű  Í  ë#Ó
ŮČđt
ÎÚAx
ÎĐ	{p+Î˙˙˙éÖ}Ëáß;    MailServices   accounts   allServers   queryElementAt   Ci)   nsIMsgIncomingServer	   _log   debug1   NMNS_initUnread: server    prettyName    type 	   type   rss	   nntp   rootFolder   _countUnread   length   _mUnreadCount   countNew	   infoK   NMNS_initUnread notifying listeners: -    total unread messages!   _notifyListeners	   NMNS   count   onCountChanged    ˙˙˙˙         i                     currentServer    	   type       rootFolder        &   ë          ÷   ˙˙˙˙   *   Ä           ¸            ˙˙˙˙   !   NMNS_countUnread              b      š      R                                     folder   unreadCount   allFolders :                 A5    ¸   
=   T  5   : Q>   QA¸   
T  :    h  QT  ¸   
B:   QA5    ¸   
=   T  5   =   V  =   	: QV  >   V   V  W   QČT  5   
  Q;   â   V  ;   5   : K  Q   mW  A¸   
V  :    j  QV  ¸   
B:   QA5    ¸   
=   V  5   =   V  =   	: QV  >   V   V  W   QČăQLM˙˙˙}QNČV   ßËË
ËČđČxÍŘĚ0  ĘĚ
ËĚČń
ČxÔ 	   _log   traceA   NMNS_countUnread: parent folder    URI%   confirmShouldCount   getNumUnread   debug3   NMNS_countUnread: folder    ,     unread   descendants   fixIterator   Ci   nsIMsgFolder    ˙˙˙˙         count        ˙˙˙˙         folder                    count       Ń          9   b   ˙˙˙˙   Ç      ˙˙˙˙   ë   d         ˙˙˙˙   /   NMNS_confirmShouldCount              !      š      n                        4             aFolder   shouldCount   srv Ď  Ř               ;    5   ¸   
;   5   :    QV   C6   QA5   ¸   
=   T  5   	=   
T  5   : Q@  QT  5   ;   5   5       V   B6   Q  %T  5   W  E   QV  5   =      V   B6   Q   ďT  5   ;   5   5   E   QT  5   ;   5   5       V   B6   Q   ŁT  5   ;   5   5      V   B6   Q   v  Q;   5   ¸   
;   :   QV  E   QT  5   ;   5   5       V   B6   QČ     Qv  QČ    A5   ¸   
=   V   5   : Q;   5   ¸   
V   =   T  5   	: QA5   ¸   
=   V   5   : QV   5   ŰČËîŮĐáĐŢŮĐŘĐY
ÖČĘŮŃÓŕćŕĘ    Cc=   @mozilla.org/supports-PRBool;1   createInstance   Ci#   nsISupportsPRBool	   data	   _log   traceA   NMNS_confirmShouldCount: folder    URI    flags    flags!   nsMsgFolderFlags	   Mail   server	   type   rss   SpecialUse   Inbox   Virtual   Services   prefs   getBoolPref!   countInboxesPrefU   NMNS_confirmShouldCount: before observers    obs   notifyObservers=   before-count-unread-for-folderS   NMNS_confirmShouldCount: after observers     ˙˙˙˙      !   onlyCountInboxes        ˙˙˙˙         error         @  ]       A  W   ˙˙˙˙        ˙˙˙˙   ˙˙˙˙   ;   NMNS_OnItemIntPropertyChanged                ő       š      4                                     folder   property   oldValue   newValue      Ĺ   Ä             T =       A5   ¸   
=   T  5   =   T =   T =   T : QT =      A¸   
T  T T : Q   PT =      A¸   	
T  T T : Q   (T =   
   A¸   
T  T T : Q   3   Qv   QA5   ¸   
=   V   : QČ      ÁÉýÉÚÉÚÉÚĚâ    FolderSize	   _log   traceM   NMNS_OnItemIntPropertyChanged: folder    URI       BiffState#   _biffStateChanged'   TotalUnreadMessages%   _updateUnreadCount   NewMailReceived!   _newMailReceived   errorS   NMNS_OnItemIntPropertyChanged: exception     ˙˙˙˙          error            Ĺ       Ç   '   ˙˙˙˙   ˙˙˙˙   +   NMNS_biffStateChanged                Đ      š                              =             folder   oldValue   newValue   ű   §(  ×             T ;    5   5     K  Q  Q   QT  5   E   QT  5   5       .A5   ¸   
=   T  5   =   	: QČT  5   
   QV   Ů     QA5   ¸   
=   T  5   =   V  =   : Q>  QA¸   
T  :    b  QT  ¸   
B:   QA5   ¸   
=   T  5   =   V  : QV  >   V  V  W  QČ;   â   V   ;    5   : K  Q   }mW  A¸   
V  :    d  QV  ¸   
B:   QA5   ¸   
=   V  5   =   V  : QV  >   V  V  W  QČăQLM˙˙˙QNČV  >   oA5   V  6   QA5   ¸   
=   T  5   =   A5   : QA5      &A¸   
;   5   =   A5   : QČ   vT ;    5   5      ^A>6   QA5   ¸   
=   T  5   =   : QA5      &A¸   
;   5   =   A5   : QÓ F×ÎÎĺ  á
Í
Îđ
Ë
ËËČę
ČxŘĚ0  ĘĚËĚČ
ëČxÔËxě
çÓČĺáE    Ci   nsIMsgFolder-   nsMsgBiffState_NewMail   server   performingBiff	   _log   debug=   NMNS_biffStateChanged: folder    URIS    notified, but server not performing biff   descendants   length   trace    New mail,     subfolders%   confirmShouldCount#   getNumNewMessages    new messages:    fixIterator   _mNewCount/   NMNS_biffStateChanged: !    New mail count    countNew!   _notifyListeners	   NMNS   count   onCountChanged+   nsMsgBiffState_NoMail#    New mail count 0    ˙˙˙˙          allFolders       numFolders       newCount                     folderNew                     folder                    folderNew       ^            >  ˙˙˙˙˙˙˙˙s             Ů   \          T            x  ^         ˙˙˙˙   )   NMNS_newMailReceived               Ç       š      6                                        folder   oldValue   newValue   oldTotal   Ű(  ý*        	      A¸    
T  :     T  D   QT >   
>U QA5      QA5   T T 6   QA5   ¸   
=   T  5   =   T =   T =   V   =   	A5   : QA5   
   &A¸   
;   5   =   A5   : QËĎËÎxŰÔŘ áE %   confirmShouldCount   _mNewCount	   _log   debug-   NMNS_newMailReceived:    URI    Old folder     New folder     Old total     New total    countNew!   _notifyListeners	   NMNS   count   onCountChanged   ˙˙˙˙   -   NMNS_updateUnreadCount                        š   
   +                                        folder   oldValue   newValue   5+  -              A¸    
T  :     T >   
>U QT >   
>U QA5   T T 6   QA5       CA5   ¸   
=   A5   : QA¸   
;   5   =   	A5   : QËÎxÝáH %   confirmShouldCount   _mUnreadCount   countNew	   _log	   infos   NMNS_updateUnreadCount notifying listeners: unread count !   _notifyListeners	   NMNS   count   onCountChanged   ˙˙˙˙   !   NMNS_OnItemAdded                 l       š   
                                           parentItem	   item  =-  ;.  &            T ;    5   r   ]A¸   
T 5   :    EA5   ¸   
=   T 5   ¸   
T : =   T 5   5   	: QÎĐ
ä,Ř˙˙˙Ôs    Ci   nsIMsgDBHdr%   confirmShouldCount   folder	   _log   trace/   NMNS_OnItemAdded: item    getUriForMsg    added to    folderURL   ˙˙˙˙   =   NMNS_OnItemPropertyFlagChanged                 Ç       š      .                                     	   item   property   oldFlag   newFlag    .  :1  .            T  ;    5   r   ¸T ;    5   5   E   QT ;    5   5       <A5   ¸   
=   T  5   ¸   
T  : =   	: Q   OT ;    5   5      7A5   ¸   
=   T  5   ¸   
T  : =   
: QÎŮÔ7ä:Ę˙˙˙ĆÉÓä:Ę˙˙˙Ćm    Ci   nsIMsgDBHdr#   nsMsgMessageFlags   New	   _log   traceK   NMNS_OnItemPropertyFlagChanged: item    folder   getUriForMsg    marked read    marked unread   ˙˙˙˙   %   NMNS_OnItemRemoved                 c       š   
                                           parentItem	   item  i1  H2  =            T ;    5   rE   QT 5       EA5   ¸   
=   T 5   ¸   
T : =   T 5   5   	: QÔ*Éä5Ř˙˙˙Ë      Ci   nsIMsgDBHdr   isRead	   _log   traceA   NMNS_OnItemRemoved: unread item    folder   getUriForMsg    removed from    folderURL   ˙˙˙˙   c   NewMailNotificationService.prototype.messageCountÁ                          š                                            2  ë2  F            A5       A5   A5       countNew   _mNewCount   _mUnreadCount   ˙˙˙˙   !   NMNS_addListener                ž       š   
   ?                                     aListener   flags  3  ľ4  L      	      A5    ¸   
=   T  5   =   T : Q>   Q    Om  QA5   V   7  QV  5   T  H   V  T 6   QČČČV   #?W   QQăV   A5   Ů   ˙˙˙¤ČA5   ¸   	
Y   T  ]   T ]   : Qé&OAa(
ĐÍÍ N0Î˙˙˙äŘ VŇČČ˙˙˙Ú5 	   _log   trace7   NMNS_addListener: listener    toSource    flags    _listeners   obj   flags   length	   push    ˙˙˙˙          i                     l        5   a       *   m   ˙˙˙˙   7   :           n         ˙˙˙˙o            ˙˙˙˙   '   NMNS_removeListener                       š      ,                                     aListener ć4  6  Y      	      A5    ¸   
=   T  5   : Q>   Q    Xm  QA5   V   7  QV  5   T  H    A5   ¸   
V   ?: QČČČV   #?W   QQăV   A5   Ů   ˙˙˙Čß&XJj(
ĐÍÖ [0Î˙˙˙äŘ" 	   _log   trace=   NMNS_removeListener: listener    toSource   _listeners   obj   splice   length    ˙˙˙˙          i                     l        +   j           v   ˙˙˙˙   -   C           m         ˙˙˙˙n            ˙˙˙˙   +   NMNS_listenersForFlag              Ć       š      ;                                  	   flag	   list 76  7  d            A5    ¸   
=   T  =   A5   Ů   =   A5   ¸   
:  : QZ      Q>  Q    Um  QA5   V  7  QV  5   T     V   ¸   	
V  5   
: QČV  #?W  QQăV  A5   Ů   ˙˙˙ČV   ű^˙˙˙˘É&UGg(
ĐÍŮ g0Î˙˙˙äŘ m 	   _log   trace-   NMNS_listenersForFlag     length    _listeners   length       toSource   flags	   push   obj    ˙˙˙˙         i                     l        X   g       M   s   ˙˙˙˙   Z   @          ˙˙˙˙   )   NMNS_notifyListeners                     š      8                                  	   flag	   func   value	   list   ˇ7  Ť8  p            A¸    
T  :    Q>  Q    fmA5   ¸   
=   T  =   T =   T : QV   V  7T 7¸   
V   V  7T l QV  #?W  QQăV  V   Ů   ˙˙˙ČËČ&fXv rîä r%Î t rÖ) #   _listenersForFlag	   _log   debug+   NMNS_notifyListeners     	   call   length    ˙˙˙˙         i           v             ˙˙˙˙