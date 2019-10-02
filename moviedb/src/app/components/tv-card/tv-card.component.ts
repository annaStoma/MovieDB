import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tv-card',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.scss']
})
export class TvCardComponent implements OnInit {
  @Input() public tv: any[] = [];
  constructor() { }

  ngOnInit() {

  }

}
