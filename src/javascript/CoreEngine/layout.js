var Marionette = require("backbone.marionette");

module.exports = Marionette.LayoutView.extend({
    regions: {
        "pluginsContainer": ".plugins-container",
        "configurationsContainer": ".configurations-container"
    },

    getPluginsContainerRegion: function () {
        return this.getRegion("pluginsContainer");
    },

    getConfigurationsContainerRegion: function () {
        return this.getRegion("configurationsContainer");
    }
});
