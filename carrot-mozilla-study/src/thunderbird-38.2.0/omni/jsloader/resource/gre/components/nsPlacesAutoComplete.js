ç¿s¹                q  ¾   ¹   {         7                   _            resource://gre/components/nsPlacesAutoComplete.js     ì         	                                                  !   "   #   $   %   &   '   (   )   *   +   ,   .   0   2   4   6                   	   (   x;    5   ¸   
=   : Q;    5   ¸   
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   	=   
: Q;   ¸   
A=   =   : Q;    5      Q;    5      Q;    5      Q=      Q=      Q=      Q;   5   5      Q;   5   5      Q;   5   5      Q;   5   5      Q;   5   5      Q>   Q?    Q×   !Q×   "Q×   #Q×   $Q×   %Q×   &Q×   'Q×	   (Q×
   )Q>   *Q?   +Q=   -   ,Q=   /   .Q=   1   0Q=   3   2Q=   5   4Q=   7   6Q;   ¸   8
A=   9=   :=   ;: Q;   <Y      ]   >   ]   ?   ]   @   ]   A;   ¸   B
Z  ;   5   C`   : ]   D6   =Q;   EY      
]   F   ]   G   ]   HZ   ]   I   ]   J   ]   K   ]   >   ]   ?   ]   @   ]   L   a   M   ]   N   ]   O   ]   P   ]   Q   ]   R   ]   S   ]   T   ]   U   ]   V   ]   W   ]   X   ]   Y    ]   Z   !]   [   "]   \   #]   ]   $]   ^   %]   _   &]   `   ']   a;    ¸   b
=   c: ]   d;   ¸   e
;   E: ]   f;   ¸   B
Z  ;   5   g`   ;   5   h`  ;   5   `  ;   5   C`  ;   5   i`  ;   5   j`  : ]   D6   =Q;   kY   @]   l   )a   m@]   n   *a   o@]   p   +a   q   ,]   F   -]   r   .]   G   /]   T   0a   s   1]   L   2]   t   3]   u   4]   O   5]   `   6]   a;    ¸   b
=   v: ]   d;   ¸   e
;   k: ]   f;   ¸   B
Z  ;   5   g`   ;   5   w`  ;   5   i`  ;   5   j`  : ]   D6   =Qn   xZ  ;   E`   ;   k`  o   xQA;   ¸   z
;   x: 6   yQ).6DJLNPRUÊg	  	  	  ¹	  Ú	 	 T	 ÑÚAÚ?Ò	LÒSÒHÐÐÐË)ËË.ÕÕÕÕÕ6ÈÈÈÈÈÈÈÈÈDJËLËNË%PËRËUËZÒZ\6g        ª  ¹  Ê  Ú  àÊÊ  ëÊ  ðÊ Ê ÐÎ Î  ÝÊÊ 'Ê 6Ê BÉÊ OÊ aÊ yÊ Ê Ê ÄÊ ÎÊ ÝÊ ÷Ê Ê Ê ,Ê VÊ ¦Ê çÊ Ê (Ê AÊ _Ê zÊ ØÊ ðÊ Ê Ê *Ê :Ê BÑ	ÈÑÈÐÎÎÎÎÎÎ FÎ N TÊ _Ê iÊ ~Ê Ê ûÊ AÊ UÊ iÊ nÊ Ê Ê §Ê ¸Ê ½Ê ÅÑ	ÈÑÈÐÎÎÎÎ ÉÎ ÏÉÉÏÿÿÿæÒÉ,    Components   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils-   defineLazyModuleGetter   PlacesUtilsM   resource://gre/modules/PlacesUtils.jsm%   TelemetryStopwatch[   resource://gre/modules/TelemetryStopwatch.jsm   NetUtilE   resource://gre/modules/NetUtil.jsm   Cc   classes   Ci   interfaces   Cr   results'   kBookTagSQLFragmentë  EXISTS(SELECT 1 FROM moz_bookmarks WHERE fk = h.id) AS bookmarked,
   (
     SELECT title FROM moz_bookmarks WHERE fk = h.id AND title NOTNULL
     ORDER BY lastModified DESC LIMIT 1
   ) AS btitle,
   (
     SELECT GROUP_CONCAT(t.title, ',')
     FROM moz_bookmarks b
     JOIN moz_bookmarks t ON t.id = +b.parent AND t.parent = :parent
     WHERE b.fk = h.id
   ) AS tags   kTopicShutdown   places-shutdown   kPrefChanged   nsPref:changed   MATCH_ANYWHERE-   mozIPlacesAutoComplete/   MATCH_BOUNDARY_ANYWHERE   MATCH_BOUNDARY   MATCH_BEGINNING=   MATCH_BEGINNING_CASE_SENSITIVE   kQueryIndexURL!   kQueryIndexTitle+   kQueryIndexFaviconURL+   kQueryIndexBookmarked1   kQueryIndexBookmarkTitle   kQueryIndexTags+   kQueryIndexVisitCount!   kQueryIndexTyped%   kQueryIndexPlaceId)   kQueryIndexQueryType1   kQueryIndexOpenPageCount#   kQueryTypeKeyword%   kQueryTypeFiltered'   kTitleTagsSeparator        )   kBrowserUrlbarBranch   browser.urlbar.K   kBrowserUrlbarAutocompleteEnabledPref)   autocomplete.enabled5   kBrowserUrlbarAutofillPref   autoFill?   kBrowserUrlbarAutofillTypedPref   autoFill.typed-   DOMAIN_QUERY_TELEMETRYe   PLACES_AUTOCOMPLETE_URLINLINE_DOMAIN_QUERY_TIME_MS/   defineLazyServiceGetter   gTextURIServiceA   @mozilla.org/intl/texttosuburi;1   nsITextToSubURII   AutoCompleteStatementCallbackWrapper   prototype   handleResult   handleError!   handleCompletion   executeAsync   generateQI9   mozIStorageStatementCallback   QueryInterface)   nsPlacesAutoComplete   startSearch   stopSearch   onValueRemoved   _openPagesCache!   registerOpenPage%   unregisterOpenPage   observe)   _databaseInitialized5   _getUnfilteredSearchTokens   _finishSearch   _executeQueries!   _stopActiveQuery   _notifyResults!   _syncEnabledPref   _loadPrefs   _getSearch/   _getSuggestionPrefQuery)   _getBoundSearchQuery/   _getBoundOpenPagesQuery+   _getBoundKeywordQuery-   _getBoundAdaptiveQuery   _processRow   _inResults   _addToResults   _hasBehavior   _setBehavior!   isSearchComplete   isPendingSearch   IDI   d0272978-beab-4adc-a3d4-04b76acfa4e7   classID1   generateSingletonFactory   _xpcom_factory+   nsIAutoCompleteSearchG   nsIAutoCompleteSimpleResultListener   nsIObserver1   nsISupportsWeakReference#   urlInlineComplete	   __db   _db   __hostQuery   _hostQuery   __urlQuery   _urlQuery   _queryURL   searchType+   _invalidateStatements   _closeDatabaseI   c88fae2d-25cf-4338-a1f4-64a320ea7440?   nsIAutoCompleteSearchDescriptor   components   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ      initTempTable               k       ¹      ,                                        aDatabase	   stmt   ÿ  g             T  ¸    
=   :    QV   ¸   
:  QV   ¸   
:  QT  ¸    
=   : W   QV   ¸   
:  QV   ¸   
:  QkÊkÈqÏÏvÊv	ÈÏÏ )   createAsyncStatementÇ   CREATE TEMP TABLE moz_openpages_temp (
       url TEXT PRIMARY KEY
     , open_count INTEGER
     )   executeAsync   finalizeë  CREATE TEMPORARY TRIGGER moz_openpages_temp_afterupdate_trigger
     AFTER UPDATE OF open_count ON moz_openpages_temp FOR EACH ROW
     WHEN NEW.open_count = 0
     BEGIN
       DELETE FROM moz_openpages_temp
       WHERE url = NEW.url;
     END   ÿÿÿÿ      fixupSearchText               /       ¹                                              aURIString   uri ë  Y               ;    â    T  :    Q;   ¸   
=   V   : ÍÈÕ/    stripPrefix   gTextURIService!   unEscapeURIForUI   UTF-8   ÿÿÿÿ      stripPrefix               Ô       ¹      C                                        aURIString   uri   T               T     QV   ¸    
=   : >   V   ¸   
×: W   Q   hV   ¸    
=   : >   V   ¸   
×: W   Q   4V   ¸    
=   : >   V   ¸   
×: W   QV   ¸    
=   : >   V   ¸   
×: W   QV   ÈÐÍÍÐÍÍÐÍÈÐÍÈ    indexOf   http://   slice   https://   ftp://	   www.   ÿÿÿÿ      safePrefGetter                     ¹   	   4                                     aPrefBranch   aName   aDefault   types	   type   Ý  D  ¹             Y   =    ]   =   ]   =   ]      QV   T '7  QV      =   pT  =   V  =   Á
T :      Qv  QT ÈÈ    ÊÊÏÊÙÉÌÍ 	   Bool   boolean   Int   number	   Char   string   Unknown type!   get	   Pref    ÿÿÿÿ         e         G   "       j      ÿÿÿÿÿÿÿÿz             ÿÿÿÿ   I   AutoCompleteStatementCallbackWrapper                        ¹                                               aAutocomplete   aCallback   aDBConnection   X    Ú             AT  6    QAT 6   QAT 6   QÊÊÊ    _autocomplete   _callback   _db   ÿÿÿÿ   %   ACSCW_handleResult               '      ¹                                             aResultSet   arguments é  ?  æ             	W   QA5    5   ¸   
A5    V   O Qà=    _callback   handleResult   apply   ÿÿÿÿ   #   ACSCW_handleError               '      ¹                                             aError   arguments k  ¼  ë             	W   QA5    5   ¸   
A5    V   O Qà<    _callback   handleError   apply   ÿÿÿÿ   -   ACSCW_handleCompletion               Y      ¹                                             aReason   arguments ò  #  ð             	W   QA5    ¸   
:   E   QA5    ¸   
A5   :    %A5   5   ¸   
A5   V   O QÍÊÓàA    _autocomplete!   isSearchComplete   isPendingSearch   _handle   _callback!   handleCompletion   apply   ÿÿÿÿ   %   ACSCW_executeAsync                 $       ¹                                              aQueries "!  ¶!              AA5   ¸   
T  T  Ù   A: 6    Ù É6    _handle   _db   executeAsync   length   ÿÿÿÿ   )   nsPlacesAutoComplete                  Ù      ¹      ±                          8              baseQuery:#  A                     Q;    ¸   
A=      : QAA   6   Q;    ¸   
A=      : Q;    ¸   
A=      : Q;    ¸   
A=      : Q;    ¸   
A=      : Q;    ¸   
A=      : Q;    ¸   
A=   	   : Q;    ¸   
A=   
   	: Q;    ¸   
A=      
: QA=   6   Q;    ¸   
A=      : Q;    ¸   
A=      : QA;   5   ¸   
;   5   : ¸   
;   : 6   QA¸   
C: QA¸   
C: QA;   5   ¸   
;   5   : 6   QA5   ¸   
A;   B: Q  Ë    6Û [ÍÛÛ jÛÛÛ ÛÛ Û ¶Ë ÂÛÛ ÒÒÊ ÒÊ ÒÉÍÍÒÊ ÙÉØ2    XPCOMUtils!   defineLazyGetter   _db   _customQuery   _defaultQuery   _historyQuery   _bookmarkQuery   _tagsQuery   _openPagesQuery   _typedQuery   _adaptiveQuery   _keywordQuery3   _registerOpenPageQuerySQL  INSERT OR REPLACE INTO moz_openpages_temp (url, open_count)
       VALUES (:page_url,
         IFNULL(
           (
             SELECT open_count + 1
             FROM moz_openpages_temp
             WHERE url = :page_url
           ),
           1
         )
       )-   _registerOpenPageQuery1   _unregisterOpenPageQuery   _prefs   CcE   @mozilla.org/preferences-service;1   getService   Ci   nsIPrefService   getBranch)   kBrowserUrlbarBranch!   _syncEnabledPref   _loadPrefs   _os?   @mozilla.org/observer-service;1%   nsIObserverService   addObserver   kTopicShutdown   ÿÿÿÿ      baseQuery               ;       ¹                                               conditions   query u$  ì'               T  H   =    U  Q=   ;   ä=   T  ä=      QV   Î)Í -Ð    =   SELECT h.url, h.title, f.url, '   kBookTagSQLFragmentC  ,
                        h.visit_count, h.typed, h.id, :query_type,
                        t.open_count
                 FROM moz_places h
                 LEFT JOIN moz_favicons f ON f.id = h.favicon_id
                 LEFT JOIN moz_openpages_temp t ON t.url = h.url
                 WHERE h.frecency <> 0
                   AND AUTOCOMPLETE_MATCH(:searchString, h.url,
                                          IFNULL(btitle, h.title), tags,
                                          h.visit_count, h.typed,
                                          bookmarked, t.open_count,
                                          :matchBehavior, :searchBehavior)
                 ±   
                 ORDER BY h.frecency DESC, h.id DESC
                 LIMIT :maxResults   ÿÿÿÿ   -   nsPlacesAutoComplete/<Á                u      ¹      |                        $              db	   stmt(  S.  6            ;    5   5   ¸   
C:    QV   ¸   
=   :   QV  ¸   
:  QV  ¸   
:  Q;   â   V   : QA5   	Ù   
>   û  Q  QAV   ¸   
A5   : 6     QV  ¸   
:    Q>  Q    `m  QV  ¸   
:    QV  ¸   
=   A5   	V  7: QV  ¸   
V  : QÈV  #?W  QQãV  A5   	Ù   
ÿÿÿÈV  ¸   
V  : QV  ¸   
:  QV  ¸   
:  QA%   	QÈV    ;×È @ÐÈÏÏÒÍÑ
ÑÍ
Ë	È&`Rr-ËÈßÔ M7ÎÿÿÿßØ RÓÏÏÈ
    PlacesUtils   history   DBConnection   clone)   createAsyncStatement3   PRAGMA cache_size = -6144   executeAsync   finalize   initTempTable   _openPagesCache   length-   _registerOpenPageQuery3   _registerOpenPageQuerySQL+   newBindingParamsArray!   newBindingParams   bindByName   page_url   addParams   bindParameters    ÿÿÿÿ      	   stmt       params                     i                    bp        Ã   r       {   ô   ÿÿÿÿ   ¸   ~          Å   K         ÿÿÿÿ   M   nsPlacesAutoComplete/this._customQueryÅ                 1       ¹                                               conditions m.  È.  [            T  H   =    U  QA5   ¸   
   T  : : ÎÖ%ÿÿÿâ5       _db)   createAsyncStatement   ÿÿÿÿ   -   nsPlacesAutoComplete/<Á                          ¹                                            /  G/  _            A5    ¸   
   :  : Ó%ÿÿÿâ+    _db)   createAsyncStatement   ÿÿÿÿ   -   nsPlacesAutoComplete/<Á                           ¹                                            /  ­0  c            A5    ¸   
   =   : : Ø%ÿÿÿâC    _db)   createAsyncStatement-   AND +h.visit_count > 0   ÿÿÿÿ   -   nsPlacesAutoComplete/<Á                           ¹                                            ï0  >1  j            A5    ¸   
   =   : : Ø%ÿÿÿâ;    _db)   createAsyncStatement   AND bookmarked   ÿÿÿÿ   -   nsPlacesAutoComplete/<Á                           ¹                                            |1  Ñ1  n            A5    ¸   
   =   : : Ø%ÿÿÿâA    _db)   createAsyncStatement)   AND tags IS NOT NULL   ÿÿÿÿ   -   nsPlacesAutoComplete/<Á                          ¹                                            2  &4  r            A5    ¸   
=   : Í s ~    _db)   createAsyncStatement¡  SELECT t.url, t.url, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              :query_type, t.open_count, NULL
       FROM moz_openpages_temp t
       LEFT JOIN moz_places h ON h.url = t.url
       WHERE h.id IS NULL
         AND AUTOCOMPLETE_MATCH(:searchString, t.url, t.url, NULL,
                                NULL, NULL, NULL, t.open_count,
                                :matchBehavior, :searchBehavior)
       ORDER BY t.ROWID DESC
       LIMIT :maxResults   ÿÿÿÿ   -   nsPlacesAutoComplete/<Á                           ¹                                            e4  µ4              A5    ¸   
   =   : : Ø%ÿÿÿâ<    _db)   createAsyncStatement   AND h.typed = 1   ÿÿÿÿ   -   nsPlacesAutoComplete/<Á                   $       ¹                                            ÷4  Ð8              A5    ¸   
=   ;   ä=   : Í'Í      _db)   createAsyncStatement   /* do not warn (bug 487789) */
       SELECT h.url, h.title, f.url, '   kBookTagSQLFragment{  ,
              h.visit_count, h.typed, h.id, :query_type, t.open_count
       FROM (
       SELECT ROUND(
           MAX(use_count) * (1 + (input = :search_string)), 1
         ) AS rank, place_id
         FROM moz_inputhistory
         WHERE input BETWEEN :search_string AND :search_string || X'FFFF'
         GROUP BY place_id
       ) AS i
       JOIN moz_places h ON h.id = i.place_id
       LEFT JOIN moz_favicons f ON f.id = h.favicon_id
       LEFT JOIN moz_openpages_temp t ON t.url = h.url
       WHERE AUTOCOMPLETE_MATCH(NULL, h.url,
                                IFNULL(btitle, h.title), tags,
                                h.visit_count, h.typed, bookmarked,
                                t.open_count,
                                :matchBehavior, :searchBehavior)
       ORDER BY rank DESC, h.frecency DESC   ÿÿÿÿ   -   nsPlacesAutoComplete/<Á                          ¹                                            9  Ë<              A5    ¸   
=   : Í  ³    _db)   createAsyncStatementñ  /* do not warn (bug 487787) */
       SELECT
       (SELECT REPLACE(url, '%s', :query_string) FROM moz_places WHERE id = b.fk)
       AS search_url, h.title,
       IFNULL(f.url, (SELECT f.url
                      FROM moz_places
                      JOIN moz_favicons f ON f.id = favicon_id
                      WHERE rev_host = (SELECT rev_host FROM moz_places WHERE id = b.fk)
                      ORDER BY frecency DESC
                      LIMIT 1)
       ), 1, b.title, NULL, h.visit_count, h.typed, IFNULL(h.id, b.fk),
       :query_type, t.open_count
       FROM moz_keywords k
       JOIN moz_bookmarks b ON b.keyword_id = k.id
       LEFT JOIN moz_places h ON h.url = search_url
       LEFT JOIN moz_favicons f ON f.id = h.favicon_id
       LEFT JOIN moz_openpages_temp t ON t.url = search_url
       WHERE LOWER(k.keyword) = LOWER(:keyword)
       ORDER BY h.frecency DESC   ÿÿÿÿ   -   nsPlacesAutoComplete/<Á                          ¹      	                                      M>  >  Â            A5    ¸   
A5   : Ó>    _db)   createAsyncStatement3   _registerOpenPageQuerySQL   ÿÿÿÿ   -   nsPlacesAutoComplete/<Á                          ¹                                            ë>  ?  Æ            A5    ¸   
=   : Í Ç    _db)   createAsyncStatement»   UPDATE moz_openpages_temp
       SET open_count = open_count - 1
       WHERE url = :page_url   ÿÿÿÿ      PAC_startSearch               ?      ¹   -   Ê                           <             aSearchString   aSearchParam   aPreviousResult   aListener   params   result   query   tokens   queries    NB  ùK  ã            A¸    
:  QAT  ¸   
:  6   QA;   â   A5   ¸   
:  : 6   Q;   T ¸   
=   : R    QAV   ¸   

=   : 6   	QAV   ¸   

=   : 6   QAT 6   Q;   5   ¸   
;   5   :   QV  ¸   
T  : QV  ¸   
A: QAV  6   QA5       A¸   
C: QA5      AA5   6   Q   AA5   6   QA¸   
A¸   
A5   : : 5     Q5     QQV  Ù       0Z  A¸   !
V  : `   A¸   "
:  `     Z  A¸   "
:  `     QA¸   #
=   $:    #V  ¸   %
A¸   &
V  : : QV  ¸   %
V  : QA;   (¸   )
:  6   'QA¸   *
V  : QAV  6   +QAY   6   ,QÌ îËÉ×ÿÿÿðÉÕÿÿÿøÈÑÉÑÉÊÑÊ øÈÒÐËÍÒÍ ÖÿÿÿðÚÉ+Ó$ÔÔÍ×ÿÿÿóÓÍÉÐËÌ    stopSearch+   _originalSearchString	   trim)   _currentSearchString   fixupSearchText   toLowerCase   Set   split       _enableActions   has   enable-actions-   _disablePrivateActions/   disable-private-actions   _listener   CcS   @mozilla.org/autocomplete/simple-result;1   createInstance   Ci7   nsIAutoCompleteSimpleResult   setSearchString   setListener   _result   _enabled   _finishSearch   _behavior!   _defaultBehavior7   _emptySearchDefaultBehavior   _getSearch5   _getUnfilteredSearchTokens   query   tokens   length+   _getBoundKeywordQuery-   _getBoundAdaptiveQuery   _hasBehavior   openpage	   push/   _getBoundOpenPagesQuery'   _telemetryStartTime	   Date   now   _executeQueries   _searchTokens   _usedPlaces   ÿÿÿÿ      PAC_stopSearch                   %       ¹                                            !L  nM  '            A5       A¸   
:  QA¸   
B: QÌÍ    _pendingQuery!   _stopActiveQuery   _finishSearch   ÿÿÿÿ   %   PAC_onValueRemoved                 0       ¹                                              aResult   aURISpec   aRemoveFromDB   N  ¤N  6            T    ,;    5   ¸   
;   ¸   
T : : Qàÿÿÿá9    PlacesUtils   history   removePage   NetUtil   newURI   ÿÿÿÿ   )   PAC_registerOpenPage               Y       ¹                                 
          	   aURI	   stmt øO  ØP  C            A5         A5   ¸   
