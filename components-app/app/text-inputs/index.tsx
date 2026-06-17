import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';



const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? 'padding' :'padding'  }>

   
    <ScrollView>
      <ThemedView>
        <ThemedCard className="mb-5">
          <ThemedTextInput
            placeholder="Ingrese su nombre"
            autoCapitalize="words"
            autoCorrect={false}
            // keyboardType="numeric"
            onChangeText={(text) => setForm({ ...form, name: text })}
          />

          <ThemedTextInput
            placeholder="Ingrese su email"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => setForm({ ...form, email: text })}
          />

          <ThemedTextInput
            placeholder="Ingrese su teléfono"
            autoCorrect={false}
            keyboardType="phone-pad"
            onChangeText={(text) => setForm({ ...form, phone: text })}
          />
        </ThemedCard>



        <ThemedCard className="my-2">
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
        <ThemedCard className="my-2">
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
        <ThemedCard className="my-2">
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
        <ThemedCard className="my-2">
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
        <ThemedCard className="my-2">
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
        <ThemedCard className="my-2">
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
        <ThemedCard className="my-2">
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
        <ThemedCard
       // primera alternativa para el padding del teclado
        style={{ 
          marginBottom: isIOS ? 100 : 100, 
        }}
        >
          <ThemedTextInput
            placeholder="Ingrese su teléfono"
            autoCorrect={false}
            keyboardType="phone-pad"
            onChangeText={(text) => setForm({ ...form, phone: text })}
          />
        </ThemedCard>
      </ThemedView>
      {/* // Segunda alternativa para el padding del teclado
      {
        isIOS && <View style={{ marginBottom: 100 }} />
      } */}
    </ScrollView>
     </KeyboardAvoidingView>

  );
};
export default TextInputsScreen;
