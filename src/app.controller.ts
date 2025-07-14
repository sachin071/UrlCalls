import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';

type url = `http://${string}:${number}`

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  url : url = "http://192.168.1.157:2000"
  socketUrl : url = "http://192.168.1.157:20000"
  @Get()
  async getHello() {
    const prisma = await new PrismaClient()
    try{
      const data = await prisma.urlData.findFirstOrThrow()
    }
    catch{
      const tempdata = await prisma.urlData.create({
        data:{url:'http://192.168.1.157:2000',socketUrl:'http://192.168.1.157:20000'}
      })
      return tempdata
    }
    const data = await prisma.urlData.findFirstOrThrow()
    prisma.$disconnect()
    return {
      url:data.url,
      socketUrl:data.socketUrl
    };
  }

  @Post()
  async setUrl(@Body() Data:{url:url , socketurl:url}){


    const prisma = await new PrismaClient()
    try{
      const data = await prisma.urlData.findFirstOrThrow()
    }
    catch{
      const tempdata = await prisma.urlData.create({
        data:{url:'http://192.168.1.157:2000',socketUrl:'http://192.168.1.157:20000'}
      })
      return tempdata
    }
    const data = await prisma.urlData.findFirstOrThrow()
    const update = await prisma.urlData.update({
      where:{id:data.id},
      data:{url:Data.url , socketUrl:Data.socketurl}
    })
    return {
      message:'Url Changed'
    }
  }
}
