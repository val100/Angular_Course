import { Component, OnInit } from '@angular/core';
import {Movie} from "../../models/movie.model";
import {MoviesService} from "../../core/movies.service";
import {LoggerService} from "../../core/logger.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movie-list-container',
  templateUrl: './movie-list-container.component.html',
  styleUrls: ['./movie-list-container.component.css']
})
export class MovieListContainerComponent implements OnInit {

  private movies: Movie[];
  private movies$:Observable<Movie[]>;
  private selectedMovie: Movie;
  private errorMessage: string;


  constructor(private moviesService: MoviesService,
              private logger: LoggerService,
              private router: Router){

  }

  ngOnInit(){
    this.logger.log('app init');
    this.movies$=this.moviesService.getMovies();
  }

  onSaveMovie(value){
    this.selectedMovie.title = value;
  }
  onMovieSelected(_movie: Movie){
    this.router.navigate(['/movies', _movie.id]);
  }



}