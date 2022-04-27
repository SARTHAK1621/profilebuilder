import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-workinfo',
  templateUrl: './workinfo.component.html',
  styleUrls: ['./workinfo.component.css']
})
export class WorkinfoComponent implements OnInit {

  constructor(private backendService: BackendService) { }
  works: any;
  ngOnInit(): void {
    let userId = localStorage.getItem("Id")
    this.backendService.getWork(userId)
    .subscribe((res: any) => {
      this.works=res
      // console.log(res)
      res.forEach((work: any) => {
        console.log(work.role)
      });
    },
    (err: any) => {
      console.log(err)
    })
  }

}
