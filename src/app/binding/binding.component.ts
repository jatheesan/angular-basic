import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  name: string = 'Jatheesan';
  enteredName: string = 'Jathees';
  displayvalue: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(event : string): void{
    this.displayvalue = event;
  }

  //twoway binding
  enteredCompanyName: string = 'global';

}
