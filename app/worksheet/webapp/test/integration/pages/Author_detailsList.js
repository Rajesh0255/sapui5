sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'worksheet',
            componentId: 'Author_detailsList',
            contextPath: '/Author_details'
        },
        CustomPageDefinitions
    );
});