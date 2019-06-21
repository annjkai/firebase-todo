import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import { config } from '../app.config';
import { map } from 'rxjs/operators';
import { TasksService } from '../shared/tasks.service';
import { Task } from '../app.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.sass']
})
export class TaskDetailComponent implements OnInit {

  tasks: Observable<any[]>;
  taskId: number;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private location: Location,
    public firestore: AngularFirestore) { }

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

  getTask(task) {
    const taskId = task.id;
    console.log(taskId);
    this.tasksService.getTask(taskId);
  }
/*
  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tasksService.getTask(id).subscribe(task => this.task = task);

    console.log(task);
    const id = +this.route.snapshot.paramMap.get('id');
  }
*/
}
