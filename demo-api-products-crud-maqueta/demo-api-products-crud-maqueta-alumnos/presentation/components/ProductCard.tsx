import { Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../../domain/entities/Product';

interface ProductCardProps {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
}

export function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  return (
    <View className="mb-3 rounded-2xl bg-white p-4">
      <Text className="text-xs font-bold uppercase text-indigo-500">ID {product._id}</Text>
      <Text className="mt-1 text-xl font-extrabold text-slate-900">{product.name}</Text>
      <Text className="mt-1 text-slate-500">S/ {product.price.toFixed(2)}</Text>
      <View className="mt-4 flex-row">
        <TouchableOpacity className="mr-2 rounded-lg bg-amber-100 px-4 py-3" onPress={onEdit}>
          <Text className="font-bold text-amber-800">Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-lg bg-rose-100 px-4 py-3" onPress={onDelete}>
          <Text className="font-bold text-rose-700">Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
