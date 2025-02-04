import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryCardComponent } from '../app/country/country-card/country-card.component';


const routes: Routes = [
  { path: '', component: CountryCardComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
