---
sidebar_position: 3
---

# Perfiles

La vista de perfiles permite al administrador gestionar los perfiles que pueden ser asignados a los usuarios del sistema.

<div align="center">
    <img src="/img/work/sys/profiles/table-profiles.png" alt="Profiles page" />
</div>

Los perfiles son un conjunto de permisos que se pueden asignar a los usuarios, estos permisos definen las acciones que un usuario puede realizar en el sistema.

Los permisos se basan en las rutas y acciones que se pueden realizar en la aplicación. Toda acción del sistema tiene una ruta asociada, por lo que los perfiles se pueden asignar a una o varias rutas.

A continuación se explicará específicamente cómo se pueden gestionar los perfiles en la aplicación. Si desea saber más sobre los formularios, consulte la [documentación de formularios](/docs/genericos/formularios).

## Búsqueda

Al ser una vista simple, solo cuenta con el formulario de [búsqueda avanzada](/docs/genericos/formularios#búsqueda-avanzada).

## Creación

Para crear un perfil, se debe hacer clic en el botón `Agregar` que se encuentra en la parte superior derecha de la vista, a continuación se abrirá un modal como el siguiente:

<div align="center">
    <img src="/img/work/sys/profiles/new-profile.png" alt="Profile create form" />
</div>

Solo se debe ingresar la descripción del perfil y dar clic en el botón `Guardar`. En tiempo real, se mostrará el perfil creado en la tabla de perfiles.

## Actualización

Para actualizar un perfil, se debe hacer clic en el botón de edición que se encuentra en la parte derecha de la tabla de perfiles, en la sección de acciones, a continuación se abrirá un modal como el siguiente:

<div align="center">
    <img src="/img/work/sys/profiles/edit-profile.png" alt="Profile edit form" />
</div>

Solo se debe modificar la descripción del perfil y dar clic en el botón `Guardar`. En tiempo real, se mostrará el perfil actualizado en la tabla de perfiles.

## Relación

Este formulario se utiliza para relacionar las opciones del menú con el perfil seleccionado, para ello se debe hacer clic en el botón que sirve para relacionar (debido a la personalización en las acciones del menú, no es posible saber el nombre exacto de este botón), a continuación se abrirá un modal como el siguiente:

<div align="center">
    <img src="/img/work/sys/profiles/relation-profile-with-menu-options.png" alt="Profile relate form" />
</div>

### Funcionamiento de relación

En la imágen anterior se puede ver 3 grupos de opciones, a saber:

* **Operación**. Es toda el área de operación de la aplicación.
* **Informática**. Es toda el área de gestión de la aplicación.
* **Consultas**. Es toda el área de consulta de la aplicación.

Cada grupo de opciones tiene un listado, el cual también se divide en subgrupos, estos últimos son las acciones que se puede ejecutar en la aplicación.

Para que el perfil tenga acceso a una acción, se debe marcar la casilla de la acción deseada y también se debe marcar la casilla de la vista deseada. Por ejemplo, si se desea que el perfil `Operador` tenga acceso a la acción `Cargar` en la vista `Documentos`, se debe marcar la casilla de `Cargar` y la casilla de `Documentos`.

## Asignación

Este formulario se utiliza para asignar usuarios a un perfil, para ello se debe hacer clic en el botón que sirve para asignar (debido a la personalización en las acciones del menú, no es posible saber el nombre exacto de este botón), a continuación se abrirá un modal como el siguiente:

<div align="center">
    <img src="/img/work/sys/profiles/assign-profile-to-users.png" alt="Profile assign form" />
</div>

### Funcionamiento de asignación

Como se explica en la sección de [formularios de relación y/o asignación](/docs/genericos/formularios#formulario-de-relación-yo-asignación), en este formulario se pueden asignar usuarios a un perfil.

El formulario se divide en dos partes, la parte izquierda muestra los usuarios que estan asignados o se asignarán al perfil, la parte derecha muestra a los usuarios que no están asignados o se removieron del perfil. Para poder moverlos de lugar, se debe hacer clic en el nombre del usuario deseado y en automático se moverá a la otra parte. Ejemplo, si se desea asignar al usuario `Juan` al perfil `Operador`, se debe hacer clic en el nombre de `Juan` y en automático se moverá a la parte izquierda.

Basta con dar clic en el botón `Guardar` para que los cambios se guarden en la base de datos y se reflejen en tiempo real a todos los usuarios.

## Activación/Desactivación

La explicación de estos formularios se puede encontrar en la sección de [formularios de inactivación](/docs/genericos/formularios#formulario-de-inactivación) y [formularios de activación](/docs/genericos/formularios#formulario-de-activación).

Los registros no se eliminan, sino que pasan a un estado de activación/desactivación, por lo que se pueden activar/desactivar nuevamente en cualquier momento.
