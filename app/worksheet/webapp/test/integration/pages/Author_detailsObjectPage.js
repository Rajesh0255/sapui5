sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'worksheet',
            componentId: 'Author_detailsObjectPage',
            contextPath: '/Author_details'
        },
        CustomPageDefinitions
    );
});