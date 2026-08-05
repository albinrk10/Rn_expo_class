import { Alert, Pressable, Text, View } from "react-native";

import { useAuth } from "../context/AuthContext";
import { logoutUser } from "infrastructure/services/authService";

export function HomeScreen() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      console.log("[UI HOME] Botón Cerrar sesión presionado.");
      // TODO 10:
      // Llamar al servicio logoutUser().
      await logoutUser();

      console.log("[UI HOME] Logout correcto. AuthContext volverá al Login.");
    } catch (error) {
      console.log("[UI HOME] Error al cerrar sesión:", error);
      Alert.alert("Error", "No se pudo cerrar sesión.");
    }
  };

  return (
    <View className="flex-1 bg-slate-50 px-6 pt-20">
      <Text className="font-extrabold tracking-[3px] text-indigo-600">
        PANTALLA PROTEGIDA
      </Text>
      <Text className="mt-2 text-5xl font-black text-slate-900">
        Bienvenido
      </Text>
      <Text className="mt-4 text-lg leading-7 text-slate-500">
        Esta pantalla solo se muestra cuando Firebase detecta un usuario autenticado.
      </Text>

      <View className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6">
        <Text className="text-lg text-slate-500">Usuario actual</Text>
        <Text className="mt-2 text-xl font-black text-slate-900">
          {user?.displayName || user?.email}
        </Text>

        <Text className="mt-5 text-lg text-slate-500">Correo</Text>
        <Text className="mt-2 text-base font-bold text-slate-800">{user?.email}</Text>

        <Text className="mt-5 text-lg text-slate-500">
          UID generado por Firebase
        </Text>
        <Text className="mt-2 text-base text-slate-700">{user?.uid}</Text>
      </View>

      <Pressable onPress={handleLogout} className="mt-8 rounded-2xl bg-rose-500 py-4">
        <Text className="text-center text-base font-black text-white">
          Cerrar sesión
        </Text>
      </Pressable>
    </View>
  );
}
