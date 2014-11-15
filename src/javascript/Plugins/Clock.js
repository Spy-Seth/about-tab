var Plugin = require("../Core/Plugin");
var _ = require("underscore");
var moment = require('moment');

module.exports = Plugin.extend({
    name: "clock",
    className: "clock-plugin-container",
    template: '',

    timer: null,

    initialize: function () {
        this.render();

        window.setTimeout(this.tickHandler, 0, this)
        this.timer = window.setInterval(this.tickHandler, 1000, this);
    },

    render: function () {
        this.$el.html(this.template);

        return this;
    },

    tickHandler: function (self) {
        self.tick.apply(self);
    },

    tick: function () {
        var now = moment();
        var formatedTime = now.format("LLLL");

        console.log('tick', formatedTime);

        this.$el.text(formatedTime);
    }
});
