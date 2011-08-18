function loadFilterListDialog() 
{
        var sortButton = document.createElement("button");
        sortButton.setAttribute("label","Carrot Sort");
        sortButton.setAttribute("id","sortButton");
        sortButton.setAttribute("oncommand","carrotFilterSort();")

        var spacerButton = document.createElement("button");
        spacerButton.setAttribute("label","New Section");
        spacerButton.setAttribute("id","spacerButton");
        spacerButton.setAttribute("oncommand","alert('not implemented yet');")

        
        var vboxElement = document.getElementById("newButton").parentNode;

        vboxElement.appendChild(sortButton);
        vboxElement.appendChild(spacerButton);
}

function loadNewAccountFolder()
{
	document.getElementById("runFiltersFolder").setAttribute("ref", getLocalFolders().URI);

	firstFolderURI = getLocalFolders().URI + "/" + window.opener.gNewFolderInfo.parentName;

	SetFolderPicker(firstFolderURI, "runFiltersFolder");

	document.getElementById("company").value = window.opener.gNewFolderInfo.company;
	document.getElementById("domain").value = window.opener.gNewFolderInfo.domain;
	document.getElementById("person").value = window.opener.gNewFolderInfo.person;
	window.opener.gNewFolderInfo.valid = false;

	updateNewAccountFolder();
}

function makeNewAccountFolder()
{
	window.opener.gNewFolderInfo.parentURI  = document.getElementById("runFiltersFolder").getAttribute("uri");
	window.opener.gNewFolderInfo.company  = document.getElementById("company").value;
	window.opener.gNewFolderInfo.domain   = document.getElementById("domain").value;
	window.opener.gNewFolderInfo.person   = document.getElementById("person").value;

	window.opener.gNewFolderInfo.valid = true;
	window.close();
}

function skipNewAccountFolder ()
{
	window.opener.gNewFolderInfo.valid = false;
	window.close();
}

function updateNewAccountFolder ()
{
	var company = document.getElementById("company").value;
	var domain = document.getElementById("domain").value;
	var person = document.getElementById("person").value;

	document.getElementById("targetAccount").value = accountFolderTemplate( company, domain );
	document.getElementById("targetPerson").value = personFolderTemplate( person );
}






function onLoadWindow()
{
	//alert("hello");
}


function onButtonCreate()
{

	var strAccount = document.getElementById("account").value ;	
	var strDomain  = document.getElementById("domain").value ;	
	var strMain  = document.getElementById("main").value ;	

	if (strAccount == "" || strDomain == "" )
	{
		alert("Account or Domain can not be empty.");
	}
	else
	{
		// alert(strAccount + " " + strDomain );
		makeFolderFilter (  strMain, strAccount, strDomain )
	}

}


function makeFolderFilter (  strMain, strAccount, strDomain )
{

	var myMain = strMain; // "Accounts";
	var myAccount = strAccount; // "Disney Internet Group";
	var myDomain  = strDomain; //"dig.com";

	var myFolderName = myAccount + " @" + myDomain;
	var myFilterName = "Account: " + myFolderName;


//	var view = GetDBView();
//	view.doCommand(nsMsgViewCommandType.expandAll);
//	var fldrLocal = view.getFolderForViewIndex(0).rootFolder;


	var amService = 
    		Components.classes["@mozilla.org/messenger/account-manager;1"]
			.getService(Components.interfaces.nsIMsgAccountManager);
	var lfServer= amService.localFoldersServer;
	var fldrLocal = lfServer.rootFolder;


	var fldrMain = fldrLocal.FindSubFolder(myMain);


	try
	{
		fldrMain.createSubfolder ( myFolderName, null) ;
		fldrMain.updateFolder ( null );
	}
	catch (ex) {} // ignore if folder exists


	var myFolder = fldrMain.FindSubFolder ( myFolderName ) ;


	var msgFilterList = fldrMain.getFilterList ( null );

	var myFilter = msgFilterList.getFilterNamed ( myFilterName ); 

	try
	{
		msgFilterList.removeFilter ( myFilter ); 
		myFilter = msgFilterList.createFilter (myFilterName); 
	}
	catch(ex) {} // ignore missing fillter

	myFilter.enabled = true;
	myFilter.temporary = false;
	myFilter.filterDesc = myAccount;

	appendTerm ( myFilter, Components.interfaces.nsMsgSearchAttrib.Sender, "@" + myDomain );
	appendTerm ( myFilter, Components.interfaces.nsMsgSearchAttrib.ToOrCC, "@" + myDomain );
	appendTerm ( myFilter, Components.interfaces.nsMsgSearchAttrib.ToOrCC, myDomain + "@carrot.com" );

 
	var myAction = myFilter.createAction();

	myAction.type = Components.interfaces.nsMsgFilterAction.MoveToFolder;
	myAction.targetFolderUri = fldrMain.URI + "/" + encodeURIComponent ( myFolderName ) ;

	myFilter.appendAction ( myAction );

	msgFilterList.insertFilterAt ( 0, myFilter );

	msgFilterList.saveToDefaultFile ( );


	alert ("Created:\n   Folder: " + myFolderName + "\n   Filter: " + myFilterName );

}

