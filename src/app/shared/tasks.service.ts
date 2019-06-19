import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(public firestore: AngularFirestore) { }

  form = new FormGroup({
    taskTitle: new FormControl(''),
    taskId: new FormControl('')
  });

  // CREATE
  createTask(data) {
// tslint:disable-next-line: no-shadowed-variable
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('tasks')
          .add(data)
          .then(res => {}, err => reject(err));
    });
  }

  // READ
  getTasks() {
// tslint:disable-next-line: no-shadowed-variable
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('tasks').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        });
    });
  }
}

/*
getTasks() {
    return this.firestore.collection('tasks').snapshotChanges();
  }
*/

