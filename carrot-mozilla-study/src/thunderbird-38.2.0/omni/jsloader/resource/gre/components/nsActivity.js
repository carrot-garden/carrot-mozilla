�s�                �  -   �   K   �                         F            resource://gre/components/nsActivity.js     m&         	       �   �   �   	             �   H�   I;    5   �   
=   : Q;    5   �   
=   : Q;    5      Q;    5      Q;    5   
   	Q;   Y   ��]   =   ]   =   ]   ;   5   5   ]   =   ]   =   ]   @]   =   ]   =   ]   @]   �   ]   �   ]   �   ]   �   ]   �   ]   6   Q;   Y   ;   5   �;    �    
=   !: ]   "��]   #=   ]   $>]   %>]   &;   '�   (
:  ]   )@]   *@]   +@]   ,;   5   -5   .]   /�   ]   0�   a   1�   	b   1�   
]   2�   a   3�   b   3�   a   4�   b   4�   a   5�   b   5;   6�   7
Z  ;   5   -`   ;   5   `  : ]   86   Q;   9Y   ;   5   �;    �    
=   :: ]   "=   ]   ;>]   )>]   <@]   =�   ]   0�   a   >�   b   >;   6�   7
Z  ;   5   ?`   ;   5   `  : ]   86   Q;   @Y   ;   5   �;    �    
=   A: ]   "=   ]   B>]   C@]   D�   ]   0�   a   E�   b   E�   a   F;   6�   7
Z  ;   5   G`   ;   5   `  : ]   86   Qn   HZ  ;   `   ;   9`  ;   @`  o   HQ;   6�   J
;   H:    IQ�������ʘ�	�H�	��  �	�� *�	�� ^�����ڈA�ڈ@��Ј��Ј��Ј����ʘ���ʐ�ʐ�Ԑ�ʐ�ʐ���ʐ�ʐ��&�ʘ*�ʘ.�ʘ7�ʘ;�ИC��H�M��Oʐ�ː�ш	ȘV���ʐ�����̈Ȑ�������Ԙ`�ʘe�ʘi�ʘ�  ��ʘ�  ��ʐ����ʘ�  Έʐ����ʘ�  ܈ʐ����ʘ�  �Ј'ΈΈ����ΐ���  �  ����ʐ�ː�ш	Ș� �ʐ��������ʘ� �ʐ����ʘ� $�Ј'ΈΈ����ΐ��� *�� /���ʐ�ː�ш	Ș� 8�ʐ������ʘ� C�ʐ����ʘ� Q�ʘ� X�Ј'ΈΈ����ΐ��� ^�ɈɈɈψ���ؐ�шɈ����    Components   utils   importK   resource://gre/modules/XPCOMUtils.jsmI   resource:///modules/gloda/log4moz.js   Cc   classes   Ci   interfaces   Cr   results   nsActivity   prototype   id      bindingName   iconClass   nsIActivity1   GROUPING_STYLE_BYCONTEXT   groupingStyle   facet   displayText   initiator   contextType   context   contextObj   _initLogging   addListener   removeListener   addSubject   getSubjects#   nsActivityProcess   IDI   B2C036A3-F7CE-401C-95EE-9C21505167FD   classID   percentComplete   lastStatusText!   workUnitComplete   totalWorkUnits	   Date   now   startTime   _cancelHandler   _pauseHandler   _retryHandler%   nsIActivityProcess!   STATE_INPROGRESS   _state	   init   state   setProgress   cancelHandler   pauseHandler   retryHandler   XPCOMUtils   generateQI   QueryInterface   nsActivityEventI   87AAEB20-89D9-4B95-9542-3BF72405CAB2   statusText   completionTime   _undoHandler   undoHandler!   nsIActivityEvent#   nsActivityWarningI   968BAC9E-798B-4952-B384-86B21B8CC71E   recoveryTipText   _time!   _recoveryHandler   recoveryHandler	   time%   nsIActivityWarning   components   NSGetFactory)   generateNSGetFactory   ����      nsActivity                   #       �                                            �                 A�    
:  QAZ   6   QAZ   6   Q����̐�ː�ˈ    _initLogging   _listeners   _subjects   ����   C   nsActivity.prototype._initLogging�                          �      
                                        P  &             A;   �   
=   : 6    Q���҈Ɉ*    log   Log4Moz'   getConfiguredLogger   nsActivity   ����   A   nsActivity.prototype.addListener�                        �                                              aListener j  �  *             A5    �   
T  : Q���Ԉ     _listeners	   push   ����   G   nsActivity.prototype.removeListener�                c       �      &                                     aListener �  u  .             >�   Q    CmA5    V   7T      A5    �   
V   ?: Q   *V   #?W   QQ�V   A5    �   ����ș��&C5U���/����֐H�/�0Θ2�/�ؘ2�    _listeners   splice   length    ����          i           U          a   ����   ����   ?   nsActivity.prototype.addSubject�                        �                                              aSubject �  �  7             A5    �   
T  : Q���Ԉ    _subjects	   push   ����   A   nsActivity.prototype.getSubjects�              �       �      '                                     aCount	   list �    ;       
      Z   �   Q;    �    A5   : K�  Q   mm- �
