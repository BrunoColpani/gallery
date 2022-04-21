import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyBYDa8KKMpO6JHZfY7N908t2ql8kmtP19g",
    authDomain: "gallery-eba2f.firebaseapp.com",
    projectId: "gallery-eba2f",
    storageBucket: "gallery-eba2f.appspot.com",
    messagingSenderId: "194027742168",
    appId: "1:194027742168:web:c30bc970672909ebabc8ad"
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);