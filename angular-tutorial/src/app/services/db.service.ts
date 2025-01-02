import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Settings, SupportInfo, User } from '../interfaces/data.interface';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}/products`);
    }

    getSettings(): Observable<Settings> {
        return this.http.get<Settings>(`${this.baseUrl}/settings`);
    }

    getSupportInfo(): Observable<SupportInfo> {
        return this.http.get<SupportInfo>(`${this.baseUrl}/supportInfo`);
    }

    getCurrentUser(): Observable<User | null> {
        return this.http.get<User | null>(`${this.baseUrl}/currentUser`);
    }
}
