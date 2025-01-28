
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
 * Model BusinessDimension
 * 
 */
export type BusinessDimension = $Result.DefaultSelection<Prisma.$BusinessDimensionPayload>
/**
 * Model CategoryDimension
 * 
 */
export type CategoryDimension = $Result.DefaultSelection<Prisma.$CategoryDimensionPayload>
/**
 * Model ProductDimension
 * 
 */
export type ProductDimension = $Result.DefaultSelection<Prisma.$ProductDimensionPayload>
/**
 * Model ProductRevenueFact
 * 
 */
export type ProductRevenueFact = $Result.DefaultSelection<Prisma.$ProductRevenueFactPayload>
/**
 * Model CategoryRevenueFact
 * 
 */
export type CategoryRevenueFact = $Result.DefaultSelection<Prisma.$CategoryRevenueFactPayload>
/**
 * Model BatchPrice
 * 
 */
export type BatchPrice = $Result.DefaultSelection<Prisma.$BatchPricePayload>
/**
 * Model DateDimension
 * 
 */
export type DateDimension = $Result.DefaultSelection<Prisma.$DateDimensionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BusinessDimensions
 * const businessDimensions = await prisma.businessDimension.findMany()
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
   * // Fetch zero or more BusinessDimensions
   * const businessDimensions = await prisma.businessDimension.findMany()
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
   * `prisma.businessDimension`: Exposes CRUD operations for the **BusinessDimension** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessDimensions
    * const businessDimensions = await prisma.businessDimension.findMany()
    * ```
    */
  get businessDimension(): Prisma.BusinessDimensionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryDimension`: Exposes CRUD operations for the **CategoryDimension** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryDimensions
    * const categoryDimensions = await prisma.categoryDimension.findMany()
    * ```
    */
  get categoryDimension(): Prisma.CategoryDimensionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productDimension`: Exposes CRUD operations for the **ProductDimension** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductDimensions
    * const productDimensions = await prisma.productDimension.findMany()
    * ```
    */
  get productDimension(): Prisma.ProductDimensionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productRevenueFact`: Exposes CRUD operations for the **ProductRevenueFact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductRevenueFacts
    * const productRevenueFacts = await prisma.productRevenueFact.findMany()
    * ```
    */
  get productRevenueFact(): Prisma.ProductRevenueFactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryRevenueFact`: Exposes CRUD operations for the **CategoryRevenueFact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryRevenueFacts
    * const categoryRevenueFacts = await prisma.categoryRevenueFact.findMany()
    * ```
    */
  get categoryRevenueFact(): Prisma.CategoryRevenueFactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batchPrice`: Exposes CRUD operations for the **BatchPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BatchPrices
    * const batchPrices = await prisma.batchPrice.findMany()
    * ```
    */
  get batchPrice(): Prisma.BatchPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dateDimension`: Exposes CRUD operations for the **DateDimension** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DateDimensions
    * const dateDimensions = await prisma.dateDimension.findMany()
    * ```
    */
  get dateDimension(): Prisma.DateDimensionDelegate<ExtArgs, ClientOptions>;
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
    BusinessDimension: 'BusinessDimension',
    CategoryDimension: 'CategoryDimension',
    ProductDimension: 'ProductDimension',
    ProductRevenueFact: 'ProductRevenueFact',
    CategoryRevenueFact: 'CategoryRevenueFact',
    BatchPrice: 'BatchPrice',
    DateDimension: 'DateDimension'
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
      modelProps: "businessDimension" | "categoryDimension" | "productDimension" | "productRevenueFact" | "categoryRevenueFact" | "batchPrice" | "dateDimension"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BusinessDimension: {
        payload: Prisma.$BusinessDimensionPayload<ExtArgs>
        fields: Prisma.BusinessDimensionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessDimensionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDimensionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessDimensionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDimensionPayload>
          }
          findFirst: {
            args: Prisma.BusinessDimensionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDimensionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessDimensionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDimensionPayload>
          }
          findMany: {
            args: Prisma.BusinessDimensionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDimensionPayload>[]
          }
          create: {
            args: Prisma.BusinessDimensionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDimensionPayload>
          }
          createMany: {
            args: Prisma.BusinessDimensionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessDimensionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDimensionPayload>[]
          }
          delete: {
            args: Prisma.BusinessDimensionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDimensionPayload>
          }
          update: {
            args: Prisma.BusinessDimensionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDimensionPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDimensionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessDimensionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessDimensionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDimensionPayload>[]
          }
          upsert: {
            args: Prisma.BusinessDimensionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDimensionPayload>
          }
          aggregate: {
            args: Prisma.BusinessDimensionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessDimension>
          }
          groupBy: {
            args: Prisma.BusinessDimensionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessDimensionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessDimensionCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessDimensionCountAggregateOutputType> | number
          }
        }
      }
      CategoryDimension: {
        payload: Prisma.$CategoryDimensionPayload<ExtArgs>
        fields: Prisma.CategoryDimensionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryDimensionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDimensionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryDimensionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDimensionPayload>
          }
          findFirst: {
            args: Prisma.CategoryDimensionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDimensionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryDimensionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDimensionPayload>
          }
          findMany: {
            args: Prisma.CategoryDimensionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDimensionPayload>[]
          }
          create: {
            args: Prisma.CategoryDimensionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDimensionPayload>
          }
          createMany: {
            args: Prisma.CategoryDimensionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryDimensionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDimensionPayload>[]
          }
          delete: {
            args: Prisma.CategoryDimensionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDimensionPayload>
          }
          update: {
            args: Prisma.CategoryDimensionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDimensionPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDimensionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryDimensionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryDimensionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDimensionPayload>[]
          }
          upsert: {
            args: Prisma.CategoryDimensionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDimensionPayload>
          }
          aggregate: {
            args: Prisma.CategoryDimensionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryDimension>
          }
          groupBy: {
            args: Prisma.CategoryDimensionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryDimensionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryDimensionCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryDimensionCountAggregateOutputType> | number
          }
        }
      }
      ProductDimension: {
        payload: Prisma.$ProductDimensionPayload<ExtArgs>
        fields: Prisma.ProductDimensionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductDimensionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDimensionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductDimensionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDimensionPayload>
          }
          findFirst: {
            args: Prisma.ProductDimensionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDimensionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductDimensionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDimensionPayload>
          }
          findMany: {
            args: Prisma.ProductDimensionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDimensionPayload>[]
          }
          create: {
            args: Prisma.ProductDimensionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDimensionPayload>
          }
          createMany: {
            args: Prisma.ProductDimensionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductDimensionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDimensionPayload>[]
          }
          delete: {
            args: Prisma.ProductDimensionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDimensionPayload>
          }
          update: {
            args: Prisma.ProductDimensionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDimensionPayload>
          }
          deleteMany: {
            args: Prisma.ProductDimensionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductDimensionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductDimensionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDimensionPayload>[]
          }
          upsert: {
            args: Prisma.ProductDimensionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDimensionPayload>
          }
          aggregate: {
            args: Prisma.ProductDimensionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductDimension>
          }
          groupBy: {
            args: Prisma.ProductDimensionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductDimensionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductDimensionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductDimensionCountAggregateOutputType> | number
          }
        }
      }
      ProductRevenueFact: {
        payload: Prisma.$ProductRevenueFactPayload<ExtArgs>
        fields: Prisma.ProductRevenueFactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductRevenueFactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRevenueFactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductRevenueFactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRevenueFactPayload>
          }
          findFirst: {
            args: Prisma.ProductRevenueFactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRevenueFactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductRevenueFactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRevenueFactPayload>
          }
          findMany: {
            args: Prisma.ProductRevenueFactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRevenueFactPayload>[]
          }
          create: {
            args: Prisma.ProductRevenueFactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRevenueFactPayload>
          }
          createMany: {
            args: Prisma.ProductRevenueFactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductRevenueFactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRevenueFactPayload>[]
          }
          delete: {
            args: Prisma.ProductRevenueFactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRevenueFactPayload>
          }
          update: {
            args: Prisma.ProductRevenueFactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRevenueFactPayload>
          }
          deleteMany: {
            args: Prisma.ProductRevenueFactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductRevenueFactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductRevenueFactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRevenueFactPayload>[]
          }
          upsert: {
            args: Prisma.ProductRevenueFactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRevenueFactPayload>
          }
          aggregate: {
            args: Prisma.ProductRevenueFactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductRevenueFact>
          }
          groupBy: {
            args: Prisma.ProductRevenueFactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductRevenueFactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductRevenueFactCountArgs<ExtArgs>
            result: $Utils.Optional<ProductRevenueFactCountAggregateOutputType> | number
          }
        }
      }
      CategoryRevenueFact: {
        payload: Prisma.$CategoryRevenueFactPayload<ExtArgs>
        fields: Prisma.CategoryRevenueFactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryRevenueFactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryRevenueFactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryRevenueFactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryRevenueFactPayload>
          }
          findFirst: {
            args: Prisma.CategoryRevenueFactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryRevenueFactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryRevenueFactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryRevenueFactPayload>
          }
          findMany: {
            args: Prisma.CategoryRevenueFactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryRevenueFactPayload>[]
          }
          create: {
            args: Prisma.CategoryRevenueFactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryRevenueFactPayload>
          }
          createMany: {
            args: Prisma.CategoryRevenueFactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryRevenueFactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryRevenueFactPayload>[]
          }
          delete: {
            args: Prisma.CategoryRevenueFactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryRevenueFactPayload>
          }
          update: {
            args: Prisma.CategoryRevenueFactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryRevenueFactPayload>
          }
          deleteMany: {
            args: Prisma.CategoryRevenueFactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryRevenueFactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryRevenueFactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryRevenueFactPayload>[]
          }
          upsert: {
            args: Prisma.CategoryRevenueFactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryRevenueFactPayload>
          }
          aggregate: {
            args: Prisma.CategoryRevenueFactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryRevenueFact>
          }
          groupBy: {
            args: Prisma.CategoryRevenueFactGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryRevenueFactGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryRevenueFactCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryRevenueFactCountAggregateOutputType> | number
          }
        }
      }
      BatchPrice: {
        payload: Prisma.$BatchPricePayload<ExtArgs>
        fields: Prisma.BatchPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPricePayload>
          }
          findFirst: {
            args: Prisma.BatchPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPricePayload>
          }
          findMany: {
            args: Prisma.BatchPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPricePayload>[]
          }
          create: {
            args: Prisma.BatchPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPricePayload>
          }
          createMany: {
            args: Prisma.BatchPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatchPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPricePayload>[]
          }
          delete: {
            args: Prisma.BatchPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPricePayload>
          }
          update: {
            args: Prisma.BatchPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPricePayload>
          }
          deleteMany: {
            args: Prisma.BatchPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatchPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPricePayload>[]
          }
          upsert: {
            args: Prisma.BatchPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPricePayload>
          }
          aggregate: {
            args: Prisma.BatchPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatchPrice>
          }
          groupBy: {
            args: Prisma.BatchPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchPriceCountArgs<ExtArgs>
            result: $Utils.Optional<BatchPriceCountAggregateOutputType> | number
          }
        }
      }
      DateDimension: {
        payload: Prisma.$DateDimensionPayload<ExtArgs>
        fields: Prisma.DateDimensionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DateDimensionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateDimensionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DateDimensionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateDimensionPayload>
          }
          findFirst: {
            args: Prisma.DateDimensionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateDimensionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DateDimensionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateDimensionPayload>
          }
          findMany: {
            args: Prisma.DateDimensionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateDimensionPayload>[]
          }
          create: {
            args: Prisma.DateDimensionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateDimensionPayload>
          }
          createMany: {
            args: Prisma.DateDimensionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DateDimensionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateDimensionPayload>[]
          }
          delete: {
            args: Prisma.DateDimensionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateDimensionPayload>
          }
          update: {
            args: Prisma.DateDimensionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateDimensionPayload>
          }
          deleteMany: {
            args: Prisma.DateDimensionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DateDimensionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DateDimensionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateDimensionPayload>[]
          }
          upsert: {
            args: Prisma.DateDimensionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateDimensionPayload>
          }
          aggregate: {
            args: Prisma.DateDimensionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDateDimension>
          }
          groupBy: {
            args: Prisma.DateDimensionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DateDimensionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DateDimensionCountArgs<ExtArgs>
            result: $Utils.Optional<DateDimensionCountAggregateOutputType> | number
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
    businessDimension?: BusinessDimensionOmit
    categoryDimension?: CategoryDimensionOmit
    productDimension?: ProductDimensionOmit
    productRevenueFact?: ProductRevenueFactOmit
    categoryRevenueFact?: CategoryRevenueFactOmit
    batchPrice?: BatchPriceOmit
    dateDimension?: DateDimensionOmit
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
   * Count Type BusinessDimensionCountOutputType
   */

  export type BusinessDimensionCountOutputType = {
    product_revenues: number
    category_revenues: number
    product_prices: number
  }

  export type BusinessDimensionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_revenues?: boolean | BusinessDimensionCountOutputTypeCountProduct_revenuesArgs
    category_revenues?: boolean | BusinessDimensionCountOutputTypeCountCategory_revenuesArgs
    product_prices?: boolean | BusinessDimensionCountOutputTypeCountProduct_pricesArgs
  }

  // Custom InputTypes
  /**
   * BusinessDimensionCountOutputType without action
   */
  export type BusinessDimensionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimensionCountOutputType
     */
    select?: BusinessDimensionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessDimensionCountOutputType without action
   */
  export type BusinessDimensionCountOutputTypeCountProduct_revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRevenueFactWhereInput
  }

  /**
   * BusinessDimensionCountOutputType without action
   */
  export type BusinessDimensionCountOutputTypeCountCategory_revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryRevenueFactWhereInput
  }

  /**
   * BusinessDimensionCountOutputType without action
   */
  export type BusinessDimensionCountOutputTypeCountProduct_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchPriceWhereInput
  }


  /**
   * Count Type CategoryDimensionCountOutputType
   */

  export type CategoryDimensionCountOutputType = {
    products: number
    category_revenues: number
  }

  export type CategoryDimensionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryDimensionCountOutputTypeCountProductsArgs
    category_revenues?: boolean | CategoryDimensionCountOutputTypeCountCategory_revenuesArgs
  }

  // Custom InputTypes
  /**
   * CategoryDimensionCountOutputType without action
   */
  export type CategoryDimensionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimensionCountOutputType
     */
    select?: CategoryDimensionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryDimensionCountOutputType without action
   */
  export type CategoryDimensionCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDimensionWhereInput
  }

  /**
   * CategoryDimensionCountOutputType without action
   */
  export type CategoryDimensionCountOutputTypeCountCategory_revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryRevenueFactWhereInput
  }


  /**
   * Count Type ProductDimensionCountOutputType
   */

  export type ProductDimensionCountOutputType = {
    product_revenues: number
    prices: number
  }

  export type ProductDimensionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_revenues?: boolean | ProductDimensionCountOutputTypeCountProduct_revenuesArgs
    prices?: boolean | ProductDimensionCountOutputTypeCountPricesArgs
  }

  // Custom InputTypes
  /**
   * ProductDimensionCountOutputType without action
   */
  export type ProductDimensionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimensionCountOutputType
     */
    select?: ProductDimensionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductDimensionCountOutputType without action
   */
  export type ProductDimensionCountOutputTypeCountProduct_revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRevenueFactWhereInput
  }

  /**
   * ProductDimensionCountOutputType without action
   */
  export type ProductDimensionCountOutputTypeCountPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchPriceWhereInput
  }


  /**
   * Count Type DateDimensionCountOutputType
   */

  export type DateDimensionCountOutputType = {
    product_revenues: number
    category_revenues: number
    batch_prices: number
    expiring_products: number
  }

  export type DateDimensionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_revenues?: boolean | DateDimensionCountOutputTypeCountProduct_revenuesArgs
    category_revenues?: boolean | DateDimensionCountOutputTypeCountCategory_revenuesArgs
    batch_prices?: boolean | DateDimensionCountOutputTypeCountBatch_pricesArgs
    expiring_products?: boolean | DateDimensionCountOutputTypeCountExpiring_productsArgs
  }

  // Custom InputTypes
  /**
   * DateDimensionCountOutputType without action
   */
  export type DateDimensionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimensionCountOutputType
     */
    select?: DateDimensionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DateDimensionCountOutputType without action
   */
  export type DateDimensionCountOutputTypeCountProduct_revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRevenueFactWhereInput
  }

  /**
   * DateDimensionCountOutputType without action
   */
  export type DateDimensionCountOutputTypeCountCategory_revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryRevenueFactWhereInput
  }

  /**
   * DateDimensionCountOutputType without action
   */
  export type DateDimensionCountOutputTypeCountBatch_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchPriceWhereInput
  }

  /**
   * DateDimensionCountOutputType without action
   */
  export type DateDimensionCountOutputTypeCountExpiring_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDimensionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BusinessDimension
   */

  export type AggregateBusinessDimension = {
    _count: BusinessDimensionCountAggregateOutputType | null
    _avg: BusinessDimensionAvgAggregateOutputType | null
    _sum: BusinessDimensionSumAggregateOutputType | null
    _min: BusinessDimensionMinAggregateOutputType | null
    _max: BusinessDimensionMaxAggregateOutputType | null
  }

  export type BusinessDimensionAvgAggregateOutputType = {
    business_id: number | null
  }

  export type BusinessDimensionSumAggregateOutputType = {
    business_id: number | null
  }

  export type BusinessDimensionMinAggregateOutputType = {
    business_id: number | null
    business_name: string | null
  }

  export type BusinessDimensionMaxAggregateOutputType = {
    business_id: number | null
    business_name: string | null
  }

  export type BusinessDimensionCountAggregateOutputType = {
    business_id: number
    business_name: number
    _all: number
  }


  export type BusinessDimensionAvgAggregateInputType = {
    business_id?: true
  }

  export type BusinessDimensionSumAggregateInputType = {
    business_id?: true
  }

  export type BusinessDimensionMinAggregateInputType = {
    business_id?: true
    business_name?: true
  }

  export type BusinessDimensionMaxAggregateInputType = {
    business_id?: true
    business_name?: true
  }

  export type BusinessDimensionCountAggregateInputType = {
    business_id?: true
    business_name?: true
    _all?: true
  }

  export type BusinessDimensionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessDimension to aggregate.
     */
    where?: BusinessDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessDimensions to fetch.
     */
    orderBy?: BusinessDimensionOrderByWithRelationInput | BusinessDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessDimensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessDimensions
    **/
    _count?: true | BusinessDimensionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessDimensionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessDimensionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessDimensionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessDimensionMaxAggregateInputType
  }

  export type GetBusinessDimensionAggregateType<T extends BusinessDimensionAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessDimension]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessDimension[P]>
      : GetScalarType<T[P], AggregateBusinessDimension[P]>
  }




  export type BusinessDimensionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessDimensionWhereInput
    orderBy?: BusinessDimensionOrderByWithAggregationInput | BusinessDimensionOrderByWithAggregationInput[]
    by: BusinessDimensionScalarFieldEnum[] | BusinessDimensionScalarFieldEnum
    having?: BusinessDimensionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessDimensionCountAggregateInputType | true
    _avg?: BusinessDimensionAvgAggregateInputType
    _sum?: BusinessDimensionSumAggregateInputType
    _min?: BusinessDimensionMinAggregateInputType
    _max?: BusinessDimensionMaxAggregateInputType
  }

  export type BusinessDimensionGroupByOutputType = {
    business_id: number
    business_name: string
    _count: BusinessDimensionCountAggregateOutputType | null
    _avg: BusinessDimensionAvgAggregateOutputType | null
    _sum: BusinessDimensionSumAggregateOutputType | null
    _min: BusinessDimensionMinAggregateOutputType | null
    _max: BusinessDimensionMaxAggregateOutputType | null
  }

  type GetBusinessDimensionGroupByPayload<T extends BusinessDimensionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessDimensionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessDimensionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessDimensionGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessDimensionGroupByOutputType[P]>
        }
      >
    >


  export type BusinessDimensionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    business_id?: boolean
    business_name?: boolean
    product_revenues?: boolean | BusinessDimension$product_revenuesArgs<ExtArgs>
    category_revenues?: boolean | BusinessDimension$category_revenuesArgs<ExtArgs>
    product_prices?: boolean | BusinessDimension$product_pricesArgs<ExtArgs>
    _count?: boolean | BusinessDimensionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessDimension"]>

  export type BusinessDimensionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    business_id?: boolean
    business_name?: boolean
  }, ExtArgs["result"]["businessDimension"]>

  export type BusinessDimensionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    business_id?: boolean
    business_name?: boolean
  }, ExtArgs["result"]["businessDimension"]>

  export type BusinessDimensionSelectScalar = {
    business_id?: boolean
    business_name?: boolean
  }

  export type BusinessDimensionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"business_id" | "business_name", ExtArgs["result"]["businessDimension"]>
  export type BusinessDimensionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_revenues?: boolean | BusinessDimension$product_revenuesArgs<ExtArgs>
    category_revenues?: boolean | BusinessDimension$category_revenuesArgs<ExtArgs>
    product_prices?: boolean | BusinessDimension$product_pricesArgs<ExtArgs>
    _count?: boolean | BusinessDimensionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessDimensionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusinessDimensionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessDimensionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessDimension"
    objects: {
      product_revenues: Prisma.$ProductRevenueFactPayload<ExtArgs>[]
      category_revenues: Prisma.$CategoryRevenueFactPayload<ExtArgs>[]
      product_prices: Prisma.$BatchPricePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      business_id: number
      business_name: string
    }, ExtArgs["result"]["businessDimension"]>
    composites: {}
  }

  type BusinessDimensionGetPayload<S extends boolean | null | undefined | BusinessDimensionDefaultArgs> = $Result.GetResult<Prisma.$BusinessDimensionPayload, S>

  type BusinessDimensionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessDimensionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessDimensionCountAggregateInputType | true
    }

  export interface BusinessDimensionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessDimension'], meta: { name: 'BusinessDimension' } }
    /**
     * Find zero or one BusinessDimension that matches the filter.
     * @param {BusinessDimensionFindUniqueArgs} args - Arguments to find a BusinessDimension
     * @example
     * // Get one BusinessDimension
     * const businessDimension = await prisma.businessDimension.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessDimensionFindUniqueArgs>(args: SelectSubset<T, BusinessDimensionFindUniqueArgs<ExtArgs>>): Prisma__BusinessDimensionClient<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one BusinessDimension that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessDimensionFindUniqueOrThrowArgs} args - Arguments to find a BusinessDimension
     * @example
     * // Get one BusinessDimension
     * const businessDimension = await prisma.businessDimension.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessDimensionFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessDimensionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessDimensionClient<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first BusinessDimension that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDimensionFindFirstArgs} args - Arguments to find a BusinessDimension
     * @example
     * // Get one BusinessDimension
     * const businessDimension = await prisma.businessDimension.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessDimensionFindFirstArgs>(args?: SelectSubset<T, BusinessDimensionFindFirstArgs<ExtArgs>>): Prisma__BusinessDimensionClient<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first BusinessDimension that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDimensionFindFirstOrThrowArgs} args - Arguments to find a BusinessDimension
     * @example
     * // Get one BusinessDimension
     * const businessDimension = await prisma.businessDimension.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessDimensionFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessDimensionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessDimensionClient<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more BusinessDimensions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDimensionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessDimensions
     * const businessDimensions = await prisma.businessDimension.findMany()
     * 
     * // Get first 10 BusinessDimensions
     * const businessDimensions = await prisma.businessDimension.findMany({ take: 10 })
     * 
     * // Only select the `business_id`
     * const businessDimensionWithBusiness_idOnly = await prisma.businessDimension.findMany({ select: { business_id: true } })
     * 
     */
    findMany<T extends BusinessDimensionFindManyArgs>(args?: SelectSubset<T, BusinessDimensionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a BusinessDimension.
     * @param {BusinessDimensionCreateArgs} args - Arguments to create a BusinessDimension.
     * @example
     * // Create one BusinessDimension
     * const BusinessDimension = await prisma.businessDimension.create({
     *   data: {
     *     // ... data to create a BusinessDimension
     *   }
     * })
     * 
     */
    create<T extends BusinessDimensionCreateArgs>(args: SelectSubset<T, BusinessDimensionCreateArgs<ExtArgs>>): Prisma__BusinessDimensionClient<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many BusinessDimensions.
     * @param {BusinessDimensionCreateManyArgs} args - Arguments to create many BusinessDimensions.
     * @example
     * // Create many BusinessDimensions
     * const businessDimension = await prisma.businessDimension.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessDimensionCreateManyArgs>(args?: SelectSubset<T, BusinessDimensionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessDimensions and returns the data saved in the database.
     * @param {BusinessDimensionCreateManyAndReturnArgs} args - Arguments to create many BusinessDimensions.
     * @example
     * // Create many BusinessDimensions
     * const businessDimension = await prisma.businessDimension.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessDimensions and only return the `business_id`
     * const businessDimensionWithBusiness_idOnly = await prisma.businessDimension.createManyAndReturn({
     *   select: { business_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessDimensionCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessDimensionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a BusinessDimension.
     * @param {BusinessDimensionDeleteArgs} args - Arguments to delete one BusinessDimension.
     * @example
     * // Delete one BusinessDimension
     * const BusinessDimension = await prisma.businessDimension.delete({
     *   where: {
     *     // ... filter to delete one BusinessDimension
     *   }
     * })
     * 
     */
    delete<T extends BusinessDimensionDeleteArgs>(args: SelectSubset<T, BusinessDimensionDeleteArgs<ExtArgs>>): Prisma__BusinessDimensionClient<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one BusinessDimension.
     * @param {BusinessDimensionUpdateArgs} args - Arguments to update one BusinessDimension.
     * @example
     * // Update one BusinessDimension
     * const businessDimension = await prisma.businessDimension.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessDimensionUpdateArgs>(args: SelectSubset<T, BusinessDimensionUpdateArgs<ExtArgs>>): Prisma__BusinessDimensionClient<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more BusinessDimensions.
     * @param {BusinessDimensionDeleteManyArgs} args - Arguments to filter BusinessDimensions to delete.
     * @example
     * // Delete a few BusinessDimensions
     * const { count } = await prisma.businessDimension.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDimensionDeleteManyArgs>(args?: SelectSubset<T, BusinessDimensionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessDimensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDimensionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessDimensions
     * const businessDimension = await prisma.businessDimension.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessDimensionUpdateManyArgs>(args: SelectSubset<T, BusinessDimensionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessDimensions and returns the data updated in the database.
     * @param {BusinessDimensionUpdateManyAndReturnArgs} args - Arguments to update many BusinessDimensions.
     * @example
     * // Update many BusinessDimensions
     * const businessDimension = await prisma.businessDimension.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessDimensions and only return the `business_id`
     * const businessDimensionWithBusiness_idOnly = await prisma.businessDimension.updateManyAndReturn({
     *   select: { business_id: true },
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
    updateManyAndReturn<T extends BusinessDimensionUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessDimensionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one BusinessDimension.
     * @param {BusinessDimensionUpsertArgs} args - Arguments to update or create a BusinessDimension.
     * @example
     * // Update or create a BusinessDimension
     * const businessDimension = await prisma.businessDimension.upsert({
     *   create: {
     *     // ... data to create a BusinessDimension
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessDimension we want to update
     *   }
     * })
     */
    upsert<T extends BusinessDimensionUpsertArgs>(args: SelectSubset<T, BusinessDimensionUpsertArgs<ExtArgs>>): Prisma__BusinessDimensionClient<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of BusinessDimensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDimensionCountArgs} args - Arguments to filter BusinessDimensions to count.
     * @example
     * // Count the number of BusinessDimensions
     * const count = await prisma.businessDimension.count({
     *   where: {
     *     // ... the filter for the BusinessDimensions we want to count
     *   }
     * })
    **/
    count<T extends BusinessDimensionCountArgs>(
      args?: Subset<T, BusinessDimensionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessDimensionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessDimension.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDimensionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessDimensionAggregateArgs>(args: Subset<T, BusinessDimensionAggregateArgs>): Prisma.PrismaPromise<GetBusinessDimensionAggregateType<T>>

    /**
     * Group by BusinessDimension.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDimensionGroupByArgs} args - Group by arguments.
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
      T extends BusinessDimensionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessDimensionGroupByArgs['orderBy'] }
        : { orderBy?: BusinessDimensionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessDimensionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessDimensionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessDimension model
   */
  readonly fields: BusinessDimensionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessDimension.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessDimensionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_revenues<T extends BusinessDimension$product_revenuesArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDimension$product_revenuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    category_revenues<T extends BusinessDimension$category_revenuesArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDimension$category_revenuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    product_prices<T extends BusinessDimension$product_pricesArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDimension$product_pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the BusinessDimension model
   */ 
  interface BusinessDimensionFieldRefs {
    readonly business_id: FieldRef<"BusinessDimension", 'Int'>
    readonly business_name: FieldRef<"BusinessDimension", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BusinessDimension findUnique
   */
  export type BusinessDimensionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimension
     */
    select?: BusinessDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDimension
     */
    omit?: BusinessDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDimensionInclude<ExtArgs> | null
    /**
     * Filter, which BusinessDimension to fetch.
     */
    where: BusinessDimensionWhereUniqueInput
  }

  /**
   * BusinessDimension findUniqueOrThrow
   */
  export type BusinessDimensionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimension
     */
    select?: BusinessDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDimension
     */
    omit?: BusinessDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDimensionInclude<ExtArgs> | null
    /**
     * Filter, which BusinessDimension to fetch.
     */
    where: BusinessDimensionWhereUniqueInput
  }

  /**
   * BusinessDimension findFirst
   */
  export type BusinessDimensionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimension
     */
    select?: BusinessDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDimension
     */
    omit?: BusinessDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDimensionInclude<ExtArgs> | null
    /**
     * Filter, which BusinessDimension to fetch.
     */
    where?: BusinessDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessDimensions to fetch.
     */
    orderBy?: BusinessDimensionOrderByWithRelationInput | BusinessDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessDimensions.
     */
    cursor?: BusinessDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessDimensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessDimensions.
     */
    distinct?: BusinessDimensionScalarFieldEnum | BusinessDimensionScalarFieldEnum[]
  }

  /**
   * BusinessDimension findFirstOrThrow
   */
  export type BusinessDimensionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimension
     */
    select?: BusinessDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDimension
     */
    omit?: BusinessDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDimensionInclude<ExtArgs> | null
    /**
     * Filter, which BusinessDimension to fetch.
     */
    where?: BusinessDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessDimensions to fetch.
     */
    orderBy?: BusinessDimensionOrderByWithRelationInput | BusinessDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessDimensions.
     */
    cursor?: BusinessDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessDimensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessDimensions.
     */
    distinct?: BusinessDimensionScalarFieldEnum | BusinessDimensionScalarFieldEnum[]
  }

  /**
   * BusinessDimension findMany
   */
  export type BusinessDimensionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimension
     */
    select?: BusinessDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDimension
     */
    omit?: BusinessDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDimensionInclude<ExtArgs> | null
    /**
     * Filter, which BusinessDimensions to fetch.
     */
    where?: BusinessDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessDimensions to fetch.
     */
    orderBy?: BusinessDimensionOrderByWithRelationInput | BusinessDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessDimensions.
     */
    cursor?: BusinessDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessDimensions.
     */
    skip?: number
    distinct?: BusinessDimensionScalarFieldEnum | BusinessDimensionScalarFieldEnum[]
  }

  /**
   * BusinessDimension create
   */
  export type BusinessDimensionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimension
     */
    select?: BusinessDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDimension
     */
    omit?: BusinessDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDimensionInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessDimension.
     */
    data: XOR<BusinessDimensionCreateInput, BusinessDimensionUncheckedCreateInput>
  }

  /**
   * BusinessDimension createMany
   */
  export type BusinessDimensionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessDimensions.
     */
    data: BusinessDimensionCreateManyInput | BusinessDimensionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessDimension createManyAndReturn
   */
  export type BusinessDimensionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimension
     */
    select?: BusinessDimensionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDimension
     */
    omit?: BusinessDimensionOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessDimensions.
     */
    data: BusinessDimensionCreateManyInput | BusinessDimensionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessDimension update
   */
  export type BusinessDimensionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimension
     */
    select?: BusinessDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDimension
     */
    omit?: BusinessDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDimensionInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessDimension.
     */
    data: XOR<BusinessDimensionUpdateInput, BusinessDimensionUncheckedUpdateInput>
    /**
     * Choose, which BusinessDimension to update.
     */
    where: BusinessDimensionWhereUniqueInput
  }

  /**
   * BusinessDimension updateMany
   */
  export type BusinessDimensionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessDimensions.
     */
    data: XOR<BusinessDimensionUpdateManyMutationInput, BusinessDimensionUncheckedUpdateManyInput>
    /**
     * Filter which BusinessDimensions to update
     */
    where?: BusinessDimensionWhereInput
    /**
     * Limit how many BusinessDimensions to update.
     */
    limit?: number
  }

  /**
   * BusinessDimension updateManyAndReturn
   */
  export type BusinessDimensionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimension
     */
    select?: BusinessDimensionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDimension
     */
    omit?: BusinessDimensionOmit<ExtArgs> | null
    /**
     * The data used to update BusinessDimensions.
     */
    data: XOR<BusinessDimensionUpdateManyMutationInput, BusinessDimensionUncheckedUpdateManyInput>
    /**
     * Filter which BusinessDimensions to update
     */
    where?: BusinessDimensionWhereInput
    /**
     * Limit how many BusinessDimensions to update.
     */
    limit?: number
  }

  /**
   * BusinessDimension upsert
   */
  export type BusinessDimensionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimension
     */
    select?: BusinessDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDimension
     */
    omit?: BusinessDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDimensionInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessDimension to update in case it exists.
     */
    where: BusinessDimensionWhereUniqueInput
    /**
     * In case the BusinessDimension found by the `where` argument doesn't exist, create a new BusinessDimension with this data.
     */
    create: XOR<BusinessDimensionCreateInput, BusinessDimensionUncheckedCreateInput>
    /**
     * In case the BusinessDimension was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessDimensionUpdateInput, BusinessDimensionUncheckedUpdateInput>
  }

  /**
   * BusinessDimension delete
   */
  export type BusinessDimensionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimension
     */
    select?: BusinessDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDimension
     */
    omit?: BusinessDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDimensionInclude<ExtArgs> | null
    /**
     * Filter which BusinessDimension to delete.
     */
    where: BusinessDimensionWhereUniqueInput
  }

  /**
   * BusinessDimension deleteMany
   */
  export type BusinessDimensionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessDimensions to delete
     */
    where?: BusinessDimensionWhereInput
    /**
     * Limit how many BusinessDimensions to delete.
     */
    limit?: number
  }

  /**
   * BusinessDimension.product_revenues
   */
  export type BusinessDimension$product_revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
    where?: ProductRevenueFactWhereInput
    orderBy?: ProductRevenueFactOrderByWithRelationInput | ProductRevenueFactOrderByWithRelationInput[]
    cursor?: ProductRevenueFactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductRevenueFactScalarFieldEnum | ProductRevenueFactScalarFieldEnum[]
  }

  /**
   * BusinessDimension.category_revenues
   */
  export type BusinessDimension$category_revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
    where?: CategoryRevenueFactWhereInput
    orderBy?: CategoryRevenueFactOrderByWithRelationInput | CategoryRevenueFactOrderByWithRelationInput[]
    cursor?: CategoryRevenueFactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryRevenueFactScalarFieldEnum | CategoryRevenueFactScalarFieldEnum[]
  }

  /**
   * BusinessDimension.product_prices
   */
  export type BusinessDimension$product_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
    where?: BatchPriceWhereInput
    orderBy?: BatchPriceOrderByWithRelationInput | BatchPriceOrderByWithRelationInput[]
    cursor?: BatchPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchPriceScalarFieldEnum | BatchPriceScalarFieldEnum[]
  }

  /**
   * BusinessDimension without action
   */
  export type BusinessDimensionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDimension
     */
    select?: BusinessDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDimension
     */
    omit?: BusinessDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDimensionInclude<ExtArgs> | null
  }


  /**
   * Model CategoryDimension
   */

  export type AggregateCategoryDimension = {
    _count: CategoryDimensionCountAggregateOutputType | null
    _avg: CategoryDimensionAvgAggregateOutputType | null
    _sum: CategoryDimensionSumAggregateOutputType | null
    _min: CategoryDimensionMinAggregateOutputType | null
    _max: CategoryDimensionMaxAggregateOutputType | null
  }

  export type CategoryDimensionAvgAggregateOutputType = {
    category_id: number | null
  }

  export type CategoryDimensionSumAggregateOutputType = {
    category_id: number | null
  }

  export type CategoryDimensionMinAggregateOutputType = {
    category_id: number | null
    category_name: string | null
    has_expiry_date: boolean | null
  }

  export type CategoryDimensionMaxAggregateOutputType = {
    category_id: number | null
    category_name: string | null
    has_expiry_date: boolean | null
  }

  export type CategoryDimensionCountAggregateOutputType = {
    category_id: number
    category_name: number
    has_expiry_date: number
    _all: number
  }


  export type CategoryDimensionAvgAggregateInputType = {
    category_id?: true
  }

  export type CategoryDimensionSumAggregateInputType = {
    category_id?: true
  }

  export type CategoryDimensionMinAggregateInputType = {
    category_id?: true
    category_name?: true
    has_expiry_date?: true
  }

  export type CategoryDimensionMaxAggregateInputType = {
    category_id?: true
    category_name?: true
    has_expiry_date?: true
  }

  export type CategoryDimensionCountAggregateInputType = {
    category_id?: true
    category_name?: true
    has_expiry_date?: true
    _all?: true
  }

  export type CategoryDimensionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryDimension to aggregate.
     */
    where?: CategoryDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryDimensions to fetch.
     */
    orderBy?: CategoryDimensionOrderByWithRelationInput | CategoryDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryDimensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryDimensions
    **/
    _count?: true | CategoryDimensionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryDimensionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryDimensionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryDimensionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryDimensionMaxAggregateInputType
  }

  export type GetCategoryDimensionAggregateType<T extends CategoryDimensionAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryDimension]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryDimension[P]>
      : GetScalarType<T[P], AggregateCategoryDimension[P]>
  }




  export type CategoryDimensionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryDimensionWhereInput
    orderBy?: CategoryDimensionOrderByWithAggregationInput | CategoryDimensionOrderByWithAggregationInput[]
    by: CategoryDimensionScalarFieldEnum[] | CategoryDimensionScalarFieldEnum
    having?: CategoryDimensionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryDimensionCountAggregateInputType | true
    _avg?: CategoryDimensionAvgAggregateInputType
    _sum?: CategoryDimensionSumAggregateInputType
    _min?: CategoryDimensionMinAggregateInputType
    _max?: CategoryDimensionMaxAggregateInputType
  }

  export type CategoryDimensionGroupByOutputType = {
    category_id: number
    category_name: string
    has_expiry_date: boolean
    _count: CategoryDimensionCountAggregateOutputType | null
    _avg: CategoryDimensionAvgAggregateOutputType | null
    _sum: CategoryDimensionSumAggregateOutputType | null
    _min: CategoryDimensionMinAggregateOutputType | null
    _max: CategoryDimensionMaxAggregateOutputType | null
  }

  type GetCategoryDimensionGroupByPayload<T extends CategoryDimensionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryDimensionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryDimensionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryDimensionGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryDimensionGroupByOutputType[P]>
        }
      >
    >


  export type CategoryDimensionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    has_expiry_date?: boolean
    products?: boolean | CategoryDimension$productsArgs<ExtArgs>
    category_revenues?: boolean | CategoryDimension$category_revenuesArgs<ExtArgs>
    _count?: boolean | CategoryDimensionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryDimension"]>

  export type CategoryDimensionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    has_expiry_date?: boolean
  }, ExtArgs["result"]["categoryDimension"]>

  export type CategoryDimensionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    has_expiry_date?: boolean
  }, ExtArgs["result"]["categoryDimension"]>

  export type CategoryDimensionSelectScalar = {
    category_id?: boolean
    category_name?: boolean
    has_expiry_date?: boolean
  }

  export type CategoryDimensionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "category_name" | "has_expiry_date", ExtArgs["result"]["categoryDimension"]>
  export type CategoryDimensionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryDimension$productsArgs<ExtArgs>
    category_revenues?: boolean | CategoryDimension$category_revenuesArgs<ExtArgs>
    _count?: boolean | CategoryDimensionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryDimensionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryDimensionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryDimensionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryDimension"
    objects: {
      products: Prisma.$ProductDimensionPayload<ExtArgs>[]
      category_revenues: Prisma.$CategoryRevenueFactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      category_name: string
      has_expiry_date: boolean
    }, ExtArgs["result"]["categoryDimension"]>
    composites: {}
  }

  type CategoryDimensionGetPayload<S extends boolean | null | undefined | CategoryDimensionDefaultArgs> = $Result.GetResult<Prisma.$CategoryDimensionPayload, S>

  type CategoryDimensionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryDimensionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryDimensionCountAggregateInputType | true
    }

  export interface CategoryDimensionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryDimension'], meta: { name: 'CategoryDimension' } }
    /**
     * Find zero or one CategoryDimension that matches the filter.
     * @param {CategoryDimensionFindUniqueArgs} args - Arguments to find a CategoryDimension
     * @example
     * // Get one CategoryDimension
     * const categoryDimension = await prisma.categoryDimension.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryDimensionFindUniqueArgs>(args: SelectSubset<T, CategoryDimensionFindUniqueArgs<ExtArgs>>): Prisma__CategoryDimensionClient<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CategoryDimension that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryDimensionFindUniqueOrThrowArgs} args - Arguments to find a CategoryDimension
     * @example
     * // Get one CategoryDimension
     * const categoryDimension = await prisma.categoryDimension.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryDimensionFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryDimensionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryDimensionClient<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CategoryDimension that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDimensionFindFirstArgs} args - Arguments to find a CategoryDimension
     * @example
     * // Get one CategoryDimension
     * const categoryDimension = await prisma.categoryDimension.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryDimensionFindFirstArgs>(args?: SelectSubset<T, CategoryDimensionFindFirstArgs<ExtArgs>>): Prisma__CategoryDimensionClient<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CategoryDimension that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDimensionFindFirstOrThrowArgs} args - Arguments to find a CategoryDimension
     * @example
     * // Get one CategoryDimension
     * const categoryDimension = await prisma.categoryDimension.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryDimensionFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryDimensionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryDimensionClient<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CategoryDimensions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDimensionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryDimensions
     * const categoryDimensions = await prisma.categoryDimension.findMany()
     * 
     * // Get first 10 CategoryDimensions
     * const categoryDimensions = await prisma.categoryDimension.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoryDimensionWithCategory_idOnly = await prisma.categoryDimension.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends CategoryDimensionFindManyArgs>(args?: SelectSubset<T, CategoryDimensionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CategoryDimension.
     * @param {CategoryDimensionCreateArgs} args - Arguments to create a CategoryDimension.
     * @example
     * // Create one CategoryDimension
     * const CategoryDimension = await prisma.categoryDimension.create({
     *   data: {
     *     // ... data to create a CategoryDimension
     *   }
     * })
     * 
     */
    create<T extends CategoryDimensionCreateArgs>(args: SelectSubset<T, CategoryDimensionCreateArgs<ExtArgs>>): Prisma__CategoryDimensionClient<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CategoryDimensions.
     * @param {CategoryDimensionCreateManyArgs} args - Arguments to create many CategoryDimensions.
     * @example
     * // Create many CategoryDimensions
     * const categoryDimension = await prisma.categoryDimension.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryDimensionCreateManyArgs>(args?: SelectSubset<T, CategoryDimensionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryDimensions and returns the data saved in the database.
     * @param {CategoryDimensionCreateManyAndReturnArgs} args - Arguments to create many CategoryDimensions.
     * @example
     * // Create many CategoryDimensions
     * const categoryDimension = await prisma.categoryDimension.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryDimensions and only return the `category_id`
     * const categoryDimensionWithCategory_idOnly = await prisma.categoryDimension.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryDimensionCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryDimensionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CategoryDimension.
     * @param {CategoryDimensionDeleteArgs} args - Arguments to delete one CategoryDimension.
     * @example
     * // Delete one CategoryDimension
     * const CategoryDimension = await prisma.categoryDimension.delete({
     *   where: {
     *     // ... filter to delete one CategoryDimension
     *   }
     * })
     * 
     */
    delete<T extends CategoryDimensionDeleteArgs>(args: SelectSubset<T, CategoryDimensionDeleteArgs<ExtArgs>>): Prisma__CategoryDimensionClient<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CategoryDimension.
     * @param {CategoryDimensionUpdateArgs} args - Arguments to update one CategoryDimension.
     * @example
     * // Update one CategoryDimension
     * const categoryDimension = await prisma.categoryDimension.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryDimensionUpdateArgs>(args: SelectSubset<T, CategoryDimensionUpdateArgs<ExtArgs>>): Prisma__CategoryDimensionClient<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CategoryDimensions.
     * @param {CategoryDimensionDeleteManyArgs} args - Arguments to filter CategoryDimensions to delete.
     * @example
     * // Delete a few CategoryDimensions
     * const { count } = await prisma.categoryDimension.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDimensionDeleteManyArgs>(args?: SelectSubset<T, CategoryDimensionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryDimensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDimensionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryDimensions
     * const categoryDimension = await prisma.categoryDimension.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryDimensionUpdateManyArgs>(args: SelectSubset<T, CategoryDimensionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryDimensions and returns the data updated in the database.
     * @param {CategoryDimensionUpdateManyAndReturnArgs} args - Arguments to update many CategoryDimensions.
     * @example
     * // Update many CategoryDimensions
     * const categoryDimension = await prisma.categoryDimension.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoryDimensions and only return the `category_id`
     * const categoryDimensionWithCategory_idOnly = await prisma.categoryDimension.updateManyAndReturn({
     *   select: { category_id: true },
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
    updateManyAndReturn<T extends CategoryDimensionUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryDimensionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CategoryDimension.
     * @param {CategoryDimensionUpsertArgs} args - Arguments to update or create a CategoryDimension.
     * @example
     * // Update or create a CategoryDimension
     * const categoryDimension = await prisma.categoryDimension.upsert({
     *   create: {
     *     // ... data to create a CategoryDimension
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryDimension we want to update
     *   }
     * })
     */
    upsert<T extends CategoryDimensionUpsertArgs>(args: SelectSubset<T, CategoryDimensionUpsertArgs<ExtArgs>>): Prisma__CategoryDimensionClient<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CategoryDimensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDimensionCountArgs} args - Arguments to filter CategoryDimensions to count.
     * @example
     * // Count the number of CategoryDimensions
     * const count = await prisma.categoryDimension.count({
     *   where: {
     *     // ... the filter for the CategoryDimensions we want to count
     *   }
     * })
    **/
    count<T extends CategoryDimensionCountArgs>(
      args?: Subset<T, CategoryDimensionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryDimensionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryDimension.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDimensionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryDimensionAggregateArgs>(args: Subset<T, CategoryDimensionAggregateArgs>): Prisma.PrismaPromise<GetCategoryDimensionAggregateType<T>>

    /**
     * Group by CategoryDimension.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDimensionGroupByArgs} args - Group by arguments.
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
      T extends CategoryDimensionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryDimensionGroupByArgs['orderBy'] }
        : { orderBy?: CategoryDimensionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryDimensionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryDimensionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryDimension model
   */
  readonly fields: CategoryDimensionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryDimension.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryDimensionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends CategoryDimension$productsArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDimension$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    category_revenues<T extends CategoryDimension$category_revenuesArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDimension$category_revenuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the CategoryDimension model
   */ 
  interface CategoryDimensionFieldRefs {
    readonly category_id: FieldRef<"CategoryDimension", 'Int'>
    readonly category_name: FieldRef<"CategoryDimension", 'String'>
    readonly has_expiry_date: FieldRef<"CategoryDimension", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CategoryDimension findUnique
   */
  export type CategoryDimensionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimension
     */
    select?: CategoryDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDimension
     */
    omit?: CategoryDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDimensionInclude<ExtArgs> | null
    /**
     * Filter, which CategoryDimension to fetch.
     */
    where: CategoryDimensionWhereUniqueInput
  }

  /**
   * CategoryDimension findUniqueOrThrow
   */
  export type CategoryDimensionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimension
     */
    select?: CategoryDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDimension
     */
    omit?: CategoryDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDimensionInclude<ExtArgs> | null
    /**
     * Filter, which CategoryDimension to fetch.
     */
    where: CategoryDimensionWhereUniqueInput
  }

  /**
   * CategoryDimension findFirst
   */
  export type CategoryDimensionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimension
     */
    select?: CategoryDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDimension
     */
    omit?: CategoryDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDimensionInclude<ExtArgs> | null
    /**
     * Filter, which CategoryDimension to fetch.
     */
    where?: CategoryDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryDimensions to fetch.
     */
    orderBy?: CategoryDimensionOrderByWithRelationInput | CategoryDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryDimensions.
     */
    cursor?: CategoryDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryDimensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryDimensions.
     */
    distinct?: CategoryDimensionScalarFieldEnum | CategoryDimensionScalarFieldEnum[]
  }

  /**
   * CategoryDimension findFirstOrThrow
   */
  export type CategoryDimensionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimension
     */
    select?: CategoryDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDimension
     */
    omit?: CategoryDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDimensionInclude<ExtArgs> | null
    /**
     * Filter, which CategoryDimension to fetch.
     */
    where?: CategoryDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryDimensions to fetch.
     */
    orderBy?: CategoryDimensionOrderByWithRelationInput | CategoryDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryDimensions.
     */
    cursor?: CategoryDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryDimensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryDimensions.
     */
    distinct?: CategoryDimensionScalarFieldEnum | CategoryDimensionScalarFieldEnum[]
  }

  /**
   * CategoryDimension findMany
   */
  export type CategoryDimensionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimension
     */
    select?: CategoryDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDimension
     */
    omit?: CategoryDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDimensionInclude<ExtArgs> | null
    /**
     * Filter, which CategoryDimensions to fetch.
     */
    where?: CategoryDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryDimensions to fetch.
     */
    orderBy?: CategoryDimensionOrderByWithRelationInput | CategoryDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryDimensions.
     */
    cursor?: CategoryDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryDimensions.
     */
    skip?: number
    distinct?: CategoryDimensionScalarFieldEnum | CategoryDimensionScalarFieldEnum[]
  }

  /**
   * CategoryDimension create
   */
  export type CategoryDimensionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimension
     */
    select?: CategoryDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDimension
     */
    omit?: CategoryDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDimensionInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryDimension.
     */
    data: XOR<CategoryDimensionCreateInput, CategoryDimensionUncheckedCreateInput>
  }

  /**
   * CategoryDimension createMany
   */
  export type CategoryDimensionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryDimensions.
     */
    data: CategoryDimensionCreateManyInput | CategoryDimensionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryDimension createManyAndReturn
   */
  export type CategoryDimensionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimension
     */
    select?: CategoryDimensionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDimension
     */
    omit?: CategoryDimensionOmit<ExtArgs> | null
    /**
     * The data used to create many CategoryDimensions.
     */
    data: CategoryDimensionCreateManyInput | CategoryDimensionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryDimension update
   */
  export type CategoryDimensionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimension
     */
    select?: CategoryDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDimension
     */
    omit?: CategoryDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDimensionInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryDimension.
     */
    data: XOR<CategoryDimensionUpdateInput, CategoryDimensionUncheckedUpdateInput>
    /**
     * Choose, which CategoryDimension to update.
     */
    where: CategoryDimensionWhereUniqueInput
  }

  /**
   * CategoryDimension updateMany
   */
  export type CategoryDimensionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryDimensions.
     */
    data: XOR<CategoryDimensionUpdateManyMutationInput, CategoryDimensionUncheckedUpdateManyInput>
    /**
     * Filter which CategoryDimensions to update
     */
    where?: CategoryDimensionWhereInput
    /**
     * Limit how many CategoryDimensions to update.
     */
    limit?: number
  }

  /**
   * CategoryDimension updateManyAndReturn
   */
  export type CategoryDimensionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimension
     */
    select?: CategoryDimensionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDimension
     */
    omit?: CategoryDimensionOmit<ExtArgs> | null
    /**
     * The data used to update CategoryDimensions.
     */
    data: XOR<CategoryDimensionUpdateManyMutationInput, CategoryDimensionUncheckedUpdateManyInput>
    /**
     * Filter which CategoryDimensions to update
     */
    where?: CategoryDimensionWhereInput
    /**
     * Limit how many CategoryDimensions to update.
     */
    limit?: number
  }

  /**
   * CategoryDimension upsert
   */
  export type CategoryDimensionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimension
     */
    select?: CategoryDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDimension
     */
    omit?: CategoryDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDimensionInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryDimension to update in case it exists.
     */
    where: CategoryDimensionWhereUniqueInput
    /**
     * In case the CategoryDimension found by the `where` argument doesn't exist, create a new CategoryDimension with this data.
     */
    create: XOR<CategoryDimensionCreateInput, CategoryDimensionUncheckedCreateInput>
    /**
     * In case the CategoryDimension was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryDimensionUpdateInput, CategoryDimensionUncheckedUpdateInput>
  }

  /**
   * CategoryDimension delete
   */
  export type CategoryDimensionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimension
     */
    select?: CategoryDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDimension
     */
    omit?: CategoryDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDimensionInclude<ExtArgs> | null
    /**
     * Filter which CategoryDimension to delete.
     */
    where: CategoryDimensionWhereUniqueInput
  }

  /**
   * CategoryDimension deleteMany
   */
  export type CategoryDimensionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryDimensions to delete
     */
    where?: CategoryDimensionWhereInput
    /**
     * Limit how many CategoryDimensions to delete.
     */
    limit?: number
  }

  /**
   * CategoryDimension.products
   */
  export type CategoryDimension$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionInclude<ExtArgs> | null
    where?: ProductDimensionWhereInput
    orderBy?: ProductDimensionOrderByWithRelationInput | ProductDimensionOrderByWithRelationInput[]
    cursor?: ProductDimensionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductDimensionScalarFieldEnum | ProductDimensionScalarFieldEnum[]
  }

  /**
   * CategoryDimension.category_revenues
   */
  export type CategoryDimension$category_revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
    where?: CategoryRevenueFactWhereInput
    orderBy?: CategoryRevenueFactOrderByWithRelationInput | CategoryRevenueFactOrderByWithRelationInput[]
    cursor?: CategoryRevenueFactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryRevenueFactScalarFieldEnum | CategoryRevenueFactScalarFieldEnum[]
  }

  /**
   * CategoryDimension without action
   */
  export type CategoryDimensionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDimension
     */
    select?: CategoryDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDimension
     */
    omit?: CategoryDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDimensionInclude<ExtArgs> | null
  }


  /**
   * Model ProductDimension
   */

  export type AggregateProductDimension = {
    _count: ProductDimensionCountAggregateOutputType | null
    _avg: ProductDimensionAvgAggregateOutputType | null
    _sum: ProductDimensionSumAggregateOutputType | null
    _min: ProductDimensionMinAggregateOutputType | null
    _max: ProductDimensionMaxAggregateOutputType | null
  }

  export type ProductDimensionAvgAggregateOutputType = {
    product_id: number | null
    category_id: number | null
    next_expiry_date_id: number | null
  }

  export type ProductDimensionSumAggregateOutputType = {
    product_id: number | null
    category_id: number | null
    next_expiry_date_id: number | null
  }

  export type ProductDimensionMinAggregateOutputType = {
    product_id: number | null
    name: string | null
    category_id: number | null
    next_expiry_date_id: number | null
  }

  export type ProductDimensionMaxAggregateOutputType = {
    product_id: number | null
    name: string | null
    category_id: number | null
    next_expiry_date_id: number | null
  }

  export type ProductDimensionCountAggregateOutputType = {
    product_id: number
    name: number
    category_id: number
    next_expiry_date_id: number
    _all: number
  }


  export type ProductDimensionAvgAggregateInputType = {
    product_id?: true
    category_id?: true
    next_expiry_date_id?: true
  }

  export type ProductDimensionSumAggregateInputType = {
    product_id?: true
    category_id?: true
    next_expiry_date_id?: true
  }

  export type ProductDimensionMinAggregateInputType = {
    product_id?: true
    name?: true
    category_id?: true
    next_expiry_date_id?: true
  }

  export type ProductDimensionMaxAggregateInputType = {
    product_id?: true
    name?: true
    category_id?: true
    next_expiry_date_id?: true
  }

  export type ProductDimensionCountAggregateInputType = {
    product_id?: true
    name?: true
    category_id?: true
    next_expiry_date_id?: true
    _all?: true
  }

  export type ProductDimensionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDimension to aggregate.
     */
    where?: ProductDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDimensions to fetch.
     */
    orderBy?: ProductDimensionOrderByWithRelationInput | ProductDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDimensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductDimensions
    **/
    _count?: true | ProductDimensionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductDimensionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductDimensionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductDimensionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductDimensionMaxAggregateInputType
  }

  export type GetProductDimensionAggregateType<T extends ProductDimensionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductDimension]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductDimension[P]>
      : GetScalarType<T[P], AggregateProductDimension[P]>
  }




  export type ProductDimensionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDimensionWhereInput
    orderBy?: ProductDimensionOrderByWithAggregationInput | ProductDimensionOrderByWithAggregationInput[]
    by: ProductDimensionScalarFieldEnum[] | ProductDimensionScalarFieldEnum
    having?: ProductDimensionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductDimensionCountAggregateInputType | true
    _avg?: ProductDimensionAvgAggregateInputType
    _sum?: ProductDimensionSumAggregateInputType
    _min?: ProductDimensionMinAggregateInputType
    _max?: ProductDimensionMaxAggregateInputType
  }

  export type ProductDimensionGroupByOutputType = {
    product_id: number
    name: string
    category_id: number
    next_expiry_date_id: number | null
    _count: ProductDimensionCountAggregateOutputType | null
    _avg: ProductDimensionAvgAggregateOutputType | null
    _sum: ProductDimensionSumAggregateOutputType | null
    _min: ProductDimensionMinAggregateOutputType | null
    _max: ProductDimensionMaxAggregateOutputType | null
  }

  type GetProductDimensionGroupByPayload<T extends ProductDimensionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductDimensionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductDimensionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductDimensionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductDimensionGroupByOutputType[P]>
        }
      >
    >


  export type ProductDimensionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    name?: boolean
    category_id?: boolean
    next_expiry_date_id?: boolean
    next_expiry_date?: boolean | ProductDimension$next_expiry_dateArgs<ExtArgs>
    CategoryDimension?: boolean | CategoryDimensionDefaultArgs<ExtArgs>
    product_revenues?: boolean | ProductDimension$product_revenuesArgs<ExtArgs>
    prices?: boolean | ProductDimension$pricesArgs<ExtArgs>
    _count?: boolean | ProductDimensionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDimension"]>

  export type ProductDimensionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    name?: boolean
    category_id?: boolean
    next_expiry_date_id?: boolean
    next_expiry_date?: boolean | ProductDimension$next_expiry_dateArgs<ExtArgs>
    CategoryDimension?: boolean | CategoryDimensionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDimension"]>

  export type ProductDimensionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    name?: boolean
    category_id?: boolean
    next_expiry_date_id?: boolean
    next_expiry_date?: boolean | ProductDimension$next_expiry_dateArgs<ExtArgs>
    CategoryDimension?: boolean | CategoryDimensionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDimension"]>

  export type ProductDimensionSelectScalar = {
    product_id?: boolean
    name?: boolean
    category_id?: boolean
    next_expiry_date_id?: boolean
  }

  export type ProductDimensionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "name" | "category_id" | "next_expiry_date_id", ExtArgs["result"]["productDimension"]>
  export type ProductDimensionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    next_expiry_date?: boolean | ProductDimension$next_expiry_dateArgs<ExtArgs>
    CategoryDimension?: boolean | CategoryDimensionDefaultArgs<ExtArgs>
    product_revenues?: boolean | ProductDimension$product_revenuesArgs<ExtArgs>
    prices?: boolean | ProductDimension$pricesArgs<ExtArgs>
    _count?: boolean | ProductDimensionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductDimensionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    next_expiry_date?: boolean | ProductDimension$next_expiry_dateArgs<ExtArgs>
    CategoryDimension?: boolean | CategoryDimensionDefaultArgs<ExtArgs>
  }
  export type ProductDimensionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    next_expiry_date?: boolean | ProductDimension$next_expiry_dateArgs<ExtArgs>
    CategoryDimension?: boolean | CategoryDimensionDefaultArgs<ExtArgs>
  }

  export type $ProductDimensionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductDimension"
    objects: {
      next_expiry_date: Prisma.$DateDimensionPayload<ExtArgs> | null
      CategoryDimension: Prisma.$CategoryDimensionPayload<ExtArgs>
      product_revenues: Prisma.$ProductRevenueFactPayload<ExtArgs>[]
      prices: Prisma.$BatchPricePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      name: string
      category_id: number
      next_expiry_date_id: number | null
    }, ExtArgs["result"]["productDimension"]>
    composites: {}
  }

  type ProductDimensionGetPayload<S extends boolean | null | undefined | ProductDimensionDefaultArgs> = $Result.GetResult<Prisma.$ProductDimensionPayload, S>

  type ProductDimensionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductDimensionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductDimensionCountAggregateInputType | true
    }

  export interface ProductDimensionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductDimension'], meta: { name: 'ProductDimension' } }
    /**
     * Find zero or one ProductDimension that matches the filter.
     * @param {ProductDimensionFindUniqueArgs} args - Arguments to find a ProductDimension
     * @example
     * // Get one ProductDimension
     * const productDimension = await prisma.productDimension.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductDimensionFindUniqueArgs>(args: SelectSubset<T, ProductDimensionFindUniqueArgs<ExtArgs>>): Prisma__ProductDimensionClient<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProductDimension that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductDimensionFindUniqueOrThrowArgs} args - Arguments to find a ProductDimension
     * @example
     * // Get one ProductDimension
     * const productDimension = await prisma.productDimension.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductDimensionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductDimensionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductDimensionClient<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProductDimension that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDimensionFindFirstArgs} args - Arguments to find a ProductDimension
     * @example
     * // Get one ProductDimension
     * const productDimension = await prisma.productDimension.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductDimensionFindFirstArgs>(args?: SelectSubset<T, ProductDimensionFindFirstArgs<ExtArgs>>): Prisma__ProductDimensionClient<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProductDimension that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDimensionFindFirstOrThrowArgs} args - Arguments to find a ProductDimension
     * @example
     * // Get one ProductDimension
     * const productDimension = await prisma.productDimension.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductDimensionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductDimensionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductDimensionClient<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProductDimensions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDimensionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductDimensions
     * const productDimensions = await prisma.productDimension.findMany()
     * 
     * // Get first 10 ProductDimensions
     * const productDimensions = await prisma.productDimension.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productDimensionWithProduct_idOnly = await prisma.productDimension.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends ProductDimensionFindManyArgs>(args?: SelectSubset<T, ProductDimensionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProductDimension.
     * @param {ProductDimensionCreateArgs} args - Arguments to create a ProductDimension.
     * @example
     * // Create one ProductDimension
     * const ProductDimension = await prisma.productDimension.create({
     *   data: {
     *     // ... data to create a ProductDimension
     *   }
     * })
     * 
     */
    create<T extends ProductDimensionCreateArgs>(args: SelectSubset<T, ProductDimensionCreateArgs<ExtArgs>>): Prisma__ProductDimensionClient<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProductDimensions.
     * @param {ProductDimensionCreateManyArgs} args - Arguments to create many ProductDimensions.
     * @example
     * // Create many ProductDimensions
     * const productDimension = await prisma.productDimension.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductDimensionCreateManyArgs>(args?: SelectSubset<T, ProductDimensionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductDimensions and returns the data saved in the database.
     * @param {ProductDimensionCreateManyAndReturnArgs} args - Arguments to create many ProductDimensions.
     * @example
     * // Create many ProductDimensions
     * const productDimension = await prisma.productDimension.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductDimensions and only return the `product_id`
     * const productDimensionWithProduct_idOnly = await prisma.productDimension.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductDimensionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductDimensionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ProductDimension.
     * @param {ProductDimensionDeleteArgs} args - Arguments to delete one ProductDimension.
     * @example
     * // Delete one ProductDimension
     * const ProductDimension = await prisma.productDimension.delete({
     *   where: {
     *     // ... filter to delete one ProductDimension
     *   }
     * })
     * 
     */
    delete<T extends ProductDimensionDeleteArgs>(args: SelectSubset<T, ProductDimensionDeleteArgs<ExtArgs>>): Prisma__ProductDimensionClient<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProductDimension.
     * @param {ProductDimensionUpdateArgs} args - Arguments to update one ProductDimension.
     * @example
     * // Update one ProductDimension
     * const productDimension = await prisma.productDimension.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductDimensionUpdateArgs>(args: SelectSubset<T, ProductDimensionUpdateArgs<ExtArgs>>): Prisma__ProductDimensionClient<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProductDimensions.
     * @param {ProductDimensionDeleteManyArgs} args - Arguments to filter ProductDimensions to delete.
     * @example
     * // Delete a few ProductDimensions
     * const { count } = await prisma.productDimension.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDimensionDeleteManyArgs>(args?: SelectSubset<T, ProductDimensionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDimensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDimensionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductDimensions
     * const productDimension = await prisma.productDimension.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductDimensionUpdateManyArgs>(args: SelectSubset<T, ProductDimensionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDimensions and returns the data updated in the database.
     * @param {ProductDimensionUpdateManyAndReturnArgs} args - Arguments to update many ProductDimensions.
     * @example
     * // Update many ProductDimensions
     * const productDimension = await prisma.productDimension.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductDimensions and only return the `product_id`
     * const productDimensionWithProduct_idOnly = await prisma.productDimension.updateManyAndReturn({
     *   select: { product_id: true },
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
    updateManyAndReturn<T extends ProductDimensionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductDimensionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ProductDimension.
     * @param {ProductDimensionUpsertArgs} args - Arguments to update or create a ProductDimension.
     * @example
     * // Update or create a ProductDimension
     * const productDimension = await prisma.productDimension.upsert({
     *   create: {
     *     // ... data to create a ProductDimension
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductDimension we want to update
     *   }
     * })
     */
    upsert<T extends ProductDimensionUpsertArgs>(args: SelectSubset<T, ProductDimensionUpsertArgs<ExtArgs>>): Prisma__ProductDimensionClient<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProductDimensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDimensionCountArgs} args - Arguments to filter ProductDimensions to count.
     * @example
     * // Count the number of ProductDimensions
     * const count = await prisma.productDimension.count({
     *   where: {
     *     // ... the filter for the ProductDimensions we want to count
     *   }
     * })
    **/
    count<T extends ProductDimensionCountArgs>(
      args?: Subset<T, ProductDimensionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductDimensionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductDimension.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDimensionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductDimensionAggregateArgs>(args: Subset<T, ProductDimensionAggregateArgs>): Prisma.PrismaPromise<GetProductDimensionAggregateType<T>>

    /**
     * Group by ProductDimension.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDimensionGroupByArgs} args - Group by arguments.
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
      T extends ProductDimensionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductDimensionGroupByArgs['orderBy'] }
        : { orderBy?: ProductDimensionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductDimensionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductDimensionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductDimension model
   */
  readonly fields: ProductDimensionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductDimension.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductDimensionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    next_expiry_date<T extends ProductDimension$next_expiry_dateArgs<ExtArgs> = {}>(args?: Subset<T, ProductDimension$next_expiry_dateArgs<ExtArgs>>): Prisma__DateDimensionClient<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    CategoryDimension<T extends CategoryDimensionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDimensionDefaultArgs<ExtArgs>>): Prisma__CategoryDimensionClient<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    product_revenues<T extends ProductDimension$product_revenuesArgs<ExtArgs> = {}>(args?: Subset<T, ProductDimension$product_revenuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    prices<T extends ProductDimension$pricesArgs<ExtArgs> = {}>(args?: Subset<T, ProductDimension$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the ProductDimension model
   */ 
  interface ProductDimensionFieldRefs {
    readonly product_id: FieldRef<"ProductDimension", 'Int'>
    readonly name: FieldRef<"ProductDimension", 'String'>
    readonly category_id: FieldRef<"ProductDimension", 'Int'>
    readonly next_expiry_date_id: FieldRef<"ProductDimension", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductDimension findUnique
   */
  export type ProductDimensionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDimension to fetch.
     */
    where: ProductDimensionWhereUniqueInput
  }

  /**
   * ProductDimension findUniqueOrThrow
   */
  export type ProductDimensionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDimension to fetch.
     */
    where: ProductDimensionWhereUniqueInput
  }

  /**
   * ProductDimension findFirst
   */
  export type ProductDimensionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDimension to fetch.
     */
    where?: ProductDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDimensions to fetch.
     */
    orderBy?: ProductDimensionOrderByWithRelationInput | ProductDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDimensions.
     */
    cursor?: ProductDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDimensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDimensions.
     */
    distinct?: ProductDimensionScalarFieldEnum | ProductDimensionScalarFieldEnum[]
  }

  /**
   * ProductDimension findFirstOrThrow
   */
  export type ProductDimensionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDimension to fetch.
     */
    where?: ProductDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDimensions to fetch.
     */
    orderBy?: ProductDimensionOrderByWithRelationInput | ProductDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDimensions.
     */
    cursor?: ProductDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDimensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDimensions.
     */
    distinct?: ProductDimensionScalarFieldEnum | ProductDimensionScalarFieldEnum[]
  }

  /**
   * ProductDimension findMany
   */
  export type ProductDimensionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDimensions to fetch.
     */
    where?: ProductDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDimensions to fetch.
     */
    orderBy?: ProductDimensionOrderByWithRelationInput | ProductDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductDimensions.
     */
    cursor?: ProductDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDimensions.
     */
    skip?: number
    distinct?: ProductDimensionScalarFieldEnum | ProductDimensionScalarFieldEnum[]
  }

  /**
   * ProductDimension create
   */
  export type ProductDimensionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductDimension.
     */
    data: XOR<ProductDimensionCreateInput, ProductDimensionUncheckedCreateInput>
  }

  /**
   * ProductDimension createMany
   */
  export type ProductDimensionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductDimensions.
     */
    data: ProductDimensionCreateManyInput | ProductDimensionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductDimension createManyAndReturn
   */
  export type ProductDimensionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * The data used to create many ProductDimensions.
     */
    data: ProductDimensionCreateManyInput | ProductDimensionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductDimension update
   */
  export type ProductDimensionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductDimension.
     */
    data: XOR<ProductDimensionUpdateInput, ProductDimensionUncheckedUpdateInput>
    /**
     * Choose, which ProductDimension to update.
     */
    where: ProductDimensionWhereUniqueInput
  }

  /**
   * ProductDimension updateMany
   */
  export type ProductDimensionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductDimensions.
     */
    data: XOR<ProductDimensionUpdateManyMutationInput, ProductDimensionUncheckedUpdateManyInput>
    /**
     * Filter which ProductDimensions to update
     */
    where?: ProductDimensionWhereInput
    /**
     * Limit how many ProductDimensions to update.
     */
    limit?: number
  }

  /**
   * ProductDimension updateManyAndReturn
   */
  export type ProductDimensionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * The data used to update ProductDimensions.
     */
    data: XOR<ProductDimensionUpdateManyMutationInput, ProductDimensionUncheckedUpdateManyInput>
    /**
     * Filter which ProductDimensions to update
     */
    where?: ProductDimensionWhereInput
    /**
     * Limit how many ProductDimensions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductDimension upsert
   */
  export type ProductDimensionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductDimension to update in case it exists.
     */
    where: ProductDimensionWhereUniqueInput
    /**
     * In case the ProductDimension found by the `where` argument doesn't exist, create a new ProductDimension with this data.
     */
    create: XOR<ProductDimensionCreateInput, ProductDimensionUncheckedCreateInput>
    /**
     * In case the ProductDimension was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductDimensionUpdateInput, ProductDimensionUncheckedUpdateInput>
  }

  /**
   * ProductDimension delete
   */
  export type ProductDimensionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionInclude<ExtArgs> | null
    /**
     * Filter which ProductDimension to delete.
     */
    where: ProductDimensionWhereUniqueInput
  }

  /**
   * ProductDimension deleteMany
   */
  export type ProductDimensionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDimensions to delete
     */
    where?: ProductDimensionWhereInput
    /**
     * Limit how many ProductDimensions to delete.
     */
    limit?: number
  }

  /**
   * ProductDimension.next_expiry_date
   */
  export type ProductDimension$next_expiry_dateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateDimensionInclude<ExtArgs> | null
    where?: DateDimensionWhereInput
  }

  /**
   * ProductDimension.product_revenues
   */
  export type ProductDimension$product_revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
    where?: ProductRevenueFactWhereInput
    orderBy?: ProductRevenueFactOrderByWithRelationInput | ProductRevenueFactOrderByWithRelationInput[]
    cursor?: ProductRevenueFactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductRevenueFactScalarFieldEnum | ProductRevenueFactScalarFieldEnum[]
  }

  /**
   * ProductDimension.prices
   */
  export type ProductDimension$pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
    where?: BatchPriceWhereInput
    orderBy?: BatchPriceOrderByWithRelationInput | BatchPriceOrderByWithRelationInput[]
    cursor?: BatchPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchPriceScalarFieldEnum | BatchPriceScalarFieldEnum[]
  }

  /**
   * ProductDimension without action
   */
  export type ProductDimensionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionInclude<ExtArgs> | null
  }


  /**
   * Model ProductRevenueFact
   */

  export type AggregateProductRevenueFact = {
    _count: ProductRevenueFactCountAggregateOutputType | null
    _avg: ProductRevenueFactAvgAggregateOutputType | null
    _sum: ProductRevenueFactSumAggregateOutputType | null
    _min: ProductRevenueFactMinAggregateOutputType | null
    _max: ProductRevenueFactMaxAggregateOutputType | null
  }

  export type ProductRevenueFactAvgAggregateOutputType = {
    product_id: number | null
    business_id: number | null
    date_id: number | null
    revenue_amount: number | null
    total_units_sold: number | null
  }

  export type ProductRevenueFactSumAggregateOutputType = {
    product_id: number | null
    business_id: number | null
    date_id: number | null
    revenue_amount: number | null
    total_units_sold: number | null
  }

  export type ProductRevenueFactMinAggregateOutputType = {
    product_id: number | null
    business_id: number | null
    date_id: number | null
    revenue_amount: number | null
    total_units_sold: number | null
  }

  export type ProductRevenueFactMaxAggregateOutputType = {
    product_id: number | null
    business_id: number | null
    date_id: number | null
    revenue_amount: number | null
    total_units_sold: number | null
  }

  export type ProductRevenueFactCountAggregateOutputType = {
    product_id: number
    business_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
    _all: number
  }


  export type ProductRevenueFactAvgAggregateInputType = {
    product_id?: true
    business_id?: true
    date_id?: true
    revenue_amount?: true
    total_units_sold?: true
  }

  export type ProductRevenueFactSumAggregateInputType = {
    product_id?: true
    business_id?: true
    date_id?: true
    revenue_amount?: true
    total_units_sold?: true
  }

  export type ProductRevenueFactMinAggregateInputType = {
    product_id?: true
    business_id?: true
    date_id?: true
    revenue_amount?: true
    total_units_sold?: true
  }

  export type ProductRevenueFactMaxAggregateInputType = {
    product_id?: true
    business_id?: true
    date_id?: true
    revenue_amount?: true
    total_units_sold?: true
  }

  export type ProductRevenueFactCountAggregateInputType = {
    product_id?: true
    business_id?: true
    date_id?: true
    revenue_amount?: true
    total_units_sold?: true
    _all?: true
  }

  export type ProductRevenueFactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRevenueFact to aggregate.
     */
    where?: ProductRevenueFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRevenueFacts to fetch.
     */
    orderBy?: ProductRevenueFactOrderByWithRelationInput | ProductRevenueFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductRevenueFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRevenueFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRevenueFacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductRevenueFacts
    **/
    _count?: true | ProductRevenueFactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductRevenueFactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductRevenueFactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductRevenueFactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductRevenueFactMaxAggregateInputType
  }

  export type GetProductRevenueFactAggregateType<T extends ProductRevenueFactAggregateArgs> = {
        [P in keyof T & keyof AggregateProductRevenueFact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductRevenueFact[P]>
      : GetScalarType<T[P], AggregateProductRevenueFact[P]>
  }




  export type ProductRevenueFactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRevenueFactWhereInput
    orderBy?: ProductRevenueFactOrderByWithAggregationInput | ProductRevenueFactOrderByWithAggregationInput[]
    by: ProductRevenueFactScalarFieldEnum[] | ProductRevenueFactScalarFieldEnum
    having?: ProductRevenueFactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductRevenueFactCountAggregateInputType | true
    _avg?: ProductRevenueFactAvgAggregateInputType
    _sum?: ProductRevenueFactSumAggregateInputType
    _min?: ProductRevenueFactMinAggregateInputType
    _max?: ProductRevenueFactMaxAggregateInputType
  }

  export type ProductRevenueFactGroupByOutputType = {
    product_id: number
    business_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
    _count: ProductRevenueFactCountAggregateOutputType | null
    _avg: ProductRevenueFactAvgAggregateOutputType | null
    _sum: ProductRevenueFactSumAggregateOutputType | null
    _min: ProductRevenueFactMinAggregateOutputType | null
    _max: ProductRevenueFactMaxAggregateOutputType | null
  }

  type GetProductRevenueFactGroupByPayload<T extends ProductRevenueFactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductRevenueFactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductRevenueFactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductRevenueFactGroupByOutputType[P]>
            : GetScalarType<T[P], ProductRevenueFactGroupByOutputType[P]>
        }
      >
    >


  export type ProductRevenueFactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    business_id?: boolean
    date_id?: boolean
    revenue_amount?: boolean
    total_units_sold?: boolean
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    product?: boolean | ProductDimensionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRevenueFact"]>

  export type ProductRevenueFactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    business_id?: boolean
    date_id?: boolean
    revenue_amount?: boolean
    total_units_sold?: boolean
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    product?: boolean | ProductDimensionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRevenueFact"]>

  export type ProductRevenueFactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    business_id?: boolean
    date_id?: boolean
    revenue_amount?: boolean
    total_units_sold?: boolean
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    product?: boolean | ProductDimensionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRevenueFact"]>

  export type ProductRevenueFactSelectScalar = {
    product_id?: boolean
    business_id?: boolean
    date_id?: boolean
    revenue_amount?: boolean
    total_units_sold?: boolean
  }

  export type ProductRevenueFactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "business_id" | "date_id" | "revenue_amount" | "total_units_sold", ExtArgs["result"]["productRevenueFact"]>
  export type ProductRevenueFactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    product?: boolean | ProductDimensionDefaultArgs<ExtArgs>
  }
  export type ProductRevenueFactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    product?: boolean | ProductDimensionDefaultArgs<ExtArgs>
  }
  export type ProductRevenueFactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    product?: boolean | ProductDimensionDefaultArgs<ExtArgs>
  }

  export type $ProductRevenueFactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductRevenueFact"
    objects: {
      date: Prisma.$DateDimensionPayload<ExtArgs>
      business: Prisma.$BusinessDimensionPayload<ExtArgs>
      product: Prisma.$ProductDimensionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      business_id: number
      date_id: number
      revenue_amount: number
      total_units_sold: number
    }, ExtArgs["result"]["productRevenueFact"]>
    composites: {}
  }

  type ProductRevenueFactGetPayload<S extends boolean | null | undefined | ProductRevenueFactDefaultArgs> = $Result.GetResult<Prisma.$ProductRevenueFactPayload, S>

  type ProductRevenueFactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductRevenueFactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductRevenueFactCountAggregateInputType | true
    }

  export interface ProductRevenueFactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductRevenueFact'], meta: { name: 'ProductRevenueFact' } }
    /**
     * Find zero or one ProductRevenueFact that matches the filter.
     * @param {ProductRevenueFactFindUniqueArgs} args - Arguments to find a ProductRevenueFact
     * @example
     * // Get one ProductRevenueFact
     * const productRevenueFact = await prisma.productRevenueFact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductRevenueFactFindUniqueArgs>(args: SelectSubset<T, ProductRevenueFactFindUniqueArgs<ExtArgs>>): Prisma__ProductRevenueFactClient<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProductRevenueFact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductRevenueFactFindUniqueOrThrowArgs} args - Arguments to find a ProductRevenueFact
     * @example
     * // Get one ProductRevenueFact
     * const productRevenueFact = await prisma.productRevenueFact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductRevenueFactFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductRevenueFactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductRevenueFactClient<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProductRevenueFact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRevenueFactFindFirstArgs} args - Arguments to find a ProductRevenueFact
     * @example
     * // Get one ProductRevenueFact
     * const productRevenueFact = await prisma.productRevenueFact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductRevenueFactFindFirstArgs>(args?: SelectSubset<T, ProductRevenueFactFindFirstArgs<ExtArgs>>): Prisma__ProductRevenueFactClient<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProductRevenueFact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRevenueFactFindFirstOrThrowArgs} args - Arguments to find a ProductRevenueFact
     * @example
     * // Get one ProductRevenueFact
     * const productRevenueFact = await prisma.productRevenueFact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductRevenueFactFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductRevenueFactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductRevenueFactClient<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProductRevenueFacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRevenueFactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductRevenueFacts
     * const productRevenueFacts = await prisma.productRevenueFact.findMany()
     * 
     * // Get first 10 ProductRevenueFacts
     * const productRevenueFacts = await prisma.productRevenueFact.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productRevenueFactWithProduct_idOnly = await prisma.productRevenueFact.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends ProductRevenueFactFindManyArgs>(args?: SelectSubset<T, ProductRevenueFactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProductRevenueFact.
     * @param {ProductRevenueFactCreateArgs} args - Arguments to create a ProductRevenueFact.
     * @example
     * // Create one ProductRevenueFact
     * const ProductRevenueFact = await prisma.productRevenueFact.create({
     *   data: {
     *     // ... data to create a ProductRevenueFact
     *   }
     * })
     * 
     */
    create<T extends ProductRevenueFactCreateArgs>(args: SelectSubset<T, ProductRevenueFactCreateArgs<ExtArgs>>): Prisma__ProductRevenueFactClient<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProductRevenueFacts.
     * @param {ProductRevenueFactCreateManyArgs} args - Arguments to create many ProductRevenueFacts.
     * @example
     * // Create many ProductRevenueFacts
     * const productRevenueFact = await prisma.productRevenueFact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductRevenueFactCreateManyArgs>(args?: SelectSubset<T, ProductRevenueFactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductRevenueFacts and returns the data saved in the database.
     * @param {ProductRevenueFactCreateManyAndReturnArgs} args - Arguments to create many ProductRevenueFacts.
     * @example
     * // Create many ProductRevenueFacts
     * const productRevenueFact = await prisma.productRevenueFact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductRevenueFacts and only return the `product_id`
     * const productRevenueFactWithProduct_idOnly = await prisma.productRevenueFact.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductRevenueFactCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductRevenueFactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ProductRevenueFact.
     * @param {ProductRevenueFactDeleteArgs} args - Arguments to delete one ProductRevenueFact.
     * @example
     * // Delete one ProductRevenueFact
     * const ProductRevenueFact = await prisma.productRevenueFact.delete({
     *   where: {
     *     // ... filter to delete one ProductRevenueFact
     *   }
     * })
     * 
     */
    delete<T extends ProductRevenueFactDeleteArgs>(args: SelectSubset<T, ProductRevenueFactDeleteArgs<ExtArgs>>): Prisma__ProductRevenueFactClient<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProductRevenueFact.
     * @param {ProductRevenueFactUpdateArgs} args - Arguments to update one ProductRevenueFact.
     * @example
     * // Update one ProductRevenueFact
     * const productRevenueFact = await prisma.productRevenueFact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductRevenueFactUpdateArgs>(args: SelectSubset<T, ProductRevenueFactUpdateArgs<ExtArgs>>): Prisma__ProductRevenueFactClient<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProductRevenueFacts.
     * @param {ProductRevenueFactDeleteManyArgs} args - Arguments to filter ProductRevenueFacts to delete.
     * @example
     * // Delete a few ProductRevenueFacts
     * const { count } = await prisma.productRevenueFact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductRevenueFactDeleteManyArgs>(args?: SelectSubset<T, ProductRevenueFactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductRevenueFacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRevenueFactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductRevenueFacts
     * const productRevenueFact = await prisma.productRevenueFact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductRevenueFactUpdateManyArgs>(args: SelectSubset<T, ProductRevenueFactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductRevenueFacts and returns the data updated in the database.
     * @param {ProductRevenueFactUpdateManyAndReturnArgs} args - Arguments to update many ProductRevenueFacts.
     * @example
     * // Update many ProductRevenueFacts
     * const productRevenueFact = await prisma.productRevenueFact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductRevenueFacts and only return the `product_id`
     * const productRevenueFactWithProduct_idOnly = await prisma.productRevenueFact.updateManyAndReturn({
     *   select: { product_id: true },
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
    updateManyAndReturn<T extends ProductRevenueFactUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductRevenueFactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ProductRevenueFact.
     * @param {ProductRevenueFactUpsertArgs} args - Arguments to update or create a ProductRevenueFact.
     * @example
     * // Update or create a ProductRevenueFact
     * const productRevenueFact = await prisma.productRevenueFact.upsert({
     *   create: {
     *     // ... data to create a ProductRevenueFact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductRevenueFact we want to update
     *   }
     * })
     */
    upsert<T extends ProductRevenueFactUpsertArgs>(args: SelectSubset<T, ProductRevenueFactUpsertArgs<ExtArgs>>): Prisma__ProductRevenueFactClient<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProductRevenueFacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRevenueFactCountArgs} args - Arguments to filter ProductRevenueFacts to count.
     * @example
     * // Count the number of ProductRevenueFacts
     * const count = await prisma.productRevenueFact.count({
     *   where: {
     *     // ... the filter for the ProductRevenueFacts we want to count
     *   }
     * })
    **/
    count<T extends ProductRevenueFactCountArgs>(
      args?: Subset<T, ProductRevenueFactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductRevenueFactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductRevenueFact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRevenueFactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductRevenueFactAggregateArgs>(args: Subset<T, ProductRevenueFactAggregateArgs>): Prisma.PrismaPromise<GetProductRevenueFactAggregateType<T>>

    /**
     * Group by ProductRevenueFact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRevenueFactGroupByArgs} args - Group by arguments.
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
      T extends ProductRevenueFactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductRevenueFactGroupByArgs['orderBy'] }
        : { orderBy?: ProductRevenueFactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductRevenueFactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductRevenueFactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductRevenueFact model
   */
  readonly fields: ProductRevenueFactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductRevenueFact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductRevenueFactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    date<T extends DateDimensionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DateDimensionDefaultArgs<ExtArgs>>): Prisma__DateDimensionClient<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    business<T extends BusinessDimensionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDimensionDefaultArgs<ExtArgs>>): Prisma__BusinessDimensionClient<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    product<T extends ProductDimensionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDimensionDefaultArgs<ExtArgs>>): Prisma__ProductDimensionClient<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the ProductRevenueFact model
   */ 
  interface ProductRevenueFactFieldRefs {
    readonly product_id: FieldRef<"ProductRevenueFact", 'Int'>
    readonly business_id: FieldRef<"ProductRevenueFact", 'Int'>
    readonly date_id: FieldRef<"ProductRevenueFact", 'Int'>
    readonly revenue_amount: FieldRef<"ProductRevenueFact", 'Float'>
    readonly total_units_sold: FieldRef<"ProductRevenueFact", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductRevenueFact findUnique
   */
  export type ProductRevenueFactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
    /**
     * Filter, which ProductRevenueFact to fetch.
     */
    where: ProductRevenueFactWhereUniqueInput
  }

  /**
   * ProductRevenueFact findUniqueOrThrow
   */
  export type ProductRevenueFactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
    /**
     * Filter, which ProductRevenueFact to fetch.
     */
    where: ProductRevenueFactWhereUniqueInput
  }

  /**
   * ProductRevenueFact findFirst
   */
  export type ProductRevenueFactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
    /**
     * Filter, which ProductRevenueFact to fetch.
     */
    where?: ProductRevenueFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRevenueFacts to fetch.
     */
    orderBy?: ProductRevenueFactOrderByWithRelationInput | ProductRevenueFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRevenueFacts.
     */
    cursor?: ProductRevenueFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRevenueFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRevenueFacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRevenueFacts.
     */
    distinct?: ProductRevenueFactScalarFieldEnum | ProductRevenueFactScalarFieldEnum[]
  }

  /**
   * ProductRevenueFact findFirstOrThrow
   */
  export type ProductRevenueFactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
    /**
     * Filter, which ProductRevenueFact to fetch.
     */
    where?: ProductRevenueFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRevenueFacts to fetch.
     */
    orderBy?: ProductRevenueFactOrderByWithRelationInput | ProductRevenueFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRevenueFacts.
     */
    cursor?: ProductRevenueFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRevenueFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRevenueFacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRevenueFacts.
     */
    distinct?: ProductRevenueFactScalarFieldEnum | ProductRevenueFactScalarFieldEnum[]
  }

  /**
   * ProductRevenueFact findMany
   */
  export type ProductRevenueFactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
    /**
     * Filter, which ProductRevenueFacts to fetch.
     */
    where?: ProductRevenueFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRevenueFacts to fetch.
     */
    orderBy?: ProductRevenueFactOrderByWithRelationInput | ProductRevenueFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductRevenueFacts.
     */
    cursor?: ProductRevenueFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRevenueFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRevenueFacts.
     */
    skip?: number
    distinct?: ProductRevenueFactScalarFieldEnum | ProductRevenueFactScalarFieldEnum[]
  }

  /**
   * ProductRevenueFact create
   */
  export type ProductRevenueFactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductRevenueFact.
     */
    data: XOR<ProductRevenueFactCreateInput, ProductRevenueFactUncheckedCreateInput>
  }

  /**
   * ProductRevenueFact createMany
   */
  export type ProductRevenueFactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductRevenueFacts.
     */
    data: ProductRevenueFactCreateManyInput | ProductRevenueFactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductRevenueFact createManyAndReturn
   */
  export type ProductRevenueFactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * The data used to create many ProductRevenueFacts.
     */
    data: ProductRevenueFactCreateManyInput | ProductRevenueFactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductRevenueFact update
   */
  export type ProductRevenueFactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductRevenueFact.
     */
    data: XOR<ProductRevenueFactUpdateInput, ProductRevenueFactUncheckedUpdateInput>
    /**
     * Choose, which ProductRevenueFact to update.
     */
    where: ProductRevenueFactWhereUniqueInput
  }

  /**
   * ProductRevenueFact updateMany
   */
  export type ProductRevenueFactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductRevenueFacts.
     */
    data: XOR<ProductRevenueFactUpdateManyMutationInput, ProductRevenueFactUncheckedUpdateManyInput>
    /**
     * Filter which ProductRevenueFacts to update
     */
    where?: ProductRevenueFactWhereInput
    /**
     * Limit how many ProductRevenueFacts to update.
     */
    limit?: number
  }

  /**
   * ProductRevenueFact updateManyAndReturn
   */
  export type ProductRevenueFactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * The data used to update ProductRevenueFacts.
     */
    data: XOR<ProductRevenueFactUpdateManyMutationInput, ProductRevenueFactUncheckedUpdateManyInput>
    /**
     * Filter which ProductRevenueFacts to update
     */
    where?: ProductRevenueFactWhereInput
    /**
     * Limit how many ProductRevenueFacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductRevenueFact upsert
   */
  export type ProductRevenueFactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductRevenueFact to update in case it exists.
     */
    where: ProductRevenueFactWhereUniqueInput
    /**
     * In case the ProductRevenueFact found by the `where` argument doesn't exist, create a new ProductRevenueFact with this data.
     */
    create: XOR<ProductRevenueFactCreateInput, ProductRevenueFactUncheckedCreateInput>
    /**
     * In case the ProductRevenueFact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductRevenueFactUpdateInput, ProductRevenueFactUncheckedUpdateInput>
  }

  /**
   * ProductRevenueFact delete
   */
  export type ProductRevenueFactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
    /**
     * Filter which ProductRevenueFact to delete.
     */
    where: ProductRevenueFactWhereUniqueInput
  }

  /**
   * ProductRevenueFact deleteMany
   */
  export type ProductRevenueFactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRevenueFacts to delete
     */
    where?: ProductRevenueFactWhereInput
    /**
     * Limit how many ProductRevenueFacts to delete.
     */
    limit?: number
  }

  /**
   * ProductRevenueFact without action
   */
  export type ProductRevenueFactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
  }


  /**
   * Model CategoryRevenueFact
   */

  export type AggregateCategoryRevenueFact = {
    _count: CategoryRevenueFactCountAggregateOutputType | null
    _avg: CategoryRevenueFactAvgAggregateOutputType | null
    _sum: CategoryRevenueFactSumAggregateOutputType | null
    _min: CategoryRevenueFactMinAggregateOutputType | null
    _max: CategoryRevenueFactMaxAggregateOutputType | null
  }

  export type CategoryRevenueFactAvgAggregateOutputType = {
    business_id: number | null
    category_id: number | null
    date_id: number | null
    revenue_amount: number | null
    total_units_sold: number | null
  }

  export type CategoryRevenueFactSumAggregateOutputType = {
    business_id: number | null
    category_id: number | null
    date_id: number | null
    revenue_amount: number | null
    total_units_sold: number | null
  }

  export type CategoryRevenueFactMinAggregateOutputType = {
    business_id: number | null
    category_id: number | null
    date_id: number | null
    revenue_amount: number | null
    total_units_sold: number | null
  }

  export type CategoryRevenueFactMaxAggregateOutputType = {
    business_id: number | null
    category_id: number | null
    date_id: number | null
    revenue_amount: number | null
    total_units_sold: number | null
  }

  export type CategoryRevenueFactCountAggregateOutputType = {
    business_id: number
    category_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
    _all: number
  }


  export type CategoryRevenueFactAvgAggregateInputType = {
    business_id?: true
    category_id?: true
    date_id?: true
    revenue_amount?: true
    total_units_sold?: true
  }

  export type CategoryRevenueFactSumAggregateInputType = {
    business_id?: true
    category_id?: true
    date_id?: true
    revenue_amount?: true
    total_units_sold?: true
  }

  export type CategoryRevenueFactMinAggregateInputType = {
    business_id?: true
    category_id?: true
    date_id?: true
    revenue_amount?: true
    total_units_sold?: true
  }

  export type CategoryRevenueFactMaxAggregateInputType = {
    business_id?: true
    category_id?: true
    date_id?: true
    revenue_amount?: true
    total_units_sold?: true
  }

  export type CategoryRevenueFactCountAggregateInputType = {
    business_id?: true
    category_id?: true
    date_id?: true
    revenue_amount?: true
    total_units_sold?: true
    _all?: true
  }

  export type CategoryRevenueFactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryRevenueFact to aggregate.
     */
    where?: CategoryRevenueFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryRevenueFacts to fetch.
     */
    orderBy?: CategoryRevenueFactOrderByWithRelationInput | CategoryRevenueFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryRevenueFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryRevenueFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryRevenueFacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryRevenueFacts
    **/
    _count?: true | CategoryRevenueFactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryRevenueFactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryRevenueFactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryRevenueFactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryRevenueFactMaxAggregateInputType
  }

  export type GetCategoryRevenueFactAggregateType<T extends CategoryRevenueFactAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryRevenueFact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryRevenueFact[P]>
      : GetScalarType<T[P], AggregateCategoryRevenueFact[P]>
  }




  export type CategoryRevenueFactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryRevenueFactWhereInput
    orderBy?: CategoryRevenueFactOrderByWithAggregationInput | CategoryRevenueFactOrderByWithAggregationInput[]
    by: CategoryRevenueFactScalarFieldEnum[] | CategoryRevenueFactScalarFieldEnum
    having?: CategoryRevenueFactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryRevenueFactCountAggregateInputType | true
    _avg?: CategoryRevenueFactAvgAggregateInputType
    _sum?: CategoryRevenueFactSumAggregateInputType
    _min?: CategoryRevenueFactMinAggregateInputType
    _max?: CategoryRevenueFactMaxAggregateInputType
  }

  export type CategoryRevenueFactGroupByOutputType = {
    business_id: number
    category_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
    _count: CategoryRevenueFactCountAggregateOutputType | null
    _avg: CategoryRevenueFactAvgAggregateOutputType | null
    _sum: CategoryRevenueFactSumAggregateOutputType | null
    _min: CategoryRevenueFactMinAggregateOutputType | null
    _max: CategoryRevenueFactMaxAggregateOutputType | null
  }

  type GetCategoryRevenueFactGroupByPayload<T extends CategoryRevenueFactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryRevenueFactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryRevenueFactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryRevenueFactGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryRevenueFactGroupByOutputType[P]>
        }
      >
    >


  export type CategoryRevenueFactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    business_id?: boolean
    category_id?: boolean
    date_id?: boolean
    revenue_amount?: boolean
    total_units_sold?: boolean
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    category?: boolean | CategoryDimensionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryRevenueFact"]>

  export type CategoryRevenueFactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    business_id?: boolean
    category_id?: boolean
    date_id?: boolean
    revenue_amount?: boolean
    total_units_sold?: boolean
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    category?: boolean | CategoryDimensionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryRevenueFact"]>

  export type CategoryRevenueFactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    business_id?: boolean
    category_id?: boolean
    date_id?: boolean
    revenue_amount?: boolean
    total_units_sold?: boolean
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    category?: boolean | CategoryDimensionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryRevenueFact"]>

  export type CategoryRevenueFactSelectScalar = {
    business_id?: boolean
    category_id?: boolean
    date_id?: boolean
    revenue_amount?: boolean
    total_units_sold?: boolean
  }

  export type CategoryRevenueFactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"business_id" | "category_id" | "date_id" | "revenue_amount" | "total_units_sold", ExtArgs["result"]["categoryRevenueFact"]>
  export type CategoryRevenueFactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    category?: boolean | CategoryDimensionDefaultArgs<ExtArgs>
  }
  export type CategoryRevenueFactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    category?: boolean | CategoryDimensionDefaultArgs<ExtArgs>
  }
  export type CategoryRevenueFactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    category?: boolean | CategoryDimensionDefaultArgs<ExtArgs>
  }

  export type $CategoryRevenueFactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryRevenueFact"
    objects: {
      date: Prisma.$DateDimensionPayload<ExtArgs>
      business: Prisma.$BusinessDimensionPayload<ExtArgs>
      category: Prisma.$CategoryDimensionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      business_id: number
      category_id: number
      date_id: number
      revenue_amount: number
      total_units_sold: number
    }, ExtArgs["result"]["categoryRevenueFact"]>
    composites: {}
  }

  type CategoryRevenueFactGetPayload<S extends boolean | null | undefined | CategoryRevenueFactDefaultArgs> = $Result.GetResult<Prisma.$CategoryRevenueFactPayload, S>

  type CategoryRevenueFactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryRevenueFactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryRevenueFactCountAggregateInputType | true
    }

  export interface CategoryRevenueFactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryRevenueFact'], meta: { name: 'CategoryRevenueFact' } }
    /**
     * Find zero or one CategoryRevenueFact that matches the filter.
     * @param {CategoryRevenueFactFindUniqueArgs} args - Arguments to find a CategoryRevenueFact
     * @example
     * // Get one CategoryRevenueFact
     * const categoryRevenueFact = await prisma.categoryRevenueFact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryRevenueFactFindUniqueArgs>(args: SelectSubset<T, CategoryRevenueFactFindUniqueArgs<ExtArgs>>): Prisma__CategoryRevenueFactClient<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CategoryRevenueFact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryRevenueFactFindUniqueOrThrowArgs} args - Arguments to find a CategoryRevenueFact
     * @example
     * // Get one CategoryRevenueFact
     * const categoryRevenueFact = await prisma.categoryRevenueFact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryRevenueFactFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryRevenueFactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryRevenueFactClient<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CategoryRevenueFact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryRevenueFactFindFirstArgs} args - Arguments to find a CategoryRevenueFact
     * @example
     * // Get one CategoryRevenueFact
     * const categoryRevenueFact = await prisma.categoryRevenueFact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryRevenueFactFindFirstArgs>(args?: SelectSubset<T, CategoryRevenueFactFindFirstArgs<ExtArgs>>): Prisma__CategoryRevenueFactClient<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CategoryRevenueFact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryRevenueFactFindFirstOrThrowArgs} args - Arguments to find a CategoryRevenueFact
     * @example
     * // Get one CategoryRevenueFact
     * const categoryRevenueFact = await prisma.categoryRevenueFact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryRevenueFactFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryRevenueFactFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryRevenueFactClient<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CategoryRevenueFacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryRevenueFactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryRevenueFacts
     * const categoryRevenueFacts = await prisma.categoryRevenueFact.findMany()
     * 
     * // Get first 10 CategoryRevenueFacts
     * const categoryRevenueFacts = await prisma.categoryRevenueFact.findMany({ take: 10 })
     * 
     * // Only select the `business_id`
     * const categoryRevenueFactWithBusiness_idOnly = await prisma.categoryRevenueFact.findMany({ select: { business_id: true } })
     * 
     */
    findMany<T extends CategoryRevenueFactFindManyArgs>(args?: SelectSubset<T, CategoryRevenueFactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CategoryRevenueFact.
     * @param {CategoryRevenueFactCreateArgs} args - Arguments to create a CategoryRevenueFact.
     * @example
     * // Create one CategoryRevenueFact
     * const CategoryRevenueFact = await prisma.categoryRevenueFact.create({
     *   data: {
     *     // ... data to create a CategoryRevenueFact
     *   }
     * })
     * 
     */
    create<T extends CategoryRevenueFactCreateArgs>(args: SelectSubset<T, CategoryRevenueFactCreateArgs<ExtArgs>>): Prisma__CategoryRevenueFactClient<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CategoryRevenueFacts.
     * @param {CategoryRevenueFactCreateManyArgs} args - Arguments to create many CategoryRevenueFacts.
     * @example
     * // Create many CategoryRevenueFacts
     * const categoryRevenueFact = await prisma.categoryRevenueFact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryRevenueFactCreateManyArgs>(args?: SelectSubset<T, CategoryRevenueFactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryRevenueFacts and returns the data saved in the database.
     * @param {CategoryRevenueFactCreateManyAndReturnArgs} args - Arguments to create many CategoryRevenueFacts.
     * @example
     * // Create many CategoryRevenueFacts
     * const categoryRevenueFact = await prisma.categoryRevenueFact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryRevenueFacts and only return the `business_id`
     * const categoryRevenueFactWithBusiness_idOnly = await prisma.categoryRevenueFact.createManyAndReturn({
     *   select: { business_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryRevenueFactCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryRevenueFactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CategoryRevenueFact.
     * @param {CategoryRevenueFactDeleteArgs} args - Arguments to delete one CategoryRevenueFact.
     * @example
     * // Delete one CategoryRevenueFact
     * const CategoryRevenueFact = await prisma.categoryRevenueFact.delete({
     *   where: {
     *     // ... filter to delete one CategoryRevenueFact
     *   }
     * })
     * 
     */
    delete<T extends CategoryRevenueFactDeleteArgs>(args: SelectSubset<T, CategoryRevenueFactDeleteArgs<ExtArgs>>): Prisma__CategoryRevenueFactClient<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CategoryRevenueFact.
     * @param {CategoryRevenueFactUpdateArgs} args - Arguments to update one CategoryRevenueFact.
     * @example
     * // Update one CategoryRevenueFact
     * const categoryRevenueFact = await prisma.categoryRevenueFact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryRevenueFactUpdateArgs>(args: SelectSubset<T, CategoryRevenueFactUpdateArgs<ExtArgs>>): Prisma__CategoryRevenueFactClient<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CategoryRevenueFacts.
     * @param {CategoryRevenueFactDeleteManyArgs} args - Arguments to filter CategoryRevenueFacts to delete.
     * @example
     * // Delete a few CategoryRevenueFacts
     * const { count } = await prisma.categoryRevenueFact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryRevenueFactDeleteManyArgs>(args?: SelectSubset<T, CategoryRevenueFactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryRevenueFacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryRevenueFactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryRevenueFacts
     * const categoryRevenueFact = await prisma.categoryRevenueFact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryRevenueFactUpdateManyArgs>(args: SelectSubset<T, CategoryRevenueFactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryRevenueFacts and returns the data updated in the database.
     * @param {CategoryRevenueFactUpdateManyAndReturnArgs} args - Arguments to update many CategoryRevenueFacts.
     * @example
     * // Update many CategoryRevenueFacts
     * const categoryRevenueFact = await prisma.categoryRevenueFact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoryRevenueFacts and only return the `business_id`
     * const categoryRevenueFactWithBusiness_idOnly = await prisma.categoryRevenueFact.updateManyAndReturn({
     *   select: { business_id: true },
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
    updateManyAndReturn<T extends CategoryRevenueFactUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryRevenueFactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CategoryRevenueFact.
     * @param {CategoryRevenueFactUpsertArgs} args - Arguments to update or create a CategoryRevenueFact.
     * @example
     * // Update or create a CategoryRevenueFact
     * const categoryRevenueFact = await prisma.categoryRevenueFact.upsert({
     *   create: {
     *     // ... data to create a CategoryRevenueFact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryRevenueFact we want to update
     *   }
     * })
     */
    upsert<T extends CategoryRevenueFactUpsertArgs>(args: SelectSubset<T, CategoryRevenueFactUpsertArgs<ExtArgs>>): Prisma__CategoryRevenueFactClient<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CategoryRevenueFacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryRevenueFactCountArgs} args - Arguments to filter CategoryRevenueFacts to count.
     * @example
     * // Count the number of CategoryRevenueFacts
     * const count = await prisma.categoryRevenueFact.count({
     *   where: {
     *     // ... the filter for the CategoryRevenueFacts we want to count
     *   }
     * })
    **/
    count<T extends CategoryRevenueFactCountArgs>(
      args?: Subset<T, CategoryRevenueFactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryRevenueFactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryRevenueFact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryRevenueFactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryRevenueFactAggregateArgs>(args: Subset<T, CategoryRevenueFactAggregateArgs>): Prisma.PrismaPromise<GetCategoryRevenueFactAggregateType<T>>

    /**
     * Group by CategoryRevenueFact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryRevenueFactGroupByArgs} args - Group by arguments.
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
      T extends CategoryRevenueFactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryRevenueFactGroupByArgs['orderBy'] }
        : { orderBy?: CategoryRevenueFactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryRevenueFactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryRevenueFactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryRevenueFact model
   */
  readonly fields: CategoryRevenueFactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryRevenueFact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryRevenueFactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    date<T extends DateDimensionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DateDimensionDefaultArgs<ExtArgs>>): Prisma__DateDimensionClient<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    business<T extends BusinessDimensionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDimensionDefaultArgs<ExtArgs>>): Prisma__BusinessDimensionClient<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    category<T extends CategoryDimensionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDimensionDefaultArgs<ExtArgs>>): Prisma__CategoryDimensionClient<$Result.GetResult<Prisma.$CategoryDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the CategoryRevenueFact model
   */ 
  interface CategoryRevenueFactFieldRefs {
    readonly business_id: FieldRef<"CategoryRevenueFact", 'Int'>
    readonly category_id: FieldRef<"CategoryRevenueFact", 'Int'>
    readonly date_id: FieldRef<"CategoryRevenueFact", 'Int'>
    readonly revenue_amount: FieldRef<"CategoryRevenueFact", 'Float'>
    readonly total_units_sold: FieldRef<"CategoryRevenueFact", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CategoryRevenueFact findUnique
   */
  export type CategoryRevenueFactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
    /**
     * Filter, which CategoryRevenueFact to fetch.
     */
    where: CategoryRevenueFactWhereUniqueInput
  }

  /**
   * CategoryRevenueFact findUniqueOrThrow
   */
  export type CategoryRevenueFactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
    /**
     * Filter, which CategoryRevenueFact to fetch.
     */
    where: CategoryRevenueFactWhereUniqueInput
  }

  /**
   * CategoryRevenueFact findFirst
   */
  export type CategoryRevenueFactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
    /**
     * Filter, which CategoryRevenueFact to fetch.
     */
    where?: CategoryRevenueFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryRevenueFacts to fetch.
     */
    orderBy?: CategoryRevenueFactOrderByWithRelationInput | CategoryRevenueFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryRevenueFacts.
     */
    cursor?: CategoryRevenueFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryRevenueFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryRevenueFacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryRevenueFacts.
     */
    distinct?: CategoryRevenueFactScalarFieldEnum | CategoryRevenueFactScalarFieldEnum[]
  }

  /**
   * CategoryRevenueFact findFirstOrThrow
   */
  export type CategoryRevenueFactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
    /**
     * Filter, which CategoryRevenueFact to fetch.
     */
    where?: CategoryRevenueFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryRevenueFacts to fetch.
     */
    orderBy?: CategoryRevenueFactOrderByWithRelationInput | CategoryRevenueFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryRevenueFacts.
     */
    cursor?: CategoryRevenueFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryRevenueFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryRevenueFacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryRevenueFacts.
     */
    distinct?: CategoryRevenueFactScalarFieldEnum | CategoryRevenueFactScalarFieldEnum[]
  }

  /**
   * CategoryRevenueFact findMany
   */
  export type CategoryRevenueFactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
    /**
     * Filter, which CategoryRevenueFacts to fetch.
     */
    where?: CategoryRevenueFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryRevenueFacts to fetch.
     */
    orderBy?: CategoryRevenueFactOrderByWithRelationInput | CategoryRevenueFactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryRevenueFacts.
     */
    cursor?: CategoryRevenueFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryRevenueFacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryRevenueFacts.
     */
    skip?: number
    distinct?: CategoryRevenueFactScalarFieldEnum | CategoryRevenueFactScalarFieldEnum[]
  }

  /**
   * CategoryRevenueFact create
   */
  export type CategoryRevenueFactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryRevenueFact.
     */
    data: XOR<CategoryRevenueFactCreateInput, CategoryRevenueFactUncheckedCreateInput>
  }

  /**
   * CategoryRevenueFact createMany
   */
  export type CategoryRevenueFactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryRevenueFacts.
     */
    data: CategoryRevenueFactCreateManyInput | CategoryRevenueFactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryRevenueFact createManyAndReturn
   */
  export type CategoryRevenueFactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * The data used to create many CategoryRevenueFacts.
     */
    data: CategoryRevenueFactCreateManyInput | CategoryRevenueFactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryRevenueFact update
   */
  export type CategoryRevenueFactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryRevenueFact.
     */
    data: XOR<CategoryRevenueFactUpdateInput, CategoryRevenueFactUncheckedUpdateInput>
    /**
     * Choose, which CategoryRevenueFact to update.
     */
    where: CategoryRevenueFactWhereUniqueInput
  }

  /**
   * CategoryRevenueFact updateMany
   */
  export type CategoryRevenueFactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryRevenueFacts.
     */
    data: XOR<CategoryRevenueFactUpdateManyMutationInput, CategoryRevenueFactUncheckedUpdateManyInput>
    /**
     * Filter which CategoryRevenueFacts to update
     */
    where?: CategoryRevenueFactWhereInput
    /**
     * Limit how many CategoryRevenueFacts to update.
     */
    limit?: number
  }

  /**
   * CategoryRevenueFact updateManyAndReturn
   */
  export type CategoryRevenueFactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * The data used to update CategoryRevenueFacts.
     */
    data: XOR<CategoryRevenueFactUpdateManyMutationInput, CategoryRevenueFactUncheckedUpdateManyInput>
    /**
     * Filter which CategoryRevenueFacts to update
     */
    where?: CategoryRevenueFactWhereInput
    /**
     * Limit how many CategoryRevenueFacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryRevenueFact upsert
   */
  export type CategoryRevenueFactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryRevenueFact to update in case it exists.
     */
    where: CategoryRevenueFactWhereUniqueInput
    /**
     * In case the CategoryRevenueFact found by the `where` argument doesn't exist, create a new CategoryRevenueFact with this data.
     */
    create: XOR<CategoryRevenueFactCreateInput, CategoryRevenueFactUncheckedCreateInput>
    /**
     * In case the CategoryRevenueFact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryRevenueFactUpdateInput, CategoryRevenueFactUncheckedUpdateInput>
  }

  /**
   * CategoryRevenueFact delete
   */
  export type CategoryRevenueFactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
    /**
     * Filter which CategoryRevenueFact to delete.
     */
    where: CategoryRevenueFactWhereUniqueInput
  }

  /**
   * CategoryRevenueFact deleteMany
   */
  export type CategoryRevenueFactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryRevenueFacts to delete
     */
    where?: CategoryRevenueFactWhereInput
    /**
     * Limit how many CategoryRevenueFacts to delete.
     */
    limit?: number
  }

  /**
   * CategoryRevenueFact without action
   */
  export type CategoryRevenueFactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
  }


  /**
   * Model BatchPrice
   */

  export type AggregateBatchPrice = {
    _count: BatchPriceCountAggregateOutputType | null
    _avg: BatchPriceAvgAggregateOutputType | null
    _sum: BatchPriceSumAggregateOutputType | null
    _min: BatchPriceMinAggregateOutputType | null
    _max: BatchPriceMaxAggregateOutputType | null
  }

  export type BatchPriceAvgAggregateOutputType = {
    product_id: number | null
    business_id: number | null
    date_id: number | null
    purchase_price: number | null
  }

  export type BatchPriceSumAggregateOutputType = {
    product_id: number | null
    business_id: number | null
    date_id: number | null
    purchase_price: number | null
  }

  export type BatchPriceMinAggregateOutputType = {
    product_id: number | null
    business_id: number | null
    date_id: number | null
    purchase_price: number | null
  }

  export type BatchPriceMaxAggregateOutputType = {
    product_id: number | null
    business_id: number | null
    date_id: number | null
    purchase_price: number | null
  }

  export type BatchPriceCountAggregateOutputType = {
    product_id: number
    business_id: number
    date_id: number
    purchase_price: number
    _all: number
  }


  export type BatchPriceAvgAggregateInputType = {
    product_id?: true
    business_id?: true
    date_id?: true
    purchase_price?: true
  }

  export type BatchPriceSumAggregateInputType = {
    product_id?: true
    business_id?: true
    date_id?: true
    purchase_price?: true
  }

  export type BatchPriceMinAggregateInputType = {
    product_id?: true
    business_id?: true
    date_id?: true
    purchase_price?: true
  }

  export type BatchPriceMaxAggregateInputType = {
    product_id?: true
    business_id?: true
    date_id?: true
    purchase_price?: true
  }

  export type BatchPriceCountAggregateInputType = {
    product_id?: true
    business_id?: true
    date_id?: true
    purchase_price?: true
    _all?: true
  }

  export type BatchPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BatchPrice to aggregate.
     */
    where?: BatchPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchPrices to fetch.
     */
    orderBy?: BatchPriceOrderByWithRelationInput | BatchPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BatchPrices
    **/
    _count?: true | BatchPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatchPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatchPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchPriceMaxAggregateInputType
  }

  export type GetBatchPriceAggregateType<T extends BatchPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateBatchPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatchPrice[P]>
      : GetScalarType<T[P], AggregateBatchPrice[P]>
  }




  export type BatchPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchPriceWhereInput
    orderBy?: BatchPriceOrderByWithAggregationInput | BatchPriceOrderByWithAggregationInput[]
    by: BatchPriceScalarFieldEnum[] | BatchPriceScalarFieldEnum
    having?: BatchPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchPriceCountAggregateInputType | true
    _avg?: BatchPriceAvgAggregateInputType
    _sum?: BatchPriceSumAggregateInputType
    _min?: BatchPriceMinAggregateInputType
    _max?: BatchPriceMaxAggregateInputType
  }

  export type BatchPriceGroupByOutputType = {
    product_id: number
    business_id: number
    date_id: number
    purchase_price: number
    _count: BatchPriceCountAggregateOutputType | null
    _avg: BatchPriceAvgAggregateOutputType | null
    _sum: BatchPriceSumAggregateOutputType | null
    _min: BatchPriceMinAggregateOutputType | null
    _max: BatchPriceMaxAggregateOutputType | null
  }

  type GetBatchPriceGroupByPayload<T extends BatchPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchPriceGroupByOutputType[P]>
            : GetScalarType<T[P], BatchPriceGroupByOutputType[P]>
        }
      >
    >


  export type BatchPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    business_id?: boolean
    date_id?: boolean
    purchase_price?: boolean
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    product?: boolean | ProductDimensionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batchPrice"]>

  export type BatchPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    business_id?: boolean
    date_id?: boolean
    purchase_price?: boolean
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    product?: boolean | ProductDimensionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batchPrice"]>

  export type BatchPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    business_id?: boolean
    date_id?: boolean
    purchase_price?: boolean
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    product?: boolean | ProductDimensionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batchPrice"]>

  export type BatchPriceSelectScalar = {
    product_id?: boolean
    business_id?: boolean
    date_id?: boolean
    purchase_price?: boolean
  }

  export type BatchPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "business_id" | "date_id" | "purchase_price", ExtArgs["result"]["batchPrice"]>
  export type BatchPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    product?: boolean | ProductDimensionDefaultArgs<ExtArgs>
  }
  export type BatchPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    product?: boolean | ProductDimensionDefaultArgs<ExtArgs>
  }
  export type BatchPriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    date?: boolean | DateDimensionDefaultArgs<ExtArgs>
    business?: boolean | BusinessDimensionDefaultArgs<ExtArgs>
    product?: boolean | ProductDimensionDefaultArgs<ExtArgs>
  }

  export type $BatchPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BatchPrice"
    objects: {
      date: Prisma.$DateDimensionPayload<ExtArgs>
      business: Prisma.$BusinessDimensionPayload<ExtArgs>
      product: Prisma.$ProductDimensionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      business_id: number
      date_id: number
      purchase_price: number
    }, ExtArgs["result"]["batchPrice"]>
    composites: {}
  }

  type BatchPriceGetPayload<S extends boolean | null | undefined | BatchPriceDefaultArgs> = $Result.GetResult<Prisma.$BatchPricePayload, S>

  type BatchPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchPriceCountAggregateInputType | true
    }

  export interface BatchPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BatchPrice'], meta: { name: 'BatchPrice' } }
    /**
     * Find zero or one BatchPrice that matches the filter.
     * @param {BatchPriceFindUniqueArgs} args - Arguments to find a BatchPrice
     * @example
     * // Get one BatchPrice
     * const batchPrice = await prisma.batchPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchPriceFindUniqueArgs>(args: SelectSubset<T, BatchPriceFindUniqueArgs<ExtArgs>>): Prisma__BatchPriceClient<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one BatchPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchPriceFindUniqueOrThrowArgs} args - Arguments to find a BatchPrice
     * @example
     * // Get one BatchPrice
     * const batchPrice = await prisma.batchPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchPriceClient<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first BatchPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchPriceFindFirstArgs} args - Arguments to find a BatchPrice
     * @example
     * // Get one BatchPrice
     * const batchPrice = await prisma.batchPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchPriceFindFirstArgs>(args?: SelectSubset<T, BatchPriceFindFirstArgs<ExtArgs>>): Prisma__BatchPriceClient<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first BatchPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchPriceFindFirstOrThrowArgs} args - Arguments to find a BatchPrice
     * @example
     * // Get one BatchPrice
     * const batchPrice = await prisma.batchPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchPriceClient<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more BatchPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BatchPrices
     * const batchPrices = await prisma.batchPrice.findMany()
     * 
     * // Get first 10 BatchPrices
     * const batchPrices = await prisma.batchPrice.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const batchPriceWithProduct_idOnly = await prisma.batchPrice.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends BatchPriceFindManyArgs>(args?: SelectSubset<T, BatchPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a BatchPrice.
     * @param {BatchPriceCreateArgs} args - Arguments to create a BatchPrice.
     * @example
     * // Create one BatchPrice
     * const BatchPrice = await prisma.batchPrice.create({
     *   data: {
     *     // ... data to create a BatchPrice
     *   }
     * })
     * 
     */
    create<T extends BatchPriceCreateArgs>(args: SelectSubset<T, BatchPriceCreateArgs<ExtArgs>>): Prisma__BatchPriceClient<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many BatchPrices.
     * @param {BatchPriceCreateManyArgs} args - Arguments to create many BatchPrices.
     * @example
     * // Create many BatchPrices
     * const batchPrice = await prisma.batchPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchPriceCreateManyArgs>(args?: SelectSubset<T, BatchPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BatchPrices and returns the data saved in the database.
     * @param {BatchPriceCreateManyAndReturnArgs} args - Arguments to create many BatchPrices.
     * @example
     * // Create many BatchPrices
     * const batchPrice = await prisma.batchPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BatchPrices and only return the `product_id`
     * const batchPriceWithProduct_idOnly = await prisma.batchPrice.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatchPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, BatchPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a BatchPrice.
     * @param {BatchPriceDeleteArgs} args - Arguments to delete one BatchPrice.
     * @example
     * // Delete one BatchPrice
     * const BatchPrice = await prisma.batchPrice.delete({
     *   where: {
     *     // ... filter to delete one BatchPrice
     *   }
     * })
     * 
     */
    delete<T extends BatchPriceDeleteArgs>(args: SelectSubset<T, BatchPriceDeleteArgs<ExtArgs>>): Prisma__BatchPriceClient<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one BatchPrice.
     * @param {BatchPriceUpdateArgs} args - Arguments to update one BatchPrice.
     * @example
     * // Update one BatchPrice
     * const batchPrice = await prisma.batchPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchPriceUpdateArgs>(args: SelectSubset<T, BatchPriceUpdateArgs<ExtArgs>>): Prisma__BatchPriceClient<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more BatchPrices.
     * @param {BatchPriceDeleteManyArgs} args - Arguments to filter BatchPrices to delete.
     * @example
     * // Delete a few BatchPrices
     * const { count } = await prisma.batchPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchPriceDeleteManyArgs>(args?: SelectSubset<T, BatchPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BatchPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BatchPrices
     * const batchPrice = await prisma.batchPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchPriceUpdateManyArgs>(args: SelectSubset<T, BatchPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BatchPrices and returns the data updated in the database.
     * @param {BatchPriceUpdateManyAndReturnArgs} args - Arguments to update many BatchPrices.
     * @example
     * // Update many BatchPrices
     * const batchPrice = await prisma.batchPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BatchPrices and only return the `product_id`
     * const batchPriceWithProduct_idOnly = await prisma.batchPrice.updateManyAndReturn({
     *   select: { product_id: true },
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
    updateManyAndReturn<T extends BatchPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, BatchPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one BatchPrice.
     * @param {BatchPriceUpsertArgs} args - Arguments to update or create a BatchPrice.
     * @example
     * // Update or create a BatchPrice
     * const batchPrice = await prisma.batchPrice.upsert({
     *   create: {
     *     // ... data to create a BatchPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BatchPrice we want to update
     *   }
     * })
     */
    upsert<T extends BatchPriceUpsertArgs>(args: SelectSubset<T, BatchPriceUpsertArgs<ExtArgs>>): Prisma__BatchPriceClient<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of BatchPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchPriceCountArgs} args - Arguments to filter BatchPrices to count.
     * @example
     * // Count the number of BatchPrices
     * const count = await prisma.batchPrice.count({
     *   where: {
     *     // ... the filter for the BatchPrices we want to count
     *   }
     * })
    **/
    count<T extends BatchPriceCountArgs>(
      args?: Subset<T, BatchPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BatchPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatchPriceAggregateArgs>(args: Subset<T, BatchPriceAggregateArgs>): Prisma.PrismaPromise<GetBatchPriceAggregateType<T>>

    /**
     * Group by BatchPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchPriceGroupByArgs} args - Group by arguments.
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
      T extends BatchPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchPriceGroupByArgs['orderBy'] }
        : { orderBy?: BatchPriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BatchPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BatchPrice model
   */
  readonly fields: BatchPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BatchPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    date<T extends DateDimensionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DateDimensionDefaultArgs<ExtArgs>>): Prisma__DateDimensionClient<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    business<T extends BusinessDimensionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDimensionDefaultArgs<ExtArgs>>): Prisma__BusinessDimensionClient<$Result.GetResult<Prisma.$BusinessDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    product<T extends ProductDimensionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDimensionDefaultArgs<ExtArgs>>): Prisma__ProductDimensionClient<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the BatchPrice model
   */ 
  interface BatchPriceFieldRefs {
    readonly product_id: FieldRef<"BatchPrice", 'Int'>
    readonly business_id: FieldRef<"BatchPrice", 'Int'>
    readonly date_id: FieldRef<"BatchPrice", 'Int'>
    readonly purchase_price: FieldRef<"BatchPrice", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * BatchPrice findUnique
   */
  export type BatchPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
    /**
     * Filter, which BatchPrice to fetch.
     */
    where: BatchPriceWhereUniqueInput
  }

  /**
   * BatchPrice findUniqueOrThrow
   */
  export type BatchPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
    /**
     * Filter, which BatchPrice to fetch.
     */
    where: BatchPriceWhereUniqueInput
  }

  /**
   * BatchPrice findFirst
   */
  export type BatchPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
    /**
     * Filter, which BatchPrice to fetch.
     */
    where?: BatchPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchPrices to fetch.
     */
    orderBy?: BatchPriceOrderByWithRelationInput | BatchPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BatchPrices.
     */
    cursor?: BatchPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BatchPrices.
     */
    distinct?: BatchPriceScalarFieldEnum | BatchPriceScalarFieldEnum[]
  }

  /**
   * BatchPrice findFirstOrThrow
   */
  export type BatchPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
    /**
     * Filter, which BatchPrice to fetch.
     */
    where?: BatchPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchPrices to fetch.
     */
    orderBy?: BatchPriceOrderByWithRelationInput | BatchPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BatchPrices.
     */
    cursor?: BatchPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BatchPrices.
     */
    distinct?: BatchPriceScalarFieldEnum | BatchPriceScalarFieldEnum[]
  }

  /**
   * BatchPrice findMany
   */
  export type BatchPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
    /**
     * Filter, which BatchPrices to fetch.
     */
    where?: BatchPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchPrices to fetch.
     */
    orderBy?: BatchPriceOrderByWithRelationInput | BatchPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BatchPrices.
     */
    cursor?: BatchPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchPrices.
     */
    skip?: number
    distinct?: BatchPriceScalarFieldEnum | BatchPriceScalarFieldEnum[]
  }

  /**
   * BatchPrice create
   */
  export type BatchPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a BatchPrice.
     */
    data: XOR<BatchPriceCreateInput, BatchPriceUncheckedCreateInput>
  }

  /**
   * BatchPrice createMany
   */
  export type BatchPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BatchPrices.
     */
    data: BatchPriceCreateManyInput | BatchPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BatchPrice createManyAndReturn
   */
  export type BatchPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * The data used to create many BatchPrices.
     */
    data: BatchPriceCreateManyInput | BatchPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BatchPrice update
   */
  export type BatchPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a BatchPrice.
     */
    data: XOR<BatchPriceUpdateInput, BatchPriceUncheckedUpdateInput>
    /**
     * Choose, which BatchPrice to update.
     */
    where: BatchPriceWhereUniqueInput
  }

  /**
   * BatchPrice updateMany
   */
  export type BatchPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BatchPrices.
     */
    data: XOR<BatchPriceUpdateManyMutationInput, BatchPriceUncheckedUpdateManyInput>
    /**
     * Filter which BatchPrices to update
     */
    where?: BatchPriceWhereInput
    /**
     * Limit how many BatchPrices to update.
     */
    limit?: number
  }

  /**
   * BatchPrice updateManyAndReturn
   */
  export type BatchPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * The data used to update BatchPrices.
     */
    data: XOR<BatchPriceUpdateManyMutationInput, BatchPriceUncheckedUpdateManyInput>
    /**
     * Filter which BatchPrices to update
     */
    where?: BatchPriceWhereInput
    /**
     * Limit how many BatchPrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BatchPrice upsert
   */
  export type BatchPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the BatchPrice to update in case it exists.
     */
    where: BatchPriceWhereUniqueInput
    /**
     * In case the BatchPrice found by the `where` argument doesn't exist, create a new BatchPrice with this data.
     */
    create: XOR<BatchPriceCreateInput, BatchPriceUncheckedCreateInput>
    /**
     * In case the BatchPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchPriceUpdateInput, BatchPriceUncheckedUpdateInput>
  }

  /**
   * BatchPrice delete
   */
  export type BatchPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
    /**
     * Filter which BatchPrice to delete.
     */
    where: BatchPriceWhereUniqueInput
  }

  /**
   * BatchPrice deleteMany
   */
  export type BatchPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BatchPrices to delete
     */
    where?: BatchPriceWhereInput
    /**
     * Limit how many BatchPrices to delete.
     */
    limit?: number
  }

  /**
   * BatchPrice without action
   */
  export type BatchPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
  }


  /**
   * Model DateDimension
   */

  export type AggregateDateDimension = {
    _count: DateDimensionCountAggregateOutputType | null
    _avg: DateDimensionAvgAggregateOutputType | null
    _sum: DateDimensionSumAggregateOutputType | null
    _min: DateDimensionMinAggregateOutputType | null
    _max: DateDimensionMaxAggregateOutputType | null
  }

  export type DateDimensionAvgAggregateOutputType = {
    date_id: number | null
    day: number | null
    week: number | null
    month: number | null
    quarter: number | null
    year: number | null
  }

  export type DateDimensionSumAggregateOutputType = {
    date_id: number | null
    day: number | null
    week: number | null
    month: number | null
    quarter: number | null
    year: number | null
  }

  export type DateDimensionMinAggregateOutputType = {
    date_id: number | null
    full_date: Date | null
    day: number | null
    week: number | null
    month: number | null
    quarter: number | null
    year: number | null
  }

  export type DateDimensionMaxAggregateOutputType = {
    date_id: number | null
    full_date: Date | null
    day: number | null
    week: number | null
    month: number | null
    quarter: number | null
    year: number | null
  }

  export type DateDimensionCountAggregateOutputType = {
    date_id: number
    full_date: number
    day: number
    week: number
    month: number
    quarter: number
    year: number
    _all: number
  }


  export type DateDimensionAvgAggregateInputType = {
    date_id?: true
    day?: true
    week?: true
    month?: true
    quarter?: true
    year?: true
  }

  export type DateDimensionSumAggregateInputType = {
    date_id?: true
    day?: true
    week?: true
    month?: true
    quarter?: true
    year?: true
  }

  export type DateDimensionMinAggregateInputType = {
    date_id?: true
    full_date?: true
    day?: true
    week?: true
    month?: true
    quarter?: true
    year?: true
  }

  export type DateDimensionMaxAggregateInputType = {
    date_id?: true
    full_date?: true
    day?: true
    week?: true
    month?: true
    quarter?: true
    year?: true
  }

  export type DateDimensionCountAggregateInputType = {
    date_id?: true
    full_date?: true
    day?: true
    week?: true
    month?: true
    quarter?: true
    year?: true
    _all?: true
  }

  export type DateDimensionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DateDimension to aggregate.
     */
    where?: DateDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateDimensions to fetch.
     */
    orderBy?: DateDimensionOrderByWithRelationInput | DateDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DateDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateDimensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DateDimensions
    **/
    _count?: true | DateDimensionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DateDimensionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DateDimensionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DateDimensionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DateDimensionMaxAggregateInputType
  }

  export type GetDateDimensionAggregateType<T extends DateDimensionAggregateArgs> = {
        [P in keyof T & keyof AggregateDateDimension]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDateDimension[P]>
      : GetScalarType<T[P], AggregateDateDimension[P]>
  }




  export type DateDimensionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DateDimensionWhereInput
    orderBy?: DateDimensionOrderByWithAggregationInput | DateDimensionOrderByWithAggregationInput[]
    by: DateDimensionScalarFieldEnum[] | DateDimensionScalarFieldEnum
    having?: DateDimensionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DateDimensionCountAggregateInputType | true
    _avg?: DateDimensionAvgAggregateInputType
    _sum?: DateDimensionSumAggregateInputType
    _min?: DateDimensionMinAggregateInputType
    _max?: DateDimensionMaxAggregateInputType
  }

  export type DateDimensionGroupByOutputType = {
    date_id: number
    full_date: Date
    day: number
    week: number
    month: number
    quarter: number
    year: number
    _count: DateDimensionCountAggregateOutputType | null
    _avg: DateDimensionAvgAggregateOutputType | null
    _sum: DateDimensionSumAggregateOutputType | null
    _min: DateDimensionMinAggregateOutputType | null
    _max: DateDimensionMaxAggregateOutputType | null
  }

  type GetDateDimensionGroupByPayload<T extends DateDimensionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DateDimensionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DateDimensionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DateDimensionGroupByOutputType[P]>
            : GetScalarType<T[P], DateDimensionGroupByOutputType[P]>
        }
      >
    >


  export type DateDimensionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date_id?: boolean
    full_date?: boolean
    day?: boolean
    week?: boolean
    month?: boolean
    quarter?: boolean
    year?: boolean
    product_revenues?: boolean | DateDimension$product_revenuesArgs<ExtArgs>
    category_revenues?: boolean | DateDimension$category_revenuesArgs<ExtArgs>
    batch_prices?: boolean | DateDimension$batch_pricesArgs<ExtArgs>
    expiring_products?: boolean | DateDimension$expiring_productsArgs<ExtArgs>
    _count?: boolean | DateDimensionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateDimension"]>

  export type DateDimensionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date_id?: boolean
    full_date?: boolean
    day?: boolean
    week?: boolean
    month?: boolean
    quarter?: boolean
    year?: boolean
  }, ExtArgs["result"]["dateDimension"]>

  export type DateDimensionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date_id?: boolean
    full_date?: boolean
    day?: boolean
    week?: boolean
    month?: boolean
    quarter?: boolean
    year?: boolean
  }, ExtArgs["result"]["dateDimension"]>

  export type DateDimensionSelectScalar = {
    date_id?: boolean
    full_date?: boolean
    day?: boolean
    week?: boolean
    month?: boolean
    quarter?: boolean
    year?: boolean
  }

  export type DateDimensionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"date_id" | "full_date" | "day" | "week" | "month" | "quarter" | "year", ExtArgs["result"]["dateDimension"]>
  export type DateDimensionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_revenues?: boolean | DateDimension$product_revenuesArgs<ExtArgs>
    category_revenues?: boolean | DateDimension$category_revenuesArgs<ExtArgs>
    batch_prices?: boolean | DateDimension$batch_pricesArgs<ExtArgs>
    expiring_products?: boolean | DateDimension$expiring_productsArgs<ExtArgs>
    _count?: boolean | DateDimensionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DateDimensionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DateDimensionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DateDimensionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DateDimension"
    objects: {
      product_revenues: Prisma.$ProductRevenueFactPayload<ExtArgs>[]
      category_revenues: Prisma.$CategoryRevenueFactPayload<ExtArgs>[]
      batch_prices: Prisma.$BatchPricePayload<ExtArgs>[]
      expiring_products: Prisma.$ProductDimensionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      date_id: number
      full_date: Date
      day: number
      week: number
      month: number
      quarter: number
      year: number
    }, ExtArgs["result"]["dateDimension"]>
    composites: {}
  }

  type DateDimensionGetPayload<S extends boolean | null | undefined | DateDimensionDefaultArgs> = $Result.GetResult<Prisma.$DateDimensionPayload, S>

  type DateDimensionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DateDimensionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DateDimensionCountAggregateInputType | true
    }

  export interface DateDimensionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DateDimension'], meta: { name: 'DateDimension' } }
    /**
     * Find zero or one DateDimension that matches the filter.
     * @param {DateDimensionFindUniqueArgs} args - Arguments to find a DateDimension
     * @example
     * // Get one DateDimension
     * const dateDimension = await prisma.dateDimension.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DateDimensionFindUniqueArgs>(args: SelectSubset<T, DateDimensionFindUniqueArgs<ExtArgs>>): Prisma__DateDimensionClient<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one DateDimension that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DateDimensionFindUniqueOrThrowArgs} args - Arguments to find a DateDimension
     * @example
     * // Get one DateDimension
     * const dateDimension = await prisma.dateDimension.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DateDimensionFindUniqueOrThrowArgs>(args: SelectSubset<T, DateDimensionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DateDimensionClient<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first DateDimension that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateDimensionFindFirstArgs} args - Arguments to find a DateDimension
     * @example
     * // Get one DateDimension
     * const dateDimension = await prisma.dateDimension.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DateDimensionFindFirstArgs>(args?: SelectSubset<T, DateDimensionFindFirstArgs<ExtArgs>>): Prisma__DateDimensionClient<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first DateDimension that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateDimensionFindFirstOrThrowArgs} args - Arguments to find a DateDimension
     * @example
     * // Get one DateDimension
     * const dateDimension = await prisma.dateDimension.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DateDimensionFindFirstOrThrowArgs>(args?: SelectSubset<T, DateDimensionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DateDimensionClient<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more DateDimensions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateDimensionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DateDimensions
     * const dateDimensions = await prisma.dateDimension.findMany()
     * 
     * // Get first 10 DateDimensions
     * const dateDimensions = await prisma.dateDimension.findMany({ take: 10 })
     * 
     * // Only select the `date_id`
     * const dateDimensionWithDate_idOnly = await prisma.dateDimension.findMany({ select: { date_id: true } })
     * 
     */
    findMany<T extends DateDimensionFindManyArgs>(args?: SelectSubset<T, DateDimensionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a DateDimension.
     * @param {DateDimensionCreateArgs} args - Arguments to create a DateDimension.
     * @example
     * // Create one DateDimension
     * const DateDimension = await prisma.dateDimension.create({
     *   data: {
     *     // ... data to create a DateDimension
     *   }
     * })
     * 
     */
    create<T extends DateDimensionCreateArgs>(args: SelectSubset<T, DateDimensionCreateArgs<ExtArgs>>): Prisma__DateDimensionClient<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many DateDimensions.
     * @param {DateDimensionCreateManyArgs} args - Arguments to create many DateDimensions.
     * @example
     * // Create many DateDimensions
     * const dateDimension = await prisma.dateDimension.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DateDimensionCreateManyArgs>(args?: SelectSubset<T, DateDimensionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DateDimensions and returns the data saved in the database.
     * @param {DateDimensionCreateManyAndReturnArgs} args - Arguments to create many DateDimensions.
     * @example
     * // Create many DateDimensions
     * const dateDimension = await prisma.dateDimension.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DateDimensions and only return the `date_id`
     * const dateDimensionWithDate_idOnly = await prisma.dateDimension.createManyAndReturn({
     *   select: { date_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DateDimensionCreateManyAndReturnArgs>(args?: SelectSubset<T, DateDimensionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a DateDimension.
     * @param {DateDimensionDeleteArgs} args - Arguments to delete one DateDimension.
     * @example
     * // Delete one DateDimension
     * const DateDimension = await prisma.dateDimension.delete({
     *   where: {
     *     // ... filter to delete one DateDimension
     *   }
     * })
     * 
     */
    delete<T extends DateDimensionDeleteArgs>(args: SelectSubset<T, DateDimensionDeleteArgs<ExtArgs>>): Prisma__DateDimensionClient<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one DateDimension.
     * @param {DateDimensionUpdateArgs} args - Arguments to update one DateDimension.
     * @example
     * // Update one DateDimension
     * const dateDimension = await prisma.dateDimension.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DateDimensionUpdateArgs>(args: SelectSubset<T, DateDimensionUpdateArgs<ExtArgs>>): Prisma__DateDimensionClient<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more DateDimensions.
     * @param {DateDimensionDeleteManyArgs} args - Arguments to filter DateDimensions to delete.
     * @example
     * // Delete a few DateDimensions
     * const { count } = await prisma.dateDimension.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DateDimensionDeleteManyArgs>(args?: SelectSubset<T, DateDimensionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateDimensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateDimensionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DateDimensions
     * const dateDimension = await prisma.dateDimension.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DateDimensionUpdateManyArgs>(args: SelectSubset<T, DateDimensionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateDimensions and returns the data updated in the database.
     * @param {DateDimensionUpdateManyAndReturnArgs} args - Arguments to update many DateDimensions.
     * @example
     * // Update many DateDimensions
     * const dateDimension = await prisma.dateDimension.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DateDimensions and only return the `date_id`
     * const dateDimensionWithDate_idOnly = await prisma.dateDimension.updateManyAndReturn({
     *   select: { date_id: true },
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
    updateManyAndReturn<T extends DateDimensionUpdateManyAndReturnArgs>(args: SelectSubset<T, DateDimensionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one DateDimension.
     * @param {DateDimensionUpsertArgs} args - Arguments to update or create a DateDimension.
     * @example
     * // Update or create a DateDimension
     * const dateDimension = await prisma.dateDimension.upsert({
     *   create: {
     *     // ... data to create a DateDimension
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DateDimension we want to update
     *   }
     * })
     */
    upsert<T extends DateDimensionUpsertArgs>(args: SelectSubset<T, DateDimensionUpsertArgs<ExtArgs>>): Prisma__DateDimensionClient<$Result.GetResult<Prisma.$DateDimensionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of DateDimensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateDimensionCountArgs} args - Arguments to filter DateDimensions to count.
     * @example
     * // Count the number of DateDimensions
     * const count = await prisma.dateDimension.count({
     *   where: {
     *     // ... the filter for the DateDimensions we want to count
     *   }
     * })
    **/
    count<T extends DateDimensionCountArgs>(
      args?: Subset<T, DateDimensionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DateDimensionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DateDimension.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateDimensionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DateDimensionAggregateArgs>(args: Subset<T, DateDimensionAggregateArgs>): Prisma.PrismaPromise<GetDateDimensionAggregateType<T>>

    /**
     * Group by DateDimension.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateDimensionGroupByArgs} args - Group by arguments.
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
      T extends DateDimensionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DateDimensionGroupByArgs['orderBy'] }
        : { orderBy?: DateDimensionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DateDimensionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDateDimensionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DateDimension model
   */
  readonly fields: DateDimensionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DateDimension.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DateDimensionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_revenues<T extends DateDimension$product_revenuesArgs<ExtArgs> = {}>(args?: Subset<T, DateDimension$product_revenuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRevenueFactPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    category_revenues<T extends DateDimension$category_revenuesArgs<ExtArgs> = {}>(args?: Subset<T, DateDimension$category_revenuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryRevenueFactPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    batch_prices<T extends DateDimension$batch_pricesArgs<ExtArgs> = {}>(args?: Subset<T, DateDimension$batch_pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPricePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    expiring_products<T extends DateDimension$expiring_productsArgs<ExtArgs> = {}>(args?: Subset<T, DateDimension$expiring_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDimensionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the DateDimension model
   */ 
  interface DateDimensionFieldRefs {
    readonly date_id: FieldRef<"DateDimension", 'Int'>
    readonly full_date: FieldRef<"DateDimension", 'DateTime'>
    readonly day: FieldRef<"DateDimension", 'Int'>
    readonly week: FieldRef<"DateDimension", 'Int'>
    readonly month: FieldRef<"DateDimension", 'Int'>
    readonly quarter: FieldRef<"DateDimension", 'Int'>
    readonly year: FieldRef<"DateDimension", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DateDimension findUnique
   */
  export type DateDimensionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateDimensionInclude<ExtArgs> | null
    /**
     * Filter, which DateDimension to fetch.
     */
    where: DateDimensionWhereUniqueInput
  }

  /**
   * DateDimension findUniqueOrThrow
   */
  export type DateDimensionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateDimensionInclude<ExtArgs> | null
    /**
     * Filter, which DateDimension to fetch.
     */
    where: DateDimensionWhereUniqueInput
  }

  /**
   * DateDimension findFirst
   */
  export type DateDimensionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateDimensionInclude<ExtArgs> | null
    /**
     * Filter, which DateDimension to fetch.
     */
    where?: DateDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateDimensions to fetch.
     */
    orderBy?: DateDimensionOrderByWithRelationInput | DateDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateDimensions.
     */
    cursor?: DateDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateDimensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateDimensions.
     */
    distinct?: DateDimensionScalarFieldEnum | DateDimensionScalarFieldEnum[]
  }

  /**
   * DateDimension findFirstOrThrow
   */
  export type DateDimensionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateDimensionInclude<ExtArgs> | null
    /**
     * Filter, which DateDimension to fetch.
     */
    where?: DateDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateDimensions to fetch.
     */
    orderBy?: DateDimensionOrderByWithRelationInput | DateDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateDimensions.
     */
    cursor?: DateDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateDimensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateDimensions.
     */
    distinct?: DateDimensionScalarFieldEnum | DateDimensionScalarFieldEnum[]
  }

  /**
   * DateDimension findMany
   */
  export type DateDimensionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateDimensionInclude<ExtArgs> | null
    /**
     * Filter, which DateDimensions to fetch.
     */
    where?: DateDimensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateDimensions to fetch.
     */
    orderBy?: DateDimensionOrderByWithRelationInput | DateDimensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DateDimensions.
     */
    cursor?: DateDimensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateDimensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateDimensions.
     */
    skip?: number
    distinct?: DateDimensionScalarFieldEnum | DateDimensionScalarFieldEnum[]
  }

  /**
   * DateDimension create
   */
  export type DateDimensionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateDimensionInclude<ExtArgs> | null
    /**
     * The data needed to create a DateDimension.
     */
    data: XOR<DateDimensionCreateInput, DateDimensionUncheckedCreateInput>
  }

  /**
   * DateDimension createMany
   */
  export type DateDimensionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DateDimensions.
     */
    data: DateDimensionCreateManyInput | DateDimensionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DateDimension createManyAndReturn
   */
  export type DateDimensionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * The data used to create many DateDimensions.
     */
    data: DateDimensionCreateManyInput | DateDimensionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DateDimension update
   */
  export type DateDimensionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateDimensionInclude<ExtArgs> | null
    /**
     * The data needed to update a DateDimension.
     */
    data: XOR<DateDimensionUpdateInput, DateDimensionUncheckedUpdateInput>
    /**
     * Choose, which DateDimension to update.
     */
    where: DateDimensionWhereUniqueInput
  }

  /**
   * DateDimension updateMany
   */
  export type DateDimensionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DateDimensions.
     */
    data: XOR<DateDimensionUpdateManyMutationInput, DateDimensionUncheckedUpdateManyInput>
    /**
     * Filter which DateDimensions to update
     */
    where?: DateDimensionWhereInput
    /**
     * Limit how many DateDimensions to update.
     */
    limit?: number
  }

  /**
   * DateDimension updateManyAndReturn
   */
  export type DateDimensionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * The data used to update DateDimensions.
     */
    data: XOR<DateDimensionUpdateManyMutationInput, DateDimensionUncheckedUpdateManyInput>
    /**
     * Filter which DateDimensions to update
     */
    where?: DateDimensionWhereInput
    /**
     * Limit how many DateDimensions to update.
     */
    limit?: number
  }

  /**
   * DateDimension upsert
   */
  export type DateDimensionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateDimensionInclude<ExtArgs> | null
    /**
     * The filter to search for the DateDimension to update in case it exists.
     */
    where: DateDimensionWhereUniqueInput
    /**
     * In case the DateDimension found by the `where` argument doesn't exist, create a new DateDimension with this data.
     */
    create: XOR<DateDimensionCreateInput, DateDimensionUncheckedCreateInput>
    /**
     * In case the DateDimension was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DateDimensionUpdateInput, DateDimensionUncheckedUpdateInput>
  }

  /**
   * DateDimension delete
   */
  export type DateDimensionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateDimensionInclude<ExtArgs> | null
    /**
     * Filter which DateDimension to delete.
     */
    where: DateDimensionWhereUniqueInput
  }

  /**
   * DateDimension deleteMany
   */
  export type DateDimensionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DateDimensions to delete
     */
    where?: DateDimensionWhereInput
    /**
     * Limit how many DateDimensions to delete.
     */
    limit?: number
  }

  /**
   * DateDimension.product_revenues
   */
  export type DateDimension$product_revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRevenueFact
     */
    select?: ProductRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRevenueFact
     */
    omit?: ProductRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRevenueFactInclude<ExtArgs> | null
    where?: ProductRevenueFactWhereInput
    orderBy?: ProductRevenueFactOrderByWithRelationInput | ProductRevenueFactOrderByWithRelationInput[]
    cursor?: ProductRevenueFactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductRevenueFactScalarFieldEnum | ProductRevenueFactScalarFieldEnum[]
  }

  /**
   * DateDimension.category_revenues
   */
  export type DateDimension$category_revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryRevenueFact
     */
    select?: CategoryRevenueFactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryRevenueFact
     */
    omit?: CategoryRevenueFactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryRevenueFactInclude<ExtArgs> | null
    where?: CategoryRevenueFactWhereInput
    orderBy?: CategoryRevenueFactOrderByWithRelationInput | CategoryRevenueFactOrderByWithRelationInput[]
    cursor?: CategoryRevenueFactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryRevenueFactScalarFieldEnum | CategoryRevenueFactScalarFieldEnum[]
  }

  /**
   * DateDimension.batch_prices
   */
  export type DateDimension$batch_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchPrice
     */
    select?: BatchPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchPrice
     */
    omit?: BatchPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchPriceInclude<ExtArgs> | null
    where?: BatchPriceWhereInput
    orderBy?: BatchPriceOrderByWithRelationInput | BatchPriceOrderByWithRelationInput[]
    cursor?: BatchPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchPriceScalarFieldEnum | BatchPriceScalarFieldEnum[]
  }

  /**
   * DateDimension.expiring_products
   */
  export type DateDimension$expiring_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDimension
     */
    select?: ProductDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDimension
     */
    omit?: ProductDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDimensionInclude<ExtArgs> | null
    where?: ProductDimensionWhereInput
    orderBy?: ProductDimensionOrderByWithRelationInput | ProductDimensionOrderByWithRelationInput[]
    cursor?: ProductDimensionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductDimensionScalarFieldEnum | ProductDimensionScalarFieldEnum[]
  }

  /**
   * DateDimension without action
   */
  export type DateDimensionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateDimension
     */
    select?: DateDimensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateDimension
     */
    omit?: DateDimensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateDimensionInclude<ExtArgs> | null
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


  export const BusinessDimensionScalarFieldEnum: {
    business_id: 'business_id',
    business_name: 'business_name'
  };

  export type BusinessDimensionScalarFieldEnum = (typeof BusinessDimensionScalarFieldEnum)[keyof typeof BusinessDimensionScalarFieldEnum]


  export const CategoryDimensionScalarFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name',
    has_expiry_date: 'has_expiry_date'
  };

  export type CategoryDimensionScalarFieldEnum = (typeof CategoryDimensionScalarFieldEnum)[keyof typeof CategoryDimensionScalarFieldEnum]


  export const ProductDimensionScalarFieldEnum: {
    product_id: 'product_id',
    name: 'name',
    category_id: 'category_id',
    next_expiry_date_id: 'next_expiry_date_id'
  };

  export type ProductDimensionScalarFieldEnum = (typeof ProductDimensionScalarFieldEnum)[keyof typeof ProductDimensionScalarFieldEnum]


  export const ProductRevenueFactScalarFieldEnum: {
    product_id: 'product_id',
    business_id: 'business_id',
    date_id: 'date_id',
    revenue_amount: 'revenue_amount',
    total_units_sold: 'total_units_sold'
  };

  export type ProductRevenueFactScalarFieldEnum = (typeof ProductRevenueFactScalarFieldEnum)[keyof typeof ProductRevenueFactScalarFieldEnum]


  export const CategoryRevenueFactScalarFieldEnum: {
    business_id: 'business_id',
    category_id: 'category_id',
    date_id: 'date_id',
    revenue_amount: 'revenue_amount',
    total_units_sold: 'total_units_sold'
  };

  export type CategoryRevenueFactScalarFieldEnum = (typeof CategoryRevenueFactScalarFieldEnum)[keyof typeof CategoryRevenueFactScalarFieldEnum]


  export const BatchPriceScalarFieldEnum: {
    product_id: 'product_id',
    business_id: 'business_id',
    date_id: 'date_id',
    purchase_price: 'purchase_price'
  };

  export type BatchPriceScalarFieldEnum = (typeof BatchPriceScalarFieldEnum)[keyof typeof BatchPriceScalarFieldEnum]


  export const DateDimensionScalarFieldEnum: {
    date_id: 'date_id',
    full_date: 'full_date',
    day: 'day',
    week: 'week',
    month: 'month',
    quarter: 'quarter',
    year: 'year'
  };

  export type DateDimensionScalarFieldEnum = (typeof DateDimensionScalarFieldEnum)[keyof typeof DateDimensionScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type BusinessDimensionWhereInput = {
    AND?: BusinessDimensionWhereInput | BusinessDimensionWhereInput[]
    OR?: BusinessDimensionWhereInput[]
    NOT?: BusinessDimensionWhereInput | BusinessDimensionWhereInput[]
    business_id?: IntFilter<"BusinessDimension"> | number
    business_name?: StringFilter<"BusinessDimension"> | string
    product_revenues?: ProductRevenueFactListRelationFilter
    category_revenues?: CategoryRevenueFactListRelationFilter
    product_prices?: BatchPriceListRelationFilter
  }

  export type BusinessDimensionOrderByWithRelationInput = {
    business_id?: SortOrder
    business_name?: SortOrder
    product_revenues?: ProductRevenueFactOrderByRelationAggregateInput
    category_revenues?: CategoryRevenueFactOrderByRelationAggregateInput
    product_prices?: BatchPriceOrderByRelationAggregateInput
  }

  export type BusinessDimensionWhereUniqueInput = Prisma.AtLeast<{
    business_id?: number
    AND?: BusinessDimensionWhereInput | BusinessDimensionWhereInput[]
    OR?: BusinessDimensionWhereInput[]
    NOT?: BusinessDimensionWhereInput | BusinessDimensionWhereInput[]
    business_name?: StringFilter<"BusinessDimension"> | string
    product_revenues?: ProductRevenueFactListRelationFilter
    category_revenues?: CategoryRevenueFactListRelationFilter
    product_prices?: BatchPriceListRelationFilter
  }, "business_id">

  export type BusinessDimensionOrderByWithAggregationInput = {
    business_id?: SortOrder
    business_name?: SortOrder
    _count?: BusinessDimensionCountOrderByAggregateInput
    _avg?: BusinessDimensionAvgOrderByAggregateInput
    _max?: BusinessDimensionMaxOrderByAggregateInput
    _min?: BusinessDimensionMinOrderByAggregateInput
    _sum?: BusinessDimensionSumOrderByAggregateInput
  }

  export type BusinessDimensionScalarWhereWithAggregatesInput = {
    AND?: BusinessDimensionScalarWhereWithAggregatesInput | BusinessDimensionScalarWhereWithAggregatesInput[]
    OR?: BusinessDimensionScalarWhereWithAggregatesInput[]
    NOT?: BusinessDimensionScalarWhereWithAggregatesInput | BusinessDimensionScalarWhereWithAggregatesInput[]
    business_id?: IntWithAggregatesFilter<"BusinessDimension"> | number
    business_name?: StringWithAggregatesFilter<"BusinessDimension"> | string
  }

  export type CategoryDimensionWhereInput = {
    AND?: CategoryDimensionWhereInput | CategoryDimensionWhereInput[]
    OR?: CategoryDimensionWhereInput[]
    NOT?: CategoryDimensionWhereInput | CategoryDimensionWhereInput[]
    category_id?: IntFilter<"CategoryDimension"> | number
    category_name?: StringFilter<"CategoryDimension"> | string
    has_expiry_date?: BoolFilter<"CategoryDimension"> | boolean
    products?: ProductDimensionListRelationFilter
    category_revenues?: CategoryRevenueFactListRelationFilter
  }

  export type CategoryDimensionOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    has_expiry_date?: SortOrder
    products?: ProductDimensionOrderByRelationAggregateInput
    category_revenues?: CategoryRevenueFactOrderByRelationAggregateInput
  }

  export type CategoryDimensionWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: CategoryDimensionWhereInput | CategoryDimensionWhereInput[]
    OR?: CategoryDimensionWhereInput[]
    NOT?: CategoryDimensionWhereInput | CategoryDimensionWhereInput[]
    category_name?: StringFilter<"CategoryDimension"> | string
    has_expiry_date?: BoolFilter<"CategoryDimension"> | boolean
    products?: ProductDimensionListRelationFilter
    category_revenues?: CategoryRevenueFactListRelationFilter
  }, "category_id">

  export type CategoryDimensionOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    has_expiry_date?: SortOrder
    _count?: CategoryDimensionCountOrderByAggregateInput
    _avg?: CategoryDimensionAvgOrderByAggregateInput
    _max?: CategoryDimensionMaxOrderByAggregateInput
    _min?: CategoryDimensionMinOrderByAggregateInput
    _sum?: CategoryDimensionSumOrderByAggregateInput
  }

  export type CategoryDimensionScalarWhereWithAggregatesInput = {
    AND?: CategoryDimensionScalarWhereWithAggregatesInput | CategoryDimensionScalarWhereWithAggregatesInput[]
    OR?: CategoryDimensionScalarWhereWithAggregatesInput[]
    NOT?: CategoryDimensionScalarWhereWithAggregatesInput | CategoryDimensionScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"CategoryDimension"> | number
    category_name?: StringWithAggregatesFilter<"CategoryDimension"> | string
    has_expiry_date?: BoolWithAggregatesFilter<"CategoryDimension"> | boolean
  }

  export type ProductDimensionWhereInput = {
    AND?: ProductDimensionWhereInput | ProductDimensionWhereInput[]
    OR?: ProductDimensionWhereInput[]
    NOT?: ProductDimensionWhereInput | ProductDimensionWhereInput[]
    product_id?: IntFilter<"ProductDimension"> | number
    name?: StringFilter<"ProductDimension"> | string
    category_id?: IntFilter<"ProductDimension"> | number
    next_expiry_date_id?: IntNullableFilter<"ProductDimension"> | number | null
    next_expiry_date?: XOR<DateDimensionNullableScalarRelationFilter, DateDimensionWhereInput> | null
    CategoryDimension?: XOR<CategoryDimensionScalarRelationFilter, CategoryDimensionWhereInput>
    product_revenues?: ProductRevenueFactListRelationFilter
    prices?: BatchPriceListRelationFilter
  }

  export type ProductDimensionOrderByWithRelationInput = {
    product_id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    next_expiry_date_id?: SortOrderInput | SortOrder
    next_expiry_date?: DateDimensionOrderByWithRelationInput
    CategoryDimension?: CategoryDimensionOrderByWithRelationInput
    product_revenues?: ProductRevenueFactOrderByRelationAggregateInput
    prices?: BatchPriceOrderByRelationAggregateInput
  }

  export type ProductDimensionWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: ProductDimensionWhereInput | ProductDimensionWhereInput[]
    OR?: ProductDimensionWhereInput[]
    NOT?: ProductDimensionWhereInput | ProductDimensionWhereInput[]
    name?: StringFilter<"ProductDimension"> | string
    category_id?: IntFilter<"ProductDimension"> | number
    next_expiry_date_id?: IntNullableFilter<"ProductDimension"> | number | null
    next_expiry_date?: XOR<DateDimensionNullableScalarRelationFilter, DateDimensionWhereInput> | null
    CategoryDimension?: XOR<CategoryDimensionScalarRelationFilter, CategoryDimensionWhereInput>
    product_revenues?: ProductRevenueFactListRelationFilter
    prices?: BatchPriceListRelationFilter
  }, "product_id">

  export type ProductDimensionOrderByWithAggregationInput = {
    product_id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    next_expiry_date_id?: SortOrderInput | SortOrder
    _count?: ProductDimensionCountOrderByAggregateInput
    _avg?: ProductDimensionAvgOrderByAggregateInput
    _max?: ProductDimensionMaxOrderByAggregateInput
    _min?: ProductDimensionMinOrderByAggregateInput
    _sum?: ProductDimensionSumOrderByAggregateInput
  }

  export type ProductDimensionScalarWhereWithAggregatesInput = {
    AND?: ProductDimensionScalarWhereWithAggregatesInput | ProductDimensionScalarWhereWithAggregatesInput[]
    OR?: ProductDimensionScalarWhereWithAggregatesInput[]
    NOT?: ProductDimensionScalarWhereWithAggregatesInput | ProductDimensionScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"ProductDimension"> | number
    name?: StringWithAggregatesFilter<"ProductDimension"> | string
    category_id?: IntWithAggregatesFilter<"ProductDimension"> | number
    next_expiry_date_id?: IntNullableWithAggregatesFilter<"ProductDimension"> | number | null
  }

  export type ProductRevenueFactWhereInput = {
    AND?: ProductRevenueFactWhereInput | ProductRevenueFactWhereInput[]
    OR?: ProductRevenueFactWhereInput[]
    NOT?: ProductRevenueFactWhereInput | ProductRevenueFactWhereInput[]
    product_id?: IntFilter<"ProductRevenueFact"> | number
    business_id?: IntFilter<"ProductRevenueFact"> | number
    date_id?: IntFilter<"ProductRevenueFact"> | number
    revenue_amount?: FloatFilter<"ProductRevenueFact"> | number
    total_units_sold?: IntFilter<"ProductRevenueFact"> | number
    date?: XOR<DateDimensionScalarRelationFilter, DateDimensionWhereInput>
    business?: XOR<BusinessDimensionScalarRelationFilter, BusinessDimensionWhereInput>
    product?: XOR<ProductDimensionScalarRelationFilter, ProductDimensionWhereInput>
  }

  export type ProductRevenueFactOrderByWithRelationInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
    date?: DateDimensionOrderByWithRelationInput
    business?: BusinessDimensionOrderByWithRelationInput
    product?: ProductDimensionOrderByWithRelationInput
  }

  export type ProductRevenueFactWhereUniqueInput = Prisma.AtLeast<{
    product_id_business_id?: ProductRevenueFactProduct_idBusiness_idCompoundUniqueInput
    AND?: ProductRevenueFactWhereInput | ProductRevenueFactWhereInput[]
    OR?: ProductRevenueFactWhereInput[]
    NOT?: ProductRevenueFactWhereInput | ProductRevenueFactWhereInput[]
    product_id?: IntFilter<"ProductRevenueFact"> | number
    business_id?: IntFilter<"ProductRevenueFact"> | number
    date_id?: IntFilter<"ProductRevenueFact"> | number
    revenue_amount?: FloatFilter<"ProductRevenueFact"> | number
    total_units_sold?: IntFilter<"ProductRevenueFact"> | number
    date?: XOR<DateDimensionScalarRelationFilter, DateDimensionWhereInput>
    business?: XOR<BusinessDimensionScalarRelationFilter, BusinessDimensionWhereInput>
    product?: XOR<ProductDimensionScalarRelationFilter, ProductDimensionWhereInput>
  }, "product_id_business_id">

  export type ProductRevenueFactOrderByWithAggregationInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
    _count?: ProductRevenueFactCountOrderByAggregateInput
    _avg?: ProductRevenueFactAvgOrderByAggregateInput
    _max?: ProductRevenueFactMaxOrderByAggregateInput
    _min?: ProductRevenueFactMinOrderByAggregateInput
    _sum?: ProductRevenueFactSumOrderByAggregateInput
  }

  export type ProductRevenueFactScalarWhereWithAggregatesInput = {
    AND?: ProductRevenueFactScalarWhereWithAggregatesInput | ProductRevenueFactScalarWhereWithAggregatesInput[]
    OR?: ProductRevenueFactScalarWhereWithAggregatesInput[]
    NOT?: ProductRevenueFactScalarWhereWithAggregatesInput | ProductRevenueFactScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"ProductRevenueFact"> | number
    business_id?: IntWithAggregatesFilter<"ProductRevenueFact"> | number
    date_id?: IntWithAggregatesFilter<"ProductRevenueFact"> | number
    revenue_amount?: FloatWithAggregatesFilter<"ProductRevenueFact"> | number
    total_units_sold?: IntWithAggregatesFilter<"ProductRevenueFact"> | number
  }

  export type CategoryRevenueFactWhereInput = {
    AND?: CategoryRevenueFactWhereInput | CategoryRevenueFactWhereInput[]
    OR?: CategoryRevenueFactWhereInput[]
    NOT?: CategoryRevenueFactWhereInput | CategoryRevenueFactWhereInput[]
    business_id?: IntFilter<"CategoryRevenueFact"> | number
    category_id?: IntFilter<"CategoryRevenueFact"> | number
    date_id?: IntFilter<"CategoryRevenueFact"> | number
    revenue_amount?: FloatFilter<"CategoryRevenueFact"> | number
    total_units_sold?: IntFilter<"CategoryRevenueFact"> | number
    date?: XOR<DateDimensionScalarRelationFilter, DateDimensionWhereInput>
    business?: XOR<BusinessDimensionScalarRelationFilter, BusinessDimensionWhereInput>
    category?: XOR<CategoryDimensionScalarRelationFilter, CategoryDimensionWhereInput>
  }

  export type CategoryRevenueFactOrderByWithRelationInput = {
    business_id?: SortOrder
    category_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
    date?: DateDimensionOrderByWithRelationInput
    business?: BusinessDimensionOrderByWithRelationInput
    category?: CategoryDimensionOrderByWithRelationInput
  }

  export type CategoryRevenueFactWhereUniqueInput = Prisma.AtLeast<{
    business_id_category_id?: CategoryRevenueFactBusiness_idCategory_idCompoundUniqueInput
    AND?: CategoryRevenueFactWhereInput | CategoryRevenueFactWhereInput[]
    OR?: CategoryRevenueFactWhereInput[]
    NOT?: CategoryRevenueFactWhereInput | CategoryRevenueFactWhereInput[]
    business_id?: IntFilter<"CategoryRevenueFact"> | number
    category_id?: IntFilter<"CategoryRevenueFact"> | number
    date_id?: IntFilter<"CategoryRevenueFact"> | number
    revenue_amount?: FloatFilter<"CategoryRevenueFact"> | number
    total_units_sold?: IntFilter<"CategoryRevenueFact"> | number
    date?: XOR<DateDimensionScalarRelationFilter, DateDimensionWhereInput>
    business?: XOR<BusinessDimensionScalarRelationFilter, BusinessDimensionWhereInput>
    category?: XOR<CategoryDimensionScalarRelationFilter, CategoryDimensionWhereInput>
  }, "business_id_category_id">

  export type CategoryRevenueFactOrderByWithAggregationInput = {
    business_id?: SortOrder
    category_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
    _count?: CategoryRevenueFactCountOrderByAggregateInput
    _avg?: CategoryRevenueFactAvgOrderByAggregateInput
    _max?: CategoryRevenueFactMaxOrderByAggregateInput
    _min?: CategoryRevenueFactMinOrderByAggregateInput
    _sum?: CategoryRevenueFactSumOrderByAggregateInput
  }

  export type CategoryRevenueFactScalarWhereWithAggregatesInput = {
    AND?: CategoryRevenueFactScalarWhereWithAggregatesInput | CategoryRevenueFactScalarWhereWithAggregatesInput[]
    OR?: CategoryRevenueFactScalarWhereWithAggregatesInput[]
    NOT?: CategoryRevenueFactScalarWhereWithAggregatesInput | CategoryRevenueFactScalarWhereWithAggregatesInput[]
    business_id?: IntWithAggregatesFilter<"CategoryRevenueFact"> | number
    category_id?: IntWithAggregatesFilter<"CategoryRevenueFact"> | number
    date_id?: IntWithAggregatesFilter<"CategoryRevenueFact"> | number
    revenue_amount?: FloatWithAggregatesFilter<"CategoryRevenueFact"> | number
    total_units_sold?: IntWithAggregatesFilter<"CategoryRevenueFact"> | number
  }

  export type BatchPriceWhereInput = {
    AND?: BatchPriceWhereInput | BatchPriceWhereInput[]
    OR?: BatchPriceWhereInput[]
    NOT?: BatchPriceWhereInput | BatchPriceWhereInput[]
    product_id?: IntFilter<"BatchPrice"> | number
    business_id?: IntFilter<"BatchPrice"> | number
    date_id?: IntFilter<"BatchPrice"> | number
    purchase_price?: FloatFilter<"BatchPrice"> | number
    date?: XOR<DateDimensionScalarRelationFilter, DateDimensionWhereInput>
    business?: XOR<BusinessDimensionScalarRelationFilter, BusinessDimensionWhereInput>
    product?: XOR<ProductDimensionScalarRelationFilter, ProductDimensionWhereInput>
  }

  export type BatchPriceOrderByWithRelationInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    purchase_price?: SortOrder
    date?: DateDimensionOrderByWithRelationInput
    business?: BusinessDimensionOrderByWithRelationInput
    product?: ProductDimensionOrderByWithRelationInput
  }

  export type BatchPriceWhereUniqueInput = Prisma.AtLeast<{
    product_id_business_id?: BatchPriceProduct_idBusiness_idCompoundUniqueInput
    AND?: BatchPriceWhereInput | BatchPriceWhereInput[]
    OR?: BatchPriceWhereInput[]
    NOT?: BatchPriceWhereInput | BatchPriceWhereInput[]
    product_id?: IntFilter<"BatchPrice"> | number
    business_id?: IntFilter<"BatchPrice"> | number
    date_id?: IntFilter<"BatchPrice"> | number
    purchase_price?: FloatFilter<"BatchPrice"> | number
    date?: XOR<DateDimensionScalarRelationFilter, DateDimensionWhereInput>
    business?: XOR<BusinessDimensionScalarRelationFilter, BusinessDimensionWhereInput>
    product?: XOR<ProductDimensionScalarRelationFilter, ProductDimensionWhereInput>
  }, "product_id_business_id">

  export type BatchPriceOrderByWithAggregationInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    purchase_price?: SortOrder
    _count?: BatchPriceCountOrderByAggregateInput
    _avg?: BatchPriceAvgOrderByAggregateInput
    _max?: BatchPriceMaxOrderByAggregateInput
    _min?: BatchPriceMinOrderByAggregateInput
    _sum?: BatchPriceSumOrderByAggregateInput
  }

  export type BatchPriceScalarWhereWithAggregatesInput = {
    AND?: BatchPriceScalarWhereWithAggregatesInput | BatchPriceScalarWhereWithAggregatesInput[]
    OR?: BatchPriceScalarWhereWithAggregatesInput[]
    NOT?: BatchPriceScalarWhereWithAggregatesInput | BatchPriceScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"BatchPrice"> | number
    business_id?: IntWithAggregatesFilter<"BatchPrice"> | number
    date_id?: IntWithAggregatesFilter<"BatchPrice"> | number
    purchase_price?: FloatWithAggregatesFilter<"BatchPrice"> | number
  }

  export type DateDimensionWhereInput = {
    AND?: DateDimensionWhereInput | DateDimensionWhereInput[]
    OR?: DateDimensionWhereInput[]
    NOT?: DateDimensionWhereInput | DateDimensionWhereInput[]
    date_id?: IntFilter<"DateDimension"> | number
    full_date?: DateTimeFilter<"DateDimension"> | Date | string
    day?: IntFilter<"DateDimension"> | number
    week?: IntFilter<"DateDimension"> | number
    month?: IntFilter<"DateDimension"> | number
    quarter?: IntFilter<"DateDimension"> | number
    year?: IntFilter<"DateDimension"> | number
    product_revenues?: ProductRevenueFactListRelationFilter
    category_revenues?: CategoryRevenueFactListRelationFilter
    batch_prices?: BatchPriceListRelationFilter
    expiring_products?: ProductDimensionListRelationFilter
  }

  export type DateDimensionOrderByWithRelationInput = {
    date_id?: SortOrder
    full_date?: SortOrder
    day?: SortOrder
    week?: SortOrder
    month?: SortOrder
    quarter?: SortOrder
    year?: SortOrder
    product_revenues?: ProductRevenueFactOrderByRelationAggregateInput
    category_revenues?: CategoryRevenueFactOrderByRelationAggregateInput
    batch_prices?: BatchPriceOrderByRelationAggregateInput
    expiring_products?: ProductDimensionOrderByRelationAggregateInput
  }

  export type DateDimensionWhereUniqueInput = Prisma.AtLeast<{
    date_id?: number
    AND?: DateDimensionWhereInput | DateDimensionWhereInput[]
    OR?: DateDimensionWhereInput[]
    NOT?: DateDimensionWhereInput | DateDimensionWhereInput[]
    full_date?: DateTimeFilter<"DateDimension"> | Date | string
    day?: IntFilter<"DateDimension"> | number
    week?: IntFilter<"DateDimension"> | number
    month?: IntFilter<"DateDimension"> | number
    quarter?: IntFilter<"DateDimension"> | number
    year?: IntFilter<"DateDimension"> | number
    product_revenues?: ProductRevenueFactListRelationFilter
    category_revenues?: CategoryRevenueFactListRelationFilter
    batch_prices?: BatchPriceListRelationFilter
    expiring_products?: ProductDimensionListRelationFilter
  }, "date_id">

  export type DateDimensionOrderByWithAggregationInput = {
    date_id?: SortOrder
    full_date?: SortOrder
    day?: SortOrder
    week?: SortOrder
    month?: SortOrder
    quarter?: SortOrder
    year?: SortOrder
    _count?: DateDimensionCountOrderByAggregateInput
    _avg?: DateDimensionAvgOrderByAggregateInput
    _max?: DateDimensionMaxOrderByAggregateInput
    _min?: DateDimensionMinOrderByAggregateInput
    _sum?: DateDimensionSumOrderByAggregateInput
  }

  export type DateDimensionScalarWhereWithAggregatesInput = {
    AND?: DateDimensionScalarWhereWithAggregatesInput | DateDimensionScalarWhereWithAggregatesInput[]
    OR?: DateDimensionScalarWhereWithAggregatesInput[]
    NOT?: DateDimensionScalarWhereWithAggregatesInput | DateDimensionScalarWhereWithAggregatesInput[]
    date_id?: IntWithAggregatesFilter<"DateDimension"> | number
    full_date?: DateTimeWithAggregatesFilter<"DateDimension"> | Date | string
    day?: IntWithAggregatesFilter<"DateDimension"> | number
    week?: IntWithAggregatesFilter<"DateDimension"> | number
    month?: IntWithAggregatesFilter<"DateDimension"> | number
    quarter?: IntWithAggregatesFilter<"DateDimension"> | number
    year?: IntWithAggregatesFilter<"DateDimension"> | number
  }

  export type BusinessDimensionCreateInput = {
    business_name: string
    product_revenues?: ProductRevenueFactCreateNestedManyWithoutBusinessInput
    category_revenues?: CategoryRevenueFactCreateNestedManyWithoutBusinessInput
    product_prices?: BatchPriceCreateNestedManyWithoutBusinessInput
  }

  export type BusinessDimensionUncheckedCreateInput = {
    business_id?: number
    business_name: string
    product_revenues?: ProductRevenueFactUncheckedCreateNestedManyWithoutBusinessInput
    category_revenues?: CategoryRevenueFactUncheckedCreateNestedManyWithoutBusinessInput
    product_prices?: BatchPriceUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessDimensionUpdateInput = {
    business_name?: StringFieldUpdateOperationsInput | string
    product_revenues?: ProductRevenueFactUpdateManyWithoutBusinessNestedInput
    category_revenues?: CategoryRevenueFactUpdateManyWithoutBusinessNestedInput
    product_prices?: BatchPriceUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessDimensionUncheckedUpdateInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    business_name?: StringFieldUpdateOperationsInput | string
    product_revenues?: ProductRevenueFactUncheckedUpdateManyWithoutBusinessNestedInput
    category_revenues?: CategoryRevenueFactUncheckedUpdateManyWithoutBusinessNestedInput
    product_prices?: BatchPriceUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessDimensionCreateManyInput = {
    business_id?: number
    business_name: string
  }

  export type BusinessDimensionUpdateManyMutationInput = {
    business_name?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessDimensionUncheckedUpdateManyInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    business_name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryDimensionCreateInput = {
    category_name: string
    has_expiry_date?: boolean
    products?: ProductDimensionCreateNestedManyWithoutCategoryDimensionInput
    category_revenues?: CategoryRevenueFactCreateNestedManyWithoutCategoryInput
  }

  export type CategoryDimensionUncheckedCreateInput = {
    category_id?: number
    category_name: string
    has_expiry_date?: boolean
    products?: ProductDimensionUncheckedCreateNestedManyWithoutCategoryDimensionInput
    category_revenues?: CategoryRevenueFactUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryDimensionUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    has_expiry_date?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductDimensionUpdateManyWithoutCategoryDimensionNestedInput
    category_revenues?: CategoryRevenueFactUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryDimensionUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    has_expiry_date?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductDimensionUncheckedUpdateManyWithoutCategoryDimensionNestedInput
    category_revenues?: CategoryRevenueFactUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryDimensionCreateManyInput = {
    category_id?: number
    category_name: string
    has_expiry_date?: boolean
  }

  export type CategoryDimensionUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    has_expiry_date?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryDimensionUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    has_expiry_date?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductDimensionCreateInput = {
    name: string
    next_expiry_date?: DateDimensionCreateNestedOneWithoutExpiring_productsInput
    CategoryDimension: CategoryDimensionCreateNestedOneWithoutProductsInput
    product_revenues?: ProductRevenueFactCreateNestedManyWithoutProductInput
    prices?: BatchPriceCreateNestedManyWithoutProductInput
  }

  export type ProductDimensionUncheckedCreateInput = {
    product_id?: number
    name: string
    category_id: number
    next_expiry_date_id?: number | null
    product_revenues?: ProductRevenueFactUncheckedCreateNestedManyWithoutProductInput
    prices?: BatchPriceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductDimensionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    next_expiry_date?: DateDimensionUpdateOneWithoutExpiring_productsNestedInput
    CategoryDimension?: CategoryDimensionUpdateOneRequiredWithoutProductsNestedInput
    product_revenues?: ProductRevenueFactUpdateManyWithoutProductNestedInput
    prices?: BatchPriceUpdateManyWithoutProductNestedInput
  }

  export type ProductDimensionUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    next_expiry_date_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_revenues?: ProductRevenueFactUncheckedUpdateManyWithoutProductNestedInput
    prices?: BatchPriceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductDimensionCreateManyInput = {
    product_id?: number
    name: string
    category_id: number
    next_expiry_date_id?: number | null
  }

  export type ProductDimensionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductDimensionUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    next_expiry_date_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductRevenueFactCreateInput = {
    revenue_amount: number
    total_units_sold: number
    date: DateDimensionCreateNestedOneWithoutProduct_revenuesInput
    business: BusinessDimensionCreateNestedOneWithoutProduct_revenuesInput
    product: ProductDimensionCreateNestedOneWithoutProduct_revenuesInput
  }

  export type ProductRevenueFactUncheckedCreateInput = {
    product_id: number
    business_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type ProductRevenueFactUpdateInput = {
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
    date?: DateDimensionUpdateOneRequiredWithoutProduct_revenuesNestedInput
    business?: BusinessDimensionUpdateOneRequiredWithoutProduct_revenuesNestedInput
    product?: ProductDimensionUpdateOneRequiredWithoutProduct_revenuesNestedInput
  }

  export type ProductRevenueFactUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    business_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type ProductRevenueFactCreateManyInput = {
    product_id: number
    business_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type ProductRevenueFactUpdateManyMutationInput = {
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type ProductRevenueFactUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    business_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryRevenueFactCreateInput = {
    revenue_amount: number
    total_units_sold: number
    date: DateDimensionCreateNestedOneWithoutCategory_revenuesInput
    business: BusinessDimensionCreateNestedOneWithoutCategory_revenuesInput
    category: CategoryDimensionCreateNestedOneWithoutCategory_revenuesInput
  }

  export type CategoryRevenueFactUncheckedCreateInput = {
    business_id: number
    category_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type CategoryRevenueFactUpdateInput = {
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
    date?: DateDimensionUpdateOneRequiredWithoutCategory_revenuesNestedInput
    business?: BusinessDimensionUpdateOneRequiredWithoutCategory_revenuesNestedInput
    category?: CategoryDimensionUpdateOneRequiredWithoutCategory_revenuesNestedInput
  }

  export type CategoryRevenueFactUncheckedUpdateInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryRevenueFactCreateManyInput = {
    business_id: number
    category_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type CategoryRevenueFactUpdateManyMutationInput = {
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryRevenueFactUncheckedUpdateManyInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type BatchPriceCreateInput = {
    purchase_price: number
    date: DateDimensionCreateNestedOneWithoutBatch_pricesInput
    business: BusinessDimensionCreateNestedOneWithoutProduct_pricesInput
    product: ProductDimensionCreateNestedOneWithoutPricesInput
  }

  export type BatchPriceUncheckedCreateInput = {
    product_id: number
    business_id: number
    date_id: number
    purchase_price: number
  }

  export type BatchPriceUpdateInput = {
    purchase_price?: FloatFieldUpdateOperationsInput | number
    date?: DateDimensionUpdateOneRequiredWithoutBatch_pricesNestedInput
    business?: BusinessDimensionUpdateOneRequiredWithoutProduct_pricesNestedInput
    product?: ProductDimensionUpdateOneRequiredWithoutPricesNestedInput
  }

  export type BatchPriceUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    business_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
  }

  export type BatchPriceCreateManyInput = {
    product_id: number
    business_id: number
    date_id: number
    purchase_price: number
  }

  export type BatchPriceUpdateManyMutationInput = {
    purchase_price?: FloatFieldUpdateOperationsInput | number
  }

  export type BatchPriceUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    business_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
  }

  export type DateDimensionCreateInput = {
    full_date: Date | string
    day: number
    week: number
    month: number
    quarter: number
    year: number
    product_revenues?: ProductRevenueFactCreateNestedManyWithoutDateInput
    category_revenues?: CategoryRevenueFactCreateNestedManyWithoutDateInput
    batch_prices?: BatchPriceCreateNestedManyWithoutDateInput
    expiring_products?: ProductDimensionCreateNestedManyWithoutNext_expiry_dateInput
  }

  export type DateDimensionUncheckedCreateInput = {
    date_id?: number
    full_date: Date | string
    day: number
    week: number
    month: number
    quarter: number
    year: number
    product_revenues?: ProductRevenueFactUncheckedCreateNestedManyWithoutDateInput
    category_revenues?: CategoryRevenueFactUncheckedCreateNestedManyWithoutDateInput
    batch_prices?: BatchPriceUncheckedCreateNestedManyWithoutDateInput
    expiring_products?: ProductDimensionUncheckedCreateNestedManyWithoutNext_expiry_dateInput
  }

  export type DateDimensionUpdateInput = {
    full_date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    product_revenues?: ProductRevenueFactUpdateManyWithoutDateNestedInput
    category_revenues?: CategoryRevenueFactUpdateManyWithoutDateNestedInput
    batch_prices?: BatchPriceUpdateManyWithoutDateNestedInput
    expiring_products?: ProductDimensionUpdateManyWithoutNext_expiry_dateNestedInput
  }

  export type DateDimensionUncheckedUpdateInput = {
    date_id?: IntFieldUpdateOperationsInput | number
    full_date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    product_revenues?: ProductRevenueFactUncheckedUpdateManyWithoutDateNestedInput
    category_revenues?: CategoryRevenueFactUncheckedUpdateManyWithoutDateNestedInput
    batch_prices?: BatchPriceUncheckedUpdateManyWithoutDateNestedInput
    expiring_products?: ProductDimensionUncheckedUpdateManyWithoutNext_expiry_dateNestedInput
  }

  export type DateDimensionCreateManyInput = {
    date_id?: number
    full_date: Date | string
    day: number
    week: number
    month: number
    quarter: number
    year: number
  }

  export type DateDimensionUpdateManyMutationInput = {
    full_date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type DateDimensionUncheckedUpdateManyInput = {
    date_id?: IntFieldUpdateOperationsInput | number
    full_date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
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

  export type ProductRevenueFactListRelationFilter = {
    every?: ProductRevenueFactWhereInput
    some?: ProductRevenueFactWhereInput
    none?: ProductRevenueFactWhereInput
  }

  export type CategoryRevenueFactListRelationFilter = {
    every?: CategoryRevenueFactWhereInput
    some?: CategoryRevenueFactWhereInput
    none?: CategoryRevenueFactWhereInput
  }

  export type BatchPriceListRelationFilter = {
    every?: BatchPriceWhereInput
    some?: BatchPriceWhereInput
    none?: BatchPriceWhereInput
  }

  export type ProductRevenueFactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryRevenueFactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessDimensionCountOrderByAggregateInput = {
    business_id?: SortOrder
    business_name?: SortOrder
  }

  export type BusinessDimensionAvgOrderByAggregateInput = {
    business_id?: SortOrder
  }

  export type BusinessDimensionMaxOrderByAggregateInput = {
    business_id?: SortOrder
    business_name?: SortOrder
  }

  export type BusinessDimensionMinOrderByAggregateInput = {
    business_id?: SortOrder
    business_name?: SortOrder
  }

  export type BusinessDimensionSumOrderByAggregateInput = {
    business_id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductDimensionListRelationFilter = {
    every?: ProductDimensionWhereInput
    some?: ProductDimensionWhereInput
    none?: ProductDimensionWhereInput
  }

  export type ProductDimensionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryDimensionCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    has_expiry_date?: SortOrder
  }

  export type CategoryDimensionAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type CategoryDimensionMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    has_expiry_date?: SortOrder
  }

  export type CategoryDimensionMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    has_expiry_date?: SortOrder
  }

  export type CategoryDimensionSumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateDimensionNullableScalarRelationFilter = {
    is?: DateDimensionWhereInput | null
    isNot?: DateDimensionWhereInput | null
  }

  export type CategoryDimensionScalarRelationFilter = {
    is?: CategoryDimensionWhereInput
    isNot?: CategoryDimensionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductDimensionCountOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    next_expiry_date_id?: SortOrder
  }

  export type ProductDimensionAvgOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
    next_expiry_date_id?: SortOrder
  }

  export type ProductDimensionMaxOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    next_expiry_date_id?: SortOrder
  }

  export type ProductDimensionMinOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    next_expiry_date_id?: SortOrder
  }

  export type ProductDimensionSumOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
    next_expiry_date_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateDimensionScalarRelationFilter = {
    is?: DateDimensionWhereInput
    isNot?: DateDimensionWhereInput
  }

  export type BusinessDimensionScalarRelationFilter = {
    is?: BusinessDimensionWhereInput
    isNot?: BusinessDimensionWhereInput
  }

  export type ProductDimensionScalarRelationFilter = {
    is?: ProductDimensionWhereInput
    isNot?: ProductDimensionWhereInput
  }

  export type ProductRevenueFactProduct_idBusiness_idCompoundUniqueInput = {
    product_id: number
    business_id: number
  }

  export type ProductRevenueFactCountOrderByAggregateInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
  }

  export type ProductRevenueFactAvgOrderByAggregateInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
  }

  export type ProductRevenueFactMaxOrderByAggregateInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
  }

  export type ProductRevenueFactMinOrderByAggregateInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
  }

  export type ProductRevenueFactSumOrderByAggregateInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CategoryRevenueFactBusiness_idCategory_idCompoundUniqueInput = {
    business_id: number
    category_id: number
  }

  export type CategoryRevenueFactCountOrderByAggregateInput = {
    business_id?: SortOrder
    category_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
  }

  export type CategoryRevenueFactAvgOrderByAggregateInput = {
    business_id?: SortOrder
    category_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
  }

  export type CategoryRevenueFactMaxOrderByAggregateInput = {
    business_id?: SortOrder
    category_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
  }

  export type CategoryRevenueFactMinOrderByAggregateInput = {
    business_id?: SortOrder
    category_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
  }

  export type CategoryRevenueFactSumOrderByAggregateInput = {
    business_id?: SortOrder
    category_id?: SortOrder
    date_id?: SortOrder
    revenue_amount?: SortOrder
    total_units_sold?: SortOrder
  }

  export type BatchPriceProduct_idBusiness_idCompoundUniqueInput = {
    product_id: number
    business_id: number
  }

  export type BatchPriceCountOrderByAggregateInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    purchase_price?: SortOrder
  }

  export type BatchPriceAvgOrderByAggregateInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    purchase_price?: SortOrder
  }

  export type BatchPriceMaxOrderByAggregateInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    purchase_price?: SortOrder
  }

  export type BatchPriceMinOrderByAggregateInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    purchase_price?: SortOrder
  }

  export type BatchPriceSumOrderByAggregateInput = {
    product_id?: SortOrder
    business_id?: SortOrder
    date_id?: SortOrder
    purchase_price?: SortOrder
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

  export type DateDimensionCountOrderByAggregateInput = {
    date_id?: SortOrder
    full_date?: SortOrder
    day?: SortOrder
    week?: SortOrder
    month?: SortOrder
    quarter?: SortOrder
    year?: SortOrder
  }

  export type DateDimensionAvgOrderByAggregateInput = {
    date_id?: SortOrder
    day?: SortOrder
    week?: SortOrder
    month?: SortOrder
    quarter?: SortOrder
    year?: SortOrder
  }

  export type DateDimensionMaxOrderByAggregateInput = {
    date_id?: SortOrder
    full_date?: SortOrder
    day?: SortOrder
    week?: SortOrder
    month?: SortOrder
    quarter?: SortOrder
    year?: SortOrder
  }

  export type DateDimensionMinOrderByAggregateInput = {
    date_id?: SortOrder
    full_date?: SortOrder
    day?: SortOrder
    week?: SortOrder
    month?: SortOrder
    quarter?: SortOrder
    year?: SortOrder
  }

  export type DateDimensionSumOrderByAggregateInput = {
    date_id?: SortOrder
    day?: SortOrder
    week?: SortOrder
    month?: SortOrder
    quarter?: SortOrder
    year?: SortOrder
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

  export type ProductRevenueFactCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ProductRevenueFactCreateWithoutBusinessInput, ProductRevenueFactUncheckedCreateWithoutBusinessInput> | ProductRevenueFactCreateWithoutBusinessInput[] | ProductRevenueFactUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductRevenueFactCreateOrConnectWithoutBusinessInput | ProductRevenueFactCreateOrConnectWithoutBusinessInput[]
    createMany?: ProductRevenueFactCreateManyBusinessInputEnvelope
    connect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
  }

  export type CategoryRevenueFactCreateNestedManyWithoutBusinessInput = {
    create?: XOR<CategoryRevenueFactCreateWithoutBusinessInput, CategoryRevenueFactUncheckedCreateWithoutBusinessInput> | CategoryRevenueFactCreateWithoutBusinessInput[] | CategoryRevenueFactUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CategoryRevenueFactCreateOrConnectWithoutBusinessInput | CategoryRevenueFactCreateOrConnectWithoutBusinessInput[]
    createMany?: CategoryRevenueFactCreateManyBusinessInputEnvelope
    connect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
  }

  export type BatchPriceCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BatchPriceCreateWithoutBusinessInput, BatchPriceUncheckedCreateWithoutBusinessInput> | BatchPriceCreateWithoutBusinessInput[] | BatchPriceUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BatchPriceCreateOrConnectWithoutBusinessInput | BatchPriceCreateOrConnectWithoutBusinessInput[]
    createMany?: BatchPriceCreateManyBusinessInputEnvelope
    connect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
  }

  export type ProductRevenueFactUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ProductRevenueFactCreateWithoutBusinessInput, ProductRevenueFactUncheckedCreateWithoutBusinessInput> | ProductRevenueFactCreateWithoutBusinessInput[] | ProductRevenueFactUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductRevenueFactCreateOrConnectWithoutBusinessInput | ProductRevenueFactCreateOrConnectWithoutBusinessInput[]
    createMany?: ProductRevenueFactCreateManyBusinessInputEnvelope
    connect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
  }

  export type CategoryRevenueFactUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<CategoryRevenueFactCreateWithoutBusinessInput, CategoryRevenueFactUncheckedCreateWithoutBusinessInput> | CategoryRevenueFactCreateWithoutBusinessInput[] | CategoryRevenueFactUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CategoryRevenueFactCreateOrConnectWithoutBusinessInput | CategoryRevenueFactCreateOrConnectWithoutBusinessInput[]
    createMany?: CategoryRevenueFactCreateManyBusinessInputEnvelope
    connect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
  }

  export type BatchPriceUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BatchPriceCreateWithoutBusinessInput, BatchPriceUncheckedCreateWithoutBusinessInput> | BatchPriceCreateWithoutBusinessInput[] | BatchPriceUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BatchPriceCreateOrConnectWithoutBusinessInput | BatchPriceCreateOrConnectWithoutBusinessInput[]
    createMany?: BatchPriceCreateManyBusinessInputEnvelope
    connect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductRevenueFactUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ProductRevenueFactCreateWithoutBusinessInput, ProductRevenueFactUncheckedCreateWithoutBusinessInput> | ProductRevenueFactCreateWithoutBusinessInput[] | ProductRevenueFactUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductRevenueFactCreateOrConnectWithoutBusinessInput | ProductRevenueFactCreateOrConnectWithoutBusinessInput[]
    upsert?: ProductRevenueFactUpsertWithWhereUniqueWithoutBusinessInput | ProductRevenueFactUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ProductRevenueFactCreateManyBusinessInputEnvelope
    set?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    disconnect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    delete?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    connect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    update?: ProductRevenueFactUpdateWithWhereUniqueWithoutBusinessInput | ProductRevenueFactUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ProductRevenueFactUpdateManyWithWhereWithoutBusinessInput | ProductRevenueFactUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ProductRevenueFactScalarWhereInput | ProductRevenueFactScalarWhereInput[]
  }

  export type CategoryRevenueFactUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<CategoryRevenueFactCreateWithoutBusinessInput, CategoryRevenueFactUncheckedCreateWithoutBusinessInput> | CategoryRevenueFactCreateWithoutBusinessInput[] | CategoryRevenueFactUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CategoryRevenueFactCreateOrConnectWithoutBusinessInput | CategoryRevenueFactCreateOrConnectWithoutBusinessInput[]
    upsert?: CategoryRevenueFactUpsertWithWhereUniqueWithoutBusinessInput | CategoryRevenueFactUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: CategoryRevenueFactCreateManyBusinessInputEnvelope
    set?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    disconnect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    delete?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    connect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    update?: CategoryRevenueFactUpdateWithWhereUniqueWithoutBusinessInput | CategoryRevenueFactUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: CategoryRevenueFactUpdateManyWithWhereWithoutBusinessInput | CategoryRevenueFactUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: CategoryRevenueFactScalarWhereInput | CategoryRevenueFactScalarWhereInput[]
  }

  export type BatchPriceUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BatchPriceCreateWithoutBusinessInput, BatchPriceUncheckedCreateWithoutBusinessInput> | BatchPriceCreateWithoutBusinessInput[] | BatchPriceUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BatchPriceCreateOrConnectWithoutBusinessInput | BatchPriceCreateOrConnectWithoutBusinessInput[]
    upsert?: BatchPriceUpsertWithWhereUniqueWithoutBusinessInput | BatchPriceUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BatchPriceCreateManyBusinessInputEnvelope
    set?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    disconnect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    delete?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    connect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    update?: BatchPriceUpdateWithWhereUniqueWithoutBusinessInput | BatchPriceUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BatchPriceUpdateManyWithWhereWithoutBusinessInput | BatchPriceUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BatchPriceScalarWhereInput | BatchPriceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductRevenueFactUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ProductRevenueFactCreateWithoutBusinessInput, ProductRevenueFactUncheckedCreateWithoutBusinessInput> | ProductRevenueFactCreateWithoutBusinessInput[] | ProductRevenueFactUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductRevenueFactCreateOrConnectWithoutBusinessInput | ProductRevenueFactCreateOrConnectWithoutBusinessInput[]
    upsert?: ProductRevenueFactUpsertWithWhereUniqueWithoutBusinessInput | ProductRevenueFactUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ProductRevenueFactCreateManyBusinessInputEnvelope
    set?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    disconnect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    delete?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    connect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    update?: ProductRevenueFactUpdateWithWhereUniqueWithoutBusinessInput | ProductRevenueFactUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ProductRevenueFactUpdateManyWithWhereWithoutBusinessInput | ProductRevenueFactUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ProductRevenueFactScalarWhereInput | ProductRevenueFactScalarWhereInput[]
  }

  export type CategoryRevenueFactUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<CategoryRevenueFactCreateWithoutBusinessInput, CategoryRevenueFactUncheckedCreateWithoutBusinessInput> | CategoryRevenueFactCreateWithoutBusinessInput[] | CategoryRevenueFactUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CategoryRevenueFactCreateOrConnectWithoutBusinessInput | CategoryRevenueFactCreateOrConnectWithoutBusinessInput[]
    upsert?: CategoryRevenueFactUpsertWithWhereUniqueWithoutBusinessInput | CategoryRevenueFactUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: CategoryRevenueFactCreateManyBusinessInputEnvelope
    set?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    disconnect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    delete?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    connect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    update?: CategoryRevenueFactUpdateWithWhereUniqueWithoutBusinessInput | CategoryRevenueFactUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: CategoryRevenueFactUpdateManyWithWhereWithoutBusinessInput | CategoryRevenueFactUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: CategoryRevenueFactScalarWhereInput | CategoryRevenueFactScalarWhereInput[]
  }

  export type BatchPriceUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BatchPriceCreateWithoutBusinessInput, BatchPriceUncheckedCreateWithoutBusinessInput> | BatchPriceCreateWithoutBusinessInput[] | BatchPriceUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BatchPriceCreateOrConnectWithoutBusinessInput | BatchPriceCreateOrConnectWithoutBusinessInput[]
    upsert?: BatchPriceUpsertWithWhereUniqueWithoutBusinessInput | BatchPriceUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BatchPriceCreateManyBusinessInputEnvelope
    set?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    disconnect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    delete?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    connect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    update?: BatchPriceUpdateWithWhereUniqueWithoutBusinessInput | BatchPriceUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BatchPriceUpdateManyWithWhereWithoutBusinessInput | BatchPriceUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BatchPriceScalarWhereInput | BatchPriceScalarWhereInput[]
  }

  export type ProductDimensionCreateNestedManyWithoutCategoryDimensionInput = {
    create?: XOR<ProductDimensionCreateWithoutCategoryDimensionInput, ProductDimensionUncheckedCreateWithoutCategoryDimensionInput> | ProductDimensionCreateWithoutCategoryDimensionInput[] | ProductDimensionUncheckedCreateWithoutCategoryDimensionInput[]
    connectOrCreate?: ProductDimensionCreateOrConnectWithoutCategoryDimensionInput | ProductDimensionCreateOrConnectWithoutCategoryDimensionInput[]
    createMany?: ProductDimensionCreateManyCategoryDimensionInputEnvelope
    connect?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
  }

  export type CategoryRevenueFactCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryRevenueFactCreateWithoutCategoryInput, CategoryRevenueFactUncheckedCreateWithoutCategoryInput> | CategoryRevenueFactCreateWithoutCategoryInput[] | CategoryRevenueFactUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryRevenueFactCreateOrConnectWithoutCategoryInput | CategoryRevenueFactCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryRevenueFactCreateManyCategoryInputEnvelope
    connect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
  }

  export type ProductDimensionUncheckedCreateNestedManyWithoutCategoryDimensionInput = {
    create?: XOR<ProductDimensionCreateWithoutCategoryDimensionInput, ProductDimensionUncheckedCreateWithoutCategoryDimensionInput> | ProductDimensionCreateWithoutCategoryDimensionInput[] | ProductDimensionUncheckedCreateWithoutCategoryDimensionInput[]
    connectOrCreate?: ProductDimensionCreateOrConnectWithoutCategoryDimensionInput | ProductDimensionCreateOrConnectWithoutCategoryDimensionInput[]
    createMany?: ProductDimensionCreateManyCategoryDimensionInputEnvelope
    connect?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
  }

  export type CategoryRevenueFactUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryRevenueFactCreateWithoutCategoryInput, CategoryRevenueFactUncheckedCreateWithoutCategoryInput> | CategoryRevenueFactCreateWithoutCategoryInput[] | CategoryRevenueFactUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryRevenueFactCreateOrConnectWithoutCategoryInput | CategoryRevenueFactCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryRevenueFactCreateManyCategoryInputEnvelope
    connect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductDimensionUpdateManyWithoutCategoryDimensionNestedInput = {
    create?: XOR<ProductDimensionCreateWithoutCategoryDimensionInput, ProductDimensionUncheckedCreateWithoutCategoryDimensionInput> | ProductDimensionCreateWithoutCategoryDimensionInput[] | ProductDimensionUncheckedCreateWithoutCategoryDimensionInput[]
    connectOrCreate?: ProductDimensionCreateOrConnectWithoutCategoryDimensionInput | ProductDimensionCreateOrConnectWithoutCategoryDimensionInput[]
    upsert?: ProductDimensionUpsertWithWhereUniqueWithoutCategoryDimensionInput | ProductDimensionUpsertWithWhereUniqueWithoutCategoryDimensionInput[]
    createMany?: ProductDimensionCreateManyCategoryDimensionInputEnvelope
    set?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    disconnect?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    delete?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    connect?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    update?: ProductDimensionUpdateWithWhereUniqueWithoutCategoryDimensionInput | ProductDimensionUpdateWithWhereUniqueWithoutCategoryDimensionInput[]
    updateMany?: ProductDimensionUpdateManyWithWhereWithoutCategoryDimensionInput | ProductDimensionUpdateManyWithWhereWithoutCategoryDimensionInput[]
    deleteMany?: ProductDimensionScalarWhereInput | ProductDimensionScalarWhereInput[]
  }

  export type CategoryRevenueFactUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryRevenueFactCreateWithoutCategoryInput, CategoryRevenueFactUncheckedCreateWithoutCategoryInput> | CategoryRevenueFactCreateWithoutCategoryInput[] | CategoryRevenueFactUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryRevenueFactCreateOrConnectWithoutCategoryInput | CategoryRevenueFactCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryRevenueFactUpsertWithWhereUniqueWithoutCategoryInput | CategoryRevenueFactUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryRevenueFactCreateManyCategoryInputEnvelope
    set?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    disconnect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    delete?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    connect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    update?: CategoryRevenueFactUpdateWithWhereUniqueWithoutCategoryInput | CategoryRevenueFactUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryRevenueFactUpdateManyWithWhereWithoutCategoryInput | CategoryRevenueFactUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryRevenueFactScalarWhereInput | CategoryRevenueFactScalarWhereInput[]
  }

  export type ProductDimensionUncheckedUpdateManyWithoutCategoryDimensionNestedInput = {
    create?: XOR<ProductDimensionCreateWithoutCategoryDimensionInput, ProductDimensionUncheckedCreateWithoutCategoryDimensionInput> | ProductDimensionCreateWithoutCategoryDimensionInput[] | ProductDimensionUncheckedCreateWithoutCategoryDimensionInput[]
    connectOrCreate?: ProductDimensionCreateOrConnectWithoutCategoryDimensionInput | ProductDimensionCreateOrConnectWithoutCategoryDimensionInput[]
    upsert?: ProductDimensionUpsertWithWhereUniqueWithoutCategoryDimensionInput | ProductDimensionUpsertWithWhereUniqueWithoutCategoryDimensionInput[]
    createMany?: ProductDimensionCreateManyCategoryDimensionInputEnvelope
    set?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    disconnect?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    delete?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    connect?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    update?: ProductDimensionUpdateWithWhereUniqueWithoutCategoryDimensionInput | ProductDimensionUpdateWithWhereUniqueWithoutCategoryDimensionInput[]
    updateMany?: ProductDimensionUpdateManyWithWhereWithoutCategoryDimensionInput | ProductDimensionUpdateManyWithWhereWithoutCategoryDimensionInput[]
    deleteMany?: ProductDimensionScalarWhereInput | ProductDimensionScalarWhereInput[]
  }

  export type CategoryRevenueFactUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryRevenueFactCreateWithoutCategoryInput, CategoryRevenueFactUncheckedCreateWithoutCategoryInput> | CategoryRevenueFactCreateWithoutCategoryInput[] | CategoryRevenueFactUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryRevenueFactCreateOrConnectWithoutCategoryInput | CategoryRevenueFactCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryRevenueFactUpsertWithWhereUniqueWithoutCategoryInput | CategoryRevenueFactUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryRevenueFactCreateManyCategoryInputEnvelope
    set?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    disconnect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    delete?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    connect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    update?: CategoryRevenueFactUpdateWithWhereUniqueWithoutCategoryInput | CategoryRevenueFactUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryRevenueFactUpdateManyWithWhereWithoutCategoryInput | CategoryRevenueFactUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryRevenueFactScalarWhereInput | CategoryRevenueFactScalarWhereInput[]
  }

  export type DateDimensionCreateNestedOneWithoutExpiring_productsInput = {
    create?: XOR<DateDimensionCreateWithoutExpiring_productsInput, DateDimensionUncheckedCreateWithoutExpiring_productsInput>
    connectOrCreate?: DateDimensionCreateOrConnectWithoutExpiring_productsInput
    connect?: DateDimensionWhereUniqueInput
  }

  export type CategoryDimensionCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryDimensionCreateWithoutProductsInput, CategoryDimensionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryDimensionCreateOrConnectWithoutProductsInput
    connect?: CategoryDimensionWhereUniqueInput
  }

  export type ProductRevenueFactCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductRevenueFactCreateWithoutProductInput, ProductRevenueFactUncheckedCreateWithoutProductInput> | ProductRevenueFactCreateWithoutProductInput[] | ProductRevenueFactUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRevenueFactCreateOrConnectWithoutProductInput | ProductRevenueFactCreateOrConnectWithoutProductInput[]
    createMany?: ProductRevenueFactCreateManyProductInputEnvelope
    connect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
  }

  export type BatchPriceCreateNestedManyWithoutProductInput = {
    create?: XOR<BatchPriceCreateWithoutProductInput, BatchPriceUncheckedCreateWithoutProductInput> | BatchPriceCreateWithoutProductInput[] | BatchPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BatchPriceCreateOrConnectWithoutProductInput | BatchPriceCreateOrConnectWithoutProductInput[]
    createMany?: BatchPriceCreateManyProductInputEnvelope
    connect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
  }

  export type ProductRevenueFactUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductRevenueFactCreateWithoutProductInput, ProductRevenueFactUncheckedCreateWithoutProductInput> | ProductRevenueFactCreateWithoutProductInput[] | ProductRevenueFactUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRevenueFactCreateOrConnectWithoutProductInput | ProductRevenueFactCreateOrConnectWithoutProductInput[]
    createMany?: ProductRevenueFactCreateManyProductInputEnvelope
    connect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
  }

  export type BatchPriceUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<BatchPriceCreateWithoutProductInput, BatchPriceUncheckedCreateWithoutProductInput> | BatchPriceCreateWithoutProductInput[] | BatchPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BatchPriceCreateOrConnectWithoutProductInput | BatchPriceCreateOrConnectWithoutProductInput[]
    createMany?: BatchPriceCreateManyProductInputEnvelope
    connect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
  }

  export type DateDimensionUpdateOneWithoutExpiring_productsNestedInput = {
    create?: XOR<DateDimensionCreateWithoutExpiring_productsInput, DateDimensionUncheckedCreateWithoutExpiring_productsInput>
    connectOrCreate?: DateDimensionCreateOrConnectWithoutExpiring_productsInput
    upsert?: DateDimensionUpsertWithoutExpiring_productsInput
    disconnect?: DateDimensionWhereInput | boolean
    delete?: DateDimensionWhereInput | boolean
    connect?: DateDimensionWhereUniqueInput
    update?: XOR<XOR<DateDimensionUpdateToOneWithWhereWithoutExpiring_productsInput, DateDimensionUpdateWithoutExpiring_productsInput>, DateDimensionUncheckedUpdateWithoutExpiring_productsInput>
  }

  export type CategoryDimensionUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryDimensionCreateWithoutProductsInput, CategoryDimensionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryDimensionCreateOrConnectWithoutProductsInput
    upsert?: CategoryDimensionUpsertWithoutProductsInput
    connect?: CategoryDimensionWhereUniqueInput
    update?: XOR<XOR<CategoryDimensionUpdateToOneWithWhereWithoutProductsInput, CategoryDimensionUpdateWithoutProductsInput>, CategoryDimensionUncheckedUpdateWithoutProductsInput>
  }

  export type ProductRevenueFactUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductRevenueFactCreateWithoutProductInput, ProductRevenueFactUncheckedCreateWithoutProductInput> | ProductRevenueFactCreateWithoutProductInput[] | ProductRevenueFactUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRevenueFactCreateOrConnectWithoutProductInput | ProductRevenueFactCreateOrConnectWithoutProductInput[]
    upsert?: ProductRevenueFactUpsertWithWhereUniqueWithoutProductInput | ProductRevenueFactUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductRevenueFactCreateManyProductInputEnvelope
    set?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    disconnect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    delete?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    connect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    update?: ProductRevenueFactUpdateWithWhereUniqueWithoutProductInput | ProductRevenueFactUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductRevenueFactUpdateManyWithWhereWithoutProductInput | ProductRevenueFactUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductRevenueFactScalarWhereInput | ProductRevenueFactScalarWhereInput[]
  }

  export type BatchPriceUpdateManyWithoutProductNestedInput = {
    create?: XOR<BatchPriceCreateWithoutProductInput, BatchPriceUncheckedCreateWithoutProductInput> | BatchPriceCreateWithoutProductInput[] | BatchPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BatchPriceCreateOrConnectWithoutProductInput | BatchPriceCreateOrConnectWithoutProductInput[]
    upsert?: BatchPriceUpsertWithWhereUniqueWithoutProductInput | BatchPriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BatchPriceCreateManyProductInputEnvelope
    set?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    disconnect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    delete?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    connect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    update?: BatchPriceUpdateWithWhereUniqueWithoutProductInput | BatchPriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BatchPriceUpdateManyWithWhereWithoutProductInput | BatchPriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BatchPriceScalarWhereInput | BatchPriceScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductRevenueFactUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductRevenueFactCreateWithoutProductInput, ProductRevenueFactUncheckedCreateWithoutProductInput> | ProductRevenueFactCreateWithoutProductInput[] | ProductRevenueFactUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRevenueFactCreateOrConnectWithoutProductInput | ProductRevenueFactCreateOrConnectWithoutProductInput[]
    upsert?: ProductRevenueFactUpsertWithWhereUniqueWithoutProductInput | ProductRevenueFactUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductRevenueFactCreateManyProductInputEnvelope
    set?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    disconnect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    delete?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    connect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    update?: ProductRevenueFactUpdateWithWhereUniqueWithoutProductInput | ProductRevenueFactUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductRevenueFactUpdateManyWithWhereWithoutProductInput | ProductRevenueFactUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductRevenueFactScalarWhereInput | ProductRevenueFactScalarWhereInput[]
  }

  export type BatchPriceUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<BatchPriceCreateWithoutProductInput, BatchPriceUncheckedCreateWithoutProductInput> | BatchPriceCreateWithoutProductInput[] | BatchPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BatchPriceCreateOrConnectWithoutProductInput | BatchPriceCreateOrConnectWithoutProductInput[]
    upsert?: BatchPriceUpsertWithWhereUniqueWithoutProductInput | BatchPriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BatchPriceCreateManyProductInputEnvelope
    set?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    disconnect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    delete?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    connect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    update?: BatchPriceUpdateWithWhereUniqueWithoutProductInput | BatchPriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BatchPriceUpdateManyWithWhereWithoutProductInput | BatchPriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BatchPriceScalarWhereInput | BatchPriceScalarWhereInput[]
  }

  export type DateDimensionCreateNestedOneWithoutProduct_revenuesInput = {
    create?: XOR<DateDimensionCreateWithoutProduct_revenuesInput, DateDimensionUncheckedCreateWithoutProduct_revenuesInput>
    connectOrCreate?: DateDimensionCreateOrConnectWithoutProduct_revenuesInput
    connect?: DateDimensionWhereUniqueInput
  }

  export type BusinessDimensionCreateNestedOneWithoutProduct_revenuesInput = {
    create?: XOR<BusinessDimensionCreateWithoutProduct_revenuesInput, BusinessDimensionUncheckedCreateWithoutProduct_revenuesInput>
    connectOrCreate?: BusinessDimensionCreateOrConnectWithoutProduct_revenuesInput
    connect?: BusinessDimensionWhereUniqueInput
  }

  export type ProductDimensionCreateNestedOneWithoutProduct_revenuesInput = {
    create?: XOR<ProductDimensionCreateWithoutProduct_revenuesInput, ProductDimensionUncheckedCreateWithoutProduct_revenuesInput>
    connectOrCreate?: ProductDimensionCreateOrConnectWithoutProduct_revenuesInput
    connect?: ProductDimensionWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateDimensionUpdateOneRequiredWithoutProduct_revenuesNestedInput = {
    create?: XOR<DateDimensionCreateWithoutProduct_revenuesInput, DateDimensionUncheckedCreateWithoutProduct_revenuesInput>
    connectOrCreate?: DateDimensionCreateOrConnectWithoutProduct_revenuesInput
    upsert?: DateDimensionUpsertWithoutProduct_revenuesInput
    connect?: DateDimensionWhereUniqueInput
    update?: XOR<XOR<DateDimensionUpdateToOneWithWhereWithoutProduct_revenuesInput, DateDimensionUpdateWithoutProduct_revenuesInput>, DateDimensionUncheckedUpdateWithoutProduct_revenuesInput>
  }

  export type BusinessDimensionUpdateOneRequiredWithoutProduct_revenuesNestedInput = {
    create?: XOR<BusinessDimensionCreateWithoutProduct_revenuesInput, BusinessDimensionUncheckedCreateWithoutProduct_revenuesInput>
    connectOrCreate?: BusinessDimensionCreateOrConnectWithoutProduct_revenuesInput
    upsert?: BusinessDimensionUpsertWithoutProduct_revenuesInput
    connect?: BusinessDimensionWhereUniqueInput
    update?: XOR<XOR<BusinessDimensionUpdateToOneWithWhereWithoutProduct_revenuesInput, BusinessDimensionUpdateWithoutProduct_revenuesInput>, BusinessDimensionUncheckedUpdateWithoutProduct_revenuesInput>
  }

  export type ProductDimensionUpdateOneRequiredWithoutProduct_revenuesNestedInput = {
    create?: XOR<ProductDimensionCreateWithoutProduct_revenuesInput, ProductDimensionUncheckedCreateWithoutProduct_revenuesInput>
    connectOrCreate?: ProductDimensionCreateOrConnectWithoutProduct_revenuesInput
    upsert?: ProductDimensionUpsertWithoutProduct_revenuesInput
    connect?: ProductDimensionWhereUniqueInput
    update?: XOR<XOR<ProductDimensionUpdateToOneWithWhereWithoutProduct_revenuesInput, ProductDimensionUpdateWithoutProduct_revenuesInput>, ProductDimensionUncheckedUpdateWithoutProduct_revenuesInput>
  }

  export type DateDimensionCreateNestedOneWithoutCategory_revenuesInput = {
    create?: XOR<DateDimensionCreateWithoutCategory_revenuesInput, DateDimensionUncheckedCreateWithoutCategory_revenuesInput>
    connectOrCreate?: DateDimensionCreateOrConnectWithoutCategory_revenuesInput
    connect?: DateDimensionWhereUniqueInput
  }

  export type BusinessDimensionCreateNestedOneWithoutCategory_revenuesInput = {
    create?: XOR<BusinessDimensionCreateWithoutCategory_revenuesInput, BusinessDimensionUncheckedCreateWithoutCategory_revenuesInput>
    connectOrCreate?: BusinessDimensionCreateOrConnectWithoutCategory_revenuesInput
    connect?: BusinessDimensionWhereUniqueInput
  }

  export type CategoryDimensionCreateNestedOneWithoutCategory_revenuesInput = {
    create?: XOR<CategoryDimensionCreateWithoutCategory_revenuesInput, CategoryDimensionUncheckedCreateWithoutCategory_revenuesInput>
    connectOrCreate?: CategoryDimensionCreateOrConnectWithoutCategory_revenuesInput
    connect?: CategoryDimensionWhereUniqueInput
  }

  export type DateDimensionUpdateOneRequiredWithoutCategory_revenuesNestedInput = {
    create?: XOR<DateDimensionCreateWithoutCategory_revenuesInput, DateDimensionUncheckedCreateWithoutCategory_revenuesInput>
    connectOrCreate?: DateDimensionCreateOrConnectWithoutCategory_revenuesInput
    upsert?: DateDimensionUpsertWithoutCategory_revenuesInput
    connect?: DateDimensionWhereUniqueInput
    update?: XOR<XOR<DateDimensionUpdateToOneWithWhereWithoutCategory_revenuesInput, DateDimensionUpdateWithoutCategory_revenuesInput>, DateDimensionUncheckedUpdateWithoutCategory_revenuesInput>
  }

  export type BusinessDimensionUpdateOneRequiredWithoutCategory_revenuesNestedInput = {
    create?: XOR<BusinessDimensionCreateWithoutCategory_revenuesInput, BusinessDimensionUncheckedCreateWithoutCategory_revenuesInput>
    connectOrCreate?: BusinessDimensionCreateOrConnectWithoutCategory_revenuesInput
    upsert?: BusinessDimensionUpsertWithoutCategory_revenuesInput
    connect?: BusinessDimensionWhereUniqueInput
    update?: XOR<XOR<BusinessDimensionUpdateToOneWithWhereWithoutCategory_revenuesInput, BusinessDimensionUpdateWithoutCategory_revenuesInput>, BusinessDimensionUncheckedUpdateWithoutCategory_revenuesInput>
  }

  export type CategoryDimensionUpdateOneRequiredWithoutCategory_revenuesNestedInput = {
    create?: XOR<CategoryDimensionCreateWithoutCategory_revenuesInput, CategoryDimensionUncheckedCreateWithoutCategory_revenuesInput>
    connectOrCreate?: CategoryDimensionCreateOrConnectWithoutCategory_revenuesInput
    upsert?: CategoryDimensionUpsertWithoutCategory_revenuesInput
    connect?: CategoryDimensionWhereUniqueInput
    update?: XOR<XOR<CategoryDimensionUpdateToOneWithWhereWithoutCategory_revenuesInput, CategoryDimensionUpdateWithoutCategory_revenuesInput>, CategoryDimensionUncheckedUpdateWithoutCategory_revenuesInput>
  }

  export type DateDimensionCreateNestedOneWithoutBatch_pricesInput = {
    create?: XOR<DateDimensionCreateWithoutBatch_pricesInput, DateDimensionUncheckedCreateWithoutBatch_pricesInput>
    connectOrCreate?: DateDimensionCreateOrConnectWithoutBatch_pricesInput
    connect?: DateDimensionWhereUniqueInput
  }

  export type BusinessDimensionCreateNestedOneWithoutProduct_pricesInput = {
    create?: XOR<BusinessDimensionCreateWithoutProduct_pricesInput, BusinessDimensionUncheckedCreateWithoutProduct_pricesInput>
    connectOrCreate?: BusinessDimensionCreateOrConnectWithoutProduct_pricesInput
    connect?: BusinessDimensionWhereUniqueInput
  }

  export type ProductDimensionCreateNestedOneWithoutPricesInput = {
    create?: XOR<ProductDimensionCreateWithoutPricesInput, ProductDimensionUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ProductDimensionCreateOrConnectWithoutPricesInput
    connect?: ProductDimensionWhereUniqueInput
  }

  export type DateDimensionUpdateOneRequiredWithoutBatch_pricesNestedInput = {
    create?: XOR<DateDimensionCreateWithoutBatch_pricesInput, DateDimensionUncheckedCreateWithoutBatch_pricesInput>
    connectOrCreate?: DateDimensionCreateOrConnectWithoutBatch_pricesInput
    upsert?: DateDimensionUpsertWithoutBatch_pricesInput
    connect?: DateDimensionWhereUniqueInput
    update?: XOR<XOR<DateDimensionUpdateToOneWithWhereWithoutBatch_pricesInput, DateDimensionUpdateWithoutBatch_pricesInput>, DateDimensionUncheckedUpdateWithoutBatch_pricesInput>
  }

  export type BusinessDimensionUpdateOneRequiredWithoutProduct_pricesNestedInput = {
    create?: XOR<BusinessDimensionCreateWithoutProduct_pricesInput, BusinessDimensionUncheckedCreateWithoutProduct_pricesInput>
    connectOrCreate?: BusinessDimensionCreateOrConnectWithoutProduct_pricesInput
    upsert?: BusinessDimensionUpsertWithoutProduct_pricesInput
    connect?: BusinessDimensionWhereUniqueInput
    update?: XOR<XOR<BusinessDimensionUpdateToOneWithWhereWithoutProduct_pricesInput, BusinessDimensionUpdateWithoutProduct_pricesInput>, BusinessDimensionUncheckedUpdateWithoutProduct_pricesInput>
  }

  export type ProductDimensionUpdateOneRequiredWithoutPricesNestedInput = {
    create?: XOR<ProductDimensionCreateWithoutPricesInput, ProductDimensionUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ProductDimensionCreateOrConnectWithoutPricesInput
    upsert?: ProductDimensionUpsertWithoutPricesInput
    connect?: ProductDimensionWhereUniqueInput
    update?: XOR<XOR<ProductDimensionUpdateToOneWithWhereWithoutPricesInput, ProductDimensionUpdateWithoutPricesInput>, ProductDimensionUncheckedUpdateWithoutPricesInput>
  }

  export type ProductRevenueFactCreateNestedManyWithoutDateInput = {
    create?: XOR<ProductRevenueFactCreateWithoutDateInput, ProductRevenueFactUncheckedCreateWithoutDateInput> | ProductRevenueFactCreateWithoutDateInput[] | ProductRevenueFactUncheckedCreateWithoutDateInput[]
    connectOrCreate?: ProductRevenueFactCreateOrConnectWithoutDateInput | ProductRevenueFactCreateOrConnectWithoutDateInput[]
    createMany?: ProductRevenueFactCreateManyDateInputEnvelope
    connect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
  }

  export type CategoryRevenueFactCreateNestedManyWithoutDateInput = {
    create?: XOR<CategoryRevenueFactCreateWithoutDateInput, CategoryRevenueFactUncheckedCreateWithoutDateInput> | CategoryRevenueFactCreateWithoutDateInput[] | CategoryRevenueFactUncheckedCreateWithoutDateInput[]
    connectOrCreate?: CategoryRevenueFactCreateOrConnectWithoutDateInput | CategoryRevenueFactCreateOrConnectWithoutDateInput[]
    createMany?: CategoryRevenueFactCreateManyDateInputEnvelope
    connect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
  }

  export type BatchPriceCreateNestedManyWithoutDateInput = {
    create?: XOR<BatchPriceCreateWithoutDateInput, BatchPriceUncheckedCreateWithoutDateInput> | BatchPriceCreateWithoutDateInput[] | BatchPriceUncheckedCreateWithoutDateInput[]
    connectOrCreate?: BatchPriceCreateOrConnectWithoutDateInput | BatchPriceCreateOrConnectWithoutDateInput[]
    createMany?: BatchPriceCreateManyDateInputEnvelope
    connect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
  }

  export type ProductDimensionCreateNestedManyWithoutNext_expiry_dateInput = {
    create?: XOR<ProductDimensionCreateWithoutNext_expiry_dateInput, ProductDimensionUncheckedCreateWithoutNext_expiry_dateInput> | ProductDimensionCreateWithoutNext_expiry_dateInput[] | ProductDimensionUncheckedCreateWithoutNext_expiry_dateInput[]
    connectOrCreate?: ProductDimensionCreateOrConnectWithoutNext_expiry_dateInput | ProductDimensionCreateOrConnectWithoutNext_expiry_dateInput[]
    createMany?: ProductDimensionCreateManyNext_expiry_dateInputEnvelope
    connect?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
  }

  export type ProductRevenueFactUncheckedCreateNestedManyWithoutDateInput = {
    create?: XOR<ProductRevenueFactCreateWithoutDateInput, ProductRevenueFactUncheckedCreateWithoutDateInput> | ProductRevenueFactCreateWithoutDateInput[] | ProductRevenueFactUncheckedCreateWithoutDateInput[]
    connectOrCreate?: ProductRevenueFactCreateOrConnectWithoutDateInput | ProductRevenueFactCreateOrConnectWithoutDateInput[]
    createMany?: ProductRevenueFactCreateManyDateInputEnvelope
    connect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
  }

  export type CategoryRevenueFactUncheckedCreateNestedManyWithoutDateInput = {
    create?: XOR<CategoryRevenueFactCreateWithoutDateInput, CategoryRevenueFactUncheckedCreateWithoutDateInput> | CategoryRevenueFactCreateWithoutDateInput[] | CategoryRevenueFactUncheckedCreateWithoutDateInput[]
    connectOrCreate?: CategoryRevenueFactCreateOrConnectWithoutDateInput | CategoryRevenueFactCreateOrConnectWithoutDateInput[]
    createMany?: CategoryRevenueFactCreateManyDateInputEnvelope
    connect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
  }

  export type BatchPriceUncheckedCreateNestedManyWithoutDateInput = {
    create?: XOR<BatchPriceCreateWithoutDateInput, BatchPriceUncheckedCreateWithoutDateInput> | BatchPriceCreateWithoutDateInput[] | BatchPriceUncheckedCreateWithoutDateInput[]
    connectOrCreate?: BatchPriceCreateOrConnectWithoutDateInput | BatchPriceCreateOrConnectWithoutDateInput[]
    createMany?: BatchPriceCreateManyDateInputEnvelope
    connect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
  }

  export type ProductDimensionUncheckedCreateNestedManyWithoutNext_expiry_dateInput = {
    create?: XOR<ProductDimensionCreateWithoutNext_expiry_dateInput, ProductDimensionUncheckedCreateWithoutNext_expiry_dateInput> | ProductDimensionCreateWithoutNext_expiry_dateInput[] | ProductDimensionUncheckedCreateWithoutNext_expiry_dateInput[]
    connectOrCreate?: ProductDimensionCreateOrConnectWithoutNext_expiry_dateInput | ProductDimensionCreateOrConnectWithoutNext_expiry_dateInput[]
    createMany?: ProductDimensionCreateManyNext_expiry_dateInputEnvelope
    connect?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductRevenueFactUpdateManyWithoutDateNestedInput = {
    create?: XOR<ProductRevenueFactCreateWithoutDateInput, ProductRevenueFactUncheckedCreateWithoutDateInput> | ProductRevenueFactCreateWithoutDateInput[] | ProductRevenueFactUncheckedCreateWithoutDateInput[]
    connectOrCreate?: ProductRevenueFactCreateOrConnectWithoutDateInput | ProductRevenueFactCreateOrConnectWithoutDateInput[]
    upsert?: ProductRevenueFactUpsertWithWhereUniqueWithoutDateInput | ProductRevenueFactUpsertWithWhereUniqueWithoutDateInput[]
    createMany?: ProductRevenueFactCreateManyDateInputEnvelope
    set?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    disconnect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    delete?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    connect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    update?: ProductRevenueFactUpdateWithWhereUniqueWithoutDateInput | ProductRevenueFactUpdateWithWhereUniqueWithoutDateInput[]
    updateMany?: ProductRevenueFactUpdateManyWithWhereWithoutDateInput | ProductRevenueFactUpdateManyWithWhereWithoutDateInput[]
    deleteMany?: ProductRevenueFactScalarWhereInput | ProductRevenueFactScalarWhereInput[]
  }

  export type CategoryRevenueFactUpdateManyWithoutDateNestedInput = {
    create?: XOR<CategoryRevenueFactCreateWithoutDateInput, CategoryRevenueFactUncheckedCreateWithoutDateInput> | CategoryRevenueFactCreateWithoutDateInput[] | CategoryRevenueFactUncheckedCreateWithoutDateInput[]
    connectOrCreate?: CategoryRevenueFactCreateOrConnectWithoutDateInput | CategoryRevenueFactCreateOrConnectWithoutDateInput[]
    upsert?: CategoryRevenueFactUpsertWithWhereUniqueWithoutDateInput | CategoryRevenueFactUpsertWithWhereUniqueWithoutDateInput[]
    createMany?: CategoryRevenueFactCreateManyDateInputEnvelope
    set?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    disconnect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    delete?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    connect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    update?: CategoryRevenueFactUpdateWithWhereUniqueWithoutDateInput | CategoryRevenueFactUpdateWithWhereUniqueWithoutDateInput[]
    updateMany?: CategoryRevenueFactUpdateManyWithWhereWithoutDateInput | CategoryRevenueFactUpdateManyWithWhereWithoutDateInput[]
    deleteMany?: CategoryRevenueFactScalarWhereInput | CategoryRevenueFactScalarWhereInput[]
  }

  export type BatchPriceUpdateManyWithoutDateNestedInput = {
    create?: XOR<BatchPriceCreateWithoutDateInput, BatchPriceUncheckedCreateWithoutDateInput> | BatchPriceCreateWithoutDateInput[] | BatchPriceUncheckedCreateWithoutDateInput[]
    connectOrCreate?: BatchPriceCreateOrConnectWithoutDateInput | BatchPriceCreateOrConnectWithoutDateInput[]
    upsert?: BatchPriceUpsertWithWhereUniqueWithoutDateInput | BatchPriceUpsertWithWhereUniqueWithoutDateInput[]
    createMany?: BatchPriceCreateManyDateInputEnvelope
    set?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    disconnect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    delete?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    connect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    update?: BatchPriceUpdateWithWhereUniqueWithoutDateInput | BatchPriceUpdateWithWhereUniqueWithoutDateInput[]
    updateMany?: BatchPriceUpdateManyWithWhereWithoutDateInput | BatchPriceUpdateManyWithWhereWithoutDateInput[]
    deleteMany?: BatchPriceScalarWhereInput | BatchPriceScalarWhereInput[]
  }

  export type ProductDimensionUpdateManyWithoutNext_expiry_dateNestedInput = {
    create?: XOR<ProductDimensionCreateWithoutNext_expiry_dateInput, ProductDimensionUncheckedCreateWithoutNext_expiry_dateInput> | ProductDimensionCreateWithoutNext_expiry_dateInput[] | ProductDimensionUncheckedCreateWithoutNext_expiry_dateInput[]
    connectOrCreate?: ProductDimensionCreateOrConnectWithoutNext_expiry_dateInput | ProductDimensionCreateOrConnectWithoutNext_expiry_dateInput[]
    upsert?: ProductDimensionUpsertWithWhereUniqueWithoutNext_expiry_dateInput | ProductDimensionUpsertWithWhereUniqueWithoutNext_expiry_dateInput[]
    createMany?: ProductDimensionCreateManyNext_expiry_dateInputEnvelope
    set?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    disconnect?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    delete?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    connect?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    update?: ProductDimensionUpdateWithWhereUniqueWithoutNext_expiry_dateInput | ProductDimensionUpdateWithWhereUniqueWithoutNext_expiry_dateInput[]
    updateMany?: ProductDimensionUpdateManyWithWhereWithoutNext_expiry_dateInput | ProductDimensionUpdateManyWithWhereWithoutNext_expiry_dateInput[]
    deleteMany?: ProductDimensionScalarWhereInput | ProductDimensionScalarWhereInput[]
  }

  export type ProductRevenueFactUncheckedUpdateManyWithoutDateNestedInput = {
    create?: XOR<ProductRevenueFactCreateWithoutDateInput, ProductRevenueFactUncheckedCreateWithoutDateInput> | ProductRevenueFactCreateWithoutDateInput[] | ProductRevenueFactUncheckedCreateWithoutDateInput[]
    connectOrCreate?: ProductRevenueFactCreateOrConnectWithoutDateInput | ProductRevenueFactCreateOrConnectWithoutDateInput[]
    upsert?: ProductRevenueFactUpsertWithWhereUniqueWithoutDateInput | ProductRevenueFactUpsertWithWhereUniqueWithoutDateInput[]
    createMany?: ProductRevenueFactCreateManyDateInputEnvelope
    set?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    disconnect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    delete?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    connect?: ProductRevenueFactWhereUniqueInput | ProductRevenueFactWhereUniqueInput[]
    update?: ProductRevenueFactUpdateWithWhereUniqueWithoutDateInput | ProductRevenueFactUpdateWithWhereUniqueWithoutDateInput[]
    updateMany?: ProductRevenueFactUpdateManyWithWhereWithoutDateInput | ProductRevenueFactUpdateManyWithWhereWithoutDateInput[]
    deleteMany?: ProductRevenueFactScalarWhereInput | ProductRevenueFactScalarWhereInput[]
  }

  export type CategoryRevenueFactUncheckedUpdateManyWithoutDateNestedInput = {
    create?: XOR<CategoryRevenueFactCreateWithoutDateInput, CategoryRevenueFactUncheckedCreateWithoutDateInput> | CategoryRevenueFactCreateWithoutDateInput[] | CategoryRevenueFactUncheckedCreateWithoutDateInput[]
    connectOrCreate?: CategoryRevenueFactCreateOrConnectWithoutDateInput | CategoryRevenueFactCreateOrConnectWithoutDateInput[]
    upsert?: CategoryRevenueFactUpsertWithWhereUniqueWithoutDateInput | CategoryRevenueFactUpsertWithWhereUniqueWithoutDateInput[]
    createMany?: CategoryRevenueFactCreateManyDateInputEnvelope
    set?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    disconnect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    delete?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    connect?: CategoryRevenueFactWhereUniqueInput | CategoryRevenueFactWhereUniqueInput[]
    update?: CategoryRevenueFactUpdateWithWhereUniqueWithoutDateInput | CategoryRevenueFactUpdateWithWhereUniqueWithoutDateInput[]
    updateMany?: CategoryRevenueFactUpdateManyWithWhereWithoutDateInput | CategoryRevenueFactUpdateManyWithWhereWithoutDateInput[]
    deleteMany?: CategoryRevenueFactScalarWhereInput | CategoryRevenueFactScalarWhereInput[]
  }

  export type BatchPriceUncheckedUpdateManyWithoutDateNestedInput = {
    create?: XOR<BatchPriceCreateWithoutDateInput, BatchPriceUncheckedCreateWithoutDateInput> | BatchPriceCreateWithoutDateInput[] | BatchPriceUncheckedCreateWithoutDateInput[]
    connectOrCreate?: BatchPriceCreateOrConnectWithoutDateInput | BatchPriceCreateOrConnectWithoutDateInput[]
    upsert?: BatchPriceUpsertWithWhereUniqueWithoutDateInput | BatchPriceUpsertWithWhereUniqueWithoutDateInput[]
    createMany?: BatchPriceCreateManyDateInputEnvelope
    set?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    disconnect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    delete?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    connect?: BatchPriceWhereUniqueInput | BatchPriceWhereUniqueInput[]
    update?: BatchPriceUpdateWithWhereUniqueWithoutDateInput | BatchPriceUpdateWithWhereUniqueWithoutDateInput[]
    updateMany?: BatchPriceUpdateManyWithWhereWithoutDateInput | BatchPriceUpdateManyWithWhereWithoutDateInput[]
    deleteMany?: BatchPriceScalarWhereInput | BatchPriceScalarWhereInput[]
  }

  export type ProductDimensionUncheckedUpdateManyWithoutNext_expiry_dateNestedInput = {
    create?: XOR<ProductDimensionCreateWithoutNext_expiry_dateInput, ProductDimensionUncheckedCreateWithoutNext_expiry_dateInput> | ProductDimensionCreateWithoutNext_expiry_dateInput[] | ProductDimensionUncheckedCreateWithoutNext_expiry_dateInput[]
    connectOrCreate?: ProductDimensionCreateOrConnectWithoutNext_expiry_dateInput | ProductDimensionCreateOrConnectWithoutNext_expiry_dateInput[]
    upsert?: ProductDimensionUpsertWithWhereUniqueWithoutNext_expiry_dateInput | ProductDimensionUpsertWithWhereUniqueWithoutNext_expiry_dateInput[]
    createMany?: ProductDimensionCreateManyNext_expiry_dateInputEnvelope
    set?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    disconnect?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    delete?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    connect?: ProductDimensionWhereUniqueInput | ProductDimensionWhereUniqueInput[]
    update?: ProductDimensionUpdateWithWhereUniqueWithoutNext_expiry_dateInput | ProductDimensionUpdateWithWhereUniqueWithoutNext_expiry_dateInput[]
    updateMany?: ProductDimensionUpdateManyWithWhereWithoutNext_expiry_dateInput | ProductDimensionUpdateManyWithWhereWithoutNext_expiry_dateInput[]
    deleteMany?: ProductDimensionScalarWhereInput | ProductDimensionScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ProductRevenueFactCreateWithoutBusinessInput = {
    revenue_amount: number
    total_units_sold: number
    date: DateDimensionCreateNestedOneWithoutProduct_revenuesInput
    product: ProductDimensionCreateNestedOneWithoutProduct_revenuesInput
  }

  export type ProductRevenueFactUncheckedCreateWithoutBusinessInput = {
    product_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type ProductRevenueFactCreateOrConnectWithoutBusinessInput = {
    where: ProductRevenueFactWhereUniqueInput
    create: XOR<ProductRevenueFactCreateWithoutBusinessInput, ProductRevenueFactUncheckedCreateWithoutBusinessInput>
  }

  export type ProductRevenueFactCreateManyBusinessInputEnvelope = {
    data: ProductRevenueFactCreateManyBusinessInput | ProductRevenueFactCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type CategoryRevenueFactCreateWithoutBusinessInput = {
    revenue_amount: number
    total_units_sold: number
    date: DateDimensionCreateNestedOneWithoutCategory_revenuesInput
    category: CategoryDimensionCreateNestedOneWithoutCategory_revenuesInput
  }

  export type CategoryRevenueFactUncheckedCreateWithoutBusinessInput = {
    category_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type CategoryRevenueFactCreateOrConnectWithoutBusinessInput = {
    where: CategoryRevenueFactWhereUniqueInput
    create: XOR<CategoryRevenueFactCreateWithoutBusinessInput, CategoryRevenueFactUncheckedCreateWithoutBusinessInput>
  }

  export type CategoryRevenueFactCreateManyBusinessInputEnvelope = {
    data: CategoryRevenueFactCreateManyBusinessInput | CategoryRevenueFactCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type BatchPriceCreateWithoutBusinessInput = {
    purchase_price: number
    date: DateDimensionCreateNestedOneWithoutBatch_pricesInput
    product: ProductDimensionCreateNestedOneWithoutPricesInput
  }

  export type BatchPriceUncheckedCreateWithoutBusinessInput = {
    product_id: number
    date_id: number
    purchase_price: number
  }

  export type BatchPriceCreateOrConnectWithoutBusinessInput = {
    where: BatchPriceWhereUniqueInput
    create: XOR<BatchPriceCreateWithoutBusinessInput, BatchPriceUncheckedCreateWithoutBusinessInput>
  }

  export type BatchPriceCreateManyBusinessInputEnvelope = {
    data: BatchPriceCreateManyBusinessInput | BatchPriceCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type ProductRevenueFactUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ProductRevenueFactWhereUniqueInput
    update: XOR<ProductRevenueFactUpdateWithoutBusinessInput, ProductRevenueFactUncheckedUpdateWithoutBusinessInput>
    create: XOR<ProductRevenueFactCreateWithoutBusinessInput, ProductRevenueFactUncheckedCreateWithoutBusinessInput>
  }

  export type ProductRevenueFactUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ProductRevenueFactWhereUniqueInput
    data: XOR<ProductRevenueFactUpdateWithoutBusinessInput, ProductRevenueFactUncheckedUpdateWithoutBusinessInput>
  }

  export type ProductRevenueFactUpdateManyWithWhereWithoutBusinessInput = {
    where: ProductRevenueFactScalarWhereInput
    data: XOR<ProductRevenueFactUpdateManyMutationInput, ProductRevenueFactUncheckedUpdateManyWithoutBusinessInput>
  }

  export type ProductRevenueFactScalarWhereInput = {
    AND?: ProductRevenueFactScalarWhereInput | ProductRevenueFactScalarWhereInput[]
    OR?: ProductRevenueFactScalarWhereInput[]
    NOT?: ProductRevenueFactScalarWhereInput | ProductRevenueFactScalarWhereInput[]
    product_id?: IntFilter<"ProductRevenueFact"> | number
    business_id?: IntFilter<"ProductRevenueFact"> | number
    date_id?: IntFilter<"ProductRevenueFact"> | number
    revenue_amount?: FloatFilter<"ProductRevenueFact"> | number
    total_units_sold?: IntFilter<"ProductRevenueFact"> | number
  }

  export type CategoryRevenueFactUpsertWithWhereUniqueWithoutBusinessInput = {
    where: CategoryRevenueFactWhereUniqueInput
    update: XOR<CategoryRevenueFactUpdateWithoutBusinessInput, CategoryRevenueFactUncheckedUpdateWithoutBusinessInput>
    create: XOR<CategoryRevenueFactCreateWithoutBusinessInput, CategoryRevenueFactUncheckedCreateWithoutBusinessInput>
  }

  export type CategoryRevenueFactUpdateWithWhereUniqueWithoutBusinessInput = {
    where: CategoryRevenueFactWhereUniqueInput
    data: XOR<CategoryRevenueFactUpdateWithoutBusinessInput, CategoryRevenueFactUncheckedUpdateWithoutBusinessInput>
  }

  export type CategoryRevenueFactUpdateManyWithWhereWithoutBusinessInput = {
    where: CategoryRevenueFactScalarWhereInput
    data: XOR<CategoryRevenueFactUpdateManyMutationInput, CategoryRevenueFactUncheckedUpdateManyWithoutBusinessInput>
  }

  export type CategoryRevenueFactScalarWhereInput = {
    AND?: CategoryRevenueFactScalarWhereInput | CategoryRevenueFactScalarWhereInput[]
    OR?: CategoryRevenueFactScalarWhereInput[]
    NOT?: CategoryRevenueFactScalarWhereInput | CategoryRevenueFactScalarWhereInput[]
    business_id?: IntFilter<"CategoryRevenueFact"> | number
    category_id?: IntFilter<"CategoryRevenueFact"> | number
    date_id?: IntFilter<"CategoryRevenueFact"> | number
    revenue_amount?: FloatFilter<"CategoryRevenueFact"> | number
    total_units_sold?: IntFilter<"CategoryRevenueFact"> | number
  }

  export type BatchPriceUpsertWithWhereUniqueWithoutBusinessInput = {
    where: BatchPriceWhereUniqueInput
    update: XOR<BatchPriceUpdateWithoutBusinessInput, BatchPriceUncheckedUpdateWithoutBusinessInput>
    create: XOR<BatchPriceCreateWithoutBusinessInput, BatchPriceUncheckedCreateWithoutBusinessInput>
  }

  export type BatchPriceUpdateWithWhereUniqueWithoutBusinessInput = {
    where: BatchPriceWhereUniqueInput
    data: XOR<BatchPriceUpdateWithoutBusinessInput, BatchPriceUncheckedUpdateWithoutBusinessInput>
  }

  export type BatchPriceUpdateManyWithWhereWithoutBusinessInput = {
    where: BatchPriceScalarWhereInput
    data: XOR<BatchPriceUpdateManyMutationInput, BatchPriceUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BatchPriceScalarWhereInput = {
    AND?: BatchPriceScalarWhereInput | BatchPriceScalarWhereInput[]
    OR?: BatchPriceScalarWhereInput[]
    NOT?: BatchPriceScalarWhereInput | BatchPriceScalarWhereInput[]
    product_id?: IntFilter<"BatchPrice"> | number
    business_id?: IntFilter<"BatchPrice"> | number
    date_id?: IntFilter<"BatchPrice"> | number
    purchase_price?: FloatFilter<"BatchPrice"> | number
  }

  export type ProductDimensionCreateWithoutCategoryDimensionInput = {
    name: string
    next_expiry_date?: DateDimensionCreateNestedOneWithoutExpiring_productsInput
    product_revenues?: ProductRevenueFactCreateNestedManyWithoutProductInput
    prices?: BatchPriceCreateNestedManyWithoutProductInput
  }

  export type ProductDimensionUncheckedCreateWithoutCategoryDimensionInput = {
    product_id?: number
    name: string
    next_expiry_date_id?: number | null
    product_revenues?: ProductRevenueFactUncheckedCreateNestedManyWithoutProductInput
    prices?: BatchPriceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductDimensionCreateOrConnectWithoutCategoryDimensionInput = {
    where: ProductDimensionWhereUniqueInput
    create: XOR<ProductDimensionCreateWithoutCategoryDimensionInput, ProductDimensionUncheckedCreateWithoutCategoryDimensionInput>
  }

  export type ProductDimensionCreateManyCategoryDimensionInputEnvelope = {
    data: ProductDimensionCreateManyCategoryDimensionInput | ProductDimensionCreateManyCategoryDimensionInput[]
    skipDuplicates?: boolean
  }

  export type CategoryRevenueFactCreateWithoutCategoryInput = {
    revenue_amount: number
    total_units_sold: number
    date: DateDimensionCreateNestedOneWithoutCategory_revenuesInput
    business: BusinessDimensionCreateNestedOneWithoutCategory_revenuesInput
  }

  export type CategoryRevenueFactUncheckedCreateWithoutCategoryInput = {
    business_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type CategoryRevenueFactCreateOrConnectWithoutCategoryInput = {
    where: CategoryRevenueFactWhereUniqueInput
    create: XOR<CategoryRevenueFactCreateWithoutCategoryInput, CategoryRevenueFactUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryRevenueFactCreateManyCategoryInputEnvelope = {
    data: CategoryRevenueFactCreateManyCategoryInput | CategoryRevenueFactCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductDimensionUpsertWithWhereUniqueWithoutCategoryDimensionInput = {
    where: ProductDimensionWhereUniqueInput
    update: XOR<ProductDimensionUpdateWithoutCategoryDimensionInput, ProductDimensionUncheckedUpdateWithoutCategoryDimensionInput>
    create: XOR<ProductDimensionCreateWithoutCategoryDimensionInput, ProductDimensionUncheckedCreateWithoutCategoryDimensionInput>
  }

  export type ProductDimensionUpdateWithWhereUniqueWithoutCategoryDimensionInput = {
    where: ProductDimensionWhereUniqueInput
    data: XOR<ProductDimensionUpdateWithoutCategoryDimensionInput, ProductDimensionUncheckedUpdateWithoutCategoryDimensionInput>
  }

  export type ProductDimensionUpdateManyWithWhereWithoutCategoryDimensionInput = {
    where: ProductDimensionScalarWhereInput
    data: XOR<ProductDimensionUpdateManyMutationInput, ProductDimensionUncheckedUpdateManyWithoutCategoryDimensionInput>
  }

  export type ProductDimensionScalarWhereInput = {
    AND?: ProductDimensionScalarWhereInput | ProductDimensionScalarWhereInput[]
    OR?: ProductDimensionScalarWhereInput[]
    NOT?: ProductDimensionScalarWhereInput | ProductDimensionScalarWhereInput[]
    product_id?: IntFilter<"ProductDimension"> | number
    name?: StringFilter<"ProductDimension"> | string
    category_id?: IntFilter<"ProductDimension"> | number
    next_expiry_date_id?: IntNullableFilter<"ProductDimension"> | number | null
  }

  export type CategoryRevenueFactUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryRevenueFactWhereUniqueInput
    update: XOR<CategoryRevenueFactUpdateWithoutCategoryInput, CategoryRevenueFactUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryRevenueFactCreateWithoutCategoryInput, CategoryRevenueFactUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryRevenueFactUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryRevenueFactWhereUniqueInput
    data: XOR<CategoryRevenueFactUpdateWithoutCategoryInput, CategoryRevenueFactUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryRevenueFactUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryRevenueFactScalarWhereInput
    data: XOR<CategoryRevenueFactUpdateManyMutationInput, CategoryRevenueFactUncheckedUpdateManyWithoutCategoryInput>
  }

  export type DateDimensionCreateWithoutExpiring_productsInput = {
    full_date: Date | string
    day: number
    week: number
    month: number
    quarter: number
    year: number
    product_revenues?: ProductRevenueFactCreateNestedManyWithoutDateInput
    category_revenues?: CategoryRevenueFactCreateNestedManyWithoutDateInput
    batch_prices?: BatchPriceCreateNestedManyWithoutDateInput
  }

  export type DateDimensionUncheckedCreateWithoutExpiring_productsInput = {
    date_id?: number
    full_date: Date | string
    day: number
    week: number
    month: number
    quarter: number
    year: number
    product_revenues?: ProductRevenueFactUncheckedCreateNestedManyWithoutDateInput
    category_revenues?: CategoryRevenueFactUncheckedCreateNestedManyWithoutDateInput
    batch_prices?: BatchPriceUncheckedCreateNestedManyWithoutDateInput
  }

  export type DateDimensionCreateOrConnectWithoutExpiring_productsInput = {
    where: DateDimensionWhereUniqueInput
    create: XOR<DateDimensionCreateWithoutExpiring_productsInput, DateDimensionUncheckedCreateWithoutExpiring_productsInput>
  }

  export type CategoryDimensionCreateWithoutProductsInput = {
    category_name: string
    has_expiry_date?: boolean
    category_revenues?: CategoryRevenueFactCreateNestedManyWithoutCategoryInput
  }

  export type CategoryDimensionUncheckedCreateWithoutProductsInput = {
    category_id?: number
    category_name: string
    has_expiry_date?: boolean
    category_revenues?: CategoryRevenueFactUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryDimensionCreateOrConnectWithoutProductsInput = {
    where: CategoryDimensionWhereUniqueInput
    create: XOR<CategoryDimensionCreateWithoutProductsInput, CategoryDimensionUncheckedCreateWithoutProductsInput>
  }

  export type ProductRevenueFactCreateWithoutProductInput = {
    revenue_amount: number
    total_units_sold: number
    date: DateDimensionCreateNestedOneWithoutProduct_revenuesInput
    business: BusinessDimensionCreateNestedOneWithoutProduct_revenuesInput
  }

  export type ProductRevenueFactUncheckedCreateWithoutProductInput = {
    business_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type ProductRevenueFactCreateOrConnectWithoutProductInput = {
    where: ProductRevenueFactWhereUniqueInput
    create: XOR<ProductRevenueFactCreateWithoutProductInput, ProductRevenueFactUncheckedCreateWithoutProductInput>
  }

  export type ProductRevenueFactCreateManyProductInputEnvelope = {
    data: ProductRevenueFactCreateManyProductInput | ProductRevenueFactCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BatchPriceCreateWithoutProductInput = {
    purchase_price: number
    date: DateDimensionCreateNestedOneWithoutBatch_pricesInput
    business: BusinessDimensionCreateNestedOneWithoutProduct_pricesInput
  }

  export type BatchPriceUncheckedCreateWithoutProductInput = {
    business_id: number
    date_id: number
    purchase_price: number
  }

  export type BatchPriceCreateOrConnectWithoutProductInput = {
    where: BatchPriceWhereUniqueInput
    create: XOR<BatchPriceCreateWithoutProductInput, BatchPriceUncheckedCreateWithoutProductInput>
  }

  export type BatchPriceCreateManyProductInputEnvelope = {
    data: BatchPriceCreateManyProductInput | BatchPriceCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type DateDimensionUpsertWithoutExpiring_productsInput = {
    update: XOR<DateDimensionUpdateWithoutExpiring_productsInput, DateDimensionUncheckedUpdateWithoutExpiring_productsInput>
    create: XOR<DateDimensionCreateWithoutExpiring_productsInput, DateDimensionUncheckedCreateWithoutExpiring_productsInput>
    where?: DateDimensionWhereInput
  }

  export type DateDimensionUpdateToOneWithWhereWithoutExpiring_productsInput = {
    where?: DateDimensionWhereInput
    data: XOR<DateDimensionUpdateWithoutExpiring_productsInput, DateDimensionUncheckedUpdateWithoutExpiring_productsInput>
  }

  export type DateDimensionUpdateWithoutExpiring_productsInput = {
    full_date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    product_revenues?: ProductRevenueFactUpdateManyWithoutDateNestedInput
    category_revenues?: CategoryRevenueFactUpdateManyWithoutDateNestedInput
    batch_prices?: BatchPriceUpdateManyWithoutDateNestedInput
  }

  export type DateDimensionUncheckedUpdateWithoutExpiring_productsInput = {
    date_id?: IntFieldUpdateOperationsInput | number
    full_date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    product_revenues?: ProductRevenueFactUncheckedUpdateManyWithoutDateNestedInput
    category_revenues?: CategoryRevenueFactUncheckedUpdateManyWithoutDateNestedInput
    batch_prices?: BatchPriceUncheckedUpdateManyWithoutDateNestedInput
  }

  export type CategoryDimensionUpsertWithoutProductsInput = {
    update: XOR<CategoryDimensionUpdateWithoutProductsInput, CategoryDimensionUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryDimensionCreateWithoutProductsInput, CategoryDimensionUncheckedCreateWithoutProductsInput>
    where?: CategoryDimensionWhereInput
  }

  export type CategoryDimensionUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryDimensionWhereInput
    data: XOR<CategoryDimensionUpdateWithoutProductsInput, CategoryDimensionUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryDimensionUpdateWithoutProductsInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    has_expiry_date?: BoolFieldUpdateOperationsInput | boolean
    category_revenues?: CategoryRevenueFactUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryDimensionUncheckedUpdateWithoutProductsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    has_expiry_date?: BoolFieldUpdateOperationsInput | boolean
    category_revenues?: CategoryRevenueFactUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductRevenueFactUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductRevenueFactWhereUniqueInput
    update: XOR<ProductRevenueFactUpdateWithoutProductInput, ProductRevenueFactUncheckedUpdateWithoutProductInput>
    create: XOR<ProductRevenueFactCreateWithoutProductInput, ProductRevenueFactUncheckedCreateWithoutProductInput>
  }

  export type ProductRevenueFactUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductRevenueFactWhereUniqueInput
    data: XOR<ProductRevenueFactUpdateWithoutProductInput, ProductRevenueFactUncheckedUpdateWithoutProductInput>
  }

  export type ProductRevenueFactUpdateManyWithWhereWithoutProductInput = {
    where: ProductRevenueFactScalarWhereInput
    data: XOR<ProductRevenueFactUpdateManyMutationInput, ProductRevenueFactUncheckedUpdateManyWithoutProductInput>
  }

  export type BatchPriceUpsertWithWhereUniqueWithoutProductInput = {
    where: BatchPriceWhereUniqueInput
    update: XOR<BatchPriceUpdateWithoutProductInput, BatchPriceUncheckedUpdateWithoutProductInput>
    create: XOR<BatchPriceCreateWithoutProductInput, BatchPriceUncheckedCreateWithoutProductInput>
  }

  export type BatchPriceUpdateWithWhereUniqueWithoutProductInput = {
    where: BatchPriceWhereUniqueInput
    data: XOR<BatchPriceUpdateWithoutProductInput, BatchPriceUncheckedUpdateWithoutProductInput>
  }

  export type BatchPriceUpdateManyWithWhereWithoutProductInput = {
    where: BatchPriceScalarWhereInput
    data: XOR<BatchPriceUpdateManyMutationInput, BatchPriceUncheckedUpdateManyWithoutProductInput>
  }

  export type DateDimensionCreateWithoutProduct_revenuesInput = {
    full_date: Date | string
    day: number
    week: number
    month: number
    quarter: number
    year: number
    category_revenues?: CategoryRevenueFactCreateNestedManyWithoutDateInput
    batch_prices?: BatchPriceCreateNestedManyWithoutDateInput
    expiring_products?: ProductDimensionCreateNestedManyWithoutNext_expiry_dateInput
  }

  export type DateDimensionUncheckedCreateWithoutProduct_revenuesInput = {
    date_id?: number
    full_date: Date | string
    day: number
    week: number
    month: number
    quarter: number
    year: number
    category_revenues?: CategoryRevenueFactUncheckedCreateNestedManyWithoutDateInput
    batch_prices?: BatchPriceUncheckedCreateNestedManyWithoutDateInput
    expiring_products?: ProductDimensionUncheckedCreateNestedManyWithoutNext_expiry_dateInput
  }

  export type DateDimensionCreateOrConnectWithoutProduct_revenuesInput = {
    where: DateDimensionWhereUniqueInput
    create: XOR<DateDimensionCreateWithoutProduct_revenuesInput, DateDimensionUncheckedCreateWithoutProduct_revenuesInput>
  }

  export type BusinessDimensionCreateWithoutProduct_revenuesInput = {
    business_name: string
    category_revenues?: CategoryRevenueFactCreateNestedManyWithoutBusinessInput
    product_prices?: BatchPriceCreateNestedManyWithoutBusinessInput
  }

  export type BusinessDimensionUncheckedCreateWithoutProduct_revenuesInput = {
    business_id?: number
    business_name: string
    category_revenues?: CategoryRevenueFactUncheckedCreateNestedManyWithoutBusinessInput
    product_prices?: BatchPriceUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessDimensionCreateOrConnectWithoutProduct_revenuesInput = {
    where: BusinessDimensionWhereUniqueInput
    create: XOR<BusinessDimensionCreateWithoutProduct_revenuesInput, BusinessDimensionUncheckedCreateWithoutProduct_revenuesInput>
  }

  export type ProductDimensionCreateWithoutProduct_revenuesInput = {
    name: string
    next_expiry_date?: DateDimensionCreateNestedOneWithoutExpiring_productsInput
    CategoryDimension: CategoryDimensionCreateNestedOneWithoutProductsInput
    prices?: BatchPriceCreateNestedManyWithoutProductInput
  }

  export type ProductDimensionUncheckedCreateWithoutProduct_revenuesInput = {
    product_id?: number
    name: string
    category_id: number
    next_expiry_date_id?: number | null
    prices?: BatchPriceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductDimensionCreateOrConnectWithoutProduct_revenuesInput = {
    where: ProductDimensionWhereUniqueInput
    create: XOR<ProductDimensionCreateWithoutProduct_revenuesInput, ProductDimensionUncheckedCreateWithoutProduct_revenuesInput>
  }

  export type DateDimensionUpsertWithoutProduct_revenuesInput = {
    update: XOR<DateDimensionUpdateWithoutProduct_revenuesInput, DateDimensionUncheckedUpdateWithoutProduct_revenuesInput>
    create: XOR<DateDimensionCreateWithoutProduct_revenuesInput, DateDimensionUncheckedCreateWithoutProduct_revenuesInput>
    where?: DateDimensionWhereInput
  }

  export type DateDimensionUpdateToOneWithWhereWithoutProduct_revenuesInput = {
    where?: DateDimensionWhereInput
    data: XOR<DateDimensionUpdateWithoutProduct_revenuesInput, DateDimensionUncheckedUpdateWithoutProduct_revenuesInput>
  }

  export type DateDimensionUpdateWithoutProduct_revenuesInput = {
    full_date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    category_revenues?: CategoryRevenueFactUpdateManyWithoutDateNestedInput
    batch_prices?: BatchPriceUpdateManyWithoutDateNestedInput
    expiring_products?: ProductDimensionUpdateManyWithoutNext_expiry_dateNestedInput
  }

  export type DateDimensionUncheckedUpdateWithoutProduct_revenuesInput = {
    date_id?: IntFieldUpdateOperationsInput | number
    full_date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    category_revenues?: CategoryRevenueFactUncheckedUpdateManyWithoutDateNestedInput
    batch_prices?: BatchPriceUncheckedUpdateManyWithoutDateNestedInput
    expiring_products?: ProductDimensionUncheckedUpdateManyWithoutNext_expiry_dateNestedInput
  }

  export type BusinessDimensionUpsertWithoutProduct_revenuesInput = {
    update: XOR<BusinessDimensionUpdateWithoutProduct_revenuesInput, BusinessDimensionUncheckedUpdateWithoutProduct_revenuesInput>
    create: XOR<BusinessDimensionCreateWithoutProduct_revenuesInput, BusinessDimensionUncheckedCreateWithoutProduct_revenuesInput>
    where?: BusinessDimensionWhereInput
  }

  export type BusinessDimensionUpdateToOneWithWhereWithoutProduct_revenuesInput = {
    where?: BusinessDimensionWhereInput
    data: XOR<BusinessDimensionUpdateWithoutProduct_revenuesInput, BusinessDimensionUncheckedUpdateWithoutProduct_revenuesInput>
  }

  export type BusinessDimensionUpdateWithoutProduct_revenuesInput = {
    business_name?: StringFieldUpdateOperationsInput | string
    category_revenues?: CategoryRevenueFactUpdateManyWithoutBusinessNestedInput
    product_prices?: BatchPriceUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessDimensionUncheckedUpdateWithoutProduct_revenuesInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    business_name?: StringFieldUpdateOperationsInput | string
    category_revenues?: CategoryRevenueFactUncheckedUpdateManyWithoutBusinessNestedInput
    product_prices?: BatchPriceUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type ProductDimensionUpsertWithoutProduct_revenuesInput = {
    update: XOR<ProductDimensionUpdateWithoutProduct_revenuesInput, ProductDimensionUncheckedUpdateWithoutProduct_revenuesInput>
    create: XOR<ProductDimensionCreateWithoutProduct_revenuesInput, ProductDimensionUncheckedCreateWithoutProduct_revenuesInput>
    where?: ProductDimensionWhereInput
  }

  export type ProductDimensionUpdateToOneWithWhereWithoutProduct_revenuesInput = {
    where?: ProductDimensionWhereInput
    data: XOR<ProductDimensionUpdateWithoutProduct_revenuesInput, ProductDimensionUncheckedUpdateWithoutProduct_revenuesInput>
  }

  export type ProductDimensionUpdateWithoutProduct_revenuesInput = {
    name?: StringFieldUpdateOperationsInput | string
    next_expiry_date?: DateDimensionUpdateOneWithoutExpiring_productsNestedInput
    CategoryDimension?: CategoryDimensionUpdateOneRequiredWithoutProductsNestedInput
    prices?: BatchPriceUpdateManyWithoutProductNestedInput
  }

  export type ProductDimensionUncheckedUpdateWithoutProduct_revenuesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    next_expiry_date_id?: NullableIntFieldUpdateOperationsInput | number | null
    prices?: BatchPriceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type DateDimensionCreateWithoutCategory_revenuesInput = {
    full_date: Date | string
    day: number
    week: number
    month: number
    quarter: number
    year: number
    product_revenues?: ProductRevenueFactCreateNestedManyWithoutDateInput
    batch_prices?: BatchPriceCreateNestedManyWithoutDateInput
    expiring_products?: ProductDimensionCreateNestedManyWithoutNext_expiry_dateInput
  }

  export type DateDimensionUncheckedCreateWithoutCategory_revenuesInput = {
    date_id?: number
    full_date: Date | string
    day: number
    week: number
    month: number
    quarter: number
    year: number
    product_revenues?: ProductRevenueFactUncheckedCreateNestedManyWithoutDateInput
    batch_prices?: BatchPriceUncheckedCreateNestedManyWithoutDateInput
    expiring_products?: ProductDimensionUncheckedCreateNestedManyWithoutNext_expiry_dateInput
  }

  export type DateDimensionCreateOrConnectWithoutCategory_revenuesInput = {
    where: DateDimensionWhereUniqueInput
    create: XOR<DateDimensionCreateWithoutCategory_revenuesInput, DateDimensionUncheckedCreateWithoutCategory_revenuesInput>
  }

  export type BusinessDimensionCreateWithoutCategory_revenuesInput = {
    business_name: string
    product_revenues?: ProductRevenueFactCreateNestedManyWithoutBusinessInput
    product_prices?: BatchPriceCreateNestedManyWithoutBusinessInput
  }

  export type BusinessDimensionUncheckedCreateWithoutCategory_revenuesInput = {
    business_id?: number
    business_name: string
    product_revenues?: ProductRevenueFactUncheckedCreateNestedManyWithoutBusinessInput
    product_prices?: BatchPriceUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessDimensionCreateOrConnectWithoutCategory_revenuesInput = {
    where: BusinessDimensionWhereUniqueInput
    create: XOR<BusinessDimensionCreateWithoutCategory_revenuesInput, BusinessDimensionUncheckedCreateWithoutCategory_revenuesInput>
  }

  export type CategoryDimensionCreateWithoutCategory_revenuesInput = {
    category_name: string
    has_expiry_date?: boolean
    products?: ProductDimensionCreateNestedManyWithoutCategoryDimensionInput
  }

  export type CategoryDimensionUncheckedCreateWithoutCategory_revenuesInput = {
    category_id?: number
    category_name: string
    has_expiry_date?: boolean
    products?: ProductDimensionUncheckedCreateNestedManyWithoutCategoryDimensionInput
  }

  export type CategoryDimensionCreateOrConnectWithoutCategory_revenuesInput = {
    where: CategoryDimensionWhereUniqueInput
    create: XOR<CategoryDimensionCreateWithoutCategory_revenuesInput, CategoryDimensionUncheckedCreateWithoutCategory_revenuesInput>
  }

  export type DateDimensionUpsertWithoutCategory_revenuesInput = {
    update: XOR<DateDimensionUpdateWithoutCategory_revenuesInput, DateDimensionUncheckedUpdateWithoutCategory_revenuesInput>
    create: XOR<DateDimensionCreateWithoutCategory_revenuesInput, DateDimensionUncheckedCreateWithoutCategory_revenuesInput>
    where?: DateDimensionWhereInput
  }

  export type DateDimensionUpdateToOneWithWhereWithoutCategory_revenuesInput = {
    where?: DateDimensionWhereInput
    data: XOR<DateDimensionUpdateWithoutCategory_revenuesInput, DateDimensionUncheckedUpdateWithoutCategory_revenuesInput>
  }

  export type DateDimensionUpdateWithoutCategory_revenuesInput = {
    full_date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    product_revenues?: ProductRevenueFactUpdateManyWithoutDateNestedInput
    batch_prices?: BatchPriceUpdateManyWithoutDateNestedInput
    expiring_products?: ProductDimensionUpdateManyWithoutNext_expiry_dateNestedInput
  }

  export type DateDimensionUncheckedUpdateWithoutCategory_revenuesInput = {
    date_id?: IntFieldUpdateOperationsInput | number
    full_date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    product_revenues?: ProductRevenueFactUncheckedUpdateManyWithoutDateNestedInput
    batch_prices?: BatchPriceUncheckedUpdateManyWithoutDateNestedInput
    expiring_products?: ProductDimensionUncheckedUpdateManyWithoutNext_expiry_dateNestedInput
  }

  export type BusinessDimensionUpsertWithoutCategory_revenuesInput = {
    update: XOR<BusinessDimensionUpdateWithoutCategory_revenuesInput, BusinessDimensionUncheckedUpdateWithoutCategory_revenuesInput>
    create: XOR<BusinessDimensionCreateWithoutCategory_revenuesInput, BusinessDimensionUncheckedCreateWithoutCategory_revenuesInput>
    where?: BusinessDimensionWhereInput
  }

  export type BusinessDimensionUpdateToOneWithWhereWithoutCategory_revenuesInput = {
    where?: BusinessDimensionWhereInput
    data: XOR<BusinessDimensionUpdateWithoutCategory_revenuesInput, BusinessDimensionUncheckedUpdateWithoutCategory_revenuesInput>
  }

  export type BusinessDimensionUpdateWithoutCategory_revenuesInput = {
    business_name?: StringFieldUpdateOperationsInput | string
    product_revenues?: ProductRevenueFactUpdateManyWithoutBusinessNestedInput
    product_prices?: BatchPriceUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessDimensionUncheckedUpdateWithoutCategory_revenuesInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    business_name?: StringFieldUpdateOperationsInput | string
    product_revenues?: ProductRevenueFactUncheckedUpdateManyWithoutBusinessNestedInput
    product_prices?: BatchPriceUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type CategoryDimensionUpsertWithoutCategory_revenuesInput = {
    update: XOR<CategoryDimensionUpdateWithoutCategory_revenuesInput, CategoryDimensionUncheckedUpdateWithoutCategory_revenuesInput>
    create: XOR<CategoryDimensionCreateWithoutCategory_revenuesInput, CategoryDimensionUncheckedCreateWithoutCategory_revenuesInput>
    where?: CategoryDimensionWhereInput
  }

  export type CategoryDimensionUpdateToOneWithWhereWithoutCategory_revenuesInput = {
    where?: CategoryDimensionWhereInput
    data: XOR<CategoryDimensionUpdateWithoutCategory_revenuesInput, CategoryDimensionUncheckedUpdateWithoutCategory_revenuesInput>
  }

  export type CategoryDimensionUpdateWithoutCategory_revenuesInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    has_expiry_date?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductDimensionUpdateManyWithoutCategoryDimensionNestedInput
  }

  export type CategoryDimensionUncheckedUpdateWithoutCategory_revenuesInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    has_expiry_date?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductDimensionUncheckedUpdateManyWithoutCategoryDimensionNestedInput
  }

  export type DateDimensionCreateWithoutBatch_pricesInput = {
    full_date: Date | string
    day: number
    week: number
    month: number
    quarter: number
    year: number
    product_revenues?: ProductRevenueFactCreateNestedManyWithoutDateInput
    category_revenues?: CategoryRevenueFactCreateNestedManyWithoutDateInput
    expiring_products?: ProductDimensionCreateNestedManyWithoutNext_expiry_dateInput
  }

  export type DateDimensionUncheckedCreateWithoutBatch_pricesInput = {
    date_id?: number
    full_date: Date | string
    day: number
    week: number
    month: number
    quarter: number
    year: number
    product_revenues?: ProductRevenueFactUncheckedCreateNestedManyWithoutDateInput
    category_revenues?: CategoryRevenueFactUncheckedCreateNestedManyWithoutDateInput
    expiring_products?: ProductDimensionUncheckedCreateNestedManyWithoutNext_expiry_dateInput
  }

  export type DateDimensionCreateOrConnectWithoutBatch_pricesInput = {
    where: DateDimensionWhereUniqueInput
    create: XOR<DateDimensionCreateWithoutBatch_pricesInput, DateDimensionUncheckedCreateWithoutBatch_pricesInput>
  }

  export type BusinessDimensionCreateWithoutProduct_pricesInput = {
    business_name: string
    product_revenues?: ProductRevenueFactCreateNestedManyWithoutBusinessInput
    category_revenues?: CategoryRevenueFactCreateNestedManyWithoutBusinessInput
  }

  export type BusinessDimensionUncheckedCreateWithoutProduct_pricesInput = {
    business_id?: number
    business_name: string
    product_revenues?: ProductRevenueFactUncheckedCreateNestedManyWithoutBusinessInput
    category_revenues?: CategoryRevenueFactUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessDimensionCreateOrConnectWithoutProduct_pricesInput = {
    where: BusinessDimensionWhereUniqueInput
    create: XOR<BusinessDimensionCreateWithoutProduct_pricesInput, BusinessDimensionUncheckedCreateWithoutProduct_pricesInput>
  }

  export type ProductDimensionCreateWithoutPricesInput = {
    name: string
    next_expiry_date?: DateDimensionCreateNestedOneWithoutExpiring_productsInput
    CategoryDimension: CategoryDimensionCreateNestedOneWithoutProductsInput
    product_revenues?: ProductRevenueFactCreateNestedManyWithoutProductInput
  }

  export type ProductDimensionUncheckedCreateWithoutPricesInput = {
    product_id?: number
    name: string
    category_id: number
    next_expiry_date_id?: number | null
    product_revenues?: ProductRevenueFactUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductDimensionCreateOrConnectWithoutPricesInput = {
    where: ProductDimensionWhereUniqueInput
    create: XOR<ProductDimensionCreateWithoutPricesInput, ProductDimensionUncheckedCreateWithoutPricesInput>
  }

  export type DateDimensionUpsertWithoutBatch_pricesInput = {
    update: XOR<DateDimensionUpdateWithoutBatch_pricesInput, DateDimensionUncheckedUpdateWithoutBatch_pricesInput>
    create: XOR<DateDimensionCreateWithoutBatch_pricesInput, DateDimensionUncheckedCreateWithoutBatch_pricesInput>
    where?: DateDimensionWhereInput
  }

  export type DateDimensionUpdateToOneWithWhereWithoutBatch_pricesInput = {
    where?: DateDimensionWhereInput
    data: XOR<DateDimensionUpdateWithoutBatch_pricesInput, DateDimensionUncheckedUpdateWithoutBatch_pricesInput>
  }

  export type DateDimensionUpdateWithoutBatch_pricesInput = {
    full_date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    product_revenues?: ProductRevenueFactUpdateManyWithoutDateNestedInput
    category_revenues?: CategoryRevenueFactUpdateManyWithoutDateNestedInput
    expiring_products?: ProductDimensionUpdateManyWithoutNext_expiry_dateNestedInput
  }

  export type DateDimensionUncheckedUpdateWithoutBatch_pricesInput = {
    date_id?: IntFieldUpdateOperationsInput | number
    full_date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    product_revenues?: ProductRevenueFactUncheckedUpdateManyWithoutDateNestedInput
    category_revenues?: CategoryRevenueFactUncheckedUpdateManyWithoutDateNestedInput
    expiring_products?: ProductDimensionUncheckedUpdateManyWithoutNext_expiry_dateNestedInput
  }

  export type BusinessDimensionUpsertWithoutProduct_pricesInput = {
    update: XOR<BusinessDimensionUpdateWithoutProduct_pricesInput, BusinessDimensionUncheckedUpdateWithoutProduct_pricesInput>
    create: XOR<BusinessDimensionCreateWithoutProduct_pricesInput, BusinessDimensionUncheckedCreateWithoutProduct_pricesInput>
    where?: BusinessDimensionWhereInput
  }

  export type BusinessDimensionUpdateToOneWithWhereWithoutProduct_pricesInput = {
    where?: BusinessDimensionWhereInput
    data: XOR<BusinessDimensionUpdateWithoutProduct_pricesInput, BusinessDimensionUncheckedUpdateWithoutProduct_pricesInput>
  }

  export type BusinessDimensionUpdateWithoutProduct_pricesInput = {
    business_name?: StringFieldUpdateOperationsInput | string
    product_revenues?: ProductRevenueFactUpdateManyWithoutBusinessNestedInput
    category_revenues?: CategoryRevenueFactUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessDimensionUncheckedUpdateWithoutProduct_pricesInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    business_name?: StringFieldUpdateOperationsInput | string
    product_revenues?: ProductRevenueFactUncheckedUpdateManyWithoutBusinessNestedInput
    category_revenues?: CategoryRevenueFactUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type ProductDimensionUpsertWithoutPricesInput = {
    update: XOR<ProductDimensionUpdateWithoutPricesInput, ProductDimensionUncheckedUpdateWithoutPricesInput>
    create: XOR<ProductDimensionCreateWithoutPricesInput, ProductDimensionUncheckedCreateWithoutPricesInput>
    where?: ProductDimensionWhereInput
  }

  export type ProductDimensionUpdateToOneWithWhereWithoutPricesInput = {
    where?: ProductDimensionWhereInput
    data: XOR<ProductDimensionUpdateWithoutPricesInput, ProductDimensionUncheckedUpdateWithoutPricesInput>
  }

  export type ProductDimensionUpdateWithoutPricesInput = {
    name?: StringFieldUpdateOperationsInput | string
    next_expiry_date?: DateDimensionUpdateOneWithoutExpiring_productsNestedInput
    CategoryDimension?: CategoryDimensionUpdateOneRequiredWithoutProductsNestedInput
    product_revenues?: ProductRevenueFactUpdateManyWithoutProductNestedInput
  }

  export type ProductDimensionUncheckedUpdateWithoutPricesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    next_expiry_date_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_revenues?: ProductRevenueFactUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductRevenueFactCreateWithoutDateInput = {
    revenue_amount: number
    total_units_sold: number
    business: BusinessDimensionCreateNestedOneWithoutProduct_revenuesInput
    product: ProductDimensionCreateNestedOneWithoutProduct_revenuesInput
  }

  export type ProductRevenueFactUncheckedCreateWithoutDateInput = {
    product_id: number
    business_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type ProductRevenueFactCreateOrConnectWithoutDateInput = {
    where: ProductRevenueFactWhereUniqueInput
    create: XOR<ProductRevenueFactCreateWithoutDateInput, ProductRevenueFactUncheckedCreateWithoutDateInput>
  }

  export type ProductRevenueFactCreateManyDateInputEnvelope = {
    data: ProductRevenueFactCreateManyDateInput | ProductRevenueFactCreateManyDateInput[]
    skipDuplicates?: boolean
  }

  export type CategoryRevenueFactCreateWithoutDateInput = {
    revenue_amount: number
    total_units_sold: number
    business: BusinessDimensionCreateNestedOneWithoutCategory_revenuesInput
    category: CategoryDimensionCreateNestedOneWithoutCategory_revenuesInput
  }

  export type CategoryRevenueFactUncheckedCreateWithoutDateInput = {
    business_id: number
    category_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type CategoryRevenueFactCreateOrConnectWithoutDateInput = {
    where: CategoryRevenueFactWhereUniqueInput
    create: XOR<CategoryRevenueFactCreateWithoutDateInput, CategoryRevenueFactUncheckedCreateWithoutDateInput>
  }

  export type CategoryRevenueFactCreateManyDateInputEnvelope = {
    data: CategoryRevenueFactCreateManyDateInput | CategoryRevenueFactCreateManyDateInput[]
    skipDuplicates?: boolean
  }

  export type BatchPriceCreateWithoutDateInput = {
    purchase_price: number
    business: BusinessDimensionCreateNestedOneWithoutProduct_pricesInput
    product: ProductDimensionCreateNestedOneWithoutPricesInput
  }

  export type BatchPriceUncheckedCreateWithoutDateInput = {
    product_id: number
    business_id: number
    purchase_price: number
  }

  export type BatchPriceCreateOrConnectWithoutDateInput = {
    where: BatchPriceWhereUniqueInput
    create: XOR<BatchPriceCreateWithoutDateInput, BatchPriceUncheckedCreateWithoutDateInput>
  }

  export type BatchPriceCreateManyDateInputEnvelope = {
    data: BatchPriceCreateManyDateInput | BatchPriceCreateManyDateInput[]
    skipDuplicates?: boolean
  }

  export type ProductDimensionCreateWithoutNext_expiry_dateInput = {
    name: string
    CategoryDimension: CategoryDimensionCreateNestedOneWithoutProductsInput
    product_revenues?: ProductRevenueFactCreateNestedManyWithoutProductInput
    prices?: BatchPriceCreateNestedManyWithoutProductInput
  }

  export type ProductDimensionUncheckedCreateWithoutNext_expiry_dateInput = {
    product_id?: number
    name: string
    category_id: number
    product_revenues?: ProductRevenueFactUncheckedCreateNestedManyWithoutProductInput
    prices?: BatchPriceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductDimensionCreateOrConnectWithoutNext_expiry_dateInput = {
    where: ProductDimensionWhereUniqueInput
    create: XOR<ProductDimensionCreateWithoutNext_expiry_dateInput, ProductDimensionUncheckedCreateWithoutNext_expiry_dateInput>
  }

  export type ProductDimensionCreateManyNext_expiry_dateInputEnvelope = {
    data: ProductDimensionCreateManyNext_expiry_dateInput | ProductDimensionCreateManyNext_expiry_dateInput[]
    skipDuplicates?: boolean
  }

  export type ProductRevenueFactUpsertWithWhereUniqueWithoutDateInput = {
    where: ProductRevenueFactWhereUniqueInput
    update: XOR<ProductRevenueFactUpdateWithoutDateInput, ProductRevenueFactUncheckedUpdateWithoutDateInput>
    create: XOR<ProductRevenueFactCreateWithoutDateInput, ProductRevenueFactUncheckedCreateWithoutDateInput>
  }

  export type ProductRevenueFactUpdateWithWhereUniqueWithoutDateInput = {
    where: ProductRevenueFactWhereUniqueInput
    data: XOR<ProductRevenueFactUpdateWithoutDateInput, ProductRevenueFactUncheckedUpdateWithoutDateInput>
  }

  export type ProductRevenueFactUpdateManyWithWhereWithoutDateInput = {
    where: ProductRevenueFactScalarWhereInput
    data: XOR<ProductRevenueFactUpdateManyMutationInput, ProductRevenueFactUncheckedUpdateManyWithoutDateInput>
  }

  export type CategoryRevenueFactUpsertWithWhereUniqueWithoutDateInput = {
    where: CategoryRevenueFactWhereUniqueInput
    update: XOR<CategoryRevenueFactUpdateWithoutDateInput, CategoryRevenueFactUncheckedUpdateWithoutDateInput>
    create: XOR<CategoryRevenueFactCreateWithoutDateInput, CategoryRevenueFactUncheckedCreateWithoutDateInput>
  }

  export type CategoryRevenueFactUpdateWithWhereUniqueWithoutDateInput = {
    where: CategoryRevenueFactWhereUniqueInput
    data: XOR<CategoryRevenueFactUpdateWithoutDateInput, CategoryRevenueFactUncheckedUpdateWithoutDateInput>
  }

  export type CategoryRevenueFactUpdateManyWithWhereWithoutDateInput = {
    where: CategoryRevenueFactScalarWhereInput
    data: XOR<CategoryRevenueFactUpdateManyMutationInput, CategoryRevenueFactUncheckedUpdateManyWithoutDateInput>
  }

  export type BatchPriceUpsertWithWhereUniqueWithoutDateInput = {
    where: BatchPriceWhereUniqueInput
    update: XOR<BatchPriceUpdateWithoutDateInput, BatchPriceUncheckedUpdateWithoutDateInput>
    create: XOR<BatchPriceCreateWithoutDateInput, BatchPriceUncheckedCreateWithoutDateInput>
  }

  export type BatchPriceUpdateWithWhereUniqueWithoutDateInput = {
    where: BatchPriceWhereUniqueInput
    data: XOR<BatchPriceUpdateWithoutDateInput, BatchPriceUncheckedUpdateWithoutDateInput>
  }

  export type BatchPriceUpdateManyWithWhereWithoutDateInput = {
    where: BatchPriceScalarWhereInput
    data: XOR<BatchPriceUpdateManyMutationInput, BatchPriceUncheckedUpdateManyWithoutDateInput>
  }

  export type ProductDimensionUpsertWithWhereUniqueWithoutNext_expiry_dateInput = {
    where: ProductDimensionWhereUniqueInput
    update: XOR<ProductDimensionUpdateWithoutNext_expiry_dateInput, ProductDimensionUncheckedUpdateWithoutNext_expiry_dateInput>
    create: XOR<ProductDimensionCreateWithoutNext_expiry_dateInput, ProductDimensionUncheckedCreateWithoutNext_expiry_dateInput>
  }

  export type ProductDimensionUpdateWithWhereUniqueWithoutNext_expiry_dateInput = {
    where: ProductDimensionWhereUniqueInput
    data: XOR<ProductDimensionUpdateWithoutNext_expiry_dateInput, ProductDimensionUncheckedUpdateWithoutNext_expiry_dateInput>
  }

  export type ProductDimensionUpdateManyWithWhereWithoutNext_expiry_dateInput = {
    where: ProductDimensionScalarWhereInput
    data: XOR<ProductDimensionUpdateManyMutationInput, ProductDimensionUncheckedUpdateManyWithoutNext_expiry_dateInput>
  }

  export type ProductRevenueFactCreateManyBusinessInput = {
    product_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type CategoryRevenueFactCreateManyBusinessInput = {
    category_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type BatchPriceCreateManyBusinessInput = {
    product_id: number
    date_id: number
    purchase_price: number
  }

  export type ProductRevenueFactUpdateWithoutBusinessInput = {
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
    date?: DateDimensionUpdateOneRequiredWithoutProduct_revenuesNestedInput
    product?: ProductDimensionUpdateOneRequiredWithoutProduct_revenuesNestedInput
  }

  export type ProductRevenueFactUncheckedUpdateWithoutBusinessInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type ProductRevenueFactUncheckedUpdateManyWithoutBusinessInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryRevenueFactUpdateWithoutBusinessInput = {
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
    date?: DateDimensionUpdateOneRequiredWithoutCategory_revenuesNestedInput
    category?: CategoryDimensionUpdateOneRequiredWithoutCategory_revenuesNestedInput
  }

  export type CategoryRevenueFactUncheckedUpdateWithoutBusinessInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryRevenueFactUncheckedUpdateManyWithoutBusinessInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type BatchPriceUpdateWithoutBusinessInput = {
    purchase_price?: FloatFieldUpdateOperationsInput | number
    date?: DateDimensionUpdateOneRequiredWithoutBatch_pricesNestedInput
    product?: ProductDimensionUpdateOneRequiredWithoutPricesNestedInput
  }

  export type BatchPriceUncheckedUpdateWithoutBusinessInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
  }

  export type BatchPriceUncheckedUpdateManyWithoutBusinessInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductDimensionCreateManyCategoryDimensionInput = {
    product_id?: number
    name: string
    next_expiry_date_id?: number | null
  }

  export type CategoryRevenueFactCreateManyCategoryInput = {
    business_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type ProductDimensionUpdateWithoutCategoryDimensionInput = {
    name?: StringFieldUpdateOperationsInput | string
    next_expiry_date?: DateDimensionUpdateOneWithoutExpiring_productsNestedInput
    product_revenues?: ProductRevenueFactUpdateManyWithoutProductNestedInput
    prices?: BatchPriceUpdateManyWithoutProductNestedInput
  }

  export type ProductDimensionUncheckedUpdateWithoutCategoryDimensionInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    next_expiry_date_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_revenues?: ProductRevenueFactUncheckedUpdateManyWithoutProductNestedInput
    prices?: BatchPriceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductDimensionUncheckedUpdateManyWithoutCategoryDimensionInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    next_expiry_date_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryRevenueFactUpdateWithoutCategoryInput = {
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
    date?: DateDimensionUpdateOneRequiredWithoutCategory_revenuesNestedInput
    business?: BusinessDimensionUpdateOneRequiredWithoutCategory_revenuesNestedInput
  }

  export type CategoryRevenueFactUncheckedUpdateWithoutCategoryInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryRevenueFactUncheckedUpdateManyWithoutCategoryInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type ProductRevenueFactCreateManyProductInput = {
    business_id: number
    date_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type BatchPriceCreateManyProductInput = {
    business_id: number
    date_id: number
    purchase_price: number
  }

  export type ProductRevenueFactUpdateWithoutProductInput = {
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
    date?: DateDimensionUpdateOneRequiredWithoutProduct_revenuesNestedInput
    business?: BusinessDimensionUpdateOneRequiredWithoutProduct_revenuesNestedInput
  }

  export type ProductRevenueFactUncheckedUpdateWithoutProductInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type ProductRevenueFactUncheckedUpdateManyWithoutProductInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type BatchPriceUpdateWithoutProductInput = {
    purchase_price?: FloatFieldUpdateOperationsInput | number
    date?: DateDimensionUpdateOneRequiredWithoutBatch_pricesNestedInput
    business?: BusinessDimensionUpdateOneRequiredWithoutProduct_pricesNestedInput
  }

  export type BatchPriceUncheckedUpdateWithoutProductInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
  }

  export type BatchPriceUncheckedUpdateManyWithoutProductInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    date_id?: IntFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductRevenueFactCreateManyDateInput = {
    product_id: number
    business_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type CategoryRevenueFactCreateManyDateInput = {
    business_id: number
    category_id: number
    revenue_amount: number
    total_units_sold: number
  }

  export type BatchPriceCreateManyDateInput = {
    product_id: number
    business_id: number
    purchase_price: number
  }

  export type ProductDimensionCreateManyNext_expiry_dateInput = {
    product_id?: number
    name: string
    category_id: number
  }

  export type ProductRevenueFactUpdateWithoutDateInput = {
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
    business?: BusinessDimensionUpdateOneRequiredWithoutProduct_revenuesNestedInput
    product?: ProductDimensionUpdateOneRequiredWithoutProduct_revenuesNestedInput
  }

  export type ProductRevenueFactUncheckedUpdateWithoutDateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    business_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type ProductRevenueFactUncheckedUpdateManyWithoutDateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    business_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryRevenueFactUpdateWithoutDateInput = {
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
    business?: BusinessDimensionUpdateOneRequiredWithoutCategory_revenuesNestedInput
    category?: CategoryDimensionUpdateOneRequiredWithoutCategory_revenuesNestedInput
  }

  export type CategoryRevenueFactUncheckedUpdateWithoutDateInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryRevenueFactUncheckedUpdateManyWithoutDateInput = {
    business_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    revenue_amount?: FloatFieldUpdateOperationsInput | number
    total_units_sold?: IntFieldUpdateOperationsInput | number
  }

  export type BatchPriceUpdateWithoutDateInput = {
    purchase_price?: FloatFieldUpdateOperationsInput | number
    business?: BusinessDimensionUpdateOneRequiredWithoutProduct_pricesNestedInput
    product?: ProductDimensionUpdateOneRequiredWithoutPricesNestedInput
  }

  export type BatchPriceUncheckedUpdateWithoutDateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    business_id?: IntFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
  }

  export type BatchPriceUncheckedUpdateManyWithoutDateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    business_id?: IntFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductDimensionUpdateWithoutNext_expiry_dateInput = {
    name?: StringFieldUpdateOperationsInput | string
    CategoryDimension?: CategoryDimensionUpdateOneRequiredWithoutProductsNestedInput
    product_revenues?: ProductRevenueFactUpdateManyWithoutProductNestedInput
    prices?: BatchPriceUpdateManyWithoutProductNestedInput
  }

  export type ProductDimensionUncheckedUpdateWithoutNext_expiry_dateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    product_revenues?: ProductRevenueFactUncheckedUpdateManyWithoutProductNestedInput
    prices?: BatchPriceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductDimensionUncheckedUpdateManyWithoutNext_expiry_dateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
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