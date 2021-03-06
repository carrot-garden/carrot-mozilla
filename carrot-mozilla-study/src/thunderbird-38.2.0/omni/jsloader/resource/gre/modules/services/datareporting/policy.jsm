�s�                �  #   �   N   \     8                   %       0     resource://gre/modules/services/datareporting/policy.jsm     l|                �   �   �   �   �   �      Af    0    Q;   5      Q5      Q5      QQ;   �   
=   	: Q;   �   
=   
: Q;   �   
=   : Q;   �   
=   : Q;   �   
=   : Q?   Q�&\    QX�   Q;   ;   �   
Y   �   ]   �   ]   : 0   QA�   0   QA5   ;   �   
Y   =   ]   =   ]   =   ]   =   ]   =    ]   !�   ]   "�   ]   #�   ]   $�   ]   %�   	]   &: 0   QA�   
0   'QA5   ';   �   
Y   X�`;   (�   )
<    X�;   (�   *
:  : ]   +�	'�]   ,f   ]   -f   ]   .�   a   /�   b   /�   a   0�   b   0�   a   1�   b   1�   a   2�   b   2�   a   3�   a   4�   a   5�   b   5�   a   6�   a   7�   b   7�   a   8�   b   8�   a   9�   b   9�    a   :�   !b   :�   "a   ;�   #b   ;�   $a   <�   %b   <�   &a   =�   'b   =�   (a   >�   )]   ?�   *]   @�   +]   A�   ,]   B�   -]   C�   .]   D�   /]   E�   0]   F�   1]   G�   2]   H�   3]   I�   4]   J�   5]   K�   6]   L�   7]   M: 0   Q������!��#��'�ʘ;�	����̘����5�Ո1�Ո0�Ո,�Ո1�Ո6�!���#�ˈ�'�Ɉ�;�>��֘C�ʘM�ʘ?� ɘP��_̘f��hא�ʐ�ʐ�ʐ�ʐ�ʘv�ʘ�  ��ʘ�  ��ʘ�  ��ʘ�  ��ʘh�'ɘ�  ����  �̘� ���ט� &��:�����ɘ� 1�ɘ� ?�ʘ� D�ʘ� O�ʘ� T�ʘ� Z�ʘ� `�ʘ� f�ʐ����ʘ� t�ʘ� y�ʐ����ʘ� ��ʘ� ��ʐ����ʘ� ��ʘ� ��ʘ� ��ʘ� ��ʘ� ��ʘ� Ȉʘ� Έʘ� ڈʘ� ��ʘ� �ʘ� ��ʘ� �ʐ����ʘ� �ʘ� �ʘ� �ʘ� 7�ʘ� I�ʘ� \�ʘ� l�ʘ� y�ʘ� ��ʘ� шʘ� �ʘ� ��ʘ� �ʘ� �ʘ� A�ʘ� �ʘ� ��ʘ� ��ʘ� �%ɘ� �� !   EXPORTED_SYMBOLS   Cc   Ci   Cu   Components   classes   interfaces   utils   importG   resource://gre/modules/Services.jsmE   resource://gre/modules/Promise.jsm=   resource://gre/modules/Log.jsmG   resource://services-common/utils.jsQ   resource://gre/modules/UpdateChannel.jsm9   DATAREPORTING_POLICY_VERSION)   MILLISECONDS_PER_DAY'   OLDEST_ALLOWED_YEAR'   NotifyPolicyRequest   prototype   Object   freeze)   onUserNotifyComplete%   onUserNotifyFailed+   DataSubmissionRequest#   no-data-available#   NO_DATA_AVAILABLE   success%   SUBMISSION_SUCCESS   failure-soft/   SUBMISSION_FAILURE_SOFT   failure-hard/   SUBMISSION_FAILURE_HARD%   upload-in-progress%   UPLOAD_IN_PROGRESS#   onNoDataAvailable'   onSubmissionSuccess/   onSubmissionFailureSoft/   onSubmissionFailureHard%   onUploadInProgress'   DataReportingPolicy	   Math   floor   random%   POLL_INTERVAL_MSECO   SUBMISSION_REQUEST_EXPIRE_INTERVAL_MSEC3   FAILURE_BACKOFF_INTERVALS%   REQUIRED_LISTENERS   firstRunDateA   dataSubmissionPolicyNotifiedDateM   dataSubmissionPolicyBypassNotification+   dataSubmissionEnabled)   currentPolicyVersion)   minimumPolicyVersionG   dataSubmissionPolicyAcceptedVersion7   userNotifiedOfCurrentPolicy?   lastDataSubmissionRequestedDateA   lastDataSubmissionSuccessfulDate;   lastDataSubmissionFailureDate-   nextDataSubmissionDateA   currentDaySubmissionFailureCount/   pendingDeleteRemoteData3   healthReportUploadEnabled1   healthReportUploadLocked?   recordHealthReportUploadEnabled!   deleteRemoteData   startPolling   stopPolling   now)   checkStateAndTrigger%   ensureUserNotified;   _recordDataPolicyNotification   _migratePrefs9   _processInProgressSubmission5   _dispatchSubmissionRequest/   _handleSubmissionResult1   _handleSubmissionFailure/   _moveScheduleForward24h   _futureDate         @                  +   DataSubmissionRequest   '   DataReportingPolicy   9   DATAREPORTING_POLICY_VERSION                  ����   '   NotifyPolicyRequest                        �                                              policy   deferred  �  �  ;             AT  0    QAT 0   Q���ʐ�ʈ    policy   deferred   ����   g   NotifyPolicyRequest.prototype<.onUserNotifyComplete�                          �      	                                     m	  �	  C             A5    �   
:  ���͈�    deferred   resolve   ����   c   NotifyPolicyRequest.prototype<.onUserNotifyFailed�                        �      	                                       error V
  �
  M             A5    �   
