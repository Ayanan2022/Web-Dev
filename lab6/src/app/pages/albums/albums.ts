import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css'], 
})
export class AlbumsComponent implements OnInit {
  isLoading = false;
  error: string | null = null;
  albums: Album[] = [];

  deletingIds = new Set<number>();

constructor(
  private readonly albumService: AlbumService,
  private readonly cdr: ChangeDetectorRef
) {}
  // ngOnInit(): void {
  //   this.loadAlbums();
  // }
  ngOnInit(): void {
  console.log('ALBUMS COMPONENT INIT');
  this.loadAlbums();
}

  loadAlbums(): void {
  console.log('LOAD START');
  this.isLoading = true;
  this.error = null;

  this.albumService.getAlbums().subscribe({
    next: (albums) => {
    this.albums = albums;
    this.isLoading = false;
    this.cdr.detectChanges(); // ✅ форсим обновление UI
  },
    error: (e) => {
      console.log('ERROR');
      console.error(e);
      this.error = 'Failed to load albums. Try again later.';
      this.isLoading = false;
    },
  });
}

  deleteAlbum(id: number, event: MouseEvent): void {
    event.stopPropagation(); // чтобы клик по кнопке не открыл detail
    if (this.deletingIds.has(id)) return;

    this.deletingIds.add(id);

    this.albumService.deleteAlbum(id)
      .pipe(finalize(() => this.deletingIds.delete(id)))
      .subscribe({
        next: () => {
          this.albums = this.albums.filter(a => a.id !== id);
        },
        error: () => {
          this.error = 'Failed to delete album.';
        },
      });
  }
}