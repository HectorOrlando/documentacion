**Que es un Value Object:**
  - Los Value Objects se utilizan para representar conceptos que no necesitan una identidad única, como cantidades, fechas, direcciones, etc., y ayudan a mantener el modelo de dominio limpio y expresivo.

---

**Características del Patrón de Diseño Value Object:**

1. **Inmutabilidad:**
   - Los "Value Objects" son inmutables, lo que significa que una vez creados, no pueden ser modificados. Esto garantiza que su estado no cambie durante su ciclo de vida, lo que simplifica el razonamiento sobre su comportamiento.
      - Imagen: Un diamante indestructible que, a pesar de ser expuesto a diversas condiciones, nunca cambia.

2. **Identidad basada en Atributos:**
   - La identidad de un "Value Object" está determinada por sus atributos, no por un identificador único. Dos "Value Objects" son considerados iguales si sus atributos son iguales, lo que simplifica las comparaciones y las operaciones de igualdad.
      - Imagen: Un detective que, al examinar una lupa, descubre pequeños detalles distintivos (atributos) en un objeto valioso.

3. **Lógica Encapsulada:**
   - La lógica relacionada con el "Value Object" está encapsulada dentro de la propia clase. Esto significa que las validaciones y operaciones específicas del "Value Object" se gestionan internamente, lo que mejora la coherencia y la mantenibilidad del código.
      - Imagen: El detective coloca el objeto en una caja fuerte especial con engranajes internos. La caja fuerte representa la encapsulación de la lógica y la seguridad.

4. **Inmutabilidad Global:**
   - La inmutabilidad de los "Value Objects" contribuye a la inmutabilidad global del sistema. Al evitar cambios no controlados en el estado de los objetos, se reduce la posibilidad de efectos secundarios inesperados.
      - Imagen: La caja fuerte está conectada a un globo terráqueo que cubre todo el mundo. Esto simboliza que la inmutabilidad se extiende globalmente a través de la encapsulación segura.

Visualiza esta historia mental: el diamante es inmutable, el detective descubre atributos únicos, coloca el objeto en una caja fuerte con lógica encapsulada y, finalmente, la caja fuerte está conectada globalmente al globo terráqueo, destacando la inmutabilidad a nivel mundial.

5. ** Imagen de Value Object **
![Patrón de Diseño Value Object](https://raw.githubusercontent.com/HectorOrlando/documentacion/main/src/img/02_value_objects.jpeg)
