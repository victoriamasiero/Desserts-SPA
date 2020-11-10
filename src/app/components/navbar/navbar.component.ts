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

  handleNavigation(ref) {
    if (ref === this.sel_navigation) return;
    this.sel_navigation = ref;
    this.nav_link = ref;
    this.nav_flag.emit(ref);

    setTimeout(() => {
      this.router.navigate([ref]);
    }, 500);

    /*
    this.router.navigateByUrl(ref).then((data)=>{
      console.info("navigation ok"); 
      console.info(data);
    }).catch((error)=>{
      console.error(error);
    })*/

    /*
    this.overlay.nativeElement.classList.add("show");

    //Timeout for navigation
    setTimeout(() => {
      this.overlay.nativeElement.classList.remove("show");
      this.router.navigate([ref]);
    }, 1000);*/
  }

  ngOnInit(): void {
    this.logo_url = "../../assets/images/logo.svg";
  }
}
