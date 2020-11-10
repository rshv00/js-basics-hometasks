import { TestBed } from '@angular/core/testing';

import { AdminAuthService } from './admin-auth.service';

describe('AdminAuthService', () => {
  let service: AdminAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not allow login with wrong admin credentials', () => {
    expect(service.login("wrong", "wrong")).toBeFalse();
  });

  it('should allow login with correct admin credentials', () => {
    expect(service.login("admin", "nimda1")).toBeTrue();
  });
});