T  : ���Ј�    deferred   reject   ����   5   this.DataSubmissionRequest�                 /       �                                              promise   expiresDate   isDelete   �  (  _             AT  0    QAT 0   QAT 0   QA@0   QA@0   Q���ʐ�ʐ�ʘd�Ȑ�Ȉ    promise   expiresDate   isDelete   state   reason   ����   #   onNoDataAvailable�                   ,       �                                           j  �  v             AA5   0    QA5   �   
A: QA5   5   ���͐�Ґ�̈    state#   NO_DATA_AVAILABLE   promise   resolve   ����   '   onSubmissionSuccess�                 6       �                                          	   date   �  �             AA5   0    QAT  0   QA5   �   
A: QA5   5   ���͐�ʐ�Ґ�̈    state%   SUBMISSION_SUCCESS   submissionDate   promise   resolve   ����   /   onSubmissionFailureSoft�                 E       �                                              reason ,  �  �             T  H   
@U  QAA5   0    QAT  0   QA5   �   
A: QA5   5   �ʐ�͐�ʐ�Ґ�̈    state/   SUBMISSION_FAILURE_SOFT   reason   promise   resolve   ����   /   onSubmissionFailureHard�                 E       �                                              reason �  -  �             T  H   
@U  QAA5   0    QAT  0   QA5   �   
A: QA5   5   �ʐ�͐�ʐ�Ґ�̈    state/   SUBMISSION_FAILURE_HARD   reason   promise   resolve   ����   q   this.DataSubmissionRequest.prototype<.onUploadInProgress�                 E       �                                              reason �  ;  �             T  H   
@U  QAA5   0    QAT  0   QA5   �   
A: QA5   5   �ʐ�͐�ʐ�Ґ�̈    state%   UPLOAD_IN_PROGRESS   reason   promise   resolve   ����   1   this.DataReportingPolicy�                `      �      �                        $            prefs#   healthReportPrefs   listener   o   k'  �             A;   5   �   
=   : 0    QA5    ;   5   5   0   QA5   - �
:  �   Q   3m5   	W   QT V   7    ;   
=   V   R p�Q�   
:  5   ����� AT  0   QAT 0   QAT 0   QA@0   QA�   
:  QA5   �   
:      AA�   
:  0   QA�   �   
A: 0   QT �   
=   A5   : QA5   �   
:      AA�   
;   : 0   QA@0   Q���׈ɐ�ې��8Gѐ����ː��  ���  �ˈ����Ҙ�  �ʐ�ʐ�ʐ�Ȑ��̐��͈���Ɉɘ� �͘� �� �(ɘ� �ِ���͈��Έɘ� �Ȉ) 	   _log   Log   repository   getLogger;   Services.DataReporting.Policy   level   Level   Debug%   REQUIRED_LISTENERS   value   Errorg   Passed listener does not contain required handler: 	   next	   done   _prefs%   _healthReportPrefs   _listener%   _userNotifyPromise   _migratePrefs   firstRunDate   getTime   now+   uploadEnabledObserver	   bind   observe   uploadEnabled-   nextDataSubmissionDate   _futureDate)   MILLISECONDS_PER_DAY9   _inProgressSubmissionRequest    ����          handler       ����   -   onUploadEnabledChanged�                   <       �                                           `$  �%              A5    D   QA5      A5   �   
=   : QA�   
:  Q����������֐�̈ /   pendingDeleteRemoteData3   healthReportUploadEnabled	   _log	   infoa   uploadEnabled pref changed. Scheduling deletion.!   deleteRemoteData   U   G       K   R   ����                   ��     ��6                                  '   onRequestDataUpload   +   onRequestRemoteDelete   %   onNotifyDataPolicy                  ����   a   this.DataReportingPolicy.prototype<.firstRunDate�                   (       �                                           �.  /  O      	      ;    �   
A5   =   >A5   ;   : ���ސ�� P���8    CommonUtils   getDatePref   _prefs   firstRunTime	   _log'   OLDEST_ALLOWED_YEAR   ����   a   this.DataReportingPolicy.prototype<.firstRunDate�                 >       �                                             value +/  �/  T            A5    �   
=   T  : Q;   �   
A5   =   T  ;   : Q���ڐ�ڐ�� V���1 	   _log   debug1   Setting first-run date:    CommonUtils   setDatePref   _prefs   firstRunTime'   OLDEST_ALLOWED_YEAR   ����   �   this.DataReportingPolicy.prototype<.dataSubmissionPolicyNotifiedDate�                   (       �                                           0  �0  Z      	      ;    �   
A5   =   >A5   ;   : ���Ґ�˘� [����C    CommonUtils   getDatePref   _prefsA   dataSubmissionPolicyNotifiedTime	   _log'   OLDEST_ALLOWED_YEAR   ����   �   this.DataReportingPolicy.prototype<.dataSubmissionPolicyNotifiedDate�                 >       �                                             value �0  �1  `            A5    �   
=   T  : Q;   �   
A5   =   T  ;   : Q���ڐ�אȘ� b���8 	   _log   debug9   Setting user notified date:    CommonUtils   setDatePref   _prefsA   dataSubmissionPolicyNotifiedTime'   OLDEST_ALLOWED_YEAR   ����   �   this.DataReportingPolicy.prototype<.dataSubmissionPolicyBypassNotification�                          �      	                                     �1  O2  f            A5    �   
=   B: ���ӈ�A    _prefs   getM   dataSubmissionPolicyBypassNotification   ����   �   this.DataReportingPolicy.prototype<.dataSubmissionPolicyBypassNotification�                        �                                             value ~2  �2  j            A5    �   
=   T    : ���҈A�����ŌC    _prefs   setM   dataSubmissionPolicyBypassNotification   ����   s   this.DataReportingPolicy.prototype<.dataSubmissionEnabled�                          �      
                                     �3  !4  t            A5    �   
=   C: ����ӈ�/    _prefs   get+   dataSubmissionEnabled   ����   s   this.DataReportingPolicy.prototype<.dataSubmissionEnabled�                        �                                             value ?4  �4  y            A5    �   
=   T    : Q���҈)�����֌2    _prefs   set+   dataSubmissionEnabled   ����   q   this.DataReportingPolicy.prototype<.currentPolicyVersion�                          �      	                                     �4  �4  }            A5    �   
=   ;   : ���׈�F    _prefs   get)   currentPolicyVersion9   DATAREPORTING_POLICY_VERSION   ����   q   this.DataReportingPolicy.prototype<.minimumPolicyVersion�                 d       �                                 
             channel   channelPref5  �6  �            ;    �   
