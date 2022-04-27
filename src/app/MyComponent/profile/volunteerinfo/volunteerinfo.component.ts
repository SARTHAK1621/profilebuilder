import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-volunteerinfo',
  templateUrl: './volunteerinfo.component.html',
  styleUrls: ['./volunteerinfo.component.css']
})
export class VolunteerinfoComponent implements OnInit {

  constructor(private backendService: BackendService) { }
  vol:any;
  ngOnInit(): void {
    let userId = localStorage.getItem("Id");
    this.backendService.getVolunteer(userId)
    .subscribe((res: any) => {
      this.vol=res
      // console.log(res)
      res.forEach((vol: any) => {
        console.log(vol)
      });
    },
    (err: any) => {
      console.log(err)
    })
  }

}
