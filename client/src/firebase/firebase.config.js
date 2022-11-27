import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// const {
  // API_KEY,
  // AUTH_DOMAIN,
  // PROJECT_ID,
  // STORAGE_BUCKET,
  // MESSAGING_SENDER_ID,
  // APP_ID,
  // MEASUREMENT_ID
// } = process.env 

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