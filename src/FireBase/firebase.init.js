import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initfirebaseauth = () => {
  initializeApp(firebaseConfig);
};

export default initfirebaseauth;
