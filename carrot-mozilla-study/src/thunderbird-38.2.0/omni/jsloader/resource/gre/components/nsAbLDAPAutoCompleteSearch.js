ç¿s¹                ¡     ¹   =   ?                         5            resource://gre/components/nsAbLDAPAutoCompleteSearch.js     Û*         	             	   
       
   ;;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   5      Q;    5   5   	   	Q;    5   5   
   
Q;   Y   @]   =   ]   @]   ;   5   ]   ×ÿ]   @]      a      ]      ]      ]      ]      ]      ]      ]      	]   ;   ¸   
Z  ;   `   ;   	`  : ]    6   Q;   !Y   ;    ¸   "
=   #: ]   $@]   %@]   &@]   '×ÿ]   (@]   )@]   *@]   +;   ,5   -]   .;   /f   R ]   0   ]   1   ]   2   ]   3   ]   4   ]   5   ]   6   ]   7;   ¸   
Z  ;    5   5   8`   ;    5   5   9`  ;    5   5   :`  : ]    6   Q;   ¸   <
Z  ;   !`   :    ;Q
Ê	P	 EÚ?Ú?ÚA
ÕÕÕ'ÊÊ Ï%Ê)Ê-Ê1Ê5Ê:Ê>ÊBÊGÊMÐ'ÉÉÿÿÿäÎPTVÊXÑ	È_fhjÏlËÈpÊxÊ  Ê  ¨Ê Ê Ê *Ê <Ð'Ó)Ó)Ó <Î AÐ0ÉÿÿÿßÉÿÿÿý    Components   utils   importG   resource:///modules/mailServices.jsG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   ACR   interfaces+   nsIAutoCompleteResult/   nsIAbAutoCompleteResultC   nsIAbDirectoryQueryResultListener5   nsAbLDAPAutoCompleteResult   prototype   _searchResults      _commentColumn   searchString   RESULT_NOMATCH   searchResult   defaultIndex!   errorDescription   matchCount   getLabelAt   getValueAt   getCommentAt   getStyleAt   getImageAt/   getFinalCompleteValueAt   removeValueAt   getCardAt   XPCOMUtils   generateQI   QueryInterface5   nsAbLDAPAutoCompleteSearch   IDI   227e6482-fe9f-441f-9b7d-7b60375e7449   classID   _query   _book   _attributes   _context   _timer   _result   _listener   MailServices   headerParser   _parser   Set#   applicableHeaders   _checkDuplicate   _addToResult   observe   startSearch   stopSearch!   onSearchFinished#   onSearchFoundCard   nsIObserver+   nsIAutoCompleteSearch-   nsIAbDirSearchListener   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ   5   nsAbLDAPAutoCompleteResult                        ¹                                               aSearchString n                 AZ   6    QAT  6   QËÊ"    _searchResults   searchString   ÿÿÿÿ   _   nsAbLDAPAutoCompleteResult.prototype.matchCountÁ                          ¹                                              :  %             A5    Ù   Ì"    _searchResults   length   ÿÿÿÿ      getLabelAt                        ¹      	                                        aIndex ^    )             A¸    
T  : Ë    getValueAt   ÿÿÿÿ      getValueAt                        ¹                                              aIndex ´  ð  -             A5    T  75   Ð)    _searchResults   value   ÿÿÿÿ      getCommentAt                        ¹                                              aIndex   F  1             A5        _commentColumn   ÿÿÿÿ      getStyleAt                 '       ¹                                              aIndex j    5             A5    ;   5      =      
=   Ñ
ÏD    searchResult   ACR   RESULT_FAILURE   remote-err   remote-abook   ÿÿÿÿ      getImageAt                        ¹                                               aIndex %  B  :             =    
       ÿÿÿÿ   y   nsAbLDAPAutoCompleteResult.prototype.getFinalCompleteValueAtÁ                        ¹      	                                        aIndex h    >             A¸    
T  : Ë    getValueAt   ÿÿÿÿ      removeValueAt                        ¹                                                aRowIndex   aRemoveFromDB  Ä  ä  B              C    ÿÿÿÿ      getCardAt                        ¹                                              aIndex $  _  G             A5    T  75   Ð(    _searchResults	   card   ÿÿÿÿ   5   nsAbLDAPAutoCompleteSearch                   L       ¹                                            â  «	  P             ;    5   ¸   
A=   B: QA;   5   5   ¸   
;   5   	5   
: 6   QÜ×ÏRÉJ    Services   obs   addObserver!   quit-application   _timer   Components   classes)   @mozilla.org/timer;1   createInstance   interfaces   nsITimer                     addr_to      addr_cc      addr_bcc      addr_reply                  ÿÿÿÿ      _checkDuplicate                /       ¹                                          	   card   emailAddress   lcEmailAddress    ó  p             T ¸    
:     QA5   5   ¸   
    : ÊÉs×u #   toLocaleLowerCase   _result   _searchResults	   some   ÿÿÿÿ   #   _checkDuplicate/<Á                        ¹      
                                        result   í  s             T  5    ¸   
:     ÏÊ3    value#   toLocaleLowerCase   ÿÿÿÿ   c   nsAbLDAPAutoCompleteSearch.prototype._addToResultÁ                   ¹      c                                    	   card   insertPosition	   mbox   emailAddress   _  x             A5    ¸   
T  5   T  5      /T  ¸   
=   =   : D   QT  5      T  5   :   QV  5       V  ¸   	
:    QA¸   

