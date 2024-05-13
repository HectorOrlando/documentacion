# AUTORIZACIÓN DE API

Este módulo proporciona la lógica de autorización para la API.

## Visión general

La autorización es un aspecto crítico de cualquier aplicación, asegurando que los usuarios tengan los permisos necesarios para acceder a recursos específicos. Este módulo proporciona la funcionalidad necesaria para autenticar y autorizar a los usuarios, garantizando que solo los usuarios autorizados puedan acceder a recursos protegidos.

### Autorización vs Autenticación

La autorización y la autenticación son dos conceptos distintos que a menudo se confunden. La autenticación es el proceso de verificar la identidad de un usuario, mientras que la autorización es el proceso de determinar qué acciones puede realizar un usuario. En otras palabras, la autenticación se trata de verificar quién eres, mientras que la autorización se trata de determinar qué puedes hacer.

### Autorización en nuestra API

Nuestra API se basa en los principios del Diseño Dirigido por el Dominio (DDD), con cada módulo representando un dominio distinto dentro de la aplicación. Por lo tanto, creemos que la autorización debería ser tratada como una preocupación **compartida** que se aplica a todos los dominios. Para lograr esto, tenemos un módulo de autorización centralizado que hace cumplir las políticas de control de acceso en todos los dominios.

El módulo de autorización es responsable de hacer cumplir las políticas de control de acceso dentro de estos dominios, asegurando que los usuarios solo puedan acceder a recursos a los que estén autorizados.

```
/
|-- api/
|   |-- src/
|   |   |-- Contexts
|   |   |   |-- Core
|   |   |   |   |-- Security
|   |   |   |   |   |-- Domain
|   |   |   |   |   |   |-- Services
|   |   |   |   |   |   |   |-- ResourceAuthorizer.ts
|   |   |   |   |   |   |-- ActionEnum.ts
|   |   |   |   |   |   |-- Credentials.ts
|   |   |   |   |   |   |-- Permission.ts
|   |   |   |   |   |   |-- PermissionRepository.ts
|   |   |   |   |   |   |-- Policy.ts
|   |   |   |   |   |   |-- ResourceEnum.ts
|   |   |   |   |   |-- Infrastructure
|   |   |   |   |   |   |-- Permissions
|   |   |   |   |   |   |   |-- ShoppingListPermission.ts
|   |   |   |   |   |   |-- InMemoryPermissionRepository.ts
|   |   |   |-- Shared
|   |   |   |   |-- Application
|   |   |   |   |   |-- AuthorizedApplicationService.ts
|   |   |   |   |-- Domain
|   |   |   |   |   |-- Security
|   |   |   |   |   |   |-- Authorizers
|   |   |   |   |   |   |   |-- UserAuthorizer.ts
|   |   |   |   |   |   |   |-- NoResourceAuthorizer.ts
|   |   |   |-- ...
```

## Componentes Clave

En Core/Security/Domain:

- **ResourceAuthorizer**: El servicio principal responsable de autorizar el acceso a recursos.
- **ActionEnum**: Una enumeración de acciones que se pueden realizar en recursos.
- **Credentials**: Representa las credenciales de un usuario.
- **Permission**: Representa un permiso que otorga acceso a un recurso.
- **PermissionRepository**: Define la interfaz para los repositorios de permisos.
- **Policy**: Representa una política de control de acceso.
- **ResourceEnum**: Una enumeración de recursos que se pueden acceder.

En Core/Security/Infrastructure:

- **Permissions**: Contiene permisos predefinidos para diferentes recursos.
- **InMemoryPermissionRepository**: Una implementación en memoria de la interfaz PermissionRepository.

En Shared/Application:

- **AuthorizedApplicationService**: Una clase base para los servicios de aplicación que requieren autorización.

En Shared/Domain/Security/Authorizers:

- **UserAuthorizer**: Este autorizador es responsable de verificar que el rol del usuario pueda realizar la acción definida en ActionEnum para el recurso particular definido en ResourceEnum.
- **NoResourceAuthorizer**: Este autorizador se utilizará cuando el recurso no requiera ninguna autorización.

## Flujo de Autorización desde Casos de Uso

Hemos implementado una clase abstracta llamada `AuthorizedApplicationService` que se ve así:

```typescript
export interface AuthorizationCredentials {
    userId: string;
}

@isUseCase()
export abstract class AuthorizedApplicationService<
    Command extends AuthorizationCredentials,
    AuthorizedResource = undefined,
    Response = void,
> {
    protected user?: User;
    protected resource?: AuthorizedResource;

    protected constructor(private readonly userAuthorizer: UserAuthorizer) {
    }

    protected abstract policy(): Policy;

    protected abstract getResourceId(command: Command): IdValueObject;

    protected abstract resourceAuthorizer(): ResourceAuthorizer<AuthorizedResource>;

    public async run(command: Command): Promise<Response> {
        if (AuthorizedApplicationService.isNoPolicy(this.policy())) {
            return undefined as Response;
        }

        if (undefined === command.userId) {
            throw UnauthorizedError.causeUserIsNotDefined();
        }

        const userId = UserId.of(command.userId);

        const credentials = await this.userAuthorizer.authorize(userId, this.policy());

        this.user = credentials?.user;

        this.resource = await this.resourceAuthorizer().authorize(
            userId,
            this.getResourceId(command),
        );

        return undefined as Response;
    }

    private static isNoPolicy(policy: Policy): boolean {
        return policy.action === NO_POLICY.action && policy.resource === NO_POLICY.resource;
    }
}
```

