// Firebase কনফিগারেশন
const firebaseConfig = {
  apiKey: "AIzaSyYOUR_API_KEY",
  authDomain: "realbook-library.firebaseapp.com",
  projectId: "realbook-library",
  storageBucket: "realbook-library.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "1:YOUR_APP_ID:web:YOUR_APP_ID"
};

// Firebase ইনিশিয়ালাইজ
firebase.initializeApp(firebaseConfig);

// Firebase সার্ভিসেস
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Google প্রোভাইডার
const googleProvider = new firebase.auth.GoogleAuthProvider();
