var Marionette = require("backbone.marionette");
var RootLayout = require("./Layout");
var PluginsController = require("./PluginsController");

module.exports = Marionette.Application.extend({
    rootLayout: null,

    options: {
        rootNode: "body"
    },

    initialize: function (options) {
        this.options = options;
    },

    onStart: function (options) {
        this.rootLayout = new RootLayout({el: this.options.rootNode});

        var pluginsController = new PluginsController(this.rootLayout.getPluginsContainerRegion());
    }
});
