ç¿s¹                f  2   ¹   "   &                         3       0     resource://gre/modules/devtools/gcli/settings.js                                        	            n    Y   1    Qn   ;   â   =   : 5   1   Qn   ;   â   =   : 5   1   Qn   ;   â   =   : 5   1   Qn   ;   ¸   
=   Y   : 5   1   Qn   	;   ¸   
=   
Y   : 5   	1   	Q;   ¸   
;    =       : Q;   ¸   
;    =      : Qn   ;   â   =   : 1   Qn   =   1   Q;   5      0   Q;   5      0   Q;   5      0   Q;   5      0   Q;   5      0   Q;   ;   0   Q;   5      	0   Q;   ¸   
;   5   =   Y      
]   C]   : Q;   ¸   
;   5   =    Y      ]      ]   !C]   : Q',Ê1	  ¯	ÐÔÎÿÿÿýÔÎÿÿÿýÔÎÿÿÿýÛÎÿÿÿýÛÎÿÿÿýß "ß%'ÔÉÿÿÿý,Ð1CIÕY_ÕioÕ  Õ  ¡  ¦ÕÐ  ¯  Å  ÊÕ  ÒàÊ  â  Ò  ã  èàÊ  Ê   è     imports   Cc   require   chrome   Ci   Cu   XPCOMUtils   importK   resource://gre/modules/XPCOMUtils.jsm   ServicesG   resource://gre/modules/Services.jsm!   defineLazyGetter   prefBranch   supportsString	   util   ./util/util   DEVTOOLS_PREFIX   devtools.gcli.   Settings   prototype   _readSystem   getAll   add   get   remove   exports   Setting   setDefault   Object   defineProperty	   type   enumerable   value   set   ÿÿÿÿ                     H       ¹                                              prefServiceÇ  |               ;    5   ¸   
;   5   : W   QV   ¸   
@: ¸   
;   5   : ÑÊÈÌØ>    CcE   @mozilla.org/preferences-service;1   getService   Ci   nsIPrefService   getBranch   QueryInterface   nsIPrefBranch2   ÿÿÿÿ                               ¹                                           ¿  $  "             ;    5   ¸   
;   5   : ÑÊ#	0    Cc=   @mozilla.org/supports-string;1   createInstance   Ci#   nsISupportsString   ÿÿÿÿ      Settings                 b       ¹      )                                       types   settingValues  û    1             AT  0    QT @   ;   =   R pAZ   0   QA;   R  0   QAB0   QA;   ¸   	
=   
: 0   QÊ4Ë9Ë<É?ÈBÒÉ&    _types   Errori   settingValues is not supported when writing to prefs   _settingsAll   _settingsMap   Map   _hasReadSystem   onChange	   util   createEvent#   Settings.onChange   ÿÿÿÿ   =   Settings.prototype._readSystemÁ                   k       ¹   	   -                                      
  I             A5       ;   5   ¸   
=   : ¸   
    ¸   
A: : QA5   ¸   
   ¸   
A: : QAC0    QNìRN.ÿÿÿÔTÙVTÿÿÿéXÈ    _hasReadSystem   imports   prefBranch   getChildList      forEach	   bind   _settingsAll	   sort   ÿÿÿÿ   A   Settings.prototype._readSystem/<Á               @       ¹                                          	   name   setting ù  	  N             ;    AT  R W   QA5   ¸   
V   : QA5   ¸   
T  V   : QÊ
ÈÕØ%    Setting   _settingsAll	   push   _settingsMap   set   ÿÿÿÿ   A   Settings.prototype._readSystem/<Á                        ¹      	                                       s1   s2  ¯	  è	  T             T  5    ¸   
T 5    : × 	   name   localeCompare   ÿÿÿÿ   3   Settings.prototype.getAllÁ                 A       ¹                                	      D      filterÊ
    _             A¸    
:  Q   @   A5   A5   ¸   
    ¸   
A: : ÌbfÙhf"ÿÿÿçh    _readSystem   _settingsAll   filter	   bind   ÿÿÿÿ   7   Settings.prototype.getAll/<Á                        ¹      	                                       setting Q    f             T  5    ¸   
   : ×ÿIÔ$ 	   name   indexOf   ÿÿÿÿ   -   Settings.prototype.addÁ               Ó       ¹   	   G                                      prefSpec   setting   i   Ï  o       	      ;    AT  R W   QA5   ¸   
