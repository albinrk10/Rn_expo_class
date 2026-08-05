import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { auth } from "../../infrastructure/firebase/firebaseConfig";

interface AuthContextValue {
  user: User | null;
  loadingSession: boolean;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loadingSession: true,
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [loadingSession, setLoadingSession] = useState(true);

  useEffect(() => {
    console.log("[AUTH SESSION] Escuchando cambios de sesión...");

    // TODO 5:
    // onAuthStateChanged escucha cuando el usuario inicia o cierra sesión.
    const unsubcribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        console.log("[AUTH SESSION] Usuario autenticado:", {
          email: firebaseUser.email,
          uid: firebaseUser.uid,
        });
      }else {
        console.log("[AUTH SESSION] Usuario no autenticado.");
      }
      setUser(firebaseUser);
      setLoadingSession(false);
    });
    return () => {
      console.log("[AUTH SESSION] Dejando de escuchar cambios de sesión.");
      unsubcribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loadingSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
