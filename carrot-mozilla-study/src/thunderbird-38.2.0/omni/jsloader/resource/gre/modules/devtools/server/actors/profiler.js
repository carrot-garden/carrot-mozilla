çżsš                Ü  U   š   1   g                         5       0     resource://gre/modules/devtools/server/actors/profiler.js     Ţ*                                      	   
                           ;   â   =   : 5        Q5      Q5      Q5      QQ;   â   =   :    Q;   â   =   :    Qn   	źB@1   	Qn   
?1   
Qn   f    1   Qn   f   1   Qn   >1   Qn   ×˙1   Q;   5   ¸   
A   =   B: Q;   5   ¸   
A   =   B: Q;   ¸   
A=   A   : Q;   Y   =   ]      ]      ]      ]      	]      
]      ]      ]       ]   !   ]   ";   ¸   #
   =   $: ]   %   ]   &0   Q;   ';   0   Q;   5   Y   ;   5   5   ]   );   5   5   ]   *;   5   5   ]   +;   5   5   ]   ,;   5   5   ]   -;   5   5    ]   .;   5   5   !]   /;   5   5   "]   00   (Q
Ę 	 	 	 ,	 9	ĎôĎÉ˙˙˙ýĎÉ˙˙˙ý
ĎĚĐĐĚÍá\áTÜ #%ĘĘĘ7ĘDĘSĘbĘmĘ  Ę  Ę  ŠĘ  źŃ  Ü  źČ  ĺĐ Đ&    % , 4 9 > FĎÔÔÔÔÔÔÔÚ    Cc   Ci   Cu   Cr   require   chrome   Services   DevToolsUtilsC   devtools/toolkit/DevToolsUtils.js1   DEFAULT_PROFILER_ENTRIES3   DEFAULT_PROFILER_INTERVAL3   DEFAULT_PROFILER_FEATURES=   DEFAULT_PROFILER_THREADFILTERS%   gProfilerConsumers'   gProfilingStartTime   obs   addObserver!   profiler-started!   profiler-stopped   loader   lazyGetter#   nsIProfilerModule   ProfilerActor   prototype   profiler   actorPrefix   disconnect   onGetFeatures   onStartProfiler   onStopProfiler   onIsActive;   onGetSharedLibraryInformation   onGetProfile9   onRegisterEventNotifications=   onUnregisterEventNotifications   makeInfallible?   ProfilerActor.prototype.observe   observe'   _handleConsoleEvent   exports   requestTypes   getFeatures   startProfiler   stopProfiler   isActive7   getSharedLibraryInformation   getProfile5   registerEventNotifications9   unregisterEventNotifications                     js                                    GeckoMain                  ˙˙˙˙    Ľ                          š      	                                     N  t               n    ;   ¸   
:  1    ŃÉ
 '   gProfilingStartTime	   Date   now   ˙˙˙˙    Ľ                          š                                            Ť  É               n    ×˙1    Í '   gProfilingStartTime   ˙˙˙˙                               š      	                                       g               ;    5   ¸   
;   5   : Ű?    Cc;   @mozilla.org/tools/profiler;1   getService   Ci   nsIProfiler   ˙˙˙˙      ProfilerActor                   )       š                                           Ú                  n    ;    #?
1    QQA;   R  0   QŘÉ
 %   gProfilerConsumers   _observedEvents   Set   ˙˙˙˙   E   ProfilerActor.prototype.disconnectÁ                         š   
   )                                  k  L  '             A5    - Á
:     Q   +m5   W   Q;   5   ¸   
AV   : QăQ¸   
:  5   ˙˙˙ĆČ A@0    QA¸   
:  Qn   ;   #?
1   QQ;   	â   	:  QŐ8?ŃÚ(Ë˙˙˙îŇ+ČĚ.ŘÎ    _observedEvents   value   Services   obs   removeObserver	   next	   done   onStopProfiler%   gProfilerConsumers-   checkProfilerConsumers    ˙˙˙˙          event          ?          J   ˙˙˙˙   ˙˙˙˙   K   ProfilerActor.prototype.onGetFeaturesÁ                          š                                             _  7             Y   ;    ¸   
Z   : ]   	Đ
É$ #   nsIProfilerModule   GetFeatures   features   ˙˙˙˙   O   ProfilerActor.prototype.onStartProfilerÁ                 Ź       š                                              request ą  t
  D             T  H   Y   U  Q;    ¸   
T  5   D   Q;   T  5   D   Q;   T  5   D   Q;   T  5   D   Q;   Ů   T  5   	D   Q;   
T  5   	D   Q;   
Ů   : QY   C]   ÎĚÓÓÓŘÓŘEM	 #   nsIProfilerModule   StartProfiler   entries1   DEFAULT_PROFILER_ENTRIES   interval3   DEFAULT_PROFILER_INTERVAL   features3   DEFAULT_PROFILER_FEATURES   length   threadFilters=   DEFAULT_PROFILER_THREADFILTERS   started   ˙˙˙˙   M   ProfilerActor.prototype.onStopProfilerÁ                   )       š                                           ŕ
    S             ;    ?   ;   ¸   
