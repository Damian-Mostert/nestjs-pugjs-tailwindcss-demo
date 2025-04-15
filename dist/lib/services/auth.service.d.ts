import { Users } from '../entitys/users.entity';
import { Repository } from 'typeorm';
import { Settings } from '../entitys/settings.entity';
import { Posts } from '../entitys/posts.entity';
export declare class AuthService {
    private readonly userRepo;
    private readonly settingsRepo;
    private readonly postsRepo;
    constructor(userRepo: Repository<Users>, settingsRepo: Repository<Settings>, postsRepo: Repository<Posts>);
    createUser({ email, password, firstName, lastName }: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }): Promise<Users>;
    validateUser(email: string, plainPassword: string): Promise<Users | null>;
}
