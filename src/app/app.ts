import { Component } from '@angular/core';
import { SerieListComponent } from './serie/serie-list/serie-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SerieListComponent], 
  template: `<app-serie-list></app-serie-list>`
})
export class AppComponent { }