çżsš                  Z   š   %   4                                     resource://gre/modules/search_im.js     93                                                                       	f        Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   ¸   

=   : Q;   ¸   

=   : Qź	:   Q=      Q=      Q=   ;   =      Qf      Qf      Qf      Qf      Q;   Y      
a      ]      ]      ]   =   ]       ]   !   ]   "   ]   #   ]   $6   QKĘY	]	d	v{  Ę  	  ˝	ËĐĐĐĐŐ1Ő1ĘËËKTŇKY[]bdfvË{Ë  ËË    ą  ˝  ČĘĘ  ÖĘ  ˙Ę )Ę 5ĘĘ GĘ LĘ QĐ V !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cr   results   Cu   utils   importG   resource://gre/modules/Services.jsmG   resource:///modules/gloda/public.js5   FUZZSCORE_TIMESTAMP_FACTOR   RANK_USAGE   glodaRank(matchinfo(imConversationsText), 1.0, 2.0, 2.0, 1.5, 1.5)   DASCORE)   imConversations.time%   NUEVO_FULLTEXT_SQLÁ  SELECT imConversations.*, imConversationsText.*, offsets(imConversationsText) AS osets FROM imConversationsText, imConversations WHERE imConversationsText MATCH ?1  AND imConversationsText.docid IN (SELECT docid FROM imConversationsText JOIN imConversations ON imConversationsText.docid = imConversations.id WHERE imConversationsText MATCH ?1 ORDER BY     DESC LIMIT ?2 ) AND imConversations.id = imConversationsText.docid/   COLUMN_ALL_MATCH_SCORES?   COLUMN_PARTIAL_PER_MATCH_SCORES9   COLUMN_MULTIPLE_MATCH_SCORES7   COLUMN_MULTIPLE_MATCH_LIMIT   GlodaIMSearcher   prototype   retrievalLimit#   parseSearchString%   buildFulltextQuery   getCollection   -dascore   sortBy   onItemsAdded   onItemsModified   onItemsRemoved!   onQueryCompleted                     GlodaIMSearcher                  ˙˙˙˙      identityFunc                        š                                                x u    Y             T  	    ˙˙˙˙      oneLessMaxZero                        š                                                x Ą  Ý  ]             T  ?   >   T  ?a    ˙˙˙˙      reduceSum                 	       š                                                accum   curValue  ń  !  d             T  T Č                                                                                                                                                                                                                           
                                                     ˙˙˙˙      scoreOffsets              Ĺ      š      Đ                        =             aMessage   aContext   score   termTemplate'   columnTermIncidence   offsetNums  .                 >   QY     Q  Q;    â    T 5   C: K   mW  >,  ÎăQLM˙˙˙đQNČ  QZ  V  ¸   
