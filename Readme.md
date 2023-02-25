# Qdrink backend

## Comandos para correr en desarrollo local
Abrir dos terminales
En una correr 'npm run devJs' y en la segunda correr 'npm run devTs'
En la primera tendremos los errores en tiempo de ejecucion y la segunda los errores o mensajes en tiempo de compilación.


## Error handling
https://www.codeconcisely.com/posts/how-to-handle-errors-in-express-with-typescript/
https://expressjs.com/en/guide/error-handling.html
https://www.youtube.com/watch?v=s5YoXms0ECs
https://dev.to/qbentil/how-to-write-custom-error-handler-middleware-in-expressjs-using-javascript-29j1
https://scoutapm.com/blog/express-error-handling
https://reflectoring.io/express-error-handling/

## Manejo de migraciones

Modificar el schema en schema.prima
Correr 

npx prisma migrate dev --name added_job_title 

donde added_job_title, debe especificar la modificacion que se hizo ne l bd

despues de generar cualquier cambio en el cliente, se requiere generarlo de vuelta con 
npx prisma generate