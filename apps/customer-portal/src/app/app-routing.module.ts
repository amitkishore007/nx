import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from '@rubicon/customer-portal/eager/home';

const routes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'login', loadChildren: () => import('@rubicon/login').then((m) => m.LoginModule) },
    // { path: 'signup', loadChildren: () => import('@rubicon/signup').then((m) => m.SignupModule) },
    { path: '**', redirectTo:'login' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
