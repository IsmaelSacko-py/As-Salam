import { TestBed } from '@angular/core/testing';

import { DetailsPanierService } from './details-panier.service';

describe('DetailsPanierService', () => {
  let service: DetailsPanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsPanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
