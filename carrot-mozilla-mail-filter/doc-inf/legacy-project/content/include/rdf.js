//	RDF

var carrotRoot = {};
var log = {};

function componentServiceInitialize( object ){
	carrotRoot = object;
	log = object.log;
}



/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 * The contents of this file are subject to the Mozilla Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 *
 * The Original Code is rdfds
 *
 * The Initial Developer of the Original Code is Neil Deakin
 * Portions created by Neil Deakin are Copyright (C) 2002 Neil Deakin.
 * All Rights Reserved.
 *
 * Contributor(s):
 */

/* This is a library for easier access to RDF datasources and resources.
 * It contains four objects, RDFDataSource, RDFNode, RDFLiteral. and
 * RDFEnumerator.
 *
 * An RDF DataSource is a graph of nodes and literals. The constructor
 * for RDFDataSource takes one argument, a URI of an RDF file to use.
 * If the URI exists, the contents of the RDF file are loaded. If it
 * does not exist, resources can be added to it and then written using
 * this save method. If the URL argument is null, a blank datasource
 * is created.
 *
 * This library is designed for convenience not for efficiency.
 *
 * The API is documented at:
 *   http://www.xulplanet.com/tutorials/xultu/rdfds/
 *
 * Example:
 *
 * var ds = new RDFDataSource("file:///main/mozilla/mimtest.rdf");
 * var node=ds.getNode("http://www.example.com/sample");
 * var child=ds.getNode("http://www.example.com/child");
 * child=node.addChild(child);
 * child.addTarget("http://www.xulplanet.com/rdf/xpimaker#appname","Find Files");
 * ds.save();
 *
 */


//	help:	http://www.xulplanet.com/tutorials/mozsdk/rdfstart.php
//    * rdf:Seq: an ordered list, which is what we would use for the examples above.
//    * rdf:Bag: an unordered list.
//    * rdf:Alt: an list of alternate values where only one value is expected to be used.



//	carrot_garden vocabulary
const rootUri = 'http://carrot_garden';
const rootRdfUri = rootUri + '/rdf#';
const NS = {
	rowStyle: rootRdfUri + 'rowStyle',
	isEditable: rootRdfUri + 'isEditable',
	accountName: rootRdfUri + 'accountName',
	accountKey: rootRdfUri + 'accountKey',
	serverType: rootRdfUri + 'serverType',
	identityName: rootRdfUri + 'identityName',
	identityKey: rootRdfUri + 'identityKey',
	fccEnabled: rootRdfUri + 'fccEnabled',
	fccFolder: rootRdfUri + 'fccFolder',
	fccMode: rootRdfUri + 'fccMode',
	fccCurrentEnabled: rootRdfUri + 'fccCurrentEnabled',
}

var RDFService = "@mozilla.org/rdf/rdf-service;1";
RDFService = Components.classes[RDFService].getService();
RDFService = RDFService.QueryInterface(Components.interfaces.nsIRDFService);

var RDFContainerUtilsService = "@mozilla.org/rdf/container-utils;1";
RDFContainerUtilsService = Components.classes[RDFContainerUtilsService].getService();
RDFContainerUtilsService = RDFContainerUtilsService.QueryInterface(Components.interfaces.nsIRDFContainerUtils);

/* RDFLoadObserver
 *   this object is necessary to listen to RDF files being loaded. The Init
 *   function should be called to initialize the callback when the RDF file is
 *   loaded.
 */
function RDFLoadObserver(){}
  
RDFLoadObserver.prototype =
{
  callback: null,
  callbackDataSource: null,

  Init: function( c, cDS){
    this.callback = c;
    this.callbackDataSource = cDS;
  },

  QueryInterface: function( iid ){
    if (iid.equals(Components.interfaces.nsIRDFXMLSinkObserver)) return this;
    else throw Components.results.NS_ERROR_NO_INTERFACE;
  },

  onBeginLoad : function(sink){},
  onInterrupt : function(sink){},
  onResume : function(sink){},
  onError : function(sink,status,msg){},
 
  onEndLoad : function(sink){
    if (this.callback!=null) this.callback(this.callbackDataSource);
  }
};  

function RDFDataSource( uri, callbackFn )
{
  if( uri == null ) this.datasource = null;
  else this.load( uri, callbackFn );
}

RDFDataSource.prototype.getNS =
function(){
	return NS;
}

