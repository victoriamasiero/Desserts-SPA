import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo_url: string;
  sel_navigation: string;
  //@Output('navLink') navLink = new EventEmitter();
  nav_link: string;
  @Output() nav_flag = new EventEmitter<string>();

  constructor(private router: Router) { }

  /**
   *Handling user navbar navigation
   *
   * @param {*} ref the path of the selected nav link
   * @returns {void}
   * @memberof NavbarComponent
   */
  handleNavigation(ref): void {
    if (ref === this.sel_navigation) return;
    this.sel_navigation = ref;
    this.nav_link = "start";
    this.nav_flag.emit("start");

    //Timeout set for animation to complete before navigating
    setTimeout(() => {
      this.router.navigateByUrl(ref).then((data) => {
        this.nav_link = "end";
        this.nav_flag.emit("end");

      }).catch((error) => {
        console.error("An unexpected error ocurred while navigating ", error);
        this.nav_link = "end";
        this.nav_flag.emit("end");
      })
    }, 800);
  }

  ngOnInit(): void {
    this.logo_url = "../../assets/images/logo.svg";
  }
}
