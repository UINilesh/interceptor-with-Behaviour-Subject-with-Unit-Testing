import { TestBed } from '@angular/core/testing';

import { ParamInterceptor } from './interceptor.service';

describe('InterceptorService', () => {
  let service: ParamInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ParamInterceptor]
    });
    service = TestBed.inject(ParamInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
