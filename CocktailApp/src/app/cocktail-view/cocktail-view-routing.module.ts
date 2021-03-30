import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocktailViewPage } from './cocktail-view.page';

const routes: Routes = [
  {
    path: '',
    component: CocktailViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailViewPageRoutingModule {}
