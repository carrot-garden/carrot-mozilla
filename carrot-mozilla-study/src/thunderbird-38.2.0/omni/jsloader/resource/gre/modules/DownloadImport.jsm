ç¿s¹                W  (   ¹                                       0     resource://gre/modules/DownloadImport.jsm     C                                        Af    0    Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   ¸   

=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q×ÿ   Q>   Q×   Q×   QA   0   QA5   Y      ]   
0   Q(	ÌÐÐÐÐÕ3ÒJÒFÒEÒGÒH(ÈÈÈ8Ì<>ËIÐ  Ä !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cu   utils   Cr   results   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   DownloadsI   resource://gre/modules/Downloads.jsm   OSC   resource://gre/modules/osfile.jsm	   Task?   resource://gre/modules/Task.jsm   SqliteC   resource://gre/modules/Sqlite.jsm   NetUtilE   resource://gre/modules/NetUtil.jsm'   DOWNLOAD_NOTSTARTED)   DOWNLOAD_DOWNLOADING   DOWNLOAD_PAUSED   DOWNLOAD_QUEUED   DownloadImport   prototype                     DownloadImport                  ÿÿÿÿ   '   this.DownloadImportÁ                        ¹                                              aList   aPath  ´  ð  8             AT  0    QAT 0   QÊÊ 	   list	   path   ÿÿÿÿ   I   this.DownloadImport.prototype.importÁ                   !       ¹                                          Ê	  ?  I             ;    ¸   
    ¸   
A: : Ø  ÀJÿÿÿì  À 	   Task   spawn	   bind   ÿÿÿÿ      task_DI_import                       ¹   <                                     .generator   connectionü	  .  J             É   Ê   ÐQ;    ¸   
Y   A5   ]   :    Ë  Ð   QÆ       Q   Q  ¸   
:    Ë  Ð   Q   ×   ;   =   R p  ¸   
=   :   Ë  Ð   Q   - Á
:  Æ      Q  Bm5      QÆ      Q   Q   Q   Q   Q   Q   Q   Q   
Q   	Q   Q   Q   Q   Q   Q   Q   Q  ¸   	
=   
:    Q  ¸   	
=   :    Q  ¸   	
=   :    Q  ¸   	
=   :    Q  ¸   	
=   :    Q  ¸   	
=   :    Q  ¸   	
=   :    Q  ¸   	
=   :    	Q  ¸   	
=   :    
Q  ¸   	
=   :    Q  ¸   	
=   :    QB   Q  ¸   	
=   : ?   Q    Æ      Qv   QÈÇ           ;   =   R pB   Q   x;   y   (;   y   ;   y   ;   y   z   !C   Q         Q   ÈÇ  ß;   ¸   
   : ¸   
;   5   : 5    5      Q   ;   5   !5   "   QY   Y      ]   #   ]   ]   
Y      ]      ]   $]   Y   =   %]   &   ]   ]   ';   (   XèR ]      ]   )     ]   *C]   +   ]   ,   	]   -   
]   .   Q          C0   /Q;   0¸   1
   :   Ë  Ð   QA5   2¸   3
   :   Ë  ÐQ         ¸   4
:  Q      ¸   5
:    Ë  ÐQÈÇ   ;Æ      Qv   Q;   6¸   7
=   8   : QÈÇ    ãQ¸   9
:  5   :ÿÿû¯ÈÇ ÈÇt   >   VÆ      Qv   Q;   6¸   7
   : QÈÇt   
   "   ¸   ;
:     Ë  ÐQu    Ì  ¿JÌ
Ñ+ËÿÿÿèÓM ôÔÌÓVÈ
Ë[ÑÓ]Ú8 VÒ õÿþ`Ñ	ÉÑ	ÉÑÉÑÉÑÉÑÉÑÉÑÉÑÉÑÉÑÉlÑÐÛsËxzmQu
u
u
uÊ{XËXBÑÊÊ  ÓÛÊÏÊÏÊÏÏÈÊÌÊÊÐ  ¨ÌÑÓÒÎÕÌÕÓã]Ëÿÿÿðß  »ÓáÌÐ    Sqlite   openConnection	   path!   getSchemaVersion   Error   Unable to import in-progress downloads because the existing profile is too old.   execute7   SELECT * FROM moz_downloads   value   getResultByName   source   target   tempPath   startTime   state   referrer   maxBytes   mimeType)   preferredApplication   preferredAction   entityID   autoResumem   Attempted to import a row with an empty source column.'   DOWNLOAD_NOTSTARTED   DOWNLOAD_QUEUED)   DOWNLOAD_DOWNLOADING   DOWNLOAD_PAUSED   NetUtil   newURI   QueryInterface   Ci   nsIFileURL	   file   nsIMIMEInfo   saveToDisk   url   partFilePath	   copy	   type   saver	   Date   totalBytes   hasPartialData)   tryToKeepPartialData'   launchWhenSucceeded   contentType   launcherPath   canceled   Downloads   createDownload	   list   add   start   refresh   Cu   reportError5   Error importing download: 	   next	   done   close    ÿÿÿÿ          schemaVersion   	   rows                    row                   source      target      tempPath      startTime      state      referrer      maxBytes      mimeType   )   preferredApplication      preferredAction      entityID      autoResume      resumeDownload      targetPath   '   launchWhenSucceeded      downloadOptions      download                   ex                   ex       ÿÿÿÿ          ex       <   ,       <   ø     Í   V      Û   ù      }  !       C   æ  ÿÿÿÿ   Â   b         ñ   Ý        ¤           *           Ú  )         :  #   ÿÿÿÿ
   4   g   §   m    Ë    