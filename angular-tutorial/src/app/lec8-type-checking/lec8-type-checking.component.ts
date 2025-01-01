import { Component } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-lec8-type-checking',
  templateUrl: './lec8-type-checking.component.html',
  styleUrls: ['./lec8-type-checking.component.scss']
})
export class Lec8TypeCheckingComponent {
  users: User[] = []; // Type-safe user array
  selectedUser?: User; // Optional selected user

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers(); // Load users on initialization
  }

  // Fetch all users
  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
    });
  }

  // Fetch a user by ID
  selectUser(id: number): void {
    this.userService.getUserById(id).subscribe({
      next: (data) => {
        this.selectedUser = data;
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      },
    });
  }

}