B: �   QA5   �   
=   V   : �  QV  ;   I   V     A5   �   
=   ?: ����͈
Ȑ�׈Ȑ��	�܈�+    UpdateChannel   get   _prefs;   minimumPolicyVersion.channel-   undefined)   minimumPolicyVersion   ����   �   this.DataReportingPolicy.prototype<.dataSubmissionPolicyAcceptedVersion�                          �      	                                     �6   7  �            A5    �   
=   >: ���ӈ�:    _prefs   getG   dataSubmissionPolicyAcceptedVersion   ����   �   this.DataReportingPolicy.prototype<.dataSubmissionPolicyAcceptedVersion�                        �                                             value L7  �7  �            A5    �   
=   T  : Q���و>    _prefs   setG   dataSubmissionPolicyAcceptedVersion   ����      this.DataReportingPolicy.prototype<.userNotifiedOfCurrentPolicy�                   '       �                                           '8  �8  �            A5    �   
:  >E   QA5   A5   ���͈ːΈR A   dataSubmissionPolicyNotifiedDate   getTimeG   dataSubmissionPolicyAcceptedVersion)   currentPolicyVersion   ����   �   this.DataReportingPolicy.prototype<.lastDataSubmissionRequestedDate�                   (       �                                           �9  y:  �      	      ;    �   
A5   =   >A5   ;   : ���Ґ�˘� �����C    CommonUtils   getDatePref%   _healthReportPrefs?   lastDataSubmissionRequestedTime	   _log'   OLDEST_ALLOWED_YEAR   ����   �   this.DataReportingPolicy.prototype<.lastDataSubmissionRequestedDate�                 $       �                                             value �:  [;  �            ;    �   
A5   =   T  ;   : Q���Ґ�Ș� �����8    CommonUtils   setDatePref%   _healthReportPrefs?   lastDataSubmissionRequestedTime'   OLDEST_ALLOWED_YEAR   ����   �   this.DataReportingPolicy.prototype<.lastDataSubmissionSuccessfulDate�                   (       �                                           1<  =  �      	      ;    �   
A5   =   >A5   ;   : ���Ґ�˘� �����C    CommonUtils   getDatePref%   _healthReportPrefsA   lastDataSubmissionSuccessfulTime	   _log'   OLDEST_ALLOWED_YEAR   ����   �   this.DataReportingPolicy.prototype<.lastDataSubmissionSuccessfulDate�                 $       �                                             value ,=  �=  �            ;    �   
A5   =   T  ;   : Q���Ґ�Ș� �����8    CommonUtils   setDatePref%   _healthReportPrefsA   lastDataSubmissionSuccessfulTime'   OLDEST_ALLOWED_YEAR   ����   �   this.DataReportingPolicy.prototype<.lastDataSubmissionFailureDate�                   (       �                                           �>  y?  �      	      ;    �   
A5   =   >A5   ;   : ���Ґ�̘� Ɉ���F    CommonUtils   getDatePref%   _healthReportPrefs;   lastDataSubmissionFailureTime	   _log'   OLDEST_ALLOWED_YEAR   ����   �   this.DataReportingPolicy.prototype<.lastDataSubmissionFailureDate�                 $       �                                             value �?  W@  �            ;    �   
A5   =   T  ;   : Q���Ґ�Ș� ψ���8    CommonUtils   setDatePref%   _healthReportPrefs;   lastDataSubmissionFailureTime'   OLDEST_ALLOWED_YEAR   ����   u   this.DataReportingPolicy.prototype<.nextDataSubmissionDate�                   (       �                                           $A  �A  �      	      ;    �   
A5   =   >A5   ;   : ���Ґ�˘� ۈ���C    CommonUtils   getDatePref%   _healthReportPrefs-   nextDataSubmissionTime	   _log'   OLDEST_ALLOWED_YEAR   ����   u   this.DataReportingPolicy.prototype<.nextDataSubmissionDate�                 $       �                                             value B  �B  �            ;    �   
A5   =   T  ;   : Q���ҐȐ�� ����1    CommonUtils   setDatePref%   _healthReportPrefs-   nextDataSubmissionTime'   OLDEST_ALLOWED_YEAR   ����   �   this.DataReportingPolicy.prototype<.currentDaySubmissionFailureCount�                 @       �                                              vgC  D  �            A5    �   
=   >: �   Q;   �   
V   :     >W   QV   ���ӈȐ��Ј�������	 %   _healthReportPrefs   getA   currentDaySubmissionFailureCount   Number   isInteger   ����   �   this.DataReportingPolicy.prototype<.currentDaySubmissionFailureCount�                 E       �                                             value +D  �D  �            ;    �   
T  :     ;   =   T  R pA5   �   
=   T  : Q���ψ��ψ����وG    Number   isInteger   Error/   Value must be integer: %   _healthReportPrefs   setA   currentDaySubmissionFailureCount   ����   w   this.DataReportingPolicy.prototype<.pendingDeleteRemoteData�                          �                                           F  qF              A5    �   
=   B:   �����ӈ�> %   _healthReportPrefs   get/   pendingDeleteRemoteData   ����   w   this.DataReportingPolicy.prototype<.pendingDeleteRemoteData�                        �                                             value �F  �F              A5    �   
=   T    : Q���҈7�����Ȍ@ %   _healthReportPrefs   set/   pendingDeleteRemoteData   ����   {   this.DataReportingPolicy.prototype<.healthReportUploadEnabled�                          �                                           OG  �G              A5    �   
=   C:   �����ӈ�3 %   _healthReportPrefs   get   uploadEnabled   ����   {   this.DataReportingPolicy.prototype<.healthReportUploadEnabled�                        �                                             value @H  �H              A5    �   
=   T    : Q���҈-�����Ҍ6 %   _healthReportPrefs   set   uploadEnabled   ����   y   this.DataReportingPolicy.prototype<.healthReportUploadLocked�                          �      	                                     I  EI              A5    �   
=   : ���҈�0 %   _healthReportPrefs   locked   uploadEnabled   ����   �   this.DataReportingPolicy.prototype<.recordHealthReportUploadEnabled�               E       �                                          	   flag   reason   result  M  �M  7            T H   =    U Q@�   QT      A�   
T : W   QAT  0   QV   �ΐ�����ˈ	Ȑ���ʐ��    no-reason!   deleteRemoteData3   healthReportUploadEnabled   ����   !   deleteRemoteData�                 T       �                                              reason MO  �P  I            T  H   =    U  QA5   �   
=   T  : QAC0   QAA�   
:  0   QA�   
:  �ΐ�ڐ��Ȑ����Ɉɐ�Ȉ�    no-reason	   _log	   infoA   Remote data deletion requested: /   pendingDeleteRemoteData-   nextDataSubmissionDate   now)   checkStateAndTrigger   ����      startPolling�                   n       �      0                                    �Q  �R  \            A�    
:  QA;   5   �   
;   5   : 0   QA5   �   
Y   �    �   
A: ]   	A5   
A5   5   : Q���̐��܈ɐ�Ґ�̐��� a�Ȑ��ј� `������B    stopPolling   _timer   Cc)   @mozilla.org/timer;1   createInstance   Ci   nsITimer!   initWithCallback	   bind   notify%   POLL_INTERVAL_MSEC)   TYPE_REPEATING_SLACK   ����      notify�                          �                                           jR  �R  a            A�    
:  Q���̈ )   checkStateAndTrigger   ����      stopPolling�                   %       �                                           �S  �S  l            A5       A5    �   
:  QA@0    Q����ѐ�Ȉ    _timer   cancel   ����      now�                          �                                           �T  �T  y            ;    R  ����� 	   Date   ����   )   checkStateAndTrigger�                 �      �      �                           +             now	   nowT%   nextSubmissionDate�V  �_  �      	      A5        A5   �   
=   : QA�   
:  �   QV   �   
:  �  QA5   �  QV  �   
:  V  �;      ,A5   �   
=   	V  : QA�   

:  QA�   
:     A5      LV  V  �   
:     "A5   �   
=   V  : QA�   
=   C: A5       A5   �   
=   : QA�   
:      A5   �   
=   : QV  V  �   
:     "A5   �   
=   V  : QA�   
=   B: ��������֐�����ȈȐ�ˈȐ�˘� �ˈ���Ґ�� ���� ��̘� �Ȉ�������ψ��Ґ�� ���������Έ������֐�����Ȉ��֐���� �ψ��Ґ�� ���������Έ�> +   dataSubmissionEnabled	   _log   debugW   Data submission is disabled. Doing nothing.   now   getTime-   nextDataSubmissionDate)   MILLISECONDS_PER_DAY	   warn�   Next data submission time is far away. Was the system clock recently readjusted? /   _moveScheduleForward24h9   _processInProgressSubmission/   pendingDeleteRemoteData]   Deletion request is scheduled for the future: 5   _dispatchSubmissionRequest+   onRequestRemoteDelete3   healthReportUploadEnabledO   Data upload is disabled. Doing nothing.%   ensureUserNotified�   The user has not been notified about the data submission policy. Not attempting upload.c   Next data submission is scheduled in the future: '   onRequestDataUpload   ����   m   this.DataReportingPolicy.prototype<.ensureUserNotified�                      �      q                                     deferred   request�`  e  �            A5    D   QA5      CA5      B;   �   
:  �   QV   5   �   
�    �   
A: A�   �   
A: : QA5   �   	
=   
: Q;   AV   R �  Q�A5   �   
V  : Q   B��  Qv�  QA5   �   
=   ;   �   
V  : : Q�    AV   5   0   QB���������������̈Ȑ�ܐ���� ܈$���͐����� ߈�� ܈�� �֐�ˈ
Ȑ���ڐ̐�ҐЈ�� �ː����А��� 7   userNotifiedOfCurrentPolicyM   dataSubmissionPolicyBypassNotification%   _userNotifyPromise   Promise   defer   promise	   then	   bind	   _log	   infoE   Requesting display of data policy.'   NotifyPolicyRequest   _listener%   onNotifyDataPolicy	   warnW   Exception when calling onNotifyDataPolicy:    CommonUtils   exceptionStr   ����      onSuccess�                   &       �                                           <b  �b  �            A�    
A�   
:  A5   : QA@0   Q���Ј#Ɉ���ݔ�Ȉ ;   _recordDataPolicyNotification   now)   currentPolicyVersion%   _userNotifyPromise   ����   q   this.DataReportingPolicy.prototype<.ensureUserNotified/<�                 2       �                                             error �b  �c  �            A5    �   
=   ;   �   
T  : : QA@0   Q���Ґψ�� �����Ȉ 	   _log	   warn]   Data policy notification presentation failed:    CommonUtils   exceptionStr%   _userNotifyPromise    ����         ex         �         �   6   ����   ����   �   this.DataReportingPolicy.prototype<._recordDataPolicyNotification�                 9       �                                          	   date   version  Je  Af  �            A5    �   
=   T =   T  : QAT  0   QAT 0   Q���֐ʘ� ����ʐ�ʈ3 	   _log   debug]   Recording data policy notification to version     on date A   dataSubmissionPolicyNotifiedDateG   dataSubmissionPolicyAcceptedVersion   ����   c   this.DataReportingPolicy.prototype<._migratePrefs�                          �                                          ^f  �g  �            A5    �   
f    : Q����֘� �    _prefs   reset                  9   dataSubmissionPolicyAccepted   I   dataSubmissionPolicyBypassAcceptance   A   dataSubmissionPolicyResponseType   A   dataSubmissionPolicyResponseTime                  ����   9   _processInProgressSubmission�                 �       �      =                                        now�g  j              A5        BA�   
:  �   
:  �   QA5    5   �   
:  V      A5   �   
=   : QCA5   �   
=   : QA5    5   	�   