:  `   V  ¸   
:  `  V  ¸   
:  `  V  ¸   
:  `  V  ¸   
:  `    QY     Q  QT 5   T  5   7>7¸   
=   : K   $mW  ;   â     V  : ,  ÎăQLM˙˙˙ÜQNČ  Q>  Q    Zm  Q  QV  V  7  QV  V  ?7  QV  V  7V  á7#?8QQČV  ×W  QăV  V  Ů   ˙˙˙Č>  Q   	m  QV  V  7  QV  ¸   	
;   
:    V   ;   V  7W   Q   cV  ¸   
;   
:    KV   ;   ¸   
;   V  7;   V  7V  ¸   
;   
: Ů   : W   QV   ;   ¸   
V  ¸   
;   : ¸   
;   >: ;   V  7: ;   V  7W   QČV  #?W  QQăV  ;   Ů   ˙˙ţëČV   ËŮ6âŇŇŇŇ×Ëĺ6)Ü˙˙˙ĺÚ&ZNj$ÍÎĐŢ  '~˙˙˙éÖ   & 	  ű BÎĐÎxËĐÚĘĐÉ  §{ŕÓĘ  ŤËx   BÎ˙˙˙Ö×  °    Iterator   terms   concat   stashedColumns   id   split       parseInt   length   every   identityFunc/   COLUMN_ALL_MATCH_SCORES	   some	   Math   min?   COLUMN_PARTIAL_PER_MATCH_SCORES   filter   map   oneLessMaxZero   reduce   reduceSum7   COLUMN_MULTIPLE_MATCH_LIMIT9   COLUMN_MULTIPLE_MATCH_SCORES    ˙˙˙˙      	   term        ˙˙˙˙         x        ˙˙˙˙         i                    columnIndex       termIndex        ˙˙˙˙         iColumn                    termIncidence        ¤        -  j      đ   *      5             A   ˙˙˙˙   ť   a   ˙˙˙˙   "  v   ˙˙˙˙   0  F           &  ˙˙˙˙   Ś  ô         ˙˙˙˙      GlodaIMSearcher                 \       š      '                                        aListener   aSearchString   aAndTerms   &!  Q"  ˝             AT  6    QAT 6   QAA¸   
T : 6   QAT @   T    C6   QA@6   QA@6   QA@6   QĘĘĚÉÔČČČ    listener   searchString   fulltextTerms#   parseSearchString   andTerms   query   collection   scores   ˙˙˙˙   Q   GlodaIMSearcher.prototype.retrievalLimitÁ                          š                                            ż"  %#  Í             ;    5   ¸   
=   : Ń  Î    Services   prefs   getIntPrefQ   mailnews.database.global.search.im.limit   ˙˙˙˙   C   GlodaIMSearcher_parseSearchString             H      š                                           aSearchString   addTerm   terms ż#  ë'  Ö       
          W   QT  ¸    
:  U  QZ      Q  m  QT  ¸   
=   :      QT  ¸   
T  >7?:   QV  ×˙   T  ¸   
?: U  QČČ˙˙˙V   T  ¸   
?V  : ¸    
:  : QT  ¸   
V  ?: U  QČČ˙˙˙\ČT  ¸   
=   :   QV  ×˙   V   T  : QČ   BV   T  ¸   
>V  : : QT  ¸   
V  ?: U  QČăT  ˙˙ţî     ßĘ  ÖĘĘ  ß  ä( Ď
ËĐČ
ËBÔÍ˙˙˙řĐB
ĎČĚIÔ˙˙˙řĐČ  äĘ  ü 	   trim   startsWith   "   indexOf   substring       ˙˙˙˙      addTerm                 !       š      	                                        aTerm Ó$  %  ß             T           ¸    
T  : QŘ 	   push    ˙˙˙˙         spaceIndex                    endIndex        *        ,     ˙˙˙˙   I                      ˙˙˙˙            Č         ˙˙˙˙É         ˙˙˙˙˙             ˙˙˙˙   E   GlodaIMSearcher_buildFulltextQuery                      š                             %              query'   fulltextQueryString/(  -  ˙             ;    ¸   
;    ¸   
=   : Y   C]   ;   ]   C]   f    ]   :    Q=   	  Q;   
â   
A5   : K  Q  Q  gm- Á
:  ¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQV     )V  A5      =      
=   W  Q     ¸   
V  :    V  V  W  Q   śV  Ů   ?E   QV  ¸   
>: X     V  V  =   W  Q   tV  Ů   ×E   2QV  ¸   
>: X  E   QV  ¸   
?: X  D   QV  Ů   ×   V  =   V  =   W  QăQLM˙˙ţQNČV   ¸   
V  : QV   ¸   
A5   : QV   ÝČĘĘ  Č 	ĘĐ#Ň0 l×˙˙˙ďÉç×Ę
Ôx Đ
ČxËÝ#ÎxËŇĚÍĚÍĚÔxÓÓŐ    Gloda   newQuery   lookupNoun   im-conversation   noMagic%   NUEVO_FULLTEXT_SQL   explicitSQL5   limitClauseAlreadyIncluded   stashColumns      Iterator   fulltextTerms	   next	   done   value   andTerms    	    OR 	   test   length   charCodeAt   *   "   fulltextMatches   limit   retrievalLimit                                         ˙˙˙˙         iTerm    	   term       ^NEAR(\/\d+)?$       ~   m     o   ~  ˙˙˙˙   ˙˙˙˙   ;   GlodaIMSearcher_getCollection                 O       š      !                                     #   aListenerOverride   aData  Ě-  Ú.  )            T     AT  6    QAA¸   
:  6   QAA5   ¸   
AT : 6   QAB6   QA5   ĘÉÉŇÉČ    listener   query%   buildFulltextQuery   collection   getCollection   completed   ˙˙˙˙   9   GlodaIMSearcher_onItemsAdded                      š   
   8                                        aItems   aCollection   newScores  )/  š0  7      	      ;    ¸   
T  Y   A5   ]   T 5   ]   Z  ;   `   :    QA5      %AA5   ¸   
V   : 6   Q   AV   6   QA5      A5   ¸   	
T  T : QĚËÍÉ 8Č ? ŇÎË×0    Gloda   scoreNounItems   fulltextTerms   terms   stashedColumns   scoreOffsets   scores   concat   listener   onItemsAdded   ˙˙˙˙   ?   GlodaIMSearcher_onItemsModified                 #       š      
                                        aItems   aCollection  ö0  1  G            A5       A5    ¸   
T  T : Q×3    listener   onItemsModified   ˙˙˙˙   =   GlodaIMSearcher_onItemsRemoved                 #       š      
                                        aItems   aCollection  Ů1  ~2  L            A5       A5    ¸   
T  T : Q×2    listener   onItemsRemoved   ˙˙˙˙   A   GlodaIMSearcher_onQueryCompleted                 (       š                                              aCollection ˝2  53  Q            AC6    QA5      A5   ¸   
T  : QČÔ,    completed   listener!   onQueryCompleted