RDFDataSource.prototype.load =
  function( uri, callbackFn )
{
  if (uri.indexOf(":") == -1){
    var docurl=document.location.href;
    if (document.location.pathname == null) uri=docurl+"/"+uri;
    else uri=docurl.substring(0,docurl.lastIndexOf("/")+1)+uri;
  }

  if (callbackFn == null){
    this.datasource = RDFService.GetDataSourceBlocking(uri);
  }
  else {
    this.datasource = RDFService.GetDataSource(uri);
    var ds;
    try {
      ds = this.datasource.QueryInterface(Components.interfaces.nsIRDFRemoteDataSource);
    }
    catch (ex){
      callbackFn(this);
      return;
    }
    if ( ds.loaded ){
      callbackFn( this );
      return;
    }

    var packObserver = new RDFLoadObserver();
    packObserver.Init(callbackFn,this);

    var rawsource = this.datasource;
    rawsource = rawsource.QueryInterface(Components.interfaces.nsIRDFXMLSink);
    rawsource.addXMLSinkObserver( packObserver );
  }
}

RDFDataSource.prototype.Init =
  function (mDS)
{
  this.datasource = mDS;
}

RDFDataSource.prototype.addNameSpace =
  function( prefix , uri )
{
	if( this.datasource == null ) this.makeEmptyDS();
	
    var rawsource = this.datasource;
    rawsource = rawsource.QueryInterface(Components.interfaces.nsIRDFXMLSink);
    rawsource.addNameSpace( prefix , uri );  
}

RDFDataSource.prototype.parseFromString =
  function (str,baseUri)
{
  if (this.datasource==null) this.makeEmptyDS();
  var ios=Components.classes["@mozilla.org/network/io-service;1"]
                    .getService(Components.interfaces.nsIIOService);
  baseUri=ios.newURI(baseUri,null,null);
  var xmlParser=Components.classes["@mozilla.org/rdf/xml-parser;1"]
                          .createInstance(Components.interfaces.nsIRDFXMLParser);
  xmlParser.parseString(this.datasource,baseUri,str);
}

RDFDataSource.prototype.serializeToString2 =
  function ()
{
	var xmlSer = Components.classes["@mozilla.org/xmlextras/xmlserializer;1"]
		.createInstance();
	xmlSer = xmlSer.QueryInterface(Components.interfaces.nsIDOMSerializer);
	return xmlSer.serializeToString( this.datasource );
}

RDFDataSource.prototype.serializeToString=
  function ()
{
  var outputStream = {

	  QueryInterface: function(iid){
	    if (iid.equals(Components.interfaces.nsIOutputStream)) return this;
	    else throw Components.results.NS_ERROR_NO_INTERFACE;
	  },
  	
    data: "",
    close : function(){},
    flush : function(){},
    write : function (buffer,count){
      this.data += buffer;
      return count;
    },
    writeFrom : function (stream,count){},
    isNonBlocking: false
  }
  this.serializeToStream( outputStream );
  return outputStream.data;
}

RDFDataSource.prototype.serializeToStream=
  function (outputStream)
{
  var ser=Components.classes["@mozilla.org/rdf/xml-serializer;1"]
                    .createInstance(Components.interfaces.nsIRDFXMLSerializer);
  ser.init(this.datasource);
  
  ser = ser.QueryInterface(Components.interfaces.nsIRDFXMLSource);
  ser.Serialize( outputStream );
}

RDFDataSource.prototype.makeEmptyDS=
  function (uri)
{
  this.datasource=Components.classes["@mozilla.org/rdf/datasource;1?name=in-memory-datasource"]
                            .createInstance(Components.interfaces.nsIRDFDataSource);
}

RDFDataSource.prototype.getAllResources=
  function ()
{
  if (this.datasource==null) return null;
  return new RDFEnumerator(this.datasource.GetAllResources(),this.datasource);
}

RDFDataSource.prototype.getRawDataSource=
  function ()
{
  if (this.datasource==null) this.makeEmptyDS();
  return this.datasource;
}

RDFDataSource.prototype.getNode =
  function ( uri )
{
  if( this.datasource == null ) this.makeEmptyDS();
  var node = new RDFNode( uri, this );
  return node;
}

RDFDataSource.prototype.getAnonymousNode=
  function ()
{
  if (this.datasource==null) this.makeEmptyDS();

  var anon=RDFService.GetAnonymousResource();
  var node=new RDFNode();
  node.Init(anon,this.datasource);
  return node;
}

RDFDataSource.prototype.getLiteral=
  function (uri)
{
  if (this.datasource==null) this.makeEmptyDS();

  return new RDFLiteral(uri,this);
}

