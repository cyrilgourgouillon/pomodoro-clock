import { Injectable } from '@angular/core';
import { Task, TaskState } from 'src/app/type/Task';
import { TimerService } from '../timer/timer.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tasksState: TaskState = {tasks: [{name: 'Task 1', isSelected: true, sessionsUsed: 0, sessionsNeeded: 1, status: 'pending'}, {name: 'Task 2', isSelected: false, sessionsUsed: 0, sessionsNeeded: 2, status: 'pending'}, {name: 'Task 3', isSelected: false, sessionsUsed: 0, sessionsNeeded: 4, status: 'pending'}] };

  constructor(private timerService: TimerService) { }

  addTask(task: Task) {
    this.tasksState.tasks.push(task)
  }

  selectCurrentTask(task: Task) {
    this.tasksState.tasks.map((e) => {
      if (e.isSelected === true) {
        e.isSelected = false;
      }
    })
    this.tasksState.tasks[this.tasksState.tasks.indexOf(task)].isSelected = true;
  }

  changeStatus(task: Task, status: 'pending' | 'done') {
    this.tasksState.tasks[this.tasksState.tasks.indexOf(task)].status = status;
  }

  deleteTask(task: Task) {
    this.tasksState.tasks.splice(this.tasksState.tasks.indexOf(task), 1)
  }
}
