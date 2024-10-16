import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
