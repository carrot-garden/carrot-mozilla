�s�                �      �      O                                 0     resource://gre/modules/ContentPrefServiceParent.jsm     �                �   �   �   �   Af    0    Q;   5      Q;   5      Q;   5      Qn   Y   @]   	�   ]   
;   R  ]   �   ]   �   ]   1   Q��
�����������̈7�
�Ј��Ј��Ј��ʐ���ʘ!��Ș#�ʘ_�И� !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cu   utils1   ContentPrefServiceParent   _cps2	   init   Map   _observers)   handleObserverChange   receiveMessage                  1   ContentPrefServiceParent                  ����   ;   ContentPrefServiceParent.init�                 �       �      3                                        globalMM+   observerChangeHandler�  x         	      ;    5   �   
;   5   : �   QA;    5   �   
;   5   : 0   QV   �   
=   	A: QA5   
�   
A: �  QV   �   
=   V  : QV   �   
=   V  : QV   �   
=   V  : Q���ѐʘ�Ș�Ґʘ�ɘ�՘�ΈȐ�ؐ�ؐ�؈M    CcU   @mozilla.org/parentprocessmessagemanager;1   getService   Ci3   nsIMessageListenerManager   _cps2G   @mozilla.org/content-pref/service;1-   nsIContentPrefService2%   addMessageListener3   ContentPrefs:FunctionCall)   handleObserverChange	   bind?   ContentPrefs:AddObserverForNameE   ContentPrefs:RemoveObserverForName-   child-process-shutdown   ����   [   ContentPrefServiceParent.handleObserverChange�              �      �      x                        5      D      msg   observer   prefName�  �  #       
      A5    �   
�   5   : �   Q�   5   =   H   �V       V   5   - �
:  �  Q   *m5   W  QA5   �   
V  V   : Q�Q�   	
:  5   
����� A5    �   
�   5   : Q�   5   5   �  Q�   5   =   H   �V       PY   �   ]   �   ]   ;   R  ]   W   QA5    �   
�   5   V   : QV   5   �   
V  : QA5   �   
V  V   : Q   fA5   �   
V  V   : QV   5   �   
V  : QV   5   5   >H    A5    �   
�   5   : Q���׈Ȑ��(�
���+�8>ѐ�٘+�ˈ����Ҙ/�ې��3�Ԑ��  ��7�
����
ʘ?�
ʘH�
�͘K�ߘN�ؘP�ސ�U�٘W�ؐ��Z�ۈ#    _observers   get   target	   name-   child-process-shutdown   _names   value   _cps2+   removeObserverForName	   next	   done   delete	   data?   ContentPrefs:AddObserverForName!   onContentPrefSet)   onContentPrefRemoved   Set   set   add%   addObserverForName	   size    ����         i       ����   �   ContentPrefServiceParent.handleObserverChange/observer.onContentPrefSet�                 P       �                                             group	   name   value   �  �  9             �   5    �   
=   Y   T ]   =   ]   Z  T  `   T `  T `  ]   : Q���֐�*Ȉʐ�*���̘:��<�J    target!   sendAsyncMessage9   ContentPrefs:NotifyObservers	   name!   onContentPrefSet   callback	   args   ����   �   ContentPrefServiceParent.handleObserverChange/observer.onContentPrefRemoved�                 I       �                                             group	   name  �  �	  ?             �   5    �   
=   Y   T ]   =   ]   Z  T  `   T `  ]   : Q���֐�*Ȉʐ�*��̘@��B�C    target!   sendAsyncMessage9   ContentPrefs:NotifyObservers	   name)   onContentPrefRemoved   callback	   args   ]   >       S   I   ����   ����   O   ContentPrefServiceParent.receiveMessage�               �       �      2                               D      msg	   data	   args   requestId   listener�  �  _             �   5    �   QV   5   �  QV   5   �   QY   �    ]   �   ]   �   ]   �  QV  �   
V  : QA5   V   5   �
Z   >V  - �
:  ��   m5   	_�,  �   

:  5   ���� Q)Q���Ϙb�ΐ�Ϙe���ʘl�ʘr�Ϙz�Ә}�׈�8"�	 	   data	   args   requestId   handleResult   handleError!   handleCompletion	   push   _cps2	   call   value	   next	   done   ����   {   ContentPrefServiceParent.receiveMessage/listener.handleResult�                 7       �                                          	   pref n  7  f             �   5    �   
=   Y   �   �   ]   T  ]   : Q���֐�&ϐ�&Șg��i�;    target!   sendAsyncMessage3   ContentPrefs:HandleResult   requestId   contentPref   ����   y   ContentPrefServiceParent.receiveMessage/listener.handleError�                 7       �                                             error U    l             �   5    �   
=   Y   �   �   ]   T  ]   : Q���֐�&ϐ�&Șm��o�6    target!   sendAsyncMessage1   ContentPrefs:HandleError   requestId   error   ����   �   ContentPrefServiceParent.receiveMessage/listener.handleCompletion�                 7       �                                             reason <    r             �   5    �   
=   Y   �   �   ]   T  ]   : Q���֐�&ϐ�&Șs��u�8    target!   sendAsyncMessage;   ContentPrefs:HandleCompletion   requestId   reason   �   "   