import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo_url: string;
  sel_navigation: string;
  @ViewChild("overlay_header") overlay: ElementRef;

  constructor(private router: Router) { }

  handleNavigation(ref) {
    if (ref === this.sel_navigation) return;
    this.sel_navigation = ref;
    this.overlay.nativeElement.classList.add("show");

    setTimeout(() => {
      this.overlay.nativeElement.classList.remove("show");
      this.overlay.nativeElement.classList.add("hide-right");
    }, 500);

    setTimeout(() => {
      this.router.navigateByUrl(ref).then(() => {
        this.overlay.nativeElement.classList.remove("hide-right");
        this.overlay.nativeElement.classList.add("hide");
        this.overlay.nativeElement.classList.remove("hide");
      });
    }, 800);

  }

  ngOnInit(): void {
    this.logo_url = "../../assets/images/logo.svg";
  }


}
