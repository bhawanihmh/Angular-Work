import { Component, OnInit, Input, Output } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // inputs:[this.birthdate,this.age],
  // outputs:[this.birthdate,this.age]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  // birthdate = '15/08/1978';

  // birthdate = new Date().getDate.toString();
  currentItem = { name: 'teapot'} ;
  clickMessage = '';

  // <button (click)="onSave($event)">Save</button>
  //  Saved. Event target is Save

  // <button on-click="onSave($event)">on-click Save</button>
  // Saved. Event target is on-click Save
  
  onSave(event?: KeyboardEvent) {
    //alert('event.' + event);
    //alert('(<HTMLElement>event.target).' + (<HTMLElement>event.target));
    //alert('(<HTMLElement>event.target)..textContent.' + (<HTMLElement>event.target).textContent);
    alert('event.' + event);
    const evtMsg = event ? ' Event target is ' + (<HTMLElement>event.target).textContent : '';
    alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); } 
  }

  deleteItem(item?: Item) {
    alert(`Delete the ${item}.`);
  }

  onClickMe(event?: KeyboardEvent) {
    const evtMsg = event ? ' Event target class is ' + (<HTMLElement>event.target).className  : '';
    alert('Click me.' + evtMsg);
  }

  currentClasses: {};
  canSave = true;
  isUnchanged = false;
  isSpecial = true;
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  { 
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special':  this.isSpecial
    };
  }


  currentStyles: {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  callPhone(phoneNumber: string){
    alert('phoneNumber.' + phoneNumber);
  }
  public birthdate: Date;
  public age: number;
  ngOnInit() { }
  public CalculateAge(): void
     {
         if(this.birthdate){
            var timeDiff = Math.abs((new Date().getTime()) - (this.birthdate.getTime()));
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            alert(`this.age ${this.age}`);
            this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        }else{
          alert(`this.birthdate ${this.birthdate}`);
        }
    }
}
