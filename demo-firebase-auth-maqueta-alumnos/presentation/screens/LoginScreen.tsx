import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { RegisterScreen } from "./RegisterScreen";
import { loginUser } from "infrastructure/services/authService";
import { isFirebaseConfigured } from "infrastructure/firebase/firebaseConfig";

export function LoginScreen() {
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    console.log("[UI LOGIN] Validando formulario...");

    // TODO 6:
    // Validar que el correo tenga formato básico.
    if (!email.includes("@")) {
      console.log("[UI LOGIN] Correo inválido:", email);
      Alert.alert("Validación", "Ingrese un correo válido.");
      return false;
    }

    // TODO 7:
    // Firebase exige mínimo 6 caracteres para contraseña.
    if (password.length < 6) {
      console.log("[UI LOGIN] Contraseña menor a 6 caracteres.");
      Alert.alert("Validación", "La contraseña debe tener mínimo 6 caracteres.");
      return false;
    }

    console.log("[UI LOGIN] Formulario válido.");
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      console.log("[UI LOGIN] Botón Iniciar sesión presionado.");

      // TODO 8:
      // Llamar al servicio loginUser(email, password).
      await loginUser(email, password);
      console.log("[UI LOGIN] Firebase respondió correctamente.");
    } catch (error) {
      console.log("[UI LOGIN] Error al iniciar sesión:", error);
      Alert.alert(
        "Error",
        isFirebaseConfigured
          ? "No se pudo iniciar sesión. Revise sus datos."
          : "Primero pegue las credenciales reales en firebaseConfig.ts."
      );
    } finally {
      setLoading(false);
    }
  };

  if (showRegister) {
    console.log("[NAVIGATION] LoginScreen -> RegisterScreen");
    return <RegisterScreen onBackToLogin={() => setShowRegister(false)} />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 justify-center bg-slate-50 px-6"
    >
      <View className="mb-8">
        <Text className="font-extrabold tracking-[3px] text-indigo-600">
          SEMANA 11 · FIREBASE AUTH
        </Text>
        <Text className="mt-2 text-5xl font-black text-slate-900">
          Acceso seguro
        </Text>
        <Text className="mt-4 text-lg leading-7 text-slate-500">
          Maqueta para completar login, registro y pantalla protegida.
        </Text>
      </View>

      <View className="rounded-[28px] border border-slate-200 bg-white p-5">
        {!isFirebaseConfigured ? (
          <View className="mb-4 rounded-3xl border border-orange-300 bg-orange-50 p-4">
            <Text className="mb-1 text-lg font-black text-orange-700">
              Firebase pendiente
            </Text>
            <Text className="leading-6 text-orange-800">
              Primero pega las credenciales reales en firebaseConfig.ts.
            </Text>
          </View>
        ) : null}

        <Text className="mb-2 font-bold text-slate-700">Correo</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="alumno@correo.com"
          className="mb-4 rounded-2xl border border-slate-200 px-4 py-4 text-slate-900"
        />

        <Text className="mb-2 font-bold text-slate-700">Contraseña</Text>
        <View className="mb-5 flex-row items-center rounded-2xl border border-slate-200 px-4">
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholder="Mínimo 6 caracteres"
            className="flex-1 py-4 text-slate-900"
          />
          <Pressable onPress={() => setShowPassword((value) => !value)}>
            <Text className="font-black text-indigo-600">
              {showPassword ? "Ocultar" : "Ver"}
            </Text>
          </Pressable>
        </View>

        <Pressable
          onPress={handleLogin}
          disabled={loading}
          className="mb-3 rounded-2xl bg-indigo-600 py-4"
        >
          <Text className="text-center text-base font-black text-white">
            {loading ? "Procesando..." : "Iniciar sesión"}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            console.log("[UI LOGIN] Botón Crear cuenta presionado.");
            setShowRegister(true);
          }}
          className="rounded-2xl border border-indigo-200 py-4"
        >
          <Text className="text-center text-base font-black text-indigo-700">
            Crear cuenta
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
