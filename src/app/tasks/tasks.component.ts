import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
  tasks: Array<any>;

  constructor(public tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks().then(result => {
      this.tasks = result;
      console.log(result);
    });
  }

}
