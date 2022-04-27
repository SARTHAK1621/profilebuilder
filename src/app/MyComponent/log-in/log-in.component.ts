import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';
import { VariablesComponent } from 'src/app/shared/variables/variables.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  data: String = "0000";
  id: string = "";
  password: String = "";

  constructor(private backendService: BackendService, private router: Router, private sharedVariables: VariablesComponent) { }

  ngOnInit(): void {
   
  }

  check() {
 
      // x.subscribe((res: any) => {
      //   this.data = res
      //   console.log(this.data);
      // })
      
      let returnedValue = this.backendService.login(this.id, this.password);
      returnedValue.subscribe((res: any) => {
        // console.log(res);
        if(res) {
          console.log(res)
          //let loginStatus = true;
          localStorage.setItem("userId", res);
          localStorage.setItem("Id",this.id);
          this.router.navigateByUrl('/dashboard')

          // this.sharedVariables.isLoggedIn.subscribe(res => {res.next(true)})
          this.sharedVariables.isLoggedInSubject.next(true);

        }
      })
    }

}
