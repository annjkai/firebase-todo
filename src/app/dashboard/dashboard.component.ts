import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  taskTitle: string;
  editTask: boolean;
  taskToEdit: any = { };

  constructor(public firestore: AngularFirestore, public tasksService: TasksService) { }

  ngOnInit() { }

    // save changes
    addTask() {
      if (this.taskTitle !== null) {
        const task = { title: this.taskTitle };

        if (!this.editTask) {
          console.log(task);
          this.tasksService.addTask(task);
        } else {
          const taskId = this.taskToEdit.id;
          this.tasksService.updateTask(taskId, task);
      }
        this.editTask = false;
        this.taskTitle = '';
    }
  }
}

