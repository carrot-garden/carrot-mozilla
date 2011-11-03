//

Components.utils.import("resource://${package}/modules/log4moz.js");

var EXPORTED_SYMBOLS = [ "log" ];

var log = this;

function makeLogger(name, level) {

	let
	logger = Log4Moz.repository.getLogger(name);

	logger.level = Log4Moz.Level[level];

	return logger;

}

function setupLogging() {

	// The basic formatter will output lines like:
	// DATE/TIME LoggerName LEVEL (log message)
	let
	formatter = new Log4Moz.BasicFormatter();

	// Loggers are hierarchical, lowering this log level will affect all output
	let
	root = Log4Moz.repository.rootLogger;
	root.level = Log4Moz.Level["All"];

	// A console appender outputs to the JS Error Console
	let
	conser = new Log4Moz.ConsoleAppender(formatter);
	conser.level = Log4Moz.Level["Debug"];
	root.addAppender(conser);

	// A dump appender outputs to standard out
	let
	dupmer = new Log4Moz.DumpAppender(formatter);
	dupmer.level = Log4Moz.Level["Debug"];
	root.addAppender(dupmer);

}

setupLogging();
