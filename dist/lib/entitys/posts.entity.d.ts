import { Users } from './users.entity';
export declare class Posts {
    id: number;
    title: string;
    content: string;
    photoUrls: string[];
    likeCount: number;
    comments: {
        user: string;
        comment: string;
        date: string;
    }[];
    author: Users;
    createdAt: Date;
    updatedAt: Date;
}
