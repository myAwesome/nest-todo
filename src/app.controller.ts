import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import {ListAllEntities, TodoDto} from "./dto";

@Controller('todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() list(@Query() query: ListAllEntities): string {
    return this.appService.list();
  }

  @Post()
  create(@Body() dto: TodoDto): string {
    return this.appService.create(dto);
  }

  @Get(':id')
  get(@Param() params): string {
    return this.appService.get(params.id);
  }

  @Put(':id')
  update(@Param() params, @Body() dto: TodoDto): string {
    return this.appService.update(params.id, dto);
  }

  @Delete(':id')
  delete(@Param() params): string {
    return this.appService.delete(params.id);
  }
}
