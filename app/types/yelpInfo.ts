export interface Business {
    id: string;
    name: string;
    price: string;
    location: {
        address1: string;
        city: string;
        zip_code: string;
        country: string;
        state: string;
    }
    image_url: string;
    rating: number,
    review_count: number,
    phone: string;
}

export interface YelpSearchInfo {
    businesses: Business[];
    total: number;
}