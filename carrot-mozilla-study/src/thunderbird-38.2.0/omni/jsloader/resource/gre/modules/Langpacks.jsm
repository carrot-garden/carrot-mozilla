çżsš                v     š   #   Ś                                 0     resource://gre/modules/Langpacks.jsm     ł%                             ;   5       Q;   5      Q;   5      Q;    ¸   
=   : Q;    ¸   
=   	: Q;    ¸   
=   
: Q;   ¸   
A=   =   =   : QAf    0   Qn   ;   5   ¸   
=   :    A      A   1   QAY   Y   ]   @]   @]      ]      ]      ]      ]      ]      ]      	]       
]   !   ]   "0   Q;   ¸   
:  QĐĐĐŐ3Ő1Ő2Ň<Ě&ŰËĚ	-/Ę3Ę7Ę<ĘHĘ^ĘoĘ  °Ę  âĘ Đ 7Đ    Cu   Components   utils   Cc   classes   Ci   interfaces   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmI   resource://gre/modules/AppsUtils.jsm   XPCOMUtils/   defineLazyServiceGetter	   ppmmU   @mozilla.org/parentprocessmessagemanager;1+   nsIMessageBroadcaster!   EXPORTED_SYMBOLS   debug   Services   prefs   getBoolPref#   dom.mozApps.debug   Langpacks   _data   _broadcaster+   _appIdFromManifestURL	   init3   registerRegistryFunctions   receiveMessage-   getAdditionalLanguages   sendAppUpdate/   getLocalizationResource   checkManifest   register   unregister                     Langpacks                  ˙˙˙˙      debug<Ĺ                        š                                          	   aMsg ţ  >               ;    â    =   T  =   : QÝ( 	   dump#   -*-*- Langpacks:    
   ˙˙˙˙      debug<Ĺ                        š                                            	   aMsg C  O                    ˙˙˙˙   '   this.Langpacks.initÁ                          š                                           l  ş  3             ;    ¸   
=   A: QÖA 	   ppmm%   addMessageListener?   Webapps:GetLocalizationResource   ˙˙˙˙   Q   this.Langpacks.registerRegistryFunctionsÁ                        š                                              aBroadcaster   aIdGetter  â  S  7             AT  0    QAT 0   QĘĘ'    _broadcaster+   _appIdFromManifestURL   ˙˙˙˙   ;   this.Langpacks.receiveMessageÁ               h       š                                              aMessage	   data   mm p    <       	      T  5       QT  5     QT  5   x=   y   
z   A¸   
V   V  : Q   !;   â   =   T  5   : QÍÍČhEuĘÔXÜ 	   data   target	   name?   Webapps:GetLocalizationResource/   getLocalizationResource   debug)   Unexpected message:    ˙˙˙˙   K   this.Langpacks.getAdditionalLanguagesÁ              ;      š      R                                    aManifestURL   res   langs ˇ  
  H             ;    â    =   T  : QY   Y   ]      QV   5     QA5   T  7   ÍV   A5   T  75   0   QA5   T  75   K  Q   mW    QV  V  7    V  V  Z   9QA5   T  75   V  7  QV  V  7¸   
Y   V  5   ]   V  5   ]   V  5   ]   : QČăQLM˙˙˙vQNČ;    â    =   	;   
â   
V   : : QV   ×ĎÎĘŮŘ0  ĐĘ
ÎRŮŐ
Î
Î
ÎSŇZÝ˙˙˙ä    debug/   getAdditionalLanguages    langs   _data   appId	   push   revision	   name   target#   Languages found:    uneval    ˙˙˙˙      	   lang                     current       ~          t      ˙˙˙˙                ˙˙˙˙   9   this.Langpacks.sendAppUpdateÁ                      š      -                                       aManifestURL   res   message 9
  §  ^             ;    â    =   T  : QA5       ;    â    =   : QA¸   