:  �   
:  5      Q   
5   Q�   
:  5      Q   
5   W  QQV   �   
V  : Q�QLM����QN�T  V   �   6   QV   ���ɐЈ�0r׈������א���@�Ґ��    Iterator   _subjects	   next	   done   value	   push   length    ����         value       *   s              ����   ����   #   nsActivityProcess                   4       �                                              �  H             ;    �   
Al QA=   6   QA;   5   5   6   Q����ѐ�̐�ֈ=    nsActivity	   call   bindingName!   activity-process   groupingStyle   Ci   nsIActivity1   GROUPING_STYLE_BYCONTEXT   ����   A   nsActivityProcess.prototype.init�                        �                                               aDisplayText   aInitiator  �	  �	  `             AT  6    QAT 6   Q���ʐ�ʈ    displayText   initiator   ����   C   nsActivityProcess.prototype.state�                          �                                            �	  
  e             A5    ����    _state   ����   C   nsActivityProcess.prototype.state�              D      �      �                        c             val   oldState '
    i             T  A5       A5    ;   5   5   E   ~QT  ;   5   5   D   dQT  ;   5   5   D   KQT  ;   5   5   D   2QT  ;   5   5   D   QT  ;   5   5       ;   	5   
pA5    ;   5   5   D   QA5    ;   5   5      ;   	5   
pA5    ;   5   5   E   ~QT  ;   5   5   D   dQT  ;   5   5   D   KQT  ;   5   5   D   2QT  ;   5   5   D   QT  ;   5   5       ;   	5   
pA5    ;   5   5   E   3QT  ;   5   5   D   QT  ;   5   5       ;   	5   
pA5    ;   5   5   E   3QT  ;   5   5   D   QT  ;   5   5       ;   	5   
pA5    �   QAT  6    QA5   �   
=   : Q;   �   A5   : K�  Q   �m- �
:  �   
:  5      Q   
5   Q�   
:  5      Q   
5   W  QQ�V  �   
AV   : Q   3��  Qv�  QA5   �   
=   V  : Q�    �QLM���^QNș�����oܐ�ِِِِ���˘zܐ���˘~ܐ�ِِِِ���ː��ܐ�ِ���ː��ܐ�ِ���ː���ː�ʐ���֐Ј�0�  �׈������א���ِ�̐�    _state   Ci%   nsIActivityProcess!   STATE_INPROGRESS   STATE_COMPLETED   STATE_CANCELED+   STATE_WAITINGFORRETRY+   STATE_WAITINGFORINPUT   STATE_PAUSED   Cr-   NS_ERROR_ILLEGAL_VALUE   log   debugE   Notifying onStateChanged listeners   Iterator   _listeners	   next	   done   value   onStateChanged   error[   Exception thrown by onStateChanged listener:     ����         value                     e       �  �       �         �  �   ����   	  '          ����   O   nsActivityProcess.prototype.setProgress�                5      �      Z                                     aStatusText%   aWorkUnitsComplete   aTotalWorkUnits   -  )  �       
      T >   #A��6    QA>6   QA>6   Q   7A;   �   �dT T : 6    QAT 6   QAT 6   QAT  6   Q;   �   A5   : K�   Q   �m- �
:  �   
:  5      Q   
5   	Q�   
:  5      Q   
5   	W   QQ�V   �   

AT  T T : Q   3��  Qv�  QA5   �   
=   V  : Q�    �QLM���YQNș���ɐ�Ȑ�͐���Ոɐ�ʐ�ʐ��ʐ��Ј�0�  �׈������א���Ґ��  ��ɐ��̐�    percentComplete!   workUnitComplete   totalWorkUnits   parseInt   lastStatusText   Iterator   _listeners	   next	   done   value#   onProgressChanged   log   errora   Exception thrown by onProgressChanged listener:     ����          value                     e       �   �       �          {   �   ����   �   '          ����   S   nsActivityProcess.prototype.cancelHandler�                          �                                            ?  g  �             A5    ����    _cancelHandler   ����   S   nsActivityProcess.prototype.cancelHandler�                �       �      3                                     val }  �  �       
      AT  6    QA5   �   
=   : Q;   �   A5   : K�   Q   �m- �
:  �   
:  5      Q   
5   Q�   
:  5      Q   
5   W   QQ�V   �   	
A: Q   3��  Qv�  QA5   �   

=   V  : Q�    �QLM���bQNș��ʐ���֐Ј�0�  �׈������א���Ր�̐�    _cancelHandler   log   debugI   Notifying onHandlerChanged listeners   Iterator   _listeners	   next	   done   value!   onHandlerChanged   error_   Exception thrown by onHandlerChanged listener:     ����          value                     e       A   �       �          7   �   ����   �   '          ����   Q   nsActivityProcess.prototype.pauseHandler�                          �                                              3  �             A5    ����    _pauseHandler   ����   Q   nsActivityProcess.prototype.pauseHandler�                �       �   
   %                                     val H  C  �       	      AT  6    QA5   �   
=   : Q;   �   A5   : K�   Q   jm- �
:  �   
:  5      Q   
5   Q�   
:  5      Q   
5   W   QQV   �   	
A: Q�QLM����QNș��ʐ���֐Ј�0o׈������א�݈    _pauseHandler   log   debugI   Notifying onHandlerChanged listeners   Iterator   _listeners	   next	   done   value!   onHandlerChanged    ����          value       A   p       7   |   ����   ����   Q   nsActivityProcess.prototype.retryHandler�                          �                                            X    �             A5    ����    _retryHandler   ����   Q   nsActivityProcess.prototype.retryHandler�                �       �   
   %                                     val �  �  �       	      AT  6    QA5   �   
=   : Q;   �   A5   : K�   Q   jm- �
:  �   
:  5      Q   
5   Q�   
:  5      Q   
5   W   QQV   �   	
A: Q�QLM����QNș��ʐ���֐Ј�0o׈������א�݈    _retryHandler   log   debugI   Notifying onHandlerChanged listeners   Iterator   _listeners	   next	   done   value!   onHandlerChanged    ����          value       A   p       7   |   ����   ����      nsActivityEvent                   4       �                                            �  W  �             ;    �   
Al QA=   6   QA;   5   5   6   Q����ѐ�̐�ֈ>    nsActivity	   call   bindingName   activity-event   groupingStyle   Ci   nsIActivity3   GROUPING_STYLE_STANDALONE   ����   =   nsActivityEvent.prototype.init�                 `       �      '                                        aDisplayText   aInitiator   aStatusText   aStartTime   aCompletionTime     �  ,              AT  6    QAT 6   QAT 6   QT    AT 6   Q   A;   �   
:  6   QAT 6   QAT 6   Q����ʐ�ʐ�ʐ��ϐ��͈ɐ�ʐ�ʈ'    displayText   statusText   startTime   completionTime	   Date   now   initiator   _completionTime   ����   K   nsActivityEvent.prototype.undoHandler�                          �                                            @  f              A5    ����    _undoHandler   ����   K   nsActivityEvent.prototype.undoHandler�                �       �   
   %                                     val z  t        	      AT  6    QA5   �   
