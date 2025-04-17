import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/v1/user')
export class UsersController {
    constructor(
        private services: UsersService
    ){}

    @Get("")
    getProfile(){
        return this.services.getProfile()
    }

    @Post("/register")
    registerUser(){
        return this.services.userRegister()
    }

    @Post("/login")
    loginUser(){
        return this.services.userLogin()
    }
}
