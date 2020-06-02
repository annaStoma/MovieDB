import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  isActive = false;
  name: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    localStorage.setItem('library', JSON.stringify([]));
  }

  onSubmit() {
    this.isActive = true;
    this.router.navigate(['/movies']);
  }
}
