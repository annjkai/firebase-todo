import { Component, OnInit } from '@angular/core';

import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  tasks: Array<any>;

  constructor(public tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks().then(result => {
      this.tasks = result;
      console.log(result);
    });
   }
}

/*
  ngOnInit() { this.getTasks(); }

  getTasks = () =>
    this.tasksService
    .getTasks().subscribe(res => (this.tasks = res))
*/
