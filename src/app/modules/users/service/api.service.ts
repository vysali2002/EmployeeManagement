import { Injectable } from '@angular/core';
import { userModel } from '../users.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url ="https://employeemanagementserver-3.onrender.com"
  constructor(private http:HttpClient){}

  saveUserAPI(user:userModel){
   return this.http.post(`${this.server_url}/users`,user)

  }
  getAllUsersAPI(){
  return this.http.get(`${this.server_url}/users`)
  }
  getAUsersAPI(id:any){
    return this.http.get(`${this.server_url}/users/${id}`)
    }
    removeUsersAPI(id:any){
      return this.http.delete(`${this.server_url}/users/${id}`)
      }
      updateUserAPI(user:userModel){
        return this.http.put(`${this.server_url}/users/${user.id}`,user)
        }



}
