import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  user:IUser
  @Output()
  userId = new EventEmitter<number>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  toDetails(): void {
    this.router.navigate([this.user.id], {
      relativeTo: this.activatedRoute,
      state: this.user
    })
  }

  getId():void {
    this.userId.emit(this.user.id)
  }
}
