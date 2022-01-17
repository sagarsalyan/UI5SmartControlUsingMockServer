sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/ObjectListItem",
	"sap/m/ObjectAttribute"
], function (Controller,ObjectListItem, ObjectAttribute) {
	"use strict";

	return Controller.extend("app.UI5SmartControlsUsingMockServer.controller.App", {
		onInit: function () {
			this.getView().byId("idForm").bindElement("/Meetups('1')");
		},
		onTest:function(oEvent){
			debugger
		}
		
	});
});