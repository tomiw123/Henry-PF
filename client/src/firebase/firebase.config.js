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
  apiKey: FB_KEY,
  authDomain: FB_AUTH_DOMAIN,
  projectId: FB_PRJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId: FB_APP_ID,
  measurementId: FB_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)