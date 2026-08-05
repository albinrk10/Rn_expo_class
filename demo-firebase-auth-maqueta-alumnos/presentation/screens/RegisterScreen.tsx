import { isFirebaseConfigured } from "infrastructure/firebase/firebaseConfig";
import { registerUser } from "infrastructure/services/authService";
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


interface Props {
  onBackToLogin: () => void;
}

export function RegisterScreen({ onBackToLogin }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    console.log("[UI REGISTER] Validando formulario...");

    if (name.trim().length < 3) {
      Alert.alert("Validación", "Ingrese un nombre válido.");
      return false;
    }

    if (!email.includes("@")) {
      Alert.alert("Validación", "Ingrese un correo válido.");
      return false;
    }

    if (password.length < 6) {
      Alert.alert("Validación", "La contraseña debe tener mínimo 6 caracteres.");
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert("Validación", "Las contraseñas no coinciden.");
      return false;
    }

    console.log("[UI REGISTER] Formulario válido.");
    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      console.log("[UI REGISTER] Botón Registrarme presionado.");

      // TODO 9:
      // Llamar al servicio registerUser(email, password, name).
      await registerUser(email, password, name);

      console.log("[UI REGISTER] Registro finalizado. AuthContext enviará al Home.");
      Alert.alert("Correcto", "Cuenta creada correctamente.");
    } catch (error) {
      console.log("[UI REGISTER] Error al registrar:", error);
      Alert.alert(
        "No se pudo registrar",
        isFirebaseConfigured
          ? "Revise si el correo ya existe o si Firebase Authentication está activo."
          : "Primero pegue las credenciales reales en firebaseConfig.ts."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 justify-center bg-slate-50 px-6"
    >
      <View className="mb-6">
        <Text className="font-extrabold tracking-[3px] text-indigo-600">
          SEMANA 11 · REGISTRO
        </Text>
        <Text className="mt-2 text-4xl font-black text-slate-900">
          Crear cuenta
        </Text>
        <Text className="mt-3 text-base leading-6 text-slate-500">
          Completa el formulario y observa los logs del flujo Firebase.
        </Text>
      </View>

      <View className="rounded-[28px] border border-slate-200 bg-white p-5">
        {!isFirebaseConfigured ? (
          <View className="mb-4 rounded-3xl border border-orange-300 bg-orange-50 p-4">
            <Text className="mb-1 text-lg font-black text-orange-700">
              Firebase pendiente
            </Text>
            <Text className="leading-6 text-orange-800">
              Pega tus credenciales para registrar usuarios reales.
            </Text>
          </View>
        ) : null}

        <Text className="mb-2 font-bold text-slate-700">Nombre</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Nombre del estudiante"
          className="mb-3 rounded-2xl border border-slate-200 px-4 py-3 text-slate-900"
        />

        <Text className="mb-2 font-bold text-slate-700">Correo</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="alumno@correo.com"
          className="mb-3 rounded-2xl border border-slate-200 px-4 py-3 text-slate-900"
        />

        <Text className="mb-2 font-bold text-slate-700">Contraseña</Text>
        <View className="mb-3 flex-row items-center rounded-2xl border border-slate-200 px-4">
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholder="Mínimo 6 caracteres"
            className="flex-1 py-3 text-slate-900"
          />
          <Pressable onPress={() => setShowPassword((value) => !value)}>
            <Text className="font-black text-indigo-600">
              {showPassword ? "Ocultar" : "Ver"}
            </Text>
          </Pressable>
        </View>

        <Text className="mb-2 font-bold text-slate-700">Confirmar contraseña</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPassword}
          placeholder="Repetir contraseña"
          className="mb-4 rounded-2xl border border-slate-200 px-4 py-3 text-slate-900"
        />

        <Pressable
          onPress={handleRegister}
          disabled={loading}
          className="mb-3 rounded-2xl bg-indigo-600 py-4"
        >
          <Text className="text-center text-base font-black text-white">
            {loading ? "Creando..." : "Registrarme"}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            console.log("[NAVIGATION] RegisterScreen -> LoginScreen");
            onBackToLogin();
          }}
          className="rounded-2xl border border-indigo-200 py-4"
        >
          <Text className="text-center text-base font-black text-indigo-700">
            Ya tengo cuenta
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
