# Arquos Files - Documentación para el usuario

Bienvenido a la documentación de Arquos Files. Este proyecto fue realizado con [Docusaurus](https://docusaurus.io/), un generador de sitios web moderno.

## Tecnologías utilizadas

* Node.js
* NPM
* Docusaurus
* Nginx

## Instalación

### Local

Clonar el repositorio.

```bash
git clone https://github.com/solunerus/arquos_files_docs.git
```

En la carpeta del proyecto, ejecutar el siguiente comando.

```bash
npm install
```

Si no hay error, ejecutar el siguiente comando.

```bash
npx docusaurus start
```

Si hay error, revisar y corregir (posiblemente solo se necesite actualizar la versión de Node.js y NPM).

Entrar a `http://localhost:3000/` y ¡listo!.

### Server

Se necesitará ejecutar los pasos `1`y `2` de la instalación local, después se deberá ejecutar el siguiente comando.

```bash
npm run build
```

Si hay errores, se deben revisar y corregir (posiblemente solo se necesite actualizar la versión de Node.js y NPM).

Si no hay errores, se deberá realizar la siguiente configuración:

* Se debe crear un archivo sin extención en la ruta `/etc/nginx/sites-available/name_file`, donde `name_file` es el nombre del archivo de la configuración, puede llamarse `arquos_files_docs` por dar un ejemplo. Para ello hacemos lo siguiente:

```bash
sudo nano /etc/nginx/sites-available/arquos_files_docs
```

En el editor de texto escribimos lo siguiente:

```nginx
server {
    listen PORT ssl; 
    server_name SERVER.NAME.COM;

    ssl_certificate /PATH/TO/SSL/.ssl/NAME_OF_FILE.pem;
    ssl_certificate_key /PATH/TO/SSL/.ssl/NAME_OF_FILE.key;

    location / {
        root /PATH/TO/PROJECT/arquos_files_docs/build;
        index index.html;
        try_files $uri /index.html;
    }
}
```

Donde:

* **PORT**. Es el puerto asignado (el cual también se debe abrir en la configuración del sistema operativo).
* **SERVER.NAME.COM**. Es el nombre del server, puede ser la dirección IP (no recomendado) o el nombre del dominio.
* **/PATH/TO/SSL/.ssl/**. Es la ruta a los certificados `SSL`.
* **NAME_OF_FILE**. Es el nombre del archivo.
* **/PATH/TO/PROJECT/arquos_files_docs/build**. Es la ruta del proyecto, se debe ir a la carpeta `/build`.

Una vez realizado esto, se debe crear un enlace simbólico para activar la configuración realizada anteriormente, para ello se ejecuta el siguiente comando:

```bash
sudo ln -s /etc/nginx/sites-available/arquos_files_docs /etc/nginx/sites-enabled/
```

Al crear el enlace simbólico, se debe probar la configuración ejecutando el comando:

```bash
sudo nginx -t
```

Si se ve `syntax is ok`y `test is successful`, todo está bien.

Ahora se necesita reiniciar Nginx, para ello se ejecuta el siguiente comando:

```bash
sudo systemctl restart nginx
```

Si todo se realizó correctamente, se debe visualizar el sitio web desde el navegador ingresando a `https://SERVER.NAME.COM:PORT/`
