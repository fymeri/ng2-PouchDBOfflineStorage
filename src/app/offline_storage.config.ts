import { InjectionToken } from '@angular/core';
import { OfflineStorageService } from './offline_storage.service';

export const StorageName = new InjectionToken<OfflineStorageService>('offline_storage.config');
