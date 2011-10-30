//

const
rx = {
		
	parseTermList : new RegExp(
			'((and|or)\\s*\\(\\s*(("[^"]*")|([^"()]))*\\s*\\))', "gi"),
			
	parseTerm : new RegExp('(and|or)|(("[^"]*")|([^"(),]))+(?=,|\\))', "gi"),
	
	parseActionList : new RegExp('(\\s*\\(\\s*(("[^"]*")|([^"()]))*\\s*\\))',
			"gi"),
			
	parseAction : new RegExp('(("[^"]*")|([^"(),]))+(?=,|\\))', "gi"),
	
	cleanupParameter : new RegExp("[\\s']", "g"),
	
	whiteSpace : new RegExp("[\\s]", "g"),
	
	customHeader : new RegExp("[^:]+", "g"),
	
	charDoubleQuote : new RegExp('"', "g"),
	
}
