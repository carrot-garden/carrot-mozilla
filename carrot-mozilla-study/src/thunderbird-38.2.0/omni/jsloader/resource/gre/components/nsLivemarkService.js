çżsš                W  7   š   p   á      <                   T            resource://gre/components/nsLivemarkService.js              	                              !   "         4;   5       Q;   5      Q;   5      Q;   5      Q;   ¸   	
=   
: Q;   ¸   	
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   =   : Q;   ¸   
A=       : Q;   5   5      QXô    Qź6î   !Qźŕ   "Q;   #Y   Y   ]   %Y   ]   &   a   ';   ¸   (
   : ]   )   ]   *B]   +   ]   ,   ]   -   ]   .   ]   /Z   ]   0   	]   1   
]   2   ]   3   ]   4   ]   5   ]   6@]   7   ]   8   ]   9   ]   :   ]   ;   ]   4   ]   5   ]   <   ]   =   ]   >   ]   ?   ]   @   ]   A;   ¸   B
=   C: ]   D;   ¸   E
;   #: ]   F;   ¸   G
Z  ;   5   H`   ;   5   I`  ;   5   J`  ;   5   K`  ;   5   L`  : ]   M6   $Q;   NY      a   O   b   O   ]   P   ]   Q    ]   R   !b   S   "a   S   #b   T   $a   T   %b   U   &a   U   ']   V   (]   W   )]   X   *a   Y   +b   Y   ,]   Z   -]   [   .]   \   /]   ]   0]   ^   1]   _   2]   `   3]   a;   ¸   G
Z  ;   5   b`   : ]   M6   $Q;   cY      5]   a   6]   d   7]   e   8]   f   9]   g   :]   h   ;]   i;   ¸   G
Z  ;   5   j`   ;   5   k`  ;   5   l`  ;   5   m`  : ]   M6   $QA;   ¸   o
Z  ;   #`   : 6   nQ*-/1Ę6	 	 h	ĐĐĐĐŐ3Ő1ŇLŇHŇHŇEŇKŇ?Ű$*Ő	-É/Ę1Ę6ACĘEĘGĘIĘ^ŃČvĘ{Ę  Ę  ŠĘ Ę BÉĘ QĘ eĘ ĘĘĘĘ ŞĘ žĘ ČĘ ÖĘĘĘĘĘĘĘ ăĘ ěŃ	ČŃČĐÎÎÎÎÎ đÎ ÷  @ĘĘĘ VĘ ]Ę cĘ yĘĘĘĘĘĘ Ę žĘ ĂĘĘĘ ÝĘ ĺĘ Ę Ę Ę &Ę DĘ QĘ ZĐÎ ZÎ h nĘĘ {Ę ąĘ ťĘ ĐĘ űĘ Ę ĐÎÎÎÎ Î Ń5É˙˙˙ßÉ3    Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils-   defineLazyModuleGetter   PlacesUtilsM   resource://gre/modules/PlacesUtils.jsm   NetUtilE   resource://gre/modules/NetUtil.jsm   PromiseE   resource://gre/modules/Promise.jsm	   Task?   resource://gre/modules/Task.jsm   DeprecatedK   resource://gre/modules/Deprecated.jsm/   defineLazyServiceGetter   secManI   @mozilla.org/scriptsecuritymanager;11   nsIScriptSecurityManager!   defineLazyGetter   asyncHistory   SEC_FLAGS5   DISALLOW_INHERIT_PRINCIPAL   RELOAD_DELAY_MS   EXPIRE_TIME_MS-   ONERROR_EXPIRE_TIME_MS   LivemarkService   prototype   _livemarks   _guids#   _populateCacheSQL   async1   _ensureAsynchronousCache   _onCacheReady   _reloading#   _startReloadTimer   observe   addLivemark   removeLivemark   _reloaded'   _reloadNextLivemark   reloadLivemarks   getLivemark%   onBeginUpdateBatch!   onEndUpdateBatch   onItemVisited   _itemAdded   onItemAdded   onItemChanged   onItemMoved   onItemRemoved   onPageChanged   onTitleChanged   onDeleteVisits   onClearHistory   onDeleteURI   onVisit   IDM   {dca61eb5-c7cd-4df1-b0fb-d0722baba251}   classID1   generateSingletonFactory   _xpcom_factory   generateQI%   mozIAsyncLivemarks-   nsINavBookmarkObserver+   nsINavHistoryObserver   nsIObserver1   nsISupportsWeakReference   QueryInterface   Livemark   status   _setAnno   writeFeedURI   writeSiteURI	   guid   dateAdded   lastModified   updateChildren   reload   remove   children   _isURIVisited)   getNodesForContainer%   registerForUpdates)   unregisterForUpdates?   _invalidateRegisteredContainers-   updateURIVisitedStatus   terminate   abort   mozILivemark)   LivemarkLoadListener   handleResult   onDataAvailable   onStartRequest   onStopRequest   _setResourceTTL   getInterface+   nsIFeedResultListener#   nsIStreamListener%   nsIRequestObserver+   nsIInterfaceRequestor   NSGetFactory)   generateNSGetFactory   ˙˙˙˙                       @       š   	                                         ß  ł                ;    5   ¸   
;    5   C: Q;   5   ¸   
;   5   : "ŕŰE    PlacesUtils   history   addObserver   livemarks   Cc=   @mozilla.org/browser/history;1   getService   Ci!   mozIAsyncHistory   ˙˙˙˙      LivemarkService                   [       š                                            	  
  6             ;    5   ¸   
A;   5   C: Q;   ¸   
AC: QAA¸   
:  ¸   
@;   	5   
: 6   Q9á<Ň?ČŢ;    Services   obs   addObserver   PlacesUtils   TOPIC_SHUTDOWN/   addLazyBookmarkObserver%   _cacheReadyPromise1   _ensureAsynchronousCache	   then   Cu   reportError   ˙˙˙˙   W   LivemarkService.prototype._populateCacheSQLÁ                 ;       š                                           %   getAnnoSQLFragmentU  d  I                 W   Q=    V   =   : ä=   V   =   : ä=   KĘJSUŐÖ[* ó   SELECT b.id, b.title, b.parent, b.position, b.guid,
                   b.dateAdded, b.lastModified,
                   (    :feedURI_annoI    ) AS feedURI,
                   (    :siteURI_anno÷   ) AS siteURI
            FROM moz_bookmarks b
            JOIN moz_items_annos a ON a.item_id = b.id
            JOIN moz_anno_attributes n ON a.anno_attribute_id = n.id
            WHERE b.type = :folder_type
              AND n.name = :feedURI_anno   ˙˙˙˙   %   getAnnoSQLFragment                        š                                               aAnnoParam {  l  K             =    T  ä=   PĚ   SELECT a.content
              FROM moz_items_annos a
              JOIN moz_anno_attributes n ON n.id = a.anno_attribute_id
              WHERE a.item_id = b.id
                AND n.name =       ˙˙˙˙   g   LivemarkService.prototype._ensureAsynchronousCache<Á                 Á       š      '                                      .generator   .genrval	   conn  Ň  ^       	      É   Ę   ĐQY   ;    ¸   
:  ]   B]      Ë  Đ   QY      ¸   
A5   Y   ;   5   5   ]   	;    5   
]   ;    5   ]   A    : ]   B]      Ë  ĐQY   ]   C]      Ěs^ĚŃŢ×ÔĎŐ`
ÎsË	    PlacesUtils'   promiseDBConnection   value	   done   executeCached#   _populateCacheSQL   Ci-   nsINavBookmarksService   TYPE_FOLDER   folder_type   LMANNO_FEEDURI   feedURI_anno   LMANNO_SITEURI   siteURI_anno   ˙˙˙˙   k   LivemarkService.prototype._ensureAsynchronousCache</<Ĺ               B      š      g                                        row   id	   guid   siteURL ˛  Ě  c             T  ¸    
=   :    QT  ¸    
=   :   QT  ¸    
=   :   QA5   V   ;   Y   V   ]   V  ]   T  ¸    
=   : ]   T  ¸    
=   : ]   T  ¸    
=   	: ]   
T  ¸    
=   : ]   T  ¸    
=   : ]   ;   ¸   
T  ¸    
=   : : ]   V     ;   ¸   
V  :    @]   R 8QA5   V  V   8QĎČĎČĎ
ČĘËÉÉĎČĎ
ČĎČĎČĎČŰ˙˙˙ńČŐÎi
rĐ    getResultByName   id	   guid   siteURI   _livemarks   Livemark   title   parent   parentId   position   index   dateAdded   lastModified   NetUtil   newURI   feedURI   _guids
   4   Ś      ˙˙˙˙   !   LS__onCacheReady                        š                                              aCallback    @  v             A5    ¸   
T  : QÔ( %   _cacheReadyPromise	   then   ˙˙˙˙   )   LS__startReloadTimer                          š      3                                        <  |             A5       A5    ¸   
:  Q   *A;   5   ¸   
;   5   : 6    QAC6   QA5    ¸   
A5   	¸   

A: ;   ;   5   5   : QÖŇĘ  ÉČŰ#Ď  B    _reloadTimer   cancel   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer   _reloading!   initWithCallback'   _reloadNextLivemark	   bind   RELOAD_DELAY_MS   TYPE_ONE_SHOT   ˙˙˙˙      LS_observe                Ś       š      5                                     aSubject   aTopic   aData   Â  ů               T ;    5      A5       A5   ¸   
:  QA@6   QA5      %AB6   QA5   ¸   
:  QA%   QA5   K   Q   mW   V   ¸   
:  QăQLM˙˙˙çQNČAY   6   QÎŃČČŃĎ0ĘÜĚ    PlacesUtils   TOPIC_SHUTDOWN   _pendingStmt   cancel   _reloadTimer   _reloading   _livemarks   terminate    ˙˙˙˙          livemark       x          n   +   ˙˙˙˙   ˙˙˙˙      LS_addLivemark               ř      š      Đ                       K      @      aLivemarkInfo#   aLivemarkCallback   deferred   addLivemarkEx   livemark   ô%  Š             T   D   ťQ=    T  qE   QT  5    ?D   Q=   T  q D   QT  5   ;   5   5   D   nQT  5   ;   5   r D   TQT  5   E   QT  5   ;   5   r D   ,QT  5   E   Q     ¸   	
T  5   :     ;   
5   p      ;   ¸   
=   =   : Q;   ¸   
:     Q@   Q@   QT  5    A5   q   #;   5   =   ;   
5   R p;   Y   T  5   ]   T  5    ]    T  5   ]   T  5   ]   T  5   ]   T  5   ]   T  5   ]   T  5   ]   R    QA5   E   QA5   5      5      y   A5   5   6   Q   A5   5   6   QT  5          A5   5   6   QT  5          A5   5   6   QA5      5      8QA5      5      5   8Qt   2   B   Qv   QV      Q@   QČt   
   A¸   
A   : Qu       @      5   ĘßîÚÎ"ÚÎÔËŃ  ˇ  żĚÉ ĎÚËÍ Í Í Í Í Í Í Í  ÉÉ  ŇâÖÖÉ
ÖÉ
Ö  ß×ćĚĘŇÔ  ˙Ö3    parentId   index   Ci-   nsINavBookmarksService   DEFAULT_INDEX   feedURI   nsIURI   siteURI	   guid	   test   Cr)   NS_ERROR_INVALID_ARG   Deprecated   warningÁ   Passing a callback to Livermarks methods is deprecated. Please use the returned promise instead.   https://developer.mozilla.org/docs/Mozilla/JavaScript_code_modules/Promise.jsm   Promise   defer   _livemarks   Components   Exception      Livemark   title   dateAdded   lastModified   _itemAdded   id   _guids   _onCacheReady   promise    ˙˙˙˙          ex       ˙˙˙˙   !   LS_addLivemark/<Ĺ                  Č       š      -                                   #  Ż%  ç                   f      B   ¸    
   5      : Q      Qv   QČ          ¸   
   : Q   a      B   ¸    
;   5      : Q      Qv   QČ          ¸   
   : Qa= äŘÚ= äŘŐ    onCompletion   result   reject   Cr   NS_OK   resolve    ˙˙˙˙          ex2        ˙˙˙˙          ex2         v   $           $       :      ˙˙˙˙         ˙˙˙˙)   ^[a-zA-Z0-9\-_]{12}$          Ž                    ˙˙˙˙   ˙˙˙˙   #   LS_removeLivemark                    š      y                       #      @      aLivemarkInfo#   aLivemarkCallback   id   deferred!   removeLivemarkEx #&  ú,        	      T      ;    5   pT  5   D   QT  5      Q=   T  qE   Q     ¸   
T  5   :  D   *Q=   T  qE   QT  5   ?D   QV       ;    5   p      ;   ¸   
=   =   : QV   A5   	q   A5   	V   7W   Q;   
¸   
:     Q@   QV   A5   q    #;   5   =   ;    5   R pA5   V   7¸   
:  Qt   +   ;  Qv  QV     QČt   
   A¸   
A   : Qu       @      5   ËŰĎ$ÔĘßËŃ  ËĐĚÉK
ĚÚŕĚŐÔ ?Ö3    Cr)   NS_ERROR_INVALID_ARG	   guid   id	   test   Deprecated   warningÁ   Passing a callback to Livermarks methods is deprecated. Please use the returned promise instead.   https://developer.mozilla.org/docs/Mozilla/JavaScript_code_modules/Promise.jsm   _guids   Promise   defer   _livemarks   Components   Exception      remove   _onCacheReady   promise    ˙˙˙˙         ex       ˙˙˙˙   '   LS_removeLivemark/<Ĺ                  ť       š      -                                   *  ľ,  '                  b      >   ¸    
   5   @: Q      Qv   QČ          ¸   
   : Q   X      >   ¸    
;   5   @: Q      Qv   QČ          ¸   
:  Q]9ŕŘÚ9ŕŘĐ    onCompletion   result   reject   Cr   NS_OK   resolve    ˙˙˙˙          ex2        ˙˙˙˙          ex2         r                       6      ˙˙˙˙         ˙˙˙˙)   ^[a-zA-Z0-9\-_]{12}$        ń   p        ń   O       A     ˙˙˙˙   ˙˙˙˙   -   LS__reloadNextLivemark                         š      "                                   D-  .  C      	      AB6    QA5   K   Q   hmW   A5   ¸   
V   : ×˙   GA5   ¸   
V   : QA5   V   7¸   
A5   : QA¸   
:  Q   ăQLM˙˙˙QNČČĎ0mĘŃ
ŐÜĚHŇ    _reloading   _livemarks   _reloaded   indexOf	   push   reload   _forceUpdate#   _startReloadTimer    ˙˙˙˙          id          n          z   ˙˙˙˙   ˙˙˙˙   %   LS_reloadLivemarks               A       š                                       @      aForceUpdate%   notWorthRestarting˛.  1  Q            A5    D   Q       QA5   E   
QV      A¸   
A    : QĚËĐŇ b    _forceUpdate   _reloading   _onCacheReady   ˙˙˙˙   )   LS_reloadLivemarks/<Ĺ                   &       š                                            .0   1  \            A     6    QAZ   6   QA¸   
:  QÍËĚ    _forceUpdate   _reloaded#   _startReloadTimer   ˙˙˙˙      LS_getLivemark                ů       š      N                               @      aLivemarkInfo#   aLivemarkCallback   id   deferred /1  7  e            T      ;    5   pT  5   D   QT  5      Q=   T  qE   Q     ¸   
T  5   :  D   +Q=   T  qE   QT  5   ?D   Q       ;    5   p      ;   ¸   
=   =   : Q;   	¸   

:     QA¸   
A    : Q      @      5   ËÜĎ$ÔĘßËŃ s xĚÉŇ Ö3    Cr)   NS_ERROR_INVALID_ARG	   guid   id	   test   Deprecated   warningÁ   Passing a callback to Livermarks methods is deprecated. Please use the returned promise instead.   https://developer.mozilla.org/docs/Mozilla/JavaScript_code_modules/Promise.jsm   Promise   defer   _onCacheReady   promise   ˙˙˙˙   !   LS_getLivemark/<Ĺ                  =      š      <                        $           ,4  Ä6  y      
            A5    q   !A5          7      Q      A5   q         N   ¸   
;   5   A5         7: Q      Qv   QČ       +      ¸   
A5         7: Q   {      >   ¸   
;   5   @: Q      Qv   QČ       8      ¸   
;   ¸   	
=   
;   5   : : QŃÜŃ~I,đŘ
ë9ŕŘ
ě˙˙˙đC    _guids   _livemarks   onCompletion   Cr   NS_OK   resolve)   NS_ERROR_INVALID_ARG   reject   Components   Exception       ˙˙˙˙          ex        ˙˙˙˙          ex         Ń            S   0             ˙˙˙˙   ň      ˙˙˙˙)   ^[a-zA-Z0-9\-_]{12}$       ˙˙˙˙   Y   LivemarkService.prototype.onBeginUpdateBatchÁ                          š                                              7  7               $    ˙˙˙˙   U   LivemarkService.prototype.onEndUpdateBatchÁ                          š                                              ˝7  Â7               $    ˙˙˙˙   O   LivemarkService.prototype.onItemVisitedÁ                          š                                              ä7  é7               $    ˙˙˙˙      LS_onItemAdded                 M       š   	                                           aItemId   aParentId   aIndex   aItemType	   aURI   aTitle   aDateAdded   aGUID        &8  Ó9              T ;    5   5      9AY   T  ]   T ]   T ]   T ]   T ]   6   QÓČČČČÎ    Ci-   nsINavBookmarksService   TYPE_FOLDER   _itemAdded   id	   guid   index   dateAdded   lastModified   ˙˙˙˙   !   LS_onItemChanged                 Ŕ       š      ,                                        aItemId   aProperty   aIsAnno   aValue   aLastModified   aItemType       :  ~<  Ş            T ;    5   5      ŹA5   E   QA5   5   T     A5   T 6   QT  A5   q   nT =      A5   T  7T 6   Q   5T =      'A5   	T  7;   
â   
T ×
: 6   QA5   T  7T 6   QÓŰĎĘÉ
ŘÉ
Ů$ÉÓ6    Ci-   nsINavBookmarksService   TYPE_FOLDER   _itemAdded   id   lastModified   _livemarks   title   dateAdded   _livemark   parseInt   ˙˙˙˙      LS_onItemMoved                 O       š                                              aItemId   aOldParentId   aOldIndex   aNewParentId   aNewIndex   aItemType      §<  ď=  ž            T ;    5   5   E   QT  A5   q   +A5   T  7T 6   QA5   T  7T 6   QŮĘÓÓ+    Ci-   nsINavBookmarksService   TYPE_FOLDER   _livemarks   parentId   index   ˙˙˙˙   !   LS_onItemRemoved                 T       š                                 
             aItemId   aParentId   aIndex   aItemType	   aURI   aGUID      >  a?  Č            T ;    5   5   E   QT  A5   q   0A5   T  7¸   
:  QA5   T  &QA5   T &QŮĘŐËË    Ci-   nsINavBookmarksService   TYPE_FOLDER   _livemarks   terminate   _guids   ˙˙˙˙   Y   LivemarkService.prototype.onBeginUpdateBatchÁ                          š                                              ň?  ÷?  Ö             #    ˙˙˙˙   U   LivemarkService.prototype.onEndUpdateBatchÁ                          š                                              @  @  ×             #    ˙˙˙˙   O   LivemarkService.prototype.onPageChangedÁ                          š                                              >@  C@  Ř             #    ˙˙˙˙   Q   LivemarkService.prototype.onTitleChangedÁ                          š                                              d@  i@  Ů             #    ˙˙˙˙   Q   LivemarkService.prototype.onDeleteVisitsÁ                          š                                              @  @  Ú             #    ˙˙˙˙   Q   LivemarkService.prototype.onClearHistoryÁ                          š                                              °@  ľ@  Ű             #    ˙˙˙˙      PS_onDeleteURI                :       š                                        	   aURI Ţ@  UA  Ý            A5    K   Q   mW   V   ¸   
T  B: QăQLM˙˙˙ăQNČĎ0"Ęŕ-    _livemarks-   updateURIVisitedStatus    ˙˙˙˙          livemark          #       
   /   ˙˙˙˙   ˙˙˙˙      PS_onVisit                :       š                                        	   aURI vA  ěA  ă            A5    K   Q   mW   V   ¸   
T  C: QăQLM˙˙˙ăQNČĎ0"Ęŕ,    _livemarks-   updateURIVisitedStatus    ˙˙˙˙          livemark          #       
   /   ˙˙˙˙   ˙˙˙˙      Livemark                       š      Ş                           0             aLivemarkInfo BE  ,M        
      AT  5    6    QAT  5   6   QAT  5   6   QA;   5   5   6   QA;   R  6   QAZ   6   	QAZ   6   
QA;   R  6   QA=   6   QA>6   QA>6   QA@6   QA@6   QA@6   QA>6   QT  5      dAT  5   6   QAT  5   6   QAT  5   6   QAT  5   6   QAT  5   6   QAT  5   6   Q   ďA;   5   ¸   
T  5   T  5    T  5   T  5   : 6   QA¸   
T  5   : QT  5      A¸   
T  5   : QT  5      5AT  5   6   Q;   5   ¸   
A5   A5   : QT  5      5AT  5   6   Q;   5   ¸   
A5   A5   : QĎĎĎÖÉËËÉĚČČČČČČČ_ĎĎĎĎĎÔÚČČČ .ÉÔČÔČĎáČĎáF    title   parentId   index   _status   Ci   mozILivemark   STATUS_READY!   _resultObservers   Map)   _resultObserversList   _children   _nodes   _guid      _dateAdded   _lastModified   loadGroup   feedURI   siteURI   expireTime   id	   guid   dateAdded   lastModified   PlacesUtils   bookmarks   createFolder   writeFeedURI   writeSiteURI!   setItemDateAdded'   setItemLastModified   ˙˙˙˙   3   Livemark.prototype.statusá                          š                                            QM  `M  C            A5        _status   ˙˙˙˙   3   Livemark.prototype.statusÁ                 -       š                                              val nM  ˙M  D            A5    T     AT  6    QA¸   
:  QA5    ĘĘĚ    _status?   _invalidateRegisteredContainers   ˙˙˙˙      LM__setAnno                 2       š                                              aAnnoName   aValue  =O  ţO  V      
      ;    5   ¸   
