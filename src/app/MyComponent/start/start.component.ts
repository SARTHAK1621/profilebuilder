import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VariablesComponent } from 'src/app/shared/variables/variables.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {


  constructor(private sharedVariables: VariablesComponent) { }
  isLoggedIn: any;
  ngOnInit(): void {    
   

  }

  changeobs() {
   
  }



}
