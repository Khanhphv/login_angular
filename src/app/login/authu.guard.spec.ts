import { TestBed, async, inject } from '@angular/core/testing';

import { AuthuGuard } from './authu.guard';

describe('AuthuGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthuGuard]
    });
  });

  it('should ...', inject([AuthuGuard], (guard: AuthuGuard) => {
    expect(guard).toBeTruthy();
  }));
});
