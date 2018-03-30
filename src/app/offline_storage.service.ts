import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable()
export class OfflineStorageService {
  private db;

  constructor() {
    this.db = new PouchDB('storage');
  }

  public addDoc(id: string, jsonObject: string): void {
    this.db.put({
      _id: id,
      object: jsonObject
    }).then((response) => {
      // handle response
    }).catch((err) => {
      console.log(err);
    });
  }
  public getDoc(id: string): OfflineStorageService {
    this.db.get(id).then((doc) => {
      console.log(doc);
      console.log(typeof(doc));
      return doc;
    });
    return this;
  }

}
