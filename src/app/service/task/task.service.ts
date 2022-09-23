import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = { [{name: 'test', status: 'ongoing'}], [{name: 'test', status: 'ongoing'}] };

  constructor() { }
}
