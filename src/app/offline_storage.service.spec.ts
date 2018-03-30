import { TestBed, inject } from '@angular/core/testing';

import { OfflineStorageService } from './offline_storage.service';

describe('OfflineStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfflineStorageService]
    });
  });

  it('should be created', inject([OfflineStorageService], (service: OfflineStorageService) => {
    expect(service).toBeTruthy();
  }));

  it('should add an object to the database', inject([OfflineStorageService],
    (service: OfflineStorageService) => {
    service.addDoc('test2', 'hello' );
    expect(service.getDoc('test2')).toBeTruthy();
  }));
});
