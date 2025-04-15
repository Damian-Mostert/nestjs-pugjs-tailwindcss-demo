import { Users } from './users.entity';
export declare class Settings {
    id: number;
    user: Users;
    profileVisibility: string;
    allowMessages: boolean;
    showOnlineStatus: boolean;
    theme: string;
    emailNotifications: boolean;
    pushNotifications: boolean;
    isActive: boolean;
    isDeactivated: boolean;
    isPrivateAccount: boolean;
}
