import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  server_url="https://employeemanagementserver-3.onrender.com"

  constructor(private http:HttpClient) { }

  getAllUserAPI(){
    return this.http.get(`${this.server_url}/users`)
  }
}