RDFDataSource.prototype.refresh=
  function (sync)
{
  try {
    var ds=this.datasource.QueryInterface(Components.interfaces.nsIRDFRemoteDataSource);
    ds.Refresh(sync);
    return true;
  }
  catch (ex){
    return false;
  }
}

RDFDataSource.prototype.register=
  function ( replace )
{
  try {
    var ds = this.datasource // .QueryInterface(Components.interfaces.nsIRDFRemoteDataSource);
//    var rs = replace ? true : false; // avoid null
  	RDFService.RegisterDataSource( ds ) // , rs );
    return true;
  }
  catch (ex){
    return false;
  }
}

RDFDataSource.prototype.save=
  function ()
{
  try {
    var ds=this.datasource.QueryInterface(Components.interfaces.nsIRDFRemoteDataSource);
    ds.Flush();
    return true;
  }
  catch (ex){
    return false;
  }
}

RDFDataSource.prototype.copyAllToDataSource=
  function (mDS2)
{
  if (this.datasource==null) this.makeEmptyDS();
  if (mDS2.datasource==null) mDS2.makeEmptyDS();

  var mDS1=this.datasource;
  mDS2=mDS2.datasource;

  var sourcelist=mDS1.GetAllResources();
  while(sourcelist.hasMoreElements()){
    var source=sourcelist.getNext();
    var props=mDS1.ArcLabelsOut(source);
    while(props.hasMoreElements()){
      var prop=props.getNext();
      prop=prop.QueryInterface(Components.interfaces.nsIRDFResource);
      var target=mDS1.GetTarget(source,prop,true);
      if (target!=null) mDS2.Assert(source,prop,target,true);
    }
  }
}

RDFDataSource.prototype.deleteRecursive=
  function (val)
{
  var node;
  var mDS=this.datasource;

  if (mDS==null) return;

  if (typeof val == "string") node=RDFService.GetResource(val);
  else node=val.source;

  this.deleteRecursiveH(mDS,node); // remove descendants

  // remove the node itself
  var props=mDS.ArcLabelsIn(node);
  while(props.hasMoreElements()){
    var prop=props.getNext();
    var source=mDS.GetSource(prop,node,true);
    mDS.Unassert(source,prop,node);
  }
}

RDFDataSource.prototype.deleteRecursiveH=
  function ( mDS, node )
{
  var props = mDS.ArcLabelsOut(node);
  while(props.hasMoreElements()){
    var prop=props.getNext();
    var target=mDS.GetTarget(node,prop,true);
    try {
      target=target.QueryInterface(Components.interfaces.nsIRDFResource);
      this.deleteRecursiveH(mDS,target);
    }
    catch (e){}
    mDS.Unassert(node,prop,target)
  }
}

function RDFNode( uri, mDS )
{
  if ( uri == null ) this.source = null;
  else this.source = RDFService.GetResource( uri );

  if ( mDS == null ) this.datasource = null;
  else this.datasource = mDS.datasource;

  this.container = null;
}

RDFNode.prototype.Init=
  function( source, mDS )
{
  this.source = source;
  this.datasource = mDS;
  this.container = null;
}

RDFNode.prototype.getValue=
  function ()
{
  return this.source.Value;
}

RDFNode.prototype.getNodeOrLiteral=
  function (val)
{
  var res = null;

  if( val != null ){
    try {
      val = val.QueryInterface(Components.interfaces.nsIRDFResource);
      res = new RDFNode();
      res.Init( val, this.datasource );
    }
    catch (ex){
      try {
        val = val.QueryInterface(Components.interfaces.nsIRDFLiteral);
        res = new RDFLiteral();
        res.Init( val, this.datasource );
      }
      catch (ex2){
      }
    }
  }
  return res;
}

RDFNode.prototype.getResource=
  function (val)
{
  if (typeof val == "string") return RDFService.GetResource(val);
  else return val.source;
}

RDFNode.prototype.getLiteral=
  function (val)
{
  if (typeof val == "string") return RDFService.GetLiteral(val);
  else return val.source;
}

RDFNode.prototype.checkContainer =
  function ()
{
  if ( this.container != null ) return true;

  var RDFContainer = '@mozilla.org/rdf/container;1';
  RDFContainer = Components.classes[RDFContainer].createInstance();
  RDFContainer = RDFContainer.QueryInterface(Components.interfaces.nsIRDFContainer);

  try {
    RDFContainer.Init( this.datasource, this.source );
    this.container = RDFContainer;
    return true;
  }
  catch (ex){
    return false;
  }
}

