/*** -*- Mode: Javascript; tab-width: 2;
The contents of this file are subject to the Mozilla Public
License Version 1.1 (the "License"); you may not use this file
except in compliance with the License. You may obtain a copy of
the License at http://www.mozilla.org/MPL/
                                                                                                    
Software distributed under the License is distributed on an "AS
IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
implied. See the License for the specific language governing
rights and limitations under the License.
                                                                                                    
The Original Code is jslib code.
The Initial Developer of the Original Code is jslib team.
                                                                                                    
Portions created by jslib team are
Copyright (C) 2000 jslib team.  All
Rights Reserved.
                                                                                                    
Contributor(s): Rajeev J Sebastian <rajeev_jsv@yahoo.com)> (original author)
                                                                                                    
*************************************/


if (typeof(JS_LIB_LOADED)=='boolean') {

const JS_BODYPARAMETERSPART_FILE     = "bodyParametersPart.js";
const JS_BODYPARAMETERSPART_LOADED   = true;

if (typeof(JS_DICTIONARY_LOADED)!='boolean')
  include(jslib_dictionary);

function BodyParametersPart() {
  this._params = new Dictionary();
}

BodyParametersPart.prototype = {
  _params: null,
  _name: null,

  setName: function( name ) {
    _name = name;
  },

  put: function( key, value ) {
    if( typeof(key) != "string" && typeof(value) !="string" )
      return this;
    this._params.put(key,value);
  },

  //not applicable
  _getRequestUriParams: function() {
    return null;
  },

  _getRequestHeaders: function() {
    var list = new Dictionary();
    list.put("Content-type","application/x-www-form-urlencoded");
    if( _name != null )
      list.put("Content-disposition","form-data; name=\""+_name+"\";");
    return list;
  },

  _getBody: function() {
    var uri = "";

    this.params.resetIterator();
    while( this.params.hasMoreElements() )
    {
      var param = this.params.getNext();
      if( this.params.hasMoreElements() )
        uri+= escape(param.key)+"="+escape(param.value)+"&";
      else
        uri+= escape(param.key)+"="+escape(param.value);
    }

    var body =
    Components.classes["@mozilla.org/io/string-input-stream;1"].
      createInstance( Components.interfaces.nsIStringInputStream );
    body.setData(uri,-1);

    return body;

  }
}

jslibDebug('*** load: '+JS_BODYPARAMETERSPART_FILE+' OK');

} // END BLOCK JS_LIB_LOADED CHECK

// If jslib base library is not loaded, dump this error.
else {
   dump("JS_BASE library not loaded:\n"
        + " \tTo load use: chrome://jslib/content/jslib.js\n"

        + " \tThen: include(jslib_bodyparameterspart);\n\n");

};
