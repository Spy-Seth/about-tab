var Backbone = require("backbone");
Backbone.$ = require("jquery");
var PluginList = require("./PluginsList");
var BackgroundPlugin = require("../Plugins/Background");

module.exports = Backbone.View.extend({
    template: '<div class="plugins-container"></div>',
    pluginsContainerNode: null,

    plugins: new PluginList(),

    initialize: function () {
        this.plugins.add(new BackgroundPlugin());

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
