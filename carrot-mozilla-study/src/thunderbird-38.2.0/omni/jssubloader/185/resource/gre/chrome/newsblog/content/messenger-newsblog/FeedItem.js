ç¿s¹                  
   ¹   ,   ö                                       chrome://messenger-newsblog/content/FeedItem.js     ©=                       ;    Y   @]   @]   @]   @]   @]   Z   ]   @]   =   	]   
=   ]   Z   ]   @]   =   ]   =   ]   =   ]   =   ]      a      b      a      b      a      ]      a      a      	]      
]      ]      ]       ]   !   ]   "   ]   #   ]   $   ]   %6   ;   &Y   =   ]   =   ]   '>]   (=   ]   )=   ]   *=   ]      ]   +6   	 ¼	ÉÊÊÉÊÊÊÊ,Ê1Ê@ÊEÊJÊOÊ[Ê`ÊhÊ  Ê  ®Ê  ÌÊ  áÊ  ôÊ yÊ Ê ¤Ð · ¼ ÑÊÊÊÊÊÐ é    FeedItem   prototype   xmlContentBase   id	   feed   description   content   enclosures   title   anonymous   author      inReplyTo   keywords	   mURL   UTF-8   characterSet   --------------3   ENCLOSURE_BOUNDARY_PREFIX   ------------A   ENCLOSURE_HEADER_BOUNDARY_PREFIXC  
<html>
  <head>
    <title>%TITLE%</title>
    <base href="%BASE%">
  </head>
  <body id="msgFeedSummaryBody" selected="false">
    %CONTENT%
  </body>
