ç¿s¹                ±      ¹      d                          
       0     resource://gre/modules/commonjs/sdk/io/byte-streams.js     
                                   ;    Y   =   ]   0   Q;   ;   0   Q;   ;   0   Q;   	â   	=   
: 5      Q5      QQX    Q;   Y      ]      ]   0   QÊ	5	N	ÊÐÐ Ð ÏÜÉ35GN]_ÊÊdÐh    module   metadata   experimental   stability   exports   ByteReader   ByteWriter   Cc   Ci   require   chrome   BUFFER_BYTE_LEN   StreamManager   prototype   ensureOpened   unload   ÿÿÿÿ      ByteReader               _       ¹      &                                      inputStream	   self   stream   manager ù                 A   Q;    5   ¸   
;   5   :    Q   ¸   
T  : Q;   A   R    QA    0   QÑÊÉÓÌ
ÉÌ2    CcA   @mozilla.org/binaryinputstream;1   createInstance   Ci)   nsIBinaryInputStream   setInputStream   StreamManager	   read   ÿÿÿÿ      ByteReader_read              
      ¹      X                                    numBytes	   data	   read                        ¸    
:  QT  '=   I   ;   U  Q=      Q>  Q   m  Q  Q      ¸   
:    Q;   ¸   
T  V  V  ;   :   QV  >   È   >V         ¸   
V  : W   QV  V  W  QÈãCÿÿÿp   ,  Qv  Q;   	=   
V  R pÈ    V   ÕÊÉ!Ê  (  ÍÑÈÝ	ÈIÙ{Èx$Í-ÌÐË1    ensureOpened   number   Infinity      available	   Math   min   BUFFER_BYTE_LEN   readBytes   Error7   Error reading from stream:     ÿÿÿÿ         avail       toRead        ÿÿÿÿ         err         >          C          F      ÿÿÿÿÿÿÿÿ             Þ       ÿÿÿÿ   ÿÿÿÿ      ByteWriter               _       ¹      &                                      outputStream	   self   stream   manager (  ù  5             A   Q;    5   ¸   
;   5   :    Q   ¸   
T  : Q;   A   R    QA    0   Q8ÑÊ8É:Ó<Ì
É>ÌF    CcC   @mozilla.org/binaryoutputstream;1   createInstance   Ci+   nsIBinaryOutputStream   setOutputStream   StreamManager   write   ÿÿÿÿ   !   ByteWriter_write                c       ¹                              	            str C  ö  >                   ¸    
:  Q      ¸   
T  T  Ù   : Q   ,   Qv   Q;   =   V   R pÈ    Õ!åCÌÐË    ensureOpened   writeBytes   length   Error3   Error writing to stream:     ÿÿÿÿ          err            %       <       ÿÿÿÿ   ÿÿÿÿ      StreamManager                ^       ¹                                            stream   rawStream	   self  *  s	  N             A   QAT 0    QAC0   QT  ¸   
=       : QT     0   Q;   â   =   : ¸   
A: QÊÈSØWÎ\Þ)    rawStream   opened!   __defineGetter__   closed   close   require!   ../system/unload   ensure   ÿÿÿÿ      stream_closed                          ¹      	                                     Ä  å  S                   5     Ñ    opened   ÿÿÿÿ      stream_close                   +       ¹                                           	  C	  W                   ¸    
:  Q      ¸   
:  QÕÕ    ensureOpened   unload   ÿÿÿÿ   5   StreamManager_ensureOpened                          ¹                                           Ä	  %
  `             A5        ;   =   R pË6    opened   ErrorQ   The stream is closed and cannot be used.   ÿÿÿÿ   )   StreamManager_unload                          ¹                                           N
  
  d             A5    ¸   
:  QAB0   QÑÈ    rawStream   close   opened