import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['../style.css']
})

export class PostComponent {
  post_count = 0;
  msg = "";

  public onValueChange(event: Event): void {
    const value = (event.target as any).value;
    this.msg = value;
  }

  post_list:string[] = [];
  post_msg(){
    if (this.msg == ""){
      return;
    }
    let section = document.getElementById("comment_section");
    this.post_count += 1;
    this.post_list.push(this.msg);
    this.msg = "";
  }

}

// Create array of posts
// Button adds to array of posts
// Display array of posts in drop down
// Update drop down if necessary
// Display len of array at the top of drop down

// Button adds new p tag with text and increments counter