ç¿s¹                Ó  <   ¹   3   «                         D       0     resource://gre/modules/devtools/security/auth.js     KJ                                      	                );   â   =   : 5    n    
1    Q5   n   
1   QQn   ;   â   =   : 1   Qn   ;   â   =   : 1   Qn   ;   â   =   : 1   Q;   5   n   
1   Q5   	n   	
1   	QQ;   
¸   
A=   =   : Q;   
¸   
A=   =   : Q;   ¸   
A=   =   : Qn   ;   ;   â   Y   @]   @]   @]   @]   @]   : 0   1   Qn   Y   1   Qn   ;   Y   0   1   Q;   =   0   Q;      0   Q;   5   Y   ;   5   ]      ]   !   ]   "0    Q;      0   #Q;   5   #Y   ;   5   ]      ]   $   ]   %   ]   &   ]   ";   5   #5   ']   (0    Qn   );   Y   0   )1   )Q;   )=   *0   Q;   )   	0   Q;   )5   Y   ;   )5   ]      
]   !   ]   ";   ¸   +
   : ]   ,   ]   -;   5   5   .]   /0    Q;   )   0   #Q;   )5   #Y   ;   )5   ]      ]   $   ]   %   ]   &;   ¸   +
   : ]   ";   5   #5   ']   (;   5   #5   0]   10    Q;   Y      ]   20   Q	Ê	'QY  ý	ÏèÔÉÿÿÿýÔ
ÉÿÿÿýÔÉÿÿÿýê Ò&Ò$Ò%'Ù,16;B':ÎÿÿÿÞQÐYÚ[Ð]ÐÏ`ÏsÊ  ÐÐÏÏ  Ê  ¡Ê  ¬Ê  ÄÊ  çÚ  ýÚÐÐÏÏ Ê 8Ê xÑÈ Ê ÚÐÏÏ ªÊ ¸Ê ÆÊ èÑÈ GÔ RÚÊÐ c    Ci   Cc   require   chrome   Services   promise   DevToolsUtils=   devtools/toolkit/DevToolsUtils   dumpn   dumpv   loader#   lazyRequireGetter   promptA   devtools/toolkit/security/prompt	   cert=   devtools/toolkit/security/cert-   defineLazyModuleGetter	   Task?   resource://gre/modules/Task.jsm)   AuthenticationResult   exports   createEnum   DISABLE_ALL	   DENY   PENDING   ALLOW   ALLOW_PERSIST   Authenticators   Prompt	   mode   PROMPT   Client   prototype%   validateConnection   authenticate   Server   validateOptions)   augmentSocketOptions)   augmentAdvertisement-   defaultAllowConnection   allowConnection   OOBCert   OOB_CERT   async   _createOOB   _createRandom   defaultSendOOB   sendOOB#   defaultReceiveOOB   receiveOOB   get   ÿÿÿÿ      createEnum                5       ¹                                            obj É                 T  K   Q   mW   T  V   V   9QãQLMÿÿÿéQNÈT  Ì0ÊÚ     ÿÿÿÿ          key                    )   ÿÿÿÿ   ÿÿÿÿ      Prompt.ClientÁ                          ¹                                             N  S  ]                  ÿÿÿÿ   %   validateConnection                          ¹                                             A  Z  s             C    ÿÿÿÿ      authenticate                          ¹                                             ó  ø                    ÿÿÿÿ      Prompt.ServerÁ                          ¹                                                                   ÿÿÿÿ      validateOptions                          ¹                                             P  U                    ÿÿÿÿ   )   augmentSocketOptions                          ¹                                             t  y  ¡                  ÿÿÿÿ   )   augmentAdvertisement                        ¹                                             listener   advertisement  Ä    ¬             T ;   5   0    QÓ+    authentication   Prompt	   mode   ÿÿÿÿ      authenticate               s       ¹      2                                          client   server L  I  Ä       	      T  5    W   Q5   W  QQ;   5   ¸   
=   :     ;   5   A¸   
Y   A5   	]   
V   ]    V  ]   : #ÿÿÿìÚÖËÍËÉÉ  È    client   server   Services   prefs   getBoolPrefG   devtools.debugger.prompt-connection)   AuthenticationResult   ALLOW   allowConnection	   mode   authentication   ÿÿÿÿ      OOBCert.ClientÁ                          ¹                                             [  `                   ÿÿÿÿ   %   validateConnection                    ¹      ,                                       	   cert   socket   serverCert   advertisedCert U"  Q$        
      T  5    W   Q5   W  QQ;   â   =   : QV  5   ¸   
;   5   : 5   5   	  QV     QV  5   
V  5      ;   â   =   : QBC'ÿÿÿîÚÓÚÒÉÓÓ 	   cert   socket   dumpv3   Validate server cert hash   securityInfo   QueryInterface   Ci)   nsISSLStatusProvider   SSLStatus   serverCert#   sha256Fingerprint   sha256   dumpnY   Server cert hash doesn't match advertisement   ÿÿÿÿ      authenticate               ½       ¹      O                                      	   host	   port	   cert   transport   deferred   oobData!   activeSendDialog   closeDialog 4'  ,.  8      	      T  5       Q5      Q5      Q5      QQ;   ¸   
:     Q   Q   QA       	Q   Y   ;   ¸   
   ¸   	
A: : ]   
   ]   0   Q   ¸   
