import { Routes } from "@angular/router"

export const appRoutes: Routes = [
  {
    path:'',
    redirectTo:'user',
    pathMatch:'full',
  },
  {
    path:'user',
    loadChildren:()=>
    import ('./pages/users/users.routes').then((routes) => routes.UserRoutes),
  },
];
