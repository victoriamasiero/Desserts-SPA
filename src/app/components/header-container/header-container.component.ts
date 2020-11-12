import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {
  @Output() nav_flag = new EventEmitter<string>();
  @Input() current_header: string;

  constructor() { }

  handleNav(link): void {
    this.nav_flag.emit(link);
  }

  handleHeaderChange(link): void {
    this.current_header = link;
  }

  ngOnInit(): void {
  }
}
