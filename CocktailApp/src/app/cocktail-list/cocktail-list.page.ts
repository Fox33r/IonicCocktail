import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.page.html',
  styleUrls: ['./cocktail-list.page.scss'],
})
export class CocktailListPage implements OnInit {
  
  // Decalre Variables 
  drinkList: any;
  drinkSearch: any;
  randomDrink: any;

  constructor(private router: Router, private http: HttpClient) { }

  // Declare Funtions
  // Nav Buttons
  viewFav(){
    this.router.navigate(['/favourites']);
  }

  navHome(){
    this.router.navigate(['/home']);
  }

  viewDrinkRand(){
    this.router.navigate(['/cocktail-view']);
    // random drink call from api
    console.log("In New Page");
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').subscribe((response) => {
            console.log(response);
            this.randomDrink = response;
      });
  }

  // Call on page initialize 
  ngOnInit() {
    console.log("In New Page");
    // search call from api to display a-z list
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a').subscribe((response) => {
              console.log(response);
              this.drinkList = response;
        });
        
  }
}


