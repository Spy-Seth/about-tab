var Marionette = require("backbone.marionette");
var PluginsView = require("./PluginsView");
var PluginList = require("./PluginsList");

var LocalBackgroundPlugin = require("./../Plugins/Background.local");
var ClockPlugin = require("./../Plugins/Clock");

module.exports = Marionette.Controller.extend({
    plugins: null,
    view: null,

    initialize: function (pluginsContainerRegion) {
        // TODO: add event to inform the plugin of the process state.

        this.plugins = new PluginList();
        this.plugins.add(new LocalBackgroundPlugin());
        this.plugins.add(new ClockPlugin());

        this.view = new PluginsView();
        pluginsContainerRegion.show(this.view);

        this._initializePlugins();
    },

    _initializePlugins: function () {
        var self = this;
        this.plugins.each(function (plugin) {
            self.view.attachPlugins(plugin)
        });
    }
});
