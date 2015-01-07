Package.describe({
    summary: "Reactive-coffee for Meteor",
    version: "0.1.1",
    git: "https://github.com/zhouzhuojie/meteor-reactive-coffee.git",
    name: "mrt:reactive-coffee"
});

Package.onUse(function (api) {
    api.versionsFrom('1.0');
    api.use('jquery@1.0.0');
    api.use('underscore@1.0.0');
    api.use('coffeescript@1.0.0');
    api.add_files('global-import.js', 'client');
    api.add_files('reactive-coffee/dist/reactive-coffee.min.js', 'client');
    api.add_files('main.js', 'client');
    api.add_files('rx.meteor.coffee', 'client');
    api.export(['rx', 'rxt'], 'client');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('mrt:reactive-coffee');
    api.addFiles('mrt:reactive-coffee-tests.js', 'client');
});
