ç¿s¹                Ï  
   ¹   ,   <      "                                chrome://messenger-newsblog/content/Feed.js     yL                       n    Y   Y   ]       ]      ]      ]      ]   o    Q;   Y   @]   @]   	@]   
@]   @]   @]   ;   R  ]   >]   @]   B]   @]   @]      a      b      a      a      	]      
]      ]      ]      ]      ]      a      a      b      a       b       a   !   b   !   a   "   b   "   ]   #   a   $   b   $   ]   %   ]   &   ]   '   ]   (   ]   )    ]   *   !]   +6   	Ê0		ÊÊÊÊ!Ð	046ÈEÊJÊOÊVÊeÊ  ®Ê  ÍÊ  ØÊ  ïÊ  ûÊ Ê Ê Ê ,Ê 7Ê EÊ RÊ aÊ kÊ xÊ Ê Ê Ê ­Ê ¿Ê åÊ ýÊ =Ê XÐ    FeedCache   mFeeds   putFeed   getFeed   removeFeed   normalizeHost	   Feed   prototype   description   author   request   server!   downloadCallback   resource   Array   items   itemsStored   mFolder   mInvalidFeed   mFeedType   mLastModified   folder	   name   folderName   download   onDownloaded   onProgress   onDownloadError   onParseError   onUrlChange   url   title   lastModified   quickMode   options   categoryPrefs	   link   parse   invalidateItems%   removeInvalidItems   createFolder   storeNextItem'   cleanupParsingState   notify   ÿÿÿÿ   #   FeedCache.putFeedÁ                        ¹                                              aFeed   M               A5    A¸   
T  5   : T  8QÖÈ'    mFeeds   normalizeHost   url   ÿÿÿÿ   #   FeedCache.getFeedÁ               2       ¹                                           	   aUrl   index d  ì               A¸    
T  :    QV   A5   q   A5   V   7@ËÈËÌ    normalizeHost   mFeeds   ÿÿÿÿ   )   FeedCache.removeFeedÁ               0       ¹                                           	   aUrl   index   }               A¸    
T  :    QV   A5   q   A5   V   &QËÈËÌ    normalizeHost   mFeeds   ÿÿÿÿ   /   FeedCache.normalizeHostÁ                n       ¹      #                                  	   aUrl     !                Q;    5   ¸   
T  @@:    QV   V   5   ¸   
:  6   QV   5   ÈÈ      Qv   QT  ÈÈ    O
ÖÈÔÉÒ)ÌÍ    Services   io   newURI	   host   toLowerCase	   spec    ÿÿÿÿ          normalizedUrl        ÿÿÿÿ          ex            S          M   ÿÿÿÿÿÿÿÿM             U      ÿÿÿÿÿÿÿÿe            ÿÿÿÿ   	   Feed                 )       ¹                                              aResource   aRSSServer      0             AT  ¸   
;   5   : 6    QAT 6   QÕÉÊ    resource   QueryInterface   Ci   nsIRDFResource   server   ÿÿÿÿ   +   Feed.prototype.folderÁ                          ¹                                              A  E             A5        mFolder   ÿÿÿÿ   +   Feed.prototype.folderÁ                        ¹                                               aFolder Q  ~  J             AT  6    QÊ    mFolder   ÿÿÿÿ   '   Feed.prototype.nameÁ                 Q       ¹                                           	   name  ^  O             A5    D   QA5   D   QA5      QV   ¸   
     =   : ¸   
    =   : RãÕØ=    title   description   url   replace          [\n\r\t]+      [\x00-\x1F]+      ÿÿÿÿ   3   Feed.prototype.folderNameÁ                        ¹      &                                         folderName   defaultNameq  
  V       	      A5       A5    A5   D   QA5   D   Q=   ¸   
