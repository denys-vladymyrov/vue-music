import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAT2841q4MAIRWHWnKIjhqgVwF7omcFgZY',
  authDomain: 'music-ec95b.firebaseapp.com',
  projectId: 'music-ec95b',
  storageBucket: 'music-ec95b.appspot.com',
  messagingSenderId: '540188035788',
  appId: '1:540188035788:web:4ee77c6ebbb0620c935069'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log('Firebase persistence error: ' + error.code)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, songsCollection, commentsCollection, storage }
