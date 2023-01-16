import { Routes } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

export const UserRoutes : Routes = [
  {
    path:'',
    component:UserListComponent,
    title:'User List',
  },
  {
    path:'edit',
    component:UserEditComponent,
    title:'User Edit',
  },
  {
    path:'add',
    component:UserAddComponent,
    title:'User Add',
  },
]
