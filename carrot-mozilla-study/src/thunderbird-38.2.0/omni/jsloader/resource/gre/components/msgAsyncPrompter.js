çżsš                     š   "   Ą                          &            resource://gre/components/msgAsyncPrompter.js     ź         	             	              ;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5      Q;    5   
   	Q;   Y   @]   @]   ;   ¸   
   : ]   6   Q;   Y   ;    ¸   
=   : ]   ;   ¸   
Z  ;   5   `   : ]   @]   >]   @]      ]      ]   6   Qn   Z  ;   `   o   Q;   ¸   !
;   :     Q
Ę	7	}Ú?Ú;ÚAÚ@
ĐĐĘŃÎ57BDĘŃ	ČĐ'Î˙˙˙éČHLĘfĐ{}ÉĎ˙˙˙üŃÉ˙˙˙ý    Components   utils   importG   resource://gre/modules/Services.jsm?   resource://gre/modules/Task.jsmK   resource://gre/modules/XPCOMUtils.jsmI   resource:///modules/gloda/log4moz.js   Ci   interfaces   Cc   classes!   runnablePrompter   prototype   _asyncPrompter   _hashKey	   Task   async   run!   msgAsyncPrompter   IDM   {49b04761-23dd-45d7-903d-619418a4d319}   classID   XPCOMUtils   generateQI'   nsIMsgAsyncPrompter   QueryInterface   _pendingPrompts-   _asyncPromptInProgress	   _log)   queueAsyncAuthPrompt%   _doAsyncAuthPrompt   components   NSGetFactory)   generateNSGetFactory   ˙˙˙˙   !   runnablePrompter                        š                                               asyncPrompter   hashKey  )                 AT  6    QAT 6   QĘĘ    _asyncPrompter   _hashKey   ˙˙˙˙   ?   runnablePrompter.prototype.run<Á                 ë      š      ]                       2             consumer   .generator   .genrval   prompter   okď  ô               É   Ę   ĐQY   ;    5   5   ]   B]      Ë  ĐQA5   5   ¸   
=   A5   	: QA5   5   
A5   	7   QB   Q   5   ¸   
:     Q   FĆ       Qv   Q;   5   ¸   
=      =   : QČÇ    A5   5   
A5   	&Q   5   K   m            ¸   
:  Q      ¸   
:  Q   FĆ      Qv   Q;   5   ¸   
=      =   : QČÇ    ăQLM˙˙˙QNA5   5   #?
6   QQA5   5   ¸   
=   A5   	: QA5   ¸   
:  QY   ]   C]      Ě3ĚęâŘŃÎÓî"Ó$Í0  Ë0
Ő)
Ő+Ó-ú0Ú2âŃ)    Services   logins+   initializationPromise   value	   done   _asyncPrompter	   _log   debug'   Running prompt for    _hashKey   _pendingPrompts   first   onPromptStart   Components   utils   reportError-   runnablePrompter:run:    
   consumers+   onPromptAuthAvailable!   onPromptCanceled   runnablePrompter:run: consumer.onPrompt* reported an exception: -   _asyncPromptInProgress=   Finished running prompter for %   _doAsyncAuthPrompt    ˙˙˙˙          ex       ˙˙˙˙          ex      ý            4        x             4   ˙˙˙˙   >  4   ˙˙˙˙
   4      ˙˙˙˙   !   msgAsyncPrompter                   F       š                                 	             	  7       	      AY   6    QA;   ¸   
=   ;   5   5   ;   5   5   : 6   QĚ?ŇĎĎ?ÉA>    _pendingPrompts	   _log   Log4Moz'   getConfiguredLogger!   msgAsyncPrompter   Level	   Warn   ˙˙˙˙   _   msgAsyncPrompter.prototype.queueAsyncAuthPromptÁ                    š      D                                   	   aKey   aJumpQueue   aCaller   asyncPrompt   "
  ţ  L       	      T  A5    q   >A5   ¸   
=   T  : QA5    T  75   ¸   
T : QA5   ¸   
=   T  : QY   T ]   Z   ]      QA5    T  V   8QT      QA5   #?
6   QQA5   ¸   
=   	T  : Q;   
AT  R   Q;   5   5   ¸   
V  ;   5   5   : QČ   A¸   
:  QĘÚÝSÚČÎYĎzËŐ]Ú_
ĘČócĚ    _pendingPrompts	   _log   debugg   Prompt bound to an existing one in the queue, key:    consumers	   pushK   Adding new prompt to the queue, key:    first-   _asyncPromptInProgress;   Forcing runnablePrompter for !   runnablePrompter   Services   tm   mainThread   dispatch   Ci   nsIThread   DISPATCH_NORMAL%   _doAsyncAuthPrompt    ˙˙˙˙         runnable           t   ˙˙˙˙   ˙˙˙˙   [   msgAsyncPrompter.prototype._doAsyncAuthPromptÁ                 Ě       š      7                                        hashKey   runnable  P  f       	      A5    >   A5   ¸   
=   : Q@   QA5   K   mW      ăQLM˙˙˙ńQNV       A5    #?
6    QQA5   ¸   
=   V   : Q;   AV   R   Q;   5   5   	¸   

V  ;   5   5   : QČÖmÉ0ĘHŃqtŐvŰxËČíH -   _asyncPromptInProgress	   _log   debugq   _doAsyncAuthPrompt bypassed - prompt already in progress   _pendingPromptsC   Dispatching runnablePrompter for !   runnablePrompter   Services   tm   mainThread   dispatch   Ci   nsIThread   DISPATCH_NORMAL   9      