çżsš                ¨     š   (   â                                      resource://gre/modules/mailInstrumentation.js     ;!                                   f        Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Qn   Y   @]   @]   B]   B]      ]      ]      ]      ]      ]      ]      ]      ]      	]      
]      ]      ]      ]    ;   !R  ]   "   ]   #   ]   $   ]   %   ]   &   ]   'o   QËĐĐĐĐŐ,Ő-Ő1Ő1#&)+Ę2Ę8ĘBĘGĘRĘaĘ  Ę  Ę  Ę  ˘Ę  ŽĘĘ  ˇČĘĘ  ĆĘ  ÚĘ  čĐ !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cu   utils   nsIMFNService?   nsIMsgFolderNotificationService   import=   resource:///modules/IOUtils.js?   resource:///modules/errUtils.jsG   resource://gre/modules/Services.jsmG   resource:///modules/mailServices.js5   mailInstrumentationManager   _currentState!   _lastStateString   _mfnListener)   _observersRegistered   observe   msgAdded!   _accountsChanged!   _smtpServerAdded   _userOptedIn   _loadState!   _postStateObject%   _createStateObject   _bytesAsHex#   _hashEmailAddress   _postData   _onError   _onLoad   Map   _prefsObserved   _addObserver   _removeObserver	   init   uninit   addEvent                  5   mailInstrumentationManager                  ˙˙˙˙   E   mailInstrumentationManager.observeÁ                 N       š                                              aSubject   aTopic   aState   ß  Ř  +             T =        ;   ¸   
=   C: Q   )T =      ;   ¸   
=   C: QÉŰÉÖ: 3   mail:composeSendSucceeded5   mailInstrumentationManager   addEvent   msgSent#   mail:setAsDefault   setAsDefault   ˙˙˙˙   G   mailInstrumentationManager.msgAddedÁ                 5       š                                           	   aMsg ď    2             ;    5   ¸   
A: QAB6   Q;   ¸   
=   C: QÖČÖ;    MailServices   mfn   removeListener   _mfnListener5   mailInstrumentationManager   addEvent   msgDownloaded   ˙˙˙˙   W   mailInstrumentationManager._accountsChangedÁ                   d       š                                            ¤  *  8             ;    5   ¸   
=   : ¸   
=   ?:    :;   ¸   
=   C: Q;   ¸   	
=   ;   5   
: Q:ÖÓÖĚĘ<>5    Services   prefs   getCharPref9   mail.accountmanager.accounts   contains   ,5   mailInstrumentationManager   addEvent   accountAdded   _removeObserver!   _accountsChanged   ˙˙˙˙   W   mailInstrumentationManager._smtpServerAddedÁ                   6       š                                            H  		  B             ;    ¸   
=   C: Q;    ¸   
=   ;    5   : QÖŃĘD3 5   mailInstrumentationManager   addEvent   smtpServerAdded   _removeObserver!   mail.smtpservers!   _smtpServerAdded   ˙˙˙˙   O   mailInstrumentationManager._userOptedInÁ                  Z       š                              	           #	  Ű	  G             ;    5   ¸   
=   :    ;   ¸   
:  Q   *   Qv   Q;   â   V   : QČ    /Ö
ŐĚŮ    Services   prefs   getBoolPrefA   mail.instrumentation.userOptedIn5   mailInstrumentationManager!   _postStateObject   logException    ˙˙˙˙          ex            3       5      ˙˙˙˙   ˙˙˙˙      minst_loadState                o       š      $                        	           	   datak
  Š  R             ;    5   ¸   
