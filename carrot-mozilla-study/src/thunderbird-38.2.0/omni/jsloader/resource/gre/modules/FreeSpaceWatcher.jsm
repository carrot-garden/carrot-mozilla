ç¿s¹                ¹      ¹      ]                                 0     resource://gre/modules/FreeSpaceWatcher.jsm     W                                ;   5       Q;   5      Q;   5      Q;   ¸   
=   : Q;   ¸   
=   	: QAf    0   
QXè   QAY   Y   ]   >]      ]      ]   0   QÊ	ÐÐÐÕ1Õ2Ì-ÉÊ'ÊpÐw    Cc   Components   classes   Ci   interfaces   Cu   utils   importG   resource://gre/modules/Services.jsmI   resource://gre/modules/FileUtils.jsm!   EXPORTED_SYMBOLS+   DEFAULT_WATCHER_DELAY!   FreeSpaceWatcher   timers   id   create	   stop                  !   FreeSpaceWatcher                  ÿÿÿÿ      debug                        ¹                                            	   aMsg ß  "                    ÿÿÿÿ   '   spaceWatcher_create               ·       ¹      /                                D      aThreshold   aOnStatusChange   aDelay   timer   callback   id W  P  '       
      ;    5   ¸   
;   5   :    Q;   â   =   : QY   @]       ]      QV   ¸   	
   T D   Q;   
;   5   5   : Q=   A5   #?
0   Q  QA5   V  V   9QV  ÛÈÓÐeÞÏegßÐ
    Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer   debug;   Creating new FreeSpaceWatcher   currentStatus   notify!   initWithCallback+   DEFAULT_WATCHER_DELAY)   TYPE_REPEATING_SLACK   timer-   id   timers   ÿÿÿÿ   G   spaceWatcher_create/callback.notifyÁ                b      ¹      b                                    aTimer 9  r  ,             Æ      Q  Q   Q      Q;    5   ¸   
=   : 5     Q@  QV  5      V  ¸   
=   : W  QV     <  QV  ¸   
:    QV  V     0   	0   QÈ     Q  Q;   
¸   
=   f   CC:   Q  QV  5   W  Q   )  Qv  Q    C0   QÈ    V        V  : QÈÈÇ   *   Qv   Q;   â   V   : QÈ     7ÙË8ÖÍ:<ÉÐÈ@7ËËÈÞJÌNØÈÓÌVØX[Ö^Ì`
Ù	    Services   wm'   getMostRecentWindow#   navigator:browser   navigator!   getDeviceStorage	   apps   freeSpace   onsuccess   onerror   FileUtils   getDir   webappsDir%   diskSpaceAvailable   currentStatus   debug    ÿÿÿÿ          checkFreeSpace      navigator       deviceStorage              e   spaceWatcher_create/callback.notify/checkFreeSpaceÁ               ¡       ¹                                  
            freeBytes   newStatus z  î  .             ;    â    =   T  : QT       QV       5      g;    â    =   V      =      
=   : Q  V      =      
=   : Q    V   0   Q×ÎÔÓ
ÙÊ
ØÔ#    debug   Free bytes:    currentStatus   New status: 	   free	   full                 req                statResult               6       ¹                                             e   freeBytes 	  S
  B             T  5    5       T  5    5      Q   V   : QÎGÒÎ    target   result                 dir       freeBytes                         webapps                               e        ÿÿÿÿ          e            ;       æ          	   -  ÿÿÿÿ   }   1          µ             ú            =     ÿÿÿÿ   ÿÿÿÿ   #   spaceWatcher_stop                 0       ¹                                             aId ç  T  p             A5    T  7   %A5    T  7¸   
:  QA5    T  /QÊÕË    timers   cancel