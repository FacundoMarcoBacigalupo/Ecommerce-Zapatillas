// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpgVdtPMQMBaG8GMyxZ4Qgx5VT2QOPQf4",
    authDomain: "proyecto-ecommerce-ec5f5.firebaseapp.com",
    projectId: "proyecto-ecommerce-ec5f5",
    storageBucket: "proyecto-ecommerce-ec5f5.appspot.com",
    messagingSenderId: "918448486053",
    appId: "1:918448486053:web:332a068235ce9b75113f4c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(App)