:  Q   5   0ÿÿÿßôÌÉÌ FÊØ h G#ÿÿÿíÈ iÐ pÐË 	   host	   port	   cert   transport   promise   defer   hooks	   Task   async	   bind   onPacket   onClosed   ready   ÿÿÿÿ   1   authenticate/closeDialogÅ                   F       ¹                                           ¾'  ¶(  =                  E   Q      5       &      ¸    
:  Q@      QßÕÌ    close   ÿÿÿÿ   M   authenticate/transport.hooks.onPacket<Á               Á      ¹                                ,      D     packet   .generator   .genrval   authResultõ(  7-  G            É   Ê   ÐQ  	  	:  Q   5       QQ   x;   5   y   (;   5   y    ;   5   y   z  Y   A¸   
:  ]   B]      Ë  Ð    QA¸   
Y     ]   	  ]   
  ]      ]        ]   :     Q   Á   5       5      ;  ¸   
;   =   R : QY   ]   C]      Ì  @0   Q    ¸   
  : Q   A  ¸   
;   =      R : QY   ]   C]      ÌY   ]   C]      Ì g GÌÏÒm vÊp WÊpÊpÊ KÍãÍÊÊÊÊÏ OÎ VXÚ×ÿÿÿðØÌÚXÝÿÿÿðØ	    authResult)   AuthenticationResult   PENDING   ALLOW   ALLOW_PERSIST   _createOOB   value	   done   sendOOB	   host	   port	   cert   oob   k   close   Error)   Auth secret mismatch   hooks   resolve+   Invalid auth result: 
         ÿÿÿÿ      onClosed                 4       ¹                                             reason S-  í-  i               	   	:  Q   @0    Q      ¸   
T  : QÏÌØ    hooks   reject   ÿÿÿÿ   I   OOBCert.Client.prototype._createOOB<Á                        ¹   	   %                                      .generator   .genrval   clientCert·.  R/  x            É   Ê   ÐQY   ;    5   ¸   
:  ]   B]      Ë  Ð   QY   Y      5   ]   A¸   
:  ]   ]   C]      ÌY   ]   C]      Ì } xÌÖÞÊÏÈÚ 	   cert   local   getOrCreate   value	   done#   sha256Fingerprint   sha256   _createRandom   k
   9      ÿÿÿÿ      _createRandom                ­       ¹      7                                     length   rng   bytese/  |0              ×   Q;    5   ¸   
;   5   :   QV  ¸   
V   :   QY   V  - Á
:    Q   &m5   W  QV  ¸   
×: ,  ÎãQ¸   
:  5   	ÿÿÿËÈ ¸   

=   : 
ÑÊ ÈÏÈØ8:ÞÈÿÿÿùËÿÿÿóÞÿÿÿÿ1    CcQ   @mozilla.org/security/random-generator;1   createInstance   Ci%   nsIRandomGenerator'   generateRandomBytes   value   toString	   next	   done	   join       ÿÿÿÿ      	   byte       ^   :       T   E   ÿÿÿÿ   ÿÿÿÿ      OOBCert.ServerÁ                          ¹                                             3  3                   ÿÿÿÿ      validateOptions                 )       ¹                                             listener Ê4  N5  ª            T  5        ;   ;   5   =   R pÉÖA    encryption   Error   OOBCert	   modeI    authentication requires encryption.   ÿÿÿÿ   )   augmentSocketOptions               '       ¹                                             listener   socket   requestCert  m6  ö6  ¸            ;    5   5      QT ¸   
V   : QÔÒ0    Ci%   nsITLSServerSocket   REQUIRE_ALWAYS7   setRequestClientCertificate   ÿÿÿÿ   )   augmentAdvertisement                 %       ¹                                             listener   advertisement  A8  ?9  Æ            T ;   5   0    QT T  5   0   QÓÑ#    authentication   OOBCert	   mode	   cert   ÿÿÿÿ   M   OOBCert.Server.prototype.authenticate<Á               p      ¹      ¿                          9              client   server   transport   .generator   .genrval   result   oob   sha256   k <  ³C  è            T  5       Q5      Q5      QQÉ   Ê   ÐQ   ¸   
Y   ;   5   ]   : QY   A¸   
Y   A5   ]   	   ]       ]   : ]   
B]      Ë  Ð   Q   x;   5   y   ;   5   y   
z   
   !Y      ]   
C]      ÌY   A¸   
:  ]   
B]      Ë  Ð   Q       9;   â   =   : QY   ;   5   ]   
C]      Ì   5      	Q5      
QQ   	 D   Q   
    9;   â   =   : QY   ;   5   ]   
C]      Ì   5   5      	   9;   â   =   : QY   ;   5   ]   
C]      Ì   ¸   
Y      ]      
]   : QY      ]   
C]      ÌY   ]   
C]      ÌDÿÿÿáè & èÌ ïÑÏ ï öÒËÊÊ öÎÐmEÊpÊpÊ ýXÜÍÞÓáÞÌÓá ÕÓá ÑÊÊÿÿÿÛ &Ü    client   server   transport	   send)   AuthenticationResult   PENDING   authResult   allowConnection	   mode   authentication   value	   done   ALLOW_PERSIST   ALLOW   receiveOOB   dumpn3   Invalid OOB data received	   DENY   sha256   k	   certO   Client cert hash doesn't match OOB data2            ÿÿÿÿ      get                       ¹      $                                 	   mode ?I  GJ  W            T      ;    5   U  Q;   K   Q   >mW     Q;   V   7  QV  5   T  H   V  È NÈÈãQLMÿÿÿÂQNÈ;   =   T  R pÎÎ0CÐ
ÏÍÚÏ1    Prompt	   mode   Authenticators   Error9   Unknown authenticator mode:     ÿÿÿÿ          key                  	   auth       *   D           P   ÿÿÿÿ   0   3           \         ÿÿÿÿa         