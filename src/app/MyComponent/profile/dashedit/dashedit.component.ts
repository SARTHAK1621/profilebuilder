import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
@Component({
  selector: 'app-dashedit',
  templateUrl: './dashedit.component.html',
  styleUrls: ['./dashedit.component.css']
})
export class DasheditComponent implements OnInit {

  constructor(private backendService: BackendService, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  handleUpload(e: any) {
    console.log(e.target.files[0].name)
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    let image = e.target.files[0]
    formData.append("images", image, image.name);
    // console.log(formData.get(image))
    this.httpClient.post("http://localhost:3000/uploadimage", formData, {
      responseType: 'json'
    })
    .subscribe((res: any) => {
      console.log(res)
    }, 
    (err: any) => {
      console.log(err)
    })
    
  }

  // onFileInput(event: any) {
  //   let fileList: FileList = event.target.files;
  //   let file = fileList[0]
  //   console.log(file);
  //   let formData: FormData = new FormData();
  //   formData.append('uploadFile', file, file.name);
  //   this.httpClient.post('http://localhost:3000/uploadimage', event.target.files[0]).subscribe(
  //     (res: any) => console.log(res)
  //   )

  // }

}
