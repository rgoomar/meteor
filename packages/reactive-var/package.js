Package.describe({
  summary: "Reactive variable",
  version: '1.0.0'
});

Package.on_use(function (api) {
  api.export('ReactiveVar');

  api.use('deps');

  api.add_files('reactive-var.js');
});
