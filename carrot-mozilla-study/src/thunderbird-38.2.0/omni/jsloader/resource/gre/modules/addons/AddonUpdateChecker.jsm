ç¿s¹                ë  _   ¹   M   º                         '       0     resource://gre/modules/addons/AddonUpdateChecker.jsm     ^l                                	                        $   )   +            ;   5       Q;   5      Q;   5      QAf    0   QXê`   Q=   
   	Q=      Q=      Q=      Q=      Q=      Q=      Q=      Q;   5   ¸   
=   : Q;   5   ¸   
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=    =   !: Q;   ¸   "
A=   #   : Qn   $;    5   %¸   &
;   5   ': 1   $Q;   ¸   
=   (: Q=   *   )Qn   +;   ,5   -¸   .
;   ): 1   +Q;   /Y   =   1]   2@]   3   ]   4   ]   5   ]   6   ]   70   0Q;   8Y   @]   9@]   :@]   ;@]   <@]   =   	]   >   
]   ?   ]   @   ]   A   ]   B0   0QAY   ×ÿ]   D×þ]   E×ý]   F×ü]   G×û]   H×ú]   I   ]   J   ]   K   ]   L0   CQ,04Ê>	  è	 	 V	
ÐÐÐÌ1ÉËËËËËË
ËËÚ?ÚA Ò MÒ"W&Û*,ÖÊ,Éÿÿÿý/Õ,Ë	4Û	Éÿÿÿý>BDÊÊPÊbÊ}Ê  µÐ  Ú  è }  ®Ê ºÊ Ê Ê +Ê 9Ð C V q Ê ÅÊ òÐ    Cc   Components   classes   Ci   interfaces   Cu   utils!   EXPORTED_SYMBOLS   TIMEOUT   PREFIX_NS_RDFW   http://www.w3.org/1999/02/22-rdf-syntax-ns#   PREFIX_NS_EMG   http://www.mozilla.org/2004/em-rdf#   PREFIX_ITEM#   urn:mozilla:item:!   PREFIX_EXTENSION-   urn:mozilla:extension:   PREFIX_THEME%   urn:mozilla:theme:   TOOLKIT_ID'   toolkit@mozilla.org%   XMLURI_PARSE_ERRORi   http://www.mozilla.org/newlayout/xml/parsererror.xml?   PREF_UPDATE_REQUIREBUILTINCERTSK   extensions.update.requireBuiltInCerts   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   AddonManagerO   resource://gre/modules/AddonManager.jsm   AddonRepositoryc   resource://gre/modules/addons/AddonRepository.jsm!   defineLazyGetter   CertUtils	   gRDF=   @mozilla.org/rdf/rdf-service;1   getService   nsIRDFService=   resource://gre/modules/Log.jsm   LOGGER_ID+   addons.update-checker   logger   Log   repository   getLogger   RDFSerializer   prototype        INDENT   resources   escapeEntities/   serializeContainerItems7   serializeResourceProperties#   serializeResource   UpdateParser   id   updateKey   observer   request   url   onLoad   onTimeout   onError   notifyError   cancel%   AddonUpdateChecker   ERROR_TIMEOUT)   ERROR_DOWNLOAD_ERROR#   ERROR_PARSE_ERROR)   ERROR_UNKNOWN_FORMAT)   ERROR_SECURITY_ERROR   ERROR_CANCELLED-   getCompatibilityUpdate3   getNewestCompatibleUpdate   checkForUpdates                  %   AddonUpdateChecker                  ÿÿÿÿ   '   certUtilsLazyGetter                 .       ¹                                              certUtilsB  À  &             Y      Q;    5   ¸   
=   V   : QV   ÊÞ    Components   utils   importI   resource://gre/modules/CertUtils.jsm   ÿÿÿÿ      RDFSerializer                   1       ¹                                           	  
  >             A;   5   ¸   
