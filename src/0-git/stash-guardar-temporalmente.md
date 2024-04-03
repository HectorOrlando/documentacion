Guardar cambios temporalmente sin hacer commit utilizando la funcionalidad de `git stash`. 
1. Guarda los cambios en la rama `rama-1` utilizando `git stash`:

```bash
git stash
```

Esto guardará tus cambios en un estado temporal y limpiará el directorio de trabajo.

2. Luego, cambia a la rama `main` utilizando `git checkout`:

```bash
git checkout main
```

3. Después de hacer los cambios necesarios en la rama `main`, puedes volver a la rama `rama-1` y recuperar los cambios que guardaste anteriormente utilizando `git stash apply`:

```bash
git checkout rama-1
git stash apply
```

Esto aplicará los cambios guardados temporalmente en la rama `rama-1` para que puedas continuar trabajando en ellos.

Con estos pasos, puedes guardar temporalmente los cambios en la rama `rama-1`, cambiar a la rama `main` y luego recuperar los cambios en la rama `rama-1` sin hacer commit.