T  5   : QA5      QV   5   T  5   6   QV   ¸   
:  QÙË×Ï )   _databaseInitialized   _openPagesCache	   push	   spec-   _registerOpenPageQuery   params   page_url   executeAsync   ÿÿÿÿ   -   PAC_unregisterOpenPage                     ¹   	   (                                   	   aURI	   stmt Q  QR  O            A5        O  QA5   ¸   
T  5   :   QV  ×ÿ   A5   ¸   
V  ?: QÈÈA5      QV   5   T  5   6   QV   ¸   
:  QË
ÕÈÖË×Ï )   _databaseInitialized   _openPagesCache   indexOf	   spec   splice1   _unregisterOpenPageQuery   params   page_url   executeAsync    ÿÿÿÿ         index           I   ÿÿÿÿÿÿÿÿT             ÿÿÿÿ   !   PAC_handleResult              £       ¹      @                                     aResultSet   row   haveMatches óR  U  a               QB  Q   hm  QA¸    
V   :   QV  D   
QV  W  QA5   5   A5      "A¸   
:  QA¸   
C: QÈÈãT  ¸   
:  W   ÿÿÿV     A¸   
C: Q({,
ÌÈÓÒÌÍ dÌÌ tÍ    _processRow   _result   matchCount   _maxRichResults!   _stopActiveQuery   _finishSearch   getNextRow   _notifyResults    ÿÿÿÿ         match           {          a   ÿÿÿÿÿÿÿÿr             ÿÿÿÿ      PAC_handleError                 9       ¹                                              aError GU  V  y            ;    5   ¸   
=   T  5   =   T  5   =   : QÖÞ {[    Components   utils   reportError}   Places AutoComplete: An async statement encountered an error:    result   , '   message   '   ÿÿÿÿ   )   PAC_handleCompletion                °       ¹      6                                      aReason DV  Y        	      A¸    
:     A5   ;   E   %QA5   5   A5   E   QA5       _   QAC6   QZ  A¸   
;   : `   A¸   	
;   A5   
: `     QA¸   
V   : QÈÈA¸   
C: QÈ ÒØ:ËÈ
ÔßÐÍ !   isSearchComplete   _matchBehavior/   MATCH_BOUNDARY_ANYWHERE   _result   matchCount   _maxRichResults   _secondPass-   _getBoundAdaptiveQuery   MATCH_ANYWHERE)   _getBoundSearchQuery   _searchTokens   _executeQueries   _finishSearch    ÿÿÿÿ          queries        I   Y   ÿÿÿÿÿÿÿÿ              ÿÿÿÿ      PAC_observe                	      ¹      h                                     aSubject   aTopic   aData   Y  ½]              T ;       Ü   QA5   ¸   
A;    : QA5   ¸   
=   A: QA%   Qf      Q>  Q    Sm;   ¸   
AV   V  7: 5   ;   I   AV   V  77¸   	
:  QV  #?W  QQãV  V   Ù   
ÿÿÿ¢ÈA5      A5   ¸   
:  QÈ   (T ;      A¸   
T  T T : QÉ  ×Ë××
Ê °&SEc °ÖÎ
Ö °(Î ´ °Ö ¸×ÉÕ)    kTopicShutdown   _os   removeObserver   _prefs      Object1   getOwnPropertyDescriptor   value   undefined   finalize   length)   _databaseInitialized   _db   asyncClose   kPrefChanged   _loadPrefs    ÿÿÿÿ          stmts          
      
         _defaultQuery      _historyQuery      _bookmarkQuery      _tagsQuery      _openPagesQuery      _typedQuery      _adaptiveQuery      _keywordQuery   -   _registerOpenPageQuery   1   _unregisterOpenPageQuery                                i        _   c          Ñ   ÿÿÿÿ   T   o          ÿÿÿÿ   g   nsPlacesAutoComplete.prototype._databaseInitializedá                   "       ¹                                            H^  ^  Ä            ;    ¸   
A=   : 5   ;   Iá@    Object1   getOwnPropertyDescriptor   _db   value   undefined   ÿÿÿÿ   5   PAC_unfilteredSearchTokens                 *       ¹                                              aSearchString _  `  Î            T  Ù       T  ¸   
=   :    	Z   ÈÔÍ    length   split       ÿÿÿÿ   !   PAC_finishSearch                 ^       ¹      .                                        aNotify a  bc  Ý            T     A¸    
B: QA%   QA%   QA%   QA%   QA%   QA%   QA%   QA%   QAB6   	QAB6   
QÍÈÈ    _notifyResults+   _originalSearchString)   _currentSearchString   _strippedPrefix   _searchTokens   _listener   _result   _usedPlaces   _pendingQuery   _secondPass   _enableActions   ÿÿÿÿ   %   PAC_executeQueries               /       ¹                                              aQueries   wrapper d  Êe  ÷      	      ;    AAA5   R    QAV   ¸   
T  : 6   Q þÎ
ÈÏÉ I   AutoCompleteStatementCallbackWrapper   _db   _pendingQuery   executeAsync   ÿÿÿÿ   '   PAC_stopActiveQuery                          ¹                                            0f  zf              A5    ¸   
:  QA%    QÑ    _pendingQuery   cancel   ÿÿÿÿ   #   PAC_notifyResults                    ¹      X                                     aSearchOngoing   result   resultCode 6g  j        
      A5       QV   5      =      
=     QT     V  =   W  QV   ¸   
;   5   V  7: QA5   ¸   	
AV   : QA5   
     Q;   ¸   
:  A5   
  QV  ×2   `;   5   ¸   
=   : ¸   
V  : Q   2  Qv  Q;   5   ¸   
=   : QÈ    A@6   
QÈËÉ
ÙÉxÞÖË
Ì
Ï)
Ñ 
Ê 
ÉÌ
áÉ #    _result   matchCount   RESULT_SUCCESS   RESULT_NOMATCH   _ONGOING   setSearchResult   Ci+   nsIAutoCompleteResult   _listener   onSearchResult'   _telemetryStartTime	   Date   now   Services   telemetry!   getHistogramByIdM   PLACES_AUTOCOMPLETE_1ST_RESULT_TIME_MS   add   Components   utils   reportError7   Unable to report telemetry.    ÿÿÿÿ         elapsed                     ex         ±   -             ÿÿÿÿ   ß   &          ÿÿÿÿ   '   PAC_syncEnabledPref              £      ¹      |                        %           	   init   suggestPrefs   types j  o  ,      
      T  H   
