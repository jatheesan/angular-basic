import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() parentNameinchild!: string;

  @Output() onchildnameChange: EventEmitter<string> = new EventEmitter<string>();
  name: string = 'Jatheesan';
  constructor() { }

  ngOnInit(): void {
  }

  enteredchildName: string = '';
  onchildInputChange(event: string): void{
    this.onchildnameChange.emit(event);
  }

}
