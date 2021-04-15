import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { NB_AUTH_OPTIONS, NbAuthService, NbLoginComponent } from '@nebular/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../@core/services/auth.service';

@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent implements OnInit {
    loading: boolean;
    errors = [];
    public authorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(service: NbAuthService, @Inject(NB_AUTH_OPTIONS) protected options,
                cd: ChangeDetectorRef, router: Router,
                private authService: AuthService,
    ) {
        super(service, options, cd, router);
    }


    ngOnInit() {
        this.authorized.next(false);
        localStorage.clear();
    }

    login(): void {
        this.loading = true;
        this.authService.login(this.user.email, this.user.password)
            .toPromise()
            .then(res => {
                this.authService.authorize(res);
                this.loading = false;
            }).catch((err) => {
            this.loading = false;
            console.log(err);
            // this.toastr.danger('Логин или пароль введен неверно');
            this.authService.authFail();
        });
    }

}
