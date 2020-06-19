import { TestBed } from '@angular/core/testing';

import { ReservasApliClientService } from './reservas-apli-client.service';

describe('ReservasApliClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservasApliClientService = TestBed.get(ReservasApliClientService);
    expect(service).toBeTruthy();
  });
});
