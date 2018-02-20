import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { RoomDetailsComponent } from './rooms/room-details/room-details.component';
import { BookingFormComponent } from './rooms/room-details/booking-form/booking-form.component';
import { RatingComponent } from './rooms/room-details/rating/rating.component';



@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    RoomDetailsComponent,
    BookingFormComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
