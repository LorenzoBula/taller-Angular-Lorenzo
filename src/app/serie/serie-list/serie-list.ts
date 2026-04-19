import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serie-list.html',
  styleUrls: ['./serie-list.css']
})
export class SerieListComponent implements OnInit {

  series: Serie[] = [];
  averageSeasons: number = 0;

  constructor(
    private serieService: SerieService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.serieService.getSeries().subscribe((data: Serie[]) => {
      console.log("DATA:", data);

      this.series = data;

      let total = 0;
      this.series.forEach((serie) => total += serie.seasons);

      this.averageSeasons = this.series.length
        ? total / this.series.length
        : 0;
        
      this.cd.detectChanges();
    });
  }
}