>×P:    Q;   5   ¸   
=   :   QA;   ¸   	
A5   
5   V   V  C: 6    ]çÈÖÈØ_ÉbE    mFolderName   title   description      substr   FeedUtils   strings#   GetStringFromName   ImportFeedsNew-   getSanitizedFolderName   server   rootMsgFolder   ÿÿÿÿ   /   Feed.prototype.downloadÁ              Æ      ¹   ;   ¼                         X             aParseItems   aCallback   uri   lastModified  
  P  e       
      AT 6    QAT  @   C   T     C   B6   Q;   5   ¸   
;   5   :    QV   A5   6   Q;   	¸   

V   :     8;   	5   ¸   
=   V   5   : QA¸   
A: Q;   ¸   
A5   :    .A5       !A5    ¸   
A;   	5   : Q;   5   5      S  Q;   5   ¸   
=   :   QV  5   ¸   
:      A¸   
:  QÈÈA;   5   ¸   
;   5   : 6   QA5   A5    6   QA5   ¸   !
=   "A5   C: QA5   5   #5   $;   5   %5   &;   5   %5   '6   $QA5   (D   Q=   )  QA5   ¸   *
=   +V  : QA5   =   -6   ,QA5   ¸   .
=   /: QA5   ¸   *
=   0;   	5   1: QA5   ;   	5   36   2QA5   A5   56   4QA5   A5   76   6QA5   A5   76   8Q;   ¸   9
A: QA5   ¸   :
@: QhÊmÎÒrÑÊrÈtÐÐxäÍÒÜÏË  
ÖÈ
ÐÌÒÊ  ÉÒÝàÐx  ÖÚÑÖàÖÒÒÒÑÒ !   downloadCallback   parseItems   CcG   @mozilla.org/network/standard-url;1   createInstance   Ci   nsIURI	   spec   url   FeedUtils   isValidScheme   log	   infoM   Feed.download: invalid protocol for -    onParseError   FeedCache   getFeed   downloaded'   kNewsBlogFeedIsBusy   Services   io   offline   wm'   getMostRecentWindow   mail:3pane   MailOfflineMgr   getNewMail   storeNextItem   requestO   @mozilla.org/xmlextras/xmlhttprequest;1#   nsIXMLHttpRequest   onprogress   onProgress	   open   GET   channel   loadFlags   nsIRequest#   LOAD_BYPASS_CACHE   INHIBIT_CACHING   lastModified;   Sat, 01 Jan 2000 00:00:00 GMT!   setRequestHeader#   If-Modified-Since   responseType   document!   overrideMimeType   text/xml   Accept   REQUEST_ACCEPT   timeout   REQUEST_TIMEOUT   onload   onDownloaded   onerror   onDownloadError   ontimeout   putFeed	   send    ÿÿÿÿ         win          M   ÿÿÿÿÿÿÿÿR            ÿÿÿÿ   7   Feed.prototype.onDownloadedÁ               9      ¹      N                                       aEvent   request   isHttp   url	   feed%   lastModifiedHeader k  |  ®             T  5       Q     ¸   
V   5   5   5   :   QV   5   5   5     QV  E   &QV   5   X ÈD   QV   5   X,   ;   5   ¸   	
T  : Q;   
5   ¸   
=   V  : Q;   ¸   
V  :   QV      ;   =   R pV   ¸   
=   :   QV  V  E   QV  5      V     @6   QV  ¸   
:  QÍß	ÈØêØßÐÈË  ÅÐÈ×	ÐÏ    target	   test   channel   originalURI   scheme	   spec   status	   Feed   prototype   onDownloadError   FeedUtils   log   debugI   Feed.onDownloaded: got a download -    FeedCache   getFeed   Errory   Feed.onDownloaded: error - couldn't retrieve feed from cache#   getResponseHeader   Last-Modified   mLastModified   parseItems   parse   ^http(s?)       ÿÿÿÿ   3   Feed.prototype.onProgressÁ               |       ¹      %                                        aEvent   request   url	   feed   Ë  Í             T  5       QV   5   5   5     Q;   ¸   
V  :   QV  5      5V  5   ¸   
V  T  5   T  5   	T  5   
: QÍØÐÈÉäÈ  Ô@    target   channel   originalURI	   spec   FeedCache   getFeed!   downloadCallback   onProgress   loaded   total!   lengthComputable   ÿÿÿÿ   =   Feed.prototype.onDownloadErrorÁ              Ì       ¹      6                                     aEvent   request   url	   feed é  ?  Ø       
      T  5       QV   5   5   5     Q;   ¸   
