import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbx159o40uVBiiu1uUzc3TOPsuITi7Y44",
  authDomain: "fir-auth-semana-12.firebaseapp.com",
  projectId: "fir-auth-semana-12",
  storageBucket: "fir-auth-semana-12.firebasestorage.app",
  messagingSenderId: "813866094436",
  appId: "1:813866094436:web:591c94231c88cad1003471"
};

export const isFirebaseConfigured = firebaseConfig.apiKey !== "TU_API_KEY_AQUI";
console.log("[FIREBASE CONFIG] Proyecto:", firebaseConfig.appId);
console.log("[FIREBASE CONFIG] Firebase configurado:", isFirebaseConfigured);

console.log("[FIREBASE CONFIG] Inicializando Firebase...");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize get
export const auth = getAuth(app);