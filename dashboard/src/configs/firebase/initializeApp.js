import { initializeApp } from 'firebase/app'

// This config must be secret
const firebaseConfig = {
    apiKey: 'AIzaSyBE0dcM3RyRcaBF4ZAMCWYeFAH8OmBGD2s',
    authDomain: 'social-network-test-5a774.firebaseapp.com',
    projectId: 'social-network-test-5a774',
    storageBucket: 'social-network-test-5a774.appspot.com',
    messagingSenderId: '1067362776847',
    appId: '1:1067362776847:web:06ee52e0d777721f3bb07a',
    measurementId: 'G-0NZQ70CW50',
}
// Initialize Firebase
const firebase = initializeApp(firebaseConfig)

export default firebase
