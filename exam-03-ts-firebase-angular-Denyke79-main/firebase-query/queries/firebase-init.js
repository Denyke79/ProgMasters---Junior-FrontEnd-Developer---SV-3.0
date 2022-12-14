import {initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBqsyAq9iRdWSmx0RXRtXnXJM09BWPwAZI",
    authDomain: "fir-app-demo-fdani.firebaseapp.com",
    projectId: "fir-app-demo-fdani",
    storageBucket: "fir-app-demo-fdani.appspot.com",
    messagingSenderId: "3909591928",
    appId: "1:3909591928:web:2cdcc6712577db8534de8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore();

console.log('Firebase initialized');
