import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB2WxpK6DtiC2CXakv_JOWfiS-qD7bdQR4",
  authDomain: "chat-app-15042.firebaseapp.com",
  projectId: "chat-app-15042",
  storageBucket: "chat-app-15042.appspot.com",
  messagingSenderId: "462474971991",
  appId: "1:462474971991:web:eec54b53bdae5524864c12"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();