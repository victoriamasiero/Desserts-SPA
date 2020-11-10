import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-transition-content-overlay',
  templateUrl: './transition-content-overlay.component.html',
  styleUrls: ['./transition-content-overlay.component.css']
})
export class TransitionContentOverlayComponent implements OnInit, OnChanges {
  @Input() nav_status: string;
  @Input() nav_link: boolean;
  @ViewChild("trans_content_overlay") overlay: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.nav_link) {
      this.overlay.nativeElement.classList.add("show");

      setTimeout(() => {
        this.overlay.nativeElement.classList.remove("show");
      }, 1000);
    }
  }

}
