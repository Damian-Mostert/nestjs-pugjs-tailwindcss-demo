import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from '../entitys/posts.entity';
import { Users } from '../entitys/users.entity'; // Assuming Users entity exists
import { CreatePostDto } from './dto/create-post.dto'; // CreatePostDto and UpdatePostDto
import { UpdatePostDto } from './dto/update-post.dto'; // CreatePostDto and UpdatePostDto

@Injectable()
export class PostService {
	constructor(
		@InjectRepository(Posts)
		private readonly postsRepository: Repository<Posts>,
		@InjectRepository(Users)
		private readonly usersRepository: Repository<Users>,
	) {}
    // Feed based on user_id with addictive algorithm
    async feedByUserId(userId: number): Promise<Posts[]> {
        // 1. Get current user
        const user = await this.usersRepository.findOne({
        where: { id: userId },
        relations: ['following'], // Assuming a `following` relation exists
        });
    
        if (!user) throw new Error('User not found');
    
        // 2. Collect user + followed user IDs
        const followedIds = user.following?.map(f => f.id) || [];
        const feedUserIds = [userId, ...followedIds];
    
        // 3. Get posts by user or followed users
        let posts:any = await this.postsRepository.find({
        where: feedUserIds.map(id => ({ author: { id } })),
        relations: ['author'],
        order: { createdAt: 'DESC' },
        });
    
        // 4. Add engagement logic (likes and comments weight)
        posts = posts.map(post => {
        const score = 
            (post.likeCount * 2) +
            (post.comments?.length || 0) * 3 +
            (1 / (Math.abs(+new Date() - +new Date(post.createdAt)) / (1000 * 60 * 60) + 1)); // freshness
    
        return { ...post, _score: score + Math.random() * 0.5 }; // Add a little randomness
        });
    
        // 5. Sort by score
        posts.sort((a: any, b: any) => b._score - a._score);
    
        // 6. Remove `_score` before returning
        return posts.map(({ _score, ...post }) => post);
    }
  
	// Create a new post
	async create(createPostDto: CreatePostDto, userId: number): Promise<Posts> {
		const user = await this.usersRepository.findOne({ where: { id: userId } });

		if (!user) {
			throw new Error('User not found');
		}

		const newPost = this.postsRepository.create({
			...createPostDto,
			author: user,
		});

		return await this.postsRepository.save(newPost);
	}

	// Update a post
	async update(id: number, updatePostDto: UpdatePostDto): Promise<Posts> {
		const post = await this.postsRepository.findOne({ where: { id } });

		if (!post) {
			throw new Error('Post not found');
		}

		Object.assign(post, updatePostDto); // Update fields

		return await this.postsRepository.save(post);
	}

	// Delete a post
	async remove(id: number): Promise<void> {
		const post = await this.postsRepository.findOne({ where: { id } });

		if (!post) {
			throw new Error('Post not found');
		}

		await this.postsRepository.remove(post);
	}

	// Get all posts
	async findAll(): Promise<Posts[]> {
		return await this.postsRepository.find({ relations: ['author'] });
	}

	// Get a post by ID
	async findOne(id: number): Promise<Posts> {
		const post = await this.postsRepository.findOne({ where: { id }, relations: ['author'] });

		if (!post) {
			throw new Error('Post not found');
		}

		return post;
	}

	// Get posts by author
	async findByAuthor(authorId: number): Promise<Posts[]> {
		return await this.postsRepository.find({ where: { author: { id: authorId } }, relations: ['author'] });
	}
}
