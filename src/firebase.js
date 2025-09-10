import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCasoCqH2C551DhQ4eReGehnh0NZ4qpm6c",
  authDomain: "plannervalley.firebaseapp.com",
  projectId: "plannervalley",
  storageBucket: "plannervalley.firebasestorage.app",
  messagingSenderId: "331355299160",
  appId: "1:331355299160:web:a4ac9958be09a61a68592d",
  measurementId: "G-DDQE32Y4QH"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
