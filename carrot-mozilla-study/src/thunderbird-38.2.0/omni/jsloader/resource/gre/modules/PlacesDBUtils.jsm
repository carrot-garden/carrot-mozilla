ç¿s¹                  #   ¹   3   2                                     resource://gre/modules/PlacesDBUtils.jsm     «                                      ;   5       Q;   5      Q;   5      Q;   5      Q;   ¸   	
=   
: Q;   ¸   	
=   : Q;   ¸   	
=   : QAf    6   Q=      Q¼     Q;   ¸   
A=      : QAY      ]   B]      ]      ]      ]      ]      ]      ]      	]      
]      ]      ]       ]   !   ]   "   ]   #   ]   $   ]   %6   Q;   &Y   Z   ]   (Z   ]   )@]   *@]   +>]   ,   ]   -   ]   .   ]   /   a   0   ]   1   a   26   'QÊ F	ÐÐÐÐÕ3Õ1Õ4Ì,ËÊÛ#,ÊKÊYÊpÊ  Ê  Ê  Ê  »Ê  ÆÊ  ýÊ Ê éÊ Ê *Ê rÊ 9Ð > F WÊÉÉ fÊ pÊ uÊ }Ê Ê Ð    Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmM   resource://gre/modules/PlacesUtils.jsm!   EXPORTED_SYMBOLS5   FINISHED_MAINTENANCE_TOPIC7   places-maintenance-finished%   BYTES_PER_MEBIBYTE   XPCOMUtils!   defineLazyGetter   DBConn   PlacesDBUtils   _executeTasks   _isShuttingDown   shutdown#   maintenanceOnIdle'   checkAndFixDatabase   _refreshUI   _handleError   reindex5   _checkIntegritySkipReindex   checkIntegrity   checkCoherence9   _getBoundCoherenceStatements   vacuum   expire   stats   telemetry   runTasks   Tasks   prototype   _list	   _log   callback   scope   _telemetryStart	   push   pop   clear	   list   log   messages                     PlacesDBUtils                  ÿÿÿÿ                       %       ¹      
                                      ã  :               ;    5   ¸   
;   5   : 5   ÛÉG    PlacesUtils   history   QueryInterface   Ci%   nsPIPlacesDatabase   DBConnection   ÿÿÿÿ   %   PDBU__executeTasks              n      ¹      [                         .             aTasks	   task ù  é	  ,             ;    5      &T  ¸   
=   : QT  ¸   
:  QT  ¸   
:     QV      !V   ¸   
;    T  l Q  T  5      K;   5   	¸   

=   : ¸   
;   ¸   
:  T  5   : QT  >6   QT  5      U  QT  5   D   Q;   ¸   
T  5   :   QT  5   ¸   
V  T  5   l QÈ;   5   ¸   
=   ;   â   ;   ¸   
:  Xè: : Q;   5   ¸   
@;   @: QÊÓÎ3ÊÈÜ7:ÈàÌÌ;=Ê@ÈËâÈàFìFÿÿÿ÷ÿÿÿÃÜE    PlacesDBUtils   _isShuttingDown   logi   - We are shutting down. Will not schedule the tasks.   clear   pop	   call   _telemetryStart   Services   telemetry!   getHistogramById?   PLACES_IDLE_MAINTENANCE_TIME_MS   add	   Date   now   callback   scope   Cu%   getGlobalForObject   messages   prefs   setIntPref?   places.database.lastMaintenance   parseInt   obs   notifyObservers5   FINISHED_MAINTENANCE_TOPIC    ÿÿÿÿ         scope        È   O   ÿÿÿÿ   ÿÿÿÿ      PDBU_shutdown                          ¹                                            )
  [
  L             ;    C6   QÌ%    PlacesDBUtils   _isShuttingDown   ÿÿÿÿ   -   PDBU_maintenanceOnIdle               t       ¹   
   -                           
             aCallback   aScope   tasks  ¬  ¶  Y             ;    Z  A5   `   A5   `  A5   `  R    QV   ;   ¸   
:  6   QV   T  6   QV   T 6   QA¸   	
V   : QÊÊÊÊ[È`ÐÉÍÍÐ    Tasks   checkIntegrity   checkCoherence   _refreshUI   _telemetryStart	   Date   now   callback   scope   _executeTasks   ÿÿÿÿ   1   PDBU_checkAndFixDatabase               y       ¹   
   2                           
             aCallback   aScope   tasks  f  }  p             ;    Z  A5   `   A5   `  A5   `  A5   `  A5   `  A5   `  R    QV   T  6   QV   T 6   QA¸   	
V   : QÊÊÊÊÊÊÊrÈzÍÍÐ    Tasks   checkIntegrity   checkCoherence   expire   vacuum   stats   _refreshUI   callback   scope   _executeTasks   ÿÿÿÿ      PDBU__refreshUI               K       ¹      #                          	             aTasks   tasks &                 ;    T  R    Q;   5   ¸   
Y       ]   @: Q;   ¸   
V   : QÉÈÖÊ  Ô#    Tasks   PlacesUtils   history   runInBatchMode   runBatched   PlacesDBUtils   _executeTasks   ÿÿÿÿ   9   PDBU__refreshUI/<.runBatchedÁ                        ¹                                                aUserData Ô  â                (    ÿÿÿÿ   #   PDBU__handleError                 4       ¹                                              aError I  Ý               ;    ¸   
=   T  5   =   T  5   =   : QÑÞ  B    Cu   reportErrorS   Async statement execution returned with '   result	   ', '   message   '   ÿÿÿÿ      PDBU_reindex                      ¹      7                                       aTasks   tasks	   stmt   Ù               ;    T  R    Q   ¸   
=   : Q;   ¸   
=   :    QV   ¸   
Y   ;   5   ]   	    ]   
   ]   : QV   ¸   
