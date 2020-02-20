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
  module.exports.metadata = {
    "cordova-plugin-app-launcher": "0.4.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});