import { Component } from '@angular/core';
import {PostDetailsComponent} from "../../components/post-details/post-details.component";

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [
    PostDetailsComponent
  ],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {

}
