import { Component, EventEmitter, Input, Output } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../_models/user';
import { UserComments } from '../../_models/userComments';
import { Subscription } from 'rxjs';
import { PostServiceService } from 'src/app/_services/post-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  users!: User[];
  loading = false;
  constructor(private postService: PostServiceService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.postService.getAll().pipe(first()).subscribe(users =>
      {this.loading = false;
      this.users = users});

  }
}
