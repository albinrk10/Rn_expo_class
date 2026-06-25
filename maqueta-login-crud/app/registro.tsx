import { Text, TouchableOpacity, ScrollView, View, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';
import { useRegisterForm } from '../presentation/hooks/useRegisterForm';
import { CustomTextInput } from '../presentation/components/shared/CustomTextInput';
import { PrimaryButton } from '../presentation/components/shared/PrimaryButton';
import { RegisterHeader } from '../presentation/components/register/RegisterHeader';

export default function RegistroRoute() {
  const {
    nombre, setNombre,
    email, setEmail,
    password, setPassword,
    confirmar, setConfirmar,
    errors, handleRegistro
  } = useRegisterForm();

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-slate-100"
    >
      <ScrollView contentContainerClassName="flex-grow pb-10">
        
       
        <View className="bg-indigo-600 h-64 w-full absolute top-0 rounded-b-[40px]" />

        <View className="flex-1 px-6 pt-20">
          
          {/* Tarjeta flotante (Card) */}
          <View className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-300 elevation-10">
            
            <RegisterHeader />

            <CustomTextInput
              label="Nombre Completo"
              placeholder="Ej. Juan Pérez"
              value={nombre}
              onChangeText={setNombre}
              autoCapitalize="words"
              error={errors.nombre}
            />

            <CustomTextInput
              label="Correo Electrónico"
              placeholder="correo@ejemplo.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              error={errors.email}
            />

            <CustomTextInput
              label="Crear Contraseña"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              isPassword={true}
              error={errors.password}
            />

            <CustomTextInput
              label="Confirmar Contraseña"
              placeholder="••••••••"
              value={confirmar}
              onChangeText={setConfirmar}
              isPassword={true}
              error={errors.confirmar}
            />

            <PrimaryButton title="Completar Registro" onPress={handleRegistro} />

            <TouchableOpacity className="mt-8 p-2" onPress={() => router.back()}>
              <Text className="text-center text-slate-500 text-base">
                ¿Ya estás registrado?{' '}
                <Text className="text-indigo-600 font-bold">Inicia Sesión</Text>
              </Text>
            </TouchableOpacity>
            
          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
