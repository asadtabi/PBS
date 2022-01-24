import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FloorsComponent } from './floors/floors.component';


@NgModule({
  declarations: [
    UsersComponent,
    VehiclesComponent,
    BookingsComponent,
    FloorsComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