;   =   R : QA@0    QA�   
:  QB���������ȈҐ҈���֐�����֐�݈1����ϔ�Ȑ�̐��� 9   _inProgressSubmissionRequest   now   getTime   expiresDate	   _log	   infoi   Waiting on in-progress submission request to finish.	   warni   Old submission request has expired from no activity.   promise   reject   Error)   Request has expired.1   _handleSubmissionFailure   ����   5   _dispatchSubmissionRequest�              s      �      �                        "            handler   isDelete   now   deferred%   requestExpiresDate   onSuccess   onError   chained  Gj  ap              A�    
:  �   QAV   0   Q;   �   
:  �  QA�   
A5   : �  QA;   V  V  T R 0   Q�    �   
A: �  Q�   �   
A: �  QV  5   	�   

V  V  : �  QA5   �   
=   V  : Q���   �   QA5   T  �
A5   : �   QV  �   

A�   @: W  Q��   d��  Qv�  QA5   �   
=   T  =   ;   �   
V  : : QA@0   QA�   
:  Q�ș�    V  ���ȈȐ���ː�̈Ȑ��ΈȐ�ː��� �(ɐ����̐���� #�Ș� (�̘� -�� (�Ș� /�؈
Ȑ��Ґ�� 1����D͐�
҈
ɐ�҈
ϐ̐�ܐЈ�� 7����Ȑ�̐�ː����    now?   lastDataSubmissionRequestedDate   Promise   defer   _futureDateO   SUBMISSION_REQUEST_EXPIRE_INTERVAL_MSEC9   _inProgressSubmissionRequest+   DataSubmissionRequest	   bind   promise	   then	   _log	   infoW   Requesting data submission. Will expire at    _listener	   warn/   Exception when calling    :    CommonUtils   exceptionStr1   _handleSubmissionFailure   ����      onSuccess�                        �                                             result �l  �l  #            A@0    QA�   
T  : Q���Ȑ�ψ% 9   _inProgressSubmissionRequest/   _handleSubmissionResult   ����      onError�                 >       �                                             error ,m  n  (            A5    �   
=   ;   �   
T  : : QA@0   QA�   
:  Q���Ґψ�� )����Ȑ�̈  	   _log   errorY   Error when handling data submission result:    CommonUtils   exceptionStr9   _inProgressSubmissionRequest1   _handleSubmissionFailure    ����         promise            G   _dispatchSubmissionRequest/chained<�                          �                                            ?o  Lo  5            �   ��#�     ����         ex         �   H      �   <   ����     X   ��������e           ����   /   _handleSubmissionResult�                    �       �                         4            request   state   reason �p  �x  A      
      T  5    �   QT  5   D   Q=   �  QA5   �   
=   V   : QV   T  5      ���  QT  5      (AB0   QA5   �   
=   	: Q   A5   �   
=   
: QAT  5   0   Q;   T  5   �   
:  ;   R �  QA5      A�   
:  W  QAV  0   QA>0   Q�ș�V   T  5      VT  5      %A5   �   
=   : QAB0   QA5   �   
=   : QA�   
:  QV   T  5      @A5   �   
=   V  : QAA�   
:  0   QA�   
:  QV   T  5      @A5   �   
=   V  : QAA�   
:  0   QA�   
:  Q;   =   T  5    R p���͐�ؐ�ې��ː�#��Ȑ�ې��֐���ϐ��
�ՈɈ����Ș� V��ȈȐ���ː�Ȑ���������֐�Ȑ�����֐�̐��� n���ې�Ɉ%ɐ�̐�������ې�Ɉ%ɐ�̐�����Ԉ�F    state   reason   no reason	   _log	   info?   Got submission request result: %   SUBMISSION_SUCCESS   isDelete/   pendingDeleteRemoteDataA   Successful data delete reported.A   Successful data upload reported.A   lastDataSubmissionSuccessfulDate   submissionDate	   Date   getTime)   MILLISECONDS_PER_DAY   now-   nextDataSubmissionDateA   currentDaySubmissionFailureCount#   NO_DATA_AVAILABLEw   Remote data delete requested but no remote data was stored._   No data was available to submit. May try later.1   _handleSubmissionFailure/   SUBMISSION_FAILURE_SOFT	   warn9   Soft error submitting data: ;   lastDataSubmissionFailureDate/   SUBMISSION_FAILURE_HARD9   Hard error submitting data: /   _moveScheduleForward24h   ErrorQ   Unknown state on DataSubmissionRequest:     ����      %   nextSubmissionDate        S   �   ��������            ����   1   _handleSubmissionFailure�                 {       �   	   &                                        offset�x  �z              A5    A5   �      )A5   �   
=   : QA�   
:  QBA5   A5    7�   QAA�   
V   : 0   QA5    #?�
0    QQC�����֐��̐�����Ґ�͈ɐ�Ր�� A   currentDaySubmissionFailureCount3   FAILURE_BACKOFF_INTERVALS   length	   _log	   warn�   Reached the limit of daily submission attempts. Rescheduling for tomorrow./   _moveScheduleForward24h-   nextDataSubmissionDate   _futureDate   ����   /   _moveScheduleForward24h�                 D       �                                              d%{  �{  �            A�    
;   : �   QA5   �   
=   V   : QAV   0   QA>0   Q���͈Ȑ�ې��ː�Ȉ*    _futureDate)   MILLISECONDS_PER_DAY	   _log	   infoW   Setting next scheduled data submission for -   nextDataSubmissionDateA   currentDaySubmissionFailureCount   ����      _futureDate�                 $       �                                             offset #|  e|  �            ;    A�   
:  �   
:  T  R ���Έш�����( 	   Date   now   getTime