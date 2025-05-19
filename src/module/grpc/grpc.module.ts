import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'node:path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      /** Type of database sql schema **/
      type: 'postgres',
      /** Host Of database  **/
      host: `${process.env.DKA_PG_HOST || '127.0.0.1'}`,
      /** Port Of Database Number postgresql **/
      port: Number(process.env.DKA_PG_PORT || 5432),
      password: `${process.env.DKA_PG_PASSWORD || 'postgres'}`,
      /** Database of user name credential data connector  **/
      username: `${process.env.DKA_PG_USERNAME || 'postgres'}`,
      /**
       * Load all file entities in sub folder automatically
       */
      entities: [
        path.join(
          path.dirname(require.main.filename),
          'model/database/structure/entity/**/*.entity.{ts,js}',
        ),
      ],
      autoLoadEntities: true,
      migrationsRun: process.env.NODE_ENV !== 'production',
      migrations: [
        path.join(
          path.dirname(require.main.filename),
          'model/database/migrations/**/*.{ts,js}',
        ),
      ],
      /**
       * name of database name used this module
       */
      database: `${process.env.DKA_PG_DATABASE || 'test'}`,
      /** If Development state, use syncronize to sync scherma with live database  **/
      synchronize: process.env.NODE_ENV !== 'production',
      /**
       * add Logging system if developement state is detected
       */
      logging: false,
    }),
  ],
})
export class GrpcModule {}
