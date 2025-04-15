import { Repository } from 'typeorm';
import { Posts } from '../entitys/posts.entity';
import { Users } from '../entitys/users.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostService {
    private readonly postsRepository;
    private readonly usersRepository;
    constructor(postsRepository: Repository<Posts>, usersRepository: Repository<Users>);
    feedByUserId(userId: number): Promise<Posts[]>;
    create(createPostDto: CreatePostDto, userId: number): Promise<Posts>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<Posts>;
    remove(id: number): Promise<void>;
    findAll(): Promise<Posts[]>;
    findOne(id: number): Promise<Posts>;
    findByAuthor(authorId: number): Promise<Posts[]>;
}