:  QÉÉÕÑÈÐÏÊÊ  ¢  ²Ï    Tasks   log   > Reindex   DBConn)   createAsyncStatement   REINDEX   executeAsync   PlacesDBUtils   _handleError   handleError   handleResult!   handleCompletion   finalize   ÿÿÿÿ   7   PDBU_reindex/<.handleResultÁ                          ¹                                              m  r  ¤              !    ÿÿÿÿ   ?   PDBU_reindex/<.handleCompletionÁ                 l       ¹                                              aReason   ¸  ¦             T  ;    5   5      $      ¸   
=   : Q         ¸   
=   : Q;   ¸   
      : QÓ
ß
ÚÚ#    Ci9   mozIStorageStatementCallback   REASON_FINISHED   logC   + The database has been reindexed9   - Unable to reindex database   PlacesDBUtils   _executeTasks   ÿÿÿÿ   ?   PDBU__checkIntegritySkipReindex¡                        ¹                                              aTasks Ä  ò  »             A¸    
T  C: Ð!    checkIntegrity   ÿÿÿÿ   '   PDBU_checkIntegrity                      ¹      ?                                @      aTasks   aSkipReindex   tasks	   stmt   &  Æ             ;    T  R    Q   ¸   
=   : Q;   ¸   
=   :    QV   ¸   
Y   ;   5   ]   	B]   
    ]      ]   : QV   ¸   
:  QÉÉÕÑÈÐÏÊ  ×Ê  Í  ôÏ    Tasks   log#   > Integrity check   DBConn)   createAsyncStatement3   PRAGMA integrity_check(1)   executeAsync   PlacesDBUtils   _handleError   handleError   _corrupt   handleResult!   handleCompletion   finalize   ÿÿÿÿ   E   PDBU_checkIntegrity/<.handleResultÁ               /       ¹                                              aResultSet   row }  ý  Ñ             T  ¸    
:     QAV   ¸   
>: =   6   QÊÈÍÏ     getNextRow   _corrupt!   getResultByIndex   ok   ÿÿÿÿ   M   PDBU_checkIntegrity/<.handleCompletionÁ                 B      ¹      H                           )             aReason !    ×             T  ;    5   5      åA5      »      ¸   
=   : Q      T      ¸   
=   : Q;   5   ¸   	
=   
C: Q      ¸   
:  Q   C      ¸   
;   5   : Q      ¸   
;   5   : Q         ¸   
=   : Q   4      ¸   
=   : Q      ¸   
:  Q;   ¸   
      : QÓ  à  ¶ÚOÚÛÚßäß
Ú
ÕÚ#    Ci9   mozIStorageStatementCallback   REASON_FINISHED   _corrupt   log3   - The database is corrupt   - Unable to fix corruption, database will be replaced on next startup   Services   prefs   setBoolPrefA   places.database.replaceOnStartup   clear	   push   PlacesDBUtils5   _checkIntegritySkipReindex   reindex-   + The database is saneC   - Unable to check database status   _executeTasks   ÿÿÿÿ   '   PDBU_checkCoherence                      ¹      7                                       aTasks   tasks   stmts ë      ý       
      ;    T  R    Q   ¸   
=   : Q;   ¸   
:     Q;   ¸   
V   V   Ù   Y   ;   5   ]   	    ]   
   ]   : QV   ¸   
   : QÉÉÕÌÈÞÏÊÊ  Ô1    Tasks   log#   > Coherence check   PlacesDBUtils9   _getBoundCoherenceStatements   DBConn   executeAsync   length   _handleError   handleError   handleResult!   handleCompletion   forEach   ÿÿÿÿ   E   PDBU_checkCoherence/<.handleResultÁ                          ¹                                              ù  þ               !    ÿÿÿÿ   M   PDBU_checkCoherence/<.handleCompletionÁ                        ¹   	                                           aReason "  ^               T  ;    5   5      $      ¸   
=   : Q   4      ¸   
=   : Q      ¸   
:  Q;   ¸   
      : QÓ
