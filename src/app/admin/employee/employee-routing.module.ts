import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
        children: [
            {
                path: '',
                component: ListComponent,
            },
            {
                path: 'new',
                component: NewComponent,
            },
            {
                path: ':id',
                component: NewComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeeRoutingModule {
}
