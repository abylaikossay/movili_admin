import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./c-auth/c-auth.module')
            .then(m => m.CAuthModule),
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule),
    },

    {path: '', redirectTo: 'admin', pathMatch: 'full'},
    {path: '**', redirectTo: 'admin'},
];

const config: ExtraOptions = {
    useHash: false,
    scrollPositionRestoration: 'enabled',
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
