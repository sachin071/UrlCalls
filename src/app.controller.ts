import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

type url = `http://${string}:${number}`

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  url : url = "http://192.168.1.157:2000"
  @Get()
  getHello() {
    return {
      url:this.url  
    };
  }

  @Post()
  setUrl(@Body() Data:{url:url}){
    this.url = Data.url
    return {
      message:'Url Changed'
    }
  }
}
