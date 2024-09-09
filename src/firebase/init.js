// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrFYMoK8s4nkXSTnUWQ4VambPRI2Rv1aE",
  authDomain: "week7-sixin-d3bd8.firebaseapp.com",
  projectId: "week7-sixin-d3bd8",
  storageBucket: "week7-sixin-d3bd8.appspot.com",
  messagingSenderId: "267162754564",
  appId: "1:267162754564:web:57718fb621a5c8e4771f51"
};
// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db