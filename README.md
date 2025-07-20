This document explains the overall composition and architecture of the **MyPetLibrary** project to help you clearly understand its structure and operation.

---

## **1. Project Overview**

**MyPetLibrary** is a cross-platform mobile application based on React Native. Through this app, users can get name recommendations for their pets and save the pet's photo and related memos to create their own 'Pet Library'.

*   **Core Technologies:**
    *   **Frontend:** React Native
    *   **Backend (BaaS):** Google Firebase

This structure allows for the simultaneous development of iOS and Android apps with a single JavaScript codebase and maximizes development efficiency by leveraging the powerful backend services provided by Firebase instead of building a server infrastructure from scratch.

---

## **2. Project Structure (`/src` folder)**

All of the project's core logic is located within the `/src` folder, and each directory has a clearly defined role according to its function. This 'Separation of Concerns' principle improves code readability and makes maintenance easier.

*   **/screens:** Stores components corresponding to each page (screen) of the app. (e.g., `HomeScreen`, `LibraryScreen`)
*   **/components:** Manages small, reusable UI unit components such as buttons, cards, and input fields that are used across multiple screens.
*   **/navigation:** Defines and manages the navigation flow (routing) between screens within the app using the React Navigation library.
*   **/services:** Handles all communication logic with Firebase. Functions for fetching information from the database or uploading photos to storage are located here.
*   **/assets:** Stores static resources used in the app, such as logo images, icons, and custom fonts.
*   **/constants:** Defines constant values that are used consistently throughout the app (e.g., theme color codes, API URLs).

---

## **3. Data Flow and Backend Architecture**

The app's data moves organically between the user's device and the Firebase backend.

1.  **Name/Memo Data (Firestore):**
    *   A vast list of 'recommended names' used in the app is pre-stored in the **Firestore database**.
    *   The names and memo texts of pets that users save in their library are also systematically recorded in Firestore. Each pet's information is saved as a single 'Document'.

2.  **Photo Files (Firebase Storage):**
    *   Photo files taken by the user or selected from the gallery are uploaded directly to **Firebase Storage**. Storage is specifically designed for storing large files.

3.  **Integrated Data Flow:**
    *   **When saving:** When a user saves a photo and a memo, ① the photo file is uploaded to **Storage**, and ② a unique download URL for the uploaded file is generated. ③ This URL address is recorded in a document in the **Firestore** database along with the animal's name and memo text.
    *   **When viewing:** The library screen fetches the list of documents from Firestore. It displays the pet's information and image on the screen using the name, memo, and photo URL stored in each document.

---

## **4. Main Libraries and Roles**

*   **React Native:** As the core framework, it allows you to build native mobile apps (iOS, Android) using JavaScript and React concepts.
*   **React Navigation:** An essential library for managing screen transitions in the app. It controls the entire experience of a user moving to another page by pressing a button.
*   **React Native Firebase:** Acts as a bridge connecting the React Native app with Firebase services. Through this library, you can call all the functions of Firestore and Storage from the app.
*   **(TBD) Image Picker / Camera:** Community libraries like `react-native-image-picker` will be used to activate the user's camera or access the album.

As such, the **MyPetLibrary** project is designed based on a modern and efficient technology stack and a systematic structure. This solid foundation will help to flexibly cope with adding new features or expanding services in the future.