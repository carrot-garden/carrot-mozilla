ç¿s¹                  2   ¹   B                            3       0     resource://gre/components/ContactManager.js     þC         	                                       B    Q;   5      Q;   5      Q;   5      Q;   ¸   
=   	: Q;   ¸   
=   
: Q;   ¸   
=   : Q;   ¸   
;   =   =   =   : Q;   ¸   
A=   =   =   : Q×   Qf      Qn   B1   Q;   Y      ]      ]      ]   ;   ¸   
=   : ]   =    ]   !;   ¸   "
Z  ;   5   #`   : ]   $0   Q;   %Y   ;   &5   ÂB]   'Z   ]   (   b   )   a   )   	]   *   
]   +   ]   ,   ]   -   ]   .   ]   /   ]   0   ]   1   ]   2   ]   3   ]   4   ]   5   ]   6   ]   7   ]   8   ]   9   ]   :   ]   ;   ¸   
=   ;: ]   =   <]   !;   ¸   "
Z  ;   5   =`   ;   5   >`  ;   5   ?`  : ]   $0   QA;   ¸   A
Z  ;   `   ;   %`  : 0   @QÊ	
&Ê(	M	>
ÐÐÐÕ3Õ1Õ9Ö;Ò7ÈË
&Ì(*ÊÊ1Ê>ÊHÑ	ÈÊÐ'ÎÿÿÿéÎMOÊËÉTÊXÊ\ÊfÊnÊvÊzÊ  ÝÊ  ãÊ -Ê cÊ wÊ Ê ÊÊ ­Ê ÊÊ ÞÊ ïÊ  Ê Ñ	ÈÊÐ'Î)Î)Î ÎÑÉ	É É    DEBUG   Cc   Components   classes   Ci   interfaces   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmW   resource://gre/modules/DOMRequestHelper.jsm   XPCOMUtils/   defineLazyServiceGetter   Services   DOMRequestM   @mozilla.org/dom/dom-request-service;1)   nsIDOMRequestService	   cpmmS   @mozilla.org/childprocessmessagemanager;1!   nsIMessageSender3   CONTACTS_SENDMORE_MINIMUM   PROPERTIES)   mozContactInitWarned   Contact   prototype   __init	   init   setMetadata   IDM   {72a5ee28-81d8-4af8-90b3-ae935396cc66}   classID-   @mozilla.org/contact;1   contractID   generateQI   nsISupports   QueryInterface   ContactManager'   DOMRequestIpcHelper'   hasListenPermission   _cachedContacts   oncontactchange   _convertContact!   _convertContacts%   _fireSuccessOrDone   _pushArray   receiveMessage   dispatchEvent   askPermission	   save	   find   createCursor   getAll   nextTick   handleContinue   remove   clear   getRevision   getCountM   {8beb3a66-d70a-4111-b216-b8e995ad3aff};   @mozilla.org/contactManager;11   nsISupportsWeakReference   nsIObserver?   nsIDOMGlobalPropertyInitializer   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ      debug                        ¹                                             s    0               ;    â    =   T  =   : QÝ( 	   dump)   -*- ContactManager:    
                  	   name      honorificPrefix      givenName      additionalName      familyName   #   phoneticGivenName   %   phoneticFamilyName      honorificSuffix      nickname      photo      category      org      jobTitle   	   bday   	   note      anniversary      sex      genderIdentity      key      adr      email      url   	   impp      tel                  ÿÿÿÿ      Contact                          ¹                                             Á  Ç  (                  ÿÿÿÿ   1   Contact.prototype.__initÁ                3       ¹                                           aProp ñ  B  +             T  K   Q   mW   AV   T  V   79QãQLMÿÿÿçQNÈÌ0ÊÜ     ÿÿÿÿ       	   prop                    +   ÿÿÿÿ   ÿÿÿÿ   -   Contact.prototype.initÁ                ~       ¹      &                                    aProp U  õ  1             ;        &n    C1    Q;   ¸   
=   : Q;   - Á
:     Q    m5   W   QAV   T  V   79QãQ¸   
:  5   ÿÿÿÑÈ 3ÌÕ9Ô84ÑÏ9ËÿÿÿïÒ )   mozContactInitWarned   Cu   reportError  mozContact.init is DEPRECATED. Use the mozContact constructor instead. See https://developer.mozilla.org/docs/WebAPI/Contacts for details.   PROPERTIES   value	   next	   done    ÿÿÿÿ       	   prop       E   4       ;   ?   ÿÿÿÿ   ÿÿÿÿ   ;   Contact.prototype.setMetadataÁ                 /       ¹                                              aId   aPublished   aUpdated     »  >             AT  0    QT    AT 0   QT    AT 0   QÊÊCÊ    id   published   updated   ÿÿÿÿ      ContactManager                          ¹                                             	  	  M                  ÿÿÿÿ   Q   ContactManager.prototype.oncontactchangeÁ                        ¹                                             aHandler 
  q
  T             A5    ¸   
=   T  : QÙ?    __DOM_IMPL__   setEventHandler   oncontactchange   ÿÿÿÿ   Q   ContactManager.prototype.oncontactchangeÁ                          ¹      	                                     
  Ò
  X             A5    ¸   
=   : Ò5    __DOM_IMPL__   getEventHandler   oncontactchange   ÿÿÿÿ   Q   ContactManager.prototype._convertContactÁ                       ¹                                              aContact   properties   newContact ð
  [  \       
      T  5       QV   5   E   QV   5   Ù      -V   ;   ¸   
V   5   A5   : 0   QA5   5   T  5    R   QV  ¸   
T  5   T  5   	T  5   
: QV  ÍÝßÉaÔÈç    properties   photo   length   Cu   cloneInto   _window   mozContact   setMetadata   id   published   updated   ÿÿÿÿ   S   ContactManager.prototype._convertContactsÁ              _       ¹                                          aContacts   contacts z  +  f             A5    5   R     QT  K  Q   ,mW  V   ¸   
A¸   
T  V  7: : QãQLMÿÿÿÔQNÈV   ÌÈÌ01ÊÛÿÿÿòÑk    _window   Array	   push   _convertContact    ÿÿÿÿ         i       %   2          >   ÿÿÿÿ   ÿÿÿÿ   W   ContactManager.prototype._fireSuccessOrDoneÁ                 C       ¹                                             aCursor   aResult  L  ø  n             T @   ";    5   ¸   
T  : Q    ;    5   ¸   
T  T : QÝÛ2    Services   DOMRequest   fireDone   fireSuccess   ÿÿÿÿ   G   ContactManager.prototype._pushArrayÁ                        ¹                                             aArr1   aArr2    I  v             T  5    ¸   
T  T O QÙ 	   push   apply   ÿÿÿÿ   O   ContactManager.prototype.receiveMessageÁ              Ç      ¹   :                                       aMessage   msg   contacts   req f    z             ;       !;   â   =   T  5   : QT  5      QV   5     Q  QT  5     Q  Q  Qx=   y   =   y  =   y  S=   	y  =   
y  =   y  Î=   y  Ä=   y  º=   y  °=   y  ¦=   y  =   y  ÷=   y  ;=   y  ·=   y  "z  A¸   
V   5   : W  QV     G  QA¸   
V  :   Q;   5   ¸   
V  5   V  : QÈ   ,;       ";   â   =   V   5   : Q  (A¸   
V   5   :   QV      
   V     A¸   
V  :    
f     QV  5      ®  Q;       ;   â   =   : QV  B0   QV  ¸    
:    QA¸   !
V  5   "V  : QA¸   #
A5   $¸   %
AV  5   &V  : : QV      A¸   '
V   5   : QÈ   ;;       ;   â   =   (: QA¸   !
V  5   "V  : Q  çA5   )V   5   7   CV   5   *   $A5   )V   5   7V   5   *0   +QA5   )V   5   /QA¸   
V   5   : W  QV     $;   5   ¸   
V  5   @: Q  NA¸   
V   5   : W  QV     CV  5      V  5   W  Q;   5   ¸   ,
V  V   5   -: Q  éA¸   
V   5   : W  QV     ,;   5   ¸   ,
V  5   &V   5   -: Q  ;       2;   â   =   .V   5   *=   /V   5   0: QA5   15   2=   3Y   V   5   *]   *V   5   0]   0R   QA¸   4
V  : Q  ;       ";   â   =   5V   5   6: QA¸   
V   5   : W  QV     ,;   5   ¸   
V  5   V   5   6: Q    ;       ";   â   =   7V   5   8: QA¸   
V   5   : W  QV     ,;   5   ¸   
V  5   V   5   8: Q   +;       !;   â   =   9T  5   : QÈA¸   '
V   5   : QÜÍÎÚh Ou
  u
  u
  ¦u
u
  ¬u
u
u
u
u
u
  ºu
  Àu
  Éu
  ÐuÊ  ÑÈBËÌ	È
èÝXÑÈXÑÒÉ  ©ËÓ
ËË
È
Ù
ãÿÿÿòÛÓ
ÙXÐÉß
ÑÑÈ
ßXÑÈÉÎ
âXÑÈ
çXíÖ
Î
Î  ÃÈÐXÝÑÈ
çXÝÑÈ
çXÝÕ"    DEBUG   debug!   receiveMessage: 	   name	   json   contacts/   Contacts:Find:Return:OK)   Contacts:GetAll:Next-   Contact:Save:Return:OK1   Contacts:Clear:Return:OK1   Contact:Remove:Return:OK/   Contacts:Find:Return:KO-   Contact:Save:Return:KO1   Contact:Remove:Return:KO1   Contacts:Clear:Return:KO=   Contacts:GetRevision:Return:KO1   Contacts:Count:Return:KO3   Contacts:GetAll:Return:KO   Contact:Changed#   Contacts:Revision   Contacts:Count   getRequest   requestID!   _convertContacts   Services   DOMRequest   fireSuccess   request%   no request stored!   cursorId   waitingForNextG   cursor waiting for contact, sending   shift   _pushArray   cachedContacts   nextTick%   _fireSuccessOrDone	   bind   cursor   removeRequest5   cursor not waiting, saving   _cachedContacts   contactID   id   fireError   errorMsg3   Contacts:ContactChanged:    ,    reason   _window+   MozContactChangeEvent   contactchange   dispatchEvent   new revision:    revision   count:    count   Wrong message:     ÿÿÿÿ      	   data       result       event                     result                                                      contact        R   _  ÿÿÿÿ      <          ë  £          ÿÿÿÿ   M   ContactManager.prototype.dispatchEventÁ                         ¹      	                                       event     Ý             A5       A5   ¸   
T  : QÔ' '   hasListenPermission   __DOM_IMPL__   dispatchEvent   ÿÿÿÿ   M   ContactManager.prototype.askPermissionÁ               Å      ¹   2   ö                          <      D      aAccess   aRequest   aAllowCallback   aCancelCallback   access   principal	   type   permValue   typeArray   request   windowUtils  ¡  Ä%  ã             ;       ;   â   =   : Q   QT  x=   y   F=   y   L=   y   B=   y   H=   y   >=   y   4=   	y   *z   5=      Q   0=   
   Q    =      Q   =      QA5   5   5      Q=        Q;   5   ¸   
V   V  :   Q;    E   Q;   â   =   V  : QV  ;   5   5                :  Q   SV  ;   5   5   D   QV  ;   5   5                =   : QY   =   ]      ]   Z   ]   ;   ¸    
Z  ;   5   !`   : ]   "W  Q;   #5   $¸   %
;   5   &:   QV  ¸   '
V  B: QY   V  ]   (V   ]   );   ¸    
Z  ;   5   *`   : ]   "    ]   +   ]   ,A5   ]   -  QA5   ¸   "
;   5   .: ¸   /
;   5   0:   QV  ¸   1
V  : QÓk  u
u
u
u
u
u
uÊ  èËXËXËXËÕÐÙÈß	ÔÊÚÔÏÊÊÉÐ'ÎÿÿÿéÍÛÈÔÉÉÐ'ÎÿÿÿéÈÊÊÐ (×ÊÊ (ÈÓ#    DEBUG   debug5   askPermission for contacts   create   update   remove	   find   listen   revision   count   write	   read   unknown   _window   document   nodePrincipal   contacts-   Services   permsA   testExactPermissionFromPrincipal)   Existing permission    Ci)   nsIPermissionManager   ALLOW_ACTION   DENY_ACTION   UNKNOWN_ACTION#   PERMISSION_DENIED   contacts	   type   access   options   XPCOMUtils   generateQI1   nsIContentPermissionType   QueryInterface   Cc)   @mozilla.org/array;1   createInstance   nsIMutableArray   appendElement   types   principal7   nsIContentPermissionRequest   allow   cancel   window+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils   askPermission   ÿÿÿÿ   i   ContactManager.prototype.askPermission/request.allowÁ                   E       ¹                                           ]#  Û#                 E   Q   :  Q;    E   )Q;   â   =         =   : QÑë	4    DEBUG   debug7   Permission granted. Access    
   ÿÿÿÿ   k   ContactManager.prototype.askPermission/request.cancelÁ                   J       ¹                                           ó#  $                 E   Q   =    : Q;   E   )Q;   â   =         =   : QÖë	3 #   PERMISSION_DENIED   DEBUG   debug5   Permission denied. Access    
   ÿÿÿÿ   	   save                    ¹      ·                       *            aContact   newContact   request   requestID   reason   options   allowCallback   cancelCallback Ü%  Ö,  -            Y   Y   ]       Q;   - Á
:    Q   9m5   W  QT  V  T  V  79QV   5    V  T  V  79QãQ¸   
:  5   ÿÿÿ¸È    :  Qv  QA5   5   V  5   V  5   R pÈ    A¸   	
:     QA¸   

Y      ]   :    Q  QT  5   =      LT  A¸   
:  ¸   
     =   : 0   QA5      T  9Q=   W  Q   =   W  QV   T  5   0   QV   T  5   0   QV   T  5   0   Q;      ,;   â   =   ;   ¸   
V   : : QY   V   ]   V  ]      Q   ¸   
A:   Q     QA¸   
V     V  V  : Q   ÏkÔ8MÑÑ× 4Ëÿÿÿî× 9ÌÞËÈ
ÉÍÊÿÿÿíÉÎGËÝÐÏÊÒÒÒßÿÿÿïÉÏÌ Y TÈ [ÊÝ    properties   PROPERTIES   value	   next	   done   _window   DOMError	   name   message   createRequest   getRequestId   request   id   undefined   _getRandomId   replace      _cachedContacts   create   update   published   updated   DEBUG   debug   send: 	   JSON   stringify   contact   reason	   bind   askPermission    ÿÿÿÿ         field        ÿÿÿÿ         e       ÿÿÿÿ   '   save/allowCallback<Á                   9       ¹                                           +  ú+  T            ;    ¸   
=   Y         ]         ]   : QÖÏÏ U	 	   cpmm!   sendAsyncMessage   Contact:Save   requestID   options   ÿÿÿÿ   '   save/cancelCallbackÁ                 #       ¹                                             reason ),  t,  [            ;    5   ¸   
      T  : Qâ4    Services   DOMRequest   fireErrorAsync   [{}-]           o      .   M       $   X   ÿÿÿÿ      .   ÿÿÿÿ   ÿÿÿÿ   ;   ContactManager.prototype.findÁ                      ¹   
   @                                      aOptions   request   options   allowCallback   cancelCallback é,  )/  c      
      ;       +;   â   =   ;   ¸   
T  : : QA¸   
:     QY   T  ]      Q    ¸   
A:    Q     QA¸   
=   	   V   V  : Q   ÞÿÿÿïÈ
ÉÎÌ m hÈ oÊÞ    DEBUG   debug   find! 	   JSON   stringify   createRequest   findOptions	   bind   askPermission	   find   ÿÿÿÿ   Y   ContactManager.prototype.find/allowCallback<Á                   X       ¹   	   %                                     §-  M.  h      	      ;    ¸   
=   Y   A¸   
Y         ]   =   ]   : ]         ]   : QÖÍÏÊÿÿÿÛÈÏ i	 	   cpmm!   sendAsyncMessage   Contacts:Find   getRequestId   request	   find   reason   requestID   options   ÿÿÿÿ   Y   ContactManager.prototype.find/cancelCallbackÁ                 #       ¹                                             reason |.  Ç.  o            ;    5   ¸   
      T  : Qâ4    Services   DOMRequest   fireErrorAsync   ÿÿÿÿ      CM_createCursor                      ¹      9                                      aRequest	   data   id T/  ¦0  w      
      Y   ;    5   ¸   
A5       ¸   
A: : ]   Z   ]   C]      QA¸   
V   :    Q;   	   ;   
â   
=      : QZ     `   V   5   `  ã y=ÿÿÿÑÈÉËÌÉÙÉÎ    Services   DOMRequest   createCursor   _window	   bind   cursor   cachedContacts   waitingForNext   getRequestId   DEBUG   debug#   saved cursor id:    ÿÿÿÿ   9   CM_createCursor/data.cursor<Á                          ¹                                           ·/  ä/  y            A¸    
      : QÖ    handleContinue   ÿÿÿÿ      CM_getAll               Ü       ¹      F                                D      aOptions   cursorId   cursor   allowCallback   cancelCallbackÅ0  º2        
      ;       -;   â   =   ;   ¸   
   : : QA¸   
:  - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5      QQQ    ¸   	
A:    Q     QA¸   

=      V   V  : Q   àÿÿÿíÈÔÿÿÿëÉèÙÌ  È ÊÞ    DEBUG   debug   getAll: 	   JSON   stringify   createCursor	   next	   done   value	   bind   askPermission	   find   ÿÿÿÿ   1   CM_getAll/allowCallback<Á                   4       ¹                                           b1  á1              ;    ¸   
=   Y         ]      ]   : QÖÏÊ 	 	   cpmm!   sendAsyncMessage   Contacts:GetAll   cursorId   findOptions   ÿÿÿÿ   1   CM_getAll/cancelCallbackÁ                 #       ¹                                             reason 2  Z2              ;    5   ¸   
      T  : Qâ3    Services   DOMRequest   fireErrorAsync   ÿÿÿÿ      nextTick                 -       ¹                                             aCallback Ú2  <3              ;    5   5   ¸   
T  ;   5   5   : QìL    Services   tm   currentThread   dispatch   Ci   nsIThread   DISPATCH_NORMAL   ÿÿÿÿ   #   CM_handleContinue              6      ¹      R                                     aCursorId	   data k3  ü5              ;       ;   â   =   T  : QA¸   
T  :    QV   5   Ù   >   É  Q;       ;   â   =   : QV   5   ¸   
:    QA¸   
A5   	¸   

AV   5   V  : : QV      A¸   
T  : Q   @V   5   Ù   ;   H   ';   ¸   
=   Y   T  ]   : QÈ   -;       ;   â   =   : QV   C0   Q×ËÈÐ  ÄËÓ
Ð
Èãÿÿÿò
ÔÔÖ3ÈÿÿÿÍÊÓË    DEBUG   debug!   handleContinue:    getRequest   cachedContacts   length!   contact in cache   shift   nextTick%   _fireSuccessOrDone	   bind   cursor   removeRequest3   CONTACTS_SENDMORE_MINIMUM	   cpmm!   sendAsyncMessage/   Contacts:GetAll:SendNow   cursorId'   waiting for contact   waitingForNext    ÿÿÿÿ         contact        J   ¾   ÿÿÿÿ   ÿÿÿÿ      removeContact               Ö       ¹   	   Y                                      aRecordOrId   request   id   options   allowCallback   cancelCallback 6  9  ­      	      A¸    
:     Q   QT  '=   H   T  W   Q   PT   D   QT  5       +;   5   ¸   
   C: Q      T  5   W   QY   V   ]      Q    ¸   
A:   Q     QA¸   
=      V  V  : Q   È
ÉÊÍÊÉ&ÛËÍÏÌ À »È ÂÊÞ    createRequest   string   id   Services   DOMRequest   fireErrorAsync	   bind   askPermission   remove   ÿÿÿÿ   9   removeContact/allowCallback<Á                   X       ¹   	   %                                     7  >8  »      	      ;    ¸   
=   Y   A¸   
Y         ]   =   ]   : ]         ]   : QÖÍÏÊÿÿÿÛÈÏ ¼	 	   cpmm!   sendAsyncMessage   Contact:Remove   getRequestId   request   remove   reason   requestID   options   ÿÿÿÿ   9   removeContact/cancelCallbackÁ                 #       ¹                                             reason m8  ¸8  Â            ;    5   ¸   
      T  : Qâ4    Services   DOMRequest   fireErrorAsync   ÿÿÿÿ   =   ContactManager.prototype.clearÁ                 }       ¹      7                                       request   options   allowCallback   cancelCallback09  :;  Ê            ;       ;   â   =   : QA¸   
:     QY      Q    ¸   
A:    Q     QA¸   
=      V   V  : Q   ÓÈ
ÉËÌ Ô ÏÈ ÖÊÞ    DEBUG   debug   clear   createRequest	   bind   askPermission   remove   ÿÿÿÿ   [   ContactManager.prototype.clear/allowCallback<Á                   X       ¹   	   %                                     ³9  \:  Ï      	      ;    ¸   
=   Y   A¸   
Y         ]   =   ]   : ]         ]   : QÖÍÏÊÿÿÿÛÈÏ Ð	 	   cpmm!   sendAsyncMessage   Contacts:Clear   getRequestId   request   remove   reason   requestID   options   ÿÿÿÿ   [   ContactManager.prototype.clear/cancelCallbackÁ                 #       ¹                                             reason :  Ö:  Ö            ;    5   ¸   
      T  : Qâ4    Services   DOMRequest   fireErrorAsync   ÿÿÿÿ   I   ContactManager.prototype.getRevisionÁ                 U       ¹      -                                       request   allowCallback   cancelCallbackT;  =  Þ            A¸    
:     Q    ¸   
A:    Q     QA¸   
=      V   V  : Q   È
ÉÌ áÈ çÊÞ    createRequest	   bind   askPermission   revision   ÿÿÿÿ   g   ContactManager.prototype.getRevision/allowCallback<Á                   ?       ¹                                           ¢;  '<  á      	      ;    ¸   
=   Y   A¸   
Y         ]   : ]   : QÖÍÏÿÿÿìÈ â	 	   cpmm!   sendAsyncMessage)   Contacts:GetRevision   getRequestId   request   requestID   ÿÿÿÿ   g   ContactManager.prototype.getRevision/cancelCallbackÁ                 #       ¹                                             reason V<  ¡<  ç            ;    5   ¸   
      T  : Qâ4    Services   DOMRequest   fireErrorAsync   ÿÿÿÿ   C   ContactManager.prototype.getCountÁ                 U       ¹      -                                       request   allowCallback   cancelCallback=  Ë>  ï            A¸    
:     Q    ¸   
A:    Q     QA¸   
=      V   V  : Q   È
ÉÌ òÈ øÊÞ    createRequest	   bind   askPermission   count   ÿÿÿÿ   a   ContactManager.prototype.getCount/allowCallback<Á                   ?       ¹                                           l=  î=  ò      	      ;    ¸   
=   Y   A¸   
Y         ]   : ]   : QÖÍÏÿÿÿìÈ ó	 	   cpmm!   sendAsyncMessage#   Contacts:GetCount   getRequestId   request   requestID   ÿÿÿÿ   a   ContactManager.prototype.getCount/cancelCallbackÁ                 #       ¹                                             reason >  h>  ø            ;    5   ¸   
      T  : Qâ4    Services   DOMRequest   fireErrorAsync   ÿÿÿÿ   ;   ContactManager.prototype.initÁ               @       ¹      #                                      aWindow   allowCallback Þ>  bB               A¸    
T  f    : Q   ¸   
A:    QA¸   
=   @V   : QÔ Ì È Ö2 )   initDOMRequestHelper	   bind   askPermission   listen                  /   Contacts:Find:Return:OK   /   Contacts:Find:Return:KO   1   Contacts:Clear:Return:OK   1   Contacts:Clear:Return:KO   -   Contact:Save:Return:OK   -   Contact:Save:Return:KO   1   Contact:Remove:Return:OK   1   Contact:Remove:Return:KO      Contact:Changed   )   Contacts:GetAll:Next   3   Contacts:GetAll:Return:KO      Contacts:Count   #   Contacts:Revision   =   Contacts:GetRevision:Return:KO                  ÿÿÿÿ   Y   ContactManager.prototype.init/allowCallback<Á                          ¹                                           ¬A  B              ;    ¸   
=   : QAC0   QÕÈ  	   cpmm!   sendAsyncMessage9   Contacts:RegisterForMessages'   hasListenPermission