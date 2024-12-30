import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tutorial';
  parentMessage: string = 'Hello from Parent Component!';

  // Method to handle message from child component
  receiveMessageFromChild(message: string) {
    alert('Message from child: ' + message);
  }
}
