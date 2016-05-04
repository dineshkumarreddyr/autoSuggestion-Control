(function () {
    "use strict";

    angular
    .module('autosuggestion')
    .controller('AutoSuggestionController', autoSuggestionController);

    function autoSuggestionController() {
        var ex = this;

        //Sample data array
        ex.data = [
            {
                name: 'Dinesh Rachumalla',
            },
            {
                name: 'Aneel Kaushik'
            },
            {
                name: 'Praveen Samudrala',
            },
            {
                name: 'Senthil Nathan Shanmugam'
            },
            {
                name: 'Shailendra Kumar',
            },
            {
                name: 'Chenna Krishna Kaskurthi'
            },
            {
                name: 'Tejaswini',
            },
            {
                name: 'Anshad Vattapoyil'
            },
            {
                name: 'Kathik',
            },
            {
                name: 'Hari Krishnan'
            },
            {
                name: 'Haneef Abdul',
            },
            {
                name: 'Naveen Moparthy'
            },
            {
                name: 'Pavan Kumar Bandaru',
            },
            {
                name: 'Jagadeesh Mittakoila'
            }
        ];
    }
})();