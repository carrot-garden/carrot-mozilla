ç¿s¹                Â  -   ¹   /   Ò                         ^       0     resource://gre/modules/devtools/server/actors/gcli.js     w                                            n    ;   â   =   : 5    1    Qn   ;    ¸   
=   Y   : 5   1   Q;   ¸   
A=   =   : Q;   ¸   
A=   	=   
: Q;   ¸   
A=       : Q;   ¸   
A=      : Qn   ;   â   =   : 1   Qn   ;   â   =   : 1   Qn   ;   5   1   Qn   ;   5   1   Qn   ;   5   1   Qn   ;   5   1   Qn   ;   ;   ¸   
Y   =   ]      ]   ;   â      Y   Y   ]   ;   â   =   : ]   : ]   ;   â      Y   Y   ;   â   >=    : ]   !]   ;   â   =   : ]   : ]   ";   â      Y   Y   ;   â   >=    : ]   !;   â   ?=   #: ]   $;   â   ×=   #: ]   %]   ;   â   =   : ]   : ]   &;   â      Y   Y   ;   â   >=    : ]   !;   â   ?=    : ]   ']   ;   â   =   : ]   : ]   (;   â      Y   Y   ;   â   >=    : ]   !;   â   ?=    : ]   ']   ;   â   =    : ]   : ]   );   â      Y   Y   ;   â   >=    : ]   !;   â   ?=    : ]   ']   ;   â   =    : ]   : ]   *;   â      	Y   Y   ;   â   >=    : ]   !;   â   ?=    : ]   ';   â   ?=    : ]   +]   ;   â   =   : ]   : ]   ,: 0   1   Q;   ;   ¸   .
;   Y      
]   : 0   -Q"ÔÎÿÿÿýÛÎÿÿÿý
Ò
QÒWÛÛÔÉÿÿÿýÔÉÿÿÿýÕÕÕÕ"ÛÊ%Ê7Ï9ÊÏ
È7	ÈEÏIÐÍMÏ
ÈEÈSÏWÐÈÐÈÑÍ]Ï
ÈS	ÈgÏsÐÈÐÍxÏ
ÈgÈÏ  ÐÈÐÍÏ
ÈÈ  Ï  ÐÈÐÍÏ
È  È  £Ï  ¼ÐÈÐÈÐÍÏ
È  £È"$Îÿÿÿé  ÆÛÊ  ÆÉ  Ï    Cu   require   chrome   XPCOMUtils   importK   resource://gre/modules/XPCOMUtils.jsm-   defineLazyModuleGetter   consoleW   resource://gre/modules/devtools/Console.jsm   CommandUtilsc   resource:///modules/devtools/DeveloperToolbar.jsm!   defineLazyGetter   Requisition   centralCanon	   util   gcli/util/util   protocol1   devtools/server/protocol   method   Arg   Option   RetVal   GcliActor   exports   ActorClass	   gcli   typeName   initialize   request	   json   response   specs   string   typed   execute   number   start	   rank   state   param   typeparse   typeincrement   typedecrement   action   selectioninfo   GcliFront   FrontClass   ÿÿÿÿ                              ¹      
                                        Ð               ;    â    =   : 5   ÏÉ     require   gcli/cli   Requisition   ÿÿÿÿ                              ¹      
                                       M               ;    â    =   : 5   ÏÉ/    require-   gcli/commands/commands   centralCanon   ÿÿÿÿ   ;   exports.GcliActor<.initializeÁ                      ¹      1                                    	   conn   tabActor   browser   environment  Ã  W  %             ;    5   5   5   ¸   
AT  l QAT 0   QT 5      QY   V   5   ]   V   5   	]   
V   5   ]   V   5   ]     QA;   Y   ;   ]   R 0   QãÊÍ*ÎÎÎÓ1Ì%ÊÿÿÿîÉ&    protocol   Actor   prototype   initialize	   call   tabActor   browser   ownerGlobal   chromeWindow   ownerDocument   chromeDocument   contentWindow   window   contentDocument   document   requisition   Requisition   env   environment   ÿÿÿÿ   3   exports.GcliActor<.specs<Á                          ¹      	                                     ·  ô  7             A5    5   ¸   
:  Ò)    requisition   canon   getCommandSpecs   ÿÿÿÿ   7   exports.GcliActor<.execute<Á                 $       ¹                                            typed V  Ï  E             A5    ¸   
T  : ¸   
    : ÐÓH    requisition   updateExec	   then   ÿÿÿÿ   ;   exports.GcliActor<.execute</<Á                        ¹      	                                       output   É  F             T  ¸    
