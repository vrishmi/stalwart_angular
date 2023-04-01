import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private router:Router,private ts:ToastrService){

    }
  ngOnInit(): void {
    //console.log("NO logout")
    localStorage.clear()
    this.ts.success("","successfully logged out",{timeOut:3000})
    this.router.navigateByUrl("/login")
  }

}
