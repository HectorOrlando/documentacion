Para traer los cambios de la rama `rama-1` a la rama `rama-2`, puedes seguir estos pasos:

1. **Asegúrate de estar en la rama `rama-2`:**
   Antes de todo, asegúrate de estar en la rama `rama-2`. Puedes cambiar a esta rama utilizando el comando `git checkout`:
   ```bash
   git checkout rama-2
   ```

2. **Trae los cambios de la rama `rama-1` a la rama `rama-2`:**
   Utiliza el comando `git merge` para traer los cambios de la rama `rama-1` a la rama `rama-2`:
   ```bash
   git merge rama-1
   ```

   Esto fusionará los cambios de la rama `rama-1` en la rama `rama-2`. Si hay conflictos entre los cambios de ambas ramas, Git te pedirá que los resuelvas manualmente.

3. **Resuelve los conflictos (si es necesario):**
   Si hay conflictos entre los cambios de las dos ramas, debes resolverlos manualmente. Abre los archivos conflictivos en un editor de texto, resuelve los conflictos y luego haz un commit para finalizar el proceso de fusión.

4. **Haz push de los cambios a la rama `rama-2` remota (si es necesario):**
   Si deseas enviar los cambios fusionados a la rama `rama-2` en el repositorio remoto, puedes hacerlo ejecutando:
   ```bash
   git push origin rama-2
   ```

Con estos pasos, deberías poder traer los cambios de la rama `rama-1` a la rama `rama-2` en tu repositorio local y, si lo deseas, enviar esos cambios a la rama `rama-2` en el repositorio remoto.