import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserComponent} from "../user/user.component";
import {IPost, IUser} from "../../interfaces";
import {PostsComponent} from "../posts/posts.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    PostsComponent,
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  users:IUser[];
  userPosts: IPost[];
  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value);
  }
  getUserPosts(id:number) {
    this.userService.getPosts(id).subscribe(value => this.userPosts = value);
  }
}
