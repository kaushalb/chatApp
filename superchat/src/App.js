import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBV266VTkNAp9kJ4L91xkfsBt1DKIlQdns",
    authDomain: "chatapp-922e8.firebaseapp.com",
    projectId: "chatapp-922e8",
    storageBucket: "chatapp-922e8.appspot.com",
    messagingSenderId: "1044340057890",
    appId: "1:1044340057890:web:91790e6e241fcf8460277b",
    measurementId: "G-N389J05EMK"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App(){
    const [user] = useAuthState(auth);

    return (
        <div className="App">
            <header className="App-header">

            </header>
        </div>
    )
}

