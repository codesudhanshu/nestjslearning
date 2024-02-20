import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { userdatadto } from './userdata.dto';

@Controller('user')
export class UserController {
    @Get()
    getuser(){
        return { username: "Sudhanshu", password :"123456"};
    }
    @Get('posts')
    getuserpost(){
        return [{
            username: "Sudhanshu Srivastava",
            email: 'sudhanshusrivastava139@gmail.com',
            phoneNumber: 8467098755,
            post: [{
                id:1,
                title: 1,
                socialmedia: "instagram"
            },{
                id:2,
                title: 2,
                socialmedia: "Facebook"
            },{
                id:3,
                title: 3,
                socialmedia: "Linkedin"
            }]
        }]
    }

    // this is the extes odf express js 

    @Post('posting')
    createuser(@Req() request: Request, @Res() response: Response){
        console.log(request.body)
       response.send("India is Best")
    }

    // The write buliding of post request is nest js 
    
    @Post("userdata")
    createuserdata(@Body() userdata:userdatadto){
        console.log(userdata)
        return {}
    }
}
