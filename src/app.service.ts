import { Injectable } from '@nestjs/common';
import {TodoDto} from "./dto";

@Injectable()
export class AppService {
  get(id:string): string {
    return 'Get';
  }

  list(): string {
    return 'List';
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
