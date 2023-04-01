import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  hidden=true

  constructor() { }
  execute(){
    this.hidden=!this.hidden
  }
  date=new Date()
  day= this.date.getDate()
  month=this.date.getUTCMonth()+1
  year=this.date.getFullYear()
  ngOnInit(): void {
  }

}
