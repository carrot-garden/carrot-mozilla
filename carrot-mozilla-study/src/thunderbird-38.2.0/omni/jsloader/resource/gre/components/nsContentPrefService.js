çżsš                Č  <   š      Ä      P                   ,            resource://gre/components/nsContentPrefService.js     Ľ         	                       	             K   L   N   ;   5       Q;   5      Q;   5      Q;   5      Q×d   	Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   R     Q;      6   Q;   R     Q;   Y   ;   ¸   
=   : ]      ]   @]      a   @]      a   @]      a      ]      ]   ;   ]    ;   ]   !   ]   "   	]   #   
]   $   ]   %   ]   &   ]   '   ]   (   ]   )   ]   *Y   ]   +Z   ]   ,   ]   -   ]   .   ]   /   ]   0   ]   1   ]   2   ]   3   a   4@]   5   a   6   a   7@]   8   a   9   ]   :   ]   ;@]   <   a   =   ]   >@]   ?    a   @   !]   A@]   B   "a   C   #]   D@]   E   $a   F   %]   G@]   H   &a   I   ']   J@]   K   (a   L   )]   M@]   N   *a   O   +]   P@]   Q   ,a   R   -]   S@]   T   .a   U   /]   V@]   W   0a   X   1]   Y@]   Z   2a   [   3]   \@]   ]   4a   ^   5]   _@]   `   6a   a   7]   b@]   c   8a   d   9]   e@]   f   :a   g   ;]   h×]   iY   Y   =   j]   k=   j]   l=   m]   n]   oY   Y   =   k]   pf   <]   q]   rY   =   l]   pf   =]   q]   sY   =   n]   pf   >]   q]   t]   u]   v@]   w   ?]   x   @]   y   A]   z   B]   {   C]   |   D]   }   E]   ~   F]      G]      H]      I]      J]   6   Q;   Y   ;   ¸   
=   : ]   ;   ¸   
Z  ;    5   `   : ]      M]   6   Q;   Y      O]   6   Qn   Z  ;   `   ;   `  o   QA;   ¸   
;   : 6   Q
Ę	"1Ę á	 é	 	 :ĐĐĐĐ
ČŐ3Ő1!Ő9É˙˙˙ýĐ/1É˙˙˙ý3Ę7Ń	Č9ĘOĘXĘaĘmĘ  ĹĘ  ÔĘĘ  ÚĘ  őĘ Ę $Ę 0Ę UĘ nĘ ¨Ę ťĘ ĐĘÉĘ ÚĘ čĘ íĘ Ę Ę Ę (ĘĘ 4Ę =Ę LĘ QĘ uĘ Ę ŚĘ ˛Ę ÂĘ ĚĘ ŇĘ ÜĘ ěĘ öĘ üĘ Ę Ę !Ę 1Ę <Ę DĘ NĘ TĘ ^Ę cĘ nĘ sĘ ~Ę Ę Ę ŁĘ °Ę ŔĘ ÎĘ éĘĘĎ ůĘĎĘĎĘŮ 	Ę Ę XĘ kĘ pĘ uĘ Ę Ę śĘ ÂĘĘ ÔĐ ß ćĘŃČĐ)Î˙˙˙éČ őĐ ĘĐ 5 :ÉÉĎ˙˙˙čŇÉ,    Ci   Components   interfaces   Cc   classes   Cr   results   Cu   utils/   CACHE_MAX_GROUP_ENTRIES   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsmW   resource://gre/modules/ContentPrefStore.jsm   cache!   ContentPrefStore   set   privModeStorage%   ContentPrefService   prototype   IDM   {e3f772f3-023f-4b32-b074-36cf0fd5d414}   classID   QueryInterface   __observerSvc   _observerSvc   __consoleSvc   _consoleSvc   __prefSvc   _prefSvc   _destroy   observe   _cache!   _privModeStorage   getPref   setPref   hasPref   hasCachedPref   removePref%   removeGroupedPrefs#   removePrefsByName   getPrefs   getPrefsByName   _observers#   _genericObservers   addObserver   _addObserver   removeObserver   _removeObserver   _getObservers%   _notifyPrefRemoved   _notifyPrefSet   grouper   __grouper   _grouper   DBConnection!   __stmtSelectPref   _stmtSelectPref#   _scheduleCallback   _selectPref-   __stmtSelectGlobalPref+   _stmtSelectGlobalPref#   _selectGlobalPref'   __stmtSelectGroupID%   _stmtSelectGroupID   _selectGroupID#   __stmtInsertGroup!   _stmtInsertGroup   _insertGroup+   __stmtSelectSettingID)   _stmtSelectSettingID!   _selectSettingID'   __stmtInsertSetting%   _stmtInsertSetting   _insertSetting%   __stmtSelectPrefID#   _stmtSelectPrefID   _selectPrefID1   __stmtSelectGlobalPrefID/   _stmtSelectGlobalPrefID'   _selectGlobalPrefID!   __stmtInsertPref   _stmtInsertPref   _insertPref!   __stmtUpdatePref   _stmtUpdatePref   _updatePref!   __stmtDeletePref   _stmtDeletePref   _deletePref7   __stmtDeleteSettingIfUnused5   _stmtDeleteSettingIfUnused-   _deleteSettingIfUnused3   __stmtDeleteGroupIfUnused1   _stmtDeleteGroupIfUnused)   _deleteGroupIfUnused#   __stmtSelectPrefs!   _stmtSelectPrefs   _selectPrefs/   __stmtSelectGlobalPrefs-   _stmtSelectGlobalPrefs%   _selectGlobalPrefs/   __stmtSelectPrefsByName-   _stmtSelectPrefsByName%   _selectPrefsByName   _dbVersion   id           INTEGER PRIMARY KEY,                    name         TEXT NOT NULL   groups   settings  id           INTEGER PRIMARY KEY,                    groupID      INTEGER REFERENCES groups(id),                    settingID    INTEGER NOT NULL REFERENCES settings(id),                    value        BLOB,                    timestamp    INTEGER NOT NULL DEFAULT 0   prefs   tables   table   columns   groups_idx   settings_idx   prefs_idx   indices   _dbSchema   _dbConnection%   _dbCreateStatement   _dbInit   _dbCreate   _dbCreateSchema   _dbCreateTables!   _dbCreateIndices)   _dbBackUpAndRecreate   _dbMigrate   _dbMigrate1To2   _dbMigrate2To3   _dbMigrate3To4!   _parseGroupParam   HostnameGrouperM   {8df290ae-dcaa-4c11-98a5-2429a4dc97bb}   XPCOMUtils   generateQI)   nsIContentURIGrouper   group   AsyncStatement   execute   components   NSGetFactory)   generateNSGetFactory   ˙˙˙˙   %   ContentPrefService                   {       š                                            ô  Á               ;    5   5   ;    5   5   H   ;   ¸   
=   : 5   A¸   
:  QA5   	¸   

