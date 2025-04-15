import { Settings } from './settings.entity';
import { Posts } from './posts.entity';
import { Follow } from './follow.entity';
export declare class Users {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    settings: Settings;
    posts: Posts[];
    following: Follow[];
    followers: Follow[];
}
