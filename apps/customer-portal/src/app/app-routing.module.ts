import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from '@rubicon/customer-portal/eager/home';
import { AuthLayoutComponent } from '@rubicon/customer-portal/auth-layout';
import { SiteLayoutComponent } from '@rubicon/customer-portal/site-layout';
import { HomeComponent } from '@rubicon/customer-portal/home';



const routes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'login', loadChildren: () => import('@rubicon/login').then((m) => m.LoginModule) },
    // { path: 'signup', loadChildren: () => import('@rubicon/signup').then((m) => m.SignupModule) },
    {
        path:'',
        component:SiteLayoutComponent,
        children:[
            {
                path:'home',
                loadChildren:() => import('@rubicon/customer-portal/home').then((m) => m.CustomerPortalHomeModule),
            }
        ]
    },
    {
        path:'',
        component:AuthLayoutComponent,
        children:[
            {
                path:'login',
                loadChildren: () => import('@rubicon/customer-portal/login').then((m) => m.CustomerPortalLoginModule),
                pathMatch:'full'
                
            },
            {
                path:'signup',
                loadChildren: () => import('@rubicon/customer-portal/signup').then((m) => m.CustomerPortalSignupModule),
                pathMatch:'full'
                
            }
        ]
    }
    // { path: 'login', loadChildren: () => import('@rubicon/customer-portal/login').then((m) => m.CustomerPortalLoginModule)},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
