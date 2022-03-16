import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-passwordmatch1',
  templateUrl: './passwordmatch1.component.html',
  styleUrls: ['./passwordmatch1.component.css']
})
export class Passwordmatch1Component implements OnInit {

  regArry: any = {}

  // constructor(private fb : FormBuilder) {

  // }

  reactiveForm!: FormGroup;
  passwordPtn = '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{3,8}$'
  registerArray:any = {}
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.reactiveForm.value)
  }

  pwdSubmit(){
    alert(this.registerArray)
  }

  //anotherform
  anotherregisterForm: any
  submitted = false
  constructor(private fb : FormBuilder) {
    this.anotherregisterForm = fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      conformpassword: ['', [Validators.required]]
    },
    {
      validators: this.MustMatch('password', 'conformpassword')
    })
  }

  MustMatch(controlName: string, matchingControlName: string){
    return(formGroup:FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingcontrol = formGroup.controls[matchingControlName];
      if(matchingcontrol.errors && !matchingcontrol.errors['MustMatch']){
        return
      }
      if(control.value !== matchingcontrol.value){
        matchingcontrol.setErrors({MustMatch:true});
      }
      else{
        matchingcontrol.setErrors(null);
      }
    }
  }

  get f(){
    return this.anotherregisterForm.controls;
  }

  anotherFormValidation(){
    this.submitted = true;
    console.log(this.anotherregisterForm.value)
  }

}
