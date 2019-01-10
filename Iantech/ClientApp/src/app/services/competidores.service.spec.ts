import { TestBed, inject } from '@angular/core/testing';

import { CompetidoresService } from './competidores.service';

describe('CompetidoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompetidoresService]
    });
  });

  it('should be created', inject([CompetidoresService], (service: CompetidoresService) => {
    expect(service).toBeTruthy();
  }));
});
