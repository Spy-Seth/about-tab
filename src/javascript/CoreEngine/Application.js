var Marionette = require("backbone.marionette");
var RootLayout = require("./Layout");
var PluginsLoaderController = require("./PluginsLoader/PluginsLoaderController");
var ConfigurationsManagerController = require("./ConfigurationsManager/ConfigurationsManagerController");
var PluginList = require("./PluginsList");

var LocalBackgroundPlugin = require("./../Plugins/Background.local/Background.local.js");
var ClockPlugin = require("./../Plugins/Clock/Clock");

module.exports = Marionette.Application.extend({
    /**
     * @type RootLayout
     */
    rootLayout: null,

    /**
     * @type PluginList
     */
    plugins: null,

    options: {
        rootNode: "body"
    },

    initialize: function (options) {
        this.options = options;
    },

    onStart: function (options) {
        this.rootLayout = new RootLayout({el: this.options.rootNode});

        // TODO: add event to inform the plugin of the process state.
        this.plugins = new PluginList();
        this.plugins.add(new LocalBackgroundPlugin());
        this.plugins.add(new ClockPlugin());

        var pluginsController = new PluginsLoaderController({
            pluginsContainerRegion: this.rootLayout.getPluginsContainerRegion(),
            plugins: this.plugins
        });

        var configurationsController = new ConfigurationsManagerController({
            configurationsContainerRegion: this.rootLayout.getConfigurationsContainerRegion(),
            plugins: this.plugins
        });
    }
});
