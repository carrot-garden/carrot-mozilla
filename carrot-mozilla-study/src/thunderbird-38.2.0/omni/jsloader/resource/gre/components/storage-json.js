çżsš                     š   >   8                         *       0     resource://gre/components/storage-json.js     ĂM         	                    ;   5       Q5      Q5      Q5      QQ;   ¸   	
=   
: Q;   ¸   	
=   : Q;   ¸   	
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   =   : QA    0   QA5   Y   ;   ¸   
=   : ]   ;   ¸    
Z  ;   5   !`   : ]   "@]   #   a   $   ]   %B]   &   ]   '   ]   (   ]   )   ]   *   ]   +   ]   ,   	]   -   
]   .   ]   /   ]   0   ]   1   ]   2   ]   3   ]   4   a   5   a   6   ]   7   ]   8   ]   9   ]   :   ]   ;0   QA;   ¸   =
Z  ;   `   : 0   <QöDŐ3Ő1Ő-ŇLŇLŇKŇGŇ!7&Ě.(ËŃ
ČĐ(Î˙˙˙éČ,Ę9Ę?FĘ  Ę  Ę  ĹĘ  ÚĘ Ę )Ę FĘ Ę ŁĘ łĘ żĘ ŰĘ ôĘ 	Ę Ę Ę 3Ę VĘ cĘ yĐ Ń5É˙˙˙ßÉ<    Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm?   resource://gre/modules/Task.jsm   XPCOMUtils-   defineLazyModuleGetter   LoginHelperM   resource://gre/modules/LoginHelper.jsm   LoginImportM   resource://gre/modules/LoginImport.jsm   LoginStoreK   resource://gre/modules/LoginStore.jsm   OSC   resource://gre/modules/osfile.jsm/   defineLazyServiceGetter   gUUIDGenerator;   @mozilla.org/uuid-generator;1!   nsIUUIDGenerator1   LoginManagerStorage_json   prototype   IDM   {c00c432d-a0c9-46d7-bef6-9c45b4d07341}   classID   generateQI-   nsILoginManagerStorage   QueryInterface   __crypto   _crypto   log   _debug   initialize   terminate   addLogin   removeLogin   modifyLogin   getAllLogins   searchLogins   _searchLogins   removeAllLogins'   getAllDisabledHosts+   getLoginSavingEnabled+   setLoginSavingEnabled   findLogins   countLogins   uiBusy   isLoggedIn#   _sendNotification   _getIdForLogin   _isGuidUnique   _encryptLogin   _decryptLogins   NSGetFactory)   generateNSGetFactory   ˙˙˙˙   ;   this.LoginManagerStorage_jsonÁ                          š                                             $  )  &              -    ˙˙˙˙   _   this.LoginManagerStorage_json.prototype._cryptoÁ                   9       š                                           &  á  -             A5        *A;   5   ¸   
;   5   : 0    QA5    ŇĘ/É1    __crypto   CcO   @mozilla.org/login-manager/crypto/SDR;1   getService   Ci+   nsILoginManagerCrypto   ˙˙˙˙   W   this.LoginManagerStorage_json.prototype.logÁ                 J       š                                             message V  ő  9             A5        ;   â   =   T  =   : Q;   5   ¸   
=   T  : QÝŢ<    _debug	   dump   PwMgr json:    
   Services   console!   logStringMessage   ˙˙˙˙   e   this.LoginManagerStorage_json.prototype.initializeÁ                  ŕ       š      M                                  C	    F             A;   5   ¸   
=   : 0    Q   QA5   Q;   5   ¸   
;   5   	5   5   
=   :    QA;   V   R 0   Q;   ¸   
   ¸   
A: : ¸   
;   5   : ČČ   4   Qv   QA¸   
=   V   : Q=   pČ    ×ÉI  LO
ĺOČQËÉSŘsS˙˙˙őĘsĘSĚtĚÖÍ    _debug   Services   prefs   getBoolPref   signon.debug   _crypto   OS	   Path	   join   Constants   profileDir   logins.json   _store   LoginStore	   Task   spawn	   bind   catch   Cu   reportError   log/   Initialization failed: +   Initialization failed    ˙˙˙˙          jsonPath              i   this.LoginManagerStorage_json.prototype.initialize/<Á                 q      š      O                       /            .generator   sqlitePathř
    S             É   Ę   ĐQA¸    
=   A5   5   : QA5   ¸   
:     Ë  ĐQ;   5   ¸   
=   :       Ě    Ć       Qv   QČÇ    ;   	5   
¸   
;   	5   5   
5   =   :    Q;   	5   ¸   
   :    Ë  Đ   lĆ      Q;   A5     R    Q   ¸   
:  ¸   
;   5   :   Ë  ĐQA5   ¸   
:  QČÇ;   5   ¸   
=   C: Q   ĚrSĚUÝÍÎ\'ÖÍ`ŰeĺeÉgÖÍŃŃÉm
Ěâ
ÓrŰ>    log)   Opening database at    _store	   path	   load   Services   prefs   getBoolPref3   signon.importedFromSqlite   OS	   Path	   join   Constants   profileDir   signons.sqlite	   File   exists   LoginImport   import   catch   Cu   reportError   saveSoon   setBoolPref    ˙˙˙˙          ex       ˙˙˙˙          loginImport        E   +       v      ˙˙˙˙   ě   `   ˙˙˙˙
   B   ŕ   8      ˙˙˙˙          e         !          "      ˙˙˙˙˙˙˙˙Š             ą   (   ˙˙˙˙   ˙˙˙˙   c   this.LoginManagerStorage_json.prototype.terminateÁ                   (       š                                           Ň                 A5    5   ¸   
:  QA5    ¸   
:  ÖÍ    _store   _saver   disarm	   save   ˙˙˙˙   a   this.LoginManagerStorage_json.prototype.addLoginÁ               É      š   (   Ę                           C            login   encUsername   encPassword   encType   loginClone   currentTime R  Ą               A5    ¸   
:  Q;   ¸   
T  : QA¸   
T  : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQT  ¸   
:    QV  ¸   	
;   
5   : QV  5      *A¸   
V  5   :     =   p   (V  ;   ¸   
:  ¸   
:  0   Q;   ¸   
:    QV  5       V  V  0   QV  5       V  V  0   QV  5       V  V  0   QV  5       V  ?0   QA5    5   5   ¸   
Y   A5    5   5   #?
0   Q]   V  5   ]   V  5   ]   V  5   ]   V  5    ]    V  5   !]   !V   ]   "V  ]   #V  5   ]   V  ]   $V  5   ]   V  5   ]   V  5   ]   V  5   ]   : QA5    ¸   %
:  QA¸   &
=   'V  : QŃÓË&Ô˙˙˙ÚÉççŘĘČŮÉ%
ŃËĐÓĚČĘÎĘÎĘÎĘËÜăÎÎÎÎÎÉÉÎÉÎÎÎÎ  Ş  şŃŐ/    _store   ensureDataReady   LoginHelper!   checkLoginValues   _encryptLogin	   next	   done   value   clone   QueryInterface   Ci!   nsILoginMetaInfo	   guid   _isGuidUnique;   specified GUID already exists   gUUIDGenerator   generateUUID   toString	   Date   now   timeCreated   timeLastUsed'   timePasswordChanged   timesUsed	   data   logins	   push   nextId   id   hostname   httpRealm   formSubmitURL   usernameField   passwordField#   encryptedUsername#   encryptedPassword   encType   saveSoon#   _sendNotification   addLogin   ˙˙˙˙   g   this.LoginManagerStorage_json.prototype.removeLoginÁ                     š      :                                      login   idToDelete   storedLogin   foundIndex ß    Ĺ       	      A5    ¸   
:  QA¸   
T  : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5      QQQ       =   pA5    5   5   ¸   	
A    :   QV  ×˙   6A5    5   5   ¸   

V  ?: QA5    ¸   
:  QA¸   
=   V   : QŃËÔ˙˙˙äÉčŘÝČŕŃŐ3    _store   ensureDataReady   _getIdForLogin	   next	   done   value%   No matching logins	   data   logins   findIndex   splice   saveSoon#   _sendNotification   removeLogin   ˙˙˙˙      this.LoginManagerStorage_json.prototype.removeLogin/foundIndex<ĺ                        š                                             l ź  Ó  Ě             T  5          <Ô    id   ˙˙˙˙   g   this.LoginManagerStorage_json.prototype.modifyLoginÁ              p      š   #   ß                        [            oldLogin   newLoginData   idToModify   oldStoredLogin   newLogin   encUsername   encPassword   encType  Ĺ  <#  Ú             A5    ¸   
:  QA¸   
T  : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     QQQV       =   p;   ¸   
V  T :    Q   5   	V  5   	E   QA¸   

   5   	:     =   p   ¸   
T  C:     ^  QA¸   
Y      5      5      5   :   QV  ¸   
A   :    =   pČA¸   
   : - Á
:  ¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQA5    5   5   - Á
:    Q  ,m5   W  QV  5   V     V     5   0   QV     5   0   QV     5   0   QV     5   0   QV     5   0   QV  V  0   QV  V  0   QV     5   	0   	QV  V  0   QV     5   0   QV     5   0   QV     5   0   QV     5   0   QA5    ¸    
:  Q   ăQ¸   
:  5   ˙˙ţĹČ A¸   !
=   "Z  V  `      `  : QŃËÔ˙˙˙áÉçŘÓÉÚŇĐË
×ĘĘ  ěČŃ
Í&Ô˙˙˙ÚÉççŘß8 @ŃÎÔÔÔÔÔÎÎÔÎÔÔÔÔŃH  ÷Ë˙˙˙ęŇ Ń'ČÉ˙˙˙ÉB    _store   ensureDataReady   _getIdForLogin	   next	   done   value%   No matching logins   LoginHelper%   buildModifiedLogin	   guid   _isGuidUnique;   specified GUID already exists   matches   findLogins   hostname   formSubmitURL   httpRealm	   some5   This login already exists.   _encryptLogin	   data   logins   id   usernameField   passwordField#   encryptedUsername#   encryptedPassword   encType   timeCreated   timeLastUsed'   timePasswordChanged   timesUsed   saveSoon#   _sendNotification   modifyLogin    ˙˙˙˙         logins              k   this.LoginManagerStorage_json.prototype.modifyLogin/<ĺ                        š                                             login Č  î  đ                ¸    
T  C: Ô    matches    ˙˙˙˙         loginItem         @      ů   X   ˙˙˙˙   ű  K  ˙˙˙˙   ˙˙˙˙   i   this.LoginManagerStorage_json.prototype.getAllLoginsÁ               ž       š   	   -                                       count   logins   ids Ł#  Đ$        	      A¸    
Y   : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     QQQA¸   
V   : W   QA¸   
=   V   Ů   =   : QT     T  V   Ů   0   QV   ÍÔ˙˙˙đÉçŘĚ	ČáŇ    _searchLogins	   next	   done   value   _decryptLogins   log3   _getAllLogins: returning    length    logins.   ˙˙˙˙   i   this.LoginManagerStorage_json.prototype.searchLoginsÁ                    š      L                                    count   matchData   realMatchData   propEnum   logins   ids  Á%  Í'  )            Y      QT 5      Q   Lm  QV  ¸   
:  ¸   
;   5   :   QV   V  5   V  5   9QČăV  ¸   
:  ˙˙˙ŠA¸   
V   : - Á
:  ¸   	
:  5   
   Q   
5     Q¸   	
:  5   
   Q   
5     QQQA¸   
V  : W  QT  V  Ů   0   QV  ĘÍ(\'
ËÜŮ -Ő 2ĚÔ˙˙˙đÉçŘĚ	ČŇ    enumerator   getNext   QueryInterface   Ci   nsIProperty	   name   value   hasMoreElements   _searchLogins	   next	   done   _decryptLogins   length    ˙˙˙˙      	   prop           \          E   ˙˙˙˙   ˙˙˙˙   k   this.LoginManagerStorage_json.prototype._searchLoginsÁ            ć      š   !                           -      D      matchData   match   conditions   foundLogins   foundIds.)  n2  F                W   QA5    ¸   
:  QZ     QZ     QZ     QA5    5   5   - Á
:    Q  =m5   W  QV   V  :      Q;   5   ¸   
;   5   	:   QV  ¸   

V  5   V  5   V  5   V  5   V  5   V  5   V  5   : QV  ¸   
;   5   : QV  V  5   0   QV  V  5   0   QV  V  5   0   QV  V  5   0   QV  V  5   0   QV  ¸   
V  : QV  ¸   
V  5   : QČăQ¸   
:  5   ˙˙ţ´Č A¸   
=   V  Ů   =    : QZ  V  `   V  `   KĘ FŃÉ sÉÉß8 QŃÉ
ËŃĘ wČÝŇŇÉ y ~ŮÓÓÓÓÓÓŮ tË˙˙˙ęŇ áČÉ
    _store   ensureDataReady	   data   logins   value   CcM   @mozilla.org/login-manager/loginInfo;1   createInstance   Ci   nsILoginInfo	   init   hostname   formSubmitURL   httpRealm#   encryptedUsername#   encryptedPassword   usernameField   passwordField   QueryInterface!   nsILoginMetaInfo	   guid   timeCreated   timeLastUsed'   timePasswordChanged   timesUsed	   push   id	   next	   done   log3   _searchLogins: returning    length    logins   ˙˙˙˙      match                e      š                                          aLogin )  !.  K               K   Q  GmW     Q   V   7  QV   x=    y   =   y   Á=   y   ˇ=   y   ­=   y   Ł=   y   =   y   =   y   =   y   {=   	y   q=   
y   g=   y   ]=   y   S=   y   Iz   V  @   9T  5    =   E   QT  5    V     BČ NČ   WV  @E   QT  V   7   BČ NČ    T  V   7V     BČ NČ   =   V   pČăQLM˙˙ţšQNČCÎ0 LĐĎl #u
 Xu
u
u
u
u
u
u
u
u
u
u
u
uĘ PáÉXÔÎÍÉXŮ    formSubmitURL   hostname   httpRealm   id   usernameField   passwordField#   encryptedUsername#   encryptedPassword	   guid   encType   timeCreated   timeLastUsed'   timePasswordChanged   timesUsed   %   Unexpected field:     ˙˙˙˙          field                     value          M      	   Y  ˙˙˙˙      <          ÷         ˙˙˙˙ü                     ˙˙˙˙#            >        ˙˙˙˙C            ˙˙˙˙         loginItem                    login       Z   Q     P   \  ˙˙˙˙   x            ˙˙˙˙   o   this.LoginManagerStorage_json.prototype.removeAllLoginsÁ                   [       š   	                                        +3  đ3              A5    ¸   
:  QA¸   
=   : QA5    5   Z   0   QA5    ¸   
:  QA¸   
=   @: QŃŃŐŃŇ0    _store   ensureDataReady   log'   Removing all logins	   data   logins   saveSoon#   _sendNotification   removeAllLogins   ˙˙˙˙   w   this.LoginManagerStorage_json.prototype.getAllDisabledHostsÁ               r       š   
                                          count   disabledHosts >4  v5  Ł            A5    ¸   
:  QA5    5   5   ¸   
>:    QA¸   
=   V   Ů   =   : QT     T  V   Ů   0   	QV   ŃŘČáŇ    _store   ensureDataReady	   data   disabledHosts   slice   logA   _getAllDisabledHosts: returning    length!    disabled hosts.   value   ˙˙˙˙   {   this.LoginManagerStorage_json.prototype.getLoginSavingEnabledÁ                 H       š                                 
            hostname Č5  6  ł            A5    ¸   
:  QA¸   
=   T  : QA5    5   5   ¸   
T  : ×˙ŃŐÚ7    _store   ensureDataReady   logI   Getting login saving is enabled for 	   data   disabledHosts   indexOf   ˙˙˙˙   {   this.LoginManagerStorage_json.prototype.setLoginSavingEnabledÁ                     š      <                                       hostname   enabled   foundIndex  Ň6  9  ż            A5    ¸   
:  Q;   ¸   
T  : QA¸   
=   T  =   T : QA5    5   5   ¸   	
T  :    QT    GV   ×˙   6A5    5   5   ¸   

V   ?: QA5    ¸   
:  Q   @V   ×˙   4A5    5   5   ¸   
T  : QA5    ¸   
:  QA¸   
T    =      
=   T  : QŃÓßÚČBŕÖŢŃË
ŰW    _store   ensureDataReady   LoginHelper%   checkHostnameValue   logC   Setting login saving enabled for 	    to 	   data   disabledHosts   indexOf   splice   saveSoon	   push#   _sendNotification#   hostSavingEnabled%   hostSavingDisabled   ˙˙˙˙   e   this.LoginManagerStorage_json.prototype.findLoginsÁ              -      š      K                                    count   hostname   formSubmitURL   httpRealm   loginData   matchData   logins   ids    ż9  2<  Ű            Y   T ]    T ]   T ]      QY     Qf    K  Q   1mW  V   V  7=      V  V  V   V  79QăQLM˙˙˙ĎQNČA¸   
V  : - Á
:  ¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQA¸   
V  : W  QA¸   	
=   
V  Ů   =   : QT  V  Ů   0   QV  ČČÍĘÎ06ĘĎŕĚÔ˙˙˙đÉçŘĚ	ČáŇ    hostname   formSubmitURL   httpRealm      _searchLogins	   next	   done   value   _decryptLogins   log/   _findLogins: returning    length    logins                     hostname      formSubmitURL      httpRealm                   ˙˙˙˙         field       ?   7      5   C   ˙˙˙˙   ˙˙˙˙   g   this.LoginManagerStorage_json.prototype.countLoginsÁ                    š      C                                    hostname   formSubmitURL   httpRealm   count   loginData   matchData   logins   ids   p<  e>  ô            Y      QY   T  ]    T ]   T ]     QY     Qf    K  Q   1mW  V  V  7=      V  V  V  V  79QăQLM˙˙˙ĎQNČA¸   
V  : - Á
:  ¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQA¸   
=   	V  Ů   
: QV  Ů   
ĘČČÍĘÎ06ĘĎŕĚÔ˙˙˙đÉçŘŰĘ    hostname   formSubmitURL   httpRealm      _searchLogins	   next	   done   value   log=   _countLogins: counted logins:    length                     hostname      formSubmitURL      httpRealm                   ˙˙˙˙         field       I   7      ?   C   ˙˙˙˙   ˙˙˙˙   ]   this.LoginManagerStorage_json.prototype.uiBusyÁ                          š                                           >  ´>  	            A5    5   Ě    _crypto   uiBusy   ˙˙˙˙   e   this.LoginManagerStorage_json.prototype.isLoggedInÁ                          š                                           ă>  ?              A5    5   Ě    _crypto   isLoggedIn   ˙˙˙˙   s   this.LoginManagerStorage_json.prototype._sendNotificationÁ              ç       š      Y                                    changeType	   data   dataObject  ?  
B              T    QT ;    r   u;   5   ¸   
;   5   : W   Q>  Q    ,mV   ¸   
T V  7B: QV  #?W  QQăV  T Ů   ˙˙˙ĘČ   DT '=      5;   5   	¸   
;   5   
: W   QV   T 0   Q;   5   ¸   
V   =   T  : QČÉpŃĘ Č&,;Ů !'Î " !ÚĘŃĘ $ČÍáT    Array   Cc)   @mozilla.org/array;1   createInstance   Ci   nsIMutableArray   appendElement   length   string=   @mozilla.org/supports-string;1#   nsISupportsString	   data   Services   obs   notifyObservers7   passwordmgr-storage-changed    ˙˙˙˙         i        E   ;       :   G   ˙˙˙˙   ˙˙˙˙   m   this.LoginManagerStorage_json.prototype._getIdForLoginÁ              Š      š                                          login   matchData   logins   ids   id   foundLogin 0C  F  3            Y      Qf    K  Q   /mW  T  V  7=       V   V  T  V  79QăQLM˙˙˙ŃQNČA¸   
V   : - Á
:  ¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQ@  Q@  Q>  Q    Žm  QA¸   
Z  V  V  7`   : - Á
:  ¸   
:  5      Q   
5     QQQV   D   QV  ¸   
T  :     Č   #V  W  QV  V  7W  QČ   )ČV  #?W  QQăV  V  Ů   ˙˙˙GČZ  V  `   V  `  ĘÎ04ĘÎßĚÔ˙˙˙đÉçŘ A&  Ž     ž
Ě(Í˙˙˙ëÔ˙˙˙íÉŘ
ËÎAÉÎI A'Î˙˙˙íÖ MČÉ       _searchLogins	   next	   done   value   _decryptLogins   equals   length                     hostname      formSubmitURL      httpRealm                   ˙˙˙˙         field        ˙˙˙˙         i                    decryptedLogin        Ô   ž         5         A   ˙˙˙˙   É   Ę   ˙˙˙˙   Ö            L           i           ˙˙˙˙   k   this.LoginManagerStorage_json.prototype._isGuidUniqueÁ                 3       š                                      D   	   guidG  |G  V            A5    ¸   
:  QA5    5   5   ¸   
A    : ŃÝ3    _store   ensureDataReady	   data   logins   every   ˙˙˙˙   o   this.LoginManagerStorage_json.prototype._isGuidUnique/<ĺ                        š                                             l cG  vG  Y            T  5       .Ď 	   guid   ˙˙˙˙   k   this.LoginManagerStorage_json.prototype._encryptLoginÁ               h       š      "                           
            login   encUsername   encPassword   encType UH  >I  c      	      A5    ¸   
T  5   :    QA5    ¸   
T  5   :   QA5    5     QZ  V   `   V  `  V  `  ŐČŐČĐČČÉ	    _crypto   encrypt   username   password   defaultEncType   ˙˙˙˙   m   this.LoginManagerStorage_json.prototype._decryptLoginsÁ              Č       š      8                                    logins   result qK  lM  y            Z      QT  K  Q    mW  V  A5   ¸   
V  5    : 0    QV  A5   ¸   
V  5   : 0   Q   <  Qv  QV  5   ;   5      Č   $V  pČ    V   ¸   
V  : QăQLM˙˙˙`QNČV   ÉĚ0  ĽĘGÚÉÚÎĚÔAĚŕ    username   _crypto   decrypt   password   result   Cr!   NS_ERROR_FAILURE	   push    ˙˙˙˙         login                     e          Ś           K          ˛   ˙˙˙˙   l   0                    