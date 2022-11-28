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
  apiKey: "AIzaSyBZ2Qpj56EQRQcBEb1naw2-kX1qE7zIoMA",
  authDomain: "henry-pf.firebaseapp.com",
  projectId: "henry-pf",
  storageBucket: "henry-pf.appspot.com",
  messagingSenderId: "196683096114",
  appId: "1:196683096114:web:68b2c373b4d52753f69c2b",
  measurementId: "G-DBSX6LRJ4H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)