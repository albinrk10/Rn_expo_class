import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, isFirebaseConfigured } from "infrastructure/firebase/firebaseConfig";

export const  registerUser = async (
    email: string,
    password: string,
    displayName: string
) => {
    console.log("[AUTH SERVICE] Intntado de registro de usuario:", email);
    if(!isFirebaseConfigured) {
        console.log("[AUTH SERVICE] Firebase no está configurado");
        throw new Error("Firebase no está configurado");
    }

    const credential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("[AUTH SERVICE] Usuario crado UID:", credential.user.uid);
    
    //Guardar el usaurio en Firebase con el displayName
    await updateProfile(credential.user, { 
        displayName
     });
     console.log("[AUTH SERVICE] Usuario actualizado con displayName:", displayName);

     return credential;

}

export const loginUser = async (email: string, password: string) => {
    console.log("[AUTH LOGIN] Intentando iniciar sesión:", email);
    //si el proyecto no está configurado, lanzar un error
    if(!isFirebaseConfigured) {
        console.log("[AUTH LOGIN] Firebase no está configurado");
        throw new Error("Firebase no está configurado");
    }
//iniciar sesión con Firebase 
    const credential = await signInWithEmailAndPassword(auth, email, password);
    console.log("[AUTH LOGIN] Sesión iniciada con UID:", credential.user.uid);

    return credential;
}

export const logoutUser = async () => {
    console.log("[AUTH LOGOUT] Intentando cerrar sesión...");

  if(!isFirebaseConfigured) {
        console.log("[AUTH LOGIN] Firebase no está configurado");
        throw new Error("Firebase no está configurado");
    }
    await signOut(auth);
    console.log("[AUTH LOGOUT] Sesión cerrada correctamente.");
}
