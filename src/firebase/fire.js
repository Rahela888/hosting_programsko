// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCasoCqH2C551DhQ4eReGehnh0NZ4qpm6c",
  authDomain: "plannervalley.firebaseapp.com",
  projectId: "plannervalley",
  storageBucket: "plannervalley.firebasestorage.app",
  messagingSenderId: "331355299160",
  appId: "1:331355299160:web:a4ac9958be09a61a68592d",
  measurementId: "G-DDQE32Y4QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export{auth};