import { Injectable } from '@nestjs/common';
import {TodoDto} from "./dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Task} from "./app.entity";

@Injectable()
export class AppService {
  constructor(
      @InjectRepository(Task)
      private taskRepository: Repository<Task>,
  ) {}

  get(id: string): Promise<Task> {
    return this.taskRepository.findOneBy({ id:parseInt(id, 10) });
  }

  list(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  create(dto: TodoDto): string {
    return 'Create';
  }

  update(id: string, dto: TodoDto): string {
    return 'Update';
  }

  delete(id:string): string {
    return 'Delete';
  }

}
