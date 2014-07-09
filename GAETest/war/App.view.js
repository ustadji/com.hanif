sap.ui.jsview("App", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf App
	 */
	getControllerName : function() {
		return "App";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf App
	 */
	createContent : function(oController) {

		var app = new sap.m.App("theApp", {
//			initialPage : "page1"
		}); // page1 should be displayed first

		// create the first page of your application
		var page1 = new sap.m.Page("page1", {
			title : "Hand Evaluator",
			content : sap.ui.jsview("index")
//			content : new sap.m.Text({
//				text : "Hello its me!!"
//			})
		});

		app.addPage(page1);

		return app;
	}

});
