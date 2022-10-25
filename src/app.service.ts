import { Injectable } from '@nestjs/common';
import {TodoDto} from "./dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import {Task} from "./app.entity";

@Injectable()
export class AppService {
  constructor(
      @InjectRepository(Task)
      private taskRepository: Repository<Task>
  ) {}

  get(id: string): Promise<Task> {
    return this.taskRepository.findOneBy({ id:parseInt(id, 10) });
  }

  list(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async create(dto: TodoDto): Promise<any>  {
    return this.taskRepository.save(dto)
  }

  update(id: string, dto: TodoDto): Promise<any> {
    return this.taskRepository.save({
      id: parseInt(id, 10),
      ...dto
    })
  }

  async delete(id:string): Promise<void> {
    await this.taskRepository.delete(id)
  }

}
