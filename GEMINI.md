# MyPetLibrary: App Overview

`MyPetLibrary` is a user-friendly React Native application designed for pet lovers. It serves as both a **pet name generator** and a **digital library** to keep track of one's pets. Users can get name suggestions for their new companions and save profiles of their pets, complete with photos, names, and memos.

---

## ✨ Key Features

The application is built around three primary screens, each with a distinct purpose.

### 1. Home Screen: Get Pet Name Suggestions 🐱

- **Functionality:** This is the landing screen, designed to help users find the perfect name for their pet.
- **How to Use:**
  1.  Select the pet type: **Cat**, **Dog**, or **Other**.
  2.  Tap the `Suggest a Name` button.
  3.  A randomly selected name corresponding to the chosen type will appear in the central suggestion box.

---

### 2. Add Pet Screen: Save Your Pet's Profile 📝

- **Functionality:** This screen allows users to create and save a detailed profile for their pet in the library.
- **Input Fields:**
  - **Photo:** Tap `Add a Photo` to assign a random placeholder image to the pet.
  - **Pet's Name:** A required field to enter the pet's name.
  - **Animal Type:** Choose between Cat, Dog, or Other.
  - **Memo:** An optional field to jot down notes, like "Loves to chase squirrels."
- **How to Use:** After filling in the details, tapping the `Save Pet to Library` button adds the pet to your collection and automatically navigates you to the Library screen.

---

### 3. Library Screen: View Your Saved Pets 📚

- **Functionality:** This screen acts as a central repository, displaying all the pets a user has saved.
- **Main Features:**
  - **Pet Cards:** Each saved pet is displayed as a "card" showing its photo, name, type (via an emoji), and memo.
  - **Search:** A search bar at the top allows users to quickly find a pet by its name.
  - **Sort:** Users can organize the list by `Date` (newest first) or by `Name` (alphabetical order).
  - **Empty State:** If no pets have been saved or if a search returns no results, a helpful message like "No Pets Found" is displayed.

---

### 🏗️ App Architecture & Navigation

The app is designed with a simple and intuitive layout for a seamless user experience.

- **Header:** The top bar displays the title of the current screen (e.g., "MyPetLibrary," "My Library").
- **Content Area:** The main section of the screen where the primary content of each view is rendered.
- **Navigation Bar:** A bottom tab bar allows for easy navigation between screens:
  - **🏠 Home:** Navigates to the name suggestion screen.
  - **＋ (Add):** A prominent, stylized button that takes the user to the "Add Pet" screen.
  - **📚 Library:** Switches to the screen displaying the list of saved pets.

---

### 💻 Code Structure (A Technical Glance)

The codebase is well-organized and modular, following modern React Native best practices for maintainability and scalability.

- **`App.js`:** The root component that acts as the main controller. It manages the global state (e.g., current screen, pet data) and handles navigation logic.
- **Screen Components (`HomeScreen.js`, `LibraryScreen.js`, `AddPetScreen.js`):** Each screen is encapsulated in its own component file, containing its specific UI and logic.
- **`styles.js`:** A centralized stylesheet that defines all the app's styling, ensuring a consistent look and feel.
- **`constants.js`:** A file dedicated to static data used throughout the app, such as the lists of names and placeholder image URLs. This separation of concerns makes the code easier to read and manage.