A=   B: QA5   	¸   

A=   B: QßŃÉĚŘŘ=    Services   appinfo   processType)   PROCESS_TYPE_CONTENT   Cu   importe   resource://gre/modules/ContentPrefServiceChild.jsm/   ContentPrefServiceChild   _dbInit   _observerSvc   addObserver-   last-pb-context-exited   xpcom-shutdown   ˙˙˙˙      CPS_cache_set                 š      1                                    group	   name   val   arguments   groupCount   E  Ă  #             	W   Q;    ¸   
A: 5   ¸   
AV   O Q;    ¸   
A5   : Ů     QV  ;      šAK  Q  Q   m- Á
:  ¸   
:  5   	   Q   
5   
W  Q¸   
:  5   	   Q   
5   
W  QQA¸   
V  V  : QV  #?W  QQV  ;   ×   
   ăQLM˙˙˙iQNČĺŇÍĘ(Đ0  ×Éç×ÔÎÍHŇ    Object   getPrototypeOf   set   apply	   keys   _groups   length/   CACHE_MAX_GROUP_ENTRIES	   next	   done   value   remove    ˙˙˙˙         group    	   name       h          Y   Ž   ˙˙˙˙   ˙˙˙˙   %   CPS_QueryInterface              ť       š      9                               @      iid   supportedIIDsđ  ń	  9             Z  ;    5   `   ;    5   `     QV   ¸   
    :    A   ¸   
;    5   :    WA5       D  QY     Q;   ¸   
=   	V  : QAV  5   
AR 6   QČA5   ;   5   pÎÓ>ĐÖ
ËĘŮĚĘFHË    Ci+   nsIContentPrefService   nsISupports	   some   equals-   nsIContentPrefService2)   _contentPrefService2   Cu   import]   resource://gre/modules/ContentPrefService2.jsm'   ContentPrefService2   Cr+   NS_ERROR_NO_INTERFACE   ˙˙˙˙   )   CPS_QueryInterface/<á                        š                                              i s    >                ¸    
T  : (Ó    equals    ˙˙˙˙         s       j   >   ˙˙˙˙   ˙˙˙˙   S   ContentPrefService.prototype._observerSvcÁ                   9       š                                            
  b  P             A5        *A;   5   ¸   
;   5   : 6    QA5    ŇĘRÉT    __observerSvc   Cc?   @mozilla.org/observer-service;1   getService   Ci%   nsIObserverService   ˙˙˙˙   Q   ContentPrefService.prototype._consoleSvcÁ                   9       š                                            Ą  ^  Y             A5        *A;   5   ¸   
;   5   : 6    QA5    ŇĘ[É]    __consoleSvc   Cc;   @mozilla.org/consoleservice;1   getService   Ci#   nsIConsoleService   ˙˙˙˙   K   ContentPrefService.prototype._prefSvcÁ                   9       š                                              M  b             A5        *A;   5   ¸   
;   5   : 6    QA5    ŇĘdÉf    __prefSvc   CcE   @mozilla.org/preferences-service;1   getService   Ci   nsIPrefBranch   ˙˙˙˙   7   ContentPrefService__destroy                   ˘      š      Ó                           I           ä  ť  m             A5    ¸   
A=   : QA5    ¸   
A=   : QA5      A5   ¸   
:  QA@6   QA5      A5   ¸   
:  QA@6   QA5      A5   ¸   
:  QA@6   QA5      A5   ¸   
:  QA@6   QA5   	   A5   	¸   
:  QA@6   	QA5   
   A5   
¸   
:  QA@6   
QA5      A5   ¸   
:  QA@6   QA5      A5   ¸   
:  QA@6   QA5      A5   ¸   
:  QA@6   QA5      A5   ¸   
:  QA@6   QA5      A5   ¸   
:  QA@6   QA5      A5   ¸   
:  QA@6   QA5      A5   ¸   
:  QA@6   QA5      A5   ¸   
:  QA@6   QA5      A5   ¸   
:  QA@6   QA5      A5   ¸   
:  QA5   ¸   
:  QA%   QA%   QA%   QA%   QA%   QA%   Q××sŃČwŃČ{ŃČŃČŃČŃČŃČŃČŃČŃČŃČŃČŃČŃČŃČŃŃ  š    _observerSvc   removeObserver   xpcom-shutdown-   last-pb-context-exited%   __stmtSelectPrefID   finalize1   __stmtSelectGlobalPrefID!   __stmtInsertPref#   __stmtInsertGroup'   __stmtInsertSetting'   __stmtSelectGroupID+   __stmtSelectSettingID!   __stmtSelectPref-   __stmtSelectGlobalPref/   __stmtSelectPrefsByName7   __stmtDeleteSettingIfUnused#   __stmtSelectPrefs3   __stmtDeleteGroupIfUnused!   __stmtDeletePref!   __stmtUpdatePref)   _contentPrefService2   destroy   _dbConnection   asyncClose   _observers#   _genericObservers   __consoleSvc   __grouper   __observerSvc   __prefSvc   ˙˙˙˙   5   ContentPrefService_observe                 E       š      #                                        subject   topic	   data   P  +  Ĺ             T x=    y   =   y   z   ,A¸   
:  Q   A5   ¸   
:  Q   kAu
uĘ  ÇĚXŃX    xpcom-shutdown-   last-pb-context-exited   _destroy!   _privModeStorage   removeAll   ˙˙˙˙   5   ContentPrefService_getPref                    š      S                               @      aGroup   aName   aContext   aCallback   group     Ů  Ú       	      ;    â    :  QT     $;   ¸   
=   ;   5   : pA¸   
T  : W   QT E   QT 5      uA5   ¸   	
V   T :    YĆ       QA5   ¸   

V   T :    Q     A¸   
   : QČÇ   ČÇČÇV   @   A¸   
T    : A¸   
V   T    : ÎŃĘ  ŢËČŃÔ
ŃÔÉ
Ń
Ë  đĐÔ*    warnDeprecated   Components   ExceptionO   aName cannot be null or an empty string   Cr-   NS_ERROR_ILLEGAL_VALUE!   _parseGroupParam%   usePrivateBrowsing!   _privModeStorage   has   get#   _scheduleCallback#   _selectGlobalPref   _selectPref    ˙˙˙˙         value             9   ContentPrefService_getPref/<Á                          š                                            s    ç               ¸    
   : Q,Ő    onResult       M   ˙˙˙˙˙˙˙˙Â          ˙˙˙˙Ë             ˙˙˙˙   5   ContentPrefService_setPref               ¨      š      |                           !             aGroup   aName   aValue   aContext   currentValue   group   settingID   groupID   prefID    
  #  ő       
      ;    â    :  QA¸   
T  T T : W   QV   '=      V   T    A¸   
T  : W  QT E   QT 5      8A5   ¸   
V  T T : QA¸   
V  T T : QA¸   
T : D   QA¸   	
T : W  QV  QV  QV  @   $@W  QA¸   

V  : W  Q   FA¸   
V  : D   QA¸   
V  : W  QA¸   
V  V  : W  QV     A¸   
V  T : Q   A¸   
V  V  T : QA5   ¸   
V  T T : QA¸   
V  T T : QÎŃČËČËČŃŰÖËÔ Č	Ě	ÍĚ
ŐČĐ	ČŘ×ŰÖ*    warnDeprecated   getPref   undefined!   _parseGroupParam%   usePrivateBrowsing!   _privModeStorage   setWithCast   _notifyPrefSet!   _selectSettingID   _insertSetting'   _selectGlobalPrefID   _selectGroupID   _insertGroup   _selectPrefID   _updatePref   _insertPref   _cache   ˙˙˙˙   5   ContentPrefService_hasPref                 +       š                                              aGroup   aName   aContext   Í#  Ď$              ;    â    :  QA¸   
T  T T : Ĺ=   ÎŃË6    warnDeprecated   getPref   undefined   ˙˙˙˙   A   ContentPrefService_hasCachedPref                      š      /                                        aGroup   aName   aContext   group   storage   %  &  $      	      ;    â    :  QT     $;   ¸   
=   ;   5   : pA¸   
T  :    QT E   QT 5      A5      A5   	  QV  ¸   

V   T : ÎŃĘ (ËČŃŰŇ    warnDeprecated   Components   ExceptionO   aName cannot be null or an empty string   Cr-   NS_ERROR_ILLEGAL_VALUE!   _parseGroupParam%   usePrivateBrowsing!   _privModeStorage   _cache   has   ˙˙˙˙   ;   ContentPrefService_removePref               X      š      p                                        aGroup   aName   aContext   group   settingID   groupID   prefID   Č&  *  0      	      ;    â    :  QA¸   
T  T T :     A¸   
T  : W   QT E   QT 5      2A5   ¸   
V   T : QA¸   
V   T : QA¸   
T : W  QV  QV  QV   @   $@W  QA¸   
V  : W  Q   1A¸   	
V   : W  QA¸   

V  V  : W  QA¸   
V  : QA¸   
V  : QV     A¸   
V  : QA5   ¸   
V   T : QA¸   
V   T : QÎŃËČŃŘÓËČ	Ě	ÍĚ
ČĐ	ČĐĐĐŘÓ&    warnDeprecated   hasPref!   _parseGroupParam%   usePrivateBrowsing!   _privModeStorage   remove%   _notifyPrefRemoved!   _selectSettingID'   _selectGlobalPrefID   _selectGroupID   _selectPrefID   _deletePref-   _deleteSettingIfUnused)   _deleteGroupIfUnused   _cache   ˙˙˙˙   K   ContentPrefService_removeGroupedPrefs                Ú       š      <                                     aContext ŕ*  Ě-  U            ;    â    :  QT  E   QT  5      A5   ¸   
:  QA5   ¸   
:  QA5   ¸   
:  QA5   ¸   
=   : QA5   ¸   
=   	: QA5   ¸   
=   
: QA5   ¸   
:  Q   .   Qv   QA5   ¸   
:  QV   pČ    ÎŃŃŃŃTÖÖÖÖĚŃĚ    warnDeprecated%   usePrivateBrowsing!   _privModeStorage   removeAllGroups   _cache   _dbConnection!   beginTransaction!   executeSimpleSQLW   DELETE FROM prefs WHERE groupID IS NOT NULL%   DELETE FROM groupsÇ   
        DELETE FROM settings
        WHERE id NOT IN (SELECT DISTINCT settingID FROM prefs)
      #   commitTransaction'   rollbackTransaction    ˙˙˙˙          ex         X   X       ą   "   ˙˙˙˙   ˙˙˙˙   I   ContentPrefService_removePrefsByName              Ë      š       ě                        @             aName   aContext   settingID!   selectGroupsStmt   groupNames   groupIDs   i  .  ĺ4  n            ;    â    :  QT      $;   ¸   
=   ;   5   : pT E   QT 5      ˝A5   K  Q  Q   m- Á
:  ¸   
:  5   	   Q   
5   
W  Q¸   
:  5   	   Q   
5   
W  QQV  T  H   0A5   ¸   
V  T  : QA¸   
V  T  : QăQLM˙˙˙jQNČA¸   
T  : W   QV       A¸   
=   : W  QZ   W  QZ   W  QV  5   V   6   Q   @mV  ¸   
V  5   5   : QV  ¸   
V  5   5   : QăV  ¸   
:  ˙˙˙ľt   
   V  ¸   
:  Qu A¸   
@T  :    V  ¸   
@: QA5   ¸   
=   V   : QA5   ¸   
=   V   : Q>W  Q   mA5   ¸   
V  V  7T  : QV  V  7   A¸   
V  V  7: QT  D   QT 5       A¸   
V  V  7T  : QV  #?W  QQăV  V  Ů   ˙˙˙qÎŃĘ rŃŐ0  ×Éç×Č
Ř
ŕ ~ËČÍČ ÉÉnÓ(P ÝÝ ß ŃĚĐŰŰ	%  v   ÝÉŐ
ĘÉŘ +Î Ł Ő Ł6    warnDeprecated   Components   ExceptionO   aName cannot be null or an empty string   Cr-   NS_ERROR_ILLEGAL_VALUE%   usePrivateBrowsing!   _privModeStorage	   next	   done   value   remove%   _notifyPrefRemoved!   _selectSettingID%   _dbCreateStatementQ  
      SELECT groups.id AS groupID, groups.name AS groupName
      FROM prefs
      JOIN groups ON prefs.groupID = groups.id
      WHERE prefs.settingID = :setting
       params   setting	   push   row   groupID   groupName   executeStep   reset   hasPref   _dbConnection!   executeSimpleSQLI   DELETE FROM prefs WHERE settingID = A   DELETE FROM settings WHERE id =    _cache)   _deleteGroupIfUnused   length    ˙˙˙˙         group    	   name        4         K  r       c  P      f          W   ­   ˙˙˙˙   ˙˙˙˙   7   ContentPrefService_getPrefs              b      š      R                                      aGroup   aContext   group  5  >7  ¨            ;    â    :  QA¸   
T  : W   QT E   QT 5       Q;   5   ¸   
;   5   :   QA5   K  Q  Q  Q   Şm- Á
:  ¸   	
:  5   
   Q   
5   W  Q¸   	
:  5   
   Q   
5   W  Q¸   	
:  5   
   Q   
5   W  QQV  V   H   V  ¸   
V  V  : QăQLM˙˙˙VQNČV  ČČV   @   A¸   
:  A¸   
V   : ÎËČŃËŃĘ ­ČŰ0  Ż×Éçç×ÉäČČĚ    warnDeprecated!   _parseGroupParam%   usePrivateBrowsing   CcA   @mozilla.org/hash-property-bag;1   createInstance   Ci-   nsIWritablePropertyBag!   _privModeStorage	   next	   done   value   setProperty%   _selectGlobalPrefs   _selectPrefs    ˙˙˙˙         prefs                     sgroup       sname    	   sval          °       8     ˙˙˙˙   l   Ć       ˙˙˙˙8            ˙˙˙˙   C   ContentPrefService_getPrefsByName                ^      š      V                        !             aName   aContext  }7  Ć9  ť            ;    â    :  QT      $;   ¸   
=   ;   5   : pT E   QT 5        Q;   5   ¸   	
;   
5   :    QA5   K  Q  Q  Q   Šm- Á
:  ¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQV  T  H   V   ¸   
V  V  : QăQLM˙˙˙WQNČV   ČČA¸   
T  : ÎŃĘ żŃË
ŃĘ ĂČŰ0  Ž×Éçç×Č
äČË    warnDeprecated   Components   ExceptionO   aName cannot be null or an empty string   Cr-   NS_ERROR_ILLEGAL_VALUE%   usePrivateBrowsing   CcA   @mozilla.org/hash-property-bag;1   createInstance   Ci-   nsIWritablePropertyBag!   _privModeStorage	   next	   done   value   setProperty%   _selectPrefsByName    ˙˙˙˙          prefs                     sgroup       sname    	   sval          Ż       M     ˙˙˙˙      Ĺ       ˙˙˙˙L            ˙˙˙˙   =   ContentPrefService_addObserver               +      š                                             aName   aObserver   arguments  Š:  ;  Ő            	W   Q;    â    :  QA5   ¸   
AV   O QÎÖ)    warnDeprecated   _addObserver   apply   ˙˙˙˙   ?   ContentPrefService__addObserver               w       š      &                           
             aName   aObserver   observers  @;  u<  Ú            V   QT     8A5    T  7    A5    T  Z   8QA5    T  7W   Q   A5   W   QV   ¸   
T : ×˙   V   ¸   
T : Q3
ËĎÔËÎŇ    _observers#   _genericObservers   indexOf	   push   ˙˙˙˙   C   ContentPrefService_removeObserver               +      š                                             aName   aObserver   arguments  ´<  =  č            	W   Q;    â    :  QA5   ¸   
AV   O QÎÖ,    warnDeprecated   _removeObserver   apply   ˙˙˙˙   E   ContentPrefService__removeObserver               y       š      ,                                        aName   aObserver   observers  T=  >  í            V   QT     +A5    T  7    A5    T  7W   Q   A5   W   QV   ¸   
T : ×˙   &V   ¸   
V   ¸   
T : ?: Q&
ËÔËÎŮ˙˙˙ď2    _observers#   _genericObservers   indexOf   splice   ˙˙˙˙   A   ContentPrefService__getObservers               ]       š                                 	             aName   observers L@  (A              Z   W   QT  E   QA5    T  7   "V   ¸   
A5    T  7: W   QV   ¸   
A5   : W   QV   ÉÓŐČŃČ    _observers   concat#   _genericObservers   ˙˙˙˙   K   ContentPrefService__notifyPrefRemoved              j       š                                           aGroup   aName   observer  ¸A  B        	      A¸    
T : K   LmW   V   ¸   
T  T : Q   ,  Qv  Q;   ¸   
V  : QČ    ăQLM˙˙˙´QNË6QĘÚĚç    _getObservers)   onContentPrefRemoved   Cu   reportError    ˙˙˙˙         ex          R                 7       ˙˙˙˙   ˙˙˙˙   C   ContentPrefService__notifyPrefSet              m       š                                           aGroup   aName   aValue   observer   C  đC        	      A¸    
T : K   OmW   V   ¸   
T  T T : Q   ,  Qv  Q;   ¸   
V  : QČ    ăQLM˙˙˙ąQNË6TĘÝĚç    _getObservers!   onContentPrefSet   Cu   reportError    ˙˙˙˙         ex          U                 :       ˙˙˙˙   ˙˙˙˙   I   ContentPrefService.prototype.grouperÁ                          š      
                                       D  8D  (            ;    â    :  QA5   Î    warnDeprecated   _grouper   ˙˙˙˙   K   ContentPrefService.prototype._grouperÁ                   9       š                                            [D  E  -            A5        *A;   5   ¸   
;   5   : 6    QA5    ŇĘ /É    __grouper   CcY   @mozilla.org/content-pref/hostname-grouper;1   getService   Ci)   nsIContentURIGrouper   ˙˙˙˙   S   ContentPrefService.prototype.DBConnectionÁ                          š      
                                      3E  pE  4            ;    â    :  QA5   Î    warnDeprecated   _dbConnection   ˙˙˙˙   Y   ContentPrefService.prototype._stmtSelectPrefÁ                   +       š                                            F  G  >            A5        AA¸   
=   : 6    QA5    ÎÉ I !   __stmtSelectPref%   _dbCreateStatementÝ  
        SELECT prefs.value AS value
        FROM prefs
        JOIN groups ON prefs.groupID = groups.id
        JOIN settings ON prefs.settingID = settings.id
        WHERE groups.name = :group
        AND settings.name = :setting
         ˙˙˙˙   ]   ContentPrefService.prototype._scheduleCallbackÁ               J       š   	                                        	   func   tm ŹG  JH  L            ;    5   ¸   
