import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cocktail-view',
  templateUrl: './cocktail-view.page.html',
  styleUrls: ['./cocktail-view.page.scss'],
})

export class CocktailViewPage implements OnInit {

  // Declare Variables 
  randomDrink: any;
  favouritesList = [];

  constructor(private router: Router, private http: HttpClient) { }

  // Declare Funtions
  // Add to favourites
  viewFav(){
    this.router.navigate(['/favourites']);
    // this.favouritesList.push(strID); - add drink id to favouite list to be called upon later 
  }

  // Nav Buttons
  navHome(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    console.log("In New Page");
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').subscribe((response) => {
            console.log(response);
            this.randomDrink = response;
      });
  }
}
