# MyPetLibrary

MyPetLibrary is a mobile application built with React Native and Expo that helps you find the perfect name for your new pet, save their details, and keep a library of all your beloved companions.

## Features

- **Name Suggestion**: Get random name suggestions for cats, dogs, or other pets.
- **Add Pet Details**: Save your favorite suggested names along with a photo and a memo.
- **Pet Library**: View a collection of all your saved pets.
- **Intuitive Navigation**: Easy switching between Home and Library screens using a tab bar.

## Installation

To get started with MyPetLibrary, follow these steps:

1.  **Clone the repository (if applicable) or navigate to the project directory:**

    ```bash
    cd /Users/eddie/Projects/randomName
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

    This will install all the necessary packages, including `expo-image-picker`.

## How to Run the App

Once the dependencies are installed, you can run the app on your device or emulator:

-   **For Android:**

    ```bash
    npm run android
    # or
    yarn android
    ```

-   **For iOS:**

    ```bash
    npm run ios
    # or
    yarn ios
    ```

-   **For Web (development server):**

    ```bash
    npm run web
    # or
    yarn web
    ```

    This will open the app in your web browser. Note that some features like image picking might behave differently on web compared to native.

## Project Structure

The project follows a standard Expo project structure with custom components and services:

```
/Users/eddie/Projects/randomName/
├───.expo/
├───.git/
├───.vscode/
├───app/
│   ├───_layout.tsx         # Root layout for navigation (tabs and stack)
│   ├───index.tsx           # Home screen (main entry point for tabs)

│   └───LibraryScreen.tsx   # Screen to display saved pets
├───assets/                 # Static assets like images and fonts
├───node_modules/
├───src/
│   ├───constants/
│   │   └───names.ts        # Data for pet names
│   ├───screens/

│   │   ├───HomeScreen.tsx
│   │   └───LibraryScreen.tsx
│   └───services/
│       └───PetProvider.tsx # Context API for managing pet data
├───App.tsx                 # (No longer used, replaced by app/index.tsx and app/_layout.tsx)
├───app.json
├───eslint.config.js
├───package-lock.json
├───package.json
├───README.md               # This file
└───tsconfig.json
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is open-source and available under the [MIT License](LICENSE).