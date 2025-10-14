import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];
  completedTasks:any[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(id: number, desc: string, createdAt: Date) {
    const newTask = new Task(id, desc, createdAt);
    this.tasks.push(newTask);
  }

  removeFromTaskList(taskName: any) {
    this.tasks.splice(this.tasks.indexOf(taskName), 1);
  }

  editTask(id: any, newDesc: string) {
    let toEdit = this.tasks.indexOf(id);
    this.tasks[toEdit].desc = newDesc;
  }

  setFilter(filter: 'all' | 'active' | 'done') {
    
  }

  getTotalTasks() {
    let total = 0;
    for (let task of this.tasks) {
      total += 1;
    }
    return total;
  }

}
