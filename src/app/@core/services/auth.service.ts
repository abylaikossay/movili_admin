import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    public authorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    fullUrl = environment.apiUrl + '/auth';

    constructor(private http: HttpClient,
                private router: Router,
                private toastrService: NbToastrService) {
    }

    authorize = (perf) => {
        this.authorized.next(true);
        localStorage.setItem(environment.apiToken, perf.token);
    }
    authFail = () => {
        this.toastrService.danger('Логин или пароль введен неверно');
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post(this.fullUrl + '/login', {username, password});
    }

    isAuthorized() {
        return localStorage.getItem(environment.apiToken);
    }

    checkAvailability(): boolean {
        return !!localStorage.getItem(environment.apiToken);
    }

    removeToken() {
        localStorage.removeItem(environment.apiToken);
    }


    removeAll() {
        this.removeToken();
    }

    getToken() {
        return localStorage.getItem(environment.apiToken);
    }

    getRenterType() {
        return localStorage.renterType;
    }


    public logout() {
        this.authorized.next(false);
        localStorage.clear();
        this.toastrService.info('Вы вышли из системы');
        this.router.navigate(['/auth/login']);
        // setTimeout(() => {
        //   window.location.reload();
        // }, 100);
    }

    getMyRole() {
        if (!this.getMyApi()) {
            return null;
        }
        const base64Url = this.getMyApi().split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return (JSON.parse(window.atob(base64))).role;
    }

    getMyUsername() {
        if (!this.getMyApi()) {
            return null;
        }
        const base64Url = this.getMyApi().split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return (JSON.parse(window.atob(base64))).sub;
    }

    getMyApi() {
        return localStorage.getItem(environment.apiToken);
    }

}
