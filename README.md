# Prueba Frontend Softtek

<br>

## Sobre el proyecto

Esta proyecto es un prueba para la empresa Softtek, basado en el diseño Figma.

## Documentación

El Stack de desarrollo de la **Arquitectura Frontend** dentro de este proyecto es:

* **Typescript** como lenguaje obligatorio de desarrollo.
* **NextJS** como tecnología principal.
* **Tailwind** como utility first para los estilos.
* **SASS** como lenguaje para hojas de estilo
* **Eslint** como linter de código.
* **Prettier** como formateador de código.

### Estructura de carpetas

El proyecto cuenta con la siguiente estructura:


```bash
frontend-softtek
 ├── .env #Variables de entorno
 ├── .eslintignore #Ignorar El linter dentro de las carpetas dist y node_modules
 ├── .eslintrc #Reglas del linter + Prettier
 ├── .gitignore
 ├── .prettierrc 
 ├── next-env.d.ts 
 ├── next.config.js #Configuración de NextJs
 ├── package.json 
 ├── postcss.config.js #Configuración de Postcss con Tailwind
 ├─> public
 │   └─> images
 │   └─> svg
 │   └─> fonts
 ├── README.md #Documentación del proyecto
 ├─> src
 │   ├─> modules #Modulo de las diferentes páginas que contiene components pequeños
 │   ├─> shared #Carpeta compartida  
 │   │   └─> api #Configuración para las peticiones fetch
 │   │   └─> constants #Constantes
 │   │   └─> context #Context para manejar los estados globalmente
 │   │   └─> elements #Components reutilizables basados en Atomic Design
 │   │   └─> hooks #Custom hooks
 │   │   └─> interfaces #Modelos de datos
 │   │   └─> services #Peticiones HTTP para el consumo de datos
 │   │   └─> utils #Utilitarios
 │   ├─> pages #Carpeta de NextJS con las paginas existentes.
 │   └─> styles #Estilos en SASS
 ├── tailwind.config.js #Configuración de tailwind
 └── tsconfig.json #Configuración de Typescript
```

## Correr localmente el proyecto

1. Clonar el proyecto

```bash
  git clone https://github.com/kunars/frontend-softtek.git
```

2. Ir a la carpeta del proyecto

```bash
  cd frontend-softtek
```

3. Instalar dependencias

```bash
  npm install
```

4. Iniciar el proyecto

```bash
  npm run dev
```