;   5   :    QV   5   ¸   
T  ;   5   5   : QŰČć;    Cc;   @mozilla.org/thread-manager;1   getService   Ci!   nsIThreadManager   mainThread   dispatch   nsIThread   DISPATCH_NORMAL   ˙˙˙˙   =   ContentPrefService__selectPref               ^      š      g                        ,      @      aGroup   aSetting   aCallback   valueH  )L  Q            ;       QA5   ¸   
      :    HA5   ¸   
      :    Q      A¸   
    : Q   A5   5      6   QA5   5      6   Q      MĆ      QA5      Q;   	A5   R ¸   

Y      ]   : QČÇ   PA5   ¸   
:     A5   5   5      QA5   ¸   
         : Qt   
   A5   ¸   
:  Qu    Ë××ÉŃ  ĎÖÖHŃĚŰ2Ę˙˙˙ÎË gÍ
ÖęÓ    undefined   _cache   has   get#   _scheduleCallback   _stmtSelectPref   params   group   setting   AsyncStatement   execute   onResult   executeStep   row   value   set   reset   ˙˙˙˙   A   ContentPrefService__selectPref/<Á                          š                                            ZI  xI  V               ¸    
   : Q*Ő    onResult    ˙˙˙˙          cache            S   ContentPrefService__selectPref/<.onResultÁ                 1       š                                              aResult ĽJ  K  b               ¸    
    T  : Q  ¸   
