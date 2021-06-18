import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { UserComments } from 'src/app/_models/userComments';
import { PostServiceService } from 'src/app/_services/post-service.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() text: string;
  @Output() onAddComment: EventEmitter<UserComments> = new EventEmitter();

  comments: UserComments[] = [];
  loading = false;
  users!: User[];
  username!:string;
  message!: string;
  date!: Date;
  day!: number;
  month!: number;
  year!: number;
  hours!: number;
  minutes!: number;

  public isCollapsed = false;
  constructor(private postService: PostServiceService) {
    this.postService.getComments()
    .subscribe(
      (comments) => this.comments = comments
    );

   }

  ngOnInit(): void {
    this.loading = true;
    this.postService.getAll().pipe(first()).subscribe(users =>
      {this.loading = false;
      this.users = users});
  }

  onSubmit():void {
    if(!this.message){
      alert('Please add a message!');
      return;
    }

    this.date = new Date();

    const newComment = {
      username: this.users[0].username,
      message: this.message,
      day: this.date.getDate(),
      month: this.date.getMonth()+1,
      year: this.date.getFullYear(),
      hours: this.date.getHours(),
      minutes: this.date.getMinutes()
    }
    console.log(newComment);
    this.onAddComment.emit(newComment);

    this.message='';
    document.location.reload();
    window.scroll(0,0);
  }
}
