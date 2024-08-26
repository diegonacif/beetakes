// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// function getEnvVariable(key: string): string | undefined {
//   if (import.meta.env.DEV) {
//     // Ambiente de desenvolvimento (Vite)
//     return import.meta.env[key];
//   } else {
//     // Ambiente de produção (Vercel)
//     return process.env[key];
//   }
// }

// const apiKey = getEnvVariable('VITE_API_KEY') || getEnvVariable('API_KEY');
// const authDomain = getEnvVariable('VITE_AUTH_DOMAIN') || getEnvVariable('AUTH_DOMAIN');

const firebaseConfig = {
  // apiKey: apiKey,
  // authDomain: authDomain,
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "bee-takes-site",
  storageBucket: "bee-takes-site.appspot.com",
  messagingSenderId: "902907949524",
  appId: "1:902907949524:web:7ebb98bd4e1e33b5c92641",
  measurementId: "G-QV3EYJRSFR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);