BU  Qf       Qf     QT     ¥A;   â   A5   ;   C: 6    QA;   â   A5   =   C: 6   QA;   â   A5   =   C: 6   QA;   â   A5   =   	C: 6   QA;   â   A5   =   B: 6   
QA5       zV  ¸   
A   :    \V   - Á
:    Q   'm5   W  QA5   ¸   
V  C: QãQ¸   
:  5   ÿÿÿÊÈ    \V   - Á
:    Q   'm5   W  QA5   ¸   
V  B: QãQ¸   
:  5   ÿÿÿÊÈ ÊÊÊÖ 3É×É×É×É×ÉuÑ
Ó8;Ñ
Ö ?Ëÿÿÿï×Ó8;ÑÖ EËÿÿÿïÒ-    _enabled   safePrefGetter   _prefsK   kBrowserUrlbarAutocompleteEnabledPref   _suggestHistory   suggest.history!   _suggestBookmark!   suggest.bookmark!   _suggestOpenpage!   suggest.openpage   _suggestTyped3   suggest.history.onlyTyped   every   value   setBoolPref	   next	   done                     suggest.history   !   suggest.bookmark   !   suggest.openpage                                    History      Bookmark      Openpage      Typed                  ÿÿÿÿ   +   PAC_syncEnabledPref/<å                        ¹                                           	   type 3n  [n  >            A=    T  7BÎ     _suggest    ÿÿÿÿ      	   type        ÿÿÿÿ      	   type       c  ;        ;      ý   F   ÿÿÿÿ   Y  F   ÿÿÿÿ   ÿÿÿÿ      PAC_loadPrefs               T      ¹   8   ú                          S          #   aRegisterObserver   aTopic   aData   types   q  ~  V            A;   â   A5   ;   C: 6    QA;   â   A5   =   ;   : 6   QA;   â   A5   =   C: 6   QA;   â   A5   =   
×: 6   	QA;   â   A5   =   =   : 6   QA;   â   A5   =   =   : 6   QA;   â   A5   =   =   : 6   QA;   â   A5   =   =   : 6   QA;   â   A5   =   =   : 6   QA;   â   A5   =   =   : 6   QA;   â   A5   =   =   : 6   QA;   â   A5   =   !C: 6    QA;   â   A5   =   #C: 6   "QA;   â   A5   =   %C: 6   $QA;   â   A5   =   'B: 6   &QA5        AB6   &Qf       QAV   ¸   )
A   >: 6   (QA;   +5   ,5   -6   *QA5       7A5   *;   +5   ,5   .;   +5   ,5   /6   *Q   OA5   "   'A5   *;   +5   ,5   06   *Q   "A5   *;   +5   ,5   16   *QA5   ;   2E   $QA5   ;   3E   QA5   ;   4   A;   6   QT     A5   ¸   5
=   6AB: QT ;      A¸   7
:  QÑ XÉÑ [É×ÉØÉÑÊ `!ÉÑÊ b"ÉÛÉÛÉÑÊ f"ÉÛÉÛÉ×É×É×É×ÉÈÊÒ uÉ Ö2ÖÐxÌ"ÖxÌÖxÒÒÌÌØ ÉÌ    _enabled   safePrefGetter   _prefsK   kBrowserUrlbarAutocompleteEnabledPref   _matchBehavior   matchBehavior/   MATCH_BOUNDARY_ANYWHERE#   _filterJavaScript#   filter.javascript   _maxRichResults   maxRichResults+   _restrictHistoryToken!   restrict.history   ^-   _restrictBookmarkToken#   restrict.bookmark   *'   _restrictTypedToken   restrict.typed   ~#   _restrictTagToken   restrict.tag   +-   _restrictOpenPageToken#   restrict.openpage   %!   _matchTitleToken   match.title   #   _matchURLToken   match.url   @   _suggestHistory   suggest.history!   _suggestBookmark!   suggest.bookmark!   _suggestOpenpage!   suggest.openpage   _suggestTyped3   suggest.history.onlyTyped!   _defaultBehavior   reduce7   _emptySearchDefaultBehavior   Ci-   mozIPlacesAutoComplete#   BEHAVIOR_RESTRICT!   BEHAVIOR_HISTORY   BEHAVIOR_TYPED#   BEHAVIOR_BOOKMARK#   BEHAVIOR_OPENPAGE   MATCH_ANYWHERE   MATCH_BOUNDARY   MATCH_BEGINNING   addObserver   !   _syncEnabledPref                     History      Bookmark      Openpage      Typed                  ÿÿÿÿ   I   PAC_loadPrefs/this._defaultBehavior<Å               >       ¹                                           	   memo	   type   prefValue  Sx  y  u      	      A=    T 7   QT  V   E   $Q;   5   =   T ¸   
:  7
ÐÍÙ=    _suggest   Ci-   mozIPlacesAutoComplete   BEHAVIOR_   toUpperCase   ÿÿÿÿ      PAC_getSearch                    ¹      Ì                                     aTokens   foundToken   restrict X  É  ¦      	      B   QA       QT  Ù    ?  Q   mT  V  7xA5   y   LA5   y   TA5   y   \A5   y   dA5   y   }A5   y   A5   y   z   V   =   : Q   V   =   	: Q   zV   =   
: Q   gA5       
   iV   =   : Q   CV   =   : Q   0V   =   : Q   V   =   : Q   
   T  ¸   
V  ?: QV  #?W  QQãV  >ÿÿþàÈA5       A¸   
=   : QY   A¸   
A5   T  : ]   T  ]   Ë ´Ï    % ´Èh  îvvvv ÅvvvÊ ¶
ÎX
ÎX
ÎX@
ÎX
ÎX
ÎX
ÎX@Ó ´-Î Ó ´%Î ÙÑÑÈÉ    length+   _restrictHistoryToken-   _restrictBookmarkToken#   _restrictTagToken-   _restrictOpenPageToken!   _matchTitleToken   _matchURLToken'   _restrictTypedToken   history   bookmark   tag   _enableActions   openpage   title   url   typed   splice#   _filterJavaScript   _setBehavior   javascript)   _getBoundSearchQuery   _matchBehavior   query   tokens   ÿÿÿÿ   -   PAC_getSearch/restrictÅ                 E       ¹                                              behavior   L  ©                      *A>6    QA¸   
=   : QC      QA¸   
T  : Q
ËÈÑÌÏ    _behavior   _setBehavior   restrict    ÿÿÿÿ         i        '   %        1  ÿÿÿÿ   ÿÿÿÿ   5   PAC_getSuggestionPrefQuery                 _      ¹      a                           !              conditions    ç      	      A¸    
=   :  E   ,QA¸    
=   : E   QA¸    
=   :    6A¸    
=   :    A¸   
=   :    A5   Z      QA¸    
=   :    V   ¸   
=   	: QA¸    
=   :    V   ¸   
=   
: QA¸    
=   :    V   ¸   
=   : QA¸    
=   :    V   ¸   
=   : QV   Ù      .A¸   
=   V   ¸   
=   : :    A5   Í×!ÉÍÍÒÈÉÍÔÍÔÍÔÍÔÉ)â6ÿÿÿåÈ2    _hasBehavior   restrict   history   bookmark   typed   _customQuery   AND h.typed = 1   _defaultQuery	   push%   +h.visit_count > 0   h.typed = 1   bookmarked   tag   tags NOTNULL   length	   AND 	   join    AND    ÿÿÿÿ   /   PAC_getBoundSearchQuery                      ¹      7                           
             aMatchBehavior   aTokens   query   params                  A¸    
:     QV   5     QV  ;   5   6   QV  ;   6   QV  T  6   QV  A5   	6   QV  T ¸   
=   : 6   
QV  A5   6   QV   ÈÈÎÔÏÍÐÓÉÐ /   _getSuggestionPrefQuery   params   parent   PlacesUtils   tagsFolderId   query_type%   kQueryTypeFiltered   matchBehavior   searchBehavior   _behavior   searchString	   join       maxResults   _maxRichResults   ÿÿÿÿ   5   PAC_getBoundOpenPagesQuery               z       ¹      ,                                        aTokens   query   params Y  W  (            A5       QV   5     QV  ;   6   QV  A5   6   QV  A5   6   QV  T  ¸   	
=   
: 6   QV  A5   6   QV   ËÎÏÐÐÓÉÐ    _openPagesQuery   params   query_type%   kQueryTypeFiltered   matchBehavior   _matchBehavior   searchBehavior   _behavior   searchString	   join       maxResults   _maxRichResults   ÿÿÿÿ   1   PAC_getBoundKeywordQuery               Õ       ¹      F                                        aTokens   searchString   queryString   queryIndex   keyword   query   params [  o  A            A5       Q=     QV   ¸   
=   :   QV  ×ÿ   V   ¸   
V  ?: W  Q;   â   V  : ¸   
=   =   =   	: W  QT  >7  QA5   
  QV  5     QV  V  6   QV  V  6   QV  ;   6   QV  ËÊÐÈÑÈÎáÊËÎÎÎÏ +   _originalSearchString      indexOf       substring%   encodeURIComponent   replace   %20   +   g   _keywordQuery   params   keyword   query_string   query_type#   kQueryTypeKeyword   ÿÿÿÿ   3   PAC_getBoundAdaptiveQuery                   ¹      .                           	            aMatchBehavior   arguments   query   params *  !  _            	W   QV   Ù    >   A5   U  QA5     QV  5     QV  ;   5   6   QV  A5   6   QV  ;   
6   	QV  T  6   QV  A5   6   QV  ËÊËÎÔÐÏÍÐ    length   _matchBehavior   _adaptiveQuery   params   parent   PlacesUtils   tagsFolderId   search_string)   _currentSearchString   query_type%   kQueryTypeFiltered   matchBehavior   searchBehavior   _behavior   ÿÿÿÿ      PAC_processRow               ÷      ¹      ð                           2          	   aRow   entryId   escapedEntryURL   openPageCount   url   action   entryTitle   entryFavicon   entryBookmarked%   entryBookmarkTitle   entryTags   title   style   showTags u  #§  z            T  ¸    
;   :    QT  ¸    
;   :   QT  ¸    
;   : D   Q>  QA5   E   "QV  >E   QA¸   
=   :    %Z  =   V  `   =   `     Z  V  `   =   	`  - Á
:  ¸   

:  5      Q   
5     Q¸   

:  5      Q   
5     QQQA¸   
V   V  :    BT  ¸    
;   : D   Q=   	  QT  ¸    
;   : D   Q=   	  QT  ¸    
;   :   QV     T  ¸    
;   :    @  QT  ¸    
;   : D   Q=   	  	QV  D   
QV    
Q  QT  ¸    
;   : ;      'V      =   W  Q   V  W  
QV  	    QA¸   
=   : E   "QA¸   
=   :  E   QV      BW  Q=   W  QV     V  
;   V  	W  
QV      ?V     =   W  Q   'V     =   W  Q   =   W  QA¸   
V   V  V  
V  V  V  : QCÏ
ÈÏÈÏÏå< Î+ÎÈÚ ÉçØÐÏÓÏÓÏÈÏÎÏÓÓÏÉ 
ÏÉ ¤ËÍÉ ÍÊÊÎx µÏÏÊå !   getResultByIndex%   kQueryIndexPlaceId   kQueryIndexURL1   kQueryIndexOpenPageCount   _enableActions   _hasBehavior   openpage+   moz-action:switchtab,   action    	   next	   done   value   _inResults!   kQueryIndexTitle+   kQueryIndexFaviconURL+   kQueryIndexBookmarked1   kQueryIndexBookmarkTitle   kQueryIndexTags)   kQueryIndexQueryType#   kQueryTypeKeyword   keyword   history   bookmark   favicon'   kTitleTagsSeparator   tag   _addToResults   ÿÿÿÿ      PAC_inResults                 &       ¹                                              aPlaceId	   aUrl  *ª  ´ª  Ø            T  E   QT  A5    q   CT A5    qÓË     _usedPlaces   ÿÿÿÿ   !   PAC_addToResults              ¥       ¹   
   -                                      aPlaceId   aURISpec   aTitle   aFaviconSpec   aStyle   favicon     ­  ~°  ð            A5    T  D   	QT C8Q   QT    E  Q;   ¸   
T :   Q;   5   ¸   
V  : 5   W   QÈV   D   Q;   5   5   5   W   QA5   ¸   	
T T V   T : Q ùÕË
ÏÈÕ
ÎãÞ<    _usedPlaces   NetUtil   newURI   PlacesUtils   favicons+   getFaviconLinkForIcon	   spec   defaultFavicon   _result   appendMatch    ÿÿÿÿ         uri        $   ?   ÿÿÿÿ   ÿÿÿÿ      PAC_hasBehavior               W       ¹                                 
             aType   behavior q±  }²              ;    5   =   T  ¸   
:  7   QA5   E   QV   ;    5   5      BA5   V   Ù3ÊÌÔÌ!    Ci-   mozIPlacesAutoComplete   BEHAVIOR_   toUpperCase-   _disablePrivateActions#   BEHAVIOR_OPENPAGE   _behavior   ÿÿÿÿ      PAC_setBehavior                 -       ¹                                              aType !³  ³        	      A5    ;   5   =   T  ¸   
:  76    QÙ.}    _behavior   Ci-   mozIPlacesAutoComplete   BEHAVIOR_   toUpperCase   ÿÿÿÿ   )   PAC_isSearchComplete                   
       ¹      
                                      C´  µ  *            A5    @É"    _pendingQuery   ÿÿÿÿ   '   PAC_isPendingSearch                        ¹                                              aHandle q¶  ¬¶  :            A5    T  Ë%    _pendingQuery   ÿÿÿÿ   #   urlInlineComplete                   *       ¹                                            e¹  ¼¹  T            A¸    
C: Q;   5   ¸   
A;   C: QÍÜ5    _loadPrefs   Services   obs   addObserver   kTopicShutdown   ÿÿÿÿ   ?   urlInlineComplete.prototype._dbÁ                   A       ¹                                            jº  ÿº  a            A5     E   QA5      &A;   5   5   ¸   
C: 6    QA5    ÓØÉ 	   __db!   _autofillEnabled   PlacesUtils   history   DBConnection   clone   ÿÿÿÿ   M   urlInlineComplete.prototype._hostQueryÁ                   R       ¹      (                                      (»  ª½  k            A5        CAA5   ¸   
=   A5      =      
=   ä=   : 6    QA5    Î v
Ü pÉ {    __hostQuery   _db)   createAsyncStatement  /* do not warn (bug no): could index on (typed,frecency) but not worth it */
         SELECT host || '/', prefix || host || '/'
         FROM moz_hosts
         WHERE host BETWEEN :search_string AND :search_string || X'FFFF'
         AND frecency <> 0
            _autofillTyped   AND typed = 1   c   
         ORDER BY frecency DESC
         LIMIT 1   ÿÿÿÿ   K   urlInlineComplete.prototype._urlQueryÁ                   R       ¹      %                                      Ñ½  DÀ              A5        CAA5   ¸   
=   A5      =      
=   ä=   : 6    QA5    Î
Ü É     __urlQuery   _db)   createAsyncStatement  /* do not warn (bug no): can't use an index */
         SELECT h.url
         FROM moz_places h
         WHERE h.frecency <> 0
            _autofillTyped!   AND h.typed = 1    Q  
           AND AUTOCOMPLETE_MATCH(:searchString, h.url,
                                  h.title, '',
                                  h.visit_count, h.typed, 0, 0,
                                  :matchBehavior, :searchBehavior)
         ORDER BY h.frecency DESC, h.id DESC
         LIMIT 1   ÿÿÿÿ      UIC_startSearch               D      ¹   &   ß                         C             aSearchString   aSearchParam   aPreviousResult   aListener   lastSlashIndex   query   ac   wrapper    ÝÀ  òÏ              A5       A¸   
:  QAT  6   QA;   â   A5   ¸   
:  : 6   QAA5   ¸   
>A5   Ù   A5   Ù   : ¸   
:  6   QA;   
5   ¸   
;   5   : 6   	QA5   	¸   
T  : QA5   	¸   
C: QAT 6   QA5   Ù   >D   -QA5    D    Q;   5   ¸   
A5   :    A¸   
:  Q     ¸   
A5   :    A¸   
:  QA5   ¸   
=   :    QV   ×ÿ   ;V   A5   Ù   ?   A¸   
:  Q   A¸   
:  QA5     QV  5   A5   ¸   
:  6   Q;   ¸   
;    : QA   Q;   !AY       ]   "   ]   #   ]   $A5   R   QAV  ¸   %
Z  V  `   : 6    QÌ ¡Ê×ÿÿÿðÉÎØ ¦ÓÒÊ ªÉÔÒÊ µÓ1Í×Ì ¿ÒÌÒÈÒÑÌËÖÉÕÌÊ éÊ ïÊ ×È ôÐ+ÈÿÿÿêÉ    _pendingQuery   stopSearch+   _originalSearchString)   _currentSearchString   fixupSearchText   toLowerCase   _strippedPrefix   slice   length   _result   CcS   @mozilla.org/autocomplete/simple-result;1   createInstance   Ci7   nsIAutoCompleteSimpleResult   setSearchString%   setTypeAheadResult   _listener   _db   PlacesUtils   bookmarks!   getURIForKeyword   _finishSearch	   test   lastIndexOf   /   _queryURL   _hostQuery   params   search_string%   TelemetryStopwatch   start-   DOMAIN_QUERY_TELEMETRYI   AutoCompleteStatementCallbackWrapper   handleResult   handleError!   handleCompletion   executeAsync   ÿÿÿÿ   K   UIC_startSearch/wrapper<.handleResultÁ               Ã       ¹   	   4                                        aResultSet   row   trimmedHost   untrimmedHost Ë  4Î  Ø      
      T  ¸    
:     QV   ¸   
>:   QV   ¸   
?:   QV  E   8QV  ¸   
:  ¸   
      5   ¸   
:  :     @W  Q      5   ¸   
      5   V  =   =   =   V  : QÊÈÌÈÌÈÊËà%ÿÿÿÛ
ÿT    getNextRow!   getResultByIndex   toLowerCase   contains+   _originalSearchString   _result   appendMatch   _strippedPrefix      ÿÿÿÿ   I   UIC_startSearch/wrapper<.handleErrorÁ                 9       ¹                                              aError SÎ  Ï  é            ;    5   ¸   
=   T  5   =   T  5   =   : QÑÞ êD    Components   utils   reportError}   URL Inline Complete: An async statement encountered an error:    result   , '   message   '   ÿÿÿÿ   S   UIC_startSearch/wrapper<.handleCompletionÁ                 +       ¹                                              aReason :Ï  ¤Ï  ï            ;    ¸   
;   : Q      ¸   
:  QÕÕ %   TelemetryStopwatch   finish-   DOMAIN_QUERY_TELEMETRY   _finishSearch   \s       ÿÿÿÿ      UIC__queryURL                 F      ¹      y                          "              pathIndex   query   params   ac   wrapperÐ  'Û  û            A5    ¸   
=   A5   Ù   :    QA;   â   A5    ¸   
>V   : ¸   
:  A5    ¸   
V   : : 6   QA5   	  QV  5   
  QV  ;   6   QV  5   ;   5   5   ;   5   5   ;   5   5   6   QV  A5   6   QA   Q;   AY       ]      ]      ]   A5   R   QAV  ¸   
