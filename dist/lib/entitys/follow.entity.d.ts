import { Users } from './users.entity';
export declare class Follow {
    id: number;
    follower: Users;
    following: Users;
    createdAt: Date;
}
