import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// @ts-ignore
import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIe1PisNfi4Qxigo-61JylC4z811BgtGg",
  authDomain: "tracker-9e960.firebaseapp.com",
  projectId: "tracker-9e960",
  storageBucket: "tracker-9e960.appspot.com",
  messagingSenderId: "587764834362",
  appId: "1:587764834362:web:fe7df57fae883844631503",
};

let firebaseInstance = null;
export const getFirebase = () => {
  if (firebaseInstance !== null) {
    return firebaseInstance;
  }

  firebaseInstance = initializeApp(firebaseConfig);
  return firebaseInstance;
};

getFirebase();

export const db = getFirestore(getFirebase());
export const auth = initializeAuth(getFirebase(), {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
