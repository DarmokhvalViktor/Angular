import {Component, OnInit} from '@angular/core';
import {IPost, IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services";
import {NgIf} from "@angular/common";
import {PostsComponent} from "../posts/posts.component";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf,
    PostsComponent
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  user: IUser
  posts: IPost[]
  flag: boolean

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser;

      if(!this.user) {
        this.userService.getById(id).subscribe(value => this.user = value)
      }
      this.userService.getPostsByUserId(id).subscribe(value => this.posts = value);
    })
  }

  changeFlag():void {
    this.flag = !this.flag;
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(value => console.log(value, 'ngOnInit'))
  }

}