</html>
!   MESSAGE_TEMPLATE   url	   date   identity%   normalizeMessageID   itemUniqueURI   contentBase   store%   findStoredResource   markValid   markStored#   mimeEncodeSubject   writeToFolder   tagItem   htmlEscape   createURN   FeedEnclosure   mContentType   mLength   mFileName   mTitle'   convertToAttachment   ÿÿÿÿ      FeedItem                   a       ¹      #                                      3  r               A;   ¸   
:  6    QA;   5   ¸   
;   5   : 6   QA;   5   
¸   
;   5   : 6   	QÍÉÒÊ	ÉÒÊÉ4    mDate   FeedUtils'   getValidRFC5322Date#   mUnicodeConverter   CcY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   Ci;   nsIScriptableUnicodeConverter   mParserUtils5   @mozilla.org/parserutils;1   getService   nsIParserUtils   ÿÿÿÿ   -   FeedItem.prototype.urlÁ                          ¹                                              8  ,             A5     	   mURL   ÿÿÿÿ   -   FeedItem.prototype.urlÁ                [       ¹                                        	   aVal D  Æ  1             A;   5   ¸   
T  @@: 5   6    Q   4   Qv   QAT     T     
=   6    QÈ    &×Ó7Ì<ß 	   mURL   Services   io   newURI	   spec       ÿÿÿÿ          ex            *       ,   (   ÿÿÿÿ   ÿÿÿÿ   /   FeedItem.prototype.dateÁ                          ¹                                            Ó  ô  @             A5        mDate   ÿÿÿÿ   /   FeedItem.prototype.dateÁ                        ¹                                            	   aVal   '  E             AT  6    QÊ    mDate   ÿÿÿÿ   7   FeedItem.prototype.identityÁ                   -       ¹                                            9    J             A5    5   =   A5   =   A5   =   ì@ 	   feed	   name   :    title    (   id   )   ÿÿÿÿ   K   FeedItem.prototype.normalizeMessageIDÁ                        ¹                                              messageID ©  $	  O             T  ¸    
     =   : QT  ¸    
    =   : QT  ¸    
    =   : Q=   T  ¸   
:  =   U  Q;   5   ¸   	
=   
T  : QT  RØØØÏÎWÞ    replace   %3C   %3E   %40   <	   trim/   @localhost.localdomain>   FeedUtils   log   traceS   FeedItem.normalizeMessageID: messageID -    <      >      @      ÿÿÿÿ   A   FeedItem.prototype.itemUniqueURIÁ                          ¹      
                                      :	  h	  [             A¸    
A5   : Î    createURN   id   ÿÿÿÿ   =   FeedItem.prototype.contentBaseÁ                          ¹                                            |	  ä	  `             A5       A5       A5   Ìe    xmlContentBase	   mURL   ÿÿÿÿ   1   FeedItem.prototype.storeÁ                \      ¹      k                        #              stored   resourceø	  Å  h             B   QA¸    
:    QA5   5       
V   V  @    Q;   5   ¸   
A5   : W  QA5       E;   5   ¸   	
=   
A5   =   : QAA5   D   QA5   6   QA5     QV  ¸   
     A5   : W  QV  ¸   
    A¸   
A5   : : W  QV  ¸   
    A5   : W  QAV  6   QA¸   
:  QA¸   
V  : QCW   QÈA¸   
V  : QV   mÈÈÌr×È
ÝwyÙ|
ËÖ
ÈÞ$ÿÿÿæÈÖ
ÈËÌÐÐ %   findStoredResource	   feed   folder   FeedUtils   rdf   GetResource   itemUniqueURI   content   log   trace!   FeedItem.store:    identityS    no content; storing description or title   description   title!   MESSAGE_TEMPLATE   replace   htmlEscape   contentBase   writeToFolder   markStored   markValid    ÿÿÿÿ         content       %TITLE%       %BASE%       %CONTENT%        8     ÿÿÿÿ   ÿÿÿÿ   K   FeedItem.prototype.findStoredResourceÁ                 p      ¹      t                           -              server   folder   ds   itemURI   itemResource   downloadedæ  Y               ;    5   ¸   
=   A5   : QA5   5      QA5   5     QV      Y;    5   ¸   
=   	A5   5   
=   V   5   5   =   : QA5   ¸   
:  Q@;    ¸   
V   :   QA5     Q;    5   ¸   
V  :   QV  ¸   
V  ;    5   C:   QV   D   )QV  ¸   
;   5   : 5   =      !;    5   ¸   
=   : Q@;    5   ¸   
=   : QV  Ö  ÐÐÖÌÕ  ÑÐÈËÕÈÚÈËÕÎÚÚ    FeedUtils   log   tracee   FeedItem.findStoredResource: checking if stored -    identity	   feed   server   folder   debugK   FeedItem.findStoredResource: folder '   folderNameM   ' doesn't exist; creating as child of    rootMsgFolder   prettyName   
   createFolder   getItemsDS   itemUniqueURI   rdf   GetResource   GetTarget   FZ_STORED   QueryInterface   Ci   nsIRDFLiteral   Value   falseO   FeedItem.findStoredResource: not storedW   FeedItem.findStoredResource: already stored   ÿÿÿÿ   9   FeedItem.prototype.markValidÁ              Û      ¹                               A             resource   ds   newTimeStamp!   currentTimeStamp q  Ú  ®             ;    ¸   
A5   5   :    Q;    5   ¸   
;   R  ¸   
:  :   QV   ¸   
T  ;    5   	C:   QV     .V   ¸   

T  ;    5   	V  V  : Q   &V   ¸   
T  ;    5   	V  C: QV   ¸   
T  ;    5   ;    5   ¸   
A5   5   : C:     AV   ¸   
T  ;    5   ;    5   ¸   
A5   5   : C: QV   ¸   
T  ;    5   :    \  QV   ¸   
T  ;    5   C:   QV   ¸   

T  ;    5   V  ;    5   : QÈ   ,V   ¸   
T  ;    5   ;    5   C: Q×È×(ÍÿÿÿçÈÎÊ  ³È)ØÈ  ·ÉØ  ºØÜ  ½	ØÜ  ¿ØW
ÙÈØÎ  ÅÊçJ    FeedUtils   getItemsDS	   feed   server   rdf   GetLiteral	   Date   getTime   GetTarget-   FZ_LAST_SEEN_TIMESTAMP   Change   Assert   HasAssertion   FZ_FEED   GetResource   url   hasArcOut   FZ_VALID!   RDF_LITERAL_TRUE    ÿÿÿÿ         currentValue        ]  Q   ÿÿÿÿ   ÿÿÿÿ   ;   FeedItem.prototype.markStoredÁ               :      ¹      ^                           -             resource   ds   currentValue ó    Ì             ;    ¸   
A5   5   :    QV   ¸   
T  ;    5   ;    5   ¸   
A5   5   : C:     AV   ¸   	
T  ;    5   ;    5   ¸   
A5   5   : C: Q  QV   ¸   

T  ;    5   :    UV   ¸   
T  ;    5   C: W  QV   ¸   
T  ;    5   V  ;    5   : Q   ,V   ¸   	
T  ;    5   ;    5   C: Q×ÈØÜ  Ð	ØÜ  ÒØPÙÈØÎ  ÙÉØË  Ý2    FeedUtils   getItemsDS	   feed   server   HasAssertion   FZ_FEED   rdf   GetResource   url   Assert   hasArcOut   FZ_STORED   GetTarget   Change!   RDF_LITERAL_TRUE   ÿÿÿÿ   I   FeedItem.prototype.mimeEncodeSubjectÁ              Q       ¹      *                                     aSubject   aCharset   newSubject  ¿  X  á       	         Q;    5   ¸   
T  BT ×	×H: W   Q      Qv  QT  W   QÈ    V   %Ô  èÍÌÏ    mailServices   mimeConverter1   encodeMimePartIIStr_UTF8    ÿÿÿÿ         ex            )       1      ÿÿÿÿ   ÿÿÿÿ   A   FeedItem.prototype.writeToFolderÁ                7      ¹   N   v                      ~              title!   inreplytoHdrsStr   keywordsStr   openingLine   source   folder   msgFolder   msgDBHdrt  /  ô             ;    5   ¸   
=   A5   =   A5   5   : QA5      QA5   	¸   

V   ;   5   5   ;   5   5   >: W   QV   ¸   
     =   : ¸   
:  W   QAA¸   
V   A5   : 6   QA5   ¸   
    : ×ÿ   %A;   A5   R ¸   
:  6   QA5      )=   A5   =   A5   =      
=     Q=     QA5   Ù     8  Q  
Q  	Q  Q  Q=     Q×N  QV  W  Q  	QZ   ¸    
A5   :   
QZ     Q   zmV  
¸   !
:  W  	QV  Ù   V  	Ù   V     5V  ¸   "
V  : Q=   ¸   #
V  Ù   : W  QV  V  	=   $W  QãV  
Ù   ÿÿÿV  ¸   
    =   : W  QV  ¸   "
V  : QV  ¸   %
=   : W  QÈAA5   &¸   
    =   ': 6   &QA5   &=   6   &Q=   (A5   =     QV  =   )=   ¸   #
×P: =   *;    ¸   +
:  =   ,A5   =   -A¸   .
A5   /: =   0A5   1=   2A5   =   V  V  =   3A5   4=      QA5   5Ù      §Æ      Q  Ù      Q  =   6A5   7   =   8A5   9   =   :A5   =   ;A5   &  QA5   5¸   <
   : Q  A5   9   =   =  QÈÇ   *   =   >A5   =   A5   &   Q;    5   ¸   
=   A5   =   ?   Ù   =   @: QA5   5   A¸   B
;   5   C:   QV  ¸   B
;   5   D:   QV  C6   EQA5   FA5   6   GQV  ¸   H
A5   F¸   I
   : :   QV  ¸   J
;   5   K5   L: QV  B6   EQA¸   M
V  A5   : QÝÒ  öËÍÏÐ  þÈ ÕÒÓÉÒÍÓ$ÒÜ ÊËÞ
Ê
É

ÑÈ
É(   "Ë
ÈØ
Ó
ÕÈÎx !Ð +ÕÈÓÐÉ 3ØÉÌx <×ÎÊÌ#ÊÍÎÊÍÍÓË  ¢Ì
ÐÊÓÓÍÖ×xÎ×Ý× cÜ	ÈÕÈËÒÝÿÿÿîÈÞËÖ&    FeedUtils   log   trace1   FeedItem.writeToFolder:    identity7    writing to message folder 	   feed	   name   title   mParserUtils%   convertToPlainText   Ci%   nsIDocumentEncoder'   OutputSelectionOnly'   OutputAbsoluteLinks   replace    	   trim#   mimeEncodeSubject   characterSet   mDate   search	   Date   toUTCString   inReplyTo   References:    
In-Reply-To:    
      keywords   length   Keywords:    concat   shift	   push   repeat   ,	   join   content   $1>$2   From -    X-Mozilla-Status: 0000
X-Mozilla-Status2: 00000000
X-Mozilla-Keys: 3   
Received: by localhost; '   getValidRFC5322Date   
Date:    
Message-Id: %   normalizeMessageID   id   
From:    author9   
MIME-Version: 1.0
Subject: ]   Content-Transfer-Encoding: 8bit
Content-Base: 	   mURL   enclosuresS   Content-Type: multipart/mixed; boundary="A   ENCLOSURE_HEADER_BOUNDARY_PREFIXa   "

This is a multi-part message in MIME format.
3   ENCLOSURE_BOUNDARY_PREFIXE   
Content-Type: text/html; charset=C   
Content-Transfer-Encoding: 8bit
   forEach   --


C   Content-Type: text/html; charset=	    is !    characters long   folder   QueryInterface+   nsIMsgLocalMailFolder   nsIMsgFolder%   gettingNewMessages#   mUnicodeConverter   charset   addMessage%   ConvertFromUnicode   OrFlags#   nsMsgMessageFlags   FeedMsg   tagItem    ÿÿÿÿ         HEADER       MAXLEN       keyword       keywords       lines        ÿÿÿÿ         boundaryID            E   FeedItem.prototype.writeToFolder/<Á                        ¹      
                                        enclosure _+  ±+  Y              T  ¸    
   :   QÔ
{* '   convertToAttachment   [\t\r\n]+      ^\d\d\d\d       ,$    %   ([\r\n]+)(>*From )       ¯         O  .  ÿÿÿÿ   x     ÿÿÿÿ   ÿÿÿÿ   5   FeedItem.prototype.tagItemÁ              ß      ¹                              /             aMsgDBHdr   aKeywords   categoryPrefs   msgArray   prefix   rtl	   keys  80  34  y            A5    ¸   
:     QT Ù    D   QV   5       ;   5   ¸   
;   5   :   QV  ¸   	
T  B: QV   5   
   V   5      
=     Q;   5   ¸   
=   : ×  QZ     QT - Á
:    Q   ¼m5   W  Q  QV     V  V     V  V  W  Q;   5   ¸   
V  :   QV      J;   5   ¸   
V  =   ;   5   : Q;   5   ¸   
V  : W  QV  ¸   
V  : QÈãQ¸   
:  5   ÿÿÿ5È V  Ù      /T  5   ¸   
V  V  ¸   
=   : : QÍÈÏÊÛÈÓÉÝÖËÉÒ8  ÐÑá
ÕÈ
èÕÈÔ ËÿÿÿìÒ Éã1ÿÿÿÏA 	   feed   categoryPrefs   length   enabled   Cc)   @mozilla.org/array;1   createInstance   Ci   nsIMutableArray   appendElement   prefixEnabled   prefix      Services   prefs   getIntPref   bidi.direction   value   MailServices	   tags   getKeyForTag   addTag   FeedUtils   AUTOTAG	   push	   next	   done   folder+   addKeywordsToMessages	   join        ÿÿÿÿ         keyword                     keyForTag       Ò   Ð       È   Û   ÿÿÿÿ   ß   ª          ÿÿÿÿ   ;   FeedItem.prototype.htmlEscapeÁ                        ¹      %                          
             s L4  5              T  ¸    
     =   : U  QT  ¸    
    =   : U  QT  ¸    
    =   : U  QT  ¸    
    =   : U  QT  ¸    
    =   : U  QT  ÔÔÔÔÔ	    replace   &amp;	   &gt;	   &lt;   &#39;   &quot;   &      >      <      '      "      ÿÿÿÿ   9   FeedItem.prototype.createURNÁ               Ô       ¹   
   >                                       aName	   name   encoded &5  8  ¤            T  ¸    
     =   :    Q;   â   V   :   QV  ¸    
    =   : W  QV  ¸    
    =   : W  QV  ¸    
    =   : W  QV  ¸    
    =   : W  QV  ¸    
    =   : W  Q;   5   	V   ­ÔÈÎ
ÈÕ
ÈÕ
ÈÕ
ÈÕ
ÈÕ
ÈÐ&    replace      encodeURI   %23   %2f   %3f   %26   %7e   FeedUtils   FZ_ITEM_NS   \0      \#      \/      \?      \&      \~      ÿÿÿÿ      FeedEnclosure                       ¹      9                                  	   aURL   aContentType   aLength   aTitle    ±8  :  ¼            AT  6    QAT 6   QAT 6   QAT 6   QA5       gA;   5   ¸   
A5    @@: ¸   
;   	5   
: 5   6   Q   %   Qv   QAA5    6   QÈ    ÊÊÊÊ=ÚÊÊ ÈÓÌÔ 	   mURL   mContentType   mLength   mTitle   mFileName   Services   io   newURI   QueryInterface   Ci   nsIURL   fileName    ÿÿÿÿ          ex         4   A       v      ÿÿÿÿ   ÿÿÿÿ   W   FeedEnclosure.prototype.convertToAttachmentÁ                 z       ¹                                              aBoundaryID ©;  ¥=  Þ            =    A5   T  =   A5   =   A5   D   QA5   A5      =   A5      
=   	=   
A5   =   A5   =   ÑÙâÍÎF    
3   ENCLOSURE_BOUNDARY_PREFIX   
Content-Type:    mContentType   ; name="   mTitle   mFileName   mLength   "; size=   "I   
X-Mozilla-External-Attachment-URL: 	   mURLY   
Content-Disposition: attachment; filename="   "

This MIME attachment is stored separately from the message.
