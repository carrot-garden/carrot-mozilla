try {

	let
	load = function() {
		if (!gMisspelledWord) {
			let
			word = document.getElementById("MisspelledWord");
			word.style.backgroundColor = "#bbffbb"; // green
			window.setTimeout(window.close, 700);
		}
	};

	window.addEventListener("load", load, false);

} catch (ex) {

	Components.utils.reportError(e);

};

