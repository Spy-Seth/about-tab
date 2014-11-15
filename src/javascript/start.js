var Backbone = require("backbone");
Backbone.$ = require("jquery"); // TODO: replace jQuery by native implementation.

var AboutTabView = require("./Core/AboutTabView");
var $ = require("jquery");

$(window).on('load', function () {
    console.log("Coucou");

    var page = new AboutTabView({el: "#root"});
});
