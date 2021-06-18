import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { UserComments } from 'src/app/_models/userComments';
import { PostServiceService } from 'src/app/_services/post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  comments: UserComments[] = [];

  users!: User[];

  subscription!: Subscription;

  constructor(private postService: PostServiceService) {
  }

  ngOnInit(): void {
    this.postService.getComments()
      .subscribe(
        (comments) => this.comments = comments);

  }

  addComment(comment: UserComments){
    this.postService.saveComments(comment)
      .subscribe(
        (comment) => (this.comments.push(comment))
      );
  }

}
