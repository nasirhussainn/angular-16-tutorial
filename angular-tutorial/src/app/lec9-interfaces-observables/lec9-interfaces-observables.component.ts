import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/db.service';
import { Product, Settings, SupportInfo, User } from '../interfaces/data.interface';

@Component({
    selector: 'app-lec9-interfaces-observables',
    templateUrl: './lec9-interfaces-observables.component.html',
    styleUrls: ['./lec9-interfaces-observables.component.scss'],
})
export class Lec9InterfacesObservablesComponent implements OnInit {
    products: Product[] = [];
    settings: Settings | null = null; // Initialize with null
    supportInfo: SupportInfo | null = null; // Initialize with null
    currentUser: User | null = null;

    constructor(private dataService: DataService) {}

    ngOnInit(): void {


        this.dataService.getProducts().subscribe((data) => {
            this.products = data;
            console.log('Products:', this.products);
        });
        this.dataService.getSettings().subscribe((data) => {
            this.settings = data;
        });
        this.dataService.getSupportInfo().subscribe((data) => {
            this.supportInfo = data;
        });
        this.dataService.getCurrentUser().subscribe((data) => {
            this.currentUser = data;
        });
    }
}
