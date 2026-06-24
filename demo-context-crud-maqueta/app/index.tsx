import { Alert, FlatList, Text, View } from 'react-native';
import { ProductoForm } from '../presentation/components/ProductoForm';
import { ProductoItem } from '../presentation/components/ProductoItem';
import { useProductoForm } from '../presentation/hooks/useProductoForm';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useProductos } from '@/presentation/context/ProductosContext';



export default function InicioRoute() {

  const {productos, eliminar}=useProductos();
  const form = useProductoForm();

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 pt-6">
        <Text className="text-xs font-extrabold tracking-widest text-indigo-600">
          DEMOSTRACIÓN RÁPIDA
        </Text>
        <Text className="mt-1 text-3xl font-black text-slate-900">Maqueta Context API</Text>
        <Text className="mb-5 mt-1 text-slate-500">
          UI lista. Falta implementar Context API, useReducer y CRUD en memoria.
        </Text>

        <ProductoForm
          nombre={form.nombre}
          precio={form.precio}
          editando={form.editandoId !== null}
          onNombreChange={form.setNombre}
          onPrecioChange={form.setPrecio}
          onGuardar={form.guardar}
          onCancelar={form.limpiar}
        />

        <FlatList
          // TODO 5 - Luego reemplazar productosIniciales por:
          // const { productos } = useProductos();
          data={productos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 24, paddingTop: 16 }}
          renderItem={({ item }) => (
            <ProductoItem
              producto={item}
              onEditar={() => form.comenzarEdicion(item)}
              onEliminar={() =>
                Alert.alert('Eliminar', `¿Eliminar ${item.nombre}?`,[
                  {text:'Cancelar', style: 'cancel'},
                  {text:'Eliminar',style: 'destructive', onPress:() => eliminar(item.id)}
                ])
              }
            />
          )}
          ListEmptyComponent={<Text className="mt-8 text-center text-slate-500">No existen productos.</Text>}
        />
      </View>
    </SafeAreaView>
  );
}
