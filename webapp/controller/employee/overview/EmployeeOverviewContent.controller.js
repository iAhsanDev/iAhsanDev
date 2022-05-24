sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("sap.ui.demo.nav.controller.employee.overview.EmployeeOverviewContent", {
		
		onConfirm: function () {
			
			this.oModel;
			MessageToast.show("Data Posted");
		
		
		}

	});
});













