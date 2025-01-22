import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loadingIsInitial, setLoadingIsInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoadingIsInitial(false);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  const memoedValue = useMemo(() => {
    return { user, setUser, loading, setLoading, logOut };
  }, [user, loading]);

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingIsInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
