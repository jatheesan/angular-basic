import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive1',
  templateUrl: './reactive1.component.html',
  styleUrls: ['./reactive1.component.css']
})
export class Reactive1Component implements OnInit {

  // simple form object
  loginForm = new FormGroup({
    name:new FormControl(''),
    password:new FormControl(''),
  })
  // form with default values
  // loginForm = new FormGroup({
  //   name:new FormControl('sri Jathee'),
  //   password:new FormControl('123asd'),
  // })

  // validation form nobject
  loginFormValidation = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.minLength(5)]),
  })

  ngOnInit(): void {
  }

  //simple form method
  loginUser(){
    console.warn(this.loginForm.value)
  }

  //validation form method
  loginUserValidation(){
    console.warn(this.loginForm.value)
  }

  get name(){
    return this.loginFormValidation.get('name')
  }

  get email(){
    return this.loginFormValidation.get('email')
  }

  get password(){
    return this.loginFormValidation.get('password')
  }

  //another reactive form
  anotherForm: any;
  submitted = false;
  constructor(private fb:FormBuilder) {
    this.anotherForm = fb.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
    })
  }
  // anotherForm = new FormGroup({
  //   firstname: new FormControl('', [Validators.required]),
  //   lastname: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required])
  // })

  get f(){
    return this.anotherForm.controls;
  }

  anotherFormValidation(){
    this.submitted = true;
    console.log(this.anotherForm.value)
  }

}
