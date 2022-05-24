sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";
    var prefixId;
	var oScanResultText;
    
	return BaseController.extend("sap.ui.demo.nav.controller.employee.overview.EmployeeOverviewTop", {

        onInit: function () {
			prefixId = this.createId();
			if (prefixId){
				prefixId = prefixId.split("--")[0] + "--";
			} else {
				prefixId = "";
			}
			oScanResultText = sap.ui.getCore().byId(prefixId + 'sampleBarcodeScannerResult');
		},

		onScanSuccess: function(oEvent) {
			if (oEvent.getParameter("cancelled")) {
				MessageToast.show("Scan cancelled", { duration:1000 });
			} else {
				if (oEvent.getParameter("text")) {
					oScanResultText.setText(oEvent.getParameter("text"));
				} else {
					oScanResultText.setText('');
				}
			}
		},

		onScanError: function(oEvent) {
			MessageToast.show("Scan failed: " + oEvent, { duration:1000 });
		},

		onScanLiveupdate: function(oEvent) {
			// User can implement the validation about inputting value
		},

		onAfterRendering: function() {
			// Reset the scan result
			var oScanButton = sap.ui.getCore().byId(prefixId + 'sampleBarcodeScannerButton');
			if (oScanButton) {
				$(oScanButton.getDomRef()).on("click", function(){
					oScanResultText.setText('');
				});
			}
		}

	});
});