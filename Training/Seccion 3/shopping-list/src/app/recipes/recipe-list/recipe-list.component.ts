import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test','https://th.bing.com/th/id/OIP.TQ6I-KjX3ZR9yyybkRQ4HQHaDt?pid=ImgDet&rs=1'),

    new Recipe('A test recipe', 'This is simply a test','https://th.bing.com/th/id/OIP.TQ6I-KjX3ZR9yyybkRQ4HQHaDt?pid=ImgDet&rs=1'),

  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
