import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, query } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {

   apiKey: "AIzaSyDqaxBh-GOAHx-k0ZmRiVrTL-p8WzLiCe0",

   authDomain: "fir-test-d0d38.firebaseapp.com",

   projectId: "fir-test-d0d38",

   storageBucket: "fir-test-d0d38.appspot.com",

   messagingSenderId: "681065950568",

   appId: "1:681065950568:web:42e930a8b4e400d05f7add"

};

const app = initializeApp(firebaseConfig);   
const db = getFirestore(app);

const q = query(collection(db, 'cafes'));

const querySnapshot = await getDocs(q);   

querySnapshot.forEach((doc) => {
   console.log(doc.id, '=>', doc.data()['name']);
})

console.log("Hello, world!");