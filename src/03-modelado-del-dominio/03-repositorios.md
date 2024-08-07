**Qué es un Patrón Repositorio:**

El repositorio actúa como un intermediario entre la capa de dominio y la capa de infraestructura.

---

**Resumen del Patrón Repositorio en el Contexto de UserRegister:**

El Patrón Repositorio facilita la separación entre la lógica de la aplicación (caso de uso, dentro de Dominio) y los detalles de almacenamiento (MongoUserRepository, dentro de Infraestructure), permitiendo una mayor flexibilidad y mantenibilidad en el diseño del sistema


Dentro de DOMAIN:

1. Define una interfaz (UserRepository) con operaciones (CRUD) u otras, para interactuar con objetos User.
    - Imagen: El logo de GitHub como si fuera el jefe con un maletin que ponga "CRUD"

2. UserRegister, como (caso de uso), utiliza el repositorio para (persistir el nuevo usuario), logrando la separación efectiva entre la lógica de la aplicación y los detalles de almacenamiento.
    - Imagen: separa la fabrica en dos, al lado izquierdo la lógica de la aplicación y al lado derecho los detalles de almacenamiento.

Dentro de INFRASTRUCTURE:

3. MongoUserRepository es una implementación específica para MongoDB que convierte datos de dominio y realiza operaciones de almacenamiento y recuperación.
    - Imagen: Logos de operaciones de almacenamiento y reciclaje



4. ** Imagen del Patrón Repositorio **
 ![del Patrón Repositorio](https://raw.githubusercontent.com/HectorOrlando/documentacion/main/src/img/03-patron-repositorio.jpeg)
