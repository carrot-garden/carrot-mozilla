çżsš                d  Z   š   [   Ź                         (            resource://gre/components/imCore.js     1         	                                               !   #       F      Y;   5       Q5      Q5      Q5      QQ;   ¸   	
=   
: Q;   ¸   	
=   : Q;   ¸   
A=   =   =   : Q=      Q=      Q=      Q=      Q=      Q=      Q=      Q=       Q=   "   !Q=   $   #Q;   %Y   ;   'â   '=   (=   ): Â   ]   *B]   +   ]   ,   ]   -   ]   .;   5   /5   0]   1   b   2>]   3   a   4   b   4B]   5=   6]   7;   5   /5   0]   8   ]   9=   6]   :   	a   ;;   5   /5   0]   <   
a   =   ]   >   ]   ?   ]   @   ]   A   a   B   b   B   ]   C   ]   D   ]   E6   &Q;   FQ;   GY   @]   HB]   I   a   J   ]   K   ]   .   ]   L   ]   M   ]   N;   ¸   O
Z  ;   5   P`   : ]   Q=   R]   S;   ¸   T
=   U: ]   V=   W]   X6   &Q;   ¸   Z
Z  ;   G`   :    YQĘ	  ńĘ	 söBŐ0Ő2	Ň	9ËËËËËËËËË Ë!&ĘÔ*Ę2Ę@ĘLĘjÔĘvĘĘ|ĘÔĘ  ĘĘÔĘĘ  ŚĘĘ  ÉĘ  ŮĘĘ  äĘĘĐ/ĘĘĘ ĘĘ /Ę HĘ mĐ'Î˙˙˙éČĘŃ	ČĐĐ0É˙˙˙ßÉ˙˙˙ý    Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importE   resource:///modules/imServices.jsmI   resource:///modules/imXPCOMUtils.jsm   XPCOMUtils/   defineLazyServiceGetter   categoryManager=   @mozilla.org/categorymanager;1%   nsICategoryManager/   kQuitApplicationGranted1   quit-application-granted/   kProtocolPluginCategory%   im-protocol-plugin   kPrefReportIdle7   messenger.status.reportIdle+   kPrefUserIconFilenameC   messenger.status.userIconFileName)   kPrefUserDisplaynameA   messenger.status.userDisplayName'   kPrefTimeBeforeIdle?   messenger.status.timeBeforeIdle#   kPrefAwayWhenIdle;   messenger.status.awayWhenIdle'   kPrefDefaultMessageO   messenger.status.defaultIdleAwayMessageA   NS_IOSERVICE_GOING_OFFLINE_TOPICG   network:offline-about-to-go-offlineC   NS_IOSERVICE_OFFLINE_STATUS_TOPIC=   network:offline-status-changed   UserStatus   prototype   ClassInfo#   imIUserStatusInfo!   User status info   unInit%   _observingIdleness!   _addIdleObserver'   _removeIdleObserver   observe   imIStatusInfo!   STATUS_AVAILABLE%   _offlineStatusType   offline   _idleTime   idleTime   _idle      _idleStatusText   _idleStatusType   _checkIdle   _statusText   statusText   _statusType   statusType   setStatus   _getProfileDir   setUserIcon   getUserIcon   displayName   addObserver   removeObserver!   _notifyObservers   gCoreService   CoreService!   globalUserStatus   _initialized   initialized	   init	   quit   getProtocols   getProtocolById   generateQI   imICoreService   QueryInterface	   Core!   classDescription   IDM   {073f5953-853c-4a38-bd81-255510c31c2e}   classIDA   @mozilla.org/chat/core-service;1   contractID   NSGetFactory)   generateNSGetFactory   ˙˙˙˙      UserStatus                   ´       š      &                                      î                 AZ   6    Q;   5   ¸   
;   :    A¸   
:  Q;   5   ¸   
;   AB: Q;   5   5      A;   
5   5   6   	Q;   5   ¸   
A;   B: Q;   5   ¸   
A;   B: QËÖĚÜ"ĎÖÜÜI    _observers   Services   prefs   getBoolPref   kPrefReportIdle!   _addIdleObserver   addObserver   io   offline%   _offlineStatusType   Ci   imIStatusInfo   STATUS_OFFLINE   obsA   NS_IOSERVICE_GOING_OFFLINE_TOPICC   NS_IOSERVICE_OFFLINE_STATUS_TOPIC   ˙˙˙˙   7   UserStatus.prototype.unInitÁ                   t       š   
                                         ů  +  *             AZ   6    Q;   5   ¸   
