import { Component, OnInit, Input } from '@angular/core';
import { TvService } from 'src/app/services/tv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent {

  public tvList: any[] = [];

  constructor(private tvbd: TvService, private router: Router) {

  }
  ngOnInit() {
    this.LoadTVs();
  }
  public LoadTVs() {
    this.tvbd.getTVShows();
    this.tvList = this.tvbd.tvList;
  }

  routeToTvInfo(id: string) {
    this.router.navigate(['/tv', id]);
  }

}
