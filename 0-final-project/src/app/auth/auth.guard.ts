import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanMatch {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    if (!this.authService.userIsAuthenticated) {
      this.router.navigate(['/auth']);
    }
    return this.authService.userIsAuthenticated;
  }
}
