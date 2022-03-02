import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
  // isLoggedIn: any=false;

  
  isLoggedInSubject = new ReplaySubject<any>();
  isLoggedIn = this.isLoggedInSubject.asObservable();

  constructor() { }

  ngOnInit(): void {
  }

}