En esta clase, realizamos las siguientes comprobaciones:

1. Declaramos la interfaz `AuthorizationCredentials` que debe ser implementada por el comando.
2. Siempre debemos definir el tipo genérico `AuthorizedResource` que se utilizará para autorizar el recurso.
3. Si nuestro caso de uso devolverá una respuesta, debemos definir el tipo genérico `Response`.
4. Debemos inyectar el `UserAuthorizer` en el constructor de la clase.
5. Debemos implementar el método `policy` que devolverá la política que se utilizará para autorizar al usuario.
6. Debemos implementar el método `getResourceId` que devolverá el ID del recurso que se utilizará para autorizar al usuario.
7. Debemos implementar el método `resourceAuthorizer` que devolverá el autorizador de recursos que se utilizará para autorizar al usuario.
8. Debemos implementar el método `run` que autorizará al usuario y al recurso.

## Cómo Usar

Partimos del siguiente escenario:
Como usuario, quiero eliminar

 una lista de compras.
Actualmente, nuestros casos de uso son los siguientes:

```typescript
export type Command = {
    id: string;
};

@isUseCase()
export class DeleteShoppingList {
    public constructor(private readonly repository: ShoppingListRepository) {
    }

    public async run(command: Command): Promise<void> {
        const shoppingList = await this.repository.find(ShoppingListId.of(command.id));

        shoppingList.delete();

        await this.repository.delete(shoppingList);
    }
}
```

La implementación actual no verifica si el usuario tiene los permisos necesarios para eliminar una lista de compras. Para hacer cumplir la autorización, necesitamos agregar una verificación de autorización al caso de uso. El primer paso debe ser definir los permisos necesarios para eliminar una lista de compras.

1. Debemos crear la acción dentro de ActionEnum:

```typescript
export enum ActionEnum {
    DELETE = 'DELETE',
}
```

2. Debemos crear el recurso dentro de ResourceEnum:

```typescript
export enum ResourceEnum {
    SHOPPING_LIST = 'SHOPPING_LIST',
}
```

3. Debemos crear el permiso dentro de Permissions:

```typescript
export const deleteShoppingListPermission: Permission = {
    action: ActionEnum.DELETE,
    resource: ResourceEnum.SHOPPING_LIST,
    roles: [UserPlanEnum.FREE, UserPlanEnum.PRO]
};
```

4. Debemos exportar los permisos desde la constante definida en Permissions/index.ts:

```typescript
import {deleteShoppingListPermission} from './ShoppingListPermission';

export const policies: Permission[] = [
    // otros permisos...
    deleteShoppingListPermission,
];
```

5. Debemos crear el autorizador de recursos para la lista de compras:

```typescript
@isDomainAuthorizer()
export class OwnerShoppingListAuthorizer extends ResourceAuthorizer<ShoppingList> {
    private readonly shoppingListFinder: ShoppingListFinder;

    public constructor(shoppingListRepository: ShoppingListRepository) {
        super();

        this.shoppingListFinder = new ShoppingListFinder(shoppingListRepository);
    }

    protected findResource(resourceId: ShoppingListId): Promise<ShoppingList> {
        return this.shoppingListFinder.findShoppingListOrThrow(resourceId);
    }

    protected grantPermissions(userId: UserId, resource: ShoppingList): boolean {
        return resource.userId.equals(userId);
    }
}
```

6. Debemos extender nuestro caso de uso desde `AuthorizedApplicationService`:

```typescript
export type DeleteShoppingListCommand = AuthorizationCredentials & {
    id: string;
};

@isUseCase()
export class DeleteShoppingList extends AuthorizedApplicationService<
    DeleteShoppingListCommand,
    ShoppingList
> {
    protected declare resource: ShoppingList;

    public constructor(
        userAuthorizer: UserAuthorizer,
        private readonly shoppingListAuthorizer: OwnerShoppingListAuthorizer,
        private readonly repository: ShoppingListRepository,
    ) {
        super(userAuthorizer);
    }

    protected policy(): Policy {
        return {
            action: ActionEnum.DELETE,
            resource: ResourceEnum.SHOPPING_LIST,
        };
    }

    protected getResourceId(command: DeleteShoppingListCommand): ShoppingListId {
        return ShoppingListId.of(command.id);
    }

    protected resourceAuthorizer(): OwnerShoppingListAuthorizer {
        return this.shoppingListAuthorizer;
    }

    public async run(command: DeleteShoppingListCommand): Promise<void> {
        await super.run(command);

        const shoppingList = this.resource;

        shoppingList.delete();

        await this.repository.delete(shoppingList);
    }
}
```

De esta manera, hemos agregado autorización al caso de uso. Ahora, cuando un usuario intenta eliminar una lista de compras, el sistema verificará si el usuario tiene los permisos necesarios para realizar esta acción.

## Conclusión

La autorización es un aspecto crítico de cualquier aplicación, asegurando que los usuarios tengan los permisos necesarios para acceder a recursos específicos. Al centralizar la lógica de autorización dentro de un módulo compartido, podemos hacer cumplir políticas de control de acceso en todos los dominios, asegurando que solo los usuarios autorizados puedan acceder a recursos protegidos.

Siguiendo los pasos descritos en este documento, puede agregar fácilmente autorización a sus casos de uso, asegurando que su aplicación permanezca segura y cumpla con las políticas de control de acceso.