çżsš                Ĺ     š   *   Í                          &       0     resource://gre/modules/PhoneNumberUtils.jsm     >                                  Af    0    QB   Q;   5      Q;   5      Q;   5      Q;   ¸   	
=   
: Q;   ¸   	
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : QAY      ]   =   ]      ]      ]      ]      ]      ]      ]      	]      
]   0   Qn   ;   5   ¸    
;   5   !: 5   ";   5   !5   #1   Q;      P;   ¸   
A=   $=   %: Q;   ¸   &
A=   '=   (=   ): Q;   ¸   
:  QĘ	  Ě-JĐĐĐŐ1Ő3ŇVŇRĘ"Ę$Ę;Ę\ĘbĘfĘlĘrĘ  Đ  ŕČÖ  Ň  ˘Ň  ¤Đ !   EXPORTED_SYMBOLS   DEBUG   Cu   Components   utils   Cc   classes   Ci   interfaces   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter+   PhoneNumberNormalizera   resource://gre/modules/PhoneNumberNormalizer.jsm#   MCC_ISO3166_TABLEY   resource://gre/modules/mcc_iso3166_table.jsm!   PhoneNumberUtils	   init   724	   _mcc   getCountryName   parse   parseWithMCC)   parseWithCountryName%   isPlainPhoneNumber   normalize   fuzzyMatch   receiveMessage   inParent7   @mozilla.org/xre/app-info;1   getService   nsIXULRuntime   processType)   PROCESS_TYPE_DEFAULT   PhoneNumberM   resource://gre/modules/PhoneNumber.jsm/   defineLazyServiceGetter	   ppmmU   @mozilla.org/parentprocessmessagemanager;13   nsIMessageListenerManager                  !   PhoneNumberUtils                  ˙˙˙˙      debug                 (       š                                             s Ţ     	             ;       ";   â   =   T  =   : QÝ*    DEBUG	   dump-   -*- PhoneNumberutils:    
   ˙˙˙˙   5   this.PhoneNumberUtils.initÁ                          š                                          §  ő               ;    ¸   
f    A: QÖA 	   ppmm%   addMessageListener                  ;   PhoneNumberService:FuzzyMatch                  ˙˙˙˙      getCountryName                ¤       š   
   0                        
             mcc   countryName+    $                Q  QV       <;    5   ¸   
=   : W   Q     Qv  QČ    V       A5   W   Q;   V   7W  Q;      (;   â   =   V   =   	V  : QV  +ÖÍÓ1Ë6Ďă    Services   prefs   getCharPref'   ril.lastKnownSimMcc	   _mcc#   MCC_ISO3166_TABLE   DEBUG   debug   MCC:    countryName:     ˙˙˙˙         e            #       ;      ˙˙˙˙   ˙˙˙˙   7   this.PhoneNumberUtils.parseÁ              L      š   !                            4            aNumber   result ˛  ×  ;             ;       ;   â   =   T  : Q;   ¸   
T  A¸   
:  :    QV     â  Q  QV   5   D   QA¸   
:    Q@  QV     ˝;   5   ¸   	
=   
V  : ;   5   5        Q;   5   ¸   
=   
V  :   QV     WV   5   D   QV   5   W  QV  E   QV  Ů   V     V  ¸   
V  ": W  QČ;   ¸   
V   =   Y   V  ]   C]   : Q;       ł;   â   =   V   5   : Q;   â   =   V   5   : Q;   â   =   V   5   : Q;   â   =   V   5   : Q;   â   =   V   5   : Q;   â   =   V   5   : QČ   ";       ;   â   =    : QV   ××$˙˙˙ĺČ? ÝŃ
×$Č
ŰÓËŰČÝŘË˙˙˙óÉMÚ:É˙˙˙ˇÝÝÝÝÝăVÓY    DEBUG   debug   call parse:    PhoneNumber   Parse   getCountryName   countryName   Services   prefs   getPrefTypeE   dom.phonenumber.substringmatching.   Ci   nsIPrefBranch   PREF_INT   getIntPref'   internationalNumber   nationalNumber   length   slice   Object   defineProperty-   nationalMatchingFormat   value   enumerable+   InternationalFormat: '   internationalFormat+   InternationalNumber: !   NationalNumber: !   NationalFormat:    nationalFormat   CountryName: 1   NationalMatchingFormat: %   NO PARSING RESULT!    ˙˙˙˙         countryName       number                     val        N   Ö  ˙˙˙˙   ş             ˙˙˙˙   E   this.PhoneNumberUtils.parseWithMCCÁ               H       š                                             aNumber	   aMCC   countryName  ň  Ś  \             ;    T 7   Q;      ;   â   =   V   : Q;   ¸   
T  V   : ÎŘÓ( #   MCC_ISO3166_TABLE   DEBUG   debug)   found country name:    PhoneNumber   Parse   ˙˙˙˙   U   this.PhoneNumberUtils.parseWithCountryNameÁ                        š      	                                       aNumber   countryName  É    b             ;    ¸   
T  T : Ň(    PhoneNumber   Parse   ˙˙˙˙   %   isPlainPhoneNumber               I       š                                             aNumber   isPlain M  Ý  f             ;    ¸   
T  : W   Q;      ';   â   =   T  =   V   : QV   Ď
Čâ    PhoneNumber   IsPlain   DEBUG   debug   isPlain(   )    ˙˙˙˙      Normalize               V       š                                             aNumber   aNumbersOnly   normalized  ˙  Ů  l             ;    ¸   
T  T :    Q;      1;   â   =   T  =   V   =   T : QV   ŇČě +   PhoneNumberNormalizer   Normalize   DEBUG   debug   normalize(   ):    ,    ˙˙˙˙      fuzzyMatch              ¸      š      m                         $            aNumber1   aNumber2   normalized1   normalized2   parsed1   parsed2   countryName   ssPref  ý    r             A¸    
T  :    QA¸    
T :   Q;      (;   â   =   V   =   V  : QV   V  H   CA¸   
T  :   QA¸   
T :   QV  E   
QV     VV  5   E   QV  5   V  5   HD   (QV  5   E   QV  5   V  5   H   CA¸   
:    Q=   	V    Q;   
5   ¸   
V  : ;   5   5        Q;   
5   ¸   
V  :   QV   Ů   V  E   AQV  Ů   V  E   -QV   ¸   
V  ": V  ¸   
V  ": H   	CČČBËČËČăÉyË
ČË
ČÎčâČČĎŐÓË
ŐČčË˙˙˙îÎ.˙˙˙î    normalize   DEBUG   debug)   Normalized Number1:    , Number2:    parse'   internationalNumber   nationalNumber   getCountryNameE   dom.phonenumber.substringmatching.   Services   prefs   getPrefType   Ci   nsIPrefBranch   PREF_INT   getIntPref   length   slice    ˙˙˙˙         val        :  {   ˙˙˙˙˙˙˙˙ł            ˙˙˙˙   I   this.PhoneNumberUtils.receiveMessageÁ               ×       š      ?                                       aMessage   mm   msg +  $               ;       !;   â   =   T  5   : QT  5      QT  5     QT  5   x=   y   
z   ]V   ¸   
=   Y   V  5   	]   	A¸   

V  5   5   V  5   5   : ]   : Q   +;       !;   â   =   T  5   : QÜÍÍČh  uĘŐ
Î
äČ  XÜ    DEBUG   debug   receiveMessage 	   name   target	   data;   PhoneNumberService:FuzzyMatch!   sendAsyncMessageO   PhoneNumberService:FuzzyMatch:Return:OK   requestID   fuzzyMatch   options   number1   number2   result)   WRONG MESSAGE NAME: 