function jsScriptObject(obj)
	{
		// implementation detail, to allow unwrapping.
		this.wrappedJSObject = obj;
	}

	jsScriptObject.prototype = {
		QueryInterface : function(iid)
		{
			try {
				if (iid.equals(Components.interfaces.acmeIScriptObject) ||
				iid.equals(Components.interfaces.nsIClassInfo) ||
				iid.equals(Components.interfaces.nsISecurityCheckedComponent) ||
				iid.equals(Components.interfaces.nsISupports)) {
					alert("QI good.");
					return this;
				}
				throw Components.results.NS_ERROR_NO_INTERFACE;
			} catch (se) {
				// older browsers don't let us use iid.equals, wah.
				return this;
			}
		}

		// acmeIScriptObject implementation.
		getProperty : function(name)
		{
			return new jsScriptObject(this.wrappedJSObject[name]);
		}

		setProperty : function(name, value)
		{
			alert('setProperty:  name = ' + name + ', value = ' + value.toString() + '\n');
			this.wrappedJSObject[name] = value.toString();
		}

		toString : function()
		{
			return this.wrappedJSObject.toString();
		}

		toNumber : function()
		{
			return this.wrappedJSObject.valueOf();
		}

		fromString : function(value)
		{
			return new jsScriptObject(value);
		}

		fromNumber : function(value)
		{
			return new jsScriptObject(value);
		}

		call : function(name, argArray)
		{
			// TBD
		}
	};
	
	