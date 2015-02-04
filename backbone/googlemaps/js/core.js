require.config({
    baseUrl: "js",
    paths: {
        jquery: 'libs/jquery-1.8.2.min',
        modernizr: 'libs/modernizr-2.6.1-respond-1.1.0',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        gmap:'libs/gmap',
        async: 'libs/async',
        text: 'libs/text',
        templates: '../templates'
    },
    'shim':{
        backbone:{
            'deps' :['jquery' ,'underscore'],
            'exports' : 'Backbone'
        },
        modernizr:{
            'exports' : 'Modernizr'
        },
        underscore: {
            'exports': '_'
        }
    },
    waitSeconds: 10,
    urlArgs: 'v='+Math.floor(Math.random()*99999)
});

require([
    'app'
], function(App){
    App.initialize();
});