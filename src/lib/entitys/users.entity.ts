import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Settings } from './settings.entity';
import { Posts } from './posts.entity';
import { Follow } from './follow.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @OneToOne(() => Settings, settings => settings.user, {
    cascade: true,
    eager: true,
  })
  settings: Settings;

  @OneToMany(() => Posts, post => post.author)
  posts: Posts[];

  @OneToMany(() => Follow, follow => follow.follower)
  following: Follow[];

  @OneToMany(() => Follow, follow => follow.following)
  followers: Follow[];
}
