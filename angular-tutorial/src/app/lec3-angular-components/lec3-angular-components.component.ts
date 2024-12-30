import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lec3-angular-components',
  templateUrl: './lec3-angular-components.component.html',
  styleUrls: ['./lec3-angular-components.component.scss']
})
export class Lec3AngularComponentsComponent implements OnInit, OnDestroy {
  
  @Input() parentMessage: string = ''; // Input binding for receiving data from parent component
  @Output() messageEvent = new EventEmitter<string>(); // Output binding to send data to parent component

  message: string = 'Hello from Lec3 Component!';
  counter: number = 0;

  // Lifecycle Hook: ngOnInit
  ngOnInit(): void {
    console.log('Lec3 Component Initialized');
    this.counter = 5; // Initial value for counter
  }

  // Lifecycle Hook: ngOnDestroy
  ngOnDestroy(): void {
    console.log('Lec3 Component Destroyed');
  }

  // Method to send a message to the parent component
  sendMessageToParent() {
    this.messageEvent.emit('Message from Lec3 Component');
  }

  // Method to increase counter value
  incrementCounter() {
    this.counter++;
  }
}
