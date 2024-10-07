import { Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';

export const routes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'library', component: LibraryComponent, pathMatch: 'full' },
];
