import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Post } from '../post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['../style.css']
})

export class PostCreateComponent {
  postForm = this.fb.group({
    name: '',
    content: ''
  });
  id = 0;
  constructor(private fb: FormBuilder, private postService: PostService) { }

  onSubmit(): void {
    let name = String(this.postForm.get("name")?.value);
    let content = String(this.postForm.get("content")?.value);
    
    let pst: Post = {
      id: this.id,
      name: name,
      content: content,
      date: new Date(),
      type: "Post"
    };
    this.id+=1;

    this.postService.add(pst);

    this.postForm.reset();
  }
}
