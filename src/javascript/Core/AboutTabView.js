var Backbone = require("backbone");
var PluginList = require("./PluginsList");
var LocalBackgroundPlugin = require("../Plugins/Background.local");
var Clock = require("../Plugins/Clock")

module.exports = Backbone.View.extend({
    template: '<div class="plugins-container"></div>',
    pluginsContainerNode: null,

    plugins: new PluginList(),

    initialize: function () {
        this.plugins.add(new LocalBackgroundPlugin());
        this.plugins.add(new Clock());

        this.render();

        this.initializePlugins();
    },

    render: function () {
        this.$el.html(this.template);
        this.pluginsContainerNode = this.$el.find('.plugins-container');

        return this;
    },

    initializePlugins: function () {
        var self = this;
        this.plugins.each(function (plugin) {
            self.pluginsContainerNode.append(plugin.$el);
        });
    }
});
