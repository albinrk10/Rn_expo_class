import '../global.css';

import { Stack } from 'expo-router';

import { AuthProvider } from '../presentation/context/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
