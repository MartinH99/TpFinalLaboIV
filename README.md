# Spotify Mood 

Plataforma de gestión de canciones, playlist y artistas. 
Este proyecto es una versión de Spotify en la cual todas las canciones que el usuario quiera buscar se deben basar en su estado de ánimo actual.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

## Tabla de Contenidos
- [Características](#características)
- [Comandos](#comandos)
- [Instalación](#instalación)
- [Stack](#stack)

## Características

- **Register**: El usuario deberá registrarse con sus datos personales para posteriormente logearse e ingresar a la página principal. 
- **Login**: El usuario deberá logearse con la información correspondiente de su registro para poder ingresar, de lo contrario, no podrá tener acceso a la página principal. 
- **Forgot Password**: Sí por algún motivo el usuario no recuerda su contraseña, el sistema proovera de una sección para recuperarla. Deberá recordar su "PIN" o "Respuesta de seguridad" que serán digitos que el usuario ingresó en su registro. 
- **Home**: Una vez que el usuario haya podido logearse satisfactoriamente, podrá tener acceso a la página principal donde encontraremos variedad de canciones, artistas e incluso una sección de "playlist" dónde el usuario podrá guardar sus canciones preferidas. Además el usuario podrá buscar canciones dependiendo su estado de ánimo actual. El sistema analizará el estado de ánimo del usuario y brindará canciones relevantes. El usuario tendrá la posibilidad de reproducir en la web una preview de la canción completa o sí quiere escuchar la canción completa tendrá la posibilidad de hacerlo mediante un botón que lo redirigirá a Spotify. 
- **Profile**: El usuario podrá editar su información personal o eliminar su cuenta de ser necesario. En caso de la segunda opción, deberá registrarse nuevamente para ingresar ya que automaticamente sus credenciales serán borradas del sistema. 

## Comandos

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

- **Development server:**
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

- **Code scaffolding:**
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

- **Build:**
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

- **Running unit tests:**
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

- **Running end-to-end tests:**
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

- **Further help:**
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

  
## Instalación

1. **Clona el repositorio:**
     ```sh
   git clone https://github.com/MartinH99/TpFinalLaboIV.git
   cd [nombre carpeta]
2. **NodeJS**
   Instalar Node.js → https://nodejs.org/ (todo “Siguiente” hasta finalizar)
3. **Json Server**
   - Abrir Terminal (macOS) o PowerShell/CMD (Windows)
   - Ejecutar el comando: npm install --global json-server@0.17.4
   - Si falla, ejecutar el comando: Set-ExecutionPolicy RemoteSigned
   - Para levantarlo, ir a la carpeta del proyecto o donde tengamos el archivo .json
   - Ejecutar: json-server --watch NombreDelArchivo.json ó npm run backend
4. **Angular CLI**
   npm install -g @angular/cli
   

## Stack

- Todos los temas vistos en la comisión 5 de Programación y Laboratorio IV del año 2024 en la Universidad Tecnologica Nacional.
  
  - [Tecnología]:
    - Angular
    - TypeScript
    - Bootstrap
    - CSS
     
  - [Control de versiones]:
     - Git / Github

  - [Gestión de proyecto]:
     - Jira


