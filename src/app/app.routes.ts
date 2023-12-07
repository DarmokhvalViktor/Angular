import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts";
import {PostsPageComponent, UserDetailsPageComponent, UsersPageComponent} from "./pages";

export const routes: Routes = [
  {
    path: "", component:MainLayoutComponent, children: [
      {path: "", redirectTo: "users", pathMatch:"full"},
      {path: "users", component:UsersPageComponent, children: [
          {path: ":id", component:UserDetailsPageComponent}
        ]},
      {path:"post-details", component: PostsPageComponent}
    ]
  }
];
