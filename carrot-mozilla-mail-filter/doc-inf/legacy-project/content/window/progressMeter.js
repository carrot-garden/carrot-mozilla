// callback format: { Init: init_func, Loop: loop_func, Exit: exit_func  } 
// note that loop_func(k) must take iteration parameter k, and return message
// note that k indexing folows Array() convention: if size = N, k = {0,....,N-1}
//
//	XXX call format:
//	XXX	progressMeter( window, { Init: someInit,  Loop: someLoop,  Exit: someExit });
//	
function classProgressMeter(){

	if ( window.arguments ) {
		var callback = window.arguments[0]; //	object with function references: { Init: init_func, Loop: loop_func, Exit: exit_func  }
		//	XXX check init, loop, exit are not null 
	} else {
		window.alert( "classProgressMeter: missing arguments" );
		return;
	}

	var delay = 10; // millisecons, for visual 'appeal'
	
	var step = 0;	//	current iteration index 
	var count = 0; 	//	total iteration steps
	var iTimerID = 0;	// unique timer objext reference index
	
	var strPercent = ""; var strStep = ""; var strMessage = "";	//	reported text strings

	var progressPercent; var progressMessage; var progressRatio;	//	reporting gui elements

	function initElements (){	//	xul id
		progressPercent = document.getElementById( "carrot_garden.progress-meter" );
		progressMessage = document.getElementById( "carrot_garden.progress-textbox" );
		progressRatio  =  document.getElementById( "carrot_garden.progress-ratio" );
	}

	function updateDisplay(){	//
		strPercent = ( ( 1 + step) * 100 ) / count + "%" ;
		strStep = ( 1 + step) + "/" + count; 
		progressPercent.setAttribute( "value", strPercent );
		progressMessage.setAttribute( "value", strMessage );  	
		progressRatio.setAttribute  ( "value", strStep ); 	
	}

	function initProgress() {
		step = 0;
		count = callback.Init();	//	INIT() returns number of iterations
	}

	function makeProgress(){
		if ( step == count ) {
			exitProgress();
		} else {
			strMessage = callback.Loop( step ); 	//	LOOP(idx) takes iteration index parameter
			updateDisplay();
			step++;
			iTimerID = window.setTimeout ( makeProgress, delay );	//	self re-start for next step
		}
	}

	function exitProgress() {
		window.close();
		callback.Exit();	//	EXIT() does final cleanup at the end of run
	}

	
	this.cancel = function cancel(){	//	xul call

	    window.clearTimeout( iTimerID );

		window.alert("Interrupted at: \n\n" + 
			"Step: " + strStep +  "\n\n" +
			strMessage	
		);

		exitProgress();
	}

	this.start = function start(){		//	xul call
		initElements();
		initProgress();
		makeProgress();
	}
	
}

//	referenced in xul
var carrotMeter = new classProgressMeter();