T  : Q
Ý
Ó    set   onResult    n   Ó      Ş   <   ˙˙˙˙   ˙˙˙˙   e   ContentPrefService.prototype._stmtSelectGlobalPrefÁ                   +       š                                            gL  şM  v            A5        AA¸   
=   : 6    QA5    ÎÉ # -   __stmtSelectGlobalPref%   _dbCreateStatementw  
        SELECT prefs.value AS value
        FROM prefs
        JOIN settings ON prefs.settingID = settings.id
        WHERE prefs.groupID IS NULL
        AND settings.name = :name
         ˙˙˙˙   I   ContentPrefService__selectGlobalPref               <      š      c                        &      @      aName   aCallback   value˙M  lQ              ;       QA5   ¸   
@   :    DA5   ¸   
@   :    Q      A¸   
    : Q   A5   5      6   Q      MĆ      QA5      Q;   A5   R ¸   	
Y      ]   
: QČÇ   LA5   ¸   
:     A5   5   5      QA5   ¸   
@      : Qt   
   A5   ¸   
:  Qu    ËÓÓÉŃ  ľÖHŃĚŰ8Ę˙˙˙ČË Í
ÖćÓ    undefined   _cache   has   get#   _scheduleCallback+   _stmtSelectGlobalPref   params	   name   AsyncStatement   execute   onResult   executeStep   row   value   set   reset   ˙˙˙˙   M   ContentPrefService__selectGlobalPref/<Á                          š                                            ÁN  ßN                 ¸    
   : Q*Ő    onResult    ˙˙˙˙          cache            _   ContentPrefService__selectGlobalPref/<.onResultÁ                 -       š                                              aResult ŕO  GP                 ¸    
