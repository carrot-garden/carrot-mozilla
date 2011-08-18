//	REPLICATION

var log = {};
var addrBooks = {};
var pub = {};

function componentServiceInitialize( object ){
	log = object.log;
	addrBooks = object.addrBooks;
	
//	pub = new classAddressBookPublisher();
	
}


//	http://www.xulplanet.com/references/xpcomref/ifaces/nsIAbListener.html

function classAddressBookListener(){

	this.onItemAdded = function onItemAdded( parentDir, item ) {
		log.thisLevel( log.level.debug );
		log.debug( 'onItemAdded' );
		processItem( item, 'add' )
	}
	
	this.onItemRemoved = function onItemRemoved( parentDir, item ) {
		log.thisLevel( log.level.debug );
		log.debug( 'onItemRemoved' );
		processItem( item, 'remove' )
	}
	
	this.onItemPropertyChanged = function onItemPropertyChanged( item, property, oldValue, newValue ) {
		log.thisLevel( log.level.debug );
		log.debug( 'onItemPropertyChanged ' );
	
//		processItem( item, 'change' )
	
		var card = item.QueryInterface( Components.interfaces.nsIAbCard );
		log.debug( 'card.displayName ' + card.displayName );
		log.debug( 'card.lastModifiedDate ' + card.lastModifiedDate );
		

		var dbCard = item.QueryInterface( Components.interfaces.nsIAbMDBCard );
		
		dbCard.setStringAttribute('carrot_garden', dbCard.displayName + '_' + dbCard.key ) 
		
		//dbCard.displayName = '1-2-3'
		
	}
	
	function processItem( item, event ){
		log.thisLevel( log.level.debug );
		
		if( item instanceof Components.interfaces.nsIAbDirectory ){
			log.debug('directory')
		} else if( item instanceof Components.interfaces.nsIAbCard ){
			log.debug('card')
		} else {
			log.warning('unsupported item')
		}
		
	}
	
	
}
	
function classAddressBookPublisher(){

	var abListener = new classAddressBookListener();

	var abSession = addrBooks.getAbSession();

	abSession.addAddressBookListener(	
		abListener, Components.interfaces.nsIAddrBookSession.all );
	
}

	
	