A5   T  T >;    5   5   : QŃÍĎ XH    PlacesUtils   annotations#   setItemAnnotation   id   EXPIRE_NEVER   ˙˙˙˙      LM_writeFeedURI                 )       š                                              aFeedURI )P  P  ]            A¸    
;   5   T  5   : QAT  6   QŢĘ    _setAnno   PlacesUtils   LMANNO_FEEDURI	   spec   feedURI   ˙˙˙˙      LM_writeSiteURI              ´       š      ?                                     aSiteURI   feedPrincipal ÁP  S  c      	      T      4;    5   ¸   
A5   ;    5   : QA@6   Q;   ¸   
A5   :    Q;   ¸   	
V   T  ;   
: Q     Qv  QČČ    A¸   
;    5   T  5   : QAT  6   Q×Ę fČŇČáĚËŢĘ    PlacesUtils   annotations)   removeItemAnnotation   id   LMANNO_SITEURI   siteURI   secMan5   getSimpleCodebasePrincipal   feedURI3   checkLoadURIWithPrincipal   SEC_FLAGS   _setAnno	   spec    ˙˙˙˙         ex         S   !       u      ˙˙˙˙˙˙˙˙             ˙˙˙˙   /   Livemark.prototype.guidá                        š                                               aGUID S  2S  y            AT  6    Ę    _guid   ˙˙˙˙   /   Livemark.prototype.guidá                          š                                            >S  KS  z            A5    
    _guid   ˙˙˙˙   9   Livemark.prototype.dateAddedá                        š                                               aDateAdded ]S  S  |            AT  6    Ę    _dateAdded   ˙˙˙˙   9   Livemark.prototype.dateAddedá                          š                                            S  ŠS  }            A5        _dateAdded   ˙˙˙˙   ?   Livemark.prototype.lastModifiedá                        š                                               aLastModified žS  đS              AT  6    "Ę"    _lastModified   ˙˙˙˙   ?   Livemark.prototype.lastModifiedá                          š                                            T  T              A5        _lastModified   ˙˙˙˙   #   LM_updateChildren                ú      š   (                           7             aForceUpdate ?U  ]              A5    ;   5   5      T   E   -QA5   Ů   E   QA5   ;   ¸   
