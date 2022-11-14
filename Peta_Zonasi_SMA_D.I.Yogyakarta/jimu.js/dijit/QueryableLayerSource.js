// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/QueryableLayerSource.html":'\x3cdiv\x3e\r\n\t\x3ctable class\x3d"radio-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd class\x3d"map-td" nowrap data-dojo-attach-point\x3d"mapTd"\x3e\r\n\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"mapLabel"\x3e${nls.selectFromMap}\x3c/label\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"portal-td" nowrap data-dojo-attach-point\x3d"portalTd"\x3e\r\n\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"portalLabel"\x3e${nls.selectFromPortal}\x3c/label\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"url-td" nowrap data-dojo-attach-point\x3d"urlTd"\x3e\r\n\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"urlLabel"\x3e${nls.addServiceUrl}\x3c/label\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\t\x3cdiv class\x3d"source-content"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"operationTip" class\x3d"operation-tip"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"mapDijitContainer" class\x3d"dijit-container map-dijit-container" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"portalDijitContainer" class\x3d"dijit-container portal-dijit-container" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"urlDijitContainer" class\x3d"dijit-container url-dijit-container" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/QueryableLayerSource.html dijit/form/RadioButton jimu/dijit/_QueryableLayerChooserWithButtons jimu/dijit/QueryableServiceChooserFromPortal jimu/dijit/_QueryableServiceChooserContent jimu/portalUrlUtils".split(" "),function(b,g,c,d,h,k,l,m,n,e,p,q,r,t){return h([k,l,m,g],{templateString:n,baseClass:"jimu-layer-source jimu-queryable-layer-source",
declaredClass:"jimu.dijit.QueryableLayerSource",nls:null,multiple:!1,createMapResponse:null,mustSupportStatistics:!1,portalUrl:null,postMixInProperties:function(){this.nls=window.jimuNls.queryableLayerSource;this.portalUrl=t.getStandardPortalUrl(this.portalUrl)},postCreate:function(){this.inherited(arguments);this._initSelf()},getSelectedRadioType:function(){if(this.mapRadio.checked)return"map";if(this.portalRadio.checked)return"portal";if(this.urlRadio.checked)return"url"},getSelectedItems:function(){var a=
[];this.mapRadio.checked?a=this.queryableLayerChooserFromMap.getSelectedItems():this.portalRadio.checked?a=this.queryableServiceChooserFromPortal.getSelectedItems():this.urlRadio.checked&&(a=this.queryableServiceChooserContent.getSelectedItems());return a},startup:function(){this.inherited(arguments);this.queryableLayerChooserFromMap.startup();this.queryableServiceChooserFromPortal.startup();this.queryableServiceChooserContent.startup()},_initSelf:function(){this._initRadios();this._createQueryableLayerChooserWithButtons();
this._createQueryableServiceChooserFromPortal();this._createQueryableServiceChooserContent();this._onRadioClicked()},_createQueryableLayerChooserWithButtons:function(){this.queryableLayerChooserFromMap=new p({style:{width:"100%",height:"100%"},multiple:this.multiple,createMapResponse:this.createMapResponse,mustSupportStatistics:this.mustSupportStatistics,onlyShowWebMapLayers:!0});this.queryableLayerChooserFromMap.operationTip=this.nls.selectLayer;this.queryableLayerChooserFromMap.placeAt(this.mapDijitContainer);
this.own(b(this.queryableLayerChooserFromMap,"ok",c.hitch(this,function(a){a&&0<a.length&&this.emit("ok",a)})));this.own(b(this.queryableLayerChooserFromMap,"cancel",c.hitch(this,function(){this.emit("cancel")})))},_createQueryableServiceChooserFromPortal:function(){this.queryableServiceChooserFromPortal=new q({multiple:this.multiple,portalUrl:this.portalUrl,style:{width:"100%",height:"100%"}});this.queryableServiceChooserFromPortal.operationTip=this.nls.chooseItem;this.queryableServiceChooserFromPortal.placeAt(this.portalDijitContainer);
this.own(b(this.queryableServiceChooserFromPortal,"next",c.hitch(this,function(){this.queryableServiceChooserFromPortal.operationTip=this.nls.chooseItem+" -\x3e "+this.nls.chooseLayer;this._updateOperationTip()})));this.own(b(this.queryableServiceChooserFromPortal,"back",c.hitch(this,function(){this.queryableServiceChooserFromPortal.operationTip=this.nls.chooseItem;this._updateOperationTip()})));this.own(b(this.queryableServiceChooserFromPortal,"ok",c.hitch(this,function(a){a&&0<a.length&&this.emit("ok",
a)})));this.own(b(this.queryableServiceChooserFromPortal,"cancel",c.hitch(this,function(){this.emit("cancel")})));0<=(this.portalUrl||"").toLowerCase().indexOf(".arcgis.com")?this.portalLabel.innerHTML=this.nls.selectFromOnline:this.portalLabel.innerHTML=this.nls.selectFromPortal},_createQueryableServiceChooserContent:function(){this.queryableServiceChooserContent=new r({multiple:this.multiple,style:{width:"100%",height:"100%"}});this.queryableServiceChooserContent.operationTip=this.nls.setServiceUrl;
this.queryableServiceChooserContent.placeAt(this.urlDijitContainer);this.own(b(this.queryableServiceChooserContent,"ok",c.hitch(this,function(a){a&&0<a.length&&this.emit("ok",a)})));this.own(b(this.queryableServiceChooserContent,"cancel",c.hitch(this,function(){this.emit("cancel")})))},_initRadios:function(){var a="queryableLayerSourceRadios_"+this._getRandomString(),f=c.hitch(this,this._onRadioClicked);this.mapRadio=new e({name:a,style:"margin-bottom: 1px;",checked:!0});this.own(b(this.mapRadio,
"change",f));this.mapRadio.placeAt(this.mapTd,"first");this.portalRadio=new e({name:a,style:"margin-bottom: 1px;",checked:!1});this.own(b(this.portalRadio,"change",f));this.portalRadio.placeAt(this.portalTd,"first");this.urlRadio=new e({name:a,style:"margin-bottom: 1px;",checked:!1});this.own(b(this.urlRadio,"change",f));this.urlRadio.placeAt(this.urlTd,"first");this.own(b(this.mapLabel,"click",c.hitch(this,function(){this.mapRadio.set("checked",!0)})));this.own(b(this.portalLabel,"click",c.hitch(this,
function(){this.portalRadio.set("checked",!0)})));this.own(b(this.urlLabel,"click",c.hitch(this,function(){this.urlRadio.set("checked",!0)})))},_getRandomString:function(){var a=Math.random().toString();return a=a.slice(2,a.length)},_onRadioClicked:function(){d.setStyle(this.mapDijitContainer,"display","none");d.setStyle(this.portalDijitContainer,"display","none");d.setStyle(this.urlDijitContainer,"display","none");this.mapRadio.checked?(d.setStyle(this.mapDijitContainer,"display","block"),this.operationTip.innerHTML=
this.nls.selectLayer):this.portalRadio.checked?(d.setStyle(this.portalDijitContainer,"display","block"),this.operationTip.innerHTML=this.nls.chooseItem):this.urlRadio.checked&&(d.setStyle(this.urlDijitContainer,"display","block"),this.operationTip.innerHTML=this.nls.setServiceUrl);this._updateOperationTip()},_updateOperationTip:function(){this.mapRadio.checked?this.operationTip.innerHTML=this.queryableLayerChooserFromMap.operationTip:this.portalRadio.checked?this.operationTip.innerHTML=this.queryableServiceChooserFromPortal.operationTip:
this.urlRadio.checked&&(this.operationTip.innerHTML=this.queryableServiceChooserContent.operationTip)}})});