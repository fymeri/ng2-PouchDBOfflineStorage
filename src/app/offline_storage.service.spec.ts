import { TestBed, inject } from '@angular/core/testing';
import { OfflineStorageService } from './offline_storage.service';

describe('OfflineStorageService', () => {
  let service = new OfflineStorageService();

  beforeEach(() => {
    service.clear();
    TestBed.configureTestingModule({
      providers: [{provide: OfflineStorageService, useClass: OfflineStorageService} ]
    });
  });

  it('Should instantiate a PouchDB database',
    inject([OfflineStorageService], () => {
      expect(service).toBeTruthy();
    })
  );

  it('Should be able to add an item to the PouchDB database',
    inject([OfflineStorageService], () => {
      let dummyPatient = {
        __id : '239087-0928910',
        name : 'John Smith'
      };
      let dummyPatientStr = dummyPatient.toString();
      expect(service.addDoc(dummyPatient.__id, dummyPatient.name)).not.toThrowError();
    })
  );

  it('Should be able to get an item from the PouchDB database',
    inject([OfflineStorageService], () => {
      let dummyPatient = {
        __id : '120398-8197236',
        name : 'Greg Leek'
      };
      let dummyPatientStr = dummyPatient.toString();
      service.addDoc(dummyPatient.__id, JSON.parse(dummyPatientStr));
      expect(service.getDoc('120398-8197236').__id.toBe(dummyPatient.__id));
      expect(service.getDoc('120398-8197236').name.toBe(dummyPatient.name));
    })
  );

  it('Should be able to "delete" an item from the PouchDB database',
    inject([OfflineStorageService], () => {
      let dummyPatient = {
        __id : '091284-9138741',
        name : 'Jeb Shrubbery'
      };
      let dummyPatientStr = dummyPatient.toString();
      expect(service.deleteDoc(dummyPatient.__id, JSON.parse(dummyPatientStr)));
    })
  );

});
