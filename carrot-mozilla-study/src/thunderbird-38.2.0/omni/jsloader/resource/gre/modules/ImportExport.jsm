ç¿s¹                ó  7   ¹   '   ë       	                   *       0     resource://gre/modules/ImportExport.jsm     PA                                                  ;   5       Q;   5      Q;   5      Q;    ¸   
=   : Q;    ¸   
=   	: Q;    ¸   
=   
: Q;    ¸   
=   : Q;    ¸   
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : QAf    0   Q=      Q=      Q?   Q×   Q×   Q×    QAY      ]   !;   ¸   "
   : ]   #   ]   $   ]   %;   ¸   "
   : ]   ;   ¸   "
   : ]   &0    Q$Ê(	3	ÐÐÐÕ3Õ1Õ2Õ0Õ0Ò*Ò(Ò5Ò%Ì)ËË$ÈÈÈ(*3HJÊVÑÈ  »Ê  ËÊ  ðÑÈ ¹ÑÎ é    Cu   Components   utils   Cc   classes   Ci   interfaces   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmI   resource://gre/modules/AppsUtils.jsmE   resource://gre/modules/Promise.jsmE   resource://gre/modules/Webapps.jsm   XPCOMUtils-   defineLazyModuleGetter   FileUtilsI   resource://gre/modules/FileUtils.jsm   NetUtilE   resource://gre/modules/NetUtil.jsm)   PermissionsInstaller_   resource://gre/modules/PermissionsInstaller.jsm	   Task?   resource://gre/modules/Task.jsm!   EXPORTED_SYMBOLS'   kAppArchiveMimeType5   application/openwebapp+zip)   kAppArchiveExtension	   .wpk%   kAppArchiveVersion   PR_RDWR   PR_CREATE_FILE   PR_TRUNCATE   ImportExport   getUUID   async   export!   _importHostedApp%   _importPackagedApp   extractManifest                     ImportExport                  ÿÿÿÿ      debug                        ¹                                            	   aMsg ÷  c  (                  ÿÿÿÿ   #   readObjectFromZip                    ¹      T                                    aZipReader   aPath   istream   converter   res  y  	  3             T  ¸    
T :     ;   â   =   T : QT  ¸   
T :    Q;   5   ¸   
;   5   :   QV  =   
0   	Q  Q;   ¸   
V  ¸   
;   ¸   
V   V   ¸   
:  : D   Q=   : : W  Q   :  Qv  Q;   â   =   T =   V  : QÈ    V  Í×9Í
È<ÑÊ<È>Ï@O×Û/ÿÿÿ×ÎBÿÿÿõÍDÌéG    hasEntry   debug/   ZIP doesn't have entry    getInputStream   CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   charset   UTF-8	   JSON   parse!   ConvertToUnicode   NetUtil/   readInputStreamToString   available      error reading     from ZIP:     ÿÿÿÿ         e         }   S       Ñ   .   ÿÿÿÿ   ÿÿÿÿ   3   this.ImportExport.getUUIDÁ                 =       ¹                                 
             uuidGenerator,	  à	  K             ;    5   ¸   
;   5   :    QV   ¸   
:  ¸   
:  ÑÊLÈNËÎ(    Cc;   @mozilla.org/uuid-generator;1   getService   Ci!   nsIUUIDGenerator   generateUUID   toString   ÿÿÿÿ   3   this.ImportExport.export<Á               |      ¹   O   8                            D  	   aApp   .generator   .genrval	   meta   dir   files   zipWriter	   uuid   zipFile	   blobò
  2  V             É   Ê   ÐQ       =    p;   â   =      5   : Q   5   =      =   p   5   ;   5   	5   
   =   pY      5   ]      5   ]   ;   ]      Q;   â   =      5   =      5   : Q;   5   ¸   
;   5   :    Q   ¸   
   5   : Q   ¸   
   5   : Q   ¸   
:   D   Q   ¸   
:      =   pZ      Q   5   ¸   
=   :    4   ¸    
=   !: Q   ¸    
=   ": Q      ¸    
=   #: Q;   5   $¸   
;   5   %:    QA¸   &
:     	Q;   '¸   (
=   )Z  =   *`      	;   +`  :    
Q;   â   =   ,   
5   -: Q   ¸   .
   
;   /;   0;   1: Q   QÆ       Q   Q   Q;   â   =   2: Q;   5   3¸   
;   5   4:    Q;   5¸   6
  :    Q   ¸   7
      Ù   8: Q  ¸   9
