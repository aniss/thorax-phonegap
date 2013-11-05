new (Backbone.Router.extend({
        routes: {
            '':'index',
        },
        index: function() {
            var view = new Application.Views['index']();
            Application.setView(view);
        },
    }))();
