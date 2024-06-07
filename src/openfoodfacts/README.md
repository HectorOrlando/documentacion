# Open Food Facts

[![Estado del Proyecto](http://opensource.box.com/badges/active.svg)](http://opensource.box.com/badges)
[![Crowdin](https://d322cqt584bo4o.cloudfront.net/openfoodfacts/localized.svg)](https://translate.openfoodfacts.org/)
[![Colaboradores de Código Abierto](https://www.codetriage.com/openfoodfacts/openfoodfacts-server/badges/users.svg)](https://www.codetriage.com/openfoodfacts/openfoodfacts-server)
[![Patrocinadores en Open Collective](https://opencollective.com/openfoodfacts-server/backers/badge.svg)](#backers)
[![Patrocinadores en Open Collective](https://opencollective.com/openfoodfacts-server/sponsors/badge.svg)](#sponsors)

## ¿Qué es Open Food Facts?

### Una base de datos de productos alimenticios

Open Food Facts es una base de datos de productos alimenticios con ingredientes, alérgenos, información nutricional y todos los detalles que podemos encontrar en las etiquetas de los productos.

### Hecho por todos

Open Food Facts es una asociación sin fines de lucro de voluntarios.
Más de 25,000 colaboradores como tú han añadido más de 1.7 millones de productos de 150 países utilizando nuestra aplicación para Android, iPhone o Windows Phone, o su cámara para escanear códigos de barras y subir fotos de los productos y sus etiquetas.

### Para todos

La información sobre alimentos es de interés público y debe ser abierta. La base de datos completa se publica como datos abiertos y puede ser reutilizada por cualquiera y para cualquier propósito. ¡Revisa los usos geniales o crea el tuyo propio!

* <https://world.openfoodfacts.org/discover>

## ¿Cómo puedo ayudar?

Para empezar a contribuir, la forma más fácil es unirte a nosotros en Slack <https://slack.openfoodfacts.org/> y publicar una presentación sobre lo que te interesa y lo que te gustaría hacer.
Esto permitirá a otros colaboradores señalar proyectos que puedan coincidir con tus intereses. Por ejemplo:

> Me interesa el impacto ambiental de los alimentos y me gustaría ayudar. Soy diseñador, pero también estaría interesado en cómo estiman el impacto ambiental de los productos.

> Estoy usando la aplicación y me pregunto cómo podría ayudar a mejorarla.

> Soy estudiante de informática y me gustaría ayudar con algo de desarrollo. Ya tengo experiencia con React y Python.

### Roles principales

Dado que estamos en GitHub, puedes adivinar que Open Food Facts necesita algunas contribuciones de desarrolladores y diseñadores (los proyectos principales se detallan en la siguiente sección). Pero hay muchas otras formas de contribuir. Por ejemplo, podrías:

- Añadir y limpiar datos: Tienes un producto en casa, tómate un tiempo para escanearlo y ver si la información está actualizada.
- Difundir la palabra: Habla sobre el proyecto a tu alrededor para hacer crecer la comunidad. [Tenemos documentos para ayudarte](https://blog.openfoodfacts.org/en/news/presenting-open-food-facts-at-events-study-case).
- Traducir el proyecto: para ser más accesible, [las páginas necesitan ser traducidas](https://crowdin.com/project/openfoodfacts).
- Mejorar la comprensión de los alimentos: Te interesa el significado de las etiquetas, las distinciones entre los distintos tipos de salsas de tomate, necesitamos tu ayuda para mejorar cómo se estructuran los datos.
- Quieres reutilizar los datos para crear tu propia aplicación o algunos estudios científicos, siéntete libre de contactarnos para presentar el proyecto y pedir ayuda/explicaciones sobre los datos.
- Cualquier otra mejora que se te ocurra.

## Reportar problemas o solicitar una característica

¿Tienes un error o una solicitud de característica? Por favor, busca problemas existentes y cerrados. Si tu problema o idea no se ha abordado aún, abre un nuevo problema. Puedes preguntar directamente en la sala de discusión si no estás seguro.

## Traducir Open Food Facts a tu idioma

Puedes ayudar a traducir la versión web y la aplicación de Open Food Facts en:
<https://translate.openfoodfacts.org/> (no se requiere conocimiento técnico, toma un minuto registrarse).

## Desarrolladores

Estos son los principales proyectos de desarrollo, en desarrollo activo:

- Servidores de Open Food Facts (Perl | HTML/CSS | JS)

  Este repositorio es el sitio web principal (openfoodfacts.org) y la API utilizada por otras aplicaciones.

  Debido a la implementación del nuevo diseño, hay un montón de pequeños problemas de CSS que deben solucionarse y algunas mejoras en la experiencia de usuario.

  [El repositorio](https://github.com/openfoodfacts/openfoodfacts-server) | [¿En qué puedo trabajar?](https://github.com/openfoodfacts/openfoodfacts-server/issues/5529)
  
- Aplicación móvil (Flutter | Dart)

  Esta es la aplicación móvil oficial, una herramienta muy importante que ayuda a las personas en sus elecciones diarias sobre alimentos y también los invita a contribuir a la base de datos.
  
  [El repositorio](https://github.com/openfoodfacts/smooth-app/) | [¿En qué puedo trabajar?](https://github.com/openfoodfacts/smooth-app/issues/525)
  
  Un proyecto complementario es el [dart-sdk](https://github.com/openfoodfacts/openfoodfacts-dart/)

- Editor de taxonomías

  Una aplicación hecha con Python/React que simplifica la manipulación de la taxonomía (el grafo de conocimiento que explica, por ejemplo, que el yogurt es un tipo de alimento lácteo).
  
  Este proyecto tiene la ventaja de estar bien definido y ser nuevo (el desarrollo comenzó en 2022). La desventaja es la complejidad de la taxonomía, que puede tomar tiempo entender completamente.

  [El repositorio](https://github.com/openfoodfacts/taxonomy-editor) | [¿En qué puedo trabajar?]()
  
- Robotoff
  
  Este proyecto agrupa las pipelines de aprendizaje automático utilizadas por Open Food Facts para simplificar la contribución. Detectar etiquetas, extraer ingredientes...

  La mayor parte del código está escrito en Python, y hay necesidad de mejorar tanto los métodos de aprendizaje automático como la gestión de datos y la interfaz de la API.

  Se han hecho muchos experimentos. Algunos fallaron, otros necesitan refinamiento. Es mejor preguntar antes de comenzar un problema para evitar agujeros de conejo 🐰😉
  
  [El repositorio](https://github.com/openfoodfacts/robotoff) | [¿En qué puedo trabajar?](https://github.com/openfoodfacts/robotoff/issues/374)
  
  La investigación y los modelos de ML se pueden encontrar en el [repositorio de openfoodfacts-ai](https://github.com/openfoodfacts/openfoodfacts-ai/)

- Juegos del Hambre

  Una aplicación web utilizada para gamificar la contribución. Es una aplicación web React que hace preguntas basadas en predicciones hechas por Robotoff.
  
  [El repositorio](https://github.com/openfoodfacts/hunger-games/) | [¿En qué puedo trabajar?](https://github.com/openfoodfacts/hunger-games/issues/37)
  
- Otros proyectos actualmente importantes:

  - [Eventos de Open Food Facts](https://github.com/openfoodfacts/openfoodfacts-events) podría ser la base de la gamificación, el panel de usuario, la moderación de datos, pero necesita ayuda para solucionar algunos errores y extenderlo.
  - [Motor de Folksonomía](https://github.com/openfoodfacts/folksonomy_api) puede ayudar a extender las anotaciones con atributos libres. Se necesitan correcciones de errores y algunas extensiones.

### Diseño
* [Equipo de Diseño](https://github.com/openfoodfacts/openfoodfacts-design) ([¿En qué puedo trabajar?](https://github.com/openfoodfacts/openfoodfacts-design/issues/3)) ([Gestión de proyectos de UXR y Diseño en Open Food Facts](https://github.com/orgs/openfoodfacts/projects/11))
### Servidor
* [Servidor](https://github.com/openfoodfacts/openfoodfacts-server) (Perl, HTML, CSS, Dockerized) ([¿En qué puedo trabajar?](https://github.com/openfoodfacts/openfoodfacts-server/issues/5529)) ([Gestión de proyectos del lado del servidor](https://github.com/orgs/openfoodfacts/projects/12))
* [Páginas de contenido para el servidor web](https://github.com/openfoodfacts/openfoodfacts-web) (HTML/CSS) ([¿En qué puedo trabajar?](https://github.com/openfoodfacts/openfoodfacts-web/issues/206))
### Motor de Folksonomía
* [Gestión de proyectos multiplataforma del Motor de Folksonomía](https://github.com/orgs/openfoodfacts/projects/5)
* [Motor de Folksonomía](https://github.com/openfoodfacts/folksonomy_api) (Python/FastAPI) ([Servidor](https://github.com/openfoodfacts/folksonomy_api) ([¿En qué puedo trabajar?](https://github.com/openfoodfacts/folksonomy_api/issues/70))
* [Aplicación demo](https://github.com/openfoodfacts/folksonomy_mobile_experiment) ([¿En qué puedo trabajar?](https://github.com/openfoodfacts/folksonomy_mobile_experiment/issues/7))
* [Frontend](https://github.com/openfoodfacts/folksonomy_frontend) ([¿En qué puedo trabajar?](https://github.com/openfoodfacts/folksonomy_frontend/issues/19))
### Otros
* [Gamificación](https://github.com/openfoodfacts/openfoodfacts-events) (Python/FastAPI) ([¿En qué puedo trabajar?](https://

github.com/openfoodfacts/openfoodfacts-events/issues/17))
* [API de Gamificación](https://github.com/openfoodfacts/openfoodfacts-gamification-api) ([¿En qué puedo trabajar?](https://github.com/openfoodfacts/openfoodfacts-gamification-api/issues/10))

## La API de Open Food Facts

La API de Open Food Facts se puede utilizar para recuperar y enviar datos. Actualmente, las aplicaciones móviles y web utilizan la misma API.

### Documentación

- [Documentación completa](https://documenter.getpostman.com/view/8470508/SVtN3Wzy) en Postman
- [Biblioteca de JavaScript](https://github.com/openfoodfacts/openfoodfacts-js)
- [Biblioteca de Python](https://github.com/openfoodfacts/openfoodfacts-python)
- [Biblioteca de Dart](https://github.com/openfoodfacts/openfoodfacts-dart)

### API

- URL: `https://world.openfoodfacts.org`
- Autenticación: Clave de API opcional

#### Ejemplo de llamada a la API:

```shell
curl https://world.openfoodfacts.org/api/v0/product/737628064502.json
```

#### Ejemplo de respuesta JSON:

```json
{
    "status": 1,
    "status_verbose": "product found",
    "product": {
        "product_name": "Nesquik",
        "quantity": "500g",
        "brands": "Nestlé",
        "ingredients_text": "Sugar, cocoa processed with alkali, soy lecithin",
        "nutriments": {
            "energy": 1600,
            "fat": 3,
            "saturated-fat": 1.5,
            "carbohydrates": 70,
            "sugars": 60,
            "proteins": 7
        }
    }
}
```

#### Ejemplo de envío de datos a la API:

```shell
curl -X POST -d "code=737628064502&product_name=Nesquik&quantity=500g&brands=Nestlé&ingredients_text=Sugar, cocoa processed with alkali, soy lecithin" https://world.openfoodfacts.org/cgi/product_jqm2.pl
```

## Licencia

Los datos de Open Food Facts están disponibles bajo la [Licencia de Base de Datos Abierta (ODBL)](https://opendatacommons.org/licenses/odbl/1-0/).

El código fuente está disponible bajo la [Licencia Pública General Affero de GNU (AGPL)](https://www.gnu.org/licenses/agpl-3.0.html).

## Contribuidores

Gracias a todos los que han contribuido a este proyecto. Sus esfuerzos y dedicación hacen posible Open Food Facts.

<a href="https://github.com/openfoodfacts/openfoodfacts-server/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=openfoodfacts/openfoodfacts-server" />
</a>

---

Este README ha sido generado con el [generador de README de Open Food Facts](https://openfoodfacts.github.io/readme-generator/).