cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-app-launcher.Launcher",
    "file": "plugins/cordova-plugin-app-launcher/www/Launcher.js",
    "pluginId": "cordova-plugin-app-launcher",
    "clobbers": [
      "plugins.launcher"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.4",
  "cordova-plugin-app-launcher": "0.4.0"
};
// BOTTOM OF METADATA
});