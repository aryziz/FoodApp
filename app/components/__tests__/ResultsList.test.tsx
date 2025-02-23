import React from 'react';
import { render } from '@testing-library/react-native';
import { Business } from '@/app/types/yelpInfo';
import ResultsList from '../ResultsList';

jest.mock('expo-font');

jest.mock('../ResultsDetail', () => {
    return jest.fn(() => null);
});

describe('ResultsList', () => {
    const mockBusiness: Business[] = [
        {
            id: '3IN1grCSDCXtgqk1R18y8g',
            alias: 'zarinas-restaurant-kristiansand',
            name: 'Zarinas Restaurant',
            image_url:
                'https://s3-media3.fl.yelpcdn.com/bphoto/f6-yM-kXt1LTSntMiWqTkQ/o.jpg',
            is_closed: false,
            url: 'https://www.yelp.com/biz/zarinas-restaurant-kristiansand?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow',
            review_count: 6,
            categories: [
                {
                    alias: 'pizza',
                    title: 'Pizza'
                }
            ],
            rating: 4.8,
            coordinates: {
                latitude: 58.14721,
                longitude: 8.00077
            },
            transactions: [],
            price: '$$',
            location: {
                address1: 'Dronningensgate 69',
                address2: '',
                address3: '',
                city: 'Kristiansand',
                zip_code: '4608',
                country: 'NO',
                state: '10',
                display_address: [
                    'Dronningensgate 69',
                    '4608 Kristiansand',
                    'Norway'
                ]
            },
            phone: '+4738100903',
            display_phone: '+47 38 10 09 03',
            distance: 39403.814056441
        },
        {
            id: 'FFUxAYvERwP7dkYWJMgl8w',
            alias: 'pizzabakeren-grimstad',
            name: 'Pizzabakeren',
            image_url: '',
            is_closed: false,
            url: 'https://www.yelp.com/biz/pizzabakeren-grimstad?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow',
            review_count: 0,
            categories: [
                {
                    alias: 'pizza',
                    title: 'Pizza'
                }
            ],
            rating: 0.0,
            coordinates: {
                latitude: 58.3454947006128,
                longitude: 8.58121602536228
            },
            transactions: [],
            location: {
                address1: 'Storgaten 95',
                address2: null,
                address3: null,
                city: 'Grimstad',
                zip_code: '4877',
                country: 'NO',
                state: '09',
                display_address: ['Storgaten 95', '4877 Grimstad', 'Norway']
            },
            phone: '+4737045000',
            display_phone: '+47 37 04 50 00',
            distance: 1274.1883366784552
        }
    ];

    it('renders title correctly', () => {
        const { getByText } = render(
            <ResultsList title="Top restaurants" businesses={mockBusiness} />
        );
        expect(getByText('Top restaurants')).toBeTruthy();
    });

    it('renders businesses and displays the names', async () => {
        const componentTree = render(
            <ResultsList title="Mock" businesses={mockBusiness} />
        );
        expect(await componentTree.findByTestId('business-list')).toBeTruthy();
    });
});
