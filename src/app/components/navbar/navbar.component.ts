import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links: string[];
  logo_url: string;
  activeLink: string;

  constructor() { }

  ngOnInit(): void {
    console.log("ola");
    this.links = ["¿Quiénes somos?", "Guía de postres", "Servicios", "Contacto"];

    this.logo_url = "../../assets/images/logo.svg";
  }

}
