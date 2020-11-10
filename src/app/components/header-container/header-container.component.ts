import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {
  @Output() nav_flag = new EventEmitter<string>();
  constructor() { }

  handleNav(link) {
    this.nav_flag.emit(link);
  }

  ngOnInit(): void {
  }


}
