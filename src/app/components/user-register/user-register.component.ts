import { Component, OnInit } from '@angular/core';
import {  AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from './../../iuser';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
 userRegisterForm:FormGroup;
  constructor( private FormBuilder :FormBuilder) {
    this.userRegisterForm=new FormGroup({
      fullName: new FormControl('', [Validators.required,Validators.pattern("[A-Za-z]{3,}")]),
      email: new FormControl('',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]),
      // phone: new FormControl(''),
      phoneNumbers: new FormArray([new FormControl('')]),
      address: this.FormBuilder.group({
        city :new FormControl(''),
        postalCode :new FormControl(''),
        street :new FormControl('')
      }),
      password: new FormControl('',[
        Validators.minLength(8),
        Validators.required]),
      repeatPassword: new FormControl('')
    },{validators:this.samePassword})
   }

   get fullName(){
    return this.userRegisterForm.get("fullName")
   }
   submit(){
    let userModel: IUser=this.userRegisterForm.value as IUser
    console.log(userModel);
    
   }

   get phoneNumbers(){ 
      return this.userRegisterForm.get("phoneNumbers") as FormArray
   }

  ngOnInit(): void {
  }

  remove(i: number) {
    (<FormArray>this.userRegisterForm.get('phoneNumbers')).removeAt(i);
   }
   
   add() {
    (<FormArray>this.userRegisterForm.get('phoneNumbers')).push(new FormControl(''));
   }

   samePassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>{
    const pass = control.get('password');
    const rePass = control.get('repeatPassword');
    // console.log(pass,rePass);
    
    return pass && rePass && pass.value !== rePass.value ? {notSame: true} : null
  }

}
