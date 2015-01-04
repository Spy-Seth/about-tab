var Marionette = require("backbone.marionette");
var PluginsLoaderView = require("./PluginsLoaderView");

module.exports = Marionette.Controller.extend({
    plugins: null,
    view: null,

    initialize: function (options) {
        var plugins = options.plugins || false;
        var pluginsContainerRegion = options.pluginsContainerRegion || false;

        if (!plugins) {
            throw new Error("Option 'plugins' is mandatory");
        }

        if (!pluginsContainerRegion) {
            throw new Error("Option 'pluginsContainerRegion' is mandatory");
        }

        this.plugins = plugins;

        this.view = new PluginsLoaderView();
        pluginsContainerRegion.show(this.view);

        this._initializePlugins();
    },

    _initializePlugins: function () {
        var self = this;
        this.plugins.each(function (plugin) {
            self.view.attachPlugins(plugin)
        });
    },

    onDestroy: function() {
        this.view.destroy();
    }
});
