import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { PetService } from "./pet.service";
import { PetsComponent } from './pets/pets.component';
import { NewpetComponent } from './newpet/newpet.component';
import { ShowpetComponent } from './showpet/showpet.component';
import { EditpetComponent } from './editpet/editpet.component';

@NgModule({
  declarations: [
      AppComponent,
      PetsComponent,
      NewpetComponent,
      ShowpetComponent,
      EditpetComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [
      PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
