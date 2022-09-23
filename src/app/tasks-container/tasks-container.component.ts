import { Task } from './../type/Task';
import { TaskService } from './../service/task/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.css']
})
export class TasksContainerComponent implements OnInit {

  tasks = this.taskservice.tasks;

  model: Task = {name: '', status: 'standby'};

  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
  }

  addTask() {
    //this.tasks.push({name: this.model.name, status: this.model.status})
  }

}
