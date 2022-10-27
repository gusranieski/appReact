import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDfs7Ce74zLPp5SX3S1R824uZ0sAxCEILQ",
  authDomain: "appranieskibackend.firebaseapp.com",
  projectId: "appranieskibackend",
  storageBucket: "appranieskibackend.appspot.com",
  messagingSenderId: "83102202327",
  appId: "1:83102202327:web:5b5e6805fc6209975ef392"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)