ß
Ú
ÕÚ#    Ci9   mozIStorageStatementCallback   REASON_FINISHED   log5   + The database is coherentI   - Unable to check database coherence   clear   PlacesDBUtils   _executeTasks   ÿÿÿÿ   +   PDBU_checkCoherence/<á                        ¹                                              aStmt                   T  ¸    
:  #Î    finalize   ÿÿÿÿ   C   PDBU__getBoundCoherenceStatements                  k      ¹   L   Ë                        å          #   cleanupStatements'   deleteObsoleteAnnos1   deleteObsoleteItemsAnnos5   deleteUnusedAnnoAttributes7   deleteInvalidAttributeAnnos#   deleteOrphanAnnos!   selectPlacesRoot%   updateRootTitleSql%   fixPlacesRootTitle+   fixBookmarksMenuTitle1   fixBookmarksToolbarTitle3   fixUnsortedBookmarksTitle!   fixTagsRootTitle%   deleteNoPlaceItems-   deleteBogusTagChildren   deleteEmptyTags   fixOrphanItems%   fixInvalidKeywords+   fixBookmarksAsFolders+   fixFoldersAsBookmarks#   fixInvalidParents#   fixEmptyNamedTags#   deleteOrphanIcons%   deleteOrphanVisits1   deleteOrphanInputHistoryA   deleteInvalidAttributeItemsAnnos-   deleteOrphanItemsAnnos)   deleteUnusedKeywords)   fixInvalidFaviconIds   fixVisitStats%   fixRedirectsHidden   fixForeignCountí   Ûu        )      Z      Q;    ¸   
=   :   QV   ¸   
V  : Q;    ¸   
=   :   QV   ¸   
V  : Q;    ¸   
=   :   QV   ¸   
V  : Q;    ¸   
=   :   QV   ¸   
V  : Q;    ¸   
=   :   QV   ¸   
V  : Q;    ¸   
=   	:   QV  5   
;   5   6   QV  ¸   
:     F  !Q   Q;    ¸   
=   :    QV   5   
;   5   6   QV   5   
=   6   QV   5   
;   5   5   6   QV   ¸   
V   : Q;    ¸   
=   :   !QV  !5   
;   5   6   QV  !5   
;   5   5   6   QV  !5   
;   5   5   6   QV  !5   
;   5   5   6   QV  !5   
;   5   5   6   QV   ¸   
V  !: QÈV  ¸   
:  Q=     Q;    ¸   
V  :   QV  5   
;   5   6   QV  5   
=   6   QV   ¸   
V  : Q;    ¸   
V  :   	QV  	5   
;   5   6   QV  	5   
;   ¸   
=   : 6   QV   ¸   
V  	: Q;    ¸   
V  :   
QV  
5   
;   5    6   QV  
5   
;   ¸   
=   !: 6   QV   ¸   
V  
: Q;    ¸   
V  :   QV  5   
;   5   "6   QV  5   
;   ¸   
=   #: 6   QV   ¸   
V  : Q;    ¸   
V  :   QV  5   
;   5   $6   QV  5   
;   ¸   
=   %: 6   QV   ¸   
V  : Q;    ¸   
=   &:   QV  5   
;   5   5   (6   'QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV   ¸   
V  : Q;    ¸   
=   ):   QV  5   
;   5   $6   *QV  5   
;   5   5   (6   'QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV   ¸   
V  : Q;    ¸   
=   +:   QV  5   
;   5   $6   *QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV   ¸   
V  : Q;    ¸   
=   ,:   QV  5   
;   5   "6   -QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV   ¸   
V  : Q;    ¸   
=   .:   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV   ¸   
V  : Q;    ¸   
=   /:   QV  5   
;   5   5   (6   'QV  5   
;   5   5   16   0QV  5   
;   5   5   36   2QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV   ¸   
V  : Q;    ¸   
=   4:   QV  5   
;   5   5   (6   'QV  5   
;   5   5   16   0QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV   ¸   
V  : Q;    ¸   
=   5:   QV  5   
;   5   "6   -QV  5   
;   5   5   (6   'QV  5   
;   5   5   36   2QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV  5   
;   5   5   6   QV   ¸   
V  : QV   ¸   
;    ¸   
=   6: : QV   ¸   
;    ¸   
=   7: : QV   ¸   
;    ¸   
=   8: : QV   ¸   
;    ¸   
=   9: : QV   ¸   
;    ¸   
=   :: : QV   ¸   
;    ¸   
=   ;: : QV   ¸   
;    ¸   
=   <: : QV   ¸   
;    ¸   
=   =: : QV   ¸   
;    ¸   
=   >: : Q;    ¸   
=   ?:   QV  5   
=   A6   @QV  5   
;   5   5   16   0QV  5   
;   5   $6   *QV   ¸   
V  : Q;    ¸   
=   B:   QV   ¸   
V  : Q;    ¸   
=   C:   QV   ¸   
V  : Q;    ¸   
=   D:   QV   ¸   
V  : Q;    ¸   
=   E:   QV   ¸   
V  : Q;    ¸   
=   F:   QV   ¸   
V  : Q;    ¸   
=   G:   QV   ¸   
V  : Q;    ¸   
=   H:   QV   ¸   
V  : Q;    ¸   
=   I:   QV   ¸   
V  : Q;    ¸   
=   J:   QV   ¸   
V  : Q;    ¸   
=   K:   QV   ¸   
V  : QV   É Ì È %ÓÌ (#È 0ÓÌ 3%È ;ÓÌ ?&È FÓÌ IÈ OÓ UÌ UÈÙËÑ
Ì ZÈÙÔÞÓ
Ì d"ÈÙÞÞÞÞÔÏ sÊÐÈÙÔÓÐÈÙÉÑÉÓÐÈÙÉÑÉÓÐÈÙÉÑÉÓÐÈÙÉÑÉÓ Ì È ÞÞÞÞÞÞÓÌ §!È °ÙÞÞÞÞÞÞÓÌ ºÈ ÄÙÞÞÞÞÞÓÌ ÍÈ ÕÙÞÞÞÞÞÓÌ ÞÈ çÞÞÞÞÞÓ òÌ ò È úÞÞÞÞÞÞÞÞÓ Ì  È ÞÞÞÞÞÞÞÓ Ì È %ÙÞÞÞÞÞÞÞÓ 5× 5ÿÿÿé <× <ÿÿÿé H× Hÿÿÿé× Lÿÿÿé R× Rÿÿÿé Z× Zÿÿÿé× ]ÿÿÿé× `ÿÿÿé× cÿÿÿé jÌ jÈ oÔÞÙÓÌ vÈ |ÓÌ È ÓÌ #È ÓÌ +È ÓÌ !È ¤ÓÌ ¨È ®ÓÌ ²È ¹ÓÌ ¼È ÉÓÌ ÌÈ ÖÓÌ ÙÈÓ    DBConn)   createAsyncStatementA  DELETE FROM moz_annos
       WHERE anno_attribute_id IN (
         SELECT id FROM moz_anno_attributes
         WHERE name BETWEEN 'weave/' AND 'weave0'
       )	   pushñ  DELETE FROM moz_items_annos
       WHERE anno_attribute_id IN (
         SELECT id FROM moz_anno_attributes
         WHERE name = 'sync/children'
            OR name = 'placesInternal/GUID'
            OR name BETWEEN 'weave/' AND 'weave0'
       )y  DELETE FROM moz_anno_attributes WHERE id IN (
         SELECT id FROM moz_anno_attributes n
         WHERE NOT EXISTS
             (SELECT id FROM moz_annos WHERE anno_attribute_id = n.id LIMIT 1)
           AND NOT EXISTS
             (SELECT id FROM moz_items_annos WHERE anno_attribute_id = n.id LIMIT 1)
       )  DELETE FROM moz_annos WHERE id IN (
         SELECT id FROM moz_annos a
         WHERE NOT EXISTS
           (SELECT id FROM moz_anno_attributes
             WHERE id = a.anno_attribute_id LIMIT 1)
       )_  DELETE FROM moz_annos WHERE id IN (
         SELECT id FROM moz_annos a
         WHERE NOT EXISTS
           (SELECT id FROM moz_places WHERE id = a.place_id LIMIT 1)
       )   createStatementi   SELECT id FROM moz_bookmarks WHERE id = :places_root   params   places_root   PlacesUtils   placesRootId   executeStepQ  INSERT INTO moz_bookmarks (id, type, fk, parent, position, title,
                                    guid)
         VALUES (:places_root, 2, NULL, 0, 0, :title, :guid)   title   	   guid   bookmarks   rootGuidù   UPDATE moz_bookmarks SET parent = :places_root WHERE guid IN
           ( :menuGuid, :toolbarGuid, :unfiledGuid, :tagsGuid )   menuGuid   toolbarGuid   unfiledGuid   tagsGuid   finalizeÛ   UPDATE moz_bookmarks SET title = :title
                              WHERE id = :root_id AND title <> :title   root_id+   bookmarksMenuFolderId   getString1   BookmarksMenuFolderTitle   toolbarFolderId7   BookmarksToolbarFolderTitle1   unfiledBookmarksFolderId9   UnsortedBookmarksFolderTitle   tagsFolderId   TagsFolderTitle¥  DELETE FROM moz_bookmarks WHERE guid NOT IN (
         :rootGuid, :menuGuid, :toolbarGuid, :unfiledGuid, :tagsGuid  /* skip roots */
       ) AND id IN (
         SELECT b.id FROM moz_bookmarks b
         WHERE fk NOT NULL AND b.type = :bookmark_type
           AND NOT EXISTS (SELECT url FROM moz_places WHERE id = b.fk LIMIT 1)
       )   bookmark_type   TYPE_BOOKMARK«  DELETE FROM moz_bookmarks WHERE guid NOT IN (
         :rootGuid, :menuGuid, :toolbarGuid, :unfiledGuid, :tagsGuid  /* skip roots */
       ) AND id IN (
         SELECT b.id FROM moz_bookmarks b
         WHERE b.parent IN
           (SELECT id FROM moz_bookmarks WHERE parent = :tags_folder)
           AND b.type <> :bookmark_type
       )   tags_folder  DELETE FROM moz_bookmarks WHERE guid NOT IN (
         :rootGuid, :menuGuid, :toolbarGuid, :unfiledGuid, :tagsGuid  /* skip roots */
       ) AND id IN (
         SELECT b.id FROM moz_bookmarks b
         WHERE b.id IN
           (SELECT id FROM moz_bookmarks WHERE parent = :tags_folder)
           AND NOT EXISTS
             (SELECT id from moz_bookmarks WHERE parent = b.id LIMIT 1)
       )  UPDATE moz_bookmarks SET parent = :unsorted_folder WHERE guid NOT IN (
         :rootGuid, :menuGuid, :toolbarGuid, :unfiledGuid, :tagsGuid  /* skip roots */
       ) AND id IN (
         SELECT b.id FROM moz_bookmarks b
         WHERE NOT EXISTS
           (SELECT id FROM moz_bookmarks WHERE id = b.parent LIMIT 1)
       )   unsorted_folderÇ  UPDATE moz_bookmarks SET keyword_id = NULL WHERE guid NOT IN (
         :rootGuid, :menuGuid, :toolbarGuid, :unfiledGuid, :tagsGuid  /* skip roots */
       ) AND id IN (
         SELECT id FROM moz_bookmarks b
         WHERE keyword_id NOT NULL
           AND NOT EXISTS
             (SELECT id FROM moz_keywords WHERE id = b.keyword_id LIMIT 1)
       )a  UPDATE moz_bookmarks SET type = :bookmark_type WHERE guid NOT IN (
         :rootGuid, :menuGuid, :toolbarGuid, :unfiledGuid, :tagsGuid  /* skip roots */
       ) AND id IN (
         SELECT id FROM moz_bookmarks b
         WHERE type IN (:folder_type, :separator_type)
           AND fk NOTNULL
       )   folder_type   TYPE_FOLDER   separator_type   TYPE_SEPARATOR9  UPDATE moz_bookmarks SET type = :folder_type WHERE guid NOT IN (
         :rootGuid, :menuGuid, :toolbarGuid, :unfiledGuid, :tagsGuid  /* skip roots */
       ) AND id IN (
         SELECT id FROM moz_bookmarks b
         WHERE type = :bookmark_type
           AND fk IS NULL
       )  UPDATE moz_bookmarks SET parent = :unsorted_folder WHERE guid NOT IN (
         :rootGuid, :menuGuid, :toolbarGuid, :unfiledGuid, :tagsGuid  /* skip roots */
       ) AND id IN (
         SELECT id FROM moz_bookmarks b
         WHERE EXISTS
           (SELECT id FROM moz_bookmarks WHERE id = b.parent
             AND type IN (:bookmark_type, :separator_type)
             LIMIT 1)
       )!  CREATE TEMP TABLE IF NOT EXISTS moz_bm_reindex_temp (
         id INTEGER PRIMARY_KEY
       , parent INTEGER
       , position INTEGER
       )  INSERT INTO moz_bm_reindex_temp
       SELECT id, parent, 0
       FROM moz_bookmarks b
       WHERE parent IN (
         SELECT parent
         FROM moz_bookmarks
         GROUP BY parent
         HAVING (SUM(DISTINCT position + 1) - (count(*) * (count(*) + 1) / 2)) <> 0
       )
       ORDER BY parent ASC, position ASC, ROWID ASCµ   CREATE INDEX IF NOT EXISTS moz_bm_reindex_temp_index
       ON moz_bm_reindex_temp(parent)i  UPDATE moz_bm_reindex_temp SET position = (
         ROWID - (SELECT MIN(t.ROWID) FROM moz_bm_reindex_temp t
                  WHERE t.parent = moz_bm_reindex_temp.parent)
       )Å  CREATE TEMP TRIGGER IF NOT EXISTS moz_bm_reindex_temp_trigger
       BEFORE DELETE ON moz_bm_reindex_temp
       FOR EACH ROW
       BEGIN
         UPDATE moz_bookmarks SET position = OLD.position WHERE id = OLD.id;
       ENDA   DELETE FROM moz_bm_reindex_temp K   DROP INDEX moz_bm_reindex_temp_index S   DROP TRIGGER moz_bm_reindex_temp_trigger ?   DROP TABLE moz_bm_reindex_temp   UPDATE moz_bookmarks SET title = :empty_title
       WHERE length(title) = 0 AND type = :folder_type
         AND parent = :tags_folder   empty_title   (notitle)o  DELETE FROM moz_favicons WHERE id IN (
         SELECT id FROM moz_favicons f
         WHERE NOT EXISTS
           (SELECT id FROM moz_places WHERE favicon_id = f.id LIMIT 1)
       )  DELETE FROM moz_historyvisits WHERE id IN (
         SELECT id FROM moz_historyvisits v
         WHERE NOT EXISTS
           (SELECT id FROM moz_places WHERE id = v.place_id LIMIT 1)
       )  DELETE FROM moz_inputhistory WHERE place_id IN (
         SELECT place_id FROM moz_inputhistory i
         WHERE NOT EXISTS
           (SELECT id FROM moz_places WHERE id = i.place_id LIMIT 1)
       )µ  DELETE FROM moz_items_annos WHERE id IN (
         SELECT id FROM moz_items_annos t
         WHERE NOT EXISTS
           (SELECT id FROM moz_anno_attributes
             WHERE id = t.anno_attribute_id LIMIT 1)
       ){  DELETE FROM moz_items_annos WHERE id IN (
         SELECT id FROM moz_items_annos t
         WHERE NOT EXISTS
           (SELECT id FROM moz_bookmarks WHERE id = t.item_id LIMIT 1)
       )u  DELETE FROM moz_keywords WHERE id IN (
         SELECT id FROM moz_keywords k
         WHERE NOT EXISTS
           (SELECT id FROM moz_bookmarks WHERE keyword_id = k.id LIMIT 1)
       )×  UPDATE moz_places SET favicon_id = NULL WHERE id IN (
         SELECT id FROM moz_places h
         WHERE favicon_id NOT NULL
           AND NOT EXISTS
             (SELECT id FROM moz_favicons WHERE id = h.favicon_id LIMIT 1)
       )W  UPDATE moz_places
       SET visit_count = (SELECT count(*) FROM moz_historyvisits
                          WHERE place_id = moz_places.id AND visit_type NOT IN (0,4,7,8)),
           last_visit_date = (SELECT MAX(visit_date) FROM moz_historyvisits
                              WHERE place_id = moz_places.id)
       WHERE id IN (
         SELECT h.id FROM moz_places h
         WHERE visit_count <> (SELECT count(*) FROM moz_historyvisits v
                               WHERE v.place_id = h.id AND visit_type NOT IN (0,4,7,8))
            OR last_visit_date <> (SELECT MAX(visit_date) FROM moz_historyvisits v
                                   WHERE v.place_id = h.id)
       )÷  UPDATE moz_places
       SET hidden = 1
       WHERE id IN (
         SELECT h.id FROM moz_places h
         JOIN moz_historyvisits src ON src.place_id = h.id
         JOIN moz_historyvisits dst ON dst.from_visit = src.id AND dst.visit_type IN (5,6)
         LEFT JOIN moz_bookmarks on fk = h.id AND fk ISNULL
         GROUP BY src.place_id HAVING count(*) = visit_count
       )×   UPDATE moz_places SET foreign_count =
       (SELECT count(*) FROM moz_bookmarks WHERE fk = moz_places.id )    ÿÿÿÿ       !   createPlacesRoot    +   fixPlacesRootChildren        -  ?  ÿÿÿÿ   ÿÿÿÿ      PDBU_vacuum               ù       ¹      T                                       aTasks   tasks   DBFile	   stmt sv  z  é            ;    T  R    Q   ¸   
=   : Q;   5   ¸   
=   ;   5   :    QV   ¸   	
=   
: Q   ¸   
=   ;   â   V   5   X : =   : Q;   ¸   
=   :   QV  ¸   
Y   ;   5   ]       ]      ]   : QV  ¸   
:  QÉÉÕà	ÈÔÑ×Ê ðÑÈÐÏÊÊ ô 	Ï    Tasks   log   > Vacuum   Services   dirsvc   get   ProfD   Ci   nsILocalFile   append   places.sqlite3   Initial database size is    parseInt   fileSize	    KiB   DBConn)   createAsyncStatement   VACUUM   executeAsync   PlacesDBUtils   _handleError   handleError   handleResult!   handleCompletion   finalize   ÿÿÿÿ   5   PDBU_vacuum/<.handleResultÁ                          ¹                                              $x  )x  ö             !    ÿÿÿÿ   =   PDBU_vacuum/<.handleCompletionÁ                ÿ       ¹      =                                      aReason Mx  ~z  ø      
      T  ;    5   5      ¢   Q      ¸   
=   : Q;   5   ¸   
=   ;    5   	:    QV   ¸   

=   : Q      ¸   
=   ;   â   V   5   X : =   : QÈ   4      ¸   
=   : Q      ¸   
:  Q;   ¸   
      : QÓ  Ë
ÚàÈ
Ô
Ö×Ê þ
Ê
Ú
ÕÚ#    Ci9   mozIStorageStatementCallback   REASON_FINISHED   logA   + The database has been vacuumed   Services   dirsvc   get   ProfD   nsILocalFile   append   places.sqlite/   Final database size is    parseInt   fileSize	    KiB7   - Unable to vacuum database   clear   PlacesDBUtils   _executeTasks    ÿÿÿÿ          vacuumedDBFile              ÿÿÿÿ   ÿÿÿÿ      PDBU_expire                      ¹      8                                       aTasks   tasks   expiration C{  }              ;    T  R    Q   ¸   
=   : Q;   5   ¸   
;   5   :    Q;   5   	¸   

    ;   5   B: QV   ¸   
@=   >: QÉÉÕÑÊ ÈÖË  !Ö=    Tasks   log)   > Orphans expiration   CcA   @mozilla.org/places/expiration;1   getService   Ci   nsIObserver   Services   obs   addObserver   PlacesUtils3   TOPIC_EXPIRATION_FINISHED   observe;   places-debug-start-expiration   ÿÿÿÿ      PDBU_expire/<Á               \      ¹                                             aSubject   aTopic   aData   arguments   0|  â|              	W   Q;    5   ¸   
V   5   T : Q      ¸   
=   : Q;   ¸   
      : QáÚÚ#    Services   obs   removeObserver   callee   log+   + Database cleaned up   PlacesDBUtils   _executeTasks   ÿÿÿÿ      PDBU_stats              Ù      ¹   +                          J             aTasks   tasks   DBFile	   stmt %~    *            ;    T  R    Q   ¸   
