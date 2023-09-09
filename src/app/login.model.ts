export class Login {
   
    email!:string;
    password!:string;
    message!:string;
    cdate!:Date;

    constructor(email:string,password:string,message:string,cdate:Date){
        this.email=email;
        this.password=password;
        this.message=message;
        this.cdate=cdate;
    }

}