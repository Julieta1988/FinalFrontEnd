# Maquetado Dinámico Modulo 3: Julieta Rosende

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 15.2.5.

## Composición general

En este proyecto se encuentran separados:
- Los componentes del inicio: lo que puede ver del perfil cualquier usuario NO admin.
- Los componentes de edición: lo que ve el usuario admin cuando se encuentra logueado.

Dentro de la pantalla de edición, cada uno de los componentes cuenta con dos opciones:
- Un lápiz para modificarlo
- Un cesto de basura para eliminarlo.


## Carpetas

La subdivisión de carpetas estpa realizada en base al punto explicado anteriormente (Composición General).
Tenemos dentro de la carpeta SRC:
- APP: En esta carpeta se encuentran todos los componentes:
    - componentes: todos los que corresponen a la pantalla de inicio, lo que ve el público en general que no se encuentra logueado.
        - Dentro de esta carpeta está "inicio" que es el componente que junta y muestra a todos los demás.

    - edicion: todos los mismos componentes pero con los íconos de eliminar y modificar. Estos son los componentes que se ven en la pantalla de edición cuando el usuario Admin se encuentra logueado.
        - Dentro de esta carpeta está "edicion" que es el componente que junta y muestra a todos los demás.

    - modales: son las ventanas modales que se abren al intentar eliminar/eliminar un componente de la pantalla de edición.

    - servicios: los servicios que permiten interactuar entre los distintos componentes.

- ASSETS: En esta carpeta sólo se encuentra la carpeta de imágenes y la que contiene el JSON con la información de todo el portfolio.


## Servidor de desarrollo

Ejecutar `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200/` para ver el portfolio a medida que lo edita. El mismo se recargará automáticamente si cambia cualquiera de los archivos de origen.

## Herramientas externas utilizadas

Se utilizaron algunas páginas para obtener formularios, modales, íconos, etc:

[Bootstrap](https://getbootstrap.com/)

[Fontawesome](https://fontawesome.com/)