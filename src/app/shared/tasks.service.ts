import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Task } from '../app.model';
import { config } from '../app.config';
import { of, Observable } from 'rxjs';

import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  // authService: Observable<any>;
  tasks: AngularFirestoreCollection<Task>;
  private taskDoc: AngularFirestoreDocument<Task>;

  constructor(public firestore: AngularFirestore, public authService: AuthService) {
    // calls the entire collection
    this.tasks = firestore.collection<Task>(config.collection_endpoint);
  }
/*
   getTask(id: number) {
    this.taskDoc = this.firestore.doc<Task>(`${config.collection_endpoint}/${id}`);
    return of(this.taskDoc.find(task => task.id === id));
   }
*/
   getTask(id) {
    this.taskDoc = this.firestore.doc<Task>(`${config.collection_endpoint}/${id}`);
   }

   // kill it with fire
   addTask(task) {
     task.uid = this.authService.sendUserId();
     console.log('tasks.service.ts uid: ' + task.uid);
     // const authorizedUserId = this.authService.subscribe(res => console.log(res));
     this.tasks.add(task);
   }

   updateTask(id, update) {
     this.taskDoc = this.firestore.doc<Task>(`${config.collection_endpoint}/${id}`);
     this.taskDoc.update(update);
   }

    deleteTask(id) {
      this.taskDoc = this.firestore.doc<Task>(`${config.collection_endpoint}/${id}`);
      this.taskDoc.delete();
    }
}