Z  V  `   : 6   QÝÈËÒÍÑ  É ËÎÏÙÐÐxÐÌÊ 4Ê :Ê È >Ð+ÈÿÿÿêÉ +   _originalSearchString   indexOf   /   _strippedPrefix   length)   _currentSearchString   fixupSearchText   slice   toLowerCase   _urlQuery   params   matchBehavior=   MATCH_BEGINNING_CASE_SENSITIVE   searchBehavior   Ci-   mozIPlacesAutoComplete!   BEHAVIOR_HISTORY   BEHAVIOR_TYPED   BEHAVIOR_URL   searchStringI   AutoCompleteStatementCallbackWrapper   handleResult   handleError!   handleCompletion   _db   _pendingQuery   executeAsync   ÿÿÿÿ   G   UIC__queryURL/wrapper<.handleResultÁ               ¡      ¹      q                          '             aResultSet   row   value   url   prefix   separatorIndex   untrimmedURL ¬Ô  ¦Ù              T  ¸    
:     QV   ¸   
>:   Q;   â   V  :   QV  ¸   
>V  Ù   ;   â   V  : Ù   :   QV  ¸   
      5   Ù   : ¸   
     :   QV  ×ÿ   ]V        5   Ù   W  QV  V  7=      V  #?W  QQV  ¸   
>V  : W  QV  V    QV  E   8QV  ¸   	
:  ¸   

      5   ¸   	
:  :     @W  Q      5   ¸   
      5   V  =   =   =   V  : QÊÈÌÈÎÈã'ÉÿÿÿâÈßÊ È
ØxÏÎ
ÐÈ (ÎÊËà$ÿÿÿÜ
ÿK    getNextRow!   getResultByIndex   fixupSearchText   slice   length   stripPrefix)   _currentSearchString   search   /   toLowerCase   contains+   _originalSearchString   _result   appendMatch   _strippedPrefix      [\/\?\#]       ÿÿÿÿ   E   UIC__queryURL/wrapper<.handleErrorÁ                 9       ¹                                              aError ÄÙ  Ú  4            ;    5   ¸   
=   T  5   =   T  5   =   : QÑÞ 5D    Components   utils   reportError}   URL Inline Complete: An async statement encountered an error:    result   , '   message   '   ÿÿÿÿ   O   UIC__queryURL/wrapper<.handleCompletionÁ                        ¹                                              aReason ªÚ  ÙÚ  :                  ¸    
:  QÕ    _finishSearch   ÿÿÿÿ      UIC_stopSearch                   @       ¹                                            OÛ  CÜ  A            A%    QA%   QA%   QA%   QA5      A5   ¸   
:  QA%   QÑ +   _originalSearchString)   _currentSearchString   _result   _listener   _pendingQuery   cancel   ÿÿÿÿ      UIC_loadPrefs               ®       ¹      E                                     #   aRegisterObserver   prefBranch   autocomplete   autofill EÝ  2à  U      	      ;    5   ¸   
;   :    Q;   â   V   ;   C:   Q;   â   V   ;   C:   QAV  E   
QV  6   QA;   â   V   ;   	C: 6   QT     !;    5   ¸   

;   AC: QÖÈÎ XÈÎ [ÈÕÏ _ÉÜ=    Services   prefs   getBranch)   kBrowserUrlbarBranch   safePrefGetterK   kBrowserUrlbarAutocompleteEnabledPref5   kBrowserUrlbarAutofillPref!   _autofillEnabled   _autofillTyped?   kBrowserUrlbarAutofillTypedPref   addObserver   ÿÿÿÿ   M   urlInlineComplete.prototype.searchTypeá                          ¹                                            ½à  øà  i            ;    5   5   Ð8    Ci?   nsIAutoCompleteSearchDescriptor+   SEARCH_TYPE_IMMEDIATE   ÿÿÿÿ      UIC_observe                ú       ¹      C                                      aSubject   aTopic   aData   á  ¡ä  n            T ;       A¸   
:  Q   ßT ;   E   iQT ¸   
;   Ù   : ;   D   FQT ¸   
;   Ù   : ;   D   #QT ¸   
;   Ù   : ;      h   QA5   	   QA¸   

:  QA5       "A¸   
:  QA¸   
:  Q   !A5   	V      A¸   
:  QÈÉÑÏÔÏÔÏÔÉË
ËÌ
ÌÑËÍ v^    kTopicShutdown   _closeDatabase   kPrefChanged   substr)   kBrowserUrlbarBranch   length5   kBrowserUrlbarAutofillPrefK   kBrowserUrlbarAutocompleteEnabledPref?   kBrowserUrlbarAutofillTypedPref   _autofillTyped   _loadPrefs!   _autofillEnabled   stopSearch+   _invalidateStatements    ÿÿÿÿ       +   previousAutofillTyped           b   ÿÿÿÿ   ÿÿÿÿ   1   UIC_invalidateStatements                o       ¹      D                                      stmtså  ¤æ              f       Q>  Q    GmAV   V  77   (AV   V  77¸    
:  QAV   V  7@8QV  #?W  QQãV  V   Ù   ÿÿÿ®ÈÊ&G9W ËÖÍ &Î  Ö     finalize   length                     __hostQuery      __urlQuery                   ÿÿÿÿ         i           W         c   ÿÿÿÿ   ÿÿÿÿ   #   UIC_closeDatabase                   1       ¹                                            ùæ  uç              A¸    
:  QA5      A5   ¸   
:  QA@6   QÌÑÈ +   _invalidateStatements	   __db   _db   asyncClose   ÿÿÿÿ   !   UIC_finishSearch                        ¹      )                                         resultè  §é  §            A5       QV   5      8V   ¸   
>: QV   ¸   
;   5   5   : Q   4V   ¸   
×ÿ: QV   ¸   
;   5   5   : QA5   ¸   	
AV   : QA¸   

:  QËÉ3ÐãÑÞÖÌ    _result   matchCount   setDefaultIndex   setSearchResult   Ci+   nsIAutoCompleteResult   RESULT_SUCCESS   RESULT_NOMATCH   _listener   onSearchResult   stopSearch   ÿÿÿÿ   )   UIC_isSearchComplete                   
       ¹                                            Ûé  ê  ¸            A5    @É"    _pendingQuery   ÿÿÿÿ   '   UIC_isPendingSearch                        ¹                                              aHandle >ê  yê  ½            A5    T  Ë%    _pendingQuery