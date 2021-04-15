import { NgModule } from '@angular/core';
import { NbMenuModule, NbPopoverModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
    imports: [
        AdminRoutingModule,
        ThemeModule,
        NbMenuModule,
        MiscellaneousModule,
    ],
    declarations: [
        AdminComponent,
    ],
    exports: [
        NbPopoverModule,
    ],
})
export class AdminModule {
}
