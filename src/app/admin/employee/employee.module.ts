import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { MatTableModule } from '@angular/material/table';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [EmployeeComponent, ListComponent, NewComponent],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        NbCardModule,
        MatTableModule,
        NbButtonModule,
        NbInputModule,
        FormsModule,
        NbIconModule,
    ],
})
export class EmployeeModule {
}
