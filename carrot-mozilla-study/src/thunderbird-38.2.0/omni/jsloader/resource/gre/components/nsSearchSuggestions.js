çżsš                ź  #   š   )   Ć       	                   $            resource://gre/components/nsSearchSuggestions.js              	                              &;   5       Q5      Q5      Q5      QQ;   ¸   	
=   
: Q;   ¸   	
=   : Q;   ¸   	
=   : Q;   ¸   
A=   =   : Q;   Y      ]      a   @]   ×]      ]      ]      ]      ]      ]   ;   ¸   
Z  ;   5   `   ;   5   `  : ]   6   Q;    Y   ;   ¸   !
=   ": ]   #;   5   Â=   $]   %6   Qn   &Z  ;    `   o   &QA;   ¸   (
;   &: 6   'QĘ	  Ŕ	  ËöDŐ3ŐAŐ1Ň
[ĘĘĘ+39Ę_Ę  Ę  §Ę  ˛Ę  ˇĐ'Î)Î  ˇÎ  ŔĘŃ	ČËĐÉĎ˙˙˙üŇÉ+    Cc   Ci   Cu   Cr   Components   classes   interfaces   utils   results   importK   resource://gre/modules/XPCOMUtils.jsmg   resource://gre/modules/nsFormAutoCompleteResult.jsmG   resource://gre/modules/Services.jsm   XPCOMUtils-   defineLazyModuleGetter5   SearchSuggestionControllerk   resource://gre/modules/SearchSuggestionController.jsm'   SuggestAutoComplete   prototype   _init!   _suggestionLabel   _listener   _historyLimit#   onResultsReturned   onResultsReady   startSearch   _triggerSearch   stopSearch   generateQI+   nsIAutoCompleteSearch/   nsIAutoCompleteObserver   QueryInterface3   SearchSuggestAutoComplete   IDM   {aa892eb4-ffbf-477d-9f9a-06c995ae9f27}   classID      serviceURL   component   NSGetFactory)   generateNSGetFactory   ˙˙˙˙   '   SuggestAutoComplete                          š                                            î                 A¸    
:  QĚ    _init   ˙˙˙˙   G   SuggestAutoComplete.prototype._initÁ                   )       š                                           9  ë               A;   A    R 6    QA5    A5   6   QÍÉŇ@ +   _suggestionController5   SearchSuggestionController   maxLocalResults   _historyLimit   ˙˙˙˙      SuggestAutoComplete.prototype._init/this._suggestionController<ĺ                        š                                              obj ~                  A¸    
T  : GĎ #   onResultsReturned   ˙˙˙˙   ]   SuggestAutoComplete.prototype._suggestionLabelÁ                 i       š                                                bundle   label                 ;    5   ¸   
=   :    QV   ¸   
=   :   Q;   ¸   
;   5   	=   
Y   V  ]   : QV  Ö	ČĐČŕJÉ˙˙˙ś    Services   strings   createBundle_   chrome://global/locale/search/search.properties#   GetStringFromName!   suggestion_label   Object   defineProperty'   SuggestAutoComplete   prototype!   _suggestionLabel   value   ˙˙˙˙   _   SuggestAutoComplete.prototype.onResultsReturnedÁ              v      š      c                        $             results   finalResults   finalComments 5    9             Z      QZ     Q>  Q    BmV   ¸    
T  5   V  7: QV  ¸    
=   : QV  #?W  QăV  T  5   Ů   ˙˙˙ŻČT  5   Ů      v  Q;   T  5   Ů   R ¸   
=   ?:   QV  >A5   8QV   ¸   
T  5   : W   QV  ¸   
V  : W  QČV   Ů    E   Q;   	5   
¸   
=   :    0V   ¸    
T  5   : QV  ¸    
=   : QA¸   
T  5   V   V  T  5   : QÉÉ>&B6V>ÜÔ>.Ě@>ÚDÍËF
ÓŘÍIÓČĎÉNĐÖ×ÔUäZ 	   push   local      length   remote   Array	   fill!   _suggestionLabel   concat   Services   prefs   getBoolPrefA   browser.search.showOneOffButtons	   term   onResultsReady#   formHistoryResult    ˙˙˙˙         i        ˙˙˙˙         comments           V          b   ˙˙˙˙      p   ˙˙˙˙   ˙˙˙˙   Y   SuggestAutoComplete.prototype.onResultsReadyÁ                |       š      +                                      searchString   results   comments#   formHistoryResult    ¨  E  _             A5       u  Q   QT ¸   
:     Q;   T  ;   5   5   >=   T V   T T R   QA5    ¸   
AV  : QA@6    QČŃd
Ę	Č
ĎeČoÖrÉ`    _listener   slice-   FormAutoCompleteResult   Ci+   nsIAutoCompleteResult   RESULT_SUCCESS      onSearchResult    ˙˙˙˙          labels       result           n   ˙˙˙˙   ˙˙˙˙   S   SuggestAutoComplete.prototype.startSearchÁ                §       š   
   H                                @      searchString   searchParam   previousResult   listener-   formHistorySearchParam   privacyMode  '  ą               T     A@6    QT ¸   
=   : >7   QT ¸   
=   : ?7=      Q;   5   5      'A¸   
            : Q;   5   ¸   
    ¸   	
A: : QČĎË  ĎŃĎŕÝ  Ą  #˙˙˙á  Ą %   _formHistoryResult   split   |   private   Services   search   isInitialized   _triggerSearch	   init	   bind   ˙˙˙˙      startSearch_cb                 T       š                                              aResult                  ;    ¸   
T  :      ;   ¸   
=   T  : QA¸   
            : Q
ĎŮŕQ    Components   isSuccessCode   Cu   reportErrore   Could not initialize search service, bailing out:    _triggerSearch   ˙˙˙˙   Y   SuggestAutoComplete.prototype._triggerSearchÁ                 1       š                                              searchString   searchParam   listener   privacyMode         §             AT 6    QA5   ¸   
T  T ;   5   5   : QĘĐĎ  ŠD    _listener+   _suggestionController   fetch   Services   search   currentEngine   ˙˙˙˙   Q   SuggestAutoComplete.prototype.stopSearchÁ                          š                                              ˇ  ˛             A5    ¸   
:  QŃ" +   _suggestionController	   stop   ˙˙˙˙   3   SearchSuggestAutoComplete                          š      	                                        |  Ŕ             A¸    
:  QĚ    _init