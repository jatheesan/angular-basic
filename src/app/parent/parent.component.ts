import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JatheesService } from '../jathees.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentName: string ='';
  childname: string = '';
  parentAge!: number;

  ngOnInit(): void {
  }

  onchildnamechangeinparent(event: string): void {
    this.childname = event;
    console.log(event);
  }

  constructor(private router: Router, private jathees: JatheesService) { }

  Onchild1buttonclicked(): void {
    this.router.navigateByUrl('parent/child1');
  }

  Onchild2buttonclicked(): void {
    // let jathees: JatheesService = new JatheesService();
    this.jathees.setParentAge(this.parentAge);
    this.jathees.setParentName(this.parentName);
    this.router.navigateByUrl('parent/child2');
  }

}
