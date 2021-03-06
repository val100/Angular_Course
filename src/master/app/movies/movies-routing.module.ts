import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MovieListContainerComponent} from "./movie-list-container/movie-list-container.component";
import {MovieDetailsContainerComponent} from "./movie-details-container/movie-details-container.component";



const routes:Routes =[
  { path: 'movies', component: MovieListContainerComponent},
  { path: 'movies/:id', component: MovieDetailsContainerComponent  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MoviesRoutingModule { }
