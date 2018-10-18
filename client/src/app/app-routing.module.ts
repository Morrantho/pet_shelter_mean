import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsComponent } from "./pets/pets.component";
import { NewpetComponent } from "./newpet/newpet.component";
import { ShowpetComponent } from "./showpet/showpet.component";
import { EditpetComponent } from "./editpet/editpet.component";

const routes: Routes = [
    { path:"pets", component:PetsComponent },
    { path:"pets/new", component:NewpetComponent },
    { path:"pets/:id", component:ShowpetComponent },
    { path:"pets/:id/edit", component:EditpetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
