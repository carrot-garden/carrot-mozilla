ç¿s¹                Ê  #   ¹   *   Â       
                   $       0     resource://gre/modules/PlacesSearchAutocompleteProvider.jsm     k         	                            Af    0    Q;   5      Q5      Q5      Q5   	   QQ;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q;   ¸   

=   : Q=      QY   @]   @]   @]      ]   B]      ]      ]      ]   ;   ¸   
Z  ;   5   `   ;   5   `  : ]      Qn   @1   QA;   !¸   "
Y      ]   #;   $¸   %
   : ]   &;   $¸   %
   : ]   ';   $¸   %
   : ]   (   	]   ): 0    Qu	Ì?öDÕ0Õ1Õ-Õ3Ë$&Ê<>ÊHÊ[ÊqÐ'Î)ÎqÎ(uÌwÒ}Ê  ÑÈ  ­ÑÈ  ´ÑÈ  ÎÊw(É  Ù !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importE   resource://gre/modules/Promise.jsmG   resource://gre/modules/Services.jsm?   resource://gre/modules/Task.jsmK   resource://gre/modules/XPCOMUtils.jsm'   SEARCH_ENGINE_TOPIC=   browser-search-engine-modifiedE   SearchAutocompleteProviderInternal   priorityMatches   aliasMatches   defaultMatch   initialize   initialized   observe   _refresh   _addEngine   XPCOMUtils   generateQI   nsIObserver1   nsISupportsWeakReference   QueryInterface-   gInitializationPromiseA   PlacesSearchAutocompleteProvider   Object   freeze#   ensureInitialized	   Task   async!   findMatchByToken!   findMatchByAlias   getDefaultMatch%   parseSubmissionURL                  A   PlacesSearchAutocompleteProvider                  ÿÿÿÿ   [   SearchAutocompleteProviderInternal.initializeÁ                          ¹                                          "  6  &             ;    A    R Ì9    Promise   ÿÿÿÿ   _   SearchAutocompleteProviderInternal.initialize/<Å                        ¹      	                                D      resolve   reject>  0  '             ;    5   ¸   
A    : QÛ8	    Services   search	   init   ÿÿÿÿ   c   SearchAutocompleteProviderInternal.initialize/</<Å                       ¹   
   3                                    status p  (  (             ;    ¸   
T  :        ;   =   R : QA¸   
:  Q;   5   ¸   
A;   C: QAC0   	Q   :  Q   &   Qv   Q   V   : QÈ    Ï
Ñÿÿÿù-;/
Ì1
Ü3
È
ÏÌ
Õ	    Components   isSuccessCode   ErrorI   Unable to initialize search service.   _refresh   Services   obs   addObserver'   SEARCH_ENGINE_TOPIC   initialized    ÿÿÿÿ          ex         1   ?       q      ÿÿÿÿ   ÿÿÿÿ   U   SearchAutocompleteProviderInternal.observeÁ                 >       ¹                                             subject   topic	   data   d  %  >             T x=    y   (=   y   =   y   =   y   
z   A¸   
:  Qk:u
u
u
uÊ@Ì    engine-added   engine-changed   engine-removed   engine-current   _refresh   ÿÿÿÿ   W   SearchAutocompleteProviderInternal._refreshÁ                 ¢       ¹      *                                       currentEngine=  	  H             AZ   0    QAZ   0   QA@0   Q;   5   5      QV      FAY   V   5   ]   V   5      V   5   5   	   @]   
0   Q;   5   ¸   
:  ¸   
A    : QËËÈMÔOÎÉäXåE    priorityMatches   aliasMatches   defaultMatch   Services   search   currentEngine	   name   engineName   iconURI	   spec   iconUrl#   getVisibleEngines   forEach   ÿÿÿÿ   [   SearchAutocompleteProviderInternal._refresh/<å                        ¹                                             e i	  	  X             A¸    
T  : 5Ï    _addEngine   ÿÿÿÿ   [   SearchAutocompleteProviderInternal._addEngineÁ               Ü       ¹      E                                       engine   domain  	    [             T  5       ZA5   ¸   
Y   T  5    ]    T  5   ]   T  5      T  5   5      @]   : QT  ¸   
:     QV      cA5   	¸   
Y   V   ]   
T  5   ]   T  5   ]   T  5      T  5   5      @]   : QÈÒÍÍÈÝ]dÊ	ÈÒÉjÍÍÈÝfm	    alias   aliasMatches	   push	   name   engineName   iconURI	   spec   iconUrl   getResultDomain   priorityMatches   token   searchForm   url   ÿÿÿÿ   q   this.PlacesSearchAutocompleteProvider<.ensureInitializedÁ                   ,       ¹                                           ï    }             ;        n    ;   ¸   
:  1    Q;    ÑÉ -   gInitializationPromiseE   SearchAutocompleteProviderInternal   initialize   ÿÿÿÿ   q   this.PlacesSearchAutocompleteProvider<.findMatchByToken<Á                |       ¹      &                         	      D     searchToken   .generator   .genrval~  Ï               É   Ê   ÐQY   A¸    
:  ]   B]      Ë  ÐQY   ;   5   ¸   
A    : ]   C]      ÌY   ]   C]      Ì    ÌÍÙÖ  ÕY #   ensureInitialized   value	   doneE   SearchAutocompleteProviderInternal   priorityMatches	   find   ÿÿÿÿ   u   this.PlacesSearchAutocompleteProvider<.findMatchByToken</<å                        ¹                                             m ¥  É               T  5    ¸   
   : 8Ø    token   startsWith
   0      ÿÿÿÿ   q   this.PlacesSearchAutocompleteProvider<.findMatchByAlias<Á                |       ¹      #                         	      D     searchToken   .generator   .genrvalq  5  ­             É   Ê   ÐQY   A¸    
:  ]   B]      Ë  ÐQY   ;   5   ¸   
A    : ]   C]      ÌY   ]   C]      Ì  ­ÌÍÙÖ  °ÕP #   ensureInitialized   value	   doneE   SearchAutocompleteProviderInternal   aliasMatches	   find   ÿÿÿÿ   u   this.PlacesSearchAutocompleteProvider<.findMatchByAlias</<å                        ¹                                             m   /  ±             T  5       8Ï    alias
   0      ÿÿÿÿ   o   this.PlacesSearchAutocompleteProvider<.getDefaultMatch<Á                  l       ¹                                            .generator   .genrvala  Ê  ´             É   Ê   ÐQY   A¸    
:  ]   B]      Ë  ÐQY   ;   5   ]   C]      ÌY   ]   C]      Ì  ´ÌÍÙá7 #   ensureInitialized   value	   doneE   SearchAutocompleteProviderInternal   defaultMatch
   0      ÿÿÿÿ   s   this.PlacesSearchAutocompleteProvider<.parseSubmissionURLÁ               r       ¹      $                                       url   parseUrlResult   e  Î             ;    5       ;   =   R p;   5   ¸   
T  :    QV   5   E   ,QY   V   5   5   ]   	V   5   
]   
ËËÔÈÔÓÏ E   SearchAutocompleteProviderInternal   initialized   ErrorO   The component has not been initialized.   Services   search%   parseSubmissionURL   engine	   name   engineName   terms