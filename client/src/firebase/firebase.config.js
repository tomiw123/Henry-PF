import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
require ('dotenv').config();
const {
  FB_KEY, 
  FB_AUTH_DOMAIN, 
  FB_PRJECT_ID, 
  FB_STORAGE_BUCKET, 
  FB_MESSAGING_SENDER_ID,
  FB_APP_ID, 
  FB_MEASUREMENT_ID
} = process.env;


const firebaseConfig = {
  apiKey: "AIzaSyBccrAhGLG61Dby0iZJyXnG-wCLF_989-I",
  authDomain: "new-proyect-44e15.firebaseapp.com",
  projectId: "new-proyect-44e15",
  storageBucket: "new-proyect-44e15.appspot.com",
  messagingSenderId: "721852394299",
  appId: "1:721852394299:web:a09e9974365af86fb1251e",
  measurementId: "G-3JE8TYWMK6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)