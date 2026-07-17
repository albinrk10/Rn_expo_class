import { Text, TextInput, TouchableOpacity, View } from 'react-native';

interface ProductFormProps {
  name: string;
  price: string;
  editing: boolean;
  onNameChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

export function ProductForm(props: ProductFormProps) {
  return (
    <View className="rounded-2xl bg-white p-4 shadow">
      <TextInput
        className="mb-3 rounded-xl border border-slate-300 px-4 py-3"
        placeholder="Nombre del producto"
        value={props.name}
        onChangeText={props.onNameChange}
      />
      <TextInput
        className="mb-3 rounded-xl border border-slate-300 px-4 py-3"
        placeholder="Precio"
        value={props.price}
        onChangeText={props.onPriceChange}
        keyboardType="numeric"
      />
      <TouchableOpacity className="items-center rounded-xl bg-indigo-600 p-4" onPress={props.onSave}>
        <Text className="font-extrabold text-white">
          {props.editing ? 'PUT: actualizar producto' : 'POST: crear producto'}
        </Text>
      </TouchableOpacity>
      {props.editing && (
        <TouchableOpacity className="items-center p-3" onPress={props.onCancel}>
          <Text className="font-bold text-slate-500">Cancelar edición</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