T  :    QY   V   5   ]   Y   V   5   ]   ]   	  QA¸   
=   
V  : Q×ÓeËČÎŘlŐ2    debug   sendAppUpdate    _broadcaster   No broadcaster!-   getAdditionalLanguages   appId   id   langs'   additionalLanguages   app'   Webapps:UpdateState   ˙˙˙˙   M   this.Langpacks.getLocalizationResourceÁ              ^      š   (   ˘                          M      D      aData   aMm   sendError	   item	   href   xhrÍ  o  o                    Q;    â    =   ;   â      : : QA5      5   7       =   =   : A5      5   75      5   7    *   =   	   5   =   
=   : A5      5   75      5   7   QV   5      5      *   =      5   =   
=   : ;   â      5   :       =   =   : V   5      5      Q;    â    =      : Q;   5   ¸   
;   5   :    Q   C0   Q   ¸   
=      : Q   =   0   Q   5    =   !H      =   !0   Q   *   5    =   "H      =   #0   Q   ¸   $
=   %   : Q   ¸   $
=   &   : Q   ¸   '
@: QrËoŢ#˙˙˙ÝryŇĐ~âÜ  ćÔÜ    ÔĐÚŮŃĘ  ÉĚÚĐĐŐĐĐÚ  ŠÚŃ    debug1   getLocalizationResource    uneval   _data   manifestURL3   No langpack for this app.   NoLangpack   langs	   lang   No language     for this app.'   UnavailableLanguage   target   version   No version %   UnavailableVersion   isAbsoluteURI	   path-   url can't be absolute.   BadUrl   url   Will load    CcO   @mozilla.org/xmlextras/xmlhttprequest;1   createInstance   Ci#   nsIXMLHttpRequest)   mozBackgroundRequest	   open   GET   responseType	   text   dataType	   json   binary	   blob!   addEventListener	   load   error	   send   ˙˙˙˙      sendError                 R       š                                 	         	   aMsg   aCode  *  Ţ  r             ;    â    T  : Q   ¸   
=   Y      5   ]      5   ]   T ]   : QŃŃ
ĎĎČtF    debug!   sendAsyncMessageM   Webapps:GetLocalizationResource:Return   requestID   oid   error   ˙˙˙˙   Q   this.Langpacks.getLocalizationResource/<Á                   Ŕ       š      '                                       Ý                ;    â    =         : Q      5   X ČE   Q      5   X   V   ¸   
=   Y      5   ]      5   ]         5   ]   : Q   $   =   	      =   
: QŢěQŃĎĎÔ  ŁÉß:    debug!   Success loading    status!   sendAsyncMessageM   Webapps:GetLocalizationResource:Return   requestID   oid   response	   data   Error loading '   UnavailableResource   ˙˙˙˙   Q   this.Langpacks.getLocalizationResource/<Á                           š                                           
  U  Š                =          =   : Qß:    Error loading '   UnavailableResource   ˙˙˙˙   9   this.Langpacks.checkManifestÁ                       š      Ş                                    aManifest ť  b  °             =    T  q    ;   â   =   : QB=   T  q    ;   â   =   : QBT  5   K   Q  ˇmW     QT  5   V   7  QV  5       &;   â   =   V   : QBČ NČV  5   Ĺ=   I   7;   â   =   V   =   	V  5   Ĺ: QBČ NČV  5   
    &;   â   =   V   : QBČ NČV  5   
K  Q   ÎmW  ;   â   V  :     <;   â   =   V   =   V  =   : QB NČČ NČV  5   
V  7Ĺ=   I   a;   â   =   V   =   V  =   V  5   
V  7Ĺ=   V  5   
V  7: QB NČČ NČăQLM˙˙˙2QNČČăQLM˙˙ţIQNČCĘÓĘÓŃ0 źĐ
Ň
ĘŘÉ
ĐÔ8Ë  ÄÉ
ĘŘÉŇ0  ÓĘÎ
ß  Ń

