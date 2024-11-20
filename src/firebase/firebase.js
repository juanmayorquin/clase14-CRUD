// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3DQeVIYI9tEtAxoVoNb7Yy6QovhkPRDY",
  authDomain: "prueba-e67a7.firebaseapp.com",
  projectId: "prueba-e67a7",
  storageBucket: "prueba-e67a7.firebasestorage.app",
  messagingSenderId: "903235070895",
  appId: "1:903235070895:web:949bbad924846e29ecdd5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