:     A;   5   5   6    QA5   	     Q  Q  Q   Q;   
5   ¸   
;   5   :    Q;   ¸   
A5   :   Q;   ¸   
A5   5   @@@V  @;   5   5   ;   5   5   : ¸   
;   5   :   QV  V   6   QV  5   ;   5   5   ;   5   5   6   QV  =    6   QV  ¸   !
=   "=   #B: Q;   $AR   QV  V  6   %QV  ¸   &
V  @: QAV   6   QČ   .   Qv   QA;   5   5   '6    QČ    Öí;Ö SŮ
ŃĘ Č
ŇČ
×ĎĎ ŁĘ ŤĘ ŁČ ŹÎŮĐxĎÚ
ČÎÔŃĚÝ    status   Ci   mozILivemark   STATUS_LOADING   children   length   expireTime	   Date   now   _terminated   CcC   @mozilla.org/network/load-group;1   createInstance   nsILoadGroup   secMan3   getNoAppCodebasePrincipal   feedURI   NetUtil   newChannel2	   spec   nsILoadInfo   SEC_NORMAL!   nsIContentPolicy!   TYPE_DATAREQUEST   QueryInterface   nsIHttpChannel   loadGroup   loadFlags   nsIRequest   LOAD_BACKGROUND#   LOAD_BYPASS_CACHE   requestMethod   GET!   setRequestHeader   X-Moz   livebookmarks)   LivemarkLoadListener+   notificationCallbacks   asyncOpen   STATUS_FAILED    ˙˙˙˙          loadgroup       feedPrincipal       channel       listener        ˙˙˙˙          ex         y   W      }   N  ˙˙˙˙   Ń  "   ˙˙˙˙   ˙˙˙˙      LM_reload                        š                                              aForceUpdate 6]  s]  ž            A¸    
T  : QĎ"    updateChildren   ˙˙˙˙      LM_remove                          š                                            ]  É]  Ă            ;    5   ¸   
A5   : QŰ*    PlacesUtils   bookmarks   removeItem   id   ˙˙˙˙   7   Livemark.prototype.childrená                          š                                            Ú]  ë]  Ç            A5        _children   ˙˙˙˙   7   Livemark.prototype.childrenÁ                ä       š   	   d                                     val ű]  V`  Č      
      AT  6    Q>   Q    @m  QA5   V   7  QA5   ¸   
V  : QČV   #?W   QQăV   A5   Ů   ˙˙˙łČ>   Q    Tm  QA5    V   7  Q;   ¸   
V  5      ¸   
A: : QČV   #?W   QQăV   A5    Ů   ˙˙˙ČA5    Ę&@2R2
ĐÖ Ě:Î˙˙˙ÚŘ Ň&TFf'
ĐŐĚ Ő	 Ô Ň/Î˙˙˙ĺŘ Ú    _children)   _resultObserversList   _nodes   delete   length   asyncHistory   isURIVisited   uri	   bind    ˙˙˙˙          i                     container        ˙˙˙˙          i                    child             ;   Livemark.prototype.children/<Á                        š                                           	   aURI   aIsVisited  Ë_  "`  Ő            A¸    
T  T : Q
Ň. -   updateURIVisitedStatus    u   f          R          ^   ˙˙˙˙      +          j   r   ˙˙˙˙   w   ?         ˙˙˙˙   !   LM__isURIVisited                i       š      2                        
          	   aURI `  *a  Ý            >   Q    ImA5    V   75   ¸   
T  :    A5    V   75   ČV   #?W   QQăV   A5    Ů   ˙˙˙ŞČ&I;[ ŢÚ
Ó Ţ.Î ŕ ŢŘ(    children   uri   equals   visited   length    ˙˙˙˙          i           [          g   ˙˙˙˙˙˙˙˙A             ˙˙˙˙   /   LM_getNodesForContainer              Ť      š      Ł                              @      aContainerNode   livemark   nodes   nowea  Űf  ĺ            A5    ¸   
   :    A5    ¸   
   : A   QZ      Q;   ¸   
:  Xč   Q>Ć       Q   mĆ     Q   QA5     7   QY      a      a      a      a   	   a   
   a      a      	a      
a      a      a      a      a      a   ;   ¸   
Z  ;   5   `   : ]     QV   ¸   
V  : QČÇ   #?   QQă   A5   Ů   ˙˙ţçČÇA5    ¸   
   V   : QV   ŇŇÉĚÍĚ    ű 'Ó
