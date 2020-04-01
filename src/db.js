import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAacBlt51BDpaAC0qowBOih6EBO0NFH03I",
  authDomain: "to-do-list-cesi.firebaseapp.com",
  databaseURL: "https://to-do-list-cesi.firebaseio.com",
  projectId: "to-do-list-cesi",
  storageBucket: "to-do-list-cesi.appspot.com",
  messagingSenderId: "366857002602",
  appId: "1:366857002602:web:e2d573967ec745a85e3413",
  measurementId: "G-5BHN03VG1F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
