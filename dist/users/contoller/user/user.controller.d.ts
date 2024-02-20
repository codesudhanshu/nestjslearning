import { Request, Response } from 'express';
import { userdatadto } from './userdata.dto';
export declare class UserController {
    getuser(): {
        username: string;
        password: string;
    };
    getuserpost(): {
        username: string;
        email: string;
        phoneNumber: number;
        post: {
            id: number;
            title: number;
            socialmedia: string;
        }[];
    }[];
    createuser(request: Request, response: Response): void;
    createuserdata(userdata: userdatadto): {};
}
