1. Para crear una nueva rama y cambiarte automáticamente a ella desde la rama `main`, puedes utilizar el comando `git checkout -b` seguido del nombre de la nueva rama que deseas crear. Aquí tienes los pasos:

```bash
git checkout -b nombre-de-la-nueva-rama
```

Esto creará la nueva rama `nombre-de-la-nueva-rama` y te cambiará automáticamente a ella desde la rama `main`.


2. Para subir la nueva rama `nombre-de-la-nueva-rama` al repositorio remoto sin añadir ningún código adicional, puedes hacer lo siguiente:

```bash
git branch
```

Esto te mostrará una lista de todas las ramas locales y resaltará la rama actual con un asterisco (`*`).

3. Después de confirmar que estás en la rama `nombre-de-la-nueva-rama`, puedes usar el siguiente comando para enviar la rama al repositorio remoto:

```bash
git push origin nombre-de-la-nueva-rama
```

Este comando empujará la nueva rama `snombre-de-la-nueva-rama` al repositorio remoto llamado `origin`. Una vez que la rama se haya enviado correctamente, estará disponible en el repositorio remoto para ti y para otros colaboradores del proyecto.