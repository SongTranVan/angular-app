import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;
  constructor(private postService: PostService) {
  this.post = new Post();
 }

  ngOnInit() {
  }
  deletePost(){
    this.postService.deletePost(this.post.id).subscribe(
      result => {
        alert('delete success!');
        window.location.reload();
      }, error2 => {
        alert('delete failed');
      }
    );
  }
}
