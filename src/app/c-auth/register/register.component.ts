import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import {NB_AUTH_OPTIONS, NbAuthService, NbRegisterComponent} from '@nebular/auth';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';
import { AuthService } from '../../@core/services/auth.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent extends NbRegisterComponent {


  constructor(service: NbAuthService, @Inject(NB_AUTH_OPTIONS) protected options,
              cd: ChangeDetectorRef, router: Router,
              private authService: AuthService,
              private toastr: NbToastrService) {
    super(service, options, cd, router);
  }

  register(): void {
    // commented register
    // this.authService.register(this.user).toPromise()
    //   .then(() => {
    //     this.router.navigate(['/admin/auth/login']);
    //   }).catch(() => this.toastr.danger('Incorrect data'));
  }
}
