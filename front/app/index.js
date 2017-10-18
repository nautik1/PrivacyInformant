angular.module('PrivacyInformer', ['ngMaterial'])
    .controller('LeftCtrl', function() {
    })
    .controller('ToolbarController', function() {

    })
    .controller('ListCtrl', function(){
        this.todos = [{
            text: "Buy food",
            isDone: true
        },{
            text: "Eat it",
           isDone: false
        }]
    });