Ň
ĘĘĘĘĘĘĘĘĘĘĘĘĘĘĐ'Î˙˙˙éÍŐ î/Đ˙˙˙ĺÚ 	Ú    _nodes   has   get	   Date   now   _children   parent   parentResult   uri	   type   title   accessCount	   time	   icon   indentLevel   bookmarkIndex   itemId   dateAdded   lastModified	   tags   XPCOMUtils   generateQI   Ci/   nsINavHistoryResultNode   QueryInterface	   push   length   set    ˙˙˙˙         i                    child   	   node             G   LM_getNodesForContainer/node.parentá                          š                                            zc  Éc  ô              ¸    
;   5   : 
ÚB    QueryInterface   CiA   nsINavHistoryContainerResultNode         S   LM_getNodesForContainer/node.parentResultá                          š                                            ăc  ţc  ö            A5    5   Ě    parent   parentResult         A   LM_getNodesForContainer/node.uriá                          š                                            d   d  ÷               5    5   Đ    uri	   spec         C   LM_getNodesForContainer/node.typeá                          š                                            2d  _d  ř            ;    5   5   Đ*    Ci/   nsINavHistoryResultNode   RESULT_TYPE_URI         E   LM_getNodesForContainer/node.titleá                          š                                            rd  d  ů               5    Ë    title         Q   LM_getNodesForContainer/node.accessCountá                   3       š                                 	           d  Ţd  ú      
      ;    â      ¸   
