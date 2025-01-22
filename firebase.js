// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_k885nZ4D87nOBm6GC4ytey3DML09Qgk",
  authDomain: "tinder-clone-106d8.firebaseapp.com",
  projectId: "tinder-clone-106d8",
  storageBucket: "tinder-clone-106d8.firebasestorage.app",
  messagingSenderId: "627533303375",
  appId: "1:627533303375:web:c97a0ff263541376e7243a",
  measurementId: "G-ZNBWJKFHPM",
};

let app, auth;

console.log(getApps.length, "getApps.length");

if (!getApps.length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
    console.log("inside this");
  } catch (error) {
    console.log("Error initializing app", error);
  }
} else {
  console.log("cameo");

  app = getApp();
  auth = getAuth(app);
}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth();
const provider = new EmailAuthProvider();

console.log("authauthauth",auth,"appappappapp",app);

export { app, auth, provider };