=   :;   ;¸   <
:  ;   5   %5   =   B: Q  ¸   >
A   : Q  ¸   ?
:  Q;   @5   A¸   B
=   C:    Q       =   Dp   5   E  
Y     5   ;   +]   F;   G]   HC]   IR   QÈÇ   `Æ      Qv   Q;   â   =   J   : Q  ¸   ?
:  Q  
¸   K
B: Q=   LpÈÇ    Y      ]   MC]   N   ÌY   ]   MC]   N   Ì  ·VÌY\Þ^ÐdÚiÏÏÐqïÛÉÚÚÌÊÌyÊÖ/ÕÚÕ  ÑÊ  ÉÈÉ  ÑÉÏ  ÉÞæ _ÛÓ
ÑÊ  É
ÑÉßÝ*Ï  Ö  ¥Ð
ÖÉ
ÕÕ%Ê%  ­ÐÓÙÐÑÎÜ    NoSuchApp   debug   Exporting    manifestURL   installState   installed)   AppNotFullyInstalled   appStatus   Ci   nsIPrincipal)   APP_STATUS_CERTIFIED7   CertifiedAppExportForbidden   InstallOrigin   installOrigin%   kAppArchiveVersion   version%   Adding files from    basePath   /   id   Cc3   @mozilla.org/file/local;1   createInstance   nsIFile   initWithPath   append   exists   isDirectory   NoAppDirectory   origin   startsWith   app://	   push   update.webapp   application.zip   manifest.webapp1   @mozilla.org/zipwriter;1   nsIZipWriter   getUUID   FileUtils   getFile	   TmpD%   mozilla-temp-files)   kAppArchiveExtension#   Creating archive 	   path	   open   PR_RDWR   PR_CREATE_FILE   PR_TRUNCATEM   Adding metadata.json to exported blob.K   @mozilla.org/io/string-input-stream;1)   nsIStringInputStream	   JSON   stringify   setData   length   addEntryStream   metadata.json	   Date   now'   COMPRESSION_DEFAULT   forEach   close   Services   wm'   getMostRecentWindow#   navigator:browser#   NoWindowAvailable	   File	   name'   kAppArchiveMimeType	   type   temporary   Error:    remove   ZipWriteError   value	   done    ÿÿÿÿ          stream      s      win             7   this.ImportExport.export</<Å               w       ¹   
   "                                       aName	   file t  ¢                 ¸    
:     QV   ¸   
T  : Q;   â   =   V   5   =   : Q  ¸   
V   5   ;   5   5   	V   B: QÌÈÒãÕÏ   ,    clone   append   debug   Adding    leafName!    to export blob.   addEntryFile   Ci   nsIZipWriter'   COMPRESSION_DEFAULT    ÿÿÿÿ          e          c        U  ÿÿÿÿ   ò  N   ÿÿÿÿ
      ÿÿÿÿ   E   this.ImportExport._importHostedAppÁ               e       ¹      '                                       aZipReader   aManifestURL   manifest    Ã  »             ;    â    =   T : QT  ¸   
=   :     =   p;   â   T  =   :    QV       =   pV   ×ÏÒÈ    debug+   Importing hosted app    hasEntry   manifest.webapp   NoManifestFound#   readObjectFromZip   ÿÿÿÿ   I   this.ImportExport._importPackagedAppÁ               ó       ¹      U                                D      aZipReader   aManifestURL	   aDir	   file   appZipReader   ±  Ë             ;    â    =   T : Q   ¸   
=   :     =   p   ¸   
=   :     =   p   Qf    ¸   
A   : Q;   5   	¸   

;   5   :    QV   ¸   
   : QV   ¸   
=   :     =   pZ  ;   â   V   =   : `      `  ×ÑÑ  ØÖ  àÑÊ  àÈÔÐÚ4Ê    debug/   Importing packaged app    hasEntry   update.webapp+   NoUpdateManifestFound   application.zip   NoPackageFound   forEach   CcA   @mozilla.org/libjar/zip-reader;1   createInstance   Ci   nsIZipReader	   open   manifest.webapp   NoManifestFound#   readObjectFromZip                     update.webapp      application.zip                  ÿÿÿÿ   M   this.ImportExport._importPackagedApp/<Å                 P       ¹                                 
            aName Î  <  Ù                ¸    
:        Q      ¸   
T  : Q   ¸   
T        : QÌÎØÝ     clone   append   extract   ÿÿÿÿ   3   this.ImportExport.import<Á               §
      ¹   y   ç      	                C     D     aBlob   .generator   .genrval   isFile   zipFile	   meta   appDir   manifest   zipReader  7:  ð             É   Ê   ÐQ    D   Q    ;    5   r   =   p   ;    5   r   Q       =   p;   5   ¸   
;    5   :    Q   ¸   	
   5   
: Q;   â   =      5   : Q   Q   Q   	Q;   5   ¸   
;    5   :    
Q   
¸   
   : QÆ       Q   Q   Q   Q   Q  
¸   
=   :     =   p;   â     
=   :   Q      =   p;   â   =   ;   â     : : Q  5   ?I   =   p;   ¸   
  5   :    Q      =   p  ;   ¸   
:  0   Q  A¸   !
:  0    Q  ;   #¸   $
;   5   %f   B: 5   0   "Q;   #¸   $
;   5   %Z  =   &`     5    `  C:   Q  
¸   
=   ':    Q   Q      A¸   (
  
  5     : - Á
:  ¸   )
:  5   *   Q   
5   +  	Q¸   )
:  5   *   Q   
5   +   QQQ   %A¸   ,
  
  5   :   	Q;   -¸   .
  	:     =   /p  ¸   0
:     Q   ¸   1
=   2: Q;   3¸   4
  	:    QY   ;   ¸   5
   5      : ¸   6
A   A   : ]   +B]   *  Ë  ÐQ    	5   70   7Q    	5   80   8Q  ;   :¸   ;
:  0   9Q  C0   <Q  >0   =Q  =   ?0   >Q  B0   @Q  B0   AQ  B0   BQ  >0   CQ  ;   :¸   ;
:  0   DQ  ;   :¸   ;
:  0   EQ  ;   -¸   G
   : 0   FQ  ;    5   I5   J0   HQ  B0   KQ    	5   L0   LQ     Æ      Q   Q   Q  =   N  5    0   MQY   ;   ¸   O
    B: ]   +B]   *  Ë  Ð- Á
:  ¸   )
:  5   *   Q   
5   +   Q¸   )
:  5   *   Q   
5   +   QQQ      ;    5   P5   Q   ;    5   P5   R   Q  ;   -¸   T
  	: 0   SQ;   â   =   U   : Q  5   S      =   Vp   E   0Q  5   S;    5   P5   QE   Q  	5   M   üÆ      Q   Q;   W5   X¸   Y
;   Z5   M@@:    Q   &Æ      Qv   Q=   [pÈÇ       5   \=   ]   =   [p     5   ^¸   _
×: 0    Q  5    ;   5   &q   =   `p  ¸   a
  5   b  5    : Q     5   ^0   MQÈÇÈÇ   Æ      Q;   W5   X¸   Y
  5   @@:    Q     ¸   c
