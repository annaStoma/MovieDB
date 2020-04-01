import { Component, OnInit, Input } from '@angular/core';
import { Tv } from 'src/app/models/tv.model';

@Component({
  selector: 'app-tv-card',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.scss']
})
export class TvCardComponent implements OnInit {
  @Input() public tv: Tv;
  constructor() { }

  ngOnInit() {

  }

}
