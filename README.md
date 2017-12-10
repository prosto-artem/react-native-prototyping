# simple-offset-pro
A react-native implementation of one of my portfolio apps originally developed in Android.
The aim of this repo is to improve the original application and deploy in both iOS and Android platforms. 

We have forked this project from the [pepperoni-app-kit](https://github.com/futurice/pepperoni-app-kit) as a starting boilerplate.

## Environment Setup
https://facebook.github.io/react-native/docs/getting-started.html#content

## Getting Started

1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html) for the platform/s of choice
1. Clone this project `git clone https://github.com/BrianJVarley/simple-offset-pro.git`
1. Run `npm install` from root directory
1. [Prepare Device or Emulator for a deploy](https://developer.android.com/training/basics/firstapp/running-app.html) 
1. Run `react-native -start` from root directory
1. Run `react-native run-android` in a new terminal from root directory. 


## Useful Commands

| Command | Output |
| --- | --- |
| ipconfig/all | Show's the machine ip details, look for ipv4 for your ip. Useful when configuring debug server on testing device |
| adb start server | Starts the adb server to listen for devices|
| adb kill server | Kills the adb server|
| android avd | Opens the Android Virtual Device app |
| adb devices | Shows currently connected Andorid devices |
| android sdk | Opens the Android SDK manager, useful when updating build tools |
| gradlew clean | Cleans and rebuild your Android platform project |
| gradlew compileDebug --stacktrace | Add stacktrace logging to gradle config |
| react-native -start  | Starts the react-native dev server |
| react-native run-android | Builds and deployes the app to listening Android device or emulator |



## Troubleshooting

| Error | Fix |
| --- | --- |
| error “Could not get BatchedBridge, make sure your bundle is packaged properly” | On device select Dismiss, shake device (opens Developer menu) -> Dev Settings -> Choose Debug server host & port for device (computers IP address and the port: 192.168.0.xx:8xxx, port is usually :8081) |
| error “device - unauthorized” on adb devices | Settings -> Developer Options -> Revoke USB debugging authorisations -> adb kill server -> adb start server -> adb devices |
| error "A problem occurred configuring project ':app'.> The SDK directory '/home/brian/Android/SDK' does not exist." | Add file `local.properties` in project Android folder with value `sdk.dir = /home/Username/Android/Sdk` | 
| error "INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.simpleoffsetpro signatures do not match the previously installed version;"| You need to uninstall the app on your device because you are using a different signature than the original. | 
| error "Couldn't get batched bridge, make sure your package is bundled correctly" | Run command `react-native start` to start the react native packager. Followed by `react-native run-android` |
|error "Unable to connect with remote debugger" | 

    Run adb reverse tcp:8081 tcp:8081
    Paste http://localhost:8081/debugger-ui into the address field of my Chrome browser. You should see the normal debugging screen but your app will still not be connected.
    Close and uninstall the app from your Android device
    Reinstall the app with react-native run-android
    Enable remote debugging on your app.
    Your app should now be connected to the debugger. 
  |












