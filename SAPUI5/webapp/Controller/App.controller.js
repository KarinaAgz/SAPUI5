sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessegeToast",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"

],
    /** 
     *  @param {typeof sap.ui.core.mvc.Controller}Controller
     *  @param {typeof sap.m.MessegeToast}MessegeToast
     * @param {typeof sap.ui.model.resource.ResourceModel}ResourceModel
     * 
    */
    function (Controller, MessegeToast, Models,ResourceModel) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.Controller.App", {

            onInit: function () {
              
            },
            onShowHello: function () {
                //read text from i18n model
                var oBundle =this.getview().getModel("i18n").getResourceBundle();
                //read property from data model
                var sRecipient=this.getView().getModel().getProperty("/recipient/name");

                var sMsg=oBundle.getText("helloMsg",[sRecipient]);
                
                MessegeToast.show(sMsg)
            }
        });
    });
