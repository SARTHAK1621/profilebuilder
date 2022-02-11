import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-innav',
  templateUrl: './log-innav.component.html',
  styleUrls: ['./log-innav.component.css']
})
export class LogINNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
