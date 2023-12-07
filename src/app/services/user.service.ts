import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment, IPost, IUser} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(urls.users.base)
  }

  getById(id:number):Observable<IUser> {
    return this.httpClient.get<IUser>(urls.users.byId(id))
  }

  getPostsByUserId(id:number):Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts.byUserId(id))
  }
  getComments(id:number):Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments.byPostId(id))
  }

}
