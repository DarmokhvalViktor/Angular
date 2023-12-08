import {Component, Input} from '@angular/core';
import {CommentComponent} from "../comment/comment.component";
import {IComment} from "../../interfaces";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommentComponent,
    NgForOf
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  @Input()
  comments:IComment[]

}
