import { Injectable } from '@angular/core';

// import { Observable, of } from 'rxjs';

import { Post } from './post';


@Injectable({
  providedIn: 'root'
})

export class PostService {
  posts: Post[] = [];
  post_len = 0;
  
  add(pst: Post) {
    this.posts.push(pst);
    this.post_len += 1;
  }

  get_posts() {
    return this.posts;
  }

  clear() {
    this.posts = [];
  }
}
