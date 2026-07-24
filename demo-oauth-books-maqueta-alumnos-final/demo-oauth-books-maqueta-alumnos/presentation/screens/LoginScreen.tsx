import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '../components/AppButton';
import { AppInput } from '../components/AppInput';
import { StateMessage } from '../components/StateMessage';
import { useAuth } from '../hooks/useAuth';

export function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading, error, isAuthenticated, clearError } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/home');
    }
  }, [isAuthenticated]);

  const handleLogin = async () => {
    clearError();
    await login(username.trim(), password.trim());
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1 justify-center px-5"
      >
        <Text className="text-xs font-extrabold tracking-widest text-indigo-600">
          SEMANA 7 · OAUTH2 TOKEN OPACO
        </Text>
        <Text className="mt-2 text-4xl font-black text-slate-900">Login OAuth2</Text>
        <Text className="mb-6 mt-2 text-base text-slate-500">
          La app pide access token y refresh token usando grant_type=password.
        </Text>

        <View className="rounded-3xl border border-slate-200 bg-white p-5">
          <AppInput
            autoCapitalize="none"
            label="Usuario"
            onChangeText={setUsername}
            placeholder="usuario"
            value={username}
          />

          <View className="mb-4">
            <Text className="mb-2 font-bold text-slate-700">Contraseña</Text>
            <View className="flex-row items-center rounded-2xl border border-slate-200 bg-white px-4">
              <TextInput
                className="flex-1 py-4 text-slate-900"
                onChangeText={setPassword}
                placeholder="contraseña"
                placeholderTextColor="#94a3b8"
                secureTextEntry={!showPassword}
                value={password}
              />

              <TouchableOpacity
                className="rounded-xl bg-indigo-50 px-3 py-2"
                onPress={() => setShowPassword((current) => !current)}
              >
                <Text className="text-xs font-extrabold text-indigo-700">
                  {showPassword ? 'Ocultar' : 'Ver'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {error && <StateMessage message={error} type="error" />}

          <View className="mt-4">
            <AppButton
              disabled={loading || !username || !password}
              onPress={handleLogin}
              title={loading ? 'Solicitando token...' : 'Iniciar sesión'}
            />
          </View>
        </View>

        <View className="mt-5 rounded-2xl bg-amber-50 p-4">
          <Text className="font-extrabold text-amber-700">Para explicar</Text>
          <Text className="mt-1 text-amber-700">
            El alumno escribe usuario y contraseña manualmente. Luego la app solicita el token.
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
