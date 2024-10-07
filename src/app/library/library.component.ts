import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent {
  songs!: any;

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.songs = this.backendService.getListOfSongs();
  }

  onSongClicked(id: string) {}
}
