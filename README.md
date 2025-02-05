# Welcome to Reactiv Demo using Expo

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the json-server

   ```bash
   npx json-server --watch data/test.json --port 3000
   ```

3. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Development Decisions

Carousel - react-native-snap-carousel - I chose this carousel package because it was well-documented and was a lightweight package. Also has a large community which is a good sign for good functionality and flexibility.
https://www.npmjs.com/package/react-native-snap-carousel

Styled Component - I have a preference for using styled-components because it's a clean way to inject css into a component and the ability to export and reuse the styled component.
https://styled-components.com/

### Homepage

Displays the responsive data from the test cases into a carousel, text section and a call to action.

### Settings Page

For managing the different test data. When you click on a new test data set it will immediately update the homepage. I implemented this using a context provider, a react tool that allows you to store data at a high level of your app and then you can easily access the value using `useContext` hook.

## Design

<img src="https://github.com/user-attachments/assets/ef2692c2-2683-47cc-9cf7-9b17d209ccec" width="150" />
<img src="https://github.com/user-attachments/assets/dde59159-a021-42e0-9137-cc942a375794" width="150" />

### Designs explanation: [(https://www.loom.com/share/995a3b79ad9d4069bc939de14d4179c6)]

## Test Data

I have provided three test examples, showing landscape, portrait and square views.

Assumptions

- Test data is a defined type
- Test data will be held in a single JSON file

My first approach was to import all the test files on load because I had some limitations with dynamically importing the JSON files with Typescript. Thinking about this app's scalability, this approach is not ideal. I used json-server to post the JSON file to port 3000, allowing me to utilize the JSON file as an API call. This also mimics a real-world app and enables me to render only the selected carousel's images, which images can hold a lot of storage, causing apps to slow down. Other tools can be used to help with large image files, like image compressors or a view renderer that only renders the images in view.

Another approach that I troubleshooted but didn't end up going with was utilizing expo-file-system. This approach required the files to be saved to the documentDirectory when the app loaded. Thinking about long-term scalability and speed of the app I don't think it was the right solution. Furthermore, documentDirectory is only utilized in the simulators and not the web view so the data would never load due to a 404.