:  Ê    toJson   ÿÿÿÿ   3   exports.GcliActor<.state<Á                 %       ¹                                      D      typed   start	   rank ¬	  >
  S             A5    ¸   
T  : ¸   
A    : ÐÔV    requisition   update	   then   ÿÿÿÿ   7   exports.GcliActor<.state</<Å                          ¹      	                                     ò	  8
  T             A5    ¸   
      : ×+    requisition   getStateData   ÿÿÿÿ   ;   exports.GcliActor<.typeparse<Á                 $       ¹                                      D      typed   param £  1  g             A5    ¸   
T  : ¸   
    : ÐÓr    requisition   update	   then   ÿÿÿÿ   ?   exports.GcliActor<.typeparse</<Á                  E       ¹                                             assignmentë  +  h             A5    ¸   
  :    Q;   ¸   
   5   : ¸   
    : 
ÒÉkÖÓq	    requisition   getAssignment   promise   resolve   predictions	   then   ÿÿÿÿ   C   exports.GcliActor<.typeparse</</<Á                 <       ¹                                             predictions q  #  k             Y      ¸    
:  ¸   
:  ]      5   ]   T  ]   
ÌÒ
Ï
É
    getStatus   toString   status   message   predictions   ÿÿÿÿ   C   exports.GcliActor<.typeincrement<Á                 $       ¹                                      D      typed   param   ³               A5    ¸   
T  : ¸   
    : ÐÓ      requisition   update	   then   ÿÿÿÿ   G   exports.GcliActor<.typeincrement</<Á                  A       ¹                                
             assignmentÌ  ­               A5    ¸   
  :    QA5    ¸   
   : ¸   
    : 
ÒÉÒÓ	    requisition   getAssignment   increment	   then   ÿÿÿÿ   K   exports.GcliActor<.typeincrement</</<Á                   ,       ¹      
                                     P  ¥                  5    @   ;         5    5   Ì
ß@    arg   undefined	   text   ÿÿÿÿ   C   exports.GcliActor<.typedecrement<Á                 $       ¹                                      D      typed   param ¯  Þ               A5    ¸   
T  : ¸   
    : ÐÓ      requisition   update	   then   ÿÿÿÿ   G   exports.GcliActor<.typedecrement</<Á                  A       ¹                                
             assignment÷  Ø               A5    ¸   
  :    QA5    ¸   
   : ¸   
    : 
ÒÉÒÓ	    requisition   getAssignment   decrement	   then   ÿÿÿÿ   K   exports.GcliActor<.typedecrement</</<Á                   ,       ¹      
                                     {  Ð                  5    @   ;         5    5   Ì
ß@    arg   undefined	   text   ÿÿÿÿ   C   exports.GcliActor<.selectioninfo<Á               è       ¹      W                                D      commandName   paramName   action   command	   type    Ù  £             A5    5   ¸   
T  : W   QV   @   ;   =   T  =   R p   QV   5   ¸   
    : Q   @   *;   =      =   	T  =   R pT x=   
y   =   y   z   /   ¸   

;   :    ¸   
;   : ;   =   R pÕ
ÈÕÙ  ¯×Ê  °kSu
uÊ  µÑÑË    requisition   canon   getCommand   Error'   No command called '   '   params   forEach+   No parameter called '   ' in '   lookup	   data   contextQ   Action must be either 'lookup' or 'data'   ÿÿÿÿ   G   exports.GcliActor<.selectioninfo</<Á                 "       ¹      
                                       param   [  ª             T  5       H   T  5      QÎÎ 	   name	   type   ÿÿÿÿ   ;   exports.GcliFront<.initializeÁ                 @       ¹                                 	            client   tabForm  K  q  Ç             ;    5   5   5   ¸   
AT  l QAT 5   0   QA¸   
A: QãÏÍ    protocol   Front   prototype   initialize	   call   actorID   gcliActor   manage