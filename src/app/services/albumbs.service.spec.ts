import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AlbumbsService } from './albumbs.service';

describe('AlbumbsService', () => {
  let service: AlbumbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AlbumbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
