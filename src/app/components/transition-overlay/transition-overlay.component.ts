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
    console.log("changessssssss?????????????????????????????")
    if (this.nav_link) {
      this.overlay.nativeElement.classList.add("show");

      setTimeout(() => {
        this.overlay.nativeElement.classList.remove("show");
      }, 1000);
    }
  }
}
