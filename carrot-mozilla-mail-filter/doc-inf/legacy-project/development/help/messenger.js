function cmdAccountCreate()
{
	var emailAddress = document.popupNode.getAttribute("emailAddress");
	var displayName  = document.popupNode.getAttribute("displayName");
	
	var parser = emailParser ( emailAddress, displayName ) ;

	gNewFolderInfo.parentURI = gAccountsFolderURI;
	
	gNewFolderInfo.company = parser.company;
	gNewFolderInfo.domain = parser.domain;

	gNewFolderInfo.person = parser.displayName;
	gNewFolderInfo.email = parser.emailAddress;

	gNewFolderInfo.project = parser.company;

	gNewFolderInfo.valid = false;

	window.open("chrome://carrot_garden/content/window/formNewAccountFolder.xul",
		"carrot_garden", "chrome,modal,centerscreen,width=350,height=350");

	if ( gNewFolderInfo.valid ) {
	
		///	new folder and filter
		var folder = createAccountFolderFilter ( gNewFolderInfo ).folder;
		if ( ! folder ) { alert ("acc create err 1"); return; };
	
		//	SF: contracts, invoice, etc
		accountsSfGenericsCreate ( folder );

		//	SF: projects
		accountsSfProjectCreate ( folder )	
	
		//	SF: this person
		memberSfCreate( folder, gNewFolderInfo.person, gNewFolderInfo.email )
	
		// re-arrange filters;
		carrotFilterSort (); 

		//	safety backups
		backupFiltersFile ()
		backupVirtualFoldersFile ();
		
		if ( Confirm ( window, "Run Filters on this folder?" ) ) {
			// apply filters to current folder
			goDoCommand('cmd_applyFilters'); 
		}
		
		//SelectFolder(folder.URI);
		
		//Alert ( window, "Done with new Account.");
	
	}
}

