import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  reg:FormGroup<any>;
  constructor() { 

    this.reg = new FormGroup({
      // username: new FormControl("",null),
      // password: new FormControl("",null)
      username: new FormControl("",Validators.required),

      password: new FormControl("",Validators.required)

    })
  }

  ngOnInit(): void {
  }

  regis(){

     alert('hhelo')
  }
}
