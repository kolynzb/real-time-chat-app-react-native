import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ02Liit4aRH8-RYjd6iMhluGPKM_FxX0",
  authDomain: "real-time-chat-app-3f98f.firebaseapp.com",
  projectId: "real-time-chat-app-3f98f",
  storageBucket: "real-time-chat-app-3f98f.appspot.com",
  messagingSenderId: "472358948442",
  appId: "1:472358948442:web:742df089e0bd06d99a1263",
  measurementId: "G-WSG8VSRNZL",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
