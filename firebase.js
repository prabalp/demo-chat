import * as firebase from "firebase";

const firebaseConfig = {
  // use keys here
  //   --ssetup firebase auth and database
};

let app;

if (firebase.apps.length === 0) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
