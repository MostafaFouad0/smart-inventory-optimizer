
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CSVStatus
 * 
 */
export type CSVStatus = $Result.DefaultSelection<Prisma.$CSVStatusPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Batch
 * 
 */
export type Batch = $Result.DefaultSelection<Prisma.$BatchPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Businesses
 * const businesses = await prisma.business.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Businesses
   * const businesses = await prisma.business.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cSVStatus`: Exposes CRUD operations for the **CSVStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CSVStatuses
    * const cSVStatuses = await prisma.cSVStatus.findMany()
    * ```
    */
  get cSVStatus(): Prisma.CSVStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batch`: Exposes CRUD operations for the **Batch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batches
    * const batches = await prisma.batch.findMany()
    * ```
    */
  get batch(): Prisma.BatchDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Business: 'Business',
    User: 'User',
    CSVStatus: 'CSVStatus',
    Notification: 'Notification',
    Transaction: 'Transaction',
    Category: 'Category',
    Product: 'Product',
    Batch: 'Batch'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "business" | "user" | "cSVStatus" | "notification" | "transaction" | "category" | "product" | "batch"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CSVStatus: {
        payload: Prisma.$CSVStatusPayload<ExtArgs>
        fields: Prisma.CSVStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CSVStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CSVStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVStatusPayload>
          }
          findFirst: {
            args: Prisma.CSVStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CSVStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVStatusPayload>
          }
          findMany: {
            args: Prisma.CSVStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVStatusPayload>[]
          }
          create: {
            args: Prisma.CSVStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVStatusPayload>
          }
          createMany: {
            args: Prisma.CSVStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CSVStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVStatusPayload>[]
          }
          delete: {
            args: Prisma.CSVStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVStatusPayload>
          }
          update: {
            args: Prisma.CSVStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVStatusPayload>
          }
          deleteMany: {
            args: Prisma.CSVStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CSVStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CSVStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVStatusPayload>[]
          }
          upsert: {
            args: Prisma.CSVStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVStatusPayload>
          }
          aggregate: {
            args: Prisma.CSVStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCSVStatus>
          }
          groupBy: {
            args: Prisma.CSVStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<CSVStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.CSVStatusCountArgs<ExtArgs>
            result: $Utils.Optional<CSVStatusCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Batch: {
        payload: Prisma.$BatchPayload<ExtArgs>
        fields: Prisma.BatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findFirst: {
            args: Prisma.BatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findMany: {
            args: Prisma.BatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          create: {
            args: Prisma.BatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          createMany: {
            args: Prisma.BatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          delete: {
            args: Prisma.BatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          update: {
            args: Prisma.BatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          deleteMany: {
            args: Prisma.BatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          upsert: {
            args: Prisma.BatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          aggregate: {
            args: Prisma.BatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatch>
          }
          groupBy: {
            args: Prisma.BatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchCountArgs<ExtArgs>
            result: $Utils.Optional<BatchCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    business?: BusinessOmit
    user?: UserOmit
    cSVStatus?: CSVStatusOmit
    notification?: NotificationOmit
    transaction?: TransactionOmit
    category?: CategoryOmit
    product?: ProductOmit
    batch?: BatchOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    User: number
    Batch: number
    CSVStatus: number
    Notification: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | BusinessCountOutputTypeCountUserArgs
    Batch?: boolean | BusinessCountOutputTypeCountBatchArgs
    CSVStatus?: boolean | BusinessCountOutputTypeCountCSVStatusArgs
    Notification?: boolean | BusinessCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountBatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountCSVStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CSVStatusWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Porduct: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Porduct?: boolean | CategoryCountOutputTypeCountPorductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPorductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    Batch: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Batch?: boolean | ProductCountOutputTypeCountBatchArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountBatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
  }


  /**
   * Count Type BatchCountOutputType
   */

  export type BatchCountOutputType = {
    Transaction: number
  }

  export type BatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | BatchCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchCountOutputType
     */
    select?: BatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessMinAggregateOutputType = {
    id: string | null
    name: string | null
    establishmentDate: Date | null
    description: string | null
    image: string | null
    createdAt: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: string | null
    name: string | null
    establishmentDate: Date | null
    description: string | null
    image: string | null
    createdAt: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    name: number
    establishmentDate: number
    description: number
    image: number
    createdAt: number
    _all: number
  }


  export type BusinessMinAggregateInputType = {
    id?: true
    name?: true
    establishmentDate?: true
    description?: true
    image?: true
    createdAt?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    name?: true
    establishmentDate?: true
    description?: true
    image?: true
    createdAt?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    name?: true
    establishmentDate?: true
    description?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: string
    name: string
    establishmentDate: Date
    description: string
    image: string
    createdAt: Date
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    establishmentDate?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    User?: boolean | Business$UserArgs<ExtArgs>
    Batch?: boolean | Business$BatchArgs<ExtArgs>
    CSVStatus?: boolean | Business$CSVStatusArgs<ExtArgs>
    Notification?: boolean | Business$NotificationArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    establishmentDate?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    establishmentDate?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    name?: boolean
    establishmentDate?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type BusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "establishmentDate" | "description" | "image" | "createdAt", ExtArgs["result"]["business"]>
  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Business$UserArgs<ExtArgs>
    Batch?: boolean | Business$BatchArgs<ExtArgs>
    CSVStatus?: boolean | Business$CSVStatusArgs<ExtArgs>
    Notification?: boolean | Business$NotificationArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusinessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
      Batch: Prisma.$BatchPayload<ExtArgs>[]
      CSVStatus: Prisma.$CSVStatusPayload<ExtArgs>[]
      Notification: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      establishmentDate: Date
      description: string
      image: string
      createdAt: Date
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {BusinessUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Business$UserArgs<ExtArgs> = {}>(args?: Subset<T, Business$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Batch<T extends Business$BatchArgs<ExtArgs> = {}>(args?: Subset<T, Business$BatchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    CSVStatus<T extends Business$CSVStatusArgs<ExtArgs> = {}>(args?: Subset<T, Business$CSVStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CSVStatusPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Notification<T extends Business$NotificationArgs<ExtArgs> = {}>(args?: Subset<T, Business$NotificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Business model
   */ 
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'String'>
    readonly name: FieldRef<"Business", 'String'>
    readonly establishmentDate: FieldRef<"Business", 'DateTime'>
    readonly description: FieldRef<"Business", 'String'>
    readonly image: FieldRef<"Business", 'String'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business updateManyAndReturn
   */
  export type BusinessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Business.User
   */
  export type Business$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Business.Batch
   */
  export type Business$BatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    cursor?: BatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Business.CSVStatus
   */
  export type Business$CSVStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusInclude<ExtArgs> | null
    where?: CSVStatusWhereInput
    orderBy?: CSVStatusOrderByWithRelationInput | CSVStatusOrderByWithRelationInput[]
    cursor?: CSVStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CSVStatusScalarFieldEnum | CSVStatusScalarFieldEnum[]
  }

  /**
   * Business.Notification
   */
  export type Business$NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    username: string | null
    password: string | null
    phoneNumber: string | null
    admin: boolean | null
    createdAt: Date | null
    businessId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    username: string | null
    password: string | null
    phoneNumber: string | null
    admin: boolean | null
    createdAt: Date | null
    businessId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    username: number
    password: number
    phoneNumber: number
    admin: number
    createdAt: number
    businessId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    phoneNumber?: true
    admin?: true
    createdAt?: true
    businessId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    phoneNumber?: true
    admin?: true
    createdAt?: true
    businessId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    phoneNumber?: true
    admin?: true
    createdAt?: true
    businessId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    username: string
    password: string
    phoneNumber: string
    admin: boolean
    createdAt: Date
    businessId: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phoneNumber?: boolean
    admin?: boolean
    createdAt?: boolean
    businessId?: boolean
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phoneNumber?: boolean
    admin?: boolean
    createdAt?: boolean
    businessId?: boolean
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phoneNumber?: boolean
    admin?: boolean
    createdAt?: boolean
    businessId?: boolean
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phoneNumber?: boolean
    admin?: boolean
    createdAt?: boolean
    businessId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "username" | "password" | "phoneNumber" | "admin" | "createdAt" | "businessId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      businessRelation: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      username: string
      password: string
      phoneNumber: string
      admin: boolean
      createdAt: Date
      businessId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businessRelation<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly admin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly businessId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CSVStatus
   */

  export type AggregateCSVStatus = {
    _count: CSVStatusCountAggregateOutputType | null
    _avg: CSVStatusAvgAggregateOutputType | null
    _sum: CSVStatusSumAggregateOutputType | null
    _min: CSVStatusMinAggregateOutputType | null
    _max: CSVStatusMaxAggregateOutputType | null
  }

  export type CSVStatusAvgAggregateOutputType = {
    id: number | null
  }

  export type CSVStatusSumAggregateOutputType = {
    id: number | null
  }

  export type CSVStatusMinAggregateOutputType = {
    id: number | null
    status: string | null
    uploadedDate: Date | null
    path: string | null
    businessId: string | null
  }

  export type CSVStatusMaxAggregateOutputType = {
    id: number | null
    status: string | null
    uploadedDate: Date | null
    path: string | null
    businessId: string | null
  }

  export type CSVStatusCountAggregateOutputType = {
    id: number
    status: number
    uploadedDate: number
    path: number
    businessId: number
    _all: number
  }


  export type CSVStatusAvgAggregateInputType = {
    id?: true
  }

  export type CSVStatusSumAggregateInputType = {
    id?: true
  }

  export type CSVStatusMinAggregateInputType = {
    id?: true
    status?: true
    uploadedDate?: true
    path?: true
    businessId?: true
  }

  export type CSVStatusMaxAggregateInputType = {
    id?: true
    status?: true
    uploadedDate?: true
    path?: true
    businessId?: true
  }

  export type CSVStatusCountAggregateInputType = {
    id?: true
    status?: true
    uploadedDate?: true
    path?: true
    businessId?: true
    _all?: true
  }

  export type CSVStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CSVStatus to aggregate.
     */
    where?: CSVStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CSVStatuses to fetch.
     */
    orderBy?: CSVStatusOrderByWithRelationInput | CSVStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CSVStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CSVStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CSVStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CSVStatuses
    **/
    _count?: true | CSVStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CSVStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CSVStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CSVStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CSVStatusMaxAggregateInputType
  }

  export type GetCSVStatusAggregateType<T extends CSVStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateCSVStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCSVStatus[P]>
      : GetScalarType<T[P], AggregateCSVStatus[P]>
  }




  export type CSVStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CSVStatusWhereInput
    orderBy?: CSVStatusOrderByWithAggregationInput | CSVStatusOrderByWithAggregationInput[]
    by: CSVStatusScalarFieldEnum[] | CSVStatusScalarFieldEnum
    having?: CSVStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CSVStatusCountAggregateInputType | true
    _avg?: CSVStatusAvgAggregateInputType
    _sum?: CSVStatusSumAggregateInputType
    _min?: CSVStatusMinAggregateInputType
    _max?: CSVStatusMaxAggregateInputType
  }

  export type CSVStatusGroupByOutputType = {
    id: number
    status: string
    uploadedDate: Date
    path: string
    businessId: string
    _count: CSVStatusCountAggregateOutputType | null
    _avg: CSVStatusAvgAggregateOutputType | null
    _sum: CSVStatusSumAggregateOutputType | null
    _min: CSVStatusMinAggregateOutputType | null
    _max: CSVStatusMaxAggregateOutputType | null
  }

  type GetCSVStatusGroupByPayload<T extends CSVStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CSVStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CSVStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CSVStatusGroupByOutputType[P]>
            : GetScalarType<T[P], CSVStatusGroupByOutputType[P]>
        }
      >
    >


  export type CSVStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    uploadedDate?: boolean
    path?: boolean
    businessId?: boolean
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cSVStatus"]>

  export type CSVStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    uploadedDate?: boolean
    path?: boolean
    businessId?: boolean
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cSVStatus"]>

  export type CSVStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    uploadedDate?: boolean
    path?: boolean
    businessId?: boolean
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cSVStatus"]>

  export type CSVStatusSelectScalar = {
    id?: boolean
    status?: boolean
    uploadedDate?: boolean
    path?: boolean
    businessId?: boolean
  }

  export type CSVStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "uploadedDate" | "path" | "businessId", ExtArgs["result"]["cSVStatus"]>
  export type CSVStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type CSVStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type CSVStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $CSVStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CSVStatus"
    objects: {
      businessRelation: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      uploadedDate: Date
      path: string
      businessId: string
    }, ExtArgs["result"]["cSVStatus"]>
    composites: {}
  }

  type CSVStatusGetPayload<S extends boolean | null | undefined | CSVStatusDefaultArgs> = $Result.GetResult<Prisma.$CSVStatusPayload, S>

  type CSVStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CSVStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CSVStatusCountAggregateInputType | true
    }

  export interface CSVStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CSVStatus'], meta: { name: 'CSVStatus' } }
    /**
     * Find zero or one CSVStatus that matches the filter.
     * @param {CSVStatusFindUniqueArgs} args - Arguments to find a CSVStatus
     * @example
     * // Get one CSVStatus
     * const cSVStatus = await prisma.cSVStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CSVStatusFindUniqueArgs>(args: SelectSubset<T, CSVStatusFindUniqueArgs<ExtArgs>>): Prisma__CSVStatusClient<$Result.GetResult<Prisma.$CSVStatusPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CSVStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CSVStatusFindUniqueOrThrowArgs} args - Arguments to find a CSVStatus
     * @example
     * // Get one CSVStatus
     * const cSVStatus = await prisma.cSVStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CSVStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, CSVStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CSVStatusClient<$Result.GetResult<Prisma.$CSVStatusPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CSVStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVStatusFindFirstArgs} args - Arguments to find a CSVStatus
     * @example
     * // Get one CSVStatus
     * const cSVStatus = await prisma.cSVStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CSVStatusFindFirstArgs>(args?: SelectSubset<T, CSVStatusFindFirstArgs<ExtArgs>>): Prisma__CSVStatusClient<$Result.GetResult<Prisma.$CSVStatusPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CSVStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVStatusFindFirstOrThrowArgs} args - Arguments to find a CSVStatus
     * @example
     * // Get one CSVStatus
     * const cSVStatus = await prisma.cSVStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CSVStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, CSVStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__CSVStatusClient<$Result.GetResult<Prisma.$CSVStatusPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CSVStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CSVStatuses
     * const cSVStatuses = await prisma.cSVStatus.findMany()
     * 
     * // Get first 10 CSVStatuses
     * const cSVStatuses = await prisma.cSVStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cSVStatusWithIdOnly = await prisma.cSVStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CSVStatusFindManyArgs>(args?: SelectSubset<T, CSVStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CSVStatusPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CSVStatus.
     * @param {CSVStatusCreateArgs} args - Arguments to create a CSVStatus.
     * @example
     * // Create one CSVStatus
     * const CSVStatus = await prisma.cSVStatus.create({
     *   data: {
     *     // ... data to create a CSVStatus
     *   }
     * })
     * 
     */
    create<T extends CSVStatusCreateArgs>(args: SelectSubset<T, CSVStatusCreateArgs<ExtArgs>>): Prisma__CSVStatusClient<$Result.GetResult<Prisma.$CSVStatusPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CSVStatuses.
     * @param {CSVStatusCreateManyArgs} args - Arguments to create many CSVStatuses.
     * @example
     * // Create many CSVStatuses
     * const cSVStatus = await prisma.cSVStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CSVStatusCreateManyArgs>(args?: SelectSubset<T, CSVStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CSVStatuses and returns the data saved in the database.
     * @param {CSVStatusCreateManyAndReturnArgs} args - Arguments to create many CSVStatuses.
     * @example
     * // Create many CSVStatuses
     * const cSVStatus = await prisma.cSVStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CSVStatuses and only return the `id`
     * const cSVStatusWithIdOnly = await prisma.cSVStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CSVStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, CSVStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CSVStatusPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CSVStatus.
     * @param {CSVStatusDeleteArgs} args - Arguments to delete one CSVStatus.
     * @example
     * // Delete one CSVStatus
     * const CSVStatus = await prisma.cSVStatus.delete({
     *   where: {
     *     // ... filter to delete one CSVStatus
     *   }
     * })
     * 
     */
    delete<T extends CSVStatusDeleteArgs>(args: SelectSubset<T, CSVStatusDeleteArgs<ExtArgs>>): Prisma__CSVStatusClient<$Result.GetResult<Prisma.$CSVStatusPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CSVStatus.
     * @param {CSVStatusUpdateArgs} args - Arguments to update one CSVStatus.
     * @example
     * // Update one CSVStatus
     * const cSVStatus = await prisma.cSVStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CSVStatusUpdateArgs>(args: SelectSubset<T, CSVStatusUpdateArgs<ExtArgs>>): Prisma__CSVStatusClient<$Result.GetResult<Prisma.$CSVStatusPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CSVStatuses.
     * @param {CSVStatusDeleteManyArgs} args - Arguments to filter CSVStatuses to delete.
     * @example
     * // Delete a few CSVStatuses
     * const { count } = await prisma.cSVStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CSVStatusDeleteManyArgs>(args?: SelectSubset<T, CSVStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CSVStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CSVStatuses
     * const cSVStatus = await prisma.cSVStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CSVStatusUpdateManyArgs>(args: SelectSubset<T, CSVStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CSVStatuses and returns the data updated in the database.
     * @param {CSVStatusUpdateManyAndReturnArgs} args - Arguments to update many CSVStatuses.
     * @example
     * // Update many CSVStatuses
     * const cSVStatus = await prisma.cSVStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CSVStatuses and only return the `id`
     * const cSVStatusWithIdOnly = await prisma.cSVStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CSVStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, CSVStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CSVStatusPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CSVStatus.
     * @param {CSVStatusUpsertArgs} args - Arguments to update or create a CSVStatus.
     * @example
     * // Update or create a CSVStatus
     * const cSVStatus = await prisma.cSVStatus.upsert({
     *   create: {
     *     // ... data to create a CSVStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CSVStatus we want to update
     *   }
     * })
     */
    upsert<T extends CSVStatusUpsertArgs>(args: SelectSubset<T, CSVStatusUpsertArgs<ExtArgs>>): Prisma__CSVStatusClient<$Result.GetResult<Prisma.$CSVStatusPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CSVStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVStatusCountArgs} args - Arguments to filter CSVStatuses to count.
     * @example
     * // Count the number of CSVStatuses
     * const count = await prisma.cSVStatus.count({
     *   where: {
     *     // ... the filter for the CSVStatuses we want to count
     *   }
     * })
    **/
    count<T extends CSVStatusCountArgs>(
      args?: Subset<T, CSVStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CSVStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CSVStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CSVStatusAggregateArgs>(args: Subset<T, CSVStatusAggregateArgs>): Prisma.PrismaPromise<GetCSVStatusAggregateType<T>>

    /**
     * Group by CSVStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CSVStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CSVStatusGroupByArgs['orderBy'] }
        : { orderBy?: CSVStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CSVStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCSVStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CSVStatus model
   */
  readonly fields: CSVStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CSVStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CSVStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businessRelation<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CSVStatus model
   */ 
  interface CSVStatusFieldRefs {
    readonly id: FieldRef<"CSVStatus", 'Int'>
    readonly status: FieldRef<"CSVStatus", 'String'>
    readonly uploadedDate: FieldRef<"CSVStatus", 'DateTime'>
    readonly path: FieldRef<"CSVStatus", 'String'>
    readonly businessId: FieldRef<"CSVStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CSVStatus findUnique
   */
  export type CSVStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusInclude<ExtArgs> | null
    /**
     * Filter, which CSVStatus to fetch.
     */
    where: CSVStatusWhereUniqueInput
  }

  /**
   * CSVStatus findUniqueOrThrow
   */
  export type CSVStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusInclude<ExtArgs> | null
    /**
     * Filter, which CSVStatus to fetch.
     */
    where: CSVStatusWhereUniqueInput
  }

  /**
   * CSVStatus findFirst
   */
  export type CSVStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusInclude<ExtArgs> | null
    /**
     * Filter, which CSVStatus to fetch.
     */
    where?: CSVStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CSVStatuses to fetch.
     */
    orderBy?: CSVStatusOrderByWithRelationInput | CSVStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CSVStatuses.
     */
    cursor?: CSVStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CSVStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CSVStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CSVStatuses.
     */
    distinct?: CSVStatusScalarFieldEnum | CSVStatusScalarFieldEnum[]
  }

  /**
   * CSVStatus findFirstOrThrow
   */
  export type CSVStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusInclude<ExtArgs> | null
    /**
     * Filter, which CSVStatus to fetch.
     */
    where?: CSVStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CSVStatuses to fetch.
     */
    orderBy?: CSVStatusOrderByWithRelationInput | CSVStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CSVStatuses.
     */
    cursor?: CSVStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CSVStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CSVStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CSVStatuses.
     */
    distinct?: CSVStatusScalarFieldEnum | CSVStatusScalarFieldEnum[]
  }

  /**
   * CSVStatus findMany
   */
  export type CSVStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusInclude<ExtArgs> | null
    /**
     * Filter, which CSVStatuses to fetch.
     */
    where?: CSVStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CSVStatuses to fetch.
     */
    orderBy?: CSVStatusOrderByWithRelationInput | CSVStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CSVStatuses.
     */
    cursor?: CSVStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CSVStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CSVStatuses.
     */
    skip?: number
    distinct?: CSVStatusScalarFieldEnum | CSVStatusScalarFieldEnum[]
  }

  /**
   * CSVStatus create
   */
  export type CSVStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a CSVStatus.
     */
    data: XOR<CSVStatusCreateInput, CSVStatusUncheckedCreateInput>
  }

  /**
   * CSVStatus createMany
   */
  export type CSVStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CSVStatuses.
     */
    data: CSVStatusCreateManyInput | CSVStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CSVStatus createManyAndReturn
   */
  export type CSVStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * The data used to create many CSVStatuses.
     */
    data: CSVStatusCreateManyInput | CSVStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CSVStatus update
   */
  export type CSVStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a CSVStatus.
     */
    data: XOR<CSVStatusUpdateInput, CSVStatusUncheckedUpdateInput>
    /**
     * Choose, which CSVStatus to update.
     */
    where: CSVStatusWhereUniqueInput
  }

  /**
   * CSVStatus updateMany
   */
  export type CSVStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CSVStatuses.
     */
    data: XOR<CSVStatusUpdateManyMutationInput, CSVStatusUncheckedUpdateManyInput>
    /**
     * Filter which CSVStatuses to update
     */
    where?: CSVStatusWhereInput
    /**
     * Limit how many CSVStatuses to update.
     */
    limit?: number
  }

  /**
   * CSVStatus updateManyAndReturn
   */
  export type CSVStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * The data used to update CSVStatuses.
     */
    data: XOR<CSVStatusUpdateManyMutationInput, CSVStatusUncheckedUpdateManyInput>
    /**
     * Filter which CSVStatuses to update
     */
    where?: CSVStatusWhereInput
    /**
     * Limit how many CSVStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CSVStatus upsert
   */
  export type CSVStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the CSVStatus to update in case it exists.
     */
    where: CSVStatusWhereUniqueInput
    /**
     * In case the CSVStatus found by the `where` argument doesn't exist, create a new CSVStatus with this data.
     */
    create: XOR<CSVStatusCreateInput, CSVStatusUncheckedCreateInput>
    /**
     * In case the CSVStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CSVStatusUpdateInput, CSVStatusUncheckedUpdateInput>
  }

  /**
   * CSVStatus delete
   */
  export type CSVStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusInclude<ExtArgs> | null
    /**
     * Filter which CSVStatus to delete.
     */
    where: CSVStatusWhereUniqueInput
  }

  /**
   * CSVStatus deleteMany
   */
  export type CSVStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CSVStatuses to delete
     */
    where?: CSVStatusWhereInput
    /**
     * Limit how many CSVStatuses to delete.
     */
    limit?: number
  }

  /**
   * CSVStatus without action
   */
  export type CSVStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVStatus
     */
    select?: CSVStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVStatus
     */
    omit?: CSVStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CSVStatusInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    date: Date | null
    description: string | null
    title: string | null
    businessId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    description: string | null
    title: string | null
    businessId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    date: number
    description: number
    title: number
    businessId: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    date?: true
    description?: true
    title?: true
    businessId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    date?: true
    description?: true
    title?: true
    businessId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    date?: true
    description?: true
    title?: true
    businessId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    date: Date
    description: string
    title: string
    businessId: string
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    description?: boolean
    title?: boolean
    businessId?: boolean
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    description?: boolean
    title?: boolean
    businessId?: boolean
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    description?: boolean
    title?: boolean
    businessId?: boolean
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    date?: boolean
    description?: boolean
    title?: boolean
    businessId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "description" | "title" | "businessId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      businessRelation: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      description: string
      title: string
      businessId: string
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businessRelation<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly date: FieldRef<"Notification", 'DateTime'>
    readonly description: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly businessId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    discount: Decimal | null
    batchId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    amount: number | null
    discount: Decimal | null
    batchId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    date: Date | null
    amount: number | null
    discount: Decimal | null
    batchId: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    amount: number | null
    discount: Decimal | null
    batchId: number | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    date: number
    amount: number
    discount: number
    batchId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    discount?: true
    batchId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    amount?: true
    discount?: true
    batchId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    date?: true
    amount?: true
    discount?: true
    batchId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    date?: true
    amount?: true
    discount?: true
    batchId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    date?: true
    amount?: true
    discount?: true
    batchId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    date: Date
    amount: number
    discount: Decimal
    batchId: number
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    amount?: boolean
    discount?: boolean
    batchId?: boolean
    batchRelation?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    amount?: boolean
    discount?: boolean
    batchId?: boolean
    batchRelation?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    amount?: boolean
    discount?: boolean
    batchId?: boolean
    batchRelation?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    date?: boolean
    amount?: boolean
    discount?: boolean
    batchId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "amount" | "discount" | "batchId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batchRelation?: boolean | BatchDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batchRelation?: boolean | BatchDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batchRelation?: boolean | BatchDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      batchRelation: Prisma.$BatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      amount: number
      discount: Prisma.Decimal
      batchId: number
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batchRelation<T extends BatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchDefaultArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly amount: FieldRef<"Transaction", 'Int'>
    readonly discount: FieldRef<"Transaction", 'Decimal'>
    readonly batchId: FieldRef<"Transaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    hasExpiryDate: boolean | null
    Image: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    hasExpiryDate: boolean | null
    Image: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    hasExpiryDate: number
    Image: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    hasExpiryDate?: true
    Image?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    hasExpiryDate?: true
    Image?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    hasExpiryDate?: true
    Image?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    hasExpiryDate: boolean
    Image: string | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    hasExpiryDate?: boolean
    Image?: boolean
    Porduct?: boolean | Category$PorductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    hasExpiryDate?: boolean
    Image?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    hasExpiryDate?: boolean
    Image?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    hasExpiryDate?: boolean
    Image?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "hasExpiryDate" | "Image", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Porduct?: boolean | Category$PorductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Porduct: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      hasExpiryDate: boolean
      Image: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Porduct<T extends Category$PorductArgs<ExtArgs> = {}>(args?: Subset<T, Category$PorductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly hasExpiryDate: FieldRef<"Category", 'Boolean'>
    readonly Image: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.Porduct
   */
  export type Category$PorductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    categoryId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    categoryId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    categoryId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    categoryId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    categoryRelation?: boolean | CategoryDefaultArgs<ExtArgs>
    Batch?: boolean | Product$BatchArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    categoryRelation?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    categoryRelation?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    categoryId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categoryId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryRelation?: boolean | CategoryDefaultArgs<ExtArgs>
    Batch?: boolean | Product$BatchArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryRelation?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryRelation?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      categoryRelation: Prisma.$CategoryPayload<ExtArgs>
      Batch: Prisma.$BatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      categoryId: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoryRelation<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Batch<T extends Product$BatchArgs<ExtArgs> = {}>(args?: Subset<T, Product$BatchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.Batch
   */
  export type Product$BatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    cursor?: BatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Batch
   */

  export type AggregateBatch = {
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  export type BatchAvgAggregateOutputType = {
    id: number | null
    sellingPrice: number | null
    costOfGoods: number | null
    remQuantity: number | null
    soldQuantity: number | null
    productId: number | null
  }

  export type BatchSumAggregateOutputType = {
    id: number | null
    sellingPrice: number | null
    costOfGoods: number | null
    remQuantity: number | null
    soldQuantity: number | null
    productId: number | null
  }

  export type BatchMinAggregateOutputType = {
    id: number | null
    expiryDate: Date | null
    sellingPrice: number | null
    costOfGoods: number | null
    remQuantity: number | null
    soldQuantity: number | null
    dateOfReceipt: Date | null
    businessId: string | null
    productId: number | null
  }

  export type BatchMaxAggregateOutputType = {
    id: number | null
    expiryDate: Date | null
    sellingPrice: number | null
    costOfGoods: number | null
    remQuantity: number | null
    soldQuantity: number | null
    dateOfReceipt: Date | null
    businessId: string | null
    productId: number | null
  }

  export type BatchCountAggregateOutputType = {
    id: number
    expiryDate: number
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt: number
    businessId: number
    productId: number
    _all: number
  }


  export type BatchAvgAggregateInputType = {
    id?: true
    sellingPrice?: true
    costOfGoods?: true
    remQuantity?: true
    soldQuantity?: true
    productId?: true
  }

  export type BatchSumAggregateInputType = {
    id?: true
    sellingPrice?: true
    costOfGoods?: true
    remQuantity?: true
    soldQuantity?: true
    productId?: true
  }

  export type BatchMinAggregateInputType = {
    id?: true
    expiryDate?: true
    sellingPrice?: true
    costOfGoods?: true
    remQuantity?: true
    soldQuantity?: true
    dateOfReceipt?: true
    businessId?: true
    productId?: true
  }

  export type BatchMaxAggregateInputType = {
    id?: true
    expiryDate?: true
    sellingPrice?: true
    costOfGoods?: true
    remQuantity?: true
    soldQuantity?: true
    dateOfReceipt?: true
    businessId?: true
    productId?: true
  }

  export type BatchCountAggregateInputType = {
    id?: true
    expiryDate?: true
    sellingPrice?: true
    costOfGoods?: true
    remQuantity?: true
    soldQuantity?: true
    dateOfReceipt?: true
    businessId?: true
    productId?: true
    _all?: true
  }

  export type BatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batch to aggregate.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Batches
    **/
    _count?: true | BatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchMaxAggregateInputType
  }

  export type GetBatchAggregateType<T extends BatchAggregateArgs> = {
        [P in keyof T & keyof AggregateBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch[P]>
      : GetScalarType<T[P], AggregateBatch[P]>
  }




  export type BatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithAggregationInput | BatchOrderByWithAggregationInput[]
    by: BatchScalarFieldEnum[] | BatchScalarFieldEnum
    having?: BatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchCountAggregateInputType | true
    _avg?: BatchAvgAggregateInputType
    _sum?: BatchSumAggregateInputType
    _min?: BatchMinAggregateInputType
    _max?: BatchMaxAggregateInputType
  }

  export type BatchGroupByOutputType = {
    id: number
    expiryDate: Date
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt: Date
    businessId: string
    productId: number
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  type GetBatchGroupByPayload<T extends BatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchGroupByOutputType[P]>
            : GetScalarType<T[P], BatchGroupByOutputType[P]>
        }
      >
    >


  export type BatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiryDate?: boolean
    sellingPrice?: boolean
    costOfGoods?: boolean
    remQuantity?: boolean
    soldQuantity?: boolean
    dateOfReceipt?: boolean
    businessId?: boolean
    productId?: boolean
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
    productRelation?: boolean | ProductDefaultArgs<ExtArgs>
    Transaction?: boolean | Batch$TransactionArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiryDate?: boolean
    sellingPrice?: boolean
    costOfGoods?: boolean
    remQuantity?: boolean
    soldQuantity?: boolean
    dateOfReceipt?: boolean
    businessId?: boolean
    productId?: boolean
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
    productRelation?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiryDate?: boolean
    sellingPrice?: boolean
    costOfGoods?: boolean
    remQuantity?: boolean
    soldQuantity?: boolean
    dateOfReceipt?: boolean
    businessId?: boolean
    productId?: boolean
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
    productRelation?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectScalar = {
    id?: boolean
    expiryDate?: boolean
    sellingPrice?: boolean
    costOfGoods?: boolean
    remQuantity?: boolean
    soldQuantity?: boolean
    dateOfReceipt?: boolean
    businessId?: boolean
    productId?: boolean
  }

  export type BatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiryDate" | "sellingPrice" | "costOfGoods" | "remQuantity" | "soldQuantity" | "dateOfReceipt" | "businessId" | "productId", ExtArgs["result"]["batch"]>
  export type BatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
    productRelation?: boolean | ProductDefaultArgs<ExtArgs>
    Transaction?: boolean | Batch$TransactionArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
    productRelation?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type BatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessRelation?: boolean | BusinessDefaultArgs<ExtArgs>
    productRelation?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $BatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Batch"
    objects: {
      businessRelation: Prisma.$BusinessPayload<ExtArgs>
      productRelation: Prisma.$ProductPayload<ExtArgs>
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      expiryDate: Date
      sellingPrice: number
      costOfGoods: number
      remQuantity: number
      soldQuantity: number
      dateOfReceipt: Date
      businessId: string
      productId: number
    }, ExtArgs["result"]["batch"]>
    composites: {}
  }

  type BatchGetPayload<S extends boolean | null | undefined | BatchDefaultArgs> = $Result.GetResult<Prisma.$BatchPayload, S>

  type BatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchCountAggregateInputType | true
    }

  export interface BatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Batch'], meta: { name: 'Batch' } }
    /**
     * Find zero or one Batch that matches the filter.
     * @param {BatchFindUniqueArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchFindUniqueArgs>(args: SelectSubset<T, BatchFindUniqueArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Batch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchFindUniqueOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Batch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchFindFirstArgs>(args?: SelectSubset<T, BatchFindFirstArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Batch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batches
     * const batches = await prisma.batch.findMany()
     * 
     * // Get first 10 Batches
     * const batches = await prisma.batch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchWithIdOnly = await prisma.batch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchFindManyArgs>(args?: SelectSubset<T, BatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Batch.
     * @param {BatchCreateArgs} args - Arguments to create a Batch.
     * @example
     * // Create one Batch
     * const Batch = await prisma.batch.create({
     *   data: {
     *     // ... data to create a Batch
     *   }
     * })
     * 
     */
    create<T extends BatchCreateArgs>(args: SelectSubset<T, BatchCreateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Batches.
     * @param {BatchCreateManyArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchCreateManyArgs>(args?: SelectSubset<T, BatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Batches and returns the data saved in the database.
     * @param {BatchCreateManyAndReturnArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatchCreateManyAndReturnArgs>(args?: SelectSubset<T, BatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Batch.
     * @param {BatchDeleteArgs} args - Arguments to delete one Batch.
     * @example
     * // Delete one Batch
     * const Batch = await prisma.batch.delete({
     *   where: {
     *     // ... filter to delete one Batch
     *   }
     * })
     * 
     */
    delete<T extends BatchDeleteArgs>(args: SelectSubset<T, BatchDeleteArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Batch.
     * @param {BatchUpdateArgs} args - Arguments to update one Batch.
     * @example
     * // Update one Batch
     * const batch = await prisma.batch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchUpdateArgs>(args: SelectSubset<T, BatchUpdateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Batches.
     * @param {BatchDeleteManyArgs} args - Arguments to filter Batches to delete.
     * @example
     * // Delete a few Batches
     * const { count } = await prisma.batch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchDeleteManyArgs>(args?: SelectSubset<T, BatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchUpdateManyArgs>(args: SelectSubset<T, BatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches and returns the data updated in the database.
     * @param {BatchUpdateManyAndReturnArgs} args - Arguments to update many Batches.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BatchUpdateManyAndReturnArgs>(args: SelectSubset<T, BatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Batch.
     * @param {BatchUpsertArgs} args - Arguments to update or create a Batch.
     * @example
     * // Update or create a Batch
     * const batch = await prisma.batch.upsert({
     *   create: {
     *     // ... data to create a Batch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch we want to update
     *   }
     * })
     */
    upsert<T extends BatchUpsertArgs>(args: SelectSubset<T, BatchUpsertArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchCountArgs} args - Arguments to filter Batches to count.
     * @example
     * // Count the number of Batches
     * const count = await prisma.batch.count({
     *   where: {
     *     // ... the filter for the Batches we want to count
     *   }
     * })
    **/
    count<T extends BatchCountArgs>(
      args?: Subset<T, BatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BatchAggregateArgs>(args: Subset<T, BatchAggregateArgs>): Prisma.PrismaPromise<GetBatchAggregateType<T>>

    /**
     * Group by Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchGroupByArgs['orderBy'] }
        : { orderBy?: BatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Batch model
   */
  readonly fields: BatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Batch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businessRelation<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    productRelation<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Transaction<T extends Batch$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Batch$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Batch model
   */ 
  interface BatchFieldRefs {
    readonly id: FieldRef<"Batch", 'Int'>
    readonly expiryDate: FieldRef<"Batch", 'DateTime'>
    readonly sellingPrice: FieldRef<"Batch", 'Int'>
    readonly costOfGoods: FieldRef<"Batch", 'Int'>
    readonly remQuantity: FieldRef<"Batch", 'Int'>
    readonly soldQuantity: FieldRef<"Batch", 'Int'>
    readonly dateOfReceipt: FieldRef<"Batch", 'DateTime'>
    readonly businessId: FieldRef<"Batch", 'String'>
    readonly productId: FieldRef<"Batch", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Batch findUnique
   */
  export type BatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findUniqueOrThrow
   */
  export type BatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findFirst
   */
  export type BatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findFirstOrThrow
   */
  export type BatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findMany
   */
  export type BatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batches to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch create
   */
  export type BatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Batch.
     */
    data: XOR<BatchCreateInput, BatchUncheckedCreateInput>
  }

  /**
   * Batch createMany
   */
  export type BatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch createManyAndReturn
   */
  export type BatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Batch update
   */
  export type BatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Batch.
     */
    data: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
    /**
     * Choose, which Batch to update.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch updateMany
   */
  export type BatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch updateManyAndReturn
   */
  export type BatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Batch upsert
   */
  export type BatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Batch to update in case it exists.
     */
    where: BatchWhereUniqueInput
    /**
     * In case the Batch found by the `where` argument doesn't exist, create a new Batch with this data.
     */
    create: XOR<BatchCreateInput, BatchUncheckedCreateInput>
    /**
     * In case the Batch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
  }

  /**
   * Batch delete
   */
  export type BatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter which Batch to delete.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch deleteMany
   */
  export type BatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batches to delete
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to delete.
     */
    limit?: number
  }

  /**
   * Batch.Transaction
   */
  export type Batch$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Batch without action
   */
  export type BatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    establishmentDate: 'establishmentDate',
    description: 'description',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    username: 'username',
    password: 'password',
    phoneNumber: 'phoneNumber',
    admin: 'admin',
    createdAt: 'createdAt',
    businessId: 'businessId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CSVStatusScalarFieldEnum: {
    id: 'id',
    status: 'status',
    uploadedDate: 'uploadedDate',
    path: 'path',
    businessId: 'businessId'
  };

  export type CSVStatusScalarFieldEnum = (typeof CSVStatusScalarFieldEnum)[keyof typeof CSVStatusScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    date: 'date',
    description: 'description',
    title: 'title',
    businessId: 'businessId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    date: 'date',
    amount: 'amount',
    discount: 'discount',
    batchId: 'batchId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    hasExpiryDate: 'hasExpiryDate',
    Image: 'Image'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categoryId: 'categoryId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const BatchScalarFieldEnum: {
    id: 'id',
    expiryDate: 'expiryDate',
    sellingPrice: 'sellingPrice',
    costOfGoods: 'costOfGoods',
    remQuantity: 'remQuantity',
    soldQuantity: 'soldQuantity',
    dateOfReceipt: 'dateOfReceipt',
    businessId: 'businessId',
    productId: 'productId'
  };

  export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: StringFilter<"Business"> | string
    name?: StringFilter<"Business"> | string
    establishmentDate?: DateTimeFilter<"Business"> | Date | string
    description?: StringFilter<"Business"> | string
    image?: StringFilter<"Business"> | string
    createdAt?: DateTimeFilter<"Business"> | Date | string
    User?: UserListRelationFilter
    Batch?: BatchListRelationFilter
    CSVStatus?: CSVStatusListRelationFilter
    Notification?: NotificationListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    establishmentDate?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByRelationAggregateInput
    Batch?: BatchOrderByRelationAggregateInput
    CSVStatus?: CSVStatusOrderByRelationAggregateInput
    Notification?: NotificationOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    name?: StringFilter<"Business"> | string
    establishmentDate?: DateTimeFilter<"Business"> | Date | string
    description?: StringFilter<"Business"> | string
    image?: StringFilter<"Business"> | string
    createdAt?: DateTimeFilter<"Business"> | Date | string
    User?: UserListRelationFilter
    Batch?: BatchListRelationFilter
    CSVStatus?: CSVStatusListRelationFilter
    Notification?: NotificationListRelationFilter
  }, "id">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    establishmentDate?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Business"> | string
    name?: StringWithAggregatesFilter<"Business"> | string
    establishmentDate?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    description?: StringWithAggregatesFilter<"Business"> | string
    image?: StringWithAggregatesFilter<"Business"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    admin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    businessId?: StringFilter<"User"> | string
    businessRelation?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
    businessId?: SortOrder
    businessRelation?: BusinessOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    admin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    businessId?: StringFilter<"User"> | string
    businessRelation?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
    businessId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    admin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    businessId?: StringWithAggregatesFilter<"User"> | string
  }

  export type CSVStatusWhereInput = {
    AND?: CSVStatusWhereInput | CSVStatusWhereInput[]
    OR?: CSVStatusWhereInput[]
    NOT?: CSVStatusWhereInput | CSVStatusWhereInput[]
    id?: IntFilter<"CSVStatus"> | number
    status?: StringFilter<"CSVStatus"> | string
    uploadedDate?: DateTimeFilter<"CSVStatus"> | Date | string
    path?: StringFilter<"CSVStatus"> | string
    businessId?: StringFilter<"CSVStatus"> | string
    businessRelation?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type CSVStatusOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    uploadedDate?: SortOrder
    path?: SortOrder
    businessId?: SortOrder
    businessRelation?: BusinessOrderByWithRelationInput
  }

  export type CSVStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CSVStatusWhereInput | CSVStatusWhereInput[]
    OR?: CSVStatusWhereInput[]
    NOT?: CSVStatusWhereInput | CSVStatusWhereInput[]
    status?: StringFilter<"CSVStatus"> | string
    uploadedDate?: DateTimeFilter<"CSVStatus"> | Date | string
    path?: StringFilter<"CSVStatus"> | string
    businessId?: StringFilter<"CSVStatus"> | string
    businessRelation?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id">

  export type CSVStatusOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    uploadedDate?: SortOrder
    path?: SortOrder
    businessId?: SortOrder
    _count?: CSVStatusCountOrderByAggregateInput
    _avg?: CSVStatusAvgOrderByAggregateInput
    _max?: CSVStatusMaxOrderByAggregateInput
    _min?: CSVStatusMinOrderByAggregateInput
    _sum?: CSVStatusSumOrderByAggregateInput
  }

  export type CSVStatusScalarWhereWithAggregatesInput = {
    AND?: CSVStatusScalarWhereWithAggregatesInput | CSVStatusScalarWhereWithAggregatesInput[]
    OR?: CSVStatusScalarWhereWithAggregatesInput[]
    NOT?: CSVStatusScalarWhereWithAggregatesInput | CSVStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CSVStatus"> | number
    status?: StringWithAggregatesFilter<"CSVStatus"> | string
    uploadedDate?: DateTimeWithAggregatesFilter<"CSVStatus"> | Date | string
    path?: StringWithAggregatesFilter<"CSVStatus"> | string
    businessId?: StringWithAggregatesFilter<"CSVStatus"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    date?: DateTimeFilter<"Notification"> | Date | string
    description?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    businessId?: StringFilter<"Notification"> | string
    businessRelation?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    title?: SortOrder
    businessId?: SortOrder
    businessRelation?: BusinessOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    date?: DateTimeFilter<"Notification"> | Date | string
    description?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    businessId?: StringFilter<"Notification"> | string
    businessRelation?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    title?: SortOrder
    businessId?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    date?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    description?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    businessId?: StringWithAggregatesFilter<"Notification"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    amount?: IntFilter<"Transaction"> | number
    discount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    batchId?: IntFilter<"Transaction"> | number
    batchRelation?: XOR<BatchScalarRelationFilter, BatchWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    discount?: SortOrder
    batchId?: SortOrder
    batchRelation?: BatchOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    date?: DateTimeFilter<"Transaction"> | Date | string
    amount?: IntFilter<"Transaction"> | number
    discount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    batchId?: IntFilter<"Transaction"> | number
    batchRelation?: XOR<BatchScalarRelationFilter, BatchWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    discount?: SortOrder
    batchId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    amount?: IntWithAggregatesFilter<"Transaction"> | number
    discount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    batchId?: IntWithAggregatesFilter<"Transaction"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    hasExpiryDate?: BoolFilter<"Category"> | boolean
    Image?: StringNullableFilter<"Category"> | string | null
    Porduct?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    hasExpiryDate?: SortOrder
    Image?: SortOrderInput | SortOrder
    Porduct?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    hasExpiryDate?: BoolFilter<"Category"> | boolean
    Image?: StringNullableFilter<"Category"> | string | null
    Porduct?: ProductListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    hasExpiryDate?: SortOrder
    Image?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    hasExpiryDate?: BoolWithAggregatesFilter<"Category"> | boolean
    Image?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    categoryId?: IntFilter<"Product"> | number
    categoryRelation?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Batch?: BatchListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    categoryRelation?: CategoryOrderByWithRelationInput
    Batch?: BatchOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    categoryId?: IntFilter<"Product"> | number
    categoryRelation?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Batch?: BatchListRelationFilter
  }, "id" | "name">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: IntWithAggregatesFilter<"Product"> | number
  }

  export type BatchWhereInput = {
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    id?: IntFilter<"Batch"> | number
    expiryDate?: DateTimeFilter<"Batch"> | Date | string
    sellingPrice?: IntFilter<"Batch"> | number
    costOfGoods?: IntFilter<"Batch"> | number
    remQuantity?: IntFilter<"Batch"> | number
    soldQuantity?: IntFilter<"Batch"> | number
    dateOfReceipt?: DateTimeFilter<"Batch"> | Date | string
    businessId?: StringFilter<"Batch"> | string
    productId?: IntFilter<"Batch"> | number
    businessRelation?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    productRelation?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Transaction?: TransactionListRelationFilter
  }

  export type BatchOrderByWithRelationInput = {
    id?: SortOrder
    expiryDate?: SortOrder
    sellingPrice?: SortOrder
    costOfGoods?: SortOrder
    remQuantity?: SortOrder
    soldQuantity?: SortOrder
    dateOfReceipt?: SortOrder
    businessId?: SortOrder
    productId?: SortOrder
    businessRelation?: BusinessOrderByWithRelationInput
    productRelation?: ProductOrderByWithRelationInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type BatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    expiryDate?: DateTimeFilter<"Batch"> | Date | string
    sellingPrice?: IntFilter<"Batch"> | number
    costOfGoods?: IntFilter<"Batch"> | number
    remQuantity?: IntFilter<"Batch"> | number
    soldQuantity?: IntFilter<"Batch"> | number
    dateOfReceipt?: DateTimeFilter<"Batch"> | Date | string
    businessId?: StringFilter<"Batch"> | string
    productId?: IntFilter<"Batch"> | number
    businessRelation?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    productRelation?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type BatchOrderByWithAggregationInput = {
    id?: SortOrder
    expiryDate?: SortOrder
    sellingPrice?: SortOrder
    costOfGoods?: SortOrder
    remQuantity?: SortOrder
    soldQuantity?: SortOrder
    dateOfReceipt?: SortOrder
    businessId?: SortOrder
    productId?: SortOrder
    _count?: BatchCountOrderByAggregateInput
    _avg?: BatchAvgOrderByAggregateInput
    _max?: BatchMaxOrderByAggregateInput
    _min?: BatchMinOrderByAggregateInput
    _sum?: BatchSumOrderByAggregateInput
  }

  export type BatchScalarWhereWithAggregatesInput = {
    AND?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    OR?: BatchScalarWhereWithAggregatesInput[]
    NOT?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Batch"> | number
    expiryDate?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    sellingPrice?: IntWithAggregatesFilter<"Batch"> | number
    costOfGoods?: IntWithAggregatesFilter<"Batch"> | number
    remQuantity?: IntWithAggregatesFilter<"Batch"> | number
    soldQuantity?: IntWithAggregatesFilter<"Batch"> | number
    dateOfReceipt?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    businessId?: StringWithAggregatesFilter<"Batch"> | string
    productId?: IntWithAggregatesFilter<"Batch"> | number
  }

  export type BusinessCreateInput = {
    id?: string
    name: string
    establishmentDate: Date | string
    description: string
    image: string
    createdAt?: Date | string
    User?: UserCreateNestedManyWithoutBusinessRelationInput
    Batch?: BatchCreateNestedManyWithoutBusinessRelationInput
    CSVStatus?: CSVStatusCreateNestedManyWithoutBusinessRelationInput
    Notification?: NotificationCreateNestedManyWithoutBusinessRelationInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: string
    name: string
    establishmentDate: Date | string
    description: string
    image: string
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutBusinessRelationInput
    Batch?: BatchUncheckedCreateNestedManyWithoutBusinessRelationInput
    CSVStatus?: CSVStatusUncheckedCreateNestedManyWithoutBusinessRelationInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutBusinessRelationInput
  }

  export type BusinessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutBusinessRelationNestedInput
    Batch?: BatchUpdateManyWithoutBusinessRelationNestedInput
    CSVStatus?: CSVStatusUpdateManyWithoutBusinessRelationNestedInput
    Notification?: NotificationUpdateManyWithoutBusinessRelationNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutBusinessRelationNestedInput
    Batch?: BatchUncheckedUpdateManyWithoutBusinessRelationNestedInput
    CSVStatus?: CSVStatusUncheckedUpdateManyWithoutBusinessRelationNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutBusinessRelationNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: string
    name: string
    establishmentDate: Date | string
    description: string
    image: string
    createdAt?: Date | string
  }

  export type BusinessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    username: string
    password: string
    phoneNumber: string
    admin: boolean
    createdAt?: Date | string
    businessRelation: BusinessCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    phoneNumber: string
    admin: boolean
    createdAt?: Date | string
    businessId: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessRelation?: BusinessUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    phoneNumber: string
    admin: boolean
    createdAt?: Date | string
    businessId: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: StringFieldUpdateOperationsInput | string
  }

  export type CSVStatusCreateInput = {
    status: string
    uploadedDate: Date | string
    path: string
    businessRelation: BusinessCreateNestedOneWithoutCSVStatusInput
  }

  export type CSVStatusUncheckedCreateInput = {
    id?: number
    status: string
    uploadedDate: Date | string
    path: string
    businessId: string
  }

  export type CSVStatusUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    uploadedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
    businessRelation?: BusinessUpdateOneRequiredWithoutCSVStatusNestedInput
  }

  export type CSVStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    uploadedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
  }

  export type CSVStatusCreateManyInput = {
    id?: number
    status: string
    uploadedDate: Date | string
    path: string
    businessId: string
  }

  export type CSVStatusUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    uploadedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type CSVStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    uploadedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    date: Date | string
    description: string
    title: string
    businessRelation: BusinessCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    date: Date | string
    description: string
    title: string
    businessId: string
  }

  export type NotificationUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    businessRelation?: BusinessUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    date: Date | string
    description: string
    title: string
    businessId: string
  }

  export type NotificationUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    date?: Date | string
    amount: number
    discount?: Decimal | DecimalJsLike | number | string
    batchRelation: BatchCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    date?: Date | string
    amount: number
    discount?: Decimal | DecimalJsLike | number | string
    batchId: number
  }

  export type TransactionUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    batchRelation?: BatchUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    batchId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateManyInput = {
    id?: number
    date?: Date | string
    amount: number
    discount?: Decimal | DecimalJsLike | number | string
    batchId: number
  }

  export type TransactionUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    batchId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    description?: string | null
    hasExpiryDate: boolean
    Image?: string | null
    Porduct?: ProductCreateNestedManyWithoutCategoryRelationInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    hasExpiryDate: boolean
    Image?: string | null
    Porduct?: ProductUncheckedCreateNestedManyWithoutCategoryRelationInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasExpiryDate?: BoolFieldUpdateOperationsInput | boolean
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    Porduct?: ProductUpdateManyWithoutCategoryRelationNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasExpiryDate?: BoolFieldUpdateOperationsInput | boolean
    Image?: NullableStringFieldUpdateOperationsInput | string | null
    Porduct?: ProductUncheckedUpdateManyWithoutCategoryRelationNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    hasExpiryDate: boolean
    Image?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasExpiryDate?: BoolFieldUpdateOperationsInput | boolean
    Image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasExpiryDate?: BoolFieldUpdateOperationsInput | boolean
    Image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateInput = {
    name: string
    categoryRelation: CategoryCreateNestedOneWithoutPorductInput
    Batch?: BatchCreateNestedManyWithoutProductRelationInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    categoryId: number
    Batch?: BatchUncheckedCreateNestedManyWithoutProductRelationInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    categoryRelation?: CategoryUpdateOneRequiredWithoutPorductNestedInput
    Batch?: BatchUpdateManyWithoutProductRelationNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    Batch?: BatchUncheckedUpdateManyWithoutProductRelationNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    categoryId: number
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type BatchCreateInput = {
    expiryDate: Date | string
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt?: Date | string
    businessRelation: BusinessCreateNestedOneWithoutBatchInput
    productRelation: ProductCreateNestedOneWithoutBatchInput
    Transaction?: TransactionCreateNestedManyWithoutBatchRelationInput
  }

  export type BatchUncheckedCreateInput = {
    id?: number
    expiryDate: Date | string
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt?: Date | string
    businessId: string
    productId: number
    Transaction?: TransactionUncheckedCreateNestedManyWithoutBatchRelationInput
  }

  export type BatchUpdateInput = {
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    costOfGoods?: IntFieldUpdateOperationsInput | number
    remQuantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    dateOfReceipt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessRelation?: BusinessUpdateOneRequiredWithoutBatchNestedInput
    productRelation?: ProductUpdateOneRequiredWithoutBatchNestedInput
    Transaction?: TransactionUpdateManyWithoutBatchRelationNestedInput
  }

  export type BatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    costOfGoods?: IntFieldUpdateOperationsInput | number
    remQuantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    dateOfReceipt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    Transaction?: TransactionUncheckedUpdateManyWithoutBatchRelationNestedInput
  }

  export type BatchCreateManyInput = {
    id?: number
    expiryDate: Date | string
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt?: Date | string
    businessId: string
    productId: number
  }

  export type BatchUpdateManyMutationInput = {
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    costOfGoods?: IntFieldUpdateOperationsInput | number
    remQuantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    dateOfReceipt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    costOfGoods?: IntFieldUpdateOperationsInput | number
    remQuantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    dateOfReceipt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type BatchListRelationFilter = {
    every?: BatchWhereInput
    some?: BatchWhereInput
    none?: BatchWhereInput
  }

  export type CSVStatusListRelationFilter = {
    every?: CSVStatusWhereInput
    some?: CSVStatusWhereInput
    none?: CSVStatusWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CSVStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    establishmentDate?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    establishmentDate?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    establishmentDate?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BusinessScalarRelationFilter = {
    is?: BusinessWhereInput
    isNot?: BusinessWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
    businessId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
    businessId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
    businessId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CSVStatusCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    uploadedDate?: SortOrder
    path?: SortOrder
    businessId?: SortOrder
  }

  export type CSVStatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CSVStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    uploadedDate?: SortOrder
    path?: SortOrder
    businessId?: SortOrder
  }

  export type CSVStatusMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    uploadedDate?: SortOrder
    path?: SortOrder
    businessId?: SortOrder
  }

  export type CSVStatusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    title?: SortOrder
    businessId?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    title?: SortOrder
    businessId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    title?: SortOrder
    businessId?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BatchScalarRelationFilter = {
    is?: BatchWhereInput
    isNot?: BatchWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    discount?: SortOrder
    batchId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    discount?: SortOrder
    batchId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    discount?: SortOrder
    batchId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    discount?: SortOrder
    batchId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    discount?: SortOrder
    batchId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hasExpiryDate?: SortOrder
    Image?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hasExpiryDate?: SortOrder
    Image?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hasExpiryDate?: SortOrder
    Image?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchCountOrderByAggregateInput = {
    id?: SortOrder
    expiryDate?: SortOrder
    sellingPrice?: SortOrder
    costOfGoods?: SortOrder
    remQuantity?: SortOrder
    soldQuantity?: SortOrder
    dateOfReceipt?: SortOrder
    businessId?: SortOrder
    productId?: SortOrder
  }

  export type BatchAvgOrderByAggregateInput = {
    id?: SortOrder
    sellingPrice?: SortOrder
    costOfGoods?: SortOrder
    remQuantity?: SortOrder
    soldQuantity?: SortOrder
    productId?: SortOrder
  }

  export type BatchMaxOrderByAggregateInput = {
    id?: SortOrder
    expiryDate?: SortOrder
    sellingPrice?: SortOrder
    costOfGoods?: SortOrder
    remQuantity?: SortOrder
    soldQuantity?: SortOrder
    dateOfReceipt?: SortOrder
    businessId?: SortOrder
    productId?: SortOrder
  }

  export type BatchMinOrderByAggregateInput = {
    id?: SortOrder
    expiryDate?: SortOrder
    sellingPrice?: SortOrder
    costOfGoods?: SortOrder
    remQuantity?: SortOrder
    soldQuantity?: SortOrder
    dateOfReceipt?: SortOrder
    businessId?: SortOrder
    productId?: SortOrder
  }

  export type BatchSumOrderByAggregateInput = {
    id?: SortOrder
    sellingPrice?: SortOrder
    costOfGoods?: SortOrder
    remQuantity?: SortOrder
    soldQuantity?: SortOrder
    productId?: SortOrder
  }

  export type UserCreateNestedManyWithoutBusinessRelationInput = {
    create?: XOR<UserCreateWithoutBusinessRelationInput, UserUncheckedCreateWithoutBusinessRelationInput> | UserCreateWithoutBusinessRelationInput[] | UserUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessRelationInput | UserCreateOrConnectWithoutBusinessRelationInput[]
    createMany?: UserCreateManyBusinessRelationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BatchCreateNestedManyWithoutBusinessRelationInput = {
    create?: XOR<BatchCreateWithoutBusinessRelationInput, BatchUncheckedCreateWithoutBusinessRelationInput> | BatchCreateWithoutBusinessRelationInput[] | BatchUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutBusinessRelationInput | BatchCreateOrConnectWithoutBusinessRelationInput[]
    createMany?: BatchCreateManyBusinessRelationInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type CSVStatusCreateNestedManyWithoutBusinessRelationInput = {
    create?: XOR<CSVStatusCreateWithoutBusinessRelationInput, CSVStatusUncheckedCreateWithoutBusinessRelationInput> | CSVStatusCreateWithoutBusinessRelationInput[] | CSVStatusUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: CSVStatusCreateOrConnectWithoutBusinessRelationInput | CSVStatusCreateOrConnectWithoutBusinessRelationInput[]
    createMany?: CSVStatusCreateManyBusinessRelationInputEnvelope
    connect?: CSVStatusWhereUniqueInput | CSVStatusWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutBusinessRelationInput = {
    create?: XOR<NotificationCreateWithoutBusinessRelationInput, NotificationUncheckedCreateWithoutBusinessRelationInput> | NotificationCreateWithoutBusinessRelationInput[] | NotificationUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBusinessRelationInput | NotificationCreateOrConnectWithoutBusinessRelationInput[]
    createMany?: NotificationCreateManyBusinessRelationInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBusinessRelationInput = {
    create?: XOR<UserCreateWithoutBusinessRelationInput, UserUncheckedCreateWithoutBusinessRelationInput> | UserCreateWithoutBusinessRelationInput[] | UserUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessRelationInput | UserCreateOrConnectWithoutBusinessRelationInput[]
    createMany?: UserCreateManyBusinessRelationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BatchUncheckedCreateNestedManyWithoutBusinessRelationInput = {
    create?: XOR<BatchCreateWithoutBusinessRelationInput, BatchUncheckedCreateWithoutBusinessRelationInput> | BatchCreateWithoutBusinessRelationInput[] | BatchUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutBusinessRelationInput | BatchCreateOrConnectWithoutBusinessRelationInput[]
    createMany?: BatchCreateManyBusinessRelationInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type CSVStatusUncheckedCreateNestedManyWithoutBusinessRelationInput = {
    create?: XOR<CSVStatusCreateWithoutBusinessRelationInput, CSVStatusUncheckedCreateWithoutBusinessRelationInput> | CSVStatusCreateWithoutBusinessRelationInput[] | CSVStatusUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: CSVStatusCreateOrConnectWithoutBusinessRelationInput | CSVStatusCreateOrConnectWithoutBusinessRelationInput[]
    createMany?: CSVStatusCreateManyBusinessRelationInputEnvelope
    connect?: CSVStatusWhereUniqueInput | CSVStatusWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutBusinessRelationInput = {
    create?: XOR<NotificationCreateWithoutBusinessRelationInput, NotificationUncheckedCreateWithoutBusinessRelationInput> | NotificationCreateWithoutBusinessRelationInput[] | NotificationUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBusinessRelationInput | NotificationCreateOrConnectWithoutBusinessRelationInput[]
    createMany?: NotificationCreateManyBusinessRelationInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutBusinessRelationNestedInput = {
    create?: XOR<UserCreateWithoutBusinessRelationInput, UserUncheckedCreateWithoutBusinessRelationInput> | UserCreateWithoutBusinessRelationInput[] | UserUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessRelationInput | UserCreateOrConnectWithoutBusinessRelationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBusinessRelationInput | UserUpsertWithWhereUniqueWithoutBusinessRelationInput[]
    createMany?: UserCreateManyBusinessRelationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBusinessRelationInput | UserUpdateWithWhereUniqueWithoutBusinessRelationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBusinessRelationInput | UserUpdateManyWithWhereWithoutBusinessRelationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BatchUpdateManyWithoutBusinessRelationNestedInput = {
    create?: XOR<BatchCreateWithoutBusinessRelationInput, BatchUncheckedCreateWithoutBusinessRelationInput> | BatchCreateWithoutBusinessRelationInput[] | BatchUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutBusinessRelationInput | BatchCreateOrConnectWithoutBusinessRelationInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutBusinessRelationInput | BatchUpsertWithWhereUniqueWithoutBusinessRelationInput[]
    createMany?: BatchCreateManyBusinessRelationInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutBusinessRelationInput | BatchUpdateWithWhereUniqueWithoutBusinessRelationInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutBusinessRelationInput | BatchUpdateManyWithWhereWithoutBusinessRelationInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type CSVStatusUpdateManyWithoutBusinessRelationNestedInput = {
    create?: XOR<CSVStatusCreateWithoutBusinessRelationInput, CSVStatusUncheckedCreateWithoutBusinessRelationInput> | CSVStatusCreateWithoutBusinessRelationInput[] | CSVStatusUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: CSVStatusCreateOrConnectWithoutBusinessRelationInput | CSVStatusCreateOrConnectWithoutBusinessRelationInput[]
    upsert?: CSVStatusUpsertWithWhereUniqueWithoutBusinessRelationInput | CSVStatusUpsertWithWhereUniqueWithoutBusinessRelationInput[]
    createMany?: CSVStatusCreateManyBusinessRelationInputEnvelope
    set?: CSVStatusWhereUniqueInput | CSVStatusWhereUniqueInput[]
    disconnect?: CSVStatusWhereUniqueInput | CSVStatusWhereUniqueInput[]
    delete?: CSVStatusWhereUniqueInput | CSVStatusWhereUniqueInput[]
    connect?: CSVStatusWhereUniqueInput | CSVStatusWhereUniqueInput[]
    update?: CSVStatusUpdateWithWhereUniqueWithoutBusinessRelationInput | CSVStatusUpdateWithWhereUniqueWithoutBusinessRelationInput[]
    updateMany?: CSVStatusUpdateManyWithWhereWithoutBusinessRelationInput | CSVStatusUpdateManyWithWhereWithoutBusinessRelationInput[]
    deleteMany?: CSVStatusScalarWhereInput | CSVStatusScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutBusinessRelationNestedInput = {
    create?: XOR<NotificationCreateWithoutBusinessRelationInput, NotificationUncheckedCreateWithoutBusinessRelationInput> | NotificationCreateWithoutBusinessRelationInput[] | NotificationUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBusinessRelationInput | NotificationCreateOrConnectWithoutBusinessRelationInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutBusinessRelationInput | NotificationUpsertWithWhereUniqueWithoutBusinessRelationInput[]
    createMany?: NotificationCreateManyBusinessRelationInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutBusinessRelationInput | NotificationUpdateWithWhereUniqueWithoutBusinessRelationInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutBusinessRelationInput | NotificationUpdateManyWithWhereWithoutBusinessRelationInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBusinessRelationNestedInput = {
    create?: XOR<UserCreateWithoutBusinessRelationInput, UserUncheckedCreateWithoutBusinessRelationInput> | UserCreateWithoutBusinessRelationInput[] | UserUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessRelationInput | UserCreateOrConnectWithoutBusinessRelationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBusinessRelationInput | UserUpsertWithWhereUniqueWithoutBusinessRelationInput[]
    createMany?: UserCreateManyBusinessRelationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBusinessRelationInput | UserUpdateWithWhereUniqueWithoutBusinessRelationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBusinessRelationInput | UserUpdateManyWithWhereWithoutBusinessRelationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BatchUncheckedUpdateManyWithoutBusinessRelationNestedInput = {
    create?: XOR<BatchCreateWithoutBusinessRelationInput, BatchUncheckedCreateWithoutBusinessRelationInput> | BatchCreateWithoutBusinessRelationInput[] | BatchUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutBusinessRelationInput | BatchCreateOrConnectWithoutBusinessRelationInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutBusinessRelationInput | BatchUpsertWithWhereUniqueWithoutBusinessRelationInput[]
    createMany?: BatchCreateManyBusinessRelationInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutBusinessRelationInput | BatchUpdateWithWhereUniqueWithoutBusinessRelationInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutBusinessRelationInput | BatchUpdateManyWithWhereWithoutBusinessRelationInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type CSVStatusUncheckedUpdateManyWithoutBusinessRelationNestedInput = {
    create?: XOR<CSVStatusCreateWithoutBusinessRelationInput, CSVStatusUncheckedCreateWithoutBusinessRelationInput> | CSVStatusCreateWithoutBusinessRelationInput[] | CSVStatusUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: CSVStatusCreateOrConnectWithoutBusinessRelationInput | CSVStatusCreateOrConnectWithoutBusinessRelationInput[]
    upsert?: CSVStatusUpsertWithWhereUniqueWithoutBusinessRelationInput | CSVStatusUpsertWithWhereUniqueWithoutBusinessRelationInput[]
    createMany?: CSVStatusCreateManyBusinessRelationInputEnvelope
    set?: CSVStatusWhereUniqueInput | CSVStatusWhereUniqueInput[]
    disconnect?: CSVStatusWhereUniqueInput | CSVStatusWhereUniqueInput[]
    delete?: CSVStatusWhereUniqueInput | CSVStatusWhereUniqueInput[]
    connect?: CSVStatusWhereUniqueInput | CSVStatusWhereUniqueInput[]
    update?: CSVStatusUpdateWithWhereUniqueWithoutBusinessRelationInput | CSVStatusUpdateWithWhereUniqueWithoutBusinessRelationInput[]
    updateMany?: CSVStatusUpdateManyWithWhereWithoutBusinessRelationInput | CSVStatusUpdateManyWithWhereWithoutBusinessRelationInput[]
    deleteMany?: CSVStatusScalarWhereInput | CSVStatusScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutBusinessRelationNestedInput = {
    create?: XOR<NotificationCreateWithoutBusinessRelationInput, NotificationUncheckedCreateWithoutBusinessRelationInput> | NotificationCreateWithoutBusinessRelationInput[] | NotificationUncheckedCreateWithoutBusinessRelationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBusinessRelationInput | NotificationCreateOrConnectWithoutBusinessRelationInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutBusinessRelationInput | NotificationUpsertWithWhereUniqueWithoutBusinessRelationInput[]
    createMany?: NotificationCreateManyBusinessRelationInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutBusinessRelationInput | NotificationUpdateWithWhereUniqueWithoutBusinessRelationInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutBusinessRelationInput | NotificationUpdateManyWithWhereWithoutBusinessRelationInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUserInput
    connect?: BusinessWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BusinessUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUserInput
    upsert?: BusinessUpsertWithoutUserInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutUserInput, BusinessUpdateWithoutUserInput>, BusinessUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessCreateNestedOneWithoutCSVStatusInput = {
    create?: XOR<BusinessCreateWithoutCSVStatusInput, BusinessUncheckedCreateWithoutCSVStatusInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutCSVStatusInput
    connect?: BusinessWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutCSVStatusNestedInput = {
    create?: XOR<BusinessCreateWithoutCSVStatusInput, BusinessUncheckedCreateWithoutCSVStatusInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutCSVStatusInput
    upsert?: BusinessUpsertWithoutCSVStatusInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutCSVStatusInput, BusinessUpdateWithoutCSVStatusInput>, BusinessUncheckedUpdateWithoutCSVStatusInput>
  }

  export type BusinessCreateNestedOneWithoutNotificationInput = {
    create?: XOR<BusinessCreateWithoutNotificationInput, BusinessUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutNotificationInput
    connect?: BusinessWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<BusinessCreateWithoutNotificationInput, BusinessUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutNotificationInput
    upsert?: BusinessUpsertWithoutNotificationInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutNotificationInput, BusinessUpdateWithoutNotificationInput>, BusinessUncheckedUpdateWithoutNotificationInput>
  }

  export type BatchCreateNestedOneWithoutTransactionInput = {
    create?: XOR<BatchCreateWithoutTransactionInput, BatchUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: BatchCreateOrConnectWithoutTransactionInput
    connect?: BatchWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BatchUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<BatchCreateWithoutTransactionInput, BatchUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: BatchCreateOrConnectWithoutTransactionInput
    upsert?: BatchUpsertWithoutTransactionInput
    connect?: BatchWhereUniqueInput
    update?: XOR<XOR<BatchUpdateToOneWithWhereWithoutTransactionInput, BatchUpdateWithoutTransactionInput>, BatchUncheckedUpdateWithoutTransactionInput>
  }

  export type ProductCreateNestedManyWithoutCategoryRelationInput = {
    create?: XOR<ProductCreateWithoutCategoryRelationInput, ProductUncheckedCreateWithoutCategoryRelationInput> | ProductCreateWithoutCategoryRelationInput[] | ProductUncheckedCreateWithoutCategoryRelationInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryRelationInput | ProductCreateOrConnectWithoutCategoryRelationInput[]
    createMany?: ProductCreateManyCategoryRelationInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryRelationInput = {
    create?: XOR<ProductCreateWithoutCategoryRelationInput, ProductUncheckedCreateWithoutCategoryRelationInput> | ProductCreateWithoutCategoryRelationInput[] | ProductUncheckedCreateWithoutCategoryRelationInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryRelationInput | ProductCreateOrConnectWithoutCategoryRelationInput[]
    createMany?: ProductCreateManyCategoryRelationInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductUpdateManyWithoutCategoryRelationNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryRelationInput, ProductUncheckedCreateWithoutCategoryRelationInput> | ProductCreateWithoutCategoryRelationInput[] | ProductUncheckedCreateWithoutCategoryRelationInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryRelationInput | ProductCreateOrConnectWithoutCategoryRelationInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryRelationInput | ProductUpsertWithWhereUniqueWithoutCategoryRelationInput[]
    createMany?: ProductCreateManyCategoryRelationInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryRelationInput | ProductUpdateWithWhereUniqueWithoutCategoryRelationInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryRelationInput | ProductUpdateManyWithWhereWithoutCategoryRelationInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryRelationNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryRelationInput, ProductUncheckedCreateWithoutCategoryRelationInput> | ProductCreateWithoutCategoryRelationInput[] | ProductUncheckedCreateWithoutCategoryRelationInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryRelationInput | ProductCreateOrConnectWithoutCategoryRelationInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryRelationInput | ProductUpsertWithWhereUniqueWithoutCategoryRelationInput[]
    createMany?: ProductCreateManyCategoryRelationInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryRelationInput | ProductUpdateWithWhereUniqueWithoutCategoryRelationInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryRelationInput | ProductUpdateManyWithWhereWithoutCategoryRelationInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutPorductInput = {
    create?: XOR<CategoryCreateWithoutPorductInput, CategoryUncheckedCreateWithoutPorductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPorductInput
    connect?: CategoryWhereUniqueInput
  }

  export type BatchCreateNestedManyWithoutProductRelationInput = {
    create?: XOR<BatchCreateWithoutProductRelationInput, BatchUncheckedCreateWithoutProductRelationInput> | BatchCreateWithoutProductRelationInput[] | BatchUncheckedCreateWithoutProductRelationInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutProductRelationInput | BatchCreateOrConnectWithoutProductRelationInput[]
    createMany?: BatchCreateManyProductRelationInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type BatchUncheckedCreateNestedManyWithoutProductRelationInput = {
    create?: XOR<BatchCreateWithoutProductRelationInput, BatchUncheckedCreateWithoutProductRelationInput> | BatchCreateWithoutProductRelationInput[] | BatchUncheckedCreateWithoutProductRelationInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutProductRelationInput | BatchCreateOrConnectWithoutProductRelationInput[]
    createMany?: BatchCreateManyProductRelationInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutPorductNestedInput = {
    create?: XOR<CategoryCreateWithoutPorductInput, CategoryUncheckedCreateWithoutPorductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPorductInput
    upsert?: CategoryUpsertWithoutPorductInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPorductInput, CategoryUpdateWithoutPorductInput>, CategoryUncheckedUpdateWithoutPorductInput>
  }

  export type BatchUpdateManyWithoutProductRelationNestedInput = {
    create?: XOR<BatchCreateWithoutProductRelationInput, BatchUncheckedCreateWithoutProductRelationInput> | BatchCreateWithoutProductRelationInput[] | BatchUncheckedCreateWithoutProductRelationInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutProductRelationInput | BatchCreateOrConnectWithoutProductRelationInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutProductRelationInput | BatchUpsertWithWhereUniqueWithoutProductRelationInput[]
    createMany?: BatchCreateManyProductRelationInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutProductRelationInput | BatchUpdateWithWhereUniqueWithoutProductRelationInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutProductRelationInput | BatchUpdateManyWithWhereWithoutProductRelationInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type BatchUncheckedUpdateManyWithoutProductRelationNestedInput = {
    create?: XOR<BatchCreateWithoutProductRelationInput, BatchUncheckedCreateWithoutProductRelationInput> | BatchCreateWithoutProductRelationInput[] | BatchUncheckedCreateWithoutProductRelationInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutProductRelationInput | BatchCreateOrConnectWithoutProductRelationInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutProductRelationInput | BatchUpsertWithWhereUniqueWithoutProductRelationInput[]
    createMany?: BatchCreateManyProductRelationInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutProductRelationInput | BatchUpdateWithWhereUniqueWithoutProductRelationInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutProductRelationInput | BatchUpdateManyWithWhereWithoutProductRelationInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutBatchInput = {
    create?: XOR<BusinessCreateWithoutBatchInput, BusinessUncheckedCreateWithoutBatchInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutBatchInput
    connect?: BusinessWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutBatchInput = {
    create?: XOR<ProductCreateWithoutBatchInput, ProductUncheckedCreateWithoutBatchInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBatchInput
    connect?: ProductWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutBatchRelationInput = {
    create?: XOR<TransactionCreateWithoutBatchRelationInput, TransactionUncheckedCreateWithoutBatchRelationInput> | TransactionCreateWithoutBatchRelationInput[] | TransactionUncheckedCreateWithoutBatchRelationInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBatchRelationInput | TransactionCreateOrConnectWithoutBatchRelationInput[]
    createMany?: TransactionCreateManyBatchRelationInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutBatchRelationInput = {
    create?: XOR<TransactionCreateWithoutBatchRelationInput, TransactionUncheckedCreateWithoutBatchRelationInput> | TransactionCreateWithoutBatchRelationInput[] | TransactionUncheckedCreateWithoutBatchRelationInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBatchRelationInput | TransactionCreateOrConnectWithoutBatchRelationInput[]
    createMany?: TransactionCreateManyBatchRelationInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BusinessUpdateOneRequiredWithoutBatchNestedInput = {
    create?: XOR<BusinessCreateWithoutBatchInput, BusinessUncheckedCreateWithoutBatchInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutBatchInput
    upsert?: BusinessUpsertWithoutBatchInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutBatchInput, BusinessUpdateWithoutBatchInput>, BusinessUncheckedUpdateWithoutBatchInput>
  }

  export type ProductUpdateOneRequiredWithoutBatchNestedInput = {
    create?: XOR<ProductCreateWithoutBatchInput, ProductUncheckedCreateWithoutBatchInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBatchInput
    upsert?: ProductUpsertWithoutBatchInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutBatchInput, ProductUpdateWithoutBatchInput>, ProductUncheckedUpdateWithoutBatchInput>
  }

  export type TransactionUpdateManyWithoutBatchRelationNestedInput = {
    create?: XOR<TransactionCreateWithoutBatchRelationInput, TransactionUncheckedCreateWithoutBatchRelationInput> | TransactionCreateWithoutBatchRelationInput[] | TransactionUncheckedCreateWithoutBatchRelationInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBatchRelationInput | TransactionCreateOrConnectWithoutBatchRelationInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBatchRelationInput | TransactionUpsertWithWhereUniqueWithoutBatchRelationInput[]
    createMany?: TransactionCreateManyBatchRelationInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBatchRelationInput | TransactionUpdateWithWhereUniqueWithoutBatchRelationInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBatchRelationInput | TransactionUpdateManyWithWhereWithoutBatchRelationInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutBatchRelationNestedInput = {
    create?: XOR<TransactionCreateWithoutBatchRelationInput, TransactionUncheckedCreateWithoutBatchRelationInput> | TransactionCreateWithoutBatchRelationInput[] | TransactionUncheckedCreateWithoutBatchRelationInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBatchRelationInput | TransactionCreateOrConnectWithoutBatchRelationInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBatchRelationInput | TransactionUpsertWithWhereUniqueWithoutBatchRelationInput[]
    createMany?: TransactionCreateManyBatchRelationInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBatchRelationInput | TransactionUpdateWithWhereUniqueWithoutBatchRelationInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBatchRelationInput | TransactionUpdateManyWithWhereWithoutBatchRelationInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutBusinessRelationInput = {
    name: string
    email: string
    username: string
    password: string
    phoneNumber: string
    admin: boolean
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBusinessRelationInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    phoneNumber: string
    admin: boolean
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBusinessRelationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusinessRelationInput, UserUncheckedCreateWithoutBusinessRelationInput>
  }

  export type UserCreateManyBusinessRelationInputEnvelope = {
    data: UserCreateManyBusinessRelationInput | UserCreateManyBusinessRelationInput[]
    skipDuplicates?: boolean
  }

  export type BatchCreateWithoutBusinessRelationInput = {
    expiryDate: Date | string
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt?: Date | string
    productRelation: ProductCreateNestedOneWithoutBatchInput
    Transaction?: TransactionCreateNestedManyWithoutBatchRelationInput
  }

  export type BatchUncheckedCreateWithoutBusinessRelationInput = {
    id?: number
    expiryDate: Date | string
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt?: Date | string
    productId: number
    Transaction?: TransactionUncheckedCreateNestedManyWithoutBatchRelationInput
  }

  export type BatchCreateOrConnectWithoutBusinessRelationInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutBusinessRelationInput, BatchUncheckedCreateWithoutBusinessRelationInput>
  }

  export type BatchCreateManyBusinessRelationInputEnvelope = {
    data: BatchCreateManyBusinessRelationInput | BatchCreateManyBusinessRelationInput[]
    skipDuplicates?: boolean
  }

  export type CSVStatusCreateWithoutBusinessRelationInput = {
    status: string
    uploadedDate: Date | string
    path: string
  }

  export type CSVStatusUncheckedCreateWithoutBusinessRelationInput = {
    id?: number
    status: string
    uploadedDate: Date | string
    path: string
  }

  export type CSVStatusCreateOrConnectWithoutBusinessRelationInput = {
    where: CSVStatusWhereUniqueInput
    create: XOR<CSVStatusCreateWithoutBusinessRelationInput, CSVStatusUncheckedCreateWithoutBusinessRelationInput>
  }

  export type CSVStatusCreateManyBusinessRelationInputEnvelope = {
    data: CSVStatusCreateManyBusinessRelationInput | CSVStatusCreateManyBusinessRelationInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutBusinessRelationInput = {
    date: Date | string
    description: string
    title: string
  }

  export type NotificationUncheckedCreateWithoutBusinessRelationInput = {
    id?: number
    date: Date | string
    description: string
    title: string
  }

  export type NotificationCreateOrConnectWithoutBusinessRelationInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutBusinessRelationInput, NotificationUncheckedCreateWithoutBusinessRelationInput>
  }

  export type NotificationCreateManyBusinessRelationInputEnvelope = {
    data: NotificationCreateManyBusinessRelationInput | NotificationCreateManyBusinessRelationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutBusinessRelationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBusinessRelationInput, UserUncheckedUpdateWithoutBusinessRelationInput>
    create: XOR<UserCreateWithoutBusinessRelationInput, UserUncheckedCreateWithoutBusinessRelationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBusinessRelationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBusinessRelationInput, UserUncheckedUpdateWithoutBusinessRelationInput>
  }

  export type UserUpdateManyWithWhereWithoutBusinessRelationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBusinessRelationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    admin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    businessId?: StringFilter<"User"> | string
  }

  export type BatchUpsertWithWhereUniqueWithoutBusinessRelationInput = {
    where: BatchWhereUniqueInput
    update: XOR<BatchUpdateWithoutBusinessRelationInput, BatchUncheckedUpdateWithoutBusinessRelationInput>
    create: XOR<BatchCreateWithoutBusinessRelationInput, BatchUncheckedCreateWithoutBusinessRelationInput>
  }

  export type BatchUpdateWithWhereUniqueWithoutBusinessRelationInput = {
    where: BatchWhereUniqueInput
    data: XOR<BatchUpdateWithoutBusinessRelationInput, BatchUncheckedUpdateWithoutBusinessRelationInput>
  }

  export type BatchUpdateManyWithWhereWithoutBusinessRelationInput = {
    where: BatchScalarWhereInput
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyWithoutBusinessRelationInput>
  }

  export type BatchScalarWhereInput = {
    AND?: BatchScalarWhereInput | BatchScalarWhereInput[]
    OR?: BatchScalarWhereInput[]
    NOT?: BatchScalarWhereInput | BatchScalarWhereInput[]
    id?: IntFilter<"Batch"> | number
    expiryDate?: DateTimeFilter<"Batch"> | Date | string
    sellingPrice?: IntFilter<"Batch"> | number
    costOfGoods?: IntFilter<"Batch"> | number
    remQuantity?: IntFilter<"Batch"> | number
    soldQuantity?: IntFilter<"Batch"> | number
    dateOfReceipt?: DateTimeFilter<"Batch"> | Date | string
    businessId?: StringFilter<"Batch"> | string
    productId?: IntFilter<"Batch"> | number
  }

  export type CSVStatusUpsertWithWhereUniqueWithoutBusinessRelationInput = {
    where: CSVStatusWhereUniqueInput
    update: XOR<CSVStatusUpdateWithoutBusinessRelationInput, CSVStatusUncheckedUpdateWithoutBusinessRelationInput>
    create: XOR<CSVStatusCreateWithoutBusinessRelationInput, CSVStatusUncheckedCreateWithoutBusinessRelationInput>
  }

  export type CSVStatusUpdateWithWhereUniqueWithoutBusinessRelationInput = {
    where: CSVStatusWhereUniqueInput
    data: XOR<CSVStatusUpdateWithoutBusinessRelationInput, CSVStatusUncheckedUpdateWithoutBusinessRelationInput>
  }

  export type CSVStatusUpdateManyWithWhereWithoutBusinessRelationInput = {
    where: CSVStatusScalarWhereInput
    data: XOR<CSVStatusUpdateManyMutationInput, CSVStatusUncheckedUpdateManyWithoutBusinessRelationInput>
  }

  export type CSVStatusScalarWhereInput = {
    AND?: CSVStatusScalarWhereInput | CSVStatusScalarWhereInput[]
    OR?: CSVStatusScalarWhereInput[]
    NOT?: CSVStatusScalarWhereInput | CSVStatusScalarWhereInput[]
    id?: IntFilter<"CSVStatus"> | number
    status?: StringFilter<"CSVStatus"> | string
    uploadedDate?: DateTimeFilter<"CSVStatus"> | Date | string
    path?: StringFilter<"CSVStatus"> | string
    businessId?: StringFilter<"CSVStatus"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutBusinessRelationInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutBusinessRelationInput, NotificationUncheckedUpdateWithoutBusinessRelationInput>
    create: XOR<NotificationCreateWithoutBusinessRelationInput, NotificationUncheckedCreateWithoutBusinessRelationInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutBusinessRelationInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutBusinessRelationInput, NotificationUncheckedUpdateWithoutBusinessRelationInput>
  }

  export type NotificationUpdateManyWithWhereWithoutBusinessRelationInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutBusinessRelationInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    date?: DateTimeFilter<"Notification"> | Date | string
    description?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    businessId?: StringFilter<"Notification"> | string
  }

  export type BusinessCreateWithoutUserInput = {
    id?: string
    name: string
    establishmentDate: Date | string
    description: string
    image: string
    createdAt?: Date | string
    Batch?: BatchCreateNestedManyWithoutBusinessRelationInput
    CSVStatus?: CSVStatusCreateNestedManyWithoutBusinessRelationInput
    Notification?: NotificationCreateNestedManyWithoutBusinessRelationInput
  }

  export type BusinessUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    establishmentDate: Date | string
    description: string
    image: string
    createdAt?: Date | string
    Batch?: BatchUncheckedCreateNestedManyWithoutBusinessRelationInput
    CSVStatus?: CSVStatusUncheckedCreateNestedManyWithoutBusinessRelationInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutBusinessRelationInput
  }

  export type BusinessCreateOrConnectWithoutUserInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
  }

  export type BusinessUpsertWithoutUserInput = {
    update: XOR<BusinessUpdateWithoutUserInput, BusinessUncheckedUpdateWithoutUserInput>
    create: XOR<BusinessCreateWithoutUserInput, BusinessUncheckedCreateWithoutUserInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutUserInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutUserInput, BusinessUncheckedUpdateWithoutUserInput>
  }

  export type BusinessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Batch?: BatchUpdateManyWithoutBusinessRelationNestedInput
    CSVStatus?: CSVStatusUpdateManyWithoutBusinessRelationNestedInput
    Notification?: NotificationUpdateManyWithoutBusinessRelationNestedInput
  }

  export type BusinessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Batch?: BatchUncheckedUpdateManyWithoutBusinessRelationNestedInput
    CSVStatus?: CSVStatusUncheckedUpdateManyWithoutBusinessRelationNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutBusinessRelationNestedInput
  }

  export type BusinessCreateWithoutCSVStatusInput = {
    id?: string
    name: string
    establishmentDate: Date | string
    description: string
    image: string
    createdAt?: Date | string
    User?: UserCreateNestedManyWithoutBusinessRelationInput
    Batch?: BatchCreateNestedManyWithoutBusinessRelationInput
    Notification?: NotificationCreateNestedManyWithoutBusinessRelationInput
  }

  export type BusinessUncheckedCreateWithoutCSVStatusInput = {
    id?: string
    name: string
    establishmentDate: Date | string
    description: string
    image: string
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutBusinessRelationInput
    Batch?: BatchUncheckedCreateNestedManyWithoutBusinessRelationInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutBusinessRelationInput
  }

  export type BusinessCreateOrConnectWithoutCSVStatusInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutCSVStatusInput, BusinessUncheckedCreateWithoutCSVStatusInput>
  }

  export type BusinessUpsertWithoutCSVStatusInput = {
    update: XOR<BusinessUpdateWithoutCSVStatusInput, BusinessUncheckedUpdateWithoutCSVStatusInput>
    create: XOR<BusinessCreateWithoutCSVStatusInput, BusinessUncheckedCreateWithoutCSVStatusInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutCSVStatusInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutCSVStatusInput, BusinessUncheckedUpdateWithoutCSVStatusInput>
  }

  export type BusinessUpdateWithoutCSVStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutBusinessRelationNestedInput
    Batch?: BatchUpdateManyWithoutBusinessRelationNestedInput
    Notification?: NotificationUpdateManyWithoutBusinessRelationNestedInput
  }

  export type BusinessUncheckedUpdateWithoutCSVStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutBusinessRelationNestedInput
    Batch?: BatchUncheckedUpdateManyWithoutBusinessRelationNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutBusinessRelationNestedInput
  }

  export type BusinessCreateWithoutNotificationInput = {
    id?: string
    name: string
    establishmentDate: Date | string
    description: string
    image: string
    createdAt?: Date | string
    User?: UserCreateNestedManyWithoutBusinessRelationInput
    Batch?: BatchCreateNestedManyWithoutBusinessRelationInput
    CSVStatus?: CSVStatusCreateNestedManyWithoutBusinessRelationInput
  }

  export type BusinessUncheckedCreateWithoutNotificationInput = {
    id?: string
    name: string
    establishmentDate: Date | string
    description: string
    image: string
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutBusinessRelationInput
    Batch?: BatchUncheckedCreateNestedManyWithoutBusinessRelationInput
    CSVStatus?: CSVStatusUncheckedCreateNestedManyWithoutBusinessRelationInput
  }

  export type BusinessCreateOrConnectWithoutNotificationInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutNotificationInput, BusinessUncheckedCreateWithoutNotificationInput>
  }

  export type BusinessUpsertWithoutNotificationInput = {
    update: XOR<BusinessUpdateWithoutNotificationInput, BusinessUncheckedUpdateWithoutNotificationInput>
    create: XOR<BusinessCreateWithoutNotificationInput, BusinessUncheckedCreateWithoutNotificationInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutNotificationInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutNotificationInput, BusinessUncheckedUpdateWithoutNotificationInput>
  }

  export type BusinessUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutBusinessRelationNestedInput
    Batch?: BatchUpdateManyWithoutBusinessRelationNestedInput
    CSVStatus?: CSVStatusUpdateManyWithoutBusinessRelationNestedInput
  }

  export type BusinessUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutBusinessRelationNestedInput
    Batch?: BatchUncheckedUpdateManyWithoutBusinessRelationNestedInput
    CSVStatus?: CSVStatusUncheckedUpdateManyWithoutBusinessRelationNestedInput
  }

  export type BatchCreateWithoutTransactionInput = {
    expiryDate: Date | string
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt?: Date | string
    businessRelation: BusinessCreateNestedOneWithoutBatchInput
    productRelation: ProductCreateNestedOneWithoutBatchInput
  }

  export type BatchUncheckedCreateWithoutTransactionInput = {
    id?: number
    expiryDate: Date | string
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt?: Date | string
    businessId: string
    productId: number
  }

  export type BatchCreateOrConnectWithoutTransactionInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutTransactionInput, BatchUncheckedCreateWithoutTransactionInput>
  }

  export type BatchUpsertWithoutTransactionInput = {
    update: XOR<BatchUpdateWithoutTransactionInput, BatchUncheckedUpdateWithoutTransactionInput>
    create: XOR<BatchCreateWithoutTransactionInput, BatchUncheckedCreateWithoutTransactionInput>
    where?: BatchWhereInput
  }

  export type BatchUpdateToOneWithWhereWithoutTransactionInput = {
    where?: BatchWhereInput
    data: XOR<BatchUpdateWithoutTransactionInput, BatchUncheckedUpdateWithoutTransactionInput>
  }

  export type BatchUpdateWithoutTransactionInput = {
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    costOfGoods?: IntFieldUpdateOperationsInput | number
    remQuantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    dateOfReceipt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessRelation?: BusinessUpdateOneRequiredWithoutBatchNestedInput
    productRelation?: ProductUpdateOneRequiredWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    costOfGoods?: IntFieldUpdateOperationsInput | number
    remQuantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    dateOfReceipt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateWithoutCategoryRelationInput = {
    name: string
    Batch?: BatchCreateNestedManyWithoutProductRelationInput
  }

  export type ProductUncheckedCreateWithoutCategoryRelationInput = {
    id?: number
    name: string
    Batch?: BatchUncheckedCreateNestedManyWithoutProductRelationInput
  }

  export type ProductCreateOrConnectWithoutCategoryRelationInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryRelationInput, ProductUncheckedCreateWithoutCategoryRelationInput>
  }

  export type ProductCreateManyCategoryRelationInputEnvelope = {
    data: ProductCreateManyCategoryRelationInput | ProductCreateManyCategoryRelationInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryRelationInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryRelationInput, ProductUncheckedUpdateWithoutCategoryRelationInput>
    create: XOR<ProductCreateWithoutCategoryRelationInput, ProductUncheckedCreateWithoutCategoryRelationInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryRelationInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryRelationInput, ProductUncheckedUpdateWithoutCategoryRelationInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryRelationInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryRelationInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    categoryId?: IntFilter<"Product"> | number
  }

  export type CategoryCreateWithoutPorductInput = {
    name: string
    description?: string | null
    hasExpiryDate: boolean
    Image?: string | null
  }

  export type CategoryUncheckedCreateWithoutPorductInput = {
    id?: number
    name: string
    description?: string | null
    hasExpiryDate: boolean
    Image?: string | null
  }

  export type CategoryCreateOrConnectWithoutPorductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPorductInput, CategoryUncheckedCreateWithoutPorductInput>
  }

  export type BatchCreateWithoutProductRelationInput = {
    expiryDate: Date | string
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt?: Date | string
    businessRelation: BusinessCreateNestedOneWithoutBatchInput
    Transaction?: TransactionCreateNestedManyWithoutBatchRelationInput
  }

  export type BatchUncheckedCreateWithoutProductRelationInput = {
    id?: number
    expiryDate: Date | string
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt?: Date | string
    businessId: string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutBatchRelationInput
  }

  export type BatchCreateOrConnectWithoutProductRelationInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutProductRelationInput, BatchUncheckedCreateWithoutProductRelationInput>
  }

  export type BatchCreateManyProductRelationInputEnvelope = {
    data: BatchCreateManyProductRelationInput | BatchCreateManyProductRelationInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutPorductInput = {
    update: XOR<CategoryUpdateWithoutPorductInput, CategoryUncheckedUpdateWithoutPorductInput>
    create: XOR<CategoryCreateWithoutPorductInput, CategoryUncheckedCreateWithoutPorductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPorductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPorductInput, CategoryUncheckedUpdateWithoutPorductInput>
  }

  export type CategoryUpdateWithoutPorductInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasExpiryDate?: BoolFieldUpdateOperationsInput | boolean
    Image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutPorductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasExpiryDate?: BoolFieldUpdateOperationsInput | boolean
    Image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BatchUpsertWithWhereUniqueWithoutProductRelationInput = {
    where: BatchWhereUniqueInput
    update: XOR<BatchUpdateWithoutProductRelationInput, BatchUncheckedUpdateWithoutProductRelationInput>
    create: XOR<BatchCreateWithoutProductRelationInput, BatchUncheckedCreateWithoutProductRelationInput>
  }

  export type BatchUpdateWithWhereUniqueWithoutProductRelationInput = {
    where: BatchWhereUniqueInput
    data: XOR<BatchUpdateWithoutProductRelationInput, BatchUncheckedUpdateWithoutProductRelationInput>
  }

  export type BatchUpdateManyWithWhereWithoutProductRelationInput = {
    where: BatchScalarWhereInput
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyWithoutProductRelationInput>
  }

  export type BusinessCreateWithoutBatchInput = {
    id?: string
    name: string
    establishmentDate: Date | string
    description: string
    image: string
    createdAt?: Date | string
    User?: UserCreateNestedManyWithoutBusinessRelationInput
    CSVStatus?: CSVStatusCreateNestedManyWithoutBusinessRelationInput
    Notification?: NotificationCreateNestedManyWithoutBusinessRelationInput
  }

  export type BusinessUncheckedCreateWithoutBatchInput = {
    id?: string
    name: string
    establishmentDate: Date | string
    description: string
    image: string
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutBusinessRelationInput
    CSVStatus?: CSVStatusUncheckedCreateNestedManyWithoutBusinessRelationInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutBusinessRelationInput
  }

  export type BusinessCreateOrConnectWithoutBatchInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutBatchInput, BusinessUncheckedCreateWithoutBatchInput>
  }

  export type ProductCreateWithoutBatchInput = {
    name: string
    categoryRelation: CategoryCreateNestedOneWithoutPorductInput
  }

  export type ProductUncheckedCreateWithoutBatchInput = {
    id?: number
    name: string
    categoryId: number
  }

  export type ProductCreateOrConnectWithoutBatchInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBatchInput, ProductUncheckedCreateWithoutBatchInput>
  }

  export type TransactionCreateWithoutBatchRelationInput = {
    date?: Date | string
    amount: number
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type TransactionUncheckedCreateWithoutBatchRelationInput = {
    id?: number
    date?: Date | string
    amount: number
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type TransactionCreateOrConnectWithoutBatchRelationInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBatchRelationInput, TransactionUncheckedCreateWithoutBatchRelationInput>
  }

  export type TransactionCreateManyBatchRelationInputEnvelope = {
    data: TransactionCreateManyBatchRelationInput | TransactionCreateManyBatchRelationInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutBatchInput = {
    update: XOR<BusinessUpdateWithoutBatchInput, BusinessUncheckedUpdateWithoutBatchInput>
    create: XOR<BusinessCreateWithoutBatchInput, BusinessUncheckedCreateWithoutBatchInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutBatchInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutBatchInput, BusinessUncheckedUpdateWithoutBatchInput>
  }

  export type BusinessUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutBusinessRelationNestedInput
    CSVStatus?: CSVStatusUpdateManyWithoutBusinessRelationNestedInput
    Notification?: NotificationUpdateManyWithoutBusinessRelationNestedInput
  }

  export type BusinessUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutBusinessRelationNestedInput
    CSVStatus?: CSVStatusUncheckedUpdateManyWithoutBusinessRelationNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutBusinessRelationNestedInput
  }

  export type ProductUpsertWithoutBatchInput = {
    update: XOR<ProductUpdateWithoutBatchInput, ProductUncheckedUpdateWithoutBatchInput>
    create: XOR<ProductCreateWithoutBatchInput, ProductUncheckedCreateWithoutBatchInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutBatchInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutBatchInput, ProductUncheckedUpdateWithoutBatchInput>
  }

  export type ProductUpdateWithoutBatchInput = {
    name?: StringFieldUpdateOperationsInput | string
    categoryRelation?: CategoryUpdateOneRequiredWithoutPorductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpsertWithWhereUniqueWithoutBatchRelationInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutBatchRelationInput, TransactionUncheckedUpdateWithoutBatchRelationInput>
    create: XOR<TransactionCreateWithoutBatchRelationInput, TransactionUncheckedCreateWithoutBatchRelationInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutBatchRelationInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutBatchRelationInput, TransactionUncheckedUpdateWithoutBatchRelationInput>
  }

  export type TransactionUpdateManyWithWhereWithoutBatchRelationInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutBatchRelationInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    amount?: IntFilter<"Transaction"> | number
    discount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    batchId?: IntFilter<"Transaction"> | number
  }

  export type UserCreateManyBusinessRelationInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    phoneNumber: string
    admin: boolean
    createdAt?: Date | string
  }

  export type BatchCreateManyBusinessRelationInput = {
    id?: number
    expiryDate: Date | string
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt?: Date | string
    productId: number
  }

  export type CSVStatusCreateManyBusinessRelationInput = {
    id?: number
    status: string
    uploadedDate: Date | string
    path: string
  }

  export type NotificationCreateManyBusinessRelationInput = {
    id?: number
    date: Date | string
    description: string
    title: string
  }

  export type UserUpdateWithoutBusinessRelationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBusinessRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutBusinessRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchUpdateWithoutBusinessRelationInput = {
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    costOfGoods?: IntFieldUpdateOperationsInput | number
    remQuantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    dateOfReceipt?: DateTimeFieldUpdateOperationsInput | Date | string
    productRelation?: ProductUpdateOneRequiredWithoutBatchNestedInput
    Transaction?: TransactionUpdateManyWithoutBatchRelationNestedInput
  }

  export type BatchUncheckedUpdateWithoutBusinessRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    costOfGoods?: IntFieldUpdateOperationsInput | number
    remQuantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    dateOfReceipt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    Transaction?: TransactionUncheckedUpdateManyWithoutBatchRelationNestedInput
  }

  export type BatchUncheckedUpdateManyWithoutBusinessRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    costOfGoods?: IntFieldUpdateOperationsInput | number
    remQuantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    dateOfReceipt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type CSVStatusUpdateWithoutBusinessRelationInput = {
    status?: StringFieldUpdateOperationsInput | string
    uploadedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type CSVStatusUncheckedUpdateWithoutBusinessRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    uploadedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type CSVStatusUncheckedUpdateManyWithoutBusinessRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    uploadedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutBusinessRelationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateWithoutBusinessRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyWithoutBusinessRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyCategoryRelationInput = {
    id?: number
    name: string
  }

  export type ProductUpdateWithoutCategoryRelationInput = {
    name?: StringFieldUpdateOperationsInput | string
    Batch?: BatchUpdateManyWithoutProductRelationNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Batch?: BatchUncheckedUpdateManyWithoutProductRelationNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BatchCreateManyProductRelationInput = {
    id?: number
    expiryDate: Date | string
    sellingPrice: number
    costOfGoods: number
    remQuantity: number
    soldQuantity: number
    dateOfReceipt?: Date | string
    businessId: string
  }

  export type BatchUpdateWithoutProductRelationInput = {
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    costOfGoods?: IntFieldUpdateOperationsInput | number
    remQuantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    dateOfReceipt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessRelation?: BusinessUpdateOneRequiredWithoutBatchNestedInput
    Transaction?: TransactionUpdateManyWithoutBatchRelationNestedInput
  }

  export type BatchUncheckedUpdateWithoutProductRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    costOfGoods?: IntFieldUpdateOperationsInput | number
    remQuantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    dateOfReceipt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: StringFieldUpdateOperationsInput | string
    Transaction?: TransactionUncheckedUpdateManyWithoutBatchRelationNestedInput
  }

  export type BatchUncheckedUpdateManyWithoutProductRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    costOfGoods?: IntFieldUpdateOperationsInput | number
    remQuantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    dateOfReceipt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyBatchRelationInput = {
    id?: number
    date?: Date | string
    amount: number
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type TransactionUpdateWithoutBatchRelationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionUncheckedUpdateWithoutBatchRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionUncheckedUpdateManyWithoutBatchRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}