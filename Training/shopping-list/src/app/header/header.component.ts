import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'

})
export class HeaderComponent implements OnInit, OnDestroy {
    isAuthenticated = false;
    private userSubs: Subscription;

    constructor (private dataStorageService: DataStorageService, private authService: AuthService){}
    onSaveData(){
        this.dataStorageService.storeRecipes();

    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnInit(): void {
        this.userSubs = this.authService.user.subscribe(user => {
            this.isAuthenticated = !user ? false : true; 
        });
    }

    ngOnDestroy(): void {
        this.userSubs.unsubscribe();
    }

}