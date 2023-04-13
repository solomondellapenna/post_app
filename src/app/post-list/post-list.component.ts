import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['../style.css']
})

export class PostListComponent implements OnInit {
  constructor(public postService: PostService) {}

    ngOnInit(): void {
      this.postService.get_posts();
    }

}
