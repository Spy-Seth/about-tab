var Plugin = require("../CoreEngine/Plugin");
var _ = require("underscore");

module.exports = Plugin.extend({
    name: "background.local",
    className: "background-plugin-container",
    template: '<div class="effect"></div><div class="caption"></div>',

    interval: 30000,
    backgrounds: [
        {
            path: "./images/backgrounds/100_IV_2560_1600.jpg",
            caption: "Coucou",
            author: "Jean-Marc",
            link: "http://www.perdu.com"
        },
        {
            path: "./images/backgrounds/solitary_wallpaper_by_solefield-d84kv3h.jpg",
            caption: "C'est moi",
            author: "Jean-Marc",
            link: "http://www.perdu.com"
        },
        {
            path: "./images/backgrounds/Stones fhd 1920x1080.jpg",
            caption: "Envie d'un verre ?",
            author: "Jean-Marc",
            link: "http://www.perdu.com"
        },
        {
            path: "./images/backgrounds/Monte Vettore fhd 1920x1080.jpg",
            caption: "Ou pas",
            author: "Jean-Marc",
            link: "http://www.perdu.com"
        },
        {
            path: "./images/backgrounds/lights in the night.jpg",
            caption: "Moustache !",
            author: "Jean-Marc",
            link: "http://www.perdu.com"
        }
    ],

    timer: null,
    index: 0,

    initialize: function () {
        this.backgrounds = _.shuffle(this.backgrounds);
        this.render();

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
        //console.log('tick', this.backgrounds[this.index]);

        this.changeBackground(this.index);

        this.index++;
        if (this.index > (this.backgrounds.length - 1)) {
            this.index = 0;
        }
    },

    changeBackground: function (index) {
        var background = this.backgrounds[index];
        this.$el.css("background-image", "url('" + background["path"] + "')");
        this.$el.find(".caption").html("<a href=\"" + background.link + "\" title=\"" + background.author + "\">" + background.caption + "</a>")
    }
});
