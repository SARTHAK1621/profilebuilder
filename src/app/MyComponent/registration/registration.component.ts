import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit 
{
  id: String = "";
  password: String = "";
  name: string="";
  email: string="";
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }
  check() 
  {
    let returnedValue = this.backendService.register(this.name,this.email,this.id, this.password);
    returnedValue.subscribe((res) => {
    console.log(res);
    })
  }

}
