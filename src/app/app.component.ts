import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UsersComponent],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'first-lesson';
}
