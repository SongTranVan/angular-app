import { Component, OnInit } from '@angular/core';
import {Post} from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) {
  this.posts = [];
}

  ngOnInit() {
    this.getPostsFromServer();
  }

getPostsFromServer() {
  this.postService.getPosts().subscribe(
    result => {
      this.posts = result;
    }, error2 => {
      alert('Load data failed from server!');
    }
  );
}
}
