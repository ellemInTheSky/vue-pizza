import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4ULd3d5AgtQbqUJJ-K2R0GYQv2otwgj0",
  authDomain: "ellem-29d05.firebaseapp.com",
  projectId: "ellem-29d05",
  storageBucket: "ellem-29d05.appspot.com",
  messagingSenderId: "1056119675731",
  appId: "1:1056119675731:web:be0afae0744f0aa6c51fa6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
