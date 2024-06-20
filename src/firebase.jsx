    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth"; // Correct import

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyAsYS7j3BLsXSJlTFwvkAQxEuid2OSLafk",
    authDomain: "login-signup-page-7bcd6.firebaseapp.com",
    projectId: "login-signup-page-7bcd6",
    storageBucket: "login-signup-page-7bcd6.appspot.com",
    messagingSenderId: "811900907064",
    appId: "1:811900907064:web:7bc3a846f47cd4792c40cd"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app); // Correct usage

    export { auth };
