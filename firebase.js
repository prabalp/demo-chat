import firebase from "firebase";

const firebaseConfig = {
  // use keys here
  //   --ssetup firebase auth and database

  apiKey: "AIzaSyAiobxhD_neisTZ3vMyW6CtzYOt71WzgQw",
  authDomain: "fir-chat-1d223.firebaseapp.com",
  projectId: "fir-chat-1d223",
  storageBucket: "fir-chat-1d223.appspot.com",
  messagingSenderId: "583316261687",
  appId: "1:583316261687:web:fc8d172989014887a6a8b2",
  measurementId: "G-VBC54YK1CZ",
};

let app;

if (firebase.apps.length === 0) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
