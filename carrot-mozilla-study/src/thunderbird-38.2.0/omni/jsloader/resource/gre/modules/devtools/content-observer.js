�s�                -  (   �      v                                 0     resource://gre/modules/devtools/content-observer.js     H	                �    �   �   �   �   �   	�       ;   �   =   : 5        Q5      Q5      Q5      QQ;   �   
=   Y   : 5      QQ;   �   =   
:    	Q;   �   
=   Y   : 5      QQ;   5   ;   0   Q;   Y   �   ]   �   ]   �   ]   �   ]   0   Q;   �   0   Q���������	���ʘ�	�����ψ���ֈЈ4�	�ψ	Ɉ������ֈЈ3����Ո1�ʘ�ʘ(�ʘ2�ʘ;�И?��CИH�    Cc   Ci   Cu   Cr   require   chrome   Services   importG   resource://gre/modules/Services.jsm   events   sdk/event/core   promiseE   resource://gre/modules/Promise.jsm   Promise   module   exports   ContentObserver   prototype   startListening   stopListening/   _onContentGlobalCreated/   _onInnerWindowDestroyed!   GetInnerWindowID   ����      ContentObserver                 L       �                                 	            tabActor �  �               AT  5   0    QAA5   �   
A: 0   QAA5   �   
A: 0   QA�   
:  Q���ϐ�ψɐ�ψɐ�̈    _contentWindow   window/   _onContentGlobalCreated	   bind/   _onInnerWindowDestroyed   startListening   ����   Q   ContentObserver.prototype.startListening�                   C       �                                 
          P  )               ;    5   �   
A5   =   B: Q;    5   �   
A5   =   B: Q���ѐ̘��!�ѐ̘!���E    Services   obs   addObserver/   _onContentGlobalCreated?   content-document-global-created/   _onInnerWindowDestroyed-   inner-window-destroyed   ����   O   ContentObserver.prototype.stopListening�                   C       �                                 
          �  i  (             ;    5   �   
A5   =   B: Q;    5   �   
A5   =   B: Q���ѐ̘)��+�ѐ̘+���E    Services   obs   removeObserver/   _onContentGlobalCreated?   content-document-global-created/   _onInnerWindowDestroyed-   inner-window-destroyed   ����   c   ContentObserver.prototype._onContentGlobalCreated�                 )       �      
                                       subject   topic	   data   �  g  2             T  A5       ;   �   
A=   T  : Q�����و-    _contentWindow   events	   emit   global-created   ����   c   ContentObserver.prototype._onInnerWindowDestroyed�               <       �                                             subject   topic	   data   id   �  r  ;             T  �    
;   5   : 5   �   Q;   �   
A=   V   : Q���Ԉ͐�ڈ*    QueryInterface   Ci'   nsISupportsPRUint64	   data   events	   emit!   global-destroyed   ����   A   ContentObserver.GetInnerWindowID�                 2       �                                 	            window �  F	  C             T  �    
;   5   : �   
;   5   : 5   ���ʐʘD�	ʘFʘD�	ɘG�    QueryInterface   Ci+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils)   currentInnerWindowID