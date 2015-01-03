var Marionette = require("backbone.marionette");

module.exports = Marionette.View.extend({
    attachPlugins: function (plugin) {
        this.$el.append(plugin.$el);
    }
});
