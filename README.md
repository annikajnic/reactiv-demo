# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

3. Start the json-server

   ```bash
   json-server --watch data/test.json --port 3000
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Development Decisions

Carousel - react-native-snap-carousel - I chose this carousel package because it was well documented and was a light weight package. Also has a large community which is a good sign for good functionality and flexibility.
https://www.npmjs.com/package/react-native-snap-carousel

Styled Component - I have a preference using styled components because it's a clean way to inject css to a component and the ability to export and reused the styled component.
https://styled-components.com/

# Test Data

I have provided three test examples, showing landscape, portait and square views.

Assumptions

- Test data is a defined type
- Test data will be held in a single json file

My first approach was in to import all the test files on load because I had some limitations with dynamically importing the json files. Thinking about this app's scalibility this approach is not ideal. I used json-server to post the json file to port 3000 allowing me utilize the json file as an API call. This also mimics a real world app and allows me to render only the selected carousel's images which images can hold a lot of storage causing apps to slow down. Other tools can be used to help with large image files like image compressors or have a in view renderer that only renders the images in view.

## Design

\*Loom Video

# Improvements
