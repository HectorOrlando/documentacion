Para arrancar el proyecto en desarrollo, producción y realizar pruebas, puedes seguir estos pasos básicos:

### Desarrollo:

0. **Pararme siempre donde esta el proyecto api**
```bash
  cd api
   ```

1. **Instalar Dependencias:**
   ```bash
   npm install
   ```

2. **Compilar y Observar Cambios:**
   ```bash
   npm run watch-compile
   ```

3. **Iniciar Servidor de Desarrollo:**
   ```bash
   npm run watch-dev
   ```
   Esto iniciará el servidor de desarrollo usando nodemon, que reiniciará automáticamente cuando se detecten cambios en los archivos.

### Producción:

1. **Compilar para Producción:**
   ```bash
   npm run build
   ```
   Esto compilará tu código en la carpeta `dist`.

2. **Iniciar en Producción:**
   ```bash
   npm start
   ```
   Esto iniciará tu aplicación en modo de producción.

### Pruebas:

1. **Ejecutar Pruebas Unitarias:**
   ```bash
   npm run test:unit
   ```

2. **Ejecutar Pruebas de Integración:**
   ```bash
   npm run test:integration
   ```

3. **Ejecutar Pruebas E2E:**
   ```bash
   npm run test:e2e
   ```

4. **Generar Cobertura de Pruebas Unitarias:**
   ```bash
   npm run test:unit:coverage
   ```

5. **Generar Cobertura de Pruebas de Integración:**
   ```bash
   npm run test:integration:coverage
   ```

Recuerda que estos comandos pueden variar según tus necesidades específicas y cómo esté configurado tu proyecto. Asegúrate de revisar y ajustar los scripts y configuraciones según tus requisitos.

---

En una terminal, puedes mantener en ejecución el comando `npm run watch-compile` que utiliza `swc` para compilar tu código TypeScript.

En otra terminal, ejecuta `npm run watch-dev` para iniciar el servidor en modo de observación.

Esto asegurará que tu aplicación se compile automáticamente cuando realices cambios en el código fuente, y el servidor se reinicie para reflejar esos cambios.