
# blog-backend-prueba

Este es el backend para consultar y crear artículos para el siguiente proyecto frontend: https://github.com/LuisHernandez1611681/blog-front-prueba

# Configuracion de base de datos

Para poner en funcionamiento este proyecto, se necesita crear una base de datos en PostgreSQL.

```
create database db_blog
    with
    owner = postgres
    encoding = 'UTF8'
    LOCAL_PROVIDER = 'libc'
    connection limit = -1
    IS_TEMPLATE = False;
```
Posteriormente, creamos una tabla llamada article con los siguientes campos:

```
create table article (
	id serial primary key,
	title  VARCHAR(40) not null,
	author VARCHAR(40) not null,
	created_at VARCHAR(20) not null,
	content TEXT not null
);
```
# Instrucciones de Instalación:

Para levantar el proyecto, debes ejecutar el siguiente comando en la carpeta donde lo hayas clonado:

```
    npm install
```

# Cómo Correr la Aplicación:

Crea un archivo .env en la carpeta raíz con los siguientes campos, donde todos son obligatorios excepto PORT y DB_PORT:

```
PORT=3000
DB_USER=
DB_HOST=
DB_DATABASE=
DB_PASSWORD=
DB_PORT=5432
```
Finalmente, ejecuta el siguiente comando:

```
    node app.js
```

Si todo ha salido bien, verás el siguiente mensaje en la consola:
```
Servidor Express escuchando en el puerto 3000
```










