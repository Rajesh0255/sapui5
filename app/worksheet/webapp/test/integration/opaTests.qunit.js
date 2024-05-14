sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'worksheet/test/integration/FirstJourney',
		'worksheet/test/integration/pages/Author_detailsList',
		'worksheet/test/integration/pages/Author_detailsObjectPage'
    ],
    function(JourneyRunner, opaJourney, Author_detailsList, Author_detailsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('worksheet') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthor_detailsList: Author_detailsList,
					onTheAuthor_detailsObjectPage: Author_detailsObjectPage
                }
            },
            opaJourney.run
        );
    }
);