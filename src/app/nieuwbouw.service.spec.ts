import { TestBed } from '@angular/core/testing';

import { NieuwbouwService } from './nieuwbouw.service';

describe('NieuwbouwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NieuwbouwService = TestBed.get(NieuwbouwService);
    expect(service).toBeTruthy();
  });
});
