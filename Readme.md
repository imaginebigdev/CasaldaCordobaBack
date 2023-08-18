# Casandra inmobiliaria Back

Backend de inmobiliaria con base de datos relacional.

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
KEY_ADMIN=nombre_de_key_front
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

- http://localhost:4001/properties `GET` (Trae todos los productos, en caso de no haber nada en la DB trae un array vacio)

```
[
  {
    "id": 1,
    "name": "prop 1",
    "description": "descripcion",
    "image": "imagen_url",
    "price": 0,
    "type": "tipo_de_prop",
    "province": "provincia",
    "location": "ciudad/pueblo/localidad",
    "ubication": "direccion",
    "environments": 0,
    "bathrooms": 0,
    "antiquity": 0,
    "status": "estado_prop",
    "yard": true,
    "gas": true,
    "image_galery": [
        "url1",
        "url2"
    ],
    "createdAt": "2023-08-18T14:15:31.569Z",
    "updatedAt": "2023-08-18T15:57:01.486Z",
    "categoryId": 0
  },
  {
    "id": 2,
    "name": "prop 2",
    "description": "descripcion",
    "image": "imagen_url",
    "price": 0,
    "type": "tipo_de_prop",
    "province": "provincia",
    "location": "ciudad/pueblo/localidad",
    "ubication": "direccion",
    "environments": 0,
    "bathrooms": 0,
    "antiquity": 0,
    "status": "estado_prop",
    "yard": true,
    "gas": true,
    "image_galery": [
        "url1",
        "url2"
    ],
    "createdAt": "2023-08-18T14:15:31.569Z",
    "updatedAt": "2023-08-18T15:57:01.486Z",
    "categoryId": 0
  }
]
```

- http://localhost:4001/properties/:id `GET` (Trae el producto que se especifica, en caso de no haber nada en la DB trae un array vacio)

```
{
    "id": 1,
    "name": "prop 1",
    "description": "descripcion",
    "image": "imagen_url",
    "price": 0,
    "type": "tipo_de_prop",
    "province": "provincia",
    "location": "ciudad/pueblo/localidad",
    "ubication": "direccion",
    "environments": 0,
    "bathrooms": 0,
    "antiquity": 0,
    "status": "estado_prop",
    "yard": true,
    "gas": true,
    "image_galery": [
        "url1",
        "url2"
    ],
    "createdAt": "2023-08-18T14:15:31.569Z",
    "updatedAt": "2023-08-18T15:57:01.486Z",
    "categoryId": 0
}
```

- http://localhost:4001/properties/ `POST` Se envia por body un objeto como el ejemplo de abajo, las propiedades marcadas con " \* " son de caracter obligatorio

```
{
   *  "name": "Prop test",
      "description" : "prop_description",
      "image": "url_imagen",
   *  "price": 0,
   *  "categoryId": 2,
   *  "type": "tipo_prop",
   *  "province": "provincia",
   *  "location": "ciudad/pueblo/localidad",
   *  "ubication": "dirección",
   *  "environments": 0,
   *  "bathrooms": 0,
   *  "antiquity": 0,
   *  "status": "estado_prop",
   *  "yard": false || true,
   *  "gas": false || true,
      "image_galery": [
        "url1",
        "url2"
      ],
   *  "key_admin": "key_admin_front"
}
```

- http://localhost:4001/properties/:id `PUT` Todos los datos especificados en el ejemplo de abajo pueden cambiarse, tambien la ruta reconoce si se tiene que cambiar un solo dato o todos.

```
{
    "name": "nombre_a_cambiar",
    "description": "descripcion_a_cambiar",
    "image": "url_a_cambiar",
    "price": 45000,
    "environments": 2,
    "bathrooms": 2,
    "antiquity": 10,
    "status": "estado_a_cambiar",
    "image_galery": ["url_a_cambiar", "url_a_cambiar"],
    "key_admin": "key_admin_front"
}
```

- http://localhost:4001/properties/:id `DELETE` La ruta delete responde con un texto en caso de que haya encontrado el producto y se haya borrado, sino arroja error.

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

## Contribución

Si deseas contribuir al proyecto, sigue los siguientes pasos:

1. Crea una nueva rama: `git checkout -b nueva-funcionalidad`

2. Realiza tus cambios y mejoras.

3. Haz commit de tus cambios: `git commit -m "Descripción de los cambios"`

4. Sube la rama a GitHub: `git push origin nueva-funcionalidad`

5. Crea una solicitud de extracción en GitHub.
