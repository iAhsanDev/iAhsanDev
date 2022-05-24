sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (BaseController, MessageToast, JSONModel) {
	"use strict";

	return BaseController.extend("sap.ui.demo.nav.controller.employee.TransferOC", {
		onInit: function () {
			
			var oData = {
				item : ""
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel)
			debugger;
		},

		onAfterRendering: function(){								


      
		},
		
		onConfirm: function () {
			
			this.oModel;
			console(oModel);
			MessageToast.show("Data Posted");
		
		
		},

		onClearall: function () {
			MessageToast.show("Data Cleared");
		}

		
	});
});