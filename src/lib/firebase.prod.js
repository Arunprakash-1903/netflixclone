import Firebase from "firebase/app"
import  "firebase/auth"
import  "firebase/firestore"
import {seedDatabase} from "../seed"
const config={
    apiKey: "AIzaSyBxkbciMEmHl_OMU2B2iTMwPXga_HoWmaU",
    authDomain: "netflix-d0531.firebaseapp.com",
    projectId: "netflix-d0531",
    storageBucket: "netflix-d0531.appspot.com",
    messagingSenderId: "678637103169",
    appId: "1:678637103169:web:845d3f1a768c9c3670bec0"
}

 const firebase=Firebase.initializeApp(config)
seedDatabase(firebase)
export{firebase}