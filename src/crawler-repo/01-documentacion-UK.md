# API Core Documentation

## Introduction

Welcome to the documentation of the Core API module. This module forms the backbone of our API infrastructure, adhering
to principles of Domain-Driven Design (DDD) and ensuring scalability and maintainability.

## Directory Structure

```
/
|-- api/
|   |-- src/
|   |   |-- Apps
|   |   |   |-- (Contains auxiliary scripts and server components)
|   |   |-- Contexts
|   |   |   |-- Core
|   |   |   |   |-- (Contains core business logic modules)
|   |   |   |-- Shared
|   |   |   |   |-- (Contains shared components)
|   |-- test/
|   |-- package.json
|   |-- tsconfig.json
|   |-- vitest.config.mts
|   |-- README.md
|   |-- ...
```

- **src/Apps/**: Contains auxiliary scripts and server components necessary for the proper functioning of the API.
- **src/Contexts/**: Defines different bounded contexts of our API. The "Core" directory houses the core business logic
  modules, while the "Shared" directory contains components potentially reusable across different contexts.

## Purpose

The Core API module is designed to encapsulate the core business logic of our application. By adhering to DDD principles
and separating concerns, we ensure a modular, scalable, and maintainable architecture.

## Key Components

### Core Context

The `src/Contexts/Core/` directory contains modules that represent the core business logic of our application. These
modules encapsulate domain entities, services, repositories, and other components essential for fulfilling business
requirements.

### Shared Components

The `src/Contexts/Shared/` directory contains components that are potentially reusable across different contexts within
our API. These components promote code reuse and maintain consistency across modules.

### Decorators for Autowiring

To enable automatic service relationship definition (autowiring), our API utilizes semantic decorators that provide
information about the type of service being used. We currently have the following decorators:

- **@isUseCase()**: Used to decorate use cases within the application layer.
- **@isDomainImplementation('Abstraction')**: Used to decorate implementations of the ports defined by our domain. It's
  necessary to indicate the abstract class that will be implemented.
- **@isController({ method: 'POST' | 'GET' | 'PUT' | 'DELETE', path: string, schema?: Record<string, unknown> })**: Used
  to decorate controllers. With the `method` property, the HTTP verb in which the endpoint will be available is defined.
  With `path`, the path of the endpoint is defined, and with `schema`, the body types are defined for validation through
  Fastify functionalities.

#### Examples of Usage

##### Implementation of a Controller:

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

##### Implementation of a Use Case:

```typescript
@isUseCase()
export class SignUp {
    public constructor(private readonly repository: UserRepository) {
    }

    public async run(command: SignUpCommand): Promise<void> {
        // logic...
    }
}
```

##### Implementation of a Repository:

```typescript
export abstract class UserRepository { // abstract class insted interface
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

## Development and Testing

The `test/` directory contains unit tests, integration tests, or end-to-end tests for the Core API module. We ensure
thorough testing to maintain code quality and reliability.

## Configuration and Tooling

- **package.json**: Configuration file specifying dependencies and scripts necessary for the project.
- **tsconfig.json**: TypeScript configuration file defining compiler options and project structure.
- **vitest.config.mts**: Configuration file for Vitest, our testing framework.
- **README.md**: This document, providing an overview of the Core API module.

## Conclusion

The Core API module serves as the foundation of our application, embodying the core business logic and promoting
modularity and scalability. By adhering to DDD principles and leveraging shared components, we ensure a robust and
flexible architecture capable of meeting evolving business requirements.