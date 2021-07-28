import { TestBed } from '@angular/core/testing';

import { IsLogoutGuard } from './is-logout.guard';

describe('IsLogoutGuard', () => {
  let guard: IsLogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLogoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
