import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  template: `
  <div>
    <button (click)="dec()" title="smaller">-</button>
    <button (click)="inc()" title="bigger" style="margin:10px;">+</button>
    <label [style.font-size.px]="size">FontSize: {{size}}px</label>
  </div>`
})
export class SizerComponent {

  //<app-sizer [(size)]="fontSizePx"></app-sizer>
  //<div [style.font-size.px]="fontSizePx">Resizable Text</div>

  //<app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer>
  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  fontSizePx: number;
  dec() { this.resize(-5); }
  inc() { this.resize(+5); }

  resize(delta: number) {
    alert(`this.size : ${this.size}`);
    if(this.size === undefined) {
      this.size = 1;
    }
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    alert(`this.size : ${this.size}`);
    this.sizeChange.emit(this.size);
  }
}