RDFNode.prototype.addTarget=
  function ( prop, target )
{
  prop = this.getResource( prop );
  target = this.getLiteral( target );
  this.datasource.Assert( this.source, prop, target, true );
}

RDFNode.prototype.addTargetOnce=
  function (prop,target)
{
  prop=this.getResource(prop);
  target=this.getLiteral(target);

  var oldTarget=this.datasource.GetTarget(this.source,prop,true);
  if (oldTarget!=null){
    this.datasource.Change(this.source,prop,oldTarget,target);
  }
  else {
    this.datasource.Assert(this.source,prop,target,true);
  }
}

RDFNode.prototype.modifyTarget =
  function ( prop, oldTarget, newTarget )
{
 	log.debug('= ' + prop)
 	log.debug('= ' + oldTarget)
 	log.debug('= ' + newTarget)
  	
  prop = this.getResource( prop );
  oldTarget = this.getLiteral( oldTarget );
  newTarget = this.getLiteral( newTarget );
  this.datasource.Change( this.source, prop, oldTarget, newTarget );
}

RDFNode.prototype.modifySource=
  function (prop,oldSource,newSource)
{
  prop=this.getResource(prop);
  oldSource=this.getResource(oldSource);
  newSource=this.getResource(newSource);
  this.datasource.Move(oldSource,newSource,prop,this.source);
}

RDFNode.prototype.targetExists=
  function (prop,target)
{
  prop=this.getResource(prop);
  target=this.getLiteral(target);
  return this.datasource.HasAssertion(this.source,prop,target,true);
}

RDFNode.prototype.removeTarget =
  function ( prop, target )
{
  prop = this.getResource( prop );
  target = this.getLiteral( target );
  this.datasource.Unassert( this.source, prop, target );
}

RDFNode.prototype.getProperties=
  function ()
{
  return new RDFEnumerator(this.datasource.ArcLabelsOut(this.source),this.datasource);
}

RDFNode.prototype.getInProperties=
  function ()
{
  return new RDFEnumerator(this.datasource.ArcLabelsIn(this.source),this.datasource);
}

RDFNode.prototype.propertyExists=
  function (prop)
{
  prop=this.getResource(prop);
  return this.datasource.hasArcOut(this.source,prop);
}

RDFNode.prototype.inPropertyExists=
  function (prop)
{
  prop=this.getResource(prop);
  return this.datasource.hasArcIn(this.source,prop);
}

RDFNode.prototype.getTarget =
  function (prop)
{
  prop = this.getResource(prop);
  return this.getNodeOrLiteral( this.datasource.GetTarget( this.source, prop, true ) );
}

RDFNode.prototype.getSource=
  function ( prop )
{
  prop = this.getResource( prop );
  var src = this.datasource.GetSource( prop, this.source, true );
  if ( src == null ) return null;
  var res = new RDFNode();
  res.Init( src, this.datasource );
  return res;
}

RDFNode.prototype.getTargets =
  function (prop)
{
  prop=this.getResource(prop);
  return new RDFEnumerator(
    this.datasource.GetTargets(this.source,prop,true),this.datasource);
}

RDFNode.prototype.getSources=
  function (prop)
{
  prop=this.getResource(prop);
  return new RDFEnumerator(
    this.datasource.GetSources(prop,this.source,true),this.datasource);
}

RDFNode.prototype.makeBag=
  function ()
{
  this.container=RDFContainerUtilsService.MakeBag(this.datasource,this.source);
}

RDFNode.prototype.makeSeq =
  function ()
{
  this.container = RDFContainerUtilsService.MakeSeq( this.datasource, this.source );
}

RDFNode.prototype.makeAlt=
  function ()
{
  this.container=RDFContainerUtilsService.MakeAlt(this.datasource,this.source);
}

RDFNode.prototype.isBag=
  function ()
{
  return RDFContainerUtilsService.IsBag(this.datasource,this.source);
}

RDFNode.prototype.isSeq=
  function ()
{
  return RDFContainerUtilsService.IsSeq(this.datasource,this.source);
}

RDFNode.prototype.isAlt=
  function ()
{
  return RDFContainerUtilsService.IsAlt(this.datasource,this.source);
}

RDFNode.prototype.isContainer=
  function ()
{
  return RDFContainerUtilsService.IsContainer(this.datasource,this.source);
}

RDFNode.prototype.getChildCount=
  function ()
{
  if (this.checkContainer()){
    return this.container.GetCount();
  }
  return -1;
}

RDFNode.prototype.getChildren=
  function ()
{
  if (this.checkContainer()){
    return new RDFEnumerator(this.container.GetElements(),this.datasource);
  }
  else return null;
}

