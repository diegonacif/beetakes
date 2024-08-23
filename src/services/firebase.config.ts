// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCm0r1wGkAksbseU_s8K5dOh20yehPdybA",
  authDomain: "bee-takes-site.firebaseapp.com",
  projectId: "bee-takes-site",
  storageBucket: "bee-takes-site.appspot.com",
  messagingSenderId: "902907949524",
  appId: "1:902907949524:web:7ebb98bd4e1e33b5c92641",
  measurementId: "G-QV3EYJRSFR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);