ÎŐ
ß5ĐŐ  ×

é !   languages-target   debugM   Error: no 'languages-target' property.%   languages-providedQ   Error: no 'languages-provided' property.   revisiona   Error: missing 'revision' in languages-provided.   number5   Error: languages-provided.I   .revision must be a number but is a 	   appsY   Error: missing 'apps' in languages-provided.   isAbsoluteURI   .E    must be an absolute manifest url.   string   .apps.?    value must be a string but is     :     ˙˙˙˙       	   lang                  	   item                    app       ^   ˝     9  Ô       T   É  ˙˙˙˙   d   Ź          Ľ         ˙˙˙˙Ş             ě         ˙˙˙˙ń                     ˙˙˙˙!           /  ŕ                          	   ˙˙˙˙     
      ű            ü        ˙˙˙˙           ˙˙˙˙   /   this.Langpacks.registerÁ              Ë      š   "   ż                        =         	   aApp   aManifest   platformVersion   origin  Á  ä!  â             T  5    =   I   ;   â   =   T  5   : QA¸   
T :     ;   â   =   : QT 5   5      Q;   	5   
¸   
T  5   @@:   QT 5   K  Q  mW    Q  Q  QT 5   V  7  QV  5     QV  5   D   
QV    QV  5   K  Q  ŠmW    QB  QA5   V  7 D   AQA5   V  75   V  7 D   %QA5   V  75   V  75   V     đA5   V  7    4A5   V  Y   A¸   
V  : ]   Y   ]   9QA5   V  75   V  Y   V  ]   V   ]   V  ]   V  ¸   
V  5   V  7: ]   T  5   ]   9QCW  Q;   â   =   V  =   ;   â   A5   V  75   V  7: : QV     QA¸   
V  : Q;   ¸   
=   Y   V  ]   A¸    
V  : 5   ]   !: QČăQLM˙˙ţWQNČČăQLM˙˙ýăQNČÎÜËÓŇŰ	ČŃ0 "Ü
Ň
Î
ŘŇ0 ŽĐŇÜßĚĎĚČĚ
ŮÉÉÉŮČĎ

ů%˙˙˙Ű 
Đ
ĚÉĚÍ 
ŕ  ó7 	   role   langpack   debug   register app    manifestURL   checkManifest5   Invalid langpack manifest.!   languages-targetM   app://*.gaiamobile.org/manifest.webapp   Services   io   newURI   origin%   languages-provided   revision	   name	   apps   _data   langs+   _appIdFromManifestURL   appId   target   resolve   url	   from   Registered 	    ->    uneval   sendAppUpdate	   ppmm+   broadcastAsyncMessageA   Webapps:AdditionalLanguageChange-   getAdditionalLanguages   languages    ˙˙˙˙      	   lang                  	   item       revision    	   name                    app                    sendEvent       Ľ   #       Ż         /  ˙˙˙˙   ­              ť                  ˙˙˙˙   3   this.Langpacks.unregisterÁ                .      š      R                                 	   aApp   aManifest  j"  %              T  5    =   I   ;   â   =   T  5   : QA5   K   Q   ŕmW     QB  QA5   V   75   K  Q   NmW  A5   V   75   V  75   T  5      !CW  QA5   V   75   V  /QăQLM˙˙˙˛QNČV     QA¸   
V   : Q;   	¸   

=   Y   V   ]   A¸   
V   : 5   ]   : QČăQLM˙˙˙ QNČÎÜĎ0  ĺĐ
Ů0SĘă

ă .ĐĚÉĚÍ 0Ň $! 	   role   langpack   debug   unregister app    manifestURL   _data   langs	   from   sendAppUpdate	   ppmm+   broadcastAsyncMessageA   Webapps:AdditionalLanguageChange-   getAdditionalLanguages   languages    ˙˙˙˙          app                     sendEvent                 	   lang       E   ć      t   T       ;   ň   ˙˙˙˙   K   Ő          j   `      