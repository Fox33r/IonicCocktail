import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  // Declare Variables
  randomDrink: any;

  constructor(private router: Router, private http: HttpClient) {}

  // Decalre Funtions
  // Nav Buttons
  viewList(){
    this.router.navigate(['/cocktail-list']);
  }

  viewFav(){
    this.router.navigate(['/favourites']);
  }

  viewDrinkRand(){
    this.router.navigate(['/cocktail-view']);

    console.log("In New Page");
    // Call API 'www.thecocktaildb.com' to return random value & add to array
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').subscribe((response) => {
            console.log(response);
            this.randomDrink = response;
      });
    }

}
