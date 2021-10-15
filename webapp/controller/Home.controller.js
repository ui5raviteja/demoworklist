sap.ui.define([
    "./BaseController"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
function(BaseController) {
    "use strict";

    return BaseController.extend("com.demo.worklist.controller.Home", {
        onInit: function() {


            // instead of UIComponent.getRouterFor(this)
            var oRouter = this.getRouter();

            // instead of this.getView().getModel(sName)
            var oModel = this.getModel();

            // instead of this.getOwnerComponent().getModel("i18n").getResourceBundle()
            var oResourceBundle = this.getResourceBundle();

        }
    });
});