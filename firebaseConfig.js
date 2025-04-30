import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDVotZMt23sjZT1sC5aAP33JNWJPn3BtTc",
  authDomain: "ninjagoals-73459.firebaseapp.com",
  projectId: "ninjagoals-73459",
  storageBucket: "ninjagoals-73459.firebasestorage.app",
  messagingSenderId: "174601846132",
  appId: "1:174601846132:web:069a276117ac8be41a0021"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)