T  V  :    >W   Q   mV   #?W   QãV   A5   5   Ù   E    QV  A5   5   V   75   ÿÿÿ¼A5   5   ¸   
V   >Y   V  ]   T  ]   : QÕÈ*ÙÖÈyÈ|ÊËÈÏ(IÍ  ÝßÜÉÈ      _parser#   makeMailboxObject   displayName   isMailList   getProperty   Notes      primaryEmail   email   toString   _checkDuplicate   _result   _searchResults   length   value   splice	   card    ¤   I      ÿÿÿÿ      observer                 l       ¹   
   )                                        subject   topic	   data     5               T =       %;   5   ¸   
A=    : Q   T =      A¸   
:  QA@6   QA×ÿ6   QA@6   QA@6   	QÉ àÉ  ÌÈÉÈÈ !   quit-application   Services   obs   removeObserver   timer-callback   stopSearch   _book   _context   _query   _attributes   ÿÿÿÿ      startSearch            k      ¹   M   P                                    aSearchString   aParam   aPreviousResult   aListener   acDirURI   identity	   args   filterTemplate   ldapSvc   filter   params   applicable    w  ¬#  ¨             ;    ¸   
T :   QV  5    D   QA5   ¸   
V  5   :   QA;   T  R 6   QT  ¸   
:  U  QV   D   "QT   D   QT  ¸   
=   	:    2A5   ;   5   6   
QT ¸   
AA5   : Q@W   QV  QV  5      Z;   5   ¸   
V  5   : W  Q   2  Qv  Q;   5   ¸   
=   : QÈ    V  E   QV  5      V  5   W   Q   A;   5   ¸   
=   :    #;   5   ¸   
=   : W   QV       T ¸   
AA5   : QA¸   
:  Q=   V   W   QA5     D   QA5    5   !V     A;   5   #5   $¸   %
;   5   &5   ': 6   "QA;   5   (¸   )
V   : ¸   *
;   5   &5   +: 6    QA;   5   #5   -¸   %
;   5   &5   .: 6   ,QA5   ,¸   /
=   0A5    5   1¸   2
=   0Y   : C: QA5   ,¸   /
=   3A5    5   1¸   2
=   3Y   : C: QA5   A5    5   56   4QAT 6   6QA5   7¸   8
AXê`;   5   &5   95   :: Q;   5   #5   ;¸   %
;   5   &5   <: W  QA5    ¸   =
=   >=   ?: W  QV      =   @W  Q;   5   #5   A¸   B
;   5   &5   C: W  QV  ¸   D
X V  =   ?=   ?=   ?T  : W  QV      ;   E=   FR pV  A5   ,6   GQV  C6   HQV  V  6   IQAA5   "¸   K
A5    V  AA5    5   L>: 6   JQÏ	ÈæÈÊÉÊ  µËÙÖÕ  ½É#ÚÍÌá  ËÓÓÖ
ÖÈÕÌÏÝÖÏ  ßÉÖÊÏ  áÉÖÏ  æÉÒÜ  èÒÜ  ê×ÊéÖÏ  óÈ×ÈÊÖÏ  ýÈä	ÈËÐËÎäÉC 	   JSON   parse	   type#   applicableHeaders   has   _result5   nsAbLDAPAutoCompleteResult#   toLocaleLowerCase   contains   ,   searchResult   ACR   RESULT_IGNORED   onSearchResult   idKey   MailServices   accounts   getIdentity   Components   utils   reportError   Couldn't get specified identity, falling back to global settings%   overrideGlobalPref   directoryServer   Services   prefs   getBoolPrefA   ldap_2.autoComplete.useDirectory   getCharPrefG   ldap_2.autoComplete.directoryServer   stopSearch-   moz-abldapdirectory://   _book   URI   _query   classes_   @mozilla.org/addressbook/ldap-directory-query;1   createInstance   interfaces'   nsIAbDirectoryQuery   ab   getDirectory   QueryInterface%   nsIAbLDAPDirectory   _attributes[   @mozilla.org/addressbook/ldap-attribute-map;1+   nsIAbLDAPAttributeMap!   setAttributeList   DisplayName   attributeMap!   getAttributeList   PrimaryEmail   _commentColumn   dirName   _listener   _timer	   init   nsITimer   TYPE_ONE_SHOTi   @mozilla.org/addressbook/directory/query-arguments;19   nsIAbDirectoryQueryArguments   getStringValue7   autoComplete.filterTemplate   _   (|(cn=%v1*%v2-*)(mail=%v1*%v2-*)(sn=%v1*%v2-*))G   @mozilla.org/network/ldap-service;1   getService   nsILDAPService   createFilter   Error   Filter string is empty, check if filterTemplate variable is valid in prefs.js.   typeSpecificArg'   querySubDirectories   filter   _context   doQuery   maxHits    ÿÿÿÿ         ex         Ü   '         &   ÿÿÿÿ   ÿÿÿÿ      stopSearch                   +       ¹                                            Ð#  A$              A5       $A5   ¸   
A5   : QA@6    Q×È    _listener   _query   stopQuery   _context   ÿÿÿÿ   !   onSearchFinished                 Ë       ¹      8                                        aResult   aErrorMsg  $  N'              A5        T  ;   5      XA5   5      -A5   ;   5   6   QA5   >6   Q   A5   ;   5   	6   Q   ;T  ;   5   
   (A5   ;   5   6   QA5   >6   QA5    ¸   
AA5   : QA@6    QÎSË(ÖÒÛÎÖÍØÈ    _listenerC   nsIAbDirectoryQueryResultListener'   queryResultComplete   _result   matchCount   searchResult   ACR   RESULT_SUCCESS   defaultIndex   RESULT_NOMATCH!   queryResultError   RESULT_FAILURE   onSearchResult   ÿÿÿÿ   #   onSearchFoundCard                        ¹                                              aCard '  )  *            A5        A¸   
T  : QÏ    _listener   _addToResult