import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-clone-c0852.firebaseapp.com",
  projectId: "drive-clone-c0852",
  storageBucket: "drive-clone-c0852.firebasestorage.app",
  messagingSenderId: "1036212922620",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { db, storage };
