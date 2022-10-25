export class TodoDto {
    description: string;
    done: boolean;
    priority: number;
    createdAt: number;
}

export class ListAllEntities {
    limit: number;
    offset: number;

}