;   ¸   
A5   : : : 
č˙˙˙é˙˙˙ů8    Number   _isURIVisited   NetUtil   newURI   uri         C   LM_getNodesForContainer/node.timeá                          š                                              đd  ôd  ü            >          C   LM_getNodesForContainer/node.iconá                          š                                             e  e  ý            =                 Q   LM_getNodesForContainer/node.indentLevelá                          š                                            $e  Be  ţ            A5    5   ?Î    parent   indentLevel         U   LM_getNodesForContainer/node.bookmarkIndexá                          š                                              ]e  be  ˙            ×˙          G   LM_getNodesForContainer/node.itemIdá                          š                                              ve  {e               ×˙          M   LM_getNodesForContainer/node.dateAddedá                          š                                             e  e                  Ě          S   LM_getNodesForContainer/node.lastModifiedá                          š                                             śe  Ŕe                  Ě          C   LM_getNodesForContainer/node.tagsá                   :       š                                 
           Ňe  %f              ;    5   ¸   
;   ¸   
A5   : : ¸   
=   : 
ă"˙˙˙ŢÓF    PlacesUtils   tagging   getTagsForURI   NetUtil   newURI   uri	   join   ,     k         _   +  ˙˙˙˙   s   í          ˙˙˙˙   +   LM_registerForUpdates                 ,       š                                              aContainerNode   aResultObserver  g  äg              A5    ¸   
T  T : QA5   ¸   
T  : Q×Ô/ !   _resultObservers   set)   _resultObserversList	   push   ˙˙˙˙   /   LM_unregisterForUpdates               W       š                                              aContainerNode   index h  i              A5    ¸   
T  : QA5   ¸   
T  :    QA5   ¸   
V   ?: QA5   ¸   
T  : QÔĐČÖÔ# !   _resultObservers   delete)   _resultObserversList   indexOf   splice   _nodes   ˙˙˙˙   E   LM__invalidateRegisteredContainers                  }       š      +                        	           Vi  Ej              >   Q    ]m  Q  QA5    V   7  QA5   ¸   
V  :   QV  ¸   
V  : QČV   #?W   QQăV   A5    Ů   ˙˙˙Č&]Oo2Í
Đ
ŃČÔ :Î˙˙˙ÚŘ, )   _resultObserversList!   _resultObservers   get'   invalidateContainer   length    ˙˙˙˙          i                     container       observer           o          {   ˙˙˙˙      G          ˙˙˙˙   3   LM_updateURIVisitedStatus                ľ      š      Ş                        &      @   	   aURI   aVisitedStatus j  ­m  '            >   Q    LmA5    V   75   ¸   
T  :    A5    V   7   6   QV   #?W   QQăV   A5    Ů   ˙˙˙§Č>   Q   *mĆ      Q  QA5   V   7  QA5   ¸   
V  :    QA5   ¸   	
V  :    Ä  QA5   ¸   
V  :   Q>  Q    mĆ      QV  V  7   Q   5   T  5   
   >;   5   5   ¸   
   ¸   
