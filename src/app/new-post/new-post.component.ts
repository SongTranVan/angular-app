import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  post: Post;
  constructor(private postService: PostService) {
    this.post = new Post();
  }

  ngOnInit() {
  }

  newPost(){
    this.postService.addNewPost(this.post).subscribe(
      result => {
        alert('Added successfully!');
      }, error2 => {
        alert('Added failed!');
      }
    );
  }
}
