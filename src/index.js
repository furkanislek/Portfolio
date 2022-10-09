import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCBzc_IaSxDbNAH7Bpg__N_lMjrc3fPcv8",
  authDomain: "portfolio-3f3b7.firebaseapp.com",
  projectId: "portfolio-3f3b7",
  storageBucket: "portfolio-3f3b7.appspot.com",
  messagingSenderId: "732402806457",
  appId: "1:732402806457:web:7d08fed9f409aa40cc3568",
  measurementId: "G-C6K8QK1VGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
