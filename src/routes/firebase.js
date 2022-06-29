import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARUh1BA_ALwVmNn5pmW1GMzLXSA7_2-Z0",
  authDomain: "ezzfit.firebaseapp.com",
  projectId: "ezzfit",
  storageBucket: "ezzfit.appspot.com",
  messagingSenderId: "512285290311",
  appId: "1:512285290311:web:432dece39c6ccf5a3aa662",
  measurementId: "G-1HWB2KBQS0"
};

const app = initializeApp(firebaseConfig);

export default app;