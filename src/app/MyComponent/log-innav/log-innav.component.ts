import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariablesComponent } from 'src/app/shared/variables/variables.component';

@Component({
  selector: 'app-log-innav',
  templateUrl: './log-innav.component.html',
  styleUrls: ['./log-innav.component.css']
})
export class LogINNavComponent implements OnInit {
  @Input() isLoggedIn: any;

  constructor(private router: Router, private  variable: VariablesComponent) { }

  ngOnInit(): void {
    // console.log(this.isLoggedIn)
    console.log("ajdbakda")
    this.variable.isLoggedIn.subscribe(res => {this.isLoggedIn = res; console.log(res);})
  }

}
