import { TestBed } from '@angular/core/testing';

import { ImmigrationDataService } from './immigration-data.service';

describe('ImmigrationDataService', () => {
  let service: ImmigrationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImmigrationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
