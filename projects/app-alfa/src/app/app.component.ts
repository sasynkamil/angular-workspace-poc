import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-alfa';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log(event);
      });
  }

}
