import { Component, Input } from "@angular/core";

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})

export class PostListComponenet{
  /*
  posts = [
    {title: 'First post', content: 'First post content'},
    {title: 'Second post', content: 'Second post content'},
    {title: 'Third post', content: 'Third post content'}
  ]
  */
 @Input() posts = [];
}


