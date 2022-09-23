import { Injectable } from '@angular/core';
import { Task, TaskState } from 'src/app/type/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tasksState: TaskState = {tasks: [{name: 'Task 1', status: 'ongoing'}, {name: 'Task 2', status: 'next'}, {name: 'Task 3', status: 'standby'}] };

  constructor() { }

  addTask(task: Task) {
    this.tasksState.tasks.push(task)
  }

  deleteTask(task: Task) {
    this.tasksState.tasks = this.tasksState.tasks.filter(item => item !== task)
  }
}
