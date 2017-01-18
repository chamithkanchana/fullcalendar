Package.describe({
  name: 'fullcalendar:fullcalendar-chamith',
  version: '2.3.0',
  summary: 'Full-sized drag & drop event calendar',
  git: 'https://github.com/chamithkanchana/fullcalendar.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['momentjs:moment@2.5.0','jquery@1.11.4','templating@1.1.5']);
  api.addAssets(["dist/fullcalendar.print.css"], 'client');
  api.addFiles([
    "dist/fullcalendar.css",
    "dist/fullcalendar.js",
    "dist/lang-all.js",
    "dist/gcal.js",
    "head.html"
  ], 'client');
});
