ç¿s¹                £     ¹   '   »                          %       0     resource://gre/components/FormAutofillContentService.js     ã&         	                           ;   5       Q5      Q5      Q5      QQ;   ¸   	
=   
: Q;   ¸   	
=   : Q;   ¸   
A=   =   : Q;   ¸   
A=   =   : Q;   Y   @]   @]   @]   ;   ¸   
   : ]   ;   ¸   
   : ]      ]      ]      ]   0   Q;   Y   ;   ¸   
=   : ]    ;   ¸   !
Z  ;   5   "`   : ]   #   ]   $0   QA;   ¸   &
Z  ;   `   : 0   %QÊ	 	öDÕ1Õ3ÒMÒE "Ê&+:?ÑÈ\ÑÈ  Ê  äÊ  ÷Ð  ü ÊÑ	ÈÐ'ÎÿÿÿéÈÐÑ5ÉÿÿÿßÉ>    Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   FormAutofillO   resource://gre/modules/FormAutofill.jsm	   Task?   resource://gre/modules/Task.jsm   FormHandler   prototype	   form   window   fieldDetails   async3   handleRequestAutocomplete5   promiseRequestAutocomplete#   collectFormFields%   autofillFormFields   waitForTick5   FormAutofillContentService   IDM   {ed9c2c3c-3f86-4ae5-8e31-10f71b0f19e6}   classID   generateQI;   nsIFormAutofillContentService   QueryInterface'   requestAutocomplete   NSGetFactory)   generateNSGetFactory   ÿÿÿÿ      FormHandler                         ¹                                              aForm   aWindow  Ç  $               AT  0    QAT 0   QAZ   0   QÊÊË 	   form   window   fieldDetails   ÿÿÿÿ   a   FormHandler.prototype.handleRequestAutocomplete<Á                 0      ¹      H                                   .generator   .genrval   reason   event#  o  ?             É   Ê   ÐQ=       QY   A¸   
:  ]   B]      Ë  Ð   Q   5Æ       Qv   Q;   ¸   
   : QÈÇ       =      )A5   5   =   	Y   C]   
R    .A5   5   =   Y   C]   
   ]   R    QY   A¸   
:  ]   B]      Ë  ÐQA5   ¸   
   : QY   ]   C]      ÌQ?ÌCË,ÍãÓÝKË$Ö:ÿÿÿØÈÑ;;ÊMÉPÍÙÖ    5   promiseRequestAutocomplete   value	   done   Cu   reportError   success   window   Event   autocomplete   bubbles-   AutocompleteErrorEvent#   autocompleteerror   reason   waitForTick	   form   dispatchEvent    ÿÿÿÿ          ex           0       N   #   ÿÿÿÿ
   <   ÿ      ÿÿÿÿ   c   FormHandler.prototype.promiseRequestAutocomplete<Á                       ¹      c                         +            .generator   .genrval	   data   rootDocShell   frameMMA   promiseRequestAutocompleteResult   resultÐ  L  \             É   Ê   ÐQA¸    
:     Q       !Y   =   ]   C]      ÌA5   ¸   
;   5   : ¸   
;   5   	: 5   
¸   
;   5   	:    Q   ¸   
;   5   : ¸   
;   5   :    Q;   A    R    Q   ¸   
=      : QY      ]   B]      Ë  Ð   Q   5      !Y   =   ]   C]      ÌA¸   
   : QY   =   ]   C]      ÌY   ]   C]      Ì  \ÌÈÉÜc×ÊÊcÏfÊcÉgÖ
ÊÊgÉnÌ#ÉÚåÊÜÑÜ #   collectFormFields   disabled   value	   done   window   QueryInterface   Ci+   nsIInterfaceRequestor   getInterface   nsIDocShell)   sameTypeRootTreeItem;   nsIContentFrameMessageManager   Promise!   sendAsyncMessageA   FormAutofill:RequestAutocomplete   canceled   cancel%   autofillFormFields   success   ÿÿÿÿ   §   FormHandler.prototype.promiseRequestAutocomplete</promiseRequestAutocompleteResult<Å                         ¹                                      D      resolve   reject  »  n                 ¸    
=       : QÖoz %   addMessageListenerM   FormAutofill:RequestAutocompleteResult   ÿÿÿÿ      onResult                 ]       ¹                                             aMessage   ³  p                 ¸    
=   : Q=   T  5   q   !   T  5   5   : Q      T  5   : Q
Ñq
uÎÜÒ +   removeMessageListenerM   FormAutofill:RequestAutocompleteResult   exception	   data
        ÿÿÿÿ   O   FormHandler.prototype.collectFormFieldsÁ                m      ¹      Ò                        7             autofillDataß                  Y   Z   ]       QA5   5   - Á
:    Q  m5   W  QÆ     Q  Q  Q   QV  ;   5   r    ÈÇ  ×V  ¸   
:     Q   5    D   "Qf   ¸   
   5   : ×ÿ   ÈÇ  A5   	¸   

A   :    @ÈÇÈ A5   	¸   
Y      5   ]      5   ]      5   ]      5   ]   V  ]   : QV   5    ¸   
A   :   QV      ?Y      5   ]   Z   ]   W  QV   5    ¸   
V  : QV  5   ¸   
A   :   QV      ?Y      5   ]   Z   ]   W  QV  5   ¸   
V  : QY      5   ]      5   ]     QV  5   ¸   
V  : QÈÇãQ¸   
:  5   ÿÿýÔÈ V   ÎÚ8 1ï
ÐB
ËÉ
çBÓ
ÉÒÏÏÏÏÉ  «  ´
Ð  ´È

Ï
ÎØ
Ð  ¿È

Ï
ÎØ
ÏÔÚ  ËÿÿÿìÒ  Ñ    sections	   form   elements   value   Ci-   nsIDOMHTMLInputElement'   getAutocompleteInfo   fieldName   indexOf   fieldDetails	   some	   push   section   addressType   contactType   element	   find	   name   addressSections   fields	   next	   done    ÿÿÿÿ         element                  	   info      section       addressSection       field                         on      off                        S   FormHandler.prototype.collectFormFields/<å                 `       ¹                                             f >  9  ¤             T  5       5    E   KQT  5      5   E   2QT  5      5   E   QT  5      5   &ÙÙÙÔC    section   addressType   contactType   fieldName         a   FormHandler.prototype.collectFormFields/section<å                        ¹                                             s ë    µ             T  5       5   +Ô 	   name   section         o   FormHandler.prototype.collectFormFields/addressSection<å                        ¹                                             s >  d  À             T  5       5    -Ô!    addressType   2   1      (   <  ÿÿÿÿ   G             r             ¿             ã         ÿÿÿÿå            ÿÿÿÿ   Q   FormHandler.prototype.autofillFormFieldsÁ                       ¹      4                                    aAutofillResult Ù   &#  ä       	      T  5    - Á
:  Æ       Q   ]m5      Q  QA5   ¸   
A   :   QV      È   V  5      5   0   QÈãQ¸   
:  5   ÿÿÿÈÇ Ý8qØ
Í  çÈ  ì
AÚ  åËÿÿÿîÓ+    fields   value   fieldDetails	   find   element	   next	   done    ÿÿÿÿ          field                    fieldDetail             k   FormHandler.prototype.autofillFormFields/fieldDetail<å                 `       ¹                                             f ´!  ¶"  è             T  5       5    E   KQT  5      5   E   2QT  5      5   E   QT  5      5   'ÙÙÙÔE    section   addressType   contactType   fieldName   "   q          }   ÿÿÿÿ   0   J           [            ÿÿÿÿ   C   FormHandler.prototype.waitForTickÁ                          ¹                                          #  +$  ÷             ;        R Ë    Promise   ÿÿÿÿ   G   FormHandler.prototype.waitForTick/<Á                 -       ¹                                             resolve Ã#  %$  ø             ;    5   5   ¸   
T  ;   5   5   : QìJ    Services   tm   currentThread   dispatch   Ci   nsIThread   DISPATCH_NORMAL   ÿÿÿÿ   5   FormAutofillContentService                          ¹                                             ó$  ù$               '    ÿÿÿÿ   q   FormAutofillContentService.prototype.requestAutocompleteÁ                 /       ¹                                             aForm   aWindow  ù%  &  
            ;    T  T R ¸   
:  ¸   
;   5   : QàÊ :    FormHandler3   handleRequestAutocomplete   catch   Cu   reportError