import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(public firestore: AngularFirestore) { }

  getTasks() {
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

