// Associate jQuery to Backbone
var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $; // TODO: replace jQuery by native implementation.

// Configure moment locale
var moment = require("moment");
moment.locale("fr");

// Replace Backbone.Wreqr with Backbone.Radio in Marionette.
// @see https://gist.github.com/jmeas/7992474cdb1c5672d88b
var _ = require('underscore');
var Marionette = require("backbone.marionette");
var Radio = require("backbone.radio");
Marionette.Application.prototype._initChannel = function () {
    this.channelName = _.result(this, 'channelName') || 'global';
    this.channel = _.result(this, 'channel') || Radio.channel(this.channelName);
};
