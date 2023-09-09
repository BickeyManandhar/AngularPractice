import { Component } from '@angular/core';
import { Login } from './login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logins:Login[]=[];

  login:Login={} as Login; //creating blank object in TS
  // email:any='';
  // password:any='';
  title = 'firstAngularProject';
  public message:string='';

  // process(email:HTMLInputElement,password:HTMLInputElement){
    process(){
   // throw new Error('Method not implemented.');
  // let pemail=email.value;
  // let ppassword=password.value;
   if(this.login.email==='manandharbickey@gmail.com' && this.login.password==='test@123'){
      this.message="Congratulation, you signed in successfully.";
   }
   else{
    this.message="Sorry email or password is incorrect.";
   }
   //let login=new Login(this.login.email,this.login.password,this.message,new Date());
    this.login.cdate=new Date();
    this.login.message=this.message;
    let clonedObject = Object.assign(this.login);
   this.logins.push(clonedObject);
   this.login={} as Login;
  }
  
}

