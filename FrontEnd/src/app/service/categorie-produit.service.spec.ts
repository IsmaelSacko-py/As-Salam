import { TestBed } from '@angular/core/testing';

import { CategorieProduitService } from './categorie-produit.service';

describe('CategorieProduitService', () => {
  let service: CategorieProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
