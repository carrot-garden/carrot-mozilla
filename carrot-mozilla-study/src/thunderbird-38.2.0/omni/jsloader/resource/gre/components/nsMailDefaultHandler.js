ç¿s¹                Ò  _   ¹   -   W      	                   J            resource://gre/components/nsMailDefaultHandler.js     D         	             	   
                                                 +;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   5      Q;    5   5   	   	Q;    5   5   
   
Q;    5   5      Q;    5   5      Q;    5   5      Q;    5   5      Q;    5   5      Q;    5   5      Q;    5   5      Q;    5   5      Q;    5   5   5      Qn   Y   ;   ¸   
Z  ;   
`   ;   `  ;   `  : ]      ]      ]   =   ]      ]      ]   o   Q;    Y   =   "]   #;    ¸   $
=   %: ]   &=   ']   (;   ¸   
Z  ;    5   5   )`   : ]   ;   ]   *6   !Q;   ¸   ,
Z  ;    `   :    +QÊ	8	J	R	  Ê Ñ	 ÝÚ>Ú?ÚAÚ?ÕÕÕÕÕÕ
Õ
Õ
ÕÕÕÚ68HJPR  ÊÐ'É)É)É  È  Ê ¤Ê ÀÊ ÅÊ ÌÐ   Ñ+ÊÊÑ	ÈÊÐ'ÓÿÿÿéÈÐÐ0ÉÿÿÿßÉÿÿÿý    Components   utils   importE   resource://gre/modules/NetUtil.jsmG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsmG   resource:///modules/mailServices.js   nsISupports   interfaces   nsICommandLine+   nsICommandLineHandler/   nsICommandLineValidator   nsIDOMWindow   nsIFactory   nsIFileURL   nsINetUtil#   nsISupportsString   nsIURILoader   NS_ERROR_ABORT   results;   URI_INHERITS_SECURITY_CONTEXT%   nsIProtocolHandler)   nsMailDefaultHandler   XPCOMUtils   generateQI   QueryInterface   handle   validateÅ     -options           Open the options dialog.
  -file              Open the specified email file.
   helpInfo   createInstance   lockFactory;   mailDefaultCommandLineHandler   prototypeA   Mail default commandline handler!   classDescription   IDM   {44346520-c5d2-44e5-a1ec-034e04d7fac4}   classID/   @mozilla.org/mail/clh;1   contractID   nsIModule   _xpcom_factory   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ   %   resolveURIInternal              Î       ¹   
   =                                     aCmdLine   aArgument   uri  ½  Å               T  ¸    
T : W   QV   ;   r    
V   V   5   ¸   
:     
V      1  Qv  Q;   5   ¸   
V  : QÈ    ;   5   ¸   	
T >: W   Q   1  Qv  Q;   5   ¸   
V  : QÈ    V   ÍÈË#ÐÊ'Ìà.ÕÍ1Ìà5    resolveURI   nsIFileURL	   file   exists   Components   utils   reportError   Services   uriFixup   createFixupURI    ÿÿÿÿ         e        ÿÿÿÿ         e         z   "        +   "       N   %   ÿÿÿÿ      %   ÿÿÿÿ   ÿÿÿÿ   '   handleIndexerResult                      ¹      &                                        aFile   msgHdr ã  T
  8             ;    5   ¸   
=   : Q;   ¸   
:  Q;    5   ¸   
=   : Q;   ¸   
T  :    QV      ;   ¸   	
V   : Q   ;    5   
5   p:Ú<Ð@ÚÏ	ÈDÙGÐ*    Components   utils   importA   resource:///modules/MailUtils.js   MailUtils   discoverFoldersQ   resource:///modules/SearchIntegration.js#   SearchIntegration   handleResult   displayMessage   results!   NS_ERROR_FAILURE   ÿÿÿÿ      mayOpenURI               E       ¹                                              uri   ext i
  7  J             ;    5   5   ¸   
;    5   5   : W   QV   ¸   
T  5   : ÖÏLÈOÓ"    Components   classese   @mozilla.org/uriloader/external-protocol-service;1   getService   interfaces5   nsIExternalProtocolService#   isExposedProtocol   scheme   ÿÿÿÿ      openURI               i      ¹      y                          %             uri   channel   loader   loadgroup   loadlistener   listener I  V  R             ;    â    T  :     ;   5   5   p;   5   ¸   
T  : W   Q;   5   5   ¸   	
;   5   
5   : W  Q;   5   5   ¸   
;   5   
5   :    QY       ]      ]   ;   ¸   
Z  ;   5   
5   `   ;   5   
5   `  : ]   W  Q   V  6   QY      ]      ]      ]      ]   @]   @]      ]   W  QV  ¸   
V   CV  : QÍÐWÔ
ÈÖÏXÈ^ÖÏ^ÉaÊfÊjÐ'Ó+ÓjÍnÏpÊÊxÊ}ÊÏ  Ø(    mayOpenURI   Components   results!   NS_ERROR_FAILURE   Services   io#   newChannelFromURI   classes1   @mozilla.org/uriloader;1   getService   interfaces   nsIURILoaderC   @mozilla.org/network/load-group;1   createInstance   nsILoadGroup   onStartRequest   onStopRequest   XPCOMUtils   generateQI%   nsIRequestObserver1   nsISupportsWeakReference   QueryInterface   groupObserver   onStartURIOpen   doContent   isPreferred!   canHandleContent   loadCookie+   parentContentListener   getInterface   openURI   ÿÿÿÿ      ll_start                        ¹                                              aRequest   aContext    à  b             ;    5   ¸   
:  QÕ6    Services   startupE   enterLastWindowClosingSurvivalArea   ÿÿÿÿ      ll_stop                        ¹                                              aRequest   aContext   aStatusCode     k  f             ;    5   ¸   
:  QÕ5    Services   startupC   exitLastWindowClosingSurvivalArea   ÿÿÿÿ   ?   openURI/listener.onStartURIOpenÁ                        ¹                                                uri     q             B$    ÿÿÿÿ   5   openURI/listener.doContentÁ               H       ¹                                 
             ctype   preferred   request   handler   newHandler    ¯    r             ;    5   5   ¸   
;    5   5   : W   QV   ¸   
=   AT : QC
ÖÏsÈuØ    Components   classes   @mozilla.org/uriloader/content-handler;1?type=application/x-message-display   createInstance   interfaces#   nsIContentHandler   handleContent;   application/x-message-display   ÿÿÿÿ   9   openURI/listener.isPreferredÁ                        ¹                                               ctype   desired  -    x             T  =       CBÉ    message/rfc822   ÿÿÿÿ   C   openURI/listener.canHandleContentÁ                        ¹                                                ctype   preferred   desired   ³  à  }             B<    ÿÿÿÿ   ;   openURI/listener.getInterfaceÁ                 [       ¹                                              iid 3  $               T  ¸    
;   5   5   :    AT  ¸    
;   5   5   :       ;   5   5   pÙ
Ù
Ð/    equals   Components   interfaces+   nsIURIContentListener   nsILoadGroup   results+   NS_ERROR_NO_INTERFACE   ÿÿÿÿ      mdh_handle              #      ¹                            &            cmdLine   uri   remoteCommand   a   remoteVerb   remoteParams	   xuri   win   argstring   chromeParam   features   netutil   count   i   curarg   testarg   wlist   window l  S<               V   QT  ¸    
=   C: W  Q     Qv  Q;   pÈ    V  @  v     ¸   
V  : W  QV  ?7¸   
:  W  QV  ×7¸   
=   : W  QV  x=   y   =   y   C=   	y   nz  ±T  ¸   

V  >7: W  Q;   â   V  : Q  T  ¸   

=   V  >7: W  Q;   â   V  : Q  ]V  >7¸   
:  x=   y   =   y   z  ;   5   ¸   
=   : W  QV     V  ¸   
:  Q   Q;   5   5   ¸   
;   : W  Q;   5   ¸   
@=   =   =   V  : Q   ;   5   5   ¸   
;   : W  QV  ¸   
:  QV  V  ¸    
=   : 6   Q;   5   ¸   
@=   !=   =   V  : Q   ;   5   "5   p   ;   5   "5   pT  C6   #Q   :  Qv  Q;   $â   $V  : Q;   5   "5   pÈ    T  ¸    
=   %B: W  QV     í=   W  	Q;   5   5   ¸   
;   : W  Q;   &â   &T  V  : W   Q;   5   5   '¸   (
;   ): W  
QV  
¸   *
V   ;   +:     <;   5   ¸   
@V   5   ,=   =   V  : QT  C6   #Q   *  Qv  Q;   $â   $V  : QÈ    T  ¸   -
=   .B:    T  C6   #QT  ¸   -
=   /B:    x  Q  Q;   5   0¸   1
=   2:   Q=   3V     =   4   
=   5  Q;   5   ¸   
@=   6=   V  @: QÈT  ¸    
=   7B: W   QT  Ù   8W  QV    >W  Q   dmT  ¸   9
V  : W  QV  ¸   :
=   ;:     
   ?;   $â   $=   <V  =   =: QV  ×W  QãV  V  ÿÿÿV  V     T  ¸   9
V  : W   QV   ¸   :
=   :    i   MmT  ¸   9
V  : W  QV  ¸   :
=   ;:    
   0V   =   >V  W   QãV  #?W  V  ÿÿÿ¦V    E   QT  5   #   V    E   QT  5   ?;   @5   A   ;   5   ¸   B
=   : W  QV  ¸   C
:     8V  ¸   D
:  ¸   E
;   F: W  QV  ¸   
:  Q   *  Qv  Q;   $â   $V  : QÈ    V     PV   ¸   
:  ¸   :
=   G:    \;   5   5   H¸   (
;   5   I5   J: ¸   K
V   @@: Q     Qv  QÈ      ÒV   ¸   
:  ¸   L
=   M: D   #QV   ¸   
:  ¸   L
=   N:    3;   Oâ   OT  ¸   P
V   : : QT  C6   #Q  _V   ¸   
:  ¸   L
=   Q:   Ç  QT  ¸   P
V   :   QV  ¸   R
:  E   QV  5   S>     Q;   5   T¸   U
V  : ¸   E
;   5   I5   V:   QV  =   X6   WQ;   5   ¸   
@=   Y=   =   ZV  : QT  C6   #QÈ   ý  Q  Q  Q;   5   [¸   \
=   ]:   Q  Q  QV  ¸   R
:      LV  ¸   ^
=   _: W  QV  ¸   `
=   aZ  V  5   b`   ?: W  Q   GV  ¸   ^
=   c: W  QV  ¸   `
=   dZ  V  5   b`   ?: W  Q;   5   e¸   f
@V  V  : QÈÈ  {V   ¸   
:  ¸   L
=   g:    d  QT  ¸   P
V   :   QV  ¸   R
:  E   QV  5   S>   ;   h¸   i
V     
: QÈ  ú  Q  Q  Q  Q  Q;   5   5   j¸   
;   5   I5   k:   Q;   5   5   l¸   
;   5   I5   m:   Q;   5   5   n¸   
;   5   I5   o:   Q;   5   5   p¸   
;   5   I5   q:   Q;   5   T¸   r
=   7: ¸   E
;   5   I5   s:   QV  ¸   t
;   uâ   uV   : : QV  V  ¸   w
V  : 6   vQV  ¸   x
V  : QV  ;   5   I5   z5   {6   yQV  ;   5   I5   }5   ~6   |QV  V  6   Q;   5   ¸   
@V  : Q   7  Qv  Q;   â   T  ¸   

V   : : QÈ    È   Q;   5   5   ¸   
;   : W  Q;   5   ¸   
@=   =   =   V  : Q
ÐÍÌÍ 7ÐÈÍÈÓÈl àu
  ªu
  ¯uÊ  ¥ÐÈ
ÒXÖÈ
ÒXÍk 3u
  ÁuÊ  ²ÖÈÔÖ  ºÈÜÉ  ¼XÖ  ÂÈÏÔÉ×Î  ÆXÐX
ÐÏÌÒ×ÐÈ  ¾ÊÖ  äÈÑÈÖ  çÈÔ
àÉ  ë

ÏÌÙÐÊÐÑ
Ñ  ûÈ

ÚÒÊ   ÐÈÍ
(o Î	ÈÐHÞ~ Ð ÉÎÈÐ(_ Î
ÈÐHÎx × )ÓÞeÖÈËË	×
Ï
ÌÙ KË
ÒW:
ÖÏ =
Ê =
ÉØËã)Ò.ØÿÿÿìÏËÒ ÂËÎÈËÔ  ËÕ
ÊÏ OÈ
Ï
ÒÊ S

ÐÒÖ	ÈËGÐÈÔ:ÎÿÿÿÐÍÐÈÔ7ÎÿÿÿÓÈ
åËÒ_ËÎÈËÔ
ß ~ÞÖÏ ÈÖÏ ÈÖÏ ÈÖÏ ÈÖÊÏ È  ´
Ùÿÿÿé
ÓÉ
Ó
Þ
Þ
Î
ßÌ
ØÿÿÿøÑ
Ö ÈÜÉ @ '   handleFlagWithParam   remote   NS_ERROR_ABORT	   exec   toLowerCase   split   ,   openurl   mailto   xfedocommand   resolveURI   openURI   mailto:   openinbox   composemessage   Services   wm'   getMostRecentWindow   mail:3pane   focus   Components   classes=   @mozilla.org/supports-string;1   createInstance#   nsISupportsString   ww   openWindow7   chrome://messenger/content/   _blank)   chrome,dialog=no,all   shift	   data	   join   chrome://messenger/content/messengercompose/messengercompose.xul   results   preventDefault	   dump   chrome%   resolveURIInternal7   @mozilla.org/network/util;1   getService   nsINetUtil!   URIChainHasFlags;   URI_INHERITS_SECURITY_CONTEXT	   spec   handleFlag   silent   options   prefs   getBoolPrefA   browser.preferences.instantApply/   chrome,titlebar,toolbar   ,dialog=no   ,modalm   chrome://messenger/content/preferences/preferences.xul	   file   length   getArgument   startsWith   -Q   Warning: unrecognized command line flag    
       state   nsICommandLine)   STATE_INITIAL_LAUNCH   getEnumerator   hasMoreElements   getNext   QueryInterface   nsIDOMWindow   feed:O   @mozilla.org/newsblog-feed-downloader;1   interfaces3   nsINewsBlogFeedDownloader   subscribeToFeed   endsWith   .mozeml   .wdseml'   handleIndexerResult   resolveFile	   .eml   exists   fileSize   io   newFileURI   nsIFileURL   queryG   ?type=application/x-message-displayY   chrome://messenger/content/messageWindow.xulG   all,chrome,dialog=no,status,toolbar   strings   createBundle]   chrome://messenger/locale/messenger.properties#   GetStringFromName#   fileNotFoundTitle)   formatStringFromName   fileNotFoundMsg	   path   fileEmptyTitle   fileEmptyMsg   prompt   alert	   .vcf   NetUtil   asyncFetch[   @mozilla.org/messengercompose/composeparams;1'   nsIMsgComposeParams[   @mozilla.org/messengercompose/composefields;1!   nsIMsgCompFieldsU   @mozilla.org/messengercompose/attachment;1!   nsIMsgAttachment3   @mozilla.org/file/local;1   nsILocalFile%   getProtocolHandler-   nsIFileProtocolHandler   initWithPath   unescape   url%   getURLSpecFromFile   addAttachment	   type   nsIMsgCompType   New   format!   nsIMsgCompFormat   Default   composeFields   MailServices   compose7   OpenComposeWindowWithParams    ÿÿÿÿ         e        ÿÿÿÿ         e        ÿÿÿÿ         e        ÿÿÿÿ         instantApply       features        ÿÿÿÿ         e        ÿÿÿÿ         e        ÿÿÿÿ      	   file                    fileURL                    bundle       title       message        ÿÿÿÿ      	   file       	         mdh_handle/<Á                      ¹      <                                        inputStream   status	   data	   card   2  ¿4  m      
      ;    ¸   
T :     ;   ¸   
T  T  ¸   
:  :    Q;   5   ¸   
V   :   Q;   5   	¸   

@=   =   =   V  : QÏÌÍ rÈÕÈÑ u z    Components   isSuccessCode   NetUtil/   readInputStreamToString   available   MailServices   ab)   escapedVCardToAbCard   Services   ww   openWindowu   chrome://messenger/content/addressbook/abNewCardDialog.xul   _blank_   chrome,resizable=no,titlebar,modal,centerscreen    ÿÿÿÿ         msgParams       composeFields       attachment       localFile       fileHandler                    e    3   ^\s*(\w+)\(([^\)]*)\)\s*$         æ
  ¸        ®  >        ô  i       W  _       §  o        Ú  Â        H   ;                 $      ÿÿÿÿ     .   ÿÿÿÿ        ÿÿÿÿ   ý  q   ÿÿÿÿ   ^     ÿÿÿÿ   í     ÿÿÿÿ     ¼  ÿÿÿÿ   Ú  ~         `  õ      	   ~	  Y   ÿÿÿÿ   á	  ð  ÿÿÿÿ     +   
      ÿÿÿÿ      mdh_validate               D      ¹   	   T                                       cmdLine   osintFlagIdx   mailFlagIdx   composeFlagIdx   actionFlagIdx   param <  º@  ¤      
      T  ¸    
=   B: W   QV   ×ÿ   T  ¸    
=   B: W  QT  ¸    
=   B: W  QV  ×ÿE   QV  ×ÿ   V  ×ÿE   QV  ×ÿ   *V  V     V     	V  W  Q   #V  ×ÿ   V     	V  W  QV  E   QV   ×ÿ   eT  ¸   
V  ?: W  QT  Ù   V  ×D   Q     ¸   
V  :    ;   pT  ¸   
=   B: QÐÈÐÈÐÈÔÔ%
É	Ü	×Ñ
ÐÈÖÐ
Ô"    findFlag   osint	   mail   compose   getArgument   length	   test   NS_ERROR_ABORT   handleFlag=   thunderbird.url.(mailto|news):       ÿÿÿÿ      mdh_CI                 *       ¹                                              outer   iid  {A  B  Å            T  @   ;    5   5   pA¸   
T : ÐË    Components   results/   NS_ERROR_NO_AGGREGATION   QueryInterface   ÿÿÿÿ      mdh_lock                        ¹                                             	   lock &B  BB  Ì             )    ÿÿÿÿ   ;   mailDefaultCommandLineHandler                          ¹                                              mB  rB  Ñ             * 