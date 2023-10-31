import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import * as firebase from 'firebase/app'
//import * as firebaseAuth from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCBSl2BdAd_DghcW5a5-qp8gFcK0nfuGCY",
  authDomain: "controle-de-gastos-3e7f9.firebaseapp.com",
  projectId: "controle-de-gastos-3e7f9",
  storageBucket: "controle-de-gastos-3e7f9.appspot.com",
  messagingSenderId: "1018055774945",
  appId: "1:1018055774945:web:bb0b24d7c0a4992e16dda0"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebaseAuth.initializeAuth(app);
firebaseAuth.signInWithEmailAndPassword(
  auth, 'email@email.com', '12345678'
)
.then(user => console.log(user))
.catch(error => console.log('error', error));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
