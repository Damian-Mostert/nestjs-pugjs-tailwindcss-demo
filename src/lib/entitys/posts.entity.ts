import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'simple-array', nullable: true })
  photoUrls: string[]; // comma-separated list of photo URLs

  @Column({ default: 0 })
  likeCount: number;

  @Column({ type: 'json', nullable: true })
  comments: {
    user: string;
    comment: string;
    date: string;
  }[];

  @ManyToOne(() => Users, user => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn()
  author: Users;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
