import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-header',
  templateUrl: './developer-header.component.html',
  styleUrls: ['./developer-header.component.css']
})
export class DeveloperHeaderComponent {

  hidden=true

  constructor() { }
  execute(){
    this.hidden=!this.hidden
  }
  date=new Date()
  day= this.date.getDate()
  month=this.date.getUTCMonth()+1
  year=this.date.getFullYear()
}
