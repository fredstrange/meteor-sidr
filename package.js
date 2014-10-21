Package.describe({
  name: 'fredstrange:sidr',
  summary: 'Sidr is a jQuery plugin for creating side menus and the easiest way for doing your menu responsive. ',
  version: '1.2.1',
  git: 'https://github.com/fredstrange/meteor-sidr.git'
});

Package.onUse(function(api) {
api.versionsFrom('METEOR@0.9.0');

api.use(['jquery'], ['client']);;

api.add_files(["sidr/dist/jquery.sidr.js", "sidr/dist/stylesheets/jquery.sidr.dark.css"], "client");
});

