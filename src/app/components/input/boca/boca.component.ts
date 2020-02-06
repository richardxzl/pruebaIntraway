import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-boca',
  templateUrl: './boca.component.html'
})
export class BocaComponent implements OnInit {

  @Input('riverText') riverTextBoxValue: String;
  @Input() riverClick: Subject<void>;
  @Output('ontextFromBoca') passToRiver: EventEmitter<String> = new EventEmitter<String>();

  clickCount = 0;
  bocaTextBoxValue:String;
  constructor() { }

  ngOnInit() {
    this.riverClick.subscribe(() => this.incrementValue());
  }

  incrementValue() {
    this.clickCount = this.clickCount + 1;
  }
  
  passTextValueToRiver() {
    this.passToRiver.emit(this.bocaTextBoxValue);
  }

}
