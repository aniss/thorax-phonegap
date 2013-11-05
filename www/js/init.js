
// document.addEventListener("deviceready", onDeviceReady, false);

/**
 *
 */

var Application = window.Application = new Thorax.LayoutView({
    name: 'layout'
});


Application.Templates = Thorax.templates;
Application.Views = Thorax.Views;
Application.Models = Thorax.Models;
Application.Collections = Thorax.Collections;


Application.View = Thorax.View;
Application.Model = Thorax.Model;
Application.Collection = Thorax.Collection;


Thorax.setRootObject(Application);

$(function(){

console.log("I'm ready!" + Application);

Backbone.history.start({
    pushState: false,
    root: '/',
    silent: true
});

Application.appendTo('body');

Backbone.history.loadUrl();

});
