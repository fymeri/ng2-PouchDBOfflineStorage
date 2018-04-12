import { Injectable, InjectionToken } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable()
export class OfflineStorageService {
  private db;

  constructor() {
    this.db = new PouchDB('test');
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
  public getDoc(id: string): any {
    this.db.get(id).then((doc) => {
      return doc.json();
    }).catch((err) => {
      console.log(err);
      return false;
    });
  }

  public deleteDoc(id: string, jsonObject: string): any {
    return true;
  }

  public clear(): any {
    let dbName = this.db.name;
    this.db.destroy().then((response) => {
        this.db = new PouchDB(dbName);
        return response;
      }).catch((err) => {
        return err;
      });
  }

}
