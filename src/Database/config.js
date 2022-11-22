import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4_bOb2KVtf0wl6wx0PiNoD-T0p2QvGIw",
  authDomain: "photostore-e88ff.firebaseapp.com",
  projectId: "photostore-e88ff",
  storageBucket: "photostore-e88ff.appspot.com",
  messagingSenderId: "352727984797",
  appId: "1:352727984797:web:597f86c2676b65bf378274",
  measurementId: "G-KZNJ8DSS1B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };