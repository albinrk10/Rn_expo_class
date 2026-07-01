import { Comida } from "@/domain/Comida";
import axios from 'axios';

const MENU_ENDPOINT =
    'https://platziblog-124e6-default-rtdb.firebaseio.com/Menu/.json'

    //fetch es una API nativa de ts
    export async function obtenerMenuConFetch(): Promise<Comida[]>{
       console.log('obteniendo menu con fetch', MENU_ENDPOINT)       
 

        const response = await  fetch(MENU_ENDPOINT)

        if(!response.ok){
            throw new Error(`Èrror Http con fetch: ${response.status}`)
        }
      
        const data: Comida[]  = await response.json();
        console.log('Menu obtenido:', data);

        return data;
      
    }
    //axios es una libreria de terceros
    export async function obtenerMenuConAxios():  Promise<Comida[]>{
        console.log('[AXIOS] GET', MENU_ENDPOINT)
        const  response = await axios.get<Comida[]>(MENU_ENDPOINT);
        console.log('[AXIOS] STATUS', response.status);
        console.log('[AXIOS] DATA', response.data);
        return response.data;
    }