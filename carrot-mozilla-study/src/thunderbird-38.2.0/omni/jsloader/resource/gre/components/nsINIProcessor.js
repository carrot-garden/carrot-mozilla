çżsš                B  7   š   1   &                         (            resource://gre/components/nsINIProcessor.js              	                                          .;   5       Q;   5      Q;   5      Q;   5      Q;   5   ¸   	
=   
: Q;   Y   ;   ¸   
=   : ]   ;   ¸   
Z  ;   5   `   : ]      ]   6   Q×   Q×   Q×    Q;   Y   ;   ¸   
Z  ;   5   `   ;   5   `  : ]   @]      a   @]      a      ]   @]    @]   !   ]   "   ]   #   ]   $   	]   %   
]   &   ]   '6   Q;   (Y   ;   ¸   
Z  ;   5   )`   : ]   @]   *>]   +   ]   ,   ]   -6   Qn   .Z  ;   `   o   .QA;   ¸   0
;   .: 6   /QĘ	Ę	  ­	  żĐĐĐĐÚAĘŃ	ČĐ(Î˙˙˙éČĐČČČ#%ĘĐ(ÎÎ˙˙˙ŘČ(Ę2Ę<ĘAGĘXĘ_ĘgĘrĘ  Đ  ŤĘĐ(Î˙˙˙éČĘĐÉĎ˙˙˙üŇÉ+    Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsm'   INIProcessorFactory   prototype   IDM   {6ec5f479-8e13-4403-b6ca-fe4c2dca14fd}   classID   XPCOMUtils   generateQI'   nsIINIParserFactory   QueryInterface   createINIParser   MODE_WRONLY   MODE_CREATE   MODE_TRUNCATE   INIProcessor   nsIINIParser%   nsIINIParserWriter   __utf8Converter   _utf8Converter%   __utf16leConverter#   _utf16leConverter%   _utfConverterReset   _iniFile   _iniData   _readFile   getSections   getKeys   getString   setString   writeFile!   stringEnumerator/   nsIUTF8StringEnumerator   _strings   _enumIndex   hasMore   getNext   component   NSGetFactory)   generateNSGetFactory   ˙˙˙˙   '   INIProcessorFactory                          š                                              Ź  ˛                     ˙˙˙˙   [   INIProcessorFactory.prototype.createINIParserÁ                        š      	                                        aINIFile   ż               ;    T  R É    INIProcessor   ˙˙˙˙      INIProcessor                 #       š                                              aFile w  Ë               AT  6    QAY   6   QA¸   
:  QĘĚĚ    _iniFile   _iniData   _readFile   ˙˙˙˙   K   INIProcessor.prototype._utf8ConverterÁ                   J       š                                 	             Ň  )             A5        ;A;   5   ¸   
;   5   : 6    QA5    =   6   QA5    ŇĘ+#É-Ń/    __utf8Converter   CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   charset   UTF-8   ˙˙˙˙   Q   INIProcessor.prototype._utf16leConverterÁ                   J       š                                 	           4    3             A5        ;A;   5   ¸   
;   5   : 6    QA5    =   6   QA5    ŇĘ5&É7Ń9 %   __utf16leConverter   CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   charset   UTF-16LE   ˙˙˙˙   S   INIProcessor.prototype._utfConverterResetÁ                          š                                             ¤  ű  <             A@6    QA@6   QČČ    __utf8Converter%   __utf16leConverter   ˙˙˙˙   A   INIProcessor.prototype._readFileÁ                      š      J                                      iniParser    G             A5    ¸   
:   D   Q>A5    5      ;   5   ¸   
;   5   : ¸   
A5    :    Q;   	¸   

V   ¸   
:  : K  Q   mW  A5   V  Y   8Q;   	¸   

V   ¸   
V  : : K  Q   1mW  A5   V  7V  V   ¸   
V  V  : 8QăQLM˙˙˙ĎQNČăQLM˙˙˙}QNČIÍ×LŃĘLĘLČN×<˙˙˙ŕĚ0  ĘŃŰ<˙˙˙ŕĚ06Ęâß"    _iniFile   exists   fileSize   CcO   @mozilla.org/xpcom/ini-parser-factory;1   getService   Ci'   nsIINIParserFactory   createINIParser   XPCOMUtils)   IterStringEnumerator   getSections   _iniData   getKeys   getString    ˙˙˙˙         section                     key                Î   7             ˙˙˙˙   Ä   C          ˙˙˙˙   E   INIProcessor.prototype.getSectionsÁ                Q       š                                            sections3  Ö  X       	      Z      QA5    K  Q   mW  V   ¸   
V  : QăQLM˙˙˙ăQNČ;   V   R ÉĎ0"ĘŕĘ    _iniData	   push!   stringEnumerator    ˙˙˙˙         section          #          /   ˙˙˙˙   ˙˙˙˙   =   INIProcessor.prototype.getKeysÁ              d       š                                           aSection	   keys ď  ż  _       	      Z      QT  A5    q   BA5    T  7K  Q   mW  V   ¸   
V  : QăQLM˙˙˙ăQNČ;   V   R ÉĘÓ0"ĘŕĘ    _iniData	   push!   stringEnumerator    ˙˙˙˙         key       0   #       &   /   ˙˙˙˙   ˙˙˙˙   A   INIProcessor.prototype.getStringÁ                 J       š                                 
             aSection	   aKey  Ú  Č  g             T  A5    q    ;   5   pT A5    T  7q    ;   5   pA5    T  7T 7ËËĎËĎ%    _iniData   Cr!   NS_ERROR_FAILURE   ˙˙˙˙   A   INIProcessor.prototype.setStringÁ               Č       š      =                                       aSection	   aKey   aValue!   isSectionIllegal   isKeyValIllegal   ˙    r       	              Q      QV   ¸    
T  :    $;   ¸   
=   ;   5   : pV  ¸    
T : D   QV  ¸    
T :    $;   ¸   
=   ;   5   : pT  A5   q    A5   T  Y   8QA5   T  7T T 8QĘĘvÎŃĘwyÎ×ŃĘz}ËĐŇ' 	   test   Components   Exception;   bad character in section name   Cr'   ERROR_ILLEGAL_VALUE5   bad character in key/value   _iniData   [\0\r\n\[\]]       [\0\r\n=]       ˙˙˙˙   A   INIProcessor.prototype.writeFileÁ            ż      š                              .             aFile   aFlags   writeLine   outputStream   converter   safeStream  ˘  	                   W   Q   QT      A5    U  Q;   5   ¸   
;   5   :   QV  ¸   
T  ;   ;   ;   	X@: Q;   5   
¸   
;   5   :    Q   ¸   
V  X  : Q   ¸   
;   5   : Q;   5   5   T E   Q=   ;   q   -   ¸   
=   ×: QA5      Q   A5      QA5   K  Q   rmW  V   =   V  =   : QA5   V  7K  Q   .mW  V   V  =   A5   V  7V  7: QăQLM˙˙˙ŇQNČăQLM˙˙˙QNČ   ¸   
:  QĘ    ĘŃĘ  Čß  ŃĘ  É×ÚŮË(×ŃĚĎ0wĘŮÔ03ĘţĐ    _iniFile   Cc]   @mozilla.org/network/safe-file-output-stream;1   createInstance   Ci'   nsIFileOutputStream	   init   MODE_WRONLY   MODE_CREATE   MODE_TRUNCATE[   @mozilla.org/network/buffered-output-stream;1/   nsIBufferedOutputStream   QueryInterface'   nsISafeOutputStream%   nsIINIParserWriter   WRITE_UTF16!   nsIWindowsRegKey   write   ˙ţ#   _utf16leConverter   _utf8Converter   _iniData   [   ]   =   finish   ˙˙˙˙      writeLine                 `       š                                 
          	   data ć  ¤               T  =    U  Q      ¸   
T  : U  QT        ¸   
:  U  Q   ¸   
T  T  Ů   : QČxÔÔ{Ű&    
%   ConvertFromUnicode   Finish   write   length    ˙˙˙˙         section                    key       4  x      k  4      *     ˙˙˙˙   a  @          ˙˙˙˙   !   stringEnumerator                        š                                               stringArray '  Y  ­             AT  6    QĘ    _strings   ˙˙˙˙   E   stringEnumerator.prototype.hasMoreÁ                          š                                              F  ś             A5    A5   Ů   Ó0    _enumIndex   _strings   length   ˙˙˙˙   E   stringEnumerator.prototype.getNextÁ                          š                                            _    ş             A5    A5   #?
6   Q7Ü(    _strings   _enumIndex