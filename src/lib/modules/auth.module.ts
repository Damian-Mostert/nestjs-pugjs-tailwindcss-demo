import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';
import { Users } from '../entitys/users.entity'; // Your User entity
import { Posts } from '../entitys/posts.entity';
import { Settings } from '../entitys/settings.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([Users,Posts,Settings]),
    ], // Import User entity here
	providers: [AuthService],
	controllers: [AuthController],
	exports: [AuthService], // Export if you want to use AuthService in other modules
})
export class AuthModule {}
