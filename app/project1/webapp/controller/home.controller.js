sap.ui.define([
    "./BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/Token",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, Token) {
        "use strict";

        return Controller.extend("com.app.project1.controller.home", {
            onInit: function () {
                var oView = this.getView();
                const oMultiInput1 = oView.byId("idAuthorFilterValue");
                const oMultiInput2 = oView.byId("idTitleFilterValue");
                const oMultiInput3 = oView.byId("idStockFilterValue");
                const oMultiInput4 = oView.byId("idPhoneFilterValue");
                oMultiInput1.addValidator(function (args) {
                    if (true) {
                        var text = args.text;
                        return new Token({ key: text, text: text });
                    }
                })
                oMultiInput2.addValidator(function (args) {
                    if (true) {
                        var text = args.text;
                        return new Token({ key: text, text: text });
                    }
                })
                oMultiInput3.addValidator(function (args) {
                    if (true) {
                        var text = args.text;
                        return new Token({ key: text, text: text });
                    }
                })
                oMultiInput4.addValidator(function (args) {
                    if (true) {
                        var text = args.text;
                        return new Token({ key: text, text: text });
                    }
                })
            },
            onGoPress: function () {
                debugger

                const oView = this.getView(),
                    oAuthor = oView.byId("idAuthorFilterValue"),
                    sAuthor = oAuthor.getTokens(),
                    oTitle = oView.byId("idTitleFilterValue"),
                    sTitle = oTitle.getTokens(),
                    oStock = oView.byId("idStockFilterValue"),
                    sStock = oStock.getTokens(),
                    oPhone = oView.byId("idPhoneFilterValue"),
                    sPhone = oPhone.getTokens(),

                    oTable = oView.byId("idBooksTable"),
                    aFilter = [];

                sAuthor.filter((element) => {
                    debugger

                    element ? aFilter.push(new Filter("author", FilterOperator.EQ, element.getKey())) : "";
                })
                sTitle.filter((element) => {

                    element ? aFilter.push(new Filter("title", FilterOperator.EQ, element.getKey())) : "";
                })
                sStock.filter((element) => {

                    element ? aFilter.push(new Filter("stock", FilterOperator.EQ, element.getKey())) : "";
                })
                sPhone.filter((element) => {

                    element ? aFilter.push(new Filter("phone", FilterOperator.EQ, element.getKey())) : "";
                })

                oTable.getBinding("items").filter(aFilter)

            },
            onAdd: async function () {
                if (!this.oDialogboxforbook) {
                    this.oDialogboxforbook = await this.loadFragment("Dialogboxforbook")
                }
                this.oDialogboxforbook.open();
            },

            onCloseDialog: function () {
                if (this.oDialogboxforbook.isOpen()) {
                    this.oDialogboxforbook.close()
                }
             
            },
            onSelectBook: function (oEvent) {
                debugger
                const { ID, author } = oEvent.getSource().getSelectedItem().getBindingContext().getObject();
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteNew", {
                    bookId: ID,
                    author: author
                })
            }








        });
    });