A: ;   5   5   : QČÇV  #?W  QQăV  V  Ů   ˙˙˙sČČČÇV   #?W   QQăV   A5   Ů   ˙˙ţÉČ&L>^ )Ú
Ö ).Î + )Ř /& *  <2Ó
Đ
ŃÉŃ
ËŃČ&  t  ÍĎÓâ 7-Ď 7 4*Î˙˙˙îŮ /:Î˙˙˙ÚŘ,    children   uri   equals   visited   length)   _resultObserversList!   _resultObservers   get   _nodes   has	   spec   Services   tm   mainThread   dispatch	   bind   Ci   nsIThread   DISPATCH_NORMAL    ˙˙˙˙          i        ˙˙˙˙          i                    container       observer                   nodes                    j                 	   node            7   LM_updateURIVisitedStatus/<Á                          š                                            ül  Ym  7              ¸    
   >  : QŰ< 3   nodeHistoryDetailsChanged    w   <      ř             ^          j   ˙˙˙˙   l   H  ˙˙˙˙              Î   ž         í            ˙   g         ˙˙˙˙      LM_terminate                           š                                            Qn  o  D            AC6    QAZ   6   QA¸   
:  QČËĚ    _terminated)   _resultObserversList   abort   ˙˙˙˙      LM_abort                   E       š                                 	           Úo  p  Q            A;   5   5   6    QA5      (A5   ¸   
;   5   : QA@6   QÖŰČ    status   Ci   mozILivemark   STATUS_FAILED   loadGroup   cancel   Cr%   NS_BINDING_ABORTED   ˙˙˙˙   )   LivemarkLoadListener                 '       š                                              aLivemark âq  br  h            AT  6    QA@6   QAB6   QA;   6   QĘČČĚ    _livemark   _processor   _isAborted	   _ttl   EXPIRE_TIME_MS   ˙˙˙˙      LLL_abort                 7       š                                              aException ˘r  Hs  q            A5        /AC6    QA5   ¸   
:  QA¸   
;   : QČŃŃ-    _isAborted   _livemark   abort   _setResourceTTL-   ONERROR_EXPIRE_TIME_MS   ˙˙˙˙   !   LLL_handleResult   	             ¨      š   "   Ë                        2             aResult s  'y  {            A5         Q  Q  Q   Q;   ¸   
A5   5   :    QT   D   QT  5    D   QT  5      #;   5   =   	;   
5   R pT  5   ¸   
;   5   :   QA5   5     QV  5   E   )QV   D   QV  5   ¸   
V  :     (V  5   W  QA5   ¸   
V  : QZ     Q>  Q   m  Q  Q  QV  5   ¸   
V  ;   5   :   QV  5   D   
QV    QV      Č   ;   ¸   
V   V  ;   : Q     Qv  QČČ   iČ    V  5      V  5   ¸   
:     
=   	  QV  ¸   
Y   V  ]   V  ]   B]   : QČV  #?W  QăV  V  5   Ů   ˙˙ţäČA5   V  6   QČt   1   D   Qv   QA¸   
V   : QČt   
   A5    @6   !QA@6    Qu  TŮ
