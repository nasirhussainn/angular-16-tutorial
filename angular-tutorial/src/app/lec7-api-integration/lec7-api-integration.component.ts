import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-lec7-api-integration',
  templateUrl: './lec7-api-integration.component.html',
  styleUrls: ['./lec7-api-integration.component.scss']
})
export class Lec7ApiIntegrationComponent {
  posts: any[] = [];
  newPost = { title: '', body: '' };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  // Fetch all posts
  // fetchPosts(): void {
  //   this.apiService.getPosts().subscribe(
  //     (data) => {
  //       this.posts = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching posts:', error);
  //     }
  //   );
  // }

  // using next and error callbacks to handle the response and error respectively 
  fetchPosts(): void {
    this.apiService.getPosts().subscribe({
      next: (data) => {
        this.posts = data; // Handle the emitted value
      },
      error: (err) => {
        console.error('Error fetching posts', err); // Handle any errors
      },
    }
    );
  }
  
  createPost(): void {
    if (this.newPost.title.trim() && this.newPost.body.trim()) {
      this.apiService.createPost(this.newPost).subscribe(
        (data) => {
          console.log('Post created:', data);
          this.posts.unshift(data); // Add the new post to the top of the list
          this.newPost = { title: '', body: '' }; // Reset the form
        },
        (error) => {
          console.error('Error creating post:', error);
        }
      );
    }
  }

}
