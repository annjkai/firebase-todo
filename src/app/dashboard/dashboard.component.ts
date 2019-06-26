import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { TasksService } from '../shared/tasks.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  taskTitle: string;
  // editTask: boolean;
  // taskToEdit: any = { };
  // author: string;
  // uid: string;

  constructor(
    public firestore: AngularFirestore,
    public authService: AuthService,
    public tasksService: TasksService) { }

  ngOnInit() { }

    // save changes
    addTask() {
      if (this.taskTitle !== null) {
        const task = { title: this.taskTitle /*, author: ''*/};
        console.log(task);
        // task.author = 'annika';
        this.tasksService.addTask(task);
/*
        if (!this.editTask) {
          console.log(task);
          task.author = 'travis';
          this.tasksService.addTask(task);
        } else {
          const taskId = this.taskToEdit.id;
          const author = 'travis';
          this.tasksService.updateTask(taskId, task);
      } */
        // this.editTask = false;
        this.taskTitle = '';
    }
  }
}