;   A: QA5      A¸   
:  Q;   5   ¸   
A;   : Q;   5   ¸   
A;   	: QËŰĚŰŰE    _observers   Services   prefs   removeObserver   kPrefReportIdle%   _observingIdleness'   _removeIdleObserver   obsA   NS_IOSERVICE_GOING_OFFLINE_TOPICC   NS_IOSERVICE_OFFLINE_STATUS_TOPIC   ˙˙˙˙   K   UserStatus.prototype._addIdleObserverÁ                   ž       š      ,                                      f  `
  3             AC6    QA;   5   ¸   
;   5   : 6   Q;   5   ¸   	
A=   
B: QA;   5   ¸   
;   : 6   QA5   >   A>6   Q;   5   ¸   	
;   AB: QA5      A5   ¸   
AA5   : QČŰÉÜ9×ÉČČÜŘ> %   _observingIdleness   _idleService   CcC   @mozilla.org/widget/idleservice;1   getService   Ci   nsIIdleService   Services   obs   addObserver   im-sent   _timeBeforeIdle   prefs   getIntPref'   kPrefTimeBeforeIdle   addIdleObserver   ˙˙˙˙   Q   UserStatus.prototype._removeIdleObserverÁ                   o       š   
                                         
  Ä  @             A5       A5   ¸   
AA5    : Q;   5   ¸   
;   A: QA%    Q;   5   ¸   
A=   : QA%   QA%   	QŘDŰGŰ    _timeBeforeIdle   _idleService%   removeIdleObserver   Services   prefs   removeObserver'   kPrefTimeBeforeIdle   obs   im-sent%   _observingIdleness   ˙˙˙˙   9   UserStatus.prototype.observeÁ                      š      g                         #             aSubject   aTopic   aData   Ú  5  L             T =      /T ;      x   Q;   5   ¸   
;   :    QV   E   QA5       A¸   
:  Q   'V    E   QA5      A¸   
:  QČ   ŠT ;         Q;   5   ¸   	
;   :    QV   A5   
   VA5   
   A5   ¸   
AA5   
: QAV   6   
QA5   
   A5   ¸   
