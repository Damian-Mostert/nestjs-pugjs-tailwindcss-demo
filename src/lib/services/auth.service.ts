import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entitys/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Settings } from '../entitys/settings.entity';
import { Posts } from '../entitys/posts.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepo: Repository<Users>,
    @InjectRepository(Settings)
    private readonly settingsRepo: Repository<Settings>,
    @InjectRepository(Posts)
    private readonly postsRepo: Repository<Posts>,
  ) {}

  async createUser({
    email, password,firstName,lastName
  }:{email: string, password: string,firstName:string,lastName:string}): Promise<Users> {
    const existing = await this.userRepo.findOne({ where: { email } });
    if (existing) {
      throw new BadRequestException('User already exists with this email.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create settings for the new user
    const settings = new Settings();
    settings.profileVisibility = 'everyone';
    settings.allowMessages = true;
    settings.showOnlineStatus = true;
    // Set more default settings as needed

    // Create the user with default settings
    const user = this.userRepo.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      settings, // Automatically cascades the settings
    });

    // Save the user along with the settings
    await this.userRepo.save(user);
    return user;
  }

  async validateUser(email: string, plainPassword: string): Promise<Users | null> {
    const user = await this.userRepo.findOne({ where: { email }, relations: ['settings', 'posts'] });
    if (!user) return null;

    const isMatch = await bcrypt.compare(plainPassword, user.password);
    return isMatch ? user : null;
  }
}
