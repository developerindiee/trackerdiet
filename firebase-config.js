// ✅ firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZw9cvbg7DH0aowR4ddNhXXn-elRJkzs4",
  authDomain: "my-tracker-diet.firebaseapp.com",
  projectId: "my-tracker-diet",
  storageBucket: "my-tracker-diet.appspot.com", // ✅ HARUS .appspot.com
  messagingSenderId: "325141542901",
  appId: "1:325141542901:web:b94d6318e9caba333c12bc",
  measurementId: "G-Q304EFHYM6"
};

// ✅ Inisialisasi Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
