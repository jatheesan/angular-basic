import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JatheesService {

  private parentAge!: number ;
  private parentName!: string;

  getParentName(): string{
    return this.parentName
  }

  setParentName(name: string): void{
    this.parentName = name;
  }

  getParentAge(): number{
    return this.parentAge
  }

  setParentAge(age: number): void{
    this.parentAge = age;
  } 

  // constructor() { }
}
