import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
