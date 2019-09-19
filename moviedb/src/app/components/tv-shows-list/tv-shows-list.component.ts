import { Component, OnInit, Input } from '@angular/core';
import { TvService } from 'src/app/services/tv.service';


@Component({
  selector: 'tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent {

  public tvList: any[] = [];
  private loading: boolean;
  constructor(private tvbd: TvService) {

  }
  ngOnInit() {
    this.LoadTVs();
  }
  public LoadTVs() {
    this.loading = true;
    this.tvbd.getTVShows().subscribe((data: any) => {
      this.tvList = data;
      this.loading = false;
      console.log(this.tvList);
      return this.tvList;
    });

  }

}
