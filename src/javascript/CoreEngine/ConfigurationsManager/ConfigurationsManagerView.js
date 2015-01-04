var Marionette = require("backbone.marionette");

module.exports = Marionette.View.extend({
    template: function () {
        return "" +
            "<a href=\"#\" class=\"open-configurations-button\">Show configurations</a>"
    },

    ui: {
        "openConfigurationsButton": ".open-configuration-button"
    },

    events: {
        "click .open-configuration-button": "openConfigurations"
    },

    render: function () {
        this.$el.html(this.template());

        return this;
    },

    openConfigurations: function () {
        console.log("Open configurations modal.");
    }
});
