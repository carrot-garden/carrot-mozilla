çżsš                Ŕ  #   š   1                                        resource://gre/modules/DownloadTaskbarProgress.jsm     `/                                     Af    6    Q;   5      Q;   5      Q;   5      Q;   5   	   Q;   ¸   

=   : Q;   ¸   
A=   =   : Q=      Q=      QAY      ]      ]      ]      a      a      a   6   Qn   Y   B]   @]   @]      ]      ]    @]   !B]   "   	]   #@]   $>]   %>]   &   
]   '   ]   (   ]   )   ]   *   ]   +   ]   ,   ]   -   ]   .   ]   /   ]   0o   QcĚ	ĐĐĐĐŐ3ŇIËËĘ.Ę=ĘIĘPĘWĐ^cfilqĘ  Ę  Ľ  ´Ę  şĘ  ĎĘ  ćĘ  ˙Ę DĘ [Ę dĘ jĘĘĐc" !   EXPORTED_SYMBOLS   Cc   Components   classes   Ci   interfaces   Cu   utils   Cr   results   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   ServicesG   resource://gre/modules/Services.jsm   kTaskbarIDWin=   @mozilla.org/windows-taskbar;1   kTaskbarIDMacI   @mozilla.org/widget/macdocksupport;1/   DownloadTaskbarProgress	   init'   onBrowserWindowLoad)   onDownloadWindowLoad+   activeTaskbarProgress9   activeWindowIsDownloadWindow   taskbarState=   DownloadTaskbarProgressUpdater   _initialized   _taskbar   _dm   _init   _uninit-   _activeTaskbarProgress;   _activeWindowIsDownloadWindow!   _setActiveWindow   _taskbarState   _totalSize#   _totalTransferred   _shouldSetState   _updateTaskbar   _clearTaskbar   _updateStatus+   _onActiveWindowUnload!   onProgressChange+   onDownloadStateChange!   onSecurityChange   onStateChange   observe                  /   DownloadTaskbarProgress                  ˙˙˙˙      DTP_init                          š      
                                      &                 ;       ;    ¸   
:  QĐ' =   DownloadTaskbarProgressUpdater   _init   ˙˙˙˙   /   DTP_onBrowserWindowLoad                 >       š                                              aWindow Á  ą  .             A¸    
:  Q;       ;   5       ;   ¸   
T  B: QĚ4ËÔ@ 	   init=   DownloadTaskbarProgressUpdater-   _activeTaskbarProgress!   _setActiveWindow   ˙˙˙˙   1   DTP_onDownloadWindowLoad                 "       š                                              aWindow e  ů  =             ;        ;    ¸   
T  C: QBÔ? =   DownloadTaskbarProgressUpdater!   _setActiveWindow   ˙˙˙˙   e   this.DownloadTaskbarProgress.activeTaskbarProgressÁ                          š                                            d  ň  I             ;        @;    5   MË= =   DownloadTaskbarProgressUpdater-   _activeTaskbarProgress   ˙˙˙˙   s   this.DownloadTaskbarProgress.activeWindowIsDownloadWindowÁ                          š                                            	  Ź	  P             ;        @;    5   TËD =   DownloadTaskbarProgressUpdater;   _activeWindowIsDownloadWindow   ˙˙˙˙   S   this.DownloadTaskbarProgress.taskbarStateÁ                          š                                            Á	  F
  W             ;        @;    5   [Ë4 =   DownloadTaskbarProgressUpdater   _taskbarState   ˙˙˙˙      DTPU_init                   O      š      v                           ,               q             A5       AC6    Q;   ;   q   OA;   ;   7¸   
;   5   : 6   QA5   5       n   @o   Q   N;   	;   q   0A;   ;   	7¸   
;   5   : 6   
Q   n   @o   QA;   5   5   6   QA;   5   ¸   
;   5   : 6   QA5   ¸   
A: QA;   5   ¸   
;   5   : 6   QA5   ¸   
A=   B: QA¸   
:  QvČxËJÝÉ
Ě|ĚË+ÓĘ  $ÎĚÖŇĘ  ÉŇŇĘ  ÉŘĚ    _initialized   kTaskbarIDWin   Cc   _taskbar   getService   Ci   nsIWinTaskbar   available=   DownloadTaskbarProgressUpdater   kTaskbarIDMac-   _activeTaskbarProgress%   nsITaskbarProgress   _taskbarState#   STATE_NO_PROGRESS   _dm?   @mozilla.org/download-manager;1%   nsIDownloadManager/   addPrivacyAwareListener   _os?   @mozilla.org/observer-service;1%   nsIObserverService   addObserver1   quit-application-granted   _updateStatus   ˙˙˙˙      DTPU_uninit                   :       š                                            ď                  A5    ¸   
A: QA5   ¸   
A=   : QA@6   QAB6   QŇ×ČČ    _dm   removeListener   _os   removeObserver1   quit-application-granted-   _activeTaskbarProgress   _initialized   ˙˙˙˙   )   DTPU_setActiveWindow                        š                                                aWindow#   aIsDownloadWindow    4  ´                  ˙˙˙˙   '   DTPU_shouldSetState                          š                                              é    ž             C    ˙˙˙˙   %   DTPU_updateTaskbar                   S       š      *                                        ¤  Ď             A5        A¸   
:     -A5    ¸   
A5   A5   A5   : Q   A¸   
:  QČ(Ó  ÖÉ  ŰĚ -   _activeTaskbarProgress   _shouldSetState!   setProgressState   _taskbarState#   _totalTransferred   _totalSize   _clearTaskbar   ˙˙˙˙   #   DTPU_clearTaskbar                   ,       š                                            Š  M  ć             A5       %A5    ¸   
;   5   5   : QÍĎ  é -   _activeTaskbarProgress!   setProgressState   Ci%   nsITaskbarProgress#   STATE_NO_PROGRESS   ˙˙˙˙   #   DTPU_updateStatus                |      š      w                         !              numActive   totalSize!   totalTransferred    1(  ˙       
      A5    5   A5    5      Q>   Q>   QV   >    A;   5   5   6   Q  Ć       Q   Q>   Q>   QZ  A5    5   `   A5    5   `  ¸   	
   ¸   

A: : QV         N  >   'A;   5   5   6   Q>  Q   A;   5   5   6   Q   `  >D   QV         .A;   5   5   6   Q>  Q>  Q   A;   5   5   6   QČÇA   6   QA   6   QÜŰÓ
Ďâ  J˙˙˙ź ĘI"
Ö
Ě
Ű *×)ÖĚŘĚĚ*    _dm'   activeDownloadCount5   activePrivateDownloadCount   _taskbarState   Ci%   nsITaskbarProgress#   STATE_NO_PROGRESS   activeDownloads-   activePrivateDownloads   forEach	   bind   STATE_PAUSED'   STATE_INDETERMINATE   STATE_NORMAL   _totalSize#   _totalTransferred    ˙˙˙˙         numPaused      numScanning             '   DTPU_updateStatus/<Á                Ü       š      9                                     downloads Ą!  #$                 Çm   QT  ¸    
:  ¸   
;   5   :    QV   5   ×˙   /  V   5     Q  V   5     QV   5   A5   5   	      #?   QQ   /V   5   A5   5   
      #?   QQČăT  ¸   
