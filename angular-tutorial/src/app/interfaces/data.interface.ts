export interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags: string[];
    specifications: {
        brand: string;
        processor: string;
        ram: string;
        storage: string;
    };
    reviews: Review[] | null;
}

interface Review {
    userId: number;
    rating: number;
    comment: string;
}

export interface Settings {
    theme: string;
    notificationsEnabled: boolean;
    maxItemsPerPage: number;
}

export interface SupportInfo {
    email: string;
    phone: string;
    officeHours: {
        open: string;
        close: string;
    };
}

export interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    age?: number; // Optional property
}

// export interface language {
//     name: string;
// }