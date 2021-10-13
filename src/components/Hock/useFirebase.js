import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

import initfirebaseauth from "../../FireBase/firebase.init";
initfirebaseauth();
const useFirebaseAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [user, setUser] = useState({});

  const handlerGoogleSingin = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      }
    });
  }, []);

  const handellogOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    handlerGoogleSingin,
    handellogOut,
  };
};

export default useFirebaseAuth;
