çżsš                  (   š   I         '                   <            resource://gre/components/nsTaggingService.js     Q         	                              $   F;   5       Q;   5      Q;   5      Q;   5   ¸   
=   	: Q;   5   ¸   
=   
: Q;   5   ¸   
=   : Q=      Q;   Y      ]      ]      ]      ]      ]      ]      ]      ]      	]   @]      
a      a      a      ]      ]      ]      ]       ]   !   ]   "   ]   #   ]   $   ]   %;   ¸   &
=   ': ]   (;   )¸   *
;   : ]   +;   )¸   ,
Z  ;   5   -`   ;   5   .`  ;   5   /`  : ]   06   Q;   1Y      a   2   a   3   a   4   a   5   a   6   a   7   ]   8   ]   9   ]   :    ]   ;   !]   <   "]   =   #]   >;   )¸   ,
Z  ;   5   ?`   : ]   06   Q;   @Y   B]   A   %]   B   &]   C;   ¸   &
=   D: ]   (;   )¸   *
;   @: ]   +;   )¸   ,
Z  ;   5   E`   : ]   06   Qn   FZ  ;   `   ;   @`  o   FQA;   )¸   H
;   F: 6   GQĘ	 Ĺ	 9	 ŽĐĐĐ
ÚAÚ?ÚBËĘ#Ę8ĘXĘjĘ  Ę  łĘ  ËĘ  îĘ Ę #Ę <Ę HĘ MĘ _Ę Ę Ę ¤Ę ŤĘ ˛ĘĘĘ šŃ	ČŃČĐÎÎÎ ˝Î Â ÎĘ ŐĘ ŕĘ çĘ îĘ őĘĘ ţĘĘ 	Ę Ę Ę $Ę -Ę 3ĐÎ 3ÎĘ KĘ Ę ĽŃ	ČŃČĐÎ ŠÎÉÉĎ˙˙˙ěŇÉ+    Cc   Components   classes   Ci   interfaces   Cr   results   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmM   resource://gre/modules/PlacesUtils.jsm   TOPIC_SHUTDOWN   places-shutdown   TaggingService   prototype   _createTag-   _getItemIdForTaggedURI!   _getItemIdForTag7   _convertInputMixedTagsArray   tagURI#   _removeTagIfEmpty   untagURI   getURIsForTag   getTagsForURI   __tagFolders   _tagFolders   allTags   hasTags   observeE   _getTaggedItemIdsIfUnbookmarkedURI   onItemAdded   onItemRemoved   onItemChanged   onItemMoved   onItemVisited%   onBeginUpdateBatch!   onEndUpdateBatch   IDM   {bbc23860-2553-479d-8b78-94d9038334f7}   classID   XPCOMUtils1   generateSingletonFactory   _xpcom_factory   generateQI#   nsITaggingService-   nsINavBookmarkObserver   nsIObserver   QueryInterface+   TagAutoCompleteResult   searchString   searchResult   defaultIndex!   errorDescription   matchCount   typeAheadResult   getValueAt   getLabelAt   getCommentAt   getStyleAt   getImageAt/   getFinalCompleteValueAt   removeValueAt+   nsIAutoCompleteResult+   TagAutoCompleteSearch   _stopped   startSearch   stopSearchM   {1dcc23b0-d4cb-11dc-9ad6-479d56d89593}+   nsIAutoCompleteSearch   component   NSGetFactory)   generateNSGetFactory   ˙˙˙˙      TaggingService                   4       š                                 	             >               ;    5   ¸   
AB: Q;   5   ¸   
A;   B: Q×Ü6    PlacesUtils   bookmarks   addObserver   Services   obs   TOPIC_SHUTDOWN   ˙˙˙˙      TS__createTag               J       š                                 
             aTagName   newFolderId B  §  #       	      ;    5   ¸   
;    5   T  ;    5   5   : W   QA5   V   T  8QV   ŃÜ$Č)Ď+    PlacesUtils   bookmarks   createFolder   tagsFolderId   DEFAULT_INDEX   _tagFolders   ˙˙˙˙   3   TS__getItemIdForTaggedURI             ×       š      C                                    	   aURI   aTagName   tagId   db	   stmt    č	  8       
      A¸    
T : W   QV   ×˙   ×˙;   5   ¸   
;   5   : 5     QV  ¸   
=   :   QV  5   	V   6   
QV  5   	T  5   6   QV  ¸   
:     V  5   5   t   t   
   V  ¸   
:  Qu ×˙ËČ>ŰÍ@Ë@ČEÓ×.Ë
ßLŃO
 !   _getItemIdForTag   PlacesUtils   history   QueryInterface   Ci%   nsPIPlacesDatabase   DBConnection   createStatementů   SELECT id FROM moz_bookmarks
       WHERE parent = :tag_id
       AND fk = (SELECT id FROM moz_places WHERE url = :page_url)   params   tag_id   page_url	   spec   executeStep   row   id   finalize       2      ˙˙˙˙   %   TS_getItemIdForTag               b       š                                	             aTagName   i Ř
    X       	      A5    K   ImW   T  ¸   
:  A5    V   7¸   
:     ;   â   V   :  NăQLM˙˙˙ˇQN×˙É0NĘĘ
ŐÎŐ]
    _tagFolders   toLowerCase   parseInt      O      ˙˙˙˙   =   TS__convertInputMixedTagsArray                        š                                             aTags ;    j             T  ¸    
    A: Ď  l      map   ˙˙˙˙   A   TS__convertInputMixedTagsArray/<Á               Ó       š      5                                       val   tag e    l             Y   A]       QT  '=   E   QA5   T  7   0V   T  6   QV   ¸   
=       : Q   xT  '=   E   .QT  Ů   >E   QT  Ů   ;   5   	5   
   0V   T  6   QV   ¸   
=      : Q   ;   5   pV   
Ë
Ú+qÍtŢvř+xÍ{Ţ}Ë    _self   number   _tagFolders   id!   __defineGetter__	   name   string   length   Ci#   nsITaggingService   MAX_TAG_LENGTH   Cr)   NS_ERROR_INVALID_ARG   ˙˙˙˙   E   TS__convertInputMixedTagsArray/</<á                          š                                            ˘  Ä  t             A5    5   A5   71Ó    _self   _tagFolders   id   ˙˙˙˙   E   TS__convertInputMixedTagsArray/</<á                          š                                            	  2  {             A5    ¸   
A5   : /×&    _self!   _getItemIdForTag	   name   ˙˙˙˙      TS_tagURI                z       š   	   <                                @   	   aURI   aTags	   tags   taggingService Ň  ö                   D   #QT  D   Q;    ¸   
T :     ;   5   pA¸   
T :    QA   Q;   5   ¸   
Y       ]   @: QĚ	Ę
ĎËËÉÖĘ  Ş    Ş    Array   isArray   Cr)   NS_ERROR_INVALID_ARG7   _convertInputMixedTagsArray   PlacesUtils   bookmarks   runInBatchMode   runBatched   ˙˙˙˙   -   TS_tagURI/<.runBatchedÁ                 %       š                                             aUserData   ä                     ¸    
          : QÖ  ¨Ę    ¨    forEach   ˙˙˙˙   1   TS_tagURI/<.runBatched/<Á                 Ć       š   
   1                                        tag A  Ę               T  5    ×˙   A¸   
T  5   : QA¸   
   T  5   : ×˙   7;   5   ¸   
T  5       ;   5   5   @: Q;   5   ¸   
T  5    : T  5      *;   5   ¸   	
T  5    T  5   : QËÔŐŃÝ    ¤ŮĚĺ5    id   _createTag	   name-   _getItemIdForTaggedURI   PlacesUtils   bookmarks   insertBookmark   DEFAULT_INDEX   getItemTitle   setItemTitle   ˙˙˙˙   )   TS__removeTagIfEmpty               Á       š      ?                                       aTagId   count   db	   stmt Ú  Ţ  ł       
      >   Q;    5   ¸   
;   5   : 5     QV  ¸   
=   :   QV  5   T  6   	QV  ¸   

:     V  5   5   W   Qt   
   V  ¸   
:  Qu V   >   ;    5   ¸   
T  : QŰÍË  ˇČŇ,Ë
ÝŃŘ)    PlacesUtils   history   QueryInterface   Ci%   nsPIPlacesDatabase   DBConnection   createStatement   SELECT count(*) AS count FROM moz_bookmarks
       WHERE parent = :tag_id   params   tag_id   executeStep   row   count   finalize   bookmarks   removeItem    Y   0      ˙˙˙˙      TS_untagURI                       š   
   G                                @   	   aURI   aTags	   tags   taggingService   ¸  Ë                 D   "QT E   Q;    ¸   
T :     ;   5   pT     A¸   
   : U QA¸   
T :    QA   Q;   5   ¸   
Y       ]   	@: QŐĎËÍËÉÖĘ  ę  Ű  ę    Array   isArray   Cr)   NS_ERROR_INVALID_ARG   getTagsForURI7   _convertInputMixedTagsArray   PlacesUtils   bookmarks   runInBatchMode   runBatched   ˙˙˙˙   1   TS_untagURI/<.runBatchedÁ                 %       š                                             aUserData    Ś  Ü                   ¸    
          : QÖ  čĘ  Ţ  č    forEach   ˙˙˙˙   5   TS_untagURI/<.runBatched/<Á                Z       š                               	             tag R    Ţ             T  5    ×˙   N   QA¸   
   T  5   :    QV   ×˙   ;   5   ¸   
V   : QČËËŐ	ČÚ  ŕ    id-   _getItemIdForTaggedURI	   name   PlacesUtils   bookmarks   removeItem    ˙˙˙˙          itemId           H   ˙˙˙˙   ˙˙˙˙   !   TS_getURIsForTag              0      š      r                                     aTagName	   uris   tagId   db	   stmt ü  Ý  î             T   D   QT  Ů    >   ;   5   pZ      QA¸   
T  :   QV  ×˙   
V   ;   5   ¸   
;   5   : 5   	  QV  ¸   

=   :   QV  5   V  6   Q   RmV   ¸   
;   5   ¸   
V  5   5   @@: : Q     Qv  QČ    ăV  ¸   
:  ˙˙˙Łt   
   V  ¸   
:  Qu V   ÔËÉËČŰÍË  ůČ  ţÓm(b  4
ě
˙˙˙öÉÓ  ß Ń    length   Cr)   NS_ERROR_INVALID_ARG!   _getItemIdForTag   PlacesUtils   history   QueryInterface   Ci%   nsPIPlacesDatabase   DBConnection   createStatementÓ   SELECT h.url FROM moz_places h
       JOIN moz_bookmarks b ON b.fk = h.id
       WHERE b.parent = :tag_id   params   tag_id	   push   Services   io   newURI   row   url   executeStep   finalize    ˙˙˙˙         ex        Ľ   q       Ş   b        Ź   8       ĺ      ˙˙˙˙   ˙˙˙˙   !   TS_getTagsForURI               č       š      ^                                   	   aURI   aCount	   tags   bookmarkIds   i   folderId  !   e"        
      T      ;    5   pZ   W   Q;   5   ¸   
T  : W  Q>W  Q   `m;   5   ¸   
V  V  7: W  QA5   V  7   V   ¸   
A5   V  7: QV  #?W  QQăV  V  Ů   ˙˙˙V   ¸   	
    : QT    T V   Ů   6   
