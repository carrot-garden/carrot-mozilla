ç¿s¹                ¶  Z   ¹   '   :                                    resource:///modules/gloda/msg_search.js     3                                                                       	f        Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   ¸   

=   : Q;   ¸   

=   : Q<       Q=      Q=   ;   =   ;   =      Q=   ;   =      Qf      Qf      Qf      Qf      Q;   Y      
a      ]      ]      ]    =   !]   "   ]   #   ]   $   ]   %   ]   &6   QLÊ]	a	h	z  Ê  	  Á	ËÐÐÐÐÕ1Õ1ËËÑÌLUÒL]_afhjzËË  ËË    µ  Á  ÌÊÊ  ÚÊ Ê -Ê 9ÊÊ KÊ PÊ UÐ Z !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   importG   resource://gre/modules/Services.jsmG   resource:///modules/gloda/public.js5   FUZZSCORE_TIMESTAMP_FACTOR   RANK_USAGEw   glodaRank(matchinfo(messagesText), 1.0, 2.0, 2.0, 1.5, 1.5)   DASCORE   (((5    + messages.notability) * %   ) + messages.date)%   NUEVO_FULLTEXT_SQL  SELECT messages.*, messagesText.*, offsets(messagesText) AS osets FROM messagesText, messages WHERE messagesText MATCH ?1  AND messagesText.docid IN (SELECT docid FROM messagesText JOIN messages ON messagesText.docid = messages.id WHERE messagesText MATCH ?1 ORDER BY 1   DESC LIMIT ?2 ) AND messages.id = messagesText.docid  AND +messages.deleted = 0 AND +messages.folderID IS NOT NULL AND +messages.messageKey IS NOT NULL/   COLUMN_ALL_MATCH_SCORES?   COLUMN_PARTIAL_PER_MATCH_SCORES9   COLUMN_MULTIPLE_MATCH_SCORES7   COLUMN_MULTIPLE_MATCH_LIMIT!   GlodaMsgSearcher   prototype   retrievalLimit#   parseSearchString%   buildFulltextQuery   getCollection   -dascore   sortBy   onItemsAdded   onItemsModified   onItemsRemoved!   onQueryCompleted      taB                  !   GlodaMsgSearcher                  ÿÿÿÿ      identityFunc                        ¹                                                x p    ]             T  	    ÿÿÿÿ      oneLessMaxZero                        ¹                                                x   Ø  a             T  ?   >   T  ?e    ÿÿÿÿ      reduceSum                 	       ¹                                                accum   curValue  ì    h             T  T È                                                                                                                                                                                                                           
                                                     ÿÿÿÿ      scoreOffsets              Å      ¹      Ð                        =             aMessage   aContext   score   termTemplate'   columnTermIncidence   offsetNums  )                 >   QY     Q  Q;    â    T 5   C: K   mW  >,  ÎãQLMÿÿÿðQNÈ  QZ  V  ¸   