:  ˙˙˙/(  Ö,ĘÜĚÎxÎxŐŐŐŃ Ô    getNext   QueryInterface   Ci   nsIDownload   percentComplete	   size#   amountTransferred   state   _dm   DOWNLOAD_PAUSED#   DOWNLOAD_SCANNING   hasMoreElements    ˙˙˙˙          download           Ö          Ŕ   ˙˙˙˙    W     ˙˙˙˙   ˙˙˙˙   3   DTPU_onActiveWindowUnload                Ť       š      :                                   !   aTaskbarProgress *  ,  D      	      A5    T        Q  Q   Q;   5   ¸   
;   5   :    QV   ¸   
@:   Q@  QV  ¸   
:     ,V  ¸   
:  ¸   	
;   5   
: W  QA¸   
V  B: QČĘ×
ŃĘ GČ
Ě
Č
Ë
ËÜ QŇ F: -   _activeTaskbarProgress   CcO   @mozilla.org/appshell/window-mediator;1   getService   Ci#   nsIWindowMediator   getEnumerator   hasMoreElements   getNext   QueryInterface   nsIDOMWindow!   _setActiveWindow    ˙˙˙˙          windowMediator       windows       newActiveWindow              ˙˙˙˙   ˙˙˙˙   +   DTPU_onProgressChange                          š                                            -  Ç-  [            A¸    
:  QA¸   
:  QĚĚ    _updateStatus   _updateTaskbar   ˙˙˙˙   5   DTPU_onDownloadStateChange                          š                                            H.  .  d            A¸    
:  QA¸   
:  QĚĚ    _updateStatus   _updateTaskbar   ˙˙˙˙   _   DownloadTaskbarProgressUpdater.onSecurityChangeÁ                          š                                              Ś.  Ź.  j                  ˙˙˙˙   Y   DownloadTaskbarProgressUpdater.onStateChangeÁ                          š                                              Č.  Î.  l                 ˙˙˙˙      DTPU_observe                        š      
                                        aSubject   aTopic   aData   ń.  \/  n            T =       A¸   
:  QÉĚ 1   quit-application-granted   _uninit