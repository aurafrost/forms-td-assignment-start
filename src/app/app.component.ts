import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form:NgForm;
  email:string;
  sub:string;
  password:string;

  subs:string="Advanced";
  constructor(){

  }

  onSubmit(){
    // console.log(form)
    console.log(this.form)
    this.email=this.form.value.email
    this.sub=this.form.value.subs
    this.password=this.form.value.pw
    // console.log(this.email)
    // this.form.reset();
  }
}
