import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk-nYnlayi_UYDjjz2Lb-rxovvkt5nrxA",
  authDomain: "holatroop.firebaseapp.com",
  projectId: "holatroop",
  storageBucket: "holatroop.appspot.com",
  messagingSenderId: "257352000292",
  appId: "1:257352000292:web:649659ac24a3cd8adcc9b1",
};

app.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();

export { auth, db };
