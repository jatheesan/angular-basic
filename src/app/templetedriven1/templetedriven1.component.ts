import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templetedriven1',
  templateUrl: './templetedriven1.component.html',
  styleUrls: ['./templetedriven1.component.css']
})
export class Templetedriven1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(item:any){
    console.log(item)
  }

  loginUserValidation(item:any)
  {
    console.log(item)
  }

}