=   d: 0   MQ  ;    5   P5   R0   SQ  	5   e   !  =   f0   >Q  C0   @QÈÇ  ;   ¸   h
    	: 0   gQ;   5   &  5      9Q;   i¸   j
Y     5   M]   M  5   ]     	]   kB@: Q;   ¸   l
@  	  : QY   ;   ¸   m
:  ]   +B]   *  Ë  ÐQ;   -¸   n
  :    Q     	0   kQ;   ¸   o
=   pY     5    ]       ]   ]: Q;   ¸   o
=   qY      ]   ]: Q;   W5   r¸   s
@=   t;   3¸   4
Y     5   ]   : : QÈÇt   x   Æ      Qv   Q;   â   =   u   : Q  E   Q  ¸   v
:       ¸   w
C: Q   pÈÇt   
      
¸   x
:  Qu Y   Z     5   `      	`  ]   +C]   *   ÌY   ]   +C]   *   Ì ²  ðÌÌ
ÑÖÛ
ÉÚÞÑÊ ÉÕ Ñé
ÑÔÉ
ÞÿÿÿëÌ
ÖÉ "ÑÉÍ
ÉÛ $ÎÖ!ÉÏ 'É
ÑÉ
Ü
Ô /ÉèÞ×É
Ñ
ÌÉÕ
ÑÉÛ @ÊÌ @ÎË HÕÕÑÉÌÌÐÌÌÌÌÑÉÑÉÖÉÚÌÕ ßÛÜé ^ÉèÙÙÕÖÉÙÐ
 jËàÊÑ'ÝÎÓÎÐ
