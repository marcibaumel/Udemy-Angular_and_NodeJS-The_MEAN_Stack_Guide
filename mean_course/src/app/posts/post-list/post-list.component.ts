import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostServices } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponenet implements OnInit{
  @Input() posts: Post[] = [];

  constructor(public postServices: PostServices){ }

  ngOnInit(): void {
    this. posts = this.postServices.getPosts();
  }
}
