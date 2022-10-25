import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import {ListAllEntities, TodoDto} from "./dto";
import {Task} from "./app.entity";

@Controller('todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() list(@Query() query: ListAllEntities): Promise<Task[]> {
    return this.appService.list();
  }

  @Post()
  create(@Body() dto: TodoDto): Promise<any> {
    return this.appService.create(dto);
  }

  @Get(':id')
  get(@Param() params): Promise<Task> {
    return this.appService.get(params.id);
  }

  @Put(':id')
  update(@Param() params, @Body() dto: TodoDto): Promise<any> {
    return this.appService.update(params.id, dto);
  }

  @Delete(':id')
  delete(@Param() params): Promise<void> {
    return this.appService.delete(params.id);
  }
}
