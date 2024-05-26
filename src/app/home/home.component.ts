import { Component, OnInit } from '@angular/core';
import { userModel } from '../modules/users/users.model';
import { ApiService } from '../modules/users/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allUsers:userModel[]=[]

  constructor(private api:ApiService){}

  ngOnInit(): void {
      this.getAllUser()
  }

  getAllUser(){
    this.api.getAllUsersAPI().subscribe((result:any)=>{
      this.allUsers=result
      console.log(this.allUsers);
      
    })
  }
  deleteUser(id:any){
    this.api.removeUsersAPI(id).subscribe((result:any)=>{
      this.getAllUser()
    })
  }

  

}
