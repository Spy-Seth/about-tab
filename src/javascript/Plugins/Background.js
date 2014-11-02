var Plugin = require("../Core/Plugin");
var _ = require("underscore");

module.exports = Plugin.extend({
    name: "background",
    className: "background-plugin-container",

    interval: 5000,
    backgrounds: ["red", "blue", "green", "purple"],

    timer: null,
    index: 0,

    initialize: function () {
        this.backgrounds = _.shuffle(this.backgrounds);
        this.render();

        if (this.timer) {
            window.clearInterval(this.timer);
        }

        window.setTimeout(this.tickHandler, 0, this)
        this.timer = window.setInterval(this.tickHandler, this.interval, this);
    },

    tickHandler: function (self) {
        self.tick.apply(self);
    },

    tick: function () {
        console.log('tick', this.backgrounds[this.index]);

        this.changeBackground(this.index);

        this.index++;
        if (this.index > (this.backgrounds.length - 1)) {
            this.index = 0;
        }
    },

    changeBackground: function (index) {
        this.$el.css("background-color", this.backgrounds[index]);
    }
});
