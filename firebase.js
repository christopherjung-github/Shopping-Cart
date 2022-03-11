import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6XNFU2bT-BMpvZQ_t_B1GDr7b58Z7sCg",
    authDomain: "shopping-cart-d300c.firebaseapp.com",
    projectId: "shopping-cart-d300c",
    storageBucket: "shopping-cart-d300c.appspot.com",
    messagingSenderId: "1071865264042",
    appId: "1:1071865264042:web:c2732f1c87df3ea34c5dd3",
    measurementId: "G-EK49Q712RQ"
};
initializeApp(firebaseConfig);  
const auth = firebase.auth();

