import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIcallService } from '../apicall.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  quote: any;

  constructor(private apiCallService: APIcallService) { }

  ngOnInit() {
    this.apiCallService.getServer().subscribe((res: any) => {
      this.quote = res;
    })
  }

}
