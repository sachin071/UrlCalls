import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

type url = `http://${string}:${number}`

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  url : url = "http://192.168.1.157:2000"
  socketUrl : url = "http://192.168.1.157:20000"
  @Get()
  getHello() {
    return {
      url:this.url,
      socketUrl:this.socketUrl
    };
  }

  @Post()
  setUrl(@Body() Data:{url:url , socketurl:url}){
    this.url = Data.url
    this.socketUrl = Data.socketurl
    return {
      message:'Url Changed'
    }
  }
}
