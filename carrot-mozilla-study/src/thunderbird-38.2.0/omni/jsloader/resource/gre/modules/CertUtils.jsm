çżsš                Ţ      š             	                               resource://gre/modules/CertUtils.jsm     ł                               Af    6    Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   5   	¸   

=   : QA   6   QA   6   QA   6   QA   6   Q;   Y      ]      ]      ]   6   QĘ  Ť	Ě[ĐĐĐĐ	Ú?Ë3EËp  Ë  Š  ¸ËĘĘ  ĎĘ  ÔĐ  Ű !   EXPORTED_SYMBOLS   Ce   Components   Exception   Ci   interfaces   Cr   results   Cu   utils   importG   resource://gre/modules/Services.jsm   readCertPrefs   validateCert   checkCert   BadCertHandler   prototype-   asyncOnChannelRedirect   getInterface   QueryInterface                     BadCertHandler      checkCert      readCertPrefs      validateCert                  ˙˙˙˙      readCertPrefs              *      š   	   S                                     aPrefBranch   certs   counter ¤  Ô               ;    5   ¸   
T  : ¸   
=   : Ů   >   @Z      Q?  Q   Ům  Q  Q  Q;    5   ¸   
T  V  =   :   QV  ¸   
=   :   QV  Ů   >   Č   yY     QV  K  Q   &mW  V  V  V  ¸   
V  : 8QăQLM˙˙˙ÚQNČV   ¸   
V  : QV  #?W  QQČăC˙˙˙)V   ÔŮ"É(  ÜÓßČĐČËI*ĘÍ0+Ę×Ň.ÓĎ$	Č2    Services   prefs   getBranch   getChildList      length   .   getCharPref	   push    ˙˙˙˙         prefBranchCert       prefCertAttrs       certAttrs                     prefCertAttr        H   Ü      Ě   ,       L   Đ   ˙˙˙˙˙˙˙˙Ť             Â   8          ˙˙˙˙      validateCert              Ü      š      Ľ                                      aCertificate   aCerts   errors   i   error   certAttrs	   name  â	  î  F             T  D   QT Ů    >   T      B  Q=     Q;   ¸   
V  : Q;   V  ;   5   R pČZ   W   Q>W  Q   émBW  QT V  7W  QV  K   ˘mW  V  T  q    /CW  QV   ¸   
=   V  =   	: Q   oT  V  7V  V  7   NCW  QV   ¸   
=   
V  =   V  V  7=   T  V  7=   : Q   ăQLM˙˙˙^QNV      
   %V  #?W  QăV  T Ů    ˙˙˙V     j  QV   ¸   
;   5   ¸   
;   : : Q=     Q;   ¸   
V  : Q;   V  ;   5   R pČHÔKË
ĘÔÔQÉ%  é  Ý  řRÍ7  §Ę
ÉßZH\ŇŰĘŐ^aHŃeHR%ĚfRÔiËá˙˙˙ń
ĘmÔÔj,    lengthO   A required certificate was not present.   Cu   reportError   Ce   Cr-   NS_ERROR_ILLEGAL_VALUE	   push)   Expected attribute ';   ' not present in certificate.A   Expected certificate attribute '=   ' value incorrect, expected: '   ', got: '   '.   forEach	   bindw   Certificate checks failed. See previous errors for details.    ˙˙˙˙         missingCertErr       ˙˙˙˙         certCheckErr       u   ř         ¨       %   <   ˙˙˙˙   w  d   ˙˙˙˙   ˙˙˙˙      checkCert             l      š                                &             aChannel+   aAllowNonBuiltInCerts   aCerts	   cert   issuerCert   tokenNames#   certNotBuiltInErr   Ž  {               T  5    ¸   
=   :     (T    ;   =   ;   5   R pT  5   ¸   
;   	5   
: 5   ¸   
;   	5   : 5   W   Q;   â   V   T : QT CH   V   W  Q   mV  5   W  QăV  5   E   QV  5   ¸   
V  :  ˙˙˙Č=     QV      ;   V  ;   5   R pV  ¸   
Y   : W  QV   D   QV  ¸   
;   :     ;   V  ;   5   R pÔËĘ  ŮĎĘ  ÍŐÉ(=Ď  	ŃÔÉĘÔĐČËĐÔ-    originalURI   schemeIs   https   CeY   SSL is required and URI scheme is not https.   Cr'   NS_ERROR_UNEXPECTED   securityInfo   QueryInterface   Ci)   nsISSLStatusProvider   SSLStatus   nsISSLStatus   serverCert   validateCert   issuer   equalsG   Certificate issuer is not built-in.   NS_ERROR_ABORT!   getAllTokenNames	   some   isBuiltinToken    Ž   =      ˙˙˙˙      isBuiltinToken                        š                                               tokenName   Ń  Ť             T  =    Ę+ )   Builtin Object Token   ˙˙˙˙      BadCertHandler                        š                                            +   aAllowNonBuiltInCerts   î  š             AT  6    QĘ2 )   allowNonBuiltInCerts   ˙˙˙˙   _   BadCertHandler.prototype.asyncOnChannelRedirectÁ                 r       š   	                                           oldChannel   newChannel   flags   callback    H  T  ż             A5       $T ¸   
;   5   5   : QT ;   5   5       ;   â   T  : QT ¸   
;   5   5   : QÝ  ČÔŃÝ< )   allowNonBuiltInCerts1   onRedirectVerifyCallback   Components   results   NS_OK   Ci'   nsIChannelEventSink#   REDIRECT_INTERNAL   checkCert   ˙˙˙˙   K   BadCertHandler.prototype.getInterfaceÁ                        š      	                                        iid   ş  Ď             A¸    
T  : Ë    QueryInterface   ˙˙˙˙   O   BadCertHandler.prototype.QueryInterfaceÁ                 g       š                                              iid č  Ż  Ô             T  ¸    
;   5   :  E   <QT  ¸    
;   5   :  E   QT  ¸    
;   5   :     ;   5   pAÔĘÔĘÔË    equals   Ci'   nsIChannelEventSink+   nsIInterfaceRequestor   nsISupports   Cr+   NS_ERROR_NO_INTERFACE