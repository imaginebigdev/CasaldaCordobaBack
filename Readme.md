# Template Relational Back-end

Plantilla de ecommerce con base de datos relacional.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- Node.js (versión X.X.X)
- PostgreSQL (versión X.X.X)

## Configuración del Proyecto

1. Clona el repositorio:
   `git clone https://github.com/tu_usuario/tu_repositorio.git`

2. Navega al directorio del proyecto: `cd relational_backend`

3. Instala las dependencias: `npm install`

4. Crea los archivos de configuración de entorno:

Crea el archivos `.env` en la raíz del proyecto. Este archivo contendrá las variables de entorno para cada entorno (desarrollo, pruebas y producción). Ejemplo:

```
PORT = puerto_de_servidor
NODE_ENV=development
DB_USERNAME=tu_usuario_dev
DB_PASSWORD=tu_contraseña_dev
DB_NAME=nombre_de_la_db_dev
```

5. Crea la base de datos:

Asegúrate de que PostgreSQL esté en funcionamiento y crea las bases de datos correspondientes (desarrollo, pruebas y producción) utilizando los nombres definidos en los archivos `.env`.

6. Migraciones de la base de datos:

Ejecuta las migraciones para crear las tablas en la base de datos:

`npm run dev`

El servidor estará disponible en http://localhost:4001.

## Uso del Proyecto

Para usar el proyecto hay 3 rutas distintas, todas con su respectivo CRUD

## Products

- http://localhost:4001/products `GET` (Trae todos los productos, en caso de no haber nada en la DB trae un array vacio)

```
[
  {
    "id": 1,
    "name": "ProductoTest",
    "description": "test",
    "image": "test",
    "price": 3000,
    "stock": 4,
    "createdAt": "2023-07-25T12:07:33.951Z",
    "updatedAt": "2023-07-25T12:07:33.951Z",
    "categoryId": 1
  },
  {
    "id": 2,
    "name": "ProductoTest",
    "description": "test 2",
    "image": "test",
    "price": 3000,
    "stock": 4,
    "createdAt": "2023-07-25T12:07:37.840Z",
    "updatedAt": "2023-07-25T12:07:37.840Z",
    "categoryId": 2
  }
]
```

- http://localhost:4001/products/:id `GET` (Trae el producto que se especifica, en caso de no haber nada en la DB trae un array vacio)

```
{
  "id": 1,
  "name": "ProductoTest",
  "description": "test",
  "image": "test",
  "price": 3000,
  "stock": 4,
  "createdAt": "2023-07-25T12:07:33.951Z",
  "updatedAt": "2023-07-25T12:07:33.951Z",
  "categoryId": 1
}
```

- http://localhost:4001/products/ `POST` Se envia por body un objeto como el ejemplo de abajo, las propiedades marcadas con " \* " son de caracter obligatorio

```
{
   *  "name": "ProductoTest",
      "description" : "test",
      "image": "test",
   *  "price": 3000,
      "stock": 4,
   *  "categoryId": 2
}
```

- http://localhost:4001/products/:id `PUT` Todos los datos especificados en el ejemplo de abajo pueden cambiarse, tambien la ruta reconoce si se tiene que cambiar un solo dato o todos.

```
{
    "name": "nombre_modificado"
    "price": 3000
    "description": "descripcion_modificada"
    "image": "imagen_modificada"
    "stock": 3
}
```

- http://localhost:4001/products/:id `DELETE` La ruta delete responde con un texto en caso de que haya encontrado el producto y se haya borrado, sino arroja error.

#### Caso exitoso

```
Producto borrado existosamente
```

#### Caso error

```
{
    "error": "Error al borrar el producto"
}
```

## Categories

- http://localhost:4001/categories `GET` (Trae todas las categorias en caso de no haber nada en la DB trae un array vacio)

```
[
  {
    "id": 1,
    "name": "test",
    "createdAt": "2023-07-25T12:07:19.338Z",
    "updatedAt": "2023-07-25T12:07:19.338Z"
  },
  {
    "id": 2,
    "name": "test2",
    "createdAt": "2023-07-25T12:07:22.510Z",
    "updatedAt": "2023-07-25T12:07:22.510Z"
  }
]
```

