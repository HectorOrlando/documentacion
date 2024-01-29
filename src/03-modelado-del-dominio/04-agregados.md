### ¿Qué es un Agregado?
Un agregado es un patrón de diseño que agrupa un conjunto de entidades y objetos de valor bajo una entidad raíz. La raíz del agregado actúa como la puerta de entrada para todas las operaciones y garantiza la consistencia transaccional. 

En un agregado, la "raíz" es la entidad principal que actúa como punto de entrada exclusivo para interactuar con el conjunto de entidades relacionadas. Esta entidad controla y coordina todas las operaciones dentro del agregado. La raíz asegura la coherencia y consistencia al garantizar que todas las interacciones, cambios y reglas de negocio asociadas se realicen a través de ella. Por ejemplo, en un sistema de gestión de pedidos, el agregado podría ser un "Pedido", y la raíz del agregado sería la entidad "Pedido" que gestiona todas las operaciones relacionadas con ese pedido.

### Características Clave de los Agregados:

1. **Consistencia Transaccional:**
   - Todas las operaciones dentro de un agregado deben ejecutarse de manera consistente dentro de una única transacción. Esto significa que o todas las modificaciones dentro del agregado se realizan con éxito, o ninguna de ellas se lleva a cabo.
    - *Imagen Asociativa:* Un juego de fichas de dominó, donde todas las fichas representan operaciones dentro del agregado. Si una ficha cae, todas las demás también caen, simbolizando que todas las operaciones deben ejecutarse de manera consistente.

2. **Límite de la Exposición de Datos:**
   - Solo la raíz del agregado tiene acceso directo desde fuera del agregado. Esto implica que las demás entidades y objetos de valor dentro del agregado no pueden ser referenciados directamente desde fuera del agregado. La raíz actúa como un punto de entrada para el acceso y la manipulación.
    - *Imagen Asociativa:* Una fortaleza con un solo puente de entrada. La fortaleza representa el agregado y el puente de entrada simboliza la raíz del agregado. Esto destaca que solo la raíz permite el acceso desde fuera del agregado.

3. **Invariancia del Agregado:**
   - Un agregado debe mantener invariantes que se apliquen a todas las operaciones dentro del agregado. Estas invariantes son reglas de negocio que deben cumplirse en todo momento. La raíz del agregado es responsable de garantizar que estas invariantes se mantengan coherentes después de cada operación.

En resumen, son una forma de gestionar la complejidad y garantizar la integridad de los datos en el modelado de dominios.

4. ** Imagen del Patrón Agregado **

 ![Agregado]
 (https://raw.githubusercontent.com/HectorOrlando/documentacion/main/src/img/04-agregados.jpeg)
