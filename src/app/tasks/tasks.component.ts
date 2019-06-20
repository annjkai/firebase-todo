import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/tasks.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from '../app.config';
import { Task } from '../app.model';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
  tasks: Observable<any[]>;
  taskTitle: string;
  editTask: boolean;
  taskToEdit: any = { };

  constructor(public firestore: AngularFirestore, public tasksService: TasksService) { }

  ngOnInit() {
    // READ operation
    this.tasks = this.firestore.collection(config.collection_endpoint)
      .snapshotChanges()
      .pipe(
        map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Task;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      }));
  }

    // UPDATE operation
    updateTask(task) {
      console.log(task);
      this.taskToEdit = task;
      this.editTask = true;
    }

    // DELETE operation
    deleteTask(task) {
      const taskId = task.id;
      this.tasksService.deleteTask(taskId);
    }

}
