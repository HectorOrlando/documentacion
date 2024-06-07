# Open Food Facts - JS SDK

Este es el SDK oficial de JS/TS para la API de Open Food Facts.

## Instalación

### Versión de desarrollo

```shell
npm install git+https://github.com/openfoodfacts/openfoodfacts-nodejs.git
# o
yarn add git+https://github.com/openfoodfacts/openfoodfacts-nodejs.git
# o
pnpm add git+https://github.com/openfoodfacts/openfoodfacts-nodejs.git
```

#### Ejemplo de código:

```ts
import OpenFoodFacts from "openfoodfacts-nodejs";

const client = new OpenFoodFacts();
client.getProduct("5000112546415").then((it) => console.log(it));
```

## Desarrollo

### Requisitos previos

- Node.js
- Yarn v4

### Enlaces de la API

El proyecto utiliza [openapi-typescript](https://github.com/drwpow/openapi-typescript) para generar automáticamente los enlaces de la API a partir de la especificación OpenAPI.

Para generar los enlaces de la API, ejecuta `yarn api`.
Los archivos deben ser comprometidos en el repositorio para que el SDK pueda ser utilizado sin tener que descargar las especificaciones cada vez.

### Construcción

- Clona el repositorio y ejecuta `yarn install` en el directorio.
- Ejecuta `yarn build` para generar los enlaces OpenAPI y construir el proyecto.
- Ejecuta `yarn test` para ejecutar las pruebas.

## Contribuir

Aceptamos contribuciones de cualquier tipo: nuevas características, corrección de errores, mejoras en la documentación, etc.

También puedes ayudarnos reportando errores, sugiriendo mejoras o probando nuevas características.

Al enviar un PR, por favor usa la [guía de commits de Angular](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits).

## Aplicaciones de terceros

Si utilizas este SDK, siéntete libre de abrir un PR para agregar tu aplicación a esta lista.