@  T  : Q  ¸   
T  : Q
Ů
Ó    set   onResult    f   š         <   ˙˙˙˙   ˙˙˙˙   _   ContentPrefService.prototype._stmtSelectGroupIDÁ                   +       š                                            ¤Q  R  §            A5        AA¸   
=   : 6    QA5    ÎÉ Ż  '   __stmtSelectGroupID%   _dbCreateStatementš   
        SELECT groups.id AS id
        FROM groups
        WHERE groups.name = :name
         ˙˙˙˙   C   ContentPrefService__selectGroupID               j       š      %                                       aName   id ÎR  ŘS  ˛            V   QA5    5   T  6   QA5    ¸   
:     A5    5   5   W   Qt   
   A5    ¸   
:  Qu V   DÔÍ
ßÓ
 %   _stmtSelectGroupID   params	   name   executeStep   row   id   reset       H      ˙˙˙˙   [   ContentPrefService.prototype._stmtInsertGroupÁ                   +       š                                            T  ÍT  Ă            A5        AA¸   
=   : 6    QA5    É ĹÉ #   __stmtInsertGroup%   _dbCreateStatementQ   INSERT INTO groups (name) VALUES (:name)   ˙˙˙˙   ?   ContentPrefService__insertGroup                 2       š                                              aName U  U  Ě            A5    5   T  6   QA5    ¸   
:  QA5   5   ÔŃĚ* !   _stmtInsertGroup   params	   name   execute   _dbConnection   lastInsertRowID   ˙˙˙˙   c   ContentPrefService.prototype._stmtSelectSettingIDÁ                   +       š                                            ÔU  ŁV  Ó            A5        AA¸   
=   : 6    QA5    É Ő#É" +   __stmtSelectSettingID%   _dbCreateStatementU   SELECT id FROM settings WHERE name = :name   ˙˙˙˙   G   ContentPrefService__selectSettingID               j       š      %                                       aName   id ćV  řW  Ü            V   QA5    5   T  6   QA5    ¸   
:     A5    5   5   W   Qt   
   A5    ¸   
:  Qu V   DÔÍ
ßÓ
 )   _stmtSelectSettingID   params	   name   executeStep   row   id   reset       H      ˙˙˙˙   _   ContentPrefService.prototype._stmtInsertSettingÁ                   +       š                                            0X  ůX  í            A5        AA¸   
