ç¿s¹                  Z   ¹   =   Ã                         4       0     resource://gre/modules/devtools/server/actors/director-registry.js                                           	                           "      ';   â   =   :     Q;    5      Q5      Q5      Q5      QQ;   â   =   : 5      QQ=   
   	Q=      Q=      Q=      Q=      Q=      Q=      Qn   ;   ¸   
@: 1   Q;   Y       ]      ]      ]      ]      ]       ]   !0      Qn   ";   #R  1   "Q;      0   $Q;   5   %   ;   &â   &:  Q;   ;    ¸   (
Y   =   )]   *   ]   +   	]   ,;   â      
Y   C]   -: ]   .;   â      Y   Y   ;   â   >=   /: ]   0;   â   ?=   /: ]   1;   â   ?=   2: ]   3]   4Y   ;   â   =   5: ]   6]   7: ]   ;   â      Y   Y   ;   â   >=   /: ]   8]   4Y   ;   â   =   5: ]   6]   7: ]   ;   â      Y   Y   ;   â   =   9: ]   :]   7: ]    : 0   '   'Q;   ;    ¸   <
;   'Y      ]   +: 0   ;Q	 "pÊ  	  Ê	ÏÉÿÿÿýö*ÏÐËËËË"Ë(Ë#Ë ÒÉÿÿÿý"Ê*Ê?ÊPÊYÊ`ÊgÕ"pËÉÿÿÿýrÐ  ÊÎ  Ä  ÊÖÊÊÊ  ÖÏ  ÖÈ  æÏ  õÐ
ÈÐÈÐÍÏ	Í  æÈ ÏÐ
ÍÏ	Í È ÏÏÍ È  Ê>ÎÿÿÿÝ  ÛÊ   É '    protocol   require1   devtools/server/protocol   method   Arg   Option   RetVal   DebuggerServer)   devtools/server/main5   ERR_DIRECTOR_INSTALL_TWICES   Trying to install a director-script twice5   ERR_DIRECTOR_INSTALL_EMPTYU   Trying to install an empty director-script=   ERR_DIRECTOR_UNINSTALL_UNKNOWN[   Trying to uninstall an unkown director-scriptE   ERR_DIRECTOR_PARENT_UNKNOWN_METHOD;   Unknown parent process methodQ   ERR_DIRECTOR_CHILD_NOTIMPLEMENTED_METHODQ   Unexpected call to notImplemented methodG   ERR_DIRECTOR_CHILD_MULTIPLE_REPLIESg   Unexpected multiple replies to called parent method7   ERR_DIRECTOR_CHILD_NO_REPLYW   Unexpected no reply to called parent method!   gDirectorScripts   Object   create!   DirectorRegistry   exports   install   uninstall   checkInstalled   get	   list   clear-   gTrackedMessageManager   Set%   setupParentProcess!   isInChildProcess#   setupChildProcess+   DirectorRegistryActor   ActorClass#   director-registry   typeName   initialize   destroy   oneway   finalize   string   scriptId   scriptCode   nullable:json   scriptOptions   request   boolean   success   response   scritpId   array:string   directorScripts+   DirectorRegistryFront   FrontClass   ÿÿÿÿ   A   exports.DirectorRegistry.installÁ                 [       ¹      "                           
            id   scriptDef    =  *             T  ;    q   ;   ¸   
;   T  : QBT     ;   ¸   
;   T  : QB;    T  T 9QCÉØ0Ø5Í7 !   gDirectorScripts   console   error5   ERR_DIRECTOR_INSTALL_TWICE5   ERR_DIRECTOR_INSTALL_EMPTY   ÿÿÿÿ   E   exports.DirectorRegistry.uninstallÁ                 5       ¹                                             id Ø    ?             T  ;    q   ;    T  /QC;   ¸   
;   T  : QBÉÊCFØH !   gDirectorScripts   console   error=   ERR_DIRECTOR_UNINSTALL_UNKNOWN   ÿÿÿÿ   O   exports.DirectorRegistry.checkInstalledÁ                        ¹      
                                       id 0	  e	  P             A¸    
