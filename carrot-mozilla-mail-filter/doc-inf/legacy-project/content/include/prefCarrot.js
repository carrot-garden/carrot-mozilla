//	CARROT PREFERENCES

var log = {};

function componentServiceInitialize( object ){
	log = object.log;
}


// describes preferences structure, names, types and default values

var mRdfSeed =
	'<?xml version="1.0"?>' +
	'<RDF:RDF ' +
	'	xmlns:NS="http://carrot_garden/rdf#" ' +
	'   xmlns:RDF="http://www.w3.org/1999/02/22-rdf-syntax-ns#" ' +
	'   >' +
	'</RDF:RDF>';


var preferences = {

	mailSettings: { 
		'<myEmailPrefix>': 'username',
		'<myEmailSuffix>': 'carrotgarden.com',
		'<myEmailSuffixList>': 'carrotgarden.com,carrotgarden.com',
		'<otherEmailPrefix>' : '',
		'<otherEmailSuffix>' : '',
		'<otherEmailAddress>' : '',
		'<otherPersonName>' : '',
		'<otherCompanyName>' : '',
		'<otherSubjectKeyword>' : '',
		'<otherToOrCcKeyword>' : '',
		'<otherFolderUri>' : '',
		'<filterSectionAccounts>' : 'Account:',
		'<filterSectionManagers>' : 'Manager:',
		'<filterSectionEventsNews>' : 'EventsNews:',
		'<filterSectionVendors>' : 'Vendor:',
		'<filterSectionEmployers>' : 'Employer:',
	},	//	mailSettings

	fileSystem: {
		folderTemporaryFiles: '[ProfD]carrot_garden/temporary_files',
		folderBackupFiles: '[ProfD]carrot_garden/backup_files',
	},	//	fileSystem

	mailStore: {
		folderInbox: {
			uri: "mailbox://nobody@Local%20Folders/Inbox",
		},
		folderCustomers: {
			navigateUri: 'mailbox://nobody@Local%20Folders',
			parentUri: 'mailbox://nobody@Local%20Folders/Accounts',
			folderTemplate: {
				folderName: '<otherCompanyName> @<otherEmailSuffix>',
				filterName: '<filterSectionAccounts> <otherCompanyName> @<otherEmailSuffix>',
				filterActions: 	'(move to folder,<otherFolderUri>)\n'+
								'',
				filterTerms: '' +
						'or (from,contains,<otherEmailSuffix>)\n' +
						'or (to or cc,contains,<otherEmailSuffix>)\n' +
						'or (subject,contains,<otherSubjectKeyword>)\n' +
						'or (to or cc,contains,<otherToOrCcKeyword>)\n' +
						'or (subject,contains,<otherCompanyName>)\n' +
						'',
				searchFolders: {
				},
			},
		},
		folderEventsNews: {
			navigateUri: 'mailbox://nobody@Local%20Folders',
			parentUri: 'mailbox://nobody@Local%20Folders/News%20and%20Events',
			folderTemplate: {
				folderName: '<otherCompanyName> @<otherEmailSuffix>',
				filterName: '<filterSectionEventsNews> <otherCompanyName>',
				filterActions: 	'(move to folder,<otherFolderUri>)\n'+
								'',
				filterTerms: '' +
						'or (from,contains,<otherEmailAddress>)\n' +
						'or (subject,contains,<otherSubjectKeyword>)\n' +
						'or (to or cc,contains,<otherToOrCcKeyword>)\n' +
						'',
				searchFolders: {
				},
			},
		},
		folderManagers: {
			navigateUri: 'mailbox://nobody@Local%20Folders',
			parentUri: 'mailbox://nobody@Local%20Folders/Manage%20Leaders',
			folderTemplate: {
				folderName: '<otherPersonName>',
				filterName: '<filterSectionManagers> <otherPersonName>',
				filterActions: 	'(move to folder,<otherFolderUri>)\n'+
								'',
				filterTerms: '' +
						'or (from,contains,<otherEmailPrefix>)\n' +
						'',
				searchFolders: {
				},
			},
		},
		folderVendors: {
			navigateUri: 'mailbox://nobody@Local%20Folders',
			parentUri: 'mailbox://nobody@Local%20Folders/Vendors',
			folderTemplate: {
				folderName: '<otherCompanyName> @<otherEmailSuffix>',
				filterName: '<filterSectionVendors> <otherCompanyName> @<otherEmailSuffix>',
				filterActions: 	'(move to folder,<otherFolderUri>)\n'+
								'',
				filterTerms: '' +
						'or (from,contains,<otherEmailSuffix>)\n' +
						'or (to or cc,contains,<otherEmailSuffix>)\n' +
						'or (subject,contains,<otherSubjectKeyword>)\n' +
						'or (to or cc,contains,<otherToOrCcKeyword>)\n' +
						'or (subject,contains,<otherCompanyName>)\n' +
						'',
				searchFolders: {
				},
			},
		},
		folderEmployers: {
			navigateUri: 'mailbox://nobody@Local%20Folders',
			parentUri: 'mailbox://nobody@Local%20Folders/Employers',
			folderTemplate: {
				folderName: '<otherCompanyName> @<otherEmailSuffix>',
				filterName: '<filterSectionEmployers> <otherCompanyName> @<otherEmailSuffix>',
				filterActions: 	'(move to folder,<otherFolderUri>)\n'+
								'',
				filterTerms: '' +
						'or (from,contains,<otherEmailSuffix>)\n' +
						'or (to or cc,contains,<otherEmailSuffix>)\n' +
						'',
				searchFolders: {
				},
			},
		},
		folderConversations:{
			uri: 'mailbox://nobody@Local%20Folders/Manage%20Conversations',
			searchFolders: {
				resource_information_managers: {
					parentUri: 'mailbox://nobody@Local%20Folders/Manage%20Conversations',
					folderName:'Guild - RIM',
					treeUri: 'mailbox://nobody@Local%20Folders/Manage%20Leaders',
					filter:'and (status,is not,read) and (to or cc,contains,rim.guild@)',
				},
				project_managers: {
					parentUri: 'mailbox://nobody@Local%20Folders/Manage%20Conversations',
					folderName:'Guild - PM',
					treeUri: 'mailbox://nobody@Local%20Folders/Manage%20Leaders',
					filter:'and (status,is not,read) and (to or cc,contains,pm.guild@)',
				},
				lead_artists: {
					parentUri: 'mailbox://nobody@Local%20Folders/Manage%20Conversations',
					folderName:'Guild - LA',
					treeUri: 'mailbox://nobody@Local%20Folders/Manage%20Leaders',
					filter:'and (status,is not,read) and (to or cc,contains,leadart@)',
				},
				sent_to_contracts: {
					parentUri: 'mailbox://nobody@Local%20Folders/Manage%20Conversations',
					folderName:'SentTo - Contracts',
					treeUri: 'mailbox://nobody@Local%20Folders/Manage%20Leaders',
					filter:'and (status,is not,read) and (to or cc,contains,contracts@)',
				},
				sent_to_all_team: {
					parentUri: 'mailbox://nobody@Local%20Folders/Manage%20Conversations',
					folderName:'SentTo - All Team',
					treeUri: 'mailbox://nobody@Local%20Folders/Manage%20Leaders',
					filter:'and (status,is not,read) and (to or cc,contains,all.team@)',
				},
				from_bdm: {
					parentUri: 'mailbox://nobody@Local%20Folders/Manage%20Conversations',
					folderName:'From - BDM',
					treeUri: 'mailbox://nobody@Local%20Folders/Manage%20Leaders',
					filter: 'and (status,is not,read) and (from,is in ab,moz-abmdbdirectory://ab-group-bdm.mab)',
				},
				meeting_summary_la: {
					parentUri: 'mailbox://nobody@Local%20Folders/Manage%20Conversations',
					folderName:'Meeting Sumamry - LA',
					treeUri: 'mailbox://nobody@Local%20Folders/Manage%20Leaders',
					filter: 'and (status,is not,read) and (subject,contains,LA AD ADA Meeting summary)',
				},
			},
		},
		folderMyResponse:{
			uri: '',
			searchFolders: {
				inbox: {
					parentUri: "mailbox://nobody@Local%20Folders/Inbox",
					folderName: "_ME_",
					treeUri: "mailbox://nobody@Local%20Folders/Inbox",
					filter: "and (status,is not,read) and (to or cc, contains,<myEmailPrefix>)",
				},
				customers: {
					parentUri: 'mailbox://nobody@Local%20Folders/Accounts',
					folderName: "My Response Required",
					treeUri: 'mailbox://nobody@Local%20Folders/Accounts',
					filter: "and (status,is not,read) and (to or cc, contains,<myEmailPrefix>)",
				},
				conversations: {
					parentUri: 'mailbox://nobody@Local%20Folders/Manage%20Conversations',
					folderName: "_ME_",
					treeUri: 'mailbox://nobody@Local%20Folders/Manage%20Leaders',
					filter: "and (status,is not,read) and (to or cc, contains,<myEmailPrefix>)",
				},
				managers: {
					parentUri: 'mailbox://nobody@Local%20Folders/Manage%20Leaders',
					folderName: "My Response Required",
					treeUri: 'mailbox://nobody@Local%20Folders/Manage%20Leaders',
					filter: "and (status,is not,read) and (to or cc, contains,<myEmailPrefix>)",
				},
				vendors: {
					parentUri: 'mailbox://nobody@Local%20Folders/Vendors',
					folderName: "My Response Required",
					treeUri: 'mailbox://nobody@Local%20Folders/Vendors',
					filter: "and (status,is not,read) and (to or cc, contains,<myEmailPrefix>)",
				},
				employers: {
					parentUri: 'mailbox://nobody@Local%20Folders/Employers',
					folderName: "My Response Required",
					treeUri: 'mailbox://nobody@Local%20Folders/Employers',
					filter: "and (status,is not,read) and (to or cc, contains,<myEmailPrefix>)",
				},
			},
		},
	},	//	mailStore
	
	mailGui: {
		selectFolders: {
			inbox: 'mailbox://nobody@Local%20Folders/Inbox/_ME_',
			accounts: 'mailbox://nobody@Local%20Folders/Accounts/My%20Response%20Required',
			conversations: 'mailbox://nobody@Local%20Folders/Manage%20Conversations/_ME_',
			managers: 'mailbox://nobody@Local%20Folders/Manage%20Leaders/My%20Response%20Required',
			vendors: 'mailbox://nobody@Local%20Folders/Vendors/My%20Response%20Required',
			employers: 'mailbox://nobody@Local%20Folders/Employers/My%20Response%20Required',
		},
		messenger:{
			elements:{
				//
				key_search_bar_switch_view_all_unread:'key="A" modifiers=""',
				viewPicker_tooltip_description: 'value="use [A] to switch between All and Unread views"',
				//
				key_search_bar_switch_focus:'key="H" modifiers="accel"',
				key_search_bar_clear_search:'key="H" modifiers="accel,shift"',
				searchInput_tooltip_description: 'value="use [ctrl+H] to focus on and [ctrl+shft+H] to clear text from Search Input"',
				//
				//button_search_bar_switch_all_unread: 'tooltiptext="use [A] to switch All and Unread views"',
				//button_search_bar_clear_search: 'tooltiptext="use [ctrl+H] to focus on and [ctrl+shft+H] to clear text from Search Input"',
				//
				key_thread_pane_open_msg_folder: 'key="O" modifiers="accel,shift"',
				key_toggle_collapse_folder_pane: 'key="L" modifiers=""',
				//
				key_folder_view_switch_all:	'keycode="VK_F1" key="" modifiers="accel"',
				key_folder_view_switch_unread:	'keycode="VK_F2" key="" modifiers="accel"',
				key_folder_view_switch_favorite:	'keycode="VK_F3" key="" modifiers="accel"',
				key_folder_view_switch_recent:	'keycode="VK_F4" key="" modifiers="accel"',
			},
		},
		messageWindow:{
			elements:{
			},
		},
		folderAction:{
			elements:{
//				key_status_bar_search_folders_select: 'key="S" modifiers="accel,shift"',
				key_status_bar_search_folders_select: 'keycode="VK_F9" key="" modifiers=""',
//				key_status_bar_search_folders_move: 'key="M" modifiers="accel,shift"',
				key_status_bar_search_folders_move: 'keycode="VK_F9"  key="" modifiers="shift"',
//				key_status_bar_search_folders_copy: 'key="Y" modifiers="accel,shift"',
				key_status_bar_search_folders_copy: 'keycode="VK_F9"  key="" modifiers="alt"',
//				button_status_bar_search_folder: 'tooltiptext="Select: [ctrl+shift+S] Move: [ctrl+shift+M] Copy: [ctrl+shift+Y] "',
				button_status_bar_search_folder: 'tooltiptext="Select: [F09] Move: [F11] Copy: [F12] "',
			},
		},
		messengercompose:{
			elements:{
				key_XXX_1: 'key="M" modifiers="accel,shift"',
			},
			parameters:{
				attachmentBucketText_textbox_size_threshold: 1000,
			},
		},
	},	//	mailGui
	
	bookGui: {
		addressbook:{
			elements:{
				key_XXX: 'key="X" modifiers="accel,shift"',
			},
		},
	},	//	bookGui	

	mailFeatures: {
		accountManager:{
			parameters:{
				fcc_settings_rdf: mRdfSeed,
			},
		},
	},	//	mailFeatures	

	techSupport: {
		log:{
			useFile: false,
			componentStart: false,
			defaultLevel: 3,
		},
	},	//	techSupport	

	addressBooks: {
		not_junk:{
			uri: 'moz-abmdbdirectory://ab-system-not-junk.mab',
		},
	},	//	techSupport	

}

