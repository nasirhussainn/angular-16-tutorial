import { Component } from '@angular/core';

@Component({
  selector: 'app-lec5-pipes',
  templateUrl: './lec5-pipes.component.html',
  styleUrls: ['./lec5-pipes.component.scss']
})
export class Lec5PipesComponent {
  today: Date = new Date();
  price: number = 1234.56;
  pi: number = 3.14159;
  fraction: number = 0.75;

  // ng generate pipe reverse

}