Ø
ÉÕ
ä
ÞÌÝÉÖÉÚÊ
Ð
ÎÛÉÛÌ
Ï
Ï
Ê  Í  ÑÙÑÉÐÑ0ÏÊ ¡Ñ0Ê £×ÑÏÿÿÿï ¥ÐÓÙ×ÑÒÒÉÎÛ
    Ci   nsIDOMBlob   NoBlobFound   nsIDOMFile-   UnsupportedBlobArchive   Cc3   @mozilla.org/file/local;1   createInstance   nsIFile   initWithPath   mozFullPath   debug   Importing from 	   pathA   @mozilla.org/libjar/zip-reader;1   nsIZipReader	   open   hasEntry   metadata.json'   MissingMetadataFile#   readObjectFromZip   NoMetadata   metadata:    uneval   version!   IncorrectVersion-   DOMApplicationRegistry'   getAppByManifestURL   manifestURL'   AppAlreadyInstalled   localId   _nextLocalId   id   getUUID   basePath   FileUtils   getDir   dirKey   webapps   application.zip%   _importPackagedApp	   next	   done   value!   _importHostedApp   AppsUtils   checkManifest   InvalidManifest   clone   append   manifest.webapp	   JSON   stringify   _writeFile	   then	   name   csp   installTime	   Date   now   removable   progress   installState   installed#   downloadAvailable   downloading)   readyToApplyDownload   downloadSize   lastUpdateCheck   updateTime   manifestHash   computeHash   installerAppId1   nsIScriptSecurityManager   NO_APP_ID%   installerIsBrowser	   role   origin   app://   _openPackage   nsIPrincipal+   APP_STATUS_PRIVILEGED)   APP_STATUS_INSTALLED   appStatus)   getAppManifestStatus   Signed app? +   InvalidPrivilegeLevel   Services   io   newURI   aManifest   InvalidOrigin   scheme   app   prePath   substring   DuplicateOrigin   moveTo   parent   resolve   /   appcache_path   pending	   kind   appKind)   PermissionsInstaller%   installPermissions   manifest#   updateAppHandlers   _saveApps   cloneAppObject!   broadcastMessage   Webapps:AddApp3   Webapps:Install:Return:OK   obs   notifyObservers#   webapps-installed   Import failed:    exists   remove   close    ÿÿÿÿ          app      isPackage      appFile      manifestFile      manifestString                        webapps                         7   this.ImportExport.import</<Å                          ¹                                           )  §)  B            ;    â    =   : QÓ    debug   Manifest saved.          7   this.ImportExport.import</<Å                        ¹                                             aError µ)  ì)  B            ;    â    =   T  : Q×*    debug/   Error saving manifest:                  reader      isSigned      maxStatus                   uri             	      e                    uri       ÿÿÿÿ          e         C	         Õ       Ë  +         À  ÿÿÿÿ   ;  t         ½  ð         ü           »            á	  ]   ÿÿÿÿ
   ý    	     ÿÿÿÿ   E   this.ImportExport.extractManifest<Á               D      ¹      ´                       B      D     aBlob   .generator   .genrval   isFile   zipFile   zipReader   manifest;  JA  ¹            É   Ê   ÐQ    D   Q    ;    5   r   =   p   ;    5   r   Q       =   p;   5   ¸   
;    5   :    Q   ¸   	
   5   
: Q;   â   =      5   : Q;   5   ¸   
;    5   :    Q   ¸   
   : Q   Q   ¸   
=   :    8;   â      =   :    Q       =   p   ³   ¸   
=   :    Æ       Q;   5   ¸   
;    5   :    Q   ¸   
  =   : Q;   â      =   :   Q   ¸   
:  Q      =   pÈÇ   =   pt   
      ¸   
:  Qu Y      ]   C]      ÌY   ]   C]      Ì ç ¹ÌÌ
ÑÖÛ
ÉÚÞÑÊ ËÉÕ  Ñ
3ÔÉ
ËÑ  ÑÑÊ ØÉÚÔÉÐ
ÍÐÒÜ    Ci   nsIDOMBlob   NoBlobFound   nsIDOMFile-   UnsupportedBlobArchive   Cc3   @mozilla.org/file/local;1   createInstance   nsIFile   initWithPath   mozFullPath   debug+   extractManifest from 	   pathA   @mozilla.org/libjar/zip-reader;1   nsIZipReader	   open   hasEntry   manifest.webapp#   readObjectFromZip   NoManifest   application.zip   openInner   close'   MissingManifestFile   value	   done    ÿÿÿÿ          innerReader       ø         c     ÿÿÿÿ
   