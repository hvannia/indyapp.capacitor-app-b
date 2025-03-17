# Setup

## Prerequisites

[Environment Setup](https://capacitorjs.com/docs/getting-started/environment-setup)

```sh
# NodeJS 20 or higher
node --version
```

Cocoapods - Install via `homebrew` or `gem`,
for installation via gem on Apple Silicon Macs additional steps required.

```sh

brew install cocoapods
pod --version
# minimum of Xcode 16.0.
# xcde command line tools
xcode-select --install
# verify command line tools intstallation
xcode-select -p
# /Applications/Xcode.app/Contents/Developer
```

### Simple react app

```sh
npm create vite@latest capacitor-app -- --template react-ts
cd capacitor-app
npm install
npm install react-router-dom
# npm run build
```

... Added Routes

## capacitor

https://capacitorjs.com/docs/getting-started

```sh
npm install @capacitor/cli --save-dev
npx cap init

npm install @capacitor/core @capacitor/ios @capacitor/android

npx cap add ios
npx cap add android

npm run build
# then update the native platforms and install plugins to access native functionality ( pod install )
# syn after adding plugins
npx cap sync


```

iOS
[iOS docs](https://capacitorjs.com/docs/ios)

```sh

# open xcode
npx cap open ios
# or
open ios/App/App.xcworkspace


# To run the project on a device or simulator
# use xcode Or:
npx cap run ios





# <when> if needed
npx cap update ios

# only copy over the changes of the web folder and config, not update the native project.
npx cap copy



```

```sh
# live reload - add to capacitor.config.ts
ipconfig getifaddr en0
npx cap copy
```

## UI

```sh
npm install @ionic/react
npm install ionicons
```
