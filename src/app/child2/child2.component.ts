import { Component, OnInit } from '@angular/core';
import { JatheesService } from '../jathees.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  parentAgeinchild2!: number;
  ParentNameinchild2!: string;
  constructor(private jathees: JatheesService) { }

  ngOnInit(): void {
    // let jathees: JatheesService = new JatheesService();
    this.parentAgeinchild2 = this.jathees.getParentAge()
    this.ParentNameinchild2 = this.jathees.getParentName()
  }

}
