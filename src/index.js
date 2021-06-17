import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp({
  apiKey: "AIzaSyBClNpGb4KkbSEEDh4S3a_rab58QCPYG_A",
  authDomain: "netflix-af94b.firebaseapp.com",
  databaseURL: "https://netflix-af94b-default-rtdb.firebaseio.com",
  projectId: "netflix-af94b",
  storageBucket: "netflix-af94b.appspot.com",
  messagingSenderId: "194158349790",
  appId: "1:194158349790:web:06cdbd0b1b51f0f6ae614f"
}
);

export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  {/* <React.StrictMode>
    <App />
 </React.StrictMode>, */}
 </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
