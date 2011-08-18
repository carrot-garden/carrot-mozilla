 function myClass() { 
  }
 
 myClass.prototype = {
 
     QueryInterface: function (iid) {
     	
         if( iid.equals(Components.interfaces.cgICarrotGarden) ||
             iid.equals(Components.interfaces.nsISupports))
             return this;
 
         Components.returnCode = Components.results.NS_ERROR_NO_INTERFACE;
         return null;
    },
 
 }
 
var myModule = {

	// CID for this class
	myCID: Components.ID("{f3d43a2e-874f-46d5-8a8b-1c7421d6d3ce}"),
	 
	// ContractID for this class
	myContractID: "@carrot_garden/service;1",
	
	// Component Name for this class
	myComponentName: "carrot_garden_service Component",
 
	//	type of application init
	myStartup: "app-startup",
 
	registerSelf: function registerSelf( compMgr, fileSpec, location, type) {

		compMgr = compMgr.QueryInterface(Components.interfaces.nsIComponentRegistrar);
		compMgr.registerFactoryLocation( 
         	this.myCID, this.myComponentName, this.myContractID,
			fileSpec, location, type );

		catyMgr = Components.classes["@mozilla.org/categorymanager;1"]
			.getService(Components.interfaces.nsICategoryManager);
		catyMgr.addCategoryEntry(
			this.myStartup, "service", this.myContractID, true, true);

     },
 
	unregisterSelf: function unregisterSelf( compMgr, fileSpec, location ) {

		compMgr = compMgr.QueryInterface(Components.interfaces.nsIComponentRegistrar);
		compMgr.unregisterFactoryLocation( this.myCID, fileSpec );

		catyMgr = Components.classes["@mozilla.org/categorymanager;1"]
			.getService(Components.interfaces.nsICategoryManager);
		catyMgr.deleteCategoryEntry(
			this.myStartup, this.myContractID, true );
	},

     getClassObject: function ( compMgr, cid, iid) {
         if( ! cid.equals( this.myCID ) )
             throw Components.results.NS_ERROR_NO_INTERFACE;
 
         if( ! iid.equals(Components.interfaces.nsIFactory))
             throw Components.results.NS_ERROR_NOT_IMPLEMENTED;
 
         return this.myFactory;
     },
 
     // factory object
     myFactory: {
         createInstance: function ( outer, iid ) {
             if( outer != null )
                 throw Components.results.NS_ERROR_NO_AGGREGATION;
 
             return ( new myClass() ).QueryInterface( iid );
         }
     },
 
     canUnload: function( compMgr ) {
         return true;
     }
 };
 
function NSGetModule( compMgr, fileSpec ) {
//     return myModule;
}
