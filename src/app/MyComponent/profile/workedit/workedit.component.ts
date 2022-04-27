import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-workedit',
  templateUrl: './workedit.component.html',
  styleUrls: ['./workedit.component.css']
})
export class WorkeditComponent implements OnInit {
  role:String=""
  duration:String=""
  about:String=""
  company:String=""
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }
  check(){
    console.log("----")
    let returnedValue = this.backendService.updatework(this.role, this.duration,this.about,this.company);
    returnedValue.subscribe((res) => {
    console.log(res);
    })
  }
}
