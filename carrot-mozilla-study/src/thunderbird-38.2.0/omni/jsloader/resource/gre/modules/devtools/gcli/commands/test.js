ç¿s¹                N     ¹   ,   û                                 0     resource://gre/modules/devtools/gcli/commands/test.js     ©                               
   ;    â    =   : Qn   ;    â    =   : 1   Qn   ;    â    =   : 5   1   Qn   ;    â    =   : 1   Qn   ;    â    =   	: 1   Qn   
;    â    =   	: 5   
1   
Qn   ;    â    =   : 5   1   Q;   Z   0   Q;   Z  Y   =   ]   =   ]   =   ]   C]       ]   `   Y   =   ]   =   ]   =   ]   Z  Y   =   ]   =   ]   =   ]   ;   ]   `   Y   =   ]   =   ]   =    ]   C]   !`  ]   "=   #]   $C]   %   ]   &`  Y   =   ']   =   #]   (=   )]   *   ]   &`  Y   =   ']   =   #]   (=   +]   *   ]   &`  0   QÓÔÉÿÿÿýÔÎÿÿÿýÔ
ÉÿÿÿýÔÉÿÿÿýÔÎÿÿÿýÔÎÿÿÿýÏÉÊÊÊÎ*ÊÊÊÊÊÊÎ5ÊÊÊÏ<ÊÎeÊÊÊÎnÊÊÊÔ  Ð    require   ../test/suite   examiner/   ../testharness/examiner   stati+   ../testharness/status   helpers   ../test/helpers   cli   ../cli   Requisition5   createRequisitionAutomator=   ../test/automators/requisition   exports!   optionsContainer   items	   type	   item   suite	   name   selection   parent   cacheable   lookup   command	   test'   Run GCLI unit tests   description%   Test suite to run.   defaultValue   usehost   booleanK   Run the unit tests in the host window   option   params   examiner-output   returnType   noRemote	   exec   converter	   from   string   to	   view   ÿÿÿÿ   +   exports.items<.lookupÁ                   *       ¹                                          w    $             ;    ¸   
;   5   : ¸   
    : ÖÓ'	    Object	   keys   examiner   suites   map   ÿÿÿÿ   /   exports.items<.lookup/<Á                 "       ¹                                          	   name ²  ÿ  %             Y   T  ]    ;   5   T  7]   	ÈÔ 	   name   examiner   suites   value   ÿÿÿÿ   '   exports.items<.execÁ               Z      ¹      V                          (      D   	   args   context   options   requisition Ü  w  >             T  5    E   Q;   5   Ù   >H   ;   =   R pV   QT  5       ;   5   >7W   Q   Y   ;   '=   IE   Q;   5   =   	H]   
B]   B]   C]   ;      5   R ]   W   QV   ;   â   V   5   : 0   QV   5      Q   5   5   ¸   
=   : ¸   
   : Q;   ¸   
:  Q;   ¸   
:  QT  5   ¸   
V   : ¸   
    : ßËC
ÈÖG
	ç



ÐÍO×ÉR
ÏîÐÐWÓÓb	    usehost   exports!   optionsContainer   length   ErrorY   Can't use --usehost without injected options   process   undefined   title	   node   isNode   isFirefox   isPhantomjs   isNoDom   Requisition   system   requisition   automator5   createRequisitionAutomator   commands   get   mocks   on   helpers%   resetResponseTimes   examiner   reset   suite   run	   then   ÿÿÿÿ   +   exports.items<.exec/<Á                        ¹      %                                        output!
  o  W       	         5    5   ¸   
=   : ¸   
   : Q   ¸   
=   ;   ¸   
:  : W   QV   5   	5   
5   ;   5   H   V      ;   B0   QV   pîÝ.ÿÿÿÛÈ[Þ

Ê^
Ì
    system   commands   get   mocks   off   typedData   examiner-output   examiner   toRemote	   data   summary   status   stati	   pass   cli   logErrors   ÿÿÿÿ   '   exports.items<.execÁ                 -       ¹                                             output#   conversionContext  Ù  h  i             =    ;   ¸   
=   : =    ;   5   ÖÒ*    
   examiner#   detailedResultLog   NodeJS/NoDom   helpers   timingSummary   ÿÿÿÿ   '   exports.items<.execÁ                 G       ¹      )                                        output#   conversionContext  È  ¡  r             Y   =    ]   =   ]   =   ]   T  ]   Y   C]   =   ]   	]   
Ê  Ê  ÊÊÈÐ É  <div>
  <table class="gcliTestResults">
    <thead>
      <tr>
        <th class="gcliTestSuite">Suite</th>
        <th>Test</th>
        <th>Results</th>
        <th>Checks</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody foreach="suite in ${suites}">
      <tr foreach="test in ${suite.tests}" title="${suite.name}.${test.name}()">
        <td class="gcliTestSuite">${suite.name}</td>
        <td class="gcliTestTitle">${test.title}</td>
        <td class="gcliTest${test.status.name}">${test.status.name}</td>
        <td class="gcliTestChecks">${test.checks}</td>
        <td class="gcliTestMessages">
          <div foreach="failure in ${test.failures}">
            ${failure.message}
            <ul if="${failure.params}">
              <li>P1: ${failure.p1}</li>
              <li>P2: ${failure.p2}</li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Total</th>
        <th>${summary.status.name}</th>
        <th class="gcliTestChecks">${summary.checks}</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>	   htmlï  .gcliTestSkipped {
  background-color: #EEE;
  color: #000;
}

.gcliTestExecuting {
  background-color: #888;
  color: #FFF;
}

.gcliTestWaiting {
  background-color: #FFA;
  color: #000;
}

.gcliTestPass {
  background-color: #8F8;
  color: #000;
}

.gcliTestFail {
  background-color: #F00;
  color: #FFF;
}

td.gcliTestSuite {
  font-family: monospace;
  font-size: 90%;
  text-align: right;
}

.gcliTestResults th.gcliTestSuite,
.gcliTestResults .gcliTestChecks {
  text-align: right;
}

.gcliTestResults th {
  text-align: left;
}

.gcliTestMessages ul {
  margin: 0 0 10px;
  padding-left: 20px;
  list-style-type: square;
}
   css   gcli-test   cssId	   data   allowEval   test.html   stack   options