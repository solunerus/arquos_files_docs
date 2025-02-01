---
sidebar_position: 1
---

# Menú

La vista para gestionar el menú se compone de dos partes principales, la primera se encuentra en la parte superior de la pantalla y es el menú de opciones principales, la segunda parte es el menú de opciones secundarias (también conocidas como acciones) que se encuentra en la parte inferior de la pantalla.

<div align="center">
  <img src="/img/work/sys/menu/menu.png" alt="Menu page" />
</div>

## Menú de opciones principales

<div align="center">
    <img src="/img/work/sys/menu/root-zone/menu-1.png" alt="Menu card" />
</div>

Las opciones principales son las siguientes:

* Gestión de menú `/sys/menu`.
* Información de la empresa `/sys/empresa`.
* Usuarios `/sys/usuarios-info`.
* Perfiles `/sys/perfiles`.
* Reportes `/sys/reportes`.
* Bitácora del sistema `/qry/bitacora`.
* Atributos de archivo `/qry/attr-archivo`.
* Niveles `/opr/niveles`.
* Documentos `/opr/documentos`.
* Soporte documental `/opr/tipo-documento`.
* Atributos de expedientes `/opr/atributos-archivo`.
* Estructura de expedientes `/opr/tipo-archivo`.
* Estructura de archivo `/opr/organigramas`.
* Expedientes `/opr/operaciones`.

Estas opciones permiten al administrador del sistema gestionar las diferentes rutas y configuraciones de la aplicación.

Cada opción principal tiene un icono, número ordinal, descripción y ruta asociada.

<div align="center">
    <img src="/img/work/sys/menu/root-zone/menu-card.png" alt="Menu card" />
</div>

### Selección de opción

Para seleccionar una opción y poder modificar sus acciones, se debe hacer clic en la opción principal deseada, esto hará que dicha opción se resalte de color gris y se muestren las opciones secundarias asociadas a la opción principal en la parte inferior de la pantalla.

## Menú de opciones secundarias

Las opciones secundarias en el menú son las acciones que pueden realizar los usuarios en la vista seleccionada.

<div align="center">
    <img src="/img/work/sys/menu/table-zone/menu-2.png" alt="Menu actions" />
</div>

Estas acciones se pueden personalizar cambiando solo la descripción de la acción, este cambio se ve reflejado en los botones de la tabla de dicha vista asociada a la opción del menú.

## Detalle de la opción

Para ver el detalle de una opción principal, basta con dar clic en el botón `Ver Detalle` que se encuentra en la parte superior derecha de la tabla de opciones secundarias.

Para ver el detalle de una opción secundaria, basta con dar clic en el registro deseado, a continuación se abrirá una vista como la siguiente:

<div align="center">
    <img src="/img/work/sys/menu/root-zone/show-detail-menu-root.png" alt="Menu detail" />
</div>

## Formularios

### Formulario de edición de opción principal

Para modificar una opción principal, basta con dar clic en el icono de edición que se encuentra en la parte inferior derecha de la tarjeta de la opción principal deseada, a continuación se abrirá un modal como el siguiente:

<div align="center">
    <img src="/img/work/sys/menu/root-zone/modal-edit-root.png" alt="Menu edit form" />
</div>

A continuación se da una explicación de que es cada campo del formulario:

* **Icono**: Selecciona el icono que se mostrará en la opción principal.
* **Ordinal**: Número que indica la posición de la opción principal en el [menú](/docs/genericos/sidebar).
* **Descripción**: Nombre de la opción principal.

### Formulario de edición de opción secundaria

Para modificar una opción secundaria, basta con dar clic en el icono de edición que se encuentra en la parte derecha de la tabla de opciones secundarias, a continuación se abrirá un modal como el siguiente:

<div align="center">
    <img src="/img/work/sys/menu/table-zone/menu-action.png" alt="Menu action edit form" />
</div>

Este formulario solo permite modificar la descripción de la acción.