AA5   
: QČ   ;   5   p   VT ;      AC6   Q   ;T ;   E   QT =      AB6   Q   A¸   
:  QÉ *ÉsËÖČĘ
ŃŃŇUÉ  ËÖČËŘ
ËŢ`ĐbÉÍŘÍgĚ    nsPref:changed   kPrefReportIdle   Services   prefs   getBoolPref%   _observingIdleness!   _addIdleObserver'   _removeIdleObserver'   kPrefTimeBeforeIdle   getIntPref   _timeBeforeIdle   _idleService%   removeIdleObserver   addIdleObserver   Cr'   NS_ERROR_UNEXPECTEDA   NS_IOSERVICE_GOING_OFFLINE_TOPIC   offlineC   NS_IOSERVICE_OFFLINE_STATUS_TOPIC   online   _checkIdle    ˙˙˙˙          reportIdle        ˙˙˙˙          timeBeforeIdle           m   ˙˙˙˙         ˙˙˙˙   ˙˙˙˙   9   UserStatus.prototype.offlineÁ               y       š                                 
             aOffline   statusType   statusText ~  ä  k       	      A5       QA5     QT      A;   5   5   6   Q   A%   QA5    V   D   QA5   V     A¸   
=   A5   : QËËŰqÜ×9    statusType   statusText%   _offlineStatusType   Ci   imIStatusInfo   STATUS_OFFLINE!   _notifyObservers   status-changed   ˙˙˙˙   ;   UserStatus.prototype.idleTimeá                          š                                                w             A5        _idleTime   ˙˙˙˙   ;   UserStatus.prototype.idleTimeÁ                        š                                              aIdleTime &    x             AT  6    QA¸   
=   T  : QĘÔ6    _idleTime!   _notifyObservers#   idle-time-changed   ˙˙˙˙   ?   UserStatus.prototype._checkIdleÁ                 =      š      V                                         idleTime	   idle   statusType   statusText  }               ;    ¸   
A5   5   Xč:    QA5   E   QV   A5     QV  A5      A5     QA5     QAV  6   QV     xAV   6   Q;   5   	¸   

;   :    JA;   5   5   6   QA;   5   	¸   
;   ;   5   : 5   6   Q   A>6   QA%   QA%   QA5   V  D   QA5   V     A¸   
=   A5   : QŰČÜËËËËsËÖ
ÖÖĘ  
ÓČÜ×9 	   Math   floor   _idleService   idleTime   _timeBeforeIdle   _idle   statusType   statusText   Services   prefs   getBoolPref#   kPrefAwayWhenIdle   _idleStatusType   Ci   imIStatusInfo   STATUS_AWAY   _idleStatusText   getComplexValue'   kPrefDefaultMessage-   nsIPrefLocalizedString	   data!   _notifyObservers   status-changed   ˙˙˙˙   ?   UserStatus.prototype.statusTextá                          š                                            Ł  Î               A5    D   QA5   Ó(    _statusText   _idleStatusText   ˙˙˙˙   ?   UserStatus.prototype.statusTypeá                   #       š                                              ^               ;    ¸   
A5   A5   A5   : âI 	   Math   min   _statusType   _idleStatusType%   _offlineStatusType   ˙˙˙˙   =   UserStatus.prototype.setStatusÁ                 Y       š                                              aStatus   aMessage  u  r               T  ;    5   5      AT  6   QT  ;    5   5      AT 6   QA¸   
=   T : QÓĘÓĘÔ2    Ci   imIStatusInfo   STATUS_UNKNOWN   _statusType   STATUS_OFFLINE   _statusText!   _notifyObservers   status-changed   ˙˙˙˙   G   UserStatus.prototype._getProfileDirá                   %       š                                              ž  Ś             ;    5   ¸   
=   ;   5   : ä(    Services   dirsvc   get   ProfD   Ci   nsIFile   ˙˙˙˙   A   UserStatus.prototype.setUserIconÁ              P      š      ^                       "             aIconFile   folder   newName   oldFileName ×  h  ¨             A¸    
:     Q=     QT     u  QT  5   ¸   
     =   :   Q=   ;   ¸   
;   ¸   	
:  Xč: V  W  QT  ¸   

V   V  : QČ;   5   ¸   
;   :   Q;   5   ¸   
;   V  : QV     ;V   ¸   
V  : QV   ¸   
:     V   ¸   
B: Q   ,  Qv  Q;   ¸   
V  : QČ    A¸   
=   V  : QČ	ČĘË
ŮČÝ#˙˙˙őÎ×ÖČŢ  ˝@ÓË
ŐĚŰŐ4    _getProfileDir      leafName   replace   $1   userIcon-	   Math   floor	   Date   now   copyTo   Services   prefs   getCharPref+   kPrefUserIconFilename   setCharPref   append   exists   remove   Cu   reportError!   _notifyObservers#   user-icon-changed    ˙˙˙˙         ext        ˙˙˙˙         e    %   .*(\.[a-z0-9]+)\.*        Ď   D       #   o   ˙˙˙˙         ˙˙˙˙   ˙˙˙˙   A   UserStatus.prototype.getUserIconÁ                        š      4                                         filename	   file  ţ  É             ;    5   ¸   
;   :    QV       @A¸   
:    QV  ¸   
V   : QV  ¸   
:      !;    5   ¸   
=   	: Q@;    5   
¸   
V  : ÖČČČÓËÚŐ    Services   prefs   getCharPref+   kPrefUserIconFilename   _getProfileDir   append   exists   console!   logStringMessageG   Invalid userIconFileName preference   io   newFileURI   ˙˙˙˙   A   UserStatus.prototype.displayNameá                   *       š                                                Ů             ;    5   ¸   
;   ;   5   : 5   ÖĘ  ŮÉM    Services   prefs   getComplexValue)   kPrefUserDisplayname   Ci#   nsISupportsString	   data   ˙˙˙˙   A   UserStatus.prototype.displayNameÁ               m       š      '                                        aDisplayName   str Ş  !  Ű             ;    5   ¸   
;   5   :    QV   T  6   Q;   5   ¸   
;   	;   5   V   : QA¸   

=   T  : QŃĘ  ÜČÍŕ  ßÔA    Cc=   @mozilla.org/supports-string;1   createInstance   Ci#   nsISupportsString	   data   Services   prefs   setComplexValue)   kPrefUserDisplayname!   _notifyObservers3   user-display-name-changed   ˙˙˙˙   A   UserStatus.prototype.addObserverÁ                 0       š                                              aObserver !  !  ä             A5    ¸   
T  : ×˙   A5    ¸   
T  : QĐÔ     _observers   indexOf	   push   ˙˙˙˙   G   UserStatus.prototype.removeObserverÁ                        š      
                                @      aObserverĄ!  ý!  č             AA5    ¸   
    : 6    QÓÉ4    _observers   filter   ˙˙˙˙   i   UserStatus.prototype.removeObserver/this._observers<á                        š                                               o ä!  ÷!  é             T     I9Ę    ˙˙˙˙   K   UserStatus.prototype._notifyObserversÁ                =       š                                           aTopic   aData  "  "  ë             A5    K   Q    mW   V   ¸   
AT  T : QăQLM˙˙˙ŕQNČĎ0%Ęă&    _observers   observe    ˙˙˙˙          observer          &       
   2   ˙˙˙˙   ˙˙˙˙      CoreService                          š                                             ˇ"  Ň"  ň             n    Ao    QĚ    gCoreService   ˙˙˙˙   C   CoreService.prototype.initializedá                          š                                            0#  D#  ÷             A5        _initialized   ˙˙˙˙   5   CoreService.prototype.initÁ                 9      š      Y                          *              accountsV#  '  ř             A5       ;   â   =   A: Q;   5   ¸   
A;   B: QAC6    Q;   5   ¸   
:  QAY   6   	QA;   R  6   
QA5   
¸   
Y       ]   : Q;   5      QV   ¸   
:  Q;   5   ¸   
:  Q;   5   ¸   
:  Q;   5   ¸   
A=   @: QV   5   ;   5   5      %;   5   5   ¸   
A   : QÔÜČŐĚÉŇĘ  ĎĎŐŐÜŮŕ	    _initialized   initLogModule	   core   Services   obs   addObserver/   kQuitApplicationGranted   cmd   initCommands   _protos!   globalUserStatus   UserStatus   observe   accounts   initAccounts   contacts   initContacts   conversations#   initConversations   notifyObservers   prpl-init   autoLoginStatus   Ci%   imIAccountsService#   AUTOLOGIN_ENABLED   logins+   initializationPromise	   then   ˙˙˙˙   I   CoreService.prototype.init/<.observeÁ                        š                                              aSubject   aTopic   aData   °$  %              ;    5   ¸   
T  T T : QŢ6    Services   obs   notifyObservers   ˙˙˙˙   9   CoreService.prototype.init/<Ĺ                          š                                            Č&  '              ;    5   ¸   
:  QŐ%    Services   accounts!   processAutoLogin   ˙˙˙˙   ;   CoreService.prototype.observeÁ                        š      
                                        aObject   aTopic   aData   &'  '              T ;       A¸   
:  QÉĚ /   kQuitApplicationGranted	   quit   ˙˙˙˙   5   CoreService.prototype.quitÁ                   É       š      3                                      '  )              A5        ;   5   p;   5   ¸   
A;   : Q;   5   ¸   
A=   @: Q;   5   	¸   

:  Q;   5   ¸   
:  Q;   5   ¸   
:  Q;   5   ¸   
:  QA5   ¸   
:  QA%   QA%   QA%    QËŰÜŐŐŐŐŃ    _initialized   Cr1   NS_ERROR_NOT_INITIALIZED   Services   obs   removeObserver/   kQuitApplicationGranted   notifyObservers   prpl-quit   conversations'   unInitConversations   accounts   unInitAccounts   contacts   unInitContacts   cmd   unInitCommands!   globalUserStatus   unInit   _protos   ˙˙˙˙   E   CoreService.prototype.getProtocolsÁ                N      š      _                        #              protocols   entries)  ´,  /            A5        ;   5   pZ      Q;   ¸   
;   :   Q   ńm  Q  Q  QV  ¸   
:  ¸   
;   5   	: 5   
  Q=   V  =     Q;   5   ¸   
V  : ;   5   5   E   Q;   5   ¸   
V  :    !A¸   
=   V  : QČ˙˙˙EA¸   
V  :   QV     V   ¸   
V  : QČăV  ¸   
:  ˙˙˙;   V   R ËÉŃ
Č( &Ó
Ëá
ŐŐ
ŮŐ
ÖA
ĚČÔ 5Ő EĘ"    _initialized   Cr1   NS_ERROR_NOT_INITIALIZED   categoryManager#   enumerateCategory/   kProtocolPluginCategory   getNext   QueryInterface   Ci%   nsISupportsCString	   data   chat.prpls.   .disable   Services   prefs   getPrefType   PREF_BOOL   getBoolPref   LOG!   Disabling prpl:    getProtocolById	   push   hasMoreElements%   nsSimpleEnumerator    ˙˙˙˙         id    	   pref       proto        >         B   č   ˙˙˙˙˙˙˙˙ô             ˙˙˙˙   K   CoreService.prototype.getProtocolByIdÁ              {      š      j                                     aPrplId   cid   proto Ň,  g0  H      
      A5        ;   5   pA5   ¸   
T  :    A5   T  7   Q;   ¸   
;   T  : W   Q     Qv  Q@ČČ    @  Q;   V   7¸   	
;   
5   : W  Q   d  Q  Qv  Q=   V   =   V    Q;   â   V  =   : Q;   ¸   
V  : QČ    V      @V  ¸   
T  : Q   @  Qv  Q;   ¸   
=   T  =   V  : Q@ČČ    A5   T  V  8QV  ËĐËÔÍĚË$ŰÍŇ
ÚŘŰ×ĚäËĎ    _initialized   Cr1   NS_ERROR_NOT_INITIALIZED   _protos   hasOwnProperty   categoryManager!   getCategoryEntry/   kProtocolPluginCategory   Cc   createInstance   Ci   prplIProtocolA   failed to create an instance of    : 	   dump   
   Cu   reportError	   init=   Could not initialize protocol     ˙˙˙˙         e        ˙˙˙˙         e       error        ˙˙˙˙         e                      (        A   !       c      ˙˙˙˙˙˙˙˙q             Ş   W   ˙˙˙˙   ,  4   ˙˙˙˙˙˙˙˙^        