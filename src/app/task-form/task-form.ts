import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {

  tasks:any[] = [];
  idList:any[] = [];

  constructor(private functions: TaskService) {}

  ngOnInit() {
    this.tasks = this.functions.getTasks();
  }

  addTask(desc: string) {
    let randomId = Math.floor((Math.random()*1000+1));
    do {
      if (this.idList.includes(randomId) == true) {
        randomId = Math.floor((Math.random()*1000+1));
      } else {
        break;
      }
    } while (true)
      let currentDate: any = new Date();
      this.functions.addTask(randomId, desc, currentDate);
      alert (desc + " has been added to the task list!");
    }

}