V   5   :    e>W  Q   CmA5   V  75   V   5   H   A5   V  V   9QV  #?W  QQãV  A5   Ù   ÿÿÿ°A5   ¸   
V   5   V   : QA¸   
Y   V   5   ]   : QV   Ê
ÈrÖt	%C5UtÚÐt2Îvt×{ÞÍÎÿÿÿð~    Setting   _settingsMap   has	   name   _settingsAll   length   set   onChange   added    ;   U      ÿÿÿÿ   -   Settings.prototype.getÁ               ¶       ¹      C                                    	   name   found ù  	               A5    ¸   
T  : W   QV       #A5    ¸   
;   T  : W   QV      
V   A5      ;      VA¸   
:  QA5    ¸   
T  : W   QV       #A5    ¸   
;   T  : W   QV   ÐÈÖÈËÌÐÈÖÈ    _settingsMap   get   DEVTOOLS_PREFIX   _hasReadSystem   undefined   _readSystem   ÿÿÿÿ   3   Settings.prototype.removeÁ                          ¹                                             b  h  ¦              (    ÿÿÿÿ      Setting                 á       ¹      B                                       settings   prefSpec    Å  ¯             AT  0    QT '=   H    AT 0   QA=   0   Q   A;   T 5   0   QT 5   CIE   QT 5      UA5   5   T 5   I   <;   =   	T 5   =   
A5   5   =   A5   R pAT 5   0   QA;   ¸   
=   : 0   QÊÊÊÑÕØÔÚÙ  ¼  ÁÏÒÉ%    _settings   string	   name   description      DEVTOOLS_PREFIX)   ignoreTypeDifference	   type   Error/   Locally declared type (9   ) != Mozilla declared type (   ) for    onChange	   util   createEvent!   Setting.onChange   ÿÿÿÿ   9   Setting.prototype.setDefaultÁ                   2       ¹                                 	          *    Ê             ;    5   ¸   
A5   : Q;   5   ¸   
@: QÛÖ"    imports   prefBranch   clearUserPref	   name   Services   prefs   savePrefFile   ÿÿÿÿ   	   .getÁ                   Ä       ¹      B                                       É  Ó             ;    5   ¸   
A5   : x;    5   5   y   2;    5   5   y   9;    5   5   y   @z   VA5   5   ¸   	
=   
: A5   5   ¸   	
=   : A5   5   ¸   	
=   : ;   =   A5   R p×k  ©ÏpÏpÏpÊ  Õ×××Ò    imports   prefBranch   getPrefType	   name   PREF_BOOL   PREF_INT   PREF_STRING   _settings   _types   createType   boolean   number   string   Error#   Unknown type for    ÿÿÿÿ   	   .getÁ                 "      ¹      d                          -             valuee  V  é             ;    5   ¸   
A5   : x;    5   5   y   2;    5   5   y   9;    5   5   y   @z   ´;    5   ¸   
A5   : ;    5   ¸   
A5   : ;    5   ¸   	
A5   ;   
5   : 5   W   Q     ¸   
V   :    3;    5   ¸   	
A5   ;   
5   : 5   W   QV   ;   =   A5   R p×k ÏpÏpÏpÊ  ë×××Ê  òÍÐ
×Ê  öÍÒ    imports   prefBranch   getPrefType	   name   PREF_BOOL   PREF_INT   PREF_STRING   getBoolPref   getIntPref   getComplexValue   Ci#   nsISupportsString	   data	   test-   nsIPrefLocalizedString   Error%   Invalid value for M   ^chrome:\/\/.+\/locale\/.+\.properties       ÿÿÿÿ   	   .setÁ                 K      ¹      g                           2            value h  m               ;    5   ¸   
A5   :    ;   =   A5   R p;    5   ¸   
A5   : x;    5   5   y   2;    5   5   y   A;    5   5   	y   Pz   ;    5   ¸   

A5   T  : Q   ;    5   ¸   
A5   T  : Q   b;    5   T  0   Q;    5   ¸   
A5   ;   5   ;    5   : Q   ;   =   A5   R p;   5   ¸   
@: Q×Ò×k  åÏpÏpÏpÊ ÞXÞXÓ×ÊÊ XÒÖ"    imports   prefBranch   prefIsLocked	   name   Error%   Locked preference    getPrefType   PREF_BOOL   PREF_INT   PREF_STRING   setBoolPref   setIntPref   supportsString	   data   setComplexValue   Ci#   nsISupportsString%   Invalid value for    Services   prefs   savePrefFile