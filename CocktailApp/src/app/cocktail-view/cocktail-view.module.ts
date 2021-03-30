import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocktailViewPageRoutingModule } from './cocktail-view-routing.module';

import { CocktailViewPage } from './cocktail-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocktailViewPageRoutingModule
  ],
  declarations: [CocktailViewPage]
})
export class CocktailViewPageModule {}
