ç¿s¹                     ¹       ©       	                   '       0     resource://gre/components/msgOAuth2Module.js     *         	                        ;   5       Q;   5      Q;   5      Q;   5   ¸   
=   	: Q;   5   ¸   
=   
: Q;   5   ¸   
=   : Q;   5   ¸   
=   : Q;   5   ¸   
=   : Q;   Y   ;   ¸   
Z  ;   5   `   : ]   ;   ¸   
=   : ]      ]      ]      ]      ]      a      b      ]      ]   0   Qn   ;   ¸   
Z  ;   `   : 1   QÊ	  ÐÐÐÚ=ÚFÚBÚ?ÚAÊÐ'ÎÿÿÿéÈÑ	ÈÊ Ê$Ê(ÊbÊlÊ  Ê  ÐÕ0ÉÿÿÿßÉÿÿÿý    Cc   Components   classes   Ci   interfaces   Cr   results   utils   importC   resource://gre/modules/OAuth2.jsmU   resource://gre/modules/OAuth2Providers.jsmM   resource://gre/modules/Preferences.jsmG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   OAuth2Module   prototype   XPCOMUtils   generateQI!   msgIOAuth2Module   QueryInterface   IDM   {b63d8e4c-bf60-439b-be0e-7c9f67291042}   classID/   _loadOAuthClientDetails   initFromSmtp   initFromMail   _initPrefs   refreshToken   connect%   buildXOAuth2String   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ      OAuth2Module                          ¹                                              ¿               A=   0    QÌ    _refreshToken      ÿÿÿÿ   /   _loadOAuthClientDetails               è       ¹      %                                       aIssuer   details   w               ;    ¸   
T  :    QV      ÁV   - Á
:  ¸   
:  5      Q   
5   A
0   Q¸   
:  5      Q   
5   A
0   Q¸   
:  5      Q   
5   A
0   Q¸   
:  5      Q   
5   A
0   QQQ   ;   	5   
pÏ
È  ¼ÞêêêàË#    OAuth2Providers!   getIssuerDetails	   next	   done   value   _appKey   _appSecret   _authURI   _tokenURI   Cr3   NS_ERROR_INVALID_ARGUMENT   ÿÿÿÿ      initFromSmtp                 1       ¹                                             aServer                   A¸    
=   T  5   =   T  5   T  5   : ÜÐ!*    _initPrefs!   mail.smtpserver.   key   .   username   hostname   ÿÿÿÿ      initFromMail                 1       ¹                                             aServer     $             A¸    
=   T  5   =   T  5   T  5   : ÜÐ%.    _initPrefs   mail.server.   key   .   username   realHostName   ÿÿÿÿ      _initPrefs              I      ¹   $                             0         	   root   aUsername   aHostname   issuer   scope     ü  (             ;    ¸   
T  =   =   :    Q;    ¸   
T  =   =   :   QV    D   QV      Ì  Q;   ¸   
T :   QV     ¡V  - Á
:  ¸   
:  5      Q   
5   	W   Q¸   
:  5      Q   
5   	W  QQQ;    ¸   

T  =   V   : Q;    ¸   

T  =   V  : Q   	BÈÈA¸   
V   : QAT 0   QA=   V   0   QAV  0   QA;   A5   V  A5   A5   R 0   QA5   A5   0   QA5   A5   0   QA5   Z  Z  =   `   T `  `   0   QA5   ;   5   ¸   
=   : ¸   
=    Z  T `   T `  ×: 0   Q;   !¸   "
A5   =   #Y   A   ]   A   ]   
: QC*Ú	ÈÚÈ/ËË1
Ï
È  ÞçØÝâ9?ÐBÊDÑFËI×IÉKÒÒOÊÉÑTÖÊ-ÉUÉZÜËËZ_    Preferences   get   oauth2.issuer      oauth2.scope   OAuth2Providers%   getHostnameDetails	   next	   done   value   set/   _loadOAuthClientDetails   _username   _loginUrl   oauth://   _scope   _oauth   OAuth2   _authURI   _appKey   _appSecret   authURI   tokenURI   _tokenURI   extraAuthParams   login_hint%   requestWindowTitle   Services   strings   createBundle]   chrome://messenger/locale/messenger.properties)   formatStringFromName#   oauth2WindowTitle   Object   defineProperty   refreshToken    ÿÿÿÿ         details       ÿÿÿÿ   !   _initPrefs/<.getå                          ¹                                             ­  [             A5        refreshToken   ÿÿÿÿ   !   _initPrefs/<.setå                        ¹                                              token º  Þ  \             AT  0    Ê    refreshToken    Z   Æ   ÿÿÿÿÿÿÿÿ            ÿÿÿÿ   G   OAuth2Module.prototype.refreshTokenÁ                ´       ¹      1                                     loginMgr   logins  R  b             ;    5   ¸   
;   5   :    QV   ¸   
Y   A5   @A5   :   QV  - Á
:    Q   5m5   W  QV  5   	A5   
   V  5   È ãQ¸   
:  5   ÿÿÿ¼È =   ÑÊcÈeÝ	ÈÓ8IÑÐÏfËÿÿÿîÒj
    Cc9   @mozilla.org/login-manager;1   getService   Ci   nsILoginManager   findLogins   _loginUrl   _scope   value   username   _username   password	   next	   done       ÿÿÿÿ         login       `   I       V   T   ÿÿÿÿÿÿÿÿ             ÿÿÿÿ   G   OAuth2Module.prototype.refreshTokenÁ                    ¹      u                        +            token   loginMgr   logins   login f    l             ;    5   ¸   
;   5   :    QV   ¸   
Y   A5   @A5   :   QV  - Á
:    Q   §m5   W  QV  5   	A5   
   T     b  Q;    5   ¸   
;   5   :   QV  ¸   
=   T  : QV   ¸   
V  V  : QÈ   V   ¸   
V  : QT  È ãQ¸   
:  5   ÿÿÿJÈ ;    5   ¸   
;   5   :   QV  ¸   
A5   @A5   A5   
T  =   =   : QV   ¸   
V  : QT  ÑÊmÈrÝ	ÈÓ8  »ÑÐ]ËÑÊvÈx
×
Ý|
ÓÉsËÿÿÿîÒ  ÑÊ  ÈáÊ  Ó    Cc9   @mozilla.org/login-manager;1   getService   Ci   nsILoginManager   findLogins   _loginUrl   _scope   value   username   _usernameA   @mozilla.org/hash-property-bag;1   createInstance-   nsIWritablePropertyBag   setProperty   password   modifyLogin   removeLogin	   next	   doneM   @mozilla.org/login-manager/loginInfo;1   nsILoginInfo	   init      addLogin    ÿÿÿÿ         login                     propBag       `   »       V   Æ   ÿÿÿÿ      W       ÿÿÿÿþ             ÿÿÿÿ      connect                 "       ¹                                      D      aWithUI   aListener   T               A5    ¸   
A    A   T  B: QÙ  (    _oauth   connect   ÿÿÿÿ      connect/<å                          ¹                                           ¿  ñ                  ¸    
A5   5   : Û,    onSuccess   _oauth   accessToken   ÿÿÿÿ      connect/<å                        ¹                                             x   &                  ¸    
T  : Ó    onFailure   ÿÿÿÿ   %   buildXOAuth2String                   3       ¹                                           k  à               ;    â    =   A5   =   A5   5   =   : ÜÒ  , 	   btoa   user=   _username   auth=Bearer    _oauth   accessToken   