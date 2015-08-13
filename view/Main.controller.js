sap.ui.controller("sap.training.exc09.aggregation_binding.view.Main", {

		onInit: function() {
			
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.loadData("json/data.json");
				this.getView().setModel(oModel, "connections");
	
		}
});