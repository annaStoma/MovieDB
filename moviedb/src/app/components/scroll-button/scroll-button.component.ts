import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  scrollToTop() {

    const scrollElem = this.document.documentElement.querySelector('#scroll');
    scrollElem.scrollIntoView({ behavior: "smooth" });

  }
}
