import { NavBarComponent } from './../../nav-bar/nav-bar.component';
import { CountryService } from './../../country.service';
import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [CommonModule],  // ✅ Import CommonModule
  templateUrl: 'country-card.component.html',
  styleUrls: ['country.card.component.css']
})
export class CountryCardComponent {
  countries: any[] = [];

  constructor(private countryService: CountryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }



  onCountryClick(country: any){
    alert(country.name)
    this.router.navigate(['/country', country.name]);
  }
}
