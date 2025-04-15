import { IsString, IsOptional, IsArray } from 'class-validator';

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsArray()
  photoUrls?: string[];

  @IsOptional()
  likeCount?: number;
}
