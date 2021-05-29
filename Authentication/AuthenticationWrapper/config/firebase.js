import firebase from "firebase";

// replace with your firebase credentials
const firebaseConfig = {
  // apiKey: "AIzaSyBKJmcCR4D7AEAAWCgagju0aq7tLfiSTVY",
  // authDomain: "juntos-b7bea.firebaseapp.com",
  // projectId: "juntos-b7bea",
  // storageBucket: "juntos-b7bea.appspot.com",
  // messagingSenderId: "748965588535",
  // appId: "1:748965588535:web:1006185c0f05ca37a759b2",
  // measurementId: "G-Z2DYR5XMNW",
};
// Initialize Firebase
const App = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default App;
