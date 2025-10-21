import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {

  tasks:any[] = [];
  completedTasks:number = 0;
  noOfTasks:number = 0;
  filteredTasks:any = [];

  constructor(private functions: TaskService) {}

  ngOnInit() {
    this.tasks = this.functions.getTasks();
  }

  setFilter(filter: 'all' | 'active' | 'done') {
    if (filter == 'all') {
      this.filteredTasks = [...this.tasks]
    }
    if (filter == 'done') {
      this.filteredTasks = this.tasks.filter(tasks => tasks.isDone == true)
    }
    if (filter == 'active') {
      this.filteredTasks = this.tasks.filter(tasks => tasks.isDone == false)
    }
  }

  onCompleteTask(event: any) {
    if (event.target.checked) {
      this.completedTasks = this.completedTasks + 1;
    } else {
      this.completedTasks = this.completedTasks - 1;
    }
  }

  get totalTasks() {
    return this.functions.getTotalTasks();;
  }

  get remainingTask() {
    this.noOfTasks = this.functions.getTotalTasks();
    this.noOfTasks = this.noOfTasks - this.completedTasks;
    return this.noOfTasks;
  }

  removeFromTaskList(taskName: any) {
    this.functions.removeFromTaskList(taskName);
    if (taskName.isDone == false) {
      this.noOfTasks = this.noOfTasks + 1;
    } else {
      this.completedTasks = this.completedTasks - 1;
    }
    alert (taskName.name + " has been removed from the task list!");
  }
}
