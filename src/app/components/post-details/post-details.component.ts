import { Component } from '@angular/core';
import {IComment, IPost} from "../../interfaces";
import {Router} from "@angular/router";
import {UserService} from "../../services";
import {CommentsComponent} from "../comments/comments.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    CommentsComponent,
    NgIf
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  post:IPost
  comments:IComment[]

  constructor(private router: Router, private userService: UserService) {
    this.post = this.router.getCurrentNavigation()?.extras.state as IPost
    this.userService.getComments(this.post.id).subscribe(value => {
      this.comments = value
    })
  }

}
