import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesListComponent } from './components/favorites-list.component';
import { FavoriteDetailComponent } from './components/favorite-detail.component';
import { FavoriteAddComponent } from './components/favorite-add.component';

const appRoutes: Routes = [
  {path: '', component: FavoritesListComponent},
  {path: 'marker/:id', component: FavoriteDetailComponent},
  {path: 'create-marker', component: FavoriteAddComponent},
  {path: '**', component: FavoritesListComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
