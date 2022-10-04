import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';



const appRoutes: Routes= [
  {path:'',redirectTo: '/recipes',pathMatch: 'full' },
  {path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then((mod) => mod.RecipesModule)},
  {path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module')
    .then((mod) => mod.ShoppingListModule)}
];




@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
