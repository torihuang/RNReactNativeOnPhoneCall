var RNReactNativeOnPhoneCall = require('react-native').NativeModules.RNReactNativeOnPhoneCall;

module.exports = {
  isTablet: function () {
    return RNReactNativeOnPhoneCall.isTablet;
  },
}
