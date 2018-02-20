import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { RoomDetailsComponent } from './rooms/room-details/room-details.component';
import { BookingFormComponent } from './rooms/room-details/booking-form/booking-form.component';
import { RatingComponent } from './rooms/room-details/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { AddRoomComponent } from './admin-management/add-room/add-room.component';
import { EditRoomComponent } from './admin-management/edit-room/edit-room.component';
import { MapComponent } from './contact-us/map/map.component';
import { ContactComponent } from './contact-us/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    RoomDetailsComponent,
    BookingFormComponent,
    RatingComponent,
    HomeComponent,
    ContactUsComponent,
    LoginComponent,
    RegistrationComponent,
    AdminManagementComponent,
    AddRoomComponent,
    EditRoomComponent,
    ContactComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', component: HomeComponent},
      {path: 'rooms', component: RoomsComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'admin', component:AdminManagementComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
