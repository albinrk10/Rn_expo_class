import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Book } from '../../domain/models/Book';
import { booksRepository } from '../../infrastructure/api/booksApi';
import { AppButton } from '../components/AppButton';
import { BookCard } from '../components/BookCard';
import { StateMessage } from '../components/StateMessage';
import { useAuth } from '../hooks/useAuth';

function shortToken(token: string) {
  return `${token.slice(0, 16)}...${token.slice(-8)}`;
}

export function BooksScreen() {
  const { session, isAuthenticated, loading, error, refreshSession, logout } = useAuth();
  const [books, setBooks] = useState<Book[]>([]);
  const [booksLoading, setBooksLoading] = useState(false);
  const [booksError, setBooksError] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/');
    }
  }, [isAuthenticated]);

  const cargarLibros = async () => {
    try {
      setBooksLoading(true);
      setBooksError(null);

      // DOCENTE:
      // No enviamos manualmente el token aquí.
      // El interceptor de booksApi agrega Authorization automáticamente.
      const data = await booksRepository.listar();
      setBooks(data);
    } catch (e) {
      console.log('[BOOKS ERROR] cargarLibros', e);
      setBooksError('No se pudo cargar el listado de libros.');
    } finally {
      setBooksLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  if (!session) return null;

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 pt-4">
        <Text className="text-xs font-extrabold tracking-widest text-indigo-600">
          ENDPOINT PROTEGIDO
        </Text>
        <Text className="mt-1 text-3xl font-black text-slate-900">Listado de libros</Text>
        <Text className="mt-1 text-slate-500">
          El endpoint /books usa Authorization: Bearer accessToken.
        </Text>

        <View className="mt-5 rounded-3xl border border-indigo-100 bg-indigo-50 p-5">
          <Text className="font-extrabold text-indigo-700">Access token opaco</Text>
          <Text className="mt-2 rounded-2xl bg-white p-3 font-mono text-xs text-slate-700">
            {shortToken(session.accessToken)}
          </Text>
          <Text className="mt-3 font-extrabold text-indigo-700">Refresh token</Text>
          <Text className="mt-2 rounded-2xl bg-white p-3 font-mono text-xs text-slate-700">
            {shortToken(session.refreshToken)}
          </Text>
        </View>

        {(error || booksError) && (
          <View className="mt-4">
            <StateMessage message={error ?? booksError ?? ''} type="error" />
          </View>
        )}

        <View className="mt-4 gap-3">
          <View className="flex-row gap-3">
            <View className="flex-1">
              <AppButton
                disabled={booksLoading}
                onPress={cargarLibros}
                title={booksLoading ? 'Cargando...' : 'Cargar libros'}
              />
            </View>

            <View className="flex-1">
              <AppButton
                disabled={loading}
                onPress={refreshSession}
                title={loading ? 'Renovando...' : 'Refresh token'}
                variant="secondary"
              />
            </View>
          </View>

          <AppButton onPress={handleLogout} title="Cerrar sesión" variant="danger" />
        </View>

        <Text className="mb-3 mt-5 text-lg font-black text-slate-900">Libros</Text>

        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => <BookCard book={item} />}
          ListEmptyComponent={
            <Text className="mt-8 text-center text-slate-500">
              Presiona "Cargar libros" para consumir el endpoint protegido.
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}
