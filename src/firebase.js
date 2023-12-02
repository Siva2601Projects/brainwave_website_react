// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3TEGyKBVZNlNiY6rQDvnx_GpJ9wx91Z0",
  authDomain: "brainwaveprojects-2601.firebaseapp.com",
  databaseURL: "https://brainwaveprojects-2601-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "brainwaveprojects-2601",
  storageBucket: "brainwaveprojects-2601.appspot.com",
  messagingSenderId: "1079642274894",
  appId: "1:1079642274894:web:770bc6c2fd1d3c21c1171f",
  measurementId: "G-V8FGV4RDND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;