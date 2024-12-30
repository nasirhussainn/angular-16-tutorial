import { Component } from '@angular/core';

@Component({
  selector: 'app-lec4-angular-directives',
  templateUrl: './lec4-angular-directives.component.html',
  styleUrls: ['./lec4-angular-directives.component.scss']
})
export class Lec4AngularDirectivesComponent {
  showMessage = true; // for *ngIf directive
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; // for *ngFor directive
  currentValue = 1; // for *ngSwitch directive

}
