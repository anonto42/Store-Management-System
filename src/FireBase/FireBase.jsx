import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBKKlgd0v_IHKJI2RkP8VKHG4STGEHvGkM",
  authDomain: "innate-gizmo-412504.firebaseapp.com",
  projectId: "innate-gizmo-412504",
  storageBucket: "innate-gizmo-412504.appspot.com",
  messagingSenderId: "823198134064",
  appId: "1:823198134064:web:2e2cb7423ff8a3a5d822f5",
  measurementId: "G-SKWZEX812P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const FireDB = getFirestore(app) ;
const StorageDB = getStorage(app);
const auth = getAuth(app);
export  {StorageDB,FireDB,auth};