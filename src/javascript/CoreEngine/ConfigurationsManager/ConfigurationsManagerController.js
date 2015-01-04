var Marionette = require("backbone.marionette");
var ConfigurationsManagerView = require("./ConfigurationsManagerView");

module.exports = Marionette.Controller.extend({
    plugins: null,
    view: null,

    initialize: function (options) {
        var plugins = options.plugins || false;
        var configurationsContainerRegion = options.configurationsContainerRegion || false;

        if (!plugins) {
            throw new Error("Option 'plugins' is mandatory");
        }

        if (!configurationsContainerRegion) {
            throw new Error("Option 'configurationsContainerRegion' is mandatory");
        }

        this.plugins = plugins;

        this.view = new ConfigurationsManagerView();
        configurationsContainerRegion.show(this.view);
    },

    onDestroy: function() {
        this.view.destroy();
    }
});