QV   ËÉÔČ	%`Rp 
ÚČËÚ *Î  Ő ÔŇ    Cr)   NS_ERROR_INVALID_ARG   PlacesUtils   bookmarks)   getBookmarkIdsForURI%   getFolderIdForItem   _tagFolders	   push   length	   sort   value   ˙˙˙˙   %   TS_getTagsForURI/<Á                 &       š                                              a   b  Í!  "              T  ¸    
:  ¸   
T ¸    
:  : ĘÔ˙˙˙â/    toLowerCase   localeCompare    D   p      ˙˙˙˙   I   TaggingService.prototype._tagFoldersÁ                  ă       š      R                                   "  Ň$  $      	      A5        Ň  Q   QAZ   6    Q;   5   ¸   
;   5   : 5      QV   ¸   
=   :   QV  5   	;   5   6   
Q   *mA5    V  5   5   V  5   5   8QăV  ¸   
:  ˙˙˙Ët   
   V  ¸   
:  Qu ČA5    ŃË
ŰÍ
Ë *ČŮE(:
 /
ä /ßŇ    __tagFolders   PlacesUtils   history   QueryInterface   Ci%   nsPIPlacesDatabase   DBConnection   createStatement}   SELECT id, title FROM moz_bookmarks WHERE parent = :tags_root    params   tags_root   tagsFolderId   row   id   title   executeStep   finalize    ˙˙˙˙          db    	   stmt        }   I          :          Ë   ˙˙˙˙   ˙˙˙˙   A   TaggingService.prototype.allTagsÁ                 \       š                                             allTags   iů$  ü%  <      
      Z   W   QA5    K   $mW  V   ¸   
A5    V  7: QăQLM˙˙˙ÜQNV   ¸   
    : QV   ÉÉ0)ĘćÔ    _tagFolders	   push	   sort   ˙˙˙˙   E   TaggingService.prototype.allTags/<Á                 &       š                                              a   b  %  â%  A            T  ¸    
:  ¸   
T ¸    
:  : ĘÔ˙˙˙â/    toLowerCase   localeCompare      *      ˙˙˙˙   A   TaggingService.prototype.hasTagsÁ                          š                                            #&  S&  H            A5    Ů   >Î#    _tagFolders   length   ˙˙˙˙      TS_observe                 @       š                                 
             aSubject   aTopic   aData   &  9'  M            T ;       6;   5   ¸   
A: Q;   5   ¸   
A;    : QÉÖŰ2    TOPIC_SHUTDOWN   PlacesUtils   bookmarks   removeObserver   Services   obs   ˙˙˙˙   K   TS__getTaggedItemIdsIfUnbookmarkedURI                   š      e                                    	   aURI   itemIds   isBookmarked   db	   stmt )  2-  `            Z   W   QBW  Q;    5   ¸   
;   5   : 5     QV  ¸   
=   :   QV  5   T  5   
6   	Q   HmA5   V  5   5   7   'V   ¸   
V  5   5   : Q   CW  QăV  ¸   
:  E   QV   ˙˙˙˘t   
   V  ¸   
