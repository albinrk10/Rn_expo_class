// TODO 1 - Modelo equivalente al Product del tutorial Android con Retrofit.
// CrudCrud devuelve el identificador con el nombre "_id".
export interface Product {
  _id: string;
  name: string;
  price: number;
}

// DTO: datos que enviamos en POST y PUT.
export interface ProductDto {
  name: string;
  price: number;
}
