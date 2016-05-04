(function () {
    "use strict";

    angular
    .module('autosuggestion')
    .directive('autoSuggestion', suggestionDirective);

    function suggestionDirective($timeout) {

        //Directive Controller
        function suggesstionDirController($scope) {
            var vm = this;


            //Default itemselect true
            vm.showSuggestionBox = false;
            //Item selected event
            vm.itemSelected = function (item, index) {
                //Binding the suggestion text to input element
                vm.inputText = item.name;

                vm.selectedText = item.name;

                vm.showSuggestionBox = false;
            }

            //Watch for value change
            $scope.$watch('vm.inputText', function (newValue, oldValue) {
                if (oldValue != newValue && newValue != vm.selectedText && newValue != '') {
                    //Setting back Item not selected to false as this time selected item got changed
                    vm.showSuggestionBox = true;
                }
            });
        }

        function suggestionLink(scope, element, attr) {
            //Bind the events to input elements
            $timeout(function () {
                var inputElement = element.children('.suggestion-input');
                var dropList = element.children('.suggestion-items').children('li');
                var map = [];
                inputElement.on('keydown', function (e) {
                    map[e.keyCode] = true;
                }).on('keyup', function (e) {
                    if (map[18] && e.keyCode === 40) {
                        scope.vm.showSuggestionBox = true;
                        scope.$apply();
                    }
                    else if (e.keyCode === 40) {
                        dropList.first().focus();
                        dropList.first().addClass('active');

                    }
                    map[e.keyCode] = false;
                });


                //KEY EVENTS - Dropdown List

                if (dropList) {
                    dropList.on('keydown', function (e) {
                        switch (e.keyCode) {
                            case 40:
                                if (angular.element(this).next('li').length == 0) {
                                    e.stopPropagation();
                                    return false;
                                }
                                angular.element(this).removeClass('active');
                                angular.element(this).next('li').addClass('active').focus();
                                break;
                            case 38:
                                if (angular.element(this).prev('li').length == 0) {
                                    e.stopPropagation();
                                    return false;
                                }
                                angular.element(this).removeClass('active');
                                angular.element(this).prev('li').addClass('active').focus();
                                break;
                            case 13:
                                angular.element(this).removeClass('active');
                                scope.vm.inputText = this.textContent;
                                scope.vm.showSuggestionBox = false;
                                scope.$apply();
                                break;
                        }
                    });
                }
            });

        }
        return {
            restrict: 'AE',
            templateUrl: '/src/views/autosuggestion.tpl.html',
            scope: {},
            bindToController: {
                data: '='
            },
            controller: suggesstionDirController,
            controllerAs: 'vm',
            link: suggestionLink
        }
    }
})();