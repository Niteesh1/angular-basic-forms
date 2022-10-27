import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   username:string='';
   password :string='';

   errmsg:string='';
  constructor() { }

  ngOnInit(): void {
  }
  validationForm(ref:any){

    // alert(ref.value.username)   // fetches username and display

    // alert(ref.value.password)  fetches password and display

     if(ref.valid){

      alert('success')
      this.errmsg="login credentials success"
     }

     else{
      this.errmsg="login credentials failes"
     }

  }

}