=   : Q;   5   ¸   
=   ;   5   :    QV   ¸   	
=   
: Q   ¸   
=   ;   â   V   5   X : =   : Qf    ¸   
   : Q  Q;   5   ¸   
=   :   Q   ¸   
=   V  =   : QÈ     Qv  QÈ    ;   ¸   
=   :   QV  5   =   6   Q    m  Q  QV  ¸   
>:   Q;   ¸   
=   V  ä=   :   QV  ¸   
:  Q   ¸   
=   V  =    V  ¸   !
>: =   ": QV  ¸   #
:  QÈãV  ¸   
:  ÿÿÿUV  ¸   $
:  QV  5   =   %6   Q   +m   ¸   
=   &V  ¸   
>: : QãV  ¸   
:  ÿÿÿÊV  ¸   $
:  QV  5   =   '6   Q   +m   ¸   
=   (V  ¸   
>: : QãV  ¸   
:  ÿÿÿÊV  ¸   #
:  Q;   )¸   *
   : QÉÉÕà	ÈÔè ÊÿÿÿàÌ 8 3 @F
Ñ AÈæÓÌ FÈÔ(  °Í
ÌÈ
Ì Ì KÈÏè+ÊÿÿÿÕÐ IÕ QÏÔ(; TÝÿÿÿë TÕÏÔ(; ZÝÿÿÿé ZÕÏÕ#    Tasks   log   > Statistics   Services   dirsvc   get   ProfD   Ci   nsILocalFile   append   places.sqlite#   Database size is    parseInt   fileSize	    KiB   forEach   prefs   getIntPrefk   places.history.expiration.transient_current_max_pages?   History can store a maximum of     unique pages   DBConn   createStatementc   SELECT name FROM sqlite_master WHERE type = :type   params	   type   table   getString+   SELECT count(*) FROM       executeStep   Table     has    getInt32    records   finalize   reset   index   Index    trigger   Trigger    PlacesDBUtils   _executeTasks                     user_version      page_size      cache_size      journal_mode      synchronous                  ÿÿÿÿ      PDBU_stats/<Á               j       ¹                                              aPragma	   stmt ¤  [  8      	      ;    ¸   
=   T  :    QV   ¸   
:  Q      ¸   
T  =   V   ¸   
>: : QV   ¸   
:  Q
ÕÈÏæÿÿÿãÏ    DBConn   createStatement   PRAGMA    executeStep   log	    is    getString   finalize    ÿÿÿÿ         limitURIs        ÿÿÿÿ         ex        ÿÿÿÿ         tableName       countStmt        y  ;         ;       >  °        ¯   J      °   D   ÿÿÿÿ   ú      ÿÿÿÿ   A     ÿÿÿÿ   ÿÿÿÿ      PDBU_telemetry                    ¹   -   E                       "      @      aTasks+   aHealthReportCallback   tasks   isTelemetry   probeValues   probes   params#   outstandingProbes L  ¢  r               H   @   Q;    T  R    Q      QY      QZ  Y   =   ]   C]   =   ]   `   Y   =   ]   C]   =   ]   `  Y   =   ]   =   	]   `  Y   =   
]   =   ]   `  Y   =   ]   =   ]   `  Y   =   ]   =   ]   `  Y   =   ]       ]   `  Y   =   ]   =   ]   `  Y   =   ]   =   ]      ]   `  Y   =   ]   =   ]   `  	Y   =   ]   =   ]   `  
Y   =   ]      ]   `    QY   ;   5   ]   ;   5   5   ]    ;   5   5   !]   ";   5   #]   $   QZ     Q>  Q    mÆ     Q   QV  V  7   QV   E   Q   5       ÈÇ   M;   %A   R   QV  ¸   &
A   A5   ': W  QV  ¸   (
V  : QÈÇV  #?W  QQãV  V  Ù   )ÿÿÿVÈ      );   %¸   *
V  : ¸   &
A   : Q;   +¸   ,
V   : QÌÉÈËË ÊÎÊÎ ÊÎÊÎÊÎ ®ÊÎ ºÊÎ ÂÊÎÊÊÎ ÐÊÎÊÎÊÓ ãÏÔÔÕÉ&      ¯Ó
Ï
ËËB
ÌÈ Ñ ! È #Õ ì'ÎÿÿÿíÖ &ä ,Ô#    Tasks%   PLACES_PAGES_COUNT   histogram   healthreport?   SELECT count(*) FROM moz_places   query-   PLACES_BOOKMARKS_COUNT  SELECT count(*) FROM moz_bookmarks b
                    JOIN moz_bookmarks t ON t.id = b.parent
                    AND t.parent <> :tags_folder
                    WHERE b.type = :type_bookmark#   PLACES_TAGS_COUNT¥   SELECT count(*) FROM moz_bookmarks
                    WHERE parent = :tags_folder+   PLACES_KEYWORDS_COUNTC   SELECT count(*) FROM moz_keywords9   PLACES_SORTED_BOOKMARKS_PERC_  SELECT IFNULL(ROUND((
                      SELECT count(*) FROM moz_bookmarks b
                      JOIN moz_bookmarks t ON t.id = b.parent
                      AND t.parent <> :tags_folder AND t.parent > :places_root
                      WHERE b.type  = :type_bookmark
                      ) * 100 / (
                      SELECT count(*) FROM moz_bookmarks b
                      JOIN moz_bookmarks t ON t.id = b.parent
                      AND t.parent <> :tags_folder
                      WHERE b.type = :type_bookmark
                    )), 0)9   PLACES_TAGGED_BOOKMARKS_PERC»  SELECT IFNULL(ROUND((
                      SELECT count(*) FROM moz_bookmarks b
                      JOIN moz_bookmarks t ON t.id = b.parent
                      AND t.parent = :tags_folder
                      ) * 100 / (
                      SELECT count(*) FROM moz_bookmarks b
                      JOIN moz_bookmarks t ON t.id = b.parent
                      AND t.parent <> :tags_folder
                      WHERE b.type = :type_bookmark
                    )), 0)7   PLACES_DATABASE_FILESIZE_MB   callback5   PLACES_DATABASE_PAGESIZE_Bg   PRAGMA page_size /* PlacesDBUtils.jsm PAGESIZE_B */?   PLACES_DATABASE_SIZE_PER_PAGE_B#   PRAGMA page_count9   PLACES_ANNOS_BOOKMARKS_COUNTI   SELECT count(*) FROM moz_items_annos1   PLACES_ANNOS_PAGES_COUNT=   SELECT count(*) FROM moz_annos?   PLACES_MAINTENANCE_DAYSFROMLAST   PlacesUtils   tagsFolderId   tags_folder   bookmarks   TYPE_FOLDER   type_folder   TYPE_BOOKMARK   type_bookmark   placesRootId   places_root   Promise	   then   _handleError	   push   length   all   PlacesDBUtils   _executeTasks   ÿÿÿÿ   ?   PDBU_telemetry/probes<.callbackÁ                 Z       ¹                                               DBFile]    »            ;    5   ¸   
=   ;   5   :    QV   ¸   
=   : Q;   â   V   5   	;   
: à	È
Ô
Ù/    Services   dirsvc   get   ProfD   Ci   nsILocalFile   append   places.sqlite   parseInt   fileSize%   BYTES_PER_MEBIBYTE   ÿÿÿÿ   ?   PDBU_telemetry/probes<.callbackÁ               F       ¹                                              aDbPageCount   dbPageSize   placesPageCount     Ç                  5       Q      5     Q;   ¸   
V   T  V  : ÔÔ
Ù: 5   PLACES_DATABASE_PAGESIZE_B%   PLACES_PAGES_COUNT	   Math   round   ÿÿÿÿ   ?   PDBU_telemetry/probes<.callbackÁ                         ¹      (                                   Ñ  
  ×      	        Q   Q;    5   ¸   
=   :    Q;   â   ;   ¸   
:  Xè:   Q;   â   V  V   ¼Q: ÈÈ      Qv   Q×<ÈÈ    oÍÖÈÖÿÿÿ÷ÈØÌÌÌ    Services   prefs   getIntPref?   places.database.lastMaintenance   parseInt	   Date   now    ÿÿÿÿ          lastMaintenance       nowSeconds        ÿÿÿÿ          ex            s          l   ÿÿÿÿÿÿÿÿm             u      ÿÿÿÿÿÿÿÿ             ÿÿÿÿ         i                    probe      promiseDone             7   PDBU_telemetry/promiseDone<Å              û       ¹      Z                              @      resolve   reject	   stmt Ý     ó      	      =      q       Z    `   : Q;   ¸   
  5    :    Q  K  Q   HmW    5    ¸   
