require("./init");

var Backbone = require("backbone");
var Marionette = require("backbone.marionette");

// Marionette Inspector
if (window.__agent) {
    window.__agent.start(Backbone, Marionette);
}

var $ = Backbone.$;
$(window).on('load', function () {
    "use strict";

    var Application = require("./CoreEngine/Application");
    var app = new Application({rootNode: "#root"});
    app.start();

    console.log("app", app);
});
