
import { Text, StyleSheet, View,SafeAreaView } from 'react-native';
import { useState } from 'react';

import { UserCard } from '@/components/UserCard';
import { Usuario } from '@/types/Usuario';

export default function HomeScreen() {

  const [docente] = useState<Usuario>({
      id:2,
      nombre: 'Albin Hinostroza', 
      edad: 29,
      rol: 'Docente',
      activo: true
     });

  return (
     <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>App Movil</Text>
      </View>
      <View style={styles.content}>
       <UserCard user={docente}/>
      </View>

     </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {

    flex: 1, 
    backgroundColor: '#eef2f7',
  },
  header: {
   
    paddingTop: 44,
    
    paddingBottom: 4,
   
    alignItems: 'center',
  },
  headerTitle: {
   
    fontSize: 26,
    
    fontWeight: '800',
    
    color: '#5b21b6',
  },
  content: {
    
    flex: 1,
   
    justifyContent: 'center',
    
    marginTop: -24,
    
    padding: 20,
  },
});