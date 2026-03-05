import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card';
import { Movie } from './movie.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MovieCardComponent
  ],
  templateUrl: './app.html',
})
export class AppComponent {

  movies: Movie[] = [
    { id: 1, title: 'Inception', year: 2010, isWatched: true, votes: 5 },
    { id: 2, title: 'Interstellar', year: 2014, isWatched: false, votes: 3 }
  ];

  removeMovie(id: number) {
    this.movies = this.movies.filter(m => m.id !== id);
  }
}
