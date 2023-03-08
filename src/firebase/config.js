import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAyIlPWU7ouTxOCmGXv_4ec88vYtMP9ccU",
  authDomain: "mymoney-49045.firebaseapp.com",
  projectId: "mymoney-49045",
  storageBucket: "mymoney-49045.appspot.com",
  messagingSenderId: "822447549508",
  appId: "1:822447549508:web:d597b794ba1a4126b0e011",
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
