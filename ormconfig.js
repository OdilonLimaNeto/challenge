const config = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT || 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    logging: true,
    synchronize: false,
    migrationsRun: false,
    entities: [
      './src/infra/db/postgres/modules/**/*-entity.ts'
    ],
    migrations: [
      './src/infra/db/postgres/migrations/*.ts'
    ],
    cli: {
      migrationsDir: './src/infra/db/postgres/migrations'
    }
  }
]

module.exports = config