×Č
Ę×Ú
ŮČ
ĐĎËÔÎŐ
É&    !#ÓŢČŘA
âĚBĚÉŐŇĐÉ
É˙˙˙Đ -Ě˙˙˙éŰ ŚŰĚŰÍĘ    _isAborted   secMan5   getSimpleCodebasePrincipal   _livemark   feedURI   doc	   bozo   Components   Exception      Cr!   NS_ERROR_FAILURE   QueryInterface   Ci   nsIFeed   siteURI	   link   equals   writeSiteURI   items   queryElementAt   nsIFeedEntry3   checkLoadURIWithPrincipal   SEC_FLAGS   title   plainText	   push   uri   visited   length   children   abort   _processor   listener    ˙˙˙˙          feedPrincipal    	   feed       siteURI    !   livemarkChildren                     i                    entry       uri       title                    ex        ˙˙˙˙          ex                     X      )  !         "          J  ˙˙˙˙     -         -  ÷                    Ž           ş           ť           g     ˙˙˙˙   ˙˙˙˙   '   LLL_onDataAvailable                 ,       š                                              aRequest   aContext   aInputStream   aSourceOffset   aCount     Yy  Ąz  ą            A5       %A5    ¸   
T  T T T T : QÖ ś=    _processor   onDataAvailable   ˙˙˙˙   %   LLL_onStartRequest              é       š      >                                     aRequest   aContext   channel  Ńz  ^}  ť      	      A5       ;   5   pT  ¸   
;   5   :    QA;   5   ¸   	
;   5   
: 6   QA5   A6   QA5   ¸   
@V   5   : QA5   ¸   
T  T : Q   Q  Qv  Q;   5   ¸   
=   V   5   5   : QA¸   
V  : QČ    ËÔ
ČeŇĘ ÄÉÍŰÜĚé×    _isAborted   Cr'   NS_ERROR_UNEXPECTED   QueryInterface   Ci   nsIChannel   _processor   Cc;   @mozilla.org/feed-processor;1   createInstance!   nsIFeedProcessor   listener   parseAsync   URI   onStartRequest   Components   utils   reportError   Livemark Service: feed processor received an invalid channel for 	   spec   abort    ˙˙˙˙         ex         3   i          E   ˙˙˙˙   ˙˙˙˙   #   LLL_onStopRequest                ź      š                              ,             aRequest   aContext   aStatus   }    Đ            ;    ¸   
T :     A¸   
:  Q   QA5      A5   ¸   
T  T T : QT  ¸   
;   5   :    QV      Ź  QV   5   ¸   
;   5   	:   QV     z  Q  QV  5   
Xč  Q;   ¸   
:    QV  V     9A¸   
;   ¸   
V  V  ;   : : QČČČt   KČČA¸   
;   : QČt   1      Qv   QA¸   
V   : QČt   
   ]A5   5   ;   5   5       A5   ;   5   5   6   QA5   B6   QA5   @6   Qu ĎĚ Ú
Ô
ČËÚČŃŇĚ
ČÉÝ ç!˙˙˙ëÍÜĚŰŰŰÍĎ     Components   isSuccessCode   abort   _processor   onStopRequest   QueryInterface   Ci#   nsICachingChannel   cacheToken   nsICacheEntry   expirationTime	   Date   now   _setResourceTTL	   Math   max   EXPIRE_TIME_MS   _livemark   status   mozILivemark   STATUS_LOADING   STATUS_READY   locked   loadGroup    ˙˙˙˙          channel                     entryInfo                    expireTime       nowTime        ˙˙˙˙          ex        '   :       '         (     ˙˙˙˙   x   Ś          Ş   s                             ˙˙˙˙           ;     ˙˙˙˙   ˙˙˙˙   '   LLL__setResourceTTL                         š                                              aMilliseconds Á    ű            A5    ;   ¸   
:  T  6   QŇÍ    _livemark   expireTime	   Date   now   ˙˙˙˙   !   LLL_getInterface                        š      
                                     	   aIID [                A¸    
T  : Ë    QueryInterface