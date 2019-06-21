import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Task } from '../app.model';
import { config } from '../app.config';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  tasks: AngularFirestoreCollection<Task>;
  private taskDoc: AngularFirestoreDocument<Task>;

  constructor(public firestore: AngularFirestore) {
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

   addTask(task) {
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

