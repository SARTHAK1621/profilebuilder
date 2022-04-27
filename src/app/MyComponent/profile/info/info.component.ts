import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  profileImage = "";
  about=""
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    let userId = localStorage.getItem("Id")
    this.backendService.getInfo(userId)
    .subscribe((res: any) => {
      this.profileImage = res.image;
      this.about=res.about;
      console.log(res)
    },
    (err: any) => {
      console.log(err)
    })
  }

}
