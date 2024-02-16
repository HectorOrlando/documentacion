Si deseas hacer un push a la rama llamada `NombreRama`, aquí tienes las instrucciones completas por línea de comandos:

1. **Asegúrate de estar en la rama correcta:**
   ```bash
   git checkout NombreRama
   ```

2. **Agrega los cambios que deseas enviar:**
   ```bash
   git add .  # Esto agregará todos los archivos modificados
   ```

3. **Realiza el commit con un mensaje descriptivo NOTA "el mensaje siempre en minúsculas" :**
   ```bash
   git commit -m "[feat, refactor, fix, chore] mensaje de tus cambios siempre en minúsculas.  "
   # feat:     añadir código nuevo.
   # refactor: refactorizar código hecho.
   # fix:      hacer corregir manejo incorrecto.
   # chore:    actualizar dependencias y scripts de construcción.
   ```

4. **Realiza el push a la rama remota:**
   ```bash
   git push origin NombreRama
   ```

   Si es la primera vez que estás empujando esta rama, puedes usar el siguiente comando:
   ```bash
   git push -u origin NombreRama
   ```
5. **Prueba maquina virtual**