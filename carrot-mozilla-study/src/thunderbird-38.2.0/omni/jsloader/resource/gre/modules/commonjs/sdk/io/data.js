ç¿s¹                û  F   ¹   (   Ú                          /       0     resource://gre/modules/commonjs/sdk/io/data.js     I                            	                               ;    Y   =   ]   0   Q;   â   =   : 5      Q5      Q5      QQ;   â   =   
:    	Q;   5   ¸   
;   5   :    Q;   â   =   : 5      QQ;   ¸   
=   : 5      QQ;   ¸   
=   : 5      QQ;   5   ¸   
;   5   :    Q=      Q=      Qn   @1   Q;   ;   0   Q;   ;   â   ;    =   !: 0    Q;   ;   â   ;   	5   #=   $: 0   "Q;   ;   â   ;   	5   &=   ': 0   %QÊ!	6	ÊÐÏèÏ	ÉÿÿÿýÑÊÉÿÿÿýÏÐÑÐ/ÑÐ0ÑÊÉÿÿÿýËËÌ!.Ð<6GÔHÉKPÙPÉSWÙWÉZ    module   metadata   unstable   stability   Cc   Ci   Cu   require   chrome   base64   ../base64   IOServiceC   @mozilla.org/network/io-service;1   getService   nsIIOService#   deprecateFunction#   ../util/deprecate   NetUtil   importE   resource://gre/modules/NetUtil.jsm   ServicesG   resource://gre/modules/Services.jsm   FaviconServiceM   @mozilla.org/browser/favicon-service;1#   nsIFaviconService   PNG_B64-   data:image/png;base64,   DEF_FAVICON_URI_   chrome://mozapps/skin/places/defaultFavicon.png   DEF_FAVICON   exports1   getFaviconURIForLocation'   getChromeURIContent«   getChromeURIContent is deprecated, please use require("sdk/net/url").readURI instead.   base64Encode   encode   base64Encode is deprecated, please use require("sdk/base64").encode instead.   base64Decode   decode   base64Dencode is deprecated, please use require("sdk/base64").decode instead.   ÿÿÿÿ   1   getFaviconURIForLocation                     ¹      5                                    uri   pageURI   ê  !       	      ;    ¸   
T  :    Q;   ¸   
;   ¸   
V   : :    ]  Qv  Q;       7n   ;   ;   ¸   
;   	â   	;   
: : 1   Q;   ÈÈ    Ï
È$ÌÐ$É'ÌÊÛ"ÿÿÿòÊ,Ï    NetUtil   newURI   FaviconService/   getFaviconDataAsDataURL#   getFaviconForPage   DEF_FAVICON   PNG_B64   base64   encode'   getChromeURIContent   DEF_FAVICON_URI    ÿÿÿÿ         e            (       A   Q   ÿÿÿÿÿÿÿÿ             ÿÿÿÿ   '   getChromeURIContent               Û       ¹      G                                       chromeURI   channel   input   stream   content ·  Ô	  6             ;    ¸   
T  @@@;   5   ¸   
:  @;   5   5   ;   5   5   	:    QV   ¸   

:    Q;   5   ¸   
;   5   :   QV  ¸   
V  : QV  ¸   
V  ¸   
:  :   QV  ¸   
:  QV  ¸   
:  QV  ÏÑ&ÏÏ7È?ËÈÑÊ@ÈBÓÖÿÿÿïÈÏÏ    IOService   newChannel2   Services+   scriptSecurityManager%   getSystemPrincipal   Ci   nsILoadInfo   SEC_NORMAL!   nsIContentPolicy   TYPE_OTHER	   open   CcA   @mozilla.org/binaryinputstream;1   createInstance)   nsIBinaryInputStream   setInputStream   readBytes   available   close