V  :   QV  5      q  Q;   5     QV   5   	X0   ;   5   
W  Q     Qv  QÈ    V  5   ¸   
V  V  : QÈ;   ¸   
V  : QÍØÐÈÉ
Ï"Í
ÔÓÝÔ    target   channel   originalURI	   spec   FeedCache   getFeed!   downloadCallback   FeedUtils/   kNewsBlogRequestFailure   status'   kNewsBlogNoNewItems   downloaded   removeFeed    ÿÿÿÿ         error                     ex         a   &       L   k   ÿÿÿÿ                ÿÿÿÿ   7   Feed.prototype.onParseErrorÁ                 [       ¹                                 
             aFeed Z  =   ï             T      T  C6    QT  5      %T  5   ¸   
T  ;   5   : Q;   ¸   
T  5   : QÊÈàØ     mInvalidFeed!   downloadCallback   downloaded   FeedUtils)   kNewsBlogInvalidFeed   FeedCache   removeFeed   url   ÿÿÿÿ   5   Feed.prototype.onUrlChangeÁ                 V       ¹                                 	             aFeed   aOldUrl  W   !  û             T      T  C6    QT  5      %T  5   ¸   
T  ;   5   : Q;   ¸   
T : QÊÈàÓ    mInvalidFeed!   downloadCallback   downloaded   FeedUtils   kNewsBlogCancel   FeedCache   removeFeed   ÿÿÿÿ   %   Feed.prototype.urlÁ                        ¹      %                                         ds   url!  ¨"        	      ;    ¸   
A5   :    QV   ¸   
A5   ;    5   C:   QV     ,V  ¸   
;   5   : 5   	W  Q   A5   5   
W  QV  ÒÈÜÈ'ÕÒÐ    FeedUtils%   getSubscriptionsDS   server   GetTarget   resource   DC_IDENTIFIER   QueryInterface   Ci   nsIRDFLiteral   Value   ValueUTF8   ÿÿÿÿ   )   Feed.prototype.titleÁ                 o       ¹   
                                            ds   title¶"  #        	      ;    ¸   
A5   :    QV   ¸   
A5   ;    5   C:   QV     'V  ¸   
;   5   : 5   	W  QV  ÒÈÜÈÕÍ    FeedUtils%   getSubscriptionsDS   server   GetTarget   resource   DC_TITLE   QueryInterface   Ci   nsIRDFLiteral   Value   ÿÿÿÿ   )   Feed.prototype.titleÁ               ¼       ¹   
   ,                                        aNewTitle   ds   old_title ¬#  I%        	      T      ;    ¸   
