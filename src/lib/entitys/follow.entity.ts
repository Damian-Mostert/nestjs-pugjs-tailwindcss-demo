import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
  } from 'typeorm';
  import { Users } from './users.entity';
  
  @Entity()
  export class Follow {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Users, user => user.following, { onDelete: 'CASCADE' })
    follower: Users;
  
    @ManyToOne(() => Users, user => user.followers, { onDelete: 'CASCADE' })
    following: Users;
  
    @CreateDateColumn()
    createdAt: Date;
  }
  