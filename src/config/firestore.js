
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBR7WzA6B1URu75JDNcYZEPsWTo19auUPg",
    authDomain: "authentication-database-2b64a.firebaseapp.com",
    projectId: "authentication-database-2b64a",
    storageBucket: "authentication-database-2b64a.appspot.com",
    messagingSenderId: "776167082231",
    appId: "1:776167082231:web:6c98205bcf76fba1e8abf2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);


export default app


