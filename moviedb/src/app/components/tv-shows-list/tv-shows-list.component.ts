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
  public loading: boolean = true;
  constructor(private tvbd: TvService, private router: Router) {

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

  getTvInfo(id: string) {
    this.router.navigate(['/tv', id]);
    for (const index in this.tvList) {
      if (this.tvList[index].id === id)
      sessionStorage.setItem(this.tvList[index].id, JSON.stringify(this.tvList[index]));
    }
  }

}
