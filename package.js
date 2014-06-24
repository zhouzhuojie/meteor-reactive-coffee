Package.describe({
  summary: "Reactive-coffee for Meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.use('underscore', 'client');
  api.use('coffeescript', ['client', 'server']);
  api.add_files('global-import.js', 'client');
  api.add_files('reactive-coffee/dist/reactive-coffee.min.js', 'client');
  api.add_files('main.js', 'client');
  api.add_files('rx.meteor.coffee', 'client');
  if (api.export){
    api.export(['rx', 'rxt'], 'client');
  }
});
