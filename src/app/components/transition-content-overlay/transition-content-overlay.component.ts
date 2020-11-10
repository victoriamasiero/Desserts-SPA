import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-transition-content-overlay',
  templateUrl: './transition-content-overlay.component.html',
  styleUrls: ['./transition-content-overlay.component.css']
})
export class TransitionContentOverlayComponent implements OnInit, OnChanges {
  @Input() nav_status: string;
  @Input() nav_link: string;
  @ViewChild("trans_content_overlay") overlay: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
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
