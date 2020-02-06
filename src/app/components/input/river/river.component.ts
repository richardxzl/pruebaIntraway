import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-river',
  templateUrl: './river.component.html'
})
export class RiverComponent {

  riverTxtValue: String;
  riverClick:Subject<void> = new Subject<void>();
  bocaTextBoxValue: String;

  onRiverButtonClick() {
    this.riverClick.next();
  }

  updateInBocaValue(event) {
    this.bocaTextBoxValue = event;

  }

}