:  QY   B]   XĐ[	 %   gProfilerConsumers#   nsIProfilerModule   StopProfiler   started   ˙˙˙˙   E   ProfilerActor.prototype.onIsActiveÁ                 R       š                                              isActive   elapsedTime"  ×  b             ;    ¸   
:     QV      ;   â   :     
;     QY   V   ]   V  ]   ĚČĎŇ	ÉĘ #   nsIProfilerModule   IsActive   getElapsedTime   undefined   isActive   currentTime   ˙˙˙˙   k   ProfilerActor.prototype.onGetSharedLibraryInformationÁ                          š                                           ž     m             Y   ;    ¸   
:  ]   	ĚÉ2 #   nsIProfilerModule7   getSharedLibraryInformation1   sharedLibraryInformation   ˙˙˙˙   I   ProfilerActor.prototype.onGetProfileÁ                 6       š                                              profilep  î               ;    ¸   
:     QY   V   ]   ;   â   :  ]   Ě
Č	ÉĘÉ #   nsIProfilerModule   getProfileData   profile   getElapsedTime   currentTime   ˙˙˙˙   i   ProfilerActor.prototype.onRegisterEventNotificationsÁ              ż       š      ;                                    request   response Î           	      Z      QT  5    - Á
:    Q   rm5   W  QA5   ¸   
V  :    
   H;   5   ¸   
AV  B: QA5   ¸   
V  : QV   ¸   
V  : QăQ¸   	
:  5   
˙˙˙Č Y   V   ]   É×8  ŃŃ
@ŰŐÓ  Ë˙˙˙îŇ  	Ę    events   value   _observedEvents   has   Services   obs   addObserver   add	   push	   next	   done   registered    ˙˙˙˙         event       %                ˙˙˙˙   ˙˙˙˙   m   ProfilerActor.prototype.onUnregisterEventNotificationsÁ              ż       š      =                                    request   response ę  #  Š       	      Z      QT  5    - Á
:    Q   rm5   W  QA5   ¸   
V  :     
   G;   5   ¸   
AV  : QA5   ¸   
V  : QV   ¸   
V  : QăQ¸   	
:  5   
˙˙˙Č Y   V   ]   É×8  Ń
Ń@ÚŐÓ  ŤË˙˙˙îŇ  ł	Ę    events   value   _observedEvents   has   Services   obs   removeObserver   delete	   push	   next	   done   unregistered    ˙˙˙˙         event       %                ˙˙˙˙   ˙˙˙˙   A   ProfilerActor.prototype.observe<Á               <      š      j                          '      D      subject   topic	   data   replyÜ  Ă  ź                E   +Q;    ¸   
   :  E   Q   5   D   Q      Q;   ¸   
;   ¸   
   ;   : :    Q   E   +Q;    ¸   
   :  E   Q   5   D   Q      Q;   ¸   
;   ¸   
   ;   : :    QA       Q   x=   y   =   y   3=   	y   )z   $V   A¸   

      : : (V   :  (  ÂËŃĺâ˙˙˙őÉËŃĺâ˙˙˙őÉË  ÔmMu
u
uĘ  Ő×˙˙˙ú    Cu   isXrayWrapper   wrappedJSObject	   JSON   parse   stringify   cycleBreaker)   console-api-profiler!   profiler-started!   profiler-stopped'   _handleConsoleEvent   ˙˙˙˙   M   ProfilerActor.prototype.observe</replyĹ                 R       š   
   +                                       details   Ń  É             A5    ¸   
Y   A5   ]   =   ]      ]      ]      ]   T  ]   	: QŇËĘĘĘĘČ  Ę  Ń	 	   conn	   send   actorID	   from#   eventNotification	   type   subject   topic	   data   details   ˙˙˙˙   W   ProfilerActor.prototype._handleConsoleEventÁ                    š      ]                                     subject	   data	   args   profileLabel  á  V!  ĺ       	      T  5       QV   Ů   >   V   >7=      
;     QT  5   =      {  Q  QA¸   
:  5     Q5     QQV      (A¸   	
:  QY   V  ]   
>]   ČY   V  ]   
V  ]   ČČT  5   =      1  QA¸   
:    QV  V  0   
QV  ČČÍËŕ  ďÎŃ
ČÚ
Ě
É
ÉÉÍÎË
Č
ČÎČ )    arguments   length      undefined   action   profile   onIsActive   isActive   currentTime   onStartProfiler   profileLabel   profileEnd   onGetProfile    ˙˙˙˙         isActive       currentTime        ˙˙˙˙         details        M   t   ˙˙˙˙˙˙˙˙Ľ          ˙˙˙˙ż             Ő   +   ˙˙˙˙˙˙˙˙ţ            ˙˙˙˙      cycleBreaker                        š                                             key   value  ä!  @"              T  =       ;   T É    wrappedJSObject   undefined   ˙˙˙˙      getElapsedTime                  z       š      (                                   ą"  8%              ;    ×˙   [  Q   Q;   ¸   
:     Q;   â   V   :   Qn    ;   ¸   
:  V  1    QČ;   ¸   
:  ;     ČŃĚ
ČÎČŃĎĚĘ! '   gProfilingStartTime#   nsIProfilerModule   getProfileData)   findOldestSampleTime	   Date   now    ˙˙˙˙          profile       lastSampleTime           T   ˙˙˙˙   ˙˙˙˙   )   findOldestSampleTime              m       š      6                                    profile%   firstThreadSamples Ă%  Ł&  ,            T  5    >75      QV   Ů   ?  Q    9m=   V   V  7q   V   V  75   ČV  #?W  QQăV  >˙˙˙ÄČÔĐ 9+A /ĎŃ /6Î 1 /.Î(    threads   samples   length	   time    ˙˙˙˙         i        *   A          M   ˙˙˙˙˙˙˙˙O             ˙˙˙˙   -   checkProfilerConsumers                  7       š                                         '  Ž'  9            ;    >   /   Q=      Q;   ¸   
=   V   : QČËĘÚ : %   gProfilerConsumersq   Somehow the number of started profilers is now negative.   DevToolsUtils   reportException   ProfilerActor    ˙˙˙˙          msg           )   ˙˙˙˙