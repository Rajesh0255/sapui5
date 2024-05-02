sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.app.project1.controller.Newpage.controller", {
        onInit: function() {
            
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.onBook, this);
        },
        onBook: function(oEvent ){
          
            const {bookId} = oEvent.getParameter("arguments");
            //const sRouterName = oEvent.getParameter("name");
            const oForm = this.getView().byId("_IDGenObjectPageLayout1");
  
            oForm.bindElement(`/Books(${bookId})`, {
                 expand: 'Author_d,address'
            });
          
        }
      });
    }
  );