- http://localhost:4001/categories/:id `GET` (Trae la categoria que se especifica, en caso de no haber nada en la DB trae un array vacio)

```
{
  "id": 1,
  "name": "test",
  "createdAt": "2023-07-25T12:07:19.338Z",
  "updatedAt": "2023-07-25T12:07:19.338Z"
}
```

- http://localhost:4001/categories/ `POST` Se envia por body un objeto como el ejemplo de abajo, las propiedades marcadas con " \* " son de caracter obligatorio

```
{
   *  "name": "nombre_categoria",
}
```

- http://localhost:4001/categories/:id `DELETE` La ruta delete responde con un texto en caso de que haya encontrado la categoria y se haya borrado, sino arroja error.

#### Caso exitoso

```
Categoria borrada existosamente
```

#### Caso error

```
{
    "error": "Error al borrar la categoria"
}
```

## Orders

- http://localhost:4001/orders `GET` (Trae todas las ordenes, en caso de no haber nada en la DB trae un array vacio)

```
[
  {
    "id": 1,
    "paymentId": "12312jn321-1232",
    "products": [
      {
        "id": 1,
        "name": "ProductoTest",
      }
    ],
    "clientName": "Pepe",
    "address": "direccion",
    "province": "provincia",
    "email": "pepe@mail.com",
    "phone": "1234411",
    "succesfull": true,
    "pending": false,
    "createdAt": "2023-07-25T12:11:29.816Z",
    "updatedAt": "2023-07-25T12:13:15.705Z"
  }
]
```

- http://localhost:4001/orders/:id `GET` (Trae el producto que se especifica, en caso de no haber nada en la DB trae un array vacio)

```
{
  "id": 1,
  "paymentId": "12312jn321-1232",
  "products": [
    {
      "id": 1,
      "name": "ProductoTest",
    }
  ],
  "clientName": "Pepe",
  "address": "direccion",
  "province": "provincia",
  "email": "pepe@mail.com",
  "phone": "1234411",
  "succesfull": true,
  "pending": false,
  "createdAt": "2023-07-25T12:11:29.816Z",
  "updatedAt": "2023-07-25T12:13:15.705Z"
}
```

- http://localhost:4001/orders/ `POST` Se envia por body un objeto como el ejemplo de abajo, las propiedades marcadas con " \* " son de caracter obligatorio

```
{
   *  "paymentId": "id_del_pago",
   *  "products": [{
          "id": 1,
          "name": "ProductoCambiadoTest1"
      }],
   *  "clientName": "nombre_cliente",
   *  "address": "direccion_cliente",
   *  "province": "provincia_cliente",
   *  "phone": 1234411,
   *  "email": "email_cliente"
}
```

- http://localhost:4001/orders/:id `PUT` Al modificar una orden lo que va a hacer es cambiar del estado "pending: true, succesfull: false" a "pending:false, succesfull: true" y arrojar un mensaje

```
{
       "message": "Orden completada",
       "modifyOrder": {
        "id": 1,
        "paymentId": "12312jn321-1232",
        "products": [
            {
                "id": 1,
                "name": "ProductoTest",
            }
        ],
        "clientName": "Pepe",
        "address": "direccion",
        "province": "provincia",
        "email": "pepe@mail.com",
        "phone": "1234411",

     *  "succesfull": true,
     *  "pending": false,

        "createdAt": "2023-07-25T12:11:29.816Z",
        "updatedAt": "2023-07-25T12:13:15.705Z"
    }
}
```

- http://localhost:4001/orders/:id `DELETE` La ruta delete responde con un texto en caso de que haya encontrado la orden y se haya borrado, sino arroja error.

#### Caso exitoso

```
Orden borrada existosamente
```

#### Caso error

```
{
    "error": "Error al borrar la orden"
}
```

## Contribución

Si deseas contribuir al proyecto, sigue los siguientes pasos:

1. Crea una nueva rama: `git checkout -b nueva-funcionalidad`

2. Realiza tus cambios y mejoras.

3. Haz commit de tus cambios: `git commit -m "Descripción de los cambios"`

4. Sube la rama a GitHub: `git push origin nueva-funcionalidad`

5. Crea una solicitud de extracción en GitHub.
