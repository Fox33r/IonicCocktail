import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  // Declare Variables 

  constructor(private router: Router, private http: HttpClient) { }

  // Declare Functions 
  ngOnInit() {
  }

  // Nav Buttons 
  navHome(){
    this.router.navigate(['/home']);
  }

  viewFav(){
    this.router.navigate(['/cocktail-view']);
  }

}
