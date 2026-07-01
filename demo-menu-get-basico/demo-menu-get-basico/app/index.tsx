
import { Comida } from '@/domain/Comida';
import { obtenerMenuConAxios, obtenerMenuConFetch } from '@/infrastructure/service/menuApi';
import { ComidaCard } from '@/presentation/components/ComidaCard';
import { ErrorView, LoadingView } from '@/presentation/components/StateViews';
import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TipoConsumo = 'fetch' | 'axios' | null;

export default function InicioRoute() {
  const [comidas, setComidas] = useState<Comida[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [tipoConsumo, setTipoConsumo] = useState<TipoConsumo>(null);


  const cargarConFetch = async () => {
    try {
      setLoading(true);
      setError(null);
      setTipoConsumo('fetch');

    const data =  await  obtenerMenuConFetch();
    setComidas(data);

    }catch (e) {
      console.log('[Error Fetch]', e);
     setError('No se pudo cargar el menu')
    } finally {
      setLoading(false);
    }

  }

  const cargarConAxios = async () => {
    try {
      setLoading(true);
      setError(null);
      setTipoConsumo('axios');
    const data =  await  obtenerMenuConAxios();
    setComidas(data);

    }catch (e) {
      console.log('[Error Axios]', e);
     setError('No se pudo cargar el menu con Axios')
    } finally {
      setLoading(false);
    }

  }


  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 pt-4">
        <Text className="text-xs font-extrabold tracking-widest text-indigo-600">
          SEMANA 6 · GET BÁSICO
        </Text>
        <Text className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
          Consumo de API
        </Text>
        <Text className="mt-1 text-slate-500">
          Diferencias entref fetch y axios 
        </Text>
        <View className="my-4 flex-row gap-3">

          <TouchableOpacity className="flex-1 rounded-xl bg-slate-900 p-4" 
         onPress={() => {
           cargarConFetch();
         }}>
          <Text className="text-white font-bold text-center">
            Get con fetch
          </Text>
         </TouchableOpacity>

         <TouchableOpacity className="flex-1 rounded-xl bg-slate-900 p-4" 
         onPress={() => {
           cargarConAxios();
         }}>
          <Text className="text-white font-bold text-center">
            Get con axios
          </Text>
         </TouchableOpacity>


        </View>
        {tipoConsumo && !loading && !error &&(
          <Text 
          className="mb-3 rounded-xl bg-indigo-50 p-3 text-center  font-bold text-indigo-700">
            Datos cargando con {tipoConsumo == 'fetch' ? 'fetch' : 'axios'}
            </Text>
        ) }

        {loading && <LoadingView />}

        {error &&  !loading &&(
          <ErrorView
          mensaje={error}
          onReintentar={tipoConsumo === 'axios' ? cargarConAxios : cargarConFetch}
          />
        )}

        {!loading && !error && (
          <FlatList
           data={comidas}
           keyExtractor={(item) => item.nombre}
           contentContainerStyle={{ paddingBottom: 24, paddingTop: 8 }}
           renderItem={({item})=> <ComidaCard comida={item}></ComidaCard>}
           ListEmptyComponent={
            <Text className='mt-8 text-center text-slate-500'>
               Presiona para conseguir el menu con el endpoint
            </Text>
           }

          ></FlatList>
        )
      }


      </View>
    </SafeAreaView>
  );
}
