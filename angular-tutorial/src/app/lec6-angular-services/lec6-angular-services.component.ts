import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-lec6-angular-services',
  templateUrl: './lec6-angular-services.component.html',
  styleUrls: ['./lec6-angular-services.component.scss']
})
export class Lec6AngularServicesComponent {
  items: string[] = [];
  newItem: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.items = this.dataService.getData();
  }

  addItem(): void {
    if (this.newItem.trim()) {
      this.dataService.addData(this.newItem);
      this.items = this.dataService.getData(); // Refresh the list
      this.newItem = ''; // Clear the input field
    }
  }

}