:  ¸   
T  : >ÈÓ 	   list   indexOf   ÿÿÿÿ   9   exports.DirectorRegistry.getÁ                        ¹                                             id ú	  %
  Y             ;    T  7Ê !   gDirectorScripts   ÿÿÿÿ   ;   exports.DirectorRegistry.listÁ                          ¹      	                                     }
  ¯
  `             ;    ¸   
;   : Ñ    Object	   keys!   gDirectorScripts   ÿÿÿÿ   =   exports.DirectorRegistry.clearÁ                          ¹      
                                       4  g             n    ;   ¸   
@: 1    QÒÉ !   gDirectorScripts   Object   create   ÿÿÿÿ   %   setupParentProcess                      ¹   
   ?                                         mm   childIDA   handleMessageManagerDisconnected%   handleChildRequest Æ    r             T  5       Q5   W   QQ    W  Q      Q;   ¸   
   :    ;   ¸   
   : Q   ¸   
=      : Q;   ¸   
=   	V   V  : QHÿÿÿñÛ  Ê  ËrtÑwÕzÚ|Þ        mm   childID-   gTrackedMessageManager   has   add%   addMessageListener?   debug:director-registry-request   DebuggerServer	   once1   disconnected-from-child:   ÿÿÿÿ   A   handleMessageManagerDisconnected               k       ¹      #                                       evt      disconnected_mm  ¯  5               T 5    W   QQV      ID   Q;   ¸   
   :     ;   ¸   
   : Q   ¸   
=      : QJÿÿÿçÏÐ"ÑÕÚP    mm-   gTrackedMessageManager   has   delete+   removeMessageListener?   debug:director-registry-request   ÿÿÿÿ   %   handleChildRequest                        ¹   
   .                                       msg T                 T  5    5   x=   y   =   y   )z   4;   ¸   
T  5    5   >7: ;   ¸   
:  ;   ¸   
;   T  5    5   : Q;   	;   R pÍhzu
uÊ  ÛÌâË 	   json   method   get	   list!   DirectorRegistry	   args   console   errorE   ERR_DIRECTOR_PARENT_UNKNOWN_METHOD   Error   ÿÿÿÿ   #   setupChildProcess                ð       ¹      b                                       notImplemented#   callParentProcess   sendSyncMessage=  ù                   W   Q   W  Q;    5   5      QQ;    ¸   
Y   =   ]   =   ]   : Q;   V   ¸   

@=   	: 0   	Q;   V   ¸   

@=   : 0   Q;   V   ¸   

@=   : 0   Q;   V  ¸   

@=   : 0   Q;   V  ¸   

@=   : 0   Q  ¯Ê  ´Ê  ×ÑÊÊ  ¡  ¦ÖÉÖÉÖÉÖÉÖÉ  ´  Ã    DebuggerServer)   parentMessageManager   sendSyncMessage   setupInParentQ   devtools/server/actors/director-registry   module%   setupParentProcess   setupParent!   DirectorRegistry   install	   bind   uninstall   clear   get	   list   ÿÿÿÿ      notImplemented                 ,       ¹                                             method     ¯             ;    ¸   
;   T  : Q;   â   ;   : pØÏ0    console   errorQ   ERR_DIRECTOR_CHILD_NOTIMPLEMENTED_METHOD   Error   ÿÿÿÿ   #   callParentProcess              ¯      ¹   	   <                                       method	   args   reply  9  ö  ´             àU Q      =    Y   T  ]   T ]   : W   QV   Ù   >H   2;   ¸   
;   : Q;   â   ;   : p   =V   Ù   ?   -;   ¸   
;   : Q;   â   ;   : pV   >7ÕÈÈ  µÈ  ºË-ÕÏÉËÕÏ ?   debug:director-registry-request   method	   args   length   console   error7   ERR_DIRECTOR_CHILD_NO_REPLY   ErrorG   ERR_DIRECTOR_CHILD_MULTIPLE_REPLIES   ÿÿÿÿ   S   exports.DirectorRegistryActor<.initializeÁ                 $       ¹                                          	   conn   parentActor  #  v  Î             ;    5   5   5   ¸   
AT  l Qã5    protocol   Actor   prototype   initialize	   call   ÿÿÿÿ   M   exports.DirectorRegistryActor<.destroyÁ                 0       ¹                                          	   conn   ã  Ñ             ;    5   5   5   ¸   
AT  l QA¸   
:  QãÌ    protocol   Actor   prototype   destroy	   call   finalize   ÿÿÿÿ   Q   exports.DirectorRegistryActor<.finalize<Á                          ¹                                               #  Ö                  ÿÿÿÿ   O   exports.DirectorRegistryActor<.install<Á                      ¹   	   @                           
            id      scriptCode   scriptOptions      æ             T 5    W   Q5   W  QQT   D   QT  Ù   >H   ;   â   =   : pV       ;   â   =   : p;   ¸   
T  Y   T  ]   V   ]    V  ]   : >ÿÿÿáÚÔÏÏÔÈÉÉ  ð    scriptCode   scriptOptions   length   Error?   director-script id is mandatoryO   director-script scriptCode is mandatory!   DirectorRegistry   install   scriptId   ÿÿÿÿ   S   exports.DirectorRegistryActor<.uninstall<Á                        ¹      	                                       id ª  ß              ;    ¸   
T  : Ï !   DirectorRegistry   uninstall   ÿÿÿÿ   I   exports.DirectorRegistryActor<.list<Á                          ¹      	                                     ³  ß              ;    ¸   
:  Ì !   DirectorRegistry	   list   ÿÿÿÿ   S   exports.DirectorRegistryFront<.initializeÁ               N       ¹                                  	            client   +   directorRegistryActor  Ý    !            T 5    W   QQ;   5   5   5   ¸   
AT  Y   V   ]   l QA¸   
A: Q:ÿÿÿåÏäÉ "Í +   directorRegistryActor   protocol   Front   prototype   initialize	   call   actor   manage