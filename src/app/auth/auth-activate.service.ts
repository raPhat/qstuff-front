import { Injectable } from '@angular/core';

import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthActivateService implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // @TODO - should not access `loggedIn` property of authService directly
        // but `canActivate` needs a boolean value so cannot use `authService.isLogged()` which returns an Observable here.
        if (this.authService.loggedIn) {
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }

}
