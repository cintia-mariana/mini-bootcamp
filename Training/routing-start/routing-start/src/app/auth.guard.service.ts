import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./aught.service";

@Injectable()


export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private authService: AuthService,private router: Router){}
    canActivate(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): Observable <boolean> | Promise<boolean> |boolean {
       return this.authService.isAuthenticaded()
        .then(
            (authenticated: boolean)=>{
                if(authenticated) {
                    return true;
                }else{
                    this.router.navigate(['/']);
                }
            }
        );
    }
    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable <boolean> | Promise<boolean> |boolean {
            return this.canActivate(route,state);
        }
        
    
}