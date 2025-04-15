import { Response, Request } from 'express';
import { AuthService } from '../services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logout(req: Request, res: Response): Promise<void>;
    login(username: string, password: string, req: Request, res: Response): Promise<void>;
    register(email: string, password: string, firstName: string, lastName: string, res: Response, req: Response): Promise<void | Response<any, Record<string, any>>>;
}
