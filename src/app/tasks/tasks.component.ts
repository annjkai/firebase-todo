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
  // addTask = task => this.tasks.push(task);

  deleteTask() {
    /*
    this.tasksService.deleteTask(this.task)
      .then(
        res => {
          alert('task deleted');
        },
        err => {
          console.log(err);
        }
      );
      */
  }
    /*{
    this.tasksService.input.value.task = this.tasks;
    const data = this.tasksService.input.value;

    this.tasksService.createTask(data)
      .then(res => {
        alert('New task created');
      });
  }*/

  /*deleteTask = task => {
    const index = this.tasks.indexOf(task);
    if (index > -1) {this.tasks.splice(index, 1)}
  }
   */

}
