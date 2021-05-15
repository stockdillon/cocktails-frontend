import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  // @Input() query: Observable<string> = of('m');
  // @Output() queryChange: EventEmitter<Observable<string>> = new EventEmitter<Observable<string>>();
  @Input() query: string = 'm';
  @Output() queryChange: EventEmitter<string> = new EventEmitter<string>()
  form: FormBuilder = new FormBuilder();
  constructor() { }

  ngOnInit(): void {
    
  }

  emitQuery(){
    console.log('emitted: ', this.query)
    this.queryChange.emit(this.query);
  }
}