=   :    QV      :A;   ¸   
V   : 6   Q     Qv  QČ    AA¸   
:  6   QÖČWŃÉÓ[ÉÉ    Services   prefs   getCharPrefS   mail.instrumentation.lastNotificationSent   _currentState	   JSON   parse%   _createStateObject    ˙˙˙˙         ex         (   !       J      ˙˙˙˙   ˙˙˙˙   +   minst_postStateObject                       š      U                                      defaultAccount	   data   userOptedIn    a             ;    5   5   Ů   >      Q;    5   5   W   Q   .  Qv  Q;   â   V  : QČČ    A5   5       C  QV   5     QV     %A5   A¸   
V  5   	: 6   QČ;   
¸   
A5   :   QV  A5      AV  6   Q;   5   ¸   
=   :   QV     A¸   
:  QdÖgŮĚmŇËq
ĚËÎ
×#Ęv
ŇČxË{Ë
ÖČĚ    MailServices   accounts   length   defaultAccount   logException   _currentState   userEmailHash   defaultIdentity#   _hashEmailAddress   email	   JSON   stringify!   _lastStateString   Services   prefs   getBoolPrefA   mail.instrumentation.userOptedIn   _postData    ˙˙˙˙         e        ˙˙˙˙         identity         $          >   "   ˙˙˙˙˙˙˙˙^             x   =   ˙˙˙˙   ˙˙˙˙   /   minst_createStateObject                   %       š                                              ż               Y   >]    =   ]   ;   R  ]   ĘÉ    rev      userEmailHash   Object   events   ˙˙˙˙   !   minst_bytesAsHex                t       š      &                                     bytes .  ¨         
      Y      Q   QT  K   ?mW   =       V   ¸   
:  ¸   
×: ¸   
×ţ: ,  ÎăQLM˙˙˙ÁQNČ¸   
=   : ËĚ0DĘ  ÔŮ˙˙˙úÜ  /    0   charCodeAt   toString   slice	   join       ˙˙˙˙       	   byte          E          ]   ˙˙˙˙   ˙˙˙˙   -   minst_hashEmailAddress               É       š      B                                        address   ch   converter   byteArray   hashedData #                 ;    5   ¸   
;   5   :    QV   ¸   
V   5   : Q;    5   ¸   
;   5   :   QV  =   
6   	QV  ¸   
T  Y   :   QV   ¸   
V  V  Ů   : QV   ¸   
B:   QA¸   
V  : ŃĘ  ČŘŃĘ  ČĎÓČÜĚČĚ    Cc9   @mozilla.org/security/hash;1   createInstance   Ci   nsICryptoHash	   init   SHA256Y   @mozilla.org/intl/scriptableunicodeconverter;   nsIScriptableUnicodeConverter   charset   UTF-8%   convertToByteArray   update   length   finish   _bytesAsHex   ˙˙˙˙      minst_postData                 Ş       š      5                                         req   url   dataToPostA  Đ  ˘       	      ;    5   ¸   
;   5   :    Q;   5   ¸   
=   :   QV  Ů   	    A5   
  QV   ¸   
=   V  C: QV   A5   6   QV   A5   6   QV   ¸   
V  : QŃĘ  ŁČÖČĘËŮĐĐÓ    CcO   @mozilla.org/xmlextras/xmlhttprequest;1   createInstance   Ci#   nsIXMLHttpRequest   Services   prefs   getCharPref9   mail.instrumentation.postUrl   length!   _lastStateString	   open	   POST   onerror   _onError   onload   _onLoad	   send   ˙˙˙˙      minst_onError                        š                                              e ô    Ž             ;    â    T  : QŃ    logException   ˙˙˙˙      minst_onLoad                   !       š                                            4  ż  ą             ;    5   ¸   
=   A5   : QÖ  ˛6    Services   prefs   setCharPrefS   mail.instrumentation.lastNotificationSent!   _lastStateString   ˙˙˙˙   O   mailInstrumentationManager._addObserverÁ                 2       š                                           	   pref   observer  R  Č  ¸             ;    5   ¸   
T  T B: QA5   ¸   
T  C: QÜŐ$    Services   prefs   addObserver   _prefsObserved   set   ˙˙˙˙   U   mailInstrumentationManager._removeObserverÁ                 I       š                                 
          	   pref   observer  ć    ź             A5    ¸   
T  :    5;   5   ¸   
T  T : QA5    ¸   
T  B: QĐŰŐ%    _prefsObserved   has   Services   prefs   removeObserver   set   ˙˙˙˙      minst_init                         š      L                           '               Ć             ;    5   ¸   
=   :     ;   5   5   Ů   >   A¸   
:  Q;    5   ¸   	
A=   
B: Q;    5   ¸   	
A=   B: Q;    5   ¸   	
=   A5   B: Q;    5   ¸   	
=   A5   B: Q;    5   ¸   	
=   A5   B: Q;   5   ¸   
A;   5   : QAC6   QAC6   QÖÖĚÜÜÖ  ŃÖ  ÓáŕČČ    Services   prefs   getBoolPref9   mail.instrumentation.askUser   MailServices   accounts   length   _loadState   obs   addObserver3   mail:composeSendSucceeded#   mail:setAsDefault9   mail.accountmanager.accounts!   _accountsChangedA   mail.instrumentation.userOptedIn   _userOptedIn!   mail.smtpservers!   _smtpServerAdded   mfn   addListener   nsIMFNService   msgAdded)   _observersRegistered   _mfnListener   ˙˙˙˙   C   mailInstrumentationManager.uninitÁ                   ˇ       š      $                                      §  |  Ú             A5        ;   5   ¸   
A=   : Q;   5   ¸   
A=   : QA5      ;   5   ¸   	
A: Q;   5   
¸   
=   A: Q;   5   
¸   
=   A: Q;   5   
¸   
=   A: QŰŰÖŰŰŰ8 )   _observersRegistered   Services   obs   removeObserver3   mail:composeSendSucceeded#   mail:setAsDefault   _mfnListener   MailServices   mfn   removeListener   prefs9   mail.accountmanager.accountsA   mail.instrumentation.userOptedIn!   mail.smtpservers   ˙˙˙˙      minst_addEvent                       š   	   +                                     aEventKey   aData  đ  5!  č             T  A5    5   q    `   Q;   R     QV   ;   ¸   
:  6   QV   T 6   QA5    5   T  V   8QA¸   
:  QČ   *   Qv   Q;   â   V   : QČ    q
ĐËČĐÉÍÔŇĚŮ    _currentState   events   Object	   time	   Date   now	   data!   _postStateObject   logException    ˙˙˙˙          newEvent        ˙˙˙˙          ex            u          Z   ˙˙˙˙   w      ˙˙˙˙