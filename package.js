Package.describe({
  name: 'froala:editor-reactive',
  summary: 'Reactive template wrapper around Froala Editor',
  version: '1.2.4_1',
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  // Declare package dependencies
  api.use([
    'froala:editor',
    'templating',
    'underscore'
    ], 'client');

  // package files
  api.addFiles([
    'froala-reactive.html',
    'froala-reactive.js'
    ], 'client');
});

