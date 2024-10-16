import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUZ5tmyrAvJOHzcMWTAOGhrZWAAZgIY8A",
  authDomain: "mealstogo-fc13b.firebaseapp.com",
  projectId: "mealstogo-fc13b",
  storageBucket: "mealstogo-fc13b.appspot.com",
  messagingSenderId: "135576117567",
  appId: "1:135576117567:web:f67429d14f0513d34eb38a",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