A5   :    Q;    5   ¸   
T  : U  QV   ¸   
A5   ;    5   C:   QV     0V   ¸   
A5   ;    5   V  T  : Q   (V   ¸   	
A5   ;    5   T  C: QÒÈÔÜÈ+ëã>    FeedUtils%   getSubscriptionsDS   server   rdf   GetLiteral   GetTarget   resource   DC_TITLE   Change   Assert   ÿÿÿÿ   7   Feed.prototype.lastModifiedÁ                 o       ¹   
   (                                         ds   lastModified^%  ¶&  ,      	      ;    ¸   
A5   :    QV   ¸   
A5   ;    5   C:   QV     'V  ¸   
;   5   : 5   	W  QV  ÒÈÑÊ /ÈÕÍ    FeedUtils%   getSubscriptionsDS   server   GetTarget   resource   DC_LASTMODIFIED   QueryInterface   Ci   nsIRDFLiteral   Value   ÿÿÿÿ   7   Feed.prototype.lastModifiedÁ               ±       ¹   
   8                                        aLastModified   ds!   old_lastmodified Ë&  ß(  7      	      ;    ¸   
A5   :    Q;    5   ¸   
T  : U  QV   ¸   
A5   ;    5   C:   QV     0V   ¸   
A5   ;    5   V  T  : Q   (V   ¸   	
A5   ;    5   T  C: QÒÈÔÑÊ ;È+Û ?ÉãI    FeedUtils%   getSubscriptionsDS   server   rdf   GetLiteral   GetTarget   resource   DC_LASTMODIFIED   Change   Assert   ÿÿÿÿ   1   Feed.prototype.quickModeÁ                 ~       ¹      %                                         ds   quickModeò(  $*  E      	      ;    ¸   
A5   :    QV   ¸   
A5   ;    5   C:   QV     6V  ¸   
;   5   : W  QV  5   	=   
W  QV  ÒÈÜÈÕÈÔ    FeedUtils%   getSubscriptionsDS   server   GetTarget   resource   FZ_QUICKMODE   QueryInterface   Ci   nsIRDFLiteral   Value	   true   ÿÿÿÿ   1   Feed.prototype.quickModeÁ               ±       ¹   
   A                                        aNewQuickMode   ds   old_quickMode 7*  D,  R      	      ;    ¸   
A5   :    Q;    5   ¸   
T  : U  QV   ¸   
A5   ;    5   C:   QV     0V   ¸   
A5   ;    5   V  T  : Q   (V   ¸   	
A5   ;    5   T  C: QÒÈÔÑÊ VÈ+Û ZÉÛ ]%    FeedUtils%   getSubscriptionsDS   server   rdf   GetLiteral   GetTarget   resource   FZ_QUICKMODE   Change   Assert   ÿÿÿÿ   -   Feed.prototype.optionsÁ                 w       ¹      $                                         ds   optionsU,  N-  a      
      ;    ¸   
A5   :    QV   ¸   
A5   ;    5   C:   QV     2;   ¸   
V  ¸   
;   	5   
: 5   : @ÒÈÜ
ÈáÈÿÿÿõ    FeedUtils%   getSubscriptionsDS   server   GetTarget   resource   FZ_OPTIONS	   JSON   parse   QueryInterface   Ci   nsIRDFLiteral   Value   ÿÿÿÿ   -   Feed.prototype.optionsÁ               ò       ¹      5                                        aOptions   newOptions   ds   oldOptions _-  m/  k      
      T     ;    ¸   
T  :    ;    5      Q;    ¸   
A5   :   Q;    5   ¸   
;   ¸   
V   : : W   QV  ¸   	
A5   
;    5   C:   QV     1V  ¸   
A5   
;    5   V  V   : Q   )V  ¸   
A5   
;    5   V   C: QÔÈÏÒÈá&ÿÿÿçÈÜÈ,ìäA    FeedUtils   newOptions   _optionsDefault%   getSubscriptionsDS   server   rdf   GetLiteral	   JSON   stringify   GetTarget   resource   FZ_OPTIONS   Change   Assert   ÿÿÿÿ   9   Feed.prototype.categoryPrefsÁ                 =       ¹                                            #   categoryPrefsAcct/  :0  x            ;    ¸   
A5   : 5      QA5       
V   A5   5   ÒÍÌ    FeedUtils   getOptionsAcct   server   category   options   ÿÿÿÿ   '   Feed.prototype.linkÁ                 o       ¹   
                                            ds	   linkH0  *1        	      ;    ¸   
A5   :    QV   ¸   
A5   ;    5   C:   QV     'V  ¸   
;   5   : 5   	W  QV  ÒÈÜÈÕÍ    FeedUtils%   getSubscriptionsDS   server   GetTarget   resource   RSS_LINK   QueryInterface   Ci   nsIRDFLiteral   Value   ÿÿÿÿ   '   Feed.prototype.linkÁ               ¼       ¹   
   ,                                        aNewLink   ds   old_link 81  È2        	      T      ;    ¸   
A5   :    Q;    5   ¸   
T  : U  QV   ¸   
A5   ;    5   C:   QV     0V   ¸   
A5   ;    5   V  T  : Q   (V   ¸   	
A5   ;    5   T  C: QÒÈÔÜÈ+ëã=    FeedUtils%   getSubscriptionsDS   server   rdf   GetLiteral   GetTarget   resource   RSS_LINK   Change   Assert   ÿÿÿÿ   )   Feed.prototype.parseÁ                 o       ¹   	   3                           	              parserÜ2  ´4        	      ;    R     QAV   ¸   
AA5   5   : 6   Q@W   QA5      A@6   QAB6   QA>6   QA>6   QA¸   
:  Q	ÈØÉÈÈÈÈÌ    FeedParser   itemsToStore   parseFeed   request   responseXML   mInvalidFeed#   itemsToStoreIndex   itemsStored   storeNextItem   ÿÿÿÿ   =   Feed.prototype.invalidateItemsÁ                )      ¹      N                        #              ds   items	   itemÓ4  7  ­            ;    ¸   
A5   :    Q;    5   ¸   
=   A5   : QV   ¸   
;    5   A5   	C:   Q  Q   ®m  QV  ¸   

:  W  QV  ¸   
;   5   : W  Q;    5   ¸   
=   V  5   : QV   ¸   
V  ;    5   C:   QV     'V   ¸   
V  ;    5   V  C: QÈãV  ¸   
:  ÿÿÿGÒÈáÜÈ(  ¾ËÈÕÈä
ÚÈã ´ÕH    FeedUtils   getItemsDS   server   log   debugA   Feed.invalidateItems: for url -    url   GetSources   FZ_FEED   resource   getNext   QueryInterface   Ci   nsIRDFResource   trace;   Feed.invalidateItems: item -    Value   GetTarget   FZ_VALID   Unassert   hasMoreElements    ÿÿÿÿ         valid        j   ¾       l   §   ÿÿÿÿ   ÿÿÿÿ   C   Feed.prototype.removeInvalidItemsÁ              @      ¹   !                           C             aDeleteFeed   ds   items	   item   currentTime %7  ·<  ¿            ;    ¸   
A5   :    Q;    5   ¸   
=   A5   : QV   ¸   
;    5   A5   	C:   Q  Q;   
R  ¸   
:    Q  ­m  QV  ¸   
:  W  QV  ¸   
;   5   : W  QV   ¸   
V  ;    5   ;    5   C:    ÈÿÿÿV   ¸   
V  ;    5   C:   QV     9;   â   V  ¸   
;   5   : 5   : W  Q   >W  QV  V  ;    5   E   
QT      Èÿÿÿ	;    5   ¸   
=   V  5   : QV   ¸   
V  ;    5   A5   	C: QV   ¸   
V  ;    5   :    4;    5   ¸   
=   V  5   =   : Q   ;    ¸   
V   V  : QÈãV  ¸    
:  ÿÿþHÒÈáÜÈÒ( ½ËÈÕÈÙË Ë
A
ÚÈ4ßÈÿÿÿ÷ÍÚ
AääÙ
/à ÝÉÙ ÆÕ Í    FeedUtils   getItemsDS   server   log   debugG   Feed.removeInvalidItems: for url -    url   GetSources   FZ_FEED   resource	   Date   getTime   getNext   QueryInterface   Ci   nsIRDFResource   HasAssertion   FZ_VALID!   RDF_LITERAL_TRUE   GetTarget-   FZ_LAST_SEEN_TIMESTAMP   parseInt   nsIRDFLiteral   Value1   INVALID_ITEM_PURGE_DELAY   traceA   Feed.removeInvalidItems: item -    Unassert   hasArcOut3   Feed.removeInvalidItems:     is from more than one feed; only the reference to this feed removed!   removeAssertions   hasMoreElements    ÿÿÿÿ         lastSeenTime           ½         ¦  ÿÿÿÿÿÿÿÿæ          ÿÿÿÿt            ÿÿÿÿ   7   Feed.prototype.createFolderÁ                  ç       ¹      I                                   Ò<  ¤?  å      	      A5       AA5   5   ¸   
;   5   : ¸   
A5   : 6    Q   ¢  Q   Qv   Q;   5   	¸   

=   A5   =   A5   5   5   5   =   V   : QA5   5   ¸   
A5   :   QA5   5   ¸   
V  C@: QÈ    7ÓÊ ëÊ ëÎÒÖÍá ñ
Ø
Èã    folder   server   rootMsgFolder   QueryInterface   Ci+   nsIMsgLocalMailFolder)   createLocalSubfolder   folderName   FeedUtils   log	   infoY   Feed.createFolder: error creating folder - ''   ' in parent folder    filePath	   path	    --    getChildNamed   propagateDelete    ÿÿÿÿ          ex       xfolder            ;       K      ÿÿÿÿ   ÿÿÿÿ   9   Feed.prototype.storeNextItemÁ                T      ¹      ¥                         L           	   item¦@  ¾H  ý      
      ;    5      *;    B6   QA¸   
A;    5   : QA5    D   QA5   Ù       W  Q;    5     QA¸   
:  QA5       ;    5   	W  QA¸   
AV  : QÈÈA5   A5   
7   QV   ¸   
:     A5   #?
6   QQA5       A¸   
A;    5   	: QA5   
#?
6   
QQV   5   5   E   QV   5   5   5      8V   5   5   ¸   
V   5   A5   
A5   Ù   : QA5   
A5   Ù      ^A5       *A;   5   ¸   
;   5   : 6   QA5   ¸   
A×2;   5   5   : Q   qV   5   5   5      BV   5   5   ;   5   5   6   QV   5   5   ¸   
@: QA¸   
A;    5   : QÊÌ×ÍÌ
ÏÌ
ÏÑÒËÕ×ÕçÞË  %ÒY
ÒÊ (Éè 2ÓãÚ×;    FeedUtils!   CANCEL_REQUESTED'   cleanupParsingState   kNewsBlogCancel   itemsToStore   length!   kNewsBlogSuccess   createFolder   folder%   kNewsBlogFileError#   itemsToStoreIndex   store   itemsStored	   feed!   downloadCallback!   onFeedItemStored   storeItemsTimer   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer!   initWithCallback   TYPE_ONE_SHOT   hasNewMessages   biffState   nsIMsgFolder-   nsMsgBiffState_NewMail#   callFilterPlugins    ÿÿÿÿ      	   code        S   Q   ÿÿÿÿÿÿÿÿ¢             ÿÿÿÿ   E   Feed.prototype.cleanupParsingStateÁ               ø       ¹      E                                        aFeed   aCode   ds  àH  L  =            ;    ¸   
T  5   : QT  ¸   
B: QT ;   5   E   QT  5      T  T  5   6   Q;   ¸   
T  5   	:    QV   ¸   

:  Q;   5   ¸   
=   A5   : QA@6   QA=   6   QA>6   QA>6   QA@6   QT  5      T  5   ¸   
T  T : QØÏÜÑÔÈÏáÈÌÈÈÈÈÙ0    FeedCache   removeFeed   url%   removeInvalidItems   FeedUtils!   kNewsBlogSuccess   mLastModified   lastModified   getItemsDS   server   Flush   log   debugS   Feed.cleanupParsingState: items stored -    itemsStored   request   itemsToStore   #   itemsToStoreIndex   storeItemsTimer!   downloadCallback   downloaded   ÿÿÿÿ   +   Feed.prototype.notifyÁ                        ¹                                              aTimer JL  tL  X            A¸    
:  QÌ    storeNextItem