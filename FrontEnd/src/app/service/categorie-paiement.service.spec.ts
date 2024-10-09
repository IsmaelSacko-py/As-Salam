import { TestBed } from '@angular/core/testing';

import { CategoriePaiementService } from './categorie-paiement.service';

describe('CategoriePaiementService', () => {
  let service: CategoriePaiementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriePaiementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
