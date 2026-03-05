import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.html',
})
export class MovieCardComponent {

  @Input() movie!: Movie;

  @Output() removeMovieEvent = new EventEmitter<number>(); // 👈 новое имя

  upvote() {
    this.movie.votes++;
  }

  remove() {
    this.removeMovieEvent.emit(this.movie.id);
  }
}
