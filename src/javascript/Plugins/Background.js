var Plugin = require("../Core/Plugin");
var _ = require("underscore");

module.exports = Plugin.extend({
    name: "background",
    className: "background-plugin-container",
    template: '<div class="effect"></div>',

    interval: 5000,
    backgrounds: [
        "./images/backgrounds/100_IV_2560_1600.jpg",
        "./images/backgrounds/solitary_wallpaper_by_solefield-d84kv3h.jpg",
        "./images/backgrounds/Stones fhd 1920x1080.jpg",
        "./images/backgrounds/Monte Vettore fhd 1920x1080.jpg",
        "./images/backgrounds/lights in the night.jpg"
    ],

    timer: null,
    index: 0,

    initialize: function () {
        this.backgrounds = _.shuffle(this.backgrounds);
        this.render();

console.log("init");

        window.setTimeout(this.tickHandler, 0, this)
        this.timer = window.setInterval(this.tickHandler, this.interval, this);
    },
    render: function () {
        this.$el.html(this.template);

        return this;
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
        this.$el.css("background-image", "url('" + this.backgrounds[index] + "')");
    }
});
