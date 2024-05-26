import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { userModel } from '../users.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  user:userModel = {}
  constructor(private route:ActivatedRoute, private api:ApiService,private router:Router){}

  ngOnInit():void{
    this.route.params.subscribe((result:any)=>{
      console.log(result);
      const {id} = result
      console.log(id);
      this.getUserDetails(id)
      
      
    })
  }

  getUserDetails(id:any){
    this.api.getAUsersAPI(id).subscribe((result:any)=>{
      this.user=result
      console.log(this.user);
      
    })
  }

  cancel(id:any){
    this.getUserDetails(id)
  }

  updateUser(){
    this.api.updateUserAPI(this.user).subscribe((result)=>{
      alert("User updated ")
      this.router.navigateByUrl('/users')
    })
  }

}
