import { Component, Input, OnInit } from '@angular/core';
import { Login } from '../login.model';

@Component({//meta-data of Component
  selector: 'app-sign-in-history',
  templateUrl: './sign-in-history.component.html',
  styleUrls: ['./sign-in-history.component.css']
})
export class SignInHistoryComponent implements OnInit{
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  //this is used to pass data from parent to child
  @Input()
  childData:Login[]=[];
}
