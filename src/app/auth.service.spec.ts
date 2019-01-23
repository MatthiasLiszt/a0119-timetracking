import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should check login token', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.isAuthenticated()).toBe(false);
  });
});
