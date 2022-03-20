# CRUD React y ASP NET Core
Autor: Robert Sebastian Lezama Vásquez
___
### Listado de Herramientas
1.FrontEnd

- React Versión: 17.0.2
- bootstrap Versión:5.1.3
- Javascript

2.BackEnd
- ASP .NET Core Versión:5.0

3.Data Base
- IIS Server
- MS SQL SERVER

4.IDE
- Visual Studio
- VS Code

### Instrucciones de ejecución

### Importar la base de datos

Como primer paso importaremos el script de la base de datos en el programa MS SQL Manager.

El archivo tiene por nombre 

    InventarioDB.sql

Una vez ejecutado el scritp, se creará la base de datos llamada
  __prueba.db__ la cual contiene toda la información.

### Ejecución del Backend

En segundo lugar, debemos ejecutar la parte del Backend.

Para esto, abrirémos el siguiente archivo en la herramienta "Visual Studio".



    "ApiGestores.sln" 
    

Una vez importado el archivo, será necesario ubicar el archivo llamado 

    "appsettings.json" 

Esto, con la finalidad de cambiar los parametros de la conexion ( "ConnectionStrings") por los que el usuario presente según la configuracion del servidor local.


Una vez hecho el cambio, debemos ejecutar nuestra API por medio de "IIS Express" (Herramienta brindada por Visual Studio).
__Acerca de las dependecias, estas se descargar automaticamente al ejecutarlo.__

### Ejecución del FrontEnd

Como tercer y ultimo paso, debemos ejecutar la parte de Front End.


Abiremos el contenido que se ubica en la carpeta __Front__ en la herramienta "Visual Studio Code".


Seguidamente deberemos abirar una terminal y ejecutar el siguiente comando.


    -npm install


Con esto se descargaran las dependencias necesarias para poder ejecutar nuestra aplicación web.


Por ultimo, ejecutamos el siguiente comando, para ejecutar nuestra aplicacion en React.

    -npm run start



