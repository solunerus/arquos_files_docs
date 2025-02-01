---
sidebar_position: 1
---

# Bitácora del sistema

Arquos Files cuenta con una bitácora de actividades en la cual se puede visualizar todos los movimientos que han existido en el sistema.

## Estructura

<div align="center">
  <img src="/img/work/qry/bitacora/table-bitacora.png" alt="Table bitácora" />
</div>

La bitácora cuenta con una [tabla](/docs/genericos/tablas) en la cual se pueden visualizar los siguientes campos:

* ID: Identificador único de la actividad.
* Contacto del responsable: Correo electrónico del usuario que realizó la actividad.
* Acción: Descripción de la actividad realizada.
* Descripción: Detalles de la actividad realizada.
* Fecha: Fecha y hora en la que se realizó la actividad.

Así también, cuenta con dos tipos de formularios para filtrar la información de la bitácora, el [formulario simple](/docs/genericos/formularios#búsqueda-simple) y el [formulario avanzado](/docs/genericos/formularios#búsqueda-avanzada).

## Formularios

### Búsqueda simple

La búsqueda simple permite filtrar la información de la bitácora por medio de un campo de texto en el cual se puede ingresar una palabra clave para buscar en los campos de la tabla. Así también, cuenta con un selector para filtrar la información según la columna que se desee.

<div align="center">
  <img src="/img/work/qry/bitacora/filter-simple-form-bitacora.png" alt="Simple Form bitácora" />
</div>

:::note Nota

El botón de "Limpiar" permite limpiar los campos de la búsqueda realizada.

:::

### Búsqueda avanzada

La búsqueda avanzada permite filtrar la información de la bitácora por medio de campos específicos en los cuales se puede ingresar una palabra clave para buscar en los campos de la tabla. En la búsqueda avanzada, se debe precionar el botón de "Buscar" para que se realice la búsqueda.

:::info Nota

La búsqueda actualiza la tabla de la bitácora con los resultados obtenidos.

:::

## Registros

Los registros de la bitácora son las actividades que se han realizado en el sistema. Cada registro cuenta con un identificador, contacto del responsable, acción, descripción y fecha.

### Registros con detalle de operación

Los registros con detalle de operación son las actividades que se han realizado en el sistema y cuentan con un detalle específico de la operación realizada.

<div align="center">
  <img src="/img/work/qry/bitacora/show-bitacora-with-details.png" alt="Detail operation bitácora" />
</div>

### Registros sin detalle de operación

Los registros sin detalle de operación son las actividades que se han realizado en el sistema y no cuentan con un detalle específico de la operación realizada.

<div align="center">
  <img src="/img/work/qry/bitacora/show-bitacora-without-details.png" alt="Without detail operation bitácora" />
</div>
