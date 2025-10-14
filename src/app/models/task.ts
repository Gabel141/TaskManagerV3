export class Task {
    id: number;
    desc: string;
    isDone: boolean;
    createdAt: Date;

    constructor(id: number, desc: string, createdAt: Date) {
        this.id = id;
        this.desc = desc;
        this.createdAt = createdAt;
        this.isDone = false;
    }

    getID(): string {
        return `${this.id} (${this.desc})`;
    }
}