:  Qu V     Z      	V   ÉŰÍË hČ m×n(c oŐ"
â
 oÖÔ zŃ	Ó#    PlacesUtils   history   QueryInterface   Ci%   nsPIPlacesDatabase   DBConnection   createStatementß   SELECT id, parent
       FROM moz_bookmarks
       WHERE fk = (SELECT id FROM moz_places WHERE url = :page_url)   params   page_url	   spec   _tagFolders   row   parent	   push   id   executeStep   finalize    g   r       l   c      ˙˙˙˙      TS_onItemAdded                 =       š                                              aItemId   aFolderId   aIndex   aItemType	   aURI   aTitle      w-  ¤.              T ;    5   D   QT ;    5   5      A5   T  T 8QÔÓÎ#    PlacesUtils   tagsFolderId   bookmarks   TYPE_FOLDER   _tagFolders   ˙˙˙˙   !   TS_onItemRemoved                ű       š      \                                     aItemId   aFolderId   aIndex   aItemType	   aURI     Ń.  2              T ;    5   E   QA5   T  7   A5   T  &Q   ĚT E   QA5   T 7       QA¸   
T :    Q>  Q    Km;    5   ¸   
V   V  7: Q     Qv  QČ    V  #?W  QQăV  V   Ů   ˙˙˙ŞČČ   ,T E   QA5   T 7   A¸   
T : QŢĐÉË  Ë
Ë
Č&K=[ 
ăÓ *Î  Ü ÓĎ"    PlacesUtils   tagsFolderId   _tagFoldersE   _getTaggedItemIdsIfUnbookmarkedURI   bookmarks   removeItem   length#   _removeTagIfEmpty    ˙˙˙˙          itemIds                     i                    ex        q   [        s   #       M      ˙˙˙˙   f   g                      ˙˙˙˙   !   TS_onItemChanged                 -       š                                              aItemId   aProperty+   aIsAnnotationProperty   aNewValue   aLastModified   aItemType      ˛2  Ć3  ¤            T =    E   QA5   T  7   A5   T  T 8QŮÎ&    title   _tagFolders   ˙˙˙˙      TS_onItemMoved                 C       š                                              aItemId   aOldParent   aOldIndex   aNewParent   aNewIndex   aItemType      ď3  5  Ť            A5    T  7E   (Q;   5   T E   Q;   5   T    A5    T  &QäÎË!    _tagFolders   PlacesUtils   tagsFolderId   ˙˙˙˙   M   TaggingService.prototype.onItemVisitedÁ                          š                                              !5  &5  ˛                 ˙˙˙˙   W   TaggingService.prototype.onBeginUpdateBatchÁ                          š                                              G5  L5  ł             #    ˙˙˙˙   S   TaggingService.prototype.onEndUpdateBatchÁ                          š                                              k5  p5  ´             !    ˙˙˙˙   +   TagAutoCompleteResult                 =       š                                               searchString   searchResult   defaultIndex!   errorDescription   results   comments      7  f8  Ĺ            AT  6    QAT 6   QAT 6   QAT 6   QAT 6   QAT 6   QĘĘĘĘĘĘ    _searchString   _searchResult   _defaultIndex#   _errorDescription   _results   _comments   ˙˙˙˙   Y   TagAutoCompleteResult.prototype.searchStringÁ                          š                                            Í8  ô8  Ő            A5        _searchString   ˙˙˙˙   Y   TagAutoCompleteResult.prototype.searchResultÁ                          š                                            :  ,:  ŕ            A5        _searchResult   ˙˙˙˙   Y   TagAutoCompleteResult.prototype.defaultIndexÁ                          š                                            :  ž:  ç            A5        _defaultIndex   ˙˙˙˙   a   TagAutoCompleteResult.prototype.errorDescriptionÁ                          š                                            ;  E;  î            A5     #   _errorDescription   ˙˙˙˙   U   TagAutoCompleteResult.prototype.matchCountÁ                          š                                            ;  ¨;  ő            A5    Ů   Ě    _results   length   ˙˙˙˙   _   TagAutoCompleteResult.prototype.typeAheadResultá                          š                                              Ŕ;  Č;  ů            B    ˙˙˙˙   !   PTACR_getValueAt                        š                                              index 2<  `<  ţ            A5    T  7Ë    _results   ˙˙˙˙   !   PTACR_getLabelAt                        š      	                                        index <  ş<              A¸    
T  : Ë    getValueAt   ˙˙˙˙   %   PTACR_getCommentAt                        š                                              index *=  Y=  	            A5    T  7Ë    _comments   ˙˙˙˙   !   PTACR_getStyleAt                 )       š                                              index É=  ă>              A5    T  7    @T  >   =   =   Ë    _comments   suggestfirst   suggesthint   ˙˙˙˙   !   PTACR_getImageAt                        š                                                index N?  l?              @    ˙˙˙˙   ;   PTACR_getFinalCompleteValueAt                        š      	                                        index ń?  !@  $            A¸    
T  : Ë    getValueAt   ˙˙˙˙   '   PTACR_removeValueAt                 +       š                                              index   removeFromDb  A  pA  -            A5    ¸   
T  ?: QA5   ¸   
T  ?: QŐŐ     _results   splice   _comments   ˙˙˙˙   +   TagAutoCompleteSearch                   !       š                                            B  ÜB  9            ;    ¸   
A=   =   =   : QŇ ::    XPCOMUtils/   defineLazyServiceGetter   taggingM   @mozilla.org/browser/tagging-service;1#   nsITaggingService   ˙˙˙˙   #   PTACS_startSearch       
        ą      š                              .      @      searchString   searchParam   result   listener   searchResults   results   comments   index   before   m   newResult	   self   doSearch   gen  śD  ;O  K                W  QA5    5      QZ      QZ      QAB6   Q;   ¸   
   ¸   
=   :    ¸   
=   : : W   Q=      QV   ×˙      ¸   	
>V   ?:    Q   ¸   	
V   ?:    Q   ¸   

     : W  QV     7   V  >7   Q   ¸   	
V  >7Ů   :    Q   Ů       R;      ;   5   5   >=         R W  Q   ¸   
   V  : QA   QV  :  W  Q   măV  ¸   
:  ˙˙˙ďV  ¸   
:  Q iĘ KŃĘĘČÝŃ RČËÓ	ÉŇÉ
ŃČ	Ëx	×ÉË
Ëß aČŮ Č(˙˙˙őŐĎ    tagging   allTags   _stopped	   Math   max   lastIndexOf   ,   ;      slice   match   length+   TagAutoCompleteResult   Ci+   nsIAutoCompleteResult   RESULT_NOMATCH   onSearchResult	   next   close   ˙˙˙˙      doSearch                       š      y                         9             i   newResult   .generator   searchResult}H  ˝N  i            É   Ę   ĐQ>   Q   Ăm  5       B   Ë  ĐQ     7¸   
:  ¸   
  ¸   
:  : >E   #Q  ¸   
     7: ×˙   A  ¸   
       7: Q  ¸   
     7: Q   #?   Qă     Ů   ˙˙˙0  Ů   >   ;   5   5      ;   5   5      Q;   	     >=   
    R    Q  ¸   
     : QB   Ë  ĐQ   Ě  iĚ
(  Ő kĘ
ĚŇĘĚ% oČ×
á
ŰÎ k× 
ĚÔŐ
ŃĎ ÉÚĚ    _stopped   toLowerCase   indexOf	   push   length   Ci+   nsIAutoCompleteResult   RESULT_SUCCESS   RESULT_NOMATCH+   TagAutoCompleteResult      onSearchResult       Ő   
   2   t     \s+                ˙˙˙˙   !   PTACS_stopSearch                   	       š                                             ŚO  ČO              AC6    QČ    _stopped