=   : 6    QA5    É ď!É  '   __stmtInsertSetting%   _dbCreateStatementU   INSERT INTO settings (name) VALUES (:name)   ˙˙˙˙   C   ContentPrefService__insertSetting                 2       š                                              aName 8Y  ĚY  ö            A5    5   T  6   QA5    ¸   
:  QA5   5   ÔŃĚ* %   _stmtInsertSetting   params	   name   execute   _dbConnection   lastInsertRowID   ˙˙˙˙   ]   ContentPrefService.prototype._stmtSelectPrefIDÁ                   +       š                                            Z  ćZ  ý            A5        AA¸   
=   : 6    QA5    É ˙ É %   __stmtSelectPrefID%   _dbCreateStatement   SELECT id FROM prefs WHERE groupID = :groupID AND settingID = :settingID   ˙˙˙˙   A   ContentPrefService__selectPrefID               ~       š      )                                       aGroupID   aSettingID   id  #[  z\              V   QA5    5   T  6   QA5    5   T 6   QA5    ¸   
:     A5    5   5   W   Qt   
   A5    ¸   
:  Qu V   XÔÔÍ
ßÓ
 #   _stmtSelectPrefID   params   groupID   settingID   executeStep   row   id   reset       \      ˙˙˙˙   i   ContentPrefService.prototype._stmtSelectGlobalPrefIDÁ                   +       š                                            ź\  Ż]              A5        AA¸   
=   : 6    QA5    É &É% 1   __stmtSelectGlobalPrefID%   _dbCreateStatement   SELECT id FROM prefs WHERE groupID IS NULL AND settingID = :settingID   ˙˙˙˙   M   ContentPrefService__selectGlobalPrefID               j       š      %                                       aSettingID   id ř]  %_  !            V   QA5    5   T  6   QA5    ¸   
:     A5    5   5   W   Qt   
   A5    ¸   
:  Qu V   DÔÍ
ßÓ
 /   _stmtSelectGlobalPrefID   params   settingID   executeStep   row   id   reset       H      ˙˙˙˙   Y   ContentPrefService.prototype._stmtInsertPrefÁ                   +       š                                            W_  H`  2            A5        AA¸   
=   : 6    QA5    ÎÉ 9 !   __stmtInsertPref%   _dbCreateStatement×   
        INSERT INTO prefs (groupID, settingID, value)
        VALUES (:groupID, :settingID, :value)
         ˙˙˙˙   =   ContentPrefService__insertPref                 Z       š                                              aGroupID   aSettingID   aValue   `  a  <            A5    5   T  6   QA5    5   T 6   QA5    5   T 6   QA5    ¸   
:  QA5   5   ÔÔÔŃĚ*    _stmtInsertPref   params   groupID   settingID   value   execute   _dbConnection   lastInsertRowID   ˙˙˙˙   Y   ContentPrefService.prototype._stmtUpdatePrefÁ                   +       š                                            Ća  b  E            A5        AA¸   
=   : 6    QA5    É GÉ !   __stmtUpdatePref%   _dbCreateStatement]   UPDATE prefs SET value = :value WHERE id = :id   ˙˙˙˙   =   ContentPrefService__updatePref                 :       š                                              aPrefID   aValue  Ăb  \c  N            A5    5   T  6   QA5    5   T 6   QA5    ¸   
:  QÔÔŃ    _stmtUpdatePref   params   id   value   execute   ˙˙˙˙   Y   ContentPrefService.prototype._stmtDeletePrefÁ                   +       š                                            c  Dd  U            A5        AA¸   
=   : 6    QA5    É WÉ !   __stmtDeletePref%   _dbCreateStatementA   DELETE FROM prefs WHERE id = :id   ˙˙˙˙   =   ContentPrefService__deletePref                 &       š                                              aPrefID }d  Ţd  ^            A5    5   T  6   QA5    ¸   
:  QÔŃ    _stmtDeletePref   params   id   execute   ˙˙˙˙   o   ContentPrefService.prototype._stmtDeleteSettingIfUnusedÁ                   +       š                                            &e  =f  d            A5        AA¸   
=   : 6    QA5    Î#É k( 7   __stmtDeleteSettingIfUnused%   _dbCreateStatementá   
        DELETE FROM settings WHERE id = :id
        AND id NOT IN (SELECT DISTINCT settingID FROM prefs)
         ˙˙˙˙   S   ContentPrefService__deleteSettingIfUnused                 &       š                                              aSettingID f  	g  n            A5    5   T  6   QA5    ¸   
