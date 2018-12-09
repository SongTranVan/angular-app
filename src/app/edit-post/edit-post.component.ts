import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: Post;
  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) {
    this.post = new Post();
  }

  ngOnInit() {
    this.getPostById();
  }

  editPost(){
    this.postService.editPost(this.post).subscribe(
      result => {
        alert('Edit successfully!');
        this.router.navigate(['/postList']);
      }, error2 => {
        alert('Edit failed!');
      }
    );
  }

  getPostById(){
    const id = this.route.snapshot.params.id;
    this.postService.getPostById(id).subscribe(
      result => {
        this.post = result;
      }, error2 => {
        alert('Get Post failed!');
      }
    );
  }

}