=   V  : >   V   5   V    V  78QãQLMÿÿÿ¸QNÈV   ¸   
Y   T ]      ]      ]   	: Qt   
   V   ¸   

:  Qu Ì
Ê	Éÿÿÿ÷
ÖÈÎ0MÊÛæ6
ÐÈÊÊ 
Î 	
Ñ    query   DBConn)   createAsyncStatement   indexOf   :   params   executeAsync   handleError   handleResult!   handleCompletion   finalize    ÿÿÿÿ         param       ÿÿÿÿ   U   PDBU_telemetry/promiseDone</<.handleResultÁ               =       ¹                                              aResultSet   row   $        	      T  ¸    
:     Q   Z    `   V   ¸   
>: `  : QÊÈÊ	ÉÓÿÿÿð*    getNextRow!   getResultByIndex   ÿÿÿÿ   ]   PDBU_telemetry/promiseDone</<.handleCompletionÁ                          ¹                                              M  R               +     ¬   :      [   N       Q   Z   ÿÿÿÿ         7   PDBU_telemetry/promiseDone<Å                  ¹      B                                        aProbe   aValue   value Q  w¡              T  - Á
:  ¸    
:  5      Q   
5   W   Q¸    
:  5      Q   
5   W  QQQV    Q=   V   q   V   ¸   
V  : W  Q  V   5   V  8Q;   5   ¸   
V   5   : ¸   
V  : Q   R  Qv  Q;   	5   
¸   
=   V  =   V   5   =   V  : QÈ    ÿÿÿëÝçØÉgÊÏÈÔñÌÛÐË Ë 	   next	   done   value   callback   histogram   Services   telemetry!   getHistogramById   add   Components   utils   reportError'   Error adding value     to histogram    :     ÿÿÿÿ         ex         f   k       Ò   F   ÿÿÿÿ   ÿÿÿÿ   !   PDBU_telemetry/<å                          ¹                                             )¢  Y¢  '                  : Ï"       ¯        »   ÿÿÿÿ   #            Y           ÿÿÿÿ      PDBU_runTasks               3       ¹                                              aTasks   aCallback   tasks  ¤  ¤  9            ;    T  R    QV   T 6   Q;   ¸   
V   : QÉÈÍÔ#    Tasks   callback   PlacesDBUtils   _executeTasks   ÿÿÿÿ      Tasks                 ¼       ¹      1                                        aTasks ¥  2§  F            T     ¸;    ¸   
T  :    'AT  ¸   
>T  Ù   : 6   Q   T  '=   E    Q;   ;   rD   Q=   T  q   PAT  5   6   QAT  5   	6   QAT  5   
6   
QAT  5   6   QAT  5   6   QÏ"ÔÎÐÚÏÏÏÏÏ.    Array   isArray   _list   slice   length   object   Tasks	   list	   _log   messages   callback   scope   _telemetryStart   ÿÿÿÿ      T_push                        ¹                                              aNewElt ¨  N¨  f            A5    ¸   
T  : QÔ    _list   unshift   ÿÿÿÿ      T_pop¡                          ¹                                            Ô¨  é¨  p            A5    ¸   
:  Ñ    _list   shift   ÿÿÿÿ      T_clear                          ¹                                            )©  N©  u            A5    >6   QÍ    _list   length   ÿÿÿÿ   )   Tasks.prototype.listá                          ¹                                            ²©  Û©  }            A5    ¸   
>A5    Ù   : Ý&    _list   slice   length   ÿÿÿÿ      T_log                        ¹                                           	   aMsg ]ª  ª              A5    ¸   
T  : QÔ 	   _log	   push   ÿÿÿÿ   1   Tasks.prototype.messagesá                          ¹                                            äª  «              A5    ¸   
>A5    Ù   : Ý$ 	   _log   slice   length