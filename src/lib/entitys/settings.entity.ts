import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Users, user => user.settings, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: Users;

  // 🔒 Privacy settings
  @Column({ default: 'everyone' })
  profileVisibility: string;

  @Column({ default: true })
  allowMessages: boolean;

  @Column({ default: true })
  showOnlineStatus: boolean;

  // ⚙️ Preferences
  @Column({ default: 'light' })
  theme: string;

  @Column({ default: true })
  emailNotifications: boolean;

  @Column({ default: true })
  pushNotifications: boolean;

  // 🧑 Account control
  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isDeactivated: boolean;

  @Column({ default: false })
  isPrivateAccount: boolean;
}
