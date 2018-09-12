import { Component, OnInit } from '@angular/core';
import {
  Router, NavigationStart, NavigationCancel, NavigationEnd
} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  loading;
  constructor(private router: Router
  ) {
    this.loading = true;
  }
  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;
        }
      });
  }
}
