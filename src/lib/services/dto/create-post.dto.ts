import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsArray()
  photoUrls?: string[];

  @IsOptional()
  likeCount?: number;
}
