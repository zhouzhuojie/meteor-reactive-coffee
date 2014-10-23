Package.describe({
  summary: "Reactive-coffee for Meteor",
  version: "0.1.0",
  git: "https://github.com/zhouzhuojie/meteor-reactive-coffee.git",
  name: "mrt:reactive-coffee"
});

Package.onUse(function (api) {
  api.use('jquery@1.0.0', 'client');
  api.use('underscore@1.0.0', 'client');
  api.use('coffeescript@1.0.0', ['client', 'server']);
  api.add_files('global-import.js', 'client');
  api.add_files('reactive-coffee/dist/reactive-coffee.min.js', 'client');
  api.add_files('main.js', 'client');
  api.add_files('rx.meteor.coffee', 'client');
  if (api.export){
    api.export(['rx', 'rxt'], 'client');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mrt:reactive-coffee');
  api.addFiles('mrt:reactive-coffee-tests.js', 'client');
});
