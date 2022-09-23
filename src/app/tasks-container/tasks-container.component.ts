import { Task } from './../type/Task';
import { TaskService } from './../service/task/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.css']
})
export class TasksContainerComponent implements OnInit {

  tasksState = this.taskservice.tasksState;

  formName: Task["name"];

  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.taskservice.addTask({name: this.formName, status: 'standby'})
    this.formName = '';
  }

}
