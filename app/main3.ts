import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {DatePicker} from 'ng2-datepicker';

class Test {
  date: string;
}

@Component({
  template: '
    <datepicker [(ngModel)]="test.date"></datepicker>
    <datepicker [(ngModel)]="test1.date" view-format="DD.MM.YYYY" model-format="DD.MM.YYYY" init-date="12.5.2018"></datepicker>
  ',
  directives: [DatePicker, FORM_DIRECTIVES]
})

class Main3 {
  test: Test;
  test1: Test;
  
  constructor() {
    this.test = Test();
    this.test1 = Test();
  }
}
