ç¿s¹                L     ¹                                #            resource://gre/components/FormHistoryStartup.js     ½
         	                  ;   5       Q;   5      Q;   5   ¸   
=   : Q;   5   ¸   
=   : Q;   	¸   

A=   =   : Q;   	¸   

A=   =   : Q;   Y   ;   ¸   
=   : ]   ;   	¸   
Z  ;   5   `   ;   5   `  ;   5   `  : ]      ]   B]      ]      ]   6   QA;   	¸   
Z  ;   `   : 6   QÊ	ÐÐÚAÚ?ÒLÒQ!ÊÑ	ÈÐÎÎÎÈÊ/1ÊDÐZ\Ñ5ÉÿÿÿßÉ6    Cc   Components   classes   Ci   interfaces   utils   importK   resource://gre/modules/XPCOMUtils.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils-   defineLazyModuleGetter   FormHistoryM   resource://gre/modules/FormHistory.jsm!   AutoCompleteE10SW   resource://gre/modules/AutoCompleteE10S.jsm%   FormHistoryStartup   prototype   IDM   {3A0012EB-007F-4BB8-AA81-A07385F77A25}   classID   generateQI   nsIObserver1   nsISupportsWeakReference/   nsIFrameMessageListener   QueryInterface   observe   inited	   init   receiveMessage   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ   %   FormHistoryStartup                          ¹                                              Â  È                    ÿÿÿÿ   I   FormHistoryStartup.prototype.observeÁ                        ¹   
   =                                        subject   topic	   data   È  l               T x=    y   2=   y   ==   y   3=   y   >=   y   Iz   P;   ¸   
:  Q   @;   ¸   
:  Q   +;   ¸   
:  Q   A¸   	
:  Q   k  u
!u
u
%u
(uÊÐXÐXÐXÌX    nsPref:changed   idle-daily-   formhistory-expire-now+   profile-before-change)   profile-after-change   FormHistory   updatePrefs!   expireOldEntries   shutdown	   init   ÿÿÿÿ   C   FormHistoryStartup.prototype.initÁ                 Ì       ¹      4                                         messageManager  ]  1             A5       AC6    Q;   5   ¸   
=   AC: Q;   5   ¸   
A=   C: Q;   5   ¸   
A=   C: Q;   5   	¸   

;   5   :    QV   ¸   
=   C: QV   ¸   
=   A: QV   ¸   
=   A: QÈ7Ü:ÜÜ=ÑÊ=È?ÕÕÕO    inited   Services   prefs   addObserver#   browser.formfill.   obs+   profile-before-change-   formhistory-expire-now   CcG   @mozilla.org/globalmessagemanager;1   getService   Ci3   nsIMessageListenerManager   loadFrameScript]   chrome://satchel/content/formSubmitListener.js%   addMessageListener;   FormHistory:FormSubmitEntriesG   FormHistory:AutoCompleteSearchAsync   ÿÿÿÿ   W   FormHistoryStartup.prototype.receiveMessageÁ                       ¹   	   /                         
             message z  m
  D             T  5    x=   y   =   y   Vz   i  Q   QT  5      QV   ¸   
   :   Q;   ¸   
V  : QÈ   È;   ¸   
T  : Q   Èh~u
TuÊFÌÍÐ
ÈPÔYTÓXX 	   name;   FormHistory:FormSubmitEntriesG   FormHistory:AutoCompleteSearchAsync	   data   map   FormHistory   update!   AutoCompleteE10S   search    ÿÿÿÿ          entries       changes              i   FormHistoryStartup.prototype.receiveMessage/changes<Á                 +       ¹                                              entry 	  ®	  H             Y   =    ]   T  5   ]   T  5   ]   
ÊÍÎ 	   bump   op	   name   fieldname   value    $   J   ÿÿÿÿÿÿÿÿh          