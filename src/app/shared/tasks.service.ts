import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

import { Task } from '../app.model';
import { config } from '../app.config';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  tasks: AngularFirestoreCollection<Task>;
  private taskDoc: AngularFirestoreDocument<Task>;

  constructor(public firestore: AngularFirestore) {
    this.tasks = firestore.collection<Task>(config.collection_endpoint);
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

