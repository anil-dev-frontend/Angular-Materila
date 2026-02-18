import { Routes } from "@angular/router";


export const HOME_ROUTES: Routes = [

//     {
//   path: '',
//   pathMatch: 'full',
//   redirectTo: 'home'
// },
{
  path: '',
  loadComponent: () => import('../home-layout/components/home/home').then(m => m.Home)
}

]