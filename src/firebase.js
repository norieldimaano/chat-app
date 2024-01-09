import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyALZQTczJ8AfBy_EOHKnk5332sW8lZG71Q",
  authDomain: "chat-481fb.firebaseapp.com",
  databaseURL: "https://chat-481fb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-481fb",
  storageBucket: "chat-481fb.appspot.com",
  messagingSenderId: "667923233481",
  appId: "1:667923233481:web:6fe1dc58c6228b558d2b18"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();