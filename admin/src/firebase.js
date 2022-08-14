import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "netflix-fc2b6.firebaseapp.com",
  projectId: "netflix-fc2b6",
  storageBucket: "netflix-fc2b6.appspot.com",
  messagingSenderId: "722198637501",
  appId: "1:722198637501:web:44d4fed292b7c8c635c0d4",
  measurementId: "G-VP4GM6X4FT"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