RDFNode.prototype.addChild =
  function( child, exists )
{
  if( this.checkContainer() ){
    var childResource = null;
    if( typeof child == "string" ){
      childResource = RDFService.GetResource( child );
      child = new RDFNode();
      child.Init( childResource, this.datasource );
    }
    else childResource = child.source;

    if ( ! exists && this.container.IndexOf( childResource ) >= 0 ) return child;

    this.container.AppendElement( childResource );
    
    return child;
  }
  else return null;
}

RDFNode.prototype.addChildAt=
  function (child,idx)
{
  if (this.checkContainer()){
    var childResource=null;
    if (typeof child == "string"){
      childResource=RDFService.GetResource(child);
      child=new RDFNode();
      child.Init(childResource,this.datasource);
    }
    else childResource=child.source;
    this.container.InsertElementAt(childResource,idx,true);
    return child;
  }
  else return null;
}

RDFNode.prototype.removeChild=
  function (child)
{
  if (this.checkContainer()){
    var childResource=null;
    if (typeof child == "string"){
      childResource=RDFService.GetResource(child);
      child=new RDFNode();
      child.Init(childResource,this.datasource);
    }
    else childResource=child.source;
    this.container.RemoveElement(childResource,true);
    return child;
  }
  else return null;
}

RDFNode.prototype.removeChildAt=
  function (idx)
{
  if (this.checkContainer()){
    var childResource = this.container.RemoveElementAt( idx, true );
    return this.getNodeOrLiteral( childResource );
  }
  else return null;
}

RDFNode.prototype.getChildIndex=
  function (child)
{
  if (this.checkContainer()){
    return this.container.IndexOf(child.source);
  }
  else return -1;
}

RDFNode.prototype.type="Node";


function RDFLiteral(val,mDS)
{
  if (val==null) this.source=null;
  else this.source=RDFService.GetLiteral(val);

  if (mDS==null) this.datasource=null;
  else this.datasource=mDS.datasource;
}

RDFLiteral.prototype.Init=
  function (source,mDS)
{
  this.source=source;
  this.datasource=mDS;
}

RDFLiteral.prototype.getValue=
  function ()
{
  return this.source.Value;
}

RDFLiteral.prototype.getResource=
  function (val)
{
  if (typeof val == "string") return RDFService.GetResource(val);
  else return val.source;
}

RDFLiteral.prototype.getLiteral=
  function (val)
{
  if (typeof val == "string") return RDFService.GetLiteral(val);
  else return val.source;
}

RDFLiteral.prototype.modifySource=
  function (prop,olmDS,newsource)
{
  prop=this.getResource(prop);
  olmDS=this.getResource(olmDS);
  newsource=this.getResource(newsource);
  this.datasource.Move(olmDS,newsource,prop,this.source);
}

RDFLiteral.prototype.getInProperties=
  function (prop)
{
  return new RDFEnumerator(this.datasource.ArcLabelsIn(this.source),this.datasource);
}

RDFLiteral.prototype.inPropertyExists=
  function (prop)
{
  prop=this.getResource(prop);
  return this.datasource.hasArcIn(this.source,prop);
}

RDFLiteral.prototype.getSource=
  function (prop)
{
  prop=this.getResource(prop);
  var src=this.datasource.GetSource(prop,this.source,true);
  if (src==null) return null;
  var res=new RDFNode();
  res.Init(src,this.datasource);
  return res;
}

RDFLiteral.prototype.getSources=
  function (prop)
{
  prop=this.getResource(prop);
  return new RDFEnumerator(
    this.datasource.GetSources(prop,this.source,true),this.datasource);
}

RDFLiteral.prototype.type="Literal";


function RDFEnumerator(enumeration,mDS)
{
  this.enumeration=enumeration;
  this.datasource=mDS;
}

RDFEnumerator.prototype.hasMoreElements=
  function ()
{
  return this.enumeration.hasMoreElements();
}

RDFEnumerator.prototype.getNext=
  function ()
{
  var res=null;
  var val=this.enumeration.getNext();

  if (val!=null){
    try {
      val=val.QueryInterface(Components.interfaces.nsIRDFResource);
      res=new RDFNode();
      res.Init(val,this.datasource);
    }
    catch (ex){
      try {
        val=val.QueryInterface(Components.interfaces.nsIRDFLiteral);
        res=new RDFLiteral();
        res.Init(val,this.datasource);
      }
      catch (ex2){
      }
    }
  }
  return res;
}

