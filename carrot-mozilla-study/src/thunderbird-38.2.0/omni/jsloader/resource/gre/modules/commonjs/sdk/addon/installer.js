çżsš                  #   š                                #            resource://gre/modules/commonjs/sdk/addon/installer.js     ŕ                            	         ;    Y   =   ]   6   Q;   â   =   : 5      Q5      Q5      QQ;   ¸   

=   : 5   	   	QQ;   â   =   : 5      QQ;   â   =   : 5      QQ;   ;   	5   6   Q;   ;   	5   6   Q;   ;   	5   6   Q;   ;   	5   6   Q;       6   Q;      6   Q;      6   Q;      6   Q;      6   Q      Q;   ;   6   Q	tĘĐ	ĎčŃĐ4ĎĐĎĐŐCŐAŐ=Ő;!ĐLNĐ`bĐgiĐnpĐrtËyĐ    module   metadata   experimental   stability   Cc   Ci   Cu   require   chrome   AddonManager   importO   resource://gre/modules/AddonManager.jsm   defer   ../core/promise   setTimeout   ../timers   exports+   ERROR_NETWORK_FAILURE)   ERROR_INCORRECT_HASH%   ERROR_CORRUPT_FILE#   ERROR_FILE_ACCESS   install   uninstall   disable   enable   isActive   getAddon   ˙˙˙˙      install              â       š      ?                                     xpiPath   promise   resolve   reject	   file   listener   ^	  !       	      ;    â    :  5      Q5      Q5      QQ;   5   ¸   
;   5   :   QV  ¸   	
T  : Q   3  Qv  Q   ;   
5   : QV   ČČ    Y      ]      ]      ]      Q;   ¸   
V     : QV   Ęç%ŰČ×)ĚÔÎ/Ę8Ę<ĐBŮK    defer   promise   resolve   reject   Cc3   @mozilla.org/file/local;1   createInstance   Ci   nsILocalFile   initWithPath   exports#   ERROR_FILE_ACCESS   onInstallEnded   onInstallFailed!   onDownloadFailed   AddonManager#   getInstallForFile    ˙˙˙˙         e       ˙˙˙˙   ?   install/listener.onInstallEndedÁ                 :       š                                              aInstall   aAddon     u  0             T  ¸    
      : Q;   â         >T 5   : QŘ6á"    removeListener   setTimeout   id   ˙˙˙˙   A   install/listener.onInstallFailedÁ                 0       š                                              aInstall   î  8             T  ¸    
      : Q      T  5   : QŘ×    removeListener   error   ˙˙˙˙   C   install/listener.onDownloadFailedÁ                        š                                              aInstall   F  <             A¸    
T  : QĎ    onInstallFailed   ˙˙˙˙      install/<Á                 R       š                                 	             install Š  G	  B             T  5    @   0T  ¸   
      : QT  ¸   
:  Q         T  5    : QĘ+ŘÓ×    error   addListener   install     U          m   '   ˙˙˙˙˙˙˙˙             ˙˙˙˙      uninstall                      š   	                                    @      addonId   promise   resolve   reject   listener	  W  N             ;    â    :  5      Q5      Q5     QQY       ]      Q;   ¸   
   : Q;   â      : ¸   
A   V  : QV   ĘćRĐZŐ]ç_    defer   promise   resolve   reject   onUninstalled   AddonManager!   addAddonListener   getAddon	   then   ˙˙˙˙      onUninstalled                 ?       š                                              aAddon !
  ¤
  S             T  5          ;   ¸   
      : Q      :  QÎÚĎ
    id   AddonManager'   removeAddonListener   ˙˙˙˙      uninstall/<ĺ                        š                                              addon   8  ]             T  ¸    
:  "Î    uninstall   ˙˙˙˙      disable                 $       š                                      @      addonId|  í  b             ;    â       : ¸   
A    : ĎÔf    getAddon	   then   ˙˙˙˙      disable/<Ĺ                        š      
                                        addon ¨  é  c             T  C6    Q   Ę    userDisabled   ˙˙˙˙      enabled                 $       š                                      @      addonId    i             ;    â       : ¸   
A    : ĎÔm    getAddon	   then   ˙˙˙˙      enabled/<Ĺ                        š      
                                        addon =    j             T  B6    Q   Ę    userDisabled   ˙˙˙˙      isActive                 "       š      
                                       addonId Ş    p             ;    â    T  : ¸   
A    : ÍÔF    getAddon	   then   ˙˙˙˙      isActive/<ĺ                        š      	                                        addon Ö    q             T  5    E   QT  5    )ÎĘ    isActive   appDisabled   ˙˙˙˙      getAddon               P       š                                             id   promise   resolve   reject -  Â  t             ;    â    :  5      Q5      Q5      QQ;   ¸   
T  A    : QV   ĘçŮ    defer   promise   resolve   reject   AddonManager   getAddonByID   ˙˙˙˙      getAddon/<ĺ                 .       š                                               addon   Ź  v             T           T  :          :  )ÓÓ 