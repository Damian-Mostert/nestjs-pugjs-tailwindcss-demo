import {
	Controller,
	Get,
	Post as HttpPost,
	Put,
	Delete,
	Param,
	Body,
	Req,
	ParseIntPipe,
    Post,
} from '@nestjs/common';

@Controller('posts')
export class PostController {

   /*  // 📥 Create a new post (session-based user)
    @Post()
    async createPost(
        @Req() req: Request,
    ) {
    //@ts-expect-error
        const userId = req.session?.user?.id;
        if (!userId) throw new Error('Unauthorized');
//        return this.postService.create(createPostDto, userId);
    }

    // 📤 Update a post
    @Get('update/:id')
    async updatePost(
        @Param('id', ParseIntPipe) id: number,
        @Body() updatePostDto: UpdatePostDto,
    ) {
        return this.postService.update(id, updatePostDto);
    }

    // ❌ Delete a post
    @Get('delete/:id')
    async deletePost(@Param('id', ParseIntPipe) id: number) {
        return this.postService.remove(id);
    }

    // 🔎 Get a single post by ID
    @Get('details/:id')
    async getPostById(@Param('id', ParseIntPipe) id: number) {
        return this.postService.findOne(id);
    }

    // 🧑‍💻 Get all posts by a specific author
    @Get('author/:authorId')
    async getPostsByAuthor(@Param('authorId', ParseIntPipe) authorId: number) {
        return this.postService.findByAuthor(authorId);
    }

    // 🧠 Feed based on session user
    @Get('feed/me')
    async getFeed(@Req() req: Request) {
        //@ts-expect-error
        const userId = req.session?.user?.id;
        if (!userId) throw new Error('Unauthorized');
        return this.postService.feedByUserId(userId);
    } */
}

