import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FloorsComponent } from './floors/floors.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: UsersComponent
      },
      {
        path: 'vehicles',
        component: VehiclesComponent
      },
      {
        path: 'bookings',
        component: BookingsComponent
      },
      {
        path: 'floors',
        component: FloorsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