=   : Q;   �   A5   : K�   Q   jm- �
:  �   
:  5      Q   
5   Q�   
:  5      Q   
5   W   QQV   �   	
A: Q�QLM����QNș��ʐ���֐Ј�0o׈������א�݈    _undoHandler   log   debugI   Notifying onHandlerChanged listeners   Iterator   _listeners	   next	   done   value!   onHandlerChanged    ����          value       A   p       7   |   ����   ����   #   nsActivityWarning                   4       �                                            �   ?!  *            ;    �   
Al QA=   6   QA;   5   5   6   Q����ѐ�̐�ֈ=    nsActivity	   call   bindingName!   activity-warning   groupingStyle   Ci   nsIActivity1   GROUPING_STYLE_BYCONTEXT   ����   A   nsActivityWarning.prototype.init�                 5       �                                              aWarningText   aInitiator!   aRecoveryTipText   �"  C#  <            AT  6    QAT 6   QAT 6   QA;   �   
:  6   Q���ʐ�ʐ�ʐ�͈Ɉ    displayText   initiator   recoveryTipText   _time	   Date   now   ����   W   nsActivityWarning.prototype.recoveryHandler�                          �                                            [#  �#  C            A5    ���� !   _recoveryHandler   ����   W   nsActivityWarning.prototype.recoveryHandler�                �       �   
   %                                     val �#  �$  G      	      AT  6    QA5   �   
=   : Q;   �   A5   : K�   Q   jm- �
:  �   
:  5      Q   
5   Q�   
:  5      Q   
5   W   QQV   �   	
A: Q�QLM����QNș��ʐ���֐Ј�0o׈������א�݈ !   _recoveryHandler   log   debugI   Notifying onHandlerChanged listeners   Iterator   _listeners	   next	   done   value!   onHandlerChanged    ����          value       A   p       7   |   ����   ����   A   nsActivityWarning.prototype.time�                          �                                            �$  �$  Q            A5    ����    _time