;   5   : 0    QAZ   0   QÒÊ?ÉAË    cUtils   CcE   @mozilla.org/rdf/container-utils;1   getService   Ci)   nsIRDFContainerUtils   resources   ÿÿÿÿ   '   RDFS_escapeEntities                 j       ¹                                            aString î  ±  P             T  ¸    
     =   : U  QT  ¸    
    =   : U  QT  ¸    
    =   : U  QT  ¸    
    =   : Ô
Ô
Ô
Ô     replace   &amp;	   &lt;	   &gt;   &quot;   &      <      >      "      ÿÿÿÿ   9   RDFS_serializeContainerItems               °       ¹      ;                                      aDs   aContainer   aIndent   result   items	   item   O    b             =    W   QT ¸   
:  W  Q   ymV  ¸   
:  ¸   
;   5   : W  QV   T =   W   QV   A¸   
T  V  T A5   : W   QV   T =   	W   QãV  ¸   

:  ÿÿÿ|V   ÊÊÈ(  f
ËÜÍxÝ
{ÍxfÕl       GetElements   getNext   QueryInterface   Ci   nsIRDFResource   <RDF:li>
#   serializeResource   INDENT   </RDF:li>
   hasMoreElements    !         ÿÿÿÿ   A   RDFS_serializeResourceProperties                     ¹      Ç                          5            aDs   aResource   aIndent   result   items	   arcs   arc	   prop   targets   target	   item   ¾  ß  }             =    W   QZ   W  QT  ¸   
T : W  Q  0mV  ¸   
:  ¸   
;   5   : W  QV  5   ¸   
>;   Ù   	: ;      
ÿÿÿªV  5   ¸   
;   Ù   	: W  QV  =   
   
ÿÿÿtT  ¸   
T V  C: W  Q  pmV  ¸   
:  W  QV  ;   5   r   zT =   V  =   W  QV  A¸   
T  V  T A5   : W  QV  T =   V  =   W  QV  ¸   
V  : Q   ÓV  ;   5   r   SV  ¸   
T =   V  =   A¸   
V  5   : =   V  =   : Q   qV  ;   5   r   HV  ¸   
T =   V  =   V  5   =   V  =   : Q   ;   ¸   
=   : pãV  ¸   
:  ÿÿþãV  ¸   
:  ÿÿýÅV  ¸   
:  QV   V  ¸   
=    : W   QV   ÊÉÍÈ( @  
ËÜÛ
É@
ÚÈÊ@
Ò
È(   Ë	ÈÏuÙ
Ý{
Øx
ØÏN
ßÑÕ  
ÉÏC
ßÛ  
É
Ñ  Õ  Õ  ¡ÏÔ
{       ArcLabelsOut   getNext   QueryInterface   Ci   nsIRDFResource   ValueUTF8   substring   PREFIX_NS_EM   length   signature   GetTargets	   <em:   >
#   serializeResource   INDENT   </em:	   push   nsIRDFLiteral   >   escapeEntities   Value   nsIRDFInt1    NC:parseType="Integer">   Components   ExceptionK   Cannot serialize unknown literal type   hasMoreElements	   sort	   join    -   @      Ø        ÿÿÿÿ   -   RDFS_serializeResource                     ¹                                  )            aDs   aResource   aIndent   container	   type   result   P  %   µ             A5    ¸   
T : ×ÿ   #;   ¸   
=   T 5   : pT ;   H   =   U QA5    ¸   
T : Q@W   Q=   	W  QA5   
¸   
T  T :    /=   W  QA5   
¸   
T  T : W   Q   A5   
¸   
T  T :    /=   W  QA5   
¸   
T  T : W   Q   EA5   
¸   
T  T :    *=   W  QA5   
¸   
T  T : W   QT =   V  W  Q;   ¸   
T :     .V  =   A¸   
T 5   : =   W  QV  =   W  QV      +V  A¸   
T  V   T A5   : W  QV  A¸   
T  T T A5   : W  QV  T =   V  =   W  QV  ÐÚÉÉÔÊÓ*ÊÓÍÓ*ÊÓÍÓÊÓÈÓÏÙÊxÉxÝ
{Ü
{Øx    resources   indexOf   Components   ExceptionQ   Cannot serialize multiple references to    Value   undefined   	   push   Description   cUtils   IsSeq   Seq   MakeSeq   IsAlt   Alt   MakeAlt   IsBag   Bag   MakeBag   <RDF:	   gRDF'   IsAnonymousResource    about="   escapeEntities   ValueUTF8   "   >
/   serializeContainerItems   INDENT7   serializeResourceProperties   </RDF:   ÿÿÿÿ   !   parseRDFManifest            f      ¹   O   A                
                   aId   aUpdateKey   aRequest	   EM_R   getValue   getProperty%   getBooleanProperty'   getRequiredProperty   rdfParser   ds   extensionRes   themeRes   itemRes   addonRes   updates   cu   results   ctr   items   Ü!  7  è                    Q      Q      Q   W   Q   W  Q;    5   ¸   
;   5   :   Q;    5   ¸   
;   5   :   QV  ¸   
V  T 5   5   	T 5   
: Q;   ¸   
;   T  :   Q;   ¸   
;   T  :   Q;   ¸   
;   T  :   QV  ¸   
V  : ¸   
:     V     3V  ¸   
V  : ¸   
:     V     	V    QT     Q  Q  Q  Q   V  V  =   :   QV      $;   ¸   
=   T  =   : p;   R    Q@  QV  ¸   
V  V  : W  Q   E  Qv  Q;   ¸   
=   T  =   V  V  5   : pÈ    B  Q  Q;    5   ¸   
;   5   :   QV  ¸   
V  V  T : W  QÈ   E  Qv  Q;   ¸   
=    T  =   !V  V  5   : pÈ    V      $;   ¸   
=   "T  =   #: pÈV  ¸   $
V     =   %: C:   QV      );   &¸   '
=   T  =   (: QZ   V  ;   5   )r    $;   ¸   
=   *V  5   +: p;    5   ,¸   
;   5   -:   	QV  	¸   .
V  V  :     ;   ¸   
=   /: pZ     
Q;    5   0¸   
;   5   1:   QV  ¸   2
V  V  : QV  ¸   3
:    Q  +m  Q  Q  QV  ¸   4
:  ¸   5
;   5   ):   Q   V  V  =   6:   QV       ;   &¸   '
=   7: QÈÿÿÿ;   &¸   8
=   9T  =   :V  : QV  ¸   ;
V     =   <: C:   Q  Lm  Q  Q  QV  ¸   4
:  ¸   5
;   5   ):   QY     QV  V  V  V  =   =: 0   =QV  V  V  V  =   >: 0   >QV  V  V  V  =   ?: 0   ?Q   3  Qv  Q;   &¸   '
V  : QÈÈÿÿÿ2È    Y   T  ]   =V  ]   6V   V  V  =   @: ]   @   V  V  =   A: ]   B   V  V  =   C: ]   C   V  V  =   D: ]   DV   V  V  =   E:   ]   EZ  V  `   ]   F  QV  5   BE   dQ;   G5   HE   TQV  5   B¸   I
>×: =   JE   2QV  5   C D   "QV  5   C¸   I
>×: =   K   >;   &¸   '
=   LV  5   B=   M: QV  .   BQV  .   CQV  
¸   N
V  : QÈãV  ¸   
:  ÿÿý©ÈãV  ¸   
:  ÿÿüÊV  
ËË  ÷ËÊ Ê  è  ÷  	ÑÊ 	ÈÑÊ ÈèÕÈÕÈÕ
ÈÏÍ	ÎÏÍ	ÎÉÝÓÈÛÈÓÍÌàÉ #ËI
ÑÊ *ÈÖ	ÎÌÛÎ /ËÛÚ!ÿÿÿéÈßÐÛÑÊ CÈÓÑÉÑÊ IÈ×ËÈ( ;"ÓËÜÓ
ÈÕAäÚ!ÿÿÿìÈ( \)Ó
ËÜ
Ê^ÖÉÖÉÖÎÌÔBÌ
ÈÉÒÈÓÈÓÈÓÈÒÊÒßÓ
ÏãÉåÊÊÔ XÖ M	Õ |    Cc;   @mozilla.org/rdf/xml-parser;1   createInstance   Ci   nsIRDFXMLParsero   @mozilla.org/rdf/datasource;1?name=in-memory-datasource!   nsIRDFDataSource   parseString   channel   URI   responseText	   gRDF   GetResource!   PREFIX_EXTENSION   PREFIX_THEME   PREFIX_ITEM   ArcLabelsOut   hasMoreElements   signature   Components   Exception)   Update manifest for M    does not contain a required signature   RDFSerializer#   serializeResourceK   Failed to generate signed string for '   . Serializer threw    result[   @mozilla.org/security/datasignatureverifier;1   getService1   nsIDataSignatureVerifier   verifyData?   The signature or updateKey for ;    is malformed.Verifier threw %   The signature for U    was not created by the add-on's updateKey   GetTarget   updates   logger	   warnI    did not contain an updates property   nsIRDFResource;   Missing updates property for    ValueE   @mozilla.org/rdf/container-utils;1)   nsIRDFContainerUtils   IsContainerS   Updates property was not an RDF container9   @mozilla.org/rdf/container;1   nsIRDFContainer	   Init   GetElements   getNext   QueryInterface   versiono   Update manifest is missing a required version property.   debug5   Found an update entry for     version    GetTargets#   targetApplication   id   minVersion   maxVersion-   multiprocessCompatible   updateLink   updateURL   updateHash   updateInfoURL'   strictCompatibility%   targetApplications   AddonManager'   checkUpdateSecurity   substring   https:   sha   updateLink µ    is not secure and is not verified by a strong enough hash (needs to be sha1 or stronger).	   push   ÿÿÿÿ   	   EM_R                        ¹      	                                       aProp 	"  I"  é             ;    ¸   
;   T  : Õ' 	   gRDF   GetResource   PREFIX_NS_EM   ÿÿÿÿ      getValue                 W       ¹                                 	            aLiteral ^"  ]#  í             T  ;    5   r   T  5   T  ;    5   r   T  5   T  ;    5   r   T  5   @ÎÉÎÉÎÉ    Ci   nsIRDFLiteral   Value   nsIRDFResource   nsIRDFInt   ÿÿÿÿ      getProperty                 (       ¹                                             aDs   aSource   aProperty   u#  Ø#  ÷                T  ¸    
T    T : C: : Ü'ÿÿÿéÿÿÿ÷8    GetTarget   ÿÿÿÿ   %   getBooleanProperty               G       ¹                                             aDs   aSource   aProperty   propValue   ÷#  ¯$  û             T  ¸    
T    T : C:    QV       ;      V   : =   Ö#ÿÿÿéÈÊÊ    GetTarget   undefined	   true   ÿÿÿÿ   '   getRequiredProperty               F       ¹                                             aDs   aSource   aProperty   value   Ï$  ­%                 T  T T :    QV       $;    ¸   
=   T =   : pV   ÏÈÛ    Components   ExceptionM   Update manifest is missing a required     property.    ÿÿÿÿ         signature       serializer       updateString       result                    e                    verifier                    e        ÿÿÿÿ      	   item       version       targetApps        	            targetApp       appEntry       result        
            e        %  ;      î  \       3  b        7  M        Ð         c    ÿÿÿÿ   ñ  9          8  G            9       	   )  "  ÿÿÿÿÿÿÿÿ        
   ò  C          '      
   ¶        	   ·           ÿÿÿÿ      UpdateParser                   ¹   '                           :            aId   aUpdateKey	   aUrl   aObserver	   self   requireBuiltIn    59  >        	      AT  0    QAT 0   QAT 0   QAT 0   QC   Q;   5   ¸   
;   : W   Q     Qv  QÈ    ;   ¸   	
=   
T : QA;   5   ¸   
;   5   : 0   QA5   ¸   
=   A5   C: QA5   5   ;   5   V    R 0   QA5   5   5   ;   5   5   0   QA5   5   5   ;   5   5   0   QA5   ¸   
=   : QA5   ¸   
=   =   C: QA5   ;   !0    QA   QA5   ¸   "
=   #   B: QA5   ¸   "
=   $   B: QA5   ¸   "
=       B: QA5   ¸   %
@: Q   1  Qv  Q;   ¸   $
=   &V  : QÈ    ÊÊÊÊÖÍÓÙ eÒÊ ÉÝÖJÿÿÿãÉàxàxÖÜÑÜÜÜ×Ìà    id   updateKey   observer   url   Services   prefs   getBoolPref?   PREF_UPDATE_REQUIREBUILTINCERTS   logger   debug   Requesting    request   CcO   @mozilla.org/xmlextras/xmlhttprequest;1   createInstance   Ci#   nsIXMLHttpRequest	   open   GET   channel+   notificationCallbacks   CertUtils   BadCertHandler   loadFlags   nsIRequest#   LOAD_BYPASS_CACHE   INHIBIT_CACHING!   overrideMimeType   text/xml!   setRequestHeader   Moz-XPI-Update   1   timeout   TIMEOUT!   addEventListener	   load   error	   sendC   Failed to request update manifest    ÿÿÿÿ         e       ÿÿÿÿ   #   loadEventListener                        ¹                                             event *=  C=  ¦               ¸    
:  QNÐ    onLoad   ÿÿÿÿ   %   errorEventListener                        ¹                                             event =  ­=  §               ¸    
:  QPÐ    onError   ÿÿÿÿ   )   timeoutEventListener                        ¹                                             event >  >  ¨               ¸    
:  QTÐ    onTimeout    ÿÿÿÿ         e            i       /   #       S      ÿÿÿÿ   é  %   ÿÿÿÿ   ÿÿÿÿ      UP_onLoad                Q      ¹   .   Ý                 	       Y             request   requireBuiltIn   channel   xmlf?   H  º            A5       QA@0    QA;   =   R 0   QC  Q;   5   ¸   
;   : W  Q     Qv  QÈ    ;   ¸   	
V   5   
V   : Q   2  Qv  QA¸   
;   5   : QÈÈ    ;   ¸   
V   5   :     I;   ¸   
=   A5   =   V   5   : QA¸   
;   5   : QV   5   
  QV  ;   5   rE   QV  5       Y;   ¸   
=   A5   =   V  5   =   V  5   : QA¸   
;   5   : QV   5     QV   D   QV  5   5   ;      2;   ¸   
=    : QA¸   
;   5   !: QV  5   5   ;   "    Q@  Q;   #â   #A5   $A5   %V   : W  Q   L  Qv  Q;   ¸   
=   &V  : QA¸   
;   5   !: QÈÈÈ    =   'A5   (q   QA5   (¸   '
V  : Q   1  Qv  Q;   ¸   
=   )V  : QÈ       (;   ¸   
=   *;   =   +R : QÈÈ;   ¸   
=   ,V  5   5   : QA¸   
;   5   -: QËÈÌÉÖÍÓÕ%ÿÿÿÛÉÌÖËÕìÖÎÕ0ÊèÐ ÖÖÎßÕÖÔË
#Ú
ÍÌÙÖÌÌL
ÚÌ
åÜ=ÿÿÿÃäÖ:    request   _doneAt   Error   place holder   Services   prefs   getBoolPref?   PREF_UPDATE_REQUIREBUILTINCERTS   CertUtils   checkCert   channel   notifyError%   AddonUpdateChecker)   ERROR_DOWNLOAD_ERROR   Components   isSuccessCode   status   logger	   warn!   Request failed:    url    -    Ci   nsIHttpChannel!   requestSucceeded   responseStatus   : %   responseStatusText   responseXML   documentElement   namespaceURI%   XMLURI_PARSE_ERRORC   Update manifest was not valid XML#   ERROR_PARSE_ERROR   PREFIX_NS_RDF!   parseRDFManifest   id   updateKeye   onUpdateCheckComplete failed to parse RDF manifest+   onUpdateCheckComplete   observerS   onUpdateCheckComplete notification failed[   onUpdateCheckComplete may not properly cancel   stack marker_   Update manifest had an unrecognised namespace: )   ERROR_UNKNOWN_FORMAT    ÿÿÿÿ         e        ÿÿÿÿ         e        ÿÿÿÿ         results                    e                    e         £          #  '        f   #        /   #       S      ÿÿÿÿ      &   ÿÿÿÿÿÿÿÿ®              ÿ   ÿÿÿÿ   K  @                 ÿÿÿÿ           ¾  %      ÿÿÿÿ           ÿÿÿÿ   A   UpdateParser.prototype.onTimeoutÁ                   V       ¹                                 
          KH  
I              A@0    QA;   =   R 0   Q;   ¸   
=   A5   =   : QA¸   	
;   
5   : QÈÌÉâÖ3    request   _doneAt   Error   Timed out   logger	   warn   Request for    url    timed out   notifyError%   AddonUpdateChecker   ERROR_TIMEOUT   ÿÿÿÿ      UP_onError                  I      ¹      P                        (          eI  yL              ;    ¸   
A5   5   :     8;   ¸   
=   A5   =   A5   5   : Q   ÇA5   5   	;   
5   r   A5   5   	5      O;   ¸   
=   A5   =   A5   5   	5   =   A5   5   	5   : Q   -   Qv   Q;   ¸   
=   : QÈ       ;   ¸   
=   : QA@0   QA;   =   R 0   QA¸   
;   5   : Q×3óÖ  `Ð
Þ×Ñ 
É ÌáÕÈÌÉÖ:    Components   isSuccessCode   request   status   logger	   warn!   Request failed:    url    -    channel   Ci   nsIHttpChannel!   requestSucceeded   responseStatus   : %   responseStatusTextS   HTTP Request failed for an unknown reasonI   Request failed for an unknown reason   _doneAt   Error   UP_onError   notifyError%   AddonUpdateChecker)   ERROR_DOWNLOAD_ERROR    ÿÿÿÿ          e         o   d       Ô   !   ÿÿÿÿ   ÿÿÿÿ      UP_notifyError                X       ¹                                          aStatus ïL  ØM  +            =    A5   q   KA5   ¸    
T  : Q   1   Qv   Q;   ¸   
=   V   : QÈ    ÌÙÌà %   onUpdateCheckError   observer   logger	   warnM   onUpdateCheckError notification failed    ÿÿÿÿ          e                   ,   %   ÿÿÿÿ   ÿÿÿÿ      UP_cancel                   n       ¹      "                                     6N  RO  9            A5        ";   ¸   
=   A5   : QA5    ¸   
:  QA@0    QA;   =   R 0   QA¸   
;   	5   
: QÛÑÈÌÉÖ5    request   logger   errorS   Trying to cancel already-complete request   _doneAt   abort   Error   UP_cancel   notifyError%   AddonUpdateChecker   ERROR_CANCELLED   ÿÿÿÿ      matchesVersions              ¦      ¹      j                        '            aUpdate   aAppVersion!   aPlatformVersion#   aIgnoreMaxVersion'   aIgnoreStrictCompat!   aCompatOverrides   result      R  V  V            T    S  Q;    ¸   
T  5   T T T :   QV  E   QV  5   =      	BÈÈT  5   E   
QT     
BU QB   QT  5   - Á
:    Q   ôm5   W  QV  5   ;   	5   
5      ^;   	5   ¸   
T V  5   : >E   1QT D   (Q;   	5   ¸   
T V  5   : >È V  5   ;      ];   	5   ¸   
T V  5   : >E   1QT D   (Q;   	5   ¸   
T V  5   : >W   QãQ¸   
:  5   ÿÿþýÈ V   ËÔ ZÈÙÎ%×8 ÑÙÝËæ$ËÏÝ
Ëæ&Ê fËÿÿÿðÒ p    AddonRepository5   findMatchingCompatOverride   version	   type   incompatible'   strictCompatibility%   targetApplications   value   id   Services   appinfo   ID   vc   compare   minVersion   maxVersion   TOOLKIT_ID	   next	   done    ÿÿÿÿ         override        ÿÿÿÿ         app                	   M   ÿÿÿÿÿÿÿÿT                  ÿÿÿÿÿÿÿÿ           ÿÿÿÿ   5   AUC_getCompatibilityUpdate                k      ¹      s                                    aUpdates   aVersion)   aIgnoreCompatibility   aAppVersion!   aPlatformVersion#   aIgnoreMaxVersion'   aIgnoreStrictCompat       Ü\  Sa              T     ;    5   5   U QT     ;    5   5   U QT  - Á
:     Q  m5   W   Q;    5   ¸   
V   5   T : >   ÎT    V   5   - Á
:    Q   [m5   W  Q  QV  5     QV  ;    5   5   	D   QV  ;   
   V   ÈÈÈ ÈãQ¸   
:  5   ÿÿÿÈ    1;   â   V   T T T T :    V   È ãQ¸   
:  5   ÿÿþðÈ @ ÓÓÒ8 ÑÝ
  Ø8o×ÎäÍ ¥ Ëÿÿÿê× «Ô «
Ê ¢ËÿÿÿíÒ ±    Services   appinfo   version   platformVersion   value   vc   compare%   targetApplications   id   ID   TOOLKIT_ID	   next	   done   matchesVersions    ÿÿÿÿ          update                     targetApp                    id       O        §   o       E      ÿÿÿÿ      z          ´   I         ö             ÷         ÿÿÿÿø         ÿÿÿÿG            ÿÿÿÿ   ;   AUC_getNewestCompatibleUpdate              g      ¹      s                                     aUpdates   aAppVersion!   aPlatformVersion#   aIgnoreMaxVersion'   aIgnoreStrictCompat!   aCompatOverrides   blocklist   newest      d  ¾i  Å            T     ;    5   5   U QT     ;    5   5   U Q;   5   ¸   
;   5   :    Q@  QT  - Á
:    Q   Ñm5   	W  Q  QV  5   
    È   ªV   ¸   
V  T T :   QV  ;   5   5      È   nV  @D   .Q;    5   ¸   
V  5   V  5   : >E   &Q;   â   V  T T T T T :    V  W  QÈãQ¸   
:  5   ÿÿÿ È V   ÊÓÓÑÊ ÐÈÒ8  å×
ÊA
ÕÈÔAïËÔ Û
Ê ÔËÿÿÿíÒ á    Services   appinfo   version   platformVersion   CcG   @mozilla.org/extensions/blocklist;1   getService   Ci'   nsIBlocklistService   value   updateURL-   getAddonBlocklistState#   STATE_NOT_BLOCKED   vc   compare   matchesVersions	   next	   done    ÿÿÿÿ         update                     state       x   å       n   ð   ÿÿÿÿ      ¿                        Ö            ÿÿÿÿ   '   AUC_checkForUpdates                        ¹      
                                       aId   aUpdateKey	   aUrl   aObserver    Ãk  Zl  ò            ;    T  T T T R Ò3    UpdateParser