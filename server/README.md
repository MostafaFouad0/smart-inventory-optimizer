# Server-Side

this is the server side of Smart Inventory Optimizer Project

### Prerequisites

Before running the server, ensure you have the following installed on your machine:

- Node.js (version 20 or higher recommended)
- npm (usually comes with Node.js)
- Git (optional, for cloning the repository)

### Installation

1 - Clone the repository (if you haven't already):

```bash
$ git clone https://github.com/Mohab96/smart-inventory-optimizer.git
$ cd smart-inventory-optimizer/server
```

2 - Install dependencies:

```bash
$ npm install
```

### Environment Variables

The server requires a .env file to store sensitive configuration details. Follow these steps to set it up:
1 - Create a `.env` file in the server folder
2 - Add the required fields:

> DWH --> (data warehouse)

```.env
MAIN_DB_DIRECT_URL
MAIN_DB_URL # connection string for migrations only
DWH_DIRECT_URL
DWH_URL # connection string for migrations only
PORT
JWT_SECRET
```

### Database Setup

This project uses Prisma to manage database schemas and migrations. Below are the commands to generate, migrate, and deploy the database schemas for both the main database (`maindb`) and the data warehouse (`dwh`).

#### Generate Prisma Client

To generate the Prisma Client for the main database and data warehouse, run the following commands:

- Generate for Main Database:

```bash
$ npm run generate:maindb
```

- Generate for Data Warehouse:

```bash
$ npm run generate:dwh
```

#### Create Migrations

To create new migrations for the main database and data warehouse, use the following commands:

- Create Migration for Main Database:

```bash
$ npm run migrate:maindb
```

- Create Migration for Data Warehouse:

```bash
$ npm run migrate:dwh
```

#### Deploy Migrations

To apply the migrations to the respective databases, use the following commands:

- Deploy Migrations for Main Database:

```bash
$ npm run deploy:maindb
```

- Deploy Migrations for Data Warehouse:

```bash
$ npm run deploy:dwh
```

### Running the Server

Once the dependencies are installed and the `.env` file is configured, you can start the server using the following commands:

- Production Mode:

```bash
$ npm run prod
```

- Development Mode (with hot-reloading):

```bash
$ npm run dev
```
