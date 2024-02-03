# Documentación principal de la API Core

## Introducción

Bienvenido a la documentación del módulo Core API. Este módulo constituye la columna vertebral de nuestra infraestructura API, siguiendo los principios del Diseño Dirigido por Dominio (DDD) y garantizando escalabilidad y mantenibilidad.

## Estructura del directorio

```
/
|-- api/
|   |-- src/
|   |   |-- Apps
|   |   |   |-- (Contiene scripts auxiliares y componentes del servidor)
|   |   |-- Contexts
|   |   |   |-- Core
|   |   |   |   |-- (Contiene módulos de lógica empresarial central)
|   |   |   |-- Shared
|   |   |   |   |-- (Contiene componentes compartidos)
|   |-- test/
|   |-- package.json
|   |-- tsconfig.json
|   |-- vitest.config.mts
|   |-- README.md
|   |-- ...
```

- **src/Apps/**: Contiene scripts auxiliares y componentes del servidor necesarios para el funcionamiento adecuado de la API.
- **src/Contextos/**: Define diferentes contextos delimitados de nuestra API. El directorio "Core" alberga los módulos de lógica empresarial central, mientras que el directorio "Shared" contiene componentes potencialmente reutilizables en diferentes contextos.

## Propósito

El módulo Core API está diseñado para encapsular la lógica empresarial central de nuestra aplicación. Al adherirse a los principios de DDD y separar las preocupaciones, aseguramos una arquitectura modular, escalable y mantenible.

## Componentes clave

### Contexto central

El directorio `src/Contexts/Core/` contiene módulos que representan la lógica empresarial central de nuestra aplicación. Estos módulos encapsulan entidades de dominio, servicios, repositorios y otros componentes esenciales para cumplir con los requisitos comerciales.

### Componentes compartidos

El directorio `src/Contexts/Shared/` contiene componentes que son potencialmente reutilizables en diferentes contextos dentro de nuestra API. Estos componentes promueven la reutilización de código y mantienen la consistencia entre módulos.

### Decoradores para el autoenlace

Para habilitar la definición automática de relaciones de servicio (autoenlace), nuestra API utiliza decoradores semánticos que proporcionan información sobre el tipo de servicio que se está utilizando. Actualmente, tenemos los siguientes decoradores:

- **@isUseCase()**: Se utiliza para decorar casos de uso dentro de la capa de aplicación.
- **@isDomainImplementation('Abstracción')**: Se utiliza para decorar implementaciones de los puertos definidos por nuestro dominio. Es necesario indicar la clase abstracta que se implementará.
- **@isController({ method: 'POST' | 'GET' | 'PUT' | 'DELETE', path: string, schema?: Record<string, unknown> })**: Se utiliza para decorar controladores. Con la propiedad `method`, se define el verbo HTTP en el que estará disponible el endpoint. Con `path`, se define la ruta del endpoint y con `schema`, se definen los tipos de cuerpo para la validación a través de las funcionalidades de Fastify.

#### Ejemplos de uso

##### Implementación de un controlador:

```typescript
@isController({
    method: 'POST',
    path: '/users',
})
export class SignUpController {
    protected request!: FastifyRequest;
    protected response!: FastifyReply;

    public constructor(private readonly signUp: SignUp) {
    }

    public async execute(): Promise<void> {
        const body = this.request.body;

        await this.signUp.run(body);

        await this.response.code(201).send();
    }
}
```

##### Implementación de un caso de uso:

```typescript
@isUseCase()
export class SignUp {
    public constructor(private readonly repository: UserRepository) {
    }

    public async run(command: SignUpCommand): Promise<void> {
        // lógica...
    }
}
```

##### Implementación de un repositorio:

```typescript
export abstract class UserRepository { // clase abstracta en lugar de interfaz
    public abstract find(id: UserId): Promise<User | undefined>;

    public abstract findByEmail(email: Email): Promise<User | undefined>;

    public abstract save(customer: User): Promise<void>;
}

@isDomainImplementation(UserRepository)
export class MongoDbUserRepository implements UserRepository {
    public async find(id: UserId): Promise<User | undefined> {
    }

    public async findByEmail(email: Email): Promise<User | undefined> {
    }

    public async save(user: User): Promise<void> {
    }
}
```

## Desarrollo y pruebas

El directorio `test/` contiene pruebas unitarias, pruebas de integración o pruebas de extremo a extremo para el módulo Core API. Garantizamos pruebas exhaustivas para mantener la calidad y confiabilidad del código.

## Configuración y herramientas

- **package.json**: Archivo de configuración que especifica dependencias y scripts necesarios para el proyecto.
- **tsconfig.json**: Archivo de configuración TypeScript que define opciones de compilador y estructura del proyecto.
- **vitest.config.mts**: Archivo de configuración para Vitest, nuestro marco de pruebas.
- **README.md**: Este documento, proporcionando una visión general del módulo Core API.

## Conclusión

El módulo Core API sirve como la base de nuestra aplicación, incorporando la lógica empresarial central y promoviendo la modularidad y escalabilidad. Al adherirse a los principios de DDD y aprovechar los componentes compartidos, aseguramos una arquitectura sólida y flexible capaz de cumplir con los requisitos comerciales en constante evolución.