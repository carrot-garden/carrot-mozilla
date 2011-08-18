
function messageStream( args ){

	var object = {

		mFinished: false,
	    mStream: null,
	    mSource: '',

		QueryInterface:  function(iid)  {
			if (iid.equals(Components.interfaces.nsIStreamListener) ||
				iid.equals(Components.interfaces.nsIMsgHeaderSink) ||
				iid.equals(Components.interfaces.nsISupports)) 
			{
				return this;
			} else {
				throw Components.results.NS_NOINTERFACE;
				return 0;
			}
		},
	
	//	nsIStreamListener

		onStartRequest: function( request, context ) {
			this.mStream = Components.classes['@mozilla.org/binaryinputstream;1']
				.createInstance(Components.interfaces.nsIBinaryInputStream);
			var channel = request.QueryInterface(Components.interfaces.nsIChannel);
			channel.URI.QueryInterface(Components.interfaces.nsIMsgMailNewsUrl);
			channel.URI.msgHeaderSink = this;
		},
 
		onStopRequest:  function( request, context, statusCode ) {
			this.mStream = null;
			this.mFinished = true;
			if( args && args.onStopRequest ) args.onStopRequest();
		},
 
		onDataAvailable:   function( request, context, inputStream, offset, count ) {
			this.mStream.setInputStream( inputStream );
			this.mSource += this.mStream.readBytes( count );
			if( args && args.onDataAvailable ) args.onDataAvailable();
		 },
	
	
	//	nsIMsgHeaderSink

	    mDummyMsgHeader: null,
	    mSecurityInfo  : null,
	    mSaveHdr: null,
	
	    onStartHeaders: function()
	    {
	      this.mSaveHdr = null;
	    },
	
	    onEndHeaders: function() 
	    {
			if( args && args.onEndHeaders ) args.onEndHeaders();
	    },
	
	    processHeaders: function( headerNameEnumerator, headerValueEnumerator, dontCollectAddress )
	    {
//	      this.onStartHeaders(); 
	      
	      while ( headerNameEnumerator.hasMore() ) 
	      {
	        var header = new Object;        
	        header.headerName = headerNameEnumerator.getNext();
	        header.headerValue = headerValueEnumerator.getNext();
	
	        var lowerCaseHeaderName = header.headerName.toLowerCase();
	
	        if (this.mDummyMsgHeader)
	        {
	          if (lowerCaseHeaderName == "from")
	            this.mDummyMsgHeader.author = header.headerValue;
	          else if (lowerCaseHeaderName == "to")
	            this.mDummyMsgHeader.recipients = header.headerValue;
	          else if (lowerCaseHeaderName == "cc")
	            this.mDummyMsgHeader.ccList = header.headerValue;
	          else if (lowerCaseHeaderName == "subject")
	            this.mDummyMsgHeader.subject = header.headerValue;
	          else if (lowerCaseHeaderName == "reply-to")
	            this.mDummyMsgHeader.replyTo = header.headerValue;
	          else if (lowerCaseHeaderName == "message-id")
	            this.mDummyMsgHeader.messageId = header.headerValue;
	          else if (lowerCaseHeaderName == "fcc")
	            this.mDummyMsgHeader.folder = header.headerValue;
	
	        }
	
	      } // while we have more headers to parse
	
//	      this.onEndHeaders();
	    },
	
	    handleAttachment: function( contentType, url, displayName, uri, isExternalAttachment ) 
	    {
	    },
	    
	    onEndAllAttachments: function()
	    {
			if( args && args.onEndAllAttachments ) args.onEndAllAttachments();
	    },
	
	    onEndMsgDownload: function(url)
	    {
	      //OnMsgParsed(url);
			if( args && args.onEndMsgDownload ) args.onEndMsgDownload();
	    },
	
	    onEndMsgHeaders: function(url)
	    { 
	      //OnMsgLoaded(url);
			if( args && args.onEndMsgHeaders ) args.onEndMsgHeaders();
	    },
	
	    onMsgHasRemoteContent: function(aMsgHdr)
	    {
	    },
		    
	    getSecurityInfo: function()
	    {
	      return this.mSecurityInfo;
	    },
	    
	    setSecurityInfo: function(aSecurityInfo)
	    {
	      this.mSecurityInfo = aSecurityInfo;
	    },
	
	    getDummyMsgHeader: function() 
	    {
	      if ( ! this.mDummyMsgHeader )
	        this.mDummyMsgHeader = new nsDummyMsgHeader();
	      return this.mDummyMsgHeader;
	    }
	}

	this.header = object.mDummyMsgHeader;
	this.source = object.mSource;
	
	return object;
	
}


function nsDummyMsgHeader()
{
}

nsDummyMsgHeader.prototype =
{
  mProperties : new Array,
  getStringProperty : function(property) {return this.mProperties[property];},
  setStringProperty : function(property, val) {this.mProperties[property] = val;},
  messageSize : 0,
  recipients : null,
  from : null,
  subject : null,
  ccList : null,
  messageId : null,
  accountKey : "",
  folder : null,
};

