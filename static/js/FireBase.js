/* eslint-disable */
(function(){
  const firebaseConfig = {
    apiKey: "AIzaSyAacBlt51BDpaAC0qowBOih6EBO0NFH03I",
    authDomain: "to-do-list-cesi.firebaseapp.com",
    databaseURL: "https://to-do-list-cesi.firebaseio.com",
    storageBucket: "to-do-list-cesi.appspot.com",
  };
  firebase.initializeApp(firebaseConfig);

  const email = document.getElementById('emailp');
  const password = document.getElementById('passwordp');
  const btnlogin = document.getElementById('btnLogin');

  btnLogin.addEventListener('click', e =>{
    const email = emailp.value;
    const password = passwordp.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });

  btnRegister.addEventListener('click', e => {
    const email = emailp.value;
    const password = passwordp.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
    } else {
      console.log('La connexion a échoué')
    }
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged()
}());
