import * as firebase from 'firebase/app'  
import 'firebase/storage';  
import 'firebase/database';
let firebaseApp = null

const config = {  
  apiKey: 'AIzaSyDe3TrbVz5LCTqGmC5qFvKkx6paQA1AtfU',
  authDomain: "embajada-58.firebaseapp.com",
  databaseURL: "https://embajada-58.firebaseio.com",
  projectId: "embajada-58",
  storageBucket: "embajada-58.appspot.com",
  messagingSenderId: "957571256310",
  appId: "1:957571256310:web:2268cbd9050cc0b3f5c1d7"
}

if(!firebase.apps.length) {  
 firebase.initializeApp(config)
}

const db = firebase.database()  
const storage = firebase.storage()

export { firebase, storage, db }  
