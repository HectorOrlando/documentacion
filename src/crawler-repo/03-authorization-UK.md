# API AUTHORIZATION

This module provides the authorization logic for the API.

## Overview

Authorization is a critical aspect of any application, ensuring that users have
the necessary permissions to access specific resources. This module provides the
necessary functionality to authenticate and authorize users, ensuring that only
authorized users can access protected resources.

### Authorization vs Authentication

Authorization and authentication are two distinct concepts that are often confused.
Authentication is the process of verifying the identity of a user, while authorization
is the process of determining what actions a user is allowed to perform. In other words,
authentication is about verifying who you are, while authorization is about determining
what you can do.

### Authorization in our API

Our API is based on Domain-driven Design (DDD) principles, with each module representing
a distinct domain within the application. So we believe that authorization should be
treated as a **shared** concern that applies to all domains. To achieve this, we have
a centralized authorization module that enforces access control policies across all domains.

The authorization module is responsible for enforcing access control policies within these domains,
ensuring that users can only access resources that they are authorized to access.

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

## Key Components

In Core/Security/Domain:

- **ResourceAuthorizer**: The main service responsible for authorizing access to resources.
- **ActionEnum**: An enumeration of actions that can be performed on resources.
- **Credentials**: Represents the credentials of a user.
- **Permission**: Represents a permission that grants access to a resource.
- **PermissionRepository**: Defines the interface for permission repositories.
- **Policy**: Represents an access control policy.
- **ResourceEnum**: An enumeration of resources that can be accessed.

In Core/Security/Infrastructure:

- **Permissions**: Contains predefined permissions for different resources.
- **InMemoryPermissionRepository**: An in-memory implementation of the PermissionRepository interface.

In Shared/Application:

- **AuthorizedApplicationService**: A base class for application services that require authorization.

In Shared/Domain/Security/Authorizers:

- **UserAuthorizer**: This authorizer is responsible for checking that the user role can perform the action defined in
  ActionEnum for the particular resource defined in ResourceEnum.
- **NoResourceAuthorizer**: This authorizer shall be used when the resource does not require any authorization.

## Authorization flow from Use Cases

We have implemented an abstract class called `AuthorizedApplicationService` that looks like this:

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

In this class, we have the following checks:

1. We declare the `AuthorizationCredentials` interface that must be implemented by the command.
2. We must always define the generic type `AuthorizedResource` that will be used to authorize the resource.
3. If our use case will return a response, we must define the generic type `Response`.
4. We must inject the `UserAuthorizer` into the constructor of the class.
5. We must implement the `policy` method that will return the policy that will be used to authorize the user.
6. We must implement the `getResourceId` method that will return the resource id that will be used to authorize the
   user.
7. We must implement the `resourceAuthorizer` method that will return the resource authorizer that will be used to
   authorize the user.
8. We must implement the `run` method that will authorize the user and the resource.

## How to Use

We start from the following scenario:
As a user, I want to delete a shopping list.
Currently, our use cases are as follows:

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

The current implementation does not check if the user has the necessary permissions to delete a shopping list.
To enforce authorization, we need to add an authorization check to the use case.
The first step must be to define the permissions required to delete a shopping list.

1. We must create the action within the ActionEnum:

```typescript
export enum ActionEnum {
    DELETE = 'DELETE',
}
```

2. We must create the resource within the ResourceEnum:

```typescript
export enum ResourceEnum {
    SHOPPING_LIST = 'SHOPPING_LIST',
}
```

3. We must create the permission within the Permissions:

```typescript
export const deleteShoppingListPermission: Permission = {
    action: ActionEnum.DELETE,
    resource: ResourceEnum.SHOPPING_LIST,
    roles: [UserPlanEnum.FREE, UserPlanEnum.PRO]
};
```

4. We must export the permissions from the constant defined in Permissions/index.ts:

```typescript
import {deleteShoppingListPermission} from './ShoppingListPermission';

export const policies: Permission[] = [
    // another permissions...
    deleteShoppingListPermission,
];
```

5. We must create the resource authorizer for the shopping list:

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

6. We must extend our use case from the `AuthorizedApplicationService`:

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

In this way, we have added authorization to the use case. Now, when a user tries to delete a shopping list, the system
will check if the user has the necessary permissions to perform this action.

## Conclusion

Authorization is a critical aspect of any application, ensuring that users have the necessary permissions to access
specific resources. By centralizing authorization logic within a shared module, we can enforce access control policies
across all domains, ensuring that only authorized users can access protected resources.

By following the steps outlined in this document, you can easily add authorization to your use cases, ensuring that your
application remains secure and compliant with access control policies.
