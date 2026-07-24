import { Text, View } from 'react-native';

import { Book } from '../../domain/models/Book';

type Props = {
  book: Book;
};

export function BookCard({ book }: Props) {
  return (
    <View className="mb-3 rounded-3xl border border-slate-200 bg-white p-4">
      <Text className="text-lg font-black text-slate-900">{book.title}</Text>

      {book.author && <Text className="mt-1 text-slate-500">Autor: {book.author}</Text>}

      {book.isbn && (
        <Text className="mt-2 self-start rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
          ISBN: {book.isbn}
        </Text>
      )}

      {book.description && <Text className="mt-2 text-slate-500">{book.description}</Text>}
    </View>
  );
}