:  `   V  ¸   
:  `  V  ¸   
:  `  V  ¸   
:  `  V  ¸   
:  `    QY     Q  QT 5   T  5   7>7¸   
=   : K   $mW  ;   â     V  : ,  ÎãQLMÿÿÿÜQNÈ  Q>  Q    Zm  Q  QV  V  7  QV  V  ?7  QV  V  7V  á7#?8QQÈV  ×W  QãV  V  Ù   ÿÿÿÈ>  Q   	m  QV  V  7  QV  ¸   	
;   
:    V   ;   V  7W   Q   cV  ¸   
;   
:    KV   ;   ¸   
;   V  7;   V  7V  ¸   
;   
: Ù   : W   QV   ;   ¸   
V  ¸   
;   : ¸   
;   >: ;   V  7: ;   V  7W   QÈV  #?W  QQãV  ;   Ù   ÿÿþëÈV   ËÙ6âÒÒÒÒ×Ëå6)ÜÿÿÿåÚ&ZNj$ÍÎÐÞ  '~ÿÿÿéÖ  ¤& 	  û BÎÐÎxËÐÚÊÐÉ  «{àÓÊ  ¯Ëx  ¤BÎÿÿÿÖ×  ´    Iterator   terms   concat   stashedColumns   id   split       parseInt   length   every   identityFunc/   COLUMN_ALL_MATCH_SCORES	   some	   Math   min?   COLUMN_PARTIAL_PER_MATCH_SCORES   filter   map   oneLessMaxZero   reduce   reduceSum7   COLUMN_MULTIPLE_MATCH_LIMIT9   COLUMN_MULTIPLE_MATCH_SCORES    ÿÿÿÿ      	   term        ÿÿÿÿ         x        ÿÿÿÿ         i                    columnIndex       termIndex        ÿÿÿÿ         iColumn                    termIncidence        ¤        -  j      ð   *      5             A   ÿÿÿÿ   »   a   ÿÿÿÿ   "  v   ÿÿÿÿ   0  F           &  ÿÿÿÿ   ¦  ô         ÿÿÿÿ   !   GlodaMsgSearcher                 \       ¹      '                                        aListener   aSearchString   aAndTerms   !  7"  Á             AT  6    QAT 6   QAA¸   
T : 6   QAT @   T    C6   QA@6   QA@6   QA@6   QÊÊÌÉÔÈÈÈ    listener   searchString   fulltextTerms#   parseSearchString   andTerms   query   collection   scores   ÿÿÿÿ   S   GlodaMsgSearcher.prototype.retrievalLimitÁ                          ¹                                            ¦"  #  Ñ             ;    5   ¸   
=   : Ñ  Ò    Services   prefs   getIntPrefS   mailnews.database.global.search.msg.limit   ÿÿÿÿ   E   GlodaMsgSearcher_parseSearchString             H      ¹                                           aSearchString   addTerm   terms ¨#  Ô'  Ú       
          W   QT  ¸    
:  U  QZ      Q  m  QT  ¸   
=   :      QT  ¸   
T  >7?:   QV  ×ÿ   T  ¸   
?: U  QÈÈÿÿÿV   T  ¸   
?V  : ¸    
:  : QT  ¸   
V  ?: U  QÈÈÿÿÿ\ÈT  ¸   
=   :   QV  ×ÿ   V   T  : QÈ   BV   T  ¸   
>V  : : QT  ¸   
V  ?: U  QÈãT  ÿÿþî     ãÊ  ÚÊÊ  ã  è( Ï
ËÐÈ
ËBÔÍÿÿÿøÐB
ÏÈÌIÔÿÿÿøÐÈ  èÊ   	   trim   startsWith   "   indexOf   substring       ÿÿÿÿ      addTerm                 !       ¹      	                                        aTerm ¼$  ÷$  ã             T           ¸    
T  : QØ 	   push    ÿÿÿÿ         spaceIndex                    endIndex        *        ,     ÿÿÿÿ   I                      ÿÿÿÿ            È         ÿÿÿÿÉ         ÿÿÿÿÿ             ÿÿÿÿ   G   GlodaMsgSearcher_buildFulltextQuery                      ¹                             $              query'   fulltextQueryString(  m-              ;    ¸   
;    5   Y   C]   ;   ]   C]   f    ]   :    Q=     Q;   	â   	A5   
: K  Q  Q  gm- Á
:  ¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQV     )V  A5      =      
=   W  Q     ¸   
V  :    V  V  W  Q   ¶V  Ù   ?E   QV  ¸   
>: X     V  V  =   W  Q   tV  Ù   ×E   2QV  ¸   
>: X  E   QV  ¸   
?: X  D   QV  Ù   ×   V  =   V  =   W  QãQLMÿÿþQNÈV   ¸   
V  : QV   ¸   
A5   : QV   ÛÊÊ È ÊÐ#Ò0 l×ÿÿÿïÉç×Ê
Ôx Ð
ÈxËÝ#ÎxËÒÌÍÌÍÌÔxÓÓÕ    Gloda   newQuery   NOUN_MESSAGE   noMagic%   NUEVO_FULLTEXT_SQL   explicitSQL5   limitClauseAlreadyIncluded   stashColumns      Iterator   fulltextTerms	   next	   done   value   andTerms    	    OR 	   test   length   charCodeAt   *   "   fulltextMatches   limit   retrievalLimit                                         ÿÿÿÿ         iTerm    	   term       ^NEAR(\/\d+)?$       t   m     e   ~  ÿÿÿÿ   ÿÿÿÿ   =   GlodaMsgSearcher_getCollection                 O       ¹      !                                     #   aListenerOverride   aData  ¨-  ¶.  -            T     AT  6    QAA¸   
:  6   QAA5   ¸   
AT : 6   QAB6   QA5   ÊÉÉÒÉÈ    listener   query%   buildFulltextQuery   collection   getCollection   completed   ÿÿÿÿ   ;   GlodaMsgSearcher_onItemsAdded                      ¹   
   8                                        aItems   aCollection   newScores  /  0  ;      	      ;    ¸   
T  Y   A5   ]   T 5   ]   Z  ;   `   :    QA5      %AA5   ¸   
V   : 6   Q   AV   6   QA5      A5   ¸   	
T  T : QÌËÍÉ <È C ÒÎË×0    Gloda   scoreNounItems   fulltextTerms   terms   stashedColumns   scoreOffsets   scores   concat   listener   onItemsAdded   ÿÿÿÿ   A   GlodaMsgSearcher_onItemsModified                 #       ¹      
                                        aItems   aCollection  Ô0  }1  K            A5       A5    ¸   
T  T : Q×3    listener   onItemsModified   ÿÿÿÿ   ?   GlodaMsgSearcher_onItemsRemoved                 #       ¹      
                                        aItems   aCollection  ¹1  _2  P            A5       A5    ¸   
T  T : Q×2    listener   onItemsRemoved   ÿÿÿÿ   C   GlodaMsgSearcher_onQueryCompleted                 (       ¹                                              aCollection 2  3  U            AC6    QA5      A5   ¸   
T  : QÈÔ,    completed   listener!   onQueryCompleted