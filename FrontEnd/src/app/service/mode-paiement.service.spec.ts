import { TestBed } from '@angular/core/testing';

import { ModePaiementService } from './mode-paiement.service';

describe('ModePaiementService', () => {
  let service: ModePaiementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModePaiementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
