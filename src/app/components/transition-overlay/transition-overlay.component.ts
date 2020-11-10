import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-transition-overlay',
  templateUrl: './transition-overlay.component.html',
  styleUrls: ['./transition-overlay.component.css']
})
export class TransitionOverlayComponent implements OnInit, OnChanges {
  @Input() nav_link: string;
  @ViewChild("trans_overlay") overlay: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes): void {
    if (this.nav_link === "start") {
      this.overlay.nativeElement.classList.toggle("show-animation");
    }

    else if (this.nav_link === "end") {
      //Timeout set for animation to complete before rendering content
      setTimeout(() => {
        this.overlay.nativeElement.classList.toggle("show-animation");
        this.overlay.nativeElement.classList.toggle("hide-animation");
      }, 500);

      this.overlay.nativeElement.classList.toggle("hide-animation");

    }

  }
}
