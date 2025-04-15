import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule and ConfigService
import { AuthController } from './lib/controllers/auth.controller';
import { PagesController } from './lib/controllers/pages.controller';
import { AuthModule } from './lib/modules/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './lib/entitys/users.entity';
import { Settings } from './lib/entitys/settings.entity';
import { Posts } from './lib/entitys/posts.entity';
import { SettingsController } from './lib/controllers/settings.controller';
import { PostController } from './lib/controllers/post.controller';
import { Follow } from './lib/entitys/follow.entity';

declare global {
	namespace Express {
	  interface Request {
		session?: any;
	  }
	}
}


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config globally available
      envFilePath: '.env', // Loads variables from .env file
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      //@ts-ignore
      useFactory: async (configService: ConfigService) => ({
        type: configService.get('DB_TYPE'), // Read from environment variables
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT') || '3306', 10), // Default port if undefined
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Users,Settings,Posts,Follow], // Add your entities here
        synchronize: configService.get('DB_SYNCHRONIZE') === 'true', // Convert string to boolean
      }),
    }),
    AuthModule,
  ],
  controllers: [AuthController, PagesController,SettingsController,PostController],
  providers: [],
})
export class AppModule {}
