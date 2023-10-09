import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-it-de800.firebaseapp.com",
  projectId: "blog-it-de800",
  storageBucket: "blog-it-de800.appspot.com",
  messagingSenderId: "416349054690",
  appId: "1:416349054690:web:e479d5c8f4d64f5515a0bb",
};

export const app = initializeApp(firebaseConfig);
