import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbx159o40uVBiiu1uUzc3TOPsuITi7Y44",
  authDomain: "fir-auth-semana-12.firebaseapp.com",
  projectId: "fir-auth-semana-12",
  storageBucket: "fir-auth-semana-12.firebasestorage.app",
  messagingSenderId: "813866094436",
  appId: "1:813866094436:web:591c94231c88cad1003471"
};

export const isFirebaseConfigured = firebaseConfig.apiKey !== "TU_API_KEY";

console.log("[FIREBASE CONFIG] Proyecto:", firebaseConfig.projectId);
console.log("[FIREBASE CONFIG] Auth + Firestore + Storage configurados:", isFirebaseConfigured);

const firebaseAppName = "pedidos-firebase-semana-11";
const  existingApp = getApps().find((app) => app.name === firebaseAppName);
const app = existingApp ?? initializeApp(firebaseConfig, firebaseAppName);
console.log("[FIREBASE CONFIG] Firebase App inicializada:", app.name);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);