:  QÔŃ* 5   _stmtDeleteSettingIfUnused   params   id   execute   ˙˙˙˙   k   ContentPrefService.prototype._stmtDeleteGroupIfUnusedÁ                   +       š                                            Mg  Zh  t            A5        AA¸   
=   : 6    QA5    Î!É {& 3   __stmtDeleteGroupIfUnused%   _dbCreateStatementŮ   
        DELETE FROM groups WHERE id = :id
        AND id NOT IN (SELECT DISTINCT groupID FROM prefs)
         ˙˙˙˙   O   ContentPrefService__deleteGroupIfUnused                 &       š                                              aGroupID Ľh  i  ~            A5    5   T  6   QA5    ¸   
:  QÔŃ( 1   _stmtDeleteGroupIfUnused   params   id   execute   ˙˙˙˙   [   ContentPrefService.prototype._stmtSelectPrefsÁ                   +       š                                            Ni  ˇj              A5        AA¸   
=   : 6    QA5    ÎÉ  #   __stmtSelectPrefs%   _dbCreateStatementÁ  
        SELECT settings.name AS name, prefs.value AS value
        FROM prefs
        JOIN groups ON prefs.groupID = groups.id
        JOIN settings ON prefs.settingID = settings.id
        WHERE groups.name = :group
         ˙˙˙˙   ?   ContentPrefService__selectPrefs               Ş       š      B                                       aGroup   prefs ňj  ˛l              ;    5   ¸   
;   5   : W   QA5   5   T  6   Q   5mV   ¸   
A5   5   	5   
A5   5   	5   : QăA5   ¸   
:  ˙˙˙žt   
   A5   ¸   
:  Qu V   ŃĘ ČfÔ(GÜĐ  áÓ    CcA   @mozilla.org/hash-property-bag;1   createInstance   Ci-   nsIWritablePropertyBag!   _stmtSelectPrefs   params   group   setProperty   row	   name   value   executeStep   reset    $   j       =   G      ˙˙˙˙   g   ContentPrefService.prototype._stmtSelectGlobalPrefsÁ                   +       š                                            ňl  =n  ¤            A5        AA¸   
=   : 6    QA5    ÎÉ ­$ /   __stmtSelectGlobalPrefs%   _dbCreateStatementa  
        SELECT settings.name AS name, prefs.value AS value
        FROM prefs
        JOIN settings ON prefs.settingID = settings.id
        WHERE prefs.groupID IS NULL
         ˙˙˙˙   K   ContentPrefService__selectGlobalPrefs                        š      =                                        prefsn  "p  °            ;    5   ¸   
;   5   : W   Q   5mV   ¸   
A5   5   5   A5   5   5   	: QăA5   ¸   

:  ˙˙˙žt   
   A5   ¸   
:  Qu V   ŃĘ ąČR(GÜĐ ś ľáÓ    CcA   @mozilla.org/hash-property-bag;1   createInstance   Ci-   nsIWritablePropertyBag   setProperty-   _stmtSelectGlobalPrefs   row	   name   value   executeStep   reset    $   V       )   G      ˙˙˙˙   g   ContentPrefService.prototype._stmtSelectPrefsByNameÁ                   +       š                                            bp  äq  Á            A5        AA¸   
=   : 6    QA5    ÎÉ Ë$ /   __stmtSelectPrefsByName%   _dbCreateStatementĎ  
        SELECT groups.name AS groupName, prefs.value AS value
        FROM prefs
        JOIN groups ON prefs.groupID = groups.id
        JOIN settings ON prefs.settingID = settings.id
        WHERE settings.name = :setting
         ˙˙˙˙   K   ContentPrefService__selectPrefsByName               á       š      T                                       aName   prefs   global +r  t  Î      	      ;    5   ¸   
;   5   : W   QA5   5   T  6   Q   5mV   ¸   
A5   5   	5   
A5   5   	5   : QăA5   ¸   
:  ˙˙˙žt   
   A5   ¸   
:  Qu A¸   
T  : W  QV  '=      V   ¸   
@V  : QV   ŃĘ ĎČfÔ(GÜĐ Ö ŐáÓË	ČËÔ    CcA   @mozilla.org/hash-property-bag;1   createInstance   Ci-   nsIWritablePropertyBag-   _stmtSelectPrefsByName   params   setting   setProperty   row   groupName   value   executeStep   reset#   _selectGlobalPref   undefined    $   j       =   G                     	   name                                 	   name                                    timestamp      groupID      settingID                  ˙˙˙˙   K   ContentPrefService__dbCreateStatement              y       š   	   *                        
             aSQLString   statement úx  \z        	      A5    ¸   
T  : W   Q   Z  Qv  Q;   ¸   
=   T  =   A5    5   =   A5    5   : QV  pČ    V   
ĐÍĚŰŇĚ Ě    _dbConnection   createStatement   Cu   reportError3   error creating statement    :    lastError    -    lastErrorString    ˙˙˙˙         ex                      N   ˙˙˙˙   ˙˙˙˙   5   ContentPrefService__dbInit                ę      š                               ,              dirService   dbFile   dbService   dbConnection   version¸{  @              ;    5   ¸   
;   5   : W   QV   ¸   
=   ;   5   : W  QV  ¸   
=   	: Q;    5   
¸   
;   5   : W  QV  QV  ¸   
:      "A¸   
V  V  : W  Q  V  ¸   
V  : W  Q   X  Qv  QV  5   ;   5      Č   (QA¸   
V  V  V  : W  QČ   vp V  5   W  QV  A5      tA¸   
V  V  A5   : Q   T  Qv  Q;   ¸   
=   V  =   : QA¸   
V  V  V  : W  QČ    A5   ¸   
=   :     V  ¸   
=   : QAV  6   QŃĘ ČÚ	ČÔŃĘ $ČËĐÍĎÍîĐ 2Ń 7
ÎË
ßĚ
ŕ
ÔĎ RŇÔË"    CcK   @mozilla.org/file/directory_service;1   getService   Ci   nsIProperties   get   ProfD   nsIFile   append)   content-prefs.sqlite=   @mozilla.org/storage/service;1%   mozIStorageService   exists   _dbCreate   openDatabase   result   Cr/   NS_ERROR_FILE_CORRUPTED)   _dbBackUpAndRecreate   schemaVersion   _dbVersion   _dbMigrate   Cu   reportError)   error migrating DB: 7   ; backing up and recreating   _prefSvc!   prefHasUserValue7   toolkit.storage.synchronous!   executeSimpleSQL1   PRAGMA synchronous = OFF   _dbConnection    ˙˙˙˙         e        ˙˙˙˙         ex         A          ł          Đ   J   ˙˙˙˙˙˙˙˙÷             a  H   ˙˙˙˙   ˙˙˙˙   9   ContentPrefService__dbCreate              w       š      -                        	             aDBService   aDBFile   dbConnection  u    X            T  ¸    
T : W   QA¸   
V   : QV   A5   6   Q   ;  Qv  QV   ¸   
:  QT ¸   
B: QV  pČ    V   ÍČ!ĐŐĚĎĎĚ    openDatabase   _dbCreateSchema   schemaVersion   _dbVersion   close   remove    ˙˙˙˙         ex            %       <   /   ˙˙˙˙   ˙˙˙˙   E   ContentPrefService__dbCreateSchema                        š                                              aDBConnection Ő  =  k            A¸    
T  : QA¸   
T  : QĎĎ%    _dbCreateTables!   _dbCreateIndices   ˙˙˙˙   E   ContentPrefService__dbCreateTables                N       š                                           aDBConnection ~    p      
      A5    5   K   Q   ,mW   T  ¸   
V   A5    5   V   7: QăQLM˙˙˙ÔQNČÔ01Ęď=    _dbSchema   tables   createTable    ˙˙˙˙       	   name          2          >   ˙˙˙˙   ˙˙˙˙   G   ContentPrefService__dbCreateIndices                §       š      '                                     aDBConnection F  u  u            A5    5   K   Q   mW     Q  QA5    5   V   7  Q=   V   ä=   V  5   ä=   V  5   ¸   
=   : ä=   	  QT  ¸   

V  : QČăQLM˙˙˙{QNČÔ0  Ö
Ő
%ĚŃĺŕ v.    _dbSchema   indicesI   
        CREATE INDEX IF NOT EXISTS 	    ON    table   
        (   columns	   join   ,    )
      !   executeSimpleSQL    ˙˙˙˙       	   name                     index       statement                       ˙˙˙˙       y          ˙˙˙˙   O   ContentPrefService__dbBackUpAndRecreate              h       š      $                                     aDBService   aDBFile   aDBConnection   dbConnection   Ŕ  9              T  ¸    
T =   : QT ¸   
:  Q     Qv  QČ    T ¸   
B: QA¸   
T  T :    QV   Ö 
ćĎÎČ %   backupDatabaseFile9   content-prefs.sqlite.corrupt   close   remove   _dbCreate    ˙˙˙˙         ex                   +      ˙˙˙˙   ˙˙˙˙   ;   ContentPrefService__dbMigrate                ř       š   
   _                                     aDBConnection   aOldVersion   aNewVersion   p  A              T  ¸    
:  QT >   A¸   
T  : Q   T    Q    lm  Q=   V   =   V   ?  QAV  7Ĺ=      =   T =   T pAV  Á
T  : QČV   #?W   QQăV   T ˙˙˙ČT  T 6   QT  ¸   
:  Q   +   Qv   QT  ¸   	
:  QV   pČ     Î  ž ŁÔČ l^v'ÜÍÔ
Đ Ś3Î˙˙˙ďĐ ŽĚÓĚÎĚ !   beginTransaction   _dbCreateSchema   _dbMigrate   To   functionE   no migrator function from version     to version    schemaVersion#   commitTransaction'   rollbackTransaction    ˙˙˙˙          i                     migrationName        ˙˙˙˙          ex            Â       ;   v       0      ˙˙˙˙   =   W          Ň      ˙˙˙˙   ˙˙˙˙   E   ContentPrefService___dbMigrate1To2                 p       š   	                                           aDBConnection     ś            T  ¸    
=   : QT  ¸   
=   A5   5   5   : QT  ¸    
=   : QT  ¸    
=   : QT  ¸    
=   : QÓăÓ žÓÓ7 !   executeSimpleSQLM   ALTER TABLE groups RENAME TO groupsOld   createTable   groups   _dbSchema   tables   
      INSERT INTO groups (id, name)
      SELECT id, name FROM groupsOld
    '   DROP TABLE groupers)   DROP TABLE groupsOld   ˙˙˙˙   C   ContentPrefService__dbMigrate2To3                        š                                              aDBConnection X    Â            A¸    
T  : QĎ% !   _dbCreateIndices   ˙˙˙˙   C   ContentPrefService__dbMigrate3To4                |       š      #                        
             aDBConnection Ö  Ř  Ć               QT  ¸    
=   :    QV   ¸   
:  QČ   +   Qv   QT  ¸   
=   : QČ    T  ¸   
=   : QA¸   
T  : Q.
ĎČŐĚÚÓĎ%    createStatement7   SELECT timestamp FROM prefs   finalize!   executeSimpleSQL   ALTER TABLE prefs ADD COLUMN timestamp INTEGER NOT NULL DEFAULT 0=   DROP INDEX IF EXISTS prefs_idx!   _dbCreateIndices    ˙˙˙˙       	   stmt        ˙˙˙˙          e            2          ,   ˙˙˙˙   4      ˙˙˙˙   ˙˙˙˙   G   ContentPrefService__parseGroupParam                 y       š      )                                        aGroup   t  Ô            T  @   @T  5    5   =      T  ¸   
:  T  ;   5   r   A5   ¸   
T  : ;   ¸   	
=   
;   5   : pÓĘÎĐŃĘ Ü
:    constructor	   name   String   toString   Ci   nsIURI   grouper   group   Components   ExceptionM   aGroup is not a string, nsIURI or null   Cr-   NS_ERROR_ILLEGAL_VALUE   ˙˙˙˙      warnDeprecated                 L       š   
                              	              Deprecated  ö  á      	      ;    ¸   
=   Y   : 5      QV   ¸   
=   =   ;   5   5   	: QÖÍĐĎ ă.    Cu   importK   resource://gre/modules/Deprecated.jsm   Deprecated   warning   nsIContentPrefService is deprecated. Please use nsIContentPrefService2 instead.ł   https://developer.mozilla.org/en-US/docs/XPCOM_Interface_Reference/nsIContentPrefService2   Components   stack   caller   ˙˙˙˙      HostnameGrouper                          š                                                  é                 ˙˙˙˙   +   HostnameGrouper_group                     š      <                                  	   aURI   group   url Ĺ  žĄ  ő      
      V   QT  5    W   QV       =   p   q  Qv  QT  ¸   
;   5   : W  QT  5   V  5   W   Q   %  Qv  QT  5   W   QČ    Č    V    ţÍ
ËĚ 4ÔČÜĚŰ 	   hostY   can't derive group from host; no host in URI   QueryInterface   Ci   nsIURL   prePath   filePath	   spec    ˙˙˙˙         ex                     ex            "        5   8       )   e   ˙˙˙˙   n             ˙˙˙˙      AsyncStatement                        š                                               aStatement ÚĄ  ˘              AT  6    QĘ 	   stmt   ˙˙˙˙   #   AsyncStmt_execute               L       š      2                                       aCallback	   stmt H˘  °¤  !            A5       QV   ¸   
Y   T  ]   B]       ]      ]      ]   : QËĐČĘ -Ę 2Ę # 3 	   stmt   executeAsync   _callback   _hadResult   handleResult!   handleCompletion   handleError   ˙˙˙˙   A   AsyncStmt_execute/<.handleResultÁ                Q       š      !                                      aResult Ů˘  Ł  &            AC6    QA5      B   QT  ¸   
:     QA5   ¸   
V   ¸   
=   : : QČČËĘČ
Ý˙˙˙č (    _hadResult   _callback   getNextRow   onResult   getResultByName   value    ˙˙˙˙          row           <   ˙˙˙˙   ˙˙˙˙   I   AsyncStmt_execute/<.handleCompletionÁ                 H       š                                 	             aReason ÁŁ  |¤  -            A5     E   %QA5   E   QT  ;   5   5      A5   ¸   
;   : QŮÓ
Ö#    _hadResult   _callback   Ci9   mozIStorageStatementCallback   REASON_FINISHED   onResult   undefined   ˙˙˙˙   ?   AsyncStmt_execute/<.handleErrorÁ                        š                                                aError ¤  ¤¤  2             % 