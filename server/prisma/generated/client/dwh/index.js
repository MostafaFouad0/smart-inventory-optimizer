
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.3.0
 * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
 */
Prisma.prismaVersion = {
  client: "6.3.0",
  engine: "acc0b9dd43eb689cbd20c9470515d719db10d0b0"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BusinessDimensionScalarFieldEnum = {
  business_id: 'business_id',
  business_name: 'business_name'
};

exports.Prisma.CategoryDimensionScalarFieldEnum = {
  category_id: 'category_id',
  category_name: 'category_name',
  has_expiry_date: 'has_expiry_date'
};

exports.Prisma.ProductDimensionScalarFieldEnum = {
  product_id: 'product_id',
  name: 'name',
  category_id: 'category_id',
  next_expiry_date_id: 'next_expiry_date_id'
};

exports.Prisma.ProductRevenueFactScalarFieldEnum = {
  product_id: 'product_id',
  business_id: 'business_id',
  date_id: 'date_id',
  revenue_amount: 'revenue_amount',
  total_units_sold: 'total_units_sold'
};

exports.Prisma.CategoryRevenueFactScalarFieldEnum = {
  business_id: 'business_id',
  category_id: 'category_id',
  date_id: 'date_id',
  revenue_amount: 'revenue_amount',
  total_units_sold: 'total_units_sold'
};

exports.Prisma.BatchPriceScalarFieldEnum = {
  product_id: 'product_id',
  business_id: 'business_id',
  date_id: 'date_id',
  purchase_price: 'purchase_price'
};

exports.Prisma.DateDimensionScalarFieldEnum = {
  date_id: 'date_id',
  full_date: 'full_date',
  day: 'day',
  week: 'week',
  month: 'month',
  quarter: 'quarter',
  year: 'year'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  BusinessDimension: 'BusinessDimension',
  CategoryDimension: 'CategoryDimension',
  ProductDimension: 'ProductDimension',
  ProductRevenueFact: 'ProductRevenueFact',
  CategoryRevenueFact: 'CategoryRevenueFact',
  BatchPrice: 'BatchPrice',
  DateDimension: 'DateDimension'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/mohab/Documents/Coding/Projects/smart-inventory-optimizer/server/prisma/generated/client/dwh",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/home/mohab/Documents/Coding/Projects/smart-inventory-optimizer/server/prisma/dwh/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../../dwh",
  "clientVersion": "6.3.0",
  "engineVersion": "acc0b9dd43eb689cbd20c9470515d719db10d0b0",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DWH_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "datasource db {\n  provider = \"postgresql\"\n  url      = env(\"DWH_DATABASE_URL\")\n}\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/client/dwh\"\n}\n\nmodel BusinessDimension {\n  business_id       Int                   @id @default(autoincrement())\n  business_name     String\n  product_revenues  ProductRevenueFact[]\n  category_revenues CategoryRevenueFact[]\n  product_prices    BatchPrice[]\n}\n\nmodel CategoryDimension {\n  category_id       Int                   @id @default(autoincrement())\n  category_name     String\n  has_expiry_date   Boolean               @default(false)\n  products          ProductDimension[]\n  category_revenues CategoryRevenueFact[]\n}\n\nmodel ProductDimension {\n  product_id          Int                  @id @default(autoincrement())\n  name                String\n  category_id         Int\n  next_expiry_date_id Int?\n  next_expiry_date    DateDimension?       @relation(fields: [next_expiry_date_id], references: [date_id])\n  CategoryDimension   CategoryDimension    @relation(fields: [category_id], references: [category_id])\n  product_revenues    ProductRevenueFact[]\n  prices              BatchPrice[]\n}\n\nmodel ProductRevenueFact {\n  product_id       Int\n  business_id      Int\n  date_id          Int\n  revenue_amount   Float\n  total_units_sold Int\n\n  date     DateDimension     @relation(fields: [date_id], references: [date_id])\n  business BusinessDimension @relation(fields: [business_id], references: [business_id])\n  product  ProductDimension  @relation(fields: [product_id], references: [product_id])\n\n  @@id([product_id, business_id])\n}\n\nmodel CategoryRevenueFact {\n  business_id      Int\n  category_id      Int\n  date_id          Int\n  revenue_amount   Float\n  total_units_sold Int\n\n  date     DateDimension     @relation(fields: [date_id], references: [date_id])\n  business BusinessDimension @relation(fields: [business_id], references: [business_id])\n  category CategoryDimension @relation(fields: [category_id], references: [category_id])\n\n  @@id([business_id, category_id])\n}\n\nmodel BatchPrice {\n  product_id     Int\n  business_id    Int\n  date_id        Int\n  purchase_price Float\n\n  date     DateDimension     @relation(fields: [date_id], references: [date_id])\n  business BusinessDimension @relation(fields: [business_id], references: [business_id])\n  product  ProductDimension  @relation(fields: [product_id], references: [product_id])\n\n  @@id([product_id, business_id])\n}\n\nmodel DateDimension {\n  date_id   Int      @id @default(autoincrement())\n  full_date DateTime\n  day       Int\n  week      Int\n  month     Int\n  quarter   Int\n  year      Int\n\n  product_revenues  ProductRevenueFact[]\n  category_revenues CategoryRevenueFact[]\n  batch_prices      BatchPrice[]\n  expiring_products ProductDimension[]\n}\n",
  "inlineSchemaHash": "a782f486a35cc2dc3f16fd5fdf4a30e0bc1c5fdb4750e211f2d90f22363d8a05",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client/dwh",
    "generated/client/dwh",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"BusinessDimension\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"business_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_revenues\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRevenueFact\",\"nativeType\":null,\"relationName\":\"BusinessDimensionToProductRevenueFact\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_revenues\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CategoryRevenueFact\",\"nativeType\":null,\"relationName\":\"BusinessDimensionToCategoryRevenueFact\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_prices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BatchPrice\",\"nativeType\":null,\"relationName\":\"BatchPriceToBusinessDimension\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CategoryDimension\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"has_expiry_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductDimension\",\"nativeType\":null,\"relationName\":\"CategoryDimensionToProductDimension\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_revenues\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CategoryRevenueFact\",\"nativeType\":null,\"relationName\":\"CategoryDimensionToCategoryRevenueFact\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductDimension\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"next_expiry_date_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"next_expiry_date\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateDimension\",\"nativeType\":null,\"relationName\":\"DateDimensionToProductDimension\",\"relationFromFields\":[\"next_expiry_date_id\"],\"relationToFields\":[\"date_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CategoryDimension\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CategoryDimension\",\"nativeType\":null,\"relationName\":\"CategoryDimensionToProductDimension\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"category_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_revenues\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRevenueFact\",\"nativeType\":null,\"relationName\":\"ProductDimensionToProductRevenueFact\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BatchPrice\",\"nativeType\":null,\"relationName\":\"BatchPriceToProductDimension\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductRevenueFact\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revenue_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_units_sold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateDimension\",\"nativeType\":null,\"relationName\":\"DateDimensionToProductRevenueFact\",\"relationFromFields\":[\"date_id\"],\"relationToFields\":[\"date_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessDimension\",\"nativeType\":null,\"relationName\":\"BusinessDimensionToProductRevenueFact\",\"relationFromFields\":[\"business_id\"],\"relationToFields\":[\"business_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductDimension\",\"nativeType\":null,\"relationName\":\"ProductDimensionToProductRevenueFact\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"product_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"product_id\",\"business_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CategoryRevenueFact\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"business_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revenue_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_units_sold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateDimension\",\"nativeType\":null,\"relationName\":\"CategoryRevenueFactToDateDimension\",\"relationFromFields\":[\"date_id\"],\"relationToFields\":[\"date_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessDimension\",\"nativeType\":null,\"relationName\":\"BusinessDimensionToCategoryRevenueFact\",\"relationFromFields\":[\"business_id\"],\"relationToFields\":[\"business_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CategoryDimension\",\"nativeType\":null,\"relationName\":\"CategoryDimensionToCategoryRevenueFact\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"category_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"business_id\",\"category_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BatchPrice\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchase_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateDimension\",\"nativeType\":null,\"relationName\":\"BatchPriceToDateDimension\",\"relationFromFields\":[\"date_id\"],\"relationToFields\":[\"date_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessDimension\",\"nativeType\":null,\"relationName\":\"BatchPriceToBusinessDimension\",\"relationFromFields\":[\"business_id\"],\"relationToFields\":[\"business_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductDimension\",\"nativeType\":null,\"relationName\":\"BatchPriceToProductDimension\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"product_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"product_id\",\"business_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DateDimension\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"date_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"full_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"week\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"month\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quarter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_revenues\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRevenueFact\",\"nativeType\":null,\"relationName\":\"DateDimensionToProductRevenueFact\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_revenues\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CategoryRevenueFact\",\"nativeType\":null,\"relationName\":\"CategoryRevenueFactToDateDimension\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"batch_prices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BatchPrice\",\"nativeType\":null,\"relationName\":\"BatchPriceToDateDimension\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiring_products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductDimension\",\"nativeType\":null,\"relationName\":\"DateDimensionToProductDimension\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "prisma/generated/client/dwh/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/dwh/schema.prisma")
