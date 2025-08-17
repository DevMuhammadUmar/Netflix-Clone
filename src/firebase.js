import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAS9MEMwSjJI96TtM0uZPznmBDR5cktiA0",
  authDomain: "netflix-clone-d81d9.firebaseapp.com",
  projectId: "netflix-clone-d81d9",
  storageBucket: "netflix-clone-d81d9.firebasestorage.app",
  messagingSenderId: "213409759918",
  appId: "1:213409759918:web:78ac81f57668ed072aa33f",
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    toast.success("Sign up successfull");    

    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      authProvider: "local",
      name,
      email,
    });
  } catch (error) {
    console.log("Error signing up:", error);
    alert(error);
  }
};

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged in successfully");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth);
  toast("Logged out");
};

export { auth, db, signUp, signIn, logout };
