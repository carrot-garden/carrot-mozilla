ç¿s¹                .  -   ¹   &   Ó                          '            resource://gre/modules/devtools/server/actors/eventlooplag.js                                     	   
         ;   â   =   : 5        Q5      QQ;   â   =   :    Q;   ¸   
=   : Q;   â   =   :    Q;   5   	   	Q5   
   
Q5      QQ;   â   =   :    Qn   ;   ;   ¸   
Y   =   ]   B]   Y   Y   =   ]   ;   
â   
>=   : ]   ]   ]   ;   	â   	    Y   Y   ]   Y   ;   â   =   : ]   ]   : ]   ;   	â   	   Y   Y   ]   Y   ]   : ]      ]      ]   ;   ¸    
Z  ;    5   !`   : ]   ": 6   o   Q;   ;   ¸   $
;   Y      ]   %: 6   #QÏÜÏÉÿÿÿýÕ3ÏÉÿÿÿýê Ï	ÉÿÿÿýÛÊÊÐÒ"Ï(ÊÏ	Í"	È0Ï6ÊÊ0È8Ê?ÊFÐ'ÎÿÿÿéÈ4ÎÿÿÿáIÛÊIÉO    Ci   Cu   require   chrome   Services   importK   resource://gre/modules/XPCOMUtils.jsm   protocol1   devtools/server/protocol   method   Arg   RetVal   events   sdk/event/core#   EventLoopLagActor   exports   ActorClass   eventLoopLag   typeName   _observerAdded   event-loop-lag	   type   number	   time   request   success   response   start	   stop   destroy   observe   XPCOMUtils   generateQI   nsIObserver   QueryInterface#   EventLoopLagFront   FrontClass   initialize   ÿÿÿÿ   C   exports.EventLoopLagActor<.start<Á                   F       ¹                                 	           ø  Á  "             A5        );   5   ¸   
A=   B: QAC6    Q;   5   ¸   
:  ÜÈ'Ñ.    _observerAdded   Services   obs   addObserver   event-loop-lag   appShell3   startEventLoopLagTracking   ÿÿÿÿ   A   exports.EventLoopLagActor<.stop<Á                   D       ¹                                 	           R    0             A5       (;   5   ¸   
A=   : QAB6    Q;   5   ¸   
:  QÛÈ5Õ-    _observerAdded   Services   obs   removeObserver   event-loop-lag   appShell1   stopEventLoopLagTracking   ÿÿÿÿ   E   exports.EventLoopLagActor<.destroyÁ                   -       ¹                                            B    8             A¸    
:  Q;   5   5   5   ¸   
Al QÌà, 	   stop   protocol   Actor   prototype   destroy	   call   ÿÿÿÿ   E   exports.EventLoopLagActor<.observeÁ                 (       ¹                                              subject   topic	   data   µ  S  ?             T =       ;   ¸   
A=    T : QÉBÙ*    event-loop-lag   events	   emit   ÿÿÿÿ   K   exports.EventLoopLagFront<.initializeÁ                 @       ¹                                 	             client	   form  ñ    J             ;    5   5   5   ¸   
AT  l QAT 5   6   QA¸   
A: QãÏÍ    protocol   Front   prototype   initialize	   call   actorID#   eventLoopLagActor   manage