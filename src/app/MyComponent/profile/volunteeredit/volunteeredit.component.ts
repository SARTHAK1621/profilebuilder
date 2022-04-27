import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-volunteeredit',
  templateUrl: './volunteeredit.component.html',
  styleUrls: ['./volunteeredit.component.css']
})
export class VolunteereditComponent implements OnInit {
  title:String=""
  date:String=""
  description:String=""

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }
  check()
  {
    let returnedValue = this.backendService.updatevolunteer(this.title, this.date,this.description);
    returnedValue.subscribe((res) => {
      console.log(res);
    })
  }

}
