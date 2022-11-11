// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBZqouATZOwa9r04xJkHH_DAiZBIT_aE8",
  authDomain: "fir-dora.firebaseapp.com",
  projectId: "fir-dora",
  storageBucket: "fir-dora.appspot.com",
  messagingSenderId: "1035842874190",
  appId: "1:1035842874190:web:2dd1b36b4de424556d0c1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);