import { Component } from '@angular/core';

@Component({
  selector: 'app-projectmanager-header',
  templateUrl: './projectmanager-header.component.html',
  styleUrls: ['./projectmanager-header.component.css']
})
export class ProjectmanagerHeaderComponent {

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
