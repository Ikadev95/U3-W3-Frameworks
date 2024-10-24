import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iAccessData } from '../interfeces/i-access-data';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<iAccessData>(environment.usersUrl)
  }
}
