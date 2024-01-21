// import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
// export const DatabaseConfig = (): PostgresConnectionOptions => ({
//         type: 'postgres',
//         host: process.env.DB_HOST || 'localhost',
//         port: parseInt(process.env.DB_PORT) || 5432,
//         database: process.env.DB_NAME || '',
//         username: process.env.DB_USER || '',
//         password: process.env.DB_PASSWORD || '',
//         entities: [
//             "dist/**/*.entity{.ts,.js}"
//         ],
//         synchronize: Boolean(process.env.SYNCHRONIZE) || false ,
//         migrationsTableName: 'migrations', // this field will be used to create the table by name of migrations. You can name it whatever you want. But make sure to use the sensible name
//         migrations: [
//             "dist/src/migrations/*{.ts,.js}" // This is the path to the migration files created by typeorm cli. You don't have to create dist folder. When you save file, compiled files will be stored in dist folder
//         ],
//         // cli: {
//         //     migrationsDir: "src/migrations" // This path will be used by typeorm cli when we create a new migration
//         // }
//     })

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  TypeOrmDataSourceFactory,
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): PostgresConnectionOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('DB_HOST'),
      username: this.configService.get<string>('DB_USERNAME'),
      port: parseInt(this.configService.get<string>('DB_PORT')),
      database: this.configService.get<string>('DB_NAME'),
      password: this.configService.get<string>('DB_PASSWORD'),

      entities: ['dist/**/*.entity{.ts,.js}'],

      synchronize: Boolean(process.env.SYNCHRONIZE) || false,
      migrationsTableName: 'migrations', // this field will be used to create the table by name of migrations. You can name it whatever you want. But make sure to use the sensible name
      migrations: [
        'dist/src/migrations/*{.ts,.js}', // This is the path to the migration files created by typeorm cli. You don't have to create dist folder. When you save file, compiled files will be stored in dist folder
      ],
    };
  }
}
