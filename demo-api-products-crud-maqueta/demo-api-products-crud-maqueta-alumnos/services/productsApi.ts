import axios from 'axios';
import { Product, ProductDto } from '../domain/entities/Product';

// TODO 2 - Coloca aquí tu endpoint actual de CrudCrud.
// Entra a https://crudcrud.com y copia tu URL.
const CRUDCRUD_BASE_URL = 'https://crudcrud.com/api/7cf1ef77109244f8820bcdd6790dc98b';

const api = axios.create({
  baseURL: CRUDCRUD_BASE_URL,
  timeout: 10000,
});

// TODO 3 - Logs globales de Axios.
// Esto permite ver cada golpe al endpoint en la consola.
api.interceptors.request.use((config) => {
   console.log('[primer paso]');
  const method = config.method?.toUpperCase();
  console.log(`[API REQUEST] ${method} ${config.baseURL}${config.url}`);
  if (config.data) 
    console.log('[Albin-test-product]', config.data);
  return config;
    
});

api.interceptors.response.use(
  (response) => {
    console.log(`[API RESPONSE] ${response.status} ${response.config.url}`);
    console.log('[API DATA]', response.data);
    return response;
  },
  (error) => {
    console.log('[API ERROR]', error.response?.status, error.message);
    return Promise.reject(error);
  },
);

function validarBaseUrl() {
  if (CRUDCRUD_BASE_URL.includes('REEMPLAZA_TU_TOKEN')) {
    throw new Error('Debes reemplazar CRUDCRUD_BASE_URL con tu endpoint actual de CrudCrud.');
  }
}

// TODO 4 - Equivalente a @GET("products") en axios.
export async function getProducts(): Promise<Product[]> {
  validarBaseUrl();
  const response = await api.get<Product[]>('/products');
  return response.data
}

// TODO 5 - Equivalente a @POST("products") en axios.
export async function insertProduct(product: ProductDto): Promise<Product> {
  validarBaseUrl();
  const response = await api.post<Product>('/products', product);
  return response.data;

}


// TODO 6 - Equivalente a @PUT("products/{id}") en axios.
export async function updateProduct(id: string, product : ProductDto): Promise<void>{
  validarBaseUrl();
  await api.put(`/products/${id}`,product);

}

// TODO 7 - Equivalente a @DELETE("products/{id}") en axios.
export async function deleteProduct(id: string): Promise<void>{
  validarBaseUrl();
  await api.delete(`/products/${id}`);
}


