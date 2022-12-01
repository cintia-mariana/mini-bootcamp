import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Recipe} from "../recipes/recipe.model";
import { map, tap} from "rxjs/operators";

import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../auth/auth.service";


@Injectable({providedIn: 'root'})
export class DataStorageService {

    recipesNodeUrl = 'http://localhost:8082/api/recipe';
    recipesFirebaseUrl = 'https://ng-course-recipe-book-29498-default-rtdb.firebaseio.com/recipes.json';

    constructor(private http: HttpClient, private recipesService: RecipeService, private authService: AuthService){}

    storeRecipes(){
        const recipes= this.recipesService.getRecipes();
        this.http.put(this.recipesNodeUrl + '/save', recipes)
        .subscribe(response =>{
            console.log(response);

            
        });
    }

    fetchRecipes(){
        return this.http
            .get<Recipe[]>(this.recipesNodeUrl + '/fetch')
            .pipe(
                map(recipes=>{
                    return recipes.map(recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients : []};
                    });
                }),
                tap(recipes => {
                    this.recipesService.setRecipes(recipes);
                })            
            );        
    }
}