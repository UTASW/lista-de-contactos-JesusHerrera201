import { TestBed } from '@angular/core/testing';

import { DatosServiceService } from './datos-service.service';

describe('DatosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosServiceService = TestBed.get(DatosServiceService);
    expect(service).toBeTruthy();
  });
});
