var Backbone = require("backbone");
var Plugin = require("./Plugin");

module.exports = Backbone.Collection.extend({
    model: Plugin
});
