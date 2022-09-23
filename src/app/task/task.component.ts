import { TaskService } from './../service/task/task.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: any;
  status: 'standby'

  constructor(private taskservice: TaskService) { }

  deleteTask() {

  }

}
