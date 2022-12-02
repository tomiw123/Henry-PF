import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

/**
 * If the context is not passed, throw an error, otherwise return the context.
 */
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("no me pasaste el context, gato");
  } else {
    return context;
  }
};

export function AuthProvider({ children }) {
  const [error, setError] = useState("");

  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const [userName, serUserName] = useState("");

  

  useEffect(() => {
    const userSession = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setUser("");
      } else {
        setUser(currentUser.email);
        serUserName(currentUser.displayName);
      }
    });
    return () => userSession();
  }, []);

  const register = async (username, email, password, rol = "user") => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user.email;
      console.log(user);
      const docRef = doc(db, `users/${response.user.uid}`);
      setDoc(docRef, {
        username: username,
        email: email,
        rol: rol,
      });
      setError("");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  //admin
  // async function setRole (uid, admin) {
  //   const docRef = doc(db, `users/${uid}`);
  //   const data = await getDoc(
  //     docRef,
  //     {
  //       rol: admin,
  //     },
  //     { merge: true }
  //   );
  //   console.log(data);
  // }
  
  async function setAsing(uid, admin) {
    try {
      
      const docRef = doc(db, `users/${uid}`);
      console.log(uid, admin)
      await setDoc(
        docRef,
        {
          rol: admin,
        },
        { merge: true }
        
      );
      navigate("/HAdmin");
    } catch (error) {
      console.log(error, "este Id no pertenece a un usuario")
    }
    }
  
  async function getRole(uid) {
    const docRef = doc(db, `users/${uid}`);
    const data = await getDoc(docRef);
    const dataRole = data.data();
    localStorage.setItem("role", dataRole.rol || "user");
  }

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      getRole(response.user.uid);
      setError("");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  /**
   * The function googleAuth is an asynchronous function that creates a new GoogleAuthProvider object,
   * then uses the signInWithPopup method to sign in with the GoogleAuthProvider object, then logs the
   * user's email to the console, then navigates to the home page.
   */
  const googleAuth = async () => {
    const google = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, google);
    console.log(response.user.email);
    navigate("/");
  };

  const logout = async () => {
    localStorage.removeItem("role");
    const response = await signOut(auth);
    console.log(response);
    setUser("");
    navigate("/");
  };

  const resetPassword = async (email) => {
    try {
      const response = await sendPasswordResetEmail(auth, email);
      const user = response.user;
      console.log(user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <authContext.Provider
      value={{
        register,
        login,
        userName,
        error,
        user,
        googleAuth,
        logout,
        resetPassword,
        setAsing,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
