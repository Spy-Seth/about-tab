var Marionette = require("backbone.marionette");

module.exports = Marionette.LayoutView.extend({
    regions: {
        "pluginsContainer": ".plugins-loader-container",
        "configurationsContainer": ".configurations-manager-container"
    },

    getPluginsContainerRegion: function () {
        return this.getRegion("pluginsContainer");
    },

    getConfigurationsContainerRegion: function () {
        return this.getRegion("configurationsContainer");
    }
});
