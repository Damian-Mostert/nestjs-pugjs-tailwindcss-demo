import { Request, Response } from 'express';
export declare class PagesController {
    Home(req: Request, res: Response): void;
    Register(req: Request, res: Response): void;
    Login(req: Request, res: Response): void;
    PostPage(req: Request, res: Response): void;
    Settings(req: Request, res: Response): void;
    Profile(req: Request, res: Response, params: {
        id: string;
    }): void;
    notFound(req: Request, res: Response): void;
}
